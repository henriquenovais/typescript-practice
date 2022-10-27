/*
    Types in Javascript:
    number
    string
    boolean
    null
    undefined
    object

    Types in typescript:
    + javascript types
    any
    unknown
    never
    enum
    tuple
*/

console.log("Hello World!")

let age = 20;
const sales = 123_456_789;

if (age < 50) {
	age += 50;
}

function testfunc(income: number, testnumber: number = 2022): number {
	income += testnumber;
	return 2022;
}

function main() {
	console.log('Hello World!');
}

let school: {
    readonly id: number,
    name: string,
    numberOfStudents: number,
    numberOfTeachers?: number
} = {
    id: 1,
    name: "awesome cool school",
    numberOfStudents: 59
}


main();
