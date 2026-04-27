'use strict';

const REACTIONS = [

  // ─────────────────── АЛКАНЫ ───────────────────

  {
    id: 'alk-1',
    group: 'Алканы',
    name: 'Галогенирование',
    type: 'Замещение (SR)',
    reagents: 'CH₃–CH₃ + Cl₂',
    catalyst: 'hν (свет)',
    condition: '',
    products: 'CH₃–CH₂Cl + HCl',
    full: 'CH₃–CH₃ + Cl₂ →(hν) CH₃–CH₂Cl + HCl',
    reagentNames: 'Этан + Хлор',
    productNames: 'Хлорэтан + Хлороводород',
    note: 'Галоген замещает H на атоме углерода с наименьшим числом водородов (для несимметричных алканов). I₂ — НЕ реагирует.',
  },
  {
    id: 'alk-2',
    group: 'Алканы',
    name: 'Нитрование (реакция Коновалова)',
    type: 'Замещение (SR)',
    reagents: 'CH₃–CH₃ + HNO₃ (разб.)',
    catalyst: 't°, p',
    condition: '',
    products: 'CH₃–CH₂–NO₂ + H₂O',
    full: 'CH₃–CH₃ + HNO₃(разб.) →(t°,p) CH₃–CH₂–NO₂ + H₂O',
    reagentNames: 'Этан + Разбавленная азотная кислота',
    productNames: 'Нитроэтан + Вода',
    note: 'Нитрогруппа (-NO₂) встаёт туда, где меньше атомов водорода.',
  },
  {
    id: 'alk-3',
    group: 'Алканы',
    name: 'Дегидрирование',
    type: 'Отщепление',
    reagents: 'CH₃–CH₃',
    catalyst: 'Pt/Pd/Ni, t°, p',
    condition: '',
    products: 'CH₂=CH₂ + H₂',
    full: 'CH₃–CH₃ →(Pt, t°, p) CH₂=CH₂ + H₂',
    reagentNames: 'Этан',
    productNames: 'Этилен (этен) + Водород',
    note: 'Обратная реакция — гидрирование алкена.',
  },
  {
    id: 'alk-4',
    group: 'Алканы',
    name: 'Ароматизация (дегидроциклизация)',
    type: 'Дегидроциклизация',
    reagents: 'CH₃–(CH₂)₄–CH₃',
    catalyst: 'Pt, t°',
    condition: '',
    products: 'C₆H₆ + 4H₂',
    full: 'C₆H₁₄ →(Pt, t°) C₆H₆ + 4H₂',
    reagentNames: 'н-Гексан',
    productNames: 'Бензол + Водород',
    steps: [
      'C₆H₁₄ →(Pt, t°) C₆H₆ + 4H₂',
      'C₇H₁₆ →(Pt, t°) C₆H₅CH₃ + 4H₂',
    ],
    note: 'Вступают алканы от C₆. Цепь циклизуется и дегидрируется до аренов.',
  },
  {
    id: 'alk-5',
    group: 'Алканы',
    name: 'Крекинг (пиролиз) метана',
    type: 'Разложение',
    reagents: '2CH₄',
    catalyst: '1200 °C',
    condition: '',
    products: 'HC≡CH + 3H₂',
    full: '2CH₄ →(1200°C) HC≡CH + 3H₂',
    reagentNames: 'Метан',
    productNames: 'Ацетилен (этин) + Водород',
    note: 'При 700°C: CH₄ → C + 2H₂',
  },
  {
    id: 'alk-6',
    group: 'Алканы',
    name: 'Реакция Вюрца',
    type: 'Синтез',
    reagents: '2CH₃Cl + 2Na',
    catalyst: '',
    condition: '',
    products: 'CH₃–CH₃ + 2NaCl',
    full: '2CH₃Cl + 2Na → CH₃–CH₃ + 2NaCl',
    reagentNames: 'Хлорметан + Натрий',
    productNames: 'Этан + Хлорид натрия',
    note: 'Галогеналкан + Na → алкан с удвоенным числом C.',
  },
  {
    id: 'alk-7',
    group: 'Алканы',
    name: 'Изомеризация',
    type: 'Изомеризация',
    reagents: 'CH₃–CH₂–CH₂–CH₃',
    catalyst: 'AlCl₃, t°',
    condition: '',
    products: 'CH₃–CH(CH₃)–CH₃',
    full: 'н-Бутан →(AlCl₃, t°) Метилпропан (изобутан)',
    reagentNames: 'н-Бутан (C₄H₁₀)',
    productNames: 'Метилпропан (изобутан) (C₄H₁₀)',
    note: 'Продукт — изомер исходного вещества с той же молекулярной формулой.',
  },
  {
    id: 'alk-8',
    group: 'Алканы',
    name: 'Каталитическое окисление бутана',
    type: 'Окисление',
    reagents: 'CH₃–CH₂–CH₂–CH₃ + O₂',
    catalyst: 'кат., t°',
    condition: '',
    products: '2CH₃COOH + H₂O',
    full: 'C₄H₁₀ + O₂ →(кат., t°) 2CH₃COOH + H₂O',
    reagentNames: 'Бутан + Кислород',
    productNames: 'Уксусная кислота + Вода',
    note: 'Промышленный способ получения уксусной кислоты.',
  },
  {
    id: 'alk-9',
    group: 'Алканы',
    name: 'Каталитическое окисление метана',
    type: 'Окисление',
    reagents: 'CH₄ + O₂',
    catalyst: 'кат., t°',
    condition: '',
    products: 'HCHO + H₂O',
    full: 'CH₄ + O₂ →(кат., t°) HCHO + H₂O',
    reagentNames: 'Метан + Кислород',
    productNames: 'Формальдегид (метаналь) + Вода',
    note: 'Продукт — формальдегид (HCHO).',
  },
  {
    id: 'alk-10',
    group: 'Алканы',
    name: 'Горение',
    type: 'Горение',
    reagents: 'CH₄ + 2O₂',
    catalyst: 't°',
    condition: '',
    products: 'CO₂ + 2H₂O',
    full: 'CH₄ + 2O₂ →(t°) CO₂ + 2H₂O',
    reagentNames: 'Метан + Кислород',
    productNames: 'Углекислый газ + Вода',
    note: 'Горение — свойство ВСЕХ органических веществ.',
  },
  {
    id: 'alk-11',
    group: 'Алканы',
    name: 'Гидролиз карбида алюминия',
    type: 'Гидролиз',
    reagents: 'Al₄C₃ + H₂O',
    catalyst: '',
    condition: '',
    products: 'CH₄ + Al(OH)₃',
    full: 'Al₄C₃ + 12H₂O → 3CH₄ + 4Al(OH)₃',
    reagentNames: 'Карбид алюминия + Вода',
    productNames: 'Метан + Гидроксид алюминия',
    note: 'В эту реакцию вступает только Al₄C₃. Кислотный гидролиз: Al₄C₃ + HCl → CH₄ + AlCl₃',
  },
  {
    id: 'alk-12',
    group: 'Алканы',
    name: 'Декарбоксилирование (реакция Дюма)',
    type: 'Синтез алкана',
    reagents: 'CH₃COONa + NaOH(тв.)',
    catalyst: 't°',
    condition: '',
    products: 'CH₄ + Na₂CO₃',
    full: 'CH₃COONa + NaOH(тв.) →(t°) CH₄ + Na₂CO₃',
    reagentNames: 'Ацетат натрия + Гидроксид натрия (тв.)',
    productNames: 'Метан + Карбонат натрия',
    note: 'Сплавление соли карбоновой кислоты с твёрдой щёлочью.',
  },
  // ── Новые из ЕГЭ ──
  {
    id: 'alk-13',
    group: 'Алканы',
    name: 'Получение этана электролизом ацетата натрия',
    type: 'Электролиз (реакция Кольбе)',
    reagents: 'CH₃COONa + H₂O',
    catalyst: 'электролиз',
    condition: '',
    products: 'CH₃–CH₃ + NaOH + CO₂ + H₂',
    full: '2CH₃COONa + 2H₂O →(электролиз) CH₃–CH₃ + 2NaOH + 2CO₂ + H₂',
    reagentNames: 'Ацетат натрия + Вода',
    productNames: 'Этан + NaOH + CO₂ + Водород',
    note: 'Электролиз соли карбоновой кислоты (реакция Кольбе): на аноде выделяется алкан.',
  },
  {
    id: 'alk-14',
    group: 'Алканы',
    name: 'Получение пропана гидролизом пропионата натрия',
    type: 'Синтез алкана (Дюма)',
    reagents: 'CH₃CH₂COONa + NaOH(тв.)',
    catalyst: 't°',
    condition: '',
    products: 'CH₃–CH₂–CH₃ + Na₂CO₃',
    full: 'CH₃CH₂COONa + NaOH →(t°) CH₃CH₂CH₃ + Na₂CO₃',
    reagentNames: 'Пропионат натрия + NaOH',
    productNames: 'Пропан + Карбонат натрия',
    note: 'Общее правило: сплавление соли CₙH₂ₙ₊₁COONa с NaOH даёт алкан Cₙ.',
  },
  {
    id: 'alk-15',
    group: 'Алканы',
    name: 'Монобромирование бутана (2-е положение)',
    type: 'Замещение (SR)',
    reagents: 'CH₃–CH₂–CH₂–CH₃ + Br₂',
    catalyst: 't°',
    condition: '',
    products: 'CH₃–CHBr–CH₂–CH₃ + HBr',
    full: 'CH₃CH₂CH₂CH₃ + Br₂ →(t°) CH₃CHBrCH₂CH₃ + HBr',
    reagentNames: 'Бутан + Бром',
    productNames: '2-Бромбутан + Бромоводород',
    note: 'Бром замещает H у вторичного атома углерода (более реакционноспособное положение).',
  },
  {
    id: 'alk-16',
    group: 'Алканы',
    name: 'Дегидрирование пропана',
    type: 'Отщепление',
    reagents: 'CH₃–CH₂–CH₃',
    catalyst: 'Pt, t°',
    condition: '',
    products: 'CH₂=CH–CH₃ + H₂',
    full: 'CH₃CH₂CH₃ →(Pt, t°) CH₂=CHCH₃ + H₂',
    reagentNames: 'Пропан',
    productNames: 'Пропилен (пропен) + Водород',
    note: 'Дегидрирование алканов — основной способ получения алкенов.',
  },
  {
    id: 'alk-17',
    group: 'Алканы',
    name: 'Дегидрирование бутана до бутадиена',
    type: 'Отщепление',
    reagents: 'CH₃–CH₂–CH₂–CH₃',
    catalyst: 'Pt, t°',
    condition: '',
    products: 'CH₂=CH–CH=CH₂ + 2H₂',
    full: 'C₄H₁₀ →(Pt, t°) C₄H₆ + 2H₂',
    reagentNames: 'н-Бутан',
    productNames: 'Бутадиен-1,3 (дивинил) + Водород',
    note: 'Дегидрирование бутана с отщеплением двух молекул H₂ → сопряжённый диен.',
  },

  // ─────────────────── АЛКЕНЫ ───────────────────

  {
    id: 'ene-1',
    group: 'Алкены',
    name: 'Галогенирование',
    type: 'Присоединение (электрофильное)',
    reagents: 'CH₂=CH₂ + Cl₂',
    catalyst: '',
    condition: '',
    products: 'CH₂Cl–CH₂Cl',
    full: 'CH₂=CH₂ + Cl₂ → CH₂Cl–CH₂Cl',
    reagentNames: 'Этилен (этен) + Хлор',
    productNames: '1,2-Дихлорэтан',
    note: 'Обесцвечивает бромную воду и раствор KMnO₄ — качественные реакции на кратную связь.',
  },
  {
    id: 'ene-2',
    group: 'Алкены',
    name: 'Гидрогалогенирование (правило Марковникова)',
    type: 'Присоединение',
    reagents: 'CH₃–CH=CH₂ + HCl',
    catalyst: '',
    condition: '',
    products: 'CH₃–CHCl–CH₃',
    full: 'CH₃–CH=CH₂ + HCl → CH₃–CHCl–CH₃',
    reagentNames: 'Пропен + Хлороводород',
    productNames: '2-Хлорпропан',
    note: 'Правило Марковникова: H присоединяется к атому C при двойной связи с бо́льшим числом H, галоген — к оставшемуся.',
  },
  {
    id: 'ene-3',
    group: 'Алкены',
    name: 'Гидрогалогенирование против Марковникова',
    type: 'Присоединение',
    reagents: 'CH₃–CH=CH₂ + HBr',
    catalyst: 'H₂O₂',
    condition: '',
    products: 'CH₃–CH₂–CH₂Br',
    full: 'CH₃–CH=CH₂ + HBr →(H₂O₂) CH₃–CH₂–CH₂Br',
    reagentNames: 'Пропен + Бромоводород',
    productNames: '1-Бромпропан',
    note: 'Реагент — пероксид водорода (H₂O₂). Br присоединяется к более гидрогенизированному атому C.',
  },
  {
    id: 'ene-4',
    group: 'Алкены',
    name: 'Гидратация',
    type: 'Присоединение',
    reagents: 'CH₃–CH=CH₂ + H₂O',
    catalyst: 'H₃PO₄, кислая среда',
    condition: '',
    products: 'CH₃–CH(OH)–CH₃',
    full: 'CH₃–CH=CH₂ + H₂O →(H₃PO₄) CH₃–CH(OH)–CH₃',
    reagentNames: 'Пропен + Вода',
    productNames: 'Пропанол-2',
    note: 'По правилу Марковникова для несимметричных алкенов: OH идёт к С с меньшим числом H.',
  },
  {
    id: 'ene-5',
    group: 'Алкены',
    name: 'Гидрирование',
    type: 'Присоединение',
    reagents: 'CH₂=CH₂ + H₂',
    catalyst: 'Pt, p, t°',
    condition: '',
    products: 'CH₃–CH₃',
    full: 'CH₂=CH₂ + H₂ →(Pt, p, t°) CH₃–CH₃',
    reagentNames: 'Этилен (этен) + Водород',
    productNames: 'Этан',
    note: 'Обратная реакция — дегидрирование этана.',
  },
  {
    id: 'ene-6',
    group: 'Алкены',
    name: 'Мягкое окисление (реакция Вагнера)',
    type: 'Окисление',
    reagents: 'CH₃–CH=CH₂ + KMnO₄ + H₂O',
    catalyst: '0 °C',
    condition: '',
    products: 'CH₃–CH(OH)–CH₂OH + MnO₂ + KOH',
    full: 'CH₃–CH=CH₂ + KMnO₄ + H₂O →(0°C) CH₃–CH(OH)–CH₂OH + MnO₂ + KOH',
    reagentNames: 'Пропен + KMnO₄ (водн.) + Вода',
    productNames: 'Пропандиол-1,2 + MnO₂ + KOH',
    note: 'Условие: водный р-р KMnO₄, 0°C. Обесцвечивание раствора — качественная реакция.',
  },
  {
    id: 'ene-7',
    group: 'Алкены',
    name: 'Жёсткое окисление (вторичный C)',
    type: 'Окисление',
    reagents: 'CH₃–CH=CH–CH₃ + KMnO₄ + H₂SO₄',
    catalyst: 't°',
    condition: '',
    products: '2CH₃COOH + MnSO₄ + K₂SO₄ + H₂O',
    full: 'CH₃–CH=CH–CH₃ + KMnO₄ + H₂SO₄ →(t°) 2CH₃COOH + MnSO₄ + K₂SO₄ + H₂O',
    reagentNames: 'Бутен-2 + KMnO₄ + H₂SO₄',
    productNames: 'Уксусная кислота + соли Mn и K',
    note: 'Вторичный C при двойной связи → -COOH. Первичный C → CO₂.',
  },
  {
    id: 'ene-8',
    group: 'Алкены',
    name: 'Жёсткое окисление (первичный C)',
    type: 'Окисление',
    reagents: 'CH₂=CH₂ + KMnO₄ + H₂SO₄',
    catalyst: 't°',
    condition: '',
    products: '2CO₂ + MnSO₄ + K₂SO₄ + H₂O',
    full: 'CH₂=CH₂ + KMnO₄ + H₂SO₄ →(t°) 2CO₂ + MnSO₄ + K₂SO₄ + H₂O',
    reagentNames: 'Этилен + KMnO₄ + H₂SO₄',
    productNames: 'CO₂ + соли Mn и K',
    note: 'Первичный C (связан только с одним C) при двойной связи окисляется до CO₂.',
  },
  {
    id: 'ene-9',
    group: 'Алкены',
    name: 'Полимеризация',
    type: 'Полимеризация',
    reagents: 'n CH₂=CH₂',
    catalyst: 'H⁺',
    condition: '',
    products: '(–CH₂–CH₂–)ₙ',
    full: 'n CH₂=CH₂ →(H⁺) (–CH₂–CH₂–)ₙ',
    reagentNames: 'Этилен (мономер)',
    productNames: 'Полиэтилен (полимер)',
    note: 'Полимеризация в ЕГЭ встречается только в части 1. Во второй части не попадается.',
  },
  {
    id: 'ene-10',
    group: 'Алкены',
    name: 'Дегидрогалогенирование галогеналканов (правило Зайцева)',
    type: 'Отщепление',
    reagents: 'CH₃–CHCl–CH₂–CH₃ + KOH(спирт.)',
    catalyst: 'спирт. р-р',
    condition: '',
    products: 'CH₃–CH=CH–CH₃ + KCl + H₂O',
    full: 'CH₃–CHCl–CH₂–CH₃ + KOH(спирт.) → CH₃–CH=CH–CH₃ + KCl + H₂O',
    reagentNames: '2-Хлорбутан + KOH (спиртовой р-р)',
    productNames: 'Бутен-2 + KCl + Вода',
    note: 'Правило Зайцева: H отнимается от атома C, у которого водородов меньше.',
  },
  {
    id: 'ene-11',
    group: 'Алкены',
    name: 'Дегидратация спирта (внутримолекулярная)',
    type: 'Отщепление',
    reagents: 'CH₃–CH(OH)–CH₂–CH₃',
    catalyst: 'H₂SO₄(конц.), 180°C',
    condition: '',
    products: 'CH₃–CH=CH–CH₃ + H₂O',
    full: 'CH₃–CH(OH)–CH₂–CH₃ →(H₂SO₄, 180°C) CH₃–CH=CH–CH₃ + H₂O',
    reagentNames: 'Бутанол-2',
    productNames: 'Бутен-2 (по правилу Зайцева) + Вода',
    note: 'При 180°C — внутримолекулярная дегидратация (→ алкен). При 120°C — межмолекулярная (→ простой эфир).',
  },
  {
    id: 'ene-12',
    group: 'Алкены',
    name: 'Дегидратация спирта (межмолекулярная)',
    type: 'Отщепление',
    reagents: '2 CH₃–CH₂–OH',
    catalyst: 'H₂SO₄(конц.), 120°C',
    condition: '',
    products: 'CH₃–CH₂–O–CH₂–CH₃ + H₂O',
    full: '2 C₂H₅OH →(H₂SO₄, 120°C) C₂H₅–O–C₂H₅ + H₂O',
    reagentNames: 'Этанол × 2',
    productNames: 'Диэтиловый эфир (этоксиэтан) + Вода',
    note: 'При 120°C — межмолекулярная. Продукт — простой эфир.',
  },
  {
    id: 'ene-13',
    group: 'Алкены',
    name: 'Дегалогенирование дигалогеналканов (соседние галогены)',
    type: 'Отщепление',
    reagents: 'CH₂Cl–CHCl–CH₃ + Zn',
    catalyst: '',
    condition: '',
    products: 'CH₂=CH–CH₃ + ZnCl₂',
    full: 'CH₂Cl–CHCl–CH₃ + Zn → CH₂=CH–CH₃ + ZnCl₂',
    reagentNames: '1,2-Дихлорпропан + Цинк',
    productNames: 'Пропен + Хлорид цинка',
    note: 'Галогены расположены рядом → образуется алкен.',
  },
  // ── Новые из ЕГЭ ──
  {
    id: 'ene-14',
    group: 'Алкены',
    name: 'Гидратация этилена',
    type: 'Присоединение',
    reagents: 'CH₂=CH₂ + H₂O',
    catalyst: 'H₃PO₄',
    condition: '',
    products: 'CH₃–CH₂–OH',
    full: 'CH₂=CH₂ + H₂O →(H₃PO₄) CH₃CH₂OH',
    reagentNames: 'Этилен + Вода',
    productNames: 'Этанол',
    note: 'Гидратация этилена — промышленный способ получения этанола.',
  },
  {
    id: 'ene-15',
    group: 'Алкены',
    name: 'Гидратация бутена-1 → бутанол-2',
    type: 'Присоединение',
    reagents: 'CH₂=CH–CH₂–CH₃ + H₂O',
    catalyst: 'H₃PO₄',
    condition: '',
    products: 'CH₃–CH(OH)–CH₂–CH₃',
    full: 'CH₂=CHCH₂CH₃ + H₂O →(H₃PO₄) CH₃CH(OH)CH₂CH₃',
    reagentNames: 'Бутен-1 + Вода',
    productNames: 'Бутанол-2',
    note: 'ОН присоединяется по правилу Марковникова ко 2-му углероду.',
  },
  {
    id: 'ene-16',
    group: 'Алкены',
    name: 'Гидратация метилпропена → 2-метилпропанол-2',
    type: 'Присоединение',
    reagents: 'CH₂=C(CH₃)–CH₃ + H₂O',
    catalyst: 'H₃PO₄',
    condition: '',
    products: 'CH₃–C(OH)(CH₃)–CH₃',
    full: 'CH₂=C(CH₃)CH₃ + H₂O →(H₃PO₄) (CH₃)₃COH',
    reagentNames: 'Метилпропен + Вода',
    productNames: '2-Метилпропанол-2 (трет-бутанол)',
    note: 'Разветвлённый алкен: ОН идёт к более замещённому углероду.',
  },
  {
    id: 'ene-17',
    group: 'Алкены',
    name: 'Жёсткое окисление пропена (первичный C → CO₂)',
    type: 'Окисление',
    reagents: 'CH₂=CH–CH₃ + KMnO₄ + H₂SO₄',
    catalyst: 't°',
    condition: '',
    products: 'CH₃COOH + CO₂ + MnSO₄ + K₂SO₄ + H₂O',
    full: 'CH₂=CHCH₃ + KMnO₄ + H₂SO₄ →(t°) CH₃COOH + CO₂ + MnSO₄ + K₂SO₄ + H₂O',
    reagentNames: 'Пропен + KMnO₄ + H₂SO₄',
    productNames: 'Уксусная кислота + CO₂ + соли',
    note: 'Концевой =CH₂ окисляется до CO₂, а =CH- даёт COOH.',
  },
  {
    id: 'ene-18',
    group: 'Алкены',
    name: 'Жёсткое окисление бутена-1 → пропановая кислота',
    type: 'Окисление',
    reagents: 'CH₂=CH–CH₂–CH₃ + KMnO₄ + H₂SO₄',
    catalyst: 't°',
    condition: '',
    products: 'CH₃CH₂COOH + CO₂ + MnSO₄ + K₂SO₄ + H₂O',
    full: 'CH₂=CHCH₂CH₃ + KMnO₄ + H₂SO₄ →(t°) CH₃CH₂COOH + CO₂ + MnSO₄ + K₂SO₄ + H₂O',
    reagentNames: 'Бутен-1 + KMnO₄ + H₂SO₄',
    productNames: 'Пропановая кислота + CO₂ + соли',
    note: 'Концевой CH₂= окисляется до CO₂, внутренний CH- даёт COOH.',
  },
  {
    id: 'ene-19',
    group: 'Алкены',
    name: 'Мягкое окисление бутена-1 → бутандиол-1,2',
    type: 'Окисление',
    reagents: 'CH₂=CH–CH₂–CH₃ + KMnO₄ + H₂O',
    catalyst: '0°C',
    condition: '',
    products: 'HO–CH₂–CH(OH)–CH₂–CH₃ + MnO₂ + KOH',
    full: 'CH₂=CHCH₂CH₃ + KMnO₄ + H₂O →(0°C) HOCH₂CH(OH)CH₂CH₃ + MnO₂ + KOH',
    reagentNames: 'Бутен-1 + KMnO₄ + H₂O',
    productNames: 'Бутандиол-1,2 + MnO₂ + KOH',
    note: 'Мягкое окисление (0°С): каждый C у двойной связи получает ОН → диол.',
  },
  {
    id: 'ene-20',
    group: 'Алкены',
    name: 'Дегалогенирование с Mg → алкен',
    type: 'Отщепление',
    reagents: 'CH₃–CHCl–CH₂Cl + Mg',
    catalyst: 't°',
    condition: '',
    products: 'CH₃–CH=CH₂ + MgCl₂',
    full: 'CH₃CHClCH₂Cl + Mg →(t°) CH₃CH=CH₂ + MgCl₂',
    reagentNames: '1,2-Дихлорпропан + Магний',
    productNames: 'Пропен + Хлорид магния',
    note: 'Mg забирает два Cl (у соседних атомов) → образуется алкен.',
  },
  {
    id: 'ene-21',
    group: 'Алкены',
    name: 'Получение алкена из дигалогеналкана (KOH спирт.) — правило Зайцева',
    type: 'Дегидрогалогенирование',
    reagents: 'CH₃–CH(Br)–CH₂–CH₃ + KOH(спирт.)',
    catalyst: 'спирт. р-р',
    condition: '',
    products: 'CH₃–CH=CH–CH₃ + KBr + H₂O',
    full: 'CH₃CHBrCH₂CH₃ + KOH(спирт.) → CH₃CH=CHCH₃ + KBr + H₂O',
    reagentNames: '2-Бромбутан + KOH (спиртовой р-р)',
    productNames: 'Бутен-2 + KBr + Вода',
    note: 'H снимается от наименее гидрогенизированного соседнего C (правило Зайцева).',
  },
  {
    id: 'ene-22',
    group: 'Алкены',
    name: 'Получение этилена из хлорэтана с NaOH (спирт.)',
    type: 'Дегидрогалогенирование',
    reagents: 'CH₃–CH₂–Cl + NaOH(спирт.)',
    catalyst: 'спирт. р-р',
    condition: '',
    products: 'CH₂=CH₂ + NaCl + H₂O',
    full: 'CH₃CH₂Cl + NaOH(спирт.) → CH₂=CH₂ + NaCl + H₂O',
    reagentNames: 'Хлорэтан + NaOH (спиртовой р-р)',
    productNames: 'Этилен + NaCl + Вода',
    note: 'Спиртовой р-р KOH/NaOH → отщепление HX (дегидрогалогенирование).',
  },

  // ─────────────────── АЛКИНЫ ───────────────────

  {
    id: 'yne-1',
    group: 'Алкины',
    name: 'Галогенирование',
    type: 'Присоединение',
    reagents: 'CH₃–C≡CH + Cl₂',
    catalyst: '',
    condition: '',
    products: 'CH₃–CCl=CHCl',
    full: 'CH₃–C≡CH + Cl₂ → CH₃–CCl=CHCl',
    reagentNames: 'Пропин + Хлор',
    productNames: '1,2-Дихлорпропен',
    note: 'Можно присоединить 1 или сразу 2 молекулы Cl₂.',
  },
  {
    id: 'yne-2',
    group: 'Алкины',
    name: 'Гидрогалогенирование',
    type: 'Присоединение',
    reagents: 'CH₃–C≡CH + HCl',
    catalyst: '',
    condition: '',
    products: 'CH₃–CCl=CH₂',
    full: 'CH₃–C≡CH + HCl → CH₃–CCl=CH₂',
    reagentNames: 'Пропин + Хлороводород',
    productNames: '2-Хлорпропен (по правилу Марковникова)',
    note: 'По правилу Марковникова для несимметричных алкинов.',
  },
  {
    id: 'yne-3',
    group: 'Алкины',
    name: 'Гидратация (реакция Кучерова)',
    type: 'Присоединение',
    reagents: 'HC≡CH + H₂O',
    catalyst: 'HgSO₄, H₂SO₄(разб.)',
    condition: '',
    products: 'CH₃CHO (этаналь)',
    full: 'HC≡CH + H₂O →(HgSO₄, H₂SO₄) CH₃CHO',
    reagentNames: 'Ацетилен (этин) + Вода',
    productNames: 'Уксусный альдегид (этаналь)',
    note: 'Гидратация ацетилена → альдегид. Гидратация других алкинов → кетон.',
  },
  {
    id: 'yne-4',
    group: 'Алкины',
    name: 'Гидрирование до алкана',
    type: 'Присоединение',
    reagents: 'HC≡CH + 2H₂',
    catalyst: 'Pt, t°',
    condition: '',
    products: 'CH₃–CH₃',
    full: 'HC≡CH + 2H₂ →(Pt, t°) CH₃–CH₃',
    reagentNames: 'Ацетилен (этин) + Водород',
    productNames: 'Этан',
    note: 'Можно присоединить 1 молекулу H₂ (→ этилен) или сразу 2 (→ этан).',
  },
  {
    id: 'yne-5',
    group: 'Алкины',
    name: 'Окисление в кислой среде',
    type: 'Окисление',
    reagents: 'CH₃–C≡CH + KMnO₄ + H₂SO₄',
    catalyst: 't°',
    condition: '',
    products: 'CH₃COOH + CO₂ + MnSO₄ + K₂SO₄ + H₂O',
    full: 'CH₃–C≡CH + KMnO₄ + H₂SO₄ →(t°) CH₃COOH + CO₂ + MnSO₄ + K₂SO₄ + H₂O',
    reagentNames: 'Пропин + KMnO₄ + H₂SO₄',
    productNames: 'Уксусная кислота + CO₂ + соли',
    note: 'Алкины всегда окисляются по жёсткому типу. Крайний C (связан с 1 C) → CO₂.',
  },
  {
    id: 'yne-6',
    group: 'Алкины',
    name: 'Кислотные свойства: взаимодействие с Na',
    type: 'Кислотные свойства',
    reagents: 'CH₃–C≡CH + Na',
    catalyst: '',
    condition: '',
    products: 'CH₃–C≡CNa + ½H₂',
    full: 'CH₃–C≡CH + Na → CH₃–C≡CNa + ½H₂',
    reagentNames: 'Пропин + Натрий',
    productNames: 'Пропинид натрия + Водород',
    note: 'Только алкины с концевой тройной связью (-C≡CH) обладают кислотными свойствами.',
  },
  {
    id: 'yne-7',
    group: 'Алкины',
    name: 'Реакция с аммиачным раствором AgNO₃',
    type: 'Качественная реакция',
    reagents: 'CH₃–C≡CH + [Ag(NH₃)₂]OH',
    catalyst: '',
    condition: '',
    products: 'CH₃–C≡CAg↓ + NH₃ + H₂O',
    full: 'CH₃–C≡CH + [Ag(NH₃)₂]OH → CH₃–C≡CAg↓ + NH₃ + H₂O',
    reagentNames: 'Пропин + Реактив Толленса',
    productNames: 'Пропинид серебра (осадок) + NH₃ + Вода',
    note: 'НЕ является реакцией серебряного зеркала! Только для алкинов с концевой тройной связью.',
  },
  {
    id: 'yne-8',
    group: 'Алкины',
    name: 'Димеризация ацетилена',
    type: 'Синтез',
    reagents: '2HC≡CH',
    catalyst: 'NH₄Cl, CuCl',
    condition: '',
    products: 'H₂C=CH–C≡CH',
    full: '2HC≡CH →(NH₄Cl, CuCl) H₂C=CH–C≡CH',
    reagentNames: 'Ацетилен × 2',
    productNames: 'Винилацетилен (бутен-1-ин-3)',
    note: '',
  },
  {
    id: 'yne-9',
    group: 'Алкины',
    name: 'Тримеризация ацетилена (реакция Зелинского)',
    type: 'Синтез',
    reagents: '3HC≡CH',
    catalyst: 'C(акт.), t°',
    condition: '',
    products: 'C₆H₆',
    full: '3HC≡CH →(C акт., t°) C₆H₆',
    reagentNames: 'Ацетилен × 3',
    productNames: 'Бензол',
    steps: [
      '3HC≡CH →(C(акт.), t°) C₆H₆',
      '3CH₃–C≡CH →(C(акт.), t°) C₆H₃(CH₃)₃ (мезитилен)',
    ],
    note: 'Тримеризация: 3 молекулы алкина циклизуются в ароматическое кольцо (катализатор: активированный уголь).',
  },
  {
    id: 'yne-10',
    group: 'Алкины',
    name: 'Получение ацетилена из карбида кальция',
    type: 'Получение',
    reagents: 'CaC₂ + H₂O',
    catalyst: '',
    condition: '',
    products: 'HC≡CH + Ca(OH)₂',
    full: 'CaC₂ + 2H₂O → HC≡CH + Ca(OH)₂',
    reagentNames: 'Карбид кальция + Вода',
    productNames: 'Ацетилен + Гидроксид кальция',
    note: 'В эту реакцию вступает ТОЛЬКО CaC₂. С другими карбидами — другие продукты.',
  },
  // ── Новые из ЕГЭ ──
  {
    id: 'yne-11',
    group: 'Алкины',
    name: 'Гидратация бутина-1 → бутанон',
    type: 'Присоединение (Кучеров)',
    reagents: 'HC≡C–CH₂–CH₃ + H₂O',
    catalyst: 'H₂SO₄(разб.), HgSO₄',
    condition: '',
    products: 'CH₃–C(O)–CH₂–CH₃',
    full: 'HC≡CCH₂CH₃ + H₂O →(H₂SO₄, HgSO₄) CH₃COCH₂CH₃',
    reagentNames: 'Бутин-1 + Вода',
    productNames: 'Бутанон (этилметилкетон)',
    note: 'Алкины с концевой тройной связью при гидратации дают кетоны (не альдегиды).',
  },
  {
    id: 'yne-12',
    group: 'Алкины',
    name: 'Гидратация бутина-2 → бутанон',
    type: 'Присоединение (Кучеров)',
    reagents: 'CH₃–C≡C–CH₃ + H₂O',
    catalyst: 'H₂SO₄(разб.), HgSO₄',
    condition: '',
    products: 'CH₃–C(O)–CH₂–CH₃',
    full: 'CH₃C≡CCH₃ + H₂O →(H₂SO₄, HgSO₄) CH₃COCH₂CH₃',
    reagentNames: 'Бутин-2 + Вода',
    productNames: 'Бутанон',
    note: 'Симметричный алкин: оба варианта присоединения OH дают одинаковый кетон.',
  },
  {
    id: 'yne-13',
    group: 'Алкины',
    name: 'Окисление бутина-2 → уксусная кислота',
    type: 'Окисление',
    reagents: 'CH₃–C≡C–CH₃ + KMnO₄ + H₂SO₄',
    catalyst: 't°',
    condition: '',
    products: '2CH₃COOH + MnSO₄ + K₂SO₄ + H₂O',
    full: 'CH₃C≡CCH₃ + KMnO₄ + H₂SO₄ →(t°) 2CH₃COOH + MnSO₄ + K₂SO₄ + H₂O',
    reagentNames: 'Бутин-2 + KMnO₄ + H₂SO₄',
    productNames: '2 × Уксусная кислота + соли',
    note: 'При симметричном алкине тройная связь разрывается пополам, оба фрагмента дают COOH.',
  },
  {
    id: 'yne-14',
    group: 'Алкины',
    name: 'Окисление бутина-1 → пропановая кислота',
    type: 'Окисление',
    reagents: 'HC≡C–CH₂–CH₃ + KMnO₄ + H₂SO₄',
    catalyst: 't°',
    condition: '',
    products: 'CH₃CH₂COOH + CO₂ + MnSO₄ + K₂SO₄ + H₂O',
    full: 'HC≡CCH₂CH₃ + KMnO₄ + H₂SO₄ →(t°) CH₃CH₂COOH + CO₂ + MnSO₄ + K₂SO₄ + H₂O',
    reagentNames: 'Бутин-1 + KMnO₄ + H₂SO₄',
    productNames: 'Пропановая кислота + CO₂ + соли',
    note: 'Концевой ≡CH даёт CO₂, внутренний ≡C- даёт COOH.',
  },
  {
    id: 'yne-15',
    group: 'Алкины',
    name: 'Реакция ацетилена с Ag₂O (NH₃) → ацетиленид серебра',
    type: 'Качественная реакция',
    reagents: 'HC≡CH + [Ag(NH₃)₂]OH',
    catalyst: '',
    condition: '',
    products: 'AgC≡CAg↓ + NH₃ + H₂O',
    full: 'HC≡CH + 2[Ag(NH₃)₂]OH → AgC≡CAg↓ + NH₃ + H₂O',
    reagentNames: 'Ацетилен + Реактив Толленса',
    productNames: 'Ацетиленид серебра (↓) + NH₃ + H₂O',
    note: 'Ацетилен имеет ДВЕ концевые C–H связи → два атома H заменяются на Ag.',
  },
  {
    id: 'yne-16',
    group: 'Алкины',
    name: 'Получение ацетилена из карбида кальция и HCl',
    type: 'Получение',
    reagents: 'CaC₂ + HCl',
    catalyst: '',
    condition: '',
    products: 'HC≡CH + CaCl₂',
    full: 'CaC₂ + 2HCl → HC≡CH + CaCl₂',
    reagentNames: 'Карбид кальция + Хлороводород',
    productNames: 'Ацетилен + Хлорид кальция',
    note: 'Кислотный гидролиз карбида кальция — аналог гидролиза водой, но в кислой среде.',
  },
  {
    id: 'yne-17',
    group: 'Алкины',
    name: 'Получение алкина дегидрогалогенированием (KOH спирт.) из дигалогеналкана',
    type: 'Дегидрогалогенирование',
    reagents: 'CH₂Br–CH₂Br + 2KOH(спирт.)',
    catalyst: 'спирт. р-р',
    condition: '',
    products: 'HC≡CH + 2KBr + 2H₂O',
    full: 'CH₂BrCH₂Br + 2KOH(спирт.) → HC≡CH + 2KBr + 2H₂O',
    reagentNames: '1,2-Дибромэтан + KOH (спиртовой р-р)',
    productNames: 'Ацетилен + KBr + Вода',
    note: 'Двойное дегидрогалогенирование вицинального дигалогеналкана → алкин.',
  },
  {
    id: 'yne-18',
    group: 'Алкины',
    name: 'Гидрогалогенирование бутина-1 → 2,2-дибромбутан',
    type: 'Присоединение',
    reagents: 'HC≡C–CH₂–CH₃ + 2HBr',
    catalyst: '',
    condition: '',
    products: 'CH₃–CBr₂–CH₂–CH₃',
    full: 'HC≡CCH₂CH₃ + 2HBr → CH₃CBr₂CH₂CH₃',
    reagentNames: 'Бутин-1 + Бромоводород (2 моль)',
    productNames: '2,2-Дибромбутан',
    note: 'Присоединение 2 молей HBr к алкину: оба бroma идут на один C (по Марковникову).',
  },
  {
    id: 'yne-19',
    group: 'Алкины',
    name: 'Гидробромирование бутина-2 → 2-бромбутен',
    type: 'Присоединение',
    reagents: 'CH₃–C≡C–CH₃ + HBr',
    catalyst: '',
    condition: '',
    products: 'CH₃–CH₂–CBr₂–CH₃',
    full: 'CH₃C≡CCH₃ + HBr → CH₃CH₂CBr₂CH₃',
    reagentNames: 'Бутин-2 + Бромоводород',
    productNames: '2,2-Дибромбутан',
    note: 'У симметричного алкина добавление HBr даёт геминальный дибромид.',
  },

  // ─────────────────── ДИЕНЫ ───────────────────

  {
    id: 'die-1',
    group: 'Диены',
    name: 'Галогенирование бутадиена (1,2)',
    type: 'Присоединение 1,2',
    reagents: 'CH₂=CH–CH=CH₂ + Cl₂',
    catalyst: '',
    condition: '',
    products: 'CH₂Cl–CHCl–CH=CH₂',
    full: 'CH₂=CH–CH=CH₂ + Cl₂ → CH₂Cl–CHCl–CH=CH₂ (1,2-присоединение)',
    reagentNames: 'Бутадиен-1,3 + Хлор',
    productNames: '3,4-Дихлорбутен-1',
    note: 'В ЕГЭ выбирать между 1,2 и 1,4 механизмами не надо — пишите один из них.',
  },
  {
    id: 'die-2',
    group: 'Диены',
    name: 'Галогенирование бутадиена (1,4)',
    type: 'Присоединение 1,4',
    reagents: 'CH₂=CH–CH=CH₂ + Cl₂',
    catalyst: '',
    condition: '',
    products: 'CH₂Cl–CH=CH–CH₂Cl',
    full: 'CH₂=CH–CH=CH₂ + Cl₂ → CH₂Cl–CH=CH–CH₂Cl (1,4-присоединение)',
    reagentNames: 'Бутадиен-1,3 + Хлор',
    productNames: '1,4-Дихлорбутен-2',
    note: '',
  },
  {
    id: 'die-3',
    group: 'Диены',
    name: 'Гидрирование диена',
    type: 'Присоединение',
    reagents: 'CH₂=CH–CH=CH₂ + H₂',
    catalyst: 'Pt, t°',
    condition: '',
    products: 'CH₃–CH₂–CH=CH₂ (1,2) / CH₃–CH=CH–CH₃ (1,4)',
    full: 'CH₂=CH–CH=CH₂ + H₂ →(Pt,t°) CH₃–CH₂–CH=CH₂ или CH₃–CH=CH–CH₃',
    reagentNames: 'Бутадиен-1,3 + Водород',
    productNames: 'Бутен-1 (1,2) или Бутен-2 (1,4)',
    note: '',
  },
  {
    id: 'die-4',
    group: 'Диены',
    name: 'Мягкое окисление диена',
    type: 'Окисление',
    reagents: 'CH₂=CH–CH=CH₂ + KMnO₄ + H₂O',
    catalyst: '0°C',
    condition: '',
    products: 'HOCH₂–CH(OH)–CH(OH)–CH₂OH + MnO₂ + KOH',
    full: 'C₄H₆ + 2KMnO₄ + 2H₂O →(0°C) C₄H₆(OH)₄ + 2MnO₂ + 2KOH',
    reagentNames: 'Бутадиен-1,3 + KMnO₄ + Вода',
    productNames: 'Бутантетраол-1,2,3,4 + MnO₂ + KOH',
    note: 'Как у алкенов: каждый C при двойной связи получает OH.',
  },
  {
    id: 'die-5',
    group: 'Диены',
    name: 'Реакция Лебедева',
    type: 'Синтез диена',
    reagents: '2CH₃–CH₂–OH',
    catalyst: 'ZnO, Al₂O₃, t°',
    condition: '',
    products: 'CH₂=CH–CH=CH₂ + 2H₂O + H₂',
    full: '2C₂H₅OH →(ZnO, Al₂O₃, t°) CH₂=CH–CH=CH₂ + 2H₂O + H₂',
    reagentNames: 'Этанол × 2',
    productNames: 'Бутадиен-1,3 (дивинил) + Вода + Водород',
    note: 'Промышленный синтез бутадиена.',
  },
  {
    id: 'die-6',
    group: 'Диены',
    name: 'Получение бутадиена из бутана',
    type: 'Синтез диена',
    reagents: 'CH₃–CH₂–CH₂–CH₃',
    catalyst: 'Cr₂O₃, t°',
    condition: '',
    products: 'CH₂=CH–CH=CH₂ + 2H₂',
    full: 'C₄H₁₀ →(Cr₂O₃, t°) C₄H₆ + 2H₂',
    reagentNames: 'н-Бутан',
    productNames: 'Бутадиен-1,3 + Водород',
    note: '',
  },
  // ── Новые из ЕГЭ ──
  {
    id: 'die-7',
    group: 'Диены',
    name: 'Гидробромирование бутадиена-1,3 (1,2-присоединение)',
    type: 'Присоединение 1,2',
    reagents: 'CH₂=CH–CH=CH₂ + HBr',
    catalyst: '',
    condition: '',
    products: 'CH₃–CHBr–CH=CH₂',
    full: 'CH₂=CHCH=CH₂ + HBr → CH₃CHBrCH=CH₂',
    reagentNames: 'Бутадиен-1,3 + HBr',
    productNames: '3-Бромбутен-1',
    note: 'Кинетический продукт (низкая температура): 1,2-присоединение.',
  },
  {
    id: 'die-8',
    group: 'Диены',
    name: 'Гидробромирование бутадиена-1,3 (1,4-присоединение)',
    type: 'Присоединение 1,4',
    reagents: 'CH₂=CH–CH=CH₂ + HBr',
    catalyst: '',
    condition: '',
    products: 'CH₃–CH=CH–CH₂Br',
    full: 'CH₂=CHCH=CH₂ + HBr → CH₃CH=CHCH₂Br',
    reagentNames: 'Бутадиен-1,3 + HBr',
    productNames: '1-Бромбутен-2',
    note: 'Термодинамический продукт (высокая температура): 1,4-присоединение.',
  },
  {
    id: 'die-9',
    group: 'Диены',
    name: 'Жёсткое окисление пентадиена-1,4 → малоновая кислота',
    type: 'Окисление',
    reagents: 'CH₂=CH–CH₂–CH=CH₂ + KMnO₄ + H₂SO₄',
    catalyst: 't°',
    condition: '',
    products: 'HOOC–CH₂–COOH + CO₂ + MnSO₄ + K₂SO₄ + H₂O',
    full: 'CH₂=CHCH₂CH=CH₂ + KMnO₄ + H₂SO₄ →(t°) HOOCCH₂COOH + CO₂ + соли',
    reagentNames: 'Пентадиен-1,4 + KMnO₄ + H₂SO₄',
    productNames: 'Малоновая кислота + CO₂ + соли',
    note: 'Оба концевых CH₂= дают CO₂, внутренний –CH₂– остаётся как –CH₂– между карбоксилами.',
  },

  // ─────────────────── ЦИКЛОАЛКАНЫ ───────────────────

  {
    id: 'cyc-1',
    group: 'Циклоалканы',
    name: 'Галогенирование малого цикла (присоединение)',
    type: 'Присоединение',
    reagents: 'C₃H₆ (циклопропан) + Cl₂',
    catalyst: '',
    condition: '',
    products: 'Cl–CH₂–CH₂–CH₂–Cl',
    full: 'Циклопропан + Cl₂ → 1,3-Дихлорпропан',
    reagentNames: 'Циклопропан + Хлор',
    productNames: '1,3-Дихлорпропан',
    note: 'Малые циклы (C3, C4) — по свойствам похожи на алкены (присоединение). Большие циклы (C5+) — как алканы (замещение).',
  },
  {
    id: 'cyc-5',
    group: 'Циклоалканы',
    name: 'Гидрогалогенирование малого цикла',
    type: 'Присоединение',
    reagents: 'C₃H₆ (циклопропан) + HCl',
    catalyst: '',
    condition: '',
    products: 'CH₃–CH₂–CH₂Cl',
    full: 'Циклопропан + HCl → 1-Хлорпропан',
    reagentNames: 'Циклопропан + Хлороводород',
    productNames: '1-Хлорпропан',
    note: 'Реакция идёт для малых циклов (C3, C4). Большие циклы (C5+) с HX обычно не реагируют.',
  },
  {
    id: 'cyc-2',
    group: 'Циклоалканы',
    name: 'Галогенирование большого цикла (замещение)',
    type: 'Замещение',
    reagents: 'C₆H₁₂ (циклогексан) + Cl₂',
    catalyst: 'hν (УФ)',
    condition: '',
    products: 'C₆H₁₁Cl + HCl',
    full: 'Циклогексан + Cl₂ →(hν) Хлорциклогексан + HCl',
    reagentNames: 'Циклогексан + Хлор',
    productNames: 'Хлорциклогексан + HCl',
    note: 'Для бромирования больших циклов — только газообразный Br₂ (не бромная вода!).',
  },
  {
    id: 'cyc-3',
    group: 'Циклоалканы',
    name: 'Гидрирование малого цикла',
    type: 'Присоединение',
    reagents: 'C₃H₆ (циклопропан) + H₂',
    catalyst: 'Pt, t°',
    condition: '',
    products: 'CH₃–CH₂–CH₃',
    full: 'Циклопропан + H₂ →(Pt, t°) Пропан',
    reagentNames: 'Циклопропан + Водород',
    productNames: 'Пропан',
    note: 'Большие циклы (C5+) с H₂ не реагируют.',
  },
  {
    id: 'cyc-4',
    group: 'Циклоалканы',
    name: 'Дегидрирование циклогексана',
    type: 'Отщепление',
    reagents: 'C₆H₁₂ (циклогексан)',
    catalyst: 'Pt, t°',
    condition: '',
    products: 'C₆H₆ + 3H₂',
    full: 'Циклогексан →(Pt, t°) Бензол + 3H₂',
    reagentNames: 'Циклогексан',
    productNames: 'Бензол + Водород',
    note: 'Реакция получения аренов из циклоалканов.',
  },
  {
    id: 'cyc-6',
    group: 'Циклоалканы',
    name: 'Получение циклоалканов из дигалогеналканов (Zn)',
    type: 'Внутримолекулярная реакция (циклизация)',
    reagents: 'Cl–(CH₂)ₙ–Cl + Zn',
    catalyst: '△',
    condition: '',
    products: 'циклоалкан + ZnCl₂',
    full: 'Cl–(CH₂)₃–Cl + Zn →(△) C₃H₆ + ZnCl₂',
    reagentNames: 'Дигалогеналкан + Цинк',
    productNames: 'Циклоалкан + Хлорид цинка',
    steps: [
      'Cl–CH₂–CH₂–CH₂–Cl + Zn →(△) C₃H₆ (циклопропан) + ZnCl₂',
      'Cl–CH₂–(CH₂)₄–CH₂–Cl + Zn →(△) C₆H₁₂ (циклогексан) + ZnCl₂',
    ],
    note: 'Циклизация: Zn "забирает" 2Cl, а цепь замыкается в цикл.',
  },
  // ── Новые из ЕГЭ ──
  {
    id: 'cyc-7',
    group: 'Циклоалканы',
    name: 'Гидрирование циклобутана → н-бутан',
    type: 'Присоединение',
    reagents: 'C₄H₈ (циклобутан) + H₂',
    catalyst: 'Pt, t°',
    condition: '',
    products: 'CH₃–CH₂–CH₂–CH₃',
    full: 'Циклобутан + H₂ →(Pt, t°) CH₃CH₂CH₂CH₃',
    reagentNames: 'Циклобутан + Водород',
    productNames: 'н-Бутан',
    note: 'Малый цикл C4 тоже раскрывается при гидрировании (как циклопропан).',
  },
  {
    id: 'cyc-8',
    group: 'Циклоалканы',
    name: 'Гидрирование циклогексена → циклогексан',
    type: 'Присоединение',
    reagents: 'C₆H₁₀ (циклогексен) + H₂',
    catalyst: 'Pt, t°',
    condition: '',
    products: 'C₆H₁₂',
    full: 'Циклогексен + H₂ →(Pt, t°) Циклогексан',
    reagentNames: 'Циклогексен + Водород',
    productNames: 'Циклогексан',
    note: 'Гидрирование только двойной связи, кольцо не раскрывается.',
  },
  {
    id: 'cyc-9',
    group: 'Циклоалканы',
    name: 'Бромирование циклопропана → 1,3-дибромпропан',
    type: 'Присоединение',
    reagents: 'C₃H₆ (циклопропан) + Br₂',
    catalyst: '',
    condition: '',
    products: 'Br–CH₂–CH₂–CH₂–Br',
    full: 'Циклопропан + Br₂ → BrCH₂CH₂CH₂Br',
    reagentNames: 'Циклопропан + Бром',
    productNames: '1,3-Дибромпропан',
    note: 'Малый цикл раскрывается бромом (как у алкенов). Продукт — дибромид с концевыми атомами Br.',
  },
  {
    id: 'cyc-10',
    group: 'Циклоалканы',
    name: 'Получение циклопропана из 1,3-дихлорпропана (Mg)',
    type: 'Циклизация',
    reagents: 'Cl–CH₂–CH₂–CH(Cl)–CH₃ + Mg',
    catalyst: 't°',
    condition: '',
    products: 'метилциклопропан + MgCl₂',
    full: 'ClCH₂CH₂CHClCH₃ + Mg →(t°) метилциклопропан + MgCl₂',
    reagentNames: '1,3-Дихлорбутан + Магний',
    productNames: 'Метилциклопропан + Хлорид магния',
    note: 'Mg циклизует 1,3-дигалогеналканы в замещённые циклоалканы.',
  },

  // ─────────────────── АРЕНЫ ───────────────────

  {
    id: 'are-1',
    group: 'Арены',
    name: 'Галогенирование бензола (каталитическое)',
    type: 'Замещение (электрофильное)',
    reagents: 'C₆H₆ + Cl₂',
    catalyst: 'AlCl₃, t°',
    condition: '',
    products: 'C₆H₅Cl + HCl',
    full: 'C₆H₆ + Cl₂ →(AlCl₃, t°) C₆H₅Cl + HCl',
    reagentNames: 'Бензол + Хлор',
    productNames: 'Хлорбензол + HCl',
    note: 'Для бромирования — только газообразный Br₂ (не бромная вода!).',
  },
  {
    id: 'are-2',
    group: 'Арены',
    name: 'Галогенирование бензола (на свету)',
    type: 'Присоединение',
    reagents: 'C₆H₆ + 3Cl₂',
    catalyst: 'hν (УФ)',
    condition: '',
    products: 'C₆H₆Cl₆ (гексахлоран)',
    full: 'C₆H₆ + 3Cl₂ →(hν) C₆H₆Cl₆',
    reagentNames: 'Бензол + Хлор',
    productNames: '1,2,3,4,5,6-Гексахлорциклогексан (гексахлоран)',
    note: 'На свету — присоединение (разрушение ароматики). С катализатором — замещение.',
  },
  {
    id: 'are-3',
    group: 'Арены',
    name: 'Алкилирование по Фриделю-Крафтсу',
    type: 'Замещение (электрофильное)',
    reagents: 'C₆H₆ + CH₃Cl',
    catalyst: 'AlCl₃, t°',
    condition: '',
    products: 'C₆H₅–CH₃ + HCl',
    full: 'C₆H₆ + CH₃Cl →(AlCl₃, t°) C₆H₅CH₃ + HCl',
    reagentNames: 'Бензол + Хлорметан',
    productNames: 'Толуол (метилбензол) + HCl',
    note: 'Алкилирование — присоединение углеводородного радикала.',
  },
  {
    id: 'are-4',
    group: 'Арены',
    name: 'Нитрование бензола',
    type: 'Замещение (электрофильное)',
    reagents: 'C₆H₆ + HNO₃(конц.)',
    catalyst: 'H₂SO₄(конц.)',
    condition: '',
    products: 'C₆H₅–NO₂ + H₂O',
    full: 'C₆H₆ + HNO₃(конц.) →(H₂SO₄ конц.) C₆H₅NO₂ + H₂O',
    reagentNames: 'Бензол + Концентрированная азотная кислота',
    productNames: 'Нитробензол + Вода',
    note: '',
  },
  {
    id: 'are-5',
    group: 'Арены',
    name: 'Гидрирование бензола',
    type: 'Присоединение',
    reagents: 'C₆H₆ + 3H₂',
    catalyst: 'Pt/Ni/Pd, t°',
    condition: '',
    products: 'C₆H₁₂',
    full: 'C₆H₆ + 3H₂ →(Pt, t°) C₆H₁₂',
    reagentNames: 'Бензол + Водород',
    productNames: 'Циклогексан',
    note: 'Бензол не обесцвечивает бромную воду и не реагирует с KMnO₄ (без нагрева).',
  },
  {
    id: 'are-6',
    group: 'Арены',
    name: 'Окисление гомологов бензола (кислая среда)',
    type: 'Окисление',
    reagents: 'C₆H₅–CH₃ + KMnO₄ + H₂SO₄',
    catalyst: 'H⁺',
    condition: '',
    products: 'C₆H₅–COOH + MnSO₄ + K₂SO₄ + H₂O',
    full: 'C₆H₅–CH₃ + KMnO₄ + H₂SO₄ → C₆H₅COOH + MnSO₄ + K₂SO₄ + H₂O',
    reagentNames: 'Толуол + KMnO₄ + H₂SO₄',
    productNames: 'Бензойная кислота + соли Mn и K',
    steps: [
      'C₆H₅CH₂CH₃ + KMnO₄ + H₂SO₄ → C₆H₅COOH + CO₂ + MnSO₄ + K₂SO₄ + H₂O',
      'C₆H₅CH₂CH₂CH₃ + KMnO₄ + H₂SO₄ → C₆H₅COOH + CH₃COOH + MnSO₄ + K₂SO₄ + H₂O',
      'C₆H₅CH(CH₃)₂ + KMnO₄ + H₂SO₄ → C₆H₅COOH + CO₂ + MnSO₄ + K₂SO₄ + H₂O',
      'C₆H₅CH₂CH(CH₃)₂ + KMnO₄ + H₂SO₄ → C₆H₅COOH + (CH₃)₂CO + MnSO₄ + K₂SO₄ + H₂O',
    ],
    note: 'Окисление боковой цепи KMnO₄: до бензойной кислоты. Отщепившийся фрагмент даёт CO₂ (1 C), кислоту (цепь ≥2 C) или кетон (разветвление).',
  },
  {
    id: 'are-11',
    group: 'Арены',
    name: 'Окисление толуола (нейтральная среда)',
    type: 'Окисление',
    reagents: 'C₆H₅–CH₃ + 2KMnO₄',
    catalyst: 't°',
    condition: '',
    products: 'C₆H₅–COOK + 2MnO₂ + KOH + H₂O',
    full: 'C₆H₅CH₃ + 2KMnO₄ →(t°) C₆H₅COOK + 2MnO₂↓ + KOH + H₂O',
    reagentNames: 'Толуол + KMnO₄ (нейтр.)',
    productNames: 'Бензоат калия + MnO₂ + KOH + H₂O',
    note: 'В нейтральной/щелочной среде продукт окисления — соль бензойной кислоты (—COOK).',
  },
  {
    id: 'are-12',
    group: 'Арены',
    name: 'Окисление стирола (нейтральная среда)',
    type: 'Окисление (мягкое)',
    reagents: 'C₆H₅CH=CH₂ + KMnO₄ + H₂O',
    catalyst: '0°C',
    condition: '',
    products: 'C₆H₅CH(OH)CH₂OH + MnO₂ + KOH',
    full: 'C₆H₅CH=CH₂ + KMnO₄ + H₂O →(0°C) C₆H₅CH(OH)CH₂OH + MnO₂ + KOH',
    reagentNames: 'Стирол + KMnO₄ + H₂O',
    productNames: '1-фенилэтандиол-1,2 + MnO₂ + KOH',
    note: 'Как у алкенов: при мягком окислении каждый атом C при двойной связи получает OH.',
  },
  {
    id: 'are-7',
    group: 'Арены',
    name: 'Алкилирование бензола алкеном',
    type: 'Замещение (электрофильное)',
    reagents: 'C₆H₆ + CH₃–CH=CH₂',
    catalyst: 'H₃PO₄ (кислая среда)',
    condition: '',
    products: 'C₆H₅–CH(CH₃)₂',
    full: 'C₆H₆ + CH₃–CH=CH₂ →(H₃PO₄) C₆H₅–CH(CH₃)₂',
    reagentNames: 'Бензол + Пропен',
    productNames: 'Изопропилбензол (кумол)',
    note: 'Водород присоединяется к тому C при двойной связи, где больше H (правило Марковникова для активации).',
  },
  {
    id: 'are-8',
    group: 'Арены',
    name: 'Галогенирование толуола (кольцо, кат.)',
    type: 'Замещение',
    reagents: 'C₆H₅–CH₃ + Cl₂',
    catalyst: 'AlCl₃',
    condition: '',
    products: 'о- и п-ClC₆H₄–CH₃ + HCl',
    full: 'C₆H₅–CH₃ + Cl₂ →(AlCl₃) о-ClC₆H₄CH₃ + HCl (орто и пара)',
    reagentNames: 'Толуол + Хлор',
    productNames: 'орто- и пара-Хлортолуол + HCl',
    note: 'CH₃ — заместитель 1-го рода, направляет в орто- и пара-положения.',
  },
  {
    id: 'are-9',
    group: 'Арены',
    name: 'Галогенирование толуола (боковая цепь, свет)',
    type: 'Замещение',
    reagents: 'C₆H₅–CH₃ + Cl₂',
    catalyst: 'hν (УФ)',
    condition: '',
    products: 'C₆H₅–CH₂Cl + HCl',
    full: 'C₆H₅–CH₃ + Cl₂ →(hν) C₆H₅–CH₂Cl + HCl',
    reagentNames: 'Толуол + Хлор',
    productNames: 'Бензилхлорид + HCl',
    note: 'На свету хлорируется боковая цепь (как у алкана).',
  },
  {
    id: 'are-10',
    group: 'Арены',
    name: 'Получение фенола из хлорбензола',
    type: 'Замещение',
    reagents: 'C₆H₅Cl + NaOH(водн.)',
    catalyst: 't°',
    condition: '',
    products: 'C₆H₅ONa + NaCl + H₂O',
    full: 'C₆H₅Cl + NaOH(водн.) →(t°) C₆H₅ONa + NaCl + H₂O',
    reagentNames: 'Хлорбензол + NaOH (водный р-р)',
    productNames: 'Фенолят натрия + NaCl + Вода',
    note: 'Без нагрева эта реакция НЕ идёт!',
  },
  // ── Новые из ЕГЭ ──
  {
    id: 'are-13',
    group: 'Арены',
    name: 'Окисление стирола (кислая среда) → бензойная кислота',
    type: 'Окисление',
    reagents: 'C₆H₅–CH=CH₂ + KMnO₄ + H₂SO₄',
    catalyst: 't°',
    condition: '',
    products: 'C₆H₅COOH + CO₂ + MnSO₄ + K₂SO₄ + H₂O',
    full: 'C₆H₅CH=CH₂ + KMnO₄ + H₂SO₄ →(t°) C₆H₅COOH + CO₂ + MnSO₄ + K₂SO₄ + H₂O',
    reagentNames: 'Стирол + KMnO₄ + H₂SO₄',
    productNames: 'Бензойная кислота + CO₂ + соли',
    note: 'Концевой =CH₂ окисляется до CO₂, а фенильный C даёт COOH.',
  },
  {
    id: 'are-14',
    group: 'Арены',
    name: 'Окисление этилбензола → бензойная кислота',
    type: 'Окисление',
    reagents: 'C₆H₅–CH₂–CH₃ + KMnO₄ + H₂SO₄',
    catalyst: 't°',
    condition: '',
    products: 'C₆H₅COOH + CO₂ + MnSO₄ + K₂SO₄ + H₂O',
    full: 'C₆H₅CH₂CH₃ + KMnO₄ + H₂SO₄ →(t°) C₆H₅COOH + CO₂ + MnSO₄ + K₂SO₄ + H₂O',
    reagentNames: 'Этилбензол + KMnO₄ + H₂SO₄',
    productNames: 'Бензойная кислота + CO₂ + соли',
    note: 'Боковая цепь с двумя C: ближайший к кольцу C становится COOH, дальний — CO₂.',
  },
  {
    id: 'are-15',
    group: 'Арены',
    name: 'Гидрирование толуола → метилциклогексан',
    type: 'Присоединение',
    reagents: 'C₆H₅–CH₃ + 3H₂',
    catalyst: 'Pt, t°',
    condition: '',
    products: 'C₆H₁₁–CH₃',
    full: 'C₆H₅CH₃ + 3H₂ →(Pt, t°) C₆H₁₁CH₃',
    reagentNames: 'Толуол + Водород',
    productNames: 'Метилциклогексан',
    note: 'Гидрирование бензольного кольца гомологов даёт замещённые циклогексаны.',
  },
  {
    id: 'are-16',
    group: 'Арены',
    name: 'Гидрирование стирола → этилбензол',
    type: 'Присоединение',
    reagents: 'C₆H₅–CH=CH₂ + H₂',
    catalyst: 'Ni, t°',
    condition: '',
    products: 'C₆H₅–CH₂–CH₃',
    full: 'C₆H₅CH=CH₂ + H₂ →(Ni, t°) C₆H₅CH₂CH₃',
    reagentNames: 'Стирол + Водород',
    productNames: 'Этилбензол',
    note: 'Гидрируется только боковая двойная связь; бензольное кольцо остаётся нетронутым.',
  },
  {
    id: 'are-17',
    group: 'Арены',
    name: 'Дегидрирование этилбензола → стирол',
    type: 'Дегидрирование',
    reagents: 'C₆H₅–CH₂–CH₃',
    catalyst: 'Pt, t°',
    condition: '',
    products: 'C₆H₅–CH=CH₂ + H₂',
    full: 'C₆H₅CH₂CH₃ →(Pt, t°) C₆H₅CH=CH₂ + H₂',
    reagentNames: 'Этилбензол',
    productNames: 'Стирол + Водород',
    note: 'Промышленный способ получения стирола.',
  },
  {
    id: 'are-18',
    group: 'Арены',
    name: 'Реакция стирола с HCl → 1-фенил-1-хлорэтан',
    type: 'Присоединение',
    reagents: 'C₆H₅–CH=CH₂ + HCl',
    catalyst: '',
    condition: '',
    products: 'C₆H₅–CH(Cl)–CH₃',
    full: 'C₆H₅CH=CH₂ + HCl → C₆H₅CHClCH₃',
    reagentNames: 'Стирол + Хлороводород',
    productNames: '1-Фенил-1-хлорэтан',
    note: 'По правилу Марковникова: Cl идёт к С, у которого меньше H (бензильный C).',
  },
  {
    id: 'are-19',
    group: 'Арены',
    name: 'Окисление C₆H₅–CHCl₂ с NaOH(водн.) → бензальдегид',
    type: 'Гидролиз',
    reagents: 'C₆H₅–CHCl₂ + NaOH(водн.)',
    catalyst: '',
    condition: '',
    products: 'C₆H₅–CHO + NaCl + H₂O',
    full: 'C₆H₅CHCl₂ + NaOH(водн.) → C₆H₅CHO + NaCl + H₂O',
    reagentNames: 'Бензилиденхлорид + NaOH (водн.)',
    productNames: 'Бензальдегид + NaCl + Вода',
    note: 'Гидролиз геминального дигалогенида на бензильном C→ альдегид.',
  },
  {
    id: 'are-20',
    group: 'Арены',
    name: 'Окисление C₆H₅–CCl₃ с KOH(водн.) → бензоат калия',
    type: 'Гидролиз',
    reagents: 'C₆H₅–CCl₃ + KOH(водн.)',
    catalyst: '',
    condition: '',
    products: 'C₆H₅–COOK + KCl + H₂O',
    full: 'C₆H₅CCl₃ + KOH(водн.) → C₆H₅COOK + KCl + H₂O',
    reagentNames: 'Трихлорметилбензол + KOH (водн.)',
    productNames: 'Бензоат калия + KCl + Вода',
    note: 'Гидролиз С-трихлоро группы у бензольного кольца даёт соль бензойной кислоты.',
  },
  {
    id: 'are-21',
    group: 'Арены',
    name: 'Алкилирование бензола бромэтаном → этилбензол',
    type: 'Замещение (Фридель-Крафтс)',
    reagents: 'C₆H₆ + CH₃–CH₂–Br',
    catalyst: 'AlCl₃',
    condition: '',
    products: 'C₆H₅–CH₂–CH₃ + HBr',
    full: 'C₆H₆ + CH₃CH₂Br →(AlCl₃) C₆H₅CH₂CH₃ + HBr',
    reagentNames: 'Бензол + Бромэтан',
    productNames: 'Этилбензол + HBr',
    note: 'Реакция Фриделя-Крафтса с галогеналканом.',
  },
  {
    id: 'are-22',
    group: 'Арены',
    name: 'Реакция стирола с бромной водой → 1-фенил-1,2-дибромэтан',
    type: 'Присоединение',
    reagents: 'C₆H₅–CH=CH₂ + Br₂(водн.)',
    catalyst: '',
    condition: '',
    products: 'C₆H₅–CH(Br)–CH₂(Br)',
    full: 'C₆H₅CH=CH₂ + Br₂(водн.) → C₆H₅CHBrCH₂Br',
    reagentNames: 'Стирол + Бромная вода',
    productNames: '1-Фенил-1,2-дибромэтан',
    note: 'Двойная связь боковой цепи стирола реагирует с бромной водой как обычный алкен.',
  },
  {
    id: 'are-23',
    group: 'Арены',
    name: 'Окисление бензилового спирта CuO → бензальдегид',
    type: 'Окисление',
    reagents: 'C₆H₅–CH₂OH + CuO',
    catalyst: 't°',
    condition: '',
    products: 'C₆H₅–CHO + Cu + H₂O',
    full: 'C₆H₅CH₂OH + CuO →(t°) C₆H₅CHO + Cu + H₂O',
    reagentNames: 'Бензиловый спирт + Оксид меди(II)',
    productNames: 'Бензальдегид + Cu + Вода',
    note: 'Первичный ароматический спирт при окислении CuO даёт альдегид.',
  },
  {
    id: 'are-24',
    group: 'Арены',
    name: 'Подкисление бензоата натрия → бензойная кислота',
    type: 'Реакция ионного обмена',
    reagents: 'C₆H₅–COONa + HCl',
    catalyst: '',
    condition: '',
    products: 'C₆H₅–COOH + NaCl',
    full: 'C₆H₅COONa + HCl → C₆H₅COOH + NaCl',
    reagentNames: 'Бензоат натрия + Соляная кислота',
    productNames: 'Бензойная кислота + NaCl',
    note: 'Подкисление соли карбоновой кислоты даёт соответствующую кислоту.',
  },
  {
    id: 'are-25',
    group: 'Арены',
    name: 'Подкисление фенолята натрия → фенол',
    type: 'Реакция ионного обмена',
    reagents: 'C₆H₅–ONa + HCl',
    catalyst: '',
    condition: '',
    products: 'C₆H₅–OH + NaCl',
    full: 'C₆H₅ONa + HCl → C₆H₅OH + NaCl',
    reagentNames: 'Фенолят натрия + Соляная кислота',
    productNames: 'Фенол + NaCl',
    note: 'Сильная кислота вытесняет фенол из его соли.',
  },
  {
    id: 'are-26',
    group: 'Арены',
    name: 'Декарбоксилирование бензоата натрия (сода-известь)',
    type: 'Декарбоксилирование',
    reagents: 'C₆H₅–COONa + NaOH(тв.)',
    catalyst: 't°',
    condition: '',
    products: 'C₆H₆ + Na₂CO₃',
    full: 'C₆H₅COONa + NaOH(тв.) →(t°) C₆H₆ + Na₂CO₃',
    reagentNames: 'Бензоат натрия + Твёрдый NaOH',
    productNames: 'Бензол + Карбонат натрия',
    note: 'По аналогии с реакцией Дюма: соль кислоты при сплавлении с щёлочью теряет CO₂.',
  },
  {
    id: 'are-27',
    group: 'Арены',
    name: 'Фенолят калия + CO₂ + H₂O → фенол',
    type: 'Кислотно-основное взаимодействие',
    reagents: 'C₆H₅–OK + CO₂ + H₂O',
    catalyst: '',
    condition: '',
    products: 'C₆H₅–OH + KHCO₃',
    full: 'C₆H₅OK + CO₂ + H₂O → C₆H₅OH + KHCO₃',
    reagentNames: 'Фенолят калия + CO₂ + Вода',
    productNames: 'Фенол + Гидрокарбонат калия',
    note: 'Угольная кислота (из CO₂ и H₂O) протонирует фенолят.',
  },

  // ─────────────────── СПИРТЫ ───────────────────

  {
    id: 'alc-1',
    group: 'Спирты',
    name: 'Взаимодействие с натрием',
    type: 'Замещение',
    reagents: 'CH₃–CH₂–OH + Na',
    catalyst: '',
    condition: '',
    products: 'CH₃–CH₂–ONa + ½H₂',
    full: 'CH₃–CH₂–OH + Na → CH₃–CH₂–ONa + ½H₂',
    reagentNames: 'Этанол + Натрий',
    productNames: 'Этилат натрия (алкоголят) + Водород',
    note: 'Продукт — алкоголят (соль). Многоатомный спирт реагирует с 2Na: CH₂(OH)CH₂OH + 2Na → CH₂(ONa)CH₂ONa + H₂. Фенол тоже даёт алкоголят с Na.',
  },
  {
    id: 'alc-2',
    group: 'Спирты',
    name: 'Взаимодействие фенола с NaOH',
    type: 'Нейтрализация',
    reagents: 'C₆H₅–OH + NaOH',
    catalyst: '',
    condition: '',
    products: 'C₆H₅–ONa + H₂O',
    full: 'C₆H₅–OH + NaOH → C₆H₅–ONa + H₂O',
    reagentNames: 'Фенол + Гидроксид натрия',
    productNames: 'Фенолят натрия + Вода',
    note: 'Фенол реагирует с NaOH, потому что кислотнее спиртов (влияние бензольного кольца). Одноатомные спирты с NaOH — реакция НЕ идёт!',
  },
  {
    id: 'alc-3',
    group: 'Спирты',
    name: 'Гидролиз алкоголята водой',
    type: 'Гидролиз',
    reagents: 'CH₃–CH₂–ONa + H₂O',
    catalyst: '',
    condition: '',
    products: 'CH₃–CH₂–OH + NaOH',
    full: 'CH₃–CH₂–ONa + H₂O → CH₃–CH₂–OH + NaOH',
    reagentNames: 'Этилат натрия + Вода',
    productNames: 'Этанол + Гидроксид натрия',
    note: 'Алкоголяты легко разлагаются водой: C₂H₅ONa + H₂O → C₂H₅OH + NaOH. С кислотой: C₂H₅ONa + H₂SO₄ → C₂H₅OH + NaHSO₄.',
  },
  {
    id: 'alc-4',
    group: 'Спирты',
    name: 'Этерификация (сложный эфир со спиртом)',
    type: 'Этерификация',
    reagents: 'CH₃–COOH + CH₃OH',
    catalyst: 'H₃PO₄ (кислая среда)',
    condition: 'обратимо',
    products: 'CH₃–COOCH₃ + H₂O',
    full: 'CH₃–COOH + CH₃OH ⇌(H₃PO₄) CH₃–COOCH₃ + H₂O',
    reagentNames: 'Уксусная кислота + Метанол',
    productNames: 'Метилацетат + Вода',
    note: 'Реакция обратима. Фенол с кислотами НЕ реагирует напрямую — для фенола используют хлорангидриды кислот.',
  },
  {
    id: 'alc-5',
    group: 'Спирты',
    name: 'Этерификация глицерина азотной кислотой',
    type: 'Этерификация (неорганическая кислота)',
    reagents: 'C₃H₅(OH)₃ + 3HNO₃',
    catalyst: 'H₂SO₄',
    condition: '',
    products: 'C₃H₅(ONO₂)₃ + 3H₂O',
    full: 'C₃H₅(OH)₃ + 3HNO₃(конц.) →(H₂SO₄) C₃H₅(ONO₂)₃ + 3H₂O',
    reagentNames: 'Глицерин + Концентрированная азотная кислота',
    productNames: 'Нитроглицерин + Вода',
    note: 'Сложный эфир образуется и при реакции спиртов с неорганическими кислотами (нитрование глицерина).',
  },
  {
    id: 'alc-6',
    group: 'Спирты',
    name: 'Внутримолекулярная дегидратация → алкен (180°C)',
    type: 'Дегидратация',
    reagents: 'CH₃–CH(OH)–CH₂–CH₃',
    catalyst: 'H₂SO₄(конц.), 180°C',
    condition: '',
    products: 'CH₃–CH=CH–CH₃ + H₂O',
    full: 'CH₃CH(OH)CH₂CH₃ →(H₂SO₄, 180°C) CH₃CH=CHCH₃ + H₂O',
    reagentNames: 'Бутанол-2',
    productNames: 'Бутен-2 + Вода',
    note: '180°C — внутримолекулярная → алкен (правило Зайцева). 120°C — межмолекулярная → простой эфир. Дегидратацию также проводят на Al₂O₃.',
  },
  {
    id: 'alc-7',
    group: 'Спирты',
    name: 'Межмолекулярная дегидратация → простой эфир (120°C)',
    type: 'Дегидратация',
    reagents: '2 CH₃–CH₂–OH',
    catalyst: 'H₂SO₄(конц.), 120°C',
    condition: '',
    products: 'CH₃CH₂–O–CH₂CH₃ + H₂O',
    full: '2C₂H₅OH →(H₂SO₄, 120°C) C₂H₅–O–C₂H₅ + H₂O',
    reagentNames: 'Этанол × 2',
    productNames: 'Диэтиловый эфир (этоксиэтан) + Вода',
    note: 'При 120°C — межмолекулярная дегидратация → диэтиловый эфир (простой эфир).',
  },
  {
    id: 'alc-8',
    group: 'Спирты',
    name: 'Взаимодействие с галогеноводородом (HCl газ)',
    type: 'Замещение',
    reagents: 'CH₃–CH₂–OH + HCl(г)',
    catalyst: 'p, t°',
    condition: 'обратимо',
    products: 'CH₃–CH₂Cl + H₂O',
    full: 'CH₃–CH₂–OH + HCl(г) ⇌(p, t°) CH₃–CH₂Cl + H₂O',
    reagentNames: 'Этанол + Хлороводород (газ)',
    productNames: 'Хлорэтан + Вода',
    note: 'Реакция идёт только с ГАЗООБРАЗНЫМ HCl. Фенол с HCl — реакция НЕ идёт!',
  },
  {
    id: 'alc-9',
    group: 'Спирты',
    name: 'Окисление первичного спирта → альдегид (CuO)',
    type: 'Окисление',
    reagents: 'CH₃–CH₂–OH + CuO',
    catalyst: '',
    condition: '',
    products: 'CH₃–CHO + Cu↓ + H₂O',
    full: 'CH₃–CH₂–OH + CuO → CH₃–CHO + Cu(красный) + H₂O',
    reagentNames: 'Этанол (первичный спирт) + Оксид меди(II)',
    productNames: 'Этаналь (альдегид) + Медь красная + Вода',
    note: 'Первичный → альдегид. Вторичный → кетон. Третичный с CuO — реакция НЕ идёт. Фенол с CuO — реакция НЕ идёт.',
  },
  {
    id: 'alc-10',
    group: 'Спирты',
    name: 'Окисление вторичного спирта → кетон (CuO)',
    type: 'Окисление',
    reagents: 'CH₃–CH(OH)–CH₃ + CuO',
    catalyst: '',
    condition: '',
    products: 'CH₃–CO–CH₃ + Cu↓ + H₂O',
    full: 'CH₃CH(OH)CH₃ + CuO → CH₃COCH₃ + Cu(красный) + H₂O',
    reagentNames: 'Пропанол-2 (вторичный спирт) + Оксид меди(II)',
    productNames: 'Ацетон (кетон) + Медь красная + Вода',
    note: 'Вторичный спирт → кетон при окислении CuO. Окисление с ZnO в ЕГЭ НЕ встречается.',
  },
  {
    id: 'alc-11',
    group: 'Спирты',
    name: 'Жёсткое окисление первичного спирта → кислота (KMnO₄)',
    type: 'Окисление',
    reagents: 'CH₃–CH₂–OH + KMnO₄ + H₂SO₄',
    catalyst: 't°',
    condition: '',
    products: 'CH₃–COOH + MnSO₄ + K₂SO₄ + H₂O',
    full: 'CH₃CH₂OH + KMnO₄ + H₂SO₄ →(t°) CH₃COOH + MnSO₄ + K₂SO₄ + H₂O',
    reagentNames: 'Этанол + KMnO₄ + H₂SO₄',
    productNames: 'Уксусная кислота + соли Mn, K + Вода',
    note: 'Кислая среда → кислота. В нейтральной/щелочной среде → образуется соль (карбоксилат).',
  },
  {
    id: 'alc-12',
    group: 'Спирты',
    name: 'Жёсткое окисление вторичного спирта → кетон (KMnO₄)',
    type: 'Окисление',
    reagents: 'CH₃–CH(OH)–CH₃ + KMnO₄ + H₂SO₄',
    catalyst: 't°',
    condition: '',
    products: 'CH₃–CO–CH₃ + MnSO₄ + K₂SO₄ + H₂O',
    full: 'CH₃CH(OH)CH₃ + KMnO₄ + H₂SO₄ →(t°) CH₃COCH₃ + MnSO₄ + K₂SO₄ + H₂O',
    reagentNames: 'Пропанол-2 + KMnO₄ + H₂SO₄',
    productNames: 'Ацетон + соли',
    note: 'Вторичный спирт при жёстком окислении → кетон (C–C связь не рвётся).',
  },
  {
    id: 'alc-13',
    group: 'Спирты',
    name: 'Окисление фенола KMnO₄ → пара-бензохинон',
    type: 'Окисление',
    reagents: 'C₆H₅–OH + KMnO₄ + H₂SO₄',
    catalyst: 't°',
    condition: '',
    products: 'C₆H₄O₂ + MnSO₄ + K₂SO₄ + H₂O',
    full: 'C₆H₅OH + KMnO₄ + H₂SO₄ →(t°) C₆H₄O₂(пара-бензохинон) + MnSO₄ + K₂SO₄ + H₂O',
    reagentNames: 'Фенол + KMnO₄ + H₂SO₄',
    productNames: 'пара-Бензохинон + соли',
    note: 'Фенол окисляется KMnO₄ до пара-бензохинона.',
  },
  {
    id: 'alc-14',
    group: 'Спирты',
    name: 'Качественная реакция: многоатомный спирт + Cu(OH)₂',
    type: 'Качественная реакция',
    reagents: 'HOCH₂–CH₂OH + Cu(OH)₂',
    catalyst: '',
    condition: '',
    products: 'Синее окрашивание раствора',
    full: 'HOCH₂CH₂OH + Cu(OH)₂ → синее окрашивание (гликолят меди)',
    reagentNames: 'Этиленгликоль + Гидроксид меди(II)',
    productNames: 'Синее окрашивание (качественная реакция на многоатомные спирты)',
    note: 'Синее окрашивание — качественная реакция на многоатомные спирты (этиленгликоль, глицерин). Достаточно знать в общем виде.',
  },
  {
    id: 'alc-15',
    group: 'Спирты',
    name: 'Качественная реакция на фенол: FeCl₃',
    type: 'Качественная реакция',
    reagents: 'C₆H₅–OH + FeCl₃(р-р)',
    catalyst: '',
    condition: '',
    products: 'Фиолетовое окрашивание',
    full: 'C₆H₅–OH + FeCl₃(р-р) → фиолетовое окрашивание',
    reagentNames: 'Фенол + Хлорид железа(III)',
    productNames: 'Фиолетовый комплекс (качественная реакция)',
    note: 'Фиолетовое окрашивание с FeCl₃ — качественная реакция на фенол. Одноатомные спирты с бромной водой — реакция НЕ идёт.',
  },
  {
    id: 'alc-16',
    group: 'Спирты',
    name: 'Бромирование фенола → 2,4,6-трибромфенол',
    type: 'Замещение',
    reagents: 'C₆H₅–OH + 3Br₂(водн.)',
    catalyst: '',
    condition: '',
    products: 'C₆H₂Br₃–OH↓ + 3HBr',
    full: 'C₆H₅–OH + 3Br₂(водн.) → 2,4,6-трибромфенол↓ + 3HBr',
    reagentNames: 'Фенол + Бромная вода',
    productNames: '2,4,6-Трибромфенол (белый осадок) + HBr',
    note: 'Качественная реакция на фенол: белый осадок. Одноатомные спирты с бромной водой — НЕ реагируют!',
  },
  {
    id: 'alc-17',
    group: 'Спирты',
    name: 'Хлорирование спирта с PCl₅',
    type: 'Замещение',
    reagents: 'CH₃–CH₂–OH + PCl₅',
    catalyst: '',
    condition: '',
    products: 'CH₃–CH₂Cl + POCl₃ + HCl',
    full: 'CH₃CH₂OH + PCl₅ → CH₃CH₂Cl + POCl₃ + HCl',
    reagentNames: 'Этанол + Пятихлористый фосфор',
    productNames: 'Хлорэтан + POCl₃ + HCl',
    note: 'Альтернативный способ замены OH на Cl в спиртах.',
  },
  {
    id: 'alc-18',
    group: 'Спирты',
    name: 'Дегидрирование спирта → альдегид (Cu, t°)',
    type: 'Дегидрирование',
    reagents: 'CH₃–CH₂–OH',
    catalyst: 'Cu, t°',
    condition: '',
    products: 'CH₃–CHO + H₂',
    full: 'CH₃–CH₂–OH →(Cu, t°) CH₃–CHO + H₂',
    reagentNames: 'Этанол',
    productNames: 'Этаналь + Водород',
    note: 'Дегидрирование первичного спирта на Cu → альдегид + H₂.',
  },
  {
    id: 'alc-19',
    group: 'Спирты',
    name: 'Реакция Лебедева (этанол → бутадиен)',
    type: 'Дегидрирование',
    reagents: '2 CH₃–CH₂–OH',
    catalyst: 'ZnO, Al₂O₃, t°',
    condition: '',
    products: 'CH₂=CH–CH=CH₂ + 2H₂O + H₂',
    full: '2C₂H₅OH →(ZnO, Al₂O₃, t°) CH₂=CH–CH=CH₂ + 2H₂O + H₂',
    reagentNames: 'Этанол × 2',
    productNames: 'Бутадиен-1,3 + Вода + Водород',
    note: 'Промышленный способ получения бутадиена для синтеза каучука.',
  },
  {
    id: 'alc-20',
    group: 'Спирты',
    name: 'Получение фенола кумольным методом',
    type: 'Промышленный синтез',
    reagents: 'C₆H₅–CH(CH₃)₂ + O₂',
    catalyst: 'H₂SO₄(к)',
    condition: '',
    products: 'C₆H₅–OH + CH₃–CO–CH₃',
    full: 'Кумол + O₂ →(H₂SO₄) Фенол + Ацетон',
    reagentNames: 'Кумол (изопропилбензол) + Кислород',
    productNames: 'Фенол + Ацетон',
    note: 'Кумольный метод — промышленный синтез: из кумола получают сразу и фенол, и ацетон.',
  },
  {
    id: 'alc-21',
    group: 'Спирты',
    name: 'Ацилирование фенола хлорангидридом',
    type: 'Ацилирование',
    reagents: 'C₆H₅–OH + CH₃–COCl',
    catalyst: '',
    condition: '',
    products: 'C₆H₅–OOC–CH₃ + HCl',
    full: 'C₆H₅–OH + CH₃COCl → C₆H₅OOCCH₃ + HCl',
    reagentNames: 'Фенол + Хлорангидрид уксусной кислоты',
    productNames: 'Феноловый эфир уксусной кислоты + HCl',
    note: 'Фенол НЕ реагирует с кислотами напрямую. Для получения сложного эфира с фенолом используют хлорангидриды.',
  },
  {
    id: 'alc-22',
    group: 'Спирты',
    name: 'Взаимодействие этанола с калием',
    type: 'Замещение',
    reagents: 'CH₃–CH₂–OH + K',
    catalyst: '',
    condition: '',
    products: 'CH₃–CH₂–OK + ½H₂',
    full: 'CH₃CH₂OH + K → CH₃CH₂OK + ½H₂',
    reagentNames: 'Этанол + Калий',
    productNames: 'Этилат калия + Водород',
    note: 'Аналогично реакции с Na, но образуется калиевая соль спирта.',
  },
  {
    id: 'alc-23',
    group: 'Спирты',
    name: 'Взаимодействие метанола с калием',
    type: 'Замещение',
    reagents: 'CH₃–OH + K',
    catalyst: '',
    condition: '',
    products: 'CH₃–OK + ½H₂',
    full: 'CH₃OH + K → CH₃OK + ½H₂',
    reagentNames: 'Метанол + Калий',
    productNames: 'Метилат калия + Водород',
    note: 'Щелочной металл замещает H в гидроксильной группе спирта.',
  },
  {
    id: 'alc-24',
    group: 'Спирты',
    name: 'Окисление метанола CuO → метаналь',
    type: 'Окисление',
    reagents: 'CH₃–OH + CuO',
    catalyst: 't°',
    condition: '',
    products: 'HCHO + Cu + H₂O',
    full: 'CH₃OH + CuO →(t°) HCHO + Cu + H₂O',
    reagentNames: 'Метанол + Оксид меди(II)',
    productNames: 'Метаналь + Cu + Вода',
    note: 'Первичный одноатомный спирт окисляется до альдегида.',
  },
  {
    id: 'alc-25',
    group: 'Спирты',
    name: 'Дегидратация метанола → диметиловый эфир',
    type: 'Дегидратация',
    reagents: '2CH₃–OH',
    catalyst: 'H₂SO₄(конц.), 120°C',
    condition: '',
    products: 'CH₃–O–CH₃ + H₂O',
    full: '2CH₃OH →(H₂SO₄, 120°C) CH₃OCH₃ + H₂O',
    reagentNames: 'Метанол × 2',
    productNames: 'Диметиловый эфир + Вода',
    note: 'Межмолекулярная дегидратация спиртов при 120°C даёт простой эфир.',
  },
  {
    id: 'alc-26',
    group: 'Спирты',
    name: 'Взаимодействие этанола с HBr',
    type: 'Замещение',
    reagents: 'CH₃–CH₂–OH + HBr',
    catalyst: '',
    condition: '',
    products: 'CH₃–CH₂Br + H₂O',
    full: 'CH₃CH₂OH + HBr → CH₃CH₂Br + H₂O',
    reagentNames: 'Этанол + Бромоводород',
    productNames: 'Бромэтан + Вода',
    note: 'OH-группа заменяется на Br в присутствии галогеноводорода.',
  },
  {
    id: 'alc-27',
    group: 'Спирты',
    name: 'Взаимодействие бутанола-1 с HCl',
    type: 'Замещение',
    reagents: 'CH₃–CH₂–CH₂–CH₂OH + HCl',
    catalyst: '',
    condition: '',
    products: 'CH₃–CH₂–CH₂–CH₂Cl + H₂O',
    full: 'CH₃CH₂CH₂CH₂OH + HCl → CH₃CH₂CH₂CH₂Cl + H₂O',
    reagentNames: 'Бутанол-1 + Хлороводород',
    productNames: '1-Хлорбутан + Вода',
    note: 'Реакция замещения у первичного спирта.',
  },
  {
    id: 'alc-28',
    group: 'Спирты',
    name: 'Взаимодействие этиленгликоля с HBr',
    type: 'Замещение',
    reagents: 'HO–CH₂–CH₂–OH + 2HBr',
    catalyst: '',
    condition: '',
    products: 'Br–CH₂–CH₂–Br + 2H₂O',
    full: 'HOCH₂CH₂OH + 2HBr → BrCH₂CH₂Br + 2H₂O',
    reagentNames: 'Этиленгликоль + Бромоводород',
    productNames: '1,2-Дибромэтан + Вода',
    note: 'Обе гидроксогруппы могут быть заменены на галоген.',
  },

  // ─────────────────── АЛЬДЕГИДЫ И КЕТОНЫ ───────────────────

  {
    id: 'ald-1',
    group: 'Альдегиды и кетоны',
    name: 'Гидрирование альдегида → первичный спирт',
    type: 'Присоединение',
    reagents: 'CH₃–CHO + H₂',
    catalyst: 'Pt, t°',
    condition: '',
    products: 'CH₃–CH₂–OH',
    full: 'CH₃–CHO + H₂ →(Pt, t°) CH₃–CH₂–OH',
    reagentNames: 'Этаналь + Водород',
    productNames: 'Этанол (первичный спирт)',
    note: 'Гидрирование альдегида → первичный спирт. Гидрирование кетона → вторичный спирт.',
  },
  {
    id: 'ald-2',
    group: 'Альдегиды и кетоны',
    name: 'Гидрирование кетона → вторичный спирт',
    type: 'Присоединение',
    reagents: 'CH₃–CO–CH₃ + H₂',
    catalyst: 'Pt, t°',
    condition: '',
    products: 'CH₃–CH(OH)–CH₃',
    full: 'CH₃COCH₃ + H₂ →(Pt, t°) CH₃CH(OH)CH₃',
    reagentNames: 'Ацетон + Водород',
    productNames: 'Пропанол-2 (вторичный спирт)',
    note: 'Кетон при гидрировании → вторичный спирт.',
  },
  {
    id: 'ald-3',
    group: 'Альдегиды и кетоны',
    name: 'Окисление альдегида KMnO₄ (кислая среда) → кислота',
    type: 'Окисление',
    reagents: 'CH₃–CHO + KMnO₄ + H₂SO₄',
    catalyst: '',
    condition: '',
    products: 'CH₃–COOH + MnSO₄ + K₂SO₄ + H₂O',
    full: 'CH₃CHO + KMnO₄ + H₂SO₄ → CH₃COOH + MnSO₄ + K₂SO₄ + H₂O',
    reagentNames: 'Этаналь + KMnO₄ + H₂SO₄',
    productNames: 'Уксусная кислота + соли',
    note: 'Кислая среда → кислота. В нейтральной среде — MnO₂ и KOH. В щелочной — K₂MnO₄ и H₂O. Кетоны с KMnO₄ практически не реагируют.',
  },
  {
    id: 'ald-4',
    group: 'Альдегиды и кетоны',
    name: 'Реакция серебряного зеркала (этаналь)',
    type: 'Качественная реакция',
    reagents: 'CH₃–CHO + [Ag(NH₃)₂]OH',
    catalyst: '',
    condition: '',
    products: 'CH₃–COONH₄ + Ag↓ + NH₃ + H₂O',
    full: 'CH₃CHO + [Ag(NH₃)₂]OH → CH₃COONH₄ + Ag↓ + NH₃ + H₂O',
    reagentNames: 'Этаналь + Реактив Толленса',
    productNames: 'Ацетат аммония + Серебро (зеркало) + NH₃ + Вода',
    note: 'Качественная реакция: серебряный налёт. ТОЛЬКО альдегиды и муравьиная кислота (HCOOH). Кетоны — НЕ реагируют!',
  },
  {
    id: 'ald-5',
    group: 'Альдегиды и кетоны',
    name: 'Реакция серебряного зеркала (формальдегид)',
    type: 'Качественная реакция',
    reagents: 'HCHO + [Ag(NH₃)₂]OH',
    catalyst: '',
    condition: '',
    products: '(NH₄)₂CO₃ + Ag↓ + NH₃ + H₂O',
    full: 'HCHO + 2[Ag(NH₃)₂]OH → (NH₄)₂CO₃ + 2Ag↓ + NH₃ + H₂O',
    reagentNames: 'Метаналь (формальдегид) + Реактив Толленса',
    productNames: 'Карбонат аммония + Серебро + NH₃ + Вода',
    note: 'Формальдегид даёт (NH₄)₂CO₃, а не ацетат — т.к. углерод окисляется до CO₂.',
  },
  {
    id: 'ald-6',
    group: 'Альдегиды и кетоны',
    name: 'Окисление альдегида Cu(OH)₂ → кирпично-красный осадок',
    type: 'Качественная реакция',
    reagents: 'CH₃–CHO + Cu(OH)₂',
    catalyst: 't°',
    condition: '',
    products: 'CH₃–COOH + Cu₂O↓ + H₂O',
    full: 'CH₃CHO + Cu(OH)₂ →(t°) CH₃COOH + Cu₂O↓(красный) + H₂O',
    reagentNames: 'Этаналь + Гидроксид меди(II)',
    productNames: 'Уксусная кислота + Cu₂O (красный осадок) + Вода',
    note: 'При нагревании — красный осадок Cu₂O. Без нагревания — жёлтый осадок CuOH. Кетоны — реакция НЕ идёт!',
  },
  {
    id: 'ald-7',
    group: 'Альдегиды и кетоны',
    name: 'Получение альдегида из геминального дигалогеналкана (KOH водн.)',
    type: 'Гидролиз',
    reagents: 'CH₃–CHCl₂ + 2KOH(водн.)',
    catalyst: '',
    condition: '',
    products: 'CH₃–CHO + 2KCl + H₂O',
    full: 'CH₃CHCl₂ + 2KOH(водн.) → CH₃CHO + 2KCl + H₂O',
    reagentNames: '1,1-Дихлорэтан + KOH водный',
    productNames: 'Этаналь + KCl + Вода',
    note: 'Геминальный дигалогеналкан (два галогена на ОДНОМ атоме C) + водный KOH → альдегид или кетон.',
  },
  {
    id: 'ald-8',
    group: 'Альдегиды и кетоны',
    name: 'Получение кетона из геминального дигалогеналкана (KOH водн.)',
    type: 'Гидролиз',
    reagents: 'CH₃–CCl₂–CH₃ + 2KOH(водн.)',
    catalyst: '',
    condition: '',
    products: 'CH₃–CO–CH₃ + 2KCl + H₂O',
    full: 'CH₃CCl₂CH₃ + 2KOH(водн.) → CH₃COCH₃ + 2KCl + H₂O',
    reagentNames: '2,2-Дихлорпропан + KOH водный',
    productNames: 'Ацетон + KCl + Вода',
    note: 'Два галогена на среднем C → кетон. Два галогена на крайнем C → альдегид.',
  },
  {
    id: 'ald-9',
    group: 'Альдегиды и кетоны',
    name: 'Термическое разложение ацетата кальция → кетон',
    type: 'Разложение',
    reagents: '(CH₃COO)₂Ca',
    catalyst: 't°',
    condition: '',
    products: 'CH₃–CO–CH₃ + CaCO₃',
    full: '(CH₃COO)₂Ca →(t°) CH₃COCH₃ + CaCO₃',
    reagentNames: 'Ацетат кальция',
    productNames: 'Ацетон + Карбонат кальция',
    note: 'Термическое разложение солей кальция (или бария) карбоновых кислот → кетон + CaCO₃.',
  },
  {
    id: 'ald-10',
    group: 'Альдегиды и кетоны',
    name: 'Гидролиз 1,1-дибромпропана → пропаналь',
    type: 'Гидролиз',
    reagents: 'CH₃–CH₂–CHBr₂ + 2KOH(водн.)',
    catalyst: '',
    condition: '',
    products: 'CH₃–CH₂–CHO + 2KBr + H₂O',
    full: 'CH₃CH₂CHBr₂ + 2KOH(водн.) → CH₃CH₂CHO + 2KBr + H₂O',
    reagentNames: '1,1-Дибромпропан + KOH (водн.)',
    productNames: 'Пропаналь + KBr + Вода',
    note: 'Геминальный дигалогеналкан с крайним атомом C даёт альдегид.',
  },
  {
    id: 'ald-11',
    group: 'Альдегиды и кетоны',
    name: 'Гидролиз 2,2-дибромпропана → ацетон',
    type: 'Гидролиз',
    reagents: 'CH₃–CBr₂–CH₃ + 2NaOH(водн.)',
    catalyst: '',
    condition: '',
    products: 'CH₃–CO–CH₃ + 2NaBr + H₂O',
    full: 'CH₃CBr₂CH₃ + 2NaOH(водн.) → CH₃COCH₃ + 2NaBr + H₂O',
    reagentNames: '2,2-Дибромпропан + NaOH (водн.)',
    productNames: 'Ацетон + NaBr + Вода',
    note: 'Геминальный дигалогеналкан с внутренним атомом C даёт кетон.',
  },

  // ─────────────────── КАРБОНОВЫЕ КИСЛОТЫ ───────────────────

  {
    id: 'car-1',
    group: 'Карбоновые кислоты',
    name: 'Реакция с активным металлом (Na)',
    type: 'Общие свойства кислот',
    reagents: 'CH₃–COOH + Na',
    catalyst: '',
    condition: '',
    products: 'CH₃–COONa + ½H₂',
    full: 'CH₃–COOH + Na → CH₃–COONa + ½H₂',
    reagentNames: 'Уксусная кислота + Натрий',
    productNames: 'Ацетат натрия + Водород',
    note: 'Реагируют со всеми металлами левее водорода в ряду активности.',
  },
  {
    id: 'car-2',
    group: 'Карбоновые кислоты',
    name: 'Реакция с основным оксидом',
    type: 'Общие свойства кислот',
    reagents: '2CH₃–COOH + Na₂O',
    catalyst: '',
    condition: '',
    products: '2CH₃–COONa + H₂O',
    full: '2CH₃–COOH + Na₂O → 2CH₃–COONa + H₂O',
    reagentNames: 'Уксусная кислота + Оксид натрия',
    productNames: 'Ацетат натрия + Вода',
    note: 'Карбоновые кислоты реагируют с основными и амфотерными оксидами.',
  },
  {
    id: 'car-3',
    group: 'Карбоновые кислоты',
    name: 'Нейтрализация NaOH',
    type: 'Общие свойства кислот',
    reagents: 'CH₃–COOH + NaOH',
    catalyst: '',
    condition: '',
    products: 'CH₃–COONa + H₂O',
    full: 'CH₃–COOH + NaOH → CH₃–COONa + H₂O',
    reagentNames: 'Уксусная кислота + Гидроксид натрия',
    productNames: 'Ацетат натрия + Вода',
    note: 'Реагируют с основными и амфотерными гидроксидами.',
  },
  {
    id: 'car-4',
    group: 'Карбоновые кислоты',
    name: 'Реакция с Cu(OH)₂',
    type: 'Общие свойства кислот',
    reagents: '2CH₃–COOH + Cu(OH)₂',
    catalyst: '',
    condition: '',
    products: '(CH₃COO)₂Cu + 2H₂O',
    full: '2CH₃COOH + Cu(OH)₂ → (CH₃COO)₂Cu + 2H₂O',
    reagentNames: 'Уксусная кислота + Гидроксид меди(II)',
    productNames: 'Ацетат меди(II) + Вода',
    note: 'Не путайте с реакцией серебряного зеркала — кислоты реагируют с Cu(OH)₂ как обычные кислоты.',
  },
  {
    id: 'car-5',
    group: 'Карбоновые кислоты',
    name: 'Реакция с [Ag(NH₃)₂]OH (не серебряное зеркало!)',
    type: 'Общие свойства кислот',
    reagents: 'CH₃–COOH + [Ag(NH₃)₂]OH',
    catalyst: '',
    condition: '',
    products: 'CH₃COONH₄ + Ag + NH₃',
    full: 'CH₃COOH + [Ag(NH₃)₂]OH → CH₃COONH₄ + Ag + NH₃',
    reagentNames: 'Уксусная кислота + Реактив Толленса',
    productNames: 'Ацетат аммония + Ag + NH₃',
    note: 'Кислота реагирует с [Ag(NH₃)₂]OH как кислота с основанием — это НЕ реакция серебряного зеркала! Серебряное зеркало дают только альдегиды и HCOOH.',
  },
  {
    id: 'car-6',
    group: 'Карбоновые кислоты',
    name: 'РИО с карбонатом натрия',
    type: 'Реакция ионного обмена',
    reagents: '2CH₃–COOH + Na₂CO₃',
    catalyst: '',
    condition: '',
    products: '2CH₃–COONa + CO₂↑ + H₂O',
    full: '2CH₃COOH + Na₂CO₃ → 2CH₃COONa + CO₂↑ + H₂O',
    reagentNames: 'Уксусная кислота + Карбонат натрия',
    productNames: 'Ацетат натрия + CO₂ + Вода',
    note: 'Условие РИО: образование газа (CO₂). Также реагируют с гидрокарбонатами, сульфитами, сульфидами, силикатами.',
  },
  {
    id: 'car-7',
    group: 'Карбоновые кислоты',
    name: 'Этерификация (образование сложного эфира)',
    type: 'Этерификация',
    reagents: 'CH₃–COOH + C₂H₅OH',
    catalyst: 'H₃PO₄',
    condition: 'обратимо',
    products: 'CH₃–COOC₂H₅ + H₂O',
    full: 'CH₃COOH + C₂H₅OH ⇌(H₃PO₄) CH₃COOC₂H₅ + H₂O',
    reagentNames: 'Уксусная кислота + Этанол',
    productNames: 'Этилацетат + Вода',
    note: 'Реакция обратима. Название эфира: [спирт]-[кислота]-ат. Обратная реакция — кислотный гидролиз.',
  },
  {
    id: 'car-8',
    group: 'Карбоновые кислоты',
    name: 'Кислотный гидролиз сложного эфира',
    type: 'Гидролиз',
    reagents: 'CH₃–COOCH₃ + H₂O',
    catalyst: 'HCl (кислая среда)',
    condition: 'обратимо',
    products: 'CH₃–COOH + CH₃OH',
    full: 'CH₃COOCH₃ + H₂O ⇌(HCl) CH₃COOH + CH₃OH',
    reagentNames: 'Метилацетат + Вода',
    productNames: 'Уксусная кислота + Метанол',
    note: 'Кислотный гидролиз — обратимая реакция, обратная этерификации.',
  },
  {
    id: 'car-9',
    group: 'Карбоновые кислоты',
    name: 'Щелочной гидролиз сложного эфира (омыление)',
    type: 'Гидролиз',
    reagents: 'CH₃–COOCH₃ + KOH',
    catalyst: '',
    condition: '',
    products: 'CH₃–COOK + CH₃OH',
    full: 'CH₃COOCH₃ + KOH → CH₃COOK + CH₃OH',
    reagentNames: 'Метилацетат + Гидроксид калия',
    productNames: 'Ацетат калия (соль) + Метанол',
    note: 'Щелочной гидролиз необратим: образуется соль кислоты, а не сама кислота.',
  },
  {
    id: 'car-10',
    group: 'Карбоновые кислоты',
    name: 'Альфа-хлорирование карбоновой кислоты',
    type: 'Замещение',
    reagents: 'CH₃–CH₂–CH₂–COOH + Cl₂',
    catalyst: 'P красн.',
    condition: '',
    products: 'CH₃–CH₂–CHCl–COOH + HCl',
    full: 'CH₃CH₂CH₂COOH + Cl₂ →(P красн.) CH₃CH₂CHClCOOH + HCl',
    reagentNames: 'Масляная кислота + Хлор',
    productNames: '2-Хлормасляная кислота + HCl',
    note: 'В присутствии красного фосфора Cl встаёт к ближайшему к -COOH углероду (альфа-положение).',
  },
  {
    id: 'car-11',
    group: 'Карбоновые кислоты',
    name: 'Особые свойства HCOOH: реакция серебряного зеркала',
    type: 'Качественная реакция',
    reagents: 'HCOOH + 2[Ag(NH₃)₂]OH',
    catalyst: '',
    condition: '',
    products: '(NH₄)₂CO₃ + 2Ag↓ + 2NH₃ + H₂O',
    full: 'HCOOH + 2[Ag(NH₃)₂]OH → (NH₄)₂CO₃ + 2Ag↓ + 2NH₃ + H₂O',
    reagentNames: 'Муравьиная кислота + Реактив Толленса',
    productNames: 'Карбонат аммония + Серебро (зеркало) + NH₃ + Вода',
    note: 'Муравьиная кислота — ЕДИНСТВЕННАЯ кислота, дающая реакцию серебряного зеркала, т.к. содержит альдегидную группу H–C(=O)–.',
  },
  {
    id: 'car-12',
    group: 'Карбоновые кислоты',
    name: 'Особые свойства HCOOH: окисление Cu(OH)₂',
    type: 'Качественная реакция',
    reagents: 'HCOOH + Cu(OH)₂',
    catalyst: 't°',
    condition: '',
    products: 'CO₂ + Cu₂O↓ + H₂O',
    full: 'HCOOH + Cu(OH)₂ →(t°) CO₂ + Cu₂O↓(красный) + H₂O',
    reagentNames: 'Муравьиная кислота + Гидроксид меди(II)',
    productNames: 'CO₂ + Cu₂O (красный осадок) + Вода',
    note: 'Муравьиная кислота обладает свойствами альдегидов: даёт красный осадок Cu₂O при нагревании.',
  },
  {
    id: 'car-13',
    group: 'Карбоновые кислоты',
    name: 'Декарбоксилирование соли (реакция Дюма)',
    type: 'Синтез алкана',
    reagents: 'CH₃COONa + NaOH(тв.)',
    catalyst: 't°',
    condition: '',
    products: 'CH₄ + Na₂CO₃',
    full: 'CH₃COONa + NaOH(тв.) →(t°) CH₄ + Na₂CO₃',
    reagentNames: 'Ацетат натрия + Гидроксид натрия (твёрдый)',
    productNames: 'Метан + Карбонат натрия',
    note: 'Сплавление соли с твёрдой щёлочью. Продукт — алкан с числом C = C кислоты − 1.',
  },
  {
    id: 'car-14',
    group: 'Карбоновые кислоты',
    name: 'Сжигание соли карбоновой кислоты',
    type: 'Горение',
    reagents: '2CH₃COONa + O₂',
    catalyst: 't°',
    condition: '',
    products: 'Na₂CO₃ + 3CO₂ + 2H₂O',
    full: '2CH₃COONa + O₂ →(t°) Na₂CO₃ + 3CO₂ + 2H₂O',
    reagentNames: 'Ацетат натрия + Кислород',
    productNames: 'Карбонат натрия + CO₂ + Вода',
    note: 'Горение солей карбоновых кислот часто встречается в органических задачах ЕГЭ!',
  },
  {
    id: 'car-15',
    group: 'Карбоновые кислоты',
    name: 'Взаимодействие NaOH(тв.) с CO → формиат',
    type: 'Синтез',
    reagents: 'NaOH(тв.) + CO',
    catalyst: '',
    condition: '',
    products: 'HCOONa',
    full: 'NaOH(тв.) + CO → HCOONa',
    reagentNames: 'Гидроксид натрия (твёрдый) + Угарный газ',
    productNames: 'Формиат натрия (муравьинокислый натрий)',
    note: 'Важное исключение: реакция идёт несмотря на то, что CO — несолеобразующий оксид!',
  },
  {
    id: 'car-16',
    group: 'Карбоновые кислоты',
    name: 'Получение соли кислоты из тригалогеналкана + KOH(водн.)',
    type: 'Гидролиз',
    reagents: 'CH₃–CCl₃ + 4KOH(водн.)',
    catalyst: '',
    condition: '',
    products: 'CH₃–COOK + 3KCl + 2H₂O',
    full: 'CH₃CCl₃ + 4KOH(водн.) → CH₃COOK + 3KCl + 2H₂O',
    reagentNames: '1,1,1-Трихлорэтан + KOH водный',
    productNames: 'Ацетат калия + KCl + Вода',
    note: 'Тригалогеналкан + водный KOH → соль кислоты (т.к. среда щелочная).',
  },
  {
    id: 'car-17',
    group: 'Карбоновые кислоты',
    name: 'Получение эфира из соли кислоты + галогеналкан',
    type: 'Синтез эфира',
    reagents: 'CH₃COONa + CH₃Cl',
    catalyst: '',
    condition: '',
    products: 'CH₃COOCH₃ + NaCl',
    full: 'CH₃COONa + CH₃Cl → CH₃COOCH₃ + NaCl',
    reagentNames: 'Ацетат натрия + Хлорметан',
    productNames: 'Метилацетат + Хлорид натрия',
    note: 'Получение сложного эфира обменом: соль кислоты + галогеналкан → эфир + соль металла.',
  },
  {
    id: 'car-18',
    group: 'Карбоновые кислоты',
    name: 'Нейтрализация KOH',
    type: 'Общие свойства кислот',
    reagents: 'CH₃–COOH + KOH',
    catalyst: '',
    condition: '',
    products: 'CH₃–COOK + H₂O',
    full: 'CH₃COOH + KOH → CH₃COOK + H₂O',
    reagentNames: 'Уксусная кислота + Гидроксид калия',
    productNames: 'Ацетат калия + Вода',
    note: 'Отдельный вариант нейтрализации с калием.',
  },
  {
    id: 'car-19',
    group: 'Карбоновые кислоты',
    name: 'Реакция уксусной кислоты с K₂CO₃',
    type: 'Реакция ионного обмена',
    reagents: '2CH₃–COOH + K₂CO₃',
    catalyst: '',
    condition: '',
    products: '2CH₃–COOK + CO₂↑ + H₂O',
    full: '2CH₃COOH + K₂CO₃ → 2CH₃COOK + CO₂↑ + H₂O',
    reagentNames: 'Уксусная кислота + Карбонат калия',
    productNames: 'Ацетат калия + CO₂ + Вода',
    note: 'С карбонатами кислоты дают соль, CO₂ и воду.',
  },
  {
    id: 'car-20',
    group: 'Карбоновые кислоты',
    name: 'Реакция уксусной кислоты с KHCO₃',
    type: 'Реакция ионного обмена',
    reagents: 'CH₃–COOH + KHCO₃',
    catalyst: '',
    condition: '',
    products: 'CH₃–COOK + CO₂↑ + H₂O',
    full: 'CH₃COOH + KHCO₃ → CH₃COOK + CO₂↑ + H₂O',
    reagentNames: 'Уксусная кислота + Гидрокарбонат калия',
    productNames: 'Ацетат калия + CO₂ + Вода',
    note: 'Для гидрокарбонатов также характерно выделение CO₂.',
  },
  {
    id: 'car-21',
    group: 'Карбоновые кислоты',
    name: 'Реакция уксусной кислоты с K₂O',
    type: 'Общие свойства кислот',
    reagents: '2CH₃–COOH + K₂O',
    catalyst: '',
    condition: '',
    products: '2CH₃–COOK + H₂O',
    full: '2CH₃COOH + K₂O → 2CH₃COOK + H₂O',
    reagentNames: 'Уксусная кислота + Оксид калия',
    productNames: 'Ацетат калия + Вода',
    note: 'Вариант реакции кислоты с основным оксидом калия.',
  },
  {
    id: 'car-22',
    group: 'Карбоновые кислоты',
    name: 'Реакция уксусной кислоты с Na₂S',
    type: 'Реакция ионного обмена',
    reagents: '2CH₃–COOH + Na₂S',
    catalyst: '',
    condition: '',
    products: '2CH₃–COONa + H₂S↑',
    full: '2CH₃COOH + Na₂S → 2CH₃COONa + H₂S↑',
    reagentNames: 'Уксусная кислота + Сульфид натрия',
    productNames: 'Ацетат натрия + Сероводород',
    note: 'С сульфидами образуется H₂S (газ).',
  },
  {
    id: 'car-23',
    group: 'Карбоновые кислоты',
    name: 'Реакция муравьиной кислоты с K₂S',
    type: 'Реакция ионного обмена',
    reagents: '2HCOOH + K₂S',
    catalyst: '',
    condition: '',
    products: '2HCOOK + H₂S↑',
    full: '2HCOOH + K₂S → 2HCOOK + H₂S↑',
    reagentNames: 'Муравьиная кислота + Сульфид калия',
    productNames: 'Формиат калия + Сероводород',
    note: 'Аналогичная реакция муравьиной кислоты с сульфидом калия.',
  },
  {
    id: 'car-24',
    group: 'Карбоновые кислоты',
    name: 'Реакция уксусной кислоты с аммиаком',
    type: 'Нейтрализация',
    reagents: 'CH₃–COOH + NH₃',
    catalyst: '',
    condition: '',
    products: 'CH₃–COONH₄',
    full: 'CH₃COOH + NH₃ → CH₃COONH₄',
    reagentNames: 'Уксусная кислота + Аммиак',
    productNames: 'Ацетат аммония',
    note: 'Образуется аммонийная соль карбоновой кислоты.',
  },
  {
    id: 'car-25',
    group: 'Карбоновые кислоты',
    name: 'Реакция муравьиной кислоты с аммиаком',
    type: 'Нейтрализация',
    reagents: 'HCOOH + NH₃',
    catalyst: '',
    condition: '',
    products: 'HCOONH₄',
    full: 'HCOOH + NH₃ → HCOONH₄',
    reagentNames: 'Муравьиная кислота + Аммиак',
    productNames: 'Формиат аммония',
    note: 'Муравьиная кислота образует аммонийную соль — формиат аммония.',
  },

  // ─────────────────── АМИНЫ ───────────────────

  {
    id: 'ami-1',
    group: 'Амины',
    name: 'Взаимодействие с HCl (основные свойства)',
    type: 'Нейтрализация',
    reagents: 'CH₃–NH₂ + HCl',
    catalyst: '',
    condition: '',
    products: '[CH₃–NH₃]Cl',
    full: 'CH₃–NH₂ + HCl → [CH₃–NH₃]Cl',
    reagentNames: 'Метиламин + Хлороводород',
    productNames: 'Хлорид метиламмония',
    note: 'Амины — органические основания. Соли — по аналогии с аммонием: [RNH₃]⁺ или CH₃–NH₃⁺Cl⁻.',
  },
  {
    id: 'ami-2',
    group: 'Амины',
    name: 'Взаимодействие с органической кислотой',
    type: 'Нейтрализация',
    reagents: 'CH₃–NH₂ + CH₃COOH',
    catalyst: '',
    condition: '',
    products: 'CH₃COO[CH₃–NH₃]',
    full: 'CH₃–NH₂ + CH₃COOH → CH₃COO[CH₃NH₃]',
    reagentNames: 'Метиламин + Уксусная кислота',
    productNames: 'Ацетат метиламмония',
    note: 'Амины реагируют как с неорганическими, так и с органическими кислотами.',
  },
  {
    id: 'ami-3',
    group: 'Амины',
    name: 'Взаимодействие первичного амина с HNO₂',
    type: 'Диазотирование',
    reagents: 'CH₃–NH₂ + HNO₂',
    catalyst: '',
    condition: '',
    products: 'CH₃–OH + N₂↑ + H₂O',
    full: 'CH₃–NH₂ + HNO₂ → CH₃–OH + N₂↑ + H₂O',
    reagentNames: 'Метиламин (первичный) + Азотистая кислота',
    productNames: 'Метанол + Азот + Вода',
    note: 'Первичный алифатический амин + HNO₂ → спирт + N₂. Встречается в 1-й и 2-й части ЕГЭ.',
  },
  {
    id: 'ami-4',
    group: 'Амины',
    name: 'Взаимодействие вторичного амина с HNO₂',
    type: 'Нитрозирование',
    reagents: 'CH₃–NH–CH₃ + HNO₂',
    catalyst: '',
    condition: '',
    products: 'CH₃–N(N=O)–CH₃ + H₂O',
    full: 'CH₃NHCH₃ + HNO₂ → CH₃N(N=O)CH₃ + H₂O',
    reagentNames: 'Диметиламин (вторичный) + Азотистая кислота',
    productNames: 'N-Нитрозодиметиламин (жёлтый раствор) + Вода',
    note: 'Вторичный амин + HNO₂ → N-нитрозамин (жёлтый раствор). Встречается в 1-й части ЕГЭ.',
  },
  {
    id: 'ami-5',
    group: 'Амины',
    name: 'Взаимодействие анилина с HNO₂',
    type: 'Диазотирование',
    reagents: 'C₆H₅–NH₂ + HNO₂',
    catalyst: '',
    condition: '',
    products: 'C₆H₅–OH + N₂↑ + H₂O',
    full: 'C₆H₅–NH₂ + HNO₂ → C₆H₅OH + N₂↑ + H₂O',
    reagentNames: 'Анилин + Азотистая кислота',
    productNames: 'Фенол + Азот + Вода',
    note: 'Ароматический первичный амин (анилин) + HNO₂ → фенол + N₂ + H₂O.',
  },
  {
    id: 'ami-6',
    group: 'Амины',
    name: 'Алкилирование амина галогеналканом',
    type: 'Алкилирование',
    reagents: 'CH₃–NH₂ + CH₃Cl',
    catalyst: '',
    condition: '',
    products: '[CH₃–NH₂–CH₃]Cl',
    full: 'CH₃–NH₂ + CH₃Cl → [CH₃NH₂CH₃]Cl',
    reagentNames: 'Метиламин + Хлорметан',
    productNames: 'Хлорид диметиламмония',
    note: 'При алкилировании аминов образуются соли (не свободные амины).',
  },
  {
    id: 'ami-7',
    group: 'Амины',
    name: 'Взаимодействие с водой',
    type: 'Гидролиз (частичный)',
    reagents: 'CH₃–NH₂ + H₂O',
    catalyst: '',
    condition: '',
    products: '[CH₃–NH₃]OH',
    full: 'CH₃–NH₂ + H₂O ⇌ [CH₃–NH₃]OH',
    reagentNames: 'Метиламин + Вода',
    productNames: 'Гидроксид метиламмония',
    note: 'Амины частично гидролизованы в воде (как аммиак). Взаимодействие анилина с водой — спорно в ЕГЭ.',
  },
  {
    id: 'ami-8',
    group: 'Амины',
    name: 'Взаимодействие анилина с бромной водой → белый осадок',
    type: 'Замещение',
    reagents: 'C₆H₅–NH₂ + 3Br₂(водн.)',
    catalyst: '',
    condition: '',
    products: '2,4,6-триброманилин↓ + 3HBr',
    full: 'C₆H₅NH₂ + 3Br₂(водн.) → 2,4,6-C₆H₂Br₃NH₂↓ + 3HBr',
    reagentNames: 'Анилин + Бромная вода',
    productNames: '2,4,6-Триброманилин (белый осадок) + HBr',
    note: 'Группа -NH₂ активирует кольцо — катализатор AlBr₃ НЕ нужен. Качественная реакция на анилин!',
  },
  {
    id: 'ami-9',
    group: 'Амины',
    name: 'Аммонолиз одноатомных спиртов',
    type: 'Аммонолиз',
    reagents: 'CH₃–OH + NH₃',
    catalyst: 'Al₂O₃, t°',
    condition: '',
    products: 'CH₃–NH₂ + H₂O',
    full: 'CH₃OH + NH₃ →(Al₂O₃, t°) CH₃NH₂ + H₂O',
    reagentNames: 'Метанол + Аммиак',
    productNames: 'Метиламин + Вода',
    note: 'Один из способов получения аминов: аммонолиз спиртов.',
  },
  {
    id: 'ami-10',
    group: 'Амины',
    name: 'Гидрирование нитросоединений → амин (Pt)',
    type: 'Восстановление',
    reagents: 'CH₃–NO₂ + 3H₂',
    catalyst: 'Pt, t°',
    condition: '',
    products: 'CH₃–NH₂ + 2H₂O',
    full: 'CH₃NO₂ + 3H₂ →(Pt, t°) CH₃NH₂ + 2H₂O',
    reagentNames: 'Нитрометан + Водород',
    productNames: 'Метиламин + Вода',
    note: 'Нейтральная среда → свободный амин. В кислой среде (Zn/HCl, Fe/HCl) → соль амина!',
  },
  {
    id: 'ami-11',
    group: 'Амины',
    name: 'Восстановление нитросоединений в кислой среде (Zn/HCl)',
    type: 'Восстановление',
    reagents: 'CH₃–NO₂ + Zn + HCl',
    catalyst: '',
    condition: '',
    products: '[CH₃–NH₃]Cl + ZnCl₂ + H₂O',
    full: 'CH₃NO₂ + Zn + HCl → [CH₃NH₃]Cl + ZnCl₂ + H₂O',
    reagentNames: 'Нитрометан + Цинк + HCl',
    productNames: 'Хлорид метиламмония + ZnCl₂ + Вода',
    note: 'Кислая среда (Zn/HCl или Fe/HCl) → соль амина. Высокоактивный атомарный водород выделяется из металла в кислоте.',
  },
  {
    id: 'ami-12',
    group: 'Амины',
    name: 'Взаимодействие галогеналкана с аммиаком',
    type: 'Замещение',
    reagents: 'CH₃–Cl + 2NH₃',
    catalyst: '',
    condition: '',
    products: 'CH₃–NH₂ + NH₄Cl',
    full: 'CH₃Cl + 2NH₃ → CH₃NH₂ + NH₄Cl',
    reagentNames: 'Хлорметан + Аммиак (2 моль)',
    productNames: 'Метиламин + Хлорид аммония',
    note: 'С 1 моль NH₃ → соль [CH₃NH₃]Cl. С 2 моль NH₃ → свободный амин CH₃NH₂ + NH₄Cl.',
  },
];


