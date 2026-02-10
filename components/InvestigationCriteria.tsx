
import React, { useState } from 'react';
import { INVESTIGATION_CRITERIA } from '../constants';

const InvestigationCriteria: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = Array.from(new Set(INVESTIGATION_CRITERIA.map(i => i.category)));
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredItems = INVESTIGATION_CRITERIA.filter(item => {
    const matchesSearch = item.defect.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getActionColor = (action: string) => {
    switch (action) {
      case '경고': return 'bg-red-100 text-red-700 border-red-200';
      case '주의': return 'bg-amber-100 text-amber-700 border-amber-200';
      case '시정': return 'bg-blue-100 text-blue-700 border-blue-200';
      case '가중처리': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-4">
      <div className="bg-slate-900 text-white p-5 rounded-[28px] shadow-lg relative overflow-hidden mb-2">
        <div className="relative z-10">
          <h2 className="text-lg font-black mb-1">실태조사 결과 처리기준</h2>
          <p className="text-slate-400 text-[10px] font-medium leading-relaxed">
            병무청 실태조사 시 적발된 결함 내용에 따른 <br/>
            [별표 2] 공식 행정처분 기준표입니다.
          </p>
        </div>
        <div className="absolute top-[-10px] right-[-10px] text-6xl opacity-10 grayscale">📋</div>
      </div>

      <div className="sticky top-0 z-20 bg-slate-50/95 backdrop-blur-md pt-1 pb-3 space-y-3">
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide px-1">
          <button 
            onClick={() => setSelectedCategory(null)}
            className={`px-3.5 py-2 rounded-xl text-[10px] font-black whitespace-nowrap transition-all border ${!selectedCategory ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-slate-500 border-slate-200 active:bg-slate-100'}`}
          >
            전체
          </button>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-[10px] font-black whitespace-nowrap transition-all border ${selectedCategory === cat ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-slate-500 border-slate-200 active:bg-slate-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative px-1">
          <input
            type="text"
            placeholder="결함 내용 검색 (연가, 병가, 지연...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 outline-none shadow-sm font-medium"
          />
          <span className="absolute left-4 top-2.5 text-slate-400 text-sm">🔍</span>
        </div>
      </div>

      <div className="space-y-3 px-1">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm space-y-3 active:scale-[0.98] transition-transform">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-black text-blue-500 bg-blue-50 px-2 py-0.5 rounded uppercase">
                {item.category}
              </span>
              <span className="text-[9px] font-bold text-slate-300">근거: {item.clause}</span>
            </div>
            
            <h3 className="text-[13px] font-black text-slate-800 leading-tight">
              {item.defect}
            </h3>

            <div className="space-y-1.5">
              {item.criteria.map((c, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 bg-slate-50/50 rounded-xl border border-slate-100">
                  <span className="text-[11px] font-bold text-slate-600">
                    {c.condition || '기준 위반 시'}
                  </span>
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-black border ${getActionColor(c.action)}`}>
                    {c.action}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestigationCriteria;
