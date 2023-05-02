// @deno-types="npm:@types/express"
import express from 'express'
import controller from '../controllers/comments.controller.js'

export default (app, use) => {
	const router = express.Router({ mergeParams: true })

	router.get('/:commentId', use(controller.findById))
	router.get('/', use(controller.findByPost))
	router.post('/', use(controller.create))
	router.put('/:commentId', use(controller.update))
	router.delete('/:commentId', use(controller.delete))
	router.patch('/:commentId', use(controller.like))

	app.use('/:postId/comments', router)
}