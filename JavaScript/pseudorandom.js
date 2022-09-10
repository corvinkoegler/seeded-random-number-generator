class SeededRandom {
    constructor(seed) {
        this.seed = seed;
        this.generator = this.pseudoRandomInteger(this.seed);
    }

    /**
     * 
     * @param {integer} seed any integer between 1 and 999999999999999 (inclusive)
     * @yields a positive integer with max 10 digits
     */
    *pseudoRandomInteger(seed) {
        let value = seed;

        while (true) {
            value = value * 16807 % 2147483647;
            yield value;
        }
    }

    /**
     * 
     * @param {array} interval [min_possible_value, max_possible_value] defaults to unit interval [0, 1]
     * @returns a (pseudo-)random float between the given min and max based on the seed
     */
    getIntervalValue(interval=[0, 1]) {
        const value = this.generator.next().value;
        const length = Math.log(value) * Math.LOG10E + 1 | 0;
        const oldIntervalMax = 10 ** (length) - 1;
        const oldIntervalMin = 10 ** (length -1);

        return ((value - oldIntervalMin) * (interval[1] - interval[0])) / (oldIntervalMax - oldIntervalMin) + interval[0];
    }
}