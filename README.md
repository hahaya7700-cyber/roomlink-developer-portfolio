# ROOMLINK | 신입 개발자 웹 포트폴리오

룸링크 팀 프로젝트 전체 서비스 소개와 **본인 담당 공용 자원 예약 기능**을 분리해 보여주는 React + Vite 웹사이트입니다.

## 실행 (Mac 터미널)

```bash
cd roomlink_portfolio_website
npm install
npm run dev
```

터미널에 출력된 `http://localhost:5173` 등의 주소를 브라우저에서 여세요. 기존 프로젝트가 5173 포트를 사용하면 Vite가 다른 포트를 안내합니다.

## 배포

```bash
npm run build
```

생성된 `dist` 폴더를 정적 호스팅 서비스에 배포할 수 있습니다. GitHub Pages를 쓰는 경우 저장소 하위 경로 배포를 위한 Vite `base` 설정이 추가로 필요할 수 있습니다.

## 수정할 항목

- `src/main.jsx`: 자기소개, 담당 업무, 프로젝트 설명, GitHub 링크
- `src/style.css`: 컬러·레이아웃
- `public/images`: 실제 팀 프로젝트 화면 및 로고
- `public/roomlink_portfolio_summary.pdf`: PDF 요약본

## 주의

- 전체 서비스 기능은 팀 프로젝트의 결과이며, 직접 개발한 기능은 MY CONTRIBUTION에서 구분했습니다.
- 화면 캡처에 개인정보·테스트 계정·비밀키가 없는지 공개 전에 확인하세요.
- 배포된 실제 룸링크 서비스와 이 포트폴리오 웹사이트는 별개입니다.
- GitHub 프로필 URL은 예시로 연결했습니다. 저장소 공개 범위와 권한을 확인한 뒤 프로젝트 링크를 추가하세요.
