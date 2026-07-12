# 🚀 DevHub

A personal developer hub website that collects and displays my programming projects in one organized place.

🌐 Live Demo:  
https://cis-ahmad.github.io/DevHub-/

---

## 📖 About The Project

**DevHub** is a portfolio-style website built to showcase my web development projects.

The website dynamically creates project sections and buttons from a JavaScript data file instead of manually writing every project element.

This project helps organize my work and provides an easy way for visitors to explore different applications and their live demos.

---

## ✨ Features

- 📁 Dynamic project listing
- 🔗 Direct access to live project demos
- 🗂️ Automatic project categorization
- ⚡ Dynamic HTML generation using JavaScript
- 🌌 Galaxy-themed interface
- 🧩 Data-driven website structure
- ♻️ Reusable DOM creation functions

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript ES6

### JavaScript Concepts

- DOM Manipulation
- ES6 Modules (`import/export`)
- Arrays and Objects
- Dynamic Element Creation
- Functions
- Data-driven rendering

---

## 📂 Project Structure

```
DevHub/
│
├── index.html
├── style.css
├── script.js
├── data.js
│
├── assets/
│   └── galaxy.gif
│
└── README.md
```

---

## ⚙️ How The Project Works

The projects are stored as objects inside `data.js`.

Each project contains information such as:

- Project name
- Project URL
- Project category
- Project notes

Example:

```javascript
{
    ProjectName: "Project Name",
    ProjectUrl: "Project URL",
    Note: "Project Description",
    Type: "Project Category"
}
```

The JavaScript file reads this data and automatically generates the website content.

---

## 🧠 Main Functions

### `createElement()`

A reusable function responsible for creating HTML elements dynamically.

It can create:

- Elements
- Classes
- IDs
- Text content
- Parent-child relationships

---

### `createSectionNotExisting()`

Creates a new project section when a category does not already exist.

---

### `createProjectButton()`

Creates a project button and connects it to the project's live URL.

---

### `createProjects()`

Loops through all project data and displays every project automatically.

---

## 🎯 Learning Goals

This project was created to practice:

- Building dynamic websites
- Organizing data using JavaScript objects
- Creating reusable functions
- Working with ES6 modules
- Improving DOM manipulation skills
- Creating scalable project structures

---

## 🚀 Future Improvements

- Add project screenshots
- Add GitHub repository links
- Add project descriptions
- Add search and filtering
- Add animations
- Improve mobile responsiveness
- Add project cards instead of buttons

---

## 👨‍💻 Author

**ICE (Ahmad Ayman)**

Computer Information Systems Student  
Frontend Developer

---

## 📜 License

This project is open source and available for learning and personal use.
