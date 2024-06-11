function appendValue(value) {
    const inputBox = document.getElementById('inputBox');
    if (inputBox.value === '0') {
        inputBox.value = value;
    } else {
        inputBox.value += value;
    }
}

function clearInput() {
    document.getElementById('inputBox').value = '0';
}

function calculateResult() {
    const inputBox = document.getElementById('inputBox');
    try {
        inputBox.value = eval(inputBox.value.replace('x', '*').replace('%', '/100'));
    } catch (e) {
        alert('Invalid expression');
        clearInput();
    }
}
