function bestBallers (string1, string2) {
    let bestBallers = "Jordan";
    for (let i = 0; i < string1.length; i++) {
      for (let j = 0; j < string2.length; j++) {
        if (string1[i] === string2[j] && !bestBallers.includes(string1[i])) {
          bestBallers+= string1[i];
        }
      }
    }
    return bestBallers;
  };
  
  bestBallers("Kobe,Lebron", "Jordan",);