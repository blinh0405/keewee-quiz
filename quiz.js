// ══════════════════════════════════════════════
//  KEEWEE — Which Matcha Are You? quiz logic
//  v2 — direct drink scoring for full variety
// ══════════════════════════════════════════════

const DRINKS = [
  {
    id: "OG_Matcha",
    name: "OG Matcha",
    img: "images/OG_Matcha.jpg",
    vibe: "The timeless one. You don't need the extras — you ARE the main character.",
    desc: "Pure, clean, unfussy. You know what you like and you don't apologize for it."
  },
  {
    id: "Strawberry_Matcha",
    name: "Strawberry Matcha",
    img: "images/Strawberry_Matcha.jpg",
    vibe: "Soft-girl era activated. Your playlist is full of Clairo and you own at least three lip glosses.",
    desc: "Sweet, fruity, and effortlessly pretty. You make everything look cute without even trying."
  },
  {
    id: "Strawberry_and_Cream_Matcha",
    name: "Strawberry & Cream Matcha",
    img: "images/Strawberry_and_Cream_Matcha.jpg",
    vibe: "Cottagecore meets clean girl. You're the friend who brings homemade snacks.",
    desc: "Indulgent but delicate. You're the kind of person who makes ordinary moments feel special."
  },
  {
    id: "Coconut_Cream_Matcha",
    name: "Coconut Cream Matcha",
    img: "images/Coconut_Cream_Matcha.jpg",
    vibe: "You give beach day in November. Chronically relaxed, zero stress, total vibe.",
    desc: "Smooth and tropical with a dreamy finish. You make every room feel like a vacation."
  },
  {
    id: "Pistachio_Matcha",
    name: "Pistachio Matcha",
    img: "images/Pistachio_Matcha.jpg",
    vibe: "You have a carefully curated Pinterest board and it's genuinely impressive.",
    desc: "Nutty, sophisticated, and deeply satisfying. You have taste — and everyone knows it."
  },
  {
    id: "Ube_Matcha",
    name: "Ube Matcha",
    img: "images/Ube_Matcha.jpg",
    vibe: "You are the main character in every group photo. Boldly yourself, always.",
    desc: "Vibrant, unexpected, and unforgettable. You walk into a room and people notice."
  },
  {
    id: "Black_Sesame_Matcha",
    name: "Black Sesame Matcha",
    img: "images/Black_Sesame_Matcha.jpg",
    vibe: "Mysterious, knows the best underground music, has excellent taste in films.",
    desc: "Dark, complex, and deeply interesting. You're not trying to be different — you just are."
  },
  {
    id: "Tiramisu_Matcha",
    name: "Tiramisu Matcha",
    img: "images/Tiramisu_Matcha.jpg",
    vibe: "You romanticize everything, your camera roll is basically a film reel.",
    desc: "Layered, warm, and indulgent. You live for cozy evenings and good conversations."
  },
  {
    id: "Banana_Pudding_Matcha",
    name: "Banana Pudding Matcha",
    img: "images/Banana_Pudding_Matcha.jpg",
    vibe: "The life of the party. You'd find a way to make a dentist appointment fun.",
    desc: "Playful, comforting, and always a good time. You're everyone's favourite person in the room."
  },
  {
    id: "Lemon_Curd_Matcha",
    name: "Lemon Curd Matcha",
    img: "images/Lemon_Curd_Matcha.jpg",
    vibe: "Zesty and fresh — you're the friend who starts the group chat and keeps it alive.",
    desc: "Bright, tangy, and energising. You bring the good energy wherever you go."
  },
  {
    id: "Jasmine_Matcha",
    name: "Jasmine Matcha",
    img: "images/Jasmine_Matcha.jpg",
    vibe: "Soft-spoken but unforgettable. You have a signature scent and an excellent book collection.",
    desc: "Floral, delicate, and quietly captivating. The kind of person people think about after they leave."
  },
  {
    id: "Red_Bean_Matcha",
    name: "Red Bean Matcha",
    img: "images/Red_Bean_Matcha.jpg",
    vibe: "Sentimental, warm, the keeper of memories and recipes. You remember everyone's birthday.",
    desc: "Deeply warming and comforting. You're the friend people call when they need grounding."
  },
  {
    id: "Kinako_Matcha",
    name: "Kinako Matcha",
    img: "images/Kinako_Matcha.jpg",
    vibe: "Quietly obsessed with things nobody else knows about yet. Certified tastemaker.",
    desc: "Toasty, nutty, and surprisingly complex. You have a unique lens on the world."
  },
  {
    id: "Corn_milk_Matcha",
    name: "Corn Milk Matcha",
    img: "images/Corn_milk_Matcha.jpg",
    vibe: "Totally unafraid to be yourself — chaotic good, incredibly fun, always memorable.",
    desc: "Sweet, unexpected, and wonderfully odd. You're the most interesting person at any table."
  },
  {
    id: "Earth_Day_Matcha",
    name: "Earth Day Matcha",
    img: "images/Earth_Day_Matcha.jpg",
    vibe: "Sustainably chic. You carry a tote bag, know your farmers market vendor by name.",
    desc: "Fresh, grounded, and full of good intentions. You make living well look effortless."
  },
  {
    id: "Protein_Matcha",
    name: "Protein Matcha",
    img: "images/Protein_Matcha.jpg",
    vibe: "Hot girl walk era. You have a morning routine that actually works and people are jealous.",
    desc: "Strong, purposeful, and always showing up. You don't just talk about your goals — you do them."
  }
];

