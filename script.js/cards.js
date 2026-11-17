// =====================================================================
// APEX Bank - script.js
// This one file does three jobs:
//   1. Stores the card information (the CARDS list just below)
//   2. Builds the header and footer shared by every page
//   3. Fills each page with its cards
//
// TO ADD A NEW CARD: copy one { ... } block below, paste it in the
// right section, and change the text. Make sure the "id" is unique.
// NOTE: fees and rewards are SAMPLE values - replace with real ones.
// =====================================================================

const CARDS = [

  // ----- CREDIT CARDS -----
  {
    id: 'infinite',                  // used in the link: card-details.html?id=infinite
    type: 'credit',                // credit, debit, forex or prepaid
    name: 'APEX Infinite',
    tag: 'Premium',                 // small label shown on the card
    color1: '#14183a',            // card gradient: start color
    color2: '#6c4bd1',            // card gradient: end color
    desc: 'Premium privileges, exclusive lifestyle benefits and rewarding experiences.',
    fee: '₹10,000 + taxes',
    reward: '5 points per ₹100',
    lounge: 'Unlimited',
    features: [
      'Premium lifestyle privileges',
      'Travel and dining benefits',
      'Exclusive reward programmes',
    ]
  },
  {
    id: 'platinum',                  // used in the link: card-details.html?id=platinum
    type: 'credit',                // credit, debit, forex or prepaid
    name: 'APEX Platinum',
    tag: 'Popular',                 // small label shown on the card
    color1: '#3a3f58',            // card gradient: start color
    color2: '#9aa3c7',            // card gradient: end color
    desc: 'Rewarding everyday purchases with shopping and lifestyle privileges.',
    fee: '₹2,500 + taxes',
    reward: '3 points per ₹100',
    lounge: '4 per year',
    features: [
      'Reward points on eligible purchases',
      'Shopping benefits',
      'Dining privileges',
    ]
  },
  {
    id: 'cashback',                  // used in the link: card-details.html?id=cashback
    type: 'credit',                // credit, debit, forex or prepaid
    name: 'APEX Cashback',
    tag: 'Cashback',                 // small label shown on the card
    color1: '#0f5e4d',            // card gradient: start color
    color2: '#34b58f',            // card gradient: end color
    desc: 'Get more value from eligible purchases with a cashback-focused card.',
    fee: '₹500 + taxes',
    reward: '5% cashback online',
    lounge: '2 per year',
    features: [
      'Cashback on eligible spending',
      'Online shopping benefits',
      'Simple reward tracking',
    ]
  },
  {
    id: 'signature',                  // used in the link: card-details.html?id=signature
    type: 'credit',                // credit, debit, forex or prepaid
    name: 'APEX Signature',
    tag: 'Premium',                 // small label shown on the card
    color1: '#5a1a3a',            // card gradient: start color
    color2: '#d4577f',            // card gradient: end color
    desc: 'Premium experiences and exclusive lifestyle benefits.',
    fee: '₹5,000 + taxes',
    reward: '4 points per ₹100',
    lounge: '8 per year',
    features: [
      'Concierge services',
      'Golf and spa privileges',
      'Milestone benefits',
    ]
  },
  {
    id: 'rewards',                  // used in the link: card-details.html?id=rewards
    type: 'credit',                // credit, debit, forex or prepaid
    name: 'APEX Rewards',
    tag: 'Rewards',                 // small label shown on the card
    color1: '#7a3b00',            // card gradient: start color
    color2: '#f0a030',            // card gradient: end color
    desc: 'Earn rewards on eligible everyday transactions.',
    fee: '₹1,000 + taxes',
    reward: '2 points per ₹100',
    lounge: '2 per year',
    features: [
      'Bonus points on dining',
      'Easy redemption',
      'Fuel surcharge waiver',
    ]
  },
  {
    id: 'shopping',                  // used in the link: card-details.html?id=shopping
    type: 'credit',                // credit, debit, forex or prepaid
    name: 'APEX Shopping',
    tag: 'Shopping',                 // small label shown on the card
    color1: '#1b3a8a',            // card gradient: start color
    color2: '#4f8cff',            // card gradient: end color
    desc: 'Enjoy shopping-related offers and exciting deals.',
    fee: '₹750 + taxes',
    reward: 'Up to 10% partner offers',
    lounge: 'Not included',
    features: [
      'Partner brand discounts',
      'Festive offers',
      'EMI conversion options',
    ]
  },

  // ----- DEBIT CARDS -----
  {
    id: 'classic-debit',                  // used in the link: card-details.html?id=classic-debit
    type: 'debit',                // credit, debit, forex or prepaid
    name: 'APEX Classic Debit',
    tag: 'Everyday',                 // small label shown on the card
    color1: '#2a2f4a',            // card gradient: start color
    color2: '#5d6590',            // card gradient: end color
    desc: 'Your everyday banking companion for convenient transactions.',
    fee: '₹250 + taxes',
    reward: '—',
    lounge: 'Not included',
    features: [
      'ATM and POS access',
      'Contactless payments',
      'Daily limit controls',
    ]
  },
  {
    id: 'platinum-debit',                  // used in the link: card-details.html?id=platinum-debit
    type: 'debit',                // credit, debit, forex or prepaid
    name: 'APEX Platinum Debit',
    tag: 'Enhanced',                 // small label shown on the card
    color1: '#4a4a52',            // card gradient: start color
    color2: '#a8a8b8',            // card gradient: end color
    desc: 'Enhanced banking privileges and additional convenience.',
    fee: '₹500 + taxes',
    reward: '1 point per ₹200',
    lounge: '2 per year',
    features: [
      'Higher withdrawal limits',
      'Dining offers',
      'Purchase protection',
    ]
  },
  {
    id: 'world-debit',                  // used in the link: card-details.html?id=world-debit
    type: 'debit',                // credit, debit, forex or prepaid
    name: 'APEX World Debit',
    tag: 'Premium',                 // small label shown on the card
    color1: '#12384a',            // card gradient: start color
    color2: '#2fa4c9',            // card gradient: end color
    desc: 'Premium benefits and convenient international access.',
    fee: '₹1,000 + taxes',
    reward: '2 points per ₹200',
    lounge: '4 per year',
    features: [
      'International acceptance',
      'Travel insurance cover',
      'Premium support',
    ]
  },

  // ----- FOREX CARDS -----
  {
    id: 'travel-forex',                  // used in the link: card-details.html?id=travel-forex
    type: 'forex',                // credit, debit, forex or prepaid
    name: 'APEX Travel Forex',
    tag: 'Travel',                 // small label shown on the card
    color1: '#0b3d5c',            // card gradient: start color
    color2: '#3bb3e0',            // card gradient: end color
    desc: 'A convenient travel companion for international journeys.',
    fee: '₹100 issuance',
    reward: '—',
    lounge: 'Not included',
    features: [
      'Lock-in exchange rates',
      'Secure chip and PIN',
      'Reloadable online',
    ]
  },
  {
    id: 'global-forex',                  // used in the link: card-details.html?id=global-forex
    type: 'forex',                // credit, debit, forex or prepaid
    name: 'APEX Global Forex',
    tag: 'Multi-currency',                 // small label shown on the card
    color1: '#3b1f6b',            // card gradient: start color
    color2: '#a070e8',            // card gradient: end color
    desc: 'Simplify international spending with multi-currency convenience.',
    fee: '₹200 issuance',
    reward: '—',
    lounge: 'Not included',
    features: [
      'Multiple currencies on one card',
      'Emergency assistance',
      'Zero markup on select currencies',
    ]
  },

  // ----- PREPAID CARDS -----
  {
    id: 'gift-card',                  // used in the link: card-details.html?id=gift-card
    type: 'prepaid',                // credit, debit, forex or prepaid
    name: 'APEX Gift Card',
    tag: 'Gifting',                 // small label shown on the card
    color1: '#8a1f3d',            // card gradient: start color
    color2: '#f06a8a',            // card gradient: end color
    desc: 'A convenient gifting option for special occasions.',
    fee: '₹100 issuance',
    reward: '—',
    lounge: 'Not included',
    features: [
      'Choose your amount',
      'Personalised designs',
      'Valid at partner merchants',
    ]
  },
  {
    id: 'smart-card',                  // used in the link: card-details.html?id=smart-card
    type: 'prepaid',                // credit, debit, forex or prepaid
    name: 'APEX Smart Card',
    tag: 'Smart',                 // small label shown on the card
    color1: '#1f4d3a',            // card gradient: start color
    color2: '#5fc79a',            // card gradient: end color
    desc: 'A simple way to manage preloaded spending.',
    fee: '₹150 issuance',
    reward: '—',
    lounge: 'Not included',
    features: [
      'Instant reload',
      'Spend tracking',
      'Online and offline use',
    ]
  }
];

