const num_of_particles = 100;
const min_particle_size = 2;
const min_speed_x = 1;
const min_speed_y = 1;

const canvas = document.getElementById('smoke_canvas');
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Smoke {
    constructor() {
        this.particles = [];
    }

    add(particle) {
        this.particles.push(particle);
    }

    animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let index = 0; index < this.particles.length; index++) {

        this.particles[index].update();
        this.particles[index].draw();

        if (this.particles[index].size <= 0.2) {

            this.particles.splice(index, 1);

            index--;
        }
    }

    requestAnimationFrame(() => this.animate());
}
}

class Particle {

    constructor(x, y) {

        this.size = Math.random() * 5 + min_particle_size;

        this.color = 'rgb(47, 55, 109)';

        this.speedx = (Math.random() - 0.5) * 2;
        this.speedy = (Math.random() - 0.5) * 2;

        this.x = x;
        this.y = y;
    }

    update() {

        
        this.x += this.speedx;
        this.y += this.speedy;

        
        if (this.size > 0.2) {
            this.size -= 0.05;
        }
    }

    draw() {

        ctx.fillStyle = this.color;

        ctx.beginPath();

        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.fill();
    }
}

const smoke = new Smoke();

window.addEventListener('mousemove', (e) => {

    for (let index = 0; index < num_of_particles; index++) {

        const particle = new Particle(e.clientX, e.clientY);

        smoke.add(particle);
    }
});

smoke.animate();