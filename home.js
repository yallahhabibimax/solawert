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
  sun: React.createElement(React.Fragment, null, React.createElement("circle", { cx: "12", cy: "12", r: "4" }), React.createElement("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" })),
  flame: React.createElement("path", { d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5Z" }),
  bolt: React.createElement("path", { d: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z" }),
  warehouse: React.createElement(React.Fragment, null, React.createElement("path", { d: "M3 21V8l9-4 9 4v13" }), React.createElement("path", { d: "M3 21h18" }), React.createElement("path", { d: "M8 21v-7h8v7" })),
  key: React.createElement(React.Fragment, null, React.createElement("circle", { cx: "8", cy: "16", r: "3" }), React.createElement("path", { d: "M10 14 21 3" }), React.createElement("path", { d: "M18 6l2 2" }), React.createElement("path", { d: "M15 9l1.5 1.5" })),
  drop: React.createElement("path", { d: "M12 2.7l5.66 5.66a8 8 0 1 1-11.31 0L12 2.7Z" }),
  combo: React.createElement(React.Fragment, null, React.createElement("path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" }), React.createElement("path", { d: "M2 12l8.58 3.91a2 2 0 0 0 1.66 0L21 12" }), React.createElement("path", { d: "M2 17l8.58 3.91a2 2 0 0 0 1.66 0L21 17" })),
  arrowLeft: React.createElement(React.Fragment, null, React.createElement("path", { d: "M19 12H5" }), React.createElement("path", { d: "M12 19l-7-7 7-7" })),
  clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", { cx: "12", cy: "12", r: "8" }), /*#__PURE__*/React.createElement("path", { d: "M12 8v4l2.5 2" })),
  pin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", { d: "M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" }), /*#__PURE__*/React.createElement("circle", { cx: "12", cy: "10", r: "2.5" })),
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
  })),
  caret: /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })
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
const LeadQuiz = () => {
  const h = React.createElement;
  const [step, setStep] = useState(0);
  const [oi, setOi] = useState(0);
  const [a, setA] = useState({});
  const [sent, setSent] = useState(false);
  const isWP = a.interesse === "Wärmepumpe";

  const STEPS = [
    { key: "interesse", label: "Interesse", q: ["Was interessiert ", "Sie", "?"], hint: "Wählen Sie Ihr Anliegen. Blättern Sie mit Zurück / Vor durch die Optionen.", opts: [
      { ico: ICO.sun, t: "Photovoltaik", d: "Eine schlüsselfertige PV-Anlage auf Ihrem Dach. Sie erzeugen Ihren Strom selbst und werden unabhängig von steigenden Preisen.", b: ["Bis zu 70 % Autarkie", "+60 % Speicher inklusive", "30 Jahre Garantie"] },
      { ico: ICO.flame, t: "Wärmepumpe", d: "Effizient heizen mit Umweltwärme. Niedrige Heizkosten, ideal kombiniert mit dem eigenen Solarstrom.", b: ["Bis zu 75 % weniger Heizkosten", "Staatlich förderfähig", "Heizen mit eigenem Strom"] },
      { ico: ICO.combo, t: "Beides / Komplettlösung", d: "Photovoltaik, Speicher und Wärmepumpe perfekt aufeinander abgestimmt, alles aus einer Hand.", b: ["Maximale Unabhängigkeit", "Ein Ansprechpartner", "Alles abgestimmt"] } ] },
    { key: "gebaeude", label: "Gebäude", q: ["Um was für ein ", "Gebäude", " geht es?"], hint: "Wählen Sie Ihren Gebäudetyp. Blättern Sie mit Zurück / Vor.", opts: [
      { ico: ICO.home, t: "Einfamilienhaus", d: "Das eigene Dach optimal ausnutzen, von der ersten Planung bis zur fertigen Anlage.", b: ["Ideale Dachnutzung", "Schlüsselfertig montiert", "Zügig montiert"] },
      { ico: ICO.building, t: "Mehrfamilienhaus", d: "Sauberer Strom für mehrere Parteien, sinnvoll geplant und sauber umgesetzt.", b: ["Für mehrere Parteien", "Hohe Eigenverbrauchsquote", "Wirtschaftlich geplant"] },
      { ico: ICO.warehouse, t: "Gewerbe & Halle", d: "Große Dachflächen wirtschaftlich nutzen und die Energiekosten im Betrieb senken.", b: ["Große Flächen genutzt", "Strom, wenn er gebraucht wird", "Spürbar weniger Kosten"] } ] },
    { key: "eigentum", label: "Eigentum", q: ["Wie sind die ", "Eigentums", "verhältnisse?"], hint: "Wählen Sie aus. Blättern Sie mit Zurück / Vor.", opts: [
      { ico: ICO.key, t: "Eigentümer", d: "Als Eigentümer entscheiden Sie frei und profitieren langfristig von Ihrer Anlage.", b: ["Volle Entscheidungsfreiheit", "Langfristige Ersparnis", "Wertsteigerung der Immobilie"] },
      { ico: ICO.users, t: "Mieter", d: "Auch als Mieter gibt es Wege zu eigenem Solarstrom. Wir beraten Sie ehrlich zu den Möglichkeiten.", b: ["Ehrliche Beratung", "Möglichkeiten geprüft", "Unverbindlich klären"] } ] },
    isWP
      ? { key: "detail", label: "Heizung", q: ["Womit ", "heizen", " Sie aktuell?"], hint: "Wählen Sie Ihre aktuelle Heizung. Blättern Sie mit Zurück / Vor.", opts: [
          { ico: ICO.flame, t: "Gas", d: "Steigende Gaspreise treffen Sie direkt. Eine Wärmepumpe macht Sie unabhängiger.", b: ["Unabhängig vom Gaspreis", "Deutlich günstiger heizen", "Förderfähig"] },
          { ico: ICO.drop, t: "Öl", d: "Alte Ölheizungen sind teuer und ineffizient. Zeit für eine moderne Lösung.", b: ["Schluss mit Öl", "Sauber und effizient", "Förderfähig"] },
          { ico: ICO.search, t: "Andere / weiß nicht", d: "Kein Problem. Wir schauen uns Ihre Situation an und finden die passende Lösung.", b: ["Wir prüfen alles", "Ehrliche Einschätzung", "Unverbindlich"] } ] }
      : { key: "detail", label: "Verbrauch", q: ["Wie hoch ist Ihre ", "Stromrechnung", " etwa?"], hint: "Wählen Sie Ihren Bereich. Blättern Sie mit Zurück / Vor.", opts: [
          { ico: ICO.euro, t: "Bis 100 €/Monat", d: "Schon bei kleinerem Verbrauch lohnt sich die eigene Anlage spürbar.", b: ["Sofort weniger Netzbezug", "Passend dimensioniert", "Schnell amortisiert"] },
          { ico: ICO.euro, t: "100 bis 200 €/Monat", d: "In diesem Bereich holen Sie mit eigener PV und Speicher das meiste heraus.", b: ["Hohes Sparpotenzial", "Mehr Speicher inklusive", "Schnelle Amortisation"] },
          { ico: ICO.euro, t: "Über 200 €/Monat", d: "Hoher Verbrauch heißt hohes Sparpotenzial. Hier rechnet sich eine Anlage besonders.", b: ["Maximale Ersparnis", "Große Anlage sinnvoll", "Schnellste Amortisation"] } ] },
    { key: "zeitpunkt", label: "Zeitpunkt", q: ["Wann ", "planen", " Sie die Umsetzung?"], hint: "Wählen Sie Ihren Zeitrahmen. Blättern Sie mit Zurück / Vor.", opts: [
      { ico: ICO.bolt, t: "So schnell wie möglich", d: "Wir terminieren Ihre Baustelle in der Regel innerhalb weniger Wochen.", b: ["Schneller Baubeginn", "Termintreu", "Zügige Montage"] },
      { ico: ICO.clock, t: "In 3 bis 6 Monaten", d: "Genug Zeit für eine durchdachte Planung. Wir begleiten Sie von Anfang an.", b: ["Durchdachte Planung", "Fester Festpreis", "Alles aus einer Hand"] },
      { ico: ICO.search, t: "Erstmal nur informieren", d: "Völlig in Ordnung. Sie bekommen eine ehrliche Einschätzung, ganz unverbindlich.", b: ["Unverbindlich", "Ehrliche Einschätzung", "Kein Verkaufsdruck"] } ] },
    { key: "plz", label: "PLZ", q: ["Wie lautet Ihre ", "Postleitzahl", "?"], hint: "Wir prüfen, ob wir in Ihrer Region tätig sind.", type: "plz" },
    { key: "kontakt", label: "Kontakt", q: ["Wohin dürfen wir uns ", "melden", "?"], hint: "Unverbindlich und kostenlos. Ihre Daten bleiben vertraulich.", type: "contact" }
  ];
  const TOTAL = STEPS.length;
  const cur = STEPS[step];
  const opts = cur.opts || [];
  const N = opts.length;
  const isChoice = !cur.type;
  const pad2 = (n) => (n < 10 ? "0" + n : "" + n);
  const upd = (key, val) => setA(function (p) { return Object.assign({}, p, { [key]: val }); });
  const submit = () => { setSent(true); try { fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(a) }).catch(function () {}); } catch (e) {} };
  const plzOk = /^\d{5}$/.test(a.plz || "");
  const mailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(a.email || "");
  const kontaktOk = (a.anrede === "Herr" || a.anrede === "Frau") && (a.name || "").trim().length > 1 && mailOk && (a.telefon || "").trim().length >= 5;
  const ctaOk = isChoice ? !!a[cur.key] : (cur.type === "plz" ? plzOk : kontaktOk);
  const goBack = () => { if (step > 0) setStep(step - 1); };
  const goNext = () => { if (!ctaOk) return; if (step < TOTAL - 1) setStep(step + 1); else submit(); };
  const pick = (o) => { upd(cur.key, o.t); setTimeout(function () { setStep(function (st) { return st < TOTAL - 1 ? st + 1 : st; }); }, 180); };

  let body;
  if (cur.type === "plz") {
    body = h("input", { className: "nq-input nq-input--c", inputMode: "numeric", maxLength: 5, placeholder: "z. B. 42103", value: a.plz || "", onChange: function (e) { upd("plz", e.target.value.replace(/\D/g, "").slice(0, 5)); } });
  } else if (cur.type === "contact") {
    body = h("div", { className: "nq-fields" },
      h("div", { className: "nq-anrede" }, ["Herr", "Frau"].map(function (an) { return h("button", { key: an, type: "button", className: "nq-anbtn" + (a.anrede === an ? " is-on" : ""), onClick: function () { upd("anrede", an); } }, an); })),
      h("input", { className: "nq-input", placeholder: "Vor- und Nachname", value: a.name || "", onChange: function (e) { upd("name", e.target.value); } }),
      h("input", { className: "nq-input", type: "email", placeholder: "E-Mail", value: a.email || "", onChange: function (e) { upd("email", e.target.value); } }),
      h("input", { className: "nq-input", type: "tel", placeholder: "Telefonnummer", value: a.telefon || "", onChange: function (e) { upd("telefon", e.target.value); } }));
  } else {
    body = h("div", { className: "nq-opts" }, opts.map(function (o, i) {
      var on = a[cur.key] === o.t;
      return h("button", { key: i, type: "button", className: "nq-opt" + (on ? " is-on" : ""), onClick: function () { pick(o); } },
        h("span", { className: "nq-opt__ic" }, h(Svg, { size: 22, sw: 2 }, o.ico)),
        h("span", { className: "nq-opt__t font-heading" }, o.t),
        o.b && o.b[0] ? h("span", { className: "nq-opt__d" }, o.b[0]) : null);
    }));
  }

  const main = sent
    ? h("div", { className: "nq-card nq-done" },
        h("div", { className: "nq-done__disc" }, h(Svg, { size: 40, sw: 2.6 }, ICO.check)),
        h("h3", { className: "nq-done__h font-heading" }, "Vielen Dank, ", h("span", null, ((a.anrede ? a.anrede + " " : "") + (((a.name || "").trim().split(/\s+/).filter(Boolean).pop()) || "")).trim()), "!"),
        h("p", { className: "nq-done__p" }, "Ihre Anfrage ist eingegangen. Wir melden uns in den meisten Fällen innerhalb von 24 Stunden mit einer ehrlichen Einschätzung."))
    : h("div", { className: "nq-card", key: step },
        h("div", { className: "nq-prog" }, h("span", { style: { width: (((step + 1) / TOTAL) * 100) + "%" } })),
        h("div", { className: "nq-steplbl" }, "Schritt " + (step + 1) + " / " + TOTAL),
        h("h3", { className: "nq-q font-heading" }, cur.q[0], h("span", null, cur.q[1]), cur.q[2]),
        h("p", { className: "nq-sub" }, cur.hint),
        body,
        h("div", { className: "nq-nav" },
          step > 0 ? h("button", { type: "button", className: "nq-back", onClick: goBack }, h(Svg, { size: 16, sw: 2 }, ICO.arrowLeft), "Zurück") : h("span", null),
          h("button", { type: "button", className: "nq-next" + (ctaOk ? "" : " is-off"), onClick: goNext }, step === TOTAL - 1 ? "Anfrage senden" : "weiter", h(Svg, { size: 16, sw: 2.2 }, ICO.arrow))));

  return h("section", { id: "anfrage", className: "nq-section" },
    h("div", { className: "nq-wrap" },
      h("div", { className: "nq-head" },
        h("div", { className: "nq-eyebrow" }, h("span", { className: "nq-dot" }), "Kostenlos & unverbindlich"),
        h("h2", { className: "nq-title font-heading" }, "Ihre Solareinschätzung in", h("br", null), h("span", null, "2 Minuten")),
        h("p", { className: "nq-lead" }, "Ein paar kurze Fragen, eine ehrliche Einschätzung und am Ende ein fairer Festpreis ohne Kleingedrucktes.")),
      main,
      h("div", { className: "nq-trust" }, [["check", "100% kostenlos"], ["shield", "DSGVO-konform"], ["clock", "Antwort in 24 h"], ["euro", "Faire Festpreise"]].map(function (it, i) { return h("span", { key: i, className: "nq-trust__i" }, h("span", { className: "nq-trust__ic" }, h(Svg, { size: 15, sw: 2 }, ICO[it[0]])), it[1]); }))));
};

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
            duration: 0.6, ease: EASE, stagger: { each: 0.07, from: 'start' }, overwrite: true
          })
        });
      };
      batch('.reveal', { opacity: 0, y: 48, scale: 0.985, filter: 'blur(14px)' });
      batch('.reveal-left', { opacity: 0, x: -54, filter: 'blur(12px)' });
      batch('.reveal-right', { opacity: 0, x: 54, filter: 'blur(12px)' });
      batch('.reveal-scale', { opacity: 0, scale: 0.92, filter: 'blur(18px)' });
      /* Leistungs-Karten: Award-Level Entrance (gestaffelt) + sanfte Bild-Parallax.
         Kein Karten-Skalieren; das Glow-Highlight laeuft GSAP-unabhaengig im onScroll. */
      gsap.utils.toArray('.lz-card').forEach(card => {
        const img = card.querySelector('.lz-media img');
        const badge = card.querySelector('.lz-badge');
        const txt = card.querySelectorAll('.lz-text > *');
        if (img) gsap.set(img, { scale: 1.16, transformOrigin: 'center center' });
        const tl = gsap.timeline({ scrollTrigger: { trigger: card, start: 'top 82%', once: true } });
        tl.from(card, { autoAlpha: 0, y: 44, filter: 'blur(14px)', duration: 0.65, ease: EASE }, 0);
        if (txt.length) tl.from(txt, { autoAlpha: 0, y: 22, filter: 'blur(6px)', duration: 0.45, ease: EASE, stagger: 0.05 }, 0.15);
        if (badge) tl.from(badge, { autoAlpha: 0, scale: 0.4, duration: 0.4, ease: 'back.out(2)' }, 0.2);
        if (img) gsap.fromTo(img, { yPercent: -6 }, {
          yPercent: 6, ease: 'none',
          scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true }
        });
      });
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
    /* Leistungs-Karte hervorheben, deren Mitte der Bildschirmmitte am naechsten ist */
    const lzCards = Array.from(document.querySelectorAll('.lz-card'));
    let lzTick = false;
    const updateLzActive = () => {
      lzTick = false;
      const mid = window.innerHeight / 2;
      let best = null, bestDist = Infinity;
      lzCards.forEach(c => {
        const r = c.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const dist = Math.abs(center - mid);
        if (r.bottom > 0 && r.top < window.innerHeight && dist < bestDist) { bestDist = dist; best = c; }
      });
      lzCards.forEach(c => c.classList.toggle('lz-active', c === best && bestDist < window.innerHeight * 0.5));
    };
    const onScroll = () => {
      const h = document.documentElement;
      const sp = document.getElementById('scroll-progress');
      if (sp) sp.style.width = h.scrollTop / (h.scrollHeight - h.clientHeight) * 100 + '%';
      if (!lzTick) { lzTick = true; requestAnimationFrame(updateLzActive); }
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    updateLzActive();
    return () => {
      cleanupReveal();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Marquee, null), /*#__PURE__*/React.createElement(Values, null), /*#__PURE__*/React.createElement(LeadQuiz, null), /*#__PURE__*/React.createElement(WerWirSind, null), /*#__PURE__*/React.createElement(SonneSlider, null), /*#__PURE__*/React.createElement(Segments, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(CaseStudies, null), /*#__PURE__*/React.createElement(RegionBand, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(BlogTeaser, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Contact, null)), /*#__PURE__*/React.createElement("div", {
    "data-kaefer": "footer"
  }));
};