// ── Direct scoring: each answer adds points to specific drink IDs ──
// Every drink appears across multiple questions so all 16 are reachable
const QUESTIONS = [
  {
    emoji: "✈️",
    text: "It's a long flight. You're:",
    choices: [
      { icon: "😴", text: "Asleep within 10 mins, no thoughts",                       drinks: ["Jasmine_Matcha", "Coconut_Cream_Matcha", "OG_Matcha"] },
      { icon: "🎬", text: "Watching 3 films back to back, fully committed",            drinks: ["Tiramisu_Matcha", "Banana_Pudding_Matcha", "Strawberry_and_Cream_Matcha"] },
      { icon: "📓", text: "Journaling and making lists for my life reset",             drinks: ["Pistachio_Matcha", "Earth_Day_Matcha", "Kinako_Matcha"] },
      { icon: "🗣️", text: "Talking to the person next to me, new best friend",        drinks: ["Lemon_Curd_Matcha", "Ube_Matcha", "Corn_milk_Matcha"] }
    ]
  },
  {
    emoji: "🌅",
    text: "Your ideal Saturday morning looks like…",
    choices: [
      { icon: "🧘", text: "Slow yoga, journaling, golden hour light",                 drinks: ["Jasmine_Matcha", "OG_Matcha", "Earth_Day_Matcha"] },
      { icon: "☕", text: "Farmers market with a friend, then brunch",                drinks: ["Strawberry_Matcha", "Coconut_Cream_Matcha", "Banana_Pudding_Matcha"] },
      { icon: "🎨", text: "Half a canvas, lo-fi music, total focus",                  drinks: ["Pistachio_Matcha", "Black_Sesame_Matcha", "Kinako_Matcha"] },
      { icon: "🏃", text: "Morning run before anyone else is awake",                  drinks: ["Protein_Matcha", "Lemon_Curd_Matcha", "Ube_Matcha"] }
    ]
  },
  {
    emoji: "🎵",
    text: "What's playing on your headphones right now?",
    choices: [
      { icon: "🎸", text: "Clairo or Rex Orange County — indie soft girl hours",      drinks: ["Strawberry_Matcha", "Jasmine_Matcha", "Tiramisu_Matcha"] },
      { icon: "🎹", text: "NewJeans or aespa — clean pop, good vibes only",           drinks: ["Strawberry_and_Cream_Matcha", "Lemon_Curd_Matcha", "Coconut_Cream_Matcha"] },
      { icon: "🎷", text: "Frank Ocean or Tyler the Creator — deep and layered",      drinks: ["Black_Sesame_Matcha", "Red_Bean_Matcha", "Kinako_Matcha"] },
      { icon: "🔊", text: "Whatever's trending — I like to stay in the loop",         drinks: ["Banana_Pudding_Matcha", "Corn_milk_Matcha", "Ube_Matcha"] }
    ]
  },
  {
    emoji: "🛍️",
    text: "Pick your dream Saturday afternoon:",
    choices: [
      { icon: "📚", text: "Bookshop browsing + a solo coffee shop sit",               drinks: ["OG_Matcha", "Black_Sesame_Matcha", "Jasmine_Matcha"] },
      { icon: "🛒", text: "Thrift haul + bubble tea with my bestie",                  drinks: ["Ube_Matcha", "Corn_milk_Matcha", "Banana_Pudding_Matcha"] },
      { icon: "🎬", text: "Art gallery, then a film with good cinematography",        drinks: ["Pistachio_Matcha", "Tiramisu_Matcha", "Kinako_Matcha"] },
      { icon: "🌿", text: "Park picnic, totally offline",                             drinks: ["Earth_Day_Matcha", "Red_Bean_Matcha", "Coconut_Cream_Matcha"] }
    ]
  },
  {
    emoji: "🐾",
    text: "Pick an animal that's lowkey you:",
    choices: [
      { icon: "🐱", text: "Cat — independent, mysterious, selectively affectionate",  drinks: ["Black_Sesame_Matcha", "Kinako_Matcha", "OG_Matcha"] },
      { icon: "🐶", text: "Golden retriever — enthusiastic, warm, everyone loves them", drinks: ["Strawberry_Matcha", "Banana_Pudding_Matcha", "Lemon_Curd_Matcha"] },
      { icon: "🦋", text: "Butterfly — ethereal, delicate, beautiful from every angle", drinks: ["Jasmine_Matcha", "Strawberry_and_Cream_Matcha", "Tiramisu_Matcha"] },
      { icon: "🐺", text: "Wolf — loyal to their pack, low-key powerful",             drinks: ["Protein_Matcha", "Red_Bean_Matcha", "Ube_Matcha"] }
    ]
  },
  {
    emoji: "🌙",
    text: "It's 11pm. You're most likely…",
    choices: [
      { icon: "📱", text: "Doomscrolling Pinterest for apartment inspo",              drinks: ["Pistachio_Matcha", "Strawberry_Matcha", "Earth_Day_Matcha"] },
      { icon: "📖", text: "Reading, one chapter turned into five",                    drinks: ["OG_Matcha", "Red_Bean_Matcha", "Jasmine_Matcha"] },
      { icon: "🎮", text: "FaceTiming my friend for 2 hours about nothing",          drinks: ["Coconut_Cream_Matcha", "Banana_Pudding_Matcha", "Strawberry_and_Cream_Matcha"] },
      { icon: "🎧", text: "Making a new playlist that perfectly captures my mood",   drinks: ["Black_Sesame_Matcha", "Tiramisu_Matcha", "Kinako_Matcha"] }
    ]
  },
  {
    emoji: "🌸",
    text: "Which vibe is your aesthetic?",
    choices: [
      { icon: "🤍", text: "Clean girl — white linen, glass skin, less is more",      drinks: ["OG_Matcha", "Jasmine_Matcha", "Pistachio_Matcha"] },
      { icon: "🌷", text: "Soft romantic — lace, florals, golden light everywhere",   drinks: ["Strawberry_Matcha", "Tiramisu_Matcha", "Strawberry_and_Cream_Matcha"] },
      { icon: "🖤", text: "Art kid — thrifted, layered, reference photo in pocket",   drinks: ["Black_Sesame_Matcha", "Kinako_Matcha", "Ube_Matcha"] },
      { icon: "🌈", text: "Dopamine dressing — colour, pattern, full send",           drinks: ["Corn_milk_Matcha", "Lemon_Curd_Matcha", "Banana_Pudding_Matcha"] }
    ]
  },
  {
    emoji: "🍕",
    text: "Pizza order — this says everything about you:",
    choices: [
      { icon: "🧀", text: "Plain margherita. A classic done perfectly.",              drinks: ["OG_Matcha", "Coconut_Cream_Matcha", "Red_Bean_Matcha"] },
      { icon: "🍓", text: "Burrata with prosciutto and fig jam. Fancy but fun.",      drinks: ["Strawberry_and_Cream_Matcha", "Pistachio_Matcha", "Tiramisu_Matcha"] },
      { icon: "🌶️", text: "Spicy everything, extra cheese, no notes.",                drinks: ["Protein_Matcha", "Ube_Matcha", "Lemon_Curd_Matcha"] },
      { icon: "🌿", text: "Loaded veggie. Surprising combo that somehow works.",      drinks: ["Earth_Day_Matcha", "Kinako_Matcha", "Corn_milk_Matcha"] }
    ]
  },
  {
    emoji: "✈️",
    text: "Dream trip destination:",
    choices: [
      { icon: "🗼", text: "Paris — picnics, museums, croissants at every corner",    drinks: ["Tiramisu_Matcha", "Strawberry_Matcha", "Jasmine_Matcha"] },
      { icon: "🏄", text: "Bali — rice fields, surf, completely offline",             drinks: ["Coconut_Cream_Matcha", "Earth_Day_Matcha", "OG_Matcha"] },
      { icon: "🌃", text: "Tokyo — 7-Eleven snacks, neon lights, sensory overload",  drinks: ["Ube_Matcha", "Black_Sesame_Matcha", "Corn_milk_Matcha"] },
      { icon: "🏡", text: "English countryside — cozy, rainy, absolutely perfect",   drinks: ["Red_Bean_Matcha", "Strawberry_and_Cream_Matcha", "Kinako_Matcha"] }
    ]
  },
  {
    emoji: "🎭",
    text: "In your friend group you're the one who…",
    choices: [
      { icon: "🗺️", text: "Always has a plan, researched all the spots",             drinks: ["Protein_Matcha", "Lemon_Curd_Matcha", "Pistachio_Matcha"] },
      { icon: "🤗", text: "Everyone vents to, you give the best advice",             drinks: ["Red_Bean_Matcha", "Strawberry_and_Cream_Matcha", "Coconut_Cream_Matcha"] },
      { icon: "📸", text: "Makes everything look good on camera",                    drinks: ["Ube_Matcha", "Strawberry_Matcha", "Earth_Day_Matcha"] },
      { icon: "😂", text: "Keeps the group chat chaotic and alive",                  drinks: ["Banana_Pudding_Matcha", "Corn_milk_Matcha", "Lemon_Curd_Matcha"] }
    ]
  },
  {
    emoji: "💅",
    text: "Pick your ideal self-care Sunday:",
    choices: [
      { icon: "🛁", text: "Long bath, candle, podcast, totally logged off",          drinks: ["Jasmine_Matcha", "OG_Matcha", "Tiramisu_Matcha"] },
      { icon: "💆", text: "Face mask, order in, comfort show rewatch",               drinks: ["Strawberry_and_Cream_Matcha", "Red_Bean_Matcha", "Banana_Pudding_Matcha"] },
      { icon: "🎨", text: "Rearrange my room, new playlist, creative reset",         drinks: ["Pistachio_Matcha", "Black_Sesame_Matcha", "Kinako_Matcha"] },
      { icon: "🏋️", text: "Gym, then a long walk, feel like a new person",           drinks: ["Protein_Matcha", "Lemon_Curd_Matcha", "Corn_milk_Matcha"] }
    ]
  },
  {
    emoji: "🌟",
    text: "Your life is a movie. What's the genre?",
    choices: [
      { icon: "🎬", text: "Coming-of-age indie — soft lighting, good soundtrack",    drinks: ["Strawberry_Matcha", "Jasmine_Matcha", "Coconut_Cream_Matcha"] },
      { icon: "🕵️", text: "Art-house mystery — stylish, slow-burn, twist ending",    drinks: ["Black_Sesame_Matcha", "Kinako_Matcha", "Pistachio_Matcha"] },
      { icon: "🎉", text: "Feel-good rom-com — chaotic, charming, ends with dancing", drinks: ["Banana_Pudding_Matcha", "Corn_milk_Matcha", "Ube_Matcha"] },
      { icon: "🌄", text: "Quiet documentary about someone living beautifully",      drinks: ["Earth_Day_Matcha", "Red_Bean_Matcha", "Protein_Matcha"] }
    ]
  }
];

