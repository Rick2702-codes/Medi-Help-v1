# Medi-Help Learning Guide

This guide explains the Medi-Help frontend and backend in beginner-friendly terms for the user and the two project collaborators. Keep both sides documented so the team can understand the complete flow from user interaction to stored data and API behavior.

## Current Learning Scope

Study the application as one full-stack system:

1. Frontend pages and user interactions
2. React routing and form state
3. Shared theme behavior and CSS Modules
4. MongoDB and Mongoose models
5. Input validation and safe error handling
6. Password hashing with bcrypt
7. Signup and login controllers
8. Express routes and API calls
9. JWT authentication and middleware
10. SMS/email notification services and scheduled reminders
11. API and end-to-end testing

When new code is added, update the relevant frontend and backend explanations together so the connection between them stays clear.

## How We Work

- Before starting a new work session, inspect the current codebase and recent changes.
- Treat changes that were not previously discussed as work from one of the project collaborators.
- Understand existing changes before editing related files; do not overwrite collaborator work.
- Explain every substantive code addition in simple terms after implementing it.
- Keep the project useful and production-minded while using each feature as a learning opportunity.

## Current Backend Structure

The backend is in `server/` and currently uses:

- Node.js to run JavaScript outside the browser
- Express to create the HTTP API
- MongoDB with Mongoose to store and validate data
- CommonJS modules using `require` and `module.exports`

### Backend responsibilities

- **Models** define the shape and basic rules of stored data.
- **Controllers** receive requests and decide what should happen.
- **Routes** connect URLs and HTTP methods to controllers.
- **Services** hold reusable business logic, such as sending notifications.
- **Middleware** runs between the request and controller, for example to check a JWT.
- **Utils** hold small reusable helpers.
- **Config** holds setup values such as environment configuration.

We will add these pieces gradually so each responsibility stays understandable.

## Current Frontend Structure

The frontend is in `client/` and currently uses:

- React for building reusable UI components
- TypeScript for safer JavaScript with type checking
- Vite for the development server and production build
- React Router for moving between auth pages without full page reloads
- CSS Modules for page-specific styling

### Frontend responsibilities

- **Pages** render complete user-facing screens.
- **React state** stores temporary form values and UI choices.
- **Routes** decide which page appears for each URL.
- **CSS Modules** keep page styles scoped to their component.
- **App-level state** controls behavior shared by multiple routes, such as the theme.

### Completed frontend auth flow

The current routes are:

- `/` renders the login page.
- `/signup` renders the account creation page.
- `/forgot-password` renders the password recovery page.

The sign-up form collects first name, last name, email, mobile number, password, and password confirmation. It validates the password locally, sends the form to `POST http://localhost:5000/api/auth/signup`, displays server or network errors, and redirects to login only after a successful HTTP response.

### Signup request flow

When the user submits the signup form:

1. The browser sends the form data with `fetch`.
2. The frontend waits for the server response.
3. A non-success response such as `400` or `409` is shown on the signup page.
4. A network failure shows a connection error instead of redirecting.
5. Only a successful response allows navigation back to the login page with a temporary success message.

This is important because calling `fetch` successfully does not necessarily mean the account was created. The HTTP response status must also be checked.

The current frontend sends the request to the purpose-specific endpoint `POST http://localhost:5000/api/auth/signup`. The `/api` segment identifies API routes, `/auth` groups authentication operations, and `/signup` identifies the account-creation action.

While the signup request is in progress, a generic full-screen spinner overlay blocks interaction with the page. The overlay disappears when the request succeeds or fails. If the server cannot be reached, the page shows a neutral server-unavailable message rather than asking the user to start the backend.

After a successful signup, the page navigates to login with temporary React Router navigation state. The login page displays `Account created successfully. Please log in.` for three seconds, then clears both the message and navigation state.

The login page includes email, password, remember-me state, forgot-password navigation, and a show/hide password control. The forgot-password page collects an email address and displays a placeholder success message until the backend recovery service exists.

### Global theme toggle

`client/src/App.tsx` owns the light/dark theme state because the toggle must work on every route. The selected theme is:

