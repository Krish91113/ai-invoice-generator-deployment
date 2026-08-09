# AI Invoice Generator

An AI-powered invoice generation platform that enables users to create, manage, and export professional invoices in seconds. The application combines traditional invoice management with Google Gemini AI to automatically generate structured invoice data from natural language prompts.

**Live Demo:** https://ai-invoice-generator-5tpt.onrender.com/

---

## Overview

Creating invoices manually is repetitive and time-consuming, especially for freelancers, startups, and small businesses.

This application simplifies the process by allowing users to describe their invoice in plain English, after which AI automatically extracts the required information and generates a complete invoice ready for editing and saving.

In addition to AI generation, the platform supports complete invoice lifecycle management including creating, updating, viewing, and deleting invoices.

---

## Features

### AI Invoice Generation
- Generate invoices using natural language prompts
- Powered by Google Gemini AI
- Automatically extracts:
  - Client details
  - Invoice items
  - Quantity
  - Pricing
  - Tax
  - Due dates
  - Notes

### Invoice Management
- Create invoices manually
- Edit existing invoices
- Delete invoices
- View invoice history
- Retrieve invoices individually

### Business Profile
- Store business information
- Auto-fill sender details while creating invoices

### Authentication
- Secure user authentication using Clerk
- User-specific invoice management

### Modern UI
- Responsive React interface
- Fast Vite development environment
- Clean invoice editing experience

---

## Tech Stack

### Frontend

- React.js
- Vite
- React Router
- Tailwind CSS

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- Clerk Authentication

### AI

- Google Gemini API

### Deployment

- Render

---

## Architecture

```
                React + Vite
                       │
                       │ REST API
                       ▼
                Express.js Server
                 │      │      │
                 │      │      │
                 ▼      ▼      ▼
           Gemini AI  MongoDB  Clerk Auth
```

---

## Project Structure

```
AI-Invoice-Generator
│
├── frontend
│   ├── src
│   ├── public
│   └── components
│
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── uploads
│
└── package.json
```

---

## API Modules

### Invoice APIs

```
GET     /api/invoice
GET     /api/invoice/:id
POST    /api/invoice
PUT     /api/invoice/:id
DELETE  /api/invoice/:id
```

---

### Business Profile APIs

```
/api/businessProfile
```

---

### AI Invoice APIs

```
POST /api/ai/generate
```

Input

```json
{
  "prompt": "Create an invoice for John Doe for website development worth $1200 due next Friday."
}
```

The AI converts the prompt into structured invoice JSON which can be edited and saved.

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/ai-invoice-generator.git
```

---

### Install Dependencies

```bash
npm install

cd frontend
npm install
```

---

### Environment Variables

Create a `.env` file.

```env
MONGODB_URI=your_mongodb_connection

CLERK_SECRET_KEY=your_clerk_secret

GEMINI_API_KEY=your_gemini_key

PORT=4000
```

---

### Run Development Server

Backend

```bash
npm run dev
```

Frontend

```bash
cd frontend

npm run dev
```

---

## Production Build

```bash
npm run build

npm start
```

---

## Screenshots

Add screenshots here.

```
Home Page

Invoice Dashboard

AI Prompt Generator

Invoice Editor
```

---

## Future Improvements

- PDF Export
- Email Invoice to Client
- Payment Gateway Integration
- Multi-Currency Support
- Invoice Templates
- Analytics Dashboard
- Recurring Invoices
- GST/VAT Support
- Dark Mode

---

## Learning Outcomes

This project demonstrates practical experience with:

- REST API Development
- MERN Stack Architecture
- AI API Integration
- Prompt Engineering
- Authentication & Authorization
- MongoDB Data Modeling
- CRUD Operations
- Deployment on Render
- Full Stack Application Development

---

## Live Application

https://ai-invoice-generator-5tpt.onrender.com/

---

## Author

**Krish**

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourprofile
