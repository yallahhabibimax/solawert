function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef,
  useState
} = React;
const PHONE_FEST = "0152 5999900";
const PHONE_FEST_TEL = "+4915205999900";
const EMAIL = "info@solawert.de";

/* utility icons (stroke, fragment-wrapped) */
const ICO = {
  shield: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3 5 6v5.5c0 4.3 3 7.4 7 8.5 4-1.1 7-4.2 7-8.5V6l-7-3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 11.5 2 2 4-4.2"
  })),
  euro: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15.5 8.2A5 5 0 0 0 7 12a5 5 0 0 0 8.5 3.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 10.6h6M5.5 13.4h5"
  })),
  leaf: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 19c0-7 4-12 14-12 0 8-4 12-11 12-1.5 0-3-.2-3-.2Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 15c2.5-2.6 4.6-3.8 7.5-4.6"
  })),
  phone: /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  }),
  search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3.2-3.2"
  })),
  spray: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 8V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "8",
    width: "6",
    height: "12",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 6h2M14 9h3M17 5v5"
  })),
  clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v4l2.5 2"
  })),
  users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.6 19a5.4 5.4 0 0 1 10.8 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 5.3a3.1 3.1 0 0 1 0 5.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.6 19a5.4 5.4 0 0 0-3-4.9"
  })),
  check: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m5 12 4.5 4.5L19 7"
  })),
  arrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  })),
  star: /*#__PURE__*/React.createElement("path", {
    d: "M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.07 3.29a1 1 0 0 0 .95.69h3.46c.97 0 1.37 1.24.59 1.81l-2.8 2.03a1 1 0 0 0-.36 1.12l1.07 3.29c.3.92-.76 1.69-1.54 1.12l-2.8-2.04a1 1 0 0 0-1.18 0l-2.8 2.04c-.78.57-1.84-.2-1.54-1.12l1.07-3.29a1 1 0 0 0-.36-1.12L2.98 8.72c-.78-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .95-.69l1.07-3.29Z"
  }),
  plus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })),
  home: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 11.5 12 4l8 7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 10v9h12v-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 19v-5h4v5"
  })),
  building: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "3",
    width: "14",
    height: "18",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"
  })),
  pin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.5"
  })),
  mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3.5 6.5 8.5 6 8.5-6"
  })),
  menu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16M4 12h16M4 17h16"
  })),
  close: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6 6 18"
  }))
};
const Svg = ({
  children,
  size = 24,
  sw = 1.7,
  className = ""
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: size,
  height: size,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: className
}, children);
const SolidSvg = ({
  children,
  size = 20,
  className = ""
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: size,
  height: size,
  fill: "currentColor",
  className: className
}, children);
const Stars = ({
  size = 16,
  className = ""
}) => /*#__PURE__*/React.createElement("div", {
  className: "flex items-center gap-0.5 text-[#FBBF24] " + className
}, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(SolidSvg, {
  key: i,
  size: size
}, ICO.star)));
const App = () => {
  useEffect(() => {
    let cleanupReveal = () => {};
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasST = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';
    if (reduce) {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => el.classList.add('active'));
    } else if (hasST) {
      /* Award-winning Reveal: GSAP ScrollTrigger.batch — Elemente, die zusammen in den
         Viewport kommen, werden als Gruppe gestaffelt animiert (Blur + Fade + Rise),
         auch bei schnellem Scrollen sauber nachgezogen. */
      gsap.registerPlugin(ScrollTrigger);
      document.documentElement.classList.add('gsap-on');
      const EASE = 'power3.out';
      const batch = (sel, from) => {
        const els = gsap.utils.toArray(sel);
        if (!els.length) return;
        gsap.set(els, from);
        ScrollTrigger.batch(els, {
          start: 'top 88%',
          once: true,
          onEnter: b => gsap.to(b, {
            opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)',
            duration: 1.15, ease: EASE, stagger: { each: 0.13, from: 'start' }, overwrite: true
          })
        });
      };
      batch('.reveal', { opacity: 0, y: 48, scale: 0.985, filter: 'blur(14px)' });
      batch('.reveal-left', { opacity: 0, x: -54, filter: 'blur(12px)' });
      batch('.reveal-right', { opacity: 0, x: 54, filter: 'blur(12px)' });
      batch('.reveal-scale', { opacity: 0, scale: 0.92, filter: 'blur(18px)' });
      ScrollTrigger.refresh();
      cleanupReveal = () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
        document.documentElement.classList.remove('gsap-on');
      };
    } else {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('active');
            obs.unobserve(e.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => obs.observe(el));
      cleanupReveal = () => obs.disconnect();
    }
    const onScroll = () => {
      const h = document.documentElement;
      const sp = document.getElementById('scroll-progress');
      if (sp) sp.style.width = h.scrollTop / (h.scrollHeight - h.clientHeight) * 100 + '%';
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => {
      cleanupReveal();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Marquee, null), /*#__PURE__*/React.createElement("section", {
    "data-kaefer": "form"
  }), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Segments, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(CaseStudies, null), /*#__PURE__*/React.createElement(RegionBand, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Values, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Contact, null)), /*#__PURE__*/React.createElement("div", {
    "data-kaefer": "footer"
  }), /*#__PURE__*/React.createElement(MobileCallBar, null));
};

/* ── Navbar ── */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener('scroll', f, {
      passive: true
    });
    return () => window.removeEventListener('scroll', f);
  }, []);
  const links = [["Leistungen", "#leistungen"], ["Projekte", "#referenzen"], ["Ablauf", "#ablauf"], ["Über uns", "#ueber-uns"], ["Kontakt", "#kontakt"]];
  return /*#__PURE__*/React.createElement("nav", {
    className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + (scrolled ? "bg-white/90 backdrop-blur-md shadow-[0_4px_24px_-14px_rgba(20,23,28,0.3)] border-b border-black/5" : "bg-transparent")
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "flex items-center gap-2.5 shrink-0"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/logo.png",
    alt: "SolaWert Wuppertal",
    className: "w-auto transition-all duration-300 " + (scrolled ? "h-9" : "h-12")
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-bold tracking-tight leading-none transition-all duration-300",
    style: {
      fontSize: scrolled ? "19px" : "24px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-content"
  }, "Sola"), /*#__PURE__*/React.createElement("span", {
    className: "text-brand-deep"
  }, "Wert"))), /*#__PURE__*/React.createElement("div", {
    className: "hidden lg:flex items-center gap-7 font-heading text-[14.5px] font-medium text-content"
  }, links.map(([t, h, mega]) => /*#__PURE__*/React.createElement("a", _extends({
    key: h,
    href: h
  }, mega ? {
    "data-mega": mega
  } : {}, {
    className: "nav-link hover:text-content transition-colors inline-flex items-center gap-1"
  }), t, mega && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "13",
    height: "13",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "opacity-50"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:" + PHONE_FEST_TEL,
    className: "hidden"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 17
  }, ICO.phone), " ", PHONE_FEST), /*#__PURE__*/React.createElement("a", {
    href: "#anfrage",
    className: "inline-flex btn-primary rounded-full px-5 py-2.5 font-heading text-[14.5px] items-center gap-2"
  }, "Angebot anfragen ", /*#__PURE__*/React.createElement(Svg, {
    size: 16,
    sw: 2.2
  }, ICO.arrow)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    className: "lg:hidden w-10 h-10 flex items-center justify-center text-content rounded-lg hover:bg-black/5",
    "aria-label": "Menü"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 24
  }, open ? ICO.close : ICO.menu)))), /*#__PURE__*/React.createElement("div", {
    className: "lg:hidden overflow-hidden transition-all duration-300 bg-white border-b border-black/5 " + (open ? "max-h-[440px]" : "max-h-0")
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-6 py-4 flex flex-col gap-1"
  }, links.map(([t, h]) => /*#__PURE__*/React.createElement("a", {
    key: h,
    href: h,
    onClick: () => setOpen(false),
    className: "py-2.5 font-heading font-medium text-content border-b border-black/5 last:border-0"
  }, t)), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3 mt-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:" + PHONE_FEST_TEL,
    className: "flex-1 btn-dark rounded-full py-3 text-center font-heading font-semibold text-sm"
  }, "Anrufen"), /*#__PURE__*/React.createElement("a", {
    href: "#anfrage",
    onClick: () => setOpen(false),
    className: "flex-1 btn-primary rounded-full py-3 text-center font-heading text-sm"
  }, "Angebot anfragen")))));
};

