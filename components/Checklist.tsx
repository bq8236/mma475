
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, CheckCircle2, AlertCircle, X, Info, FileText, UserCheck, ShieldCheck, ClipboardList, MapPin, GraduationCap, FileSignature, Clock, CalendarRange, Wallet, MessageSquareQuote, Stethoscope, PlusCircle, HelpCircle } from 'lucide-react';

const SickLeaveGuide = () => (
  <div className="space-y-6 font-sans pb-6">
    <div className="flex items-center gap-2 mb-4 border-l-4 border-slate-900 pl-3">
      <h3 className="text-lg font-bold text-slate-800">공무 외 병가 증빙서류 및 규정 가이드</h3>
    </div>

    {/* Section 1: Basic Rule */}
    <div className="relative p-6 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <Clock size={80} />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 bg-slate-900 text-white text-[10px] font-bold rounded">기본 원칙</span>
          <h4 className="font-bold text-slate-800">질병 등으로 직무를 수행할 수 없을 때</h4>
        </div>
        <p className="text-[13px] text-slate-600 leading-relaxed mb-4">복무기간 중 통산 <span className="text-slate-900 font-black text-lg underline decoration-slate-300 underline-offset-4">30일</span> 범위 내 허가</p>
        
        <div className="flex items-center justify-between gap-4 py-3 border-y border-dashed border-slate-200">
          <div className="text-center flex-1">
            <div className="text-[10px] text-slate-400 mb-1">사회복무요원</div>
            <div className="bg-slate-100 py-2 rounded-lg text-[11px] font-bold">병가 신청</div>
          </div>
          <div className="text-slate-300 italic">→</div>
          <div className="text-center flex-1">
            <div className="text-[10px] text-slate-400 mb-1">복무기관</div>
            <div className="bg-slate-800 text-white py-2 rounded-lg text-[11px] font-bold">질병상태 종합 판단, 허가</div>
          </div>
        </div>
      </div>
    </div>

    {/* Section 2: Requirements by Duration */}
    <div className="space-y-3">
      <h4 className="text-[13px] font-bold text-slate-800 flex items-center gap-2">
        <FileText size={16} className="text-blue-500" /> ① 병가 일수에 맞는 서류 제출 및 사용 전 교육
      </h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="p-4 bg-white border-l-4 border-blue-400 rounded-r-xl border-y border-r border-slate-200 shadow-sm">
          <p className="text-[11px] font-bold text-blue-600 mb-1">3일 이내</p>
          <p className="text-[12px] text-slate-700 font-medium leading-tight">진료확인서·처방전·소견서 중 하나를 사회복무요원이 선택하여 제출</p>
        </div>
        <div className="p-4 bg-white border-l-4 border-slate-800 rounded-r-xl border-y border-r border-slate-200 shadow-sm">
          <p className="text-[11px] font-bold text-slate-800 mb-1">4일 이상</p>
          <p className="text-[12px] text-slate-700 font-medium leading-tight">진단서 및 입·퇴원확인서(입원시)를 필수 제출</p>
        </div>
      </div>

      <div className="p-4 bg-rose-50 border border-rose-100 rounded-2xl relative">
        <div className="absolute -top-2 left-4 px-2 bg-rose-500 text-white text-[9px] font-bold rounded italic shadow-sm">신 설</div>
        <p className="text-[12px] text-rose-800 font-bold mb-1">경미한 질환 증빙서류 면제 조항</p>
        <p className="text-[11px] text-rose-700 leading-relaxed font-medium">병가 기간이 <span className="underline decoration-rose-300">"1일" 이내</span>의 경미한 질환은 <span className="underline decoration-rose-300">"통산 6일"</span> 범위 내에서 증빙서류 없이 허가 가능</p>
        <div className="mt-2 pl-3 border-l-2 border-rose-200 text-[10px] text-rose-500">
           → 병가 조퇴, 지각 등 포함하여 누계로 계산
        </div>
      </div>
    </div>

    {/* Section 3: Procedures */}
    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
      <div className="flex items-start gap-3">
        <div className="bg-white p-1 rounded border border-slate-200 shrink-0 text-[10px] font-bold text-slate-400">②</div>
        <p className="text-[12px] text-slate-700 leading-relaxed">
          예상치 못한 질병으로 출근이 어려운 경우 <span className="font-bold text-slate-900">→</span> <span className="text-blue-600 decoration-blue-200 underline">지체 없이</span> 복무기관의 장에게 전화 등으로 알려야 함
          <span className="block text-[11px] text-slate-500 mt-1">* 사후에 증빙서류를 제출 받아 허가 여부 결정</span>
        </p>
      </div>
      <div className="flex items-start gap-3">
        <div className="bg-white p-1 rounded border border-slate-200 shrink-0 text-[10px] font-bold text-slate-400">③</div>
        <p className="text-[12px] text-slate-700 leading-relaxed font-bold">
          증빙서류를 제출하지 못한 경우 <span className="text-rose-600 underline">"연가"</span> 로 처리
        </p>
      </div>
    </div>

    {/* Section 4: Bonus Vacation */}
    <div className="border-2 border-slate-900 rounded-3xl overflow-hidden shadow-lg">
      <div className="bg-slate-900 p-3 flex items-center gap-2">
        <PlusCircle size={18} className="text-emerald-400" />
        <h4 className="text-sm font-bold text-white">병가 미사용자 연가가산 (혜택)</h4>
      </div>
      <div className="p-5 bg-white space-y-4">
        <div>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">대상 요건</p>
          <ul className="text-[12px] text-slate-700 space-y-2">
            <li className="flex items-start gap-2">
              <span className="shrink-0 text-emerald-500 font-bold">①</span>
              <span>결근, 복무이탈 등 복무의무 위반 사실이 없는 자</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="shrink-0 text-emerald-500 font-bold">②</span>
              <span>소집해제 30일 전까지 병가를 받지 아니하거나, 2일 이내로 받은 경우</span>
            </li>
          </ul>
        </div>
        <div className="pt-4 border-t border-slate-100">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">가산 일수</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-emerald-50 p-3 rounded-2xl text-center border border-emerald-100">
              <p className="text-[10px] text-emerald-600 font-bold">병가 미사용</p>
              <p className="text-[16px] font-black text-emerald-700 underline decoration-2 decoration-emerald-200">5일 부여</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-2xl text-center border border-blue-100">
              <p className="text-[10px] text-blue-600 font-bold">통산 2일 이내</p>
              <p className="text-[16px] font-black text-blue-700 underline decoration-2 decoration-blue-200">2일 부여</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ArrivalGuideline = () => (
  <div className="space-y-4 font-sans">
    <div className="flex items-center gap-2 mb-4 border-l-4 border-slate-900 pl-3">
      <h3 className="text-lg font-bold text-slate-800">사회복무요원 출근시 가이드라인</h3>
    </div>

    {/* Step 01 */}
    <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0 border-2 border-slate-200">
        <span className="text-xs font-bold text-slate-600">01</span>
      </div>
      <div className="flex-1">
        <div className="bg-slate-700 text-white px-3 py-1.5 rounded-lg inline-block font-bold text-[13px] mb-2">신상명세서 작성</div>
        <div className="text-[12px] text-slate-600 space-y-1.5 leading-relaxed">
          <p>사회복무요원이 자필로 가족관계, 질병 등 포함하여 작성</p>
          <p className="flex items-center gap-1.5">
            <span className="text-blue-500">→</span> 복무분야, 근무지 배치 및 고충처리 등 복무관리 자료로 활용
          </p>
          <p className="flex items-center gap-1.5 font-bold text-rose-600">
            <CheckCircle2 size={12} /> 신상명세서 내 민감정보 수집이용동의에 체크 확인
          </p>
        </div>
      </div>
    </div>

    {/* Step 02 */}
    <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center shrink-0 border-2 border-slate-800">
        <span className="text-xs font-bold text-white">02</span>
      </div>
      <div className="flex-1">
        <div className="bg-slate-900 text-white px-3 py-1.5 rounded-lg inline-block font-bold text-[13px] mb-2 text-center w-full sm:w-auto">복무분야/근무지 지정</div>
        <div className="text-[12px] text-slate-600 space-y-1.5 leading-relaxed">
          <p>신상명세서 상 거주지(출퇴근 시간), 질병 등 고려, 근무지/복무분야 지정</p>
          <p className="flex items-center gap-1.5">
            <span className="text-blue-500">→</span> 사회복무포털-복무분야/근무지지정 입력 · 지방병무청 통보(5일 이내)
          </p>
        </div>
      </div>
    </div>

    {/* Step 03 */}
    <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0 border-2 border-slate-200">
        <span className="text-xs font-bold text-slate-600">03</span>
      </div>
      <div className="flex-1">
        <div className="bg-slate-700 text-white px-3 py-1.5 rounded-lg inline-block font-bold text-[13px] mb-2 text-center w-full sm:w-auto">배치 전 교육</div>
        <div className="text-[12px] text-slate-600 leading-relaxed">
          근무지 배치 전 사회복무요원에게 사회복무요원의 신분(의무), 복무규정(휴가, 보수 등) 및 규정 위반시 처벌기준, 복무기관에서 직무수행시 유의사항 등을 교육
        </div>
      </div>
    </div>

    {/* Step 04 */}
    <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center shrink-0 border-2 border-slate-800">
        <span className="text-xs font-bold text-white">04</span>
      </div>
      <div className="flex-1">
        <div className="bg-slate-900 text-white px-3 py-1.5 rounded-lg inline-block font-bold text-[13px] mb-2 text-center w-full sm:w-auto">임무표 등 작성(7일이내)</div>
        <div className="text-[12px] text-slate-600 space-y-2 leading-relaxed">
          <p className="flex items-start gap-2">
            <span className="font-bold text-slate-800 shrink-0">(임무표)</span>
            <span>수행해야 할 임무를 구체적으로 작성</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="font-bold text-slate-800 shrink-0">(보안준수확인서)</span>
            <span>전체를 읽어보게 한 후 서명</span>
          </p>
          <p className="text-blue-600 font-bold text-[11px] text-right">* 사회복무요원과 근무지의 장이 서명</p>
        </div>
      </div>
    </div>

    {/* Step 05 */}
    <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0 border-2 border-slate-200">
        <span className="text-xs font-bold text-slate-600">05</span>
      </div>
      <div className="flex-1">
        <div className="bg-slate-700 text-white px-3 py-1.5 rounded-lg inline-block font-bold text-[13px] mb-2 text-center w-full sm:w-auto">근무상황 관리</div>
        <div className="text-[12px] text-slate-600 space-y-2 leading-relaxed">
          <p className="flex items-start gap-2">
            <span className="font-bold text-slate-800 shrink-0">(출근)</span>
            <span>사회복무요원이 출근시간 시작 전 비치된 일일복무상황부에 서명</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="font-bold text-slate-800 shrink-0">(휴가)</span>
            <span>불가피한 경우를 제외하고 사전에 허가 받을 수 있도록 안내</span>
          </p>
          <p className="flex items-center gap-1.5 bg-blue-50 p-2 rounded-lg text-blue-700">
            <Info size={12} /> 일일복무상황부에 기재된 복무기록을 사회복무포털에 입력(주1회 이상)
          </p>
        </div>
      </div>
    </div>

    {/* Step 06 */}
    <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center shrink-0 border-2 border-slate-800">
        <span className="text-xs font-bold text-white">06</span>
      </div>
      <div className="flex-1">
        <div className="bg-slate-900 text-white px-3 py-1.5 rounded-lg inline-block font-bold text-[13px] mb-2 text-center w-full sm:w-auto">월 1회 직무교육</div>
        <div className="text-[12px] text-slate-600 space-y-2 leading-relaxed">
          <p>① 공무수행자로서의 정신자세 ② 복무기관 이용객 특성 및 업무 시 유의할 점 ③ 개인정보 보호, 복무기관 괴롭힘 예방교육 포함하여 교육</p>
          <div className="bg-rose-50 p-2 rounded-lg border border-rose-100 text-rose-700 text-[11px]">
            <p className="flex items-start gap-1.5">
              <CheckCircle2 size={12} className="mt-0.5 shrink-0" />
              <span>복지시설 및 장애학생 지원 분야의 경우, 사회복무요원이 관련분야 경험이 없음을 고려, 상세한 업무 방법 및 돌발상황시 대처방법 등 교육, 선의의 피해가 발생하지 않도록 노력</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Step 07 */}
    <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0 border-2 border-slate-200">
        <span className="text-xs font-bold text-slate-600">07</span>
      </div>
      <div className="flex-1">
        <div className="bg-slate-700 text-white px-3 py-1.5 rounded-lg inline-block font-bold text-[13px] mb-2 text-center w-full sm:w-auto">보수 지급</div>
        <div className="text-[12px] text-slate-600 space-y-1.5 leading-relaxed">
          <p>매월 복무기관의 월 보수 지급일 또는 복무기관에서 정한 날 기준 지급</p>
          <p className="text-blue-600 font-bold text-[11px]">* 사회복무포털 등에 입력된 근태 기준으로 보수액(교통, 식비 등) 산정</p>
        </div>
      </div>
    </div>

    {/* Step 08 */}
    <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center shrink-0 border-2 border-slate-800">
        <span className="text-xs font-bold text-white">08</span>
      </div>
      <div className="flex-1">
        <div className="bg-slate-900 text-white px-3 py-1.5 rounded-lg inline-block font-bold text-[13px] mb-2 text-center w-full sm:w-auto">관찰/면담(분기)</div>
        <div className="text-[12px] text-slate-600 space-y-2 leading-relaxed">
          <p>분기 1회 이상 소속 사회복무요원의 관찰 및 면담내용 작성</p>
          <p className="flex items-center gap-1.5 text-blue-600">
            <span className="font-black">*</span> 관찰 면담일지, 교육일지 등 사회복무포털 등록
          </p>
          <p className="flex items-start gap-1.5 font-bold text-rose-600">
            <CheckCircle2 size={12} className="mt-0.5 shrink-0" />
            <span>사회복무요원 고충 발생 시 복무기관 차원의 해소 노력</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

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

const StatusChangeGuide = () => (
  <div className="space-y-6 font-sans pb-6">
    <div className="flex items-center gap-2 mb-4 border-l-4 border-slate-900 pl-3">
      <h3 className="text-lg font-bold text-slate-800">신상변동 통보 가이드</h3>
    </div>

    {/* Section: Process Flow */}
    <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
      <div className="grid grid-cols-4 gap-2 items-center text-center">
        <div className="space-y-2">
          <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
            <UserCheck size={20} className="mx-auto text-slate-600" />
            <p className="text-[10px] font-bold mt-1">사회복무요원</p>
          </div>
          <p className="text-[9px] text-slate-500 font-bold">신상변동사항 발생</p>
        </div>
        <div className="text-slate-300">→</div>
        <div className="space-y-2">
          <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-rose-500 whitespace-nowrap">7일 이내</span>
            <ShieldCheck size={20} className="mx-auto text-blue-600" />
            <p className="text-[10px] font-bold mt-1">근무지(복지시설)</p>
          </div>
          <p className="text-[9px] text-slate-500 font-bold">신상변동 보고</p>
        </div>
        <div className="text-slate-300">→</div>
      </div>
      
      <div className="grid grid-cols-4 gap-2 items-center text-center mt-8">
        <div className="col-start-2 space-y-2">
          <div className="bg-slate-900 text-white p-2 rounded-xl shadow-lg relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-rose-500 whitespace-nowrap">7일 이내</span>
            <FileText size={20} className="mx-auto text-blue-400" />
            <p className="text-[10px] font-bold mt-1">복무기관</p>
          </div>
          <p className="text-[9px] text-slate-500 font-bold">신상변동 통보</p>
        </div>
        <div className="text-slate-300">→</div>
        <div className="space-y-2">
          <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
            <CheckCircle2 size={20} className="mx-auto text-emerald-600" />
            <p className="text-[10px] font-bold mt-1">병무청</p>
          </div>
          <p className="text-[9px] text-slate-500 font-bold">신상변동 승인</p>
        </div>
      </div>
    </div>

    {/* Section: Targets */}
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Info size={18} className="text-blue-600" />
        <h4 className="font-bold text-slate-800 text-[14px]">(대상) 복무 연장, 복무중단 등 자원관리에 필요한 사항</h4>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {[
          "① 복무이탈 · 의무위반 경고처분자",
          "② 복무이탈 · 경고처분 사유 고발자",
          "③ 복무중단자 및 재복무개시자 (복무이탈 후 중단, 형사사건으로 구속자)",
          "④ 연가 · 병가를 초과하여 사용한 자",
          "⑤ 기소중지 또는 재복무 불이행자",
          "⑥ 복무 중 사망자, 공무상 병가 승인자 등"
        ].map((text, i) => (
          <div key={i} className="p-3 bg-white border border-slate-100 rounded-xl text-[12px] text-slate-700 shadow-sm">
            {text}
          </div>
        ))}
      </div>
    </div>

    {/* Section: Actions */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl space-y-3">
        <h4 className="font-bold text-blue-900 text-[13px] flex items-center gap-2">
          <ShieldCheck size={16} /> 근무지 (복지시설)
        </h4>
        <div className="text-[11px] text-blue-800 space-y-2">
          <p className="font-bold underline">사유 별 구비서류 작성 · 보고</p>
          <p className="text-[10px] text-blue-600">* 사회복무포털-신상변동 통보</p>
        </div>
      </div>
      <div className="p-4 bg-slate-100 border border-slate-200 rounded-2xl space-y-3">
        <h4 className="font-bold text-slate-900 text-[13px] flex items-center gap-2">
          <FileSignature size={16} /> 복무기관
        </h4>
        <div className="text-[11px] text-slate-700 space-y-2">
          <p className="font-bold underline">근무지 보고사항 검토 · 통보</p>
          <ul className="space-y-1 pl-2">
            <li>- 필요 시 경고장 발부 등 조치</li>
            <li className="text-[10px] text-slate-500">* 사회복무포털-신상변동 통보</li>
            <li>- 월 1회 이상 미통보자 점검</li>
            <li className="text-[10px] text-slate-500">* 포털-신상변동 미통보자 조회</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Warning & Penalty */}
    <div className="space-y-3">
      <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-center">
        <p className="text-[13px] font-black text-rose-900 leading-relaxed">
          사회복무요원의 정확한 자원관리를 위해<br/>
          <span className="bg-rose-600 text-white px-2 py-0.5 rounded italic">"신상변동 통보 누락"</span> 되지 않도록 유의
        </p>
      </div>
      <div className="p-4 bg-slate-900 text-white rounded-2xl">
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle size={16} className="text-rose-400" />
          <h4 className="font-bold text-[13px]">통보지연 시 행정처분</h4>
        </div>
        <p className="text-[12px] text-slate-300">
           신상변동 통보지연 시 <span className="text-white font-bold underline decoration-rose-500/50">행정처분(3개월 미만 주의, 3개월 이상 경고)</span>
        </p>
      </div>
    </div>
  </div>
);

const DutyListGuide = () => (
  <div className="space-y-6 font-sans pb-6">
    <div className="flex items-center gap-2 mb-4 border-l-4 border-slate-900 pl-3">
      <h3 className="text-lg font-bold text-slate-800">사회복무요원 임무표 작성 방법</h3>
    </div>

    {/* Preparation Timing */}
    <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
      <div className="flex items-center gap-2 mb-1">
        <Clock size={18} className="text-slate-700" />
        <h4 className="font-bold text-slate-800 text-[14px]">작성 시기</h4>
      </div>
      <ul className="text-[12px] text-slate-600 space-y-1.5 pl-5 list-disc">
        <li>복무 시작 후 <span className="text-slate-900 font-bold">7일 이내</span> 작성</li>
        <li>복무 중에도 <span className="text-blue-600 font-bold underline decoration-blue-200">기존 업무와 변경 시</span> 수정하여 작성</li>
      </ul>
    </div>

    {/* Preparation Method */}
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-1">
        <FileSignature size={18} className="text-blue-600" />
        <h4 className="font-bold text-slate-800 text-[14px]">작성 방법</h4>
      </div>

      <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-4">
        <div className="space-y-2">
          <p className="text-[13px] font-bold text-slate-800 flex items-center gap-2">
            <span className="w-5 h-5 bg-slate-900 text-white rounded-full flex items-center justify-center text-[10px]">①</span>
            임무를 구체화 하여 상세 기입
          </p>
          <div className="bg-blue-50 p-3 rounded-xl border border-blue-100 space-y-2">
            <p className="text-[11px] font-bold text-blue-700">예시)</p>
            <ul className="text-[11px] text-blue-800 space-y-1 leading-relaxed">
              <li>• 주요 복무 장소에서 해야 할 업무 등 구체적으로 나열</li>
              <li>• 환경 정비 등 공통(일상) 임무 수행 명시</li>
            </ul>
          </div>
        </div>

        <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl space-y-2">
          <p className="text-[11px] font-bold text-rose-700 flex items-center gap-1.5">
            <AlertCircle size={12} /> 잘못된 작성 예
          </p>
          <ul className="text-[11px] text-rose-800 space-y-1.5 leading-relaxed">
            <li>
              <span className="font-bold">- 서식의 내용 변경 없이 서명만 받는 경우</span>
              <p className="text-[10px] text-rose-500 mt-0.5">* 사회복무요원 소집업무규정 별표 1의 복무분야별 사회복무요원 주임무, 공통임무에 한정함</p>
            </li>
            <li>
              <span className="font-bold">- 행정지원, 복지시설 업무 보조 등 복무분야만 명시해서 기입</span>
            </li>
          </ul>
        </div>

        <div className="pt-2">
          <p className="text-[13px] font-bold text-slate-800 flex items-start gap-2">
            <span className="w-5 h-5 bg-slate-900 text-white rounded-full flex items-center justify-center text-[10px] shrink-0">②</span>
            <span>특이사항(개인정보 취급, 민원 발생 분야 등)에 해당하는 업무 부여시 <span className="text-blue-600 underline">"특이사항"</span> 란에 반드시 체크 후 아래에 상세내용 작성</span>
          </p>
        </div>
      </div>
    </div>

    {/* Data Management */}
    <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-3 shadow-lg">
      <div className="flex items-center gap-2">
        <ShieldCheck size={18} className="text-emerald-400" />
        <h4 className="font-bold text-[14px]">자료 관리</h4>
      </div>
      <p className="text-[12px] text-slate-300 leading-relaxed">
        근무지의 장, 사회복무요원 <span className="text-white font-bold underline decoration-emerald-400/50">서명 후 사회복무포털 등록</span> 및 원본 보관
      </p>
    </div>

    {/* Footer message */}
    <div className="text-center py-4 bg-blue-50/50 rounded-2xl border border-dashed border-blue-200">
      <p className="text-[13px] font-black text-blue-900 leading-relaxed">
        임무 범위에 대한 <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded italic">"명확화"</span>로<br/>
        사회복무요원과의 불필요한 갈등 예방
      </p>
    </div>
  </div>
);

