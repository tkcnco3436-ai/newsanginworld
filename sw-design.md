---
name: 상인월드
design_system_name: 상인월드 디자인 시스템
slug: sanginworld
category: ai-saas
last_updated: "2026-07-16"
created_at: "2026-07-16"
implementation:
  stack: 순수 HTML + CSS + JS (프레임워크 없음)
  css_layers: [tokens.css, common.css, "{group}-common.css", "{page}.css"]
  icons: Lucide (unpkg CDN, data-lucide)
  fonts: Pretendard
  authoritative_tokens: ../css/tokens.css
related_services: []
lang: ko
logo: image/logo.svg
---

# 상인월드 — design.md

> 이 문서는 상인월드 화면(`index.html` / `mypage.html` / `edit.html` 등)에 실제 구현된 디자인 값을 정리한 레퍼런스다. **색·간격·라운드·그림자·모션의 정본(authoritative source)은 `../css/tokens.css`이며, 아래 값이 코드와 어긋나면 tokens.css를 신뢰한다.** 컴포넌트 스펙은 vanilla HTML/CSS/JS 구현 기준이다.
>
> **시각 언어 원칙:** 이 시스템의 시각 언어는 단일 채도 브랜드 컬러 + Pretendard 위계 + 미세 elevation + 1px 헤어라인 + `:active` 92% scale press feedback으로 요약된다. 제품 UI 텍스트·네이밍은 전부 상인월드로 정의한다.

## Brand & Style

상인월드는 **소상공인(상인)을 위한 AI 영상·콘텐츠 생성 SaaS**다. 핵심 약속은 "사진 한 장이면 충분해요 — AI가 대본부터 편집까지 자동으로"이며, 사용 흐름은 **사진 업로드 → AI 생성 → 결과 확인 → 다운로드** 4단계다. 사장님이 촬영·편집 지식 없이 매장 사진 한 장으로 홍보 영상을 만드는 것이 제품의 본질이다. 모빌리티·차량공유와는 무관하다.

