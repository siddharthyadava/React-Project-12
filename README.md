# 📘 React Performance Optimization & Component Structure Demo

This React project demonstrates how to structure components efficiently and optimize rendering performance.
The focus is on separating components, understanding prop-based rendering, and preparing for advanced optimization (like useMemo, React.memo, etc.).

## 🚀 Project Overview

This app is designed to show:

🔹 How to break your UI into reusable components

🔹 How to pass props from parent to child components

🔹 How to organize expensive/large components separately

🔹 Clean component structure in a React project

Your current App.js renders an ExpensiveComponent, while the commented section demonstrates how to use a child component with event handlers.

## 📂 Project Structure
/src
  ├── App.js
  ├── App.css
  ├── components/
  │     ├── ChildComponent.js
  │     └── ExpensiveComponent.js
  └── index.js

  ## 💻 How to Run the Project
1. Clone the repository
git clone <your-repo-url>
cd your-project-folder

2. Install dependencies
npm install

3. Start the application
npm start

4. Visit in browser
http://localhost:3000