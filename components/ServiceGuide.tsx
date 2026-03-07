
import React, { useState, useRef, useEffect } from 'react';
import { SERVICE_GUIDE_DATA } from '../constants';

const ServiceGuide: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (activeIdx !== null && itemRefs.current[activeIdx]) {
      const element = itemRefs.current[activeIdx];
      if (element) {
        // 부모 컨테이너(Layout의 main)를 찾아서 스크롤
        const scrollContainer = element.closest('main');
        if (scrollContainer) {
          const offsetTop = element.offsetTop - 20; // 약간의 여백
          scrollContainer.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    }
  }, [activeIdx]);

  return (
    <div className="max-w-2xl mx-auto space-y-4 pb-24">
      <div className="text-center mb-6 px-4">
        <h2 className="text-2xl font-black text-slate-900">사회복무요원의 복무</h2>
        <p className="text-slate-500 text-sm mt-1">병무청 공식 안내 지침을 기반으로 구성되었습니다.</p>
      </div>

      <div className="space-y-3 px-2">
        {SERVICE_GUIDE_DATA.map((section, idx) => (
          <div 
            key={idx} 
            ref={el => itemRefs.current[idx] = el}
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
                    <p className="text-[15px] font-medium text-slate-800 leading-relaxed">
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
          <div className="space-y-2 text-[13px] text-slate-400 leading-relaxed">
            <p><strong className="text-white">병역법 제26조~제33조:</strong> 사회복무요원의 소집 및 복무 등</p>
            <p><strong className="text-white">병역법 시행령 제47조~제65조:</strong> 복무분야 및 임무 등</p>
            <p><strong className="text-white">복무관리 규정:</strong> 병무청 훈령 제2136호(최신)</p>
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
