export const validGrade = (value) => {
	if (value >= 0 && value <= 5) {
		return null;
	} else {
		return { validGrade: 'grade should be between 0 and 5' };
	}
};
