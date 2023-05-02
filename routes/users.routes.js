// @deno-types="npm:@types/express"
import express from 'express'
import controller from '../controllers/users.controller.js'

export default (app, use) => {
	const router = express.Router({ mergeParams: true })

	router.get('/:userId', use(controller.findById))
	router.post('/', use(controller.create))
	router.put('/:userId', use(controller.update))
	router.delete('/:userId', use(controller.delete))

	app.use('/users', router)
	return router
}