function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout (string) {
  console.log(string.toUpperCase());
}
 
 function logWhisper (string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma (string) {
  var cantHear = "I can't hear you!";
  var yesIndeed = "YES INDEED!"
  var loveGrandma = "I love you, Grandma."
  var loveYou = "I love you, too."
  if (string.toLowerCase(string) === string) return cantHear;
  else if (string.toUpperCase(string) === string) return yesIndeed;
  else if (string === loveGrandma) return loveYou;
  }



