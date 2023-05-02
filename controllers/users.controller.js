import model from '../models/users.model.js'

export default {
	async findById({ params: { userId } }, res) {
		res.json(await model.findById(userId))
	},

	async create({ body: { firstName, lastName } }, res) {
		res.json(await model.create(firstName, lastName))
	},

	async update({ params: { userId }, body: { firstName, lastName }}, res) {
		res.json(await model.update(userId, firstName, lastName))
	},

	async delete({ params: { userId } }, res) {
		await model.delete(userId)
		res.json({ success: true })
	}
}