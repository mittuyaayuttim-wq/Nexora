import { Language } from '../types';

export interface Translations {
  brandTagline: string;
  nav: {
    ideas: string;
    trends: string;
    categories: string;
    community: string;
    about: string;
    shareIdea: string;
    signIn: string;
    signOut: string;
    profile: string;
    menu: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleGradient: string;
    titleEnd: string;
    description: string;
    exploreBtn: string;
    shareBtn: string;
    stats: {
      ideasCount: string;
      ideasLabel: string;
      innovatorsCount: string;
      innovatorsLabel: string;
      impactRate: string;
      impactLabel: string;
    };
  };
  core3d: {
    title: string;
    hint: string;
    rotateText: string;
    pulseBtn: string;
    resetBtn: string;
  };
  explorer: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filterAll: string;
    tabs: {
      all: string;
      trending: string;
      latest: string;
      featured: string;
      favorites: string;
    };
    categories: {
      all: string;
      ai: string;
      web: string;
      space: string;
      design: string;
      green: string;
      business: string;
    };
    noResults: string;
    noResultsDesc: string;
    resetFilters: string;
    featuredBadge: string;
  };
  card: {
    by: string;
    viewDetails: string;
    likes: string;
    views: string;
    share: string;
    save: string;
    saved: string;
    edit: string;
    delete: string;
    deleteConfirm: string;
    stage: string;
    impact: string;
  };
  stages: {
    Concept: string;
    Prototype: string;
    Alpha: string;
    Production: string;
  };
  impacts: {
    Transformative: string;
    High: string;
    Moderate: string;
  };
  detailModal: {
    aboutProject: string;
    implementationStage: string;
    impactPotential: string;
    tags: string;
    authorInfo: string;
    shareIdea: string;
    close: string;
    externalLink: string;
    likedNotice: string;
  };
  createModal: {
    title: string;
    editTitle: string;
    subtitle: string;
    fieldTitle: string;
    fieldTitlePlaceholder: string;
    fieldSummary: string;
    fieldSummaryPlaceholder: string;
    fieldDescription: string;
    fieldDescriptionPlaceholder: string;
    fieldCategory: string;
    fieldStage: string;
    fieldImpact: string;
    fieldTags: string;
    fieldTagsPlaceholder: string;
    fieldLink: string;
    fieldLinkPlaceholder: string;
    fieldAuthor: string;
    fieldAuthorPlaceholder: string;
    themeGradient: string;
    submitCreate: string;
    submitUpdate: string;
    cancel: string;
    errors: {
      titleRequired: string;
      summaryRequired: string;
      descriptionRequired: string;
      authorRequired: string;
    };
  };
  auth: {
    modalTitle: string;
    modalSubtitle: string;
    googleBtn: string;
    guestNotice: string;
    connectedAs: string;
    emailLabel: string;
    roleLabel: string;
    statsHeading: string;
    myIdeas: string;
    myFavorites: string;
    joined: string;
    demoNote: string;
    continueWithUser: string;
  };
  shareModal: {
    title: string;
    subtitle: string;
    copyLink: string;
    copied: string;
    shareTelegram: string;
    shareWhatsapp: string;
    shareX: string;
    nativeShare: string;
  };
  storage: {
    title: string;
    desc: string;
    localActive: string;
    firebaseReady: string;
    infoText: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    categoriesTitle: string;
    resources: string;
    privacy: string;
    terms: string;
    rights: string;
    developedWith: string;
  };
  toast: {
    ideaCreated: string;
    ideaUpdated: string;
    ideaDeleted: string;
    linkCopied: string;
    liked: string;
    unliked: string;
    bookmarked: string;
    unbookmarked: string;
    signedIn: string;
    signedOut: string;
    fillRequired: string;
  };
}

