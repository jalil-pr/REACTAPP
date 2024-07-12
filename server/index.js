const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const createDB = require('./config/db');
createDB();


app.use(cors());
app.use(express.json());

const users = [{
    name: "Jalil Haidari",
    password: "23",
    role: "admin",
    email: "jalilhaidari53@gmail.com"
}];
function generateToken(data){
    console.log('sercret is::::', process.env.TOKEN_SECRET);
    return jwt.sign(data, process.env.TOKEN_SECRET,{expiresIn: '1800s'});
}

const authenticateJWT = (req, res, next)=>{
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
    
}

app.get('/user', authenticateJWT,(req, res) => {
    const {email} = req.user;

    const user = users.find(u => u.email === email);

    if(user){
        res.json({
            user: {
                email: user.email,
                name: user.name,
                role: user.role
            }
        });
    }else{
        res.status(401).send('Account does not exist');
    }
});

app.post('/user/register', (req, res)=>{
    const {username, email, password,} = req.body;
    console.log('details sent:', username)
    console.log('details sent:', email)
    console.log('details sent:', password);
    res.send('consider done!')

})


app.post('/user/login', (req, res) => {
    console.log('inside login')
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        const token = generateToken({role: user.role, email: user.email, name: user.name});

        res.json({
            accessToken: token,
            user: {
                email: user.email,
                name: user.name,
                role: user.role
            }
        });
    } else {
        res.status(401).send('Username or password incorrect');
    }
});


app.listen(5000, ()=>console.log('server started on port', 5000));