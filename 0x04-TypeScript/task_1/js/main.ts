const testing = document.createElement('div');
testing.textContent = 'Testing';

document.body.appendChild(testing);
interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[attributeName: string]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false
};

console.log(teacher3);

const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17
};
console.log(director1);

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (
	firstName: string,
	lastName: string
) => `${firstName.charAt(0)}. ${lastName}`;

console.log(printTeacher('John', 'Doe'));

class StudentClass {
	firstName: string;
	lastName: string;
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework = () => 'Currently working';
	displayName = () => this.firstName;
}

const class1 = new StudentClass('John', 'Doe');

console.log(class1.workOnHomework());
console.log(class1.displayName());
