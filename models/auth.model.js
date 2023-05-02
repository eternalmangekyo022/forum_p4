import db from './db.js'

export default async token => {
	const users = await db.query('select * from users where token = ?', token || 0)
	return users.length ? users[0]: null
}