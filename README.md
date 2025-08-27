PopX Project Overview
Introduction
PopX is a React-based web application designed to provide a user authentication flow, including home, sign-up, login, and profile pages. The application uses react-router-dom for routing, react-hot-toast for notifications, and Tailwind CSS for styling. It features a clean, responsive UI with a focus on user experience.
Features

Home Page: Welcomes users with options to create an account or log in.
Sign-Up Page: Allows users to register with details like full name, phone number, email, password, company name, and agency status.
Login Page: Provides a form for users to log in with their email and password.
Profile Page: Displays user information, including a profile picture, name, email, and a brief description.
Responsive Design: Optimized for various screen sizes using Tailwind CSS.
Form Validation: Ensures required fields are filled before enabling submission buttons.
Simulated API Calls: Uses timeouts to mimic API delays for sign-up and login actions.
Notifications: Displays success messages using react-hot-toast upon successful sign-up or login.

Tech Stack

Frontend: React, JavaScript
Routing: react-router-dom
Styling: Tailwind CSS
Notifications: react-hot-toast
Icons: @heroicons/react
Development Environment: Vite or Create React App (assumed based on standard React setup)

File Structure

App.jsx: Main component defining routes for the application.
components/Home.jsx: Renders the home page with navigation to sign-up and login.
components/SignUp.jsx: Handles user registration with form validation and simulated API calls.
components/Login.jsx: Manages user login with form validation and simulated API calls.
components/Profile.jsx: Displays user profile information with a static avatar and description.
style.css: Custom CSS (if any) to supplement Tailwind CSS.

Installation and Setup

Clone the Repository:git clone (https://github.com/Abdul-Samad-75/EducaseIndia.git)
cd vite-project


Install Dependencies:npm install


Install Required Packages:npm install react-router-dom react-hot-toast @heroicons/react


Run the Application:npm start

The app will be available at http://localhost:3000 (or the port specified by your setup).

Usage

Navigate to / to view the home page.
Click "Create Account" to go to /signup and register a new user.
Click "Already Registered? Login" to go to /login and sign in.
Upon successful login, users are redirected to /profile to view their account details.

Future Improvements

Integrate a real backend API for authentication and data storage.
Add form input validation (e.g., email format, password strength).
Enhance the profile page with editable fields and file uploads for profile pictures.
Implement logout functionality and protected routes.
Add error handling for failed sign-up/login attempts.

Notes

The application currently uses static data for the profile page (e.g., name: "Marry Doe", email: "Marry@Gmail.Com").
Simulated API calls are implemented with a 2-second delay for demonstration purposes.
The UI is styled with Tailwind CSS, ensuring a modern and responsive design.