// ─────────────────────────────────────────────
//  DECKS / STATE / SYNC
// ─────────────────────────────────────────────
const BASE_GROUPS = Array.from(new Set(REACTIONS.map(r => r.group)));
const SPECIAL_DECKS = [
  { id: 'all',       label: 'Все темы' },
  { id: 'favorites', label: 'Избранное' },
  { id: 'deleted',   label: 'Удалённые' },
];
const STORAGE_KEY = 'chem_trainer_v6';

// ── JSONBin sync ──────────────────────────────
const JSONBIN_BASE = 'https://api.jsonbin.io/v3/b';
// Public access key (read/write to own bins only):
const JSONBIN_KEY  = '$2a$10$placeholder_replace_with_real_key';
// ↑ Пользователь должен заменить на свой X-Master-Key с jsonbin.io (бесплатно)

let syncId     = null;   // bin id on jsonbin
let syncStatus = 'idle'; // idle | syncing | ok | error | offline | disabled
let syncPendingTimer = null;

function getSyncParam() {
  try {
    return new URLSearchParams(window.location.search).get('sync') || null;
  } catch { return null; }
}

function setSyncParam(id) {
  try {
    const url = new URL(window.location.href);
    url.searchParams.set('sync', id);
    window.history.replaceState({}, '', url.toString());
  } catch {}
}

