export const passwordMatch = (value, form) => {
	if (value !== form.values.password) {
		return { passwordMatch: true };
	}
};