/* ── Navbar ── */
/* ── Navbar + Hero (cinematic) ── */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 80);
    f();
    window.addEventListener('scroll', f, {
      passive: true
    });
    return () => window.removeEventListener('scroll', f);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const esc = (e) => { if (e.key === 'Escape' && open) setOpen(false); };
    if (open) document.addEventListener('keydown', esc);
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', esc); };
  }, [open]);
  const leistSub = [["Photovoltaik", "photovoltaik.html", "sun", "Eigener Strom vom Dach"], ["Wärmepumpe", "waermepumpe.html", "flame", "Effizient heizen mit Strom"], ["Stromspeicher", "stromspeicher.html", "bolt", "Mehr Speicher inklusive"], ["Alle Leistungen", "leistungen.html", "combo", "Überblick aller Leistungen", "all"]];
  const einsatzSub = [["Wuppertal", "wuppertal.html", "home", "Hauptstandort"], ["Solingen", "solingen.html", "pin", "13 km · ca. 15 Min."], ["Remscheid", "remscheid.html", "pin", "16 km · ca. 20 Min."], ["Velbert", "velbert.html", "pin", "18 km · ca. 20 Min."], ["Mettmann", "mettmann.html", "pin", "20 km · ca. 25 Min."], ["Haan", "haan.html", "pin", "12 km · ca. 15 Min."], ["Alle Einsatzgebiete", "einsatzgebiete.html", "combo", "Übersicht aller Städte", "all"]];
  const ratgeberSub = [["PV-Kosten 2026", "ratgeber-pv-kosten.html", "euro", "Preise & wann es sich rechnet"], ["PV + Wärmepumpe", "ratgeber-pv-waermepumpe.html", "flame", "Strom und Heizung kombinieren"], ["Speicher richtig wählen", "ratgeber-stromspeicher-groesse.html", "bolt", "Wie groß muss er sein?"], ["PV-Förderung 2026", "ratgeber-pv-foerderung.html", "shield", "Zuschüsse & KfW-Programme"], ["Anlagengröße planen", "ratgeber-pv-groesse.html", "search", "kWp richtig auswählen"], ["Eigenverbrauch maximieren", "ratgeber-eigenverbrauch.html", "sun", "Mehr Sonne, weniger Netz"], ["Alle Ratgeber", "ratgeber.html", "combo", "Übersicht aller Artikel", "all"]];
  const links = [["Start", "#top"], ["Leistungen", "leistungen.html", leistSub], ["Einsatzgebiete", "einsatzgebiete.html", einsatzSub], ["Ratgeber", "ratgeber.html", ratgeberSub], ["Über uns", "ueber-uns.html"], ["Kontakt", "kontakt.html"]];
  return /*#__PURE__*/React.createElement("nav", {
    className: "sw-navwrap" + (scrolled ? " scrolled" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "sw-navpill2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sw-navinner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "flex items-center shrink-0",
    style: {
      gap: "0.2rem"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/logo-sw-light.png?v=1782141000",
    alt: "SW Photovoltaik & Solar Wuppertal",
    className: "sw-navlogo",
    style: { height: "64px", width: "auto", transform: "translate(-6px,-6px)", filter: "drop-shadow(0 2px 6px rgba(0,0,0,.55)) drop-shadow(0 0 18px rgba(245,179,1,.18))" }
  })), /*#__PURE__*/React.createElement("div", {
    className: "sw-navlinks hidden lg:flex"
  }, links.map(([t, h, sub], i) => sub ? /*#__PURE__*/React.createElement("div", {
    key: h,
    className: "sw-navitem"
  }, /*#__PURE__*/React.createElement("a", {
    href: h,
    className: "sw-navlink sw-navlink--has"
  }, t, /*#__PURE__*/React.createElement("svg", {
    className: "sw-caret",
    viewBox: "0 0 24 24",
    width: 14,
    height: 14,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.4,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sw-dropdown"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sw-dd-head"
  }, "Unsere " + t), sub.map(([st, sh, ico, ssub, all]) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: sh
  }, all ? /*#__PURE__*/React.createElement("div", {
    className: "sw-dd-divider"
  }) : null, /*#__PURE__*/React.createElement("a", {
    href: sh,
    className: "sw-dd-item" + (all ? " sw-dd-all" : "")
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw-dd-ico"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 19,
    sw: 2
  }, ICO[ico])), /*#__PURE__*/React.createElement("span", {
    className: "sw-dd-tx"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw-dd-tt"
  }, st), /*#__PURE__*/React.createElement("span", {
    className: "sw-dd-sub"
  }, ssub)), /*#__PURE__*/React.createElement("span", {
    className: "sw-dd-arrow"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 16,
    sw: 2.2
  }, ICO.arrow))))))) : /*#__PURE__*/React.createElement("a", {
    key: h,
    href: h,
    className: "sw-navlink" + (i === 0 ? " active" : "")
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#anfrage",
    className: "sw-nav-cta hidden lg:inline-flex"
  }, "Angebot anfragen ", /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement(Svg, {
    size: 14,
    sw: 2.4
  }, ICO.arrow))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    className: "lg:hidden sw-navburger" + (open ? " is-open" : ""),
    "aria-label": "Menü",
    "aria-expanded": open ? "true" : "false"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))))), /*#__PURE__*/React.createElement("div", {
    className: "sw-mobilemenu" + (open ? " open" : "")
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw-mobile-eyebrow"
  }, "Navigation"), /*#__PURE__*/React.createElement("div", {
    className: "sw-mobile-links"
  }, links.map(([t, h, sub]) => sub ? /*#__PURE__*/React.createElement("details", {
    key: h,
    className: "sw-mobile-row sw-mobile-acc"
  }, /*#__PURE__*/React.createElement("summary", {
    className: "sw-mobile-acc__sum"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw-mobile-acc__lbl"
  }, t), /*#__PURE__*/React.createElement("span", {
    className: "sw-mobile-acc__ico",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 22,
    sw: 2.4
  }, ICO.caret))), /*#__PURE__*/React.createElement("div", {
    className: "sw-mobile-acc__body"
  }, sub.map(([st, sh]) => /*#__PURE__*/React.createElement("a", {
    key: sh,
    href: sh,
    onClick: () => setOpen(false),
    className: "sw-mobilelink--sub"
  }, st)))) : /*#__PURE__*/React.createElement("a", {
    key: h,
    href: h,
    onClick: () => setOpen(false),
    className: "sw-mobilelink sw-mobile-row"
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "sw-mobile-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sw-mobile-btns"
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:" + PHONE_FEST_TEL,
    onClick: () => setOpen(false),
    className: "sw-mobile-btn sw-mobile-btn--ghost"
  }, /*#__PURE__*/React.createElement(Svg, { size: 16, sw: 2 }, ICO.phone), " Anrufen"), /*#__PURE__*/React.createElement("a", {
    href: "#anfrage",
    onClick: () => setOpen(false),
    className: "sw-mobile-btn sw-mobile-btn--primary"
  }, "Angebot anfragen ", /*#__PURE__*/React.createElement(Svg, { size: 16, sw: 2.4 }, ICO.arrow))), /*#__PURE__*/React.createElement("div", {
    className: "sw-mobile-meta"
  }, /*#__PURE__*/React.createElement("div", { className: "sw-mobile-meta__row" }, /*#__PURE__*/React.createElement(Svg, { size: 13, sw: 2 }, ICO.phone), /*#__PURE__*/React.createElement("span", null, PHONE_FEST)), /*#__PURE__*/React.createElement("div", { className: "sw-mobile-meta__row" }, /*#__PURE__*/React.createElement(Svg, { size: 13, sw: 2 }, ICO.mail), /*#__PURE__*/React.createElement("span", null, EMAIL)), /*#__PURE__*/React.createElement("div", { className: "sw-mobile-meta__row" }, /*#__PURE__*/React.createElement(Svg, { size: 13, sw: 2 }, ICO.pin), /*#__PURE__*/React.createElement("span", null, "Friedrich-Ebert-Str. 55, 42103 Wuppertal"))))));
};
const Hero = () => {
  useEffect(() => {
    if (typeof gsap !== 'undefined') {
      gsap.from('.hero-title', {
        y: 40,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        delay: 0.1
      });
      gsap.from('.hero-el', {
        y: 28,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.35
      });
    }
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "sw-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sw-hero__card"
  }, /*#__PURE__*/React.createElement("video", {
    className: "sw-hero__img",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "auto",
    poster: "img/hero-poster.jpg?v=1782000008"
  }, /*#__PURE__*/React.createElement("source", {
    src: "video/hero.mp4?v=1782000008",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sw-hero__veil sw-hero__veil--v"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sw-hero__veil sw-hero__veil--h"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sw-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sw-hero__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sw-hero__bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sw-hero__left"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "hero-el sw-hero__sub"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-kw"
  }, "Photovoltaik"), " &", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "hero-kw"
  }, "Wärmepumpe"), /*#__PURE__*/React.createElement("br", null), "in Wuppertal"), /*#__PURE__*/React.createElement("p", {
    className: "hero-el sw-hero__lead"
  }, "Photovoltaik und Wärmepumpe schlüsselfertig in Wuppertal und ganz NRW \u2014 fair, ehrlich, ohne Anzahlung."), /*#__PURE__*/React.createElement("div", {
    className: "hero-el sw-cta-row"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#anfrage",
    className: "sw-cta"
  }, "Jetzt starten", /*#__PURE__*/React.createElement("span", {
    className: "sw-cta__ico"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 17,
    sw: 2.2
  }, ICO.arrow))), /*#__PURE__*/React.createElement("a", {
    href: "tel:" + PHONE_FEST_TEL,
    className: "sw-cta-ghost"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 18,
    sw: 2
  }, ICO.phone), "Anrufen")), /*#__PURE__*/React.createElement("div", {
    className: "hero-el hero-services"
  }, [["Photovoltaik", ICO.sun], ["Wärmepumpe", ICO.flame], ["Stromspeicher", ICO.bolt], ["Schlüsselfertig", ICO.key]].map(function (s, si) {
    return /*#__PURE__*/React.createElement("div", { key: si, className: "hero-srv" }, /*#__PURE__*/React.createElement("span", { className: "hero-srv__ic" }, /*#__PURE__*/React.createElement(Svg, { size: 22, sw: 2 }, s[1])), /*#__PURE__*/React.createElement("span", { className: "hero-srv__t" }, s[0]));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hero-el sw-hero__right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sw-founder"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sw-founder__top"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/inhaber.png",
    alt: "Inhaber von SolaWert"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sw-founder__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sw-founder__name"
  }, "Max Mustermann"), /*#__PURE__*/React.createElement("div", {
    className: "sw-founder__role"
  }, "Inhaber · SolaWert"), /*#__PURE__*/React.createElement("div", {
    className: "sw-founder__stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sw-founder__stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "500+"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Projekte")), /*#__PURE__*/React.createElement("div", {
    className: "sw-founder__stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "4,9"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Bewertung")), /*#__PURE__*/React.createElement("div", {
    className: "sw-founder__stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "0 €"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Anzahlung"))), /*#__PURE__*/React.createElement("div", {
    className: "sw-founder__rev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw-founder__score"
  }, "4,9"), /*#__PURE__*/React.createElement(Stars, {
    size: 13
  }), /*#__PURE__*/React.createElement("span", {
    className: "sw-founder__based"
  }, "Basierend auf echten Kundenbewertungen")))))))));
};

