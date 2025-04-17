# Використовуємо офіційний образ Python
FROM python:3.9-slim 

# Встановлюємо робочу директорію всередині контейнера
WORKDIR /app

# Копіюємо файл залежностей
COPY requirements.txt requirements.txt

# Встановлюємо залежності
RUN pip install --no-cache-dir -r requirements.txt

# Копіюємо решту коду проекту
COPY . .

# Відкриваємо порт 8002 всередині контейнера (Django dev server за замовчуванням)
# Важливо: Це не публікує порт назовні, це лише інформація для Docker
EXPOSE 8002 

# Команда для запуску Django dev server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8002"]