/* ── Hero ── */
const Hero = () => {
  useEffect(() => {
    if (typeof gsap !== 'undefined') {
      gsap.from('.hero-el', {
        y: 32,
        opacity: 0,
        duration: 1.05,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.15
      });
      gsap.from('.hero-visual', {
        scale: 0.94,
        opacity: 0,
        duration: 1.3,
        ease: 'power2.out',
        delay: 0.35
      });
    }
    const syncW = () => {
      const btn = document.querySelector('.hero-el.flex.flex-wrap');
      const cards = document.querySelector('.hero-el.grid');
      if (btn && cards) cards.style.maxWidth = btn.offsetWidth + 'px';
    };
    syncW();
    const t1 = setTimeout(syncW, 300);
    const t2 = setTimeout(syncW, 1200);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncW);
    window.addEventListener('resize', syncW);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', syncW);
    };
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "relative pt-28 md:pt-32 pb-20 md:pb-28 px-5 md:px-8 overflow-hidden bg-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-dots opacity-60 pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-[-10%] right-[-6%] w-[46%] h-[70%] rounded-full pointer-events-none",
    style: {
      background: "radial-gradient(ellipse, rgba(65,166,54,0.18) 0%, transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center relative z-10"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hero-el inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/5 shadow-sm mb-6"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-brand dot-pulse"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[11.5px] font-heading font-semibold tracking-[0.14em] uppercase text-content-secondary"
  }, "Photovoltaik · Wärmepumpe · Speicher · NRW")), /*#__PURE__*/React.createElement("h1", {
    className: "hero-el font-heading font-extrabold text-content leading-[1.07] tracking-tight text-[2.4rem] sm:text-5xl lg:text-[3.8rem] mb-6",
    style: {
      fontWeight: 900,
      letterSpacing: "-0.035em"
    }
  }, "Photovoltaik & Wärmepumpe für ", /*#__PURE__*/React.createElement("span", {
    className: "swoosh"
  }, "ganz NRW")), /*#__PURE__*/React.createElement("p", {
    className: "hero-el text-[1.05rem] md:text-lg text-content-secondary leading-relaxed max-w-xl mb-8"
  }, "Schlüsselfertig aus einer Hand, mit durchdachter Planung, deutlich mehr Speicher zum gleichen Preis und Zahlung erst, wenn Ihre Anlage läuft. Unseren Sitz haben wir in Wuppertal, im Einsatz sind wir in ganz Nordrhein-Westfalen."), /*#__PURE__*/React.createElement("div", {
    className: "hero-el flex flex-wrap items-center gap-4"
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:" + PHONE_FEST_TEL,
    className: "btn-primary cta-pulse rounded-full font-heading text-[1.02rem] inline-flex items-center gap-4",
    style: {
      color: "#fff",
      padding: "0.7rem 0.7rem 0.7rem 2rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-extrabold"
  }, "Jetzt unverbindlich anrufen"), /*#__PURE__*/React.createElement("span", {
    className: "w-11 h-11 rounded-full flex items-center justify-center shrink-0",
    style: {
      background: "rgba(0,0,0,0.8)"
    }
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 18
  }, ICO.phone))), /*#__PURE__*/React.createElement("a", {
    href: "#anfrage",
    className: "btn-dark rounded-full font-heading text-[1.02rem] inline-flex items-center gap-4",
    style: {
      padding: "0.7rem 0.7rem 0.7rem 2rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-extrabold"
  }, "Angebot anfragen"), /*#__PURE__*/React.createElement("span", {
    className: "w-11 h-11 rounded-full flex items-center justify-center shrink-0",
    style: {
      background: "rgba(255,255,255,0.16)"
    }
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 18,
    sw: 2.2
  }, ICO.arrow)))), /*#__PURE__*/React.createElement("div", {
    className: "hero-el grid grid-cols-3 gap-4 mt-10",
    style: {
      maxWidth: "638px"
    }
  }, [{
    e: "Ihr Risiko",
    b: "0 €",
    s: "Zahlung erst nach Abnahme",
    i: ICO.euro,
    hi: true
  }, {
    e: "Garantie",
    b: "30 J.",
    s: "auf Ihre Solarmodule",
    i: ICO.shield,
    hi: false
  }, {
    e: "Montage",
    b: "1-3 Tage",
    s: "pro Anlage, terminiert",
    i: ICO.clock,
    hi: false
  }].map((c, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "rounded-2xl p-4 border",
    style: {
      background: c.hi ? "#22331E" : "#2A2E36",
      borderColor: c.hi ? "rgba(65,166,54,0.55)" : "rgba(255,255,255,0.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-bold uppercase tracking-[0.14em] text-[11px] " + (c.hi ? "text-brand" : "text-white/55")
  }, c.e), /*#__PURE__*/React.createElement("span", {
    className: "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 " + (c.hi ? "bg-brand text-white" : "bg-white/10 text-brand")
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 15,
    sw: 2
  }, c.i))), /*#__PURE__*/React.createElement("div", {
    className: "font-heading text-2xl leading-none mb-1.5 " + (c.hi ? "text-brand" : "text-white"),
    style: {
      fontWeight: 800
    }
  }, c.b), /*#__PURE__*/React.createElement("div", {
    className: "text-[12.5px] font-semibold text-white/60 leading-snug"
  }, c.s))))), /*#__PURE__*/React.createElement("div", {
    className: "hero-visual relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative rounded-[28px] overflow-hidden shadow-2xl ring-1 ring-black/5"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/portrait.jpg",
    alt: "Gegam Sargsian, Inhaber von SolaWert",
    className: "w-full h-[440px] md:h-[560px] object-cover object-[center_22%]"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-5 left-5 right-5 flex items-end justify-between text-white"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-heading font-bold text-lg leading-tight"
  }, "Gegam Sargsian"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-white/80"
  }, "Inhaber")))), /*#__PURE__*/React.createElement("div", {
    className: "animate-float absolute -top-5 -left-4 md:-left-8 bg-white rounded-2xl shadow-xl border border-black/5 px-5 py-4 flex items-center gap-3.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-2xl bg-brand/15 text-brand-deep flex items-center justify-center shrink-0"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 24
  }, ICO.euro)), /*#__PURE__*/React.createElement("div", {
    className: "leading-tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-heading text-content text-xl",
    style: {
      fontWeight: 900
    }
  }, "0 \u20ac Anzahlung"), /*#__PURE__*/React.createElement("div", {
    className: "text-[12.5px] text-content-secondary"
  }, "Zahlung erst nach Abnahme"))), /*#__PURE__*/React.createElement("div", {
    className: "animate-float-delay absolute -bottom-5 -right-3 md:-right-7 bg-ink text-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-10 h-10 rounded-xl bg-brand text-brand-text flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 20,
    sw: 2
  }, ICO.leaf)), /*#__PURE__*/React.createElement("div", {
    className: "leading-tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-heading font-bold text-sm"
  }, "Alles aus einer Hand"), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-white/60"
  }, "Privat & Gewerbe"))))));
};

