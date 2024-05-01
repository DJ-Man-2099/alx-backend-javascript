/// <reference path="Teacher.ts" />

namespace Subjects {
	export interface Teacher {
		experienceTeachingReact?: number;
	}
	export class React extends Subject {
		getRequirements = () =>
			'Here is the list of requirements for React';
		getAvailableTeacher = () =>
			this.teacher?.experienceTeachingReact !== undefined
				? `Available Teacher: ${this.teacher.firstName}`
				: 'No available teacher';
	}
}
