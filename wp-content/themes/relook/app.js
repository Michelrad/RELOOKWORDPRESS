/**
 * RELOOK - Circular Fashion Barter & Tinder-Style Clothes Swap
 * Complete Application Logic
 */

// Global State
const app = {
  activeTab: 'home',
  wardrobeSubTab: 'listings',
  currentCategory: 'all',
  currentConditionFilter: 'all',
  currentSort: 'trending',
  searchQuery: '',
  
  // Hero Carousel State
  currentSlide: 0,
  carouselInterval: null,
  
  // Tinder Swipe State
  swipeDeckIndex: 0,
  swipeHistory: [],
  isDragging: false,
  dragStartX: 0,
  dragStartY: 0,
  currentCardEl: null,
  
  // Active Chat State
  activeMatchId: 1,
  
  // Target item for swap proposal
  proposeTargetItemId: null,
  selectedWardrobeOfferId: null,

  // Selected upload preset photo
  selectedUploadPhoto: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=400&q=80',

  // Mock Database
  items: [
    {
      id: 1,
      title: "Chaqueta Biker de Cuero Genuino",
      brand: "ZARA STUDIO",
      category: "Chaquetas",
      gender: "Mujer",
      size: "M / 38",
      condition: 9.6,
      conditionLabel: "Como Nuevo",
      tier: "Tier A • Est. 95€",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Chaqueta biker en piel 100% ovina de la colección especial Studio. Puesta exactamente en 2 ocasiones para eventos. Cero marcas ni desgastes.",
      measurements: { pecho: "48 cm", largo: "54 cm", hombros: "41 cm" },
      owner: {
        name: "Elena R.",
        handle: "@elena_vintage",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        rating: 4.9,
        tradesCount: 32,
        city: "Madrid Centro (2.1 km)"
      },
      co2Saved: "9.2 kg",
      isLiked: false,
      likesCount: 28
    },
    {
      id: 2,
      title: "Jeans Rectos 501 Vintage 90s",
      brand: "LEVI'S",
      category: "Pantalones",
      gender: "Unisex",
      size: "W30 L32",
      condition: 9.2,
      conditionLabel: "Excelente Estado",
      tier: "Tier B • Est. 70€",
      image: "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Denim grueso 100% algodón original de los 90s made in USA. Lavado azul clásico medio, bajos intactos sin deshilachado.",
      measurements: { cintura: "39 cm", tiro: "28 cm", largo: "102 cm" },
      owner: {
        name: "Carlos M.",
        handle: "@carlos_street",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        rating: 5.0,
        tradesCount: 19,
        city: "Barcelona (Envío o Punto Pack)"
      },
      co2Saved: "6.8 kg",
      isLiked: true,
      likesCount: 45
    },
    {
      id: 3,
      title: "Blazer Oversize Sastrería Crema",
      brand: "MASSIMO DUTTI",
      category: "Chaquetas",
      gender: "Mujer",
      size: "L / 40",
      condition: 9.8,
      conditionLabel: "Impecable",
      tier: "Tier A • Est. 110€",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Blazer con caída fluida en mezcla de lino y viscosa. Forro interior intacto con botones de nácar de repuesto en etiqueta interior.",
      measurements: { pecho: "52 cm", largo: "74 cm", hombros: "44 cm" },
      owner: {
        name: "Lucía P.",
        handle: "@lucia_chic",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
        rating: 4.8,
        tradesCount: 14,
        city: "Valencia (1.4 km)"
      },
      co2Saved: "7.5 kg",
      isLiked: false,
      likesCount: 36
    },
    {
      id: 4,
      title: "Hoodie Gráfico Heavyweight Boxy",
      brand: "CARHARTT WIP",
      category: "Streetwear",
      gender: "Unisex",
      size: "L / 40",
      condition: 9.4,
      conditionLabel: "Como Nuevo",
      tier: "Tier B • Est. 80€",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Sudadera de algodón perchado pesado 450 gsm. Sin bolitas ni desgaste de color. Logo bordado en manga izquierda.",
      measurements: { pecho: "58 cm", largo: "68 cm", hombros: "52 cm" },
      owner: {
        name: "Marcos T.",
        handle: "@marcos_skate",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
        rating: 4.9,
        tradesCount: 22,
        city: "Madrid Norte (4.5 km)"
      },
      co2Saved: "5.4 kg",
      isLiked: false,
      likesCount: 52
    },
    {
      id: 5,
      title: "Vestido Midi Plisado Satén Esmeralda",
      brand: "COS",
      category: "Vestidos",
      gender: "Mujer",
      size: "S / 36",
      condition: 10.0,
      conditionLabel: "Con Etiquetas",
      tier: "Tier A • Est. 120€",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Nuevo a estrenar con etiqueta original. Comprado para una boda cancelada. Silueta arquitectónica minimalista típica de COS.",
      measurements: { pecho: "44 cm", cintura: "36 cm", largo: "118 cm" },
      owner: {
        name: "Sofia V.",
        handle: "@sofia_design",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
        rating: 5.0,
        tradesCount: 27,
        city: "Sevilla (Envío gratis)"
      },
      co2Saved: "8.1 kg",
      isLiked: true,
      likesCount: 63
    },
    {
      id: 6,
      title: "Bolso Baguette Piel Vegana 90s",
      brand: "STAND STUDIO",
      category: "Accesorios",
      gender: "Mujer",
      size: "Única",
      condition: 9.5,
      conditionLabel: "Como Nuevo",
      tier: "Tier B • Est. 85€",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Bolso de hombro estilo baguette en acabado acolchado. Cierre de cremallera metálica suave, forro impoluto con guardapolvo.",
      measurements: { ancho: "28 cm", alto: "16 cm", fondo: "7 cm" },
      owner: {
        name: "Clara G.",
        handle: "@clara_trends",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        rating: 4.7,
        tradesCount: 11,
        city: "Madrid (Chamberí)"
      },
      co2Saved: "4.2 kg",
      isLiked: false,
      likesCount: 39
    },
    {
      id: 7,
      title: "Cazadora Bomber Reversible Militar",
      brand: "ALPHA INDUSTRIES",
      category: "Chaquetas",
      gender: "Unisex",
      size: "M / 38",
      condition: 9.1,
      conditionLabel: "Excelente Estado",
      tier: "Tier A • Est. 130€",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Clásica MA-1 en nylon impermeable verde sage reversible a naranja de rescate. Puños y cintura de punto acanalado sin holguras.",
      measurements: { pecho: "54 cm", largo: "65 cm", hombros: "47 cm" },
      owner: {
        name: "David K.",
        handle: "@david_heritage",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80",
        rating: 4.9,
        tradesCount: 25,
        city: "Bilbao (Envío disponible)"
      },
      co2Saved: "8.7 kg",
      isLiked: false,
      likesCount: 41
    },
    {
      id: 8,
      title: "Zapatillas Retro Basketball Vintage",
      brand: "NEW BALANCE",
      category: "Accesorios",
      gender: "Unisex",
      size: "EUR 41",
      condition: 9.0,
      conditionLabel: "Muy Buen Estado",
      tier: "Tier B • Est. 75€",
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Modelo 550 en blanco y verde bosque. Suela limpia y plantillas originales higienizadas. Se entregan con caja original.",
      measurements: { plantilla: "26.5 cm" },
      owner: {
        name: "Mateo S.",
        handle: "@mateo_kicks",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
        rating: 4.8,
        tradesCount: 16,
        city: "Zaragoza"
      },
      co2Saved: "7.1 kg",
      isLiked: false,
      likesCount: 58
    }
  ],

  // User's own items uploaded
  userWardrobe: [
    {
      id: 101,
      title: "Blazer Oversize Lana Gris Carbón",
      brand: "ZARA MAN",
      category: "Chaquetas",
      size: "M / 38",
      condition: 9.7,
      conditionLabel: "Impecable",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
      status: "Disponible para Trueque",
      views: 142,
      proposals: 4
    },
    {
      id: 102,
      title: "Chaqueta Vaquera Trucker Sherpa",
      brand: "LEVI'S",
      category: "Chaquetas",
      size: "M / 38",
      condition: 9.4,
      conditionLabel: "Como Nuevo",
      image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80",
      status: "Match en Negociación",
      views: 210,
      proposals: 7
    },
    {
      id: 103,
      title: "Jersey Cuello Vuelto Cashmere Negro",
      brand: "MASSIMO DUTTI",
      category: "Streetwear",
      size: "M / 38",
      condition: 9.8,
      conditionLabel: "Como Nuevo",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80",
      status: "Disponible para Trueque",
      views: 98,
      proposals: 2
    },
    {
      id: 104,
      title: "Pantalón Cargo Táctico Olive",
      brand: "CARHARTT",
      category: "Pantalones",
      size: "31 / 32",
      condition: 9.0,
      conditionLabel: "Muy Buen Estado",
      image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=600&q=80",
      status: "Disponible para Trueque",
      views: 85,
      proposals: 3
    },
    {
      id: 105,
      title: "Cazadora Harrington Ligera Beige",
      brand: "BEN SHERMAN",
      category: "Chaquetas",
      size: "M / 38",
      condition: 9.5,
      conditionLabel: "Como Nuevo",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80",
      status: "Disponible para Trueque",
      views: 119,
      proposals: 5
    }
  ],

  // Mutual Matches for Private Chat
  matches: [
    {
      id: 1,
      partner: {
        name: "Elena R.",
        handle: "@elena_vintage",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        rating: 4.9,
        city: "Madrid Centro"
      },
      theirItem: {
        title: "Chaqueta Biker de Cuero Genuino",
        brand: "ZARA STUDIO",
        size: "M / 38",
        condition: "9.6 / 10",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=300&q=80"
      },
      myItem: {
        title: "Blazer Oversize Lana Gris Carbón",
        brand: "ZARA MAN",
        size: "M / 38",
        condition: "9.7 / 10",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80"
      },
      status: "🤝 MATCH CONFIRMADO - COORDINANDO ENTREGA",
      lastMessage: "¡Me encanta tu blazer de lana! ¿Te viene bien vernos este sábado por Malasaña?",
      lastTime: "18:24",
      unread: true,
      messages: [
        {
          sender: "system",
          text: "🎉 ¡Felicidades! Se ha producido un Match Mutuo. Elena y tú desean intercambiar sus prendas. El trueque circular no tiene costes de intermediación."
        },
        {
          sender: "them",
          time: "18:20",
          text: "¡Hola Michel! Vi tu blazer oversize en tu armario y me pareció perfecto justo con la caída que estaba buscando 😍"
        },
        {
          sender: "me",
          time: "18:22",
          text: "¡Hola Elena! Qué bien coincidir. Tu biker de cuero está impecable, me viene genial para esta temporada."
        },
        {
          sender: "them",
          time: "18:24",
          text: "¡Me encanta tu blazer de lana! ¿Te viene bien vernos este sábado por Malasaña o prefieres Punto Pack?"
        }
      ]
    },
    {
      id: 2,
      partner: {
        name: "Carlos M.",
        handle: "@carlos_street",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        rating: 5.0,
        city: "Barcelona"
      },
      theirItem: {
        title: "Jeans Rectos 501 Vintage 90s",
        brand: "LEVI'S",
        size: "W30 L32",
        condition: "9.2 / 10",
        image: "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=300&q=80"
      },
      myItem: {
        title: "Chaqueta Vaquera Trucker Sherpa",
        brand: "LEVI'S",
        size: "M / 38",
        condition: "9.4 / 10",
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=300&q=80"
      },
      status: "📦 ENVÍO ACORDADO - PREPARANDO PAQUETE",
      lastMessage: "Genial, ya tengo el código de Punto Pack generado. Te lo paso en un momento.",
      lastTime: "Ayer",
      unread: false,
      messages: [
        {
          sender: "system",
          text: "🤝 Match mutuo verificado entre Carlos M. y Michelrad."
        },
        {
          sender: "me",
          time: "14:10",
          text: "Hola Carlos, ¿cómo te va de talla la cazadora Sherpa?"
        },
        {
          sender: "them",
          time: "14:15",
          text: "Perfecto! Tengo varias prendas M de Levi's y me quedan exactas. Te envío los 501 mañana mismo por Punto Pack."
        }
      ]
    },
    {
      id: 3,
      partner: {
        name: "Sofia V.",
        handle: "@sofia_design",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
        rating: 5.0,
        city: "Sevilla"
      },
      theirItem: {
        title: "Vestido Midi Plisado Satén Esmeralda",
        brand: "COS",
        size: "S / 36",
        condition: "10 / 10",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=300&q=80"
      },
      myItem: {
        title: "Jersey Cuello Vuelto Cashmere Negro",
        brand: "MASSIMO DUTTI",
        size: "M / 38",
        condition: "9.8 / 10",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=300&q=80"
      },
      status: "🤝 MATCH NUEVO - ESPERANDO TU RESPUESTA",
      lastMessage: "¡Hola! Vi tu jersey de cashmere, ¿sigue disponible?",
      lastTime: "12:05",
      unread: true,
      messages: [
        {
          sender: "system",
          text: "🎉 ¡Nuevo Match Mutuo con Sofia V.! Tu jersey le ha encantado."
        },
        {
          sender: "them",
          time: "12:05",
          text: "¡Hola! Vi tu jersey de cashmere, ¿sigue disponible? Mi vestido de COS tiene etiqueta aún."
        }
      ]
    }
  ],

  // Initialization
  init() {
    this.renderCatalog();
    this.renderMiniSwipe();
    this.renderSwipeDeck();
    this.renderWardrobe();
    this.renderChatList();
    this.renderActiveChat();
    this.updateSavedBadge();
    this.startHeroCarousel();
    this.initKeyboardShortcuts();
    console.log("RELOOK initialized successfully");
  },

  // Switch Main View Tab
  switchTab(tabId) {
    this.activeTab = tabId;
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.add('hidden');
      panel.classList.remove('block');
    });

    const target = document.getElementById(`view-${tabId}`);
    if (target) {
      target.classList.remove('hidden');
      target.classList.add('block');
    }

    // Scroll top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Refresh sub-views if needed
    if (tabId === 'swipe') {
      this.renderSwipeDeck();
    } else if (tabId === 'chat') {
      this.renderChatList();
      this.renderActiveChat();
    } else if (tabId === 'wardrobe') {
      this.renderWardrobe();
    }
  },

  // Hero Carousel Logic
  startHeroCarousel() {
    const track = document.getElementById('heroCarouselTrack');
    if (!track) return;
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 6000);
  },

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % 2;
    this.updateCarousel();
  },

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + 2) % 2;
    this.updateCarousel();
  },

  updateCarousel() {
    const track = document.getElementById('heroCarouselTrack');
    const dots = document.getElementById('carouselDots');
    if (!track) return;
    track.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    if (dots) {
      dots.children[0].className = this.currentSlide === 0 ? "w-6 h-2 bg-brand-pink rounded-full cursor-pointer transition-all" : "w-2 h-2 bg-white/40 rounded-full cursor-pointer transition-all";
      dots.children[1].className = this.currentSlide === 1 ? "w-6 h-2 bg-brand-pink rounded-full cursor-pointer transition-all" : "w-2 h-2 bg-white/40 rounded-full cursor-pointer transition-all";
    }
  },

  // SHEIN High-Density Catalog Grid Engine
  renderCatalog() {
    const grid = document.getElementById('productGrid');
    const countBadge = document.getElementById('catalogCount');
    const emptyState = document.getElementById('catalogEmpty');
    if (!grid) return;

    let filtered = this.items.filter(item => {
      // Category filter
      if (this.currentCategory !== 'all' && item.category !== this.currentCategory) {
        return false;
      }
      // Condition filter
      if (this.currentConditionFilter !== 'all') {
        const minCond = parseFloat(this.currentConditionFilter);
        if (item.condition < minCond) return false;
      }
      // Search query
      if (this.searchQuery.trim() !== '') {
        const query = this.searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchBrand = item.brand.toLowerCase().includes(query);
        const matchCat = item.category.toLowerCase().includes(query);
        if (!matchTitle && !matchBrand && !matchCat) return false;
      }
      return true;
    });

    // Sorting
    if (this.currentSort === 'condition-desc') {
      filtered.sort((a, b) => b.condition - a.condition);
    } else if (this.currentSort === 'trending') {
      filtered.sort((a, b) => b.likesCount - a.likesCount);
    } else if (this.currentSort === 'recent') {
      filtered.sort((a, b) => b.id - a.id);
    }

    if (countBadge) {
      countBadge.innerText = `${filtered.length} Prendas`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    grid.innerHTML = filtered.map(item => `
      <div class="product-card group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-shein hover:shadow-shein-hover flex flex-col relative transition-all duration-300">
        
        <!-- Image & Badges Container -->
        <div class="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden cursor-pointer" onclick="app.openProductDetail(${item.id})">
          <img 
            src="${item.image}" 
            alt="${item.title}" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          >
          
          <!-- Condition Badge (SHEIN Highlight Style) -->
          <div class="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 items-start">
            <span class="bg-black/90 backdrop-blur-md text-white text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wider flex items-center gap-1 shadow-sm">
              <span class="text-brand-pink font-extrabold">${item.condition}/10</span>
              <span>${item.conditionLabel}</span>
            </span>
            ${item.condition >= 9.5 ? `
              <span class="bg-brand-pink text-white text-[9px] font-black px-1.5 py-0.2 rounded uppercase shadow-sm">
                HOT SWAP 🔥
              </span>
            ` : ''}
          </div>

          <!-- Like / Heart Button (Top Right) -->
          <button 
            type="button" 
            onclick="event.stopPropagation(); app.toggleLike(${item.id});" 
            class="absolute top-2.5 right-2.5 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-gray-700 flex items-center justify-center shadow-md transition active:scale-75"
            title="Guardar en favoritos"
          >
            <i class="${item.isLiked ? 'fa-solid fa-heart text-brand-pink heart-active' : 'fa-regular fa-heart'} text-sm"></i>
          </button>

          <!-- Quick Action Bar On Hover (SHEIN Style) -->
          <div class="quick-action-overlay absolute inset-x-2 bottom-2 z-20 flex gap-1.5">
            <button 
              type="button" 
              onclick="event.stopPropagation(); app.openProposeSwap(${item.id});" 
              class="flex-1 bg-brand-pink hover:bg-brand-pinkHover text-white text-xs font-black uppercase py-2 rounded-xl shadow-lg transition active:scale-95 flex items-center justify-center gap-1.5"
            >
              <i class="fa-solid fa-arrows-rotate text-[11px]"></i> Proponer Match
            </button>
            <button 
              type="button" 
              onclick="event.stopPropagation(); app.openProductDetail(${item.id});" 
              class="w-9 bg-white/95 hover:bg-white text-brand-black text-xs font-bold py-2 rounded-xl shadow-lg transition flex items-center justify-center"
              title="Ver detalles"
            >
              <i class="fa-solid fa-eye text-xs"></i>
            </button>
          </div>
        </div>

        <!-- Product Meta Details -->
        <div class="p-3 sm:p-3.5 flex flex-col flex-1">
          <!-- Brand & Size Pill -->
          <div class="flex items-center justify-between text-xs mb-1">
            <span class="font-black text-brand-black tracking-wider uppercase text-[11px] truncate max-w-[120px]">${item.brand}</span>
            <span class="bg-gray-100 text-gray-600 font-bold text-[10px] px-2 py-0.5 rounded-full">${item.size}</span>
          </div>

          <!-- Title -->
          <h3 
            onclick="app.openProductDetail(${item.id})" 
            class="text-xs sm:text-sm font-semibold text-gray-800 line-clamp-1 hover:text-brand-pink cursor-pointer transition mb-1.5"
          >
            ${item.title}
          </h3>

          <!-- Swap Value Tier & Carbon Saved -->
          <div class="mt-auto pt-2 border-t border-gray-50 flex items-center justify-between text-[11px]">
            <span class="font-extrabold text-brand-black">${item.tier}</span>
            <span class="text-emerald-600 font-bold flex items-center gap-1" title="CO2 Ahorrado al intercambiar">
              <i class="fa-solid fa-leaf text-[9px]"></i> -${item.co2Saved}
            </span>
          </div>

          <!-- Owner mini info -->
          <div class="mt-2 flex items-center gap-1.5 text-[10px] text-gray-400">
            <img src="${item.owner.avatar}" alt="${item.owner.name}" class="w-4 h-4 rounded-full object-cover">
            <span class="truncate">${item.owner.name}</span>
            <span class="text-amber-400">★ ${item.owner.rating}</span>
          </div>

        </div>

      </div>
    `).join('');
  },

  // Category Filtering
  setCategoryFilter(category) {
    this.currentCategory = category;
    document.querySelectorAll('.category-nav-link').forEach(link => {
      link.classList.remove('active', 'text-brand-black', 'border-b-2', 'border-brand-black');
      link.classList.add('text-gray-500');
    });
    document.querySelectorAll('.chip-filter').forEach(chip => chip.classList.remove('active'));

    const activeNavs = document.querySelectorAll(`button[onclick*="'${category}'"]`);
    activeNavs.forEach(btn => {
      if (btn.classList.contains('category-nav-link')) {
        btn.classList.add('active', 'text-brand-black', 'border-b-2', 'border-brand-black');
        btn.classList.remove('text-gray-500');
      }
      if (btn.classList.contains('chip-filter')) {
        btn.classList.add('active');
      }
    });

    this.renderCatalog();
  },

  filterByCondition(value) {
    this.currentConditionFilter = value;
    this.renderCatalog();
  },

  sortCatalog(value) {
    this.currentSort = value;
    this.renderCatalog();
  },

  // Search Logic
  handleSearchInput(val) {
    this.searchQuery = val;
    const clearBtn = document.getElementById('clearSearchBtn');
    const suggestions = document.getElementById('searchSuggestions');
    if (clearBtn) {
      if (val.length > 0) clearBtn.classList.remove('hidden');
      else clearBtn.classList.add('hidden');
    }
    if (suggestions) {
      if (val.length > 0 && val.length < 3) suggestions.classList.remove('hidden');
      else suggestions.classList.add('hidden');
    }
    this.renderCatalog();
  },

  handleSearch() {
    const suggestions = document.getElementById('searchSuggestions');
    if (suggestions) suggestions.classList.add('hidden');
    this.renderCatalog();
  },

  clearSearch() {
    const input = document.getElementById('searchInput');
    if (input) input.value = '';
    this.searchQuery = '';
    const clearBtn = document.getElementById('clearSearchBtn');
    if (clearBtn) clearBtn.classList.add('hidden');
    this.renderCatalog();
  },

  setSearchTag(tag) {
    const input = document.getElementById('searchInput');
    if (input) input.value = tag;
    this.searchQuery = tag;
    const suggestions = document.getElementById('searchSuggestions');
    if (suggestions) suggestions.classList.add('hidden');
    this.renderCatalog();
  },

  resetFilters() {
    this.currentCategory = 'all';
    this.currentConditionFilter = 'all';
    this.currentSort = 'trending';
    this.clearSearch();
    const condSelect = document.getElementById('conditionFilterSelect');
    const sortSelect = document.getElementById('sortBySelect');
    if (condSelect) condSelect.value = 'all';
    if (sortSelect) sortSelect.value = 'trending';
    this.setCategoryFilter('all');
  },

  // Likes & Saved Items
  toggleLike(itemId) {
    const item = this.items.find(i => i.id === itemId);
    if (!item) return;
    item.isLiked = !item.isLiked;
    item.likesCount += item.isLiked ? 1 : -1;
    this.renderCatalog();
    this.updateSavedBadge();

    if (item.isLiked) {
      this.showToast(`❤️ ¡Guardado en tus favoritos!`);
    }
  },

  updateSavedBadge() {
    const saved = this.items.filter(i => i.isLiked);
    const badge = document.getElementById('savedBadge');
    const userBadge = document.getElementById('userSavedBadge');
    if (badge) badge.innerText = saved.length;
    if (userBadge) userBadge.innerText = saved.length;
  },

  // ============================================
  // TINDER-STYLE FULL-SCREEN SWIPE DECK
  // ============================================
  renderSwipeDeck() {
    const container = document.getElementById('swipeCardStack');
    const progressCount = document.getElementById('swipeProgressCount');
    if (!container) return;

    const availableItems = this.items.slice(this.swipeDeckIndex, this.swipeDeckIndex + 4);

    if (progressCount) {
      progressCount.innerText = `${Math.min(this.swipeDeckIndex + 1, this.items.length)} / ${this.items.length}`;
    }

    if (availableItems.length === 0) {
      container.innerHTML = `
        <div class="text-center p-8 bg-white border border-gray-100 rounded-3xl shadow-xl max-w-sm">
          <div class="w-16 h-16 rounded-full bg-brand-pink/10 text-brand-pink flex items-center justify-center text-3xl mx-auto mb-4 animate-bounce">
            <i class="fa-solid fa-fire"></i>
          </div>
          <h3 class="font-display font-black text-2xl text-brand-black">¡Has visto todas las prendas!</h3>
          <p class="text-xs text-gray-500 mt-2">Vuelve a barajar o sube una nueva prenda a tu armario para desbloquear más intercambios.</p>
          <div class="mt-6 flex flex-col gap-2">
            <button onclick="app.resetSwipeDeck()" class="bg-brand-black text-white hover:bg-brand-pink font-bold text-xs uppercase py-3 rounded-full transition">
              🔄 Reiniciar Baraja
            </button>
            <button onclick="app.switchTab('home')" class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs py-3 rounded-full transition">
              Volver al Catálogo SHEIN
            </button>
          </div>
        </div>
      `;
      return;
    }

    container.innerHTML = availableItems.map((item, index) => {
      const zIndex = 30 - index;
      const scale = 1 - index * 0.04;
      const translateY = index * 12;

      return `
        <div 
          class="swipe-card absolute inset-0 bg-white rounded-3xl overflow-hidden shadow-card-swipe border border-gray-100 flex flex-col"
          id="card-item-${item.id}"
          style="z-index: ${zIndex}; transform: translateY(${translateY}px) scale(${scale});"
          data-id="${item.id}"
        >
          <!-- Stamps -->
          <div class="stamp-like">LIKE 💚</div>
          <div class="stamp-pass">NOPE ❌</div>
          <div class="stamp-super">SUPER SWAP ⭐</div>

          <!-- Main Image -->
          <div class="relative flex-1 bg-neutral-900 overflow-hidden">
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover pointer-events-none">
            
            <!-- Gradient Overlay for readability -->
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

            <!-- Top Badges -->
            <div class="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span class="bg-brand-black/80 backdrop-blur-md text-white text-xs font-black px-2.5 py-1 rounded-full border border-white/20">
                ⭐ ${item.condition}/10 ${item.conditionLabel}
              </span>
              <span class="bg-emerald-500 text-white text-[11px] font-black px-2 py-0.5 rounded-full shadow">
                -${item.co2Saved} CO2
              </span>
            </div>

            <div class="absolute top-4 right-4 z-10">
              <span class="bg-white/90 text-brand-black text-xs font-extrabold px-3 py-1 rounded-full shadow">
                ${item.size}
              </span>
            </div>

            <!-- Bottom Content on Card -->
            <div class="absolute inset-x-0 bottom-0 p-5 z-20 text-white">
              <div class="flex items-center gap-2 mb-1">
                <span class="font-display font-black text-xs uppercase tracking-widest text-brand-pink bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                  ${item.brand}
                </span>
                <span class="text-xs text-gray-300 font-semibold">• ${item.tier}</span>
              </div>

              <h2 class="font-display font-black text-xl leading-tight line-clamp-1">${item.title}</h2>
              <p class="text-xs text-gray-300 mt-1 line-clamp-2">${item.description}</p>

              <!-- Owner Bar -->
              <div class="mt-3.5 pt-3 border-t border-white/20 flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                  <img src="${item.owner.avatar}" alt="${item.owner.name}" class="w-8 h-8 rounded-full object-cover ring-2 ring-brand-pink">
                  <div>
                    <div class="text-xs font-bold leading-none">${item.owner.name}</div>
                    <div class="text-[10px] text-gray-300 mt-0.5">📍 ${item.owner.city}</div>
                  </div>
                </div>

                <button 
                  onclick="event.stopPropagation(); app.openProductDetail(${item.id});" 
                  class="bg-white/20 hover:bg-white text-white hover:text-black text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md transition flex items-center gap-1"
                >
                  <i class="fa-solid fa-circle-info"></i> Info
                </button>
              </div>

            </div>

          </div>
        </div>
      `;
    }).join('');

    this.attachSwipeListeners();
  },

  attachSwipeListeners() {
    const topCard = document.querySelector('.swipe-card');
    if (!topCard) return;

    this.currentCardEl = topCard;

    const onPointerDown = (e) => {
      this.isDragging = true;
      this.dragStartX = e.clientX || (e.touches && e.touches[0].clientX);
      this.dragStartY = e.clientY || (e.touches && e.touches[0].clientY);
      topCard.style.transition = 'none';
    };

    const onPointerMove = (e) => {
      if (!this.isDragging) return;
      const currentX = e.clientX || (e.touches && e.touches[0].clientX);
      const currentY = e.clientY || (e.touches && e.touches[0].clientY);
      const deltaX = currentX - this.dragStartX;
      const deltaY = currentY - this.dragStartY;
      const rotate = deltaX * 0.08;

      topCard.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${rotate}deg)`;

      // Stamps
      const stampLike = topCard.querySelector('.stamp-like');
      const stampPass = topCard.querySelector('.stamp-pass');
      const stampSuper = topCard.querySelector('.stamp-super');

      if (deltaX > 40 && stampLike) {
        stampLike.style.opacity = Math.min(deltaX / 120, 1);
        if (stampPass) stampPass.style.opacity = 0;
      } else if (deltaX < -40 && stampPass) {
        stampPass.style.opacity = Math.min(Math.abs(deltaX) / 120, 1);
        if (stampLike) stampLike.style.opacity = 0;
      } else if (deltaY < -50 && stampSuper) {
        stampSuper.style.opacity = Math.min(Math.abs(deltaY) / 100, 1);
      } else {
        if (stampLike) stampLike.style.opacity = 0;
        if (stampPass) stampPass.style.opacity = 0;
        if (stampSuper) stampSuper.style.opacity = 0;
      }
    };

    const onPointerUp = (e) => {
      if (!this.isDragging) return;
      this.isDragging = false;
      const currentX = (e.clientX !== undefined) ? e.clientX : (e.changedTouches ? e.changedTouches[0].clientX : this.dragStartX);
      const currentY = (e.clientY !== undefined) ? e.clientY : (e.changedTouches ? e.changedTouches[0].clientY : this.dragStartY);
      const deltaX = currentX - this.dragStartX;
      const deltaY = currentY - this.dragStartY;

      topCard.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease';

      if (deltaX > 100) {
        this.swipeAction('like');
      } else if (deltaX < -100) {
        this.swipeAction('pass');
      } else if (deltaY < -100) {
        this.swipeAction('super');
      } else {
        // Reset position
        topCard.style.transform = 'translate(0px, 0px) rotate(0deg)';
        const stampLike = topCard.querySelector('.stamp-like');
        const stampPass = topCard.querySelector('.stamp-pass');
        const stampSuper = topCard.querySelector('.stamp-super');
        if (stampLike) stampLike.style.opacity = 0;
        if (stampPass) stampPass.style.opacity = 0;
        if (stampSuper) stampSuper.style.opacity = 0;
      }
    };

    topCard.onmousedown = onPointerDown;
    window.onmousemove = onPointerMove;
    window.onmouseup = onPointerUp;

    topCard.ontouchstart = onPointerDown;
    window.ontouchmove = onPointerMove;
    window.ontouchend = onPointerUp;
  },

  swipeAction(type) {
    const currentCard = document.querySelector('.swipe-card');
    if (!currentCard) return;

    const itemId = parseInt(currentCard.getAttribute('data-id'));
    const item = this.items.find(i => i.id === itemId);

    this.swipeHistory.push({ index: this.swipeDeckIndex, type });

    if (type === 'pass') {
      currentCard.classList.add('swiping-left');
      this.showToast('Pasaste de esta prenda');
    } else if (type === 'like') {
      currentCard.classList.add('swiping-right');
      if (item) this.toggleLike(item.id);
      this.checkAndTriggerMatch(item);
    } else if (type === 'super') {
      currentCard.classList.add('swiping-up');
      this.showToast('⭐ ¡Super Swap enviado con prioridad!');
      this.checkAndTriggerMatch(item, true);
    }

    setTimeout(() => {
      this.swipeDeckIndex++;
      this.renderSwipeDeck();
    }, 280);
  },

  swipeRewind() {
    if (this.swipeDeckIndex > 0) {
      this.swipeDeckIndex--;
      this.swipeHistory.pop();
      this.renderSwipeDeck();
      this.showToast('Deshiciste el último movimiento');
    } else {
      this.showToast('Estás en la primera prenda');
    }
  },

  resetSwipeDeck() {
    this.swipeDeckIndex = 0;
    this.swipeHistory = [];
    this.renderSwipeDeck();
  },

  openCurrentSwipeDetail() {
    const currentCard = document.querySelector('.swipe-card');
    if (currentCard) {
      const id = parseInt(currentCard.getAttribute('data-id'));
      this.openProductDetail(id);
    }
  },

  // Match celebration trigger
  checkAndTriggerMatch(item, forceMatch = false) {
    // Items 1 (Elena) and 5 (Sofia) are configured to trigger the match celebration!
    if (item && (item.id === 1 || item.id === 5 || forceMatch)) {
      setTimeout(() => {
        this.openMatchCelebration(item);
      }, 350);
    }
  },

  openMatchCelebration(targetItem) {
    const modal = document.getElementById('modalMatchCelebration');
    const ownerSpan = document.getElementById('matchOwnerNameSpan');
    const targetImg = document.getElementById('matchTargetItemImg');
    const userImg = document.getElementById('matchUserItemImg');
    if (!modal) return;

    if (ownerSpan) ownerSpan.innerText = targetItem.owner.name;
    if (targetImg) targetImg.src = targetItem.image;
    if (userImg) userImg.src = this.userWardrobe[0].image;

    modal.classList.remove('hidden');
  },

  closeMatchCelebration() {
    const modal = document.getElementById('modalMatchCelebration');
    if (modal) modal.classList.add('hidden');
  },

  openChatFromMatch() {
    this.closeMatchCelebration();
    this.switchTab('chat');
  },

  // Mini Swipe Widget in Home Page Hero
  renderMiniSwipe() {
    const container = document.getElementById('miniSwipeContainer');
    if (!container) return;
    const item = this.items[0]; // Elena's biker jacket
    container.innerHTML = `
      <div class="w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl relative border-2 border-white/20 select-none group">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
        <div class="absolute top-3 left-3 bg-brand-black/80 backdrop-blur-md text-white text-[10px] font-black px-2 py-0.5 rounded">
          ${item.condition}/10 Como Nuevo
        </div>
        <div class="absolute top-3 right-3 bg-brand-pink text-white text-[10px] font-black px-2 py-0.5 rounded">
          ${item.size}
        </div>
        <div class="absolute bottom-3 inset-x-3 text-white">
          <div class="text-[10px] font-bold uppercase text-brand-pink">${item.brand}</div>
          <div class="font-display font-black text-sm line-clamp-1">${item.title}</div>
          <div class="text-[10px] text-gray-300 mt-0.5 flex items-center justify-between">
            <span>${item.tier}</span>
            <span class="text-emerald-400 font-bold">-${item.co2Saved} CO2</span>
          </div>
        </div>
      </div>
    `;
  },

  miniSwipe(action) {
    if (action === 'like' || action === 'super') {
      this.showToast('¡Has dado Like en el teaser! Abriendo Modo Match...');
      setTimeout(() => {
        this.switchTab('swipe');
      }, 500);
    } else {
      this.showToast('Pasaste esta prenda');
    }
  },

  // ============================================
  // PRODUCT DETAIL COMPREHENSIVE MODAL
  // ============================================
  openProductDetail(itemId) {
    const item = this.items.find(i => i.id === itemId);
    if (!item) return;

    const modal = document.getElementById('modalProductDetail');
    const body = document.getElementById('productDetailBody');
    if (!modal || !body) return;

    body.innerHTML = `
      <!-- Column 1: Image Gallery -->
      <div class="p-6 bg-gray-50 flex flex-col justify-between border-r border-gray-100">
        <div class="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-sm mb-4">
          <img id="detailMainImg" src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
          <span class="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-white text-xs font-black px-3 py-1 rounded-full">
            ⭐ ${item.condition} / 10 - ${item.conditionLabel}
          </span>
        </div>
        
        <!-- Thumbnails -->
        <div class="flex gap-2">
          ${item.images.map((img, idx) => `
            <button 
              onclick="document.getElementById('detailMainImg').src = '${img}'" 
              class="w-16 h-20 rounded-xl overflow-hidden border-2 hover:border-brand-pink transition focus:border-brand-pink"
            >
              <img src="${img}" class="w-full h-full object-cover">
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Column 2: Comprehensive Details & Propose CTA -->
      <div class="p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <!-- Header -->
          <div class="flex items-center justify-between mb-1.5">
            <span class="font-black text-xs uppercase tracking-widest text-brand-pink">${item.brand}</span>
            <span class="bg-gray-100 text-gray-800 text-xs font-bold px-2.5 py-0.5 rounded-full">${item.gender} • ${item.size}</span>
          </div>

          <h2 class="font-display font-black text-2xl text-brand-black leading-tight mb-2">${item.title}</h2>
          <div class="text-sm font-bold text-gray-500 mb-4">${item.tier}</div>

          <!-- Circular Impact Badge -->
          <div class="bg-emerald-50 border border-emerald-100 rounded-2xl p-3 flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-lg flex-shrink-0">
              <i class="fa-solid fa-leaf"></i>
            </div>
            <div>
              <div class="text-xs font-black text-emerald-900">Ahorro Ambiental Certificado</div>
              <div class="text-[11px] text-emerald-700">Evitas la emisión de <strong>${item.co2Saved} de CO2</strong> y 2,400L de agua frente a comprar nuevo.</div>
            </div>
          </div>

          <!-- Description -->
          <div class="mb-5">
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Descripción de la Prenda</h4>
            <p class="text-xs text-gray-600 leading-relaxed">${item.description}</p>
          </div>

          <!-- Condition Rating Breakdown -->
          <div class="mb-5 bg-gray-50 p-3.5 rounded-2xl border border-gray-100">
            <h4 class="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Evaluación de Estado (SHEIN Quality Checklist)</h4>
            <div class="space-y-1.5 text-xs">
              <div class="flex justify-between text-gray-600">
                <span>Estado de tela / color:</span>
                <span class="font-bold text-brand-black">9.8 / 10 (Sin desgaste ni motas)</span>
              </div>
              <div class="flex justify-between text-gray-600">
                <span>Costuras & cremalleras:</span>
                <span class="font-bold text-brand-black">10 / 10 (Originales y funcionales)</span>
              </div>
              <div class="flex justify-between text-gray-600">
                <span>Higiene & cuidados:</span>
                <span class="font-bold text-emerald-600">Lavado ecológico, sin olores</span>
              </div>
            </div>
          </div>

          <!-- Real Measurements -->
          <div class="mb-6">
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">Medidas Exactas</h4>
            <div class="grid grid-cols-3 gap-2 text-center text-xs">
              ${Object.entries(item.measurements).map(([k, v]) => `
                <div class="bg-gray-100 p-2 rounded-xl">
                  <div class="text-[10px] text-gray-400 uppercase font-bold">${k}</div>
                  <div class="font-black text-brand-black">${v}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Owner Profile -->
          <div class="p-3.5 rounded-2xl border border-gray-200 flex items-center justify-between mb-6">
            <div class="flex items-center gap-3">
              <img src="${item.owner.avatar}" alt="${item.owner.name}" class="w-10 h-10 rounded-full object-cover ring-2 ring-brand-black">
              <div>
                <div class="text-xs font-black text-brand-black">${item.owner.name}</div>
                <div class="text-[11px] text-gray-500">${item.owner.handle} • ${item.owner.tradesCount} trueques</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-xs font-bold text-amber-500">★ ${item.owner.rating}</div>
              <div class="text-[10px] text-gray-400">Responde en &lt; 15m</div>
            </div>
          </div>
        </div>

        <!-- Call To Action -->
        <div class="flex items-center gap-3 pt-2">
          <button 
            onclick="app.toggleLike(${item.id}); app.closeProductDetail();" 
            class="p-3.5 rounded-full border border-gray-200 text-gray-700 hover:text-brand-pink transition"
            title="Guardar prenda"
          >
            <i class="${item.isLiked ? 'fa-solid fa-heart text-brand-pink' : 'fa-regular fa-heart'} text-lg"></i>
          </button>
          
          <button 
            onclick="app.openProposeSwap(${item.id}); app.closeProductDetail();" 
            class="flex-1 bg-brand-pink hover:bg-brand-pinkHover text-white font-black text-xs sm:text-sm uppercase py-4 rounded-full shadow-pink-glow transition active:scale-95 flex items-center justify-center gap-2"
          >
            <i class="fa-solid fa-arrows-rotate"></i> Proponer Match / Ofrecer Prenda
          </button>
        </div>

      </div>
    `;

    modal.classList.remove('hidden');
  },

  closeProductDetail() {
    const modal = document.getElementById('modalProductDetail');
    if (modal) modal.classList.add('hidden');
  },

  // ============================================
  // PROPOSE SWAP MODAL
  // ============================================
  openProposeSwap(targetItemId) {
    this.proposeTargetItemId = targetItemId;
    const targetItem = this.items.find(i => i.id === targetItemId);
    const modal = document.getElementById('modalProposeSwap');
    const nameSpan = document.getElementById('targetItemNameSpan');
    const list = document.getElementById('proposeUserWardrobeList');
    if (!modal || !list) return;

    if (nameSpan && targetItem) nameSpan.innerText = `${targetItem.title} (${targetItem.brand})`;

    this.selectedWardrobeOfferId = this.userWardrobe[0].id;

    list.innerHTML = this.userWardrobe.map(myItem => `
      <label class="flex items-center gap-3 p-2.5 rounded-2xl border border-gray-200 hover:border-brand-black cursor-pointer transition">
        <input 
          type="radio" 
          name="swapOfferItem" 
          value="${myItem.id}" 
          ${myItem.id === this.selectedWardrobeOfferId ? 'checked' : ''} 
          onchange="app.selectedWardrobeOfferId = ${myItem.id}"
          class="accent-brand-pink"
        >
        <img src="${myItem.image}" alt="${myItem.title}" class="w-12 h-14 rounded-xl object-cover">
        <div class="flex-1 text-xs">
          <div class="font-bold text-brand-black truncate">${myItem.title}</div>
          <div class="text-[11px] text-gray-500">${myItem.brand} • Talla ${myItem.size}</div>
          <div class="text-[10px] text-emerald-600 font-semibold">${myItem.condition}/10 - ${myItem.conditionLabel}</div>
        </div>
      </label>
    `).join('');

    modal.classList.remove('hidden');
  },

  closeProposeSwap() {
    const modal = document.getElementById('modalProposeSwap');
    if (modal) modal.classList.add('hidden');
  },

  confirmSwapProposal() {
    this.closeProposeSwap();
    const targetItem = this.items.find(i => i.id === this.proposeTargetItemId);
    this.showToast('¡Oferta de trueque enviada con éxito!');
    if (targetItem) {
      setTimeout(() => {
        this.openMatchCelebration(targetItem);
      }, 600);
    }
  },

  // ============================================
  // MY WARDROBE (USER DASHBOARD)
  // ============================================
  setWardrobeSubTab(subTab) {
    this.wardrobeSubTab = subTab;
    document.querySelectorAll('.wardrobe-subtab').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById(`subtab-${subTab}`);
    if (btn) btn.classList.add('active');

    document.getElementById('wardrobe-listings-content').classList.add('hidden');
    document.getElementById('wardrobe-matches-content').classList.add('hidden');
    document.getElementById('wardrobe-saved-content').classList.add('hidden');

    const target = document.getElementById(`wardrobe-${subTab}-content`);
    if (target) target.classList.remove('hidden');

    this.renderWardrobe();
  },

  renderWardrobe() {
    // 1. My Listings
    const listingsGrid = document.getElementById('userWardrobeGrid');
    const listingsBadge = document.getElementById('userListingsBadge');
    if (listingsBadge) listingsBadge.innerText = this.userWardrobe.length;

    if (listingsGrid) {
      listingsGrid.innerHTML = this.userWardrobe.map(item => `
        <div class="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-shein flex flex-col">
          <div class="relative aspect-[3/4] bg-gray-100">
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
            <span class="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded">
              ⭐ ${item.condition}/10
            </span>
            <span class="absolute top-2.5 right-2.5 bg-white/90 text-brand-black text-[10px] font-black px-2 py-0.5 rounded-full shadow">
              ${item.size}
            </span>
          </div>
          <div class="p-3.5 flex flex-col flex-1">
            <span class="text-[10px] font-black uppercase text-gray-400 tracking-wider">${item.brand}</span>
            <h4 class="text-xs font-bold text-brand-black truncate mt-0.5">${item.title}</h4>
            <div class="mt-2 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full w-fit">
              ${item.status}
            </div>
            <div class="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
              <span><i class="fa-regular fa-eye"></i> ${item.views || 40} vistas</span>
              <span class="text-brand-pink font-bold"><i class="fa-solid fa-arrows-rotate"></i> ${item.proposals || 2} ofertas</span>
            </div>
          </div>
        </div>
      `).join('');
    }

    // 2. My Matches
    const matchesGrid = document.getElementById('userMatchesGrid');
    const matchesBadge = document.getElementById('userMatchesBadge');
    if (matchesBadge) matchesBadge.innerText = this.matches.length;

    if (matchesGrid) {
      matchesGrid.innerHTML = this.matches.map(m => `
        <div class="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-2">
                <img src="${m.partner.avatar}" alt="${m.partner.name}" class="w-8 h-8 rounded-full object-cover">
                <div>
                  <div class="text-xs font-black text-brand-black">${m.partner.name}</div>
                  <div class="text-[10px] text-gray-400">📍 ${m.partner.city}</div>
                </div>
              </div>
              <span class="bg-brand-pink/10 text-brand-pink text-[10px] font-black px-2 py-0.5 rounded-full">MATCH MUTUO</span>
            </div>

            <!-- Items pair -->
            <div class="grid grid-cols-2 gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100 mb-3">
              <div class="text-center">
                <img src="${m.myItem.image}" class="w-16 h-20 rounded-lg object-cover mx-auto mb-1">
                <div class="text-[10px] font-bold text-gray-700 truncate">Tu: ${m.myItem.title}</div>
              </div>
              <div class="text-center">
                <img src="${m.theirItem.image}" class="w-16 h-20 rounded-lg object-cover mx-auto mb-1">
                <div class="text-[10px] font-bold text-brand-pink truncate">${m.theirItem.title}</div>
              </div>
            </div>

            <p class="text-xs text-gray-500 italic truncate mb-4">"${m.lastMessage}"</p>
          </div>

          <button onclick="app.selectChatMatch(${m.id}); app.switchTab('chat');" class="w-full bg-brand-black hover:bg-brand-pink text-white text-xs font-bold py-2.5 rounded-full transition flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-comments"></i> Abrir Chat de Trueque
          </button>
        </div>
      `).join('');
    }

    // 3. Saved Items Grid
    const savedGrid = document.getElementById('userSavedGrid');
    const savedItems = this.items.filter(i => i.isLiked);
    if (savedGrid) {
      if (savedItems.length === 0) {
        savedGrid.innerHTML = `
          <div class="col-span-full text-center py-12 text-gray-400">
            <i class="fa-regular fa-heart text-3xl mb-2"></i>
            <p class="text-xs">No tienes prendas guardadas aún. Explora el catálogo para añadir favoritos.</p>
          </div>
        `;
      } else {
        savedGrid.innerHTML = savedItems.map(item => `
          <div class="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-shein flex flex-col">
            <div class="relative aspect-[3/4] bg-gray-100">
              <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
              <button onclick="app.toggleLike(${item.id}); app.renderWardrobe();" class="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white text-brand-pink shadow flex items-center justify-center">
                <i class="fa-solid fa-heart text-sm"></i>
              </button>
            </div>
            <div class="p-3">
              <div class="text-[10px] font-bold text-gray-400 uppercase">${item.brand}</div>
              <div class="text-xs font-bold text-brand-black truncate">${item.title}</div>
              <div class="text-[11px] font-black text-brand-pink mt-1">${item.tier}</div>
              <button onclick="app.openProposeSwap(${item.id})" class="w-full mt-3 bg-brand-black hover:bg-brand-pink text-white text-xs font-bold py-2 rounded-xl transition">
                Proponer Match
              </button>
            </div>
          </div>
        `).join('');
      }
    }
  },

  // Upload New Item Modal
  openUploadModal() {
    const modal = document.getElementById('modalUploadItem');
    if (modal) modal.classList.remove('hidden');
  },

  closeUploadModal() {
    const modal = document.getElementById('modalUploadItem');
    if (modal) modal.classList.add('hidden');
  },

  handleConditionSliderChange(val) {
    const display = document.getElementById('conditionSliderValue');
    if (!display) return;
    const num = parseFloat(val);
    let label = "Buen estado";
    if (num >= 9.8) label = "Impecable con etiquetas";
    else if (num >= 9.0) label = "Como Nuevo";
    else if (num >= 8.0) label = "Muy Bueno";
    display.innerText = `${num.toFixed(1)} / 10 - ${label}`;
  },

  selectUploadPhotoPreset(index) {
    const presets = [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80"
    ];
    this.selectedUploadPhoto = presets[index];
    document.querySelectorAll('.upload-preset-btn').forEach((btn, idx) => {
      if (idx === index) {
        btn.classList.add('border-brand-pink');
        btn.classList.remove('border-transparent');
      } else {
        btn.classList.remove('border-brand-pink');
        btn.classList.add('border-transparent');
      }
    });
  },

  handleUploadSubmit() {
    const title = document.getElementById('uploadTitle').value.trim();
    const brand = document.getElementById('uploadBrand').value.trim();
    const category = document.getElementById('uploadCategory').value;
    const size = document.getElementById('uploadSize').value;
    const condition = parseFloat(document.getElementById('uploadCondition').value);
    const customPhoto = document.getElementById('uploadCustomPhoto').value.trim();

    const photoUrl = customPhoto || this.selectedUploadPhoto;

    const newItem = {
      id: Date.now(),
      title,
      brand: brand.toUpperCase(),
      category,
      gender: "Unisex",
      size,
      condition,
      conditionLabel: condition >= 9.5 ? "Como Nuevo" : "Muy Buen Estado",
      tier: "Tier B • Circular Swap",
      image: photoUrl,
      images: [photoUrl],
      description: `Prenda subida por Michelrad lista para circular. Estado verificado ${condition}/10.`,
      measurements: { pecho: "50 cm", largo: "65 cm" },
      owner: {
        name: "Michelrad",
        handle: "@michelrad",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        rating: 5.0,
        tradesCount: 1,
        city: "Madrid"
      },
      co2Saved: "6.5 kg",
      isLiked: false,
      likesCount: 1,
      status: "Disponible para Trueque",
      views: 1,
      proposals: 0
    };

    // Add to user wardrobe and to the active catalog
    this.userWardrobe.unshift(newItem);
    this.items.unshift(newItem);

    this.closeUploadModal();
    this.showToast('🎉 ¡Prenda publicada y disponible para intercambio!');
    this.renderCatalog();
    this.renderWardrobe();
    this.switchTab('wardrobe');
  },

  // Saved Modal
  openSavedModal() {
    const modal = document.getElementById('modalSavedItems');
    const list = document.getElementById('savedItemsList');
    if (!modal || !list) return;

    const saved = this.items.filter(i => i.isLiked);

    if (saved.length === 0) {
      list.innerHTML = `
        <div class="text-center py-8 text-gray-400">
          <i class="fa-regular fa-heart text-2xl mb-2"></i>
          <p class="text-xs">No tienes prendas guardadas todavía.</p>
        </div>
      `;
    } else {
      list.innerHTML = saved.map(item => `
        <div class="flex items-center gap-3 p-2 rounded-2xl border border-gray-100 hover:border-brand-black transition">
          <img src="${item.image}" alt="${item.title}" class="w-12 h-14 rounded-xl object-cover">
          <div class="flex-1 text-xs">
            <div class="font-bold text-brand-black truncate">${item.title}</div>
            <div class="text-[11px] text-gray-500">${item.brand} • Talla ${item.size}</div>
            <div class="text-[10px] text-brand-pink font-semibold">${item.tier}</div>
          </div>
          <button onclick="app.openProposeSwap(${item.id}); app.closeSavedModal();" class="bg-brand-black hover:bg-brand-pink text-white text-[11px] font-bold px-3 py-1.5 rounded-full transition">
            Trueque
          </button>
        </div>
      `).join('');
    }

    modal.classList.remove('hidden');
  },

  closeSavedModal() {
    const modal = document.getElementById('modalSavedItems');
    if (modal) modal.classList.add('hidden');
  },

  // ============================================
  // MATCH CHAT (PRIVATE BARTER MESSAGING)
  // ============================================
  renderChatList() {
    const list = document.getElementById('chatMatchesList');
    if (!list) return;

    list.innerHTML = this.matches.map(m => `
      <div 
        onclick="app.selectChatMatch(${m.id})" 
        class="p-4 cursor-pointer hover:bg-white transition flex items-center gap-3 ${m.id === this.activeMatchId ? 'bg-white border-l-4 border-brand-pink shadow-sm' : ''}"
      >
        <div class="relative">
          <img src="${m.partner.avatar}" alt="${m.partner.name}" class="w-12 h-12 rounded-full object-cover">
          ${m.unread ? '<span class="absolute top-0 right-0 w-3 h-3 bg-brand-pink rounded-full ring-2 ring-white"></span>' : ''}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between">
            <span class="text-xs font-black text-brand-black truncate">${m.partner.name}</span>
            <span class="text-[10px] text-gray-400">${m.lastTime}</span>
          </div>
          <div class="text-[11px] text-brand-pink font-bold truncate mt-0.5">${m.theirItem.title}</div>
          <div class="text-[11px] text-gray-500 truncate mt-0.5">${m.lastMessage}</div>
        </div>
      </div>
    `).join('');
  },

  selectChatMatch(matchId) {
    this.activeMatchId = matchId;
    const match = this.matches.find(m => m.id === matchId);
    if (match) match.unread = false;
    this.renderChatList();
    this.renderActiveChat();
  },

  renderActiveChat() {
    const match = this.matches.find(m => m.id === this.activeMatchId);
    if (!match) return;

    // Header pinned trade deal
    const header = document.getElementById('chatDealHeader');
    if (header) {
      header.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="flex items-center -space-x-3">
            <img src="${match.myItem.image}" class="w-10 h-12 rounded-lg object-cover ring-2 ring-white shadow">
            <img src="${match.theirItem.image}" class="w-10 h-12 rounded-lg object-cover ring-2 ring-brand-pink shadow">
          </div>
          <div>
            <div class="text-xs font-black text-brand-black flex items-center gap-1.5">
              <span>Trueque con ${match.partner.name}</span>
              <span class="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.2 rounded-full font-bold">Verificado</span>
            </div>
            <div class="text-[10px] text-gray-500 mt-0.5 flex items-center gap-2">
              <span>Tu: <strong>${match.myItem.title}</strong></span>
              <span>↔</span>
              <span>Su: <strong>${match.theirItem.title}</strong></span>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="app.showToast('Acuerdo de envío generado');" class="bg-brand-black hover:bg-brand-pink text-white text-[11px] font-black uppercase px-3.5 py-1.5 rounded-full transition shadow-sm">
            Acordar Entrega
          </button>
        </div>
      `;
    }

    // Messages
    const container = document.getElementById('chatMessagesContainer');
    if (!container) return;

    container.innerHTML = match.messages.map(msg => {
      if (msg.sender === 'system') {
        return `
          <div class="text-center my-3">
            <span class="bg-gray-100 text-gray-600 text-[11px] font-semibold px-4 py-1.5 rounded-full inline-block">
              ${msg.text}
            </span>
          </div>
        `;
      } else if (msg.sender === 'me') {
        return `
          <div class="flex justify-end">
            <div class="bg-brand-black text-white rounded-2xl rounded-tr-none px-4 py-2.5 max-w-xs sm:max-w-md shadow-sm">
              <p class="text-xs leading-relaxed">${msg.text}</p>
              <div class="text-[9px] text-gray-400 text-right mt-1">${msg.time} • Leído ✓✓</div>
            </div>
          </div>
        `;
      } else {
        return `
          <div class="flex justify-start items-end gap-2">
            <img src="${match.partner.avatar}" class="w-6 h-6 rounded-full object-cover mb-1">
            <div class="bg-white border border-gray-100 text-brand-black rounded-2xl rounded-tl-none px-4 py-2.5 max-w-xs sm:max-w-md shadow-sm">
              <p class="text-xs leading-relaxed">${msg.text}</p>
              <div class="text-[9px] text-gray-400 mt-1">${msg.time}</div>
            </div>
          </div>
        `;
      }
    }).join('');

    container.scrollTop = container.scrollHeight;
  },

  handleSendMessage() {
    const input = document.getElementById('chatMessageInput');
    if (!input || !input.value.trim()) return;

    const text = input.value.trim();
    input.value = '';

    const match = this.matches.find(m => m.id === this.activeMatchId);
    if (!match) return;

    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

    match.messages.push({
      sender: 'me',
      time: timeStr,
      text: text
    });

    match.lastMessage = text;
    match.lastTime = timeStr;

    this.renderActiveChat();
    this.renderChatList();

    // Automated Partner Response Simulation
    setTimeout(() => {
      const responses = [
        "¡Perfecto! Me parece estupendo, me organizo y te confirmo la hora exacta 😊",
        "¡Genial trato! Voy a dejar la prenda planchada y empaquetada hoy mismo.",
        "Me viene de maravilla. Qué ganas de tener la prenda. ¡Nos hablamos pronto!",
        "Totalmente de acuerdo, el trueque circular es la mejor manera de renovar el armario 🙌"
      ];
      const randomReply = responses[Math.floor(Math.random() * responses.length)];

      match.messages.push({
        sender: 'them',
        time: timeStr,
        text: randomReply
      });
      match.lastMessage = randomReply;
      this.renderActiveChat();
      this.renderChatList();
      this.showToast(`💬 Mensaje recibido de ${match.partner.name}`);
    }, 1400);
  },

  sendQuickChat(text) {
    const input = document.getElementById('chatMessageInput');
    if (input) {
      input.value = text;
      this.handleSendMessage();
    }
  },

  // Toast Notification System
  showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'bg-brand-dark text-white text-xs font-bold py-3 px-4 rounded-2xl shadow-2xl flex items-center gap-2 border border-neutral-700 pointer-events-auto transform transition-all duration-300 translate-y-4 opacity-0';
    toast.innerHTML = `
      <span class="text-brand-pink text-sm"><i class="fa-solid fa-circle-check"></i></span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('translate-y-4', 'opacity-0');
    }, 10);

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-4');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  },

  // Keyboard Shortcuts (Arrow keys for swipe)
  initKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      if (this.activeTab !== 'swipe') return;
      if (e.key === 'ArrowRight') {
        this.swipeAction('like');
      } else if (e.key === 'ArrowLeft') {
        this.swipeAction('pass');
      } else if (e.key === 'ArrowUp') {
        this.swipeAction('super');
      }
    });
  }
};

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
