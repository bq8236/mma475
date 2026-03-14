
import { Regulation, InvestigationItem } from './types';

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

const BYUNGYEOK_LAW_INTEGRATED_URL = 'https://www.law.go.kr/LSW/lsSc.do?section=&menuId=1&subMenuId=15&tabMenuId=81&eventGubun=060101&query=%EB%B3%91%EC%97%AD%EB%B2%95#undefined';

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
    url: 'https://www.law.go.kr/admRulSc.do?menuId=5&subMenuId=41&tabMenuId=183&query=%EC%82%AC%ED%9A%8C%EB%B3%B5%EB%AC%B4%EC%9A%94%EC%9B%90%20%EB%B3%B5%EB%AC%B4%EA%B7%9C%EC%9C%A8#liBgcolor0'
  },
  // 3. 행정 및 기타 규정
  {
    id: 'reg-enlist-mgmt',
    category: '훈령',
    title: '사회복무요원 소집업무 규정',
    summary: '소집 통지, 일자 결정 및 소집 업무 처리 세부 사항',
    content: '사회복무요원 소집 대상자의 선발, 통지, 소집일자 조정 및 연기 등 소집 단계의 절차를 규정합니다.',
    url: 'https://www.law.go.kr/admRulSc.do?menuId=5&subMenuId=41&tabMenuId=183&query=%EC%82%AC%ED%9A%8C%EB%B3%B5%EB%AC%B4%EC%9A%94%EC%9B%90%20%EC%86%8C%EC%A7%91%EC%97%85%EB%AC%B4%EA%B7%9C%EC%A0%95#liBgcolor0'
  },
  {
    id: 'reg-unfit',
    category: '훈령',
    title: '사회복무요원 복무부적합 소집해제 처리 규정',
    summary: '질병, 심신장애 등으로 복무가 어려운 요원의 소집해제 심사 절차',
    content: '복무부적합 소집해제 대상자의 범위, 신청 절차, 심사위원회의 심사 기준 등을 다룹니다.',
    url: 'https://www.law.go.kr/admRulSc.do?menuId=5&subMenuId=41&tabMenuId=183&query=%EC%82%AC%ED%9A%8C%EB%B3%B5%EB%AC%B4%EC%9A%94%EC%9B%90%20%EB%B3%B5%EB%AC%B4%EB%B6%80%EC%A0%81%ED%95%A9%20%EC%86%8C%EC%A7%91%ED%95%B4%EC%A0%9C%20%EC%B2%98%EB%A6%AC%20%EA%B7%9C%EC%A0%95'
  },
  // 4. 비용 관련 규정 (맨 하단 위치)
  {
    id: 'reg-health-ins',
    category: '훈령',
    title: '사회복무요원 건강보험료 지급 규정',
    summary: '건강보험료 지급 대상 및 국고 지원 절차 규정',
    content: '복무 중인 사회복무요원의 건강보험료 가입 상태에 따른 보험료 지원 기준과 청구 방법을 다룹니다.',
    url: 'https://www.law.go.kr/admRulSc.do?menuId=5&subMenuId=41&tabMenuId=183&query=%EC%82%AC%ED%9A%8C%EB%B3%B5%EB%AC%B4%EC%9A%94%EC%9B%90%20%EA%B1%B4%EA%B0%95%EB%B3%B4%ED%97%98%EB%A3%8C%20%EC%A7%80%EA%B8%89%20%EA%B7%9C%EC%A0%95#liBgcolor0'
  }
];

export interface GuideSection {
  title: string;
  icon: string;
  items: {
    label: string;
    content: string;
    isImportant?: boolean;
    isBenefit?: boolean;
  }[];
}

