# 🌍 Travel Explorer – React.js Project

## 📌 Project Overview

Travel Explorer is a responsive travel website developed using **React.js, Vite, JavaScript, and Tailwind CSS**.

The purpose of this project is to build a modern travel application where users can explore different destinations, search for destinations, and use a basic travel planner.

This project was completed as a frontend development task covering the complete development workflow — from **creating the project and installing dependencies to writing the code, testing, using Git/GitHub, and deploying the application**.

---

# 🎯 Task Objective

The main objective of this task was to:

* Create a React.js project from scratch.
* Set up the required development environment.
* Install and configure the required dependencies.
* Design a responsive travel website.
* Implement destination cards.
* Implement destination search functionality.
* Implement a travel planner.
* Use React state management.
* Use Tailwind CSS for responsive styling.
* Test the application locally.
* Manage the project using Git.
* Push the project to GitHub.
* Deploy the completed application.

---

# 🛠️ Technologies Used

| Technology   | Purpose                                    |
| ------------ | ------------------------------------------ |
| React.js     | Building the user interface                |
| JavaScript   | Application logic                          |
| HTML5        | Structure                                  |
| Tailwind CSS | Styling and responsive design              |
| Vite         | React project setup and development server |
| npm          | Dependency management                      |
| Git          | Version control                            |
| GitHub       | Source code hosting                        |
| Unsplash     | Destination images                         |

---

# 🚀 Project Development Process

## 1. Creating the React Project

The project was created using **Vite**.

The following command was used:

```bash
npm create vite@latest travel
```

During project creation:

* Project name: `travel`
* Framework: `React`
* Variant: `JavaScript`

After creating the project, I moved into the project directory:

```bash
cd travel
```

---

# 2. Installing Dependencies

After creating the project, the required npm dependencies were installed.

```bash
npm install
```

This installed the dependencies required by the React/Vite application.

The project dependencies can be viewed in:

```text
package.json
```

---

# 3. Setting Up Tailwind CSS

Tailwind CSS was used to design the application and make it responsive.

Tailwind utility classes were used throughout the project for:

* Spacing
* Colors
* Typography
* Flexbox
* Grid layouts
* Buttons
* Cards
* Responsive layouts
* Margins and padding

This allowed the UI to be developed without writing large amounts of custom CSS.

---

# 4. Understanding the Project Structure

The project was organized into React source files and supporting configuration files.

```text
travel/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
├── index.html
├── .gitignore
└── README.md
```

The main application logic was written inside the React source files.

---

# 5. Creating the Travel UI

The travel website interface was created using React JSX.

The application contains sections such as:

* Navigation/header
* Hero section
* Search section
* Popular destinations
* Destination cards
* Travel planner
* Footer

The UI was designed to be simple, modern, and user-friendly.

---

# 6. Adding Destination Data

Destination information was created using a JavaScript array.

Example:

```javascript
const destinations = [
  {
    name: "Paris",
    country: "France",
    image: "https://images.unsplash.com/..."
  },
  {
    name: "New York",
    country: "USA",
    image: "https://images.unsplash.com/..."
  }
];
```

The destination data was then displayed dynamically using React.

---

# 7. Implementing React State

React's `useState` hook was used to manage application state.

For example, the search functionality uses:

```javascript
const [search, setSearch] = useState("");
```

The travel planner uses:

```javascript
const [showPlanner, setShowPlanner] = useState(false);
```

This allows the interface to respond dynamically to user actions.

---

# 8. Implementing Search Functionality

A search feature was implemented so users can search for destinations.

The entered search value is stored in React state.

The destination list is then filtered based on the user's search.

For example:

```text
User enters:
Paris

Application displays:
Paris – France
```

This provides a simple and interactive way for users to find destinations.

---

# 9. Implementing the Travel Planner

A basic travel planner was added to the application.

The planner can be opened using a button.

React state controls whether the planner is displayed:

```javascript
const [showPlanner, setShowPlanner] = useState(false);
```

When the user clicks the planner button, the state changes and the planner interface is displayed.

---

# 10. Adding Destination Images

Destination images were added using external **Unsplash image URLs**.

Example:

```text
https://images.unsplash.com/...
```

These images are displayed inside the destination cards to make the application more visually attractive.

---

# 11. Making the Application Responsive

The website was made responsive using Tailwind CSS.

The application was designed to work on:

* 📱 Mobile devices
* 📱 Tablets
* 💻 Laptops
* 🖥️ Desktop screens

Responsive Tailwind classes were used to adjust:

* Grid layouts
* Card sizes
* Text sizes
* Spacing
* Navigation
* Buttons
* Content alignment

---

# 12. Running the Project Locally

After completing the development, the application was tested locally.

The development server was started using:

```bash
npm run dev
```

Vite provides a local URL similar to:

```text
http://localhost:5173/
```

The application was opened in the browser and tested.

---

# 13. Testing the Application

The following functionality was tested:

### Search

* Enter destination name.
* Check matching destinations.
* Check empty search.
* Check different search terms.

### Travel Planner

* Open planner.
* Check planner visibility.
* Close planner if implemented.

