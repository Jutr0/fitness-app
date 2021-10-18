export const validateEmail = (value: string) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(value).toLowerCase());
};

export const validatePassword = (value: string) => {
	return value.length > 5;
};

export const validateRepPassword = (password: string, repPassword: string) => {
	return password === repPassword;
};
