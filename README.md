# Frontend Mock Data Application

A modern, responsive React application built with Tailwind CSS that demonstrates frontend development best practices using mock JSON data.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Dashboard**: Real-time statistics and project overview
- **User Management**: Complete user profiles with skills and status tracking
- **Project Tracking**: Project management with progress indicators and team assignments
- **Task Management**: Task tracking with priority levels and status updates
- **Notification System**: Real-time notifications with filtering and status management
- **Modern UI/UX**: Clean, intuitive interface with smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS 3
- **Icons**: Heroicons (SVG)
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Sidebar.js      # Side navigation
│   ├── Dashboard.js    # Main dashboard
│   ├── Users.js        # User management
│   ├── Projects.js     # Project management
│   ├── Tasks.js        # Task management
│   └── Notifications.js # Notification center
├── data/
│   └── mockData.js     # Mock JSON data
├── App.js              # Main application component
├── index.js            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 📊 Mock Data

The application includes comprehensive mock data:

- **Users**: 5 team members with profiles, skills, and status
- **Projects**: 4 projects with different statuses and progress tracking
- **Tasks**: 5 tasks with priorities, assignments, and time tracking
- **Notifications**: 4 notifications with different types and read status

## 🎨 Design Features

- **Color System**: Custom primary and secondary color palettes
- **Typography**: Inter font family for modern readability
- **Components**: Reusable button, card, and badge components
- **Animations**: Smooth transitions and hover effects
- **Responsive Grid**: Adaptive layouts for all screen sizes

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Components

### Dashboard
- Statistics cards with trend indicators
- Recent tasks and notifications
- Project progress overview
- Interactive charts and progress bars

### Users
- User profile cards with avatars
- Skills and role management
- Status filtering and search
- Contact information display

### Projects
- Project cards with progress tracking
- Team member assignments
- Technology stack display
- Budget and timeline information

### Tasks
- Task list with priority indicators
- Progress tracking and time estimates
- Status filtering and sorting
- Assignee and due date management

### Notifications
- Notification center with type filtering
- Read/unread status management
- Timestamp and priority indicators
- Interactive notification actions

## 🚀 Getting Started

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server
4. Open `http://localhost:3000` in your browser

