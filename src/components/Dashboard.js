import React from 'react';

// Mock data
const mockUsers = [
  { id: 1, name: 'John Doe', status: 'active' },
  { id: 2, name: 'Jane Smith', status: 'active' },
  { id: 3, name: 'Mike Johnson', status: 'active' },
  { id: 4, name: 'Sarah Williams', status: 'inactive' },
  { id: 5, name: 'David Lee', status: 'active' },
  { id: 6, name: 'Emma Davis', status: 'active' },
  { id: 7, name: 'Alex Martinez', status: 'inactive' },
  { id: 8, name: 'Lisa Brown', status: 'active' }
];

const mockProjects = [
  { id: 1, title: 'E-Commerce Platform', status: 'in-progress', progress: 75, team: ['John', 'Jane', 'Mike', 'Sarah'] },
  { id: 2, title: 'Mobile App Redesign', status: 'planning', progress: 25, team: ['Alice', 'Bob'] },
  { id: 3, title: 'Data Analytics Dashboard', status: 'completed', progress: 100, team: ['David', 'Emma', 'Frank'] },
  { id: 4, title: 'Marketing Website', status: 'in-progress', progress: 60, team: ['Grace', 'Henry'] }
];

const mockTasks = [
  { id: 1, title: 'Update user authentication', status: 'in-progress', priority: 'high', assignee: 'John Doe', dueDate: '2025-11-01' },
  { id: 2, title: 'Design new landing page', status: 'completed', priority: 'medium', assignee: 'Jane Smith', dueDate: '2025-10-28' },
  { id: 3, title: 'Fix payment gateway bug', status: 'pending', priority: 'high', assignee: 'Mike Johnson', dueDate: '2025-10-30' },
  { id: 4, title: 'Write API documentation', status: 'in-progress', priority: 'low', assignee: 'Sarah Williams', dueDate: '2025-11-05' },
  { id: 5, title: 'Database optimization', status: 'completed', priority: 'medium', assignee: 'David Lee', dueDate: '2025-10-25' }
];

const mockNotifications = [
  { id: 1, title: 'New project assigned', message: 'You have been assigned to E-Commerce Platform', type: 'info', read: false, timestamp: '2025-10-25T10:30:00' },
  { id: 2, title: 'Task completed', message: 'Design new landing page has been completed', type: 'success', read: false, timestamp: '2025-10-24T15:20:00' },
  { id: 3, title: 'Deadline approaching', message: 'Fix payment gateway bug is due in 2 days', type: 'warning', read: true, timestamp: '2025-10-23T09:15:00' },
  { id: 4, title: 'System maintenance', message: 'Scheduled maintenance on Sunday', type: 'info', read: true, timestamp: '2025-10-22T14:00:00' }
];

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Users',
      value: mockUsers.length,
      change: '+12%',
      changeType: 'positive',
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Active Projects',
      value: mockProjects.filter(p => p.status === 'in-progress').length,
      change: '+3',
      changeType: 'positive',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Completed Tasks',
      value: mockTasks.filter(t => t.status === 'completed').length,
      change: '+8',
      changeType: 'positive',
      icon: 'M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Unread Notifications',
      value: mockNotifications.filter(n => !n.read).length,
      change: '-2',
      changeType: 'negative',
      icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const recentTasks = mockTasks.slice(0, 4);
  const recentNotifications = mockNotifications.slice(0, 3);

  const formatStatus = (status) => {
    return status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your projects.</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-5 py-2.5 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all font-medium flex items-center group">
              <svg className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export
            </button>
            <button className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl font-medium flex items-center group">
              <svg className="h-5 w-5 mr-2 group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              New Project
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="group relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 p-6 overflow-hidden hover:-translate-y-1">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
              <div className="relative flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">{stat.title}</p>
                  <p className="text-4xl font-bold text-gray-900 mt-3 mb-2">{stat.value}</p>
                  <div className="flex items-center space-x-1">
                    <span className={`text-sm font-semibold ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500">from last month</span>
                  </div>
                </div>
                <div className={`p-4 bg-gradient-to-br ${stat.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Tasks */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Recent Tasks</h2>
                <button className="text-blue-600 hover:text-purple-600 text-sm font-semibold transition-colors">
                  View all →
                </button>
              </div>
              <div className="space-y-3">
                {recentTasks.map((task) => (
                  <div key={task.id} className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-xl hover:from-blue-50 hover:to-purple-50 transition-all border border-transparent hover:border-blue-200">
                    <div className={`w-3 h-3 rounded-full ring-4 ring-opacity-20 ${
                      task.status === 'completed' ? 'bg-green-500 ring-green-500' :
                      task.status === 'in-progress' ? 'bg-yellow-500 ring-yellow-500' : 'bg-gray-400 ring-gray-400'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                        {task.title}
                      </p>
                      <p className="text-sm text-gray-600">{task.assignee}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        task.priority === 'high' ? 'bg-red-100 text-red-700' :
                        task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {task.priority}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Notifications */}
          <div>
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
                <button className="text-blue-600 hover:text-purple-600 text-sm font-semibold transition-colors">
                  Mark all read
                </button>
              </div>
              <div className="space-y-3">
                {recentNotifications.map((notification) => (
                  <div key={notification.id} className={`relative p-4 rounded-xl border-l-4 transition-all hover:shadow-md ${
                    notification.type === 'success' ? 'border-green-500 bg-gradient-to-r from-green-50 to-emerald-50' :
                    notification.type === 'warning' ? 'border-yellow-500 bg-gradient-to-r from-yellow-50 to-amber-50' :
                    notification.type === 'error' ? 'border-red-500 bg-gradient-to-r from-red-50 to-rose-50' :
                    'border-blue-500 bg-gradient-to-r from-blue-50 to-cyan-50'
                  }`}>
                    <div className="flex items-start space-x-3">
                      {!notification.read && (
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 animate-pulse" />
                      )}
                      <div className={`flex-1 ${notification.read ? 'ml-5' : ''}`}>
                        <p className="text-sm font-semibold text-gray-900">{notification.title}</p>
                        <p className="text-sm text-gray-700 mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-2 font-medium">
                          {new Date(notification.timestamp).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Progress */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockProjects.map((project) => (
              <div key={project.id} className="group p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-lg font-bold text-gray-900">{project.progress}%</span>
                </div>
                <div className="relative w-full bg-gray-200 rounded-full h-3 mb-3 overflow-hidden">
                  <div 
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500 shadow-lg"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {project.team.slice(0, 3).map((member, idx) => (
                        <div key={idx} className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-white flex items-center justify-center">
                          <span className="text-xs font-bold text-white">{member[0]}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-gray-600 font-medium">
                      {project.team.length} members
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'completed' ? 'bg-green-100 text-green-700' :
                    project.status === 'in-progress' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {formatStatus(project.status)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;