// ── State ──────────────────────────────────────
let scores = {};
let currentQ = 0;
let resultDrink = null;

function initScores() {
  scores = {};
  DRINKS.forEach(d => scores[d.id] = 0);
}

// ── Screen transitions ─────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
}

// ── Start ──────────────────────────────────────
function startQuiz() {
  initScores();
  currentQ = 0;
  showScreen('quiz');
  renderQuestion();
}

// ── Render a question ─────────────────────────
function renderQuestion() {
  const q = QUESTIONS[currentQ];
  const pct = Math.round((currentQ / QUESTIONS.length) * 100);

  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-step').textContent = `${currentQ + 1} / ${QUESTIONS.length}`;
  document.getElementById('progress-pct').textContent = pct + '%';

  for (let i = 0; i < QUESTIONS.length; i++) {
    const dot = document.getElementById('dot-' + i);
    if (!dot) continue;
    dot.className = 'dot';
    if (i < currentQ)   dot.classList.add('done');
    if (i === currentQ) dot.classList.add('active');
  }

  document.getElementById('q-emoji').textContent = q.emoji;
  document.getElementById('q-text').textContent = q.text;
  document.getElementById('q-label').textContent = `Question ${currentQ + 1}`;

  const wrap = document.getElementById('choices-wrap');
  wrap.innerHTML = '';
  q.choices.forEach((c) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `
      <span class="choice-icon">${c.icon}</span>
      <span class="choice-text">${c.text}</span>
      <span class="check-circle">✓</span>
    `;
    btn.addEventListener('click', () => selectChoice(btn, c.drinks));
    wrap.appendChild(btn);
  });
}