/* ── Marquee ── */
const Marquee = () => {
  const items = ["Keine Anzahlung", "Mehr Speicher zum gleichen Preis", "Photovoltaik & Wärmepumpe", "30 Jahre Garantie auf Module", "Montage in 1 bis 3 Tagen", "Eine Woche Nachoptimierung", "Schlüsselfertig aus einer Hand", "In ganz NRW im Einsatz"];
  const row = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-ink py-4 border-y border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee-track"
  }, row.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "inline-flex items-center gap-3 mx-6 text-white/80 font-heading text-sm font-medium"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-brand"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 16,
    sw: 2.2
  }, ICO.check)), /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: t
    }
  }))))));
};

/* ── Features ── */
const Features = () => {
  const items = [{"ico": ICO.euro, "title": "Zahlung erst, wenn alles läuft", "desc": "Keine Anzahlung, keine Vorkasse. Sie zahlen erst nach vollständiger Inbetriebnahme, wenn wir Ihnen die funktionierende Anlage vorgeführt haben. Das volle Risiko liegt bei uns, nicht bei Ihnen."}, {"ico": ICO.leaf, "title": "Mehr Speicher zum gleichen Preis", "desc": "Der Speicher entscheidet über die Effizienz Ihrer Anlage. Wo andere knausern, um ihre Marge zu erhöhen, geben wir Ihnen oft rund 60 Prozent mehr Speicher zum gleichen Preis. Weder zu wenig noch zu viel, sondern genau passend."}, {"ico": ICO.search, "title": "Wir holen das Maximum heraus", "desc": "Optimierte String-Verteilung, sauber berechnete Spannung und Strom, ein leicht überdimensionierter Wechselrichter mit Reserve für die Zukunft. Wir behandeln jedes Projekt wie unser eigenes Zuhause."}];
  return /*#__PURE__*/React.createElement("section", {
    className: "py-20 md:py-28 px-5 md:px-8 bg-white relative",
    "data-watermark": "VERTRAUEN"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl mb-14 reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-brand-deep font-heading font-semibold tracking-[0.16em] uppercase text-xs mb-3 block"
  }, "Warum SolaWert"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-[2.7rem] font-heading font-bold text-content leading-tight"
  }, "Warum SolaWert die richtige Wahl ist")), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-3 gap-6"
  }, items.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "reveal card-lift bg-surface-alt rounded-3xl p-8 border border-black/5",
    style: {
      transitionDelay: i * 0.12 + 's'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 rounded-2xl bg-white shadow-sm border border-black/5 text-brand-deep flex items-center justify-center mb-6 animate-breathe"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 26,
    sw: 1.8
  }, f.ico)), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-heading font-bold text-content mb-3"
  }, f.title), /*#__PURE__*/React.createElement("p", {
    className: "text-content-secondary leading-relaxed text-[15px]"
  }, f.desc))))));
};

/* ── Services (9 pests, Gemini icons) ── */
const Services = () => {
  const services = [{"img": "img/services/s1.jpg", "icon": "img/_blank.png", "href": "#anfrage", "name": "Photovoltaik schlüsselfertig", "desc": "Komplette PV-Anlagen für Ihr Dach, von der Planung über Lieferung und Montage bis zur Anmeldung. Sauber installiert, abgestimmt auf Ihren Verbrauch. Am Ende müssen Sie nur noch Ihren eigenen Strom nutzen."}, {"img": "img/services/s2.jpg", "icon": "img/_blank.png", "href": "#anfrage", "name": "Wärmepumpe schlüsselfertig", "desc": "Moderne Wärmepumpen, komplett geplant und installiert. Wir bringen Heizung und Photovoltaik sinnvoll zusammen, damit Sie mit Ihrem eigenen Strom günstig und unabhängig heizen."}, {"img": "img/services/s3.jpg", "icon": "img/_blank.png", "href": "#anfrage", "name": "Stromspeicher mit mehr Kapazität", "desc": "Der Speicher ist der Erfolgsfaktor jeder Anlage. Wir geben Ihnen deutlich mehr Speicher zum gleichen Preis, exakt auf Ihren Verbrauch dimensioniert. So nutzen Sie Ihren Solarstrom auch abends und nachts."}, {"img": "img/services/s4.jpg", "icon": "img/_blank.png", "href": "#anfrage", "name": "Monitoring & Feintuning", "desc": "Wir überwachen Ihre Anlage und stimmen die Einstellungen genau auf Ihr Verbrauchsverhalten ab. So holen wir aus jeder Kilowattstunde das Maximum heraus, statt es bei Standardwerten zu belassen."}, {"img": "img/services/s5.jpg", "icon": "img/_blank.png", "href": "#anfrage", "name": "Effizienz-Planung & String-Optimierung", "desc": "Wir berechnen Spannung und Strom genau und verteilen die Module optimal in den Strings. Der Wechselrichter wird mit Reserve geplant. Das bringt mehr Ertrag, längere Lebensdauer und Spielraum für die Zukunft."}, {"img": "img/services/s6.jpg", "icon": "img/_blank.png", "href": "#anfrage", "name": "Inbetriebnahme, Anmeldung & Wartung", "desc": "Wir übernehmen die komplette Anmeldung und nehmen uns nach der Fertigstellung noch eine Woche Zeit, um die Anlage gemeinsam mit Ihnen zu optimieren. Auf Wunsch betreuen wir sie dauerhaft."}];
  return /*#__PURE__*/React.createElement("section", {
    id: "leistungen",
    className: "py-20 md:py-28 px-5 md:px-8 bg-surface-alt relative accent-line-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl mb-14 reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-brand-deep font-heading font-semibold tracking-[0.16em] uppercase text-xs mb-3 block"
  }, "Leistungen"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-[2.7rem] font-heading font-bold text-content leading-tight mb-4"
  }, "Photovoltaik, Wärmepumpe & Speicher"), /*#__PURE__*/React.createElement("p", {
    className: "text-content-secondary text-lg"
  }, "Von der Effizienz-Planung bis zur fertigen Anlage. Wir begleiten Sie über den gesamten Weg und holen das Maximum aus Ihrem Projekt heraus.")), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
  }, services.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "reveal pest-card bg-white rounded-3xl border border-black/5 overflow-hidden flex flex-col",
    style: {
      transitionDelay: i % 3 * 0.1 + 's'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-48 overflow-hidden relative"
  }, /*#__PURE__*/React.createElement("img", {
    src: s.img,
    alt: s.name,
    className: "pest-bg w-full h-full object-cover"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hidden"
  }, /*#__PURE__*/React.createElement("img", {
    src: s.icon,
    alt: "",
    className: "w-full h-full object-contain"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "p-7 flex flex-col flex-grow"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-heading font-bold text-content mb-2.5"
  }, s.name), /*#__PURE__*/React.createElement("p", {
    className: "text-content-secondary text-[14px] leading-relaxed"
  }, s.desc), /*#__PURE__*/React.createElement("a", {
    href: s.href,
    className: "mt-auto pt-5 inline-flex items-center gap-1.5 text-brand-deep font-heading font-semibold text-sm group/l"
  }, "Mehr erfahren", /*#__PURE__*/React.createElement("span", {
    className: "transition-transform group-hover/l:translate-x-1"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 16,
    sw: 2.2
  }, ICO.arrow))))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-14 text-center reveal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-content-secondary text-base mb-5 max-w-xl mx-auto"
  }, "Nicht sicher, welche Lösung zu Ihrem Dach passt? Wir beraten Sie kostenlos und nennen Ihnen vorab einen fairen Festpreis."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap justify-center gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#anfrage",
    className: "btn-primary cta-pulse rounded-full px-7 py-4 font-heading inline-flex items-center gap-2.5"
  }, "Kostenloses Angebot anfragen ", /*#__PURE__*/React.createElement(Svg, {
    size: 18,
    sw: 2.2
  }, ICO.arrow)), /*#__PURE__*/React.createElement("a", {
    href: "tel:" + PHONE_FEST_TEL,
    className: "btn-dark rounded-full px-6 py-4 font-heading inline-flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 18
  }, ICO.phone), " ", PHONE_FEST)))));
};

