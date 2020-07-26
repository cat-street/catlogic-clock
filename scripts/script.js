const longHand = document.querySelector('.clock__long-hand');
const longShadowHand = document.querySelector('.clock__long-shadow-hand');
const shortHand = document.querySelector('.clock__short-hand');
const shortShadowHand = document.querySelector('.clock__short-shadow-hand');
const thinHand = document.querySelector('.clock__thin-hand');
const thinShadowHand = document.querySelector('.clock__thin-shadow-hand');
const body = document.querySelector('.body');
const colorChoosers = Array.from(document.querySelectorAll('.colorChooser__item'));

const addStrokes = () => {
  const strokes = document.querySelectorAll('.stroke');
  let deg = 6;
  strokes.forEach((stroke) => {
    stroke.style.transform = `translate(-50%) rotate(${deg}deg)`;
    deg += 6;
  });
};

const setDate = () => {
  const currentTime = new Date();
  const milliseconds = currentTime.getMilliseconds();
  let seconds = currentTime.getSeconds();
  let minutes = currentTime.getMinutes();
  let hours = currentTime.getHours();
  if (hours > 12) hours -= 12;
  seconds += milliseconds / 1000;
  minutes += seconds / 60;
  hours += minutes / 60;
  const secondsDegrees = seconds / 60 * 360;
  const minutesDegrees = minutes / 60 * 360;
  const hoursDegrees = hours / 12 * 360;
  thinHand.style.transform = `rotate(${secondsDegrees}deg)`;
  thinShadowHand.style.transform = `rotate(${secondsDegrees}deg)`;
  longHand.style.transform = `rotate(${minutesDegrees}deg)`;
  longShadowHand.style.transform = `rotate(${minutesDegrees}deg)`;
  shortHand.style.transform = `rotate(${hoursDegrees}deg)`;
  shortShadowHand.style.transform = `rotate(${hoursDegrees}deg)`;
  requestAnimationFrame(setDate);
};

const setColor = (event) => {
  body.style.backgroundColor = event.target.dataset.color;
}

addStrokes();
setDate();

colorChoosers.forEach(chooser => {
  chooser.addEventListener('click', setColor);
});
