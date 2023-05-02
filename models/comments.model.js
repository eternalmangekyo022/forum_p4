import db from './db.js'

export default {
	async findByPost(id) {
		return await db.query('select * from comments where postId= ?', id)
	},

	async findById(id) {
		return (await db.query('select * from comments where id= ?', id))[0]
	},

	async put(id, body) {
		await db.query('update comments set body = ? where id = ?', body)
		return (await db.query('select * from comments where id = ?', id))[0]
	},

	async delete(id) {
		await db.query('delete from comments where id = ?', id)
		return { success: true }
	},

	async like(id) {
		await db.query('update comments set likes = likes + 1 where id = ?', id)
	},

	async create(id, body) {
		const { insertId } = await db.query('insert into comments(postId, body) values(?, ?)', [id	, body])
		return (await db.query('select * from comments where id = ?', insertId))[0]
	}
}