1. Read from `localStorage` when the app starts.
2. Stored in React state while the app is running.
3. Written to the `data-theme` attribute on the document root.
4. Saved back to `localStorage` whenever it changes.

`client/src/index.css` defines the shared CSS variables for both themes. The page CSS Modules use those variables so the auth pages change appearance consistently.

### Frontend files to study

- `client/src/App.tsx`: route definitions and global theme state
- `client/src/index.css`: global layout, colors, and theme variables
- `client/src/pages/LoginPage.tsx`: login form and local UI state
- `client/src/pages/LoginPage.module.css`: login layout and styles
- `client/src/pages/SignUpPage.tsx`: signup form, validation, and navigation
- `client/src/pages/SignUpPage.module.css`: signup layout and styles
- `client/src/pages/ForgotPasswordPage.tsx`: password recovery placeholder flow
- `client/src/pages/ForgotPasswordPage.module.css`: recovery page styles

## User Model

File: `server/src/models/User.js`

The User model is a blueprint for an account document in MongoDB. It describes which fields a user has, which fields are required, how values are cleaned, and what defaults are applied.

### Mongoose import

```js
const mongoose = require("mongoose");
```

This loads Mongoose so the server can define schemas and models for MongoDB.

### Notification preferences schema

`notificationPreferencesSchema` defines a small nested object with these switches:

- `sms`: enabled by default
- `email`: enabled by default
- `browser`: enabled by default
- `push`: disabled by default because mobile push is not implemented yet

`{ _id: false }` prevents Mongoose from creating a separate MongoDB ID for this small nested settings object.

### User schema

`userSchema` defines the fields stored for each account:

- `firstName` and `lastName`: required text fields, trimmed, limited to 50 characters
- `email`: required, converted to lowercase, trimmed, limited to 254 characters, and marked unique
- `password`: required and excluded from normal query results with `select: false`
- `phone`: required, trimmed, and limited to 20 characters for future SMS reminders
- `phoneVerified`: starts as false until phone verification is implemented
- `emailVerified`: starts as false until email verification is implemented
- `notificationPreferences`: uses the nested preferences schema and gets its defaults automatically

### Important security note

The password is not hashed yet. The current model expects the authentication service to hash the password before saving it. A future signup route must never store the user's raw password.

`select: false` is an extra protection: normal user queries will not include the password field. Authentication code will need to explicitly request it when checking a login password.

### Timestamps

`timestamps: true` tells Mongoose to automatically maintain:

- `createdAt`: when the account was created
- `updatedAt`: when the account was last changed

### Exported model

```js
module.exports = mongoose.model("User", userSchema);
```

This creates the `User` model and exports it so controllers and services can use it later, for example when creating or finding accounts.

## What This Model Does Not Do Yet

- It does not create an account by itself.
- It does not connect to MongoDB by itself.
- It does not hash passwords.
- It does not verify email addresses or phone numbers.
- It does not send SMS or email.
- It does not implement signup or login routes.

Those responsibilities belong in controllers, services, routes, and middleware that will be added next.

## Current Backend Status

Completed:

- Basic Express server exists in `server/src/server.js`.
- MongoDB connection setup exists in the server startup file.
- `server/src/models/User.js` has been added and validated locally.
- A temporary signup endpoint currently validates fields, checks for duplicate email, creates a User document, and returns a response.
- The frontend is connected to `POST /api/auth/signup` and handles success, API errors, network failures, loading state, and temporary post-signup feedback.

### Database configuration lesson

The MongoDB database name comes from the database path in `MONGO_URI` inside `server/.env`. For example:

```text
mongodb+srv://.../medihelp
```

connects to the `medihelp` database, while:

```text
mongodb+srv://.../medihelp-dev
```

connects to `medihelp-dev`. If the application inserts a document but Atlas appears unchanged, first check that the server and Atlas are looking at the same database and collection. After changing `.env`, restart the backend because environment variables are read when the process starts.

Not implemented yet:

- Login API endpoint and authentication session flow
- Password hashing
- JWT creation and verification
- Email and phone verification
- SMS and email delivery
- Medicine and dose models
- Scheduled reminder jobs
- Automated backend tests

This status list should be updated whenever backend work is added.
