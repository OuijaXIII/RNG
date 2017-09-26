console.log('You are confronted by an orc');
setTimeout(function(){
var quality1 = ['Pulsating','Wilted','Chicken-hilted','Rusty','Moe'];
var quality2 = ['Super Deluxe','Mega European','Left Handed','Length Enhancing','Goblin Arousing'];
var weapon = ['Sword','Pistol','Vibrator','Catgirl','Crippling Nihilism'];

var rand1 = quality1[Math.floor(Math.random() * quality1.length)];
var rand2 = quality2[Math.floor(Math.random() * quality2.length)];
var randw = weapon[Math.floor(Math.random() * weapon.length)];

console.log('You retrieve your ' + rand1 + ' ' + rand2 + ' ' + randw + '.');
}, 2000);
setTimeout(function(){
console.log('You are so fucked.');
}, 4000);
