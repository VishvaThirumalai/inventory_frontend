import React from 'react';

const RecentActivity = ({ activities }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${activity.color}`}>
              <span className="text-white text-sm">{activity.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 truncate">{activity.action}</p>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-sm text-gray-600">by {activity.user}</span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;