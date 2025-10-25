// Mock JSON data for the application
export const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    role: "Frontend Developer",
    status: "active",
    joinDate: "2023-01-15",
    skills: ["React", "JavaScript", "CSS", "TypeScript"],
    location: "San Francisco, CA"
  },
  
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    role: "Backend Developer",
    status: "inactive",
    joinDate: "2022-11-10",
    skills: ["Node.js", "Python", "PostgreSQL", "AWS"],
    location: "Austin, TX"
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    role: "Full Stack Developer",
    status: "active",
    joinDate: "2023-03-05",
    skills: ["React", "Node.js", "MongoDB", "Docker"],
    location: "Seattle, WA"
  },
  {
    id: 5,
    name: "David Brown",
    email: "david.brown@example.com",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    role: "DevOps Engineer",
    status: "active",
    joinDate: "2023-01-30",
    skills: ["Kubernetes", "Docker", "AWS", "Terraform"],
    location: "Denver, CO"
  }
];

export const mockProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js",
    status: "in-progress",
    progress: 75,
    startDate: "2023-01-01",
    endDate: "2023-06-30",
    team: ["John Doe", "Sarah Wilson"],
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    priority: "high",
    budget: 50000
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication",
    status: "planning",
    progress: 25,
    startDate: "2023-03-01",
    endDate: "2023-12-31",
    team: ["Jane Smith", "Mike Johnson"],
    technologies: ["React Native", "Firebase", "Biometric Auth"],
    priority: "medium",
    budget: 75000
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard for business intelligence",
    status: "completed",
    progress: 100,
    startDate: "2022-09-01",
    endDate: "2023-02-28",
    team: ["David Brown", "John Doe"],
    technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    priority: "low",
    budget: 30000
  },
  {
    id: 4,
    title: "AI Chatbot",
    description: "Intelligent customer support chatbot with natural language processing",
    status: "in-progress",
    progress: 60,
    startDate: "2023-02-15",
    endDate: "2023-08-15",
    team: ["Sarah Wilson", "Jane Smith"],
    technologies: ["Python", "TensorFlow", "React", "WebSocket"],
    priority: "high",
    budget: 40000
  }
];

export const mockTasks = [
  {
    id: 1,
    title: "Implement user authentication",
    description: "Add login/logout functionality with JWT tokens",
    projectId: 1,
    assignee: "John Doe",
    status: "completed",
    priority: "high",
    dueDate: "2023-03-15",
    estimatedHours: 8,
    actualHours: 10
  },
  {
    id: 2,
    title: "Design mobile UI mockups",
    description: "Create wireframes and high-fidelity designs for mobile app",
    projectId: 2,
    assignee: "Jane Smith",
    status: "in-progress",
    priority: "medium",
    dueDate: "2023-04-01",
    estimatedHours: 16,
    actualHours: 8
  },
  {
    id: 3,
    title: "Set up CI/CD pipeline",
    description: "Configure automated testing and deployment pipeline",
    projectId: 1,
    assignee: "David Brown",
    status: "pending",
    priority: "high",
    dueDate: "2023-04-10",
    estimatedHours: 12,
    actualHours: 0
  },
  {
    id: 4,
    title: "Optimize database queries",
    description: "Improve performance of database operations",
    projectId: 3,
    assignee: "Mike Johnson",
    status: "completed",
    priority: "medium",
    dueDate: "2023-02-20",
    estimatedHours: 6,
    actualHours: 5
  },
  {
    id: 5,
    title: "Train AI model",
    description: "Train and fine-tune the chatbot model with customer data",
    projectId: 4,
    assignee: "Sarah Wilson",
    status: "in-progress",
    priority: "high",
    dueDate: "2023-05-01",
    estimatedHours: 24,
    actualHours: 16
  }
];

export const mockNotifications = [
  {
    id: 1,
    title: "Project Deadline Approaching",
    message: "E-commerce Platform deadline is in 2 weeks",
    type: "warning",
    timestamp: "2023-03-20T10:30:00Z",
    read: false
  },
  {
    id: 2,
    title: "Task Completed",
    message: "John Doe completed 'Implement user authentication'",
    type: "success",
    timestamp: "2023-03-19T15:45:00Z",
    read: true
  },
  {
    id: 3,
    title: "New Team Member",
    message: "Sarah Wilson joined the AI Chatbot project",
    type: "info",
    timestamp: "2023-03-18T09:15:00Z",
    read: false
  },
  {
    id: 4,
    title: "Budget Alert",
    message: "Mobile Banking App has used 80% of allocated budget",
    type: "warning",
    timestamp: "2023-03-17T14:20:00Z",
    read: true
  }
];

