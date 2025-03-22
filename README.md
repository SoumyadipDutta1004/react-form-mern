# React Form Application

A full-stack application with a React frontend and Express backend for user registration and authentication.

## Project Structure

The project is divided into two main parts:

- **Frontend**: React application built with Vite, React Hook Form, and Tailwind CSS.
- **Backend**: Express server with MongoDB database.

## Features

- User registration with form validation.
- Password hashing with bcrypt.
- JWT authentication.
- MongoDB database integration.
- Real-time form validation with React Hook Form.
- Responsive UI with Tailwind CSS.

## Tech Stack

### Frontend
- React 19
- Vite
- React Hook Form
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing

## Getting Started

### Prerequisites
- Node.js
- MongoDB running locally or a MongoDB Atlas account

### Installation

1. **Clone the repository**  
```bash
 git clone https://github.com/SoumyadipDutta1004/react-form-mern.git
 cd react-form-mern
```

2. **Install dependencies for the backend**  
```bash
 cd backend
 bun install
```

3. **Install dependencies for the frontend**  
```bash
 cd ../frontend
 bun install
```

4. **Run the backend server**  
```bash
 cd backend
 bun run dev
```

5. **Run the frontend application**  
```bash
 cd frontend
 bun run dev
```

6. **Open your browser and navigate to**  
```
http://localhost:5173
```

## API Endpoints

- `POST /user/create` - Register a new user.


