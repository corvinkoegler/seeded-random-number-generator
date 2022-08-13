class PseudoRandom {
    constructor(seed) {
        this.generator = this.pseudoRandom(seed);
    }

    * pseudoRandom(seed) {
        let value = seed;

        while (true) {
            value = value * 16807 % 2147483647;
            let length = Math.log(value) * Math.LOG10E + 1 | 0;
            let max = 10 ** (length - 1) - 1;
            yield max / value; // returns a float between 0 and 1
        }
    }
}

let pseudoRandom = new PseudoRandom(42);
console.log(pseudoRandom.generator.next().value);