// Display names for each card type
const TYPE_LABEL = {
  credit: 'Credit',
  debit: 'Debit',
  forex: 'Forex',
  prepaid: 'Prepaid'
};

// Short helper: $('#id') finds an element on the page
function $(selector) {
  return document.querySelector(selector);
}

// Returns only the cards of one type, e.g. cardsOfType('debit')
function cardsOfType(type) {
  return CARDS.filter(function (card) {
    return card.type === type;
  });
}


// =====================================================================
// SHARED HEADER, SUB-NAVIGATION AND FOOTER
// Each page has <div id="site-header"> and <div id="site-footer">.
// This function fills them, so you edit the menu in ONE place only.
// =====================================================================
function buildLayout() {
  // Which page are we on? (set by <body data-page="...">)
  const currentPage = document.body.dataset.page;

  // The dark sub-navigation links: [page name, file, label]
  const subLinks = [
    ['cards',   'cards.html',        'Overview'],
    ['credit',  'credit-cards.html', 'Credit Cards'],
    ['debit',   'debit-cards.html',  'Debit Cards'],
    ['details', 'card-details.html', 'Details & Compare']
  ];

  // Build the sub-navigation HTML, highlighting the current page
  let subNavHtml = '';
  subLinks.forEach(function (link) {
    const activeClass = (link[0] === currentPage) ? 'active' : '';
    subNavHtml += '<a href="' + link[1] + '" class="' + activeClass + '">' + link[2] + '</a>';
  });

  // Header
  $('#site-header').innerHTML = `
    <header class="main-header">
      <div class="logo">
        <a href="index.html"><h1>APEX <span>BANK</span></h1></a>
      </div>

      <button class="menu-toggle" aria-label="Toggle menu" aria-expanded="false">☰</button>

      <nav class="main-navigation">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="#">Personal Banking</a></li>
          <li><a href="#">Business Banking</a></li>
          <li><a href="cards.html" class="active">Cards</a></li>
          <li><a href="#">Loans</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>

      <div class="header-actions">
        <a href="#">Login</a>
        <a href="#">Contact Us</a>
      </div>
    </header>

    <div class="subnav">${subNavHtml}</div>
  `;

  // Footer
  $('#site-footer').innerHTML = `
    <footer class="footer">
      <div class="footer-grid">
        <div>
          <h4>APEX BANK</h4>
          <p>Banking made simple.</p>
        </div>
        <div>
          <h4>Cards</h4>
          <ul>
            <li><a href="credit-cards.html">Credit Cards</a></li>
            <li><a href="debit-cards.html">Debit Cards</a></li>
            <li><a href="cards.html#forex-cards">Forex Cards</a></li>
            <li><a href="cards.html#prepaid-cards">Prepaid Cards</a></li>
          </ul>
        </div>
        <div>
          <h4>Tools</h4>
          <ul>
            <li><a href="card-details.html#compare-cards">Compare Cards</a></li>
            <li><a href="cards.html#faq">FAQs</a></li>
          </ul>
        </div>
      </div>
      <p class="copy">© ${new Date().getFullYear()} APEX Bank. Demo website - card details are sample data.</p>
    </footer>
  `;

  // Mobile menu: the ☰ button opens and closes the navigation
  const menuButton = $('.menu-toggle');
  const navigation = $('.main-navigation');

  menuButton.addEventListener('click', function () {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
  });
}


