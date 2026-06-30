const MENU_DATA = [
  {
    id: 'zavtraki',
    title: 'Завтраки',
    items: [
      { id: 'z1', name: 'Большой русский завтрак', weight: '365 г', price: 800, image: 'https://cdn.sanity.io/images/cw828sie/production/c86e9df0d36840da918b8482a67eda653ecad4ee-1120x1120.png', desc: 'Яичница, сосиски, тосты, помидоры, зелень', kcal: 650, protein: 28, fat: 42, carbs: 35 },
      { id: 'z2', name: 'Авокадо тост', weight: '135 г', price: 370, image: 'https://cdn.sanity.io/images/cw828sie/production/326f52affc6e88841b150ab2c7b6a6163b4830f1-1121x1121.png', desc: 'Тост с авокадо, яйцо пашот, микрозелень', kcal: 320, protein: 12, fat: 18, carbs: 28 },
      { id: 'z3', name: 'Модный скрэмбл', weight: '260 г', price: 490, image: 'https://cdn.sanity.io/images/cw828sie/production/96787d852359284823e992ce3b205d2923a6a5b1-1121x1121.png', desc: 'Нежный скрэмбал с лососем и авокадо', kcal: 380, protein: 22, fat: 24, carbs: 18 },
      { id: 'z4', name: 'Яйца Бенедикт с форелью', weight: '260 г', price: 790, image: 'https://cdn.sanity.io/images/cw828sie/production/038b890c6a9fd892f5627be2fc470347f263a8fe-1120x1120.png', desc: 'Бриошь, яйцо пашот, лосось, соус голландез', kcal: 520, protein: 26, fat: 32, carbs: 30 },
      { id: 'z5', name: 'Омлет с креветками', weight: '220 г', price: 650, image: 'https://cdn.sanity.io/images/cw828sie/production/bcd4bf6420a4b421baa149da87e1f47078f7dfc1-1120x1120.png', desc: 'Пышный омлет с тигровыми креветками', kcal: 410, protein: 24, fat: 28, carbs: 12 }
    ]
  },
  {
    id: 'pankeiki',
    title: 'Панкейки и вафли',
    items: [
      { id: 'p1', name: 'Панкейки с голубикой', weight: '250 г', price: 630, image: 'https://cdn.sanity.io/images/cw828sie/production/1182991e1e673f22e0666885e5e081b6b7793689-1121x1121.png', desc: 'Пышные панкейки со свежей голубикой и кленовым сиропом', kcal: 450, protein: 10, fat: 16, carbs: 62 },
      { id: 'p2', name: 'Вафля с кремом и клубникой', weight: '180 г', price: 550, image: 'https://cdn.sanity.io/images/cw828sie/production/ae5edbefe8e60a3e68a876156538acf9921f1b60-1120x1120.png', desc: 'Бельгийская вафля с кремом чиз и клубникой', kcal: 380, protein: 8, fat: 18, carbs: 48 },
      { id: 'p3', name: 'Панкейки с карамельным кремом', weight: '220 г', price: 570, image: 'https://cdn.sanity.io/images/cw828sie/production/c069c9891adab1bed8e7879628e0b5b53fbf9eae-1121x1121.png', desc: 'Панкейки с солёной карамелью и сливочным кремом', kcal: 420, protein: 9, fat: 15, carbs: 58 },
      { id: 'p4', name: 'Вафля с курицей', weight: '215 г', price: 690, image: 'https://cdn.sanity.io/images/cw828sie/production/e6f08aabf80c6d0b3710d1051daeaf7faf91fc2c-1121x1121.png', desc: 'Солёная вафля с куриной грудкой и соусом', kcal: 480, protein: 22, fat: 20, carbs: 45 }
    ]
  },
  {
    id: 'supy',
    title: 'Супы',
    items: [
      { id: 's1', name: 'Борщ с томлеными щечками', weight: '390 г', price: 690, image: 'https://cdn.sanity.io/images/cw828sie/production/930885a275a034b738ec34766d03c3a0cb8d16ea-1120x1120.png', desc: 'Классический борщ с говяжьими щёчками и сметаной', kcal: 380, protein: 18, fat: 22, carbs: 32 },
      { id: 's2', name: 'Грибной суп со сметаной', weight: '280 г', price: 450, image: 'https://cdn.sanity.io/images/cw828sie/production/e581e4ad0a405159bfe8ae57aa5276d790c14180-1121x1121.png', desc: 'Нежный крем-суп из белых грибов', kcal: 280, protein: 8, fat: 18, carbs: 20 },
      { id: 's3', name: 'Том-ям', weight: '420 г', price: 750, image: 'https://cdn.sanity.io/images/cw828sie/production/21596c340e022fa72b435d27448bdd32ca62434a-1120x1120.png', desc: 'Острый тайский суп с креветками и кокосовым молоком', kcal: 320, protein: 16, fat: 14, carbs: 28 }
    ]
  },
  {
    id: 'salaty',
    title: 'Салаты',
    items: [
      { id: 'sa1', name: 'Цезарь с курицей', weight: '220 г', price: 550, image: 'https://cdn.sanity.io/images/cw828sie/production/97c2b9b75201c46a3ff76723b70f555c22ed6bd0-1120x1120.png', desc: 'Романо, куриная грудка гриль, пармезан, соус цезарь', kcal: 350, protein: 24, fat: 20, carbs: 18 },
      { id: 'sa2', name: 'Поке с креветками', weight: '350 г', price: 750, image: 'https://cdn.sanity.io/images/cw828sie/production/851cff83c5ff73b934fef3073c5c42da79a6b7f6-1121x1121.png', desc: 'Рис, авокадо, тигровые креветки, соус унаги', kcal: 420, protein: 22, fat: 16, carbs: 48 },
      { id: 'sa3', name: 'Салат с форелью', weight: '150 г', price: 790, image: 'https://cdn.sanity.io/images/cw828sie/production/00b8e9bfbb17a280bef973fb8627ef65da9237a3-1120x1120.png', desc: 'Микс салатов, копчёная форель, цитрусовая заправка', kcal: 290, protein: 18, fat: 14, carbs: 22 },
      { id: 'sa4', name: 'Зеленый салат', weight: '190 г', price: 650, image: 'https://cdn.sanity.io/images/cw828sie/production/52eedc254f6439cc3984993525c840e582773f11-1120x1120.png', desc: 'Свежие листья, огурцы, авокадо, лимонная заправка', kcal: 180, protein: 4, fat: 12, carbs: 14 }
    ]
  },
  {
    id: 'sendvichi',
    title: 'Сэндвичи',
    items: [
      { id: 'se1', name: 'Сэндвич с курицей и сыром', weight: '140 г', price: 390, image: 'https://cdn.sanity.io/images/cw828sie/production/d30c395d7a7f9476ddf271ef808606ab7da666ec-1121x1121.png', desc: 'Тостовый хлеб, курица, сыр, томаты, соус', kcal: 380, protein: 18, fat: 16, carbs: 38 },
      { id: 'se2', name: 'Сэндвич с тушеной говядиной', weight: '120 г', price: 390, image: 'https://cdn.sanity.io/images/cw828sie/production/053adef39f335c026306eec7018b0ba51ee54056-1121x1121.png', desc: 'Чиабатта, тушёная говядина, горчица, салат', kcal: 420, protein: 22, fat: 18, carbs: 36 },
      { id: 'se3', name: 'Сэндвич с форелью', weight: '120 г', price: 430, image: 'https://cdn.sanity.io/images/cw828sie/production/ddf1b97ff4769e3234f046dd129291762a1986cd-1121x1121.png', desc: 'Ржаной хлеб, копчёная форель, сливочный сыр, каперсы', kcal: 350, protein: 16, fat: 14, carbs: 32 }
    ]
  },
  {
    id: 'goryachee',
    title: 'Горячее',
    items: [
      { id: 'g1', name: 'Бифштекс с яйцом и пюре', weight: '350 г', price: 950, image: 'https://cdn.sanity.io/images/cw828sie/production/6d132acf5acb9455e760bfec5dcba2bc1cf51010-1120x1120.png', desc: 'Мраморная говядина, яйцо, картофельное пюре', kcal: 680, protein: 38, fat: 42, carbs: 32 },
      { id: 'g2', name: 'Карбонара', weight: '250 г', price: 690, image: 'https://cdn.sanity.io/images/cw828sie/production/9148f7eff7e808076a3eff1e7f5cb463993c9e08-1120x1120.png', desc: 'Спагетти, бекон, пармезан, яичный желток', kcal: 520, protein: 22, fat: 28, carbs: 42 },
      { id: 'g3', name: 'Шницель с пюре', weight: '270 г', price: 790, image: 'https://cdn.sanity.io/images/cw828sie/production/08fa99265f43cb8b8fc80ae7c268ac5ab2c95ff1-1120x1120.png', desc: 'Куриный шницель, картофельное пюре, огурец', kcal: 550, protein: 28, fat: 24, carbs: 48 },
      { id: 'g4', name: 'Ризотто с креветками', weight: '260 г', price: 730, image: 'https://cdn.sanity.io/images/cw828sie/production/7f17e7c70f113a7bcc7cd893f22d5d667a6e8180-1121x1121.png', desc: 'Арборио, тигровые креветки, пармезан, шафран', kcal: 480, protein: 20, fat: 16, carbs: 58 }
    ]
  },
  {
    id: 'pitstsa',
    title: 'Пицца',
    items: [
      { id: 'pi1', name: 'Пицца Маргарита', weight: '400 г', price: 800, image: 'https://cdn.sanity.io/images/cw828sie/production/e00bc40e09c65641fe8cb59bfb0e195882ae1958-1120x1120.png', desc: 'Томатный соус, моцарелла, базилик', kcal: 620, protein: 24, fat: 22, carbs: 72 },
      { id: 'pi2', name: 'Пицца Пепперони', weight: '420 г', price: 850, image: 'https://cdn.sanity.io/images/cw828sie/production/c4c597f78911e1cf80f839860b848fa5a173f087-1120x1120.png', desc: 'Томатный соус, моцарелла, пепперони', kcal: 680, protein: 28, fat: 28, carbs: 74 },
      { id: 'pi3', name: 'Пицца четыре сыра', weight: '410 г', price: 850, image: 'https://cdn.sanity.io/images/cw828sie/production/7c0ff0e3f23d71073ac116501ca371920e1655b4-1120x1120.png', desc: 'Моцарелла, пармезан, дор-блю, чеддер', kcal: 720, protein: 30, fat: 32, carbs: 68 },
      { id: 'pi4', name: 'Пицца с креветками', weight: '400 г', price: 850, image: 'https://cdn.sanity.io/images/cw828sie/production/03eefd0ca7dfd8f873f30b3f687e55a88c83e930-1120x1120.png', desc: 'Крем-соус, моцарелла, тигровые креветки, авокадо', kcal: 640, protein: 26, fat: 24, carbs: 70 }
    ]
  },
  {
    id: 'deserty',
    title: 'Десерты',
    items: [
      { id: 'd1', name: 'Эклер ванильный', weight: '70 г', price: 360, image: 'https://cdn.sanity.io/images/cw828sie/production/9a3c577bbe83c7f56dc3e280abf8436c41376eac-1600x1066.jpg', desc: 'Заварное тесто, ванильный крем, шоколадная глазурь', kcal: 320, protein: 6, fat: 16, carbs: 38 },
      { id: 'd2', name: 'Торт Японский хлопковый', weight: '180 г', price: 560, image: 'https://cdn.sanity.io/images/cw828sie/production/eeecc307d380d8491e0a1f4f4a25f33755fc3a11-6718x4478.jpg', desc: 'Нежнейший чизкейк с воздушной текстурой', kcal: 350, protein: 8, fat: 18, carbs: 40 },
      { id: 'd3', name: 'Ягодный с кокосом', weight: '120 г', price: 480, image: 'https://cdn.sanity.io/images/cw828sie/production/48c283cd8f1352c008c96d0c30db227733d697f4-890x884.png', desc: 'Ягодный десерт с кокосовым муссом', kcal: 290, protein: 4, fat: 14, carbs: 36 }
    ]
  },
  {
    id: 'napitki',
    title: 'Напитки',
    items: [
      { id: 'n1', name: 'Капучино', weight: '350 мл', price: 350, image: 'https://cdn.sanity.io/images/cw828sie/production/19f851f54e2069accf371622c99536f67ddb4144-4754x3564.jpg', desc: 'Эспрессо с молочной пенкой', kcal: 120, protein: 6, fat: 4, carbs: 14 },
      { id: 'n2', name: 'Латте', weight: '350 мл', price: 350, image: 'https://cdn.sanity.io/images/cw828sie/production/8dfe76767db3f35983c6c2349f76e59b426fe786-4754x3564.jpg', desc: 'Нежный кофе с большим количеством молока', kcal: 150, protein: 6, fat: 6, carbs: 16 },
      { id: 'n3', name: 'Раф классический', weight: '350 мл', price: 400, image: 'https://cdn.sanity.io/images/cw828sie/production/b5c1f1131f85a9bffff85fbb615ed1d22882b1a1-4754x3564.jpg', desc: 'Эспрессо, сливки, ваниль', kcal: 220, protein: 4, fat: 16, carbs: 14 },
      { id: 'n4', name: 'Матча латте', weight: '350 мл', price: 370, image: 'https://cdn.sanity.io/images/cw828sie/production/a8f8a6ebc1fbbceed555d8306d4c0dd5c29ee403-4754x3564.jpg', desc: 'Японский зелёный чай матча с молоком', kcal: 130, protein: 4, fat: 5, carbs: 16 },
      { id: 'n5', name: 'Лимонад Медовый кактус', weight: '400 мл', price: 490, image: 'https://cdn.sanity.io/images/cw828sie/production/ee44b61cbb2e01f449adade6f8ba560beb33e06f-1120x1120.png', desc: 'Освежающий лимонад с медом и кактусом', kcal: 180, protein: 0, fat: 0, carbs: 44 }
    ]
  }
];

