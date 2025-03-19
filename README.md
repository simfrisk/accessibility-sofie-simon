# Web Accessibility Project

A basic web server template focused on web accessibility practices.

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)
- Git

### Installation

1. Fork this repository by clicking the "Fork" button at the top right of the GitHub repository page.

2. Clone your forked repository:

```bash
git clone https://github.com/YOUR_USERNAME/web-accessibility-template.git
cd web-accessibility-template
```

3. Install dependencies:

```bash
npm install
```

This will install all required dependencies including:

- express: Web framework for Node.js
- nodemon: Development tool that automatically restarts the server when files change

## Project Structure

```
web-accessibility-template/
├── server.js         # Express server configuration
└── README.md         # Project documentation
```

### Server Configuration (`server.js`)

The server is built using Express.js and serves static files from the root directory. Key features:

- Express static file serving
- Running on port 3000
- Simple configuration for easy customization

## Running the Application

1. Start the development server with automatic reloading:

```bash
npm run dev
```

2. Open your browser and navigate to:

```
http://localhost:3000
```

The development server (npm run dev) will automatically restart whenever you make changes to your files.

## Development

### Adding Static Files

Place your HTML, CSS, and JavaScript files in the root directory. They will be automatically served by the Express static middleware.

### Modifying Server Configuration

The server configuration can be found in `server.js`. You can:

- Change the port number
- Add new routes
- Configure additional middleware
