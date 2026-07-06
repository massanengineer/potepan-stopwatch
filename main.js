let startTime;
let timeoutId;
let elapsedTime = 0;

document.querySelector('#start').addEventListener('click', function() {
  startTime = Date.now();
  timeoutId = setInterval(function() {
    document.querySelector('#timer').textContent = Date.now() - startTime + elapsedTime;
  }, 10);
});

document.querySelector('#stop').addEventListener('click', function() {
  clearInterval(timeoutId);
  elapsedTime += Date.now() - startTime;
  document.querySelector('#timer').textContent = elapsedTime;
});

document.querySelector('#reset').addEventListener('click', function() {
  clearInterval(timeoutId);
  elapsedTime = 0;
  document.querySelector('#timer').textContent = '0:0:0:0';
});
