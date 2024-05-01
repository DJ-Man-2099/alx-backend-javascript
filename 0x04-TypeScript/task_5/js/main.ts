const testing = document.createElement('div');
testing.textContent = 'Testing';

document.body.appendChild(testing);

interface MajorCredits {
	credits: number;
	isMajor: any;
}

interface MinorCredits {
	credits: number;
	isMinor: any;
}

const sumMajorCredits = (
	subject1: MajorCredits,
	subject2: MajorCredits
): MajorCredits => ({
	credits: subject1.credits + subject2.credits,
	isMajor: null
});
const sumMinorCredits = (
	subject1: MinorCredits,
	subject2: MinorCredits
): MinorCredits => ({
	credits: subject1.credits + subject2.credits,
	isMinor: null
});
