
import React, { useState } from 'react';
import { INVESTIGATION_CRITERIA } from '../constants';

const InvestigationCriteria: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = Array.from(new Set(INVESTIGATION_CRITERIA.map(i => i.category)));
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredItems = INVESTIGATION_CRITERIA.filter(item => {
    const matchesSearch = item.defect.includes(searchTerm) || item.category.includes(searchTerm);
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getActionColor = (action: string) => {
    switch (action) {
      case '경고': return 'bg-red-100 text-red-700 border-red-200';
      case '주의': return 'bg-amber-100 text-amber-700 border-amber-200';
      case '시정': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-20">
      <div className="bg-slate-900 text-white p-6 rounded-[32px] shadow-lg">
        <h2 className="text-xl font-black mb-2">실태조사 결과 처리기준</h2>
        <p className="text-slate-400 text-xs leading-relaxed">
          병무청 실태조사 시 적발된 결함 내용에 따른 <br/>
          공식 행정처분(경고·주의·시정) 기준표입니다. [별표 2]
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button 
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${!selectedCategory ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-500 border-slate-200'}`}
          >
            전체보기
          </button>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${selectedCategory === cat ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-500 border-slate-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="결함 내용 검색 (예: 연가, 병가, 통보...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
          />
          <span className="absolute left-4 top-3.5 text-slate-400">🔍</span>
        </div>
      </div>

      <div className="space-y-3">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-tighter bg-blue-50 px-2 py-0.5 rounded">
                {item.category}
              </span>
              <span className="text-[10px] font-medium text-slate-400">근거: {item.clause}</span>
            </div>
            
            <h3 className="text-sm font-bold text-slate-800 leading-snug">
              {item.defect}
            </h3>

            <div className="space-y-2">
              {item.criteria.map((c, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-xs font-medium text-slate-600">
                    {c.condition || '기준 위반 시'}
                  </span>
                  <span className={`px-3 py-1 rounded-lg text-[11px] font-black border ${getActionColor(c.action)}`}>
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
