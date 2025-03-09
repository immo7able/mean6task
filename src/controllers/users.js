const User = require('../models/User');
const Task = require('../models/Task');

module.exports = {
    // Получить всех пользователей
    getAllUsers(req, res) {
        res.json(User.getAll());
    },

    // Получить пользователя по ID
    getUserById(req, res) {
        const user = User.getById(Number(req.params.id));

        if (!user) {
            return res.status(404).json({ error: "Пользователь не найден" });
        }

        res.json(user);
    },

    // Создать нового пользователя
    createUser(req, res) {
        const { fullName, job, age, city } = req.body;
        if (!fullName || !job || !age || !city) {
            return res.status(400).json({ error: "Все поля обязательны" });
        }
        const newUser = User.create(req.body);
        res.status(201).json(newUser);
    },

    // Обновить существующего пользователя
    updateUser(req, res) {
        const updatedUser = User.update(Number(req.params.id), req.body);
        if (!updatedUser) {
            return res.status(404).json({ error: "Пользователь не найден" });
        }
        res.json(updatedUser);
    },

    // Удалить пользователя
    deleteUser(req, res) {
        const userId = parseInt(req.params.id);
        const isDeleted = User.delete(Number(req.params.id));
        if (!isDeleted) {
            return res.status(404).json({ error: "Пользователь не найден" });
        }
        Task.deleteAllByUserId(userId);
        res.status(204).send();
    },
};