const Checklist: React.FC = () => {
  const [items, setItems] = useState([
    { 
      id: 10, 
      text: '사회복무요원 복무관리체계 확인', 
      done: false, 
      priorities: ['Critical'], 
      description: '사회복무요원 출근시 가이드라인(신상명세서, 임무표, 교육 등) 단계별 확인',
      hasGuide: true,
      guideType: 'arrival'
    },
    { 
      id: 9, 
      text: '배치전 교육 실시 (최초 배치 시)', 
      done: false, 
      priorities: [], 
      description: '사회복무요원 신분(의무), 복무규정(휴가·보수), 위반 시 처벌기준, 직무수행 유의사항 교육'
    },
    { 
      id: 1, 
      text: '사회복무요원 신상명세서 작성 및 확인 (별지 제2호)', 
      done: false, 
      priorities: ['High'], 
      description: '인적사항, 질병정보, 민감정보 수집·이용 동의 여부 필히 확인' 
    },
    { 
      id: 2, 
      text: '사회복무요원 임무표 작성 (별지 제27호)', 
      done: false, 
      priorities: ['Critical'], 
      description: '주임무 및 공통임무 명시, 복무기관 배치 후 7일 이내 복무포털 등록 및 본인 확인 필수',
      hasGuide: true,
      guideType: 'duty'
    },
    { 
      id: 3, 
      text: '보안준수 확인서 징구 (별지 제28호)', 
      done: false, 
      priorities: ['Critical'], 
      description: '정보시스템 접근 금지, 사진/동영상의 무단 촬영 및 외부 유출 방지 서약' 
    },
    { 
      id: 4, 
      text: '일일복무상황부 및 근무상황 비치 확인(매일)', 
      done: false, 
      priorities: ['Critical', 'High', 'Medium'], 
      description: '매일 본인 서명 확인 후 복무관리포털(시스템) 최종 대조 및 입력',
      hasGuide: true,
      guideType: 'daily'
    },
    { 
      id: 5, 
      text: '근무편성표 작성 및 확인 (매월 첫 근무일)', 
      done: false, 
      priorities: ['Medium'], 
      description: '매월 첫 근무일에 해당 월의 근무 일정을 확정하여 공지' 
    },
    { 
      id: 6, 
      text: '병가 증빙서류 적정성 검토', 
      done: false, 
      priorities: ['High', 'Medium'], 
      description: '진단서(4일이상), 진료확인서, 소견서, 처방전만 인정 (영수증/약봉투 불가)',
      hasGuide: true,
      guideType: 'sick'
    },
    { 
      id: 7, 
      text: '교육일지 작성 (월 1회 이상)', 
      done: false, 
      priorities: ['Critical', 'High', 'Medium'], 
      description: '개인정보보호(필수), 복무기관 괴롭힘 예방 교육(필수), 직무수행에 필요한 사항, 복무관리 규정, 인권침해 예방, 성범죄관련 교육 내용 기록 (등록 : 사회복무포털 -> 복무자정보 -> 교육일지 관리 )' 
    },
    { 
      id: 8, 
      text: '관찰면담 기록 (분기 1회 이상)', 
      done: false, 
      priorities: ['Medium'], 
      description: '내용은 업무 및 심리 상태 기록, 신상명세서의 질병정보 등을 참고하여 업무 적합성 면담 실시(등록 : 사회복무포털 -> 복무자정보 -> 관찰/면담기록 ) * 사회복무요원 소집시부터 분기단위 작성(필요시 수시 작성)' 
    },
    { 
      id: 11, 
      text: '신상변동 통보', 
      done: false, 
      priorities: ['Critical'], 
      description: '복무이탈, 의무위반 경고, 연가/병가 초과 등 신상변동 발생 시 7일 이내 포털 통보 필수',
      hasGuide: true,
      guideType: 'status'
    },
  ]);

  const [activeGuide, setActiveGuide] = useState<null | 'daily' | 'arrival' | 'sick' | 'duty' | 'status'>(null);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (activeGuide) {
        setActiveGuide(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeGuide]);

  const openGuide = (type: 'daily' | 'arrival' | 'sick' | 'duty' | 'status') => {
    window.history.pushState({ modal: true }, "");
    setActiveGuide(type);
  };

  const closeGuide = () => {
    if (activeGuide) {
      setActiveGuide(null);
      // If we are closing manually (not via back button), 
      // we should go back in history to keep it clean.
      // We can check if the current state was a modal state.
      if (window.history.state && window.history.state.modal) {
        window.history.back();
      }
    }
  };

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
          {items.map((item: any) => (
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
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {item.priorities.map((p: string) => (
                      <span key={p} className={`text-[9px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-tighter shrink-0 ${
                        p === 'Critical' ? 'bg-red-100 text-red-600' :
                        p === 'High' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {p === 'Critical' ? 'CRITICAL' : p === 'High' ? 'HIGH' : 'MEDIUM'}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className={`text-[13px] leading-relaxed ${item.done ? 'text-slate-300' : 'text-slate-500'}`}>
                    {item.description}
                  </p>
                  {item.hasGuide && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openGuide(item.guideType as any);
                      }}
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg w-fit mt-1 hover:bg-blue-100 transition-colors border border-blue-100"
                    >
                      <Eye size={12} /> {
                        item.guideType === 'arrival' ? '사회복무요원 출근시 가이드라인 보기' : 
                        item.guideType === 'sick' ? '검토 가이드 보기' : 
                        item.guideType === 'status' ? '통보 가이드 보기' :
                        '작성 가이드 보기'
                      }
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeGuide && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeGuide}
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
                    <p className="text-[10px] text-slate-400">
                      {activeGuide === 'arrival' ? '사회복무요원 복무관리체계' : 
                       activeGuide === 'sick' ? '병가 증빙서류 및 규정 가이드' : 
                       activeGuide === 'duty' ? '사회복무요원 임무표 작성 방법' :
                       activeGuide === 'status' ? '신상변동 통보 가이드' :
                       '일일복무상황부 및 근무상황 관리'}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={closeGuide}
                  className="p-2 hover:bg-slate-800 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                {activeGuide === 'arrival' ? <ArrivalGuideline /> : 
                 activeGuide === 'sick' ? <SickLeaveGuide /> : 
                 activeGuide === 'duty' ? <DutyListGuide /> :
                 activeGuide === 'status' ? <StatusChangeGuide /> :
                 <DailyReportGuide />}
                
                {activeGuide === 'daily' && (
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
                )}
              </div>
              
              <div className="p-4 bg-slate-50 border-t shrink-0">
                <button 
                  onClick={() => setActiveGuide(null)}
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
