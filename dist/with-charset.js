((outputEl) => {
  if (!outputEl) {
    return console.debug('Can not found #output');
  }

  const pEl = document.createElement('p');
  pEl.textContent = '你好、こんにちは、Hello';
  outputEl.appendChild(pEl);

})(document.querySelector('#output'));
