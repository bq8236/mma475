
import React, { ReactNode, useRef, useEffect } from 'react';
import { AppTab } from '../types';

interface LayoutProps {
  children: ReactNode;
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
    <div className="flex h-screen w-full overflow-hidden bg-slate-50 flex-col">
      {/* 상단 헤더 (모바일 최적화) */}
      <header className="bg-slate-900 text-white px-5 pt-[env(safe-area-inset-top)] pb-4 flex justify-between items-center shrink-0 z-30 shadow-md">
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xl">🛡️</span>
          <h1 className="text-base font-black tracking-tight">복무관리 가이드</h1>
        </div>
        <div className="w-8 h-8 mt-2 rounded-full bg-blue-500 border-2 border-slate-800 flex items-center justify-center text-[10px] font-bold shadow-inner">관리</div>
      </header>

      {/* 메인 콘텐츠 스크롤 영역 */}
      <main 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto scroll-smooth relative"
      >
        <div className="p-4 safe-bottom">
          {children}
        </div>
      </main>

      {/* 하단 탭 바 (모바일 네이티브 스타일) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-slate-100 flex justify-around items-center bottom-nav z-50 shadow-[0_-8px_20px_rgba(0,0,0,0.05)]">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center w-full h-full transition-all active:scale-90 relative ${
              activeTab === item.id ? 'text-blue-600' : 'text-slate-400'
            }`}
          >
            <span className={`text-2xl mb-1 transition-transform ${activeTab === item.id ? 'scale-110' : ''}`}>
              {item.icon}
            </span>
            <span className={`text-[10px] font-bold ${activeTab === item.id ? 'opacity-100' : 'opacity-70'}`}>
              {item.label}
            </span>
            {activeTab === item.id && (
              <span className="absolute -top-1 w-8 h-1 bg-blue-600 rounded-full animate-pulse"></span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Layout;