function isSyncEnabled() {
  // Sync disabled if placeholder key is still there
  return JSONBIN_KEY && !JSONBIN_KEY.includes('placeholder');
}

async function cloudGet(binId) {
  const r = await fetch(`${JSONBIN_BASE}/${binId}/latest`, {
    headers: { 'X-Master-Key': JSONBIN_KEY }
  });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  const j = await r.json();
  return j.record;
}

async function cloudCreate(data) {
  const r = await fetch(JSONBIN_BASE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': JSONBIN_KEY,
      'X-Bin-Private': 'false',
    },
    body: JSON.stringify(data),
  });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  const j = await r.json();
  return j.metadata.id;
}

async function cloudPut(binId, data) {
  const r = await fetch(`${JSONBIN_BASE}/${binId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': JSONBIN_KEY,
    },
    body: JSON.stringify(data),
  });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
}

function setSyncStatus(s) {
  syncStatus = s;
  const el = document.getElementById('sync-status');
  if (!el) return;
  const icons = { idle: '☁', syncing: '⟳', ok: '✓', error: '!', offline: '✗', disabled: '—' };
  const labels = { idle: 'облако', syncing: 'синхр...', ok: 'синхр.', error: 'ошибка', offline: 'офлайн', disabled: 'без синхр.' };
  el.textContent = icons[s] + ' ' + labels[s];
  el.className = 'sync-indicator sync-' + s;
}

async function syncToCloud(force = false) {
  if (!isSyncEnabled()) { setSyncStatus('disabled'); return; }
  if (syncStatus === 'syncing' && !force) return;
  setSyncStatus('syncing');
  try {
    const payload = serializeState();
    if (!syncId) {
      syncId = await cloudCreate(payload);
      localStorage.setItem(STORAGE_KEY + '_syncid', syncId);
      setSyncParam(syncId);
    } else {
      await cloudPut(syncId, payload);
    }
    setSyncStatus('ok');
  } catch(e) {
    setSyncStatus(navigator.onLine ? 'error' : 'offline');
  }
}

async function syncFromCloud(binId) {
  setSyncStatus('syncing');
  try {
    const remote = await cloudGet(binId);
    if (remote && remote.cards) {
      mergeRemoteState(remote);
      setSyncStatus('ok');
      return true;
    }
    setSyncStatus('error');
    return false;
  } catch(e) {
    setSyncStatus(navigator.onLine ? 'error' : 'offline');
    return false;
  }
}

function serializeState() {
  return {
    cards: state.cards,
    customReactions: state.customReactions,
    favorites: state.favorites,
    deletedReactions: state.deletedReactions,
    streak: state.streak,
    studyMs: getCurrentStudyMs(),
    savedAt: Date.now(),
  };
}

function mergeRemoteState(remote) {
  // Merge: take higher level for each card (never downgrade progress)
  const remoteById = new Map((remote.cards || []).map(c => [c.id, c]));
  state.cards = state.cards.map(local => {
    const rem = remoteById.get(local.id);
    if (!rem) return local;
    return {
      id: local.id,
      level: Math.max(local.level, rem.level),
      dueIn: local.level >= rem.level ? local.dueIn : rem.dueIn,
      seenCount: Math.max(local.seenCount, rem.seenCount),
    };
  });
  // Add cards from remote that don't exist locally
  remoteById.forEach((rem, id) => {
    if (!state.cards.find(c => c.id === id)) state.cards.push(rem);
  });

  // Merge favorites (union)
  const favSet = new Set([...state.favorites, ...(remote.favorites || [])]);
  state.favorites = Array.from(favSet);

  // Merge deleted (union, keep all)
  Object.assign(state.deletedReactions, remote.deletedReactions || {});

  // Merge custom reactions (add missing ones)
  const localCustomIds = new Set(state.customReactions.map(r => r.id));
  (remote.customReactions || []).forEach(r => {
    if (!localCustomIds.has(r.id)) state.customReactions.push(r);
  });

  // Streak: take max
  state.streak = Math.max(state.streak || 0, remote.streak || 0);

  // Study time: take max
  if ((remote.studyMs || 0) > studyElapsedMs) {
    studyElapsedMs = remote.studyMs;
  }

  saveState();
  clearQueues();
  renderDeckButtons();
  renderBottomNav();
  setActiveDeck(currentDeck);
  updateStats();
  updateClassProgress();
  renderStudyTimer();
}

// Schedule a cloud push 2s after last change (debounce)
function scheduleSyncPush() {
  if (!isSyncEnabled() || !syncId) return;
  if (syncPendingTimer) clearTimeout(syncPendingTimer);
  syncPendingTimer = setTimeout(() => syncToCloud(), 2000);
}

// ── LocalStorage ──────────────────────────────
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return null;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function defaultCardState(id) {
  return { id, level: 0, dueIn: 0, seenCount: 0 };
}

function initState() {
  const saved = loadState() || {};
  const customReactions = Array.isArray(saved.customReactions) ? saved.customReactions : [];
  const allReactions = [...REACTIONS, ...customReactions];
  const savedCards = Array.isArray(saved.cards) ? saved.cards : [];
  const cardById = new Map(savedCards.map(c => [c.id, c]));

  return {
    cards: allReactions.map(r => {
      const old = cardById.get(r.id);
      if (!old) return defaultCardState(r.id);
      return {
        id: r.id,
        level:     typeof old.level     === 'number' ? old.level     : 0,
        dueIn:     typeof old.dueIn     === 'number' ? old.dueIn     : 0,
        seenCount: typeof old.seenCount === 'number' ? old.seenCount : 0,
      };
    }),
    customReactions,
    favorites:        Array.isArray(saved.favorites) ? saved.favorites : [],
    deletedReactions: (saved.deletedReactions && typeof saved.deletedReactions === 'object') ? saved.deletedReactions : {},
    queueByDeck:      (saved.queueByDeck      && typeof saved.queueByDeck      === 'object') ? saved.queueByDeck      : {},
    lastShownByDeck:  (saved.lastShownByDeck  && typeof saved.lastShownByDeck  === 'object') ? saved.lastShownByDeck  : {},
    streak:           typeof saved.streak === 'number' ? saved.streak : 0,
  };
}

let state = initState();

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getAllReactions() {
  return [...REACTIONS, ...state.customReactions];
}
function getReactionById(id) {
  return getAllReactions().find(r => r.id === id) || null;
}
function isDeleted(id) {
  return !!state.deletedReactions[id];
}
function isSpecialDeck(deckId) {
  return deckId === 'all' || deckId === 'favorites' || deckId === 'deleted';
}
function getVisibleGroups() {
  const groupSet = new Set(BASE_GROUPS);
  state.customReactions.forEach(r => { if (!isDeleted(r.id)) groupSet.add(r.group); });
  return Array.from(groupSet);
}
function getDecks() {
  return [
    ...SPECIAL_DECKS,
    ...getVisibleGroups().map(g => ({ id: g, label: g })),
  ];
}
function deckLabel(deckId) {
  const d = getDecks().find(x => x.id === deckId);
  return d ? d.label : deckId;
}
function deckReactionIds(deckId) {
  if (deckId === 'deleted') return Object.keys(state.deletedReactions);
  const active = getAllReactions().filter(r => !isDeleted(r.id));
  if (deckId === 'all')       return active.map(r => r.id);
  if (deckId === 'favorites') return state.favorites.filter(id => !isDeleted(id) && !!getReactionById(id));
  return active.filter(r => r.group === deckId).map(r => r.id);
}
function getCardState(id) {
  let card = state.cards.find(c => c.id === id);
  if (!card) { card = defaultCardState(id); state.cards.push(card); }
  return card;
}
function clearQueues() {
  state.queueByDeck = {};
}

function deckPercent(deckId) {
  if (isSpecialDeck(deckId)) return null;
  const ids = deckReactionIds(deckId);
  if (ids.length === 0) return 0;
  const learned = ids.filter(id => getCardState(id).level === 2).length;
  return Math.round(learned / ids.length * 100);
}

// ── Queue / Pick ──────────────────────────────
function rebuildDeckQueue(deckId) {
  const ids = deckReactionIds(deckId);
  if (ids.length === 0) return [];
  if (deckId === 'deleted') return shuffle(ids);
  const notDone = ids.filter(id => getCardState(id).level < 2);
  if (notDone.length === 0) return [];
  const weighted = [];
  notDone.forEach(id => {
    const cs = getCardState(id);
    const weight = cs.level === 0 ? 4 : 2;
    for (let i = 0; i < weight; i++) weighted.push(id);
  });
  return shuffle(weighted);
}

function pickNext(deckId) {
  const dId = deckId || 'all';
  if (typeof state.lastShownByDeck[dId] === 'undefined') state.lastShownByDeck[dId] = null;
  if (!Array.isArray(state.queueByDeck[dId]) || state.queueByDeck[dId].length === 0) {
    state.queueByDeck[dId] = rebuildDeckQueue(dId);
  }
  while (state.queueByDeck[dId].length > 0) {
    const nextId = state.queueByDeck[dId].shift();
    const reaction = getReactionById(nextId);
    if (!reaction) continue;
    if (dId !== 'deleted' && isDeleted(nextId)) continue;
    if (dId !== 'deleted') {
      const cs = getCardState(nextId);
      if (cs.level >= 2) continue;
      if (cs.dueIn > 0) { cs.dueIn--; continue; }
    }
    if (nextId === state.lastShownByDeck[dId] && state.queueByDeck[dId].length > 0) {
      state.queueByDeck[dId].push(nextId);
      continue;
    }
    return reaction;
  }
  state.queueByDeck[dId] = rebuildDeckQueue(dId);
  if (state.queueByDeck[dId].length === 0) return null;
  return pickNext(dId);
}

// ─────────────────────────────────────────────
//  UI ELEMENTS
// ─────────────────────────────────────────────
const $ = id => document.getElementById(id);

const cardEl         = $('card');
const doneCard       = $('done-card');
const cardGroup      = $('card-group');
const cardNum        = $('card-num');
const reactionName   = $('reaction-name');
const equationDisp   = $('equation-display');
const catalystLbl    = $('catalyst-label');
const conditionLbl   = $('condition-label');
const productsZone   = $('products-zone');
const answerSection  = $('answer-section');
const solutionSec    = $('solution-section');
const showBtn        = $('show-btn');
const userAnswer     = $('user-answer');
const fullEq         = $('full-equation');
const detReagents    = $('detail-reagents');
const detProducts    = $('detail-products');
const detCatalyst    = $('detail-catalyst');
const detType        = $('detail-type');
const noteBox        = $('note-box');
const noteText       = $('note-text');
const progressBar    = $('progress-bar');
const sidebarButtonsEl = $('sidebar-buttons');
const doneTitleEl    = $('done-title');
const doneTextEl     = $('done-text');
const stepsBtn       = $('steps-btn');
const stepsModal     = $('steps-modal');
const stepsBackdrop  = $('steps-backdrop');
const stepsClose     = $('steps-close');
const stepsTitle     = $('steps-title');
const stepsList      = $('steps-list');
const favoriteBtn    = $('favorite-btn');
const deleteBtn      = $('delete-btn');
const addReactionBtn = $('add-reaction-btn');
const knowSection    = document.querySelector('.know-section');
const weakPanel      = $('weak-panel');
const weakList       = $('weak-list');
const deckProgressWrap  = $('deck-progress-wrap');
const deckProgressBar   = $('deck-progress-bar');
const deckProgressLabel = $('deck-progress-label');

// Multi-target elements
const statLearnedEls  = [$('stat-learned-d'), $('stat-learned-m'), $('sm-learned')].filter(Boolean);
const statWeakEls     = [$('stat-weak-d'),    $('stat-weak-m'),    $('sm-weak')].filter(Boolean);
const statTotalEls    = [$('stat-total-d'),   $('stat-total-m'),   $('sm-total')].filter(Boolean);
const studyTimerEls   = [$('study-timer-d'),  $('study-timer-m'),  $('sm-timer')].filter(Boolean);
const streakEls       = [$('streak-d'), $('streak-m')].filter(Boolean);
const deckPctEl       = $('deck-pct');
const mobileDeckName  = $('mobile-deck-name');

const resetButtons    = [$('reset-btn'), $('reset-btn-m'), $('sm-reset-btn')].filter(Boolean);
const restartBtn      = $('restart-btn');

// Mobile modals
const statsModal     = $('stats-modal');
const statsBackdrop  = $('stats-backdrop');
const statsClose     = $('stats-close');
const deckModal      = $('deck-modal');
const deckBackdrop   = $('deck-backdrop');
const deckClose      = $('deck-close');
const deckModalList  = $('deck-modal-list');
const classProgressList = $('class-progress-list');

let currentReaction = null;
let currentDeck = 'all';
let sidebarBtns = [];
let studyElapsedMs = 0;
let studyLastStartTs = null;
let studyTimerInterval = null;

// ── Timer ──────────────────────────────────────
function formatStudyTime(ms) {
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600).toString().padStart(2, '0');
  const m = Math.floor((totalSec % 3600) / 60).toString().padStart(2, '0');
  const s = Math.floor(totalSec % 60).toString().padStart(2, '0');
  // On mobile show HH:MM, on desktop HH:MM:SS
  return `${h}:${m}:${s}`;
}
function getCurrentStudyMs() {
  if (studyLastStartTs === null) return studyElapsedMs;
  return studyElapsedMs + (Date.now() - studyLastStartTs);
}
function renderStudyTimer() {
  const v = formatStudyTime(getCurrentStudyMs());
  studyTimerEls.forEach(el => { el.textContent = v; });
}
function startStudyTimer() {
  if (studyLastStartTs !== null) return;
  studyLastStartTs = Date.now();
  if (!studyTimerInterval) studyTimerInterval = setInterval(renderStudyTimer, 1000);
  renderStudyTimer();
}
function pauseStudyTimer() {
  if (studyLastStartTs === null) return;
  studyElapsedMs += Date.now() - studyLastStartTs;
  studyLastStartTs = null;
  renderStudyTimer();
}
function handleVisibilityChange() {
  if (document.hidden) pauseStudyTimer(); else startStudyTimer();
}

// ── Streak ─────────────────────────────────────
function renderStreak() {
  const v = state.streak || 0;
  streakEls.forEach(el => { el.textContent = `🔥 ${v}`; });
  const chipD = $('streak-chip-d');
  if (chipD) chipD.classList.toggle('active', v >= 3);
  // Bump animation on mobile
  const mBadge = $('streak-m');
  if (mBadge) {
    mBadge.classList.remove('bump');
    void mBadge.offsetHeight;
    mBadge.classList.add('bump');
    setTimeout(() => mBadge.classList.remove('bump'), 300);
  }
}

// ── Stats / Progress ──────────────────────────
function updateStats() {
  const activeIds = getAllReactions().filter(r => !isDeleted(r.id)).map(r => r.id);
  const learned = activeIds.filter(id => getCardState(id).level === 2).length;
  const weak    = activeIds.filter(id => getCardState(id).level === 1).length;
  const total   = activeIds.length;

  statLearnedEls.forEach(el => { el.textContent = learned; });
  statWeakEls.forEach(el =>    { el.textContent = weak; });
  statTotalEls.forEach(el =>   { el.textContent = total; });
  progressBar.style.width = total > 0 ? (learned / total * 100).toFixed(1) + '%' : '0%';

  // Deck % in mobile stat bar
  const pct = isSpecialDeck(currentDeck) ? null : deckPercent(currentDeck);
  if (deckPctEl) deckPctEl.textContent = pct !== null ? pct + '%' : '—';

  // Update deck progress bar inside card
  updateDeckProgressBar();

  updateSidebarCounts();
  updateClassProgress();
  renderStreak();
}

function updateDeckProgressBar() {
  if (!deckProgressWrap) return;
  if (isSpecialDeck(currentDeck)) {
    deckProgressWrap.style.display = 'none';
    return;
  }
  const pct = deckPercent(currentDeck);
  deckProgressWrap.style.display = 'flex';
  deckProgressBar.style.setProperty('--pct', pct + '%');
  deckProgressLabel.textContent = pct + '%';
}

function updateSidebarCounts() {
  if (!sidebarBtns || sidebarBtns.length === 0) return;
  sidebarBtns.forEach(btn => {
    const deckId = btn.dataset.deckId;
    const ids    = deckReactionIds(deckId);
    const total  = ids.length;
    const learned = deckId === 'deleted' ? 0 : ids.filter(id => getCardState(id).level === 2).length;

    const meta = btn.querySelector('.sidebar-btn-meta');
    if (meta) {
      if (deckId === 'deleted') {
        meta.textContent = `${total}`;
      } else {
        const pct = total > 0 ? Math.round(learned / total * 100) : 0;
        meta.textContent = `${learned}/${total} · ${pct}%`;
      }
    }

    // Mini progress bar fill
    const fill = btn.querySelector('.sidebar-progress-fill');
    if (fill && total > 0 && deckId !== 'deleted') {
      const pct = Math.round(learned / total * 100);
      fill.style.width = pct + '%';
    }
  });
}

function updateClassProgress() {
  if (!classProgressList) return;
  classProgressList.innerHTML = '';
  getVisibleGroups().forEach(group => {
    const ids     = deckReactionIds(group);
    const total   = ids.length;
    const learned = ids.filter(id => getCardState(id).level === 2).length;
    const weak    = ids.filter(id => getCardState(id).level === 1).length;
    const pct     = total > 0 ? Math.round(learned / total * 100) : 0;

    const item = document.createElement('div');
    item.className = 'class-progress-item';
    item.innerHTML = `
      <div class="cpi-label">${group}</div>
      <div class="cpi-bar-wrap">
        <div class="cpi-bar" style="width:${pct}%"></div>
      </div>
      <div class="cpi-pct">${pct}%</div>
    `;
    classProgressList.appendChild(item);
  });
}

// ── Sidebar ─────────────────────────────────────
function renderDeckButtons() {
  if (!sidebarButtonsEl) return;
  sidebarButtonsEl.innerHTML = '';
  sidebarBtns = [];

  getDecks().forEach(d => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'sidebar-btn';
    btn.dataset.deckId = d.id;

    const label = document.createElement('span');
    label.className = 'sidebar-btn-label';
    label.textContent = d.label;

    const meta = document.createElement('span');
    meta.className = 'sidebar-btn-meta';
    meta.textContent = '0/0';

    btn.appendChild(label);
    btn.appendChild(meta);

    // Mini progress bar for topic decks
    if (!isSpecialDeck(d.id)) {
      const progWrap = document.createElement('div');
      progWrap.className = 'sidebar-progress';
      const progFill = document.createElement('div');
      progFill.className = 'sidebar-progress-fill';
      progFill.style.width = '0%';
      progWrap.appendChild(progFill);
      btn.appendChild(progWrap);
    }

    btn.addEventListener('click', () => switchDeck(d.id));
    sidebarButtonsEl.appendChild(btn);
    sidebarBtns.push(btn);
  });
}

function setActiveDeck(deckId) {
  sidebarBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.deckId === deckId);
  });
  if (mobileDeckName) mobileDeckName.textContent = deckLabel(deckId);
}

// ── Bottom nav (mobile) ──────────────────────
function renderBottomNav() {
  const container = $('bottom-nav-decks');
  if (!container) return;
  container.innerHTML = '';

  const ICONS = {
    all: '📚', favorites: '⭐', deleted: '🗑',
    Алканы: '⛽', Алкены: '🔗', Алкины: '⚡',
    Диены: '🌀', Циклоалканы: '⭕', Арены: '🔯',
    Спирты: '🍺', 'Альдегиды и кетоны': '🧪',
    'Карбоновые кислоты': '🧴', Амины: '🧬',
  };

  getDecks().forEach(d => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'bnav-btn';
    btn.dataset.deckId = d.id;

    const icon = document.createElement('span');
    icon.className = 'bnav-btn-icon';
    icon.textContent = ICONS[d.id] || '📋';

    const lbl = document.createElement('span');
    // Shorter label for bottom nav
    const short = d.label.replace('Карбоновые кислоты', 'Кислоты')
      .replace('Альдегиды и кетоны', 'Альдегиды')
      .replace('Циклоалканы', 'Цикло')
      .replace('Избранное', 'Избр.')
      .replace('Удалённые', 'Удал.');
    lbl.textContent = short;
    lbl.style.fontSize = '10px';

    const count = document.createElement('span');
    count.className = 'bnav-btn-count';
    const ids = deckReactionIds(d.id);
    const total = ids.length;
    if (!isSpecialDeck(d.id) && total > 0) {
      const learned = ids.filter(id => getCardState(id).level === 2).length;
      const pct = Math.round(learned / total * 100);
      count.textContent = pct + '%';
    } else {
      count.textContent = total + '';
    }

    btn.appendChild(icon);
    btn.appendChild(lbl);
    btn.appendChild(count);
    btn.classList.toggle('active', d.id === currentDeck);
    btn.addEventListener('click', () => { switchDeck(d.id); closeDeckModal(); });
    container.appendChild(btn);
  });
}

function updateBottomNav() {
  const container = $('bottom-nav-decks');
  if (!container) return;
  container.querySelectorAll('.bnav-btn').forEach(btn => {
    const deckId = btn.dataset.deckId;
    btn.classList.toggle('active', deckId === currentDeck);
    const countEl = btn.querySelector('.bnav-btn-count');
    if (countEl) {
      const ids   = deckReactionIds(deckId);
      const total = ids.length;
      if (!isSpecialDeck(deckId) && total > 0) {
        const learned = ids.filter(id => getCardState(id).level === 2).length;
        countEl.textContent = Math.round(learned / total * 100) + '%';
      } else {
        countEl.textContent = total + '';
      }
    }
  });
}

// ── Card actions ──────────────────────────────
function updateActionButtons() {
  const canAddInDeck = !isSpecialDeck(currentDeck);
  if (addReactionBtn) addReactionBtn.classList.toggle('hidden', !canAddInDeck);

  if (!currentReaction) return;
  favoriteBtn.classList.toggle('active', state.favorites.includes(currentReaction.id));

  if (currentDeck === 'deleted') {
    deleteBtn.textContent = '↺';
    deleteBtn.title = 'Восстановить реакцию';
    if (showBtn) showBtn.classList.add('hidden');
    answerSection.classList.add('hidden');
    solutionSec.classList.remove('hidden');
    if (knowSection) knowSection.classList.add('hidden');
  } else {
    deleteBtn.textContent = '✕';
    deleteBtn.title = 'Удалить реакцию';
    if (showBtn) showBtn.classList.remove('hidden');
    if (knowSection) knowSection.classList.remove('hidden');
  }
}

function showDoneForDeck(deckId) {
  solutionSec.classList.add('hidden');
  answerSection.classList.add('hidden');
  cardEl.classList.add('hidden');
  doneCard.classList.remove('hidden');
  if (weakPanel) weakPanel.style.display = 'none';

  if (deckId === 'all') {
    doneTitleEl.textContent = 'Все реакции выучены!';
    doneTextEl.textContent  = 'Вы прошли весь текущий набор. Отличная работа!';
  } else if (deckId === 'favorites') {
    doneTitleEl.textContent = 'Избранное пусто или выучено';
    doneTextEl.textContent  = 'Добавьте реакции в избранное через кнопку △ на карточке.';
  } else if (deckId === 'deleted') {
    doneTitleEl.textContent = 'Удалённых реакций нет';
    doneTextEl.textContent  = 'Если удалите реакцию, она появится здесь и её можно восстановить.';
  } else {
    doneTitleEl.textContent = `Тема "${deckLabel(deckId)}" выучена!`;
    doneTextEl.textContent  = 'Вы прошли всю колоду по теме. Отличная работа!';
  }
}

function switchDeck(deckId) {
  if (!getDecks().some(d => d.id === deckId)) deckId = 'all';
  if (deckId === currentDeck) return;
  currentDeck = deckId;
  setActiveDeck(deckId);

  const next = pickNext(deckId);
  if (next) showCard(next);
  else showDoneForDeck(deckId);

  updateActionButtons();
  updateSidebarCounts();
  updateBottomNav();
  updateStats();
  saveState();
}

function groupTagClass(group) {
  const map = {
    'Алканы': 'tag-алканы', 'Алкены': 'tag-алкены', 'Алкины': 'tag-алкины',
    'Диены': 'tag-диены', 'Циклоалканы': 'tag-циклоалканы', 'Арены': 'tag-арены',
    'Спирты': 'tag-спирты', 'Альдегиды и кетоны': 'tag-альдегиды',
    'Карбоновые кислоты': 'tag-кислоты', 'Амины': 'tag-амины',
  };
  return map[group] || 'tag-алканы';
}

function showCard(reaction) {
  currentReaction = reaction;
  state.lastShownByDeck[currentDeck] = reaction.id;

  solutionSec.classList.add('hidden');
  answerSection.classList.remove('hidden');
  userAnswer.value = '';

  cardGroup.textContent = reaction.group;
  cardGroup.className = 'tag ' + groupTagClass(reaction.group);
  const deckIds = deckReactionIds(currentDeck);
  const idx = deckIds.findIndex(id => id === reaction.id) + 1;
  cardNum.textContent = `${idx > 0 ? idx : 1} / ${deckIds.length}`;
  reactionName.textContent = reaction.name;

  equationDisp.textContent = reaction.reagents;
  catalystLbl.textContent  = currentDeck === 'deleted' ? (reaction.catalyst || '—') : '?';
  conditionLbl.textContent = reaction.condition || '';
  productsZone.innerHTML   = currentDeck === 'deleted' ? reaction.products : '<span class="placeholder">?</span>';

  cardEl.style.animation = 'none';
  cardEl.offsetHeight; // reflow
  cardEl.style.animation = '';
  cardEl.classList.remove('hidden');
  doneCard.classList.add('hidden');

  // Weak spots panel for topic decks
  updateWeakPanel();
  updateDeckProgressBar();
  updateActionButtons();
  if (currentDeck === 'deleted') showSolution();
  saveState();
}

function updateWeakPanel() {
  if (!weakPanel) return;
  if (isSpecialDeck(currentDeck)) { weakPanel.style.display = 'none'; return; }

  const ids = deckReactionIds(currentDeck);
  const weakIds = ids.filter(id => getCardState(id).level < 2 && getCardState(id).seenCount > 0);
  const problemIds = weakIds.sort((a, b) => getCardState(a).level - getCardState(b).level).slice(0, 5);

  if (problemIds.length === 0) { weakPanel.style.display = 'none'; return; }

  weakPanel.style.display = 'block';
  weakList.innerHTML = '';
  problemIds.forEach(id => {
    const r  = getReactionById(id);
    const cs = getCardState(id);
    if (!r) return;
    const item = document.createElement('div');
    item.className = 'weak-item';
    item.innerHTML = `
      <div class="weak-item-dot level${cs.level}"></div>
      <span>${r.name} <small style="color:var(--text3)">${r.group}</small></span>
    `;
    weakList.appendChild(item);
  });
}

function showSolution() {
  const r = currentReaction;
  if (!r) return;
  solutionSec.classList.remove('hidden');
  answerSection.classList.add('hidden');
  productsZone.textContent = r.products;

  fullEq.textContent       = r.full;
  detReagents.textContent  = r.reagentNames;
  detProducts.textContent  = r.productNames;
  detCatalyst.textContent  = r.catalyst || '— не требуется';
  detType.textContent      = r.type;

  if (r.note) { noteBox.style.display = 'flex'; noteText.textContent = r.note; }
  else          noteBox.style.display = 'none';
}

function handleKnow(level) {
  if (!currentReaction || currentDeck === 'deleted') return;
  const cs = getCardState(currentReaction.id);
  cs.level = level;
  cs.seenCount++;

  if (level === 0)      cs.dueIn = 1;
  else if (level === 1) cs.dueIn = 3;
  else                  cs.dueIn = 99999;

  // Streak
  if (level === 2) {
    state.streak = (state.streak || 0) + 1;
  } else {
    state.streak = 0;
  }
  renderStreak();

  const deckIds = deckReactionIds(currentDeck);
  const learnedInDeck = deckIds.filter(id => getCardState(id).level === 2).length;
  if (deckIds.length > 0 && learnedInDeck === deckIds.length) {
    updateStats();
    updateBottomNav();
    showDoneForDeck(currentDeck);
    saveState();
    scheduleSyncPush();
    return;
  }

  updateStats();
  updateBottomNav();
  const next = pickNext(currentDeck);
  if (next) showCard(next);
  else showDoneForDeck(currentDeck);
  saveState();
  scheduleSyncPush();
}

function toggleFavorite() {
  if (!currentReaction || currentDeck === 'deleted') return;
  const id  = currentReaction.id;
  const idx = state.favorites.indexOf(id);
  if (idx >= 0) state.favorites.splice(idx, 1);
  else          state.favorites.push(id);
  clearQueues();
  updateActionButtons();
  updateSidebarCounts();
  updateBottomNav();
  saveState();
  scheduleSyncPush();
}

function removeReaction() {
  if (!currentReaction || currentDeck === 'deleted') return;
  const reason = prompt('Причина удаления реакции (необязательно):', 'неактуально') || '';
  state.deletedReactions[currentReaction.id] = { reason: reason.trim(), deletedAt: Date.now() };
  clearQueues();
  renderDeckButtons();
  renderBottomNav();
  setActiveDeck(currentDeck);
  updateStats();
  const next = pickNext(currentDeck);
  if (next) showCard(next);
  else showDoneForDeck(currentDeck);
  saveState();
  scheduleSyncPush();
}

function restoreReaction() {
  if (!currentReaction || currentDeck !== 'deleted') return;
  delete state.deletedReactions[currentReaction.id];
  clearQueues();
  renderDeckButtons();
  renderBottomNav();
  if (!getDecks().some(d => d.id === currentDeck)) currentDeck = 'all';
  setActiveDeck(currentDeck);
  updateStats();
  const next = pickNext(currentDeck);
  if (next) showCard(next);
  else showDoneForDeck(currentDeck);
  saveState();
  scheduleSyncPush();
}

function normalizeReactionInput(input) {
  return {
    id: input.id, group: input.group, name: input.name, type: input.type,
    reagents: input.reagents, catalyst: input.catalyst || '', condition: input.condition || '',
    products: input.products, full: input.full,
    reagentNames: input.reagentNames, productNames: input.productNames, note: input.note || '',
  };
}
function promptRequired(label, placeholder) {
  const value = prompt(`${label}\nПример: ${placeholder}`);
  if (value === null) return null;
  const trimmed = value.trim();
  return trimmed ? trimmed : '';
}
function addReactionFromDeck() {
  const groups = getVisibleGroups();
  const defaultGroup = !isSpecialDeck(currentDeck) ? currentDeck : groups[0];
  const groupListText = groups.map((g, i) => `${i + 1}. ${g}`).join('\n');
  const groupChoiceRaw = prompt(`Выбери раздел (номер или название):\n${groupListText}`, defaultGroup);
  if (groupChoiceRaw === null) return;
  const groupChoice = groupChoiceRaw.trim();
  const byNumber = Number(groupChoice);
  const group = Number.isInteger(byNumber) && byNumber >= 1 && byNumber <= groups.length
    ? groups[byNumber - 1] : groupChoice;
  if (!group) return alert('Нужно выбрать раздел.');

  const draft = {
    id: `usr-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    group,
    name:         promptRequired('Название реакции', 'Гидратация пропена'),
    type:         promptRequired('Тип реакции', 'Присоединение'),
    reagents:     promptRequired('Реагенты (левая часть)', 'CH₃–CH=CH₂ + H₂O'),
    catalyst:     prompt('Катализатор / условия над стрелкой (можно пусто)', 'H₃PO₄') || '',
    condition:    prompt('Условие под стрелкой (можно пусто)', 't°') || '',
    products:     promptRequired('Продукты (правая часть)', 'CH₃–CH(OH)–CH₃'),
    full:         promptRequired('Полное уравнение', 'CH₃–CH=CH₂ + H₂O →(H₃PO₄) CH₃–CH(OH)–CH₃'),
    reagentNames: promptRequired('Названия реагентов', 'Пропен + Вода'),
    productNames: promptRequired('Названия продуктов', 'Пропанол-2'),
    note:         prompt('Подсказка / заметка (можно пусто)', ''),
  };

  const required = ['name','type','reagents','products','full','reagentNames','productNames'];
  if (required.some(k => !draft[k])) { alert('Реакция не добавлена: обязательные поля пустые.'); return; }

  const reaction = normalizeReactionInput(draft);
  state.customReactions.push(reaction);
  state.cards.push(defaultCardState(reaction.id));
  clearQueues();
  renderDeckButtons();
  renderBottomNav();
  setActiveDeck(currentDeck);
  updateStats();
  saveState();
  scheduleSyncPush();
  alert('Реакция добавлена!');
}