/* ── Marquee ── */
const Marquee = () => {
  const items = ["Faire Festpreise", "Mehr Speicher zum gleichen Preis", "Photovoltaik & Wärmepumpe", "30 Jahre Garantie auf Module", "Zügige Montage", "Eine Woche Nachoptimierung", "Schlüsselfertig aus einer Hand", "In ganz NRW im Einsatz"];
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
  const items = [{"ico": ICO.euro, "title": "Klarer Festpreis, keine Überraschungen", "desc": "Sie bekommen vorab einen festen Preis, schwarz auf weiß. Keine versteckten Posten und keine Nachforderungen, nachdem die Anlage läuft."}, {"ico": ICO.leaf, "title": "Mehr Speicher zum gleichen Preis", "desc": "Der Speicher entscheidet über die Effizienz Ihrer Anlage. Wo andere knausern, um ihre Marge zu erhöhen, geben wir Ihnen oft rund 60 Prozent mehr Speicher zum gleichen Preis. Weder zu wenig noch zu viel, sondern genau passend."}, {"ico": ICO.search, "title": "Wir holen das Maximum heraus", "desc": "Optimierte String-Verteilung, sauber berechnete Spannung und Strom, ein leicht überdimensionierter Wechselrichter mit Reserve für die Zukunft. Wir behandeln jedes Projekt wie unser eigenes Zuhause."}];
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
    className: "text-3xl md:text-[2.7rem] font-heading font-black text-content leading-tight"
  }, "Warum ", React.createElement("span", { style: { color: "#F5B301" } }, "SolaWert"), " die richtige Wahl ist")), /*#__PURE__*/React.createElement("div", {
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

/* ── WerWirSind (Intro-Teaser, 3. Section) ── */
const WerWirSind = () => {
  const cards = [{
    ico: ICO.shield,
    title: "Zertifizierte Experten",
    desc: "Erfahrene Solar-Fachkräfte und lizenzierte Technik aus einer Hand."
  }, {
    ico: ICO.leaf,
    title: "Mehr Speicher inklusive",
    desc: "Oft rund 60 Prozent mehr Speicher zum gleichen Preis, genau passend."
  }, {
    ico: ICO.check,
    title: "Schlüsselfertige Montage",
    desc: "Von der Anfrage bis zur Inbetriebnahme zügig erledigt."
  }, {
    ico: ICO.euro,
    title: "Zahlung nach Abnahme",
    desc: "Keine Vorkasse. Sie zahlen erst, wenn Ihre Anlage nachweislich läuft."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "wer-wir-sind",
    className: "py-20 md:py-28 px-5 md:px-8 bg-white relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal-left spot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-[28px] overflow-hidden shadow-2xl ring-1 ring-black/5 spot-item"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/projekt-1.jpg?v=1782000013",
    alt: "SolaWert Monteure bei der Montage einer Photovoltaik-Anlage in NRW",
    className: "w-full object-cover",
    style: {
      height: "480px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4 mt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 spot-item"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/projekt-2.jpg?v=1782000013",
    alt: "Photovoltaik-Module auf einem Wohnhausdach in Nahaufnahme",
    className: "w-full object-cover",
    style: {
      height: "232px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 spot-item"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/projekt-3.jpg?v=1782000013",
    alt: "Wechselrichter und Stromspeicher einer SolaWert-Anlage",
    className: "w-full object-cover",
    style: {
      height: "232px"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "reveal-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-brand-deep font-heading font-semibold tracking-[0.16em] uppercase text-xs mb-3 block"
  }, "Wer wir sind"), /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl md:text-3xl font-heading font-bold text-content leading-snug tracking-tight"
  }, "Wir liefern nachhaltige und bezahlbare Solarlösungen für Häuser und Betriebe ", /*#__PURE__*/React.createElement("span", {
    className: "text-content-secondary font-medium"
  }, "und holen mit durchdachter Planung das Maximum aus jedem Dach, mehr Speicher zum gleichen Preis, Zahlung erst, wenn alles läuft.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-5 mt-7"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#anfrage",
    className: "btn-primary rounded-full px-7 py-3.5 font-heading inline-flex items-center gap-2.5"
  }, "Angebot anfordern ", /*#__PURE__*/React.createElement(Svg, {
    size: 18,
    sw: 2
  }, ICO.arrow)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement(Stars, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[13px] text-content-secondary"
  }, "4,9 · 500+ zufriedene Kunden in NRW"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
  }, cards.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "reveal rounded-2xl p-5",
    style: {
      transitionDelay: i * 0.08 + 's',
      background: "#2A2E36",
      border: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl flex items-center justify-center mb-2.5",
    style: {
      background: "rgba(245,179,1,0.14)",
      color: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 20,
    sw: 1.8
  }, c.ico)), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold mb-1.5 text-[15.5px] tracking-tight",
    style: {
      color: "#fff"
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "leading-snug text-[13px]",
    style: {
      color: "rgba(255,255,255,0.62)"
    }
  }, c.desc)))))));
};

