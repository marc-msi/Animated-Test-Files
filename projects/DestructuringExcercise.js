//Object Destructuring 1//
//console.log(numPlanets) returns 8//
//console..log(yearNeptuneDiscovered) returns 1846//

//Object Destructuring 2//
// console.log(discoveryYears) returns {yearNeptuneDiscovered:1846,yearMarsDiscovered: 1659 }//

//Object Destructuring 3//
//getUserData({firstName: "Alejandro", favoriteColor: "purple"}) will return "Your name is Alejandro and you like purple" //
//getUserData({firstName: "Melissa"}) will return "Your name is Melissa and you like green"
// getUserData({}) will return "Your name is undefined and your like green"

//Array destructuring 1 //
//console.log(first) will return Maya // 
//console.log(second) will return Marisa // 
//console.log(third) will return Chi

//Array destructuring 2 //
//console.log(raindrops) will return "raindrops on roses"
//console.log(whiskers) will return "whiskers on kittens"
//console.log(aFewOfMyFavoriteThings) will return ["Bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings"]

//Array destructuring 3//
//console.log(numbers) should return [10,30,20]

//ES2015 Object Destructuring
//const {a,b} = obj.numbers

//ES2015 One-line array swap with destructuring
//[arr[0], arr[1]] = [arr[1], arr[0]] //

//raceResults //
const raceResults=([first, second, third, ...rest])=>({first, second, third, rest});
