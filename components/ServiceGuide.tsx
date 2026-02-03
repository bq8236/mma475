
import React, { useState } from 'react';

interface GuideSection {
  title: string;
  icon: string;
  items: {
    label: string;
    content: string;
    isImportant?: boolean;
    isBenefit?: boolean;
  }[];
}

const ServiceGuide: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  const guideData: GuideSection[] = [
    {
      title: '업무분야 및 근무시간',
      icon: '🏢',
      items: [
        { label: '5대 업무분야', content: '사회복지(60% 이상), 보건의료, 환경안전, 교육문화, 행정지원 등 공익 목적 업무 수행' },
        { label: '기본 근무형태', content: '주 5일 근무, 09:00~18:00 (점심시간 12:00~13:00 제외)' },
        { label: '근무형태 조정', content: '복무기관 실정에 따라 합의 하에 야간 또는 휴일근무 가능 (단, 대체휴무 반드시 부여)' },
        { label: '복제 준수', content: '복무 중에는 반드시 지급된 제복을 착용하고 명찰을 부착하여야 함', isImportant: true }
      ]
    },
    {
      title: '휴가 제도 (병역법 기준)',
      icon: '🏖️',
      items: [
        { label: '연가 (총 28일)', content: '소집일부터 1년 이내 15일, 1년 초과 시 13일 사용 가능' },
        { label: '병가 (30일)', content: '질병 또는 부상으로 직무 수행 불가 시. 4일 이상 시 진단서 제출 필수', isImportant: true },
        { label: '공가', content: '병역판정검사, 투표 참여, 국가기관 소환, 천재지변 등으로 근무 불가 시' },
        { label: '청원휴가', content: '본인 결혼(5일), 배우자 출산(10일), 부모/배우자 사망(5일) 등' },
        { label: '특별휴가', content: '표창, 모범요원, 근무형편이 열악한 분야의 복무자 위로의 필요성이 있는 경우 복무기관의 장 부여' }
      ]
    },
    {
      title: '보수 및 여비 (2026년)',
      icon: '💳',
      items: [
        { label: '봉급 (복무기간별)', content: '소집월~2개월(75만원), 3~8개월(90만원), 9~14개월(120만원), 15개월~(150만원) 기준 지급' },
        { label: '중식비', content: '1일 7,000원 이상 (실제 복무일수만큼 실비 지급)' },
        { label: '교통비', content: '대중교통(시내버스) 왕복이용요금(현금기준)' },
        { label: '건강보험료', content: '복무기간 중 건강보험료 전액 국가 부담 (지역가입자 또는 직장피부양자)', isBenefit: true }
      ]
    },
    {
      title: '준수사항 및 혜택',
      icon: '📜',
      items: [
        { label: '겸직 제한', content: '생계유지 곤란 등 부득이한 사유 시 복무기관장 사전 승인 필요', isImportant: true },
        { label: '장병내일준비적금', content: '월 최대 55만원 납입 시 국고지원금(매칭지원금) 100% 지원. 원금의 2배 수준 자산 형성 가능', isBenefit: true },
        { label: '정치행위 금지', content: '정당 가입 및 선거운동 등 정치적 목적을 가진 행위 일체 금지' },
        { label: '자기계발 지원', content: '사회복무요원 원격강좌(e-러닝) 수강 시 학점 인정 및 수강료 지원', isBenefit: true }
      ]
    }
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-4 pb-20">
      <div className="text-center mb-6 px-4">
        <h2 className="text-2xl font-black text-slate-900">사회복무요원의 복무</h2>
        <p className="text-slate-500 text-sm mt-1">병무청 공식 안내 지침을 기반으로 구성되었습니다.</p>
      </div>

      <div className="space-y-3 px-2">
        {guideData.map((section, idx) => (
          <div 
            key={idx} 
            className={`bg-white border rounded-[28px] overflow-hidden transition-all duration-300 ${activeIdx === idx ? 'ring-2 ring-blue-500 shadow-xl' : 'border-slate-100 shadow-sm'}`}
          >
            <button 
              onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
              className="w-full p-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${activeIdx === idx ? 'bg-blue-600 text-white' : 'bg-slate-50'}`}>
                  {section.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800">{section.title}</h3>
              </div>
              <span className={`text-slate-300 transform transition-transform ${activeIdx === idx ? 'rotate-180 text-blue-500' : ''}`}>▼</span>
            </button>
            
            {activeIdx === idx && (
              <div className="p-5 pt-0 space-y-3 bg-white">
                <div className="h-[1px] bg-slate-100 mb-4"></div>
                {section.items.map((item, i) => (
                  <div key={i} className={`p-4 rounded-2xl border ${
                    item.isImportant ? 'bg-red-50 border-red-100' : 
                    item.isBenefit ? 'bg-emerald-50 border-emerald-100' : 'bg-slate-50 border-transparent'
                  }`}>
                    <div className="flex justify-between items-start mb-1">
                      <span className={`text-[10px] font-black uppercase tracking-tighter ${
                        item.isImportant ? 'text-red-500' : 
                        item.isBenefit ? 'text-emerald-600' : 'text-blue-500'
                      }`}>
                        {item.label}
                      </span>
                      {item.isImportant && <span className="text-[10px] bg-red-500 text-white px-1.5 py-0.5 rounded font-bold">중요</span>}
                      {item.isBenefit && <span className="text-[10px] bg-emerald-500 text-white px-1.5 py-0.5 rounded font-bold">혜택</span>}
                    </div>
                    <p className="text-[13px] font-medium text-slate-800 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mx-2 bg-slate-900 p-6 rounded-[28px] text-white shadow-lg mt-8 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xl">🛡️</span>
            <h4 className="font-bold">복무관리 법적 근거</h4>
          </div>
          <div className="space-y-2 text-[11px] text-slate-400 leading-relaxed">
            <p><strong className="text-white">병역법 제26조~제33조:</strong> 사회복무요원의 소집 및 복무 등</p>
            <p><strong className="text-white">병역법 시행령 제47조~제65조:</strong> 복무분야 및 임무 등</p>
            <p><strong className="text-white">복무관리 규정:</strong> 병무청 훈령 제1913호(최신)</p>
            <div className="pt-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              <p className="text-blue-400 font-bold">구체적인 처분 기준은 '조사기준' 탭을 확인하세요.</p>
            </div>
          </div>
        </div>
        <div className="absolute right-[-10px] bottom-[-10px] text-8xl opacity-10 grayscale">⚖️</div>
      </div>
    </div>
  );
};

export default ServiceGuide;