/* ── SonneSlider (dunkle Leistungs-Section, durchblätterbar) ── */
const SonneSlider = () => {
  const slides = [{
    img: "img/leistung-pv.jpg?v=1782000016",
    name: "Photovoltaik aus einer Hand",
    tag: "Privat & Gewerbe",
    desc: "Komplette PV-Anlage für Ihr Dach, von der Planung über die Montage bis zur Anmeldung. Am Ende nutzen Sie nur noch Ihren eigenen Strom.",
    foot: "Zum Festpreis",
    sub: "Zahlung nach Abnahme"
  }, {
    img: "img/leistung-waermepumpe.png?v=1782000016",
    name: "Wärmepumpe komplett installiert",
    tag: "Privat & Gewerbe",
    desc: "Moderne Wärmepumpen, komplett geplant und installiert. Heizung und Photovoltaik sinnvoll kombiniert, damit Sie mit eigenem Strom günstig heizen.",
    foot: "Bis 70 %",
    sub: "Förderung möglich"
  }, {
    img: "img/leistung-speicher2.png?v=1782000018",
    name: "Stromspeicher mit mehr Kapazität",
    tag: "Mehr Speicher",
    desc: "Deutlich mehr Speicher zum gleichen Preis, exakt auf Ihren Verbrauch dimensioniert. So nutzen Sie Ihren Solarstrom auch abends und nachts.",
    foot: "+60 %",
    sub: "mehr Speicher inklusive"
  }];
  const W = a => "rgba(255,255,255," + a + ")";
  const row = (s, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "lz-card" + (idx % 2 ? " lz-card--rev" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-badge",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-badge__num"
  }, String(idx + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    className: "lz-badge__tot"
  }, "/ " + String(slides.length).padStart(2, "0"))), /*#__PURE__*/React.createElement("div", {
    className: "lz-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-tag"
  }, s.tag), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl md:text-[2rem] font-heading font-black leading-tight tracking-tight mb-4",
    style: {
      color: "#fff"
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    className: "text-base leading-relaxed",
    style: {
      color: "#fff",
      maxWidth: "32rem"
    }
  }, s.desc), /*#__PURE__*/React.createElement("div", {
    className: "lz-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-stat__val"
  }, s.foot), /*#__PURE__*/React.createElement("span", {
    className: "lz-stat__sub"
  }, s.sub))), /*#__PURE__*/React.createElement("div", {
    className: "lz-media"
  }, /*#__PURE__*/React.createElement("img", {
    src: s.img,
    alt: s.name
  }))));
  return /*#__PURE__*/React.createElement("section", {
    id: "leistungen",
    className: "py-20 md:py-28 px-5 md:px-8 relative overflow-hidden",
    style: {
      background: "#2A2E36"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute pointer-events-none",
    "aria-hidden": "true",
    style: {
      top: "-14%",
      right: "-6%",
      width: "560px",
      height: "560px",
      background: "radial-gradient(circle, rgba(245,179,1,0.22) 0%, rgba(245,179,1,0.06) 38%, transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl mb-16 md:mb-20 reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-semibold uppercase text-xs mb-4 block tracking-[0.16em]",
    style: {
      color: "var(--accent)"
    }
  }, "Unsere Leistungen"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-[2.7rem] font-heading font-black leading-tight tracking-tight mb-5",
    style: {
      color: "#fff"
    }
  }, "Wie wir Ihnen helfen, die ", React.createElement("span", { style: { color: "#F5B301" } }, "Kraft der Sonne"), " zu nutzen"), /*#__PURE__*/React.createElement("p", {
    className: "text-base md:text-lg leading-relaxed",
    style: {
      color: "#fff"
    }
  }, "Von der Effizienz-Planung bis zur fertigen Anlage. Photovoltaik, Wärmepumpe und Speicher schlüsselfertig aus einer Hand. Wir behandeln jedes Projekt wie unser eigenes Zuhause.")), /*#__PURE__*/React.createElement("div", {
    className: "lz-rows"
  }, slides.map(row)), /*#__PURE__*/React.createElement("div", {
    className: "text-center reveal",
    style: {
      marginTop: "5rem"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-lg md:text-xl font-heading font-bold leading-snug max-w-2xl mx-auto",
    style: {
      color: "#fff",
      marginBottom: "2.25rem"
    }
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
    className: "rounded-full px-6 py-4 font-heading inline-flex items-center gap-2.5 transition-colors",
    style: {
      border: "1px solid " + W(".2"),
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 18
  }, ICO.phone), " ", PHONE_FEST)))));
};

