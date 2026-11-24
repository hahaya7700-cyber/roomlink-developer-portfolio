
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  ArrowDown,
  Menu,
  X,
  Mail,
  Phone,
  Github,
  GraduationCap,
  BriefcaseBusiness,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';
import './style.css';

const A = '/images/';

const blog = 'https://blog.naver.com/today_is_the_best';
const github = 'https://github.com/hahaya7700-cyber';

const overview = [
  ['01', '매물 탐색', '지역·건물·호실을 탐색하고 입주 조건을 확인', 'search'],
  ['02', '입주 신청·계약', '입주 신청부터 계약까지 이어지는 흐름', 'contract'],
  ['03', '입주 생활', '공용 공간과 물품 예약 등 생활 편의 기능', 'reservation'],
  ['04', '커뮤니티', '입주민 간 소통을 위한 서비스', 'community'],
  ['05', '호스트 운영', '건물과 입주 관련 운영 관리', 'dashboard'],
];

const features = [
  ['예약 신청', '공용 공간과 물품을 날짜와 시간에 맞춰 예약', 'reservation'],
  ['예약 내역', '내 예약 목록과 상태 확인 및 예약 취소', 'history'],
  ['이용 시간 연장', '예약당 1회, 정확히 1시간 연장 및 중복 검사', 'extend'],
  ['관리자 자원 관리', '공용 자원 등록·수정·삭제와 이용 가능 상태 관리', 'resource'],
  ['관리자 예약 관리', '예약 목록·상태 조회 및 관리자 취소 처리', 'admin_reservation'],
  ['문의 답변', '공용 자원 문의 조회 및 관리자 답변', 'inquiry'],
  ['QR 체크인', 'QR을 통한 체크인과 체크인 완료 상태 표시', 'qr'],
  ['연체 관리', '물품 미반납 시 연체 상태 처리 및 반납 기록', 'overdue'],
];

const strengths = [
  ['예약 신청·취소', '공간 및 물품 예약 관리'],
  ['예약 시간 연장', '1회 · 1시간 연장 및 충돌 검증'],
  ['QR 체크인', 'QR 스캔 및 체크인 완료 상태 표시'],
  ['연체 관리', '물품 미반납 및 연체 상태 처리'],
  ['중복 예약 방지', '동일 자원의 예약 시간 충돌 검증'],
  ['관리자 기능', '공용 자원·예약·문의 관리'],
];

const skills = [
  'Java',
  'Spring Boot',
  'React',
  'JPA',
  'PostgreSQL',
  'REST API',
  'Git / GitHub',
  'Docker',
];

