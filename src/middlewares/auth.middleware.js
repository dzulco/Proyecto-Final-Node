import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/jwt.js";

export function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).json({ message: "Token no enviado" });
    }

    const token = authHeader.split(" ")[1]; // Bearer TOKEN

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Token inválido" });
        }

        req.user = user; // payload decodificado
        next();
    });
}
