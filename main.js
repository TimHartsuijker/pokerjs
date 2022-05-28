// global variables
let shuffledCards;
let cardsUsed = 0;
let playercount = 0;
let playercreds = [];
let credsused = [];


// check if x is in between y and z
const between = (x, min, max) =>
{
    return x >= min && x <= max;
}

// makes the deck
function Deck()
{
    // empty array for the cards to go into
    let cards = [];
    // all the possible card values
    let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
    // filling the array
    for(let i = 0; i <= 51; i++)
    {
        if(between(i, 0, 12))
        {
            cards[i] = values[i]+' of clubs';
        }
        else if(between(i, 13, 25))
        {
            cards[i] = values[i-13]+' of diamonds';
        }
        else if(between(i, 26, 38))
        {
            cards[i] = values[i-26]+' of hearts';
        }
        else if(between(i, 39, 52))
        {
            cards[i] = values[i-39]+' of spades';
        }
    }
    // returns the final array
    return(cards);
}

// randomly rearranges the array
function shuffle(array)
{
    array.sort(() => Math.random() - 0.5);
    return(array);
}

function CreateHand(list)
{
    let hand = [];
    // take the first two cards of the deck and put them in your hand
    for(let i = cardsUsed; i<= cardsUsed+1; i++)
    {
        hand[i] = list[i];
    }
    console.log("your hand is:")
    for(let i = cardsUsed; i <= cardsUsed+1; i++)
    {
        console.log(hand[i]);
    }
    cardsUsed += 2;
    return(hand);
}

function TableCards()
{
    console.log("table Cards are:");
    for(let i = cardsUsed; i < cardsUsed+5; i++)
    {
        console.log(shuffledCards[i]);
    }
}

function createPlayers()
{
    // ask how many people are playing
    // return how many players there are
}

function Round()
{


    // create a hand for each player


    TableCards();


    // let people put in chips
    //

}

function game()
{
    shuffledCards = shuffle(Deck());
    console.log(shuffledCards);
    CreateHand(shuffledCards);

    Round();
    let round = 1;

    let players = [];

}

game();