/* ───────────────────────────────────────────────────────────
   SolaWert · Shared Partials (EINE Quelle für Footer + Lead-Formular)
   Wird auf ALLEN Seiten via <script src="partials.js"> geladen.
   Platzhalter:  <div data-kaefer="footer"></div>   <section data-kaefer="form"></section>
   Hier editieren = überall geändert (Home + alle Unterseiten).
   ─────────────────────────────────────────────────────────── */
(function () {
  var TEL = "+4915205999900", TELD = "0152 5999900";
  var MAIL = "info@solawert.de";

  /* ═══ FOOTER ═══ */
  function footerHTML() {
    return '' +
    '<footer class="text-white pt-16 pb-28 lg:pb-10 px-5 md:px-8 border-t border-white/5" style="background:#1D222A">' +
      '<div class="max-w-7xl mx-auto">' +
        '<div class="grid md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] gap-10 lg:gap-8 pb-12 border-b border-white/10">' +
          '<div>' +
            '<a href="#top" style="display:inline-flex;align-items:center;gap:4px;text-decoration:none;margin-bottom:1rem">' +
              '<img src="img/logo-icon.png?v=1782000015" alt="SolaWert" class="w-auto" style="height:56px">' +
              '<span class="font-heading font-bold tracking-tight leading-none" style="font-size:24px"><span class="text-white">Sola</span><span class="text-brand">Wert</span></span>' +
            '</a>' +
            '<p class="text-white text-sm leading-relaxed max-w-xs mb-5">Ihr inhabergeführter Partner für Photovoltaik und Wärmepumpen in Wuppertal und ganz NRW. Effizient, ehrlich und fair.</p>' +
            '<div class="flex flex-wrap gap-2">' +
              ['Keine Anzahlung','Mehr Speicher','Schlüsselfertig','Inhabergeführt'].map(function(t){return '<span class="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[12px] text-white font-heading">'+t+'</span>';}).join('') +
            '</div>' +
          '</div>' +
          '<div>' +
            '<h4 class="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">Leistungen</h4>' +
            '<ul class="space-y-2.5 text-sm text-white">' +
              '<li><a href="#leistungen" class="hover:text-brand">Photovoltaik schlüsselfertig</a></li>' +
              '<li><a href="#leistungen" class="hover:text-brand">Wärmepumpe schlüsselfertig</a></li>' +
              '<li><a href="#leistungen" class="hover:text-brand">Stromspeicher</a></li>' +
              '<li><a href="#leistungen" class="hover:text-brand">Monitoring & Feintuning</a></li>' +
              '<li><a href="#leistungen" class="hover:text-brand">Wartung & Anmeldung</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h4 class="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">Navigation</h4>' +
            '<ul class="space-y-2.5 text-sm text-white">' +
              '<li><a href="/#ueber-uns" class="hover:text-brand">Über uns</a></li>' +
              '<li><a href="/#referenzen" class="hover:text-brand">Referenzen</a></li>' +
              '<li><a href="/#bewertungen" class="hover:text-brand">Bewertungen</a></li>' +
              '<li><a href="/#faq" class="hover:text-brand">FAQ</a></li>' +
              '<li><a href="/#kontakt" class="hover:text-brand">Kontakt</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h4 class="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">Kontakt</h4>' +
            '<ul class="space-y-3 text-sm text-white">' +
              '<li class="flex items-start gap-2.5"><span class="text-brand mt-0.5 shrink-0">' + svg('phone',17) + '</span><a href="tel:'+TEL+'" class="hover:text-brand">'+TELD+'</a></li>' +
              '<li class="flex items-start gap-2.5"><span class="text-brand mt-0.5 shrink-0">' + svg('mail',17) + '</span><a href="mailto:'+MAIL+'" class="hover:text-brand break-all">'+MAIL+'</a></li>' +
              '<li class="flex items-start gap-2.5"><span class="text-brand mt-0.5 shrink-0">' + svg('pin',17) + '</span><span>Friedrich-Ebert-Str. 55<br>42103 Wuppertal</span></li>' +
              '<li class="flex items-start gap-2.5"><span class="text-brand mt-0.5 shrink-0">' + svg('clock',17) + '</span><span>Mo bis Sa, 8:00 bis 18:00 Uhr</span></li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-sm text-white">' +
          '<div>© ' + (new Date().getFullYear()) + ' SolaWert · Gegam Sargsian · Inhaber</div>' +
          '<div class="flex items-center gap-5"><a href="impressum" class="hover:text-brand">Impressum</a><a href="datenschutz" class="hover:text-brand">Datenschutz</a></div>' +
        '</div>' +
      '</div>' +
    '</footer>';
  }

  /* ═══ Inline-SVG-Helfer ═══ */
  function svg(name, s) {
    s = s || 20;
    var p = {
      phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
      mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6 8.5-6"/>',
      pin: '<path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
      check: '<path d="m5 12 4.5 4.5L19 7"/>',
      arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
      wa: '',
      home: '<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/>',
      building: '<rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/>',
      spray: '<path d="M9 8V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3"/><rect x="8" y="8" width="6" height="12" rx="1.5"/><path d="M14 6h2M14 9h3M17 5v5"/>',
      clock: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l2.5 2"/>',
      search: '<circle cx="11" cy="11" r="6"/><path d="m20 20-3.2-3.2"/>'
    }[name] || '';
    return '<svg viewBox="0 0 24 24" width="'+s+'" height="'+s+'" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';
  }
  function waSvg(s){ s=s||20; return '<svg viewBox="0 0 24 24" width="'+s+'" height="'+s+'" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.05c-.24.68-1.42 1.32-1.95 1.36-.5.05-1.13.21-3.65-.77-3.06-1.21-5-4.34-5.16-4.54-.15-.2-1.23-1.63-1.23-3.12s.78-2.22 1.06-2.52c.28-.31.6-.38.8-.38l.58.01c.18.01.44-.07.69.53.24.6.83 2.07.9 2.22.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.39-.45.53-.15.15-.3.31-.13.6.18.3.79 1.3 1.69 2.1 1.16 1.04 2.14 1.36 2.44 1.51.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.07.13.07.74-.17 1.42Z"/></svg>'; }
  function stars(s){ s=s||16; var o=''; for(var i=0;i<5;i++) o+='<svg viewBox="0 0 24 24" width="'+s+'" height="'+s+'" fill="currentColor"><path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.07 3.29a1 1 0 0 0 .95.69h3.46c.97 0 1.37 1.24.59 1.81l-2.8 2.03a1 1 0 0 0-.36 1.12l1.07 3.29c.3.92-.76 1.69-1.54 1.12l-2.8-2.04a1 1 0 0 0-1.18 0l-2.8 2.04c-.78.57-1.84-.2-1.54-1.12l1.07-3.29a1 1 0 0 0-.36-1.12L2.98 8.72c-.78-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .95-.69l1.07-3.29Z"/></svg>'; return '<div class="flex items-center gap-0.5 text-[#FBBF24]">'+o+'</div>'; }

  /* ═══ LEAD-FORMULAR (Multi-Step, identisch zur Home) ═══ */
  var PESTS = [["PV-Anlage", "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"w-7 h-7\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 14a1 1 0 0 1-.8-1.6l9.9-10.2a.5.5 0 0 1 .9.5l-1.9 6a1 1 0 0 0 .9 1.3h7a1 1 0 0 1 .8 1.6l-9.9 10.2a.5.5 0 0 1-.9-.5l1.9-6a1 1 0 0 0-.9-1.3z\"/></svg>"], ["Schlüsselfertig", "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"w-7 h-7\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/></svg>"], ["Wärmepumpe", "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"w-7 h-7\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8z\"/></svg>"], ["Stromspeicher", "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"w-7 h-7\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.8 2.2a2 2 0 0 0-1.6 0L2.6 6.1a1 1 0 0 0 0 1.8l8.6 3.9a2 2 0 0 0 1.6 0l8.6-3.9a1 1 0 0 0 0-1.8Z\"/><path d=\"m22 17.6-9.2 4.2a2 2 0 0 1-1.6 0L2 17.6\"/><path d=\"m22 12.6-9.2 4.2a2 2 0 0 1-1.6 0L2 12.6\"/></svg>"], ["Monitoring", "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"w-7 h-7\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/><path d=\"M9 22V12h6v10\"/></svg>"], ["Wartung", "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"w-7 h-7\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8z\"/></svg>"], ["Beratung", "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"w-7 h-7\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\"/></svg>"], ["Anmeldung", "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"w-7 h-7\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 11.1V12a10 10 0 1 1-5.9-9.1\"/><path d=\"m9 11 3 3L22 4\"/></svg>"]];
  var TOTAL = 4;

  function sectionShell() {
    return '' +
    '<section id="anfrage" class="relative py-12 md:py-16 px-5 md:px-8 bg-surface-alt overflow-hidden">' +
      '<div class="absolute pointer-events-none" style="top:-12%;left:50%;transform:translateX(-50%);width:760px;max-width:130%;height:440px;background:radial-gradient(ellipse,rgba(245,179,1,0.22) 0%,transparent 68%)"></div>' +
      '<div class="max-w-2xl mx-auto text-center relative z-10" style="margin-bottom:2.5rem">' +
        '<span class="inline-flex items-center font-heading uppercase" style="gap:0.5rem;padding:0.42rem 0.9rem 0.42rem 0.72rem;border-radius:999px;background:rgba(245,179,1,0.14);border:1px solid rgba(245,179,1,0.4);color:#8A5E00;font-weight:800;font-size:11px;letter-spacing:0.16em;margin-bottom:1.1rem">' +
          '<span style="width:7px;height:7px;border-radius:50%;background:#F5B301;display:inline-block"></span>Kostenlose Anfrage</span>' +
        '<h2 class="font-heading" style="font-weight:900;color:#14171C;font-size:clamp(2rem,4.6vw,3.05rem);line-height:1.04;margin-bottom:1rem">In 30 Sekunden zu Ihrer <span style="background:#F5B301;color:#1A1402;padding:0 0.12em;border-radius:8px;-webkit-box-decoration-break:clone;box-decoration-break:clone">kostenlosen Einschätzung</span></h2>' +
        '<p class="mx-auto" style="color:#525A64;font-size:16px;line-height:1.6;max-width:30rem">Ein paar kurze Fragen genügen. Ehrliche Einschätzung, fairer Festpreis, absolut unverbindlich.</p>' +
        '<div class="flex flex-wrap items-center justify-center" style="gap:0.55rem 1.25rem;margin-top:1.35rem">' +
          ['Keine Anzahlung','Mehr Speicher','Faire Festpreise','100% unverbindlich'].map(function(t){return '<span class="inline-flex items-center font-heading" style="gap:0.4rem;font-size:13px;font-weight:600;color:#3D2C00"><span class="inline-flex items-center justify-center" style="width:18px;height:18px;border-radius:50%;background:#F5B301;color:#1A1402">'+svg('check',11)+'</span>'+t+'</span>';}).join('') +
        '</div>' +
      '</div>' +
      '<div class="mx-auto relative z-10" style="max-width:72rem">' +
        '<div data-kf-card class="bg-white" style="border-radius:24px;box-shadow:0 40px 90px -45px rgba(20,23,28,0.45);border:1px solid rgba(20,23,28,0.06);padding:clamp(1.4rem,3vw,2.25rem)"></div>' +
      '</div>' +
    '</section>';
  }

  function mountForm(section) {
    section.innerHTML = sectionShell();
    var card = section.querySelector('[data-kf-card]');
    var step = 1, sent = false;
    var data = { anrede:'', pest:'', type:'', urgency:'', reachable:'', message:'', vorname:'', nachname:'', phone:'', ort:'', email:'', privacy:false };
    function valid(){ return data.anrede && data.vorname && data.nachname && data.phone && data.ort && data.email && data.privacy; }
    function tile(active){ return 'choice-tile rounded-2xl border p-3 flex flex-col items-center justify-center gap-2 ' + (active?'choice-active':'border-black/10'); }

    function stepHTML() {
      if (step === 1) return '<div class="step-in"><h3 class="text-lg md:text-xl font-heading font-bold text-content mb-1">Worum geht es?</h3><p class="text-content-secondary text-sm mb-5">Tippen Sie auf das passende Anliegen.</p>'
        + '<div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">'
        + PESTS.map(function(p,qi){return '<button type="button" data-pick="pest" data-val="'+p[0]+'" class="sw-qtile'+(data.pest===p[0]?' sw-qtile-active':'')+'" style="background-image:url(img/anfrage/q'+(qi+1)+'.jpg)"><span class="sw-qtile-ic">'+p[1]+'</span><span class="sw-qtile-lb">'+p[0]+'</span></button>';}).join('')
        + '<button type="button" data-pick="pest" data-val="Sonstiges / unklar" class="sw-qtile-wide col-span-2 sm:col-span-4'+(data.pest==='Sonstiges / unklar'?' sw-qtile-active':'')+'">Sonstiges / ich bin nicht sicher</button>'
        + '</div></div>';
      if (step === 2) return '<div class="step-in"><h3 class="text-lg md:text-xl font-heading font-bold text-content mb-1">Wo soll die Anlage entstehen?</h3><p class="text-content-secondary text-sm mb-5">Damit wir die passende Lösung wählen.</p><div class="grid sm:grid-cols-2 gap-3">'
        + [['Privathaushalt','Wohnung, Haus oder Garten','home'],['Unternehmen','Gastronomie, Handel, Büro, Lager','building']].map(function(o){return '<button type="button" data-pick="type" data-val="'+o[0]+'" class="choice-tile rounded-2xl border p-5 text-left flex items-start gap-3 '+(data.type===o[0]?'choice-active':'border-black/10')+'"><span class="w-11 h-11 rounded-xl bg-brand/15 text-brand-deep flex items-center justify-center shrink-0">'+svg(o[2],22)+'</span><span><span class="block font-heading font-bold text-content">'+o[0]+'</span><span class="block text-[12.5px] text-content-secondary leading-snug mt-0.5">'+o[1]+'</span></span></button>';}).join('')
        + '</div></div>';
      if (step === 3) return '<div class="step-in"><h3 class="text-lg md:text-xl font-heading font-bold text-content mb-1">Wie dringend ist es?</h3><p class="text-content-secondary text-sm mb-5">Wir richten uns nach Ihnen.</p><div class="grid gap-3">'
        + [['Möglichst zeitnah','Ich möchte bald mit der Planung starten','home'],['In den nächsten Wochen','Konkret geplant, aber kein Zeitdruck','clock'],['Erstmal nur Beratung','Ich möchte mich zunächst informieren','search']].map(function(o){return '<button type="button" data-pick="urgency" data-val="'+o[0]+'" class="choice-tile rounded-2xl border p-4 text-left flex items-center gap-3 '+(data.urgency===o[0]?'choice-active':'border-black/10')+'"><span class="w-10 h-10 rounded-xl bg-brand/15 text-brand-deep flex items-center justify-center shrink-0">'+svg(o[2],20)+'</span><span><span class="block font-heading font-bold text-content text-[15px]">'+o[0]+'</span><span class="block text-[12.5px] text-content-secondary">'+o[1]+'</span></span></button>';}).join('')
        + '</div></div>';
      // step 4
      return '<div class="step-in"><h3 class="text-lg md:text-xl font-heading font-bold text-content mb-1">Fast geschafft, wohin dürfen wir uns melden?</h3><p class="text-content-secondary text-sm mb-4">Unverbindlich. Ihre Daten bleiben vertraulich.</p><div class="space-y-3">'
        + '<select data-f="anrede" class="field-light"'+(data.anrede?'':' style="color:#8A929C"')+'><option value="">Anrede *</option><option value="Frau"'+(data.anrede==='Frau'?' selected':'')+'>Frau</option><option value="Herr"'+(data.anrede==='Herr'?' selected':'')+'>Herr</option><option value="Divers"'+(data.anrede==='Divers'?' selected':'')+'>Divers</option></select>'
        + '<div class="grid sm:grid-cols-2 gap-3"><input data-f="vorname" class="field-light" type="text" placeholder="Vorname *" value="'+esc(data.vorname)+'"><input data-f="nachname" class="field-light" type="text" placeholder="Nachname *" value="'+esc(data.nachname)+'"></div>'
        + '<div class="grid sm:grid-cols-2 gap-3"><input data-f="phone" class="field-light" type="tel" placeholder="Telefon *" value="'+esc(data.phone)+'"><input data-f="ort" class="field-light" type="text" placeholder="Ort / PLZ *" value="'+esc(data.ort)+'"></div>'
        + '<input data-f="email" class="field-light" type="email" placeholder="E-Mail *" value="'+esc(data.email)+'">'
        + '<textarea data-f="message" class="field-light resize-none" rows="2" placeholder="Beschreiben Sie kurz Ihr Anliegen (optional)">'+esc(data.message)+'</textarea>'
        + '<div><span class="block text-[12px] font-heading font-semibold text-content-secondary mb-2">Am besten erreichbar (optional)</span><div class="flex flex-wrap gap-2">'
        + ['Morgens','Mittags','Abends','Ganztags'].map(function(t){return '<button type="button" data-reach="'+t+'" class="px-3.5 py-1.5 rounded-full border text-[12.5px] font-heading font-semibold transition-all '+(data.reachable===t?'choice-active text-content':'border-black/10 text-content-secondary hover:border-brand')+'">'+t+'</button>';}).join('')
        + '</div></div>'
        + '<label class="flex items-start gap-2.5 text-[12.5px] text-content-secondary cursor-pointer pt-1"><input data-f="privacy" type="checkbox" '+(data.privacy?'checked':'')+' class="mt-0.5 w-4 h-4 accent-[#41a636] shrink-0"><span>Ich habe die <a href="datenschutz" target="_blank" rel="noopener" class="text-brand-deep underline hover:text-brand">Datenschutzbestimmungen</a> gelesen und stimme der Verarbeitung meiner Daten zu. *</span></label>'
        + '</div></div>';
    }

    function paint() {
      if (sent) {
        card.innerHTML = '<div class="text-center py-8 step-in"><div class="w-16 h-16 mx-auto rounded-full bg-brand text-brand-text flex items-center justify-center mb-5 pop-in">'+svg('check',32)+'</div>'
          + '<h3 class="text-2xl font-heading font-bold text-content mb-2">Vielen Dank'+(data.vorname?', '+esc(data.vorname):'')+'!</h3>'
          + '<p class="text-content-secondary max-w-sm mx-auto mb-6">Ihre Anfrage zu <strong class="text-content">'+(esc(data.pest)||'Ihrem Projekt')+'</strong> ist eingegangen. Wir melden uns schnellstmöglich bei Ihnen.</p>'
          + '<div class="flex flex-wrap justify-center gap-3"><a href="tel:'+TEL+'" class="btn-primary rounded-full px-6 py-3 font-heading text-sm inline-flex items-center gap-2">'+svg('phone',17)+' Lieber direkt anrufen</a>'
          + '</div></div>';
        return;
      }
      var nav = '';
      if (step > 1) {
        nav = '<div class="flex items-center justify-between mt-5 pt-5 border-t border-black/5">'
          + '<button type="button" data-back class="text-sm font-heading font-semibold text-content-secondary hover:text-content transition-colors inline-flex items-center gap-1.5"><span class="rotate-180">'+svg('arrow',15)+'</span> Zurück</button>'
          + (step===TOTAL ? '<button type="button" data-submit class="btn-primary cta-pulse rounded-full px-6 py-3.5 font-heading text-sm inline-flex items-center gap-2 '+(valid()?'':'opacity-40 cursor-not-allowed')+'">Anfrage senden '+svg('arrow',16)+'</button>' : '')
          + '</div>';
      }
      card.innerHTML =
        '<div class="flex items-center justify-between mb-1.5"><span class="text-xs font-heading font-semibold text-content-secondary uppercase tracking-wider">Schritt '+step+' von '+TOTAL+'</span><span class="text-xs text-content-secondary">ca. 30 Sek.</span></div>'
        + '<div class="h-1.5 rounded-full bg-surface-alt overflow-hidden mb-6"><div class="h-full rounded-full bg-brand transition-all duration-500 ease-out" style="width:'+(step/TOTAL*100)+'%"></div></div>'
        + '<div class="min-h-[296px]" style="'+(step===1?'':'max-width:620px;margin:0 auto;')+'">' + stepHTML() + '</div>'
        + nav;
    }

    section.addEventListener('click', function (e) {
      var pick = e.target.closest('[data-pick]');
      if (pick) { data[pick.getAttribute('data-pick')] = pick.getAttribute('data-val'); setTimeout(function(){ if(step<TOTAL){step++;paint();} }, 180); paint(); return; }
      var reach = e.target.closest('[data-reach]');
      if (reach) { var v=reach.getAttribute('data-reach'); data.reachable = (data.reachable===v?'':v); paint(); return; }
      if (e.target.closest('[data-back]')) { if(step>1){step--;paint();} return; }
      if (e.target.closest('[data-submit]')) { if(valid()){ sent=true; paint(); try{ fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}).catch(function(){}); }catch(_e){} } return; }
    });
    section.addEventListener('input', function (e) {
      var f = e.target.closest('[data-f]'); if(!f) return;
      var k=f.getAttribute('data-f');
      data[k] = (f.type==='checkbox') ? f.checked : f.value;
      var sb = section.querySelector('[data-submit]');
      if (sb) { if(valid()){sb.classList.remove('opacity-40','cursor-not-allowed');} else {sb.classList.add('opacity-40','cursor-not-allowed');} }
    });
    paint();
  }

  function esc(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

  /* ═══ MEGA-MENÜ (erweitert die bestehende Navbar progressiv – eine Quelle, edit-once) ═══ */
  var SERVICES = [
    ['Rattenbekämpfung','rattenbekaempfung-freiburg.html','ratte'],
    ['Mäusebekämpfung','maeusebekaempfung-freiburg.html','maus'],
    ['Wespennest entfernen','wespennest-entfernen-freiburg.html','wespe'],
    ['Bettwanzenbekämpfung','bettwanzenbekaempfung-freiburg.html','bettwanze'],
    ['Taubenabwehr','taubenabwehr-freiburg.html','taube'],
    ['Marder vertreiben','marder-vertreiben-freiburg.html','marder'],
    ['Schaben & Kakerlaken','schaben-kakerlaken-freiburg.html','schabe'],
    ['Ameisenbekämpfung','ameisenbekaempfung-freiburg.html','ameise']
  ];
  var STANDORTE = [
    ['Wuppertal & Umland', [
      ['Wuppertal-Wiehre','kammerjaeger-freiburg-wiehre.html'],['Wuppertal-Herdern','kammerjaeger-freiburg-herdern.html'],
      ['Schallstadt','kammerjaeger-schallstadt.html'],['Gundelfingen','kammerjaeger-gundelfingen.html'],
      ['Denzlingen','kammerjaeger-denzlingen.html'],['Bad Krozingen','kammerjaeger-bad-krozingen.html']
    ]],
    ['Kaiserstuhl & Emmendingen', [
      ['Emmendingen','kammerjaeger-emmendingen.html'],['Teningen','kammerjaeger-teningen.html'],
      ['Endingen','kammerjaeger-endingen.html'],['Breisach','kammerjaeger-breisach.html'],
      ['Bötzingen','kammerjaeger-boetzingen.html'],['Kaiserstuhl','kammerjaeger-kaiserstuhl.html']
    ]],
    ['Markgräflerland & Schwarzwald', [
      ['Müllheim','kammerjaeger-muellheim.html'],['Heitersheim','kammerjaeger-heitersheim.html'],
      ['Staufen','schaedlingsbekaempfung-staufen.html'],['Waldkirch','schaedlingsbekaempfung-waldkirch.html'],
      ['Titisee-Neustadt','kammerjaeger-titisee-neustadt.html']
    ]]
  ];
  function panelShell(key, widthCls, inner) {
    return '<div data-kf-mega="'+key+'" class="fixed inset-x-0 top-[64px] z-40 opacity-0 -translate-y-2 pointer-events-none transition-all duration-200">'
      + '<div class="'+widthCls+' mx-auto px-5"><div class="bg-white rounded-2xl border border-black/5 shadow-[0_30px_70px_-25px_rgba(20,23,28,0.4)] p-7">'+inner+'</div></div></div>';
  }
  function megaServicesHTML() {
    var items = SERVICES.map(function(it){
      return '<a href="'+it[1]+'" class="flex items-center gap-2.5 py-[7px] text-[14px] text-content-secondary hover:text-brand-deep transition-colors"><img src="img/icons/'+it[2]+'.png" alt="" class="w-5 h-5 object-contain shrink-0"><span>'+it[0]+'</span></a>';
    }).join('');
    return panelShell('leistungen', 'max-w-2xl',
      '<div class="flex items-center justify-between mb-3"><h4 class="font-heading font-bold text-[11.5px] uppercase tracking-wider text-content-secondary/60">Unsere Leistungen</h4>'
      + '<a href="leistungen" class="text-[13px] font-heading font-semibold text-brand-deep hover:text-brand inline-flex items-center gap-1">Alle Leistungen '+svg('arrow',13)+'</a></div>'
      + '<div class="grid grid-cols-2 gap-x-10 gap-y-0">'+items+'</div>');
  }
  function megaStandorteHTML() {
    var cols = STANDORTE.map(function(g){
      var lis = g[1].map(function(it){ return '<a href="'+it[1]+'" class="block py-[6px] text-[14px] text-content-secondary hover:text-brand-deep transition-colors">'+it[0]+'</a>'; }).join('');
      return '<div><h5 class="font-heading font-bold text-[11.5px] uppercase tracking-wider text-content-secondary/60 mb-2">'+g[0]+'</h5>'+lis+'</div>';
    }).join('');
    return panelShell('standorte', 'max-w-3xl',
      '<div class="flex items-center justify-between mb-4"><h4 class="font-heading font-bold text-[11.5px] uppercase tracking-wider text-content-secondary/60">Einzugsgebiete in Baden</h4>'
      + '<a href="standorte" class="text-[13px] font-heading font-semibold text-brand-deep hover:text-brand inline-flex items-center gap-1">Alle Einzugsgebiete '+svg('arrow',13)+'</a></div>'
      + '<div class="grid grid-cols-3 gap-8">'+cols+'</div>');
  }
  var _panels = {}, _megaT = null;
  function megaSet(el, on) {
    if (!el) return;
    if (on) { el.classList.remove('opacity-0','-translate-y-2','pointer-events-none'); el.classList.add('opacity-100','translate-y-0','pointer-events-auto'); }
    else { el.classList.add('opacity-0','-translate-y-2','pointer-events-none'); el.classList.remove('opacity-100','translate-y-0','pointer-events-auto'); }
  }
  function megaEnsure(key) {
    if (_panels[key]) return _panels[key];
    var w = document.createElement('div'); w.innerHTML = (key === 'standorte' ? megaStandorteHTML() : megaServicesHTML());
    var el = w.firstChild; document.body.appendChild(el);
    el.addEventListener('mouseenter', function(){ megaShow(key); });
    el.addEventListener('mouseleave', megaHide);
    _panels[key] = el; return el;
  }
  function megaShow(key) {
    clearTimeout(_megaT);
    Object.keys(_panels).forEach(function(k){ if (k !== key) megaSet(_panels[k], false); });
    megaSet(megaEnsure(key), true);
  }
  function megaHide() { _megaT = setTimeout(function(){ Object.keys(_panels).forEach(function(k){ megaSet(_panels[k], false); }); }, 160); }
  function megaTrigger(el) {
    if (!el || !el.closest) return null;
    return null;
    var n = el.closest('a.nav-link, header nav a'); if (!n) return null;
    var t = n.textContent.trim();
    if (t.indexOf('Leistungen') === 0) return 'leistungen';
    if (t.indexOf('Einzugsgebiete') === 0) return 'standorte';
    return null;
  }
  function enhanceHeader() {
    if (document.body.getAttribute('data-kf-mega-init')) return;
    document.body.setAttribute('data-kf-mega-init','1');
    // Delegation – robust gegen React-Re-Renders der Navbar
    document.addEventListener('mouseover', function(e){ var k = megaTrigger(e.target); if (k) megaShow(k); });
    document.addEventListener('mouseout', function(e){ var k = megaTrigger(e.target); if (k) megaHide(); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') megaHide(); });
  }

  /* ═══ Init / Auto-Inject ═══ */
  function init() {
    document.querySelectorAll('[data-kaefer="footer"]').forEach(function (el) {
      if (el.getAttribute('data-kf-done')) return; el.setAttribute('data-kf-done','1'); el.innerHTML = footerHTML();
    });
    document.querySelectorAll('[data-kaefer="form"]').forEach(function (el) {
      if (el.getAttribute('data-kf-done')) return; el.setAttribute('data-kf-done','1'); mountForm(el);
    });
    enhanceHeader();
  }
  if (document.readyState !== 'loading') init(); else document.addEventListener('DOMContentLoaded', init);
  // React-Seiten: Platzhalter erst nach Mount da -> mehrfach versuchen
  setTimeout(init, 200); setTimeout(init, 800);
})();