/* ── Segments ── */
const Segments = () => {
  const card = (ico, title, desc, points, img, pos) => /*#__PURE__*/React.createElement("div", {
    className: "reveal card-lift bg-white rounded-3xl overflow-hidden border border-black/5 flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-72 overflow-hidden"
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: title,
    className: "w-full h-full object-cover " + pos
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-xl bg-brand/15 text-brand-deep flex items-center justify-center mb-5"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 24
  }, ico)), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-heading font-bold text-content mb-3"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-content-secondary leading-relaxed mb-5 text-[15px]"
  }, desc), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2.5"
  }, points.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "flex items-start gap-2.5 text-content text-[14.5px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mt-0.5 text-brand-deep shrink-0"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 18,
    sw: 2.4
  }, ICO.check)), p)))));
  return /*#__PURE__*/React.createElement("section", {
    className: "py-20 md:py-28 px-5 md:px-8 bg-white relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-2xl mx-auto mb-14 reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-brand-deep font-heading font-semibold tracking-[0.16em] uppercase text-xs mb-3 block"
  }, "Für jeden Bedarf"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-[2.7rem] font-heading font-bold text-content leading-tight"
  }, "Für Privatkunden & Geschäftskunden")), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-6"
  }, card(ICO.home, "Für Privatkunden", "Machen Sie Ihren eigenen Strom, heizen Sie mit der Wärmepumpe und werden Sie unabhängiger von steigenden Preisen.", ["Eigenheim, Doppelhaus & Neubau", "Photovoltaik, Speicher & Wärmepumpe", "Keine Anzahlung, Zahlung nach Abnahme"], "img/about-2.jpg", "object-[center_20%]"), card(ICO.building, "Für Geschäftskunden", "Senken Sie Ihre Energiekosten und nutzen Sie Ihre Dachflächen wirtschaftlich aus.", ["Gewerbe- & Industriedächer", "Hohe Eigenverbrauchsquote", "Wirtschaftlich durchgerechnet"], "img/about-3.jpg", "object-[center_30%]"))));
};

/* ── Process ── */
const Process = () => {
  const steps = [{"n": "01", "ico": ICO.phone, "t": "Beratung & Dachcheck", "d": "Wir schauen uns Ihr Dach und Ihren Verbrauch an und beraten Sie unverbindlich und kostenlos zu den Möglichkeiten."}, {"n": "02", "ico": ICO.search, "t": "Effizienz-Planung & Festpreis", "d": "String-Verteilung, Speicher und Wechselrichter werden exakt berechnet. Sie erhalten ein transparentes Festpreisangebot ohne versteckte Kosten."}, {"n": "03", "ico": ICO.home, "t": "Montage in 1 bis 3 Tagen", "d": "Innerhalb von 2 bis 4 Wochen ist Ihre Baustelle terminiert. Die Montage selbst dauert je nach Anlage meist nur 1 bis 3 Tage."}, {"n": "04", "ico": ICO.shield, "t": "Inbetriebnahme & Nachoptimierung", "d": "Wir nehmen die Anlage in Betrieb und feilen eine Woche lang gemeinsam mit Ihnen an den Einstellungen. Erst danach zahlen Sie."}];
  return /*#__PURE__*/React.createElement("section", {
    id: "ablauf",
    className: "py-20 md:py-28 px-5 md:px-8 bg-ink text-white relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-grid-dark opacity-60 pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-[-20%] right-[-10%] w-[40%] h-[60%] rounded-full pointer-events-none",
    style: {
      background: "radial-gradient(ellipse, rgba(65,166,54,0.12) 0%, transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl mb-14 reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-brand font-heading font-semibold tracking-[0.16em] uppercase text-xs mb-3 block"
  }, "So einfach geht's"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-[2.7rem] font-heading font-bold leading-tight mb-4"
  }, "In 4 Schritten zu Ihrer Solaranlage"), /*#__PURE__*/React.createElement("p", {
    className: "text-white/60 text-lg"
  }, "Von der ersten Anfrage bis zur fertigen Arbeit, klar, schnell und ohne Stress für Sie.")), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "reveal rounded-3xl p-7 bg-white/[0.04] border border-white/10 relative overflow-hidden card-lift",
    style: {
      transitionDelay: i * 0.1 + 's'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-3 -right-2 text-7xl font-heading font-bold text-white/[0.05] select-none"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-xl bg-brand text-brand-text flex items-center justify-center mb-5 relative z-10"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 23,
    sw: 1.8
  }, s.ico)), /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-heading font-bold mb-2 relative z-10"
  }, s.t), /*#__PURE__*/React.createElement("p", {
    className: "text-white/60 text-[14px] leading-relaxed relative z-10"
  }, s.d))))));
};

