const protea = {
    type: "Protea",
    color: "pink",
    stemLength: 12,
    price: 15.99
}

const gardenRose = {
    type: "Garden Rose",
    color: "red",
    stemLength: 8,
    price: 5.99
}

const tulip = {
    type: "Tulip",
    color: "blue",
    stemLength: 5,
    price: 2.99
}

const hydrangea = {
    type: "Hydrangea",
    color: "yellow",
    stemLength: 7,
    price: 4.99
}

const daisy = {
    type: "Daisy",
    color: "yellow",
    stemLength: 4,
    price: 1.99
}
const sunflower = {
    type: "Sunflower",
    color: "yellow",
    stemLength: 5,
    price: 8.99
}

const birdOfParadise = {
    type: "Bird of Paradise",
    color: "red",
    stemLength: 9,
    price: 9.99
}

const magnolia = {
    type: "Magnolia",
    color: "white",
    stemLength: 4,
    price: 6.99
}

const peony = {
    type: "Peony",
    color: "red",
    stemLength: 24,
    price: 7.99
}

const wildflower = {
    type: "Wildflower",
    color: "variety",
    stemLength: 8,
    price: 1.99
}

//array that holds ALL flowers
const flowerCollection = []

//putting all of our flowers in our array
flowerCollection.push(protea)
flowerCollection.push(gardenRose)
flowerCollection.push(tulip)
flowerCollection.push(hydrangea)
flowerCollection.push(daisy)
flowerCollection.push(sunflower)
flowerCollection.push(birdOfParadise)
flowerCollection.push(magnolia)
flowerCollection.push(peony)
flowerCollection.push(wildflower)

const flowerShop = {
    name: "Nashville Software Flowers",
    mothersDay: [],
    vDay: []
}

//function that takes in a single flower and returns it as html <li>
const bouquetHTMLRepresentation = (flowerPlaceholder) => {
    return `<li>${flowerPlaceholder.type}</li>`
}

//loop through all of our flowers
for (const singleFlowerObj of flowerCollection) {
    let html = bouquetHTMLRepresentation(singleFlowerObj)
    const mothersDayUl = document.querySelector(".mothersDay")
    const vDayUl = document.querySelector(".vDay")

    //check to see if the flower's price is less than $5
    if (singleFlowerObj.price < 9) {
        //check to see if the flower meets the requirement of the mothers day bouquet
        //(yellow & less than 6in stem)
        if (singleFlowerObj.color === "yellow" && singleFlowerObj.stemLength < 6) {
            console.log("mothers day flowers:", singleFlowerObj);
            //lets put our single flower into the mother's day array
            flowerShop.mothersDay.push(singleFlowerObj)

            mothersDayUl.innerHTML += html
        }
        //check to see which flowers meet VDAY requirements (stem is more than 8 & color is pink OR red)
        else if ((singleFlowerObj.color === "red" || singleFlowerObj.color === "pink") && singleFlowerObj.stemLength > 8) {
            console.log("valentines day flowers:", singleFlowerObj);
            //lets put our single flower into the valentine's day array
            flowerShop.vDay.push(singleFlowerObj)

            vDayUl.innerHTML += html
        }
    }
}

