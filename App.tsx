
import React, { useState } from 'react';
import Layout from './components/Layout';
import ServiceOverview from './components/ServiceOverview';
import Library from './components/Library';
import Checklist from './components/Checklist';
import InvestigationCriteria from './components/InvestigationCriteria';
import ServiceGuide from './components/ServiceGuide';
import { AppTab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.SERVICE);

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.SERVICE:
        return <ServiceOverview onTabChange={setActiveTab} />;
      case AppTab.GUIDE:
        return <ServiceGuide />;
      case AppTab.INVESTIGATION:
        return <InvestigationCriteria />;
      case AppTab.LIBRARY:
        return <Library />;
      case AppTab.CHECKLIST:
        return <Checklist />;
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
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="h-full">
        {renderContent()}
      </div>
    </Layout>
  );
};

export default App;