/* ── Case studies with real photos ── */
const CaseStudies = () => {
  const cases = [{"img": "img/cases/c1.jpg", "pic": "img/_blank.png", "t": "Einfamilienhaus in Wuppertal", "p": "Die Familie wollte unabhängiger von steigenden Strompreisen werden.", "l": "Schlüsselfertige Anlage mit reichlich Speicher, die heute den Großteil des Eigenbedarfs deckt, Tag und Nacht."}, {"img": "img/cases/c2.jpg", "pic": "img/_blank.png", "t": "Gewerbedach im Bergischen Land", "p": "Ein Betrieb mit hohem Tagesverbrauch suchte eine wirtschaftliche Lösung.", "l": "Auf der großen Dachfläche entstand eine Anlage, die den Strom genau dann liefert, wenn er im Betrieb gebraucht wird."}, {"img": "img/cases/c3.jpg", "pic": "img/_blank.png", "t": "Doppelhaushälfte in Solingen", "p": "Begrenzte Dachfläche bei dem Wunsch nach maximalem Ertrag.", "l": "Mit optimierter String-Verteilung und passenden Modulen holten wir das Optimum aus der kleinen Fläche heraus."}, {"img": "img/cases/c4.jpg", "pic": "img/_blank.png", "t": "Speicher-Nachrüstung in Velbert", "p": "Die bestehende Anlage hatte zu wenig Speicher, abends kam der Strom teuer aus dem Netz.", "l": "Wir rüsteten einen deutlich größeren Speicher nach. Jetzt sind auch die Abendstunden mit eigenem Solarstrom gedeckt."}, {"img": "img/cases/c5.jpg", "pic": "img/_blank.png", "t": "Wärmepumpe & PV in Remscheid", "p": "Alte Heizung, hohe Energiekosten und der Wunsch nach mehr Unabhängigkeit.", "l": "Photovoltaik, Speicher und Wärmepumpe aus einer Hand. Geheizt wird jetzt größtenteils mit dem eigenen Strom vom Dach."}];
  return /*#__PURE__*/React.createElement("section", {
    id: "referenzen",
    className: "py-20 md:py-28 px-5 md:px-8 bg-surface-alt relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl mb-14 reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-brand-deep font-heading font-semibold tracking-[0.16em] uppercase text-xs mb-3 block"
  }, "Referenzen"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-[2.7rem] font-heading font-bold text-content leading-tight mb-4"
  }, "Ausgewählte Projekte"), /*#__PURE__*/React.createElement("p", {
    className: "text-content-secondary text-lg"
  }, "Ein Auszug aus Projekten, die wir in Wuppertal und ganz NRW umgesetzt haben.")), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
  }, cases.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "reveal case-card bg-white rounded-3xl border border-black/5 overflow-hidden flex flex-col",
    style: {
      transitionDelay: i % 3 * 0.1 + 's'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-48 overflow-hidden relative"
  }, /*#__PURE__*/React.createElement("img", {
    src: c.img,
    alt: c.t,
    className: "w-full h-full object-cover"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hidden"
  }, /*#__PURE__*/React.createElement("img", {
    src: c.pic,
    alt: "",
    className: "w-full h-full object-contain"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 flex flex-col gap-3.5 flex-grow"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-content leading-tight text-[16.5px]"
  }, c.t), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "inline-block text-[10.5px] font-heading font-bold tracking-wider uppercase text-red-500/80 mb-1"
  }, "Problem"), /*#__PURE__*/React.createElement("p", {
    className: "text-content-secondary text-[13.5px] leading-relaxed line-clamp-2"
  }, c.p)), /*#__PURE__*/React.createElement("div", {
    className: "pt-3.5 border-t border-dashed border-black/10"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1.5 text-[10.5px] font-heading font-bold tracking-wider uppercase text-brand-deep mb-1"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 13,
    sw: 3
  }, ICO.check), " Lösung"), /*#__PURE__*/React.createElement("p", {
    className: "text-content text-[13.5px] leading-relaxed line-clamp-2"
  }, c.l))))), /*#__PURE__*/React.createElement("a", {
    href: "#kontakt",
    className: "reveal case-card bg-ink text-white rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-center items-start p-8 min-h-[300px] group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-xl bg-brand text-brand-text flex items-center justify-center mb-5"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 24,
    sw: 2
  }, ICO.shield)), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-heading font-bold mb-2.5"
  }, "Ihre Leistung nicht dabei?"), /*#__PURE__*/React.createElement("p", {
    className: "text-white/65 text-sm leading-relaxed mb-5"
  }, "Schreiben Sie uns Ihr Anliegen, wir finden gemeinsam die passende Lösung."), /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-2 text-brand font-heading font-semibold"
  }, "Jetzt anfragen ", /*#__PURE__*/React.createElement("span", {
    className: "transition-transform group-hover:translate-x-1"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 18,
    sw: 2.2
  }, ICO.arrow)))))));
};

/* ── Region band (Oliver im Einsatz) ── */
const RegionBand = () => {
  const orte = [{
    c: "Wuppertal",
    meta: "Hauptstandort · ganz NRW",
    tag: "Zentrale",
    hi: true
  }, {
    c: "Solingen",
    meta: "13 km entfernt",
    tag: "ca. 15 Min."
  }, {
    c: "Remscheid",
    meta: "16 km entfernt",
    tag: "ca. 20 Min."
  }, {
    c: "Velbert",
    meta: "18 km entfernt",
    tag: "ca. 20 Min."
  }, {
    c: "Mettmann",
    meta: "20 km entfernt",
    tag: "ca. 25 Min."
  }, {
    c: "Haan",
    meta: "12 km entfernt",
    tag: "ca. 15 Min."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "einzugsgebiet",
    className: "px-5 md:px-8 py-20 md:py-28 bg-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative rounded-[28px] overflow-hidden reveal-scale"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/einsatz.jpg",
    alt: "SolaWert montiert eine Photovoltaik-Anlage in NRW",
    className: "absolute inset-0 w-full h-full object-cover"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/20"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 px-8 md:px-14 py-16 md:py-24 max-w-xl text-white"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-brand font-heading font-semibold tracking-[0.16em] uppercase text-xs mb-3 block"
  }, "Einsatzgebiet"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-[2.6rem] font-heading font-bold leading-[1.1] mb-5"
  }, "In Wuppertal zu Hause, in ganz NRW im Einsatz"), /*#__PURE__*/React.createElement("p", {
    className: "text-white/75 text-lg leading-relaxed mb-8"
  }, "Unseren Sitz haben wir in Wuppertal. Geplant und montiert wird in ganz Nordrhein-Westfalen, auf Wunsch sind wir auch deutschlandweit für Sie unterwegs."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:" + PHONE_FEST_TEL,
    className: "btn-primary cta-pulse rounded-full px-7 py-4 font-heading inline-flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 19
  }, ICO.phone), " ", PHONE_FEST), /*#__PURE__*/React.createElement("a", {
    href: "#anfrage",
    className: "rounded-full px-6 py-4 font-heading inline-flex items-center gap-2.5 bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-colors"
  }, "Unverbindlich Angebot anfragen ", /*#__PURE__*/React.createElement(Svg, {
    size: 18,
    sw: 2.2
  }, ICO.arrow))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-end justify-between flex-wrap gap-3 mb-5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-xl md:text-2xl text-content"
  }, "Photovoltaik & Wärmepumpe in Ihrer Nähe"), /*#__PURE__*/React.createElement("a", {
    href: "#anfrage",
    className: "text-brand-deep font-heading font-semibold text-sm inline-flex items-center gap-1.5 hover:text-brand transition-colors"
  }, "Standort anfragen ", /*#__PURE__*/React.createElement(Svg, {
    size: 15,
    sw: 2.2
  }, ICO.arrow))), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
  }, orte.map((o, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#anfrage",
    className: "reveal relative overflow-hidden rounded-3xl p-6 border block transition-all hover:-translate-y-1",
    style: {
      background: o.hi ? "linear-gradient(140deg, #2c5a1d 0%, #16301a 100%)" : "#ffffff",
      borderColor: o.hi ? "rgba(65,166,54,0.5)" : "rgba(0,0,0,0.07)",
      transitionDelay: i % 3 * 0.08 + "s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 pointer-events-none",
    style: {
      backgroundImage: o.hi ? "linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)" : "linear-gradient(rgba(65,166,54,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(65,166,54,0.10) 1px, transparent 1px)",
      backgroundSize: "30px 30px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-start justify-between mb-8"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-bold uppercase tracking-[0.14em] text-[11px] " + (o.hi ? "text-brand" : "text-brand-deep")
  }, o.tag), /*#__PURE__*/React.createElement("span", {
    className: "w-11 h-11 rounded-xl flex items-center justify-center shrink-0 " + (o.hi ? "bg-brand text-white" : "bg-brand/15 text-brand-deep")
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 20,
    sw: 1.9
  }, o.hi ? ICO.home : ICO.pin))), /*#__PURE__*/React.createElement("div", {
    className: "relative font-heading font-bold text-2xl mb-1.5 " + (o.hi ? "text-white" : "text-content")
  }, o.c), /*#__PURE__*/React.createElement("div", {
    className: "relative text-[13.5px] font-medium " + (o.hi ? "text-white/70" : "text-content-secondary")
  }, o.meta)))))));
};

