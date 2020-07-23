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

const setDate = () => {
  const currentTime = new Date();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours();
  longHand.style.transform = `rotate(${minutes / 60 * 360 - 180}deg)`;
  longShadowHand.style.transform = `rotate(${minutes / 60 * 360 - 180}deg)`;
  shortHand.style.transform = `rotate(${hours / 12 * 360 - 180 + 30 * minutes / 60}deg)`;
  shortShadowHand.style.transform = `rotate(${hours / 12 * 360 - 180 + 30 * minutes / 60}deg)`;
};

const setColor = (event) => {
  body.style.backgroundColor = event.target.dataset.color;
}

addStrokes();
setDate();
setInterval(setDate, 1000);

colorChoosers.forEach(chooser => {
  chooser.addEventListener('click', setColor);
});