function resetProgress() {
  const choice = prompt(
    'Что сбросить?\n1 — прогресс обучения\n2 — избранное\n3 — удалённые\n4 — добавленные реакции\n5 — всё сразу\n\nМожно несколько: 1,2', '5'
  );
  if (choice === null) return;
  const tokens = choice.split(',').map(x => x.trim()).filter(Boolean);
  if (tokens.length === 0) return;
  const sel = new Set(tokens);
  const all = sel.has('5');
  const rL = all || sel.has('1');
  const rF = all || sel.has('2');
  const rD = all || sel.has('3');
  const rC = all || sel.has('4');
  const valid = ['1','2','3','4','5'];
  if ([...sel].some(x => !valid.includes(x))) { alert('Неверный выбор: используй 1–5.'); return; }
  if (!rL && !rF && !rD && !rC) return;

  if (rC) {
    const customIds = new Set(state.customReactions.map(r => r.id));
    state.customReactions = [];
    state.cards = state.cards.filter(c => !customIds.has(c.id));
    state.favorites = state.favorites.filter(id => !customIds.has(id));
    Object.keys(state.deletedReactions).forEach(id => { if (customIds.has(id)) delete state.deletedReactions[id]; });
  }
  if (rD) state.deletedReactions = {};
  if (rF) state.favorites = [];
  if (rL) { state.cards = state.cards.map(c => ({ id: c.id, level: 0, dueIn: 0, seenCount: 0 })); state.streak = 0; }

  clearQueues();
  state.lastShownByDeck = {};
  currentDeck = 'all';
  renderDeckButtons();
  renderBottomNav();
  setActiveDeck(currentDeck);
  doneCard.classList.add('hidden');
  cardEl.classList.remove('hidden');
  updateStats();
  const first = pickNext(currentDeck);
  if (first) showCard(first);
  else showDoneForDeck(currentDeck);
  saveState();
  scheduleSyncPush();
}