/* ── Segments ── */
const Segments = () => {
  const card = (ico, title, desc, points, img) => /*#__PURE__*/React.createElement("div", {
    className: "seg-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "seg-card__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: title,
    className: "seg-card__img"
  }), /*#__PURE__*/React.createElement("span", {
    className: "seg-card__icon"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 23,
    sw: 1.9
  }, ico))), /*#__PURE__*/React.createElement("div", {
    className: "seg-card__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "seg-card__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "seg-card__desc"
  }, desc), /*#__PURE__*/React.createElement("ul", {
    className: "seg-card__list"
  }, points.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "seg-card__li"
  }, /*#__PURE__*/React.createElement("span", {
    className: "seg-card__check"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 17,
    sw: 2.6
  }, ICO.check)), p))), /*#__PURE__*/React.createElement("a", {
    href: "#anfrage",
    className: "seg-card__link"
  }, "Angebot anfordern ", /*#__PURE__*/React.createElement(Svg, {
    size: 16,
    sw: 2.4
  }, ICO.arrow))));
  return /*#__PURE__*/React.createElement("section", {
    className: "seg-section px-5 md:px-8 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "seg-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "seg-eyebrow"
  }, "Für jeden Bedarf"), /*#__PURE__*/React.createElement("h2", {
    className: "seg-title"
  }, "Für Privatkunden ", /*#__PURE__*/React.createElement("span", {
    className: "seg-amp"
  }, "&"), " Geschäftskunden")), /*#__PURE__*/React.createElement("div", {
    className: "seg-grid reveal"
  }, card(ICO.home, "Für Privatkunden", "Machen Sie Ihren eigenen Strom, heizen Sie mit der Wärmepumpe und werden Sie unabhängiger von steigenden Preisen.", ["Eigenheim, Doppelhaus & Neubau", "Photovoltaik, Speicher & Wärmepumpe", "Oft mehr Speicher zum gleichen Preis"], "img/privatkunden.jpg?v=1782170016"), card(ICO.building, "Für Geschäftskunden", "Senken Sie Ihre Energiekosten, nutzen Sie Ihre Dachflächen wirtschaftlich aus und sichern Sie sich gegen steigende Strompreise ab.", ["Gewerbe- & Industriedächer", "Hohe Eigenverbrauchsquote", "Wirtschaftlich durchgerechnet"], "img/firmendach.jpg?v=1782170099"))));
};

/* ── Process ── */
const Process = () => {
  const steps = [{"n": "01", "ico": ICO.phone, "t": "Beratung & Dachcheck", "d": "Wir schauen uns Ihr Dach und Ihren Verbrauch an und beraten Sie unverbindlich und kostenlos zu den Möglichkeiten."}, {"n": "02", "ico": ICO.search, "t": "Effizienz-Planung & Festpreis", "d": "String-Verteilung, Speicher und Wechselrichter werden exakt berechnet. Sie erhalten ein transparentes Festpreisangebot ohne versteckte Kosten."}, {"n": "03", "ico": ICO.home, "t": "Montage zügig erledigt", "d": "Innerhalb von 2 bis 4 Wochen ist Ihre Baustelle terminiert. Die Montage selbst läuft zügig, je nach Größe und Dachform unterschiedlich lang."}, {"n": "04", "ico": ICO.shield, "t": "Inbetriebnahme & Nachoptimierung", "d": "Wir nehmen die Anlage in Betrieb und feilen eine Woche lang gemeinsam mit Ihnen an den Einstellungen. Erst danach zahlen Sie."}];
  return /*#__PURE__*/React.createElement("section", {
    id: "ablauf",
    className: "py-20 md:py-28 px-5 md:px-8 bg-ink text-white relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 opacity-60 pointer-events-none",
    style: { display: "none" }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-[-20%] right-[-10%] w-[40%] h-[60%] rounded-full pointer-events-none",
    style: {
      background: "radial-gradient(ellipse, rgba(245,179,1,0.12) 0%, transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl mb-14 reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-brand font-heading font-semibold tracking-[0.16em] uppercase text-xs mb-3 block"
  }, "So einfach geht's"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-[2.7rem] font-heading font-black leading-tight mb-4"
  }, "In 4 Schritten zu Ihrer ", React.createElement("span", { style: { color: "#F5B301" } }, "Solaranlage")), /*#__PURE__*/React.createElement("p", {
    className: "text-white/60 text-lg"
  }, "Von der ersten Anfrage bis zur fertigen Arbeit, klar, schnell und ohne Stress für Sie.")), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "reveal sw-value rounded-3xl p-7",
    style: {
      transitionDelay: i * 0.1 + 's'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw-value__num",
    "aria-hidden": "true"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "sw-value__ico w-12 h-12 rounded-xl bg-brand text-brand-text flex items-center justify-center mb-5 relative z-10"
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
  const cases = [{
    img: "img/cases/efh-pv.jpg", tag: "Einfamilienhaus", ort: "Wuppertal", t: "Einfamilienhaus in Wuppertal",
    p: "Die Stromrechnung stieg Jahr für Jahr, während das große Satteldach ungenutzt in der Sonne lag und keinen Beitrag zum Haushalt leistete.",
    l: "Eine schlüsselfertige Anlage auf der Sonnenseite. Heute kommt der Großteil des Tagesstroms vom eigenen Dach."
  }, {
    img: "img/cases/komplett-pv.jpg", tag: "Schlüsselfertig", ort: "Remscheid", t: "Alles aus einer Hand in Remscheid",
    p: "Drei Firmen hatten Angebote gemacht, doch bei jeder Rückfrage schob einer die Verantwortung auf den anderen.",
    l: "Bei uns kam alles aus einer Hand: Planung, Montage, Elektrik und Anmeldung. Ein Ansprechpartner, kein Hin und Her."
  }, {
    img: "img/cases/doppelhaus-pv.jpg", tag: "Doppelhaus", ort: "Velbert", t: "Doppelhaushälfte in Velbert",
    p: "Eine knapp bemessene Dachfläche bei gleichzeitig dem Wunsch nach möglichst viel Ertrag aus der Anlage.",
    l: "Mit passender Modulwahl und durchdachter Belegung haben wir die vorhandene Fläche bis in die Ecken ausgereizt."
  }, {
    img: "img/cases/speicher-technik.jpg", tag: "Speicher-Nachrüstung", ort: "Solingen", t: "Speicher-Nachrüstung in Solingen",
    p: "Tagsüber lief die Anlage stark, doch abends kam der Strom wieder teuer aus dem öffentlichen Netz zurück.",
    l: "Hybrid-Wechselrichter und passender Speicher nachgerüstet. Der Sonnenstrom deckt jetzt auch Abend und Nacht."
  }, {
    img: "img/cases/bungalow-carport.jpg", tag: "Neubau", ort: "Mettmann", t: "Bungalow mit Carport in Mettmann",
    p: "Der frisch gebaute Bungalow verbrauchte vom ersten Tag an Strom, der komplett teuer aus dem Netz kam.",
    l: "PV auf Haus und Carport direkt mitgeplant und schlüsselfertig gebaut. Eigener Strom schon ab dem ersten Tag."
  }, {
    img: "img/cases/schwarze-module.jpg?v=1782170021", tag: "Photovoltaik", ort: "Wülfrath", t: "Schwarze Module in Wülfrath",
    p: "Die Eigentümer wollten eigenen Strom, fürchteten aber, dass auffällige Module das Haus verschandeln würden.",
    l: "Vollschwarze Module, sauber um Kamin und Dachfenster verlegt. Optisch ruhig und beim Ertrag trotzdem ganz vorne."
  }];
  return React.createElement("section", {
    id: "referenzen",
    className: "py-20 md:py-28 px-5 md:px-8 bg-white relative"
  }, React.createElement("div", {
    className: "max-w-7xl mx-auto relative z-10"
  }, React.createElement("div", {
    className: "max-w-2xl mx-auto text-center mb-12 md:mb-14 reveal"
  }, React.createElement("h2", {
    className: "text-3xl md:text-[2.7rem] font-heading font-black text-content leading-tight mb-4"
  }, "Vom Problem zur ", React.createElement("span", { style: { color: "#F5B301" } }, "Lösung")), React.createElement("p", {
    className: "text-content-secondary text-lg"
  }, "Jedes Projekt beginnt mit einer Herausforderung. So haben wir sie in NRW gelöst.")), React.createElement("div", {
    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 spot"
  }, cases.map((c, i) => React.createElement("div", {
    key: i,
    className: "reveal bg-white rounded-3xl overflow-hidden flex flex-col case-card",
    style: { transitionDelay: i % 3 * 0.1 + "s" }
  }, React.createElement("div", {
    className: "relative case-media"
  }, React.createElement("img", {
    src: c.img, alt: c.t, className: "w-full object-cover", style: { height: "190px" }
  }), React.createElement("span", {
    className: "absolute top-3 left-3 px-3 py-1 rounded-full font-heading font-bold uppercase tracking-wider text-[10.5px]",
    style: { background: "#F5B301", color: "#1A1402" }
  }, c.tag)), React.createElement("div", {
    className: "p-6 flex flex-col gap-3.5 flex-grow"
  }, React.createElement("div", { className: "case-head" }, React.createElement("div", {
    className: "text-[12px] text-content-secondary mb-1"
  }, c.ort), React.createElement("h3", {
    className: "font-heading font-bold text-content leading-tight text-lg"
  }, c.t)), React.createElement("div", {
    className: "case-steps"
  }, React.createElement("div", {
    className: "case-step"
  }, React.createElement("span", {
    className: "case-step__dot",
    style: { background: "#EF4444" }
  }), React.createElement("div", {
    className: "case-step__body"
  }, React.createElement("span", {
    className: "block mb-1.5 text-[10.5px] font-heading font-bold tracking-wider uppercase",
    style: { color: "#EF4444" }
  }, "Problem"), React.createElement("p", {
    className: "text-content-secondary text-[13.5px] leading-relaxed case-problem"
  }, c.p))), React.createElement("div", {
    className: "case-step"
  }, React.createElement("span", {
    className: "case-step__dot",
    style: { background: "#16A34A" }
  }), React.createElement("div", {
    className: "case-step__body"
  }, React.createElement("span", {
    className: "block mb-1.5 text-[10.5px] font-heading font-bold tracking-wider uppercase", style: { color: "#16A34A" }
  }, "Lösung"), React.createElement("p", {
    className: "text-content text-[13.5px] leading-relaxed"
  }, c.l))))))))));
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
    className: "px-3 md:px-5 pt-10 md:pt-12 pb-12 md:pb-16 bg-ink"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto",
    style: { maxWidth: "1280px" }
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative rounded-[28px] overflow-hidden reveal-scale",
    style: { minHeight: "clamp(380px, 46vh, 500px)", display: "flex", alignItems: "center" }
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/einsatz-team.jpg?v=1782000017",
    alt: "SolaWert montiert eine Photovoltaik-Anlage in NRW",
    className: "absolute inset-0 w-full h-full object-cover"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0",
    style: { background: "linear-gradient(180deg, rgba(21,24,29,.5) 0%, rgba(21,24,29,.8) 100%)" }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 px-8 md:px-14 py-10 md:py-14 max-w-2xl mx-auto text-center text-white"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-brand font-heading font-semibold tracking-[0.16em] uppercase text-xs mb-3 block"
  }, "Einsatzgebiet"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-[2.6rem] font-heading font-black leading-[1.1] mb-5"
  }, "In ", React.createElement("span", { style: { color: "#F5B301" } }, "Wuppertal"), " zu Hause, in ganz NRW im Einsatz"), /*#__PURE__*/React.createElement("p", {
    className: "text-white/75 text-lg leading-relaxed mb-8"
  }, "Unseren Sitz haben wir in Wuppertal. Geplant und montiert wird in ganz Nordrhein-Westfalen, auf Wunsch sind wir auch deutschlandweit für Sie unterwegs."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-center gap-3"
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
  }, ICO.arrow)))))));
};

