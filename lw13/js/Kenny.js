function drawKenny() {
  const c = document.getElementById('Kenny');
  const ctx = c.getContext('2d');

  drawLegs(ctx);
  drawBody(ctx);
  drawHead(ctx);
  drawPalms(ctx);

  function drawLegs(ctx) {
    // Legs
    ctx.beginPath();
    ctx.fillStyle = '#f56a00';
    ctx.fillRect(98, 156, 82, 35);

    // Shoes
    ctx.beginPath();
    ctx.moveTo(96, 190);
    ctx.lineWidth = 4;
    ctx.lineTo(182, 190);
    ctx.strokeStyle = '#000000';
    ctx.stroke();
  }

  function drawBody(ctx) {
    // Jacket
    ctx.beginPath();
    ctx.arc(138, 164, 60, 0, Math.PI, true);
    ctx.fillStyle = '#f56a00';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(138, -42, 220, 5 / 12 * Math.PI, 7 / 12 * Math.PI);
    ctx.fillRect(88, 162, 102, 10);
    ctx.fill();

    // Zipper
    ctx.beginPath();
    ctx.moveTo(140, 136);
    ctx.lineWidth = 1;
    ctx.lineTo(140, 178);
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    // Hands
    ctx.lineWidth = 1;
    // Left
    ctx.beginPath();
    ctx.moveTo(98, 148);
    ctx.lineTo(93, 164);
    ctx.stroke();
    // Right
    ctx.beginPath();
    ctx.moveTo(178, 148);
    ctx.lineTo(182, 164);
    ctx.stroke();
  }

  function drawHead(ctx) {
    // Hood
    ctx.beginPath();
    ctx.arc(140, 76, 68, 0, 2 * Math.PI);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#f55100';
    ctx.fillStyle = '#f56a00';
    ctx.stroke();
    ctx.fill();

    // Face
    ctx.beginPath();
    ctx.arc(138, 75, 36.5, 0, 2 * Math.PI);
    ctx.fillStyle = '#fde1b9';
    ctx.fill();

    // Eyes
    ctx.beginPath();
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 0.4;
    // Additional black lines
    ctx.arc(124, 68, 15, 0, 2 * Math.PI);
    ctx.arc(154, 70, 15, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.arc(120, 72, 18, 0, 2 * Math.PI);
    ctx.arc(157, 74, 18, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    // Pupils
    ctx.arc(126, 71, 2.5, 0, 2 * Math.PI);
    ctx.arc(152, 73, 2.5, 0, 2 * Math.PI);
    ctx.fillStyle = '#000000';
    ctx.fill();

    // Fur on the hood
    ctx.fillStyle = '#7f441a';
    // Left
    ctx.beginPath();
    ctx.moveTo(140, 38);
    ctx.bezierCurveTo(140, 38, 76, 66, 136, 112);
    ctx.bezierCurveTo(136, 112, 86, 114, 94, 68);
    ctx.bezierCurveTo(94, 64, 104, 32, 140, 38);
    ctx.fill();
    // Right
    ctx.beginPath();
    ctx.moveTo(139, 38);
    ctx.bezierCurveTo(140, 38, 198, 78, 136, 112);
    ctx.bezierCurveTo(136, 112, 186, 124, 180, 68);
    ctx.bezierCurveTo(180, 64, 172, 38, 140, 38);
    ctx.fill();

    // Black line around the hood
    ctx.beginPath();
    ctx.bezierCurveTo(140, 37.5, 86, 30, 90, 86);
    ctx.bezierCurveTo(90, 86, 94, 118, 136, 122);
    ctx.bezierCurveTo(136, 122, 180, 130, 186, 86);
    ctx.bezierCurveTo(186, 84, 190, 42, 140, 37.5);
    ctx.lineWidth = 0.4;
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    // Laces
    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.moveTo(136, 112);
    ctx.lineTo(137, 132);
    ctx.lineTo(139, 138);
    ctx.moveTo(136, 112);
    ctx.lineTo(132, 122);
    ctx.lineTo(130, 136);
    ctx.stroke();
  }

  function drawPalms(ctx) {
    ctx.fillStyle = '#7f441a';

    // Main part
    ctx.beginPath();
    ctx.arc(84, 164, 10, 0, 2 * Math.PI);
    ctx.arc(192, 166, 10, 0, 2 * Math.PI);
    ctx.fill();

    // Thumbs
    ctx.beginPath();
    ctx.arc(92, 162, 4, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(184, 162, 4, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }
}

window.addEventListener('load', drawKenny);
