/* Minimal, accessible hamburger menu toggler */
(function(){
  const btn = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-nav-menu]');
  if(!btn || !menu) return;
  const toggle = () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  btn.addEventListener('click', toggle);
  btn.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' '){ e.preventDefault(); toggle(); }});
})();

/* Minimal detail page loader based on ?id=... */
(function(){
  if(!document.body.hasAttribute('data-detail')) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 'gadia-luhar';
  const DATA = {
    'gadia-luhar': {
      title: 'Gadia Luhar',
      tagline: 'Forged in Fire',
      description: 'Iron artisans carrying 500 years of heritage amidst instability and strength.',
      location: 'Rajasthan',
      imgPng: 'assets/img/card1.png',
      imgSvg: 'assets/img/card1.svg'
    },
    'bhoksa': {
      title: 'Bhoksa',
      tagline: 'Between Tradition and Tomorrow',
      description: 'A community navigating modern challenges while preserving ancestral wisdom.',
      location: 'Uttarakhand',
      imgPng: 'assets/img/card2.png',
      imgSvg: 'assets/img/card2.svg'
    },
    'jananas': {
      title: 'Jananas',
      tagline: 'Where Culture Breathes',
      description: 'Himalayan communities with unique playworld traditions and rich folklore.',
      location: 'Himalayas',
      imgPng: 'assets/img/card3.png',
      imgSvg: 'assets/img/card3.svg'
    },
    'banjara': {
      title: 'Banjara',
      tagline: 'Paths of Trade',
      description: 'Nomadic traders whose vibrant culture weaves their journeys.',
      location: 'Deccan',
      imgPng: 'assets/img/card4.png',
      imgSvg: 'assets/img/card4.svg'
    },
    'van-gujjar': {
      title: 'Van Gujjar',
      tagline: 'Beyond the Forest',
      description: 'Forest dwellers balancing conservation challenges with fearless livelihoods.',
      location: 'Terai',
      imgPng: 'assets/img/Container-3.png',
      imgSvg: 'assets/img/card5.svg'
    }
  };
  // Additional communities present on the grid
  DATA['meghwal'] = {
    title: 'Meghwal', tagline: 'Looms of Memory',
    description: 'Textile craft, dye traditions, and resilient desert settlements.',
    location: 'Kutch', imgPng: 'assets/img/Container-4.png', imgSvg: 'assets/img/card6.svg'
  };
  DATA['siddi'] = {
    title: 'Siddi', tagline: 'Roots Across Oceans',
    description: 'Afro-Indian legacies of music, sport, and coastal livelihoods.',
    location: 'Konkan', imgPng: 'assets/img/Container-2.png', imgSvg: 'assets/img/card7.svg'
  };
  DATA['chhipa'] = {
    title: 'Chhipa', tagline: 'Blocks and Dyes',
    description: 'Printing blocks, river water, and ecological craft geographies.',
    location: 'Rajasthan', imgPng: 'assets/img/Container-3.png', imgSvg: 'assets/img/card8.svg'
  };
  DATA['teli'] = {
    title: 'Teli', tagline: 'Oils and Mills',
    description: 'Food craft histories and everyday economies of work.',
    location: 'Central India', imgPng: 'assets/img/Container-4.png', imgSvg: 'assets/img/card9.svg'
  };
  const info = DATA[id] || DATA['gadia-luhar'];
  const setText = (sel, val) => { const el = document.querySelector(sel); if(el) el.textContent = val; };
  setText('#detail-title', info.title);
  setText('#detail-tagline', info.tagline);
  setText('#detail-heading', info.title + ' — ' + info.tagline);
  setText('#detail-description', info.description);
  setText('#detail-location', info.location);
  const png = document.getElementById('detail-image-png');
  const svg = document.getElementById('detail-image-svg');
  if(png) png.setAttribute('srcset', info.imgPng);
  if(svg) svg.setAttribute('src', info.imgSvg);
})();