const DELIVERY_INFO = {
  courier: { minOrder: 1199, fee: 149, time: '60 мин', label: 'Доставка курьером' },
  pickup: { minOrder: 0, fee: 0, time: '20 мин', label: 'Самовывоз' }
};

const SHOP_INFO = {
  address: 'проспект Ленина, 113',
  phone: '+7 (966) 388-00-08',
  schedule: 'Сегодня: 9:00 – 21:00',
  city: 'Подольск'
};

const FAQ_DATA = [
  { q: 'Почему я не могу оформить доставку?', a: 'Доставка доступна в пределах зоны обслуживания. Укажите ваш адрес, и система определит доступность доставки. Если ваш адрес не попадает в зону, вы можете оформить самовывоз.' },
  { q: 'Как я могу оплатить заказ?', a: 'Мы принимаем оплату банковскими картами (Visa, MasterCard, МИР), а также через СберPay и бонусами программы лояльности.' },
  { q: 'Как работает программа лояльности?', a: 'При регистрации вы автоматически становитесь участником программы. Кэшбэк от 5% до 15% зависит от суммы ваших покупок. Бонусами можно оплатить до 30% заказа.' }
];

const LOYALTY_LEVELS = [
  { name: 'ГОСТЬ', cashback: 5, min: 0, max: 10000, color: '#ffd599', textColor: '#000' },
  { name: 'УЧАСТНИК', cashback: 7, min: 10000, max: 25000, color: '#ea892e', textColor: '#000' },
  { name: 'АМБАССАДОР', cashback: 10, min: 25000, max: 50000, color: '#b05c0c', textColor: '#000' },
  { name: 'РЕЗИДЕНТ', cashback: 12, min: 50000, max: 100000, color: '#703200', textColor: '#fff' },
  { name: 'РЕЗИДЕНТ ПРЕМИУМ', cashback: 15, min: 100000, max: 200000, color: '#390f04', textColor: '#fff' }
];

