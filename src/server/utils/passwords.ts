import * as bcrypt from 'bcrypt';

export const generateHash = (password: string) => {
	// https://en.wikipedia.org/wiki/Salt_(cryptography)
	const salt = bcrypt.genSaltSync(12);
	const hash = bcrypt.hashSync(password, salt);

	return hash;
};

export const comparePasswords = (password: string, hash: string) => {
	return bcrypt.compareSync(password, hash);
};