class SeededRandom {
    constructor(seed) {
        this.seed = seed;
        this.genrator = this.pseudoRandomInteger();
    }

    *pseudoRandomInteger() {
        let value = this.seed;

        while (true) {
            value = value * 16807 % 2147483647;
            yield value
        }
    }

    getUnitInterval(){
        let value = this.generator.next().value;
        let length = Math.log(value) * Math.LOG10E + 1 | 0;
        let max = 10 ** (length - 1) - 1;
        return max / value; // returns a float between 0 and 1
    }
}

/*
function* pseudoRandom(seed) {
    let value = seed;

    while (true) {
        value = value * 16807 % 2147483647;
        let length = Math.log(value) * Math.LOG10E + 1 | 0;
        let max = 10 ** (length - 1) - 1;
        yield max / value; // returns a float between 0 and 1
    }
};
*/

// usage
// let generator = pseudoRandom(1); // any number between 1 and 999999999999999 works.