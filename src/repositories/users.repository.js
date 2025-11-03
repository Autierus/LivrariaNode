const db = require('../database/sqlite');
const User = require('../models/user.model');

class UsersRepository {
    // Buscar usuário pelo ID
    async findById(id) {
        const row = await db.get('SELECT id, username, email, nome, created_at FROM users WHERE id = ?', [id]);
        return row ? User.fromDB(row) : null;
    }

    // Buscar usuário pelo username
    async findByUsername(username) {
        const row = await db.get('SELECT id, username, email, nome, password_hash, created_at FROM users WHERE username = ?', [username]);
        return row || null; // Inclui email, nome e password_hash
    }

    // Criar um novo usuário
    async create({ username, passwordHash, email, nome }) {
        const result = await db.run(
            'INSERT INTO users (username, password_hash, email, nome) VALUES (?, ?, ?, ?)', 
            [username, passwordHash, email, nome]
        );
        console.log(result);
        const row = await db.get('SELECT id, username, email, nome, created_at FROM users WHERE id = ?', [result.lastInsertRowid]);
        return User.fromDB(row);
    }
}

module.exports = UsersRepository;