/* ── Blog / Ratgeber-Teaser ── */
const BlogTeaser = () => {
  const posts = [
    ["Was kostet eine Photovoltaik-Anlage 2026?", "Preise, Förderung und ab wann sich Ihre Anlage rechnet, transparent erklärt.", "Kosten", "img/leistung-pv.jpg", "ratgeber-pv-kosten.html"],
    ["Photovoltaik und Wärmepumpe kombinieren", "Warum beides zusammen am meisten bringt und wie Sie mit eigenem Strom heizen.", "Wärmepumpe", "img/leistung-waermepumpe.png", "ratgeber-pv-waermepumpe.html"],
    ["Wie viel Stromspeicher brauche ich wirklich?", "Den Speicher richtig dimensionieren, damit der Sonnenstrom auch abends reicht.", "Speicher", "img/leistung-speicher.jpg", "ratgeber-stromspeicher-groesse.html"],
    ["Photovoltaik-Förderung 2026: Welche Zuschüsse gibt es?", "KfW, Einspeisevergütung und steuerliche Vorteile, übersichtlich für Eigenheim und Gewerbe.", "Förderung", "img/leistung-effizienz.jpg", "ratgeber-pv-foerderung.html"],
    ["Wie groß muss meine Photovoltaik-Anlage sein?", "Verbrauch, Dachfläche und kWp richtig zusammenbringen, damit nichts verschenkt wird.", "Planung", "img/leistung-effizienz-haus.jpg", "ratgeber-pv-groesse.html"],
    ["Eigenverbrauch maximieren: Mehr aus Ihrer PV-Anlage", "Wie Sie mit Speicher, Wärmepumpe und Steuerung mehr Sonnenstrom selbst nutzen.", "Wirtschaftlichkeit", "img/leistung-monitoring.png", "ratgeber-eigenverbrauch.html"]
  ];
  return React.createElement("section", {
    id: "ratgeber",
    className: "py-20 md:py-28 px-5 md:px-8 relative",
    style: { background: "#FBF6E9" }
  }, React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, React.createElement("div", {
    className: "max-w-2xl mb-10 md:mb-12 reveal"
  }, React.createElement("span", {
    className: "text-brand-deep font-heading font-semibold tracking-[0.16em] uppercase text-xs mb-3 block"
  }, "Ratgeber & Tipps"), React.createElement("h2", {
    className: "text-3xl md:text-[2.7rem] font-heading font-black text-content leading-tight"
  }, "Wissen rund um ", React.createElement("span", { style: { color: "#F5B301" } }, "Photovoltaik"))), React.createElement("div", {
    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
  }, posts.map(function (post, i) {
    var t = post[0], d = post[1], cat = post[2], img = post[3], href = post[4] || "#anfrage";
    return React.createElement("a", { key: i, href: href, className: "rg-card reveal" }, React.createElement("div", { className: "rg-inner" }, React.createElement("div", { className: "rg-imgwrap" }, React.createElement("img", { src: img, alt: t, className: "rg-img" }), React.createElement("div", { className: "rg-shade" }), React.createElement("span", { className: "rg-cat" }, cat), React.createElement("span", { className: "rg-go" }, React.createElement(Svg, { size: 18, sw: 2.4 }, ICO.arrow))), React.createElement("div", { className: "rg-body" }, React.createElement("h3", { className: "rg-title font-heading" }, t), React.createElement("p", { className: "rg-text" }, d), React.createElement("span", { className: "rg-more font-heading" }, "Weiterlesen ", React.createElement("span", { className: "rg-arr" }, React.createElement(Svg, { size: 16, sw: 2.2 }, ICO.arrow))))));
  }))));
};

/* ── About ── */
const About = () => /*#__PURE__*/React.createElement("section", {
  id: "ueber-uns",
  className: "pb-20 md:pb-28 px-5 md:px-8 relative overflow-hidden",
  style: {
    background: "#FBF6E9",
    paddingTop: "7.5rem"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 about-grid relative z-10"
}, /*#__PURE__*/React.createElement("div", {
  className: "reveal-left relative"
}, /*#__PURE__*/React.createElement("div", {
  className: "rounded-[28px] overflow-hidden shadow-2xl ring-1 ring-black/5 about-media"
}, /*#__PURE__*/React.createElement("img", {
  src: "img/einsatz-team.jpg?v=1782000017",
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
  className: "reveal-right sw-frame"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-brand-deep font-heading font-semibold tracking-[0.16em] uppercase text-xs mb-3 block"
}, "Über uns"), /*#__PURE__*/React.createElement("h2", {
  className: "text-3xl md:text-[2.6rem] font-heading font-black text-content leading-tight mb-5"
}, "Ihr ", React.createElement("span", { style: { color: "#F5B301" } }, "Partner"), " für Photovoltaik & Wärmepumpe in NRW"), /*#__PURE__*/React.createElement("div", {
  className: "space-y-4 text-content-secondary leading-relaxed text-[15.5px]"
}, /*#__PURE__*/React.createElement("p", null, "Bei SolaWert entscheiden Effizienz und Wirtschaftlichkeit über jede Anlage. Inhaber Gegam Sargsian und sein Team planen so, dass aus Ihrem Dach das Maximum herauskommt, statt einfach Standard zu verbauen. Vorkasse gibt es bei uns nicht: Sie zahlen erst, wenn die Anlage läuft und wir Ihnen die volle Funktion vorgeführt haben."), /*#__PURE__*/React.createElement("p", null, "Drei Dinge machen bei uns den Unterschied: eine sauber berechnete String-Verteilung der Module, oft rund 60 Prozent mehr Speicher zum gleichen Preis und ein bewusst größer dimensionierter Wechselrichter mit Reserve für die Zukunft. Und während die meisten nach der Montage verschwinden, nehmen wir uns danach rund eine Woche Zeit und stellen die Anlage gemeinsam mit Ihnen auf Ihren Verbrauch ein.")), /*#__PURE__*/React.createElement("div", {
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
  className: "grid grid-cols-3 gap-4 mt-7",
  style: { background: "rgba(255,255,255,0.6)", backdropFilter: "blur(16px) saturate(1.15)", WebkitBackdropFilter: "blur(16px) saturate(1.15)", border: "1px solid rgba(20,23,28,0.09)", borderRadius: "20px", padding: "1.3rem 1.6rem", boxShadow: "0 22px 46px -28px rgba(20,23,28,0.28), inset 0 1px 0 rgba(255,255,255,0.7)" }
}, [["30 Jahre", "Garantie auf Module"], ["60 %", "mehr Speicher"], ["0 €", "Anzahlung"]].map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  className: "text-center sm:text-left"
}, /*#__PURE__*/React.createElement("div", {
  className: "text-2xl md:text-3xl font-heading font-bold text-content"
}, n), /*#__PURE__*/React.createElement("div", {
  className: "text-xs md:text-[13px] text-content-secondary"
}, l)))))));

