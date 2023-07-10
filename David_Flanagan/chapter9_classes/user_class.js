/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */

function User(name, email, age, gender) {
  //check if the constructor has been initialized with the new keyword
  if(!(new.target)) return new User(name, email, age, gender)

  this.name = name
  this.email = email
  this.age = age
  this.gender = gender
}

User.prototype = {
  toString() {
    return `Name: ${this.name}\nEmail: ${this.email}\nAge: ${this.age}years\nGender: ${
      this.gender.toUpperCase() === 'M' ? 'Male' : this.gender.toUpperCase() === 'F' ? 'Female' : 'Not specified'
    }`;
  },
  valueOf() {
    return this.age
  },
  ageCheck() {
    let age = +this.age;
    if(age < 18)
      return "Young and requires parental guidance!"
    else if(age >= 18 && age < 35)
      return "Youthful age. All's good"
    else if(age >= 35 && age < 60)
      return "Requires filtered content for age recognition. Elders!"
    else
      return "Oops! We might not be able to render content for specified age! Sorry!"
  },
}

let user = new User("Frank", "me@mymail.com", 29, "m")
console.log(user.toString())
console.log(Number(user))
console.log(user.ageCheck())
