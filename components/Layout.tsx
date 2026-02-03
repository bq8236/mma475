
import React, { ReactNode, useRef, useEffect } from 'react';
import { AppTab } from '../types';

interface LayoutProps {
  children: ReactNode;
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 탭이 변경될 때마다 스크롤을 최상단으로 이동하여 사용자 경험 개선
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  const menuItems = [
    { id: AppTab.SERVICE, label: '홈', icon: '🏠' },
    { id: AppTab.GUIDE, label: '복무안내', icon: '🛡️' },
    { id: AppTab.CHECKLIST, label: '체크', icon: '✅' },
    { id: AppTab.INVESTIGATION, label: '조사기준', icon: '📋' },
    { id: AppTab.LIBRARY, label: '규정', icon: '📚' },
  ];

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50 flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col hidden md:flex">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-xl font-bold tracking-tight flex items-center gap-2">
            <span className="text-blue-400">🛡️</span> 복무관리 가이드
          </h1>
        </div>
        <nav className="flex-1 mt-4 px-3 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium ${
                activeTab === item.id 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden pb-[70px] md:pb-0">
        <header className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center shrink-0 safe-top">
          <div className="flex items-center gap-2">
            <span className="text-xl">🛡️</span>
            <h1 className="text-lg font-black tracking-tight">복무관리 가이드</h1>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold">관</div>
        </header>

        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth"
        >
          {children}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around items-center h-[70px] safe-bottom z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center w-full h-full transition-all active:scale-90 ${
              activeTab === item.id ? 'text-blue-600' : 'text-slate-400'
            }`}
          >
            <span className="text-2xl mb-1">{item.icon}</span>
            <span className="text-[10px] font-bold">{item.label}</span>
            {activeTab === item.id && (
              <span className="absolute bottom-1 w-1 h-1 bg-blue-600 rounded-full"></span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Layout;
