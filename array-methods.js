const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const planetEl = document.getElementById("planets")
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetNames = planets.forEach(planet => {
 `
 ${planet}
 `
    planetEl.innerHTML += " " + planet
})







/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const planetCapitalized = planets.map(planet => {
    `${planet.charAt(0).toUpperCase() + planet.slice(1)}`
   /*  console.log(planet.charAt(0).toUpperCase() + planet.slice(1)) */
})




/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const planetE = planets.filter(planet => {
    if(planet.includes('e')) {
        return planet 
    } else {
        console.log(`${planet} does not have an e`)
    }
})
console.log(planetE)