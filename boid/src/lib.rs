mod vector;
mod rand;
mod boid;

use wasm_bindgen::prelude::{wasm_bindgen, JsValue};
use crate::boid::Boid;
use crate::rand::Rand;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}", name));
}

#[wasm_bindgen]
pub fn getNewBoid(size: f64, seed: f64) -> JsValue {
    let mut rnd_gen = Rand::new(seed);
    let num = size as u64;

    JsValue::from_serde(&(0..num).map(|_| Boid::new(&mut rnd_gen)).collect::<Vec<Boid>>()).unwrap()
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
