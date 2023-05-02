// @deno-types="npm:@types/express"
import express from 'express'
import users from './routes/users.routes.js'
import posts from './routes/posts.routes.js'
import comments from './routes/comments.routes.js'
import auth from './controllers/auth.controller.js'

const app = express()
app.use(express.json())

const use = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)

app.use(/\/users/, use(auth(false)))
app.post('/login', use(auth(true)))

comments(posts(users(app, use), use), use)

app.use((err, _req, res, _next) => {
	console.log(err)
	if(err === 403) res.status(403).json({ status: 'error', message: 'Not admin'})
	else res.status(403).json({ status: 'error', message: 'Unknown error'})
})

const PORT = 80 || process.env.PORT

app.listen(PORT, () => console.log(PORT))