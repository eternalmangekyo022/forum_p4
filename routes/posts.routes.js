// @deno-types="npm:@types/express"
import express from 'express'
import controller from '../controllers/posts.controller.js'

export default(app, use) => {
	const router = express.Router({ mergeParams: true })

	router.get('/:postId', use(controller.findById))
	router.post('/', use(controller.create))
	router.put('/:postId', use(controller.update))
	router.delete('/:postId', use(controller.delete))

	app.use('/:userId/posts', router)
	return router
}