function openStepsModal() {
  const ids = deckReactionIds(currentDeck);
  stepsTitle.textContent = `Колода: ${deckLabel(currentDeck)}`;
  stepsList.innerHTML = '';
  ids.forEach((id, idx) => {
    const r = getReactionById(id);
    if (!r) return;
    const li = document.createElement('li');
    if (currentDeck === 'deleted') {
      const reason = state.deletedReactions[id]?.reason || 'без причины';
      li.textContent = `${idx + 1}. ${r.name} — причина: ${reason}`;
    } else {
      const cs = getCardState(id);
      const dot = cs.level === 2 ? '✓' : cs.level === 1 ? '~' : cs.seenCount > 0 ? '✗' : '·';
      li.textContent = `${dot} ${idx + 1}. ${r.name}`;
    }
    if (currentReaction && r.id === currentReaction.id) li.classList.add('current');
    stepsList.appendChild(li);
  });
  stepsModal.classList.remove('hidden');
}
function closeStepsModal() { stepsModal.classList.add('hidden'); }

// ── Mobile Modals ─────────────────────────────
function openStatsModal() {
  updateClassProgress();
  const el = $('sm-learned');
  if (el) el.textContent = statLearnedEls[0]?.textContent || '0';
  if (statsModal) statsModal.classList.remove('hidden');
}
function closeStatsModal() { if (statsModal) statsModal.classList.add('hidden'); }

