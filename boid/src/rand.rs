pub struct Rand {
    seed: u64,
}

impl Rand {
    pub fn new(seed: f64) -> Rand {
        Rand {
            seed: seed as u64,
        }
    }

    fn next_seed(&mut self) -> u64 {
        let prev = self.seed;
        self.seed = self.seed ^ (self.seed << 13);
        self.seed = self.seed ^ (self.seed >> 7);
        self.seed = self.seed ^ (self.seed << 17);
        self.seed
    }

    pub fn random(&mut self) -> f64 {
        (self.next_seed() as f64) / (std::u64::MAX as f64)
    }
}
