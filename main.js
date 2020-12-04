//prices of ingredients 
    //prices of dough
    const plain = 10;
    const wheat = 15;
    
    //prices of sauces
    const red = 5;
    const white = 5;

    //prices of cheeses
    const mozz = 15;
    const cheddar = 15;
    const parm = 20;

    //prices of toppings
    const pepperoni = 20;
    const chicken = 20;
    const pine = 15;
    const tomato = 10;
    const mush = 20;
    const greenPep = 15;
    const olive = 15;

//total cost of pizza 
let totalPrice;

//calculating total price
    //ensuring only wheat or plain dough is chosen
    function plainDough(totalPrice){
        if (totalPrice == 0) {
            totalPrice = plain + totalPrice;
        } else {
            totalPrice = wheat - totalPrice;
            totalPrice = plain + totalPrice;
        }
    }

    function wheatDough(totalPrice){
        if (totalPrice == 0) {
            totalPrice = wheat + totalPrice;
        } else {
            totalPrice = plain - totalPrice;
            totalPrice = wheat + totalPrice; 
        }
    }

    //functions adding sauces
    function redSauce(totalPrice)
    {
        totalPrice = red + totalPrice;
    }

    function whiteSauce(totalPrice)
    {
        totalPrice = white + totalPrice;
    }

    //functions adding cheeses
    function mozzCheese(totalPrice)
    {
        totalPrice = mozz + totalPrice;
    }

    function cheddarCheese(totalPrice)
    {
        totalPrice = cheddar + totalPrice;
    }

    function parmCheese(totalPrice)
    {
        totalPrice = parm + totalPrice;
    }

    //functions adding toppings
    function pepTopping(totalPrice)
    {
        totalPrice = pepperoni + totalPrice;
    }

    function chickenTopping(totalPrice)
    {
        totalPrice = chicken + totalPrice;
    }

    function pineTopping(totalPrice)
    {
        totalPrice = pine + totalPrice;
    }

    function chickenTopping(totalPrice)
    {
        totalPrice = chicken + totalPrice;
    }

    function tomTopping(totalPrice)
    {
        totalPrice = tomato + totalPrice;
    }

    function mushTopping(totalPrice)
    {
        totalPrice = mush + totalPrice;
    }

    function chickenTopping(totalPrice)
    {
        totalPrice = chicken + totalPrice;
    }

    function greenTopping(totalPrice)
    {
        totalPrice = greenPep + totalPrice;
    }

    function oliveTopping(totalPrice)
    {
        totalPrice = olive + totalPrice;
    }

    //Birthday discount
    function birthday(totalPrice)
    {
        totalPrice = totalPrice - 5;
    }
    