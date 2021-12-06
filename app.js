//#region
// DATA TYPES

// PRIMITIVE (VALUE) / NON-PRIMITIVE (REFERENCE)
// PRIMITIVE (VALUE): NUMBERS, BOOLEAN, STRING
// NON-PRIMITIVE (REFERENCE): OBJECT, FUNCTION, ARRAY


// STRINGS
// DEFINED BY: '', "", ``
let greet = 'Hello'
let group = 'World'
// JOINING STRINGS (INTERPOLATION, CONCATENATION)
let greetingConcat = greet + ' ' + group
// EVERYTHING between the ${ _____ } is treated as javascript
let greetingInterpolate = `${greet} ${group}: ${3 + 3}`


// NUMBERS
// OPERATORS +,-,/,*,%
// modify/reassign varaible with '='
// +=, -=, /=, *=, %=, ++, --

// BOOLEANS
// TRUE/FAlSE: ==, ===, >, >=, <, <= (&& and, || or)
// TRUTHY, FALSY
// INVERT BOOL VALUE WITH ! (NOT, BANG)

//#endregion

// CODE SAYS....


//#region PHASE 1

// function cow() {
//   console.log('moo')
//   // innerText is just string contents and is treated as a string
//   // innerHTML is treated as HTML you (can add tags)
//   document.getElementById('phrase').innerText = "The COW Says MOO"
//   document.getElementById('image').innerHTML = '<img class="animal-image" src="cow.jpg" alt="cow" title="cow">'
// }

// function duck() {
//   console.log('quack')
//   // innerText is just string contents and is treated as a string
//   // innerHTML is treated as HTML you (can add tags)
//   document.getElementById('phrase').innerText = "The DUCK Says QUACK"
//   document.getElementById('image').innerHTML = '<img class="animal-image" src="duck.jpg" alt="duck" title="duck">'
// }

//#endregion


const animals = {
  cow: {
    name: 'cow',
    sound: 'MOOOOOOO',
    image: '<img class="animal-image" src="cow.jpg" alt="cow" title="cow">'
  },
  duck: {
    name: 'duck',
    sound: 'QUACK',
    image: '<img class="animal-image" src="duck.jpg" alt="duck" title="duck">'
  },
  sheep: {
    name: 'sheep',
    sound: 'BAA',
    image: '<img class="animal-image" src="sheep.jpg" alt="sheep" title="sheep">'
  }
}

// DOT NOTATION (drilling through an object with known properties)
// animals.cow.sound
// animals.duck.sound

// function speak(animalType) {
//   if (animalType == 'cow') {
//     document.getElementById('phrase').innerText = `The ${animals.cow.name} Says  ${animals.cow.sound}`
//     document.getElementById('image').innerHTML = animals.cow.image
//   }
//   if (animalType == 'duck') {
//     document.getElementById('phrase').innerText = `The ${animals.duck.name} Says  ${animals.duck.sound}`
//     document.getElementById('image').innerHTML = animals.duck.image
//   }
// }

// BRACKET NOTATION (accessing properties on an object using a variable)
// animals[animalType].sound

function speak(animalType) {
  // document.getElementById('phrase').innerText = `The ${animals[animalType].name} Says  ${animals[animalType].sound}`
  document.getElementById('name').innerText = animals[animalType].name
  document.getElementById('sound').innerText = animals[animalType].sound
  document.getElementById('image').innerHTML = animals[animalType].image
}


function random() {
  debugger
  // get a random animal
  // Get the properties of an object
  let names = Object.keys(animals)
  // get a random index from the array
  let name = names[Math.floor(Math.random() * names.length)]
  // call speak
  speak(name)
}