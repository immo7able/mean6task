const { body, validationResult } = require('express-validator');

/**
 * Валидация данных пользователя с использованием express-validator
 */
module.exports = [
    // Проверка поля fullName
    body('fullName')
        .notEmpty().withMessage('Полное имя обязательно для заполнения')
        .isLength({ max: 100 }).withMessage('Полное имя не должно превышать 100 символов')
        .trim(),

    // Проверка поля job
    body('job')
        .notEmpty().withMessage('Профессия обязательна для заполнения')
        .isLength({ max: 100 }).withMessage('Профессия не должна превышать 100 символов')
        .trim(),

    // Проверка поля age
    body('age')
        .notEmpty().withMessage('Возраст обязателен для заполнения')
        .isInt({ min: 1, max: 120 }).withMessage('Возраст должен быть числом от 1 до 120'),

    // Проверка поля city
    body('city')
        .notEmpty().withMessage('Город обязателен для заполнения')
        .isLength({ max: 100 }).withMessage('Город не должен превышать 100 символов')
        .trim(),

    // Middleware для обработки ошибок валидации
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];