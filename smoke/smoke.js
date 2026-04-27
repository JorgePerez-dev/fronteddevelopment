
const min_particle_size = 0.2

const min_speed_x = 1
const min_speed_y = 1

window.addEventListener('mousemove', (e)=>{});

class Smoke{

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


}