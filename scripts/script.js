const addStrokes = () => {
  const strokes = document.querySelectorAll('.stroke');
  let deg = 6;
  strokes.forEach((stroke) => {
    stroke.style.transform = `translate(-50%) rotate(${deg}deg)`;
    deg += 6;
  });
};

const longHand = document.querySelector('.clock__long-hand');
const longShadowHand = document.querySelector('.clock__long-shadow-hand');
const shortHand = document.querySelector('.clock__short-hand');
const shortShadowHand = document.querySelector('.clock__short-shadow-hand');

const setDate = () => {
  const currentTime = new Date();
  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours();
  longHand.style.animationDelay = `${-(minutes * 60 + seconds)}s`;
  longShadowHand.style.animationDelay = `${-(minutes * 60 + seconds)}s`;
  shortHand.style.animationDelay = `${-(hours * 60 * 60 + minutes * 60 + seconds)}s`;
  shortShadowHand.style.animationDelay = `${-(hours * 60 * 60 + minutes * 60 + seconds)}s`;
  console.log(hours, minutes);
};

addStrokes();
setDate();
