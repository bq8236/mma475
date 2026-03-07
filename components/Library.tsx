
import React, { useState } from 'react';
import { MOCK_REGULATIONS } from '../constants';
import { AppTab } from '../types';

interface LibraryProps {
  onTabChange?: (tab: AppTab) => void;
}

const Library: React.FC<LibraryProps> = ({ onTabChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filtered = MOCK_REGULATIONS.filter(reg => 
    reg.title.includes(searchTerm) || reg.summary.includes(searchTerm) || reg.category.includes(searchTerm)
  );

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case '법령세트': return 'bg-slate-900 text-white border-slate-700';
      case '법률': return 'bg-indigo-600 text-white';
      case '시행령': return 'bg-purple-500 text-white';
      case '시행규칙': return 'bg-pink-500 text-white';
      case '훈령': return 'bg-blue-500 text-white';
      default: return 'bg-slate-500 text-white';
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <div className="sticky top-0 z-20 bg-slate-50/90 backdrop-blur-md pt-2 pb-4 px-2">
        <div className="relative">
          <input
            type="text"
            placeholder="법령 또는 규정 명칭 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
          />
          <span className="absolute left-4 top-3.5 text-slate-400 text-sm">🔍</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 pb-20 px-2">
        {filtered.map((reg) => (
          <div 
            key={reg.id} 
            className={`bg-white border rounded-[32px] p-6 shadow-sm active:scale-[0.98] transition-all flex flex-col gap-3 ${
              reg.category === '법령세트' ? 'ring-2 ring-indigo-500/20 border-indigo-100 bg-indigo-50/30' : 'border-slate-100'
            }`}
          >
            <div className="flex justify-between items-start">
              <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${getCategoryStyles(reg.category)}`}>
                {reg.category}
              </span>
              {reg.category === '법령세트' && (
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-100 px-2 py-1 rounded-lg">핵심법령</span>
              )}
            </div>
            
            <h3 className="text-lg font-black text-slate-900 leading-tight">
              {reg.title}
            </h3>
            
            <p className="text-[14px] text-slate-500 leading-relaxed">
              {reg.summary}
            </p>

            {reg.category === '법령세트' && (
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-[10px] bg-white border border-indigo-100 text-indigo-700 px-2 py-1 rounded-lg font-bold">병역법(법)</span>
                <span className="text-[10px] bg-white border border-indigo-100 text-indigo-700 px-2 py-1 rounded-lg font-bold">시행령(령)</span>
                <span className="text-[10px] bg-white border border-indigo-100 text-indigo-700 px-2 py-1 rounded-lg font-bold">시행규칙(규칙)</span>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-100">
              <span className="text-[10px] text-slate-400 font-bold tracking-tight uppercase">
                {reg.category === '법령세트' ? '국가법령정보센터 통합검색' : '병무청 행정규칙'}
              </span>
              {reg.url ? (
                <a 
                  href={reg.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex items-center gap-1 text-xs font-black px-4 py-2 rounded-xl transition-all ${
                    reg.category === '법령세트' 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                    : 'text-blue-600 bg-blue-50 hover:bg-blue-100'
                  }`}
                >
                  {reg.category === '법령세트' ? '통합 법령 확인 ↗' : '규정 전문 보기 ↗'}
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
    </div>
  );
};

export default Library;