/* ── Blog / Ratgeber-Teaser ── */
const BlogTeaser = () => {
  const posts = [["Bettwanzen erkennen", "Bisse, Kot und Spuren sicher identifizieren – mit Fotos.", "bettwanzen-erkennen.html", "Bettwanzen"], ["Was kostet ein Photovoltaik?", "Preise 2026 nach Schädling im transparenten Überblick.", "was-kostet-ein-kammerjaeger.html", "Kosten"], ["Was tun bei einem Wespennest?", "Richtig reagieren statt Panik – und wann es weg muss.", "was-tun-bei-wespennest.html", "Wespen"], ["Rattenkot erkennen", "Spuren deuten und Ratten von Mäusen unterscheiden.", "rattenkot-erkennen.html", "Ratten"], ["Marder im Dachboden vertreiben", "Was wirklich hilft – und was Geldverschwendung ist.", "marder-im-dachboden-vertreiben.html", "Marder"], ["Wer zahlt den Photovoltaik?", "Mieter oder Vermieter? Die Rechtslage verständlich.", "wer-zahlt-kammerjaeger-mieter-vermieter.html", "Recht"]];
  return /*#__PURE__*/React.createElement("section", {
    id: "ratgeber",
    className: "py-20 md:py-28 px-5 md:px-8 bg-surface-alt relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-end justify-between flex-wrap gap-4 mb-10 md:mb-12"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-brand-deep font-heading font-semibold tracking-[0.16em] uppercase text-xs mb-3 block"
  }, "Ratgeber & Tipps"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-[2.7rem] font-heading font-bold text-content leading-tight"
  }, "Wissen vom Photovoltaik")), /*#__PURE__*/React.createElement("a", {
    href: "blog",
    className: "btn-dark rounded-full px-6 py-3 font-heading text-sm inline-flex items-center gap-2 shrink-0"
  }, "Zum Ratgeber ", /*#__PURE__*/React.createElement(Svg, {
    size: 17,
    sw: 2.2
  }, ICO.arrow))), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
  }, posts.map(([t, d, h, cat]) => /*#__PURE__*/React.createElement("a", {
    key: h,
    href: h,
    className: "reveal group bg-white rounded-2xl border border-black/5 p-6 flex flex-col shadow-[0_18px_44px_-30px_rgba(20,23,28,0.35)] hover:-translate-y-1 hover:shadow-[0_26px_60px_-30px_rgba(20,23,28,0.4)] transition-all duration-300"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11.5px] font-heading font-bold uppercase tracking-wider text-brand-deep mb-2"
  }, cat), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-[1.18rem] text-content leading-snug group-hover:text-brand-deep transition-colors"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "text-content-secondary text-[14.5px] leading-relaxed mt-2 flex-1"
  }, d), /*#__PURE__*/React.createElement("span", {
    className: "mt-4 inline-flex items-center gap-1.5 text-brand-deep font-heading font-semibold text-[14px]"
  }, "Weiterlesen ", /*#__PURE__*/React.createElement(Svg, {
    size: 16,
    sw: 2.2
  }, ICO.arrow)))))));
};

/* ── About ── */
const About = () => /*#__PURE__*/React.createElement("section", {
  id: "ueber-uns",
  className: "py-20 md:py-28 px-5 md:px-8 bg-surface-alt relative overflow-hidden"
}, /*#__PURE__*/React.createElement("div", {
  className: "max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10"
}, /*#__PURE__*/React.createElement("div", {
  className: "reveal-left relative"
}, /*#__PURE__*/React.createElement("div", {
  className: "rounded-[28px] overflow-hidden shadow-2xl ring-1 ring-black/5"
}, /*#__PURE__*/React.createElement("img", {
  src: "img/about-2.jpg",
  alt: "SolaWert im Einsatz in Wuppertal",
  className: "w-full h-[360px] md:h-[480px] object-cover object-[center_20%]"
})), /*#__PURE__*/React.createElement("div", {
  className: "animate-float absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-xl border border-black/5 p-5 max-w-[220px]"
}, /*#__PURE__*/React.createElement("div", {
  className: "flex items-center gap-2 mb-1.5"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-brand-deep"
}, /*#__PURE__*/React.createElement(Svg, {
  size: 22,
  sw: 2
}, ICO.euro)), /*#__PURE__*/React.createElement("span", {
  className: "font-heading font-bold text-content"
}, "Zahlung nach Abnahme")), /*#__PURE__*/React.createElement("p", {
  className: "text-[12px] text-content-secondary leading-snug"
}, "Erst wenn die Anlage läuft und vorgeführt ist, zahlen Sie"))), /*#__PURE__*/React.createElement("div", {
  className: "reveal-right"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-brand-deep font-heading font-semibold tracking-[0.16em] uppercase text-xs mb-3 block"
}, "Über uns"), /*#__PURE__*/React.createElement("h2", {
  className: "text-3xl md:text-[2.6rem] font-heading font-bold text-content leading-tight mb-5"
}, "Ihr Partner für Photovoltaik & Wärmepumpe in NRW"), /*#__PURE__*/React.createElement("div", {
  className: "space-y-4 text-content-secondary leading-relaxed text-[15.5px]"
}, /*#__PURE__*/React.createElement("p", null, "Bei SolaWert stehen Effizienz und Wirtschaftlichkeit an erster Stelle. Inhaber Gegam Sargsian und sein Team planen jede Anlage so, dass das Maximum aus Ihren Gegebenheiten herauskommt, statt nur Standard zu liefern."), /*#__PURE__*/React.createElement("p", null, "Wir achten besonders auf drei Dinge: die optimierte String-Verteilung der Module, deutlich mehr Speicher zum fairen Preis und einen mit Reserve geplanten Wechselrichter. Und anders als viele andere sind wir nach der Montage nicht weg, sondern nehmen uns noch eine Woche Zeit, um Ihre Anlage gemeinsam mit Ihnen feinzujustieren.")), /*#__PURE__*/React.createElement("div", {
  className: "flex items-center gap-4 mt-7 p-4 rounded-2xl bg-white border border-black/5"
}, /*#__PURE__*/React.createElement("img", {
  src: "img/portrait.jpg",
  alt: "Gegam Sargsian",
  className: "w-14 h-14 rounded-full object-cover object-[center_20%]"
}), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "font-heading font-bold text-content"
}, "Gegam Sargsian"), /*#__PURE__*/React.createElement("div", {
  className: "text-sm text-content-secondary"
}, "Inhaber")), /*#__PURE__*/React.createElement("img", {
  src: "img/_blank.png",
  alt: "",
  className: "h-10 w-auto ml-auto",
  onError: e => {
    e.target.style.display = 'none';
  }
})), /*#__PURE__*/React.createElement("div", {
  className: "grid grid-cols-3 gap-4 mt-7"
}, [["30 J.", "Garantie auf Module"], ["0 €", "Anzahlung vorab"], ["1-3", "Tage Montage"]].map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  className: "text-center sm:text-left"
}, /*#__PURE__*/React.createElement("div", {
  className: "text-2xl md:text-3xl font-heading font-bold text-content"
}, n), /*#__PURE__*/React.createElement("div", {
  className: "text-xs md:text-[13px] text-content-secondary"
}, l)))))));