/* ── Values ── */
const Values = () => {
  const vals = [{"ico": ICO.search, "t": "Effizienz zuerst", "d": "Mit optimierter Planung und dem richtigen Speicher holen wir das Maximum aus jedem Dach. Wirtschaftlichkeit steht bei uns an erster Stelle."}, {"ico": ICO.euro, "t": "Ehrliche Preise", "d": "Faire Festpreise, keine versteckten Posten. Den Preis legen wir vorab schwarz auf weiß fest, damit Sie von Anfang an wissen, woran Sie sind."}, {"ico": ICO.users, "t": "Betreuung statt Abschied", "d": "Nach der Montage sind wir nicht weg. Eine Woche lang optimieren wir die Einstellungen mit Ihnen, bis wirklich alles perfekt sitzt."}];
  return /*#__PURE__*/React.createElement("section", {
    className: "py-20 md:py-28 px-5 md:px-8 text-white relative overflow-hidden",
    style: { background: "#181B21" }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 opacity-50 pointer-events-none",
    style: { display: "none" }
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-2xl mx-auto mb-14 reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-brand font-heading font-semibold tracking-[0.16em] uppercase text-xs mb-3 block"
  }, "Unsere Werte"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-[2.7rem] font-heading font-black leading-tight"
  }, "Unsere Werte, Ihr ", React.createElement("span", { style: { color: "#F5B301" } }, "Vertrauen"))), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-3 gap-6"
  }, vals.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "reveal sw-value rounded-3xl p-8",
    style: {
      transitionDelay: i * 0.12 + 's'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw-value__num",
    "aria-hidden": "true"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    className: "sw-value__ico w-14 h-14 rounded-2xl bg-brand text-brand-text flex items-center justify-center mb-6"
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
  const REVIEW_COLORS = ["#7E57C2", "#26A69A", "#EF5350", "#5C6BC0", "#FB8C00", "#43A047"];
  const REVIEW_DATES = ["vor 2 Wochen", "vor 1 Monat", "vor 3 Wochen", "vor 2 Monaten", "vor 1 Woche", "vor 1 Monat"];
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
    className: "sw-glass-chip",
    style: { marginBottom: "1.1rem" }
  }, /*#__PURE__*/React.createElement("span", { className: "sw-cdot" }), "Bewertungen"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-[2.7rem] font-heading text-content leading-tight",
    style: { fontFamily: "'Archivo', system-ui, sans-serif", fontWeight: 900 }
  }, "Das sagen unsere ", React.createElement("span", { style: { color: "#F5B301" } }, "Kunden"))), /*#__PURE__*/React.createElement("div", {
    className: "sw-grating shrink-0 relative overflow-hidden",
    style: { display: "flex", alignItems: "center", gap: "16px", background: "#2A2E36", border: "1px solid rgba(245,179,1,0.30)", borderRadius: "20px", padding: "16px 22px", boxShadow: "0 18px 44px -22px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.05), 0 0 0 4px rgba(245,179,1,0.04)" }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: { position: "absolute", top: "-45%", left: "-12%", width: "170px", height: "170px", background: "radial-gradient(circle,rgba(245,179,1,0.20) 0%,transparent 70%)", pointerEvents: "none" }
  }), /*#__PURE__*/React.createElement("div", {
    style: { position: "relative" }
  }, /*#__PURE__*/React.createElement("div", {
    style: { display: "flex", alignItems: "center", gap: "10px" }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-heading",
    style: { fontSize: "30px", fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "-0.01em" }
  }, "5,0"), /*#__PURE__*/React.createElement(Stars, {
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: { fontSize: "12px", color: "rgba(255,255,255,0.55)", marginTop: "6px", fontWeight: 500 }
  }, "Kundenbewertungen · in ganz NRW")))), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5"
  }, reviews.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "reveal card-lift rounded-3xl p-7 flex flex-col relative overflow-hidden",
    style: {
      transitionDelay: i % 3 * 0.1 + 's',
      background: "#2A2E36",
      border: "1px solid rgba(245,179,1,0.22)",
      boxShadow: "0 18px 44px -22px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: { position: "absolute", top: "-32%", left: "-10%", width: "155px", height: "155px", background: "radial-gradient(circle,rgba(245,179,1,0.18) 0%,transparent 70%)", pointerEvents: "none" }
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-3 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-full text-white font-heading font-bold flex items-center justify-center shrink-0",
    style: { background: REVIEW_COLORS[i % REVIEW_COLORS.length] }
  }, r.n.charAt(0)), /*#__PURE__*/React.createElement("div", {
    className: "flex-grow min-w-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-heading font-bold text-white text-sm leading-tight"
  }, r.n), /*#__PURE__*/React.createElement("div", {
    className: "text-[11.5px] text-white/55 mt-0.5"
  }, REVIEW_DATES[i % REVIEW_DATES.length]))), /*#__PURE__*/React.createElement(Stars, {
    size: 16,
    className: "mb-3"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-white font-body font-bold text-[14.5px] leading-relaxed flex-grow"
  }, r.t))))));
};

/* ── FAQ ── */
const FAQ = () => {
  const faqs = [{"q": "Bekomme ich vorab einen festen Preis?", "a": "Ja. Nach der Beratung erhalten Sie einen klaren Festpreis, schwarz auf weiß. Keine versteckten Posten und keine Nachforderungen, nachdem die Anlage läuft."}, {"q": "Wie schnell bekomme ich einen Termin für den Baubeginn?", "a": "In der Regel ist jede Baustelle innerhalb von 2 bis 4 Wochen terminiert und fertig gebaut. Wir nennen Ihnen bei der Beratung einen konkreten Zeitrahmen."}, {"q": "Wie lange dauert die Montage?", "a": "Die Dauer hängt von Anlagengröße, Dachform und Wetter ab. In der Regel arbeiten wir zügig und Sie haben nur kurz eine Baustelle am Haus. Beim Beratungstermin nennen wir Ihnen für Ihr Projekt einen konkreten Zeitrahmen."}, {"q": "Welche Garantien gibt es?", "a": "Auf die Solarmodule erhalten Sie 30 Jahre Garantie, auf Wechselrichter und Batteriespeicher jeweils 10 bis 15 Jahre. Sie sind also langfristig abgesichert."}, {"q": "Bauen Sie auch Wärmepumpen?", "a": "Ja. Wir bauen Wärmepumpen genauso schlüsselfertig wie Photovoltaik und bringen beides sinnvoll zusammen, damit Sie mit Ihrem eigenen Strom heizen."}, {"q": "Warum bekomme ich bei Ihnen mehr Speicher?", "a": "Der Speicher ist der entscheidende Effizienzfaktor einer Anlage. Viele bieten bewusst zu wenig an, um ihre Marge zu erhöhen. Wir machen das Gegenteil und geben Ihnen oft rund 60 Prozent mehr Speicher zum gleichen Preis."}, {"q": "In welchem Gebiet sind Sie tätig?", "a": "Unser Fokus liegt auf Nordrhein-Westfalen, von Wuppertal über Solingen und Remscheid bis Düsseldorf und Köln. Auf Wunsch sind wir aber in ganz Deutschland für Sie unterwegs."}];
  return React.createElement("section", {
    id: "faq",
    className: "relative px-5 md:px-8 py-12 md:py-16",
    style: { background: "#2A2E36" }
  }, React.createElement("div", {
    "aria-hidden": "true",
    className: "absolute inset-0 overflow-hidden pointer-events-none"
  }, React.createElement("div", {
    className: "absolute",
    style: { top: "-18%", left: "-12%", width: "640px", height: "640px", background: "radial-gradient(circle,rgba(245,179,1,0.12) 0%,transparent 62%)" }
  })), React.createElement("div", {
    className: "max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
  }, React.createElement("div", {
    className: "reveal-left faq-left"
  }, React.createElement("h2", {
    className: "font-heading",
    style: { color: "#ffffff", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)", lineHeight: "1.06", letterSpacing: "-0.01em", margin: "0 0 1.1rem" }
  }, "Häufige ", React.createElement("span", { style: { color: "#F5B301" } }, "Fragen"), " und unsere Antworten"), React.createElement("p", {
    className: "font-body",
    style: { color: "rgba(255,255,255,0.62)", fontSize: "1.02rem", lineHeight: "1.6", maxWidth: "24rem", marginBottom: "2rem" }
  }, "Sieben Antworten auf die Fragen, die vor fast jedem Projekt kommen. Fehlt eine? Fragen Sie uns direkt."), React.createElement("a", {
    href: "#anfrage",
    className: "faq-cta group"
  }, React.createElement("div", {
    style: { display: "flex", flexDirection: "column", gap: "3px" }
  }, React.createElement("span", { className: "faq-cta-label" }, "Bleibt eine Frage?"), React.createElement("span", { className: "faq-cta-title font-heading" }, "Direkt mit uns sprechen"), React.createElement("span", { className: "faq-cta-sub font-body" }, "Erstgespräch · unverbindlich")), React.createElement("span", {
    className: "faq-cta-arrow"
  }, React.createElement(Svg, { size: 26, sw: 2.4 }, ICO.arrow)))), React.createElement("div", {
    className: "faq-list"
  }, faqs.map((f, i) => React.createElement("details", {
    key: i,
    className: "faq-item reveal",
    style: { transitionDelay: (i * 0.04) + "s" }
  }, React.createElement("summary", {
    className: "faq-head"
  }, React.createElement("span", { className: "faq-num font-heading" }, ("0" + (i + 1)).slice(-2)), React.createElement("span", { className: "faq-q font-heading" }, f.q), React.createElement("span", {
    className: "faq-icon"
  }, React.createElement(Svg, { size: 22, sw: 2.2 }, ICO.plus))), React.createElement("div", {
    className: "faq-body font-body"
  }, f.a))))));
};

