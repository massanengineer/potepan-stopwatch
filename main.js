let startTime;
let timeoutId;
let elapsedTime = 0;

document.querySelector('#start').addEventListener('click', function() {
  setButtonRunning();
  startTime = Date.now();
  timeoutId = setInterval(function() {
    document.querySelector('#timer').textContent = Date.now() - startTime + elapsedTime;
  }, 10);
});

document.querySelector('#stop').addEventListener('click', function() {
  setButtonStopped();
  clearInterval(timeoutId);
  elapsedTime += Date.now() - startTime;
  document.querySelector('#timer').textContent = elapsedTime;
});

document.querySelector('#reset').addEventListener('click', function() {
  setButtonStopped();
  clearInterval(timeoutId);
  elapsedTime = 0;
  document.querySelector('#timer').textContent = '0:0:0:0';
});

function setButtonInitial() {
  document.querySelector('#start').disabled = false;
  document.querySelector('#stop').disabled = true;
  document.querySelector('#reset').disabled = true;
}
setButtonInitial();

function setButtonRunning() {
  document.querySelector('#start').disabled = true;
  document.querySelector('#stop').disabled = false;
  document.querySelector('#reset').disabled = true;
}
function setButtonStopped() {
  document.querySelector('#start').disabled = false;
  document.querySelector('#stop').disabled = true;
  document.querySelector('#reset').disabled = false;
}
