# NiroKhorshid – Solar Power Plant Management System

**NiroKhorshid** (meaning *Solar Power* in Persian) is a Persian web application designed to present **solar power plant design and implementation services**.
The platform includes a public website for customers and a complete **admin panel** for managing content, products, and projects.

---

# Features

## Public Website

* 🏠 Home page introducing solar energy services
* 📋 About Us page
* 🛠️ Services overview
* 📦 Products with category support
* 🏗️ Project portfolio
* 📞 Contact page for customer inquiries

## Admin Panel

* Product management (create, edit, delete)
* Category management
* Project management
* Service management
* Viewing and managing contact messages
* Site configuration settings

---

# Technical Stack

Frontend

* **Next.js 15 (App Router)**
* **React**
* **Tailwind CSS**

Features

* Full **RTL support** for Persian language
* **Responsive design** for mobile and desktop
* **SEO optimization**

Backend / Data

* **MySQL Database**
* Server-side logic with **Next.js**

---

# Installation

## 1. Clone the repository

```bash
git clone https://github.com/ghaseminaeeme/nirokhorshid.git
cd nirokhorshid
```

## 2. Install dependencies

```bash
npm install
# or
yarn install
```

---

# Database Setup

Detailed instructions are available in:

`DATABASE_SETUP.md`

Quick steps:

1. Create a **MySQL database**
2. Run the SQL script located in:

```
database/nirokhorshid_complete.sql
```

3. Configure the environment variables.

---

# Environment Variables

Create a file named:

```
.env.local
```

Example configuration:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=nirokhorshid
```

---

# Run the Development Server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:3000
```

---

# Project Structure

```
nirokhorshid
│
├── app/                # Next.js App Router pages
│   ├── page.tsx        # Home page
│   ├── about/
│   ├── services/
│   ├── products/
│   ├── projects/
│   ├── contact/
│   └── admin/          # Admin dashboard
│
├── components/         # React components
│
├── lib/                # Utility and database logic
│   ├── db.ts           # MySQL connection
│   ├── products.ts
│   └── projects.ts
│
├── database/           # SQL files
│   └── nirokhorshid_complete.sql
│
└── public/             # Static assets
```

---

# Deployment

## Deploy on Vercel

```bash
vercel
```

## Deploy on Shared Hosting

1. Upload the project files
2. Create a MySQL database
3. Run the SQL script
4. Configure environment variables
5. Build the project

```bash
npm run build
```

---

---

# Contributing

Contributions are welcome.

If you'd like to improve the project:

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Submit a Pull Request

---

# License

MIT License