// 클릭 확대 없이 원본 비율로 이미지를 표시
function Shot({ name, title }) {
  return (
    <div className="shot">
      <img
        src={`${A}${name}.webp`}
        alt={`${title} 실제 화면`}
        loading="lazy"
      />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    ['소개', '#about-me'],
    ['경력·학력', '#background'],
    ['프로젝트', '#project'],
    ['담당 기능', '#contribution'],
    ['블로그', '#blog'],
    ['연락처', '#contact'],
  ];

  return (
    <>
      <header className="site-header">
        <a href="#top" className="logo">
          ROOM<span>LINK</span>
          <span className="logo-dot">.</span>
        </a>

        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기 또는 닫기"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">

        {/* 01. 개발자 소개 */}
        <section className="profile-section" id="about-me">
          <div className="container">
            <div className="eyebrow">
              DEVELOPER PORTFOLIO / 2026
            </div>

            <div className="profile-layout">
              <div className="profile-photo-wrap">
                <img
                  src="/profile.png"
                  alt="양희재 증명사진"
                  className="profile-photo"
                />
              </div>

              <div className="profile-copy">
                <div className="section-kicker">ABOUT ME</div>

                <p className="role">
                  BACKEND / FULL STACK DEVELOPER
                </p>

                <h1>
                  안녕하세요,
                  <br />
                  <em>개발자 양희재</em>입니다.
                </h1>

                <p className="lead">
                  사용자의 입장에서 문제를 이해하고,
                  안정적인 서비스로 구현하는 개발자를 지향합니다.
                </p>

                <p className="muted">
                  다양한 고객 응대 및 쇼핑몰 운영 경험을 바탕으로
                  실제 업무 흐름을 이해하고,
                  Java·Spring Boot·React를 활용한
                  웹 서비스 개발 역량을 쌓아가고 있습니다.
                </p>

                <div className="skill-tags">
                  {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <div className="profile-actions">
                  <a className="btn btn-primary" href="#project">
                    프로젝트 보기 <ArrowDown size={16} />
                  </a>

                  <a className="btn btn-outline" href="#contact">
                    연락하기 <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-summary">
              <div>
                <span className="section-kicker">MY FOCUS</span>
                <h2>
                  예약부터 QR 체크인, 이용 종료까지
                  <br />
                  하나의 서비스 흐름으로 구현했습니다.
                </h2>
              </div>

              <p>
                공용 자원 예약 시스템을 담당하며
                예약 신청·취소, 시간 연장,
                중복 예약 검증, QR 체크인,
                연체 및 관리자 기능을 구현했습니다.
              </p>
            </div>

            <div className="strength-grid">
              {strengths.map(([title, description], index) => (
                <div className="strength-card" key={title}>
                  <span className="strength-number">
                    0{index + 1}
                  </span>
                  <strong>{title}</strong>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 02. 이전 경력 및 학력 */}
        <section className="section background-section" id="background">
          <div className="container">
            <div className="section-kicker">
              EXPERIENCE & EDUCATION
            </div>

            <h2 className="section-title">
              다양한 경험을 바탕으로
              <br />
              개발의 시야를 넓혀갑니다.
            </h2>

            <div className="background-grid">
              <article className="info-panel">
                <div className="panel-title">
                  <BriefcaseBusiness size={22} />
                  <h3>PREVIOUS CAREER</h3>
                </div>

                <p className="panel-intro">
                  개발 경력과 구분되는 이전 실무 경험입니다.
                </p>

                <div className="timeline-item">
                  <strong>영업 · 고객 상담</strong>
                  <span>기프트인포</span>
                  <p>
                    고객 요구사항 파악과 상담 경험.
                    우수 영업사원 1위,
                    친절 상담원 3위.
                  </p>
                </div>

                <div className="timeline-item">
                  <strong>쇼핑몰 운영 · 주문 관리</strong>
                  <span>펀앤쇼핑 · 제이케이엠</span>
                  <p>
                    자사몰·오픈마켓·폐쇄몰 상품 등록,
                    주문 관리 및 관리자 시스템 활용.
                  </p>
                </div>

                <div className="timeline-item">
                  <strong>상품기획 · 매장관리</strong>
                  <span>기타 실무 경험</span>
                  <p>
                    상품 운영, 고객 응대,
                    현장 업무 프로세스에 대한 이해.
                  </p>
                </div>
              </article>

              <article className="info-panel">
                <div className="panel-title">
                  <GraduationCap size={24} />
                  <h3>EDUCATION</h3>
                </div>

                <div className="timeline-item">
                  <strong>강원대학교 춘천캠퍼스</strong>
                  <span>2014 입학 — 2018 졸업</span>
                  <p>
                    농업자원경제학과
                    (현 식품자원경제학과)
                    <br />
                    농식품 유통 구조, 경제학,
                    농식품 경제, 국제개발협력 학습.
                  </p>
                </div>

                <div className="timeline-item">
                  <strong>하이미디어 아카데미 · IBM 05기</strong>
                  <span>개발자 교육과정</span>
                  <p>
                    Cloud Native 기반
                    AI Agent 개발자 양성과정
                    <br />
                    Java, Spring Boot, React,
                    SQL, Docker, MSA 등 학습.
                  </p>
                </div>

                <div className="education-note">
                  고객과 운영자의 관점을 이해한 경험을
                  사용자 중심 개발에 연결하고자 합니다.
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 03. ROOMLINK 프로젝트 */}
        <section className="hero" id="project">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow light">
                FEATURED PROJECT · ROOMLINK
              </div>

              <p className="hero-sub">COLIVING PLATFORM</p>

              <h2>
                공간과 사람을
                <br />
                <em>하나로 연결하다.</em>
              </h2>

              <p>
                매물 탐색부터 입주 생활,
                공용 자원 예약까지 연결하는
                코리빙 플랫폼 팀 프로젝트입니다.
              </p>

              <div className="hero-actions">
                <a href="#contribution" className="btn btn-cream">
                  담당 기능 살펴보기
                  <ArrowDown size={16} />
                </a>

                <a href="#journey" className="text-link">
                  서비스 흐름 <ArrowDown size={16} />
                </a>
              </div>

              <div className="hero-meta">
                <span>TEAM PROJECT</span>
                <span>MSA ARCHITECTURE</span>
                <span>JAVA + REACT</span>
              </div>
            </div>

            <div className="hero-image">
              <img
                src={`${A}main.webp`}
                alt="ROOMLINK 서비스 대표 화면"
              />
              <div className="hero-image-label">
                ROOMLINK · CO-LIVING SERVICE
              </div>
            </div>
          </div>
        </section>

        {/* 04. 서비스 전체 흐름 - 세로 스크롤 */}
        <section className="section" id="journey">
          <div className="container">
            <div className="section-kicker">
              SERVICE EXPERIENCE
            </div>

            <h2 className="section-title">
              입주 전부터 입주 후까지
              <br />
              연결되는 서비스
            </h2>

            <p className="section-description">
              팀 프로젝트 전체 서비스 흐름입니다.
              이미지를 클릭할 필요 없이
              아래로 스크롤하면서 각 화면을 확인할 수 있습니다.
            </p>

            <div className="screen-list">
              {overview.map(([num, title, description, image]) => (
                <article className="screen-section" key={num}>
                  <div className="screen-heading">
                    <span className="screen-number">{num}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </div>

                  <Shot name={image} title={title} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 05. 시스템 아키텍처 */}
        <section className="section architecture-section">
          <div className="container">
            <div className="section-kicker">
              SYSTEM & STACK
            </div>

            <h2 className="section-title">
              서비스별 책임을 나눈
              <br />
              MSA 기반 구조
            </h2>

            <p className="section-description">
              팀 프로젝트 전체 아키텍처 기준으로
              Spring Boot 서비스와 API Gateway,
              Eureka, Config Server를 활용했습니다.
            </p>

            <div className="stack-groups">
              <div className="stack-group">
                <span>FRONTEND</span>
                <strong>React · JavaScript · CSS</strong>
              </div>

              <div className="stack-group">
                <span>BACKEND</span>
                <strong>
                  Java · Spring Boot · JPA · REST API
                </strong>
              </div>

              <div className="stack-group">
                <span>DATA & INFRA</span>
                <strong>
                  PostgreSQL · Redis · Docker · Kafka · RabbitMQ
                </strong>
              </div>

              <div className="stack-group">
                <span>ARCHITECTURE</span>
                <strong>
                  API Gateway · Eureka · Config Server · MSA
                </strong>
              </div>
            </div>
          </div>
        </section>

        {/* 06. 담당 기능 - 세로 스크롤 */}
        <section
          className="section contribution-section"
          id="contribution"
        >
          <div className="container">
            <div className="section-kicker">
              MY CONTRIBUTION
            </div>

            <h2 className="section-title">
              제가 직접 담당한
              <br />
              공용 자원 예약 시스템
            </h2>

            <p className="section-description">
              사용자 예약 흐름과 관리자 운영 기능을 연결하는
              프론트엔드·백엔드 기능을 구현했습니다.
              실제 프로젝트 화면을 아래에서 순서대로 확인할 수 있습니다.
            </p>

            <div className="screen-list">
              {features.map(([title, description, image], index) => (
                <article className="screen-section" key={title}>
                  <div className="screen-heading">
                    <span className="screen-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </div>

                  <Shot name={image} title={title} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 07. 개발 로직 */}
        <section className="section engineering-section" id="engineering">
          <div className="container engineering-grid">
            <div>
              <div className="section-kicker">ENGINEERING</div>

              <h2 className="section-title">
                중복 예약을 막는
                <br />
                시간 검증 로직
              </h2>

              <p>
                예약 시작·종료 시간을 비교하여
                기존 예약과 겹치는 경우를 검사합니다.
                연장 시에도 다음 예약과 충돌하지 않도록
                검증합니다.
              </p>

              <div className="rule-list">
                <div>
                  <CheckCircle2 size={18} />
                  최초 예약: 1시간 또는 2시간
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  시간 연장: 예약당 1회, 정확히 1시간
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  다른 유효 예약과 겹치면 예약·연장 제한
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  QR 체크인 후 체크인 완료 상태 표시
                </div>
              </div>
            </div>

            <div className="code-panel">
              <div className="code-header">
                <span className="code-dot" />
                Reservation overlap check
              </div>

              <pre>
                <code>{`// 다른 예약의 시작 < 내 종료
// 다른 예약의 종료 > 내 시작
if (other.getStartTime().isBefore(endTime)
        && other.getEndTime().isAfter(startTime)) {
    throw new IllegalArgumentException(
        "이미 예약된 시간입니다."
    );
}`}</code>
              </pre>

              <div className="code-footer">
                JAVA · SPRING BOOT
              </div>
            </div>
          </div>
        </section>

        {/* 08. 개인 블로그 */}
        <section className="section blog-section" id="blog">
          <div className="container blog-layout">
            <div>
              <div className="section-kicker">
                BEYOND CODE / PERSONAL BLOG
              </div>

              <h2 className="section-title">
                코드 밖의 일상도
                <br />
                기록하고 있습니다.
              </h2>

              <p className="section-description">
                개발 외에도 일상의 경험과 관심사를 기록하는
                개인 블로그입니다.
                개발자로서의 모습뿐 아니라
                저의 다양한 면을 소개합니다.
              </p>
            </div>

            <a
              className="blog-card"
              href={blog}
              target="_blank"
              rel="noreferrer"
            >
              <div className="blog-icon">
                <BookOpen size={32} />
              </div>

              <span className="blog-category">
                NAVER BLOG · PERSONAL
              </span>

              <h3>Personal Blog</h3>

              <p>
                오늘의 경험과 관심사를 기록하는 공간
              </p>

              <span className="blog-link">
                블로그 방문하기
                <ArrowUpRight size={18} />
              </span>
            </a>
          </div>
        </section>

        {/* 09. 연락처 */}
        <section className="section contact-section" id="contact">
          <div className="container contact-layout">
            <div>
              <div className="section-kicker">
                CONTACT / LET'S CONNECT
              </div>

              <h2 className="section-title">
                함께 성장하며,
                <br />
                더 나은 서비스를 만들겠습니다.
              </h2>

              <p>
                포트폴리오를 봐주셔서 감사합니다.
                궁금한 점이나 협업 제안은
                아래 연락처로 편하게 보내주세요.
              </p>
            </div>

            <div className="contact-links">
              <a href="mailto:hjy7037@naver.com">
                <Mail size={21} />
                <span>
                  <small>EMAIL</small>
                  hjy7037@naver.com
                </span>
                <ArrowUpRight size={18} />
              </a>

              <a href="tel:01082282487">
                <Phone size={21} />
                <span>
                  <small>PHONE</small>
                  010-8228-2487
                </span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={21} />
                <span>
                  <small>GITHUB</small>
                  hahaya7700-cyber
                </span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href={blog}
                target="_blank"
                rel="noreferrer"
              >
                <BookOpen size={21} />
                <span>
                  <small>BLOG</small>
                  네이버 개인 블로그
                </span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="logo" href="#top">
            ROOM<span>LINK</span>
            <span className="logo-dot">.</span>
          </a>

          <span>
            © 2026 Yang Huijae · Developer Portfolio
          </span>

          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
