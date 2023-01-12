var cookie = require('cookie');

export function parseCookies( req: any ) {
	return cookie.parse( req.headers.cookie ? req.headers.cookie : '' );
}

export function getAuthToken( req: any ) {
	const cookies = parseCookies( req );

	return cookies.auth || '' ;
}