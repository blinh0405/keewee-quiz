// ══════════════════════════════════════════════
//  KEEWEE — Which Matcha Are You? quiz logic
// ══════════════════════════════════════════════

// Each drink maps to a "flavor profile" tag.
// Questions award tags, and the drink with the most matching tags wins.

const DRINKS = [
  {
    id: "OG_Matcha",
    name: "OG Matcha",
    img: "images/OG_Matcha.jpg",
    tags: ["classic", "calm", "minimal", "purist"],
    vibe: "The timeless one. You don't need the extras — you ARE the main character.",
    desc: "Pure, clean, unfussy. You know what you like and you don't apologize for it."
  },
  {
    id: "Strawberry_Matcha",
    name: "Strawberry Matcha",
    img: "images/Strawberry_Matcha.jpg",
    tags: ["sweet", "romantic", "soft", "dreamy"],
    vibe: "Soft-girl era activated. Your playlist is full of Clairo and you own at least three lip glosses.",
    desc: "Sweet, fruity, and effortlessly pretty. You make everything look cute without even trying."
  },
  {
    id: "Strawberry_and_Cream_Matcha",
    name: "Strawberry & Cream Matcha",
    img: "images/Strawberry_and_Cream_Matcha.jpg",
    tags: ["sweet", "cozy", "romantic", "dreamy"],
    vibe: "Cottagecore meets clean girl. You're the friend who brings homemade snacks.",
    desc: "Indulgent but delicate. You're the kind of person who makes ordinary moments feel special."
  },
  {
    id: "Coconut_Cream_Matcha",
    name: "Coconut Cream Matcha",
    img: "images/Coconut_Cream_Matcha.jpg",
    tags: ["chill", "breezy", "soft", "social"],
    vibe: "You give beach day in November. Chronically relaxed, zero stress, total vibe.",
    desc: "Smooth and tropical with a dreamy finish. You make every room feel like a vacation."
  },
  {
    id: "Pistachio_Matcha",
    name: "Pistachio Matcha",
    img: "images/Pistachio_Matcha.jpg",
    tags: ["earthy", "aesthetic", "artsy", "minimal"],
    vibe: "You have a carefully curated Pinterest board and it's genuinely impressive.",
    desc: "Nutty, sophisticated, and deeply satisfying. You have taste — and everyone knows it."
  },
  {
    id: "Ube_Matcha",
    name: "Ube Matcha",
    img: "images/Ube_Matcha.jpg",
    tags: ["bold", "artsy", "unique", "social"],
    vibe: "You are the main character in every group photo. Boldly yourself, always.",
    desc: "Vibrant, unexpected, and unforgettable. You walk into a room and people notice."
  },
  {
    id: "Black_Sesame_Matcha",
    name: "Black Sesame Matcha",
    img: "images/Black_Sesame_Matcha.jpg",
    tags: ["deep", "cool", "unique", "purist"],
    vibe: "Mysterious, knows the best underground music, has excellent taste in films.",
    desc: "Dark, complex, and deeply interesting. You're not trying to be different — you just are."
  },
  {
    id: "Tiramisu_Matcha",
    name: "Tiramisu Matcha",
    img: "images/Tiramisu_Matcha.jpg",
    tags: ["cozy", "sweet", "dreamy", "romantic"],
    vibe: "You romanticize everything, your camera roll is basically a film reel.",
    desc: "Layered, warm, and indulgent. You live for cozy evenings and good conversations."
  },
  {
    id: "Banana_Pudding_Matcha",
    name: "Banana Pudding Matcha",
    img: "images/Banana_Pudding_Matcha.jpg",
    tags: ["fun", "sweet", "social", "nostalgic"],
    vibe: "The life of the party. You'd find a way to make a dentist appointment fun.",
    desc: "Playful, comforting, and always a good time. You're everyone's favourite person in the room."
  },
  {
    id: "Lemon_Curd_Matcha",
    name: "Lemon Curd Matcha",
    img: "images/Lemon_Curd_Matcha.jpg",
    tags: ["bright", "bold", "breezy", "fun"],
    vibe: "Zesty and fresh — you're the friend who starts the group chat and keeps it alive.",
    desc: "Bright, tangy, and energising. You bring the good energy wherever you go."
  },
  {
    id: "Jasmine_Matcha",
    name: "Jasmine Matcha",
    img: "images/Jasmine_Matcha.jpg",
    tags: ["calm", "aesthetic", "dreamy", "minimal"],
    vibe: "Soft-spoken but unforgettable. You have a signature scent and an excellent book collection.",
    desc: "Floral, delicate, and quietly captivating. The kind of person people think about after they leave."
  },
  {
    id: "Red_Bean_Matcha",
    name: "Red Bean Matcha",
    img: "images/Red_Bean_Matcha.jpg",
    tags: ["earthy", "cozy", "nostalgic", "deep"],
    vibe: "Sentimental, warm, the keeper of memories and recipes. You remember everyone's birthday.",
    desc: "Deeply warming and comforting. You're the friend people call when they need grounding."
  },
  {
    id: "Kinako_Matcha",
    name: "Kinako Matcha",
    img: "images/Kinako_Matcha.jpg",
    tags: ["earthy", "unique", "purist", "cool"],
    vibe: "Quietly obsessed with things nobody else knows about yet. Certified tastemaker.",
    desc: "Toasty, nutty, and surprisingly complex. You have a unique lens on the world."
  },
  {
    id: "Corn_milk_Matcha",
    name: "Corn Milk Matcha",
    img: "images/Corn_milk_Matcha.jpg",
    tags: ["fun", "bold", "unique", "nostalgic"],
    vibe: "Totally unafraid to be yourself — chaotic good, incredibly fun, always memorable.",
    desc: "Sweet, unexpected, and wonderfully odd. You're the most interesting person at any table."
  },
  {
    id: "Earth_Day_Matcha",
    name: "Earth Day Matcha",
    img: "images/Earth_Day_Matcha.jpg",
    tags: ["bright", "calm", "aesthetic", "breezy"],
    vibe: "Sustainably chic. You carry a tote bag, know your farmers market vendor by name.",
    desc: "Fresh, grounded, and full of good intentions. You make living well look effortless."
  },
  {
    id: "Protein_Matcha",
    name: "Protein Matcha",
    img: "images/Protein_Matcha.jpg",
    tags: ["bold", "bright", "classic", "fun"],
    vibe: "Hot girl walk era. You have a morning routine that actually works and people are jealous.",
    desc: "Strong, purposeful, and always showing up. You don't just talk about your goals — you do them."
  }
];

