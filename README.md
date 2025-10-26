# Marven Jean Jacques - Personal Portfolio

A personal portfolio website built with React and Vite, featuring information about Marven Jean Jacques, including an about page, assignments, and more.

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18.18+ or 20+)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Marvenjj0918/Marvenjj0918.github.io.git
cd Marvenjj0918.github.io
```

2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Building for Production

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── pages/           # Page components (Home, About, Assignments)
│   ├── styles/          # CSS stylesheets
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets (images, videos, etc.)
└── index.html           # HTML template
```

## 🌐 Deployment

This project is configured to automatically deploy to GitHub Pages when you push to the `master` branch.

### Manual Deployment Steps:

1. Build the project:

```bash
npm run build
```

2. Commit and push your changes:

```bash
git add .
git commit -m "Update site"
git push origin master
```

3. The GitHub Actions workflow will automatically build and deploy your site to GitHub Pages.

### First-Time GitHub Pages Setup:

1. Go to your repository on GitHub
2. Navigate to Settings → Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. The site will be live at: `https://marvenjj0918.github.io/`

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Font Awesome** - Icons
- **GitHub Pages** - Hosting

## 📝 Pages

- **Home** - Landing page with navigation to other sections
- **About** - Personal information and bio
- **Assignment 0** - Course assignment details
- **Assignment 1** - Course assignment details

## 📄 License

This project is open source and available under the MIT License.
