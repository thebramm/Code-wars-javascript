// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// My answer
function lovefunc(flower1, flower2){
  tLove = flower1 % 2
  sLove = flower2 % 2
  if(tLove === 1 && sLove === 0){
    return true
  }else if(tLove === 0 && sLove === 1){
    return true
  }else{
    return false
  }
}

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 === 1
}

