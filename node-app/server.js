const express = require('express'); // Підключаємо Express
const app = express();              // Створюємо додаток Express
const PORT = 3000;                  // Визначаємо внутрішній порт

// Обробник для головного маршруту ('/')
app.get('/', (req, res) => {
  res.send('Hello from Express.js!'); // Надсилаємо текстову відповідь
});

// Обробник для тестового маршруту ('/test')
app.get('/test', (req, res) => {
    res.send('Express.js test route is working!');
  });

// Запускаємо сервер, щоб він слухав запити на вказаному порту
app.listen(PORT, () => {
  console.log(`Node.js (Express) server listening on internal port ${PORT}`);
});