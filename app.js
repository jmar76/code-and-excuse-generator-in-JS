
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ['ate', ' peed', ' crushed', ' broke'];
let what = [" my homework", " the keys", " the car"];
let when = [" before the class", " rigth in time", " when i finished", " during my lunch", " while i was praying"];

function getRandomElement(myArray) {

    return (myArray[Math.floor(Math.random() * myArray.length)]);
}
function onLoad() {

    var a = getRandomElement(who)
    var b = getRandomElement(action)
    var c = getRandomElement(what)
    var d = getRandomElement(when)
    let str = a + b + c + d;
    return str;
}