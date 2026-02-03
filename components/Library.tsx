
import React, { useState } from 'react';
import { MOCK_REGULATIONS } from '../constants';

const Library: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filtered = MOCK_REGULATIONS.filter(reg => 
    reg.title.includes(searchTerm) || reg.summary.includes(searchTerm) || reg.category.includes(searchTerm)
  );

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <div className="sticky top-0 z-20 bg-slate-50/90 backdrop-blur-md pt-2 pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="규정 명칭 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
          />
          <span className="absolute left-4 top-3.5 text-slate-400 text-sm">🔍</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 pb-20">
        {filtered.map((reg) => (
          <div key={reg.id} className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm active:scale-[0.98] transition-all flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${
                reg.category === '법률' ? 'bg-indigo-50 text-indigo-600' :
                reg.category === '복무관리' ? 'bg-blue-50 text-blue-600' :
                reg.category === '매뉴얼' ? 'bg-emerald-50 text-emerald-600' :
                'bg-slate-50 text-slate-600'
              }`}>
                {reg.category}
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 leading-tight">
              {reg.title}
            </h3>
            <p className="text-[12px] text-slate-500 leading-relaxed line-clamp-2">
              {reg.summary}
            </p>
            <div className="flex items-center justify-between pt-2 mt-auto border-t border-slate-50">
              <span className="text-[10px] text-slate-400 font-medium">업데이트: 2024.01</span>
              {reg.url ? (
                <a 
                  href={reg.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs font-bold text-blue-600"
                >
                  법령센터 보기 ↗
                </a>
              ) : (
                <button className="text-xs font-bold text-blue-600">
                  상세보기
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Floating AI Search Bar or Entry */}
      <div className="fixed bottom-24 left-4 right-4 z-40 md:hidden">
        <button className="w-full bg-slate-900 text-white px-6 py-4 rounded-3xl font-black text-sm shadow-xl flex items-center justify-between border border-white/10 active:scale-95 transition-all">
          <span>🤖 AI에게 바로 물어보기</span>
          <span className="bg-blue-500 px-2 py-0.5 rounded text-[10px]">NEW</span>
        </button>
      </div>
    </div>
  );
};

export default Library;