/* ── Values ── */
const Values = () => {
  const vals = [{"ico": ICO.search, "t": "Effizienz zuerst", "d": "Mit optimierter Planung, exakter String-Verteilung und dem richtigen Speicher holen wir das Maximum aus jedem Dach. Wirtschaftlichkeit steht bei uns an erster Stelle."}, {"ico": ICO.euro, "t": "Ehrliche Preise", "d": "Faire Festpreise, keine Anzahlung und keine versteckten Posten. Sie zahlen erst, wenn Ihre Anlage vollständig läuft und vorgeführt ist."}, {"ico": ICO.users, "t": "Betreuung statt Abschied", "d": "Nach der Montage sind wir nicht einfach weg. Eine Woche lang optimieren wir die Einstellungen gemeinsam mit Ihnen, bis wirklich alles passt."}];
  return /*#__PURE__*/React.createElement("section", {
    className: "py-20 md:py-28 px-5 md:px-8 bg-ink-2 text-white relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-grid-dark opacity-50 pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-2xl mx-auto mb-14 reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-brand font-heading font-semibold tracking-[0.16em] uppercase text-xs mb-3 block"
  }, "Unsere Werte"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-[2.7rem] font-heading font-bold leading-tight"
  }, "Unsere Werte, Ihr Vertrauen")), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-3 gap-6"
  }, vals.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "reveal rounded-3xl p-8 bg-white/[0.04] border border-white/10 card-lift",
    style: {
      transitionDelay: i * 0.12 + 's'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 rounded-2xl bg-brand text-brand-text flex items-center justify-center mb-6"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 26,
    sw: 1.8
  }, v.ico)), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-heading font-bold mb-3"
  }, v.t), /*#__PURE__*/React.createElement("p", {
    className: "text-white/60 leading-relaxed text-[15px]"
  }, v.d))))));
};

/* ── Testimonials ── */
const Testimonials = () => {
  const reviews = [{"n": "Markus Hoffmann", "t": "Von der Beratung bis zur fertigen Anlage lief alles reibungslos. Dass wir erst nach der Inbetriebnahme gezahlt haben, hat uns ein richtig gutes Gefühl gegeben."}, {"n": "Sabine Krüger", "t": "Wir hatten mehrere Angebote. Bei SolaWert gab es spürbar mehr Speicher zum gleichen Preis. Die Planung war durchdacht, die Montage absolut sauber."}, {"n": "Thomas Berger", "t": "Photovoltaik und Wärmepumpe aus einer Hand, genau das hatten wir gesucht. Auch die Anmeldung wurde komplett übernommen, das hat uns viel Arbeit erspart."}, {"n": "Andrea Schmitz", "t": "Was mich überzeugt hat: Nach der Montage waren sie nicht weg, sondern haben die Anlage eine Woche lang mit uns optimiert. Das macht sonst keiner."}, {"n": "Peter Wagner", "t": "Für unser Gewerbedach wurde eine passgenaue Lösung durchgerechnet. Die Stromkosten sind seitdem spürbar gesunken."}, {"n": "Julia Neumann", "t": "Kompetent, termintreu und ehrlich beraten. Innerhalb weniger Wochen stand die Anlage. Wir würden jederzeit wieder hier kaufen."}];
  return /*#__PURE__*/React.createElement("section", {
    id: "bewertungen",
    className: "py-20 md:py-28 px-5 md:px-8 bg-white relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-brand-deep font-heading font-semibold tracking-[0.16em] uppercase text-xs mb-3 block"
  }, "Bewertungen"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-[2.7rem] font-heading font-bold text-content leading-tight"
  }, "Das sagen unsere Kunden")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 bg-surface-alt rounded-2xl px-6 py-4 border border-black/5 shrink-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-4xl font-heading font-bold text-content"
  }, "5,0"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Stars, {
    size: 16
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-content-secondary mt-1"
  }, "Zufriedene Kunden in ganz NRW")))), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5"
  }, reviews.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "reveal card-lift bg-surface-alt rounded-3xl p-7 border border-black/5 flex flex-col",
    style: {
      transitionDelay: i % 3 * 0.1 + 's'
    }
  }, /*#__PURE__*/React.createElement(Stars, {
    size: 16,
    className: "mb-4"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-content text-[14.5px] leading-relaxed flex-grow"
  }, r.t), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mt-5 pt-5 border-t border-black/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-full bg-brand/20 text-brand-deep font-heading font-bold flex items-center justify-center"
  }, r.n.charAt(0)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-heading font-semibold text-content text-sm"
  }, r.n), /*#__PURE__*/React.createElement("div", {
    className: "text-[11.5px] text-content-secondary"
  }, "Kunde aus NRW"))))))));
};

/* ── FAQ ── */
const FAQ = () => {
  const faqs = [{"q": "Wie läuft die Zahlung ab? Muss ich etwas anzahlen?", "a": "Nein. Bei uns gibt es keine Anzahlung und keine Vorkasse. Sie zahlen erst nach der vollständigen Inbetriebnahme, wenn wir Ihnen die funktionierende Anlage vorgeführt haben."}, {"q": "Wie schnell bekomme ich einen Termin für den Baubeginn?", "a": "In der Regel ist jede Baustelle innerhalb von 2 bis 4 Wochen terminiert und fertig gebaut. Wir nennen Ihnen bei der Beratung einen konkreten Zeitrahmen."}, {"q": "Wie lange dauert die Montage?", "a": "Je nach Anlage und Umständen wie Wetter dauert die Montage meist nur 1 bis 3 Tage. Sie haben also nur kurz eine Baustelle am Haus."}, {"q": "Welche Garantien gibt es?", "a": "Auf die Solarmodule erhalten Sie 30 Jahre Garantie, auf Wechselrichter und Batteriespeicher jeweils 10 bis 15 Jahre. Sie sind also langfristig abgesichert."}, {"q": "Bauen Sie auch Wärmepumpen?", "a": "Ja. Wir bauen Wärmepumpen genauso schlüsselfertig wie Photovoltaik und bringen beides sinnvoll zusammen, damit Sie mit Ihrem eigenen Strom heizen."}, {"q": "Warum bekomme ich bei Ihnen mehr Speicher?", "a": "Der Speicher ist der entscheidende Effizienzfaktor einer Anlage. Viele bieten bewusst zu wenig an, um ihre Marge zu erhöhen. Wir machen das Gegenteil und geben Ihnen oft rund 60 Prozent mehr Speicher zum gleichen Preis."}, {"q": "In welchem Gebiet sind Sie tätig?", "a": "Unser Fokus liegt auf Nordrhein-Westfalen, von Wuppertal über Solingen und Remscheid bis Düsseldorf und Köln. Auf Wunsch sind wir aber in ganz Deutschland für Sie unterwegs."}];
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    className: "py-20 md:py-28 px-5 md:px-8 bg-surface-alt relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mx-auto relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-14 reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-brand-deep font-heading font-semibold tracking-[0.16em] uppercase text-xs mb-3 block"
  }, "FAQ"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-[2.7rem] font-heading font-bold text-content leading-tight"
  }, "Häufig gestellte Fragen")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, faqs.map((f, i) => /*#__PURE__*/React.createElement("details", {
    key: i,
    className: "faq-item reveal group bg-white rounded-2xl border border-black/5 overflow-hidden",
    style: {
      transitionDelay: i * 0.06 + 's'
    }
  }, /*#__PURE__*/React.createElement("summary", {
    className: "flex items-center justify-between gap-4 p-5 md:px-6"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-semibold text-content text-[15.5px] md:text-base"
  }, f.q), /*#__PURE__*/React.createElement("span", {
    className: "faq-icon text-brand-deep shrink-0"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 22,
    sw: 2
  }, ICO.plus))), /*#__PURE__*/React.createElement("div", {
    className: "faq-body px-5 md:px-6 pb-5 -mt-1 text-content-secondary leading-relaxed text-[14.5px]"
  }, f.a))))));
};

