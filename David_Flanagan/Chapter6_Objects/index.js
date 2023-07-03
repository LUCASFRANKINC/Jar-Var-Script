/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
// no continue
/* eslint-disable no-continue */
// no hasOwnProperty
/* eslint-disable no-prototype-builtins */
// no guard-for-in
/* eslint-disable guard-for-in */

const data = {
  firstName: 'Lucas',
  lastName: 'Francis',
};

for (const d in data) {
  console.log(`${d} => ${data[d]}`);
}

let length = data.firstName?.length;
console.log(length);
// Accessing unavailable data
length = data.middleName?.length;
console.log(length);

// Enumerating props
const x = { a: 5, d: 10, m: 12 };
for (const objItems in x) {
  if (!x.hasOwnProperty(objItems)) continue; // skip any inherited property
}

for (const objItems in x) {
  if (typeof objItems === 'function') continue; // skip all methods
}

const detailsUser = {
  username : {firstName: "Francis", lastName: "Lucas"},
  gender: 'x',
  age: 28,
  email: "lucas@mydomain.net",
  address: {country: "Kenya", street: "Nairobi", postOfficeBox: 10109},
  toString() {
    let genderLowerCase = this.gender.toLowerCase();
    return `Name: ${this.username.firstName} ${this.username.lastName}\nGender: ${genderLowerCase === 'm' ? "Male" : genderLowerCase === 'f' ? "Female" : "Unspecified gender!"}\n` +
        `Age: ${this.age}\nEmail Address: ${this.email}\nAddress: ${this.address.postOfficeBox}-${this.address.street},${this.address.country}.`;
  },
  valueOf() {
    return this.age;
  }
}

console.log(detailsUser.toString(), Number(detailsUser));