시각 톤은 절제되고 신뢰 지향적이다 — 밝은 회색 표면(`--bg-page` #F2F2F2, 마이페이지 #F9FAFF) 위에 흰 카드가 놓이고, 단일 브랜드 레드(`--ink-primary` #E81411)가 액션·강조를 담당한다. 위계는 색이 아니라 **크기와 굵기**로 만든다 — Heading 700 / Title 600 / Body 400, 숫자는 bold·단위 라벨은 regular로 분리한다(예: **10,908** 크레딧). 표면은 플랫 필이고, 깊이는 강한 그림자가 아니라 1px 헤어라인 + 미세 그림자로 만든다.

단, 랜딩(`index.html`)은 예외적으로 **표현적(expressive)** 이다 — 히어로에 WebGL 메시 그라디언트 셰이더, 다크 shader feature 카드(블러 radial-gradient blob), 3D 부채꼴 포트폴리오 스택, 로고 마퀴, 챗버블 타이핑 애니메이션 등 마케팅 연출이 얹힌다. 반면 서비스 내부 화면(`mypage.html` / `edit.html`)은 절제된 폼·카드·모달 위주다. **이 이중 톤(마케팅=표현적 / 서비스=절제)** 을 유지한다.

아이콘은 **Lucide**(`data-lucide`, unpkg CDN)를 1차로 쓴다. 이모지·유니코드 의사 아이콘(`►`·`→`·`★`)으로 대체하지 않는다.

**라이트 모드 전용이다.** 다크 테마 토글이나 `prefers-color-scheme` 분기는 없다. 검정 표면(footer, 포트폴리오 섹션, shader 카드, info 툴팁, 사용자 챗버블)은 다크 테마가 아니라 국소적 디자인 선택이다.

## Colors

색 정본은 `../css/tokens.css`다. 아래는 실제 정의된 토큰 요약이며, OKLCH가 아니라 **hex 원본**을 그대로 쓴다.

```yaml
# ---------- Brand (레드 축) ----------
ink-primary:        "#E81411"   # 메인 브랜드 레드 — 액션/링크/포커스/강조
ink-primary-active: "#490B00"   # Dark Red — press/강조 단계
blue-500(alias):    "#A31009"   # primary-strong — regular와 heavy 사이 중간 스텝
black:              "#000000"   # 순흑 — 마이페이지 primary/danger 버튼, footer, 사용자 챗버블
# 호환 별칭: --linegreen/--blue-400/--border-active/--txt-link = --ink-primary

# ---------- Neutral 그레이 램프 (틴트 없는 순중립) ----------
grey-25:  "#FCFCFC"   grey-50:  "#F2F2F2"   grey-100: "#E6E6E6"
grey-200: "#D8D8D8"   grey-300: "#CFCFCF"   grey-400: "#B0B0B0"
grey-500: "#8F8F8F"   grey-600: "#737373"   grey-700: "#595959"
grey-800: "#4A4A4A"   grey-900: "#3F3E3E"   # Dark Grey — text-strong

# ---------- 시맨틱 — 텍스트 ----------
txt-darkest/txt-cto: "#3F3E3E"   # grey-900 — 제목/강한 본문
txt-dark:            "#595959"   # 본문 기본
txt-lighter:         "#737373"   # 보조
txt-faint:           "#6E6E6E"   # 3차 — 흰 배경 대비 ≥4.5:1(WCAG AA). 작은 본문엔 쓰지 않음
txt-link:            "#E81411"
txt-on-dark:         "#FFFFFF"   txt-on-dark-lighter: "#B0B0B0"

# ---------- 시맨틱 — 표면/구조 ----------
bg-page:    "#F2F2F2"   bg-surface: "#FFFFFF"   bg-subtle: "#FCFCFC"   bg-dark: "#3F3E3E"
border-neutral/secondary: "#D8D8D8"   border-active: "#E81411"   border-on-dark: "rgba(255,255,255,.12)"
# 마이페이지 스코프는 --border-neutral/--border-secondary를 국소적으로 #F3F4FA로 덮음(더 옅은 보더)

# ---------- 시맨틱 — 오버레이(반투명) ----------
opacity-black-80: "rgba(0,0,0,.80)"   opacity-black-40: "rgba(0,0,0,.44)"   # 모달/시트 딤
opacity-black-5:  "rgba(0,0,0,.06)"   # press 리플
black-85/60/40:   "rgba(0,0,0,.85/.60/.40)"   black-8: "#E6E6E6"
white-90/60/12:   "rgba(255,255,255,.90/.60/.12)"

# ---------- 시맨틱 — 상태 ----------
green(positive):  "#A6E3BC / #3DAA5C / #3DAA5C"   # --green-300/400/500
orange(caution):  "#F6DD8E / #EFC22A / #D9A600"   # --orange-300/400/500
red(negative):    "#F8B9B4 / #F49992"             # --red-300/400
fill-accent-blue/orange/green/purple/pink: "#FBE1E0 / #FCF3D9 / #E4F5EA / #EDECFE / #FDEBEA"  # 틴트 필

# ---------- 장식 (그라디언트 orb / 셰이더) ----------
gradient-mint/peach/lavender/sky/rose: "#3DAA5C / #C77FC4 / #A9A4FA / #3D57FF / #B39DF5"
```

**주의 — 토큰 밖 하드코딩 색 (Known Gaps에도 기재).** 코드에 tokens.css 밖 색 리터럴이 몇 개 있다:

| 색 | 위치 | 용도 |
|---|---|---|
| `#d4ff3f` | index.css `.studio-showcase__all` | 네온 라임 pill (마케팅 액센트) |
| `#F9FAFF` | edit.css / mypage.css body 배경 | 마이페이지 계열 페이지 배경(옅은 블루틴트 화이트) |
| `#F3F4FA` | mypage-common.css 보더/아바타 트랙 | 마이페이지 스코프 보더 |
| `#5869f7` | common.js / mypage.css | WebGL 캔버스 폴백 배경(인디고) |
| `rgba(58,15,31)` 등 4색 | index.css shader-feature-card | wine/teal/olive/purple 다크 카드 |

브랜드 레드는 **#E81411** 하나다. 새 UI에서 액션·강조는 `--ink-primary`를 쓰고, 위 하드코딩 색을 임의로 늘리지 않는다. (크레딧 숫자는 과거 `#F93322`였으나 `--ink-primary`로 통일 완료.)

## Typography

**Pretendard** 단일 패밀리로 일원화한다. weight는 400/500/600/700. letter-spacing은 대부분 0이며, 큰 히어로 타이틀·가격 등에만 `-0.01em`, 대문자 eyebrow에 `0.04~0.08em`을 준다. 카운트다운 숫자만 monospace(`SFMono/Consolas/Menlo`)를 쓴다.

```yaml
font-family: '"Pretendard","Pretendard Variable",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Noto Sans KR",sans-serif'
weight-regular: 400   weight-medium: 500   weight-semibold: 600   weight-bold: 700
```

**위계 규칙:** Display·Heading=700, Title=600, Body=400/500. 숫자(크레딧·가격·타이머)는 bold, 단위 라벨은 regular로 분리.

**주의 — 정연한 토큰 스케일 아님.** `display1/heading1/...` 처럼 고정된 타입 토큰 세트는 **없다.** 실제 화면은 아래처럼 애드혹 px를 직접 쓴다(대표값):

| px / line-height / weight | 쓰이는 곳 |
|---|---|
| 56·(768↑) / 40 · 1.2 · 700 | stellar-hero 타이틀 |
| 44 · — · 700 | 오버레이 카드 대형 숫자, feature 아이콘 |
| 38 · 1.25 · 700 | hero 타이틀 |
| 32 · 1.3 · 700 | 프로모 배너 타이틀, 가격 |
| 28 · 1.3 · 700 | 섹션 타이틀, 스튜디오/커버 타이핑 |
| 22 · — · 700 | **드로어 nav·그룹 트리거**(모바일 메뉴) |
| 20 · — · 700 | 프로필 이름, 통계 숫자, info-row strong |
| 18 · 1.55 · 700/500 | edit 타이틀, 챗버블, 탭바 |
| 17 · 1.6 · 500 | step 카드 타이틀, hero desc |
| 16 · 1.5 · 400~700 | 본문, CTA 버튼, footer 브랜드 |
| 15 · 1.6 | 섹션 desc, 프로모 desc |
| 14 · 1.5~1.6 · 400/500 | 대부분 본문/라벨/버튼/nav |
| 13 · 1.5 · 400/500/600 | 서브타이틀, 칩, ghost 버튼 |
| 12 · 1.5 · 400/500/600 | 캡션, 태그, 힌트, 위자드 스텝 라벨 |
| 11 · — / 10 · — | 리본·배지 / 타이머 단위 |

향후 이 값들을 타입 토큰으로 승격하는 것을 검토할 것(현재는 미승격).

## Spacing

간격은 `--space-*` 토큰(4px 기본단위)을 쓴다.

```yaml
space-4:4  space-6:6  space-8:8  space-10:10  space-12:12  space-16:16
space-20:20  space-24:24  space-32:32  space-40:36(!)  space-48:40(!)  space-64:64  space-96:96
```

**주의 — 이름 ≠ 값:** `--space-40`은 **36px**, `--space-48`은 **40px**로 리매핑되어 있다(tokens.css 115-116행). 이름만 보고 값을 가정하지 말 것. 컨테이너 좌우 패딩은 대부분 20px, 스택 간격은 8/12px, 섹션 간격은 24px 이상.

## Rounded

```yaml
radius-4:4  radius-6:6  radius-8:8
radius-12:16(!)   # 카드
radius-16:14(!)   # 버튼·인풋
radius-20:24(!)   # 바텀시트 상단 코너
radius-32:24  radius-full:9999  radius-pill:9999   # 칩/배지/원형 전용
```

**주의 — 이름 ≠ 값:** `--radius-12`=16px, `--radius-16`=14px, `--radius-20`=24px로 리매핑됨(tokens.css 123-131행). 실사용: **버튼·인풋 계열 = `--radius-16`(14px) 평탄**(크기별 8~14px 스케일 안 함), **카드 = `--radius-12`(16px)**, **바텀시트 상단 = `--radius-20`(24px)**, **칩·배지·아바타·핸들 = `--radius-pill`(9999)**. 인풋만 예외적으로 `--radius-8`(8px)을 쓰는 폼 필드가 있음(`.mypage-form-input`).

## Elevation & Depth

깊이는 절제됨 — 표면 분리는 1px 헤어라인(`--border-neutral`)이 먼저, 그림자는 보조. 모든 그림자 토큰이 미세하다.

```yaml
ev-2:      "0 1px 2px rgba(22,23,28,.04)"   # info-group, 아바타, 탭바 active
ev-3:      "0 2px 4px rgba(0,0,0,.08)"      # 대부분 카드/드롭다운/버블/갤러리
ev-gray-3: "0 0 20px rgba(0,0,0,.14)"       # 모달/시트/드로어, info 툴팁, 포트폴리오 hover
ev-gray-2: "0 1px 2px rgba(22,23,28,.04)"   # ev-2 별칭
```

유일한 강한 그림자 예외: `.studio-showcase__all` 라임 pill의 하드코딩 `0 8px 24px rgba(0,0,0,.4)`. inner shadow·elevation 토큰 시스템은 없다.

## Shapes & Motion

플랫 필 + 넉넉한 라운드. 곡선은 코너 반경으로만, 표면 구분은 1px 헤어라인 + 배경 워시로.

**시그니처 인터랙션 = press feedback.** 인터랙티브 표면은 `:active`에서 `--press-scale`(0.92)로 축소, 텍스트 인접 행(칩/체크박스/텍스트 액션)은 `--press-scale-weak`(0.96)로 약하게. press가 주 피드백이다.

**hover 정책 — 확정 필요(현재 모순).** 헤더 nav 링크·헤더 버튼·햄버거는 `transition: opacity`에 `:hover { opacity: var(--opacity-hover) }`를 걸어 두었고 주석은 "Hover 70%" 의도라고 적혀 있으나, **`--opacity-hover:1`이라 실제로는 hover 피드백이 전혀 없다.** 즉 "hover 70%" 관례와 "hover 없음, press가 전부" 원칙이 코드에 반쯤 섞여 있다. 신규 작업 전 둘 중 하나로 확정할 것 — (a) `--opacity-hover`를 0.7로 낮춰 데스크톱 hover를 살리거나, (b) opacity-hover 규칙 자체를 제거하고 press-scale로 일원화. 현재 상태는 헤더 상호작용에 시각 피드백이 사실상 없음(→ Known Gaps).

```yaml
motion-fast:      "150ms cubic-bezier(0.42,0,0.58,1)"   # 표준 트랜지션
press-scale: 0.92   press-scale-weak: 0.96
opacity-disabled: 0.4
```

기타 지속시간: 스크롤 리빌 300ms, 드로어 260ms, 라이트박스 320ms, warp 코어 640ms. keyframe: 로고 마퀴 20~28s, hero grid drift 18s, 포트폴리오 마퀴 24s, 챗 타이핑, shimmer wave, 커서 blink 800ms. **모든 애니메이션은 `@media (prefers-reduced-motion: reduce)`로 비활성 가드**되어 있다(신규 애니메이션도 반드시 가드 추가).

## Layering (z-index)

레이어 순서는 아래 4단으로 고정한다. 현재 하드코딩 정수라 **토큰화 권장**(`--z-header`/`--z-drawer`/`--z-overlay` 등).

```yaml
header:          30    # .site-header (fixed)
drawer-backdrop: 40    # .drawer-backdrop
drawer:          50    # .drawer (모바일 사이드 드로어)
overlay/modal:  100    # 모든 .*-overlay / info-modal (최상위)
```

규칙: 새 오버레이·팝업은 `z-index:100`(모달 층)에 둔다. 헤더보다 위여야 하는 상시 UI는 30~50 사이를 쓰되 드로어(50)를 넘지 않는다.

## Focus (접근성 파운데이션)

전역 포커스 링은 `common.css`에서 한 번만 정의한다 — 컴포넌트별로 재정의하지 않는다.

```css
a:focus-visible, button:focus-visible {
  outline: 2px solid var(--border-active);  /* 브랜드 레드 #E81411 */
  outline-offset: 2px;
  border-radius: var(--radius-4);
}
```

폼 인풋은 예외적으로 `outline: 2px solid var(--border-active); outline-offset: 1px`(마이페이지 폼)로 살짝 다르다. 신규 인터랙티브 요소는 이 전역 규칙을 상속받게 두고, `outline:none`으로 지우지 않는다.

## 메시 그라디언트 (시그니처 배경)

랜딩 히어로(`.stellar-hero`)와 마이페이지 커버(`.mypage-cover`)에 쓰는 시그니처 WebGL 셰이더. `common.js`의 `initStellarMesh(canvas)`가 `.mesh-gradient-canvas` 클래스를 가진 모든 캔버스에 독립 적용된다(페이지에 여러 개 가능). 4개의 이동하는 메타볼(metaball)이 가중합으로 섞여 **흰색 베이스 + 코랄 워시**가 천천히 흐르는 화면을 만든다.

```yaml
# initStellarMesh 옵션 (common.js)
speed:     10
intensity: 2
grain:     0.75
fallback:  "#5869f7"   # WebGL 미지원 시 단색 폴백
```

**구현 요약:**
- full-screen 삼각형 1장(`[-1,-1, 3,-1, -1,3]`) + fragment 셰이더(GLSL)로 픽셀당 색 계산.
- 4개 메타볼 위치(`p0~p3`)가 `u_time` 기반 sin/cos로 이동, 각 거리의 역수 거듭제곱(e=1.9)을 가중치로 색을 보간.
- 색 상수: 베이스 흰색 `vec3(1,1,1)` + 액센트 코랄 `vec3(1.0,0.396,0.376)`(≈ #FF6560). 하단으로 갈수록 살짝 어둡게(`smoothstep`), 미세 grain 추가.
- 리사이즈: `canvas.clientWidth/Height` 기준 `devicePixelRatio`(최대 2)로 백버퍼 크기 조정. `requestAnimationFrame` 루프.

**사용 규칙:**
- 캔버스에 `class="mesh-gradient-canvas"`만 부여하면 자동 구동. 별도 초기화 코드 불필요.
- 위에 얹는 텍스트(커버 타이핑 등)는 `#000` 굵은 글씨로 대비 확보 — 메시가 밝아서 어두운 텍스트가 읽힌다.
- **주의(→Known Gaps):** 현재 셰이더 루프에 `prefers-reduced-motion` 가드가 **없다**(항상 애니메이션). 커버 타이핑 캐럿(`mypageCaretBlink`)만 가드됨. 접근성상 mesh도 reduced-motion 시 정지(마지막 프레임 고정) 처리 검토 대상.

```html
<canvas class="mesh-gradient-canvas"></canvas>
<!-- common.js 로드 시 자동 init. CSS로 width/height만 주면 됨 -->
```

## Components

상인월드는 **순수 HTML + CSS + JS**로 구현된다(React·Tailwind·framer-motion 없음). 클래스는 BEM 계열(`block__element--modifier`). 아이콘은 Lucide. 아래는 실제 화면에 존재하는 컴포넌트다 — 코드 예시는 HTML/CSS 스니펫으로 준다.

> CSS 레이어 규칙(`화면/CLAUDE.md`): tokens → common → {group}-common → {page} 순. 공통은 `common.css`, 마이페이지군 공용은 `mypage-common.css`, 페이지 전용은 `{page}.css`.

### header (fixed)
`.site-header` — height 68px(`z-index:30`), 하단 1px 보더, bg는 랜딩=페이지색 / 마이페이지·에딧=#fff. 로고(`image/logo.svg`) 높이 24px. 좌우 `.site-header__logo`/`.site-header__actions`가 **각각 width 288px 고정**으로 nav를 가운데 밀어냄(단 모바일 ≤860px에서는 로고 폭 `auto`). 데스크톱은 nav + 액션 버튼, **≤860px는 nav·actions 숨기고 햄버거만**(container `space-between`).
- **로그아웃(기본) 상태:** 우측 `.site-header__actions`에 `.btn-header-outline`(로그인) + `.btn-header-primary`(무료로 시작하기).
- **로그인 상태(`mypage-login.html`):** 우측 `.site-header__actions--user`(width auto)에 **영상생성 + 크레딧 + 프로필 드롭다운**. ≤860px에서는 actions를 숨기는 대신 `.site-header__mobile`(우측 그룹)에 **영상생성 버튼 + 햄버거**를 붙여 노출하고, 크레딧/프로필/마이페이지는 드로어로 내린다. → 아래 "logged-in header" 컴포넌트 참조.
- **버튼 피드백:** `.btn-header-primary`·`.btn-header-video`·`.header-credit`·`.header-profile__btn`은 `:active` press-scale(0.92) 있음. `.btn-header-outline`·`.hamburger`는 opacity hover뿐이라(→ `--opacity-hover:1`) 실질 피드백 없음. hover 정책 확정 시 함께 정리.

### nav-dropdown (desktop)
`.nav-item` hover/focus-within 시 `.nav-dropdown`(width 260px, `--radius-12`=16px, `--ev-3`, 항목 `--radius-8`) 페이드+translate로 노출. 셰브론 아이콘 180° 회전.

### logged-in header — 영상생성 / 크레딧 / 프로필 (common)
로그인 상태 헤더 우측 클러스터(`mypage-login.html`). **common 레이어**에 있어 로그인한 모든 페이지가 재사용한다. 동작은 `common.js`의 `initHeaderProfile()`(클릭 토글·바깥클릭·`Esc` 닫기, `aria-expanded` 갱신).

- **`.btn-header-video`** — 영상생성 주 CTA. h36, `--radius-16`, **bg `--black`(검정)** + 흰 텍스트 + Lucide `video` 아이콘, press-scale. (마이페이지 primary=검정 관례와 일치.)
- **`.header-credit`** — 크레딧 pill. h36, `--radius-16`, surface + 1px 보더, Lucide `coins` **아이콘만 레드(`--linegreen`)**, 숫자 semibold + `.header-credit__unit`(단위 "크레딧") regular. press-scale.
- **`.header-profile`**(`position:relative`) — 아바타 버튼 `.header-profile__btn`(36 원형, **흰 배경 + 검정 글자 + 1px 보더** = 기본 프로필) 클릭 시 `.header-profile__menu`(width 240, `--radius-12`, `--ev-3`, 우측정렬 드롭다운) 페이드+translate. 메뉴 상단 `.header-profile__info`(아바타 40 + 이름/이메일, 이름 옆 `.header-profile__tag` "미구독" pill) 하단 구분선, 그 아래 항목(마이페이지/크레딧 충전/로그아웃) `--radius-8`.

```html
<div class="site-header__actions site-header__actions--user">
  <a class="btn-header-video" href="#"><i data-lucide="video"></i>영상생성</a>
  <a class="header-credit" href="#"><i data-lucide="coins"></i>10,908<span class="header-credit__unit">크레딧</span></a>
  <div class="header-profile" data-header-profile>
    <button class="header-profile__btn" data-header-profile-btn aria-haspopup="true" aria-expanded="false">준</button>
    <div class="header-profile__menu" role="menu"> …info + 메뉴 항목… </div>
  </div>
</div>
```

### hamburger + drawer
`.hamburger`(36×36, `--radius-8`) 클릭 → `.drawer`(**우측 풀스크린 `width:100vw`**, `translateX(100%)→0`, 260ms ease-out, `z-index:50`) + `.drawer-backdrop`(black-40, `z-index:40`).
- 드로어 nav 항목 = **22px/700**(`.drawer__nav`, `.drawer__group-trigger`), 서브메뉴 = 14px. 서브메뉴 `.drawer__submenu`가 `grid-template-rows: 0fr→1fr` 아코디언으로 펼침(셰브론 180° 회전).
- 하단 `.drawer__actions`는 `margin-top:auto`로 바닥 고정, 버튼은 풀와이드 세로 스택(padding 18/22, 16px/700 — 헤더 버튼보다 큼).
- 닫기: `.drawer__close`(40×40) `aria-label` 필수 + `Escape`(common.js `initDrawer`) + 백드롭 클릭.

**로그인 상태 드로어(`mypage-login.html`)** — 위→아래 순서:
1. `.drawer__head` — **프로필 요약(`.drawer__profile`, flex:1)** 을 닫기 버튼과 같은 행에 배치(좌 프로필 / 우 클로즈). 프로필 = 아바타(흰 배경+검정+보더) + 이름/이메일(`<p>` margin 0 + line-height 1.3 + 컨테이너 gap 2px).
2. `.drawer__credit`(`.header-credit` 변형) — 기능 메뉴 위, **화면 전체 폭**(`align-self:stretch; width:100%`), 내용 좌측정렬, **18px/700 + 아이콘 22px + 단위도 700**.
3. `.drawer__btn-row` — **영상생성 | 마이페이지 반반 1행**(`flex:1 1 0` 각, h44). 영상생성=`.btn-header-video`(검정), 마이페이지=`.btn-header-outline`.
4. `.drawer__nav` — 기능/요금안내/갤러리/공지.
5. `.drawer__actions` — 로그아웃(`.btn-header-outline`).

### buttons
크기·색만 다르고 모두 press-scale·`--radius-16`(boxed 기준) 공유.

| 클래스 | height | bg / border | 텍스트 | 용도 |
|---|---|---|---|---|
| `.btn-header-primary` | 36 | bg `--ink-primary`(레드) | 흰 | 헤더 CTA |
| `.btn-header-outline` | 36 | 투명 + 1px 보더 | 본문색 | 헤더 보조 |
| `.btn-header-video` | 36 | **bg `--black`(검정)** | 흰 | 로그인 헤더 영상생성 CTA |
| `.header-credit` | 36 | surface + 1px 보더 | 본문색(아이콘 레드) | 로그인 헤더 크레딧 pill |
| `.btn-cta` | 52 | bg 레드 | 흰 | 페이지 주 CTA |
| `.btn-warp` | 52 | surface + 보더 | — | 특수 액션 |
| `.btn-outline` | 40 | 투명 + 1px 보더 | — | 보조 |
| `.btn-loadmore` | 46 | surface | — | 더보기 |
| `.mypage-btn-primary` | 48 | **bg #000(검정)** | 흰 | 마이페이지 주 액션 |
| `.mypage-btn-danger-pill` | 52 | **bg #000** | 흰 | 파괴적 확정 |
| `.mypage-btn-outline` | 48 | surface + 보더 | — | 보조 |
| `.mypage-btn-ghost` | 32 | 투명 | — | 약한 액션 |
| `.mypage-action` | — | 없음 | 레드 링크 | 텍스트 액션 |
| `.mypage-link-danger` | — | 없음 | underline | 위험 텍스트 링크 |

> **주의:** 마이페이지 primary/danger 버튼은 브랜드 레드가 아니라 **검정(#000)** 이다. 랜딩 CTA만 레드. 신규 버튼은 이 관례를 따를 것.

```html
<button class="btn-cta">무료로 시작하기</button>
<button class="mypage-btn-primary">저장</button>
```

### badge / eyebrow / pill-tag
pill(`--radius-pill`) 계열 라벨류. `.eyebrow`/`.studio-showcase__eyebrow`(grey-100 배경, 대문자), `.pill-tag`, `.stellar-hero__badge`(h32 보더 pill), `.price-card__ribbon`(`--radius-4` 리본), `.mypage-profile-bar__tag`(grey-100 pill), `.mypage-payment-default-label`(green 틴트 "기본" 라벨). 비인터랙티브.

### tabs — underline (`.pricing-toggle`)
2px 하단 인디케이터 바 + opacity 상태. 요금제 월/연 토글 등.

### tabs — segmented (`.stellar-tabbar`)
grey-100 트랙 위 세그먼트, active = 흰 배경 + `--ev-2`, `--radius-8` pill, 세그먼트 사이 divider.

### cards
`.step-card` / `.price-card`(+`--featured`) / `.feature-highlight-item` / `.gallery-card` / `.mypage-info-group`. surface 배경, `--radius-12`(16px), `--ev-3`(info-group은 `--ev-2` + 1px 보더). 이미지 썸네일은 항상 카드 radius 안에 마스킹.

### shader-feature-card (랜딩 전용, 표현적)
`.shader-feature-card--wine/teal/olive/purple` — 다크 배경 + 블러된 radial-gradient blob, `--radius-20`. 마케팅 연출용. 서비스 내부 화면엔 쓰지 않음.

### stellar-hero + mesh gradient
`.stellar-hero` 배경에 WebGL 메시 그라디언트 캔버스(`.mesh-gradient-canvas`, common.js 셰이더). `__title-gradient`는 text-clip 그라디언트. 캔버스 미지원 시 `#5869f7` 폴백. 높이 340/480/620px(반응형).

### overlay status card
`.stellar-overlay-card` — 진행 바(`__bar`, 8px, `--radius-full`) + 체크리스트, scale(.94)→1 등장. AI 생성 진행 표현.

### inputs / forms (`mypage-common`)
`.mypage-form-input` — height 44px, `--radius-8`(8px), 1px 보더, focus 시 2px outline. `__label`, 카드번호 4분할 박스, 만료월/CVC, `--sm`(max 120px). 유효성 `.is-valid`/`.is-invalid` + `.mypage-form-error`.

```html
<label class="mypage-form-label">이메일</label>
<input class="mypage-form-input" type="email">
<p class="mypage-form-error">올바른 이메일을 입력하세요</p>
```

### password field + toggle (`edit`)
`.mypage-form-password-wrap` + `.mypage-form-password-toggle`(eye/eye-off Lucide, `.is-visible` 토글). 규칙 체크리스트 `.mypage-pw-rules li`(`.is-met`→green): 조합/길이/일치 실시간 검증.

### checkbox — 동의 (원형)
`.mypage-consent__row input` — **18×18 원형**(`--radius-full`), checked = 레드 배경 + 흰 ✓ pseudo. 약관 동의행에 원형 단일 체크로 쓴다.

### modal / overlay / bottom-sheet (다운스트림 확립 패턴)
마이페이지·에딧의 모든 팝업이 공유하는 핵심 패턴. **모바일/태블릿(<1024px) = 하단 고정 바텀시트, PC(≥1024px) = 화면 중앙 카드.**

**오버레이 셸 공통:**
```css
.x-overlay { position: fixed; inset: 0; background: var(--opacity-black-40); z-index: 100; display: none; }
.x-overlay.is-open { display: flex; }
```
닫기 트리거 3종 항상 연결: 백드롭 클릭(`e.target === overlay`), `Escape` 키, 명시적 취소/닫기 버튼. 폼 모달은 열 때마다 `resetForm()`. 모달은 `role="dialog"` + `aria-modal="true"` + `aria-labelledby`, 열림 시 포커스 이동·Tab 트랩·닫힘 시 트리거 복귀(`common.js`의 `initModalA11y()`가 자동 처리).

**변형 A — 확인/경고 시트** (예: 결제수단 삭제 `.mypage-delete-overlay`)
```css
.x-overlay { align-items: flex-end; }                                  /* 모바일: 하단 */
.x-sheet { width:100%; max-width:480px; border-radius: var(--radius-20) var(--radius-20) 0 0;
           padding: var(--space-12) var(--space-24) var(--space-32); }
.x-sheet__handle { width:40px; height:4px; background:var(--grey-300);
                   border-radius:var(--radius-pill); margin:0 auto var(--space-20); }
@media (min-width:1024px){
  .x-overlay{ align-items:center; padding:var(--space-16); }
  .x-sheet{ max-width:390px; border-radius:var(--radius-16); padding:var(--space-24); }
  .x-sheet__handle{ display:none; }
}
```
구성: 좌상단 원형 아이콘(파괴적 액션=negative 틴트) → 굵은 제목 → 보조 설명 → 풀와이드 기본 버튼(`--radius-16`) → plain 텍스트 취소 링크.

**변형 B — 폼 모달** (단일 화면 다중 입력): 항상 중앙 카드(`max-width:390px`, `max-height:90vh; overflow-y:auto`). 하단 취소(outline)/확정(primary) 가로 배치 각 `flex:1`. 필수값 + 약관 동의 충족 전 primary `disabled`.

**색상 규칙 — 모달 하나당 색 3개 이하.** 톤 차이는 한 뭉치로 카운트하되(오렌지bg+오렌지txt=1), **흰/회색/검정도 각각 1개로 카운트**. white+grey+black+hue 합쳐 3 초과 금지. 새 모달마다 점검. 예: 삭제 확인 시트는 흰(bg)+회색(핸들/본문/아이콘)+검정(제목·버튼) = **3색**으로 맞춤 — 파괴 신호는 색이 아니라 제목·버튼·카피가 담당한다(레드 아이콘 제거).

### credit-card 3-step wizard (`mypage`)
`.mypage-card-overlay` — 변형 A(반응형 시트) 구조의 3단계 위자드. 1단계 카드사 3×3 그리드(`.mypage-issuer-tile`, aspect-1, 선택 시 2px 레드 보더) → 2단계 카드정보 입력 → 3단계 약관 동의. 하단 좌/우 버튼이 단계별로 텍스트·동작 변경(좌: "취소"→"이전" / 우: "다음"→마지막 "등록하기"). 카드사 SVG 8종: 신한·KB국민·현대·롯데·우리·하나·NH농협·BC.

### avatar + edit (`mypage-common`)
`.mypage-hero__avatar` — 100px 원형, 4px 보더(#F3F4FA), 이니셜 텍스트 or 이미지, 커버를 -50px 오버랩. `.mypage-avatar-edit` — 32px 검정 원형 카메라 버튼.

### profile image crop (`mypage-common`)
`.mypage-crop-modal` + `.mypage-crop-stage`(280×280, pointer drag) + `.mypage-crop-zoom`(range 슬라이더, 4px 트랙 + 커스텀 레드 thumb 16px). canvas 280×280로 크롭 출력.

### info tooltip (`mypage`)
`.mypage-info-icon`(Lucide info) 트리거 → `.mypage-info-modal`(grey-900 배경, 흰 텍스트, `::before` 화살표, `--ev-gray-3`). 모바일 위치형 툴팁. `role="status"`.

### logo marquee (랜딩)
`.logo-marquee` / `.stellar-logos-slide` — `translateX(-50%)` 무한 루프 + 엣지 페이드. `.logo-marquee__blur` 4레이어 `backdrop-filter` progressive blur. 파트너 로고(`logo_slider01/02.png`).

### gallery / carousel (랜딩)
`.gallery-grid`·`.studio-showcase__grid` CSS multi-column masonry, `.hero-video-carousel`, `.portfolio-gallery__stack`(3D 부채꼴 카드 + hover lift, 모바일은 `__marquee`로 전환). 영상 샘플은 JS의 `SAMPLE_VIDEOS`로 주입(`.webm`/`.mp4`).

### lightbox (랜딩)
`.gallery-lightbox` / `__panel` — scale(.92)→1 등장, 드래그로 닫기. 영상 확대 뷰.

### promo banner + countdown (랜딩)
`.stellar-banner`·`.promo-banner__card` — 배경 영상 + 그라디언트 오버레이. 카운트다운 세그먼트(`__countdown-seg`, DD:HH:MM:SS, tabular-nums monospace).

### hero chat bubbles (랜딩)
`.hero-chat__bubble`(AI, 흰) / `--user`(검정), `__typing` 점 3개 bounce, 단어 스트림 fade-in(index.js 시퀀스). AI 대화 연출.

### footer
`.site-footer` — 검정 배경. 사업자 정보(상인월드 주식회사 등).

## Do's and Don'ts

**Do** 색은 raw 스케일을 흩뿌리지 말고 시맨틱 토큰(`--ink-primary`, `--txt-dark`, `--bg-page`, `--bg-surface`)으로 의도를 먼저 표현한다. 액션·강조는 브랜드 레드 `--ink-primary`(#E81411) 하나로 통일한다.

**Do** 표면 분리는 강한 그림자보다 1px 헤어라인(`--border-neutral`) + 배경 워시로 먼저 해결한다.

**Do** Pretendard 단일 패밀리 + 브랜드 레드만 쓰고, 그라데이션 남용·이모지·유니코드 의사 아이콘을 배제한다. 아이콘은 Lucide.

**Do** 숫자(크레딧·가격·타이머)는 bold, 단위 라벨은 regular로 분리한다.

**Do** 모든 인터랙티브 표면에 press feedback을 건다 — `scale(0.92)` 표준, 텍스트 인접 행은 0.96. 애니메이션은 반드시 `prefers-reduced-motion` 가드.

**Do** CSS/JS는 `화면/CLAUDE.md`의 4단 레이어(tokens→common→{group}-common→{page})로 분리한다. 페이지 전용 규칙을 공통에 넣지 않고, 2페이지+ 공용 규칙을 페이지 전용에 중복 정의하지 않는다.

**Do** 모달/오버레이는 `role="dialog"`+`aria-modal="true"`, 포커스 이동·Tab 트랩·Esc 닫기·트리거 복귀를 갖춘다. 아이콘 전용 버튼은 `aria-label` 필수. 본문 대비 WCAG AA(≥4.5:1) — `--txt-faint`(#6E6E6E)는 작은 본문에 금지.

**Do** 마이페이지 primary/danger 버튼은 검정(#000), 랜딩 CTA는 레드 — 이 관례를 유지한다.

**Do** 마케팅 화면(랜딩)은 표현적, 서비스 화면(마이페이지/에딧)은 절제 — 이중 톤을 지킨다.

**Don't** 다크 모드 토큰을 추정 생성하지 않는다 — 라이트 전용이다(국소 검정 표면은 테마 아님).

**Don't** tokens.css 밖 하드코딩 색(#d4ff3f·#F9FAFF·#F3F4FA·#5869f7)을 임의로 늘리지 않는다. 신규 색은 토큰 승격을 먼저 검토한다.

**Don't** 강한 드롭섀도로 표면을 부양시키지 않는다 — 그림자 토큰은 전부 미세하다.

**Don't** 사용자에게 `당신`·`저희`를 쓰지 않는다 — 사용자 소유물은 `내 …`, 브랜드는 `상인월드`로 칭한다. 성공 상태도 결과를 먼저 알리는 차분한 카피를 쓴다.

**Don't** 상인월드와 무관한 외부 서비스 이름·타 도메인 개념(예: 모빌리티의 대여/반납·지도 마커)을 제품 UI에 끌어들이지 않는다 — 제품 정체성은 상인월드(소상공인 AI 영상생성)로 통일한다.

**Don't** 화면에 실제로 없는 컴포넌트(정식 date-picker, snackbar, skeleton, selection-box, radio 그룹 등)를 있는 것처럼 문서화·생성하지 않는다. 새 컴포넌트를 추가하면 이 문서와 `화면/CLAUDE.md` 참조 맵을 함께 갱신한다.

## Responsive Behavior

기준 뷰포트는 모바일이며, 컨테이너 max-width는 1540px. 실제 미디어쿼리 breakpoint:

| Breakpoint | 효과 |
|---|---|
| ≤480 / ≤479 | shader 그리드 1열, 탭바 divider 숨김, 결제 아이템 grid |
| 640 | 갤러리/스튜디오 column-count 3↔2, 배너 스택, 프로모 컴팩트 |
| 767 / 768 | info-group full-bleed, 커버 160↔280px, hero 타이틀 56px, 포트폴리오 stack↔marquee |
| ≤860 | nav/액션 숨김 → 햄버거, hero-video-carousel 1열, step-grid 1열 |
| 960 | 요금제 그리드 1열 |
| **≥1024 (데스크톱 표준)** | 모달/오버레이 바텀시트 → 중앙 카드 전환, info-row 2열 |
| ≥1280 | stellar-video 620px |

터치 타깃은 넉넉히 — 버튼 높이 36/40/44/46/48/52px, 주 액션은 52px 우선. hover는 사실상 없음(press가 피드백).

## Known Gaps

- **토큰 이름 ≠ 값.** `--radius-12`=16px, `--radius-16`=14px, `--radius-20`=24px, `--space-40`=36px, `--space-48`=40px. 이름으로 값을 가정하면 안 됨. 향후 리네이밍 검토.
- **토큰 밖 하드코딩 색 4종.** #d4ff3f(스튜디오 pill)·#F9FAFF(마이페이지 bg)·#F3F4FA(마이페이지 보더/아바타)·#5869f7(캔버스 폴백). 토큰 승격 검토 대상. (크레딧 숫자 #F93322는 --ink-primary로 통일 완료.)
- **타입 토큰 스케일 부재.** 애드혹 px 직접 사용. 타입 토큰 승격 미완.
- **누락 영상 자산.** JS가 참조하는 `*.webm`, `hero-vd*.mp4`, `hero-foot01.mp4`가 `image/` 디렉터리에 없음(git status상 삭제됨) — 개발자 전달 시 확인 필요.
- **다크 모드 미지원.** 라이트 전용. 검정 표면은 국소 디자인 선택.
- **메시 그라디언트 reduced-motion 미가드.** `initStellarMesh`의 rAF 루프가 `prefers-reduced-motion`을 무시하고 항상 애니메이션 — 히어로·커버 모두 해당. 정지 프레임 처리 검토.
- **hover 피드백 무효화.** `--opacity-hover:1`이라 헤더 nav·`.btn-header-outline`·`.hamburger`의 opacity hover가 전부 무효 — 데스크톱 헤더 상호작용에 시각 피드백이 사실상 없음. hover 정책 확정(0.7로 낮추거나 규칙 제거) 필요. 헤더 outline버튼·햄버거는 press-scale도 없어 "모든 인터랙티브 press feedback" 규칙과도 어긋남.
- **헤더 로고 폭.** `.site-header__logo` width 288px는 데스크톱만 — 모바일 ≤860px에서는 `width:auto`로 완화됨(오버플로 리스크 해소). 데스크톱 288px 고정은 유지.
- **z-index·타입·포커스 토큰 미승격.** z-index(30/40/50/100)·타입 스케일·포커스 링이 하드코딩. 토큰화 검토.
- **login/signup은 별도 CSS(`style.css`, `auth.css`) 사용 중** — 나머지 페이지의 tokens+common 체계와 역할 중복. auth를 tokens+common+auth로 이관 후 style.css 제거 예정(별도 작업, `화면/CLAUDE.md` 참조).

## References

디자인 값 정본:
- `../css/tokens.css` — 색·간격·라운드·그림자·모션 토큰(authoritative)
- `css/common.css`, `css/index.css`, `css/mypage-common.css`, `css/mypage.css`, `css/edit.css`
- `index.html`, `mypage.html`, `mypage-login.html`(로그인 상태 헤더/드로어), `edit.html`
- `화면/CLAUDE.md` — 파일 레이어링·접근성·참조 맵 규칙
