import mysql from 'mysql2'

const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'forum'
})

export default {
	query: (q, val) => new Promise((res, rej) =>{
		db.query(q, val, (err, q) => {
			if(err) rej(err)
			res(q)
		})
	})
}