export const translations = {
  ru: {
    nav: {
      services: "Услуги",
      showcase: "Проекты",
      pipeline: "Процесс",
      contact: "Контакты",
      cta: "Связаться",
      status: "Открыты к проектам"
    },
    hero: {
      tag: "Digital Studio & Web Engineering",
      title: "SYNAPSE STUDIO",
      subtitle: "Интерактивные 3D-интерфейсы, веб-разработка и Telegram-экосистемы.",
      btn_work: "Смотреть проекты",
      btn_contact: "Связаться"
    },
    ticker: [
      "Interactive 3D Web",
      "Three.js & WebGL",
      "React 19 & Next.js",
      "Telegram Bot Ecosystems",
      "High-Performance Architecture",
      "Bespoke Digital Production",
      "Clean Swiss Typography",
      "Cloud Infrastructure"
    ],
    services: {
      title_pre: "Наши",
      title_highlight: "Услуги",
      subtitle: "Создаем цифровые продукты для бизнеса: от презентационных 3D-сайтов до автономных сервисов в Telegram.",
      for_whom_label: "Для кого:",
      items: [
        {
          num: "01",
          tag: "Интерфейсы",
          title: "Интерактивные 3D-сайты",
          audience: "Для брендов, EdTech и стартапов с высокими требованиями к имиджу",
          desc: "Промо-страницы и лендинги с плавной WebGL-графикой и индивидуальной анимацией.",
          features: [
            "Плавная 3D-сцена и шейдеры",
            "Мобильная адаптивность 60 FPS",
            "Быстрая загрузка и SEO"
          ],
          btnText: "Заказать 3D-сайт ↗",
          orderMsg: "Здравствуйте! Интересует разработка интерактивного 3D-сайта под ключ."
        },
        {
          num: "02",
          tag: "Экосистемы",
          title: "Telegram-боты и Mini Apps",
          audience: "Для интернет-магазинов, онлайн-школ и сервисов с активной аудиторией",
          desc: "Сервисы для автоматизации продаж, каталогов, приема заявок и работы с клиентами.",
          features: [
            "Полный цикл заказа в чате",
            "Панели управления и базы данных",
            "Отправка медиафайлов до 2 ГБ"
          ],
          btnText: "Заказать бота ↗",
          orderMsg: "Здравствуйте! Хочу заказать Telegram-бота / Mini App для бизнеса."
        },
        {
          num: "03",
          tag: "Инженерия",
          title: "Цифровые сервисы и API",
          audience: "Для компаний, которым нужна автоматизация процессов и интеграция AI",
          desc: "Разработка бэкенда, интеграция внешних API, автоматизация рабочих процессов и парсинг.",
          features: [
            "Обработка звука и данных",
            "Синхронизация с таблицами и CRM",
            "Надежная серверная логика"
          ],
          btnText: "Обсудить API / AI ↗",
          orderMsg: "Здравствуйте! Нужна консультация и разработка бэкенда / API / AI сервиса."
        },
        {
          num: "04",
          tag: "Под ключ",
          title: "Комплексный продакшн",
          audience: "Для запуска нового продукта или комплексного масштабирования бизнеса",
          desc: "Полный цикл запуска: архитектура, дизайн, верстка, связка с ботом и деплой на сервер.",
          features: [
            "Единая экосистема веб + бот",
            "Развертывание на Linux VPS",
            "Техническая поддержка"
          ],
          btnText: "Запустить под ключ ↗",
          orderMsg: "Здравствуйте! Интересует комплексный запуск проекта под ключ (веб + бот + сервер)."
        }
      ]
    },
    showcase: {
      title_pre: "Реализованные",
      title_highlight: "Проекты",
      subtitle: "Реальные продукты в production: интерактивные 3D-платформы, Telegram Mini Apps и AI-сервисы.",
      status_live: "Production Live",
      btn_view_site: "Смотреть сайт",
      btn_view_demo: "Демо в Telegram",
      btn_order_similar: "Хочу похожий проект",
      items: [
        {
          title: "Fitrat Ta'lim Markazi",
          category: "EdTech Platform & 3D Web",
          image: "/projects/fitrat.png",
          browserUrl: "fitrat-talim.vercel.app",
          liveUrl: "https://fitrat-talim.vercel.app",
          isExternal: true,
          desc: "Интерактивный презентационный сайт учебного центра: интерактивная 3D-графика, каталог курсов, запись на пробные уроки и мультиязычность.",
          tags: ["Next.js 14", "Three.js", "Vercel", "TailwindCSS"],
          orderMsg: "Здравствуйте! Интересует разработка интерактивного 3D-сайта, как Fitrat Ta'lim Markazi."
        },
        {
          title: "StartRus.uz",
          category: "Interactive 3D WebGL",
          image: "/projects/startrus.png",
          browserUrl: "startrus.uz",
          liveUrl: "https://startrus.uz",
          isExternal: true,
          desc: "Образовательная платформа с трехмерными сценами Three.js, билингвальной поддержкой (RU/UZ) и связкой с ботом приема заявок.",
          tags: ["React 19", "Three.js", "TailwindCSS", "i18n"],
          orderMsg: "Здравствуйте! Хочу заказать 3D-сайт с интерактивной графикой, как StartRus.uz."
        },
        {
          title: "Telegram Sales Engine & Mini App",
          category: "E-Commerce & Chat Automation",
          image: "/projects/telegram-bot.jpg",
          browserUrl: "t.me/synapse_shop_demo",
          liveUrl: "https://t.me/anvarelecant?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C%20%D0%B4%D0%B5%D0%BC%D0%BE%20Telegram-%D0%B1%D0%BE%D1%82%D0%B0%20%D0%B8%20Mini%20App.",
          isExternal: false,
          desc: "Автоматизированная система продаж в Telegram: интерактивная витрина, прием платежей Click/Payme, промокоды и мгновенная выдача материалов.",
          tags: ["Python", "Telegram Mini App", "Click / Payme", "SQLite"],
          orderMsg: "Здравствуйте! Интересует разработка Telegram-бота и Mini App для продаж."
        },
        {
          title: "AI Voice Examiner & Media Engine",
          category: "Speech AI & Infrastructure",
          image: "/projects/ai-voice.jpg",
          browserUrl: "engine.synapse.internal",
          liveUrl: "https://t.me/anvarelecant?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BF%D1%80%D0%BE%20AI%20Voice%20%D0%B8%20%D0%BC%D0%B5%D0%B4%D0%B8%D0%B0-%D0%B4%D0%B2%D0%B8%D0%B6%D0%BE%D0%BA.",
          isExternal: false,
          desc: "Интеллектуальный сервис распознавания речи Whisper AI с автоматической оценкой ответов и стриминг медиафайлов до 2 ГБ через MTProto.",
          tags: ["Python", "Whisper AI", "MTProto", "Linux VPS"],
          orderMsg: "Здравствуйте! Интересует разработка сервиса с распознаванием голоса AI или бэкенд-инфраструктуры."
        }
      ]
    },
    pipeline: {
      title_pre: "Процесс",
      title_highlight: "Разработки",
      subtitle: "Понятные шаги работы от первой встречи до передачи ключей от проекта.",
      steps: [
        {
          num: "01",
          title: "Исследование и структура",
          desc: "Определяем цели проекта, аудиторию, структуру страниц и технический стек."
        },
        {
          num: "02",
          title: "3D и визуальный концепт",
          desc: "Проектируем интерактивные элементы, типографику, цветовую схему и утверждаем прототип."
        },
        {
          num: "03",
          title: "Разработка и интеграция",
          desc: "Пишем чистый код, внедряем анимации, подключаем базу данных и настраиваем сервисы."
        },
        {
          num: "04",
          title: "Тестирование и запуск",
          desc: "Проверяем производительность на всех устройствах, привязываем домен, SSL и передаем вам."
        }
      ]
    },
    contact: {
      title_pre: "Начать",
      title_highlight: "Проект",
      subtitle: "Напишите напрямую. Обсудим вашу задачу и предложим оптимальное решение.",
      cta_btn: "Обсудить проект",
      tg_btn: "Обсудить проект",
      tg_label: "Telegram",
      tg_action: "Открыть чат",
      linkedin_label: "LinkedIn",
      linkedin_action: "Открыть профиль",
      github_label: "GitHub",
      github_action: "Смотреть репозитории",
      rights: "Synapse Studio. Все права защищены."
    }
  },

  en: {
    nav: {
      services: "Services",
      showcase: "Work",
      pipeline: "Process",
      contact: "Contact",
      cta: "Get in Touch",
      status: "Available for projects"
    },
    hero: {
      tag: "Digital Studio & Web Engineering",
      title: "SYNAPSE STUDIO",
      subtitle: "Interactive 3D interfaces, high-performance web development & Telegram ecosystems.",
      btn_work: "Explore Projects",
      btn_contact: "Get in Touch"
    },
    ticker: [
      "Interactive 3D Web",
      "Three.js & WebGL",
      "React 19 & Next.js",
      "Telegram Bot Ecosystems",
      "High-Performance Architecture",
      "Bespoke Digital Production",
      "Clean Swiss Typography",
      "Cloud Infrastructure"
    ],
    services: {
      title_pre: "Our",
      title_highlight: "Services",
      subtitle: "We engineer digital products for forward-thinking brands: from interactive 3D landing pages to autonomous messaging ecosystems.",
      for_whom_label: "Target Audience:",
      items: [
        {
          num: "01",
          tag: "Interfaces",
          title: "Interactive 3D Websites",
          audience: "For brands, EdTech, and startups demanding high visual prestige",
          desc: "Distinctive promotional websites and landings powered by WebGL graphics and smooth motion.",
          features: [
            "Fluid 3D scene & shaders",
            "60 FPS mobile responsiveness",
            "Rapid loading & SEO compliance"
          ],
          btnText: "Order 3D Website ↗",
          orderMsg: "Hello! I am interested in building a turnkey interactive 3D website."
        },
        {
          num: "02",
          tag: "Ecosystems",
          title: "Telegram Bots & Mini Apps",
          audience: "For e-commerce stores, online academies, and local delivery services",
          desc: "Autonomous bots and Mini Apps for orders, digital catalogs, and direct customer interactions.",
          features: [
            "Complete checkout inside chat",
            "Admin dashboards & databases",
            "Handling large files up to 2 GB"
          ],
          btnText: "Order Telegram Bot ↗",
          orderMsg: "Hello! I would like to build a custom Telegram Bot & Mini App."
        },
        {
          num: "03",
          tag: "Engineering",
          title: "Digital Services & APIs",
          audience: "For companies requiring workflow automation and AI integrations",
          desc: "Backend development, third-party API integrations, workflow automation, and data processing.",
          features: [
            "Audio and data pipelines",
            "CRM & spreadsheet sync",
            "Resilient server architecture"
          ],
          btnText: "Discuss API / AI ↗",
          orderMsg: "Hello! I need consultation and development for a backend / API / AI service."
        },
        {
          num: "04",
          tag: "Turnkey",
          title: "End-to-End Production",
          audience: "For new product launches and turnkey enterprise scale",
          desc: "Complete execution: architecture, design, responsive frontend, bot integration, and server deployment.",
          features: [
            "Unified web + bot ecosystem",
            "Linux VPS deployment & SSL",
            "Ongoing technical support"
          ],
          btnText: "Launch Turnkey ↗",
          orderMsg: "Hello! I am interested in end-to-end turnkey production (Web + Bot + Server)."
        }
      ]
    },
    showcase: {
      title_pre: "Selected",
      title_highlight: "Projects",
      subtitle: "Live digital products shipped to production: interactive 3D platforms, Telegram Mini Apps, and AI engines.",
      status_live: "Production Live",
      btn_view_site: "View Live Site",
      btn_view_demo: "Telegram Demo",
      btn_order_similar: "Order Similar Project",
      items: [
        {
          title: "Fitrat Ta'lim Markazi",
          category: "EdTech Platform & 3D Web",
          image: "/projects/fitrat.png",
          browserUrl: "fitrat-talim.vercel.app",
          liveUrl: "https://fitrat-talim.vercel.app",
          isExternal: true,
          desc: "Interactive 3D portal for an education center: immersive WebGL visuals, course directory, trial booking engine, and multilingual UX.",
          tags: ["Next.js 14", "Three.js", "Vercel", "TailwindCSS"],
          orderMsg: "Hello! I am interested in building an interactive 3D site like Fitrat Ta'lim Markazi."
        },
        {
          title: "StartRus.uz",
          category: "Interactive 3D WebGL",
          image: "/projects/startrus.png",
          browserUrl: "startrus.uz",
          liveUrl: "https://startrus.uz",
          isExternal: true,
          desc: "Educational digital platform featuring bespoke Three.js 3D scenes, bilingual architecture (RU/UZ), and integrated lead-capture bot.",
          tags: ["React 19", "Three.js", "TailwindCSS", "i18n"],
          orderMsg: "Hello! I would like to order an interactive 3D website like StartRus.uz."
        },
        {
          title: "Telegram Sales Engine & Mini App",
          category: "E-Commerce & Chat Automation",
          image: "/projects/telegram-bot.jpg",
          browserUrl: "t.me/synapse_shop_demo",
          liveUrl: "https://t.me/anvarelecant?text=Hello!%20I%20would%20like%20to%20see%20the%20Telegram%20Bot%20%26%20Mini%20App%20demo.",
          isExternal: false,
          desc: "Automated commercial ecosystem in Telegram: catalog showcase, Click/Payme payment gateways, promo codes, and instant fulfillment.",
          tags: ["Python", "Telegram Mini App", "Click / Payme", "SQLite"],
          orderMsg: "Hello! I am interested in building a Telegram Sales Bot & Mini App."
        },
        {
          title: "AI Voice Examiner & Media Engine",
          category: "Speech AI & Infrastructure",
          image: "/projects/ai-voice.jpg",
          browserUrl: "engine.synapse.internal",
          liveUrl: "https://t.me/anvarelecant?text=Hello!%20I%20would%20like%20to%20learn%20more%20about%20the%20AI%20Voice%20and%20Media%20Engine.",
          isExternal: false,
          desc: "Speech AI engine for automated voice transcription and evaluation, paired with high-throughput 2 GB MTProto streaming architecture.",
          tags: ["Python", "Whisper AI", "MTProto", "Linux VPS"],
          orderMsg: "Hello! I am interested in building a voice AI service or streaming backend."
        }
      ]
    },
    pipeline: {
      title_pre: "Our",
      title_highlight: "Process",
      subtitle: "A transparent, structured workflow from initial discovery to production handover.",
      steps: [
        {
          num: "01",
          title: "Discovery & Structure",
          desc: "We define core project goals, audience context, information architecture, and technical stack."
        },
        {
          num: "02",
          title: "3D & Visual Concept",
          desc: "We construct the visual identity, 3D composition, interactive physics, and validate prototypes."
        },
        {
          num: "03",
          title: "Development & Wiring",
          desc: "We write clean code, configure responsive layouts, integrate databases, and connect APIs."
        },
        {
          num: "04",
          title: "Testing & Launch",
          desc: "We verify performance across all devices, configure custom domains, SSL, and deliver the system."
        }
      ]
    },
    contact: {
      title_pre: "Start a",
      title_highlight: "Project",
      subtitle: "Reach out directly. Let's discuss your objectives and build something remarkable.",
      cta_btn: "Discuss a Project",
      tg_btn: "Discuss a Project",
      tg_label: "Telegram",
      tg_action: "Open Chat",
      linkedin_label: "LinkedIn",
      linkedin_action: "View Profile",
      github_label: "GitHub",
      github_action: "View Code",
      rights: "Synapse Studio. All rights reserved."
    }
  },

  uz: {
    nav: {
      services: "Xizmatlar",
      showcase: "Loyihalar",
      pipeline: "Jarayon",
      contact: "Aloqa",
      cta: "Bog'lanish",
      status: "Yangi loyihalar ochiq"
    },
    hero: {
      tag: "Digital Studio & Web Engineering",
      title: "SYNAPSE STUDIO",
      subtitle: "Interaktiv 3D interfeyslar, zamonaviy veb-ishlanmalar va Telegram ekotizimlari.",
      btn_work: "Loyihalarni ko'rish",
      btn_contact: "Bog'lanish"
    },
    ticker: [
      "Interactive 3D Web",
      "Three.js & WebGL",
      "React 19 & Next.js",
      "Telegram Bot Ecosystems",
      "High-Performance Architecture",
      "Bespoke Digital Production",
      "Clean Swiss Typography",
      "Cloud Infrastructure"
    ],
    services: {
      title_pre: "Bizning",
      title_highlight: "Xizmatlar",
      subtitle: "Biznesingiz uchun sifatli mahsulotlar: 3D taqdimot saytlaridan tortib, Telegram ichidagi avtomatlashtirilgan tizimlargacha.",
      for_whom_label: "Kimlar uchun:",
      items: [
        {
          num: "01",
          tag: "Interfeys",
          title: "Interaktiv 3D-saytlar",
          audience: "Kuchli imidj va yuqori daromad talab qiladigan brendlar va startaplar uchun",
          desc: "WebGL grafikasi va silliq animatsiyaga ega taqdimot saytlari va lendinglar.",
          features: [
            "Silliq 3D harakat va effektlar",
            "Smartfonlar uchun 60 FPS moslashuv",
            "Tezkor yuklanish va SEO"
          ],
          btnText: "3D-sayt buyurtma qilish ↗",
          orderMsg: "Salom! Noldan sifatli interaktiv 3D-sayt yaratish bo'yicha ma'lumot olmoqchiman."
        },
        {
          num: "02",
          tag: "Ekotizimlar",
          title: "Telegram-botlar va Mini App'lar",
          audience: "Internet-do'konlar, o'quv markazlar va xizmat ko'rsatish sohalari uchun",
          desc: "Savdo, kataloglar, buyurtmalarni qabul qilish va mijozlarga xizmat ko'rsatish botlari.",
          features: [
            "Chat ichida to'liq xarid jarayoni",
            "Boshqaruv paneli va bazalar",
            "2 GB gacha katta fayllar bilan ishlash"
          ],
          btnText: "Bot buyurtma qilish ↗",
          orderMsg: "Salom! Biznes uchun Telegram-bot / Mini App buyurtma qilmoqchiman."
        },
        {
          num: "03",
          tag: "Muhandislik",
          title: "Raqamli servislar va API",
          audience: "Jarayonlarni avtomatlashtirish va AI integratsiyasiga muhtoj bizneslar uchun",
          desc: "Backend tizimlar, tashqi API integratsiyasi, ma'lumotlarni tahlil qilish va avtomatlashtirish.",
          features: [
            "Ovoz va ma'lumotlarni qayta ishlash",
            "Jadvallar va CRM bilan sinxronizatsiya",
            "Ishonchli server mantig'i"
          ],
          btnText: "API / AI muhokama qilish ↗",
          orderMsg: "Salom! Backend / API / AI servisi yaratish bo'yicha maslahat olmoqchiman."
        },
        {
          num: "04",
          tag: "Noldan tayyor",
          title: "To'liq ishlab chiqish",
          audience: "Yangi mahsulotni noldan ishga tushirish yoki biznesni kengaytirish uchun",
          desc: "Boshlang'ich arxitektura, dizayn, dasturlash, bot bilan bog'lash va serverga joylash.",
          features: [
            "Yagona veb + bot tizimi",
            "Linux VPS sozlamalari va SSL",
            "Doimiy texnik ko'mak"
          ],
          btnText: "Noldan ishga tushirish ↗",
          orderMsg: "Salom! Loyihani to'liq noldan (veb + bot + server) ishga tushirish qiziqtirmoqda."
        }
      ]
    },
    showcase: {
      title_pre: "Bajarilgan",
      title_highlight: "Loyihalar",
      subtitle: "Hozirda ishlab turgan real mahsulotlar: interaktiv 3D platformalar, Telegram Mini App'lar va AI servislari.",
      status_live: "Production Live",
      btn_view_site: "Saytni ochish",
      btn_view_demo: "Telegramda demo",
      btn_order_similar: "Shunday loyiha buyurtma qilish",
      items: [
        {
          title: "Fitrat Ta'lim Markazi",
          category: "EdTech Platform & 3D Web",
          image: "/projects/fitrat.png",
          browserUrl: "fitrat-talim.vercel.app",
          liveUrl: "https://fitrat-talim.vercel.app",
          isExternal: true,
          desc: "O'quv markazi uchun interaktiv taqdimot sayti: zamonaviy WebGL grafika, kurslar katalogi, sinov darslariga yozilish va ko'p tillilik.",
          tags: ["Next.js 14", "Three.js", "Vercel", "TailwindCSS"],
          orderMsg: "Salom! Fitrat Ta'lim Markazi kabi interaktiv 3D sayt yaratish bo'yicha ma'lumot olmoqchiman."
        },
        {
          title: "StartRus.uz",
          category: "Interactive 3D WebGL",
          image: "/projects/startrus.png",
          browserUrl: "startrus.uz",
          liveUrl: "https://startrus.uz",
          isExternal: true,
          desc: "Three.js 3D grafikasi, 2 tilda qo'llab-quvvatlash (RU/UZ) va buyurtma botiga integratsiyalangan o'quv platformasi.",
          tags: ["React 19", "Three.js", "TailwindCSS", "i18n"],
          orderMsg: "Salom! StartRus.uz kabi 3D grafikali interaktiv sayt buyurtma qilmoqchiman."
        },
        {
          title: "Telegram Sales Engine & Mini App",
          category: "E-Commerce & Chat Automation",
          image: "/projects/telegram-bot.jpg",
          browserUrl: "t.me/synapse_shop_demo",
          liveUrl: "https://t.me/anvarelecant?text=Salom!%20Telegram-bot%20va%20Mini%20App%20demosini%20ko%27rmoqchiman.",
          isExternal: false,
          desc: "Telegram ichidagi avtomatlashtirilgan savdo tizimi: vitrina, Click/Payme to'lovlari, promokodlar va materiallarni bir zumda yetkazib berish.",
          tags: ["Python", "Telegram Mini App", "Click / Payme", "SQLite"],
          orderMsg: "Salom! Savdo uchun Telegram-bot va Mini App buyurtma qilmoqchiman."
        },
        {
          title: "AI Voice Examiner & Media Engine",
          category: "Speech AI & Infrastructure",
          image: "/projects/ai-voice.jpg",
          browserUrl: "engine.synapse.internal",
          liveUrl: "https://t.me/anvarelecant?text=Salom!%20AI%20Voice%20va%20media%20dvijok%20haqida%20batafsil%20ma%27lumot%20olmoqchiman.",
          isExternal: false,
          desc: "Whisper AI yordamida erkin nutqni avtomatik baholash tizimi hamda MTProto protokoli orqali 2 GB gacha fayllarni uzatish dvijogi.",
          tags: ["Python", "Whisper AI", "MTProto", "Linux VPS"],
          orderMsg: "Salom! Ovozli AI servis yoki server infratuzilmasi yaratish bo'yicha bog'lanmoqdaman."
        }
      ]
    },
    pipeline: {
      title_pre: "Ishlash",
      title_highlight: "Tartibi",
      subtitle: "Birinchi muloqotdan boshlab loyihani topshirishgacha bo'lgan aniq bosqichlar.",
      steps: [
        {
          num: "01",
          title: "Tahlil va rejalashtirish",
          desc: "Loyiha maqsadlarini aniqlab, sahifalar tuzilmasi va texnik talablarni shakllantiramiz."
        },
        {
          num: "02",
          title: "3D va vizual konsepsiya",
          desc: "Interaktiv elementlar, tipografika va ranglar uyg'unligini yaratib, prototipni tasdiqlaymiz."
        },
        {
          num: "03",
          title: "Dasturlash va integratsiya",
          desc: "Toza kod yozamiz, silliq animatsiyalarni joylaymiz va ma'lumotlar bazasini ulaymiz."
        },
        {
          num: "04",
          title: "Sinov va ishga tushirish",
          desc: "Barcha qurilmalarda tezlikni tekshiramiz, domenni ulaymiz va loyihani topshiramiz."
        }
      ]
    },
    contact: {
      title_pre: "Loyihani",
      title_highlight: "Boshlash",
      subtitle: "To'g'ridan-to'g'ri bog'laning. Vazifangizni muhokama qilib, yechim taklif qilamiz.",
      cta_btn: "Loyihani muhokama qilish",
      tg_btn: "Loyihani muhokama qilish",
      tg_label: "Telegram",
      tg_action: "Chatni ochish",
      linkedin_label: "LinkedIn",
      linkedin_action: "Profilni ochish",
      github_label: "GitHub",
      github_action: "Kodni ko'rish",
      rights: "Synapse Studio. Barcha huquqlar himoyalangan."
    }
  }
};
