/// <reference path="Teacher.ts" />

namespace Subjects {
	export interface Teacher {
		experienceTeachingJava?: number;
	}
	export class Java extends Subject {
		getRequirements = () =>
			'Here is the list of requirements for Java';
		getAvailableTeacher = () =>
			this.teacher?.experienceTeachingJava !== undefined
				? `Available Teacher: ${this.teacher.firstName}`
				: 'No available teacher';
	}
}
