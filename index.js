function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

logShout(string){
  console.log(string.toUpperCase());
}

logWhisper(string){
  console.log(string.toLowerCase());
}

sayHiToGrandma(string){
  if (string === string.toLowerCase()){
    return "I can't hear you!"
  }
}