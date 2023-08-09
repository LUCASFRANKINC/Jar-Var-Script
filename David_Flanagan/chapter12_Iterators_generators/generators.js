class Range {
    constructor(from, to){
        this.from = from;
        this.to = to;
    }

    *[Symbol.iterator]() {
        let i = this.from;
        for(i; i <= this.to; yield i, i++) /* Empty */;
    }
}

function getPrimes(range) {
    if(!range instanceof Range) {
        throw new TypeError("Issued parameter is not an instance of Range!");
    }
    const array = [...range];
    return ((function*() {
        for(let i of array) {
            let times = 0;
            for(let k = 2; k < i; k++) {
                if(times > 1) break;
                times += i % k === 0 ? 1 : 0;
            }
            if(times === 0 && i !== 1) yield i;
        }
    })())
}

let generator = getPrimes(new Range(1, 10));

for(let i = generator.next(); !i.done; console.log(i), i = generator.next()) /* Empty */;