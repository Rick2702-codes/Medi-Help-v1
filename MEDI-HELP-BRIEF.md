# Medi-Help: Complete Project Brief & Implementation Guide

**Last Updated**: 2026-09-12  
**Project Status**: Signup Request Flow Connected — Auth API Hardening and Database Alignment Next

---

## 🎯 Project Vision

**Smart Medicine & Health Reminder App** — A focused, niche medicine reminder app with inventory tracking and doctor visit management. Built as a fullstack project combining API development + automated testing for learning.

### Primary Goal
Build a practical health reminder system for elderly users (esp. user's father) who forget to take medicines on time and manage prescriptions.

### Secondary Goals
- Learn API testing by building and testing own APIs
- Create a resume-worthy fullstack project
- Demonstrate end-to-end understanding: frontend → backend → database → testing

### Team
- User (Frontend + Testing focus)
- Friend (Backend focus, possibly both)

---

## 👥 Target Users & Use Cases

- **Primary**: Elderly patients who forget medicines
- **Secondary**: Caregivers/family members monitoring patient medication
- **Tertiary**: Anyone managing multiple recurring tasks + inventory

### Real-World Problem Solved
- User's father takes multiple medicines at specific times but often forgets
- Existing apps (Medisafe, MyTherapy) don't combine stock tracking + doctor visit reminders + caregiver views + elder-friendly design in one app

---

## ✨ Competitive Differentiation

**What Makes Medi-Help Unique:**
No existing app combines all of these features:

| Feature | Medisafe | MyTherapy | **Medi-Help** |
|---------|----------|-----------|--------------|
| Medicine reminders | ✅ | ✅ | ✅ |
| Stock tracking + low-stock alerts | ❌ | ❌ | ✅ **Unique** |
| Doctor visit scheduling + reminders | ❌ | ❌ | ✅ **Unique** |
| Caregiver/family dashboard | ❌ Limited | ❌ Limited | ✅ **Full** |
| Multi-patient under one account | ❌ | ❌ | ✅ **Unique** |
| Medicine expiry warnings | ❌ | ❌ | ✅ **Unique** |
| CSV export for medical records | ❌ | ❌ | ✅ **Unique** |
| Elder-friendly UI + accessibility | ❌ Poor | ❌ Poor | ✅ **Priority** |

---

## 🧭 Current Working Direction

The project has moved beyond skeleton setup and into a more intentional product flow. The frontend currently focuses on a polished, elder-friendly authentication experience that feels modern and trustworthy.

### Current product mindset
- Prioritize simplicity and readability for older users.
- Make authentication smooth and predictable: sign up first, then sign in.
- Keep the UI consistent across login, sign-up, and password recovery screens.
- Add dark/light mode support without sacrificing clarity or accessibility.
- Keep the auth flow ready for backend API integration without overbuilding UI complexity.

### Current implementation status
- Login page has been redesigned with a modern card-based layout and stronger UX.
- Sign-up page was created with validation and redirect back to login after submission.
- Forgot password page was implemented with a clean recovery flow.
- Global light/dark toggle is active across routes and persists in localStorage.
- Password show/hide toggles were added to improve usability.
- Sign-up now collects a required mobile number for future SMS reminder delivery.

### Learning and collaboration status

- `LEARNING-GUIDE.md` is maintained at the repository root and documents both frontend and backend code.
- Substantive code changes should be explained in beginner-friendly terms for all three collaborators.
- At the start of each work session, inspect the current codebase and treat previously unknown changes as possible collaborator work.

### Reminder delivery direction

Reminder reliability is a core product requirement, not a future enhancement. Browser notifications alone are insufficient because the app's primary purpose is reducing missed medicine doses.

- Support SMS and email notifications from the initial backend implementation.
- Keep browser/in-app notifications as a supplementary channel, not the only channel.
- Store the user's verified mobile number and notification preferences.
- Design dose reminders so users can confirm, snooze, or mark a dose missed across channels.
- Plan a phone alarm-style experience for scheduled medicine doses. A true alarm that can ring while the app is closed will require a native mobile app or platform-level alarm integration; a browser-only implementation cannot guarantee this reliably.
- Treat the web app as the account, schedule, history, and caregiver management layer, with SMS/email and eventual mobile alarm delivery handled by backend/mobile services.

---

## 📋 Feature Roadmap

### Phase 1: MVP (Core Features - 8-12 weeks)
**Must-have for launch:**

1. **User Authentication**
   - Sign up / Login with email & password
   - JWT-based sessions
   - Persistent login state

2. **Medicine Management**
   - Add/Edit/Delete medicines
   - Set dosage and frequency (daily, multiple times per day)
   - Set time slots for each dose
   - Schedule start and end dates

3. **Stock Tracking**
   - Track medicine inventory (e.g., 30 tablets)
   - Auto-decrement stock when dose is confirmed as taken
   - Manual stock adjustment option
   - **Low-stock alerts** — notify when supply drops below threshold

4. **Reminders & Notifications**
   - SMS and email reminders from the initial MVP
   - Browser/in-app notifications as a supplementary channel
   - Mobile push and phone alarm-style alerts through a native/mobile integration
   - Per-user notification preferences and verified contact details
   - Option to snooze or reschedule a reminder
   - Confirm dose taken (with automatic stock decrement)
   - Log skipped doses

5. **Doctor Visit Tracker**
   - Log past doctor visits (date, type, notes)
   - Schedule upcoming visits
   - Auto-calculate next visit (e.g., every 3 months)
   - Reminders X days before scheduled visit

6. **Dashboard**
   - Overview of today's medicines & reminders
   - Upcoming medicines (next 24-48 hours)
   - Upcoming doctor visits
   - Quick actions (confirm dose, snooze, mark missed)

7. **Responsive Design**
   - Mobile-friendly UI
   - Desktop support
   - Elder-friendly: large fonts, simple navigation, high contrast

---

### Phase 2: Advanced Features (Weeks 12-16)
**Adds depth and differentiation:**

1. **Medicine History & Analytics**
   - View past doses taken/missed
   - Weekly/monthly adherence summary
   - Export history for doctor visits

2. **Caregiver Access (Role-Based)**
   - Let family members view patient's medicines
   - Get alerts if patient misses a dose
   - Add/edit medicines on behalf of patient
   - Caregiver dashboard with multiple patients

3. **Multi-Patient Support**
   - Manage medicines for multiple family members
   - Switch between patient profiles
   - Each patient has separate medicine list & schedule

4. **Dynamic Stock Alerts**
   - Set different alert thresholds per medicine
   - Suggest reorder dates based on consumption history
   - Export shopping list (medicines to buy)

5. **Reminder Categories**
   - Add other task types (appointments, physiotherapy, exercises, hydration)
   - Category icons and colors

6. **Medicine Expiry Tracking**
   - Set expiry dates for medicines
   - Alert before medicine expires
   - Log expired medicines

7. **Smart Suggestions**
   - Detect when next doctor visit might be needed (e.g., if it's been 3+ months)
   - Suggest adding follow-up visit reminders

---

### Phase 3: Future Extensions
**Nice-to-have features:**

- **QR Code Scanning** — Scan medicine packs to auto-fill details
- **Pharmacy Integration** — Direct reorder from linked pharmacy
- **Wearable Integration** — Sync with smartwatch/fitness band
- **Emergency Triggers** — Alert emergency contacts if medicine not taken for N days
- **Voice Reminders** — Speak medicine name aloud
- **WhatsApp/SMS Notifications** — Delivery via SMS or WhatsApp (better for older users)
- **Offline Mode** — Work without internet, sync when online
- **Prescription Upload** — Store & reference prescriptions in app
- **Reporting for Doctors** — Generate reports to share with healthcare providers

---

## 🛠 Tech Stack (Complete)

### Frontend (Client)
```
React 19 + TypeScript + Vite
├── React Router DOM (routing)
├── CSS Modules (styling)
├── Axios (API calls)
├── (Optional: Context API for state management)
└── Testing: Playwright, Jest
```

### Backend (Server)
```
Node.js + Express.js + TypeScript
├── Mongoose (MongoDB ODM)
├── JWT (authentication)
├── bcryptjs (password hashing)
├── express-validator (input validation)
├── cors (cross-origin handling)
├── dotenv (environment variables)
├── helmet (security headers)
├── node-cron (schedule reminders)
├── Axios (external API calls)
└── Testing: Supertest, Jest
```

### Database
```
MongoDB Atlas
├── User collection
├── Medicine collection
├── Dose History collection
├── DoctorVisit collection
├── StockTracking collection
└── Caregiver collection
```

### Notifications (MVP + Future)
```
MVP:
├── Twilio or another SMS provider
├── SendGrid, Resend, or another transactional email provider
└── Browser/in-app notifications as a secondary channel

Future/native:
├── Firebase Cloud Messaging (mobile push notifications)
├── Native Android/iOS alarm scheduling for reliable phone alarms
└── WhatsApp notifications where appropriate and consented
```

### DevOps & Deployment
```
Hosting: Render, Railway, or Vercel
Version Control: Git + GitHub
```

---

## 📊 Database Schema (MongoDB Models)

### 1. User Model
```javascript
{
  _id: ObjectId,
   firstName: String,
   lastName: String,
  email: String (unique),
  password: String (hashed),
   phone: String (required, verified before SMS use),
   phoneVerified: Boolean,
   emailVerified: Boolean,
   notificationPreferences: {
      sms: Boolean,
      email: Boolean,
      browser: Boolean,
      push: Boolean
   },
  createdAt: Date,
  updatedAt: Date
}
```

### 2. Medicine Model
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  name: String,
  dosage: String (e.g., "500mg"),
  frequency: String (e.g., "Once daily", "Twice daily"),
  times: Array of String (e.g., ["09:00", "21:00"]),
  startDate: Date,
  endDate: Date (optional),
  prescribedBy: String (doctor name),
  category: String (e.g., "BP", "Diabetes", "General"),
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

### 3. DoseHistory Model
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  medicineId: ObjectId (ref: Medicine),
  scheduledTime: DateTime,
  actualTime: DateTime (when actually taken),
  status: String ("pending" | "taken" | "missed" | "skipped"),
  notes: String,
  createdAt: Date
}
```

### 4. StockTracking Model
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  medicineId: ObjectId (ref: Medicine),
  currentStock: Number,
  initialStock: Number,
  lowStockThreshold: Number,
  unit: String (e.g., "tablets", "ml"),
  lastUpdated: Date,
  alertSent: Boolean
}
```

### 5. DoctorVisit Model
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  doctorName: String,
  visitType: String (e.g., "Cardiology", "General checkup"),
  date: Date,
  nextVisitDueDate: Date,
  notes: String,
  prescription: String,
  visitFrequency: String (e.g., "every 3 months"),
  createdAt: Date,
  updatedAt: Date
}
```

### 6. Caregiver Model (Phase 2)
```javascript
{
  _id: ObjectId,
  caregiverId: ObjectId (ref: User),
  patientId: ObjectId (ref: User),
  relationship: String (e.g., "Son", "Daughter", "Spouse"),
  permissions: Array ["view" | "edit" | "manage_stock"],
  createdAt: Date
}
```

---

## 🔌 API Endpoints (Planned)

### Authentication
```
POST   /api/auth/signup      - Create new user account
POST   /api/auth/login       - Login user
POST   /api/auth/logout      - Logout user
GET    /api/auth/me          - Get current user info
```

### Medicines
```
GET    /api/medicines                - List all medicines for user
POST   /api/medicines                - Create new medicine
GET    /api/medicines/:id            - Get medicine details
PUT    /api/medicines/:id            - Update medicine
DELETE /api/medicines/:id            - Delete medicine
```

### Doses & Reminders
```
GET    /api/doses/today              - Get today's doses
POST   /api/doses/:doseId/confirm    - Confirm dose taken (auto-decrement stock)
POST   /api/doses/:doseId/skip       - Mark dose as skipped
GET    /api/doses/history            - Get dose history
```

### Stock Tracking
```
GET    /api/stock/:medicineId        - Get stock info
PUT    /api/stock/:medicineId        - Update stock
GET    /api/stock/alerts             - Get low-stock alerts
```

### Doctor Visits
```
GET    /api/doctor-visits            - List visits
POST   /api/doctor-visits            - Create visit record
PUT    /api/doctor-visits/:id        - Update visit
DELETE /api/doctor-visits/:id        - Delete visit
GET    /api/doctor-visits/upcoming   - Get upcoming visits within X days
```

### Caregiver (Phase 2)
```
POST   /api/caregivers/invite        - Invite caregiver
GET    /api/caregivers/patients      - View assigned patients
GET    /api/patients/:patientId      - View patient's data
```

---

## 📄 Frontend Pages (To Build)

1. **LoginPage** ✅ (Exists)
   - Sign up / Login form
   - Password recovery linkwe are done for the day. from tomorrow onwards, whenever 

2. **DashboardPage**
   - Today's medicines overview
   - Quick actions (confirm, snooze)
   - Upcoming reminders (next 24-48 hours)
   - Upcoming doctor visits widget

3. **MedicinesPage**
   - List all medicines
   - Add/Edit/Delete medicine form
   - Medicine detail view with schedule
   - Stock indicator

4. **DoctorVisitsPage**
   - List past & upcoming visits
   - Add/Edit visit form
   - Reminder settings per visit
   - Notes & prescription upload

5. **HistoryPage**
   - View past doses (taken/missed/skipped)
   - Filter by date range or medicine
   - Adherence statistics

6. **SettingsPage** (Phase 2)
   - User profile & preferences
   - Notification settings (push/SMS/email)
   - Theme & accessibility (font size, contrast)

7. **CaregiverDashboard** (Phase 2)
   - View assigned patients
   - Patient's today's medicines
   - Patient's compliance stats
   - Alerts for missed doses

---

## 🧪 Testing Strategy

### API Testing (with Supertest)
```javascript
// Example test structure:
describe('Medicine API', () => {
  test('POST /api/medicines - should create medicine', async () => { ... })
  test('GET /api/medicines - should list medicines', async () => { ... })
  test('PUT /api/medicines/:id - should update medicine', async () => { ... })
  test('DELETE /api/medicines/:id - should delete medicine', async () => { ... })
})

