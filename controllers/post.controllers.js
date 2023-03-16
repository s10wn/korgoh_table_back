const db = require('../db')

class PostController {
    async createMaterial(req, res){
        const {title, price, user_id} = req.body
        const newPost = await db.query(`INSERT INTO material (title, price, user_id) values ($1, $2, $3) RETURNING *`, [title, price, user_id])

        res.json(newPost.rows[0])
    }

    async getMaterialByOrder(req, res){
        const id = req.query.id
        const posts = await db.query(`select * from material where user_id = $1` , [id])
        res.json(posts.rows)
    }

}

module.exports = new PostController()