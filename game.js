/* DISCLAIMER: I am a very early javascript kiddie, so please pardon the use of comments.
I know the community is split in regaurds to how much comments are enough. I'm just letting 
whoever know that I am very new here and just want people to understand what I am thinking
as I am trying to learn to be more efficient with my code. Thanks for taking the time to read.
END DISCLAIMER:*/

/* Here i have placed the players starting stats within a variable called aStartingPlayerStats
with the 'a' meaning that the variable is storing an array...? maybe this is helpful maybe not,
inputs would be welcomed. I can hande the critism well. Thanks. the reasoning in my mind for 
using this is a variable is later on if the player loses the game somehow then instead of having
to rewrite all theses stats over I should be able to just call this variable and have all the 
data within it go wherever i need it to, basically starting a new game.*/
const aStartingPlayerStats = 
[ nRabbitLuck: 0,
  nHealth: 100,
  nFluffyCash: 50,
  aRabbitPouch:  []
];

/* create the buttons the player will use to navigate through the storyline by accessing the document
and calling the querySelector() with the arguments being the buttons id respectively  I have placed
the buttons within a variable labeled const buttons. My thoughts here are thinking to the future, in the
event either myself or someone else wants to add another button then they only need to do so within
the array that is wrapped inside the buttons variable. Not sure if this is the correct way to 
implement this. Just thought I would share my thinkng in concert with my code.*/
const buttons = [ 
 buttonOne = document.querySelector("#buttonOne");
 buttonTwo = document.querySelector("#buttonTwo");
 buttonThree = document.querySelector("#buttonThree");
];

const text = document.querySelector("#text");
const rabbitLuckText = document.querySelector("#rabbitLuckText");
const healthText = document.querySelector("#healthText");
const fluffyCashText = document.querySelector("#fluffyCashText");

const locations = [
  {
    name: "Binky-Bink Kingdom", /* Location 0  this is just for easy locating later on when we need
    to move the player around the imaginary world. */
    "button text": ["Hop to the Hop-on-top-shop", "Hop to meadow", "Hop to the 'Burrow Pub'"],
    /* using new arrow functions here to call the hopToLocation function instead of writing
    out each location name for every hop to location feature. I think this will help in the future
    when or if the game becomes more complex. It will save a little bit of time in the actual
    coding time I hope.*/ 
    "button functions": [() => hopToLocation(3), () => hopToLocation(1), () => hopToLocation(2)],
    /* I'm going to get in the habit of using string literals here, just in case sometime in the
    future, say if I wanted to create a new variable for something like a picture or item or 
    something that could contribute to the richness of the story then I could simple use the 
    ${} syntax for inserting that variable. Should be helpful later on in the development of 
    this funny slash slightly difficult strange text adventure. HAHA, it's always the new guy
    am I right? */

    /* I haven't figured out how i would implement a feature like this but there is something so 
    very "static" when it comes to tying the display text to a location. I would like to figure out
    a solution to maybe create another array and fill it with several texts for each location
    and then maybe assign them some number and let possibly Math.random decide whichever one
    should be displayed everytime the player returned to a location. This way the game isnt't
    presenting like a still frame, instead it should feel immersive as much as possible. futuree
    goals. lol*/ 
    text: `Welcome Back! Please accept our apologies for the some what hysterical atmosphere around
    here lately. The Prinesses missing status has all the locals in a frenzy. Please believe me when I
    tell you that the rabbits here at Binky-Bink Kingdom are some of the nicest most down-to-burrow 
    rabbits you shall ever met. Except for Lilly the lionhead, 🐰🤫 Don't tell anyone I told you
    this but, she has kind of a oversized ego. YEA she thinks because she shares the name with the likes of
    the king of the jungle, that she is somewhat entitled to things that other rabbits shouldn't be. 🐰🤫
    Not here though, we have a strong belief that all rabbits were created equal. Therefore, no one rabbit
    is higher than another. You'll get a feel for how things work here. Feel free to get familiar with
    your new surroundings. You've got the hop on top shop over there, the burrow pub over there, and over
    there you have.... well... maybe don't go over there just yet. Well gotta go flop, zip zippy zang.`
  },
  {
    name: "Meadow", // location 1
    "button text": ["Inspect shrubs", "Continue through the meadow", "Return to Kingdom"],
    "button functions": [() => hopToLocation(4), () => hopToLocation(5), () => hopToLocation(0)],
    text: `Hopping into the meadow, you are taken aback by the sheer wonder that is held within 
    this magical place. There are butterflies zig zaging about. HoneyBees are a buzz creating a delightful
    humming that plays well with the gently whistling sound of the cool summers breeze ever so gracefully
    creating an almost rythmic motion for the neverendingly tall wheat grass to dance to as they all move
    back and fourth and back again. Why didn't Zippy the harlequin rabbit want to tell you about this place?`
  },
];

/* make sure the buttons start up */
buttonOne.onclick = hopShop;
buttonTwo.onclick = hopMeadow;
buttonThree.onclick = hopBurrow;

/* Begin functions code */
function updateDisplay(location) {
const buttons = [buttonOne, buttonTwo, buttonThree];
  const buttonTexts = location["button text"];
  const buttonFunctions = location["button functions"];

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerText = buttonTexts[i];
    buttons[i].onclick = buttonFunctions[i];
  }

  text.innerText = location.text;
  fluffyCashText = fluffyCash;
  healthText = health;
}

function hopToLocation(locationIndex) {
  updateDisplay(locations[locationIndex});
}
