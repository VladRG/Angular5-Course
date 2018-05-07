const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



const users = require('./data/users');

app.get('/', function (req, res) {
    res.send('hello');
});

app.get('/user', function (req, res) {

    let page = 0;
    let rows = 0;
    if (req.query.page) {
        page = parseInt(req.query.page);
    }

    if (req.query.rows) {
        rows = parseInt(req.query.rows);
    }

    const expectedEndIndex = page * rows + rows;
    const index = expectedEndIndex < users.length ? expectedEndIndex : users.length
    paginatedUsers = users.slice(page * rows, );


    res.statusCode = 200;
    res.send({
        users: paginatedUsers,
        total: users.length
    });

});

app.post('/user', function (req, res) {
    const user = users.filter(entity => entity.username === req.body.username)[0];
    if (user) {
        res.statusCode = 401;
        res.send('User exists');
    } else {
        users.push(req.body);
    }
});

app.put('/user/:username', function (req, res) {
    const user = users.filter(entity => entity.username === req.body.username)[0];
    if (!user) {
        res.statusCode = 404;
        res.send('User not found');
    } else {
        const index = users.indexOf(user);
        users.splice(index, 1, req.body);
        res.statusCode = 201;
        res.send();
    }
});

app.delete('/user/:username', function (req, res) {
    const user = users.filter(entity => entity.username === req.body.username)[0];
    if (!user) {
        res.statusCode = 404;
        res.send('User not found');
    } else {
        const index = users.indexOf(user);
        users.splice(index, 1);
        res.statusCode = 201;
        res.send();
    }
})

app.get('/user/:username', function (req, res) {
    const username = req.param('username');
    const user = users.filter(entity => entity.username === username)[0];
    if (user) {
        res.send(user);
    } else {
        res.statusCode = 404;
        res.send('User not found');
    }

});

app.post('/login', function (req, res) {
    const existingUser = users.filter((user) => user.username === req.body.username)[0];
    if (existingUser && existingUser.password === req.body.password) {
        res.statusCode = 200;
        res.setHeader('Authorization', JSON.stringify(req.body));
        res.send(req.body)
    } else {
        res.statusCode = 401;
        res.send('Bad Credentials!');
    }
});

app.post('/register', function (req, res) {
    const existingUser = users.filter((user) => user.username === req.body.username)[0];
    if (existingUser) {
        res.statusCode = 403;
        res.send(`A user with the user name ${req.body.username} already exists.`);
    } else {
        users.push(req.body);
        res.statusCode = 201;
        res.send(req.body);
    }
});

app.listen(3000);
console.log("Running on 3000");