describe('Stock Tracking', () => {
  test('POST /api/doses/:id/confirm - should decrement stock', async () => { ... })
  test('GET /api/stock/alerts - should return low-stock items', async () => { ... })
})

describe('Authentication', () => {
  test('POST /api/auth/signup - should create user', async () => { ... })
  test('POST /api/auth/login - should return JWT token', async () => { ... })
})
```

### End-to-End Testing (with Playwright)
- User login flow
- Add medicine → Schedule reminder → Confirm dose → Stock decrements
- Doctor visit reminder workflow
- Caregiver inviting & viewing patient data

---

## 📂 Current Codebase Status

### ✅ Completed
- Project structure (client/ & server/ folders)
- Package.json for both frontend & backend
- React setup with TypeScript
- Express.js server with MongoDB connection logic
- Login page UI refinement and auth flow styling
- Sign-up page implementation and validation flow
- Forgot password page implementation
- Global light/dark theme toggle
- Password visibility toggle for auth screens
- Development environment (Vite, nodemon)

### ❌ Not Started
- Database models & schema
- API endpoints & controllers
- Authentication middleware & routes
- Frontend pages beyond LoginPage
- API integration (axios calls)
- State management (if needed)
- Testing setup (Supertest, Jest, Playwright)
- Notification system
- Environment configuration (.env)

---

## 🚀 Implementation Roadmap

### Week 1-2: Database & API Setup
- [ ] Create MongoDB models (User, Medicine, DoctorVisit, StockTracking)
- [ ] Set up database connection & validation
- [ ] Build authentication endpoints (signup, login, logout)
- [ ] Create middleware (JWT verification, error handling)
- [ ] Connect frontend auth forms to backend API endpoints
- [ ] Add real validation and error handling for login/signup responses
- [ ] Add verified phone number and notification preferences to the User model
- [ ] Choose and configure the initial SMS and email providers

### Week 3-4: Core API Implementation
- [ ] Medicine CRUD endpoints
- [ ] Dose history & reminder logic
- [ ] Stock tracking endpoints
- [ ] Doctor visit endpoints
- [ ] Write Supertest for all endpoints

### Week 5-6: Frontend Development
- [ ] Build Dashboard page
- [ ] Build Medicines management page
- [ ] Build DoctorVisits page
- [ ] Integrate with backend APIs (Axios)

### Week 7-8: Notifications & Scheduling
- [ ] Implement node-cron for reminders
- [ ] Add push notification logic
- [ ] Test reminder delivery

### Week 9-10: Advanced Features & Polish
- [ ] Add caregiver functionality (Phase 2)
- [ ] Multi-patient support
- [ ] Analytics & history views
- [ ] Elder-friendly UI refinements

### Week 11-12: Testing & Deployment
- [ ] Write E2E tests with Playwright
- [ ] Performance optimization
- [ ] Deploy to Render/Railway
- [ ] Documentation & README

---

## 📝 Key Design Decisions

1. **Medicine-Specific Focus** — Not a generic reminder app, laser-focused on health management
2. **Stock Tracking Priority** — Core differentiator; auto-decrement on dose confirmation
3. **Doctor Visit Integration** — Extends beyond just medicine reminders
4. **Elder-Friendly Design** — Large fonts, simple navigation, high contrast by default
5. **Caregiver Roles** — Family visibility & oversight (Phase 2)
6. **Local + Remote Reminders** — Browser notifications + SMS/Email (Future)

---

## 💡 Interview Talking Points

When discussing this project in interviews, emphasize:
- ✅ Solving a real personal problem (father's medication adherence)
- ✅ Full-stack architecture (React + Express + MongoDB)
- ✅ API design & RESTful principles
- ✅ Automated testing (Supertest, Playwright)
- ✅ User role management (patient, caregiver)
- ✅ Practical features: inventory tracking, reminders, history
- ✅ Scalability considerations (multi-patient, caregiver roles)
- ✅ Accessibility focus (elder-friendly design)

---

## ⚡ Quick Reference Commands

```bash
# Frontend
cd client && npm install
npm run dev           # Start dev server
npm run build         # Production build
npm run lint          # Run ESLint

# Backend
cd server && npm install
npm run dev           # Start with nodemon
npm test              # Run tests (when set up)

# MongoDB
# Use MongoDB Atlas with connection string in .env
MONGO_URI=mongodb+srv://...
```

---

## 📚 Dependencies to Install (Next Steps)

### Backend (run `npm install` in server/)
```bash
npm install bcryptjs jsonwebtoken express-validator axios helmet
npm install --save-dev jest supertest @types/jest
```

### Frontend (run `npm install` in client/)
```bash
npm install axios
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

---

## 🎓 Learning Outcomes

By completing this project, you'll have learned:
- ✅ Building RESTful APIs with Express.js
- ✅ Designing MongoDB schemas for real-world use
- ✅ JWT-based authentication & authorization
- ✅ API testing with Supertest
- ✅ E2E testing with Playwright
- ✅ React component architecture
- ✅ State management strategies
- ✅ Handling scheduled tasks (node-cron)
- ✅ Notification systems
- ✅ Accessibility & elder-friendly design

---

**Next Action**: Begin implementation with Phase 1 features starting with database schema & authentication endpoints.
