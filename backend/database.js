const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./tourism-agency.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    phone_number TEXT,
    registration_date TEXT DEFAULT CURRENT_TIMESTAMP
  )`);
  
  db.run(`CREATE TABLE IF NOT EXISTS tours (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL,
    start_date TEXT,
    end_date TEXT,
    max_tourists INTEGER
  )`);
  
  db.run(`CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    tour_id INTEGER,
    booking_date TEXT DEFAULT CURRENT_TIMESTAMP,
    payment_status TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(tour_id) REFERENCES tours(id)
  )`);
  
  db.run(`CREATE TABLE IF NOT EXISTS payments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    booking_id INTEGER,
    amount REAL NOT NULL,
    payment_date TEXT DEFAULT CURRENT_TIMESTAMP,
    payment_method TEXT,
    FOREIGN KEY(booking_id) REFERENCES bookings(id)
  )`);
  
  db.run(`CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    tour_id INTEGER,
    rating INTEGER NOT NULL,
    text TEXT,
    review_date TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(tour_id) REFERENCES tours(id)
  )`);
});

module.exports = db;