import * as jwt from 'jsonwebtoken';
import config from '../config';

export interface IPayload {
	userid: number;
}

export const createToken = (payload: IPayload) => {
	// jwt.sign makes a token, signed with a secret signature
	// payload is well .. an object with just userid in it
	// config.auth.secret is any string you want!  As long as it is consistent and HIDDEN FROM GITHUB
	// the expiresIn is optional but we don't want a token existing forever, so we choose to expire it in 15 days
	const token = jwt.sign(payload, config.auth.secret, { expiresIn: '15d' });
	return token;
};