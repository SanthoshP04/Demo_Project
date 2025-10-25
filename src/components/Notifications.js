import React, { useState } from 'react';

// Mock data
const mockNotifications = [
  {
    id: 1,
    title: 'New project assigned',
    message: 'You have been assigned to E-Commerce Platform project',
    type: 'info',
    read: false,
    timestamp: '2025-10-25T10:30:00'
  },
  {
    id: 2,
    title: 'Task completed',
    message: 'Design new landing page has been successfully completed by Jane Smith',
    type: 'success',
    read: false,
    timestamp: '2025-10-24T15:20:00'
  },
  {
    id: 3,
    title: 'Deadline approaching',
    message: 'Fix payment gateway bug task is due in 2 days',
    type: 'warning',
    read: true,
    timestamp: '2025-10-23T09:15:00'
  },
  {
    id: 4,
    title: 'System maintenance scheduled',
    message: 'Planned system maintenance on Sunday from 2 AM to 4 AM EST',
    type: 'info',
    read: true,
    timestamp: '2025-10-22T14:00:00'
  },
  {
    id: 5,
    title: 'Critical error',
    message: 'Database connection failed. Immediate attention required',
    type: 'error',
    read: false,
    timestamp: '2025-10-21T18:45:00'
  },
  {
    id: 6,
    title: 'Team member added',
    message: 'Alex Martinez has joined the Mobile App Redesign project',
    type: 'success',
    read: true,
    timestamp: '2025-10-20T11:30:00'
  },
  {
    id: 7,
    title: 'Budget alert',
    message: 'E-Commerce Platform has exceeded 80% of allocated budget',
    type: 'warning',
    read: false,
    timestamp: '2025-10-19T16:20:00'
  },
  {
    id: 8,
    title: 'Meeting reminder',
    message: 'Weekly team sync meeting starts in 30 minutes',
    type: 'info',
    read: true,
    timestamp: '2025-10-18T13:30:00'
  }
];

const Notifications = () => {
  const [filterType, setFilterType] = useState('all');
  const [filterRead, setFilterRead] = useState('all');
  const [notifications, setNotifications] = useState(mockNotifications);

  const filteredNotifications = notifications.filter(notification => {
    const typeMatch = filterType === 'all' || notification.type === filterType;
    const readMatch = filterRead === 'all' || 
      (filterRead === 'read' && notification.read) ||
      (filterRead === 'unread' && !notification.read);
    return typeMatch && readMatch;
  });

  const getTypeConfig = (type) => {
    switch (type) {
      case 'success':
        return {
          color: 'text-green-600 bg-green-100 border-green-200',
          gradient: 'from-green-500 to-emerald-500',
          bgGradient: 'from-green-50 to-emerald-50',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        };
      case 'warning':
        return {
          color: 'text-yellow-600 bg-yellow-100 border-yellow-200',
          gradient: 'from-yellow-500 to-orange-500',
          bgGradient: 'from-yellow-50 to-orange-50',
          icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'
        };
      case 'error':
        return {
          color: 'text-red-600 bg-red-100 border-red-200',
          gradient: 'from-red-500 to-pink-500',
          bgGradient: 'from-red-50 to-pink-50',
          icon: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
        };
      case 'info':
        return {
          color: 'text-blue-600 bg-blue-100 border-blue-200',
          gradient: 'from-blue-500 to-cyan-500',
          bgGradient: 'from-blue-50 to-cyan-50',
          icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        };
      default:
        return {
          color: 'text-gray-600 bg-gray-100 border-gray-200',
          gradient: 'from-gray-500 to-gray-600',
          bgGradient: 'from-gray-50 to-gray-100',
          icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
        };
    }
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                Notifications
              </h1>
              {unreadCount > 0 && (
                <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold rounded-full shadow-lg animate-pulse">
                  {unreadCount} New
                </span>
              )}
            </div>
            <p className="text-gray-600 mt-2">Stay updated with your project activities.</p>
          </div>
          <div className="flex space-x-3">
            <button 
              onClick={markAllAsRead}
              className="px-5 py-2.5 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50 transition-all font-medium flex items-center group"
            >
              <svg className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Mark All Read
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Type</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    filterType === 'all' 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Types
                </button>
                <button
                  onClick={() => setFilterType('success')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    filterType === 'success' 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Success
                </button>
                <button
                  onClick={() => setFilterType('warning')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    filterType === 'warning' 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Warning
                </button>
                <button
                  onClick={() => setFilterType('error')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    filterType === 'error' 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Error
                </button>
                <button
                  onClick={() => setFilterType('info')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    filterType === 'info' 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Info
                </button>
              </div>
            </div>
            
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Status</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterRead('all')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    filterRead === 'all' 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterRead('unread')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    filterRead === 'unread' 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Unread
                </button>
                <button
                  onClick={() => setFilterRead('read')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    filterRead === 'read' 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Read
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.map((notification) => {
            const config = getTypeConfig(notification.type);
            return (
              <div 
                key={notification.id} 
                className={`group bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 overflow-hidden hover:-translate-y-1 ${
                  !notification.read 
                    ? `border-l-4 bg-gradient-to-r ${config.bgGradient}` 
                    : 'border-gray-200'
                }`}
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="relative flex-shrink-0">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${config.gradient} shadow-lg`}>
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={config.icon} />
                        </svg>
                      </div>
                      {!notification.read && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {notification.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${config.color} ml-2 flex-shrink-0`}>
                          {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">{notification.message}</p>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-2 text-gray-500">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>
                              {new Date(notification.timestamp).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </span>
                          </div>
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                            notification.read 
                              ? 'bg-gray-100 text-gray-600' 
                              : 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700'
                          }`}>
                            {notification.read ? 'Read' : 'Unread'}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {!notification.read && (
                            <button 
                              onClick={() => markAsRead(notification.id)}
                              className="px-3 py-1.5 text-sm text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 font-semibold rounded-lg transition-all"
                            >
                              Mark as read
                            </button>
                          )}
                          <button 
                            onClick={() => deleteNotification(notification.id)}
                            className="px-3 py-1.5 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 font-semibold rounded-lg transition-all"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredNotifications.length === 0 && (
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-16 text-center">
            <div className="relative inline-block">
              <svg className="h-20 w-20 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-xl rounded-full"></div>
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">No notifications found</h3>
            <p className="mt-2 text-gray-600">Try adjusting your filter criteria.</p>
            <button 
              onClick={() => {
                setFilterType('all');
                setFilterRead('all');
              }}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;