import model from '../models/comments.model.js'

export default {
	async findById({ params: { commentId } }, res) {
		res.json(await model.findById(commentId))
	},

	async findByPost({ params: { postId } }, res) {
		res.json(await model.findByPost(postId))
	},

	async create({ params: { postId }, body: { body } }, res )  {
		res.json(await model.create(postId, body))
	},

	async like({ params: { commentId } }, res) {
		await model.like(commentId)
		res.json({ success: true })
	},

	async update({params: { commentId}, body: { body } }, res) {
		res.json(await model.put(commentId, body))
	},

	async delete({params: { commentId }}, res) {
		res.json(await model.delete(commentId))
	}
}