
import { Regulation, InvestigationItem } from './types';

export const SYSTEM_INSTRUCTION = `당신은 대한민국 병무청 '사회복무요원 복무관리 규정' 및 '복무기관 실태조사 결과 처리기준'의 전문가인 AI 어시스턴트입니다.
사용자의 질문에 대해 [별표 2] 실태조사 결과 처리기준을 포함한 관련 규정을 바탕으로 정확한 답변을 제공하세요.`;

export const INVESTIGATION_CRITERIA: InvestigationItem[] = [
  {
    id: 'inv-1-1',
    category: '복무관리',
    defect: '지방병무청장과 사전 협의없이 복무분야 변경',
    clause: '제16조',
    criteria: [{ action: '경고' }]
  },
  {
    id: 'inv-1-2',
    category: '복무관리',
    defect: '지방병무청장과 협의없이 근무시간 변경 근무',
    clause: '제18조',
    criteria: [
      { condition: '6월 이상', action: '경고' },
      { condition: '6월 미만', action: '주의' }
    ]
  },
  {
    id: 'inv-1-3',
    category: '복무관리',
    defect: '복무이탈자, 정당한 근무명령위반자 처리 지연',
    clause: '제29조~제30조',
    criteria: [
      { condition: '3월 이상', action: '경고' },
      { condition: '3월 미만', action: '주의' }
    ]
  },
  {
    id: 'inv-1-5',
    category: '복무관리',
    defect: '연가, 공가, 병가, 청원휴가 비대상자 실시 또는 특별휴가 미부여',
    clause: '제20조~제25조',
    criteria: [
      { condition: '1인당 5건 이상', action: '주의' },
      { condition: '1인당 5건 미만', action: '시정' }
    ]
  },
  {
    id: 'inv-1-8',
    category: '복무관리',
    defect: '부당지시 등 업무외 사적 업무 부여',
    clause: '제43조',
    criteria: [{ action: '경고' }]
  },
  {
    id: 'inv-1-9',
    category: '복무관리',
    defect: '폭언, 갑질 등 비인격적인 대우',
    clause: '제43조',
    criteria: [{ action: '경고' }]
  },
  {
    id: 'inv-1-11',
    category: '복무관리',
    defect: '제복 미착용',
    clause: '제41조 / 복제규정 제3조',
    criteria: [
      { condition: '2회', action: '주의' },
      { condition: '1회', action: '시정' }
    ]
  },
  {
    id: 'inv-2-1',
    category: '신상변동 통보',
    defect: '신상변동 통보 지연 또는 누락 (병가, 이탈, 고발 등)',
    clause: '제23조, 제29조~제30조',
    criteria: [
      { condition: '3월 이상', action: '경고' },
      { condition: '3월 미만', action: '주의' }
    ]
  },
  {
    id: 'inv-3-2',
    category: '자원관리 소홀',
    defect: '사회복무요원 복무사항 미정리(미등록)',
    clause: '제39조~제40조',
    criteria: [
      { condition: '30일 이상', action: '경고' },
      { condition: '15일 이상', action: '주의' },
      { condition: '15일 미만', action: '시정' }
    ]
  },
  {
    id: 'inv-3-3',
    category: '자원관리 소홀',
    defect: '임무표, 보안준수확인서 미작성(미등록)',
    clause: '제15조',
    criteria: [
      { condition: '30일 이상', action: '경고' },
      { condition: '15일 이상', action: '주의' },
      { condition: '15일 미만', action: '시정' }
    ]
  },
  {
    id: 'inv-6-1',
    category: '교육실시',
    defect: '월 1회 이상 교육(개인정보보호 등) 미실시',
    clause: '제13조',
    criteria: [
      { condition: '6월 이상', action: '경고' },
      { condition: '3~6월 미만', action: '주의' },
      { condition: '3월 미만', action: '시정' }
    ]
  }
];

export const MOCK_REGULATIONS: Regulation[] = [
  // ... (기존 데이터 유지)
  {
    id: 'reg-mgmt-1',
    category: '복무관리',
    title: '사회복무요원 복무관리 규정',
    summary: '사회복무요원의 복무 및 지도·감독에 필요한 세부사항(병무청 훈령)',
    content: '사회복무요원의 복무관리와 관련한 가장 핵심적인 지침으로 휴가, 겸직, 징계 등을 다룹니다...',
    url: 'https://www.law.go.kr/admRulSc.do?menuId=5&subMenuId=41&tabMenuId=183&query=%EC%82%AC%ED%9A%8C%EB%B3%B5%EB%AC%B4%EC%9A%94%EC%9B%90%20%EB%B3%B5%EB%AC%B4%EA%B4%80%EB%A6%AC%20%EA%B7%9C%EC%A0%95#liBgcolor1'
  },
  {
    id: 'reg-discipline',
    category: '복무기강',
    title: '사회복무요원 복무규율',
    summary: '사회복무요원이 복무 중 준수해야 할 태도 및 금지 행위',
    content: '복무 중 정당한 직무상 명령 준수, 친절·공정, 비밀엄수 등 요원이 지켜야 할 규율입니다...',
    url: 'https://www.law.go.kr/admRulSc.do?menuId=5&subMenuId=41&tabMenuId=183&query=%EB%B3%91%EC%97%AD%EB%B2%95#liBgcolor0'
  },
  {
    id: 'reg-unfit',
    category: '복무관리',
    title: '사회복무요원 복무부적합 소집해제 처리 규정',
    summary: '질병, 심신장애 등으로 복무가 어려운 요원의 소집해제 심사 절차',
    content: '복무부적합 소집해제 대상자의 범위, 신청 절차, 심사위원회의 심사 기준 및 결정 통보에 관한 세부 사항을 다룹니다.',
    url: 'https://www.law.go.kr/admRulSc.do?menuId=5&subMenuId=41&tabMenuId=183&query=%EB%B3%91%EC%97%AD%EB%B2%95#liBgcolor0'
  },
  {
    id: 'reg-insurance',
    category: '복무관리',
    title: '사회복무요원 건강보험료 지급 규정',
    summary: '복무 중인 요원의 건강보험료 국고 지원 기준 및 정산 방법',
    content: '사회복무요원의 건강보험료 부담 주체, 보험료 산정 기준, 지급 시기 및 퇴직 시 정산 절차 등을 규정합니다.',
    url: 'https://www.law.go.kr/admRulSc.do?menuId=5&subMenuId=41&tabMenuId=183&query=%EB%B3%91%EC%97%AD%EB%B2%95#liBgcolor0'
  }
];
