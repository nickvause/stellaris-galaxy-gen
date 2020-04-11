const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 1000;
const MAX_STAR_DIST = Math.min(CANVAS_WIDTH, CANVAS_HEIGHT) / 2;

function generate(n, b, s, a, c) {
  const winding_n = n;
  const barRatio_b = b;
  const maxStars = s;
  const coreProp = 1 - a;
  const clockSpin = c > 0;

  console.log(clockSpin);
  let stars = [];
  for (let i = 0; i < s; i++) {
    stars.push(randomStar(winding_n, barRatio_b, clockSpin, coreProp));
  }
  return { stars: stars, n: n, b: b };
}
function randomStar(n, b, c, d) {
  if (Math.random() > d) {
    return spiralStar(n, b, c);
  } else {
    return coreStar(n, b);
  }
}

function coreStar(n, b) {
  const angle = Math.PI * Math.random() * 2;
  const distance = normal(0.8);
  return { a: angle, d: distance, p: 0 };
}

function spiralStar(n, b, c) {
  const thetaMax = 1.5 * n;

  //Theta is the angle of this point.
  let theta = thetaMax * normal(4);
  theta = theta % thetaMax;
  let mult = 10;
  if (Math.random() > 0.5) {
    mult *= -1;
  }

  const nom = mult * (1 - b);
  const denom = Math.log(b * Math.tan(theta / (2 * n)));
  let rTheta = nom / denom; //The distance from the origin

  //Flip for anticlockwise.
  theta = c ? theta : theta * -1;

  return { a: theta, d: rTheta };
}

function random(times) {
  let res = 1;
  for (let time = 0; time < times; time++) {
    res = res * Math.random();
  }
  return res;
}