export const translations: Record<Language, Translations> = {
  uz: {
    brandTagline: "Kelajak G‘oyalari va Innovatsiyalar Platformasi",
    nav: {
      ideas: "G‘oyalar",
      trends: "Trendlar",
      categories: "Kategoriyalar",
      community: "Jamiyat",
      about: "Biz haqimizda",
      shareIdea: "G‘oyamni ulashish",
      signIn: "Google orqali kirish",
      signOut: "Chiqish",
      profile: "Profilim",
      menu: "Menyu"
    },
    hero: {
      badge: "Yangi Avlod Innovatsiya Maydoni",
      titleStart: "Kelajak G‘oyalarini",
      titleGradient: "Birgalikda Shakllantiramiz",
      titleEnd: "",
      description: "NEXORA — ilg‘or g‘oyalar, ilmiy kashfiyotlar, texnologik startaplar va erkin ijodkorlar uchun futuristik ekotizim. O‘z tasavvuringizni haqiqatga aylantiring.",
      exploreBtn: "G‘oyalarni kashf etish",
      shareBtn: "G‘oyamni ulashish",
      stats: {
        ideasCount: "480+",
        ideasLabel: "Innovatsion g‘oyalar",
        innovatorsCount: "14.2K",
        innovatorsLabel: "Faol izlanuvchilar",
        impactRate: "94.6%",
        impactLabel: "Amaliy samaradorlik"
      }
    },
    core3d: {
      title: "NEXORA Kvant Obyekti",
      hint: "Sichqoncha bilan aylantiring yoki bosing",
      rotateText: "Interaktiv 3D Kristall",
      pulseBtn: "Energiya pulsi",
      resetBtn: "Qayta tiklash"
    },
    explorer: {
      title: "G‘oyalar Galereyasi",
      subtitle: "Zamonaviy muammolarga kutilmagan va dadil yechimlar",
      searchPlaceholder: "G‘oyalar, texnologiyalar yoki teglarni izlash...",
      filterAll: "Barchasi",
      tabs: {
        all: "Barcha g‘oyalar",
        trending: "Ommabop",
        latest: "Eng yangi",
        featured: "Saralangan",
        favorites: "Sevimlilar"
      },
      categories: {
        all: "Barcha yo‘nalishlar",
        ai: "Sun'iy Intellekt",
        web: "Web & Dasturlash",
        space: "Koinot & Fan",
        design: "Dizayn & Ijod",
        green: "Yashil Texnologiyalar",
        business: "Startaplar & Biznes"
      },
      noResults: "Mos keluvchi g‘oyalar topilmadi",
      noResultsDesc: "Qidiruv so‘zini o‘zgartiring yoki birinchi bo‘lib o‘z g‘oyangizni qo‘shing!",
      resetFilters: "Filtrlarni tozalash",
      featuredBadge: "Bosh G‘oya"
    },
    card: {
      by: "Muallif:",
      viewDetails: "Batafsil o‘qish",
      likes: "Layk",
      views: "Ko‘rildi",
      share: "Ulashish",
      save: "Saqlash",
      saved: "Saqlangan",
      edit: "Tahrirlash",
      delete: "O‘chirish",
      deleteConfirm: "Haqiqatan ham ushbu g‘oyani o‘chirmoqchimisiz?",
      stage: "Bosqich",
      impact: "Ta'sir"
    },
    stages: {
      Concept: "Konsept",
      Prototype: "Prototip",
      Alpha: "Alfa sinov",
      Production: "Amaliyotda"
    },
    impacts: {
      Transformative: "Inqilobiy ta'sir",
      High: "Yuqori ta'sir",
      Moderate: "O‘rtacha ta'sir"
    },
    detailModal: {
      aboutProject: "Loyiha haqida batafsil",
      implementationStage: "Amalga oshirish bosqichi",
      impactPotential: "Kutilayotgan natija va ta'sir",
      tags: "Kalit so‘zlar va teglar",
      authorInfo: "G‘oya tashabbuskori",
      shareIdea: "Ushbu g‘oyani ulashish",
      close: "Yopish",
      externalLink: "Loyiha havolasiga o‘tish",
      likedNotice: "Sizga bu g‘oya ma'qul keldi"
    },
    createModal: {
      title: "Yangi G‘oya Ulashish",
      editTitle: "G‘oyani Tahrirlash",
      subtitle: "O‘z tasavvuringiz va texnologik yechimingiz bilan dunyoni o‘zgartiring",
      fieldTitle: "G‘oya sarlavhasi *",
      fieldTitlePlaceholder: "Masalan: Neyro-Kvant: O‘zbek Tili Katta Modeli",
      fieldSummary: "Qisqa maqsadi (1-2 gap) *",
      fieldSummaryPlaceholder: "Loyiha qanday muammoni hal qilishi haqida qisqacha...",
      fieldDescription: "Batafsil tavsif va arxitektura *",
      fieldDescriptionPlaceholder: "G‘oyaning ishlash mexanizmi, ishlatiladigan texnologiyalar va amaliy ahamiyati...",
      fieldCategory: "Yo‘nalish / Kategoriya *",
      fieldStage: "Loyiha bosqichi",
      fieldImpact: "Kutilayotgan ta'sir darajasi",
      fieldTags: "Teglar (vergul bilan ajrating)",
      fieldTagsPlaceholder: "AI, Python, Neyrotarmoq, Ochiq Manba",
      fieldLink: "Tashqi havola yoki Repozitoriy (ixtiyoriy)",
      fieldLinkPlaceholder: "https://github.com/... yoki https://loyihangiz.uz",
      fieldAuthor: "Muallif ismi yoki taxallusi *",
      fieldAuthorPlaceholder: "Sardor Alimov",
      themeGradient: "Vizual Rang Mavzusi",
      submitCreate: "G‘oyani E'lon Qilish",
      submitUpdate: "O‘zgarishlarni Saqlash",
      cancel: "Bekor qilish",
      errors: {
        titleRequired: "Iltimos, g‘oya sarlavhasini kiriting",
        summaryRequired: "Qisqa tavsifni yozish shart",
        descriptionRequired: "To‘liq ma'lumot berilishi lozim",
        authorRequired: "Muallif ismini ko‘rsating"
      }
    },
    auth: {
      modalTitle: "NEXORA Tizimiga Kirish",
      modalSubtitle: "Google hisobingiz orqali shaxsiy profilingizni boshqaring",
      googleBtn: "Google orqali davom etish",
      guestNotice: "Kirish orqali siz o‘z g‘oyalaringizni saqlashingiz va tahrirlashingiz mumkin bo‘ladi.",
      connectedAs: "Tizimga muvaffaqiyatli kirdingiz",
      emailLabel: "Google Pochta:",
      roleLabel: "Platformadagi maqom:",
      statsHeading: "Sizning faolligingiz",
      myIdeas: "Mening g‘oyalarim",
      myFavorites: "Sevimlilar ro‘yxati",
      joined: "A'zo bo‘lgan sana:",
      demoNote: "Ushbu kirish haqiqiy Google foydalanuvchi ma'lumotlari bilan ishlaydi.",
      continueWithUser: "Hozirgi Google akkaunti bilan kirish"
    },
    shareModal: {
      title: "G‘oyani Dunyoga Ulashing",
      subtitle: "Qiziqarli g‘oyani do‘stlaringiz va jamoangiz bilan bo‘lishing",
      copyLink: "Havoladan nusxa olish",
      copied: "Havola nusxalandi!",
      shareTelegram: "Telegramda ulashish",
      shareWhatsapp: "WhatsAppda yuborish",
      shareX: "X (Twitter)da post qilish",
      nativeShare: "Boshqa ilovalar orqali"
    },
    storage: {
      title: "Ma'lumotlar Saqlash Tizimi",
      desc: "NEXORA ma'lumotlari brauzeringizning xavfsiz LocalStorage xotirasida saqlanmoqda. Barcha kiritilgan g‘oyalar, layklar va sevimlilar sessiyalar aro saqlanib qoladi.",
      localActive: "Mahalliy Xotira: Faol",
      firebaseReady: "Firebase integratsiyasi tayyor",
      infoText: "Tashqi bulut xizmati ulanishi uchun tayyor holatda."
    },
    footer: {
      description: "NEXORA — zamonaviy texnologiyalar, sun'iy intellekt va ilmiy innovatsiyalarni birlashtiruvchi global platforma. Kelajak bugun boshlanadi.",
      quickLinks: "Tezkor Havolalar",
      categoriesTitle: "Yo‘nalishlar",
      resources: "Resurslar",
      privacy: "Maxfiylik siyosati",
      terms: "Foydalanish shartlari",
      rights: "Barcha huquqlar himoyalangan.",
      developedWith: "NEXORA Platformasi. O‘zbekiston va butun dunyo ijodkorlari uchun."
    },
    toast: {
      ideaCreated: "G‘oyangiz muvaffaqiyatli e'lon qilindi!",
      ideaUpdated: "G‘oya ma'lumotlari yangilandi.",
      ideaDeleted: "G‘oya ro‘yxatdan o‘chirildi.",
      linkCopied: "Havola nusxalandi!",
      liked: "G‘oyaga layk qo‘shildi.",
      unliked: "Layk qaytarildi.",
      bookmarked: "Sevimlilarga saqlandi.",
      unbookmarked: "Sevimlilardan chiqarildi.",
      signedIn: "Google hisobi bilan muvaffaqiyatli kirdingiz!",
      signedOut: "Tizimdan chiqildi.",
      fillRequired: "Iltimos, barcha majburiy maydonlarni to‘ldiring."
    }
  },
  en: {
    brandTagline: "Future Ideas & Innovation Platform",
    nav: {
      ideas: "Ideas",
      trends: "Trends",
      categories: "Categories",
      community: "Community",
      about: "About Us",
      shareIdea: "Share Idea",
      signIn: "Sign in with Google",
      signOut: "Sign Out",
      profile: "My Profile",
      menu: "Menu"
    },
    hero: {
      badge: "Next Generation Innovation Realm",
      titleStart: "Shaping the Ideas of",
      titleGradient: "Tomorrow Together",
      titleEnd: "",
      description: "NEXORA is a futuristic ecosystem for breakthrough concepts, scientific discoveries, tech ventures, and independent visionaries. Turn your vision into reality.",
      exploreBtn: "Explore Ideas",
      shareBtn: "Share My Idea",
      stats: {
        ideasCount: "480+",
        ideasLabel: "Innovative ideas",
        innovatorsCount: "14.2K",
        innovatorsLabel: "Active researchers",
        impactRate: "94.6%",
        impactLabel: "Implementation rate"
      }
    },
    core3d: {
      title: "NEXORA Quantum Core",
      hint: "Rotate with cursor or click",
      rotateText: "Interactive 3D Crystal",
      pulseBtn: "Energy Pulse",
      resetBtn: "Reset View"
    },
    explorer: {
      title: "Ideas Showcase",
      subtitle: "Bold solutions for modern global challenges",
      searchPlaceholder: "Search ideas, technologies, or tags...",
      filterAll: "All",
      tabs: {
        all: "All Ideas",
        trending: "Trending",
        latest: "Latest",
        featured: "Featured",
        favorites: "Favorites"
      },
      categories: {
        all: "All Disciplines",
        ai: "Artificial Intelligence",
        web: "Web & Engineering",
        space: "Space & Science",
        design: "Design & Creative",
        green: "Green Tech",
        business: "Startups & Business"
      },
      noResults: "No matching ideas found",
      noResultsDesc: "Try adjusting your search query or be the first to post your concept!",
      resetFilters: "Clear Filters",
      featuredBadge: "Featured Concept"
    },
    card: {
      by: "By:",
      viewDetails: "View Details",
      likes: "Likes",
      views: "Views",
      share: "Share",
      save: "Bookmark",
      saved: "Saved",
      edit: "Edit",
      delete: "Delete",
      deleteConfirm: "Are you sure you want to delete this idea?",
      stage: "Stage",
      impact: "Impact"
    },
    stages: {
      Concept: "Concept",
      Prototype: "Prototype",
      Alpha: "Alpha Trial",
      Production: "Production"
    },
    impacts: {
      Transformative: "Transformative",
      High: "High Impact",
      Moderate: "Moderate Impact"
    },
    detailModal: {
      aboutProject: "Detailed Project Overview",
      implementationStage: "Execution Stage",
      impactPotential: "Projected Outcome & Impact",
      tags: "Keywords & Tags",
      authorInfo: "Initiator & Creator",
      shareIdea: "Share This Concept",
      close: "Close",
      externalLink: "Open Project Link",
      likedNotice: "You liked this concept"
    },
    createModal: {
      title: "Publish New Idea",
      editTitle: "Edit Concept",
      subtitle: "Transform reality with your vision and technological solution",
      fieldTitle: "Idea Title *",
      fieldTitlePlaceholder: "e.g. Neuro-Quantum: Uzbek Language Large Model",
      fieldSummary: "Short Summary (1-2 sentences) *",
      fieldSummaryPlaceholder: "Briefly explain the problem this project solves...",
      fieldDescription: "Comprehensive Architecture & Details *",
      fieldDescriptionPlaceholder: "Working mechanism, core stack, roadmap, and practical value...",
      fieldCategory: "Discipline / Category *",
      fieldStage: "Development Stage",
      fieldImpact: "Projected Impact",
      fieldTags: "Tags (comma separated)",
      fieldTagsPlaceholder: "AI, Python, Neural Net, Open Source",
      fieldLink: "External Link or Repo (optional)",
      fieldLinkPlaceholder: "https://github.com/... or https://yourproject.com",
      fieldAuthor: "Author Name or Handle *",
      fieldAuthorPlaceholder: "Alex Reed",
      themeGradient: "Visual Accent Palette",
      submitCreate: "Publish Idea",
      submitUpdate: "Save Changes",
      cancel: "Cancel",
      errors: {
        titleRequired: "Please provide an idea title",
        summaryRequired: "Short summary is required",
        descriptionRequired: "Detailed description is required",
        authorRequired: "Author name is required"
      }
    },
    auth: {
      modalTitle: "Sign in to NEXORA",
      modalSubtitle: "Manage your profile, bookmarks, and submissions with Google",
      googleBtn: "Continue with Google",
      guestNotice: "Signing in allows you to save, bookmark, and publish ideas seamlessly.",
      connectedAs: "Successfully authenticated",
      emailLabel: "Google Account:",
      roleLabel: "Platform Role:",
      statsHeading: "Your Activity",
      myIdeas: "My Submissions",
      myFavorites: "Saved Favorites",
      joined: "Member since:",
      demoNote: "Authentication integrates with Google profile state.",
      continueWithUser: "Continue with Google account"
    },
    shareModal: {
      title: "Share with the World",
      subtitle: "Spread this concept to colleagues, founders, and engineers",
      copyLink: "Copy Link",
      copied: "Link copied to clipboard!",
      shareTelegram: "Share on Telegram",
      shareWhatsapp: "Share on WhatsApp",
      shareX: "Post to X (Twitter)",
      nativeShare: "Share via Apps"
    },
    storage: {
      title: "Data Engine & Persistence",
      desc: "NEXORA utilizes secure local browser storage. All ideas, bookmarks, and metrics persist safely across page reloads.",
      localActive: "Local Engine: Active",
      firebaseReady: "Firebase Sync Ready",
      infoText: "Ready for live cloud synchronization."
    },
    footer: {
      description: "NEXORA is a global open platform unifying breakthrough tech, AI, and scientific discoveries. Tomorrow begins now.",
      quickLinks: "Quick Navigation",
      categoriesTitle: "Disciplines",
      resources: "Resources",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved.",
      developedWith: "NEXORA Platform. Built for creators worldwide."
    },
    toast: {
      ideaCreated: "Idea published successfully!",
      ideaUpdated: "Idea updated successfully.",
      ideaDeleted: "Idea deleted from registry.",
      linkCopied: "Link copied to clipboard!",
      liked: "Liked concept.",
      unliked: "Removed like.",
      bookmarked: "Saved to favorites.",
      unbookmarked: "Removed from favorites.",
      signedIn: "Signed in with Google successfully!",
      signedOut: "Signed out.",
      fillRequired: "Please fill in all required fields."
    }
  },
  ru: {
    brandTagline: "Платформа Будущих Идей и Инноваций",
    nav: {
      ideas: "Идеи",
      trends: "Тренды",
      categories: "Категории",
      community: "Сообщество",
      about: "О нас",
      shareIdea: "Поделиться идеей",
      signIn: "Войти через Google",
      signOut: "Выйти",
      profile: "Профиль",
      menu: "Меню"
    },
    hero: {
      badge: "Инновационное Пространство Нового Поколения",
      titleStart: "Создаем Идеи Будущего",
      titleGradient: "Вместе с Вами",
      titleEnd: "",
      description: "NEXORA — футуристическая экосистема для прорывных концепций, научных открытий, технологических стартапов и независимых создателей.",
      exploreBtn: "Исследовать идеи",
      shareBtn: "Поделиться идеей",
      stats: {
        ideasCount: "480+",
        ideasLabel: "Инновационных идей",
        innovatorsCount: "14.2K",
        innovatorsLabel: "Активных исследователей",
        impactRate: "94.6%",
        impactLabel: "Практическая польза"
      }
    },
    core3d: {
      title: "Квантовый Объект NEXORA",
      hint: "Вращайте курсором или нажмите",
      rotateText: "Интерактивный 3D Кристалл",
      pulseBtn: "Импульс энергии",
      resetBtn: "Сброс"
    },
    explorer: {
      title: "Галерея Идей",
      subtitle: "Смелые решения для глобальных технологических вызовов",
      searchPlaceholder: "Поиск идей, технологий или тегов...",
      filterAll: "Все",
      tabs: {
        all: "Все идеи",
        trending: "Популярные",
        latest: "Новые",
        featured: "Избранные",
        favorites: "Закладки"
      },
      categories: {
        all: "Все направления",
        ai: "Искусственный Интеллект",
        web: "Веб и Разработка",
        space: "Космос и Наука",
        design: "Дизайн и Творчество",
        green: "Зеленые Технологии",
        business: "Стартапы и Бизнес"
      },
      noResults: "Подходящих идей не найдено",
      noResultsDesc: "Измените параметры поиска или опубликуйте свою идею первым!",
      resetFilters: "Сбросить фильтры",
      featuredBadge: "Главная Идея"
    },
    card: {
      by: "Автор:",
      viewDetails: "Подробнее",
      likes: "Лайк",
      views: "Просмотры",
      share: "Поделиться",
      save: "Сохранить",
      saved: "В сохраненных",
      edit: "Изменить",
      delete: "Удалить",
      deleteConfirm: "Вы действительно хотите удалить эту идею?",
      stage: "Стадия",
      impact: "Влияние"
    },
    stages: {
      Concept: "Концепт",
      Prototype: "Прототип",
      Alpha: "Альфа-тест",
      Production: "Внедрение"
    },
    impacts: {
      Transformative: "Прорывное влияние",
      High: "Высокое влияние",
      Moderate: "Умеренное влияние"
    },
    detailModal: {
      aboutProject: "О проекте подробно",
      implementationStage: "Стадия реализации",
      impactPotential: "Ожидаемый результат и эффект",
      tags: "Ключевые слова и теги",
      authorInfo: "Инициатор идеи",
      shareIdea: "Поделиться этой идеей",
      close: "Закрыть",
      externalLink: "Перейти к проекту",
      likedNotice: "Вам понравилась эта идея"
    },
    createModal: {
      title: "Опубликовать Новую Идею",
      editTitle: "Редактировать Идею",
      subtitle: "Измените мир своим видением и технологическим решением",
      fieldTitle: "Название идеи *",
      fieldTitlePlaceholder: "Например: Нейро-Квант: Большая Языковая Модель",
      fieldSummary: "Краткая суть (1-2 предложения) *",
      fieldSummaryPlaceholder: "Какую ключевую проблему решает этот проект...",
      fieldDescription: "Подробное описание и архитектура *",
      fieldDescriptionPlaceholder: "Принцип работы, используемые технологии и дорожная карта...",
      fieldCategory: "Направление / Категория *",
      fieldStage: "Стадия проекта",
      fieldImpact: "Ожидаемое влияние",
      fieldTags: "Теги (через запятую)",
      fieldTagsPlaceholder: "AI, Python, Нейросети, Open Source",
      fieldLink: "Ссылка на проект или репозиторий (опционально)",
      fieldLinkPlaceholder: "https://github.com/... или сайт",
      fieldAuthor: "Имя автора *",
      fieldAuthorPlaceholder: "Тимур Рахимов",
      themeGradient: "Визуальная тема",
      submitCreate: "Опубликовать Идею",
      submitUpdate: "Сохранить Изменения",
      cancel: "Отмена",
      errors: {
        titleRequired: "Пожалуйста, введите название идеи",
        summaryRequired: "Краткое описание обязательно",
        descriptionRequired: "Укажите подробное описание",
        authorRequired: "Введите имя автора"
      }
    },
    auth: {
      modalTitle: "Вход в NEXORA",
      modalSubtitle: "Управляйте идеями и закладками через аккаунт Google",
      googleBtn: "Продолжить с Google",
      guestNotice: "Авторизация позволяет сохранять, оценивать и редактировать ваши проекты.",
      connectedAs: "Вы успешно вошли в систему",
      emailLabel: "Google Аккаунт:",
      roleLabel: "Статус на платформе:",
      statsHeading: "Ваша активность",
      myIdeas: "Мои идеи",
      myFavorites: "Сохраненные",
      joined: "Дата регистрации:",
      demoNote: "Авторизация синхронизируется с профилем Google.",
      continueWithUser: "Войти с текущим Google аккаунтом"
    },
    shareModal: {
      title: "Поделиться с Миром",
      subtitle: "Расскажите коллегам и разработчикам об этой инновации",
      copyLink: "Копировать ссылку",
      copied: "Ссылка скопирована в буфер!",
      shareTelegram: "В Telegram",
      shareWhatsapp: "В WhatsApp",
      shareX: "В X (Twitter)",
      nativeShare: "Другие приложения"
    },
    storage: {
      title: "Система Хранения Данных",
      desc: "NEXORA сохраняет данные в локальной памяти вашего браузера. Все опубликованные идеи и закладки надежно защищены.",
      localActive: "Локальное хранилище: Активно",
      firebaseReady: "Готовность к Firebase Sync",
      infoText: "Готово к облачной синхронизации."
    },
    footer: {
      description: "NEXORA — глобальная платформа, объединяющая искусственный интеллект, космос и зеленые технологии.",
      quickLinks: "Быстрые Ссылки",
      categoriesTitle: "Направления",
      resources: "Ресурсы",
      privacy: "Политика конфиденциальности",
      terms: "Условия сервиса",
      rights: "Все права защищены.",
      developedWith: "Платформа NEXORA. Для инноваторов по всему миру."
    },
    toast: {
      ideaCreated: "Идея успешно опубликована!",
      ideaUpdated: "Идея успешно обновлена.",
      ideaDeleted: "Идея удалена.",
      linkCopied: "Ссылка скопирована!",
      liked: "Вы оценили эту идею.",
      unliked: "Лайк удален.",
      bookmarked: "Добавлено в закладки.",
      unbookmarked: "Удалено из закладок.",
      signedIn: "Вы успешно вошли через Google!",
      signedOut: "Вы вышли из профиля.",
      fillRequired: "Заполните все обязательные поля."
    }
  },
  tr: {
    brandTagline: "Geleceğin Fikirleri ve İnovasyon Platformu",
    nav: {
      ideas: "Fikirler",
      trends: "Trendler",
      categories: "Kategoriler",
      community: "Topluluk",
      about: "Hakkımızda",
      shareIdea: "Fikir Paylaş",
      signIn: "Google ile Giriş",
      signOut: "Çıkış Yap",
      profile: "Profilim",
      menu: "Menü"
    },
    hero: {
      badge: "Yeni Nesil İnovasyon Alanı",
      titleStart: "Geleceğin Fikirlerini",
      titleGradient: "Birlikte Şekillendiriyoruz",
      titleEnd: "",
      description: "NEXORA — çığır açan konseptler, bilimsel buluşlar ve teknoloji girişimleri için fütüristik bir ekosistemdir. Vizyonunuzu gerçeğe dönüştürün.",
      exploreBtn: "Fikirleri Keşfet",
      shareBtn: "Fikrimi Paylaş",
      stats: {
        ideasCount: "480+",
        ideasLabel: "Yenilikçi fikir",
        innovatorsCount: "14.2K",
        innovatorsLabel: "Aktif araştırmacı",
        impactRate: "94.6%",
        impactLabel: "Uygulama oranı"
      }
    },
    core3d: {
      title: "NEXORA Kuantum Çekirdeği",
      hint: "İmleçle döndürün veya tıklayın",
      rotateText: "Etkileşimli 3D Kristal",
      pulseBtn: "Enerji Nabzı",
      resetBtn: "Sıfırla"
    },
    explorer: {
      title: "Fikirler Galerisi",
      subtitle: "Küresel zorluklara cesur ve yenilikçi çözümler",
      searchPlaceholder: "Fikir, teknoloji veya etiket ara...",
      filterAll: "Tümü",
      tabs: {
        all: "Tüm Fikirler",
        trending: "Popüler",
        latest: "En Yeni",
        featured: "Seçilenler",
        favorites: "Favoriler"
      },
      categories: {
        all: "Tüm Alanlar",
        ai: "Yapay Zeka",
        web: "Web & Yazılım",
        space: "Uzay & Bilim",
        design: "Tasarım & Yaratıcılık",
        green: "Yeşil Teknolojiler",
        business: "Girişimler & İş"
      },
      noResults: "Eşleşen fikir bulunamadı",
      noResultsDesc: "Arama terimini değiştirin veya ilk fikrinizi siz ekleyin!",
      resetFilters: "Filtreleri Temizle",
      featuredBadge: "Öne Çıkan"
    },
    card: {
      by: "Yazar:",
      viewDetails: "Detayları Gör",
      likes: "Beğeni",
      views: "Görüntüleme",
      share: "Paylaş",
      save: "Kaydet",
      saved: "Kaydedildi",
      edit: "Düzenle",
      delete: "Sil",
      deleteConfirm: "Bu fikri silmek istediğinizden emin misiniz?",
      stage: "Aşama",
      impact: "Etki"
    },
    stages: {
      Concept: "Konsept",
      Prototype: "Prototip",
      Alpha: "Alfa Deneme",
      Production: "Yayında"
    },
    impacts: {
      Transformative: "Dönüştürücü Etki",
      High: "Yüksek Etki",
      Moderate: "Orta Etki"
    },
    detailModal: {
      aboutProject: "Proje Detayları",
      implementationStage: "Uygulama Aşaması",
      impactPotential: "Beklenen Etki ve Sonuç",
      tags: "Anahtar Kelimeler",
      authorInfo: "Fikir Sahibi",
      shareIdea: "Bu Fikri Paylaş",
      close: "Kapat",
      externalLink: "Proje Bağlantısına Git",
      likedNotice: "Bu fikri beğendiniz"
    },
    createModal: {
      title: "Yeni Fikir Paylaş",
      editTitle: "Fikri Düzenle",
      subtitle: "Teknolojik çözümünüzle geleceğe yön verin",
      fieldTitle: "Fikir Başlığı *",
      fieldTitlePlaceholder: "Örn: Nöro-Kuantum Büyük Dil Modeli",
      fieldSummary: "Kısa Özet (1-2 cümle) *",
      fieldSummaryPlaceholder: "Bu projenin çözdüğü temel sorun...",
      fieldDescription: "Detaylı Açıklama & Mimari *",
      fieldDescriptionPlaceholder: "Çalışma prensibi, teknolojiler ve yol haritası...",
      fieldCategory: "Kategori *",
      fieldStage: "Geliştirme Aşaması",
      fieldImpact: "Beklenen Etki",
      fieldTags: "Etiketler (virgülle ayırın)",
      fieldTagsPlaceholder: "AI, Python, Sinir Ağları, Açık Kaynak",
      fieldLink: "Bağlantı veya Repo (isteğe bağlı)",
      fieldLinkPlaceholder: "https://github.com/...",
      fieldAuthor: "Yazar Adı *",
      fieldAuthorPlaceholder: "Emre Yıldız",
      themeGradient: "Görsel Renk Teması",
      submitCreate: "Fikri Yayınla",
      submitUpdate: "Değişiklikleri Kaydet",
      cancel: "İptal",
      errors: {
        titleRequired: "Lütfen fikir başlığı girin",
        summaryRequired: "Kısa özet zorunludur",
        descriptionRequired: "Detaylı açıklama gereklidir",
        authorRequired: "Yazar adı zorunludur"
      }
    },
    auth: {
      modalTitle: "NEXORA'ya Giriş Yap",
      modalSubtitle: "Google hesabınızla profilinizi ve fikirlerinizi yönetin",
      googleBtn: "Google ile Devam Et",
      guestNotice: "Giriş yaparak fikirlerinizi kaydedebilir ve yönetebilirsiniz.",
      connectedAs: "Başarıyla giriş yaptınız",
      emailLabel: "Google Hesabı:",
      roleLabel: "Platform Rolü:",
      statsHeading: "Aktiviteniz",
      myIdeas: "Fikirlerim",
      myFavorites: "Favorilerim",
      joined: "Kayıt Tarihi:",
      demoNote: "Google profil durumu ile entegredir.",
      continueWithUser: "Google hesabıyla devam et"
    },
    shareModal: {
      title: "Fikri Dünyayla Paylaş",
      subtitle: "Bu yeniliği arkadaşlarınız ve toplulukla paylaşın",
      copyLink: "Bağlantıyı Kopyala",
      copied: "Bağlantı kopyalandı!",
      shareTelegram: "Telegram'da Paylaş",
      shareWhatsapp: "WhatsApp'ta Paylaş",
      shareX: "X'te Paylaş",
      nativeShare: "Uygulamalarla Paylaş"
    },
    storage: {
      title: "Veri Depolama Motoru",
      desc: "NEXORA verileri tarayıcınızın güvenli yerel hafızasında saklanır. Tüm fikirler ve beğeniler güvenle korunur.",
      localActive: "Yerel Hafıza: Aktif",
      firebaseReady: "Firebase Entegrasyonu Hazır",
      infoText: "Bulut senkronizasyonu için hazır durumda."
    },
    footer: {
      description: "NEXORA, yapay zeka ve bilimsel buluşları bir araya getiren küresel inovasyon platformudur.",
      quickLinks: "Hızlı Bağlantılar",
      categoriesTitle: "Alanlar",
      resources: "Kaynaklar",
      privacy: "Gizlilik Politikası",
      terms: "Kullanım Koşulları",
      rights: "Tüm hakları saklıdır.",
      developedWith: "NEXORA Platformu. Dünyanın tüm üreticileri için."
    },
    toast: {
      ideaCreated: "Fikir başarıyla yayınlandı!",
      ideaUpdated: "Fikir güncellendi.",
      ideaDeleted: "Fikir silindi.",
      linkCopied: "Bağlantı kopyalandı!",
      liked: "Fikir beğenildi.",
      unliked: "Beğeni kaldırıldı.",
      bookmarked: "Favorilere eklendi.",
      unbookmarked: "Favorilerden çıkarıldı.",
      signedIn: "Google ile başarıyla giriş yapıldı!",
      signedOut: "Çıkış yapıldı.",
      fillRequired: "Lütfen gerekli tüm alanları doldurun."
    }
  },
  es: {
    brandTagline: "Plataforma de Ideas e Innovación del Futuro",
    nav: {
      ideas: "Ideas",
      trends: "Tendencias",
      categories: "Categorías",
      community: "Comunidad",
      about: "Nosotros",
      shareIdea: "Compartir Idea",
      signIn: "Entrar con Google",
      signOut: "Cerrar sesión",
      profile: "Mi Perfil",
      menu: "Menú"
    },
    hero: {
      badge: "Espacio de Innovación de Próxima Generación",
      titleStart: "Construyendo las Ideas del",
      titleGradient: "Mañana Juntos",
      titleEnd: "",
      description: "NEXORA es un ecosistema futurista para conceptos revolucionarios, ciencia avanzada, startups tecnológicas y visionarios globales.",
      exploreBtn: "Explorar Ideas",
      shareBtn: "Compartir mi Idea",
      stats: {
        ideasCount: "480+",
        ideasLabel: "Ideas innovadoras",
        innovatorsCount: "14.2K",
        innovatorsLabel: "Investigadores activos",
        impactRate: "94.6%",
        impactLabel: "Tasa de impacto"
      }
    },
    core3d: {
      title: "Núcleo Cuántico NEXORA",
      hint: "Gira con el cursor o haz clic",
      rotateText: "Cristal 3D Interactivo",
      pulseBtn: "Pulso de Energía",
      resetBtn: "Restablecer"
    },
    explorer: {
      title: "Galería de Ideas",
      subtitle: "Soluciones audaces para desafíos globales",
      searchPlaceholder: "Buscar ideas, tecnologías o etiquetas...",
      filterAll: "Todas",
      tabs: {
        all: "Todas las Ideas",
        trending: "Tendencias",
        latest: "Más Recientes",
        featured: "Destacadas",
        favorites: "Favoritos"
      },
      categories: {
        all: "Todas las Áreas",
        ai: "Inteligencia Artificial",
        web: "Web y Desarrollo",
        space: "Espacio y Ciencia",
        design: "Diseño y Creatividad",
        green: "Tecnología Verde",
        business: "Startups y Negocios"
      },
      noResults: "No se encontraron ideas coincidentes",
      noResultsDesc: "Ajusta tu búsqueda o sé el primero en publicar una idea.",
      resetFilters: "Restablecer Filtros",
      featuredBadge: "Idea Destacada"
    },
    card: {
      by: "Por:",
      viewDetails: "Ver Detalles",
      likes: "Me gusta",
      views: "Vistas",
      share: "Compartir",
      save: "Guardar",
      saved: "Guardado",
      edit: "Editar",
      delete: "Eliminar",
      deleteConfirm: "¿Seguro que deseas eliminar esta idea?",
      stage: "Fase",
      impact: "Impacto"
    },
    stages: {
      Concept: "Concepto",
      Prototype: "Prototipo",
      Alpha: "Fase Alfa",
      Production: "En Producción"
    },
    impacts: {
      Transformative: "Transformador",
      High: "Alto Impacto",
      Moderate: "Impacto Moderado"
    },
    detailModal: {
      aboutProject: "Detalles del Proyecto",
      implementationStage: "Fase de Implementación",
      impactPotential: "Resultado e Impacto Estimado",
      tags: "Palabras Clave",
      authorInfo: "Creador del Concepto",
      shareIdea: "Compartir Esta Idea",
      close: "Cerrar",
      externalLink: "Abrir Enlace del Proyecto",
      likedNotice: "Te gustó esta idea"
    },
    createModal: {
      title: "Publicar Nueva Idea",
      editTitle: "Editar Idea",
      subtitle: "Transforma la realidad con tu visión y solución tecnológica",
      fieldTitle: "Título de la Idea *",
      fieldTitlePlaceholder: "Ej: Neuro-Quantum: Modelo Masivo de Lenguaje",
      fieldSummary: "Resumen Breve (1-2 oraciones) *",
      fieldSummaryPlaceholder: "Explica brevemente qué problema resuelve este proyecto...",
      fieldDescription: "Descripción y Arquitectura Detallada *",
      fieldDescriptionPlaceholder: "Mecanismo de funcionamiento, tecnologías y hoja de ruta...",
      fieldCategory: "Categoría *",
      fieldStage: "Fase de Desarrollo",
      fieldImpact: "Impacto Esperado",
      fieldTags: "Etiquetas (separadas por comas)",
      fieldTagsPlaceholder: "IA, Python, Redes Neuronales, Código Abierto",
      fieldLink: "Enlace o Repositorio (opcional)",
      fieldLinkPlaceholder: "https://github.com/...",
      fieldAuthor: "Nombre del Autor *",
      fieldAuthorPlaceholder: "Carlos Mendez",
      themeGradient: "Tema de Color Visual",
      submitCreate: "Publicar Idea",
      submitUpdate: "Guardar Cambios",
      cancel: "Cancelar",
      errors: {
        titleRequired: "Por favor ingresa un título",
        summaryRequired: "El resumen breve es obligatorio",
        descriptionRequired: "La descripción detallada es obligatoria",
        authorRequired: "El nombre del autor es obligatorio"
      }
    },
    auth: {
      modalTitle: "Iniciar Sesión en NEXORA",
      modalSubtitle: "Gestiona tu perfil, ideas y favoritos con tu cuenta de Google",
      googleBtn: "Continuar con Google",
      guestNotice: "Al iniciar sesión podrás guardar, votar y administrar tus proyectos.",
      connectedAs: "Sesión iniciada con éxito",
      emailLabel: "Cuenta de Google:",
      roleLabel: "Rol en la plataforma:",
      statsHeading: "Tu Actividad",
      myIdeas: "Mis Ideas",
      myFavorites: "Mis Favoritos",
      joined: "Fecha de registro:",
      demoNote: "Autenticación conectada al perfil de Google.",
      continueWithUser: "Continuar con cuenta de Google"
    },
    shareModal: {
      title: "Compartir con el Mundo",
      subtitle: "Difunde esta propuesta con creadores e ingenieros",
      copyLink: "Copiar Enlace",
      copied: "¡Enlace copiado al portapapeles!",
      shareTelegram: "Compartir en Telegram",
      shareWhatsapp: "Compartir en WhatsApp",
      shareX: "Publicar en X (Twitter)",
      nativeShare: "Otras Aplicaciones"
    },
    storage: {
      title: "Motor de Almacenamiento",
      desc: "NEXORA almacena los datos de forma segura en la memoria local del navegador. Todas las ideas y favoritos se conservan entre sesiones.",
      localActive: "Almacenamiento Local: Activo",
      firebaseReady: "Listo para Sincronización Firebase",
      infoText: "Preparado para sincronización en la nube."
    },
    footer: {
      description: "NEXORA es una plataforma global para la convergencia de IA, exploración espacial y tecnología sostenible.",
      quickLinks: "Enlaces Rápidos",
      categoriesTitle: "Disciplinas",
      resources: "Recursos",
      privacy: "Política de Privacidad",
      terms: "Términos del Servicio",
      rights: "Todos los derechos reservados.",
      developedWith: "Plataforma NEXORA. Creada para innovadores de todo el mundo."
    },
    toast: {
      ideaCreated: "¡Idea publicada con éxito!",
      ideaUpdated: "Idea actualizada con éxito.",
      ideaDeleted: "Idea eliminada.",
      linkCopied: "¡Enlace copiado al portapapeles!",
      liked: "Te gusta esta idea.",
      unliked: "Me gusta eliminado.",
      bookmarked: "Guardado en favoritos.",
      unbookmarked: "Eliminado de favoritos.",
      signedIn: "¡Sesión iniciada con Google con éxito!",
      signedOut: "Sesión cerrada.",
      fillRequired: "Por favor completa todos los campos requeridos."
    }
  }
};
