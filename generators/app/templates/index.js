class Rectangle {
    constructor(ctx) {
        this.ctx = ctx;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(20, 20, 150, 100);
        this.ctx.stroke();
    }
}

window.Rectangle = Rectangle;