// 12 fun questions — each choice awards a tag
const QUESTIONS = [
  {
    emoji: "⚡",
    text: "What Hogwarts house are you?",
    choices: [
      { icon: "🦁", text: "Gryffindor — bold, brave, first to jump in", tags: ["bold", "fun"] },
      { icon: "🦡", text: "Hufflepuff — loyal, cozy, everyone's comfort person", tags: ["cozy", "nostalgic"] },
      { icon: "🦅", text: "Ravenclaw — curious, aesthetic, always reading something obscure", tags: ["artsy", "unique"] },
      { icon: "🐍", text: "Slytherin — strategic, cool, effortlessly intimidating", tags: ["cool", "deep"] }
    ]
  },
  {
    emoji: "🌅",
    text: "Your ideal Saturday morning looks like…",
    choices: [
      { icon: "🧘", text: "Slow yoga, journaling, golden hour light", tags: ["calm", "minimal"] },
      { icon: "☕", text: "Farmers market with a friend, then brunch", tags: ["social", "breezy"] },
      { icon: "🎨", text: "Half a canvas, lo-fi music, total focus", tags: ["artsy", "dreamy"] },
      { icon: "🏃", text: "Morning run before anyone else is awake", tags: ["bold", "bright"] }
    ]
  },
  {
    emoji: "🎵",
    text: "What's playing on your headphones right now?",
    choices: [
      { icon: "🎸", text: "Clairo or Rex Orange County — indie soft girl hours", tags: ["dreamy", "romantic"] },
      { icon: "🎹", text: "NewJeans or aespa — clean pop, good vibes only", tags: ["sweet", "social"] },
      { icon: "🎷", text: "Frank Ocean or Tyler the Creator — deep and layered", tags: ["cool", "deep"] },
      { icon: "🔊", text: "Whatever's trending — I like to stay in the loop", tags: ["fun", "nostalgic"] }
    ]
  },
  {
    emoji: "🛍️",
    text: "Pick your dream Saturday afternoon:",
    choices: [
      { icon: "📚", text: "Bookshop browsing + a solo coffee shop sit", tags: ["calm", "minimal"] },
      { icon: "🛒", text: "Thrift haul + bubble tea with my bestie", tags: ["fun", "social"] },
      { icon: "🎬", text: "Art gallery, then a film with good cinematography", tags: ["artsy", "aesthetic"] },
      { icon: "🌿", text: "Park picnic, totally offline", tags: ["breezy", "nostalgic"] }
    ]
  },
  {
    emoji: "🐾",
    text: "Pick an animal that's lowkey you:",
    choices: [
      { icon: "🐱", text: "Cat — independent, mysterious, selectively affectionate", tags: ["cool", "unique"] },
      { icon: "🐶", text: "Golden retriever — enthusiastic, warm, everyone loves them", tags: ["sweet", "fun"] },
      { icon: "🦋", text: "Butterfly — ethereal, delicate, beautiful from every angle", tags: ["dreamy", "romantic"] },
      { icon: "🐺", text: "Wolf — loyal to their pack, low-key powerful", tags: ["deep", "bold"] }
    ]
  },
  {
    emoji: "🌙",
    text: "It's 11pm. You're most likely…",
    choices: [
      { icon: "📱", text: "Doomscrolling Pinterest for apartment inspo", tags: ["aesthetic", "dreamy"] },
      { icon: "📖", text: "Reading, one chapter turned into five", tags: ["calm", "purist"] },
      { icon: "🎮", text: "FaceTiming my friend and talking about nothing for 2 hours", tags: ["social", "cozy"] },
      { icon: "🎧", text: "Making a new playlist that perfectly captures my mood", tags: ["artsy", "romantic"] }
    ]
  },
  {
    emoji: "🌸",
    text: "Which vibe is your aesthetic?",
    choices: [
      { icon: "🤍", text: "Clean girl — white linen, glass skin, less is more", tags: ["minimal", "calm"] },
      { icon: "🌷", text: "Soft romantic — lace, florals, golden light everywhere", tags: ["romantic", "dreamy"] },
      { icon: "🖤", text: "Art kid — thrifted, layered, reference photo in pocket", tags: ["artsy", "cool"] },
      { icon: "🌈", text: "Dopamine dressing — colour, pattern, full send", tags: ["bold", "unique"] }
    ]
  },
  {
    emoji: "🍕",
    text: "Pizza order — this says everything about you:",
    choices: [
      { icon: "🧀", text: "Plain margherita. A classic done perfectly.", tags: ["classic", "purist"] },
      { icon: "🍓", text: "Burrata with prosciutto and fig jam. Fancy but make it fun.", tags: ["sweet", "aesthetic"] },
      { icon: "🌶️", text: "Spicy everything, extra cheese, no notes.", tags: ["bold", "fun"] },
      { icon: "🌿", text: "Loaded veggie. Surprising combo that somehow works.", tags: ["unique", "earthy"] }
    ]
  },
  {
    emoji: "✈️",
    text: "Dream trip destination:",
    choices: [
      { icon: "🗼", text: "Paris — picnics, museums, croissants at every corner", tags: ["romantic", "aesthetic"] },
      { icon: "🏄", text: "Bali — rice fields, surf, completely offline", tags: ["breezy", "calm"] },
      { icon: "🌃", text: "Tokyo — 7-Eleven snacks, neon lights, sensory overload", tags: ["bold", "unique"] },
      { icon: "🏡", text: "Somewhere in the English countryside — cozy, rainy, perfect", tags: ["cozy", "nostalgic"] }
    ]
  },
  {
    emoji: "🎭",
    text: "In your friend group you're the one who…",
    choices: [
      { icon: "🗺️", text: "Always has a plan, researched all the spots", tags: ["bold", "social"] },
      { icon: "🤗", text: "Everyone vents to, you give the best advice", tags: ["cozy", "deep"] },
      { icon: "📸", text: "Makes everything look good on camera", tags: ["aesthetic", "dreamy"] },
      { icon: "😂", text: "Keeps the group chat chaotic and alive", tags: ["fun", "bright"] }
    ]
  },
  {
    emoji: "💅",
    text: "Pick your ideal self-care Sunday:",
    choices: [
      { icon: "🛁", text: "Long bath, candle, podcast, totally logged off", tags: ["calm", "purist"] },
      { icon: "💆", text: "Face mask, order in, comfort show rewatch", tags: ["cozy", "nostalgic"] },
      { icon: "🎨", text: "Rearrange my room, new playlist, creative reset", tags: ["artsy", "minimal"] },
      { icon: "🏋️", text: "Gym, then a long walk, feel like a new person", tags: ["bright", "bold"] }
    ]
  },
  {
    emoji: "🌟",
    text: "Your life is a movie. What's the genre?",
    choices: [
      { icon: "🎬", text: "Coming-of-age indie — soft lighting, good soundtrack, no villain", tags: ["dreamy", "romantic"] },
      { icon: "🕵️", text: "Art-house mystery — stylish, slow-burn, twist ending", tags: ["cool", "unique"] },
      { icon: "🎉", text: "Feel-good rom-com — chaotic, charming, ends with dancing", tags: ["fun", "sweet"] },
      { icon: "🌄", text: "Quiet documentary about someone living beautifully", tags: ["calm", "earthy"] }
    ]
  }
];

