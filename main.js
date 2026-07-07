let startTime;
let timeoutId;
let elapsedTime = 0;

function formatTime() {
  const d =  new Date(Date.now() - startTime + elapsedTime);
  const h = d.getUTCHours();
  const m = d.getUTCMinutes();
  const s = d.getUTCSeconds();
  const ms = Math.floor(d.getUTCMilliseconds() / 100);
  document.querySelector('#timer').textContent = `${h}:${m}:${s}:${ms}`;
};

document.querySelector('#start').addEventListener('click', function() {
  setButtonRunning();
  startTime = Date.now();
  timeoutId = setInterval(function() {
    formatTime();
  }, 10);
});

document.querySelector('#stop').addEventListener('click', function() {
  setButtonStopped();
  clearInterval(timeoutId);
  elapsedTime += Date.now() - startTime;
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
