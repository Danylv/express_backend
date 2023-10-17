import express from 'express'
import { batchRead } from './dbf-database.js'
import cors from 'cors'

const PORT = 5000;

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    // console.log(req.query);
    // res.status(200).json(batchRead().then(res => (res)))
    batchRead().then(data => res.status(200).json(data))
})

app.post('/', (req, res) => {
    // console.log(req.query);
    console.log(req.body);
    res.status(200).json('Сервер работает')

})

app.listen(PORT, () => console.log('SERVER STARTTED ON PORT ' + PORT))