/* ── Contact ── */
const Contact = () => {
  const [sent, setSent] = useState(false);
  const userIco = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", { cx: "12", cy: "8", r: "3.6" }), /*#__PURE__*/React.createElement("path", { d: "M5.5 20a6.5 6.5 0 0 1 13 0" }));
  const chatIco = /*#__PURE__*/React.createElement("path", { d: "M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5Z" });
  const ff = (ico, el, area) => /*#__PURE__*/React.createElement("div", { className: area ? "sw-ff sw-ff--area" : "sw-ff" }, /*#__PURE__*/React.createElement("span", { className: "sw-ff__ico" }, /*#__PURE__*/React.createElement(Svg, { size: 17, sw: 1.9 }, ico)), el);
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
    className: "py-10 md:py-14 px-5 md:px-8 relative overflow-hidden",
    style: { background: "#FFFFFF" }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 pointer-events-none",
    style: { backgroundImage: "radial-gradient(rgba(20,23,28,0.05) 1px, transparent 1px)", backgroundSize: "22px 22px", WebkitMaskImage: "linear-gradient(105deg, rgba(0,0,0,0.5) 0%, transparent 46%)", maskImage: "linear-gradient(105deg, rgba(0,0,0,0.5) 0%, transparent 46%)" }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-[-20%] left-[-8%] w-[44%] h-[60%] rounded-full pointer-events-none",
    style: {
      background: "radial-gradient(ellipse, rgba(245,179,1,0.10) 0%, transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw-kontakt-chip",
    style: { marginBottom: "1.15rem" }
  }, /*#__PURE__*/React.createElement("span", { className: "sw-cdot" }), "Kontakt"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-[2.8rem] font-heading font-black leading-[1.08] mb-5"
  }, "Jetzt ", React.createElement("span", { style: { color: "#F5B301" } }, "unverbindlich"), " anfragen"), /*#__PURE__*/React.createElement("p", {
    className: "text-content-secondary text-lg leading-relaxed mb-8 max-w-lg"
  }, "Lassen Sie sich kostenlos beraten und erfahren Sie, was auf Ihrem Dach möglich ist."), /*#__PURE__*/React.createElement("div", {
    className: "sw-contact-wrap mb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sw-contact-cards"
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:" + PHONE_FEST_TEL,
    className: "sw-contact-card group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw-contact-ico"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 22
  }, ICO.phone)), /*#__PURE__*/React.createElement("span", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw-contact-label"
  }, "Telefon"), /*#__PURE__*/React.createElement("span", {
    className: "sw-contact-value"
  }, PHONE_FEST)), /*#__PURE__*/React.createElement("span", {
    className: "sw-contact-go"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 18,
    sw: 2.4
  }, ICO.arrow))), /*#__PURE__*/React.createElement("a", {
    href: "mailto:" + EMAIL,
    className: "sw-contact-card group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw-contact-ico"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 22
  }, ICO.mail)), /*#__PURE__*/React.createElement("span", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw-contact-label"
  }, "E-Mail"), /*#__PURE__*/React.createElement("span", {
    className: "sw-contact-value",
    style: { wordBreak: "break-all" }
  }, EMAIL)), /*#__PURE__*/React.createElement("span", {
    className: "sw-contact-go"
  }, /*#__PURE__*/React.createElement(Svg, {
    size: 18,
    sw: 2.4
  }, ICO.arrow))), React.createElement("div", { className: "sw-contact-card" }, React.createElement("span", { className: "sw-contact-ico" }, React.createElement(Svg, { size: 22 }, ICO.pin)), React.createElement("span", null, React.createElement("span", { className: "sw-contact-label" }, "Adresse"), React.createElement("span", { className: "sw-contact-value" }, "Friedrich-Ebert-Str. 55, 42103 Wuppertal"))), React.createElement("div", { className: "sw-contact-card" }, React.createElement("span", { className: "sw-contact-ico" }, React.createElement(Svg, { size: 22 }, ICO.clock)), React.createElement("span", null, React.createElement("span", { className: "sw-contact-label" }, "Erreichbarkeit"), React.createElement("span", { className: "sw-contact-value" }, "Mo bis Sa, 8 bis 18 Uhr")))))), /*#__PURE__*/React.createElement("div", {
    className: "reveal-right border border-white/10 rounded-3xl p-6 md:p-7 relative overflow-hidden", style: { background: "linear-gradient(162deg,#1B2029 0%,#14171C 58%)", boxShadow: "0 40px 80px -34px rgba(20,23,28,0.5), inset 0 1px 0 rgba(255,255,255,0.07)", borderTop: "1px solid rgba(245,179,1,0.25)" }
  }, /*#__PURE__*/React.createElement("div", { "aria-hidden": "true", style: { position: "absolute", top: "-18%", right: "-14%", width: "320px", height: "320px", background: "radial-gradient(circle, rgba(245,179,1,0.14) 0%, transparent 70%)", pointerEvents: "none" } }), /*#__PURE__*/React.createElement("div", { style: { position: "relative" } }, sent ? /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("span", {
    style: { display: "inline-flex", alignItems: "center", gap: "7px", fontFamily: "'Archivo', system-ui, sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", background: "rgba(245,179,1,0.10)", border: "1px solid rgba(245,179,1,0.28)", borderRadius: "999px", padding: "5px 12px", marginBottom: "14px" }
  }, /*#__PURE__*/React.createElement("span", { style: { width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)" } }), "Antwort meist in 24 Std."), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-heading font-bold mb-1.5 text-white"
  }, "Kostenlosen Rückruf anfordern"), /*#__PURE__*/React.createElement("p", {
    className: "text-white/55 text-sm mb-5"
  }, "Unverbindlich. Wir melden uns schnellstmöglich."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, ff(ICO.users, /*#__PURE__*/React.createElement("select", {
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
  }, "Divers"))), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 gap-3"
  }, ff(userIco, /*#__PURE__*/React.createElement("input", {
    className: "field",
    type: "text",
    name: "vorname",
    placeholder: "Vorname *",
    required: true
  })), ff(userIco, /*#__PURE__*/React.createElement("input", {
    className: "field",
    type: "text",
    name: "nachname",
    placeholder: "Nachname *",
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 gap-3"
  }, ff(ICO.phone, /*#__PURE__*/React.createElement("input", {
    className: "field",
    type: "tel",
    name: "telefon",
    placeholder: "Telefon *",
    required: true
  })), ff(ICO.mail, /*#__PURE__*/React.createElement("input", {
    className: "field",
    type: "email",
    name: "email",
    placeholder: "E-Mail *",
    required: true
  }))), ff(ICO.pin, /*#__PURE__*/React.createElement("input", {
    className: "field",
    type: "text",
    name: "ort",
    placeholder: "Auftragsort & Straße *",
    required: true
  })), ff(chatIco, /*#__PURE__*/React.createElement("textarea", {
    className: "field resize-none",
    name: "anliegen",
    rows: "3",
    placeholder: "Wie können wir Ihnen helfen? *",
    required: true
  }), true), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn-primary cta-pulse sw-submit w-full rounded-full py-4 font-heading text-[1.02rem] flex items-center justify-center gap-2"
  }, "Unverbindlich anfragen ", /*#__PURE__*/React.createElement(Svg, {
    size: 18,
    sw: 2.2
  }, ICO.arrow)), /*#__PURE__*/React.createElement("p", {
    className: "text-white/40 text-[11.5px] text-center"
  }, "Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer ", /*#__PURE__*/React.createElement("a", {
    href: "datenschutz",
    className: "underline hover:text-brand"
  }, "Datenschutzerklärung"), " zu.")))))));
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