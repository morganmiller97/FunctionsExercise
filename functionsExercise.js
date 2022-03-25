// 1
function fozzieBear(){
    console.log(`Wocka Wocka!`);
}
fozzieBear();

// 2
function beaker(speak){
    console.log(`${speak}`);
}
beaker(`Meep `.repeat(4));

// 3
function muppetShow(a, b){
    if (a === `Muppet` && b === `Show`){
    console.log(`It's time to play the music. It's time to light the lights.`);
    }
}
muppetShow(`Muppet`, `Show`);

// 4
function kermit(){
    return `Kermit the Frog`;
}

let kermit1 = kermit();
console.log(kermit());

// 5
function muppetShowSeasons(seasons){
    if (seasons === 5){
        return true;
    }
    return false;
}

console.log(muppetShowSeasons(5))

// 6
const manOrMuppet = function(){
    console.log(`Am I a man or am I a Muppet?`);
}
manOrMuppet();

// 7
rainbowConnection = () => console.log(`Someday we'll find it. The Rainbow Connection. The Lovers, the dreamers and me`);

// 8
// No

// 9
// Yes

// Bonus
// 10a
const newMuppetMovies = [
    `The Muppets`,
    `Muppets Most Wanted`
];

// 10b
const uppers = newMuppetMovies.map(function(x){
    return x.toUpperCase();
});

console.log(uppers);

// 11a
const oldMuppetMovies = [
    "The Muppet Movies", 
    "The Muppets Take Manhattan",
    "Thr Great Muppet Caper",
    "The Muppet Christmas Carol",
    "Muppet Treasure Island",
    "Muppets From Space"
];

// 11b
const a = oldMuppetMovies.filter(twoMovies => twoMovies.length === 22);

console.log(a);

// 12a
const charactersOne = [
    `Statler`,
    `Waldorf`
];

// 12b
const charactersTwo = [
    "The Swedish Chef",
    "Animal",
    "Rowlf"
];

// 12c
randomMuppet = (characters) => [
    console.log(`${characters[Math.floor(Math.random() * characters.length)]}`)
];

// 12d
randomMuppet(charactersOne);
randomMuppet(charactersTwo);
