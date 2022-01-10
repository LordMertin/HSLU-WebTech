function draw() {
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // Create gradient
        var grd = ctx.createLinearGradient(0, 0, 450, 0);
        grd.addColorStop(0, "cyan");
        grd.addColorStop(1, "magenta");

        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 600, 300);

        //x-cross
        ctx.moveTo(0, 0);
        ctx.lineTo(600, 300);
        ctx.stroke();
        ctx.moveTo(600, 0);
        ctx.lineTo(0, 300);
        ctx.stroke();
        
        //circle
        ctx.beginPath();
        ctx.arc(300, 150, 60, 0, 2 * Math.PI);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(300, 150, 90, 0, 2 * Math.PI);
        ctx.fillStyle = 'black';
        ctx.stroke();

        ctx.font = "30px Arial";
        ctx.strokeStyle = grd;
        ctx.strokeText("\"Art\"", 270, 160);

    }
}