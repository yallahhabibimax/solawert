/* SW Photovoltaik LeadQuiz - eigenstaendig fuer Unterseiten. 1:1 das Formular der Homepage. */
const {
  useEffect,
  useRef,
  useState
} = React;
const PHONE_FEST = "0152 5999900";
const PHONE_FEST_TEL = "+4915205999900";
const EMAIL = "info@sw-photovoltaik.de";

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
      { ico: ICO.home, t: "Einfamilienhaus", d: "Das eigene Dach optimal ausnutzen, von der ersten Planung bis zur fertigen Anlage.", b: ["Ideale Dachnutzung", "Schlüsselfertig montiert", "In 1 bis 3 Tagen"] },
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
      { ico: ICO.bolt, t: "So schnell wie möglich", d: "Wir terminieren Ihre Baustelle in der Regel innerhalb weniger Wochen.", b: ["Schneller Baubeginn", "Termintreu", "Montage in 1 bis 3 Tagen"] },
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
        h("p", { className: "nq-lead" }, "Ein paar kurze Fragen – ehrliche Einschätzung, fairer Festpreis.")),
      main,
      h("div", { className: "nq-trust" }, [["check", "100% kostenlos"], ["shield", "DSGVO-konform"], ["clock", "Antwort in 24 h"], ["euro", "Faire Festpreise"]].map(function (it, i) { return h("span", { key: i, className: "nq-trust__i" }, h("span", { className: "nq-trust__ic" }, h(Svg, { size: 15, sw: 2 }, ICO[it[0]])), it[1]); }))));
};

(function(){
  function mount(){ document.querySelectorAll("[data-leadquiz]").forEach(function(el){ if(el.getAttribute("data-lq-done"))return; el.setAttribute("data-lq-done","1"); ReactDOM.createRoot(el).render(React.createElement(LeadQuiz)); }); }
  if(document.readyState!=="loading"){ mount(); } else { document.addEventListener("DOMContentLoaded", mount); }
})();
