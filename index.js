const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const database = require('@replit/database');
const port = 3000;

const app = express();
const db = new database();

app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

var get = path => { app.get(path, (req, res) => { res.sendFile(__dirname + path) }) };

app.listen(port, () => {
    console.log(`App Listening On ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

get('/style.css');
get('/script.js');

app.get('/join', (req, res) => {
    res.sendFile(__dirname + '/join.html');
});

get('/join.css');
get('/join.js');

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

get('/login.css');
get('/login.js');

app.get('/order', (req, res) => {
    res.sendFile(__dirname + '/order.html');
});

get('/order.css');
get('/order.js');

get('/public/images/sbarro-featured.jpeg');
get('/public/images/chipotle-featured.jpeg');
get('/public/images/panda-express-featured.jpeg');
get('/public/images/chick-fil-a-featured.jpeg');
get('/public/images/shake-shack-featured.png');
get('/public/images/portillos-featured.jpeg');

get('/public/icons/online-shopping.png');
get('/public/icons/tacos.png');
get('/public/icons/convenient.png');
get('/public/icons/ramen.png');
get('/public/icons/cake-slice.png');
get('/public/icons/diet.png');
get('/public/icons/pizza.png');
get('/public/icons/donut.png');
get('/public/icons/burger.png');
get('/public/icons/coffee-cup.png');
get('/public/icons/fortune-cookie.png');
get('/public/icons/bagel.png');
get('/public/icons/wrap.png');
get('/public/icons/waffers.png');
get('/public/icons/chicken-leg.png');
get('/public/icons/cupcake.png');
get('/public/icons/hotdog.png');
get('/public/icons/salad.png');
get('/public/icons/falafel.png');
get('/public/icons/sushi.png');
get('/public/icons/french-fries.png');
get('/public/icons/pasta.png');
get('/public/icons/plant.png');
get('/public/icons/curry.png');

db.list().then(keys => {console.log(keys)});

app.post('/join', (req, res) => {

    const username = req.body.username;
    const email = req.body.email;
    const unhashed = req.body.password;

    db.list().then(keys => {
        if (username === keys) {
            res.redirect('https://deliverable.veenitxs.repl.co/join');
        } else {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(unhashed, salt, function(err, hash) {
                    const user = {
                        name: username,
                        email: email,
                        password: hash, 
                    };
                    db.set(`${user.name}`, user).then(() => {
                        console.log('user created!');
                    });
                });
            });
        
            res.redirect('https://deliverable.veenitxs.repl.co/order');
            
        }
    });
    
});

app.post('/login', (req, res) => {

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    // const compare = db.get("password").then(() => {
    //     console.log('Password fetched!');
    // });

    db.get(`${username}`).then(value => {

        if (value.name === username && value.email === email) {
            
            bcrypt.compare(password, value.password, function(err, result) {
                if (result) {
                    res.redirect('https://deliverable.veenitxs.repl.co/order');
                } else {
                    res.redirect('https://deliverable.veenitxs.repl.co/login');
                };
            });
            
        } else {

            res.redirect('https://deliverable.veenitxs.repl.co/login')
            
        }
        
    });
    
});

app.get('/checkout', (req, res) => {
    res.sendFile(__dirname + '/checkout.html');
});

get('/checkout.css');
get('/checkout.js');

app.get('/pickup', (req, res) => {
    res.sendFile(__dirname + '/pickup.html');
});

app.get('/success', (req, res) => {
    res.sendFile(__dirname + '/success.html');
});

get('/public/icons/success.jpg');
