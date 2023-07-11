class User {
    constructor( name, age ){
        this.name = name;
        this.age = age;
    }
}

function printUserName( user ) {
    return user.name;
}

function printAge( user ) {
    return user.age;
}

export { User, printUserName, printAge };