// ── Select a choice ───────────────────────────
function selectChoice(btn, drinkIds) {
  document.querySelectorAll('.choice-btn').forEach(b => b.style.pointerEvents = 'none');
  btn.classList.add('selected');
  drinkIds.forEach(id => { if (scores[id] !== undefined) scores[id]++; });

  setTimeout(() => {
    currentQ++;
    if (currentQ < QUESTIONS.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 380);
}

// ── Compute result — tiebreaker shuffles ties ─
function computeResult() {
  const drinkScores = DRINKS.map(d => ({ drink: d, score: scores[d.id] }));
  drinkScores.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return Math.random() - 0.5;
  });
  return drinkScores[0].drink;
}

// ── Show result ───────────────────────────────
function showResult() {
  resultDrink = computeResult();

  document.getElementById('res-img').src = resultDrink.img;
  document.getElementById('res-img').alt = resultDrink.name;
  document.getElementById('res-name').innerHTML = resultDrink.name;
  document.getElementById('res-vibe').textContent = resultDrink.vibe;
  document.getElementById('res-desc').textContent = resultDrink.desc;

  const others = DRINKS.filter(d => d.id !== resultDrink.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  document.getElementById('also-grid').innerHTML = others.map(d => `
    <div class="also-card">
      <img src="${d.img}" alt="${d.name}" loading="lazy" />
      <div class="also-card-name">${d.name}</div>
    </div>
  `).join('');

  showScreen('result');
}

// ── Share ─────────────────────────────────────
function shareResult() {
  if (!resultDrink) return;
  const text = `I took the Keewee matcha quiz and I'm "${resultDrink.name}" 🍵✨ — find out which matcha you are!`;
  if (navigator.share) {
    navigator.share({ title: 'Keewee — Which Matcha Are You?', text, url: window.location.href });
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text + ' ' + window.location.href);
    const btn = document.getElementById('share-btn');
    const original = btn.textContent;
    btn.textContent = 'Copied! ✓';
    setTimeout(() => btn.textContent = original, 2000);
  }
}

// ── Restart ───────────────────────────────────
function restartQuiz() {
  showScreen('start');
}

// ── Build dot indicators on load ─────────────
function buildDots() {
  const wrap = document.getElementById('dots-wrap');
  wrap.innerHTML = '';
  QUESTIONS.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.id = 'dot-' + i;
    wrap.appendChild(dot);
  });
}

document.addEventListener('DOMContentLoaded', buildDots);
