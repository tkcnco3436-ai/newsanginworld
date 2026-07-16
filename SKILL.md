# 활용한 스킬 (화면 코드 점검)

이 화면 산출물을 점검·정리할 때 사용한 스킬/관점 목록.

| 스킬/관점 | 역할 | 링크 |
|---|---|---|
| **ponytail** | "게으른 시니어 개발자" 원칙 — 불필요한 코드를 쓰지 않게 유도. 데드코드·중복·과잉 구현을 줄여 코드량↓·비용↓·속도↑. 세션 이벤트마다 최소코드 nudge 주입하는 Claude Code 플러그인. | https://github.com/DietrichGebert/ponytail |
| **frontend-design** | 프로덕션급 프론트엔드 UI 품질 점검 — 디자인 토큰 일관성, 접근성(role/aria/포커스/대비), 모션·반응형, 제네릭 AI 티 제거. Claude Code 내장 스킬. | 내장 스킬 (`/frontend-design`) |
| **clean-code** (관점) | 패키지 스킬이 아닌 점검 원칙. 단일 책임·가드절·명확한 네이밍·매직넘버 제거·중복 헬퍼 추출(예: `bindOverlay`)·문자열 HTML 주입 위험 검토. | — (원칙) |
| **caveman** | 응답 압축 모드(토큰 절감). 기술 내용 유지, 군더더기 제거. 이 작업 세션 진행에 사용. | Claude Code 플러그인 (`/caveman`) |

## 점검 요약 (3관점)

- **ponytail**: `main.js`(1542줄) 데드코드, `style.css`(2556줄) common과 역할 중복, 스텁 HTML 2개 → 제거 대상. `mypage.js`가 오버레이 열기/Esc/backdrop 패턴을 3회 반복 → `edit.js`의 `bindOverlay` 헬퍼를 `common.js`로 올려 공유 권장.
- **frontend-design**: 토큰 체계·모션·`prefers-reduced-motion`·아이콘 aria-label 양호. 부족: 모달에 `role="dialog"`/`aria-modal`/포커스 트랩 없음, `--txt-faint`(#8F8F8F) 대비 미달, 하드코딩 색(#F3F4FA/#F9FAFF) 토큰 미승격.
- **clean-code**: IIFE+strict+가드절 일관, 네이밍·주석 명확(양호). `initMypageCardAdd`(~145줄)이 위저드 상태/검증/DOM생성/이벤트 혼재 → 분리 여지. `addPaymentRow`의 innerHTML 문자열 조립은 현재 값이 정적 data-attr이라 안전하나, 사용자 입력이 섞이면 XSS 위험.

자세한 레이어링·전달 규칙은 [CLAUDE.md](./CLAUDE.md) 참조.
