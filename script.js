function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    var result;

    switch(operator) {
        case 'add':
            result = num1 + num2;
            break;
            case 'subtract':
                result = num1 - num2;
                break;
        default:
            result = "Error: Invalid operator!";
    }

    document.getElementById('result').innerText = "Hasil: " + result;
}
