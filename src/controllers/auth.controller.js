import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { JWT_SECRET, JWT_EXPIRES } from "../config/jwt.js";

const fakeUser = {
  id: "123",
  email: "admin@admin.com",
  password: "$2b$10$lnPE3tru3MF2.zvDrTYd6ON8aac5nLCv81D22KkISP45LMUP3tWOu" // password real: 123456
};



export async function login(req, res) {

    
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email y password requeridos" });
    }

    // validar email
    if (email !== fakeUser.email) {
        return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // validar password
    const isMatch = await bcrypt.compare(password, fakeUser.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // crear token
    const token = jwt.sign(
        {
            id: fakeUser.id,
            email: fakeUser.email
        },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES }
    );

    return res.json({
        message: "Login exitoso",
        token: `Bearer ${token}`
    });
}
