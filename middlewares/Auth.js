const { verify } = require('jsonwebtoken');

const Authmiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: "Cabeçalho de autorização inválido ou ausente" });
    }

    const accessToken = authHeader.split(' ')[1];

    verify(accessToken, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(401).json({ error: "Token inválido ou expirado" });
        }

        req.user = user;
        next();
    });
};

module.exports = Authmiddleware;