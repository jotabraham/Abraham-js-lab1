const fullName = "John Abraham";
let age = 29;
const birthday = "December 11";
const detroitGC = false;
let lifeEvents = [
  "I was born in Detroit, Michigan.",
  "I toured China with a skateboard team in 2013.",
  "I graduated from Kuyper college in 2018.",
  "My wife and I got married in Glacier Nat. Park in 2018. It was dope.",
];

if (detroitGC) {
  console.log(
    `My name is ${fullName} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`
  );
} else {
  console.log(
    `My name is ${fullName} and I am a student at Grand Circus remotely in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber != 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `${randomNumber} === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
