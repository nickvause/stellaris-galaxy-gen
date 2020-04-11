const MAX_SCATTER_NORMAL = 1;

const STAR_COLOUR_A = "white";
const STAR_COLOUR_B = "yellow";

let averageNormal = 0;
function render(canvas, system) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = STAR_COLOUR_A;
  ctx.strokeStyle = STAR_COLOUR_A;
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  for (star in system.stars) {
    drawStar(ctx, system.stars[star], system);
  }
}

function drawStar(ctx, star, system) {
  let xRel = star.d * Math.cos(star.a);
  let yRel = star.d * Math.sin(star.a);
  xRel = xRel * 50;
  yRel = yRel * 50;

  //Randomise the positioning a bit. We have to do this using polar co-ords or things congregate around the axis.
  const aRand = Math.PI * Math.random();
  const dRand = normal(1);
  const xRand = dRand * Math.cos(aRand) * (1 / (1 + system.n)) * 100;
  const yRand = dRand * Math.sin(aRand) * (1 / (1 + system.n)) * 100;
  // console.log(yRand);

  xRel += xRand;
  yRel += yRand;

  // console.log(averageNormal);
  const xAdj = CANVAS_WIDTH / 2 + xRel;
  const yAdj = CANVAS_HEIGHT / 2 + yRel;
  ctx.fillRect(xAdj, yAdj, 1, 1);
  ctx.strokeStyle = STAR_COLOUR_A;
  ctx.fillStyle = STAR_COLOUR_A;
}

function normal(exp) {
  exp = exp || 2;
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  let norm = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  const wasPositive = norm >= 0;
  norm = Math.pow(norm, exp);
  if (!wasPositive && norm >= 0) {
    norm = norm * -1;
  }
  return norm;
}
