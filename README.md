**06.02.2025 - Toursim Agency Project - Node, React**

# Turizm Agentligi Loyihasi

## Umumiy Ma'lumot
Ushbu loyiha **Node.js (Express) backend** va **React frontend** yordamida yaratilgan **Turizm Agentligi Veb Ilovasi** hisoblanadi. Platforma foydalanuvchilarga tur paketlarini ko‘rib chiqish, bron qilish va to‘lovlarni amalga oshirish imkoniyatini beradi. Tizim foydalanuvchi autentifikatsiyasi, administrator boshqaruvi va ko‘p tilli qo‘llab-quvvatlashni o‘z ichiga oladi.

## Xususiyatlar
### **Foydalanuvchilar Uchun:**
- Tur paketlarini batafsil tavsif bilan ko‘rib chiqish.
- Sayohatlarni bron qilish va boshqarish.
- Xavfsiz to‘lovlarni amalga oshirish.
- Foydalanuvchi autentifikatsiyasi va profil boshqaruvi.
- Bron qilish tarixini ko‘rish.
- Ko‘p tilli qo‘llab-quvvatlash (o‘zbek, rus, ingliz).

### **Administrator Uchun:**
- Tur paketlari uchun CRUD amallari.
- Foydalanuvchi hisoblarini va ruxsatlarini boshqarish.
- Bronlashlarni ko‘rish va boshqarish.
- Bron va to‘lovlar bo‘yicha hisobotlar yaratish.

## Texnologiyalar To‘plami
### **Backend:**
- Node.js (Express.js)
- SQLite (Yengil va oson sozlanadigan ma’lumotlar bazasi)
- Sequelize ORM (Ma’lumotlar bazasi amallari uchun)
- JWT (JSON Web Token orqali autentifikatsiya)
- Multer (Fayllarni yuklash uchun)

### **Frontend:**
- React.js (Zamonaviy UI framework)
- React Router (Klient tomon navigatsiya uchun)
- Axios (API so‘rovlar uchun)
- Bootstrap / Tailwind CSS (Moslashuvchan dizayn uchun)

## O‘rnatish va Sozlash
### **Backend Sozlash**
1. Repozitoriyani yuklab oling:
   ```bash
   git clone https://github.com/urinboy/tourism-agency.git
   cd tourism-agency/backend
   ```
2. Kerakli bog‘liqliklarni o‘rnating:
   ```bash
   npm install
   ```
3. Muhit o‘zgaruvchilarini sozlang:
   - Backend katalogida `.env` faylini yarating.
   - Ma’lumotlar bazasi URL, JWT maxfiy kaliti va boshqa sozlamalarni qo‘shing.

4. Ma’lumotlar bazasi migratsiyalarini bajaring:
   ```bash
   npx sequelize-cli db:migrate
   ```
5. Backend serverni ishga tushiring:
   ```bash
   npm start
   ```
   API `http://localhost:5000` da ishlaydi.

### **Frontend Sozlash**
1. Frontend katalogiga o‘ting:
   ```bash
   cd ../frontend
   ```
2. Bog‘liqliklarni o‘rnating:
   ```bash
   npm install
   ```
3. Frontend serverni ishga tushiring:
   ```bash
   npm start
   ```
   Frontend `http://localhost:3000` da mavjud bo‘ladi.

## API Endpointlar
### **Foydalanuvchi Autentifikatsiyasi**
- `POST /api/auth/register` - Yangi foydalanuvchini ro‘yxatdan o‘tkazish.
- `POST /api/auth/login` - Tizimga kirish va JWT token olish.
- `GET /api/auth/me` - Foydalanuvchi ma’lumotlarini olish.

### **Tur Paketlari**
- `GET /api/tours` - Barcha tur paketlarini olish.
- `POST /api/tours` - Yangi tur paketi yaratish (Faqat admin).
- `PUT /api/tours/:id` - Tur paketini yangilash (Faqat admin).
- `DELETE /api/tours/:id` - Tur paketini o‘chirish (Faqat admin).

### **Bron Qilish**
- `POST /api/bookings` - Yangi bron qilish.
- `GET /api/bookings` - Foydalanuvchining bronlari.
- `GET /api/bookings/all` - Barcha bronlarni olish (Faqat admin).
- `DELETE /api/bookings/:id` - Bronni bekor qilish.

## Litsenziya
Ushbu loyiha ochiq kodli bo‘lib, MIT litsenziyasi ostida taqdim etilgan.

