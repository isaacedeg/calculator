let display1 = "";
let operator = "";
let arr = [];
let after;
let before;
let add;
let string = "";
let numb = "";
let divid;
let multipl;
let minus;
let continu;
let answer = undefined;
function player(num) {
    if(arr.length == 1){
        arr = [];
        display1 = "";
        document.getElementById("makeup").innerHTML = "";
        document.getElementById("takeover").innerText = "";
    }
    if(num === '.' && /\./.test(display1)){
        return;
    }
    display1 += num;
    document.getElementById("makeup").innerHTML = display1;
    document.getElementById("takeover").innerText += num;
    operator = "";
}
function sign(par) {
        if(/\+/.test(operator) && par === "+"){
            return;
        }    
        if(/\*/.test(operator) && par === "*"){
            return;
        }
        if(/\//.test(operator) && par === "/"){
            return;
        }
        if (display1 != "") {
            arr.push(Number(display1));
        }
        if(arr.length === 1){
            document.getElementById("takeover").innerHTML = arr[0];
        }

        operator += par;
        arr.push(par);
        display1 = "";
        if (operator.length <= 2){
            document.getElementById("makeup").innerHTML = par;
            document.getElementById("takeover").innerHTML += par;
        }
        if (operator.length > 2){
            arr.splice(-1);
            document.getElementById("takeover").innerHTML = arr.join("");
            operator = operator.slice(0, -1);
        }
        
}
function addition() {
    answer = arr.indexOf("+");
    continu = answer + 2;
    after = answer + 1;
    before = answer - 1;
    previous = answer - 2;
    if(arr[after] === "-" && answer > -1 && arr[before] != "-"){
        add = arr[before] - arr[continu];
        arr.splice(before, 4, add);
    } else if(arr[before] === "-" && answer > -1 && arr[answer] == "+"){
        add = arr[previous] - arr[after];
        arr.splice(previous, 4, add);
    }else if (answer > -1 && arr[after] != "-" && arr[before] != "-") {
        add = arr[before] + arr[after];
        arr.splice(before, 3, add);
    }
}
function subtraction() {
    answer = arr.indexOf("-");
    continu = answer + 2;
    after = answer + 1;
    before = answer - 1;
    if(arr[after] === "-" && answer > -1){
        minus = arr[before] + arr[continu];
        arr.splice(before, 4, minus);
    } else if (answer > -1 && arr[after] !== "-") {
        minus = arr[before] - arr[after];
        arr.splice(before, 3, minus);
    }

}
function multiply() {
    answer = arr.indexOf("*");
    continu = answer + 2;
    after = answer + 1;
    before = answer - 1;
    previous = answer - 2;
    if(arr[after] == "-" && answer > -1 && arr[before] != "-"){
        multipl = arr[before] * - arr[continu];
        arr.splice(before, 4, multipl);
    } else if(arr[before] === "-" && answer > -1 && arr[answer] == "*"){
        arr = [];
        arr[0] = "SYNTAX ERROR";
    }else if(arr[before] === "+" && answer > -1 && arr[answer] == "*"){
        arr = [];
        arr[0] = "SYNTAX ERROR";
    }else if(answer > -1 && arr[after] != "-" && arr[after] != "+" && arr[before] != "-") {
        multipl = arr[before] * arr[after];
        arr.splice(before, 3, multipl);
    } else if(arr[after] == "+" && answer > -1 && arr[before] != "-"){
        multipl = arr[before] * arr[continu];
        arr.splice(before, 4, multipl);
    }
}
function divide() {
    answer = arr.indexOf("/");
    continu = answer + 2;
    after = answer + 1;
    before = answer - 1;
    previous = answer - 2;
    if(arr[after] == "-" && answer > -1){
        divid = arr[before] / - arr[continu];
        arr.splice(before, 4, divid);
    }else if(arr[before] === "+" && answer > -1 && arr[answer] == "/"){
        arr = [];
        arr[0] = "SYNTAX ERROR";
    }else if(arr[before] === "*" && answer > -1 && arr[answer] == "/"){
        arr = [];
        arr[0] = "SYNTAX ERROR";
    } else if(arr[before] === "-" && answer > -1 && arr[answer] == "/"){
        arr = [];
        arr[0] = "SYNTAX ERROR";
    }else if(answer > -1 && arr[after] == "*"){
        arr = [];
        arr[0] = "SYNTAX ERROR";
    }else if(answer > -1 && arr[after] == "+"){
        arr = [];
        arr[0] = "SYNTAX ERROR";
    }else if (answer > -1 && arr[after] != "-" && arr[after] != "*" && arr[after] != "+" && arr[before] != "*" && arr[before] != "-" && arr[before] != "+") {
        divid = arr[before] / arr[after];
        arr.splice(before, 3, divid);
    }
}
function result() {
    arr.push(Number(display1));
    while(arr.indexOf("/") > -1) {
        divide();
    }  
    while(arr.indexOf("*") > -1) {
        multiply();
    } 
    while(arr.indexOf("+") > -1) {
        addition();
    }
    while(arr.indexOf("-") > -1) {
        subtraction();
    } 
    document.getElementById("makeup").innerHTML = arr[0];
    let cal = arr[0];
    if(/\.[0-9]+/.test(arr[0])){
       document.getElementById("makeup").innerHTML = cal.toFixed(2);
    }
    arr.pop();
    arr.unshift(cal);
    display1 = "";
}
function ring(tin) {
    document.getElementById("takeover").innerHTML = tin;
    document.getElementById("makeup").innerHTML = tin;
    display1 = "";
    arr = [];
    operator = "";
}

function getOutput() {
    if(display1 != ""){
        display1 = display1.slice(0, -1);
        document.getElementById("makeup").innerHTML = display1;
        let str = document.getElementById("takeover").innerText;
        document.getElementById("takeover").innerText = str.slice(0, -1);
    } else{
        if(display1 == ""){
            if(arr.slice(-1)[0] == '+' || arr.slice(-1)[0] == '-' || arr.slice(-1)[0] == '*' || arr.slice(-1)[0] == '/' ){
                arr.pop();
                document.getElementById("takeover").innerText = arr.join("");
                document.getElementById("makeup").innerHTML = "";
            } else if(/[0-9]/.test(arr.slice(-1)[0]) && document.getElementById("makeup").innerHTML == ""){
                numb = (arr.slice(-1)[0]).toString();
                arr.pop();
                numb = numb.slice(0, -1);
                if(numb !== ""){
                    arr.push(Number(numb));
                }
                document.getElementById("takeover").innerText = arr.join("");
                document.getElementById("makeup").innerHTML = "";
            }                     
        }
    } 
    operator = operator.slice(0, -1);
    string = "";
    numb = "";
}
