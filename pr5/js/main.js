function multiplyMatrices(A, B) {
    const m = A.length;    
    const n = A[0].length;
    const p = B[0].length; 
  
    if (n !== B.length) {
      console.error('invalid length of matrixes!');
      return null;
    }
  
    const C = new Array(m);
    for (let i = 0; i < m; i++) {
      C[i] = new Array(p).fill(0);
    }
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < p; j++) {
        for (let k = 0; k < n; k++) {
          C[i][j] += A[i][k] * B[k][j];
        }
      }
    }
  
    return C;
  }
  
  const A = [
    [2, 4, 6],
    [1, 3, 5],
    [7, 8, 9]
  ];
  
  const B = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
  
  const result = multiplyMatrices(A, B);
  
  if (result) {
    result.forEach(row => console.log(row.join(' ')));
  }