// ── State ──────────────────────────────────────
let scores = {};
let currentQ = 0;
let resultDrink = null;

function initScores() {
  scores = {};
  const allTags = new Set();
  DRINKS.forEach(d => d.tags.forEach(t => allTags.add(t)));
  allTags.forEach(t => scores[t] = 0);
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

  // progress
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-step').textContent = `${currentQ + 1} / ${QUESTIONS.length}`;
  document.getElementById('progress-pct').textContent = pct + '%';

  // dots
  for (let i = 0; i < QUESTIONS.length; i++) {
    const dot = document.getElementById('dot-' + i);
    if (!dot) continue;
    dot.className = 'dot';
    if (i < currentQ)  dot.classList.add('done');
    if (i === currentQ) dot.classList.add('active');
  }

  // question text
  document.getElementById('q-emoji').textContent = q.emoji;
  document.getElementById('q-text').textContent = q.text;
  document.getElementById('q-label').textContent = `Question ${currentQ + 1}`;

  // choices
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
    btn.addEventListener('click', () => selectChoice(btn, c.tags));
    wrap.appendChild(btn);
  });
}

// ── Select a choice ───────────────────────────
function selectChoice(btn, tags) {
  // prevent double-clicking
  document.querySelectorAll('.choice-btn').forEach(b => b.style.pointerEvents = 'none');

  btn.classList.add('selected');
  tags.forEach(t => { if (scores[t] !== undefined) scores[t]++; });

  setTimeout(() => {
    currentQ++;
    if (currentQ < QUESTIONS.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 380);
}

// ── Compute result ────────────────────────────
function computeResult() {
  // Score each drink
  const drinkScores = DRINKS.map(drink => {
    const score = drink.tags.reduce((sum, tag) => sum + (scores[tag] || 0), 0);
    return { drink, score };
  });
  drinkScores.sort((a, b) => b.score - a.score);
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

  // "also try" — 3 random other drinks
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