// =====================================================================
// CARD BUILDING BLOCKS
// Small functions that return the HTML for one card.
// =====================================================================

// The coloured card drawing
function cardVisual(card) {
  return `
    <div class="card-visual"
         style="background: linear-gradient(135deg, ${card.color1}, ${card.color2})">
      <div class="chip"></div>
      <b>${card.name}</b>
      <small>•••• •••• •••• 2026</small>
    </div>
  `;
}

// A normal card tile (used on the credit, debit, forex and prepaid grids)
function gridCard(card) {
  return `
    <article class="bank-card">
      ${cardVisual(card)}
      <h3>${card.name}</h3>
      <p>${card.desc}</p>
      <a class="know-more" href="card-details.html?id=${card.id}">Know More →</a>
    </article>
  `;
}

// A bigger "featured" card with a feature list
function featuredCard(card) {
  let featureItems = '';
  card.features.forEach(function (feature) {
    featureItems += '<li>' + feature + '</li>';
  });

  return `
    <article class="featured-card">
      ${cardVisual(card)}
      <span class="card-label">${card.tag.toUpperCase()}</span>
      <h3>${card.name}</h3>
      <p>${card.desc}</p>
      <ul>${featureItems}</ul>
      <a class="know-more" href="card-details.html?id=${card.id}">Explore Card →</a>
    </article>
  `;
}

// Puts a list of cards into the element matching "target"
function showCards(target, cardList) {
  const element = $(target);
  if (!element) return;            // do nothing if this page doesn't have it

  let html = '';
  cardList.forEach(function (card) {
    html += gridCard(card);
  });
  element.innerHTML = html;
}

// Finds one card by its id
function findCard(id) {
  return CARDS.find(function (card) {
    return card.id === id;
  });
}