const BANNERS = [
  { title: 'Лето в Кафе', subtitle: 'Завтраки весь день и любимый кофе от 290 ₽', gradient: 'linear-gradient(135deg, #C38C7F 0%, #E8A892 100%)', image: 'https://cdn.sanity.io/images/cw828sie/production/7e5cd672dfbe02a186d8a7e21314c7b84bc80f42-1920x900.png' },
  { title: 'Бабл напитки', subtitle: 'Попробуйте наши фирменные баббл ти', gradient: 'linear-gradient(135deg, #8B5A4A 0%, #C38C7F 100%)', image: 'https://cdn.sanity.io/images/cw828sie/production/8f3ee8deef61abbed9a5c04ab6a16f70605ddef2-1920x900.png' },
  { title: 'Скачивайте приложение', subtitle: 'Быстрая оплата, уведомления, карта лояльности', gradient: 'linear-gradient(135deg, #2C2220 0%, #5C3D35 100%)', image: 'https://cdn.sanity.io/images/cw828sie/production/9f6a6dd4ffcd5b4c2ec7b33f091fcc7528a20a51-1920x900.png' },
  { title: 'Здрасте Клуб', subtitle: 'Накапливайте бонусы и получайте кэшбэк до 15%', gradient: 'linear-gradient(135deg, #FFDE69 0%, #EC6722 100%)', image: 'https://cdn.sanity.io/images/cw828sie/production/dd73bbf20b4c7410a231f9008d8b44c75198b929-1920x900.png' },
  { title: 'Завтраки весь день', subtitle: 'Заказывайте любимые завтраки до закрытия', gradient: 'linear-gradient(135deg, #5C3D35 0%, #C38C7F 100%)', image: 'https://cdn.sanity.io/images/cw828sie/production/f9bef513da3a6d38d76d88f00c4bce34ddbb12df-1920x900.png' }
];
