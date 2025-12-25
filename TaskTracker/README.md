# Task Tracker

A simple **Task Tracker Application** built with **React** and **Tailwind CSS**.  
It allows users to add, complete, and delete tasks, with dark mode support and a statistics page.

---

## Features

### 1. Header Section
- Displays the application title.
- Dark Mode toggle button.
- Dark Mode preference is managed with React state and can persist using `localStorage`.

### 2. Task Input Section
- Text input to enter new tasks.
- Add Task button.
- Prevents adding empty tasks.
- Each task contains:
  - `id`
  - `text`
  - `completed` (boolean)

### 3. Task List Section
- Displays all tasks in a list.
- Each task item includes:
  - Checkbox to mark completion.
  - Task text.
  - Delete button.
- Completed tasks are visually distinguishable.
- Tasks can be deleted individually, updating the UI instantly.

### 4. Stats Page
- Displays total tasks, completed tasks, and remaining tasks.
- Navigation using **React Router**.
- Task data is shared across pages.

### 5. Global State Management
- Task data is currently managed in `App.jsx` and shared via props.
- Can be refactored to use **Context API** for true global state management.

### 6. Persistence
- Tasks and dark mode preference can persist after page refresh using `localStorage` (if implemented).

### 7. Styling
- Built with **Tailwind CSS**.
- Supports light and dark mode.
- Responsive layout for different screen sizes.

---

