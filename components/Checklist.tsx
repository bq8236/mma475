
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, CheckCircle2, AlertCircle, X, Info, FileText, UserCheck, ShieldCheck } from 'lucide-react';

const DailyReportGuide = () => (
  <div className="bg-slate-100 p-4 sm:p-8 rounded-3xl border border-slate-200">
    <div className="bg-white p-6 sm:p-10 shadow-2xl border border-slate-300 rounded-sm space-y-6 max-w-4xl mx-auto font-sans text-slate-800">
      {/* Title */}
      <div className="relative text-center border-b-[3px] border-slate-900 pb-5">
        <h3 className="text-xl sm:text-2xl font-black tracking-[0.25em] text-slate-900 whitespace-nowrap">일일 복무 상황부</h3>
      </div>
      
      {/* Institution Info */}
      <div className="grid grid-cols-6 border-collapse border-t border-l border-slate-900 text-[11px] shadow-sm">
        <div className="bg-slate-100 p-2 border-r border-b border-slate-900 font-bold text-center flex items-center justify-center">복무기관</div>
        <div className="p-2 border-r border-b border-slate-900 text-center flex items-center justify-center">병무청</div>
        <div className="bg-slate-100 p-2 border-r border-b border-slate-900 font-bold text-center flex items-center justify-center">복무분야</div>
        <div className="p-2 border-r border-b border-slate-900 text-center flex items-center justify-center">일반행정지원</div>
        <div className="bg-slate-100 p-2 border-r border-b border-slate-900 font-bold text-center flex items-center justify-center">복무형태</div>
        <div className="p-2 border-r border-b border-slate-900 text-center flex items-center justify-center">주간</div>
        <div className="bg-slate-100 p-2 border-r border-b border-slate-900 font-bold text-center flex items-center justify-center">근무지</div>
        <div className="p-2 border-r border-b border-slate-900 text-center flex items-center justify-center">복무관리과</div>
        <div className="bg-slate-100 p-2 border-r border-b border-slate-900 font-bold text-center flex items-center justify-center">성명</div>
        <div className="p-2 border-r border-b border-slate-900 text-center font-bold flex items-center justify-center">홍길동</div>
        <div className="bg-slate-100 p-2 border-r border-b border-slate-900 font-bold text-center flex items-center justify-center">연락처</div>
        <div className="p-2 border-r border-b border-slate-900 text-center flex items-center justify-center">010-8591-7319</div>
      </div>

      {/* Main Grid 1-15 */}
      <div className="overflow-x-auto shadow-sm">
        <table className="w-full text-[10px] border-collapse border-t border-l border-slate-900 table-fixed">
          <tbody>
            <tr className="bg-slate-100">
              <td className="border-r border-b border-slate-900 p-1.5 font-bold text-center w-12">날짜</td>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(d => (
                <td key={d} className="border-r border-b border-slate-900 p-1.5 text-center font-bold">{d}</td>
              ))}
            </tr>
            <tr>
              <td className="border-r border-b border-slate-900 p-1.5 bg-slate-50 font-bold text-center leading-tight">본인<br/><span className="text-[8px] font-normal text-slate-500">(서명)</span></td>
              {[1, 2, 3, 4, 5].map(d => <td key={d} className="border-r border-b border-slate-900 p-1.5 text-center font-serif italic text-blue-600 text-[12px]">홍길동</td>)}
              <td className="border-r border-b border-slate-900 p-1.5 text-center text-slate-400 bg-slate-50 font-medium">토요일</td>
              <td className="border-r border-b border-slate-900 p-1.5 text-center text-slate-400 bg-slate-50 font-medium">일요일</td>
              {[8, 9].map(d => <td key={d} className="border-r border-b border-slate-900 p-1.5 text-center font-serif italic text-blue-600 text-[12px]">홍길동</td>)}
              <td className="border-r border-b border-slate-900 bg-red-50/30 p-1.5 text-center font-serif italic text-blue-600 text-[12px] relative font-bold">
                홍길동
              </td>
              {[11, 12].map(d => <td key={d} className="border-r border-b border-slate-900 p-1.5 text-center font-serif italic text-blue-600 text-[12px]">홍길동</td>)}
              <td className="border-r border-b border-slate-900 p-1.5 text-center text-slate-400 bg-slate-50 font-medium">토요일</td>
              <td className="border-r border-b border-slate-900 p-1.5 text-center text-slate-400 bg-slate-50 font-medium">일요일</td>
              <td className="border-r border-b border-slate-900 p-1.5 text-center font-serif italic text-blue-600 text-[12px]">홍길동</td>
            </tr>
            <tr className="border-b-2 border-slate-900">
              <td className="border-r border-b border-slate-900 p-1.5 bg-slate-50 font-bold text-center leading-tight">확인자<br/><span className="text-[8px] font-normal text-slate-500">(서명)</span></td>
              {[1, 2, 3, 4, 5].map(d => <td key={d} className="border-r border-b border-slate-900 p-1.5 text-center text-slate-500">김담당</td>)}
              <td className="border-r border-b border-slate-900 p-1.5 text-center text-slate-400 bg-slate-50">-</td>
              <td className="border-r border-b border-slate-900 p-1.5 text-center text-slate-400 bg-slate-50">-</td>
              {[8, 9].map(d => <td key={d} className="border-r border-b border-slate-900 p-1.5 text-center text-slate-500">김담당</td>)}
              <td className="border-r border-b border-slate-900 bg-red-50/30 p-1.5 text-center text-slate-500 font-bold">김담당</td>
              {[11, 12].map(d => <td key={d} className="border-r border-b border-slate-900 p-1.5 text-center text-slate-500">김담당</td>)}
              <td className="border-r border-b border-slate-900 p-1.5 text-center text-slate-400 bg-slate-50">-</td>
              <td className="border-r border-b border-slate-900 p-1.5 text-center text-slate-400 bg-slate-50">-</td>
              <td className="border-r border-b border-slate-900 p-1.5 text-center text-slate-500">김담당</td>
            </tr>

            {/* Grid 16-30 */}
            <tr className="bg-slate-100">
              <td className="border border-slate-800 p-1 font-bold text-center">날짜</td>
              {[16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map(d => (
                <td key={d} className="border border-slate-800 p-1 text-center font-medium">{d}</td>
              ))}
            </tr>
            <tr>
              <td className="border border-slate-800 p-1 bg-slate-50 font-bold text-center leading-tight">본인<br/><span className="text-[8px] font-normal">(서명 또는 인)</span></td>
              <td colSpan={5} className="border border-slate-800 p-1 text-center bg-slate-50/50">
                <div className="flex items-center justify-center gap-2 text-red-500 font-bold">
                  <span className="text-[8px]">◀········</span> 복무기본교육 <span className="text-[8px]">········▶</span>
                </div>
              </td>
              <td className="border border-slate-800 p-1 text-center text-slate-400 bg-slate-50">토요일</td>
              <td className="border border-slate-800 p-1 text-center text-slate-400 bg-slate-50">일요일</td>
              {[23, 24, 25].map(d => <td key={d} className="border border-slate-800 p-1 text-center font-serif italic text-blue-600">홍길동</td>)}
              <td className="border border-slate-800 p-1 text-center font-bold text-rose-500 bg-rose-50">연가</td>
              <td className="border border-slate-800 p-1 text-center font-serif italic text-blue-600">홍길동</td>
              <td className="border border-slate-800 p-1 text-center text-slate-400 bg-slate-50">토요일</td>
              <td className="border border-slate-800 p-1 text-center text-slate-400 bg-slate-50">일요일</td>
              <td className="border border-slate-800 p-1 text-center font-serif italic text-blue-600">홍길동</td>
            </tr>
            <tr>
              <td className="border border-slate-800 p-1 bg-slate-50 font-bold text-center leading-tight">확인자<br/><span className="text-[8px] font-normal">(서명 또는 인)</span></td>
              {[16, 17, 18, 19, 20].map(d => <td key={d} className="border border-slate-800 p-1 text-center text-slate-500">김담당</td>)}
              <td className="border border-slate-800 p-1 text-center text-slate-400 bg-slate-50">-</td>
              <td className="border border-slate-800 p-1 text-center text-slate-400 bg-slate-50">-</td>
              {[23, 24, 25, 26, 27].map(d => <td key={d} className="border border-slate-800 p-1 text-center text-slate-500">김담당</td>)}
              <td className="border border-slate-800 p-1 text-center text-slate-400 bg-slate-50">-</td>
              <td className="border border-slate-800 p-1 text-center text-slate-400 bg-slate-50">-</td>
              <td className="border border-slate-800 p-1 text-center text-slate-500">김담당</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom Table */}
      <div className="space-y-1">
        <div className="bg-slate-200 text-center py-1.5 text-[12px] font-bold border-x border-t border-slate-900">근무상황</div>
        <table className="w-full text-[11px] border-collapse border border-slate-900 text-center shadow-sm">
          <thead>
            <tr className="bg-slate-100 italic">
              <th rowSpan={2} className="border-r border-b border-slate-900 p-2 font-bold w-12 text-[10px]">종별</th>
              <th rowSpan={2} className="border-r border-b border-slate-900 p-2 font-bold text-[10px]">기간 또는 일시</th>
              <th rowSpan={2} className="border-r border-b border-slate-900 p-2 font-bold text-[10px]">사유 또는 용무</th>
              <th colSpan={3} className="border-r border-b border-slate-900 p-1 font-bold text-[11px]">결재</th>
              <th rowSpan={2} className="border-b border-slate-900 p-2 font-bold text-[10px]">직무수행 태도</th>
            </tr>
            <tr className="bg-slate-100 italic text-[9px]">
              <th className="border-r border-b border-slate-900 p-1 font-bold">담당</th>
              <th className="border-r border-b border-slate-900 p-1 font-bold">팀장</th>
              <th className="border-r border-b border-slate-900 p-1 font-bold">과장</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border-r border-b border-slate-900 p-2 font-bold underline underline-offset-2 decoration-slate-300">연 가</td>
              <td className="border-r border-b border-slate-900 p-2">2026. 5. 10.</td>
              <td className="border-r border-b border-slate-900 p-2 text-slate-600">개인사정</td>
              <td className="border-r border-b border-slate-900 p-2 text-slate-500">김담당</td>
              <td className="border-r border-b border-slate-900 p-2 text-slate-500">김계장</td>
              <td className="border-r border-b border-slate-900 p-2 text-slate-500 underline underline-offset-2 decoration-slate-300">박과장</td>
              <td className="border-b border-slate-900 p-2 font-bold text-emerald-600">정상</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-start pt-4 border-l border-slate-200">
        <div className="space-y-1.5 pl-2">
          <p className="text-[11px] font-bold text-slate-900 leading-tight flex items-center gap-1.5 italic">
            <Info size={10} className="text-slate-400" /> ※ 유의사항
          </p>
          <ul className="text-[10px] text-slate-500 space-y-1 list-disc list-inside pl-1">
            <li>반드시 본인이 직접 서명하여야 함.(대리 서명 금지, 이름 정자로 서명)</li>
            <li>확인자는 매일 출근여부를 대면으로 확인 후 서명</li>
            <li>일일 서명과 사회복무포털 입력 내용 일치 확인</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

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
      done: false, 
      priority: 'Critical', 
      description: '정보시스템 접근 금지, 사진/동영상의 무단 촬영 및 외부 유출 방지 서약' 
    },
    { 
      id: 4, 
      text: '일일복무상황부 및 근무상황 비치 확인(매일)', 
      done: false, 
      priority: 'High', 
      description: '매일 본인 서명 확인 후 복무관리포털(시스템) 최종 대조 및 입력',
      hasGuide: true
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

  const [showGuide, setShowGuide] = useState(false);

  const toggle = (id: number) => {
    setItems(items.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-20">
      <div className="p-4 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl text-white shadow-xl shadow-blue-100 mb-8 overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <CheckCircle2 size={24} /> 필수 체크리스트
          </h2>
          <p className="mt-1 text-blue-100 text-xs opacity-90 leading-relaxed font-medium">실태조사 결과 결함이 빈번하게 발생하는 주요 항목입니다.</p>
        </div>
        <div className="absolute top-[-20px] right-[-20px] opacity-10">
          <ShieldCheck size={120} />
        </div>
      </div>

      <div className="bg-white border rounded-[2rem] shadow-sm overflow-hidden border-slate-100">
        <div className="p-5 bg-slate-50/50 border-b flex justify-between items-center border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            </div>
            <span className="text-sm font-bold text-slate-700">관리 항목 ({items.filter(i => i.done).length}/{items.length})</span>
          </div>
        </div>
        
        <div className="divide-y divide-slate-100">
          {items.map((item) => (
            <div 
              key={item.id} 
              className={`p-5 flex items-start gap-4 transition-all active:scale-[0.98] ${item.done ? 'bg-slate-50/50' : 'bg-white'}`}
            >
              <div 
                onClick={() => toggle(item.id)}
                className={`mt-1 w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all cursor-pointer ${
                  item.done ? 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-200' : 'border-slate-200 bg-white hover:border-blue-400'
                }`}
              >
                {item.done && <CheckCircle2 size={12} className="text-white font-black" />}
              </div>
              <div className="flex-1 min-w-0" onClick={() => toggle(item.id)}>
                <div className="flex items-start gap-2 mb-1">
                  <p className={`text-[15px] font-bold leading-tight ${item.done ? 'text-slate-400' : 'text-slate-800'}`}>
                    {item.text}
                  </p>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-tighter shrink-0 mt-0.5 ${
                    item.priority === 'Critical' ? 'bg-red-100 text-red-600' :
                    item.priority === 'High' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {item.priority}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className={`text-[13px] leading-relaxed ${item.done ? 'text-slate-300' : 'text-slate-500'}`}>
                    {item.description}
                  </p>
                  {item.hasGuide && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowGuide(true);
                      }}
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg w-fit mt-1 hover:bg-blue-100 transition-colors border border-blue-100"
                    >
                      <Eye size={12} /> 작성 가이드 보기
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showGuide && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowGuide(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm px-4"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <div className="p-4 bg-slate-900 text-white flex justify-between items-center shrink-0">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-blue-600 rounded-xl">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold">작성 가이드</h3>
                    <p className="text-[10px] text-slate-400">일일복무상황부 및 근무상황 관리</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowGuide(false)}
                  className="p-2 hover:bg-slate-800 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                <DailyReportGuide />
                
                <div className="mt-6 space-y-4">
                  <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-slate-200">
                      <UserCheck className="text-emerald-600" size={20} />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-slate-800">작성방법</h4>
                      <ul className="text-[12px] text-slate-500 mt-1.5 space-y-1.5 leading-relaxed">
                        <li>① 사회복무요원 매일 근무시간 전 출근하여 일일복무상황부에 <span className="font-bold text-slate-700 bg-yellow-100 px-1">본인서명</span></li>
                        <li>② 담당자는 사회복무요원 출근 여부를 대면으로 확인 후 <span className="font-bold text-slate-700 bg-yellow-100 px-1">확인자 란에 확인서명</span></li>
                        <li>③ 출근 외 근무사항은 일일복무상황부 <span className="font-bold text-slate-700 bg-yellow-100 px-1">근무사항 란에 결재하여 허가</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-slate-200">
                      <ShieldCheck className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-slate-800">사후관리</h4>
                      <ul className="text-[12px] text-slate-500 mt-1.5 space-y-1.5 leading-relaxed">
                        <li>① 출근 및 유고사항 <span className="font-bold text-slate-700 bg-yellow-100 px-1 text-[11px]">사회복무포털 등록</span></li>
                        <li>② 일일복무상황부 및 <span className="font-bold text-slate-700 bg-yellow-100 px-1">관련서류 보관(5년)</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-slate-50 border-t shrink-0">
                <button 
                  onClick={() => setShowGuide(false)}
                  className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold active:scale-[0.98] transition-transform"
                >
                  명확히 이해했습니다
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 border border-blue-100 p-5 rounded-3xl flex gap-3 shadow-sm">
          <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
            <span className="text-blue-500 text-xl font-bold">📜</span>
          </div>
          <div>
            <h4 className="text-sm font-bold text-blue-800">임무표 등록 기한</h4>
            <p className="text-[12px] text-blue-700/80 mt-1 leading-relaxed">복무기관 배치 후 7일 이내에 포털에 등록해야 하며, 본인이 자신의 임무를 명확히 인지하도록 설명해야 합니다.</p>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-100 p-5 rounded-3xl flex gap-3 shadow-sm">
          <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
            <span className="text-amber-500 text-xl font-bold">🔒</span>
          </div>
          <div>
            <h4 className="text-sm font-bold text-amber-800">보안 관리 필수</h4>
            <p className="text-[12px] text-amber-700/80 mt-1 leading-relaxed">직업 전산망 ID/PW 공유는 병역법 위반입니다. 반드시 담당자 감독 하에만 제한적으로 시스템을 사용하게 하세요.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checklist;
