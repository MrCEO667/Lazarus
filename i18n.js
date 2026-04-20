(function () {
  const resources = {
    ru: {
      translation: {
        topbar: {
          write: "Напишите нам",
          cta: "Рассчитайте стоимость",
        },
        brand: {
          sub: "Логистическая транспортная компания",
        },
        nav: {
          overview: "Обзор",
          deck: "Презентация",
          landings: "Лендинги",
          summary: "Резюме",
          notes: "Заметки",
        },
        hero: {
          badge: "LAZARUS · Стратегический пакет · Апрель 2026",
          title_prefix: "Коридор стоимостью",
          title_num: "€100–350 тыс.",
          title_suffix: "— это реальная возможность",
          lede: "Комплексный пакет: 12-слайдовая презентация с живой финансовой моделью, два прототипа лендинговых страниц (хаб + дочерний Индия→Узбекистан), печатное резюме и внутренние заметки для спикера.",
          cta: "Рассчитать маржу",
        },
        stats: {
          s1: "Маржа 1-го года (консервативно): €103 тыс.",
          s2: "Маржа 1-го года (реалистично): €352 тыс.",
          s3: "Фаза 1: €22 тыс. · 8 недель",
        },
        deliverables: {
          eyebrow: "◆ Структура пакета",
          title: "Что входит в пакет",
          lede: "Пять связанных документов. Каждый рассчитан на свою аудиторию и свой момент во встрече.",
          d1_tag: "01 · Презентация",
          d1_title: "12-слайдовая презентация для CEO",
          d1_desc: "Смысловой каркас. Открытие словами коммерческого директора, рост рынка, воронка продаж и живой интерактивный калькулятор, который CEO может проверить прямо на встрече. Финал — эффектное раскрытие.",
          d1_meta: "16:9 · 1920×1080",
          d2_tag: "02 · Лендинг · Хаб",
          d2_title: "Долгие перевозки в Центральную Азию",
          d2_desc: "Флагманская страница-хаб. Герой с живым атласом маршрутов, сетка из 20 коридоров, три физических маршрута, мгновенный индикатор тарифа, социальные доказательства, кейсы, таможенная экспертиза, форма запроса.",
          d2_meta: "Десктоп · 1440px",
          d3_tag: "03 · Лендинг · Дочерний",
          d3_title: "Страница коридора Индия → Узбекистан",
          d3_desc: "Пример дочернего коридора. Схема маршрута (Мундра → Бандар-Аббас → Ташкент), диапазон тарифов по видам, три варианта маршрутизации, таможенные документы по юрисдикциям, состав груза, кейс, предзаполненная форма.",
          d3_meta: "Десктоп · 1440px",
          d4_tag: "04 · Раздаточный материал",
          d4_title: "Резюме на одной странице",
          d4_desc: "A4 для печати. Главная цифра, воронка, 20 коридоров, фазирование, цена промедления, что нужно для старта. Плотно и уверенно. То, что CEO оставит у себя на столе после встречи.",
          d4_meta: "A4 · оптимизировано для печати",
          d5_tag: "05 · Внутреннее · Заметки спикера",
          d5_title: "Как провести эту встречу",
          d5_desc: "Тезисы по каждому слайду. Цифры, которые нужно мягко отстоять. Что делать, если CEO попробует урезать скоуп. Что можно отдать, если он надавит. Финальная фраза для закрытия.",
          d5_meta: "Только для внутреннего использования",
          open: "Открыть →",
        },
        reading: {
          title: "◆ Рекомендуемый порядок чтения",
          i1: "Прочтите <a href=\"pitcher-notes.html\">заметки спикера</a> первыми — это внутренний ориентир.",
          i2: "Пройдите <a href=\"deck.html\">презентацию</a> от начала до конца; остановитесь на слайде 8 и поиграйте с ползунками.",
          i3: "Откройте <a href=\"hub.html\">hub.html</a> и <a href=\"india-uzbekistan.html\">india-uzbekistan.html</a> во вкладках — пригодятся для раскрытия на слайде 11.",
          i4: "Распечатайте <a href=\"exec-summary.html\">резюме</a> — по одной копии на каждого участника.",
        },
        footer: {
          brand_sub: "Стратегический пакет",
          col1: "Перевозки",
          col2: "Услуги",
          col3: "Свяжитесь с нами",
          col4: "Наш адрес",
          link_auto: "Автоперевозки",
          link_ltl: "Сборные грузы (LTL)",
          link_sea: "Морские перевозки",
          link_air: "Авиаперевозки",
          link_rail: "Железнодорожные перевозки",
          link_multi: "Мультимодальные перевозки",
          link_project: "Проектные, негабаритные",
          link_warehouse: "Складские услуги",
          link_insurance: "Страхование грузов",
          link_danger: "Перевозка опасных грузов",
          link_temp: "Температурные режимы",
          link_bulk: "Сыпучие грузы",
          link_liquid: "Наливные грузы",
          email_sales: "Почта отдела продаж",
          email_support: "Почта отдела обслуживания",
          phone: "Номер телефона",
          address_actual: "Фактический адрес",
          address_legal: "Юридический адрес",
          legal: "© 2026 Lazarus. Все права защищены.",
        },
        lang: {
          ru: "Русский",
          en: "English",
        },
      },
    },
    en: {
      translation: {
        topbar: {
          write: "Message us",
          cta: "Get a quote",
        },
        brand: {
          sub: "Logistics & transport company",
        },
        nav: {
          overview: "Overview",
          deck: "Deck",
          landings: "Landings",
          summary: "Summary",
          notes: "Notes",
        },
        hero: {
          badge: "LAZARUS · Strategy package · April 2026",
          title_prefix: "The",
          title_num: "€100–350K",
          title_suffix: "corridor opportunity",
          lede: "Complete pitch package: a 12-slide presentation with a live financial model, two high-fidelity landing-page mockups (hub + India→Uzbekistan child), a printable executive summary, and internal pitcher's notes for whoever runs the room.",
          cta: "Run the margin calculator",
        },
        stats: {
          s1: "Conservative Yr 1 margin: €103K",
          s2: "Realistic Yr 1 margin: €352K",
          s3: "Phase 1 build: €22K · 8 weeks",
        },
        deliverables: {
          eyebrow: "◆ What's in the package",
          title: "Five deliverables, one story",
          lede: "Each piece is built for a specific audience and a specific moment in the meeting.",
          d1_tag: "01 · Presentation",
          d1_title: "12-slide CEO deck",
          d1_desc: "The narrative spine. Opens with the sales manager's own words, walks through market growth, the funnel math, and a live interactive calculator the CEO can break in the room. Ends on the hero reveal.",
          d1_meta: "16:9 · 1920×1080",
          d2_tag: "02 · Landing · Hub",
          d2_title: "Long-haul Freight into Central Asia",
          d2_desc: "Flagship hub page. Hero with live route atlas, 20-corridor grid, three physical routes, instant rate indicator, trust data, case studies, customs expertise, quote form.",
          d2_meta: "Desktop · 1440px",
          d3_tag: "03 · Landing · Child",
          d3_title: "India → Uzbekistan corridor page",
          d3_desc: "Example corridor child. Route diagram (Mundra → Bandar Abbas → Tashkent), rate band by mode, three routing options, customs docs by jurisdiction, cargo composition, case study, pre-filled quote form.",
          d3_meta: "Desktop · 1440px",
          d4_tag: "04 · Leave-behind",
          d4_title: "One-page executive summary",
          d4_desc: "Print-ready A4. Headline number, funnel, 20-corridor list, phasing, cost of delay, the ask. Dense and confident. Designed for the CEO to keep on his desk after the meeting.",
          d4_meta: "A4 · print optimised",
          d5_tag: "05 · Internal · Pitcher's Notes",
          d5_title: "How to run this meeting",
          d5_desc: "Slide-by-slide talking points. Numbers to challenge gently. What to push back on if he tries to scope-reduce. What to give up if he pushes. The close line to memorise.",
          d5_meta: "Internal only — not for the CEO",
          open: "Open →",
        },
        reading: {
          title: "◆ Recommended reading order",
          i1: "Read <a href=\"pitcher-notes.html\">pitcher-notes.html</a> first (internal orientation).",
          i2: "Run through <a href=\"deck.html\">deck.html</a> end-to-end; stop on slide 8 and play with the sliders.",
          i3: "Open <a href=\"hub.html\">hub.html</a> + <a href=\"india-uzbekistan.html\">india-uzbekistan.html</a> in browser tabs before the meeting for the slide-11 reveal.",
          i4: "Print <a href=\"exec-summary.html\">exec-summary.html</a> and bring one copy per attendee.",
        },
        footer: {
          brand_sub: "Strategy package",
          col1: "Transport",
          col2: "Services",
          col3: "Contact us",
          col4: "Our address",
          link_auto: "Road freight",
          link_ltl: "Groupage (LTL)",
          link_sea: "Sea freight",
          link_air: "Air freight",
          link_rail: "Rail freight",
          link_multi: "Multimodal",
          link_project: "Project & oversized",
          link_warehouse: "Warehousing",
          link_insurance: "Cargo insurance",
          link_danger: "Dangerous goods",
          link_temp: "Temperature-controlled",
          link_bulk: "Bulk cargo",
          link_liquid: "Liquid cargo",
          email_sales: "Sales email",
          email_support: "Customer service",
          phone: "Phone",
          address_actual: "Actual address",
          address_legal: "Legal address",
          legal: "© 2026 Lazarus. All rights reserved.",
        },
        lang: {
          ru: "Русский",
          en: "English",
        },
      },
    },
  };

  const STORAGE_KEY = "lazarus.lang";
  const DEFAULT_LANG = "ru";

  function resolve(key, lang) {
    const parts = key.split(".");
    let node = resources[lang] && resources[lang].translation;
    for (const p of parts) {
      if (node == null) return null;
      node = node[p];
    }
    return node == null ? null : String(node);
  }

  function apply(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = resolve(key, lang);
      if (val == null) return;
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const spec = el.getAttribute("data-i18n-attr");
      spec.split(",").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        const val = resolve(key, lang);
        if (val != null) el.setAttribute(attr, val);
      });
    });
    document.querySelectorAll("[data-lang-label]").forEach((el) => {
      el.textContent = lang.toUpperCase();
    });
    document.querySelectorAll("[data-lang-flag]").forEach((el) => {
      el.setAttribute("src", flagFor(lang));
      el.setAttribute("alt", lang.toUpperCase());
    });
  }

  function flagFor(lang) {
    if (lang === "ru") return "https://flagcdn.com/ru.svg";
    if (lang === "en") return "https://flagcdn.com/gb.svg";
    return "https://flagcdn.com/un.svg";
  }

  function setLang(lang) {
    if (!resources[lang]) lang = DEFAULT_LANG;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    apply(lang);
  }

  function getLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && resources[saved]) return saved;
    } catch (e) {}
    const nav = (navigator.language || "").slice(0, 2).toLowerCase();
    return resources[nav] ? nav : DEFAULT_LANG;
  }

  function wireSwitch() {
    const trigger = document.querySelector("[data-lang-trigger]");
    const menu = document.querySelector("[data-lang-menu]");
    if (!trigger || !menu) return;
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("open");
    });
    document.addEventListener("click", () => menu.classList.remove("open"));
    menu.querySelectorAll("[data-lang-option]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang-option");
        setLang(lang);
        menu.classList.remove("open");
      });
    });
  }

  window.LazarusI18n = { setLang, getLang, apply, flagFor };

  document.addEventListener("DOMContentLoaded", () => {
    apply(getLang());
    wireSwitch();
  });
})();
