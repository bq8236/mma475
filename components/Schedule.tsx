
import React from 'react';
import { SCHEDULE_DATA } from '../constants';

const Schedule: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-24">
      <div className="text-center mb-8 px-4">
        <h2 className="text-2xl font-black text-slate-900">2026년 주요 복무 일정</h2>
        <p className="text-slate-500 text-sm mt-1">사회복무요원 및 복무기관의 연간 주요 일정표입니다.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 px-2">
        {SCHEDULE_DATA.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white border border-slate-100 rounded-[28px] p-5 shadow-sm flex items-start gap-4 transition-all hover:shadow-md"
          >
            <div className={`shrink-0 w-16 h-16 rounded-2xl flex flex-col items-center justify-center font-black ${
              item.type === 'major' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
            }`}>
              <span className="text-[10px] opacity-80 uppercase tracking-tighter">
                {['매일', '매월', '분기', '최초'].includes(item.month) ? 'CYCLE' : 'MONTH'}
              </span>
              <span className={`${item.month.length > 2 ? 'text-sm' : 'text-xl'} leading-none`}>
                {['매일', '매월', '분기', '최초'].includes(item.month) ? item.month : item.month.replace('월', '')}
              </span>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-base font-black text-slate-800">{item.title}</h3>
                {item.type === 'major' && (
                  <span className="text-[10px] bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full font-bold">주요</span>
                )}
              </div>
              <p className="text-[15px] text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-2 bg-indigo-50 border border-indigo-100 p-6 rounded-[28px] mt-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xl">📅</span>
          <h4 className="font-bold text-indigo-900">정기 일정 안내</h4>
        </div>
        <ul className="space-y-3 text-[15px] text-indigo-800/80 leading-relaxed font-medium">
          <li className="flex gap-2">
            <span className="text-indigo-400">•</span>
            <span><strong className="text-indigo-900">봉급 지급일:</strong> 매월 10일 (기관별 상이할 수 있음)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-indigo-400">•</span>
            <span><strong className="text-indigo-900">실태조사:</strong> 연 1회 이상 정기 실태조사 실시</span>
          </li>
          <li className="flex gap-2">
            <span className="text-indigo-400">•</span>
            <span><strong className="text-indigo-900">교육 소집:</strong> 소집 후 3개월 이내 기본직무교육 실시</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Schedule;
