let startTime;

document.querySelector('#start').addEventListener('click', function() {
  startTime = Date.now();
  setInterval(function() {
    document.querySelector('#timer').textContent = Date.now() - startTime;
  }, 10);
});
