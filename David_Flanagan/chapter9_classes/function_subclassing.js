/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */

class Vehicle {
  static #description = "This is all about effectiveness of classes and subclassing";

  #name = "";
  constructor() {
    this.#name = "";
  }

  static get description() { return Vehicle.#description }
  get name() { return this.#name }
  set name(nameDecl) { this.#name = nameDecl }
  toString() {
    return this.name;
  }
}

class Car extends Vehicle {

  #data = [];

  get dataArray() { return this.#data }

  constructor(arrayData, start=0, end=Array.isArray(arrayData) ? arrayData.length -1 : start) {
    if(!Array.isArray(arrayData)) throw new TypeError("Expected \x1b[35m Array \x1b[0m: Found \x1b[32m" + typeof arrayData + "\x1b[0m");
    //loop through array
    super("Luke");
    this.start = start;
    this.end = end;
    this.name = ""
    this.year = 0
    this.sellingPrice = 0
    this.kmDriven = 0
    this.fuel = 0
    this.sellerType = ""
    this.transmission = ""
    this.owner = ""
    for(let i = start; i <= end; this.#data.push(arrayData[i]), i++) /*Empty*/;
  }

  *[Symbol.iterator]() {
    console.log(`Length of items: ${this.#data.length}`);
    for (let x = 0; x < this.#data.length; x++) {
      console.log("Entry no." + (x+1));
      let str = "|";
      for(let [key, value] of Object.entries(this.#data[x])) {
        if(key === "name")
          str += `${key} : ${value.toString().padEnd(10) } |`
        else
          str += `${key} : ${value.toString().padStart(2) } |`
      }
      console.log(str);
    }
  }
}

// contains an array of objects
const data = [
  {
    "name": "Ford EcoSport 1.5 Diesel Titanium Plus BSIV",
    "year": 2017,
    "selling_price": 840000,
    "km_driven": 49213,
    "fuel": "Diesel",
    "seller_type": "Dealer",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Hyundai i10 Sportz 1.1L",
    "year": 2015,
    "selling_price": 229999,
    "km_driven": 40000,
    "fuel": "Petrol",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Maruti 800 Std",
    "year": 1998,
    "selling_price": 40000,
    "km_driven": 40000,
    "fuel": "Petrol",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "Fourth & Above Owner"
  },
  {
    "name": "Chevrolet Spark 1.0 LS",
    "year": 2012,
    "selling_price": 130000,
    "km_driven": 80000,
    "fuel": "Petrol",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Hyundai EON Era Plus",
    "year": 2015,
    "selling_price": 200000,
    "km_driven": 70000,
    "fuel": "Petrol",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Tata Indica Vista Aqua TDI BSIII",
    "year": 2011,
    "selling_price": 120000,
    "km_driven": 70000,
    "fuel": "Diesel",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Hyundai Santro LP zipPlus",
    "year": 2003,
    "selling_price": 75000,
    "km_driven": 57000,
    "fuel": "Petrol",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Tata Bolt Quadrajet XE",
    "year": 2016,
    "selling_price": 250000,
    "km_driven": 120000,
    "fuel": "Diesel",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Maruti 800 AC BSIII",
    "year": 2005,
    "selling_price": 100000,
    "km_driven": 30000,
    "fuel": "Petrol",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Hyundai EON Era Plus",
    "year": 2013,
    "selling_price": 280000,
    "km_driven": 3240,
    "fuel": "Petrol",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "Second Owner"
  },
  {
    "name": "Hyundai i20 Magna 1.2",
    "year": 2015,
    "selling_price": 540000,
    "km_driven": 5000,
    "fuel": "Petrol",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Hyundai i20 1.2 Asta",
    "year": 2018,
    "selling_price": 700000,
    "km_driven": 10000,
    "fuel": "Petrol",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Maruti Ciaz VDi Plus",
    "year": 2015,
    "selling_price": 525000,
    "km_driven": 100000,
    "fuel": "Diesel",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Hyundai i20 Asta 1.4 CRDi",
    "year": 2016,
    "selling_price": 430000,
    "km_driven": 80000,
    "fuel": "Diesel",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Hyundai Santro LE",
    "year": 2002,
    "selling_price": 65000,
    "km_driven": 70000,
    "fuel": "Petrol",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Maruti Vitara Brezza VDi",
    "year": 2018,
    "selling_price": 800000,
    "km_driven": 35000,
    "fuel": "Diesel",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Hyundai Santro Xing XL eRLX Euro III",
    "year": 2007,
    "selling_price": 75000,
    "km_driven": 114000,
    "fuel": "Petrol",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "Second Owner"
  },
  {
    "name": "Hyundai Getz 1.3 GLS",
    "year": 2008,
    "selling_price": 210000,
    "km_driven": 53772,
    "fuel": "Petrol",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Mahindra Quanto C8",
    "year": 2012,
    "selling_price": 195000,
    "km_driven": 140000,
    "fuel": "Diesel",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "Second Owner"
  },
  {
    "name": "Chevrolet Tavera Neo 3 LS 7 C BSIII",
    "year": 2015,
    "selling_price": 400000,
    "km_driven": 120000,
    "fuel": "Diesel",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Hyundai EON Magna Plus",
    "year": 2012,
    "selling_price": 170000,
    "km_driven": 60000,
    "fuel": "Petrol",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Renault KWID RXT",
    "year": 2016,
    "selling_price": 225000,
    "km_driven": 25000,
    "fuel": "Petrol",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Maruti Wagon R DUO LPG",
    "year": 2014,
    "selling_price": 210000,
    "km_driven": 90000,
    "fuel": "LPG",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Maruti Wagon R LXI",
    "year": 2020,
    "selling_price": 240000,
    "km_driven": 120000,
    "fuel": "Petrol",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Chevrolet Enjoy 1.3 TCDi LS 8",
    "year": 2015,
    "selling_price": 300000,
    "km_driven": 175000,
    "fuel": "Diesel",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Chevrolet Spark 1.0 LS",
    "year": 2011,
    "selling_price": 99000,
    "km_driven": 100000,
    "fuel": "Petrol",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "Third Owner"
  },
  {
    "name": "Honda City i VTEC SV",
    "year": 2014,
    "selling_price": 620000,
    "km_driven": 36000,
    "fuel": "Petrol",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Honda Amaze VX i-DTEC",
    "year": 2013,
    "selling_price": 500000,
    "km_driven": 30000,
    "fuel": "Diesel",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  },
  {
    "name": "Jaguar XJ 5.0 L V8 Supercharged",
    "year": 2010,
    "selling_price": 2550000,
    "km_driven": 40000,
    "fuel": "Petrol",
    "seller_type": "Individual",
    "transmission": "Automatic",
    "owner": "Second Owner"
  },
  {
    "name": "Honda Brio E MT",
    "year": 2013,
    "selling_price": 260000,
    "km_driven": 70000,
    "fuel": "Petrol",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "Second Owner"
  },
  {
    "name": "Maruti Swift VVT ZXI",
    "year": 2017,
    "selling_price": 550000,
    "km_driven": 60000,
    "fuel": "Petrol",
    "seller_type": "Individual",
    "transmission": "Manual",
    "owner": "First Owner"
  }]

let i = new Car(data, 0, 8);
console.log(Vehicle.description);
[...i];



