//write a no argument function that reorders the list items,
//  I don't care what the new order is, as long as it chnages,
// and the html is still "good", meaning you still have a UL tag enclosing 3 LI tags (inner html!)


/* grabbed and set values */

/* using functions inside a function is perfectly legal, but you should only do it if you have a reason,
   in this case there was no good reason that I could see, so I moved them outside your main funciton */
function numberToChoice(grabItem) {

    // this funciton is not doing what yo think it is, or not what you intended.
    // I doubt you really need this, you were right to combine the items, and get the length,
    // then you should pass the length into your randomItem function, to get a random number between 0 and the length
    return [grabItem];
}

function randomItem() {
    return Math.floor(Math.random() * 3);

}

function hitIt() {


    /* don't get sloppy with missing semi colons, chrome is forgiving,
      it will usually be able to figure out where the statements end,
      but it is bad practice to exclude them.  we also need to configure
      a linting tool for your vscode, so you get warned abotu these violations in real time
    */

    /* use 'let' when the value of a variable will change, use 'const' when the value is fixed. */

    const itemsOne = document.getElementById('itemOne').innerHTML;
    console.log(itemsOne);

    const itemTwo = document.getElementById('itemTwo').innerHTML;
    console.log(itemTwo);

    const itemThree = document.getElementById('itemThree').innerHTML;
    console.log(itemThree);

    /* combinaed all items */
    const items =[itemsOne, itemTwo, itemThree];
    console.log(items);

    /* grabbed spacific item
        This variable is really just a count of how many itrms are in the 'items' collection.
        So at a minimumm, rename it to something like count, length, total, etc.
        But also, you need to realize you are actually not using this variable for anything
    */
    const grabItem = items.length;
    console.log(grabItem);

    const takedown = numberToChoice(randomItem()); /* don't get sloppy with variable declareations, use var, let, or const */
    console.log('dana', takedown);
}

