function drawStan() {
  const c = document.getElementById('Stan');
  const ctx = c.getContext('2d');

  drawLegs(ctx);
  drawBody(ctx);
  drawHead(ctx);
  drawPalms(ctx);

  function drawLegs(ctx) {
    // Legs
    ctx.beginPath();
    ctx.fillStyle = '#4278c8';
    ctx.fillRect(116, 180, 80, 15);

    // Shoes
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.arc(135, 266, 75, 3 / 2 * Math.PI - 0.35, 3 / 2 * Math.PI + 0.35);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(178, 272, 80, 3 / 2 * Math.PI - 0.32, 3 / 2 * Math.PI + 0.32);
    ctx.fill();
  }

  function drawBody(ctx) {
    // Upper part
    ctx.beginPath();
    ctx.ellipse(154, 181, 55, 73, 0, Math.PI + 0.09, 2 * Math.PI - 0.09);
    ctx.fillStyle = '#d26f5f';
    ctx.fill();

    // Lower part
    ctx.beginPath();
    ctx.moveTo(111, 180);
    ctx.lineTo(113, 174);
    ctx.lineTo(200, 174);
    ctx.lineTo(202, 180);
    ctx.fillStyle = '#d26f5f';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(155, 37, 150, Math.PI / 2 - 0.3, Math.PI / 2 + 0.3);
    ctx.fillStyle = '#d26f5f';
    ctx.fill();

    // Zipper
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(155, 148);
    ctx.lineTo(153, 187);
    ctx.stroke();
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(150, 154, 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(149, 165, 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(149, 178, 1, 0, 2 * Math.PI);
    ctx.fill();

    // Sleeves lines
    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.moveTo(118, 155);
    ctx.lineTo(115, 170);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(189, 154);
    ctx.lineTo(192, 170);
    ctx.stroke();

    // Collar
    ctx.beginPath();
    ctx.moveTo(157, 147);
    ctx.quadraticCurveTo(175, 147, 190, 134);
    ctx.strokeStyle = '#ff2045';
    ctx.lineWidth = 7;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(150, 147);
    ctx.quadraticCurveTo(133, 147, 122, 134);
    ctx.stroke();
  }

  function drawHead(ctx) {
    // Face
    ctx.beginPath();
    ctx.arc(152, 85, 58, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffedc4';
    ctx.fill();

    // Hat
    ctx.beginPath();
    ctx.arc(152, 83, 58, -0.03 * Math.PI, Math.PI, true);
    ctx.fillStyle = '#3973c4';
    ctx.fill();
    ctx.strokeStyle = '#3973c4';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(93, 78);
    ctx.quadraticCurveTo(160, 56, 212, 74);
    ctx.strokeStyle = '#ff1f41';
    ctx.lineWidth = 12;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(93, 84);
    ctx.quadraticCurveTo(160, 62, 212, 79);
    ctx.fillStyle = '#ffedc4';
    ctx.fill();

    // Hat topping
    ctx.beginPath();
    ctx.fillStyle = '#ff0000';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.ellipse(148, 25, 1, 13, 5 / 6 * Math.PI, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(148, 25, 1, 13, 3 / 4 * Math.PI, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(148, 25, 1, 13, 5 / 8 * Math.PI, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(148, 25, 1, 13, Math.PI / 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(148, 25, 1, 13, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(148, 25, 1, 13, Math.PI / 8, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(148, 25, 1, 13, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(148, 25, 1, 13, 3 / 8 * Math.PI, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();	

    // Eyes
    ctx.beginPath();
    ctx.ellipse(137, 93, 15, 18, Math.PI / 5, 0, 2 * Math.PI);
    ctx.lineWidth = 1;
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(169, 91, 15, 18, -Math.PI / 5, 0, 2 * Math.PI);
    ctx.fill();
    // Pupils
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.arc(143, 93, 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.arc(163, 93, 2, 0, 2 * Math.PI);
    ctx.fill();

    // Eyebrows
    ctx.beginPath();
    ctx.moveTo(114, 80);
    ctx.lineTo(127, 67);
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1.3;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(188, 76);
    ctx.lineTo(173, 66);
    ctx.stroke();

    // Mouth
    ctx.beginPath();
    ctx.moveTo(140, 122);
    ctx.lineTo(173, 122);
    ctx.lineTo(157, 135);
    ctx.fillStyle = '#322d31';
    ctx.fill();

    // Teeth
    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(144, 123, 5, 3);
    ctx.fillRect(150, 123, 6, 4);
    ctx.fillRect(157, 123, 6, 4);
    ctx.fillRect(164, 123, 5, 3);
  }

  function drawPalms(ctx) {
    // Palms
    ctx.beginPath();
    ctx.arc(108, 169, 9.5, 0, 2 * Math.PI);
    ctx.fillStyle = '#ff1c3d';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(200, 172, 9.5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(114, 166, 4, 0, 2 * Math.PI);

    // Thumbs
    ctx.fillStyle = '#ff1c3d';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 0.1;
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(192, 169, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
}

window.addEventListener('load', drawStan);
