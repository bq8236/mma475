
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import ServiceOverview from './components/ServiceOverview';
import Library from './components/Library';
import Checklist from './components/Checklist';
import InvestigationCriteria from './components/InvestigationCriteria';
import ServiceGuide from './components/ServiceGuide';
import Schedule from './components/Schedule';
import { AppTab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.SERVICE);

  // Handle history for tabs
  useEffect(() => {
    // Initial history state if none exists
    if (!window.history.state) {
      window.history.pushState({ tab: AppTab.SERVICE }, "");
    }

    const handlePopState = (event: PopStateEvent) => {
      // If the back button is pressed when a modal is handled elsewhere, we might want to skip.
      // But multi-component popstate handling is fine as long as states are unique.
      
      if (event.state && event.state.tab) {
        setActiveTab(event.state.tab);
      } else {
        // No state means we've gone back past the initial 'SERVICE' state
        const confirmExit = window.confirm("복무관리 AI 가이드를 종료하시겠습니까?");
        if (confirmExit) {
          // In most web environments, we can't truly close the app, 
          // but we stay on the previous page (which the browser already navigated to).
        } else {
          // Push the state back so we stay in the app
          window.history.pushState({ tab: AppTab.SERVICE }, "");
          setActiveTab(AppTab.SERVICE);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleTabChange = (tab: AppTab) => {
    if (tab !== activeTab) {
      // If we are moving from SERVICE to a sub-page, we push to history
      window.history.pushState({ tab }, "");
      setActiveTab(tab);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.SERVICE:
        return <ServiceOverview onTabChange={handleTabChange} />;
      case AppTab.GUIDE:
        return <ServiceGuide />;
      case AppTab.INVESTIGATION:
        return <InvestigationCriteria />;
      case AppTab.LIBRARY:
        return <Library onTabChange={handleTabChange} />;
      case AppTab.CHECKLIST:
        return <Checklist />;
      case AppTab.SCHEDULE:
        return <Schedule />;
      case AppTab.CASES:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-20">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-4xl shadow-inner">⚖️</div>
            <h2 className="text-2xl font-black text-slate-800">사례 분석 서비스 준비 중</h2>
            <button 
              onClick={() => setActiveTab(AppTab.SERVICE)}
              className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold"
            >
              메인으로 돌아가기
            </button>
          </div>
        );
      default:
        return <ServiceOverview onTabChange={setActiveTab} />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={handleTabChange}>
      <div className="h-full">
        {renderContent()}
      </div>
    </Layout>
  );
};

export default App;
