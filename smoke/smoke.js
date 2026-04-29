

const num_of_particles = 100;
const min_particle_size = 0.2
const min_speed_x = 1
const min_speed_y = 1

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
//define the color that we want to use four our drawings
ctx.fillStyle = 'rgb(47, 55, 109)';
//prepare to draw a path
ctx.beginPath();
//draw a circle with the arc method
ctx.arc(100, 100, 50, 0, Math.PI * 2);
//fill the object that we just created
ctx.fill();

const smoke = new Smoke();
console.log(smoke);
window.addEventListener('mousemove', (e)=>{});
console.log(e.clientX);
console.log(e.clientY);
console.log(e);

// createng new particle
for (let index = 0; index < num_of_particles; index++) {                              
    const particle = new Particle(e.clientX, e.clientY);
    smoke.add(particle);
    console.log(smoke.particles);

}
new Particle(e.clientX, e.clientY);



class Smoke{
    constructor(){
    this.Particle = [];


}

add(particle){
    this.particle


}

}
class Particle{

    constructor(x, y){
        this.size = Math.random() * 2 + min_particle_size ;
        this.color =  'rgb(47, 55, 109)';
        this.speedx = Math.random() * 2 + min_speed_x;
        this.speedy = Math.random() * 2 + min_speed_y;
        this.x = x;
        this.y = y;

    }

    update(){
        this.size -= 1;
        // this.size = this.size - 1;


}

}

