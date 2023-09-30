$(document).ready(function () {
  let currentValue = '';
  let operator = '';
  let memoryValue = '';
  let decimalClicked = false;
  let isDarkMode = false;

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;

    $('body').toggleClass('dark-mode', isDarkMode);
    $('.calculator').toggleClass('dark-mode', isDarkMode);
    $('#display').toggleClass('dark-mode', isDarkMode);
    $('button').toggleClass('dark-mode', isDarkMode);
    $('#toggle-dark-mode').text(isDarkMode ? 'Light Mode' : 'Dark Mode');
  }

  $('#toggle-dark-mode').click(function () {
    toggleDarkMode();
  });

  function updateDisplay() {
    $('#display').val(currentValue);
  }

  $('.btns button').click(function () {
    const buttonValue = $(this).text();

    switch (buttonValue) {
      case 'C':
        currentValue = '';
        operator = '';
        memoryValue = '';
        decimalClicked = false;
        break;
      case '<':
        currentValue = currentValue.slice(0, -1);
        break;
      case '+':
      case '-':
      case 'X':
      case '/':
        if (operator !== '') {
          calculate();
        }
        operator = buttonValue;
        memoryValue = currentValue;
        currentValue = '';
        decimalClicked = false;
        break;
      case '=':
        calculate();
        operator = '';
        memoryValue = '';
        break;
      case '.':
        if (!decimalClicked) {
          currentValue += buttonValue;
          decimalClicked = true;
        }
        break;
      default:
        currentValue += buttonValue;
        break;
    }

    updateDisplay();
  });

  function calculate() {
    let result;
    const num1 = parseFloat(memoryValue);
    const num2 = parseFloat(currentValue);

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case 'X':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
    }

    currentValue = result.toString();
    decimalClicked = currentValue.includes('.');
  }
});
