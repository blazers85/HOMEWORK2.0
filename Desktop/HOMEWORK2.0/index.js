var bands = [2,2,2,2,2,2]
var bands = [12]

function sum(number){
  var result = 0
  for (var i = 0; i < number.length; i++){
    result += number[i]
  }
  if (number == 0){
    return 'blank array'
  }else{
    return result
  }
}

sum(bands)



function checkUserAge() {
    var userAge = prompt ('how old are you?');
     if ( userAge < 21) {
      return('too young foo');
    } else {
      return('welcome');
    }
  }
  checkUserAge()