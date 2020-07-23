const longHand = document.querySelector('.clock__long-hand');
const longShadowHand = document.querySelector('.clock__long-shadow-hand');
const shortHand = document.querySelector('.clock__short-hand');
const shortShadowHand = document.querySelector('.clock__short-shadow-hand');
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

const setTransition = (type) => {
  longHand.style.transition = type;
  longShadowHand.style.transition = type;
  shortHand.style.transition = type;
  shortShadowHand.style.transition = type;
}

const setDate = () => {
  const currentTime = new Date();
  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours();
  const minutesDegrees = minutes / 60 * 360 - 180;
  const hoursDegrees = hours / 12 * 360 - 180 + 30 * minutes / 60;
  longHand.style.transform = `rotate(${minutesDegrees}deg)`;
  longShadowHand.style.transform = `rotate(${minutesDegrees}deg)`;
  shortHand.style.transform = `rotate(${hoursDegrees}deg)`;
  shortShadowHand.style.transform = `rotate(${hoursDegrees}deg)`;
  if (minutes === 59 && seconds >= 55) {
    setTransition('');
    setInterval(setTransition.bind(this, 'transform 1s'), 6000);
  }
};

const setColor = (event) => {
  body.style.backgroundColor = event.target.dataset.color;
}

addStrokes();
setDate();
setInterval(setTransition.bind(this, 'transform 1s'), 1000);
setInterval(setDate, 5000);

colorChoosers.forEach(chooser => {
  chooser.addEventListener('click', setColor);
});
