import { User, printUserName, printAge } from './fileModules.mjs'

const user = new User("Francis" , 29)

alert(`Howdy ${printUserName(user)}. You are ${printAge(user)} years old.`)