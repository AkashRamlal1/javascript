function fibo(n){
    var lijst = [0, 1];
    
    for (var i = 2; i < n; i++) {
      var nieuwgetal = lijst[i - 1] + lijst[i - 2];
      lijst.push(nieuwgetal);
    }
    
    console.log(lijst);
    return lijst;
  }
  
  fibo(10);