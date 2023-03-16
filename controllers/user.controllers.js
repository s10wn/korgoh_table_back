const db = require('../db')

class UserController {
    async createOrder(req, res){
        const { name, address, created_date, end_date, 
            actual_date, 
            price,
            prepayment, 
            rest, 
            status, 
            comment, 
            difficulty, 
            responsible,deal  } = req.body
        const newPerson = await db.query(`INSERT INTO orders (name, address, created_date, end_date, 
            actual_date, 
            price,
            prepayment, 
            rest, 
            status, 
            comment, 
            difficulty, 
            responsible, 
            deal) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12, $13) RETURNING *`, [name, address, created_date, end_date, actual_date, 
                price,
                prepayment, 
                rest, 
                status, 
                comment, 
                difficulty, 
                responsible, deal])

        res.json(newPerson.rows[0])

    }
    async getOrder(req, res){
        const users = await db.query('SELECT * FROM orders')
        res.json(users.rows)
    }
    async getOneOrder(req, res){
        const id = req.params.id
        const users = await db.query('SELECT * FROM orders where id = $1', [id])
        res.json(users.rows[0])

    }
    async updateOrder(req, res){
        const {id, name, surname} = req.body
        const user = await db.query('UPDATE orders set name = $1, surname = $2 where id = $3 RETURNING *', [name,surname,id])
        res.json(user.rows[0])
    }
    async deleteOrder(req, res){
        const id = req.params.id
        const user = await db.query('DELETE FROM orders where id = $1', [id])
        res.json(user.rows[0])
    }
}

module.exports = new UserController()
