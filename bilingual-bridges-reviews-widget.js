<script>
(function(){ 
  var GOOGLE_URL = 'https://www.google.com/maps/place/Bilingual+Bridges/@39.8669469,-86.1524951,17z';

  var REVIEWS = [
    { text: 'The summer pass was amazing for many families, but especially for a family that I am well familiar with — they have six children and four of those children were able to do unlimited classes Monday through Sunday at the cost of $49 for the whole family. Thank you so much for making this provision. I know they are going to benefit greatly for the upcoming school year.', name: 'Elsa Helms', ini: 'EH', stars: 5 },
    { text: 'Bilingual Bridges provides kids with opportunities to enhance reading and math skills aligned with school requirements, while also offering language, cooking, and art activities for fun. The program features a fantastic work atmosphere and customized curriculums designed by experts.', name: 'Samanta Rogers', ini: 'SR', stars: 5 },
    { text: 'I love the flexibility of Bilingual Bridges. Fátima is fantastic. She uses a variety of creative techniques and teaching styles to make Spanish fun and engaging. We are finally turning a corner and my daughter is again enthusiastic about learning and speaking Spanish.', name: 'Holly Mulvenon', ini: 'HM', stars: 5 },

    { text: 'Son personas realmente buenas en todo las materias.', name: 'Yazmin Elizabeth Pérez Vargas', ini: 'YP', stars: 5 },
    { text: 'Muy agradecida y satisfactoria con las clases, son personas muy amables. Great price.', name: 'Yulenis Ricardo Pupo', ini: 'YR', stars: 5 },

    { text: 'We’ve had such a wonderful experience with Sophie from Bilingual Bridges! She is an incredibly patient, kind, and dedicated Spanish tutor. Sophie goes above and beyond to create engaging, fun activities that keep my daughter excited about learning, and she thoughtfully tailors each lesson to meet her individual needs. My daughter has Down syndrome, and it means so much to us to have a tutor who truly understands how to connect with her and support her learning style. She absolutely loves working with Sophie and looks forward to every session. I highly recommend Sophie to any family looking for a compassionate, creative, and effective Spanish teacher!', name: 'Therese', ini: 'TH', stars: 5 },

    { text: 'My son’s Italian teacher, Giulia, has been wonderful! She is flexible with scheduling, very responsive and communicative via email and assigns age-appropriate, manageable assignments so he can learn the basics of conversational Italian. Grazie mille, Giulia!', name: 'Neha Robinson', ini: 'NR', stars: 5 },
    { text: 'Maestra Fátima is an excellent Spanish instructor; in our weekly conversation focused lessons she provides an excellent environment to develop conversational skills, while giving me good feedback and notes to improve grammar, and always providing encouragement. I highly recommend anyone looking to develop their Spanish language skills to working with Fátima!', name: 'bwk111', ini: 'BK', stars: 5 },
    { text: 'Our grandson is a part of Bilingual Bridges where Ms Hernandez has been his Spanish tutor for close to a year! He is a part of a bilingual program and needed help with conversation Spanish. We were so blessed to have found Ms Hernandez! She enjoys teaching and finds creative ways to keep a child’s attention. We have seen our grandson improve in Spanish under Ms Hernandez! Thank you Ms Hernandez for all you do!', name: 'Githa Amarnath', ini: 'GA', stars: 5 },
    { text: 'My son has been tutored by Fatima since last summer. Fatima is an awesome teacher, she is always responsible and flexible — sometimes when we missed the lesson, she left homework through emails so students can catch up next time. My son obviously enjoys his weekly meeting with Fatima and practices Spanish. We will definitely continue with Fatima and Bilingual Bridges into next year.', name: 'Lifang Xu', ini: 'LX', stars: 5 },
    { text: 'We love Fatima! She has such great energy and is very kind. My daughter is always laughing and is very engaged during the lesson, which I love to see. My daughter says she learns more from Fatima than her teacher at school (she has Spanish 50% of the time). We’ve also noticed a real improvement in her pronunciation.', name: 'Sarah Croco', ini: 'SC', stars: 5 },
    { text: 'We have really enjoyed Bilingual Bridges! Fatima is able to engage my daughter so easily. My daughter is a shy 12 year old, and was hesitant to speak Spanish out loud at school but Fatima uses games and a heavy dose of sweet encouragement to bring her out of her shell. The scheduling and online format is super convenient. I highly recommend Bilingual Bridges!', name: 'Agnes Scoville', ini: 'AS', stars: 5 },
    { text: 'Our son has been taking Spanish classes with Fatima for a few months now and we all couldn’t be happier with her. Fatima clearly puts a lot of effort into preparing every class. She tailors her classes to our son’s interests and keeps him engaged with songs, dances, games, crafts, stories, and conversations. Fatima is always on time, always friendly and upbeat, and always well prepared yet flexible to respond to input from our son. Every class has been fun and we look forward to hopefully having many more classes with her!', name: 'Corinna Weber', ini: 'CW', stars: 5 },
    { text: 'I am very pleased with tutoring through Bilingual Bridges. We absolutely adore my child’s teacher Ms. Fatima! My child looks forward to speaking with her every week and the classes are very stimulating and engaging. I also appreciate being able to review the class recordings on Google Classroom each week. Ms. Fatima is professional, consistent and reliable. She is excellent at managing a hyper 5-year-old and keeping her interested, engaged and learning for the full session week after week. Working with Ms. Fatima has exceeded my expectations of online language tutoring.', name: 'Diana J. Wall', ini: 'DJ', stars: 5 },
    { text: 'Gail is a super amazing tutor. My daughter has worked with her in the past for reading and currently works with her on math tutoring. Gail is very patient, kind and effective. My daughter really enjoys the tutoring sessions!', name: 'Unsook Sim', ini: 'US', stars: 5 },
    { text: 'We (both my daughter and I) have been taking lessons with Fatima from Bilingual Bridges now for a few months. We love the way that she prepares just the right balance of work and meaningful conversation for each lesson. My 10 year old daughter also said that she speaks with her throughout her entire lesson in Spanish! She immediately taught her to say "como se dice" so that she too can speak as much as possible. Very grateful we found Fatima and we highly recommend working with her!', name: 'Valerie Rios', ini: 'VR', stars: 5 },
    { text: 'My 7 year old daughter is in a Spanish Immersion program and we use Bilingual Bridges as a supplement to her schoolwork. She has had weekly virtual lessons with Fátima for almost a year. Fátima is very engaging and caters to my daughter’s interests in her lessons. I love hearing my daughter speak in Spanish with Fátima each week! My daughter says “It’s a very fun class and I wish I could do it every day!”', name: 'Erica Truex', ini: 'ET', stars: 5 },
    { text: 'Bilingual Bridges provides the rare opportunity to learn from well prepared native speakers providing a most enjoyable language learning experience.', name: 'Suzann Ellis', ini: 'SE', stars: 5 },
    { text: 'Ofrecen una herramienta fantástica en el aprendizaje de nuestros hijos con profesores muy capacitados en la enseñanzas y aunque no pude hacer uso del pase de verano espero que nos tomen en cuenta para que mi hija pueda seguir en el programa. Muchas gracias por toda su ayuda.', name: 'Fyorella Garcia', ini: 'FG', stars: 5 },
    { text: 'Es lo mejor que le ha pasado a mi hijo al encontrar esta organización, ya que le ha ayudado mucho en su formación de inglés y matemáticas, me encanta y les agradezco mucho por su ayuda.', name: 'Yesica Ponce', ini: 'YP', stars: 5 },
    { text: 'I’m really glad that my kids learned so much from this program and I hope this will continue.', name: 'Dhahra Mohamed', ini: 'DM', stars: 5 },
    { text: 'Muy contenta de formar parte de este inmenso grupo conformado por teachers de todas partes del mundo. Me gusta mucho la dinámica y organización. ¡Siempre espero con ansias mi próxima clase!', name: 'Julieta BB', ini: 'JB', stars: 5 },
    { text: 'Ibeth was amazing!', name: 'Jordan Beauprez', ini: 'JB', stars: 5 }
  ];

  var TOTAL = REVIEWS.length;
  var AUTO = 7000, cur = 0, pv = 0, pt = null;
  var FF = "-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif";

  var css = '/* your original CSS stays unchanged */';
  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  var gLogo = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#4285F4"/></svg>';
  var starSvg = '<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
  var checkSvg = '<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
  var stars5 = starSvg+starSvg+starSvg+starSvg+starSvg;

  var root = document.createElement('div');
  root.id = 'bbw';

  root.innerHTML =
    '<div id="bbw-card">' +
      '<div id="bbw-head">' +
        '<div id="bbw-head-icon">' + gLogo + '</div>' +
        '<div id="bbw-head-copy"><strong>Verified Client Reviews</strong><span>5.0 · 42 reviews · Google</span></div>' +
        '<div id="bbw-head-right">' +
          '<div id="bbw-rating"><svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>5.0</div>' +
          '<button id="bbw-close">×</button>' +
        '</div>' +
      '</div>' +
      '<div id="bbw-body"></div>' +
    '</div>';

  document.body.appendChild(root);

  var bodyEl = root.querySelector('#bbw-body');

  REVIEWS.forEach(function(r) {
    var el = document.createElement('div');
    el.innerHTML =
      '<div>' + stars5 + '</div>' +
      '<div>“' + r.text + '”</div>' +
      '<div><strong>' + r.name + '</strong></div>';
    bodyEl.appendChild(el);
  });

})();
</script>
