// validators/auth.js
const { body, validationResult } = require('express-validator');

const validateRegister = [
    body('username').isLength({ min: 3 }).withMessage('Username deve ter pelo menos 3 caracteres'),
    body('password').isLength({ min: 6 }).withMessage('Password deve ter pelo menos 6 caracteres')
];

const validateLogin = [
    body('username').notEmpty().withMessage('Username é obrigatório'),
    body('password').notEmpty().withMessage('Password é obrigatório')
];

module.exports = { validateRegister, validateLogin };