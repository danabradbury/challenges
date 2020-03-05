//write a no argument function that reorders the list items,
//  I don't care what the new order is, as long as it chnages, 
// and the html is still "good", meaning you still have a UL tag enclosing 3 LI tags (inner html!)


/* grabbed and set values */

function hitIt() {

    let itemsOne = document.getElementById('itemOne')
    let itemOneValue = itemOne.Value
    console.log(itemsOne)

    let itemTwo = document.getElementById('itemTwo')
    let itemTwoValue = itemTwo.Value
    console.log(itemTwo)

    let itemThree = document.getElementById('itemThree')
    let itemThreeValue = itemThree.Value
    console.log(itemThree)

    /* combinaed all items */
    let items = [itemOne, itemTwo, itemThree]
    console.log(items)

    /* grabbed spacific item */
    let grabItem = items.length
    console.log(grabItem)


    takedown = numberToChoice(randomItem());
    console.log('dana', takedown)

    function numberToChoice(number) {
        return ['douible leg takedown', 'single leg takedown', 'sprawl'][number];
    }
    
    function randomItem() {
        return Math.floor(Math.random() * 3);
    }
}