// =====================================================================
// PAGE 1: cards.html (overview)
// =====================================================================
function setupCardsPage() {
  // Three cards floating in the hero banner
  const heroElement = $('#hero-cards');
  if (heroElement) {
    heroElement.innerHTML =
      cardVisual(findCard('infinite')) +
      cardVisual(findCard('cashback')) +
      cardVisual(findCard('shopping'));
  }

  // Three featured cards
  const featuredElement = $('#featured');
  if (featuredElement) {
    featuredElement.innerHTML =
      featuredCard(findCard('infinite')) +
      featuredCard(findCard('platinum')) +
      featuredCard(findCard('cashback'));
  }

  // Forex and prepaid sections
  showCards('#forex-grid', cardsOfType('forex'));
  showCards('#prepaid-grid', cardsOfType('prepaid'));
}


// =====================================================================
// PAGES 2 AND 3: credit-cards.html and debit-cards.html
// Both pages use this same function; <body data-type="..."> says which.
// =====================================================================
function setupListPage() {
  const type = document.body.dataset.type;      // "credit" or "debit"
  const allCards = cardsOfType(type);

  // Make filter buttons from the card tags: All, Premium, Popular...
  const tags = ['All'];
  allCards.forEach(function (card) {
    if (!tags.includes(card.tag)) tags.push(card.tag);
  });

  let buttonsHtml = '';
  tags.forEach(function (tag, index) {
    const onClass = (index === 0) ? 'on' : '';
    buttonsHtml += '<button class="chip-btn ' + onClass + '" data-tag="' + tag + '">' + tag + '</button>';
  });
  $('#filters').innerHTML = buttonsHtml;

  // Show all cards first
  showCards('#grid', allCards);

  // When a filter button is clicked, show only matching cards
  $('#filters').addEventListener('click', function (event) {
    const button = event.target.closest('.chip-btn');
    if (!button) return;

    // Highlight the clicked button only
    document.querySelectorAll('.chip-btn').forEach(function (b) {
      b.classList.toggle('on', b === button);
    });

    // Filter the cards
    const chosenTag = button.dataset.tag;
    if (chosenTag === 'All') {
      showCards('#grid', allCards);
    } else {
      showCards('#grid', allCards.filter(function (card) {
        return card.tag === chosenTag;
      }));
    }
  });
}


// =====================================================================
// PAGE 4: card-details.html
// The card shown comes from the link: card-details.html?id=infinite
// =====================================================================
function setupDetailsPage() {
  // Read the id from the web address (default to the first card)
  const id = new URLSearchParams(location.search).get('id');
  const card = findCard(id) || CARDS[0];

  document.title = card.name + ' | APEX Bank';

  // List of features
  let featureItems = '';
  card.features.forEach(function (feature) {
    featureItems += '<li style="margin: 4px 0">✓ ' + feature + '</li>';
  });

  // Card details section
  $('#detail').innerHTML = `
    <div>${cardVisual(card)}</div>
    <div>
      <span class="card-label">${TYPE_LABEL[card.type].toUpperCase()} · ${card.tag.toUpperCase()}</span>
      <h2>${card.name}</h2>
      <p>${card.desc}</p>

      <div class="specs">
        <div><span>Annual fee</span>${card.fee}</div>
        <div><span>Rewards</span>${card.reward}</div>
        <div><span>Lounge access</span>${card.lounge}</div>
        <div><span>Card type</span>${TYPE_LABEL[card.type]}</div>
      </div>

      <ul>${featureItems}</ul>
      <p style="margin-top: 20px"><a class="btn" href="#">Apply Now</a></p>
    </div>
  `;

  // Comparison table: builds the table rows for a chosen card type
  function tableRows(type) {
    let rowsHtml = '';
    CARDS.forEach(function (c) {
      if (type !== 'all' && c.type !== type) return;   // skip other types
      rowsHtml += `
        <tr>
          <td><a class="know-more" href="card-details.html?id=${c.id}">${c.name}</a></td>
          <td>${TYPE_LABEL[c.type]}</td>
          <td>${c.fee}</td>
          <td>${c.reward}</td>
          <td>${c.lounge}</td>
        </tr>
      `;
    });
    return rowsHtml;
  }

  const tableBody = $('#compare-body');
  const typeSelect = $('#compare-type');

  // Start by showing cards of the same type as this card
  typeSelect.value = card.type;
  tableBody.innerHTML = tableRows(card.type);

  // Update the table when the dropdown changes
  typeSelect.addEventListener('change', function () {
    tableBody.innerHTML = tableRows(typeSelect.value);
  });
}


// =====================================================================
// START: runs when the page has finished loading.
// It checks which page we are on and sets up only that page.
// =====================================================================
document.addEventListener('DOMContentLoaded', function () {
  buildLayout();

  const page = document.body.dataset.page;

  if (page === 'cards') setupCardsPage();
  if (page === 'credit' || page === 'debit') setupListPage();
  if (page === 'details') setupDetailsPage();
});