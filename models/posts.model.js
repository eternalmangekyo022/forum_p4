import db from './db.js'

export default {
	async findById(id) {
		return (await db.query('select * from posts where id = ?', id))[0]
	},

	async create(userId, head, body) {
		const { insertId } = await db.query('insert into posts(userId, head, body) values(?, ?, ?)', [userId, head, body])
		return (await db.query('select * from posts where id = ?', insertId))[0]
	},

	async update(id, head, body) {
		await db.query('update posts set head = ?, body = ? where id = ?', [head, body, id])
		return (await db.query('select * from posts where id = ?', id))[0]
	},

	async delete(id) {
		await db.query('delete from posts where id = ?', id)
		return { success: true }
	},

	async like(id) {
		await db.query('update posts set likes = likes + 1 where id = ?', id)
	}
}