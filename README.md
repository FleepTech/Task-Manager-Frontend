# Task Manager — Frontend

A web app for managing tasks, built with React and TypeScript. It talks to my [Task Manager REST API](https://github.com/FleepTech/Task-Manager) (Java, Spring Boot).

## Features

- View all tasks
- Add a task with a title, due date and priority
- Mark tasks as completed
- Delete tasks

## Tech stack

React 19 · TypeScript · Vite · Tailwind CSS · Axios

## Getting started

The [backend](https://github.com/FleepTech/Task-Manager) needs to be running on `http://localhost:8080` first.

```bash
git clone https://github.com/FleepTech/Task-Manager-Frontend.git
cd Task-Manager-Frontend
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

## Project structure

```
src/
├── App.tsx            # state and API calls
├── types.ts           # Task type
└── components/
    ├── TaskList.tsx
    ├── TaskCard.tsx
    └── AddTaskForm.tsx
```
