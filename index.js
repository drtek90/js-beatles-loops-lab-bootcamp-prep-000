function theBeatlesPlay(music, instrum){
  var array = [];
  for (var i=0;i<music.length;i++){
  array = [...array,`${music[i]} plays ${instrum[i]}`];
  }
  return array
}

function johnLennonFacts(array){
  var i=0
  while (i<array.length){
    array[i]=array[i]+"!!!";
    i++;
  }
  return array
}

function iLoveTheBeatles(n){
  var array=[];
  do {
    array = [...array,'I love the Beatles!'];
    n++;
  }
    while(n<15);
    return array;
}