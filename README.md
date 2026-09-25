# 🏋️ FitLog 

FitLog is a modern, responsive workout library and workout planning web application built with Next.js. It provides a simple way to explore different exercises, view detailed workout information, create a daily workout plan, save workouts for later, and track basic workout statistics.

---

## 📌 Project Overview

FitLog is designed for users who want to organize their daily workout routine in a simple and structured way.

Users can:

* Browse available workouts from the workout library.
* View complete information about a specific workout.
* Add workouts to today's workout plan.
* Save workouts for later.
* Remove workouts from the plan.
* Mark completed workouts as done.
* View total exercises, workout duration, and calories.
* Sort workouts based on duration, calories, or rating.
* Get instant feedback through toast notifications.

The application also stores plan and saved workout information using `localStorage`, allowing the data to remain available after refreshing the page.

---

## ✨ Key Features

### 🏋️ 1. Workout Library

The home page displays workout exercises fetched from the FitLog API.

Each workout card contains:

* Workout image
* Workout name
* Muscle group/category tags
* Equipment information
* Duration
* Calories
* Rating

Users can click any workout card to open its detailed page.

---

### 🔎 2. Workout Details

Each workout has a dedicated details page.

The page includes:

* Large workout image
* Workout title
* Description
* Category tags
* Equipment
* Difficulty
* Sets
* Repetitions
* Duration
* Calories
* Rating
* Step-by-step instructions

Users can also add the workout to today's plan or save it for later directly from the details page.

---

### 📋 3. Daily Plan

Users can create their daily workout plan by adding exercises from the workout details page.

The plan includes:

* Maximum 5 workouts
* Number of exercises
* Total workout duration
* Total calories
* Workout thumbnail
* Workout name
* Equipment
* Duration
* Calories
* Rating

Each workout also provides actions for:

* View Details
* Mark as Done
* Remove

---

### 💾 4. Saved Workouts

Users can save workouts that they want to use later.

Saved workouts are available from the **Saved** tab on the My Plan page.

---

### 📊 5. Plan Statistics

The My Plan page provides a live summary of the current workout plan.

It displays:

| Metric    | Description                        |
| --------- | ---------------------------------- |
| Exercises | Total number of planned workouts   |
| Minutes   | Total workout duration             |
| Calories  | Total calories of planned workouts |

These values update when workouts are added or removed.

---

### 🔃 6. Workout Sorting

The workout library includes a **Sort By** option.

Available sorting options:

* Duration
* Calories
* Rating

The selected option dynamically changes the order of the workout list.

---

### 🔔 7. Toast Notifications

The application provides toast notifications for important user actions.

Examples include:

* Workout added to today's plan
* Workout saved
* Workout marked as done
* Workout removed
* Workout already exists in the plan

---

### 💾 8. Local Storage

FitLog uses browser `localStorage` to persist:

* Today's Plan
* Saved Workouts

Therefore, users can refresh or revisit the page without immediately losing their selected workouts.

---

### 📱 9. Responsive Design

The application is responsive and works across:

*  Mobile devices
*  Tablets
*  Laptops
*  Desktop screens

The layout adapts the:

* Navbar
* Hero section
* Workout grid
* Workout details
* My Plan cards
* Footer

according to the available screen size.

---


## 🔗 API

FitLog uses the following REST API.

### Get All Workouts

```text
https://api.abcz.workers.dev/api/fitlog
```

### Get Single Workout

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

The application fetches workout information from the API and dynamically displays the data in the workout library and details pages.

---

## 🛠️ Technologies Used

### Frontend

* **Next.js** — React framework for building the application.
* **React** — Component-based user interface.
* **TypeScript** — Type-safe development.
* **Tailwind CSS** — Utility-first styling.
* **DaisyUI** — UI components and styling utilities.

### Additional Libraries

* **Lucide React** — Icons used throughout the application.
* **React Hot Toast** — Toast notifications.
* **LocalStorage API** — Client-side persistence.

### API

* REST API
* Fetch API

---

## 📂 Project Structure

```text
fit_log/
│
├── app/
│   ├── my-plan/
│   │   └── page.tsx
│   │
│   ├── workouts/
│   │   └── [id]/
│   │       └── page.tsx
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   └── not-found.tsx
│
├── components/
│   ├── Navbar
│   ├── Footer
│   ├── Banner
│   ├── Library
│   ├── WorkoutCard
│   ├── PlanCard
│   └── other components
│
├── context/
│   └── PlanContext
│
├── assets/
│   ├── logo
│   └── banner
│
├── public/
│
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Installation & Setup

### Step 1 — Clone the Repository

```bash
git clone <your-github-repository-url>
```

### Step 2 — Open the Project

```bash
cd fit_log
```

### Step 3 — Install Dependencies

```bash
npm install
```

### Step 4 — Run Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## 📦 Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

Before deployment, make sure the production build completes without errors.

---

## 🎨 UI Design

FitLog follows a dark, minimal, fitness-focused visual style.

The interface uses:

* Dark backgrounds
* Bright lime accent colors
* Bold uppercase headings
* Workout-focused imagery
* Rounded cards
* Clear buttons and navigation
* Responsive layouts

The design is focused on keeping workout information easy to scan and actions easy to access.

---

## 📋 User Flow

```text
Home
 │
 ├── Browse Workouts
 │       │
 │       ├── Workout Card
 │       │       │
 │       │       └── Workout Details
 │       │               │
 │       │               ├── Add to Today's Plan
 │       │               │
 │       │               └── Save for Later
 │       │
 │       └── Sort Workouts
 │
 └── My Plan
         │
         ├── Today's Plan
         │      ├── View Details
         │      ├── Mark as Done
         │      └── Remove
         │
         └── Saved
```

---

## 🎯 Project Goals

The main goals of FitLog are:

1. Provide a clean workout browsing experience.
2. Make workout information easy to understand.
3. Allow users to create a daily workout plan.
4. Allow users to save exercises for future use.
5. Provide useful workout statistics.
6. Maintain a responsive experience across devices.
7. Create a simple and user-friendly workout management interface.

---
