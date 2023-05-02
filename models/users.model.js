import db from './db.js'

export default {
	async findById(id) {
		return (await db.query('select * from users where id = ?', id))[0]
	},

	async create(firstName, lastName) {
		const { insertId }  = await db.query('insert into users(firstName, lastName) values(?, ?)',[firstName, lastName])
		return (await db.query('select * from users where id = ?', insertId))[0]
	},

	async update(id, firstName, lastName) {
		await db.query('update users set firstName = ?, lastName = ? where id = ?', [firstName, lastName, id])
		return (await db.query('select * from users where id = ?', id))[0]
	},

	async delete(id) {
		await db.query('delete from users where id = ?', id)
	}
}