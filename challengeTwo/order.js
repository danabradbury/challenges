//write a no argument function that reorders the list items,
//  I don't care what the new order is, as long as it chnages,
// and the html is still "good", meaning you still have a UL tag enclosing 3 LI tags (inner html!)

function hitIt() {
    const itemOne = document.getElementById('itemOne');
    const itemTwo = document.getElementById('itemTwo');
    const itemThree = document.getElementById('itemThree');

    const items = [itemOne, itemTwo, itemThree];

    const takedown = items[randomItem()];


function randomItem() {
    return Math.floor(Math.random() * 3);

}

    const unOrderedList = document.getElementById('justAnUnorderedList');
    unOrderedList.appendChild(takedown);
}