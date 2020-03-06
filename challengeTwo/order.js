//write a no argument function that reorders the list items,
//  I don't care what the new order is, as long as it chnages, 
// and the html is still "good", meaning you still have a UL tag enclosing 3 LI tags (inner html!)


/* grabbed and set values */


function hitIt() {


    let itemsOne = document.getElementById('itemOne').innerHTML
    console.log(itemsOne)

    let itemTwo = document.getElementById('itemTwo').innerHTML
    console.log(itemTwo)

    let itemThree = document.getElementById('itemThree').innerHTML
    console.log(itemThree)

    /* combinaed all items */
    let items =[itemsOne, itemTwo, itemThree]
    console.log(items)

    /* grabbed spacific item */
    let grabItem = items.length
    console.log(grabItem)


    takedown = numberToChoice(randomItem());
    console.log('dana', takedown)

    function numberToChoice(grabItem) {
        return [grabItem];
    }

    function randomItem() {
        return Math.floor(Math.random() * 3);

    }


    
}

