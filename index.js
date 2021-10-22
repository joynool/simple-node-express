const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => { res.send('Hello from node') });

const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com' },
    { id: 2, name: 'sabnoor', email: 'sabnoor@gmail.com' },
    { id: 3, name: 'srabonti', email: 'srabonti@gmail.com' },
    { id: 4, name: 'suchorita', email: 'suchorita@gmail.com' },
    { id: 5, name: 'soniya', email: 'soniya@gmail.com' },
    { id: 6, name: 'susmita', email: 'susmita@gmail.com' }
];

app.get('/users', (req, res) =>
{
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users)
    }
})

app.post('/users', (req, res) =>
{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    res.json(newUser);
})

app.get('/users/:id', (req, res) =>
{
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.listen(port, () => { console.log('Listening', 3000) });