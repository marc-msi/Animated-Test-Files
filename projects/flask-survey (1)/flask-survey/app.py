from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey as survey 

RESPONSE_KEY = "responses"

app = Flask(__name__)
app.config[ 'SECRET_KEY'] = 'never-tell'
app.config[ 'DEBUG-TB-INTERCEPT-REDIRECTS'] = False

debug = DebugToolbarExtension(app)

@app.route("/")
def show_survey_start():
    """Select a survey"""
    return render_template("survey.start.html", survey=survey)

@app.route("/begin", methods=["POST"])
def start_survey():
    """Clear the session of responses"""

    session[RESPONSE_KEY] = []

    return redirect("/questions/0")

@app.route("/answer", methods=["POST"])
def handle_questions():
    """Save responses and redirect to the next question"""
    choice = request.form['answer']
    #get the response choice
    responses = session[RESPONSE_KEY]
    responses.append(choice)
    session[RESPONSE_KEY]= responses

    if(len(responses) == len(survey.questions)):
        #They've answered all the questions
        return redirect("/complete")
    else:
        return redirect(f"/questions/{len(responses)}")


@app.route("/questions/<int:qid>")
def show_questions(qid):
    """Displays the current question"""
    responses = session.get(RESPONSE_KEY)

    if (responses is None):
        #trying to access the page too quickly
        return redirect("/")
    
    if (len(responses) == len(survey.questions)):
        #They've answered all the questions
        return redirect("/complete")
    
    if(len(responses) != qid):
        #trying to access questions out of order
        flash(f"Invalid question id: {qid}.")
        return redirect(f"/questions/{len(responses)}")
    
    question = survey.questions[qid]
    return render_template(
        "questions.html", question_num=qid, question = question)

@app.route("/complete")
def complete():
    """Survey completed, Show completion page"""
    return render_template("completion.html")