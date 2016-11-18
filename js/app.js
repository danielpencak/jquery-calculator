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
  $('.buttons').on('click', '#clear', (event) => {
    $screen.text('');
  });
  $('.buttons').on('click', '#equals', (event) => {
    const regEx = /(-?\d+.?\d*)(\+|\-|\X|\÷)(-?\d+.?\d*)/;
    const screenTextArray = ($screen.text()).match(regEx);
    const extraOp = screenTextArray[1].slice(-1);
    const extraOp2 = screenTextArray[3].slice(-1);
    const operatorDiv = screenTextArray[2];
    const operandZero = screenTextArray[3];
    if (extraOp === '-'| extraOp === 'X'| extraOp === '÷'| extraOp === '+') {
      $screen.text('');
      $screen.text('Error');
      return;
    }
    if (extraOp2 === '-'| extraOp2 === 'X'| extraOp2 === '÷'| extraOp2 === '+') {
      $screen.text('');
      $screen.text('Error');
      return;
    }
    if (operatorDiv === '÷' && operandZero) {
      $screen.text('');
      $screen.text('Error');
      return;
    }
    if (screenTextArray[2] === '+') {
      const result = parseFloat(screenTextArray[1]) + parseFloat(screenTextArray[3]);
      $screen.text(result);
    }
    if (screenTextArray[2] === '-') {
      const result = parseFloat(screenTextArray[1]) - parseFloat(screenTextArray[3]);
      $screen.text(result);
    }
    if (screenTextArray[2] === '÷') {
      const result = parseFloat(screenTextArray[1]) / parseFloat(screenTextArray[3]);
      $screen.text(result);
    }
    if (screenTextArray[2] === 'X') {
      const result = parseFloat(screenTextArray[1]) * parseFloat(screenTextArray[3]);
      $screen.text(result);
    }
  });
})();