function openDeckModal() {
  if (!deckModalList) return;
  deckModalList.innerHTML = '';
  getDecks().forEach(d => {
    const ids    = deckReactionIds(d.id);
    const total  = ids.length;
    const learned = isSpecialDeck(d.id) ? 0 : ids.filter(id => getCardState(id).level === 2).length;
    const pct    = total > 0 && !isSpecialDeck(d.id) ? Math.round(learned / total * 100) : 0;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'deck-modal-btn' + (d.id === currentDeck ? ' active' : '');
    btn.innerHTML = `
      <span class="dmb-name">${d.label}</span>
      <span class="dmb-meta">
        <span class="dmb-count">${isSpecialDeck(d.id) ? total : `${learned}/${total} · ${pct}%`}</span>
        ${!isSpecialDeck(d.id) ? `<div class="dmb-bar-wrap"><div class="dmb-bar" style="width:${pct}%"></div></div>` : ''}
      </span>
    `;
    btn.addEventListener('click', () => { switchDeck(d.id); closeDeckModal(); });
    deckModalList.appendChild(btn);
  });
  if (deckModal) deckModal.classList.remove('hidden');
}
function closeDeckModal() { if (deckModal) deckModal.classList.add('hidden'); }

// ── Sync UI helpers ───────────────────────────
function buildSyncSection() {
  // Inject sync indicator and share button into both headers
  const targets = [
    document.querySelector('.stats-bar'),
    document.querySelector('.mobile-header-right'),
  ];

  const indicator = document.createElement('div');
  indicator.id = 'sync-status';
  indicator.className = 'sync-indicator sync-idle';
  indicator.textContent = '☁ облако';
  indicator.title = 'Статус синхронизации';
  indicator.style.cursor = 'pointer';
  indicator.addEventListener('click', () => openSyncModal());

  if (targets[0]) targets[0].insertBefore(indicator, targets[0].querySelector('.reset-btn'));

  const indicatorM = indicator.cloneNode(true);
  indicatorM.id = 'sync-status-m';
  indicatorM.addEventListener('click', () => openSyncModal());
  if (targets[1]) targets[1].insertBefore(indicatorM, targets[1].querySelector('.reset-btn-sm'));

  // Inject sync modal
  const modal = document.createElement('div');
  modal.id = 'sync-modal';
  modal.className = 'modal hidden';
  modal.innerHTML = `
    <div class="modal-backdrop" id="sync-backdrop"></div>
    <div class="modal-card" style="width:min(420px,100%)">
      <div class="modal-head">
        <div class="modal-title">☁ Синхронизация прогресса</div>
        <button class="modal-close" id="sync-close" type="button">×</button>
      </div>
      <div style="padding:18px;display:flex;flex-direction:column;gap:14px">
        <p style="font-size:13px;color:var(--text2);line-height:1.6">
          Синхронизация позволяет работать с одним прогрессом на разных устройствах (ПК + телефон).
          Использует <b style="color:var(--text)">JSONBin.io</b> (бесплатно).
        </p>

        <div id="sync-setup-block">
          <div class="section-label" style="margin-bottom:8px">Настройка</div>
          <p style="font-size:12px;color:var(--text3);margin-bottom:10px">
            1. Зарегистрируйтесь на <b>jsonbin.io</b><br>
            2. Скопируйте <b>X-Master-Key</b> из профиля<br>
            3. Вставьте ниже — синхронизация включится
          </p>
          <input id="sync-key-input" type="text" placeholder="$2a$10$..." style="
            width:100%;background:var(--bg);border:1px solid var(--border);
            border-radius:8px;padding:10px 12px;color:var(--text);
            font-family:'JetBrains Mono',monospace;font-size:13px;outline:none;
          " />
          <button id="sync-key-save" type="button" style="
            margin-top:8px;width:100%;background:var(--accent);color:#fff;
            border:none;border-radius:8px;padding:11px;cursor:pointer;
            font-family:'Golos Text',sans-serif;font-size:14px;font-weight:600;
          ">Сохранить ключ и включить синхронизацию</button>
        </div>

        <div id="sync-active-block" style="display:none">
          <div class="section-label" style="margin-bottom:8px">Синхронизация активна ✓</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:10px">
            Ваш ID синхронизации:
          </div>
          <div style="display:flex;gap:8px;align-items:center">
            <code id="sync-id-display" style="
              flex:1;background:var(--bg);border:1px solid var(--border);
              border-radius:8px;padding:8px 12px;font-size:13px;
              font-family:'JetBrains Mono',monospace;color:var(--accent2);
              overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
            ">—</code>
            <button id="sync-copy-btn" type="button" style="
              background:var(--surface2);border:1px solid var(--border);
              border-radius:8px;padding:8px 12px;color:var(--text2);
              cursor:pointer;font-size:13px;white-space:nowrap;
            ">Копировать</button>
          </div>
          <p style="margin-top:10px;font-size:12px;color:var(--text3)">
            Добавьте <code style="color:var(--accent2)">?sync=ID</code> к URL или используйте кнопку «Поделиться ссылкой»
          </p>
          <button id="sync-share-btn" type="button" style="
            margin-top:8px;width:100%;background:var(--surface2);
            border:1px solid var(--accent);border-radius:8px;padding:11px;
            color:var(--accent2);cursor:pointer;font-family:'Golos Text',sans-serif;font-size:14px;
          ">📤 Поделиться ссылкой (скопировать)</button>
          <button id="sync-force-btn" type="button" style="
            margin-top:8px;width:100%;background:var(--green-bg);
            border:1px solid var(--green);border-radius:8px;padding:11px;
            color:var(--green);cursor:pointer;font-family:'Golos Text',sans-serif;font-size:14px;
          ">⟳ Принудительно синхронизировать</button>
          <button id="sync-disable-btn" type="button" style="
            margin-top:8px;width:100%;background:var(--red-bg);
            border:1px solid var(--red);border-radius:8px;padding:11px;
            color:var(--red);cursor:pointer;font-family:'Golos Text',sans-serif;font-size:14px;
          ">✕ Отключить синхронизацию</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  $('sync-backdrop').addEventListener('click', closeSyncModal);
  $('sync-close').addEventListener('click', closeSyncModal);
  $('sync-key-save').addEventListener('click', () => {
    const key = $('sync-key-input').value.trim();
    if (!key || !key.startsWith('$2a$')) {
      alert('Неверный формат ключа. Он должен начинаться с $2a$...');
      return;
    }
    localStorage.setItem(STORAGE_KEY + '_apikey', key);
    location.reload();
  });
}

function openSyncModal() {
  const modal = $('sync-modal');
  if (!modal) return;
  modal.classList.remove('hidden');

  const setupBlock  = $('sync-setup-block');
  const activeBlock = $('sync-active-block');

  if (isSyncEnabled()) {
    setupBlock.style.display  = 'none';
    activeBlock.style.display = 'block';
    const idDisplay = $('sync-id-display');
    if (idDisplay) idDisplay.textContent = syncId || '—';

    const shareBtn = $('sync-share-btn');
    if (shareBtn) {
      shareBtn.onclick = () => {
        const url = new URL(window.location.href);
        if (syncId) url.searchParams.set('sync', syncId);
        navigator.clipboard?.writeText(url.toString()).then(() => alert('Ссылка скопирована!'));
      };
    }
    const forceBtn = $('sync-force-btn');
    if (forceBtn) { forceBtn.onclick = () => syncToCloud(true); }

    const disableBtn = $('sync-disable-btn');
    if (disableBtn) {
      disableBtn.onclick = () => {
        if (!confirm('Отключить синхронизацию? API-ключ будет удалён из браузера.')) return;
        localStorage.removeItem(STORAGE_KEY + '_apikey');
        location.reload();
      };
    }
    const copyBtn = $('sync-copy-btn');
    if (copyBtn) {
      copyBtn.onclick = () => {
        navigator.clipboard?.writeText(syncId || '').then(() => alert('ID скопирован!'));
      };
    }
  } else {
    setupBlock.style.display  = 'block';
    activeBlock.style.display = 'none';
  }
}
function closeSyncModal() {
  const modal = $('sync-modal');
  if (modal) modal.classList.add('hidden');
}

// Override isSyncEnabled to check localStorage key too
const _isSyncEnabled_orig = isSyncEnabled;
function isSyncEnabled() {
  const stored = localStorage.getItem(STORAGE_KEY + '_apikey');
  if (stored && stored.startsWith('$2a$')) {
    // patch JSONBIN_KEY at runtime
    Object.defineProperty(window, '__JSONBIN_KEY', { value: stored, configurable: true });
    return true;
  }
  return _isSyncEnabled_orig();
}

// Runtime key accessor
function getApiKey() {
  return localStorage.getItem(STORAGE_KEY + '_apikey') || JSONBIN_KEY;
}

// Re-patch cloud functions to use runtime key
async function cloudGet(binId) {
  const r = await fetch(`${JSONBIN_BASE}/${binId}/latest`, {
    headers: { 'X-Master-Key': getApiKey() }
  });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return (await r.json()).record;
}
async function cloudCreate(data) {
  const r = await fetch(JSONBIN_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Master-Key': getApiKey(), 'X-Bin-Private': 'false' },
    body: JSON.stringify(data),
  });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return (await r.json()).metadata.id;
}
async function cloudPut(binId, data) {
  const r = await fetch(`${JSONBIN_BASE}/${binId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'X-Master-Key': getApiKey() },
    body: JSON.stringify(data),
  });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
}

