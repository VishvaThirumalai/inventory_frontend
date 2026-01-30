import React from 'react';
import { Link } from 'react-router-dom';

const QuickActions = () => {
  const actions = [
    { label: 'Add New Product', to: '/products/new', color: 'bg-blue-600 hover:bg-blue-700', icon: '➕' },
    { label: 'Process Sale', to: '/sales/new', color: 'bg-green-600 hover:bg-green-700', icon: '🛒' },
    { label: 'Add Supplier', to: '/suppliers/new', color: 'bg-purple-600 hover:bg-purple-700', icon: '🏢' },
    { label: 'View Reports', to: '/reports', color: 'bg-yellow-600 hover:bg-yellow-700', icon: '📊' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <Link
            key={index}
            to={action.to}
            className={`${action.color} text-white p-4 rounded-lg font-medium transition-colors duration-200 flex flex-col items-center justify-center text-center min-h-[120px]`}
          >
            <span className="text-2xl mb-2">{action.icon}</span>
            <span className="text-sm">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;