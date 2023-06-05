
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const topText = document.querySelector('#top-text').value;
  const bottomText = document.querySelector('#bottom-text').value;
  const imageUrl = document.querySelector('#image-url').value;
  generateMeme(topText, bottomText, imageUrl);
  form.reset(); 
});


function generateMeme(topText, bottomText, imageUrl) {
    const memeContainer = document.createElement('div');
    memeContainer.classList.add('meme-container');
  
    const memeImage = document.createElement('img');
    memeImage.src = imageUrl;
    memeContainer.appendChild(memeImage);
  
    const memeTopText = document.createElement('div');
    memeTopText.classList.add('meme-text', 'top');
    memeTopText.innerText = topText;
    memeContainer.appendChild(memeTopText);
  
    const memeBottomText = document.createElement('div');
    memeBottomText.classList.add('meme-text', 'bottom');
    memeBottomText.innerText = bottomText;
    memeContainer.appendChild(memeBottomText);
  
    const memeDeleteButton = document.createElement('button');
    memeDeleteButton.classList.add('delete-button');
    memeDeleteButton.innerText = 'X';
    memeDeleteButton.addEventListener('click', function() {
      memeContainer.remove();
    });
    memeContainer.appendChild(memeDeleteButton);
  
    document.body.appendChild(memeContainer);
  }

  