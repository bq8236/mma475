
import React from 'react';
import { MOCK_REGULATIONS, INVESTIGATION_CRITERIA } from '../constants';
import { AppTab } from '../types';

interface DashboardCardProps {
  title: string;
  icon: string;
  description: string;
  children: React.ReactNode;
  onClick: () => void;
  badge?: string;
  color?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, icon, description, children, onClick, badge, color = "blue" }) => (
  <div 
    onClick={onClick}
    className="bg-white p-5 rounded-[28px] shadow-sm border border-slate-100 active:scale-[0.96] transition-all cursor-pointer group mb-4 last:mb-0"
  >
    <div className="flex justify-between items-start mb-3">
      <div className="flex items-center gap-3">
        <div className={`w-11 h-11 rounded-2xl bg-slate-50 flex items-center justify-center text-xl`}>
          {icon}
        </div>
        <div>
          <h3 className="text-base font-black text-slate-800 flex items-center gap-2">
            {title}
            {badge && <span className={`text-[9px] bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full font-black`}>{badge}</span>}
          </h3>
          <p className="text-[10px] text-slate-400 font-medium">{description}</p>
        </div>
      </div>
      <span className="text-slate-200 group-hover:text-blue-500 transition-colors text-lg">→</span>
    </div>
    <div className="space-y-2">
      {children}
    </div>
  </div>
);

const ServiceOverview: React.FC<{ onTabChange: (tab: AppTab) => void }> = ({ onTabChange }) => {
  const topRegulations = MOCK_REGULATIONS.slice(0, 2);
  const sampleInvestigation = INVESTIGATION_CRITERIA.slice(0, 2);

  return (
    <div className="max-w-md mx-auto space-y-5">
      <div className="px-1 py-4">
        <h2 className="text-2xl font-black text-slate-900 leading-tight">
          반갑습니다, <br/>
          <span className="text-blue-600">사회복무요원 복무관리 담당자</span>님
        </h2>
        <p className="text-slate-400 text-xs mt-1.5 font-medium">오늘의 업무 현황을 한눈에 확인하세요.</p>
      </div>

      <div className="flex flex-col">
        {/* 1. 복무 안내 가이드 */}
        <DashboardCard 
          title="사회복무요원의 복무" 
          icon="🛡️" 
          description="기본의무, 휴가, 보수 안내"
          onClick={() => onTabChange(AppTab.GUIDE)}
          badge="안내"
        >
          <div className="flex gap-2">
            <div className="flex-1 bg-indigo-50/50 p-2.5 rounded-xl text-[10px] text-indigo-700 font-black text-center border border-indigo-100/50">
              🏖️ 휴가 규정
            </div>
            <div className="flex-1 bg-emerald-50/50 p-2.5 rounded-xl text-[10px] text-emerald-700 font-black text-center border border-emerald-100/50">
              💰 보수/여비
            </div>
          </div>
        </DashboardCard>

        {/* 2. 체크리스트 */}
        <DashboardCard 
          title="행정 체크리스트" 
          icon="✅" 
          description="관리담당자 정기 확인 사항"
          onClick={() => onTabChange(AppTab.CHECKLIST)}
          badge="9개 항목"
        >
          <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-2xl border border-emerald-100">
            <div className="w-4 h-4 rounded-md border border-emerald-300 bg-white flex items-center justify-center shrink-0">
              <span className="text-[8px] text-emerald-500 font-bold">✓</span>
            </div>
            <span className="text-[11px] text-emerald-800 font-bold truncate">개인별 임무표 및 보안서약서 비치 확인</span>
          </div>
        </DashboardCard>

        {/* 3. 실태조사 결과 처리기준 */}
        <DashboardCard 
          title="실태조사 결과 처리기준" 
          icon="📋" 
          description="[별표 2] 공식 행정처분 기준"
          onClick={() => onTabChange(AppTab.INVESTIGATION)}
          badge="필독"
        >
          <div className="bg-red-50 p-3.5 rounded-2xl border border-red-100">
            {sampleInvestigation.map(item => (
              <div key={item.id} className="flex items-center gap-2 mb-1 last:mb-0">
                <span className="w-1 h-1 rounded-full bg-red-400"></span>
                <span className="text-[10px] text-red-700 font-bold truncate">{item.defect}</span>
              </div>
            ))}
          </div>
        </DashboardCard>

        {/* 4. 규정 라이브러리 */}
        <DashboardCard 
          title="복무 규정 라이브러리" 
          icon="📚" 
          description="최신 병무청 훈령 및 법령"
          onClick={() => onTabChange(AppTab.LIBRARY)}
        >
          <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
            {topRegulations.map(reg => (
              <div key={reg.id} className="flex items-center gap-2 py-0.5">
                <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                <span className="text-[10px] text-slate-600 truncate font-bold">{reg.title}</span>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>

      <div className="text-center pt-2 pb-6 opacity-30">
        <p className="text-[9px] text-slate-500 font-bold">병역법 및 사회복무요원 복무관리 규정 근거</p>
      </div>
    </div>
  );
};

export default ServiceOverview;
