//Variable declarations
const country = "Brasil";
const continent = "América do Sul";
let population = 210;
const finlandPopulation = 6;
const AVERAGEPOPULATION = 33;
const isIsland = false;
let language = "Português";

console.log(country);
console.log(continent);
console.log(population);

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

//Basic Operations and comparators

let halfPopulation = population / 2;

console.log('Half of the country is :' + halfPopulation + ' Millions');

    if (population > finlandPopulation){
    console.log("The population of your country are higher");
    }
    else{
    console.log("The population of your country are lower");
    }

    if (population > AVERAGEPOPULATION){
        console.log("The population of your country are higher than the average population");
    }
    else{
    console.log("The population of your country are lower than the average population");
    }

    let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

