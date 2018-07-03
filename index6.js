var lyrics = "WUBHOWWUBDOWUBWUBYOUWUBWANTWUBITWUBBYWUB2PACWUB"

function songDecoder(song){
  var splitLyrics = song.split("WUB");
  
  var result = "";
  for(var i = 0; i < splitLyrics.length; i++){
    if(splitLyrics[i].length){
    result += splitLyrics[i] + " ";
    }
  }
  return result.trim();
}

songDecoder(lyrics);