// ─────────────────────────────────────────────
//  EVENT LISTENERS
// ─────────────────────────────────────────────
showBtn.addEventListener('click', showSolution);
$('btn-no').addEventListener('click',   () => handleKnow(0));
$('btn-weak').addEventListener('click', () => handleKnow(1));
$('btn-good').addEventListener('click', () => handleKnow(2));

resetButtons.forEach(btn => btn.addEventListener('click', resetProgress));
if (restartBtn) restartBtn.addEventListener('click', resetProgress);

favoriteBtn.addEventListener('click', toggleFavorite);
deleteBtn.addEventListener('click', () => {
  if (currentDeck === 'deleted') restoreReaction(); else removeReaction();
});
if (addReactionBtn) addReactionBtn.addEventListener('click', addReactionFromDeck);

stepsBtn.addEventListener('click', openStepsModal);
stepsBackdrop.addEventListener('click', closeStepsModal);
stepsClose.addEventListener('click', closeStepsModal);

// Mobile header: ⋮ → stats modal
const resetBtnM = $('reset-btn-m');
if (resetBtnM) resetBtnM.addEventListener('click', openStatsModal);
if (statsBackdrop) statsBackdrop.addEventListener('click', closeStatsModal);
if (statsClose)    statsClose.addEventListener('click', closeStatsModal);

