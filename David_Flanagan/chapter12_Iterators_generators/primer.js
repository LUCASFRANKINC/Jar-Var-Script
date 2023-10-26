class Primer {
	constructor(from, to) {
		this.from = from;
		this.to = to;
	}
	
	*[Symbol.iterator]() {
		for (let i = Math.ceil(this.from); i <= this.to; i++) {
			if (this.primeRecursively(i)) yield i;
		}
	}

	primeRecursively(y, i = 2) {
		if (y === 1) return false;
		return y > i ? (y % i++ ? true : false) && (y > i ? this.primeRecursively(y, i) : true) : true;
	}

	primeNormal(x) {
		if (x === 1) return false;
		let i = 2;
		let incr = 0;
		while (x > i) {
			if (incr > 0) {
				return false;
			}
			incr += (x % i++ !== 0) ? 0 : 1;
		}
		if (incr === 0) return true;
	}
}



let primer = new Primer(2, 100);
console.log([...primer]);