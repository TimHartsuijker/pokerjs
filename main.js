// global variables
let shuffledCards;


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
    for(let i = 0; i<= 1; i++)
    {
        hand[i] = list[i];
    }
    console.log("your hand is:")
    for(let i = 0; i <= 1; i++)
    {
        console.log(hand[i]);
    }
    return(hand);
}

function TableCards()
{
    // select the 5 first cards to put on the table, 3 are show, 2 are unknown. after every round, reveal one card.
}

function round()
{
    //  is used to keep track of which round it is
    let round = 1;

    if(round == 1)
    {
        console.log("table Cards are:");
        for(let i = 0; i <= 4; i++)
        {
            console.log(shuffledCards[i]);
        }
    }

}

function game()
{
    shuffledCards = shuffle(Deck());
    CreateHand(shuffledCards);

    round();
    let players = [];

}

game();