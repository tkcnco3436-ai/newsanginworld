# 화면(HTML/CSS/JS) — 작업 규칙

이 디렉터리는 **개발자에게 정적 HTML로 넘기는 화면 산출물**이다. 프레임워크 없이 순수 HTML+CSS+JS로 구성하며, **화면(페이지) 단위로 CSS/JS가 분리**되어야 한다. 아래 규칙을 반드시 지킨다.

## 1. 파일 레이어링 (필수)

CSS·JS 모두 아래 4단 레이어로만 나눈다. 상위 레이어는 하위를 절대 참조하지 않는다.

| 레이어 | CSS | JS | 역할 |
|---|---|---|---|
| ① 토큰 | `tokens.css` | — | 색·간격·라운드·그림자·모션 변수. 규칙 없음 |
| ② 공통 | `common.css` | `common.js` | 모든 페이지 공용: 리셋, 헤더, 드로어, 공통 버튼, 스크롤 리빌, mesh 셰이더 |
| ③ 페이지군 공용 | `{group}-common.css` | `{group}-common.js` | 여러 페이지가 공유하는 컴포넌트 (예: `mypage-common` = 아바타/크롭/폼) |
| ④ 페이지 전용 | `{page}.css` | `{page}.js` | 그 한 페이지에서만 쓰는 규칙 |

- **페이지 전용 규칙을 ②·③에 넣지 않는다.** 반대로 2개 이상 페이지가 쓰는 규칙을 ④에 중복 정의하지 않는다.
- 링크 순서 고정: `tokens → common → (group-common) → page`. 스크립트도 동일.

## 2. 1 페이지 = 1 전용 CSS + 1 전용 JS

- 새 화면을 만들면 `{page}.html` + `css/{page}.css` + `js/{page}.js` 세트로 만든다.
- 인라인 `<style>` / `<script>`(스크립트 링크 제외) **금지**. 전부 외부 파일로 분리. (일회성 가이드/프로토타입 문서는 예외)

## 3. 개발자 전달 규칙

- 특정 화면을 넘길 때는 **그 HTML이 실제 `<link>`/`<script>`로 참조하는 파일 + 참조하는 image 자산만** 포함한다.
- 참조하지 않는 CSS/JS/이미지를 함께 넣지 않는다.
- 폴더 구조(`css/`, `js/`, `image/`)를 유지해야 상대경로가 깨지지 않는다.

## 4. 데드코드 금지

- 어떤 HTML도 `<link>`/`<script>`로 참조하지 않는 CSS/JS는 삭제하거나, 남길 이유를 이 문서에 명시한다.
- 빈 스텁 HTML(링크/스크립트 없는 `index.html`)은 방치하지 않는다 — 완성하거나 제거.

## 5. 토큰 우선

- 색·간격·라운드·모션은 하드코딩 대신 `tokens.css` 변수를 쓴다.
- 부득이 하드코딩한 값(예: `#F3F4FA`, `#F9FAFF`)은 토큰으로 승격하는 것을 우선 검토한다.

## 6. 접근성 기준

- 아이콘 전용 버튼은 `aria-label` 필수.
- 모달/오버레이는 `role="dialog"` + `aria-modal="true"`, 열릴 때 포커스 이동·닫힐 때 복귀, `Esc` 닫기를 갖춘다.
- 본문 텍스트 색 대비는 WCAG AA(4.5:1) 이상. `--txt-faint`(#8F8F8F)는 작은 본문에 쓰지 않는다.
- `prefers-reduced-motion` 존중(애니메이션 제거).

## 7. 현재 참조 맵 (2026-07-16 기준)

| HTML | CSS | JS | 이미지 |
|---|---|---|---|
| `index.html` | tokens, common, index | index | logo.svg 외 |
| `mypage.html` | tokens, common, mypage-common, mypage | common, mypage-common, mypage | logo.svg + 카드사 8종 |
| `edit.html` | tokens, common, mypage-common, edit | common, mypage-common, edit | logo.svg |
| `login/`, `signup/` | tokens, **style**, auth | auth | logo.svg, 영상 |

### 정리 이력 / 남은 항목
- ✅ `js/main.js` (1542줄) — 참조 HTML 없음 → **삭제 완료**.
- ✅ `mypage/index.html`, `credit/index.html` — 빈 스텁 → **삭제 완료**(디렉터리 포함).
- ⚠️ `css/style.css` (2556줄) — login/signup이 아직 사용 중이라 **미삭제**. 나머지 페이지의 `tokens+common`과 역할 중복 → auth도 `tokens+common+auth`로 이관 후 제거해야 함(별도 작업).
- `프로필이미지-플로우-가이드.html` — 가이드 문서(제품 아님). 개발자 전달 번들에서 제외.

### 접근성 조치 완료 (mypage/edit)
- 모든 오버레이 모달에 `role="dialog"` + `aria-modal="true"` + `aria-labelledby` 부여, 인포 툴팁은 `role="status"`.
- `js/common.js`의 `initModalA11y()`가 모달 열림/닫힘을 감지해 포커스 이동·Tab 트랩·트리거 복귀 처리(페이지 JS 무수정).
- `--txt-faint`를 `#6E6E6E`로 상향(흰 배경 대비 ≥4.5:1).

새 화면·파일을 추가·삭제하면 이 표와 "정리 필요" 목록을 함께 갱신한다.
