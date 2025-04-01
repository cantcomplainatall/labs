// Завдання 1: Побудова шахової дошки з 1 та 0
function chessBoard(n) {
    let board = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            board += (i + j) % 2 === 0 ? "1" : "0";
        }
        board += "\n";
    }
    console.log(board);
}


function geometricSeries() {
    let a = parseFloat(prompt("enter first element (a):"));
    let r = parseFloat(prompt("enter second  element  (r):"));
    let n = parseInt(prompt("enter number of elements (n):"));
    
    let sum = 0;
    let series = "";
    for (let i = 0; i < n; i++) {
        let term = a * Math.pow(r, i);
        sum += term;
        series += term + (i < n - 1 ? ", " : "");
    }
    
    console.log("series : ", series);
    console.log("sum: ", sum);
}


function calculator() {
    while (true) {
        let num1 = parseFloat(prompt("enter first element :"));
        let num2 = parseFloat(prompt("enter second element :"));
        let operation = prompt("enter opertaion (+, -, *, /, %) or 'exit' for exit");
        
        if (operation === "exit") {
            console.log("exit (");
            break;
        }
        
        let result;
        switch (operation) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num2 !== 0 ? num1 / num2 : "divide with zero!";
                break;
            case "%":
                result = num2 !== 0 ? num1 % num2 : "divide with zero!";
                break;
            default:
                result = "unkonwn operation";
        }
        
        console.log("result: ", result);
    }
}


chessBoard(5);
geometricSeries();
calculator();
