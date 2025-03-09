````markdown
# Todo API на Express.js

## Установка

1. Клонировать репозиторий:

```bash
git clone https://github.com/ваш-репозиторий/todo-api.git
```
````

2. Установить зависимости:

```bash
cd todo-api
npm install
```

## Запуск проекта

**Разработка:**

```bash
npm run dev
```

**Продакшен:**

```bash
npm start
```

Сервер будет доступен по адресу: `http://localhost:3000`

Простое REST API для управления задачами (todo list), реализующее базовые CRUD-операции. Учебный проект для демонстрации работы с Express.js.

## Основные возможности

- Создание задач
- Просмотр списка задач
- Обновление задач
- Удаление задач
- Валидация входных данных
- Логирование запросов
- Централизованная обработка ошибок

## Технологии

- Node.js
- Express.js
- Встроенное хранилище данных (in-memory)

## Структура проекта

```
src/
├── app.js          # Инициализация приложения
├── server.js       # Запуск сервера
├── routes/         # Маршруты API
├── controllers/    # Логика обработки запросов
├── models/         # Работа с данными
├── middleware/     # Промежуточное ПО
└── config/         # Конфигурация
```

## Особенности реализации

- Валидация входных данных
- Автоматическая генерация ID
- Логирование всех запросов
- Кастомные сообщения об ошибках
- Чистая архитектура MVC
- Модульная структура кода

## Рекомендации по развитию

1. Добавить базу данных (MongoDB/PostgreSQL)
2. Реализовать аутентификацию пользователей
3. Добавить пагинацию для списка задач
4. Настроить окружения (development/production)
5. Реализовать полноценную документацию API
6. Добавить unit-тесты

## Лицензия

Этот проект распространяется под лицензией MIT. Подробнее см. в файле [LICENSE](LICENSE).

---

Разработано для образовательных целей. При поддержке сообщества разработчиков Node.js.

````

Этот README включает:
1. Общее описание проекта
2. Технологический стек
3. Инструкции по установке и запуску
4. Примеры использования API
5. Описание структуры проекта
6. Планы по дальнейшему развитию
7. Информацию о лицензии

Формат адаптирован для русскоязычных разработчиков и содержит всю необходимую информацию для начала работы с проектом.

```markdown
# Примеры запросов через Postman

## 1. Получение всех задач (GET)
**URL:** `GET http://localhost:3000/tasks`

**Пример ответа (200 OK):**
```json
[
  {
    "id": 1,
    "title": "Изучить Express",
    "completed": false
  },
  {
    "id": 2,
    "title": "Создать API",
    "completed": true
  }
]
````

---

## 2. Создание задачи (POST)

**URL:** `POST http://localhost:3000/tasks`

**Headers:**

```
Content-Type: application/json
```

**Тело запроса:**

```json
{
  "title": "Новая задача"
}
```

**Успешный ответ (201 Created):**

```json
{
  "id": 3,
  "title": "Новая задача",
  "completed": false
}
```

**Ошибка (400 Bad Request) - нет title:**

```json
{
  "error": "Название задачи обязательно для заполнения"
}
```

---

## 3. Получение задачи по ID (GET)

**URL:** `GET http://localhost:3000/tasks/1`

**Успешный ответ (200 OK):**

```json
{
  "id": 1,
  "title": "Изучить Express",
  "completed": false
}
```

**Ошибка (404 Not Found):**

```json
{
  "error": "Задача не найдена"
}
```

---

## 4. Обновление задачи (PUT)

**URL:** `PUT http://localhost:3000/tasks/1`

**Headers:**

```
Content-Type: application/json
```

**Тело запроса:**

```json
{
  "title": "Обновленная задача",
  "completed": true
}
```

**Успешный ответ (200 OK):**

```json
{
  "id": 1,
  "title": "Обновленная задача",
  "completed": true
}
```

**Ошибка (400 Bad Request) - слишком длинный title:**

```json
{
  "error": "Название задачи не должно превышать 100 символов"
}
```

---

## 5. Удаление задачи (DELETE)

**URL:** `DELETE http://localhost:3000/tasks/2`

**Успешный ответ:**  
Статус 204 No Content (тело ответа пустое)

**Ошибка (404 Not Found):**

```json
{
  "error": "Задача не найдена"
}
```

---

## Советы по работе в Postman:

1. Создайте новую коллекцию "Todo API"
2. Добавьте environment variables:
   - `base_url`: `http://localhost:3000`
3. Для тестирования используйте:
   - Автоматический подстановку `{{base_url}}` в URL
   - Тестовые сценарии (примеры выше)
4. Экспортируйте коллекцию для совместной работы

```

Этот гайд:
1. Покрывает все CRUD-операции
2. Показывает как успешные сценарии, так и обработку ошибок
3. Включает примеры заголовков и тел запросов
4. Дает советы по организации коллекции в Postman
5. Подходит как для начинающих, так и для опытных пользователей
```
#   m e a n 6 t a s k  
 