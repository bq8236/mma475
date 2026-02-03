
import React, { useState } from 'react';

const Checklist: React.FC = () => {
  const [items, setItems] = useState([
    { 
      id: 9, 
      text: '배치전 교육 실시 (최초 배치 시)', 
      done: false, 
      priority: 'Critical', 
      description: '사회복무요원 신분(의무), 복무규정(휴가·보수), 위반 시 처벌기준, 직무수행 유의사항 교육' 
    },
    { 
      id: 1, 
      text: '사회복무요원 신상명세서 작성 및 확인 (별지 제2호)', 
      done: false, 
      priority: 'High', 
      description: '인적사항, 질병정보, 민감정보 수집·이용 동의 여부 필히 확인' 
    },
    { 
      id: 2, 
      text: '사회복무요원 임무표 작성 (별지 제27호)', 
      done: false, 
      priority: 'High', 
      description: '주임무 및 공통임무 명시, 복무기관 배치 후 7일 이내 복무포털 등록 및 본인 확인 필수' 
    },
    { 
      id: 3, 
      text: '보안준수 확인서 징구 (별지 제28호)', 
      done: true, 
      priority: 'Critical', 
      description: '정보시스템 접근 금지, 사진/동영상의 무단 촬영 및 외부 유출 방지 서약' 
    },
    { 
      id: 4, 
      text: '일일복무상황부 및 근무상황 비치 확인(매일)', 
      done: true, 
      priority: 'High', 
      description: '매일 본인 서명 확인 후 복무관리포털(시스템) 최종 대조 및 입력' 
    },
    { 
      id: 5, 
      text: '근무편성표 작성 및 확인 (매월 첫 근무일)', 
      done: false, 
      priority: 'Medium', 
      description: '매월 첫 근무일에 해당 월의 근무 일정을 확정하여 공지' 
    },
    { 
      id: 6, 
      text: '병가 증빙서류 적정성 검토', 
      done: false, 
      priority: 'High', 
      description: '진단서(4일이상), 진료확인서, 소견서, 처방전만 인정 (영수증/약봉투 불가)' 
    },
    { 
      id: 7, 
      text: '교육일지 작성 (월 1회 이상)', 
      done: false, 
      priority: 'Medium', 
      description: '개인정보보호, 괴롭힘 예방(필수) 및 규정 교육 내용 기록' 
    },
    { 
      id: 8, 
      text: '관찰면담 기록 (분기 1회 이상)', 
      done: false, 
      priority: 'Critical', 
      description: '신상명세서의 질병정보(민감정보)를 참고하여 업무 적합성 면담 실시' 
    },
  ]);

  const toggle = (id: number) => {
    setItems(items.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">복무관리 필수 체크리스트</h2>
        <p className="text-slate-500 text-sm">복무지도관 및 관리담당자가 반드시 확인해야 할 행정 사항입니다.</p>
      </div>

      <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 bg-slate-50 border-b flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-bold">중점 관리 항목 ({items.filter(i => i.done).length}/{items.length})</span>
          </div>
          <span className="text-xs text-slate-500 font-medium">{new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })} 기준</span>
        </div>
        <div className="divide-y divide-slate-100">
          {items.map((item) => (
            <div 
              key={item.id} 
              onClick={() => toggle(item.id)}
              className={`p-4 flex items-start gap-4 cursor-pointer hover:bg-slate-50 transition-colors ${item.done ? 'bg-slate-50/50' : ''}`}
            >
              <div className={`mt-0.5 w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all ${
                item.done ? 'bg-blue-600 border-blue-600 shadow-inner' : 'border-slate-300 bg-white'
              }`}>
                {item.done && <span className="text-white text-[10px] font-black">✓</span>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className={`text-sm font-bold truncate ${item.done ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                    {item.text}
                  </p>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded font-black uppercase tracking-tighter shrink-0 ${
                    item.priority === 'Critical' ? 'bg-red-100 text-red-600' :
                    item.priority === 'High' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {item.priority}
                  </span>
                </div>
                <p className={`text-xs ${item.done ? 'text-slate-400' : 'text-slate-500'}`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-3">
          <span className="text-blue-500 text-xl font-bold">📜</span>
          <div>
            <h4 className="text-sm font-bold text-blue-800">임무표 등록 기한</h4>
            <p className="text-xs text-blue-700 mt-1">복무기관 배치 후 7일 이내에 사회복무포털에 등록해야 하며, 임무표를 구체적으로 작성하여 본인에게 확인하게 하여야 합니다.</p>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl flex gap-3">
          <span className="text-amber-500 text-xl font-bold">🔒</span>
          <div>
            <h4 className="text-sm font-bold text-amber-800">보안 관리 주의사항</h4>
            <p className="text-xs text-amber-700 mt-1">본인은 직무 수행 시 직원 ID, PW를 이용하여 정보시스템에 접근하지 않아야 하며, 담당자의 관리·감독 하에 업무를 수행해야 합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checklist;
