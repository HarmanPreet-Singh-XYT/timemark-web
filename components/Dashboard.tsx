import React from 'react';
import { Home, LayoutGrid, Clock, Users, Eye, Settings, Bot, RotateCcw, Menu } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { title: 'Total Screen Time', value: '6h 42m', color: 'bg-blue-100 dark:bg-blue-900/80' },
    { title: 'Productive Time', value: '4h 18m', color: 'bg-green-100 dark:bg-green-900/80' },
    { title: 'Most Used App', value: 'Microsoft Edge', color: 'bg-purple-100 dark:bg-purple-900/80' },
    { title: 'Focus Sessions', value: '3', color: 'bg-orange-100 dark:bg-orange-900/80' },
  ];

  const apps = [
    { name: 'Microsoft Edge', category: 'Web Browsing', time: '2h 45m', progress: 41 },
    { name: 'Visual Studio Code', category: 'Development', time: '1h 52m', progress: 28 },
    { name: 'Slack', category: 'Communication', time: '58m', progress: 15 },
    { name: 'Spotify', category: 'Entertainment', time: '42m', progress: 10 },
    { name: 'Terminal', category: 'Development', time: '25m', progress: 6 },
  ];

  return (
    <div className="flex h-screen max-h-[890px] rounded-lg bg-gray-50 dark:bg-[#121212] text-gray-900 dark:text-gray-200 font-sans border border-gray-200 dark:border-gray-700/30">
      {/* Sidebar */}
      <nav className="flex flex-col rounded-l-lg items-center gap-6 w-16 py-4 bg-white dark:bg-[#0a0a0a] border-r border-gray-200 dark:border-gray-800">
        <Menu size={24} className="text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-white mb-2" />
        <Home size={22} className="text-blue-600 dark:text-white cursor-pointer" />
        <LayoutGrid size={22} className="text-gray-400 dark:text-gray-500 cursor-pointer hover:text-gray-900 dark:hover:text-white" />
        <Clock size={22} className="text-gray-400 dark:text-gray-500 cursor-pointer hover:text-gray-900 dark:hover:text-white" />
        <Users size={22} className="text-gray-400 dark:text-gray-500 cursor-pointer hover:text-gray-900 dark:hover:text-white" />
        <Eye size={22} className="text-gray-400 dark:text-gray-500 cursor-pointer hover:text-gray-900 dark:hover:text-white" />
        <Settings size={22} className="text-gray-400 dark:text-gray-500 cursor-pointer hover:text-gray-900 dark:hover:text-white" />
        <Bot size={22} className="text-gray-400 dark:text-gray-500 cursor-pointer hover:text-gray-900 dark:hover:text-white" />
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Header */}
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Today's Overview</h1>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 font-bold bg-white dark:bg-[#2a2a2a] border border-gray-300 dark:border-transparent px-4 py-2 rounded text-sm hover:bg-gray-50 dark:hover:bg-[#333]">
              <RotateCcw size={16} /> Refresh
            </button>
            <button className="flex items-center gap-2 font-bold bg-blue-600 dark:bg-[#2a2a2a] text-white dark:text-gray-200 px-4 py-2 rounded text-sm hover:bg-blue-700 dark:hover:bg-[#333]">
              <Eye size={16} /> Start Focus Mode
            </button>
          </div>
        </header>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className={`${stat.color} p-6 rounded-lg border border-gray-200 dark:border-transparent`}>
              <p className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">{stat.title}</p>
              <p className="text-3xl font-bold text-center py-4 text-gray-900 dark:text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-2 gap-4">
          {/* Top Applications */}
          <section className="bg-white dark:bg-[#1e1e1e] p-6 rounded-lg border border-gray-200 dark:border-gray-800/50">
            <h2 className="text-lg font-semibold mb-6">Top Applications</h2>
            <div className="space-y-6">
              {apps.map((app, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{app.name}</p>
                    <p className="text-xs text-gray-500">{app.category}</p>
                  </div>
                  <div className="w-1/2 h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 dark:bg-blue-600 rounded-full" style={{ width: `${app.progress}%` }}></div>
                  </div>
                  <p className="text-sm w-16 text-right font-mono text-gray-700 dark:text-gray-200">{app.time}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Category Breakdown */}
          <section className="bg-white dark:bg-[#1e1e1e] p-6 rounded-lg border border-gray-200 dark:border-gray-800/50">
            <h2 className="text-lg font-semibold mb-6">Category Breakdown</h2>
            <div className="space-y-8">
              {['Development', 'Web Browsing', 'Communication', 'Entertainment', 'Idle'].map((cat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <p className="text-sm font-medium flex-1">{cat}</p>
                  <div className="w-1/2 h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 dark:bg-green-800 rounded-full" style={{ width: `${[47, 28, 15, 10, 3][i]}%` }}></div>
                  </div>
                  <p className="text-sm w-16 text-right font-mono text-gray-700 dark:text-gray-200">{['3h 10m', '1h 52m', '58m', '42m', '12m'][i]}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-10 gap-4">
          <section className="col-span-6 bg-white dark:bg-[#1e1e1e] p-6 rounded-lg border border-gray-200 dark:border-gray-800/50">
            <h2 className="text-lg font-semibold mb-6">Application Limits</h2>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-sm font-medium">Social Media</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Web Browsing</p>
              </div>
              <div className="w-2/3 h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 dark:bg-blue-700 rounded-full" style={{ width: '62%' }}></div>
              </div>
              <p className="text-sm font-mono text-gray-700 dark:text-gray-200">2h 0m</p>
            </div>
            <div className="flex items-center gap-4 mt-5">
              <div className="flex-1">
                <p className="text-sm font-medium">YouTube</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Entertainment</p>
              </div>
              <div className="w-2/3 h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 dark:bg-blue-700 rounded-full" style={{ width: '47%' }}></div>
              </div>
              <p className="text-sm font-mono text-gray-700 dark:text-gray-200">1h 0m</p>
            </div>
          </section>

          <section className="col-span-2 flex justify-center items-center bg-white dark:bg-[#1e1e1e] p-4 rounded-lg border border-gray-200 dark:border-gray-800/50">
            <div className="relative flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border-[30px] border-gray-200 dark:border-gray-700 border-t-purple-500 dark:border-t-purple-500 flex items-center justify-center">
                <span className="text-sm text-center font-bold">Screen<br/>Time</span>
                </div>
            </div>
            </section>

            <section className="col-span-2 flex justify-center items-center bg-white dark:bg-[#1e1e1e] p-4 rounded-lg border border-gray-200 dark:border-gray-800/50">
            <div className="relative flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border-[30px] border-gray-200 dark:border-gray-700 border-r-purple-500 dark:border-r-purple-500 border-b-purple-500 dark:border-b-purple-500 flex items-center justify-center">
                <span className="text-sm text-center font-bold">Productive<br/>Score</span>
                </div>
            </div>
            </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;