### Responsive Design

The application was tested at different screen sizes:

* Mobile
* Tablet
* Laptop
* Desktop

### UI

The following were checked:

* Buttons
* Images
* Destination cards
* Text alignment
* Spacing
* Responsive layout

---

# 14. Building the Project

After completing the development and testing, a production build was created.

```bash
npm run build
```

This generates the production-ready files inside:

```text
dist/
```

The production build was checked before deployment.

---

# 15. Git Version Control

Git was used to track the development of the project.

First, Git was initialized:

```bash
git init
```

The project files were checked using:

```bash
git status
```

All required files were added:

```bash
git add .
```

The first commit was created:

```bash
git commit -m "Initial commit"
```

Additional changes were committed during development.

Example:

```bash
git add .
git commit -m "Added travel destination UI"
```

Another example:

```bash
git add .
git commit -m "Added search and travel planner"
```

Git was used throughout the project to maintain version history.

---

# 16. Creating GitHub Repository

A GitHub repository was created for the project.

The local project was connected to the GitHub repository using:

```bash
git remote add origin YOUR_GITHUB_REPOSITORY_URL
```

The remote repository was checked using:

```bash
git remote -v
```

---

# 17. Pushing the Project to GitHub

The project was pushed to GitHub using:

```bash
git branch -M main
git push -u origin main
```

After pushing, the complete source code was available in the GitHub repository.

---

# 18. Updating the GitHub Repository

Whenever changes were made, the updated code was pushed using:

```bash
git add .
git commit -m "Updated project"
git push
```

This ensured that the GitHub repository always contained the latest version of the project.

---

# 19. Deployment

After completing the project, the application was deployed so that it could be accessed through a public URL.

Before deployment, the production build was generated:

```bash
npm run build
```

The generated `dist` folder contains the optimized production version of the application.

The deployed application can be accessed using the live demo link below.

### 🔗 Live Demo

```text
YOUR_DEPLOYED_PROJECT_URL
```
https://travel-application-e4es.vercel.app/

---

# 20. GitHub Repository

### 🔗 Source Code

```text
YOUR_GITHUB_REPOSITORY_URL
```

The GitHub repository contains:

* React source code
* Styling files
* Configuration files
* Package configuration
* README documentation

---

# 📸 Screenshots

## Home Page

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c428d89f-4c4f-488f-984b-e44e72cfdaa2" />


## Destinations

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2c5b6ced-c580-4898-8892-ed2d5dce61dc" />


## Travel Planner
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/28da8475-dcc9-4679-8b2b-ccbce0052ae5" />




---

# 📂 Final Project Structure

```text
travel/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── screenshots/
│   ├── home.png
│   ├── destinations.png
│   └── planner.png
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# 📡 APIs and External Resources

## Unsplash

Unsplash image URLs were used to display travel destination images.

No backend API or database was required for the current version of the project.

| Resource     | Usage              |
| ------------ | ------------------ |
| Unsplash     | Destination images |
| React        | Frontend           |
| Tailwind CSS | UI styling         |
| Vite         | Development/build  |
| Git          | Version control    |
| GitHub       | Repository hosting |

---

# 🧠 React Concepts Practiced

This project helped me practice:

* React components
* JSX
* `useState`
* Event handling
* Conditional rendering
* Rendering arrays
* Dynamic content
* Search/filter functionality
* Responsive design
* Tailwind CSS
* Project structure
* npm package management

---

# 📚 Key Learning Outcomes

By completing this task, I gained practical experience in the complete frontend development workflow.

### Development

* Created a React project from scratch.
* Installed and configured project dependencies.
* Built the UI using React.
* Used JavaScript for application logic.
* Used Tailwind CSS for styling.
* Implemented interactive features.

### Version Control

* Initialized a Git repository.
* Used Git commands to track changes.
* Created commits.
* Connected the local project to GitHub.
* Pushed code to GitHub.
* Updated the repository with new changes.

### Deployment

* Created a production build.
* Prepared the project for deployment.
* Deployed the application.
* Tested the deployed application.

---

# 🔮 Future Improvements

The project can be improved by adding:

* Real travel APIs
* Weather API
* Google Maps integration
* Flight search
* Hotel search
* User authentication
* Favorite destinations
* User profiles
* Database integration
* Advanced trip planning
* Real-time travel information
* Currency conversion
* Booking functionality

---

# 👩‍💻 Author

**Niharika Ankalugari**

Computer Science Engineering Graduate | Software Developer

### Technical Skills

* Java
* JavaScript
* React.js
* HTML
* CSS
* Tailwind CSS
* TypeScript
* Node.js
* SQL
* Git & GitHub

---

# ⭐ Conclusion

The Travel Explorer project demonstrates the complete process of developing and deploying a React.js application.

The project started with **creating the React application and installing dependencies**, followed by **designing the UI, writing React and JavaScript code, implementing search and planner functionality, making the application responsive, testing it locally, managing the source code using Git/GitHub, creating a production build, and deploying the final application**.

This project provided practical experience with the complete workflow involved in developing a modern frontend web application.
