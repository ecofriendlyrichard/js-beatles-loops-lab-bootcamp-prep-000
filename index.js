// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians,instruments){
  var sentences=[];
  var i=0;
  for(i=0;i<musicians.length;i++){
    sentences.push((musicians[i]+" plays the "+instruments[i]));
  }
}

theBeatlesPlay(musicians,instruments);