export const SERVICE_GUIDE_DATA: GuideSection[] = [
  {
    title: '업무분야 및 근무시간',
    icon: '🏢',
    items: [
      { label: '5대 업무분야', content: '사회복지(60% 이상), 보건의료, 환경안전, 교육문화, 행정지원 등 공익 목적 업무 수행' },
      { label: '기본 근무형태', content: '주 5일 근무, 09:00~18:00 (점심시간 12:00~13:00 제외)' },
      { label: '근무형태 조정', content: '복무기관 실정에 따라 합의 하에 야간 또는 휴일근무 가능 (단, 대체휴무 반드시 부여)' },
      { label: '복제 준수', content: '복무 중에는 반드시 지급된 제복을 착용하고 명찰을 부착하여야 함', isImportant: true }
    ]
  },
  {
    title: '휴가 제도 (병역법 기준)',
    icon: '🏖️',
    items: [
      { label: '연가 (총 28일)', content: '소집일부터 1년 이내 15일, 1년 초과 시 13일 사용 가능' },
      { label: '병가 (30일)', content: '질병 또는 부상으로 직무 수행 불가 시. 4일 이상 시 진단서 제출 필수', isImportant: true },
      { label: '공가', content: '병역판정검사, 투표 참여, 국가기관 소환, 천재지변 등으로 근무 불가 시' },
      { label: '청원휴가', content: '본인 결혼(5일), 배우자 출산(10일), 부모/배우자 사망(5일) 등' },
      { label: '특별휴가', content: '표창, 모범요원, 근무형편이 열악한 분야의 복무자 위로의 필요성이 있는 경우 복무기관의 장 부여' }
    ]
  },
  {
    title: '보수 및 여비 (2026년)',
    icon: '💳',
    items: [
      { label: '봉급 (복무기간별)', content: '소집월~2개월(75만원), 3~8개월(90만원), 9~14개월(120만원), 15개월~(150만원) 기준 지급' },
      { label: '중식비', content: '1일 9,000원 이상 (실제 복무일수만큼 실비 지급)' },
      { label: '교통비', content: '대중교통(시내버스) 왕복이용요금(현금기준)' },
      { label: '건강보험료', content: '복무기간 중 건강보험료 전액 국가 부담 (지역가입자 또는 직장피부양자)', isBenefit: true }
    ]
  },
  {
    title: '준수사항 및 혜택',
    icon: '📜',
    items: [
      { label: '겸직 제한', content: '생계유지 곤란 등 부득이한 사유 시 복무기관장 사전 승인 필요', isImportant: true },
      { label: '장병내일준비적금', content: '월 최대 55만원 납입 시 국고지원금(매칭지원금) 100% 지원. 원금의 2배 수준 자산 형성 가능', isBenefit: true },
      { label: '정치행위 금지', content: '정당 가입 및 선거운동 등 정치적 목적을 가진 행위 일체 금지' },
      { label: '자기계발 지원', content: '사회복무요원 원격강좌(e-러닝) 수강 시 학점 인정 및 수강료 지원', isBenefit: true }
    ]
  }
];

export interface ScheduleItem {
  month: string;
  title: string;
  description: string;
  type: 'major' | 'regular' | 'holiday';
}

export const SCHEDULE_DATA: ScheduleItem[] = [
  { month: '최초', title: '최초 배치 시 필수 행정', description: '배치 전 교육 실시, 신상명세서·임무표·보안준수서약서 작성 및 서명 확인', type: 'major' },
  { month: '매일', title: '일일 복무상황 확인', description: '일일복무상황부 비치 및 본인 서명 확인, 복무포털 대조 입력', type: 'regular' },
  { month: '매월', title: '근무편성 및 교육일지', description: '월간 근무편성표 작성(첫날), 직무/소양 교육 실시 및 교육일지 작성', type: 'regular' },
  { month: '수시', title: '병가 및 휴가 증빙 관리', description: '병가 증빙서류(진단서 등) 적정성 검토 및 휴가 신청 내역 확인', type: 'regular' },
  { month: '분기', title: '관찰면담 및 실태점검', description: '분기별 1회 이상 관찰면담 실시 및 기록, 자체 복무실태 점검', type: 'major' },
  { month: '1월', title: '연간 계획 수립', description: '연간 복무관리 및 교육 계획 수립, 전년도 실적 분석', type: 'major' },
  { month: '2월', title: '상반기 실태조사 대비', description: '지방병무청 상반기 실태조사 대비 서류 및 현장 점검', type: 'regular' },
  { month: '3월', title: '신규 배치자 집중 관리', description: '신규 소집자 배치전 교육, 신상명세서/임무표/보안서약서 작성', type: 'major' },
  { month: '4월', title: '담당자 직무 교육', description: '복무기관 담당자 전문성 향상을 위한 권역별 직무 교육 참석', type: 'regular' },
  { month: '5월', title: '고충 면담 강화', description: '복무 부적응자 및 근무지 재지정 신청자 집중 면담 및 관리', type: 'regular' },
  { month: '6월', title: '상반기 성과 평가', description: '상반기 복무관리 실태 자체 평가 및 미흡사항 보완', type: 'major' },
  { month: '7월', title: '하절기 안전 교육', description: '폭염 대비 안전 수칙 교육 및 야외 근무자 건강 상태 확인', type: 'regular' },
  { month: '8월', title: '하반기 실태조사 대비', description: '병무청 하반기 정기 실태조사 및 취약분야 집중 점검', type: 'regular' },
  { month: '9월', title: '우수 복무자 포상', description: '모범 사회복무요원 선발 추천 및 자체 포상 실시', type: 'major' },
  { month: '10월', title: '익년도 인원 소요 파악', description: '다음 해 복무기관별 필요 인원 산출 및 배정 요청', type: 'major' },
  { month: '11월', title: '동절기 환경 점검', description: '한파 대비 복무 환경 점검 및 동절기 안전 사고 예방 교육', type: 'regular' },
  { month: '12월', title: '연간 총결산', description: '연간 복무관리 성과 총괄 보고 및 우수사례 공유', type: 'major' },
];