// Stats modal add/reset buttons
const smAddBtn   = $('sm-add-btn');
const smResetBtn = $('sm-reset-btn');
if (smAddBtn)   smAddBtn.addEventListener('click', () => { closeStatsModal(); addReactionFromDeck(); });
if (smResetBtn) smResetBtn.addEventListener('click', () => { closeStatsModal(); resetProgress(); });

// Deck modal
if (deckBackdrop) deckBackdrop.addEventListener('click', closeDeckModal);
if (deckClose)    deckClose.addEventListener('click',    closeDeckModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeStepsModal(); closeStatsModal(); closeDeckModal(); closeSyncModal(); }
});
userAnswer.addEventListener('keydown', e => {
  if (e.key === 'Enter' && e.ctrlKey) showSolution();
});
document.addEventListener('visibilitychange', handleVisibilityChange);
window.addEventListener('online',  () => { if (isSyncEnabled() && syncId) syncToCloud(); });
window.addEventListener('offline', () => setSyncStatus('offline'));

// ─────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────
async function init() {
  buildSyncSection();
  renderDeckButtons();
  renderBottomNav();
  currentDeck = getDecks().some(d => d.id === currentDeck) ? currentDeck : 'all';
  setActiveDeck(currentDeck);
  updateStats();

  const first = pickNext(currentDeck);
  if (first) showCard(first);
  else showDoneForDeck(currentDeck);

  renderStudyTimer();
  renderStreak();
  if (!document.hidden) startStudyTimer();

  // ── Cloud sync init ──
  if (isSyncEnabled()) {
    const paramId  = getSyncParam();
    const storedId = localStorage.getItem(STORAGE_KEY + '_syncid');

    if (paramId && paramId !== storedId) {
      // Coming from a share link — pull remote data first
      syncId = paramId;
      localStorage.setItem(STORAGE_KEY + '_syncid', syncId);
      setSyncParam(syncId);
      await syncFromCloud(syncId);
    } else if (storedId) {
      syncId = storedId;
      setSyncParam(syncId);
      // Merge remote into local silently
      syncFromCloud(syncId).catch(() => {});
    } else {
      // First time — create a new bin
      await syncToCloud();
    }
  } else {
    setSyncStatus('disabled');
  }
}

init();
