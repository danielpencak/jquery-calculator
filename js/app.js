(function() {
  'use strict';
  const $screen = $('#screen');

  $('.buttons').on('click', '.operator', (event) => {
    const $target = $(event.target);
    const $text = $target.text();

    if ($text === '=') {
      return;
    }
    $screen.append($text);
  });
  $('.buttons').on('click', (event) => {
    const $target = $(event.target);

    if (!isNaN($target.text())) {
      const $text = $target.text();

      $screen.append($text);
    }
  });
  $('.buttons').on('click', '#clear', () => {
    $screen.text('');
  });

  const evaluate = function(operand1, operand2, operator) {
    if (operator === '÷' && operand2 === 0) {
      $screen.text('Error');

      return;
    }
    if (operator === '+') {
      $screen.text(operand1 + operand2);
    }
    if (operator === '-') {
      $screen.text(operand1 - operand2);
    }
    if (operator === '÷') {
      $screen.text((operand1 / operand2));
    }
    if (operator === 'x') {
      $screen.text(operand1 * operand2);
    }
  };

  $('.buttons').on('click', '#equals', () => {
    const regEx = /(-?\d+.?\d*)(\+|-|x|÷)(-?\d+.?\d*)/;
    const screenTextArray = ($screen.text()).match(regEx);
    const extraOp = screenTextArray[1].slice(-1);
    const extraOp2 = screenTextArray[3].slice(-1);
    const operatorSymbol = screenTextArray[2];
    const firstOperand = parseFloat(screenTextArray[1]);
    const secondOperand = parseFloat(screenTextArray[3]);

    if (isNaN(extraOp)) {
      $screen.text('Error');

      return;
    }
    if (isNaN(extraOp2)) {
      $screen.text('Error');

      return;
    }

    evaluate(firstOperand, secondOperand, operatorSymbol);
  });
})();
