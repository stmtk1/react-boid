use crate::vector::Vector;
use crate::rand::Rand;
use serde::{ Serialize, Deserialize };

#[derive(Serialize, Deserialize)]
pub struct Boid {
    pub position: Vector,
    pub velocity: Vector,
}

const VELOCITY_SIZE: f64 = 10.0;
const WIDTH: f64 = 600.0;
const HEIGHT: f64 = 400.0;

impl Boid {
    pub fn new(rnd_gen: &mut Rand) -> Boid {
        let theta = rnd_gen.random();
        let mut velocity = Vector::new(theta.cos(), theta.sin());
        velocity.mul(VELOCITY_SIZE);

        Boid {
            position: Vector::new(rnd_gen.random() * WIDTH, rnd_gen.random() * HEIGHT),
            velocity,
        }
    }
}
