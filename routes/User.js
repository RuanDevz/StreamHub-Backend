const express = require('express');
const Router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');
const { sign, verify } = require('jsonwebtoken'); 
const Authmiddleware = require('../middlewares/Auth');


Router.get('/', async (req, res) => {
    const allUsers = await User.findAll();
    res.json(allUsers);
});

Router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    const existinguser = await User.findOne({where: {username}})

    if(existinguser){
        return res.json({error: "Usuario já existente"})
    }

    await User.create({
        username,
        password: hashPassword
    });

    res.status(200).json({ msg: "Usuário criado com sucesso!" });
});

Router.post('/auth', async (req,res) =>{
    const {username, password} = req.body

    const user = await User.findOne({where: {username}})

    if(!user || !bcrypt.compareSync(password, user.password)){
        return res.status(401).json({error: "Credenciais incorretas"})
    }

    const accessToken = sign({username: user.username, id: user.id}, "Tokenimportant")

    res.json({accessToken, user})
});

Router.get('/dashboard', Authmiddleware, (req, res) => {
    res.json({ message: "Bem vindo ao Dashboard", user: req.user });
});


module.exports = Router;