/* ── Contact ── */
const Contact = () => {
  const [sent, setSent] = useState(false);
  const submit = e => {
    e.preventDefault();
    const f = e.target;
    const payload = {
      anrede: f.anrede.value,
      vorname: f.vorname.value.trim(),
      nachname: f.nachname.value.trim(),
      phone: f.telefon.value.trim(),
      email: f.email.value.trim(),
      ort: f.ort.value.trim(),
      message: f.anliegen.value.trim()
    };
    setSent(true);
    try {
      fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).catch(function () {});
    } catch (_e) {}
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "kontakt",
    className: "py-20 md:py-28 px-5 md:px-8 bg-ink text-white relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-grid-dark opacity-50 pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-[-20%] left-[-8%] w-[44%] h-[60%] rounded-full pointer-events-none",
    style: {
      background: "radial-gradient(ellipse, rgba(65,166,54,0.14) 0%, transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-brand font-heading font-semibold tracking-[0.16em] uppercase text-xs mb-3 block"
  }, "Kontakt"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-[2.8rem] font-heading font-bold leading-[1.08] mb-5"
  }, "Jetzt unverbindlich anfragen"), /*#__PURE__*/React.createElement("p", {
    className: "text-white/65 text-lg leading-relaxed mb-8 max-w-lg"
  }, "Lassen Sie sich kostenlos beraten und erfahren Sie, was auf Ihrem Dach möglich ist."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 mb-8"
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:" + PHONE_FEST_TEL,
    className: "flex items-center gap-4 group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-xl bg-brand text-brand-text flex items-center justify-center shrink-0"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 22
  }, ICO.phone)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "block text-white/50 text-xs"
  }, "Telefon"), /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-bold text-lg group-hover:text-brand transition-colors"
  }, PHONE_FEST))), /*#__PURE__*/React.createElement("a", {
    href: "mailto:" + EMAIL,
    className: "flex items-center gap-4 group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 22
  }, ICO.mail)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "block text-white/50 text-xs"
  }, "E-Mail"), /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-semibold text-[15px] group-hover:text-brand transition-colors break-all"
  }, EMAIL)))), /*#__PURE__*/React.createElement("a", {
    href: "#anfrage",
    className: "btn-primary cta-pulse inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 font-heading"
  }, "Unverbindlich Angebot anfragen ", /*#__PURE__*/React.createElement(Svg, {
    size: 18,
    sw: 2.2
  }, ICO.arrow))), /*#__PURE__*/React.createElement("div", {
    className: "reveal-right bg-white/[0.05] border border-white/10 rounded-3xl p-7 md:p-9 backdrop-blur-sm"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    className: "text-center py-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 mx-auto rounded-full bg-brand text-brand-text flex items-center justify-center mb-5"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 32,
    sw: 2.4
  }, ICO.check)), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-heading font-bold mb-2"
  }, "Vielen Dank!"), /*#__PURE__*/React.createElement("p", {
    className: "text-white/65"
  }, "Ihre Anfrage ist eingegangen. Wir melden uns in den meisten Fällen innerhalb von 24 Stunden bei Ihnen."), /*#__PURE__*/React.createElement("a", {
    href: "tel:" + PHONE_FEST_TEL,
    className: "btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 mt-6 font-heading"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 18
  }, ICO.phone), " Lieber direkt anrufen")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-heading font-bold mb-1.5"
  }, "Kostenlosen Rückruf anfordern"), /*#__PURE__*/React.createElement("p", {
    className: "text-white/55 text-sm mb-6"
  }, "Unverbindlich. Wir melden uns schnellstmöglich."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3.5"
  }, /*#__PURE__*/React.createElement("select", {
    className: "field",
    name: "anrede",
    required: true,
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Anrede *"), /*#__PURE__*/React.createElement("option", {
    value: "Frau"
  }, "Frau"), /*#__PURE__*/React.createElement("option", {
    value: "Herr"
  }, "Herr"), /*#__PURE__*/React.createElement("option", {
    value: "Divers"
  }, "Divers")), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 gap-3.5"
  }, /*#__PURE__*/React.createElement("input", {
    className: "field",
    type: "text",
    name: "vorname",
    placeholder: "Vorname *",
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    className: "field",
    type: "text",
    name: "nachname",
    placeholder: "Nachname *",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 gap-3.5"
  }, /*#__PURE__*/React.createElement("input", {
    className: "field",
    type: "tel",
    name: "telefon",
    placeholder: "Telefon *",
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    className: "field",
    type: "email",
    name: "email",
    placeholder: "E-Mail *",
    required: true
  })), /*#__PURE__*/React.createElement("input", {
    className: "field",
    type: "text",
    name: "ort",
    placeholder: "Auftragsort & Straße *",
    required: true
  }), /*#__PURE__*/React.createElement("textarea", {
    className: "field resize-none",
    name: "anliegen",
    rows: "4",
    placeholder: "Wie können wir Ihnen helfen? *",
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn-primary cta-pulse w-full rounded-full py-4 font-heading text-[1.02rem] flex items-center justify-center gap-2"
  }, "Unverbindlich anfragen ", /*#__PURE__*/React.createElement(Svg, {
    size: 18,
    sw: 2.2
  }, ICO.arrow)), /*#__PURE__*/React.createElement("p", {
    className: "text-white/40 text-[11.5px] text-center"
  }, "Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer ", /*#__PURE__*/React.createElement("a", {
    href: "datenschutz",
    className: "underline hover:text-brand"
  }, "Datenschutzerklärung"), " zu."))))));
};

/* ── Sticky mobile call bar ── */
const MobileCallBar = () => /*#__PURE__*/React.createElement("div", {
  className: "mobile-callbar lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-black/10 px-3 py-2.5 flex gap-2.5"
}, /*#__PURE__*/React.createElement("a", {
  href: "tel:" + PHONE_FEST_TEL,
  className: "btn-primary flex-1 rounded-full py-3 font-heading text-sm flex items-center justify-center gap-2"
}, /*#__PURE__*/React.createElement(Svg, {
  size: 17
}, ICO.phone), " Anrufen"), /*#__PURE__*/React.createElement("a", {
  href: "#anfrage",
  className: "btn-dark flex-1 rounded-full py-3 font-heading text-sm flex items-center justify-center gap-2"
}, "Angebot anfragen"));
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
var _fb = document.getElementById('home-static-seo');
if (_fb) _fb.remove();