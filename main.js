let startTime;
let timeoutId;

document.querySelector('#start').addEventListener('click', function() {
  startTime = Date.now();
  timeoutId = setInterval(function() {
    document.querySelector('#timer').textContent = Date.now() - startTime;
  }, 10);
});

document.querySelector('#stop').addEventListener('click', function() {
  clearInterval(timeoutId);
});

document.querySelector('#reset').addEventListener('click', function() {
  document.querySelector('#timer').textContent = '0:0:0:0';
});
