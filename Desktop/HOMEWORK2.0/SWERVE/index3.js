function checkUserAge() {
    var userAge = prompt ('how old are you?');
     if ( userAge < 21) {
      return('too young foo');
    } else {
      return('welcome');
    }
  }
  checkUserAge()