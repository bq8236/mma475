
import { Regulation, InvestigationItem } from './types';

export const SYSTEM_INSTRUCTION = `당신은 대한민국 병무청 '사회복무요원 복무관리 규정' 및 '복무기관 실태조사 결과 처리기준'의 전문가인 AI 어시스턴트입니다.
사용자의 질문에 대해 [별표 2] 실태조사 결과 처리기준을 포함한 관련 규정을 바탕으로 정확한 답변을 제공하세요.`;

export const INVESTIGATION_CRITERIA: InvestigationItem[] = [
  // 1. 복무관리
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
    id: 'inv-1-4',
    category: '복무관리',
    defect: '형사처분 종료 또는 구속해제 및 출소자 재복무 조치 지연',
    clause: '제29조~제32조',
    criteria: [
      { condition: '6월 이상', action: '경고' },
      { condition: '6월 미만', action: '주의' }
    ]
  },
  {
    id: 'inv-1-5',
    category: '복무관리',
    defect: '연가, 공가, 병가, 청원휴가 비대상자 실시',
    clause: '제20조~제25조',
    criteria: [
      { condition: '(1인당) 5건 이상', action: '주의' },
      { condition: '(1인당) 5건 미만', action: '시정' }
    ]
  },
  {
    id: 'inv-1-6',
    category: '복무관리',
    defect: '특별휴가 대상자 특별휴가 미부여',
    clause: '제20조~제25조',
    criteria: [
      { condition: '(1인당) 5건 이상', action: '주의' },
      { condition: '(1인당) 5건 미만', action: '시정' }
    ]
  },
  {
    id: 'inv-1-7',
    category: '복무관리',
    defect: '일요일 등 복무자 다음 날 휴무 미실시',
    clause: '제18조',
    criteria: [{ action: '시정' }]
  },
  {
    id: 'inv-1-8',
    category: '복무관리',
    defect: '초·중등교육법 또는 고등교육법 등에 따른 학교에서 수학하는 행위를 한 경우',
    clause: '제54조',
    criteria: [{ action: '주의' }]
  },
  {
    id: 'inv-1-9',
    category: '복무관리',
    defect: '부당지시 등 업무외 사적 업무 부여',
    clause: '제43조',
    criteria: [{ action: '경고' }]
  },
  {
    id: 'inv-1-10',
    category: '복무관리',
    defect: '폭언, 갑질 등 비인격적인 대우',
    clause: '제43조',
    criteria: [{ action: '경고' }]
  },
  {
    id: 'inv-1-11',
    category: '복무관리',
    defect: '개인정보 취급 부적정 업무 부여',
    clause: '제15조',
    criteria: [{ action: '경고' }]
  },
  {
    id: 'inv-1-12',
    category: '복무관리',
    defect: '제복 미착용',
    clause: '제41조 / 복제규정 제3조',
    criteria: [
      { condition: '2회', action: '주의' },
      { condition: '1회', action: '시정' }
    ]
  },

  // 2. 신상변동 통보
  {
    id: 'inv-2-1',
    category: '신상변동 통보',
    defect: '신상변동 통보 지연 또는 누락 (병가, 이탈, 고발, 구속 등)',
    clause: '제23조, 제29조~제30조',
    criteria: [
      { condition: '3월 이상', action: '경고' },
      { condition: '3월 미만', action: '주의' }
    ]
  },

  // 3. 자원관리 소홀
  {
    id: 'inv-3-1',
    category: '자원관리 소홀',
    defect: '사회복무포털 미활용',
    clause: '제4조',
    criteria: [{ action: '경고' }]
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
    id: 'inv-3-4',
    category: '자원관리 소홀',
    defect: '신상명세서 미징구, 신분증 미발급, 관찰면담 미실시',
    clause: '제9조~제10조, 제43조',
    criteria: [{ action: '시정' }]
  },
  {
    id: 'inv-3-5',
    category: '자원관리 소홀',
    defect: '복무기본교육통지서 미교부',
    clause: '운영규정 제17조',
    criteria: [{ action: '주의' }]
  },

  // 4. 보수 지급
  {
    id: 'inv-4-1',
    category: '보수 지급',
    defect: '봉급 및 교통비/중식비 지급 부적정',
    clause: '-',
    criteria: [{ action: '주의' }]
  },

  // 5. 복무만료
  {
    id: 'inv-5-1',
    category: '복무만료',
    defect: '복무기간 만료예정자 지연통보',
    clause: '제49조',
    criteria: [{ action: '시정' }]
  },

  // 6. 교육실시
  {
    id: 'inv-6-1',
    category: '교육실시',
    defect: '월 1회 이상 교육(개인정보보호, 괴롭힘 예방 포함) 미실시',
    clause: '제13조',
    criteria: [
      { condition: '6월 이상', action: '경고' },
      { condition: '3~6월 미만', action: '주의' },
      { condition: '3월 미만', action: '시정' }
    ]
  },

  // 7. 가중처리
  {
    id: 'inv-7-1',
    category: '가중처리',
    defect: '전년도 결함사항 미시정 또는 동일부서 내 사례 다수 발생',
    clause: '제54조',
    criteria: [{ condition: '시정→주의, 주의→경고', action: '가중처리' }]
  }
];

