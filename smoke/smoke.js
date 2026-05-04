const num_of_particles = 100;
const min_particle_size = 0.2;
const min_speed_x = 1;
const min_speed_y = 1;

const canvas = document.getElementById('smoke_canvas');
const ctx = canvas.getContext('2d');

// define the color
ctx.fillStyle = 'rgb(47, 55, 109)';
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fill();

class Smoke {
    constructor() {
        this.particles = [];
    }

    add(particle) {
        this.particles.push(particle);
    }

    animate() {
        for (let index = 0; index < this.particles.length; index++) {
            //update the sates of particle and draw it to the screen
            this.particles[index].update();
            this.particles[index].draw();
        }
        requestAnimationFrame(this.animate);

}
}
class Particle {
    constructor(x, y) {
        this.size = Math.random() * 2 + min_particle_size;
        this.color = 'rgb(47, 55, 109)';
        this.speedx = Math.random() * 2 + min_speed_x;
        this.speedy = Math.random() * 2 + min_speed_y;
        this.x = x;
        this.y = y;
    }

    update() {
        this.size -= 1;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const smoke = new Smoke();
console.log(smoke);

window.addEventListener('mousemove', (e) => {
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e);

    for (let index = 0; index < num_of_particles; index++) {
        const particle = new Particle(e.clientX, e.clientY);
        smoke.add(particle);
        console.log(smoke.particles);
    }
});

smoke.animate();

