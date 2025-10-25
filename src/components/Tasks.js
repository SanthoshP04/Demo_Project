import React, { useState } from 'react';

// Mock data
const mockTasks = [
  {
    id: 1,
    title: 'Update user authentication',
    description: 'Implement OAuth 2.0 and JWT token-based authentication system',
    status: 'in-progress',
    priority: 'high',
    assignee: 'John Doe',
    dueDate: '2025-11-01',
    estimatedHours: 20,
    actualHours: 12,
    projectId: 1
  },
  {
    id: 2,
    title: 'Design new landing page',
    description: 'Create modern, responsive landing page with hero section and CTAs',
    status: 'completed',
    priority: 'medium',
    assignee: 'Jane Smith',
    dueDate: '2025-10-28',
    estimatedHours: 15,
    actualHours: 14,
    projectId: 1
  },
  {
    id: 3,
    title: 'Fix payment gateway bug',
    description: 'Resolve issues with Stripe payment processing on checkout',
    status: 'pending',
    priority: 'high',
    assignee: 'Mike Johnson',
    dueDate: '2025-10-30',
    estimatedHours: 8,
    actualHours: 0,
    projectId: 1
  },
  {
    id: 4,
    title: 'Write API documentation',
    description: 'Document all REST API endpoints with examples and parameters',
    status: 'in-progress',
    priority: 'low',
    assignee: 'Sarah Williams',
    dueDate: '2025-11-05',
    estimatedHours: 25,
    actualHours: 10,
    projectId: 2
  },
  {
    id: 5,
    title: 'Database optimization',
    description: 'Optimize slow queries and add proper indexing to main tables',
    status: 'completed',
    priority: 'medium',
    assignee: 'David Lee',
    dueDate: '2025-10-25',
    estimatedHours: 12,
    actualHours: 11,
    projectId: 3
  },
  {
    id: 6,
    title: 'Mobile app testing',
    description: 'Perform comprehensive testing on iOS and Android platforms',
    status: 'pending',
    priority: 'high',
    assignee: 'Emma Davis',
    dueDate: '2025-11-03',
    estimatedHours: 16,
    actualHours: 0,
    projectId: 2
  },
  {
    id: 7,
    title: 'Update dependencies',
    description: 'Update all npm packages to latest stable versions',
    status: 'in-progress',
    priority: 'low',
    assignee: 'Alex Martinez',
    dueDate: '2025-11-10',
    estimatedHours: 6,
    actualHours: 3,
    projectId: 4
  },
  {
    id: 8,
    title: 'Implement dark mode',
    description: 'Add dark mode theme support across entire application',
    status: 'completed',
    priority: 'medium',
    assignee: 'Lisa Brown',
    dueDate: '2025-10-20',
    estimatedHours: 18,
    actualHours: 20,
    projectId: 4
  }
];

const Tasks = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');

  const filteredTasks = mockTasks.filter(task => {
    const statusMatch = filterStatus === 'all' || task.status === filterStatus;
    const priorityMatch = filterPriority === 'all' || task.priority === filterPriority;
    return statusMatch && priorityMatch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in-progress': return 'text-blue-600 bg-blue-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getProgressPercentage = (task) => {
    if (task.status === 'completed') return 100;
    if (task.status === 'in-progress') return Math.min((task.actualHours / task.estimatedHours) * 100, 100);
    return 0;
  };

  const formatStatus = (status) => {
    return status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Tasks
            </h1>
            <p className="text-gray-600 mt-2">Track and manage your project tasks.</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl flex items-center group">
            <svg className="h-5 w-5 mr-2 group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            New Task
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Status</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterStatus('all')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    filterStatus === 'all' 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Tasks
                </button>
                <button
                  onClick={() => setFilterStatus('pending')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    filterStatus === 'pending' 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Pending
                </button>
                <button
                  onClick={() => setFilterStatus('in-progress')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    filterStatus === 'in-progress' 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  In Progress
                </button>
                <button
                  onClick={() => setFilterStatus('completed')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    filterStatus === 'completed' 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Completed
                </button>
              </div>
            </div>
            
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Priority</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterPriority('all')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    filterPriority === 'all' 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterPriority('high')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    filterPriority === 'high' 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  High
                </button>
                <button
                  onClick={() => setFilterPriority('medium')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    filterPriority === 'medium' 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Medium
                </button>
                <button
                  onClick={() => setFilterPriority('low')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    filterPriority === 'low' 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Low
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tasks List */}
        <div className="space-y-4">
          {filteredTasks.map((task) => (
            <div key={task.id} className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 p-6 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                {/* Status Indicator */}
                <div className="relative mt-2">
                  <div className={`w-4 h-4 rounded-full ring-4 ring-opacity-20 ${
                    task.status === 'completed' ? 'bg-green-500 ring-green-500' :
                    task.status === 'in-progress' ? 'bg-blue-500 ring-blue-500 animate-pulse' : 
                    'bg-yellow-500 ring-yellow-500'
                  }`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center space-x-3 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                        {task.title}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-2 flex-shrink-0">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(task.status)}`}>
                        {formatStatus(task.status)}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(task.priority)}`}>
                        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{task.description}</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-3">
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Assignee</p>
                      <div className="flex items-center space-x-2">
                        <div className="h-7 w-7 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                          <span className="text-xs font-bold text-white">{getInitials(task.assignee)}</span>
                        </div>
                        <p className="text-sm font-semibold text-gray-900 truncate">{task.assignee}</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3">
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Due Date</p>
                      <p className="text-sm font-bold text-gray-900">
                        {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3">
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Estimated</p>
                      <p className="text-sm font-bold text-gray-900">{task.estimatedHours}h</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-3">
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Actual</p>
                      <p className="text-sm font-bold text-gray-900">{task.actualHours}h</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {task.status === 'in-progress' && (
                    <div className="mb-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">Progress</span>
                        <span className="text-sm font-bold text-blue-600">
                          {Math.round(getProgressPercentage(task))}%
                        </span>
                      </div>
                      <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500 shadow-lg"
                          style={{ width: `${getProgressPercentage(task)}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500 font-medium">
                        Project #{task.projectId}
                      </span>
                      {task.status === 'completed' && (
                        <div className="flex items-center space-x-1 text-green-600">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-semibold">Completed</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all text-sm font-medium flex items-center group">
                        <svg className="h-4 w-4 mr-1.5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View
                      </button>
                      <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg text-sm font-medium flex items-center group">
                        <svg className="h-4 w-4 mr-1.5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-16 text-center">
            <div className="relative inline-block">
              <svg className="h-20 w-20 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-20 blur-xl rounded-full"></div>
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">No tasks found</h3>
            <p className="mt-2 text-gray-600">Try adjusting your filter criteria.</p>
            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;