const BYUNGYEOK_LAW_INTEGRATED_URL = 'https://www.law.go.kr/lsSc.do?menuId=1&subMenuId=15&tabMenuId=81&query=%EB%B3%91%EC%97%AD%EB%B2%95#undefined';

export const MOCK_REGULATIONS: Regulation[] = [
  // 1. 최상위 법령 그룹
  {
    id: 'reg-law-group',
    category: '법령세트',
    title: '병역법 관련 법령 (법·령·규칙)',
    summary: '병역법, 시행령, 시행규칙 통합 안내',
    content: '대한민국 국민의 병역의무에 관한 기본 법률과 그 시행을 위한 대통령령 및 부령을 모두 포함합니다.',
    url: BYUNGYEOK_LAW_INTEGRATED_URL
  },
  // 2. 핵심 관리 규정 (복무규율과 인접 배치)
  {
    id: 'reg-mgmt-1',
    category: '훈령',
    title: '사회복무요원 복무관리 규정',
    summary: '사회복무요원의 복무 및 지도·감독에 필요한 세부사항(병무청 훈령)',
    content: '사회복무요원의 복무관리와 관련한 가장 핵심적인 지침으로 휴가, 겸직, 징계 등을 다룹니다.',
    url: 'https://www.law.go.kr/admRulSc.do?menuId=5&subMenuId=41&tabMenuId=183&query=%EC%82%AC%ED%9A%8C%EB%B3%B5%EB%AC%B4%EC%9A%94%EC%9B%90%20%EB%B3%B5%EB%AC%B4%EA%B4%80%EB%A6%AC%20%EA%B7%9C%EC%A0%95#liBgcolor1'
  },
  {
    id: 'reg-discipline',
    category: '훈령',
    title: '사회복무요원 복무규율',
    summary: '사회복무요원이 복무 중 준수해야 할 태도 및 금지 행위',
    content: '복무 중 정당한 직무상 명령 준수, 친절·공정, 비밀엄수 등 요원이 지켜야 할 규율입니다.',
    url: 'https://www.law.go.kr/admRulSc.do?menuId=5&subMenuId=41&tabMenuId=183&query=%EC%82%AC%ED%9A%8C%EB%B3%B5%EB%AC%B4%EC%9A%94%EC%9B%90%20%EB%B3%B5%EB%AC%B4%EA%B7%9C%EC%9C%A8'
  },
  // 3. 행정 및 기타 규정
  {
    id: 'reg-enlist-mgmt',
    category: '훈령',
    title: '사회복무요원 소집업무 규정',
    summary: '소집 통지, 일자 결정 및 소집 업무 처리 세부 사항',
    content: '사회복무요원 소집 대상자의 선발, 통지, 소집일자 조정 및 연기 등 소집 단계의 절차를 규정합니다.',
    url: 'https://www.law.go.kr/admRulSc.do?menuId=5&subMenuId=41&tabMenuId=183&query=%EC%82%AC%ED%9A%8C%EB%B3%B5%EB%AC%B4%EC%9A%94%EC%9B%90%20%EC%86%8C%EC%A7%91%EC%97%85%EB%AC%B4%20%EA%B7%9C%EC%A0%95#liBgcolor0'
  },
  {
    id: 'reg-unfit',
    category: '훈령',
    title: '사회복무요원 복무부적합 소집해제 처리 규정',
    summary: '질병, 심신장애 등으로 복무가 어려운 요원의 소집해제 심사 절차',
    content: '복무부적합 소집해제 대상자의 범위, 신청 절차, 심사위원회의 심사 기준 등을 다룹니다.',
    url: 'https://www.law.go.kr/admRulSc.do?menuId=5&subMenuId=41&tabMenuId=183&query=%EC%82%AC%ED%9A%8C%EB%B3%B5%EB%AC%B4%EC%9A%94%EC%9B%90%20%EB%B3%B5%EB%AC%B4%EB%B6%80%EC%A0%81%ED%95%A9'
  },
  // 4. 비용 관련 규정 (맨 하단 위치)
  {
    id: 'reg-health-ins',
    category: '훈령',
    title: '사회복무요원 건강보험료 지급 규정',
    summary: '건강보험료 지급 대상 및 국고 지원 절차 규정',
    content: '복무 중인 사회복무요원의 건강보험료 가입 상태에 따른 보험료 지원 기준과 청구 방법을 다룹니다.',
    url: 'https://www.law.go.kr/admRulSc.do?menuId=5&subMenuId=41&tabMenuId=183&query=%EC%82%AC%ED%9A%8C%EB%B3%B5%EB%AC%B4%EC%9A%94%EC%9B%90%20%EA%B1%B4%EA%B0%95%EB%B3%B4%ED%97%98%EB%A3%8C'
  }
];
