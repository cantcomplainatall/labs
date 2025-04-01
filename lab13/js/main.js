function solve() {
    function findMax(a, b) {
      return a > b ? a : b;
    }
  
    const subtract = (a, b) => a - b;
  
    const sqrt = (n) => Math.sqrt(n);
  
    function geometricProgression(n, a, r) {
      if (r === 1) {
        return n * a;
      }
      return a * (1 - Math.pow(r, n)) / (1 - r);
    }
  
    function createDivider(divisor) {
      return (dividend) => dividend / divisor;
    }
  
    function applyOperation(a, b, func) {
      return func(a, b);
    }
  
    function processSet(set, callback) {
      set.forEach(callback);
    }
  
    
    console.log(findMax(5, 10)); 
  

    console.log(subtract(10, 5)); 
  
   
    console.log(sqrt(16));
  
 
    console.log(geometricProgression(5, 1, 2)); 
  
  
    const divideBy2 = createDivider(2);
    console.log(divideBy2(10)); 
  
  
    console.log(applyOperation(5, 10, (a, b) => a + b)); 
    console.log(applyOperation(5, 10, (a, b) => a * b)); 
  

    const set = new Set([1, 2, 3, 4]);
    processSet(set, (num) => console.log(num)); 
  }
  
  solve();
  