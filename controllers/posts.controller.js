import model from '../models/posts.model.js'

export default {
	async findById({ params: { postId }}, res) {
		res.json(await model.findById(postId))
	},

	async create({ params: { userId }, body: { head, body } }, res) {
		res.json(await model.create(userId, head, body))
	},

	async update({ params: { userId }, body: { head, body } }, res) {
		res.json(await model.update(userId, head, body))
	},

	async delete({ params: { postId } }, res) {
		res.json(await model.delete(postId))
	}
}