let startTime;

document.querySelector('.start').addEventListener('click', function() {
  startTime = Date.now();
  timeoutId = setInterval(function() {
    document.querySelector('.timer').textContent = Date.now() - startTime;
  }, 10);
});
