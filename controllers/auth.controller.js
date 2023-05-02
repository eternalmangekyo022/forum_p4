import auth from '../models/auth.model.js'

export default login => async(req, res, next) => {
	const token = login ? req.body.token: req.headers.authorization
	const user = await auth(token)

	if(!user && !login) res.status(403).json({ status: 'error', message: 'Unauthorized' })
	else if(!user) res.status(403).json({ status: 'error', message: 'Unknown error' })
	else if(login) res.json({ status: 'success', user })
	else {
		req.user = user
		next()
	}

}