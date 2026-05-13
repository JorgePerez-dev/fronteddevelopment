const num_of_particles = 4;
const min_particle_size = 2;

const canvas = document.getElementById('smoke_canvas');
const ctx = canvas.getContext('2d');

// Tamaño del canvas
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

        // Limpia el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Recorre partículas
        for (let index = 0; index < this.particles.length; index++) {

            const particle = this.particles[index];

            particle.update();
            particle.draw();

            // Elimina partículas pequeñas
            if (particle.size <= 0.2) {

                this.particles.splice(index, 1);

                index--;
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

class Particle {

    constructor(x, y) {

        this.x = x;
        this.y = y;

        // Tamaño aleatorio
        this.size = Math.random() * 5 + min_particle_size;

        // COLOR BLANCO
        this.color = 'rgba(255, 255, 255, 0.7)';

        // Velocidad
        this.speedx = (Math.random() - 0.5) * 2;
        this.speedy = (Math.random() - 0.5) * 2;
    }

    update() {

        // Movimiento horizontal
        this.x += this.speedx;

        // Movimiento vertical
        this.y += this.speedy - 0.3;

        // Reduce tamaño
        if (this.size > 0.2) {
            this.size -= 0.05;
        }
    }

    draw() {

        ctx.beginPath();

        ctx.fillStyle = this.color;

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fill();
    }
}

const smoke = new Smoke();

// Crear humo al mover mouse
window.addEventListener('mousemove', (e) => {

    for (let index = 0; index < num_of_particles; index++) {

        smoke.add(
            new Particle(
                e.clientX,
                e.clientY
            )
        );
    }
});

// Resize responsive
function resize() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);

resize();

// Inicia animación
smoke.animate();