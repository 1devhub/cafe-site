(function() {
  // ===== DOM ELEMENTS =====
  const catalog = document.getElementById('catalog');
  const categoriesList = document.getElementById('categories-list');
  const basketFloat = document.getElementById('basket-float');
  const basketFloatPrice = document.getElementById('basket-float-price');
  const headerCartCount = document.getElementById('header-cart-count');
  const overlay = document.getElementById('overlay');
  const sidebarBasket = document.getElementById('sidebar-basket');
  const basketItems = document.getElementById('basket-items');
  const basketTotal = document.getElementById('basket-total');
  const checkoutBtn = document.getElementById('checkout-btn');
  const backWidget = document.getElementById('back-widget');
  const loginModal = document.getElementById('login-modal');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const sidebarCategories = document.getElementById('sidebar-categories');
  const productPopup = document.getElementById('product-popup');
  const bannerTrack = document.getElementById('banner-track');

  let currentBanner = 0;
  let bannerInterval;
  let cutleryCount = 1;
  let promoApplied = false;
  let currentProduct = null;

  // ===== SIDEBAR (BURGER MENU — slides from RIGHT) =====
  function openSidebar() {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.getElementById('burger-btn').addEventListener('click', openSidebar);
  document.getElementById('sidebar-close').addEventListener('click', closeSidebar);
  sidebarOverlay.addEventListener('click', closeSidebar);

  // Sidebar category links
  function renderSidebarCategories() {
    sidebarCategories.innerHTML = MENU_DATA.map(cat =>
      `<a href="#cat-${cat.id}" class="sidebar__link" data-sidebar-cat="${cat.id}">${cat.title}</a>`
    ).join('');

    sidebarCategories.addEventListener('click', (e) => {
      const link = e.target.closest('[data-sidebar-cat]');
      if (!link) return;
      e.preventDefault();
      const id = link.dataset.sidebarCat;
      const el = document.getElementById('cat-' + id);
      if (el) {
        closeSidebar();
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
      }
    });
  }

  // Sidebar FAQ link
  document.getElementById('sidebar-faq').addEventListener('click', (e) => {
    e.preventDefault();
    closeSidebar();
    setTimeout(() => document.getElementById('faq').scrollIntoView({ behavior: 'smooth' }), 300);
  });

  // Sidebar Delivery link — opens basket
  document.getElementById('sidebar-delivery').addEventListener('click', (e) => {
    e.preventDefault();
    closeSidebar();
    setTimeout(() => openBasket(), 300);
  });

  // Delivery/Pickup tabs
  const tabs = document.querySelectorAll('.sidebar-basket__tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // ===== BANNER CAROUSEL =====
  function renderBanners() {
    bannerTrack.innerHTML = BANNERS.map((b, i) => `
      <div class="main-banners__slide" data-banner="${i}" style="background-image: url('${b.image}'); background-size: cover; background-position: center;">
        <div class="main-banners__overlay" style="position:absolute;top:0;left:0;right:0;bottom:0;background:${b.gradient};opacity:0.6;"></div>
        <div class="main-banners__slide-content" style="position:relative;z-index:1;">
          <span class="main-banners__badge">Акция</span>
          <h2 class="main-banners__title">${b.title}</h2>
          <p class="main-banners__subtitle">${b.subtitle}</p>
        </div>
      </div>
    `).join('');

    document.getElementById('banner-prev').addEventListener('click', () => {
      bannerTrack.scrollBy({ left: -300, behavior: 'smooth' });
    });
    document.getElementById('banner-next').addEventListener('click', () => {
      bannerTrack.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }

  // ===== CATEGORIES SLIDER =====
  function renderCategories() {
    categoriesList.innerHTML = MENU_DATA.map(cat =>
      `<button class="categories__item" data-category="${cat.id}">${cat.title}</button>`
    ).join('');

    categoriesList.addEventListener('click', (e) => {
      const btn = e.target.closest('.categories__item');
      if (!btn) return;
      const el = document.getElementById('cat-' + btn.dataset.category);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      categoriesList.querySelectorAll('.categories__item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  }

  // ===== CATALOG =====
  function renderCatalog() {
    catalog.innerHTML = MENU_DATA.map(cat => `
      <section class="catalog__category" id="cat-${cat.id}">
        <h2 class="catalog__category-title">${cat.title}</h2>
        <div class="catalog__grid">
          ${cat.items.map(item => renderProductCard(item)).join('')}
        </div>
      </section>
    `).join('');

    catalog.addEventListener('click', handleCatalogClick);
  }

  function renderProductCard(item) {
    const qty = cart.getQty(item.id);
    return `
      <div class="product-card" data-id="${item.id}">
        <div class="product-card__img-wrapper">
          <div class="product-card__skeleton"></div>
          <img class="product-card__img loading" src="${item.image}" alt="${item.name}" loading="lazy" onload="this.classList.remove('loading');this.previousElementSibling.style.display='none'" onerror="this.style.display='none';this.previousElementSibling.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="product-card__placeholder" style="display:none">${item.emoji || '🍽'}</div>
        </div>
        <div class="product-card__body">
          <div class="product-card__title">${item.name}</div>
          <div class="product-card__weight">${item.weight}</div>
          <div class="product-card__footer">
            <span class="product-card__price">${item.price} ₽</span>
            ${qty > 0 ? renderQuantity(item.id, qty) : renderAddButton(item.id)}
          </div>
        </div>
      </div>
    `;
  }

  function renderAddButton(id) {
    return `<button class="product-card__add-btn" data-add="${id}" aria-label="Добавить">Добавить</button>`;
  }

  function renderQuantity(id, qty) {
    return `
      <div class="product-card__quantity">
        <button class="product-card__qty-btn" data-dec="${id}">−</button>
        <span class="product-card__qty-value">${qty}</span>
        <button class="product-card__qty-btn" data-inc="${id}">+</button>
      </div>
    `;
  }

  function handleCatalogClick(e) {
    const addBtn = e.target.closest('[data-add]');
    const incBtn = e.target.closest('[data-inc]');
    const decBtn = e.target.closest('[data-dec]');
    const card = e.target.closest('.product-card');

    if (addBtn) {
      e.stopPropagation();
      const id = addBtn.dataset.add;
      const product = findProduct(id);
      if (product) {
        cart.addItem(product);
        addBtn.classList.add('pulse');
        setTimeout(() => addBtn.classList.remove('pulse'), 300);
        refreshCard(id);
      }
    } else if (incBtn) {
      e.stopPropagation();
      cart.increment(incBtn.dataset.inc);
      refreshCard(incBtn.dataset.inc);
    } else if (decBtn) {
      e.stopPropagation();
      cart.decrement(decBtn.dataset.dec);
      refreshCard(decBtn.dataset.dec);
    } else if (card && !e.target.closest('button')) {
      const id = card.dataset.id;
      const product = findProduct(id);
      if (product) openProductPopup(product);
    }
  }

  function findProduct(id) {
    for (const cat of MENU_DATA) {
      const item = cat.items.find(i => i.id === id);
      if (item) return item;
    }
    return null;
  }

  function refreshCard(id) {
    const card = catalog.querySelector(`[data-id="${id}"]`);
    if (!card) return;
    const product = findProduct(id);
    const qty = cart.getQty(id);
    const footer = card.querySelector('.product-card__footer');
    footer.innerHTML = `
      <span class="product-card__price">${product.price} ₽</span>
      ${qty > 0 ? renderQuantity(id, qty) : renderAddButton(id)}
    `;
  }

  // ===== PRODUCT POPUP =====
  function openProductPopup(product) {
    currentProduct = product;
    document.getElementById('popup-img').innerHTML = `<img src="${product.image}" alt="${product.name}">`;
    document.getElementById('popup-title').textContent = product.name;
    document.getElementById('popup-desc').textContent = product.desc;
    document.getElementById('popup-weight').textContent = product.weight;
    document.getElementById('popup-nutrients').innerHTML = `
      <div class="product-popup__nutrient"><div class="product-popup__nutrient-value">${product.kcal}</div><div class="product-popup__nutrient-label">ккал</div></div>
      <div class="product-popup__nutrient"><div class="product-popup__nutrient-value">${product.protein}г</div><div class="product-popup__nutrient-label">белки</div></div>
      <div class="product-popup__nutrient"><div class="product-popup__nutrient-value">${product.fat}г</div><div class="product-popup__nutrient-label">жиры</div></div>
      <div class="product-popup__nutrient"><div class="product-popup__nutrient-value">${product.carbs}г</div><div class="product-popup__nutrient-label">углеводы</div></div>
    `;
    document.getElementById('popup-price').textContent = product.price + ' ₽';
    productPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProductPopup() {
    productPopup.classList.remove('active');
    document.body.style.overflow = '';
    currentProduct = null;
  }

  document.getElementById('popup-close').addEventListener('click', closeProductPopup);
  productPopup.addEventListener('click', (e) => {
    if (e.target === productPopup) closeProductPopup();
  });

  document.getElementById('popup-add').addEventListener('click', () => {
    if (currentProduct) {
      cart.addItem(currentProduct);
      refreshCard(currentProduct.id);
      closeProductPopup();
    }
  });

  // ===== CART UI =====
  function updateCartUI() {
    const count = cart.getCount();
    const total = cart.getTotal();
    headerCartCount.textContent = count;
    headerCartCount.classList.toggle('visible', count > 0);
    basketFloat.classList.toggle('visible', count > 0);
    basketFloatPrice.textContent = total + ' ₽';
    renderSidebarBasket();
  }

  function renderSidebarBasket() {
    if (cart.items.length === 0) {
      basketItems.innerHTML = `<div class="sidebar-basket__empty"><span class="sidebar-basket__empty-icon">🛒</span><p>Корзина пуста</p></div>`;
      checkoutBtn.disabled = true;
    } else {
      basketItems.innerHTML = cart.items.map(item => `
        <div class="cart-item">
          <div class="cart-item__img"><img src="${item.image}" alt="${item.name}"></div>
          <div class="cart-item__info">
            <div class="cart-item__name">${item.name}</div>
            <div class="cart-item__price">${item.price} ₽ × ${item.qty} = ${item.price * item.qty} ₽</div>
            <div class="cart-item__controls">
              <button class="cart-item__qty-btn" data-cart-dec="${item.id}">−</button>
              <span class="cart-item__qty">${item.qty}</span>
              <button class="cart-item__qty-btn" data-cart-inc="${item.id}">+</button>
              <button class="cart-item__remove" data-cart-remove="${item.id}">Удалить</button>
            </div>
          </div>
        </div>
      `).join('');
      checkoutBtn.disabled = false;
    }
    basketTotal.textContent = cart.getTotal() + ' ₽';
  }

  basketItems.addEventListener('click', (e) => {
    const incBtn = e.target.closest('[data-cart-inc]');
    const decBtn = e.target.closest('[data-cart-dec]');
    const removeBtn = e.target.closest('[data-cart-remove]');
    if (incBtn) { cart.increment(incBtn.dataset.cartInc); refreshCard(incBtn.dataset.cartInc); }
    else if (decBtn) { cart.decrement(decBtn.dataset.cartDec); refreshCard(decBtn.dataset.cartDec); }
    else if (removeBtn) { cart.removeItem(removeBtn.dataset.cartRemove); refreshCard(removeBtn.dataset.cartRemove); }
  });

  // ===== SIDEBAR BASKET TOGGLE (right drawer) =====
  function openBasket() {
    overlay.classList.add('active');
    sidebarBasket.classList.add('active');
    document.body.classList.add('basket-open');
    document.body.style.overflow = 'hidden';
  }
  function closeBasket() {
    overlay.classList.remove('active');
    sidebarBasket.classList.remove('active');
    document.body.classList.remove('basket-open');
    document.body.style.overflow = '';
  }

  basketFloat.addEventListener('click', openBasket);
  document.getElementById('header-cart-btn').addEventListener('click', openBasket);
  document.getElementById('basket-close').addEventListener('click', closeBasket);
  overlay.addEventListener('click', closeBasket);

  // ===== PROMO CODE =====
  document.getElementById('promo-btn').addEventListener('click', () => {
    const input = document.getElementById('promo-input');
    const code = input.value.trim().toUpperCase();
    if (code === 'FIRST') {
      promoApplied = true;
      input.style.borderColor = 'var(--text-success)';
      input.value = 'Промокод применён: -10%';
      input.disabled = true;
      updateCartUI();
    } else if (code) {
      input.style.borderColor = 'var(--accents-error)';
      setTimeout(() => input.style.borderColor = '', 1500);
    }
  });

  // ===== CUTLERY =====
  document.getElementById('cutlery-minus').addEventListener('click', () => {
    if (cutleryCount > 0) {
      cutleryCount--;
      document.getElementById('cutlery-value').textContent = cutleryCount;
    }
  });
  document.getElementById('cutlery-plus').addEventListener('click', () => {
    cutleryCount++;
    document.getElementById('cutlery-value').textContent = cutleryCount;
  });

  // ===== CHECKOUT =====
  checkoutBtn.addEventListener('click', () => {
    const total = promoApplied ? Math.round(cart.getTotal() * 0.9) : cart.getTotal();
    alert(`Заказ оформлен!\nПриборов: ${cutleryCount}\nИтого: ${total} ₽\nСпасибо за заказ! 🎉`);
    cart.clear();
    promoApplied = false;
    cutleryCount = 1;
    document.getElementById('cutlery-value').textContent = 1;
    const promoInput = document.getElementById('promo-input');
    promoInput.value = '';
    promoInput.disabled = false;
    promoInput.style.borderColor = '';
    closeBasket();
  });

  // ===== LOGIN MODAL =====
  document.getElementById('login-btn').addEventListener('click', () => loginModal.classList.add('active'));
  document.getElementById('modal-close').addEventListener('click', () => loginModal.classList.remove('active'));
  loginModal.addEventListener('click', (e) => { if (e.target === loginModal) loginModal.classList.remove('active'); });
  document.getElementById('login-submit').addEventListener('click', () => {
    const phone = document.getElementById('phone-input').value;
    if (phone) { alert('Код отправлен на ' + phone); loginModal.classList.remove('active'); }
  });

  // ===== FAQ =====
  function renderFAQ() {
    const faqList = document.getElementById('faq-list');
    faqList.innerHTML = FAQ_DATA.map((item, i) => `
      <div class="faq__item" data-faq="${i}">
        <button class="faq__question">${item.q}</button>
        <div class="faq__answer"><p>${item.a}</p></div>
      </div>
    `).join('');

    faqList.addEventListener('click', (e) => {
      const question = e.target.closest('.faq__question');
      if (!question) return;
      const item = question.closest('.faq__item');
      item.classList.toggle('active');
    });
  }

  // ===== LOYALTY =====
  function renderLoyalty() {
    const grid = document.getElementById('loyalty-grid');
    grid.innerHTML = LOYALTY_LEVELS.map(level => `
      <div class="loyalty-card" style="border-color: ${level.color}">
        <div class="loyalty-card__cashback" style="color: ${level.color}">${level.cashback}%</div>
        <div class="loyalty-card__percent">кэшбэк</div>
        <div class="loyalty-card__name">${level.name}</div>
        <div class="loyalty-card__range">от ${level.min.toLocaleString()} ₽</div>
      </div>
    `).join('');
  }

  // ===== SCROLL TO TOP =====
  window.addEventListener('scroll', () => backWidget.classList.toggle('visible', window.scrollY > 400));
  backWidget.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ===== ACTIVE CATEGORY ON SCROLL =====
  function updateActiveCategory() {
    const sections = catalog.querySelectorAll('.catalog__category');
    const scrollPos = window.scrollY + 150;
    let current = '';
    sections.forEach(section => {
      if (section.offsetTop <= scrollPos) current = section.id.replace('cat-', '');
    });
    categoriesList.querySelectorAll('.categories__item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === current);
    });
  }
  window.addEventListener('scroll', updateActiveCategory);

  // ===== INIT =====
  cart.subscribe(updateCartUI);
  renderBanners();
  renderSidebarCategories();
  renderCategories();
  renderCatalog();
  renderFAQ();
  renderLoyalty();
  updateCartUI();
})();
