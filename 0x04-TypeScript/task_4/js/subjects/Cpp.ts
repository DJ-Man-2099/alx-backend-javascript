/// <reference path="Teacher.ts" />

namespace Subjects {
	export interface Teacher {
		experienceTeachingC?: number;
	}
	export class Cpp extends Subject {
		getRequirements = () =>
			'Here is the list of requirements for Cpp';
		getAvailableTeacher = () =>
			this.teacher.experienceTeachingC !== undefined
				? `Available Teacher: ${this.teacher.firstName}`
				: 'No available teacher';
	}
}
