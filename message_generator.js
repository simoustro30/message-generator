const randomMessage = [];
const date = new Date();
const hour = date.getHours();

const morningMessages = [' Have a great day at work.', 'Enjoy the day ahead of you.', ' Stay focus during this day.', ' In these times you have to be an optimist to open your eyes when you awake in the morning.',' Your coffee black and my mornings bright.'];
const afternoonMessages = [' You are as bright as the afternoon sun',' The day starts to slow down. Enjoy yourself!',' Half of the day is over, enjoy the rest of the day!',' There will be a beautiful sunset after you have a good afternoon!'];
const eveningMessages = [' I hope you had a good and productive day.', ' No matter how bad your day has been, the beauty of the setting sun will make everything serene.', ' May the setting sun take down all your sufferings with it and make you hopeful for a new day.'];

const poemsForDay = [
    {
    poem: `To keep your marriage brimming
     With love in the loving cup,
     Whenever you’re wrong, admit it;
     Whenever you’re right, shut up.`
    },
    {
    poem: `When I was One,
    I had just begun.
    When I was Two,
    I was nearly new.
    When I was Three
    I was hardly me.
    When I was Four,
    I was not much more.
    When I was Five,
    I was just alive.
    But now I am Six,
    I’m as clever as clever,
    So I think I’ll be six now for ever and ever.`
    },
    {
    poem: `The rose is a rose,
    And was always a rose.
    But the theory now goes
    That the apple’s a rose,
    And the pear is, and so’s
    The plum, I suppose.
    The dear only knows
    What will next prove a rose.
    You, of course, are a rose –
    But were always a rose.`
    },
    {
    poem: `When you come to me, unbidden,
    Beckoning me
    To long-ago rooms,
    Where memories lie.
    
    Offering me, as to a child, an attic,
    Gatherings of days too few.
    Baubles of stolen kisses.
    Trinkets of borrowed loves.
    Trunks of secret words,
    
    I CRY.`
    },
    {
    poem: `When, in disgrace with fortune and men’s eyes,
    I all alone beweep my outcast state,
    And trouble deaf heaven with my bootless cries,
    And look upon myself and curse my fate,
    Wishing me like to one more rich in hope,
    Featured like him, like him with friends possessed,
    Desiring this man’s art and that man’s scope
    With what I most enjoy contented least;
    Yet in these thoughts myself almost despising,
    Haply I think on thee, and then my state,
    (Like to the lark at break of day arising
    From sullen earth) sings hymns at heaven’s gate;
    For thy sweet love remembered such wealth brings
    That then I scorn to change my state with kings.`
    }
]
const greeting = (hour) => {
    if(hour < 12 && hour >= 5){
        randomMessage.push("Good Mornig");
        messageDisplay(morningMessages);
    }
    else if(hour <= 18 && hour > 12){
        randomMessage.push('Good Afternoon');
        messageDisplay(afternoonMessages);
    }else{
        randomMessage.push('Good Evening')
        messageDisplay(eveningMessages);
    }
};

const messageDisplay = (messages) =>{
    const randomSentence = Math.floor(Math.random()*messages.length);
    const selectedMessage = messages[randomSentence];
    randomMessage.push(selectedMessage);
};

const finalMessage = (messageArr, randomPoem) => {
    const poemNum = Math.floor(Math.random()*randomPoem.length);
    let stringMessage = messageArr.toString();
    let poem = randomPoem[poemNum].poem
    return `${stringMessage} Your poem for the days is: 
    ${poem}`

}

greeting(hour);
console.log(finalMessage(randomMessage, poemsForDay));
