(function(){
  var GOOGLE_URL = 'https://www.google.com/maps/place/Bilingual+Bridges/@39.8669469,-86.1524951,17z';
  var REVIEWS = [
    { text: 'The summer pass was amazing for many families, but especially for a family that I am well familiar with \u2014 they have six children and four of those children were able to do unlimited classes Monday through Sunday at the cost of $49 for the whole family. Thank you so much for making this provision. I know they are going to benefit greatly for the upcoming school year.', name: 'Elsa Helms', ini: 'EH', stars: 5 },
    { text: 'Bilingual Bridges provides kids with opportunities to enhance reading and math skills aligned with school requirements, while also offering language, cooking, and art activities for fun. The program features a fantastic work atmosphere and customized curriculums designed by experts.', name: 'Samanta Rogers', ini: 'SR', stars: 5 },
    { text: 'I love the flexibility of Bilingual Bridges. F\u00e1tima is fantastic. She uses a variety of creative techniques and teaching styles to make Spanish fun and engaging. We are finally turning a corner and my daughter is again enthusiastic about learning and speaking Spanish.', name: 'Holly Mulvenon', ini: 'HM', stars: 5 },
    { text: 'My son\u2019s Italian teacher, Giulia, has been wonderful! She is flexible with scheduling, very responsive and communicative via email and assigns age-appropriate, manageable assignments so he can learn the basics of conversational Italian. Grazie mille, Giulia!', name: 'Neha Robinson', ini: 'NR', stars: 5 },
    { text: 'Maestra F\u00e1tima is an excellent Spanish instructor; in our weekly conversation focused lessons she provides an excellent environment to develop conversational skills, while giving me good feedback and notes to improve grammar, and always providing encouragement. I highly recommend anyone looking to develop their Spanish language skills to working with F\u00e1tima!', name: 'bwk111', ini: 'BK', stars: 5 },
    { text: 'Our grandson is a part of Bilingual Bridges where Ms Hernandez has been his Spanish tutor for close to a year! He is a part of a bilingual program and needed help with conversation Spanish. We were so blessed to have found Ms Hernandez! She enjoys teaching and finds creative ways to keep a child\u2019s attention. We have seen our grandson improve in Spanish under Ms Hernandez! Thank you Ms Hernandez for all you do!', name: 'Githa Amarnath', ini: 'GA', stars: 5 },
    { text: 'My son has been tutored by Fatima since last summer. Fatima is an awesome teacher, she is always responsible and flexible \u2014 sometimes when we missed the lesson, she left homework through emails so students can catch up next time. My son obviously enjoys his weekly meeting with Fatima and practices Spanish. We will definitely continue with Fatima and Bilingual Bridges into next year.', name: 'Lifang Xu', ini: 'LX', stars: 5 },
    { text: 'We love Fatima! She has such great energy and is very kind. My daughter is always laughing and is very engaged during the lesson, which I love to see. My daughter says she learns more from Fatima than her teacher at school (she has Spanish 50% of the time). We\u2019ve also noticed a real improvement in her pronunciation.', name: 'Sarah Croco', ini: 'SC', stars: 5 },
    { text: 'We have really enjoyed Bilingual Bridges! Fatima is able to engage my daughter so easily. My daughter is a shy 12 year old, and was hesitant to speak Spanish out loud at school but Fatima uses games and a heavy dose of sweet encouragement to bring her out of her shell. The scheduling and online format is super convenient. I highly recommend Bilingual Bridges!', name: 'Agnes Scoville', ini: 'AS', stars: 5 },
    { text: 'Our son has been taking Spanish classes with Fatima for a few months now and we all couldn\u2019t be happier with her. Fatima clearly puts a lot of effort into preparing every class. She tailors her classes to our son\u2019s interests and keeps him engaged with songs, dances, games, crafts, stories, and conversations. Fatima is always on time, always friendly and upbeat, and always well prepared yet flexible to respond to input from our son. Every class has been fun and we look forward to hopefully having many more classes with her!', name: 'Corinna Weber', ini: 'CW', stars: 5 },
    { text: 'I am very pleased with tutoring through Bilingual Bridges. We absolutely adore my child\u2019s teacher Ms. Fatima! My child looks forward to speaking with her every week and the classes are very stimulating and engaging. I also appreciate being able to review the class recordings on Google Classroom each week. Ms. Fatima is professional, consistent and reliable. She is excellent at managing a hyper 5-year-old and keeping her interested, engaged and learning for the full session week after week. Working with Ms. Fatima has exceeded my expectations of online language tutoring.', name: 'Diana J. Wall', ini: 'DJ', stars: 5 },
    { text: 'Gail is a super amazing tutor. My daughter has worked with her in the past for reading and currently works with her on math tutoring. Gail is very patient, kind and effective. My daughter really enjoys the tutoring sessions!', name: 'Unsook Sim', ini: 'US', stars: 5 },
    { text: 'We (both my daughter and I) have been taking lessons with Fatima from Bilingual Bridges now for a few months. We love the way that she prepares just the right balance of work and meaningful conversation for each lesson. My 10 year old daughter also said that she speaks with her throughout her entire lesson in Spanish! She immediately taught her to say "como se dice" so that she too can speak as much as possible. Very grateful we found Fatima and we highly recommend working with her!', name: 'Valerie Rios', ini: 'VR', stars: 5 },
    { text: 'My 7 year old daughter is in a Spanish Immersion program and we use Bilingual Bridges as a supplement to her schoolwork. She has had weekly virtual lessons with F\u00e1tima for almost a year. F\u00e1tima is very engaging and caters to my daughter\u2019s interests in her lessons. I love hearing my daughter speak in Spanish with F\u00e1tima each week! My daughter says \u201cIt\u2019s a very fun class and I wish I could do it every day!\u201d', name: 'Erica Truex', ini: 'ET', stars: 5 },
    { text: 'Bilingual Bridges provides the rare opportunity to learn from well prepared native speakers providing a most enjoyable language learning experience.', name: 'Suzann Ellis', ini: 'SE', stars: 5 },
    { text: 'Ofrecen una herramienta fant\u00e1stica en el aprendizaje de nuestros hijos con profesores muy capacitados en la ense\u00f1anzas y aunque no pude hacer uso del pase de verano espero que nos tomen en cuenta para que mi hija pueda seguir en el programa. Muchas gracias por toda su ayuda.', name: 'Fyorella Garcia', ini: 'FG', stars: 5 },
    { text: 'Es lo mejor que le ha pasado a mi hijo al encontrar esta organizaci\u00f3n, ya que le ha ayudado mucho en su formaci\u00f3n de ingl\u00e9s y matem\u00e1ticas, me encanta y les agradezco mucho por su ayuda.', name: 'Yesica Ponce', ini: 'YP', stars: 5 },
    { text: 'I\u2019m really glad that my kids learned so much from this program and I hope this will continue.', name: 'Dhahra Mohamed', ini: 'DM', stars: 5 },
    { text: 'Muy contenta de formar parte de este inmenso grupo conformado por teachers de todas partes del mundo. Me gusta mucho la din\u00e1mica y organizaci\u00f3n. \u00a1Siempre espero con ansias mi pr\u00f3xima clase!', name: 'Julieta BB', ini: 'JB', stars: 5 },
    { text: 'Ibeth was amazing!', name: 'Jordan Beauprez', ini: 'JB', stars: 5 },
    { text: 'Son personas realmente buenas en todo las materias.', name: 'Yazmin Elizabeth P\u00e9rez Vargas', ini: 'YP', stars: 5 },
    { text: 'Muy agradecida y satisfactoria con las clases, son personas muy amables.', name: 'Yulenis Ricardo Pupo', ini: 'YR', stars: 5 },
    { text: 'We\u2019ve had such a wonderful experience with Sophie from Bilingual Bridges! She is an incredibly patient, kind, and dedicated Spanish tutor. Sophie goes above and beyond to create engaging, fun activities that keep my daughter excited about learning, and she thoughtfully tailors each lesson to meet her individual needs. My daughter has Down syndrome, and it means so much to us to have a tutor who truly understands how to connect with her and support her learning style. She absolutely loves working with Sophie and looks forward to every session. I highly recommend Sophie to any family looking for a compassionate, creative, and effective Spanish teacher!', name: 'Therese', ini: 'TH', stars: 5 },
    { text: 'Alejandra Figueroa is great! She is sweet, positive, enthusiastic and genuine. My son says he enjoys the classes. I like that I get a detailed review of each class after. And I also like the ease of the process with Bilingual Bridges. Thank you!', name: 'Rocio Orta', ini: 'RO', stars: 5 },
    { text: 'Me a gustado demasiado ya que le ha sido de mucha ayuda y avance para mi hija sus tutorias y su maestra es excelente tutora y muy amable.', name: 'Montserrat Cortes R', ini: 'MC', stars: 5 },
  ];

  var TOTAL = REVIEWS.length;
  var AUTO = 7000, cur = 0, pv = 0, pt = null;
  var FF = "'Rubik',sans-serif";

  if(!document.querySelector('#bbw-rubik-font')){
    var fontLink = document.createElement('link');
    fontLink.id = 'bbw-rubik-font';
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(fontLink);
  }

  var css = [
    /* ── ROOT: desktop floats bottom-left, mobile same anchor ── */
    '#bbw{position:fixed!important;bottom:28px!important;left:28px!important;z-index:999998!important;font-family:'+FF+'!important;line-height:normal!important;box-sizing:border-box!important;width:min(340px,calc(100vw - 32px))!important}',
    '#bbw *,#bbw *::before,#bbw *::after{box-sizing:border-box!important;margin:0!important;padding:0!important;line-height:1.5!important;font-family:'+FF+'!important}',

    /* ── DESKTOP PILL (hidden on mobile) ── */
    '#bbw-pill{display:flex!important;align-items:center!important;gap:10px!important;background:#fff!important;border:1.5px solid #e5e5e5!important;border-radius:100px!important;padding:9px 16px 9px 10px!important;cursor:pointer!important;box-shadow:0 6px 24px rgba(0,0,0,.12)!important;transition:transform .2s,box-shadow .2s!important;user-select:none!important}',
    '#bbw-pill:hover{transform:translateY(-2px)!important;box-shadow:0 10px 32px rgba(0,0,0,.16)!important}',
    '#bbw-pill-icon{width:36px!important;height:36px!important;min-width:36px!important;background:#fff!important;border-radius:50%!important;display:flex!important;align-items:center!important;justify-content:center!important;box-shadow:0 1px 4px rgba(0,0,0,.15)!important;border:1px solid #eee!important}',
    '#bbw-pill-icon svg{width:20px!important;height:20px!important;display:block!important}',
    '#bbw-pill-text{flex:1!important}',
    '#bbw-pill-text strong{display:block!important;font-size:13px!important;font-weight:600!important;color:#111!important}',
    '#bbw-pill-text span{display:block!important;font-size:11px!important;color:#999!important;margin-top:1px!important}',
    '#bbw-pill-right{display:flex!important;flex-direction:column!important;align-items:flex-end!important;gap:3px!important}',
    '#bbw-pill-score{font-size:13px!important;font-weight:700!important;color:#111!important;display:flex!important;align-items:center!important;gap:3px!important}',
    '#bbw-pill-score svg,#bbw-pill-stars svg{fill:#e8a020!important;display:block!important}',
    '#bbw-pill-score svg{width:11px!important;height:11px!important}',
    '#bbw-pill-stars{display:flex!important;gap:2px!important}',
    '#bbw-pill-stars svg{width:9px!important;height:9px!important}',

    /* ── MOBILE ICON BUTTON (hidden on desktop) ── */
    '#bbw-mob-btn{display:none!important;width:48px!important;height:48px!important;border-radius:50%!important;background:#fff!important;border:1.5px solid #e8e8e8!important;box-shadow:0 3px 12px rgba(0,0,0,.15)!important;cursor:pointer!important;align-items:center!important;justify-content:center!important;-webkit-tap-highlight-color:transparent!important;position:relative!important;flex-direction:column!important;gap:1px!important}',
    '#bbw-mob-btn svg{width:22px!important;height:22px!important;display:block!important}',
    '#bbw-mob-badge{font-size:8.5px!important;font-weight:700!important;color:#e8a020!important;letter-spacing:.01em!important;display:flex!important;align-items:center!important;gap:1px!important}',
    '#bbw-mob-badge svg{width:8px!important;height:8px!important;fill:#e8a020!important;display:block!important}',

    /* ── CARD (desktop: floats above pill; mobile: bottom sheet) ── */
    '#bbw-card{background:#fff!important;border:1.5px solid #ebebeb!important;border-radius:18px!important;overflow:hidden!important;box-shadow:0 16px 48px rgba(0,0,0,.13)!important;margin-bottom:10px!important;display:flex!important;flex-direction:column!important;max-height:calc(100vh - 80px)!important}',
    '#bbw-head{display:flex!important;align-items:center!important;gap:10px!important;padding:14px 16px!important;background:#fafafa!important;border-bottom:1px solid #f0f0f0!important;flex-shrink:0!important}',
    '#bbw-head-icon{width:36px!important;height:36px!important;min-width:36px!important;background:#fff!important;border-radius:9px!important;display:flex!important;align-items:center!important;justify-content:center!important;box-shadow:0 1px 4px rgba(0,0,0,.12)!important;border:1px solid #eee!important}',
    '#bbw-head-icon svg{width:22px!important;height:22px!important;display:block!important}',
    '#bbw-head-copy{flex:1!important;min-width:0!important}',
    '#bbw-head-copy strong{display:block!important;font-size:13px!important;font-weight:600!important;color:#111!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}',
    '#bbw-head-copy span{display:block!important;font-size:11px!important;color:#aaa!important;margin-top:1px!important}',
    '#bbw-head-right{display:flex!important;align-items:center!important;gap:8px!important;flex-shrink:0!important}',
    '#bbw-rating{display:flex!important;align-items:center!important;gap:4px!important;background:#fffbf0!important;border:1px solid #f0dfa0!important;border-radius:99px!important;padding:4px 10px!important;font-size:12px!important;font-weight:700!important;color:#111!important}',
    '#bbw-rating svg{width:11px!important;height:11px!important;fill:#e8a020!important;display:block!important}',
    '#bbw-close{width:28px!important;height:28px!important;min-width:28px!important;border-radius:50%!important;border:1.5px solid #e5e5e5!important;background:transparent!important;cursor:pointer!important;color:#999!important;font-size:13px!important;display:flex!important;align-items:center!important;justify-content:center!important;transition:background .2s,color .2s!important}',
    '#bbw-close:hover{background:#111!important;color:#fff!important;border-color:#111!important}',
    '#bbw-progress{height:2px!important;background:#f3f3f3!important;overflow:hidden!important;flex-shrink:0!important}',
    '#bbw-fill{height:2px!important;width:0%!important;background:#4285F4!important;transition:width .12s linear!important}',
    '#bbw-body{padding:20px 20px 16px!important;overflow-y:auto!important;flex:1 1 auto!important;-webkit-overflow-scrolling:touch!important}',
    '#bbw-body::-webkit-scrollbar{width:3px!important}',
    '#bbw-body::-webkit-scrollbar-track{background:transparent!important}',
    '#bbw-body::-webkit-scrollbar-thumb{background:#ddd!important;border-radius:99px!important}',
    '.bbw-slide{display:none!important;flex-direction:column!important;gap:12px!important;animation:bbwIn .32s ease both!important}',
    '.bbw-slide.bbw-on{display:flex!important}',
    '@keyframes bbwIn{from{opacity:0;transform:translateX(10px)}to{opacity:1;transform:translateX(0)}}',
    '.bbw-s-stars{display:flex!important;gap:3px!important}',
    '.bbw-s-stars svg{width:14px!important;height:14px!important;fill:#e8a020!important;display:block!important}',
    '.bbw-s-text{font-size:13px!important;line-height:1.85!important;color:#444!important;font-weight:300!important;word-break:break-word!important}',
    '.bbw-s-author{display:flex!important;align-items:center!important;gap:10px!important;padding-top:8px!important;border-top:1px solid #f5f5f5!important;margin-top:4px!important}',
    '.bbw-s-avatar{width:34px!important;height:34px!important;min-width:34px!important;border-radius:50%!important;background:#111!important;color:#fff!important;font-size:11px!important;font-weight:600!important;display:flex!important;align-items:center!important;justify-content:center!important;letter-spacing:.04em!important}',
    '.bbw-s-info{flex:1!important;min-width:0!important}',
    '.bbw-s-name{display:block!important;font-size:12px!important;font-weight:600!important;color:#111!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}',
    '.bbw-s-loc{display:block!important;font-size:11px!important;color:#bbb!important;margin-top:1px!important}',
    '.bbw-s-verified{display:flex!important;align-items:center!important;gap:3px!important;background:#f0f5ff!important;border:1px solid #c8d8f8!important;border-radius:99px!important;padding:3px 8px!important;font-size:10px!important;font-weight:500!important;color:#4285F4!important;white-space:nowrap!important;flex-shrink:0!important}',
    '.bbw-s-verified svg{width:9px!important;height:9px!important;fill:#4285F4!important;display:block!important}',
    '#bbw-foot{display:flex!important;align-items:center!important;gap:8px!important;padding:10px 16px 14px!important;border-top:1px solid #f3f3f3!important;flex-shrink:0!important}',
    '#bbw-counter{flex:1!important;font-size:11px!important;font-weight:500!important;color:#bbb!important;letter-spacing:.03em!important}',
    '#bbw-counter strong{color:#111!important;font-weight:700!important}',
    '#bbw-viewall{font-size:10.5px!important;font-weight:500!important;color:#4285F4!important;text-decoration:none!important;text-transform:uppercase!important;letter-spacing:.04em!important;white-space:nowrap!important}',
    '#bbw-viewall:hover{color:#1a73e8!important}',
    '#bbw-nav{display:flex!important;gap:5px!important}',
    '#bbw-nav button{width:28px!important;height:28px!important;border-radius:50%!important;border:1.5px solid #e0e0e0!important;background:transparent!important;color:#888!important;font-size:15px!important;cursor:pointer!important;display:flex!important;align-items:center!important;justify-content:center!important;transition:background .2s,color .2s!important;-webkit-tap-highlight-color:transparent!important}',
    '#bbw-nav button:hover{background:#111!important;color:#fff!important;border-color:#111!important}',

    /* ── SHOW/HIDE STATES ── */
    '#bbw-card{display:none!important}',
    '#bbw.bbw-open #bbw-pill{display:none!important}',
    '#bbw.bbw-open #bbw-card{display:flex!important}',

    '@keyframes bbwBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}',
    '@keyframes bbwRipple{0%{transform:scale(1);opacity:.5}100%{transform:scale(1.9);opacity:0}}',
    '#bbw-mob-btn::before{content:""!important;position:absolute!important;inset:0!important;border-radius:50%!important;background:rgba(66,133,244,.25)!important;animation:bbwRipple 2s ease-out infinite!important;pointer-events:none!important}',
    '#bbw-mob-btn{animation:bbwBob 2.8s ease-in-out 1s infinite!important}',

    /* ── MOBILE OVERRIDES ≤ 480px ── */
    /* Switch pill → icon, card becomes compact bottom-left sheet */
    '@media(max-width:480px){',
      '#bbw{bottom:90px!important;left:16px!important;width:auto!important}',
      /* hide desktop pill, show icon btn */
      '#bbw-pill{display:none!important}',
      '#bbw-mob-btn{display:flex!important}',
      /* when open: hide icon, show card */
      '#bbw.bbw-open #bbw-mob-btn{display:none!important;animation:none!important}',
      '#bbw.bbw-open #bbw-card{display:flex!important;width:min(320px,calc(100vw - 32px))!important;max-height:60vh!important;border-radius:16px!important;margin-bottom:10px!important}',
    '}'
  ].join('');

  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ── SVG HELPERS ── */
  var gLogo = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>';
  var starSvg = '<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
  var checkSvg = '<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
  var stars5 = starSvg+starSvg+starSvg+starSvg+starSvg;

  /* ── BUILD HTML ── */
  var root = document.createElement('div');
  root.id = 'bbw';

  root.innerHTML =
    /* card */
    '<div id="bbw-card">' +
      '<div id="bbw-head">' +
        '<div id="bbw-head-icon">' + gLogo + '</div>' +
        '<div id="bbw-head-copy"><strong>Verified Client Reviews</strong><span>5.0 \u00b7 42 reviews \u00b7 Google</span></div>' +
        '<div id="bbw-head-right">' +
          '<div id="bbw-rating"><svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>5.0</div>' +
          '<button id="bbw-close" aria-label="Close">\u2715</button>' +
        '</div>' +
      '</div>' +
      '<div id="bbw-progress"><div id="bbw-fill"></div></div>' +
      '<div id="bbw-body"></div>' +
      '<div id="bbw-foot">' +
        '<div id="bbw-counter"><strong>1</strong> / ' + TOTAL + '</div>' +
        '<a id="bbw-viewall" href="' + GOOGLE_URL + '" target="_blank" rel="noopener">All reviews \u2197</a>' +
        '<div id="bbw-nav"><button id="bbwP" aria-label="Previous">\u2039</button><button id="bbwN" aria-label="Next">\u203a</button></div>' +
      '</div>' +
    '</div>' +
    /* desktop pill */
    '<div id="bbw-pill">' +
      '<div id="bbw-pill-icon">' + gLogo + '</div>' +
      '<div id="bbw-pill-text"><strong>Client Reviews</strong><span>Verified on Google</span></div>' +
      '<div id="bbw-pill-right">' +
        '<div id="bbw-pill-score"><svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>5.0</div>' +
        '<div id="bbw-pill-stars">' + stars5 + '</div>' +
      '</div>' +
    '</div>' +
    /* mobile icon button */
    '<div id="bbw-mob-btn" aria-label="See reviews">' +
      gLogo +
      '<div id="bbw-mob-badge">' +
        '<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>' +
        '5.0' +
      '</div>' +
    '</div>';

  document.body.appendChild(root);

  /* ── BUILD SLIDES ── */
  var bodyEl  = root.querySelector('#bbw-body');
  var fillEl  = root.querySelector('#bbw-fill');
  var counter = root.querySelector('#bbw-counter');

  REVIEWS.forEach(function(r, i) {
    var el = document.createElement('div');
    el.className = 'bbw-slide' + (i === 0 ? ' bbw-on' : '');
    el.innerHTML =
      '<div class="bbw-s-stars">' + Array(r.stars).fill(starSvg).join('') + '</div>' +
      '<div class="bbw-s-text">\u201c' + r.text + '\u201d</div>' +
      '<div class="bbw-s-author">' +
        '<div class="bbw-s-avatar">' + r.ini + '</div>' +
        '<div class="bbw-s-info"><span class="bbw-s-name">' + r.name + '</span><span class="bbw-s-loc">Google Review</span></div>' +
        '<div class="bbw-s-verified">' + checkSvg + ' Verified</div>' +
      '</div>';
    bodyEl.appendChild(el);
  });

  /* ── LOGIC ── */
  function updateCounter(){ counter.innerHTML = '<strong>'+(cur+1)+'</strong> / '+TOTAL; }

  function goTo(idx){
    root.querySelectorAll('.bbw-slide')[cur].classList.remove('bbw-on');
    cur = (idx+TOTAL)%TOTAL;
    root.querySelectorAll('.bbw-slide')[cur].classList.add('bbw-on');
    bodyEl.scrollTop = 0;
    updateCounter();
    bbwReset();
  }

  function bbwReset(){
    clearInterval(pt); pv=0; fillEl.style.width='0%';
    pt = setInterval(function(){
      pv += 100/(AUTO/100);
      if(pv>=100){ pv=0; goTo(cur+1); return; }
      fillEl.style.width = pv+'%';
    },100);
  }
  window.bbwReset = bbwReset;
  updateCounter();

  var isMobile = function(){ return window.innerWidth <= 480; };

  function openWidget(){
    root.classList.add('bbw-open');
    bbwReset();
  }
  function closeWidget(){
    root.classList.remove('bbw-open');
    clearInterval(pt);
  }

  root.querySelector('#bbwN').addEventListener('click', function(){ goTo(cur+1); });
  root.querySelector('#bbwP').addEventListener('click', function(){ goTo(cur-1); });
  root.querySelector('#bbw-close').addEventListener('click', closeWidget);
  root.querySelector('#bbw-pill').addEventListener('click', openWidget);
  root.querySelector('#bbw-mob-btn').addEventListener('click', openWidget);

  var card = root.querySelector('#bbw-card');
  card.addEventListener('mouseenter', function(){ clearInterval(pt); });
  card.addEventListener('mouseleave', function(){ if(root.classList.contains('bbw-open')) bbwReset(); });

  document.addEventListener('click', function(e){
    if(root.classList.contains('bbw-open') && !root.contains(e.target)) closeWidget();
  });

  /* Auto-open on desktop only */
  setTimeout(function(){
    if(!isMobile()) openWidget();
  }, 3000);
})();
