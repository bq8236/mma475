
import React, { ReactNode, useRef, useEffect, useState } from 'react';
import { AppTab } from '../types';

interface LayoutProps {
  children: ReactNode;
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);

  // 탭 변경 시 스크롤 초기화 및 스크롤 감지 이벤트 등록
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollTop = 0;

    const handleScroll = () => {
      setShowTopBtn(container.scrollTop > 300);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  // 브라우저 종료/새로고침 방지
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = ''; // 브라우저 표준에 따라 빈 문자열 설정
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const scrollToTop = () => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { id: AppTab.SERVICE, label: '홈', icon: '🏠' },
    { id: AppTab.GUIDE, label: '복무안내', icon: '🛡️' },
    { id: AppTab.CHECKLIST, label: '체크', icon: '✅' },
    { id: AppTab.INVESTIGATION, label: '조사기준', icon: '📋' },
    { id: AppTab.LIBRARY, label: '규정', icon: '📚' },
  ];

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50 flex-col relative">
      {/* 상단 헤더 */}
      <header className="bg-slate-900 text-white px-5 pt-[env(safe-area-inset-top)] pb-4 flex justify-between items-center shrink-0 z-30 shadow-md">
        {/* 홈 바로가기 기능이 포함된 타이틀 영역 */}
        <div 
          onClick={() => setActiveTab(AppTab.SERVICE)}
          className="flex items-center gap-2 mt-2 cursor-pointer active:scale-95 transition-transform"
        >
          <span className="text-xl">🛡️</span>
          <h1 className="text-base font-black tracking-tight">복무관리 가이드</h1>
        </div>
        
        <div className="flex items-center gap-3 mt-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-slate-800 flex items-center justify-center text-[10px] font-bold shadow-inner uppercase">Admin</div>
          <button 
            onClick={() => setShowExitModal(true)}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 active:bg-red-500 active:text-white transition-colors"
          >
            <span className="text-lg">✕</span>
          </button>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto scroll-smooth relative"
      >
        <div className="p-4 safe-bottom">
          {children}
        </div>

        {/* 최상단 이동 버튼 (FAB) */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-24 right-5 w-12 h-12 bg-white/80 backdrop-blur-md border border-slate-200 text-slate-800 rounded-full shadow-xl z-40 flex items-center justify-center active:scale-90 transition-all animate-in fade-in slide-in-from-bottom-4 duration-300"
          >
            <span className="text-xl font-bold">↑</span>
          </button>
        )}
      </main>

      {/* 하단 탭 바 */}
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
              <span className="absolute -top-1 w-8 h-1 bg-blue-600 rounded-full"></span>
            )}
          </button>
        ))}
      </nav>

      {/* 종료 확인 모달 */}
      {showExitModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-[32px] w-full max-w-xs overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                👋
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">프로그램을 종료할까요?</h3>
              <p className="text-sm text-slate-500 font-medium">진행 중인 모든 내용이 초기화될 수 있습니다.</p>
            </div>
            <div className="flex border-t border-slate-100">
              <button 
                onClick={() => setShowExitModal(false)}
                className="flex-1 py-4 text-sm font-bold text-slate-400 hover:bg-slate-50 border-r border-slate-100"
              >
                취소
              </button>
              <button 
                // Fix: window.close() returns void, which cannot be tested for truthiness in an || expression.
                onClick={() => { window.close(); window.location.reload(); }}
                className="flex-1 py-4 text-sm font-bold text-red-600 hover:bg-red-50 active:bg-red-100"
              >
                종료하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
