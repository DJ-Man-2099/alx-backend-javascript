interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const a: Student = {
	firstName: 'John',
	lastName: 'Doe',
	age: 21,
	location: 'Nigeria'
};
const b: Student = {
	firstName: 'David',
	lastName: 'Mesak',
	age: 26,
	location: 'Cairo'
};

const studentsList: Student[] = [a, b];

const table = document.createElement('table');
const header = document.createElement('tr');
const firstName = document.createElement('th');
firstName.textContent = 'First Name';
const studentLocation = document.createElement('th');
studentLocation.textContent = 'Location';
header.appendChild(firstName);
header.appendChild(studentLocation);
table.appendChild(header);

studentsList.forEach((student) => {
	const row = document.createElement('tr');
	const currentFirstName = document.createElement('td');
	currentFirstName.textContent = student.firstName;
	const currentLocation = document.createElement('td');
	currentLocation.textContent = student.location;
	row.appendChild(currentFirstName);
	row.appendChild(currentLocation);
	table.appendChild(row);
});

document.body.appendChild(table);
