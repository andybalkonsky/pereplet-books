// Снимок публичных издательских карточек. Аннотации — отдельная редакционная подборка.
export const BOOKS = [
  {
    "id": "earthsea",
    "title": "Волшебник Земноморья",
    "author": "Урсула Ле Гуин",
    "genre": "Фэнтези",
    "art": "arch",
    "color": "#254e4a",
    "accent": "#e9c788",
    "summary": "Архипелаг, где у каждой вещи есть истинное имя, и юноша, которому предстоит учиться магии. Неторопливое фэнтези о взрослении, ответственности и поиске равновесия.",
    "related": [
      {
        "id": "hobbit",
        "type": "Похожее настроение"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-09948-7",
      "translator": "Ирина Тогоева",
      "source": "https://azbooka.ru/books/volshebnik-zemnomorya-dci9",
      "evidence": "Карточка издателя: русский текст, переводчик Ирина Тогоева, ISBN.",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05"
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    },
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/f693c295-0678-4a1c-8b59-9710db6726cb.jpg"
  },
  {
    "id": "prince",
    "title": "Маленький принц",
    "author": "Антуан де Сент-Экзюпери",
    "genre": "Философская сказка",
    "art": "planet",
    "color": "#28485f",
    "accent": "#efcf91",
    "summary": "В пустыне лётчик встречает необычного маленького путешественника. Лаконичная сказка для взрослых и детей, в которой простые вопросы становятся разговором о дружбе, заботе и внимании к миру.",
    "related": [
      {
        "id": "alice",
        "type": "Также сказка для любого возраста"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-04-167065-8",
      "translator": "Нора Галь",
      "source": "https://eksmo.ru/amp/book/malenkiy-prints-il-n-golts-ITD1271088/",
      "evidence": "Издатель прямо указывает полный русский перевод Норы Галь.",
      "publisher": "Эксмо",
      "checkedAt": "2026-11-05"
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    },
    "coverUrl": "https://cdn.eksmo.ru/v2/ITD000000001271088/COVER/cover1__w600.jpg"
  },
  {
    "id": "alice",
    "title": "Алиса в Стране чудес",
    "author": "Льюис Кэрролл",
    "genre": "Литературная сказка",
    "art": "key",
    "color": "#9d543e",
    "accent": "#f0d7ac",
    "summary": "Любопытство уводит Алису из привычного мира туда, где язык и логика играют по своим правилам. Сказка с абсурдным юмором, загадками и особым удовольствием от словесной игры.",
    "related": [
      {
        "id": "looking-glass",
        "type": "Продолжение · книга 2"
      },
      {
        "id": "prince",
        "type": "Родственная сказочная интонация"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-25924-9",
      "translator": "Нина Демурова",
      "source": "https://azbooka.ru/books/alisa-v-strane-chydes-etjn",
      "evidence": "Карточка издателя содержит имя переводчика и ISBN.",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05"
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    },
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/a74731c7-7530-471a-9ce5-f39a788c8ca4.jpg"
  },
  {
    "id": "looking-glass",
    "title": "Алиса в Зазеркалье",
    "author": "Льюис Кэрролл",
    "genre": "Литературная сказка",
    "art": "chess",
    "color": "#686446",
    "accent": "#f1dbad",
    "summary": "Алиса оказывается по другую сторону зеркала — в мире шахматных правил, странной поэзии и неожиданных разговоров. Продолжение, в котором привычные вещи снова становятся удивительными.",
    "related": [
      {
        "id": "alice",
        "type": "Начало · книга 1"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-22695-1",
      "translator": "Нина Демурова; стихи — С. Маршак, Д. Орловская, О. Седакова",
      "source": "https://azbooka.ru/books/alisa-v-strane-chydes-alisa-v-zazerkale",
      "evidence": "Русский сборник обеих книг; издатель подтверждает перевод Демуровой. ISBN относится к сборнику.",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05"
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    },
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/db9d95a9-b61e-470a-9de8-75b9301168d9.jpg"
  },
  {
    "id": "pride",
    "title": "Гордость и предубеждение",
    "author": "Джейн Остин",
    "genre": "Классический роман",
    "art": "flower",
    "color": "#6f493f",
    "accent": "#eed7b3",
    "summary": "В английской провинции знакомства и семейные ожидания становятся настоящим испытанием для независимого взгляда на жизнь. Ироничный роман о первых впечатлениях, общественных условностях и умении слышать другого.",
    "related": [
      {
        "id": "jane",
        "type": "Ещё английская классика"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-10941-4",
      "translator": "И. С. Маршак; в сборнике также Ирина Гурова и Мария Кан",
      "source": "https://azbooka.ru/books/gordost-i-predubezhdenie-hgdu",
      "evidence": "Русское издание-сборник: издатель перечисляет переводчиков и ISBN.",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05"
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    },
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/55b2067e-cccd-454f-b1da-595d7af798f1.jpg"
  },
  {
    "id": "jane",
    "title": "Джейн Эйр",
    "author": "Шарлотта Бронте",
    "genre": "Классический роман",
    "art": "window",
    "color": "#49445a",
    "accent": "#dfc6a4",
    "summary": "Молодая гувернантка ищет своё место в мире, где происхождение часто важнее способностей. Атмосферный английский роман о достоинстве, самостоятельности и внутренней свободе.",
    "related": [
      {
        "id": "pride",
        "type": "Ещё английская классика"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-05734-0",
      "translator": "Ирина Гурова",
      "source": "https://azbooka.ru/books/dzheyn-eyr-bgxy",
      "evidence": "Карточка издателя: перевод Ирины Гуровой, ISBN.",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05"
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    },
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/4debfd3c-31a8-4910-bb26-161a6810228a.jpg"
  },
  {
    "id": "hobbit",
    "title": "Хоббит, или Туда и обратно",
    "author": "Дж. Р. Р. Толкин",
    "genre": "Фэнтези",
    "art": "mountain",
    "color": "#57603c",
    "accent": "#e8c68d",
    "summary": "Любитель домашнего уюта Бильбо получает приглашение в путешествие с гномами. Приключенческая сказка о далёких дорогах, неожиданной смелости и радости возвращения домой.",
    "related": [
      {
        "id": "earthsea",
        "type": "Другой мир классического фэнтези"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-17-145371-8",
      "translator": "Наталья Рахманова; стихи — Григорий Кружков",
      "source": "https://ast.ru/book/khobbit-861406/",
      "evidence": "Карточка издательства АСТ подтверждает русский перевод Н. Рахмановой и ISBN конкретного издания.",
      "publisher": "АСТ",
      "checkedAt": "2026-11-05"
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    },
    "coverUrl": "https://cdn.ast.ru/v2/ASE000000000861406/COVER/cover1__w340.jpg"
  },
  {
    "id": "silo",
    "title": "Укрытие. Иллюзия",
    "author": "Хью Хауи",
    "genre": "Фантастика",
    "art": "stairs",
    "color": "#55574e",
    "accent": "#e1c58e",
    "summary": "Жизнь целого сообщества проходит внутри огромного подземного укрытия. Замкнутый мир, строгие правила и вопросы о том, как устроена реальность за пределами привычного.",
    "related": [
      {
        "id": "ringworld",
        "type": "Ещё мир необычного устройства"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-30757-5",
      "translator": "Андрей Новиков",
      "source": "https://azbooka.ru/books/ukrytie-kniga-1-illuziya-podarochnoe-izdanie",
      "evidence": "Карточка издателя подтверждает переводчика и ISBN русского издания.",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05"
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    },
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/20d334a1-75fa-4f0f-a07d-7f1c756b33b0.jpg"
  },
  {
    "id": "ringworld",
    "title": "Мир-Кольцо",
    "author": "Ларри Нивен",
    "genre": "Фантастика",
    "art": "ring",
    "color": "#293e54",
    "accent": "#e5b66f",
    "summary": "Экспедиция отправляется исследовать колоссальную искусственную конструкцию в космосе. Научная фантастика для тех, кому нравится удивляться масштабу идей и воображать совершенно иные миры.",
    "related": [
      {
        "id": "builders",
        "type": "Продолжение · книга 2"
      },
      {
        "id": "silo",
        "type": "Ещё мир необычного устройства"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-12916-0",
      "translator": "Кирилл Плешков",
      "source": "https://azbooka.ru/books/zakoltsovannyy-mir-inzhenery-zakoltsovannogo-mira-ttxa",
      "evidence": "Издатель подтверждает оба романа в русском сборнике и перевод Плешкова. ISBN относится к сборнику.",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05"
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    },
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/771c49b8-7dd7-4794-af87-b863b1878d25.jpg"
  },
  {
    "id": "builders",
    "title": "Строители Мира-Кольца",
    "author": "Ларри Нивен",
    "genre": "Фантастика",
    "art": "orbit",
    "color": "#664b39",
    "accent": "#edcc91",
    "summary": "Возвращение к грандиозному инженерному миру, начатому в «Мире-Кольце». Продолжение научно-фантастического цикла, в котором исследование чужой конструкции становится исследованием границ знания.",
    "related": [
      {
        "id": "ringworld",
        "type": "Начало · книга 1"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-12916-0",
      "translator": "Кирилл Плешков",
      "source": "https://azbooka.ru/books/zakoltsovannyy-mir-inzhenery-zakoltsovannogo-mira-ttxa",
      "evidence": "Оба романа перечислены издателем в одном русском издании. ISBN относится к сборнику.",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05"
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    },
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/771c49b8-7dd7-4794-af87-b863b1878d25.jpg"
  },
  {
    "id": "cat-eyes",
    "title": "Глаза кошки",
    "author": "Мёбиус, Алехандро Ходоровски",
    "genre": "Графический роман",
    "art": "eye",
    "color": "#b49343",
    "accent": "#2b302c",
    "summary": "Короткая графическая притча на границе сна и тревожного видения. Минимум слов, выразительный рисунок и сюрреалистическая атмосфера; подойдёт любителям необычного визуального повествования.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-27142-5",
      "translator": "Михаил Хачатуров",
      "source": "https://azbooka.ru/books/glaza-koshki",
      "evidence": "Карточка издателя: русский перевод Михаила Хачатурова, ISBN.",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05"
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    },
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/9c9d2113-c406-45db-adcc-00ce7e6fbda2.jpg"
  },
  {
    "id": "az-portret-doriana-greya-jh62",
    "title": "Портрет Дориана Грея",
    "author": "Оскар Уайльд",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/0d0ab237-f490-4e3a-b94a-6ec704d3f487.jpg",
    "summary": "Лондон, искусство и культ молодости. История о тщеславии, влиянии чужих идей и ответственности за собственный выбор.",
    "related": [
      {
        "id": "az-kentervilskoe-prividenie",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-04564-4",
      "translator": "Дмитрий Аграчев, Кирилл Королев, Светлана Самострелова",
      "source": "https://azbooka.ru/books/portret-doriana-greya-jh62",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-tainstvennyy-ostrov-fwns",
    "title": "Таинственный остров",
    "author": "Жюль Верн",
    "genre": "Приключения",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/b49a9e33-3781-4a86-a2f8-5e6d8104ccd3.jpg",
    "summary": "Группа людей оказывается вдали от цивилизации. Инженерная изобретательность и взаимовыручка помогают обустроить жизнь на загадочном острове.",
    "related": [
      {
        "id": "az-dvadtsat-tysyach-le-pod-vodoy-pdtx",
        "type": "Другие книги автора"
      },
      {
        "id": "az-vokrug-sveta-v-vosemdesyat-dney-7bzo",
        "type": "Другие книги автора"
      },
      {
        "id": "az-pyatnadtsatiletniy-kapitan-jms4",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-29320-5",
      "translator": "Марко Вовчок",
      "source": "https://azbooka.ru/books/tainstvennyy-ostrov-fwns",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-sobor-parizhskoy-bogomateri-w8r5",
    "title": "Собор Парижской Богоматери",
    "author": "Виктор Гюго",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/f36b2cd4-773a-4f8e-b10b-a2dc5adb2f19.jpg",
    "summary": "Средневековый Париж, величественный собор и люди, чьи жизни связаны с ним. Роман о сострадании и общественных предрассудках.",
    "related": [
      {
        "id": "az-chelovek-kotoryy-smeetsya",
        "type": "Другие книги автора"
      },
      {
        "id": "az-otverzhennye-zc7c",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-04726-6",
      "translator": "Надежда Коган",
      "source": "https://azbooka.ru/books/sobor-parizhskoy-bogomateri-w8r5",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-dvadtsat-tysyach-le-pod-vodoy-pdtx",
    "title": "Двадцать тысяч лье под водой",
    "author": "Жюль Верн",
    "genre": "Приключения",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/45e5a90f-3f67-4f9f-984c-4821b2e2e319.jpg",
    "summary": "Морская экспедиция знакомится с необыкновенным подводным миром. Научная любознательность встречается с тайной капитана Немо.",
    "related": [
      {
        "id": "az-tainstvennyy-ostrov-fwns",
        "type": "Другие книги автора"
      },
      {
        "id": "az-vokrug-sveta-v-vosemdesyat-dney-7bzo",
        "type": "Другие книги автора"
      },
      {
        "id": "az-pyatnadtsatiletniy-kapitan-jms4",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-30500-7",
      "translator": "Анонимный",
      "source": "https://azbooka.ru/books/dvadtsat-tysyach-le-pod-vodoy-pdtx",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-grozovoy-pereval",
    "title": "Грозовой перевал",
    "author": "Эмили Бронте",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/b69bd5bd-c1b4-41be-a142-3c94b054a636.jpg",
    "summary": "Два поместья среди йоркширских пустошей. Мрачный роман о привязанности, гордости и напряжённых отношениях между поколениями.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-25230-1",
      "translator": "Надежда Вольпин",
      "source": "https://azbooka.ru/books/grozovoy-pereval",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-bogi-grobnitsy-ychenye",
    "title": "Боги, гробницы, ученые",
    "author": "Курт Церам",
    "genre": "История",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/62ea9da0-b195-4da6-ace4-9fcd4f0ca11a.jpg",
    "summary": "История археологических открытий через биографии исследователей. Древние цивилизации становятся ближе благодаря рассказу о поисках их следов.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-27663-5",
      "translator": "А. Варшавский",
      "source": "https://azbooka.ru/books/bogi-grobnitsy-ychenye",
      "publisher": "КоЛибри",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-shlyapa-volshebnika-mymi-trolli-i-vse-vse-vse-kn-1",
    "title": "Шляпа Волшебника. Муми-тролли и все-все-все. Книга 1",
    "author": "Туве Янссон",
    "genre": "Литературная сказка",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/214b6c94-c4a6-441e-a4ff-299124452be1.jpg",
    "summary": "Муми-долина, дружба и маленькие повседневные чудеса. Сборник историй Туве Янссон о любопытстве и принятии непохожих на тебя.",
    "related": [
      {
        "id": "az-memuary-mumi-papy-wllv",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-23642-4",
      "translator": "Мария Людковская, Евгения Тиновицкая",
      "source": "https://azbooka.ru/books/shlyapa-volshebnika-mymi-trolli-i-vse-vse-vse-kn-1",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-taynaya-istoriya-pitera-pena-graficheskiy-roman",
    "title": "Тайная история Питера Пэна: графический роман",
    "author": "Хосе-Луис  Муньера, Джеймс Мэтью Барри",
    "genre": "Графический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/3426a61b-03e5-4c18-9b23-80ff32b1fec8.jpg",
    "summary": "Новая визуальная интерпретация мира Питера Пэна. Сказочное пространство знакомой истории переосмыслено средствами графического романа.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-29623-7",
      "translator": "Глеб Марьясов",
      "source": "https://azbooka.ru/books/taynaya-istoriya-pitera-pena-graficheskiy-roman",
      "publisher": "КоЛибри",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-chelovek-kotoryy-smeetsya",
    "title": "Человек, который смеется",
    "author": "Виктор Гюго",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/c3e1f4f3-75f1-4bfe-9cf1-1c4029760d87.jpg",
    "summary": "Англия, бродячий театр и сложное устройство общества. Роман Гюго о достоинстве человека и жестокости внешних оценок.",
    "related": [
      {
        "id": "az-sobor-parizhskoy-bogomateri-w8r5",
        "type": "Другие книги автора"
      },
      {
        "id": "az-otverzhennye-zc7c",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-23511-3",
      "translator": "Бенедикт Лившиц",
      "source": "https://azbooka.ru/books/chelovek-kotoryy-smeetsya",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-velikiy-getsbi-n3zn",
    "title": "Великий Гэтсби",
    "author": "Фрэнсис Скотт Фицджеральд",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/e61d6702-fa5b-4210-baff-8796382eeef2.jpg",
    "summary": "Американские вечеринки эпохи джаза и загадочный сосед рассказчика. Роман о мечте, социальном положении и очаровании прошлого.",
    "related": [
      {
        "id": "az-noch-nezhna-izjg",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-04728-0",
      "translator": "Мария Лорие, Евгения Калашникова",
      "source": "https://azbooka.ru/books/velikiy-getsbi-n3zn",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-dvenadtsat-tsezarey-obraz-vlasti-ot-drevnosti-do-sovremennosti",
    "title": "Двенадцать цезарей. Образы власти от Античности до современности",
    "author": "Мэри Бирд",
    "genre": "История",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/745e954a-7c77-4fb8-8258-16fd171ba335.jpg",
    "summary": "Как римских правителей изображали на протяжении веков. Мэри Бирд рассматривает связь искусства, репутации и политической власти.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-27886-8",
      "translator": "Евгений Поникаров",
      "source": "https://azbooka.ru/books/dvenadtsat-tsezarey-obraz-vlasti-ot-drevnosti-do-sovremennosti",
      "publisher": "КоЛибри",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-kosmer-taynaya-istoriya",
    "title": "Космер. Тайная история",
    "author": "Брендон Сандерсон",
    "genre": "Фэнтези",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/e1813b02-c3fa-4f59-ad5a-274ecb821cfd.jpg",
    "summary": "Дополнительная история вселенной Космера. Для читателей, знакомых с «Рождённым туманом»: книга связана с событиями основного цикла.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-23731-5",
      "translator": "Александр Жаворонков, Ирина  Колесникова, Наталья Осояну, Юрий Павлов",
      "source": "https://azbooka.ru/books/kosmer-taynaya-istoriya",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-piter-pen-tess",
    "title": "Питер Пэн",
    "author": "Джеймс Мэтью Барри",
    "genre": "Литературная сказка",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/9de0ec48-9f6a-4f50-b52c-53267e947256.jpg",
    "summary": "Детская комната становится началом пути в страну, где можно не взрослеть. Приключения, воображение и вопрос о цене вечного детства.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-16053-8",
      "translator": "Ирина Токмакова",
      "source": "https://azbooka.ru/books/piter-pen-tess",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-vokrug-sveta-v-vosemdesyat-dney-7bzo",
    "title": "Вокруг света в восемьдесят дней",
    "author": "Жюль Верн",
    "genre": "Приключения",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/15b42445-af34-401b-93be-594072c06a99.jpg",
    "summary": "Филеас Фогг заключает необычное пари и отправляется вокруг света. Приключенческий роман о точности, неожиданностях и дороге.",
    "related": [
      {
        "id": "az-tainstvennyy-ostrov-fwns",
        "type": "Другие книги автора"
      },
      {
        "id": "az-dvadtsat-tysyach-le-pod-vodoy-pdtx",
        "type": "Другие книги автора"
      },
      {
        "id": "az-pyatnadtsatiletniy-kapitan-jms4",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-11963-5",
      "translator": "Николай Габинский",
      "source": "https://azbooka.ru/books/vokrug-sveta-v-vosemdesyat-dney-7bzo",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-gvianskie-robinzony",
    "title": "Гвианские робинзоны",
    "author": "Луи Буссенар",
    "genre": "Приключения",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/f176a4d0-f348-4db8-ade7-b91c9fcb23b6.jpg",
    "summary": "Путешествие по Южной Америке превращается в испытание находчивости. Приключенческая проза о природе, опасностях и взаимной поддержке.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-24450-4",
      "translator": "Алексей Лущанов",
      "source": "https://azbooka.ru/books/gvianskie-robinzony",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-memuary-mumi-papy-wllv",
    "title": "Мемуары Муми-папы",
    "author": "Туве Янссон",
    "genre": "Литературная сказка",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/3fd9dc2f-ee03-44c9-9ad0-c92cee990b9a.jpg",
    "summary": "Муми-папа вспоминает свою молодость и рассказывает о прежних приключениях. Тёплая книга об истории семьи и радости выдумки.",
    "related": [
      {
        "id": "az-shlyapa-volshebnika-mymi-trolli-i-vse-vse-vse-kn-1",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-14003-5",
      "translator": "Мария Людковская",
      "source": "https://azbooka.ru/books/memuary-mumi-papy-wllv",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-dzhonatan-strendzh-i-mister-norrell-6rv9",
    "title": "Джонатан Стрендж и мистер Норрелл",
    "author": "Сюзанна Кларк",
    "genre": "Фэнтези",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/478f508d-df48-4f5f-8440-8dd2e643797b.jpg",
    "summary": "В альтернативной Англии XIX века два волшебника берутся вернуть практическую магию. Неторопливое фэнтези с исторической атмосферой.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-11200-1",
      "translator": "Марина Клеветенко, Сергей Самуйлов, Андрей Коноплев, Екатерина Доброхотова-Майкова",
      "source": "https://azbooka.ru/books/dzhonatan-strendzh-i-mister-norrell-6rv9",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-malenkie-zhenshchiny-ravd",
    "title": "Маленькие женщины",
    "author": "Луиза Мэй Олкотт",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/a52fb761-2585-4946-8617-aec8313fea9f.jpg",
    "summary": "Четыре сестры Марч взрослеют, строят планы и ищут своё призвание. Семейный роман о творчестве, заботе и самостоятельности.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-06623-6",
      "translator": "Ирина Бессмертная",
      "source": "https://azbooka.ru/books/malenkie-zhenshchiny-ravd",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-novyy-chelovek-nevidimka",
    "title": "Новый человек-невидимка",
    "author": "Джон Диксон  Карр",
    "genre": "Детектив",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/e1ffdaa4-2ada-4468-9f1c-cf5437a51137.jpg",
    "summary": "Детективная загадка Джона Диксона Карра. Для тех, кому нравятся необычные обстоятельства, игра с логикой и поиск рационального объяснения.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-25764-1",
      "translator": "Вадим  Грушевский, Наталия Нестерова, Елена Скляренко",
      "source": "https://azbooka.ru/books/novyy-chelovek-nevidimka",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-puteshestviya-gullivera-qnlw",
    "title": "Путешествия Гулливера",
    "author": "Джонатан Свифт",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/d248471b-112c-4f2c-b7ec-528e732b9c09.jpg",
    "summary": "Путешественник встречает общества с удивительными обычаями. Сатирическая фантазия, в которой вымышленные страны помогают иначе увидеть собственный мир.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-19947-7",
      "translator": "Тамара Габбе",
      "source": "https://azbooka.ru/books/puteshestviya-gullivera-qnlw",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-pyatnadtsatiletniy-kapitan-jms4",
    "title": "Пятнадцатилетний капитан",
    "author": "Жюль Верн",
    "genre": "Приключения",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/8480caf4-4511-4c07-83be-0b19b39b1a67.jpg",
    "summary": "Юному моряку приходится столкнуться с ответственностью взрослого капитана. Морское путешествие становится испытанием знаний и характера.",
    "related": [
      {
        "id": "az-tainstvennyy-ostrov-fwns",
        "type": "Другие книги автора"
      },
      {
        "id": "az-dvadtsat-tysyach-le-pod-vodoy-pdtx",
        "type": "Другие книги автора"
      },
      {
        "id": "az-vokrug-sveta-v-vosemdesyat-dney-7bzo",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-12585-8",
      "translator": "Марко Вовчок",
      "source": "https://azbooka.ru/books/pyatnadtsatiletniy-kapitan-jms4",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-mobi-dik-ili-belyy-kit-i9hx",
    "title": "Моби Дик, или Белый Кит",
    "author": "Герман Мелвилл",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/3ff46ce0-106f-4423-88ff-794bf6d12b1e.jpg",
    "summary": "Рассказчик нанимается на китобойное судно и знакомится с его капитаном. Морской роман о природе, одержимости и границах познания.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-10750-2",
      "translator": "Инна Бернштейн, Ирина Гурова, Мария Лорие, Сергей Сухарев",
      "source": "https://azbooka.ru/books/mobi-dik-ili-belyy-kit-i9hx",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-ostrov-sokrovisch-prng",
    "title": "Остров Сокровищ",
    "author": "Роберт Льюис Стивенсон",
    "genre": "Приключения",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/9b588545-7317-4500-b329-195096818d9b.jpg",
    "summary": "Старая карта открывает юному Джиму дорогу к морскому путешествию. Приключенческая классика с пиратами, тайнами и атмосферой большой дороги.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-24849-6",
      "translator": "Николай Чуковский",
      "source": "https://azbooka.ru/books/ostrov-sokrovisch-prng",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-deti-kapitana-granta",
    "title": "Дети капитана Гранта",
    "author": "Жюль Верн",
    "genre": "Приключения",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/c520a86b-edad-4e23-933d-ebf2a6fcb4d1.jpg",
    "summary": "Необычная находка становится началом поисковой экспедиции. Дальние страны, географические загадки и верность общей цели.",
    "related": [
      {
        "id": "az-tainstvennyy-ostrov-fwns",
        "type": "Другие книги автора"
      },
      {
        "id": "az-dvadtsat-tysyach-le-pod-vodoy-pdtx",
        "type": "Другие книги автора"
      },
      {
        "id": "az-vokrug-sveta-v-vosemdesyat-dney-7bzo",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-20899-5",
      "translator": "Александра Бекетова",
      "source": "https://azbooka.ru/books/deti-kapitana-granta",
      "publisher": "Иностранка",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-robinzon-kruzo",
    "title": "Робинзон Крузо",
    "author": "Даниель Дефо",
    "genre": "Приключения",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/3a24cc11-ecea-44cd-b424-f4d2becedb85.jpg",
    "summary": "Оказавшись на необитаемом острове, человек учится устраивать быт заново. Роман о труде, одиночестве и поиске опоры в себе.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-17143-5",
      "translator": "Корней Чуковский",
      "source": "https://azbooka.ru/books/robinzon-kruzo",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-finansist",
    "title": "Финансист",
    "author": "Теодор Драйзер",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/a1320713-82b2-4aee-80eb-8929effd2fba.jpg",
    "summary": "Молодой финансист строит карьеру в мире больших денег. Социальный роман о честолюбии, деловой хватке и устройстве успеха.",
    "related": [
      {
        "id": "az-titan",
        "type": "Продолжение · книга 2"
      },
      {
        "id": "az-amerikanskaya-tragediya-yuth",
        "type": "Другие книги автора"
      },
      {
        "id": "az-sestra-kerri-dzhenni-gerkhardt",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-20278-8",
      "translator": "Марк Волосов",
      "source": "https://azbooka.ru/books/finansist",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-grozdya-gneva-h1bc",
    "title": "Гроздья гнева",
    "author": "Джон Стейнбек",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/f8d09647-bded-4e2d-bc67-3e506082ba02.jpg",
    "summary": "Фермерская семья отправляется искать работу и новую жизнь. Роман о стойкости, человеческом достоинстве и солидарности в трудные времена.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-04994-9",
      "translator": "Наталия Волжина",
      "source": "https://azbooka.ru/books/grozdya-gneva-h1bc",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-otverzhennye-zc7c",
    "title": "Отверженные",
    "author": "Виктор Гюго",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/38b57318-a6b8-4423-b3ed-18376480f21a.jpg",
    "summary": "Франция XIX века и люди разных общественных слоёв. Масштабный роман о справедливости, милосердии и возможности изменить свою жизнь.",
    "related": [
      {
        "id": "az-sobor-parizhskoy-bogomateri-w8r5",
        "type": "Другие книги автора"
      },
      {
        "id": "az-chelovek-kotoryy-smeetsya",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-06787-5",
      "translator": "Анонимный перевод под ред",
      "source": "https://azbooka.ru/books/otverzhennye-zc7c",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-drakula-zswp",
    "title": "Дракула",
    "author": "Брэм Стокер",
    "genre": "Готический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/e4d97169-2495-412c-a115-80c23a497112.jpg",
    "summary": "Поездка молодого юриста в Трансильванию открывает мир тревожных тайн. Готическая история, рассказанная через письма и дневники.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-06022-7",
      "translator": "Татьяна Красавченко",
      "source": "https://azbooka.ru/books/drakula-zswp",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-noch-nezhna-izjg",
    "title": "Ночь нежна",
    "author": "Фрэнсис Скотт Фицджеральд",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/a6899f8d-708d-46eb-af8b-92277406e146.jpg",
    "summary": "Космополитическое общество европейских курортов между мировыми войнами. Роман о хрупкости благополучия и сложных человеческих отношениях.",
    "related": [
      {
        "id": "az-velikiy-getsbi-n3zn",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-04936-9",
      "translator": "Евгения Калашникова",
      "source": "https://azbooka.ru/books/noch-nezhna-izjg",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-1984-dzhyliya",
    "title": "1984. Джулия",
    "author": "Сандра Ньюман",
    "genre": "Антиутопия",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/da2a7df1-5700-410e-b1b6-26bb9dc6f7ab.jpg",
    "summary": "Современное переосмысление мира «1984» с точки зрения Джулии. Для знакомства с оригинальным романом предпочтительнее сначала прочитать Оруэлла.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-24107-7",
      "translator": "Елена Петрова",
      "source": "https://azbooka.ru/books/1984-dzhyliya",
      "publisher": "Иностранка",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-1984",
    "title": "1984",
    "author": "Джордж Оруэлл",
    "genre": "Антиутопия",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/08fe16b6-f3dc-4a62-a63a-0ac471bf0e9a.jpg",
    "summary": "Общество тотального наблюдения, где власть управляет даже языком. Роман о личной свободе и праве на независимую мысль.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-19109-9",
      "translator": "Виктор  Голышев",
      "source": "https://azbooka.ru/books/1984",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-veter-v-ivakh-wlsp",
    "title": "Ветер в ивах",
    "author": "Кеннет Грэм",
    "genre": "Литературная сказка",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/adfcb6d0-78d0-469a-9145-94b115aec960.jpg",
    "summary": "Жители речного берега дружат, спорят и отправляются в небольшие приключения. Уютная классика о доме, природе и товариществе.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-32800-6",
      "translator": "Александр Колотов, Михаил Яснов",
      "source": "https://azbooka.ru/books/veter-v-ivakh-wlsp",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-zhizn-dvenadtsati-tsezarey-o-znamenitykh-ludyakh",
    "title": "Жизнь двенадцати цезарей. О знаменитых людях",
    "author": "Гай Светоний Транквилл",
    "genre": "История",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/4a51ab09-f83e-446f-a05e-b375b4aeb383.jpg",
    "summary": "Биографии римских правителей глазами античного автора. Источник для знакомства с повседневностью, характером власти и культурой Древнего Рима.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-23034-7",
      "translator": "Михаил Гаспаров, Аристид Доватур, Мария Сергеенко",
      "source": "https://azbooka.ru/books/zhizn-dvenadtsati-tsezarey-o-znamenitykh-ludyakh",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-odna-malenkaya-zhizn",
    "title": "Одна маленькая жизнь",
    "author": "Маттиас Клингенберг",
    "genre": "Современная проза",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/301c4e93-5061-478d-b86e-112b2cd4d449.jpg",
    "summary": "Небольшая современная история о том, как складывается человеческая жизнь. Камерная проза с вниманием к чувствам и повседневности.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-29591-9",
      "translator": "Елена Коркина",
      "source": "https://azbooka.ru/books/odna-malenkaya-zhizn",
      "publisher": "КоЛибри",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-vosstan-i-ubey-pervym-taynaya-istoriya-izrailskikh-tochechnykh-likvidatsiy",
    "title": "Восстань и убей первым. Тайная история израильских точечных ликвидаций",
    "author": "Ронен Бергман",
    "genre": "История",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/659c7513-f325-46ad-ba04-5f6f62c23cc7.jpg",
    "summary": "Документальное исследование истории израильских спецслужб. Политические решения и работа институтов рассматриваются через интервью и исторические свидетельства.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-14615-0",
      "translator": "Михаил Попов",
      "source": "https://azbooka.ru/books/vosstan-i-ubey-pervym-taynaya-istoriya-izrailskikh-tochechnykh-likvidatsiy",
      "publisher": "КоЛибри",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-gospozha-bovari-9615",
    "title": "Госпожа Бовари",
    "author": "Гюстав Флобер",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/a5c624a1-d7bc-480c-a95c-f9a0f96d7f54.jpg",
    "summary": "Жизнь в провинции сталкивается с романтическими ожиданиями. Роман Флобера о мечтах, обыденности и влиянии прочитанных историй.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-13459-1",
      "translator": "Николай Любимов",
      "source": "https://azbooka.ru/books/gospozha-bovari-9615",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-koroleva-margo-xysd",
    "title": "Королева Марго",
    "author": "Александр Дюма",
    "genre": "Исторический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/b04fb54a-097f-4939-a60b-36f75e111440.jpg",
    "summary": "Французский двор XVI века на фоне религиозных противоречий. Исторические приключения, придворные отношения и напряжённая атмосфера эпохи.",
    "related": [
      {
        "id": "az-graf-monte-kristo-v-2-kh-tomakh-kompl--car3",
        "type": "Другие книги автора"
      },
      {
        "id": "az-tri-mushketera",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-34845-5",
      "translator": "Евгений Корш",
      "source": "https://azbooka.ru/books/koroleva-margo-xysd",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-puteshestvie-k-tsentru-zemli",
    "title": "Путешествие к центру Земли",
    "author": "Жюль Верн",
    "genre": "Приключения",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/c67984b5-b4cf-4352-a261-30aefa5385ee.jpg",
    "summary": "Старинная рукопись вдохновляет учёного на необычную экспедицию. Фантастическое путешествие вглубь Земли с открытиями и научными загадками.",
    "related": [
      {
        "id": "az-tainstvennyy-ostrov-fwns",
        "type": "Другие книги автора"
      },
      {
        "id": "az-dvadtsat-tysyach-le-pod-vodoy-pdtx",
        "type": "Другие книги автора"
      },
      {
        "id": "az-vokrug-sveta-v-vosemdesyat-dney-7bzo",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-20759-2",
      "translator": "Николай Егоров",
      "source": "https://azbooka.ru/books/puteshestvie-k-tsentru-zemli",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-frankenshteyn-qarr",
    "title": "Франкенштейн",
    "author": "Мэри Шелли",
    "genre": "Готический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/15b2c459-04fb-44a3-a2ca-18192b102ea9.jpg",
    "summary": "Молодой исследователь увлечён вопросом о природе жизни. Готический роман об ответственности создателя и границах научных амбиций.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-27826-4",
      "translator": "Зинаида Александрова, Сергей Антонов",
      "source": "https://azbooka.ru/books/frankenshteyn-qarr",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-krasnoe-i-chernoe-3zcv",
    "title": "Красное и черное",
    "author": "Стендаль",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/af32d864-8aad-4f57-8c9d-d615568f3c38.jpg",
    "summary": "Способный юноша ищет путь наверх в обществе строгих условностей. Роман о честолюбии, чувствах и столкновении личного с общественным.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-05088-4",
      "translator": "Анастасия Чеботаревская",
      "source": "https://azbooka.ru/books/krasnoe-i-chernoe-3zcv",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-100-tayn-drevnego-mira-imperii-grobnitsy-tsivilizatsii",
    "title": "100 тайн Древнего мира. Империи. Гробницы. Цивилизации",
    "author": "Лорен Авезу",
    "genre": "История",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/f8a42042-db81-416e-b342-dd5229e38304.jpg",
    "summary": "Сборник вопросов о древних цивилизациях и их наследии. Подойдёт для неспешного знакомства с историей через отдельные загадки прошлого.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-25965-2",
      "translator": "Анна Жигалова",
      "source": "https://azbooka.ru/books/100-tayn-drevnego-mira-imperii-grobnitsy-tsivilizatsii",
      "publisher": "КоЛибри",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-chelovek-nevidimka-jguc",
    "title": "Человек-невидимка",
    "author": "Герберт Уэллс",
    "genre": "Фантастика",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/60eadbc0-9b02-40e2-844d-bc43d7c00698.jpg",
    "summary": "Учёный работает над необычным свойством человеческого тела. Классическая фантастика о новых возможностях и нравственной ответственности.",
    "related": [
      {
        "id": "az-mashina-vremeni-ostrov-doktora-moro-oxfy",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-12588-9",
      "translator": "Давид Вейс",
      "source": "https://azbooka.ru/books/chelovek-nevidimka-jguc",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-taynaya-istoriya-mody-kak-evolutsiya-nizhnego-belya-proizvela-revolutsiu-v-mode",
    "title": "Тайная история моды: как эволюция нижнего белья произвела революцию в моде",
    "author": "Катрин Ормё",
    "genre": "История",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/f1815a42-cecc-4e7a-87ae-4d20ac0f245f.jpg",
    "summary": "История одежды и телесных норм через предметы повседневного гардероба. Культурные привычки рассматриваются в связи с общественными переменами.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-32168-7",
      "translator": "Мария Исаева",
      "source": "https://azbooka.ru/books/taynaya-istoriya-mody-kak-evolutsiya-nizhnego-belya-proizvela-revolutsiu-v-mode",
      "publisher": "КоЛибри",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-amerikanskaya-tragediya-yuth",
    "title": "Американская трагедия",
    "author": "Теодор Драйзер",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/71a70dcc-2a52-4670-9ce0-458c37a35774.jpg",
    "summary": "Молодой человек стремится попасть в мир благополучия и признания. Социальный роман о притязаниях, классовых различиях и выборе.",
    "related": [
      {
        "id": "az-finansist",
        "type": "Другие книги автора"
      },
      {
        "id": "az-sestra-kerri-dzhenni-gerkhardt",
        "type": "Другие книги автора"
      },
      {
        "id": "az-titan",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-11219-3",
      "translator": "Нора Галь, Зинаида Вершинина",
      "source": "https://azbooka.ru/books/amerikanskaya-tragediya-yuth",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-vino-iz-atlantidy-fantazii-koshmary-i-mirazhi",
    "title": "Вино из Атлантиды. Фантазии, кошмары и миражи",
    "author": "Кларк Эштон Смит",
    "genre": "Фантастика",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/2e5987c1-3a95-44e7-83b2-b34701836daf.jpg",
    "summary": "Сборник фантастических историй с необычными мирами и тревожной атмосферой. Для любителей образной прозы и причудливого воображения.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-22227-4",
      "translator": "Анна Савиных, Майя Лахути, Кирилл Плешков, Марина Клеветенко, Ирина Тетерина, Дарья Кальницкая, Борис Грызунов, Светлана Лихачева, Анна Хромова",
      "source": "https://azbooka.ru/books/vino-iz-atlantidy-fantazii-koshmary-i-mirazhi",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-graf-monte-kristo-v-2-kh-tomakh-kompl--car3",
    "title": "Граф Монте-Кристо. В 2-х томах (компл.)",
    "author": "Александр Дюма",
    "genre": "Приключения",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/50f2c51e-b2d4-4669-b96d-6dced7ea69a2.jpg",
    "summary": "Франция начала XIX века, море и большие надежды. Приключенческий роман Дюма о справедливости, настойчивости и человеческих судьбах.",
    "related": [
      {
        "id": "az-koroleva-margo-xysd",
        "type": "Другие книги автора"
      },
      {
        "id": "az-tri-mushketera",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-01196-0",
      "translator": "Владимир Строев, Лидия Олавская",
      "source": "https://azbooka.ru/books/graf-monte-kristo-v-2-kh-tomakh-kompl--car3",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-sestra-kerri-dzhenni-gerkhardt",
    "title": "Сестра Керри. Дженни Герхардт",
    "author": "Теодор Драйзер",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/c8a761e9-73c4-40a4-a000-22036255fea4.jpg",
    "summary": "Два социальных романа Драйзера о жизни женщин в меняющейся Америке. Личные стремления соседствуют с экономическими и общественными ограничениями.",
    "related": [
      {
        "id": "az-finansist",
        "type": "Другие книги автора"
      },
      {
        "id": "az-amerikanskaya-tragediya-yuth",
        "type": "Другие книги автора"
      },
      {
        "id": "az-titan",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-19623-0",
      "translator": "Марк Волосов, Нора Галь, Мария Лорие",
      "source": "https://azbooka.ru/books/sestra-kerri-dzhenni-gerkhardt",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-tri-mushketera",
    "title": "Три мушкетера",
    "author": "Александр Дюма",
    "genre": "Исторический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/d588378e-bccc-400d-aaa1-227e5ad25191.jpg",
    "summary": "Молодой гасконец приезжает в Париж в поисках службы. Дружба, придворные интриги и приключения во Франции XVII века.",
    "related": [
      {
        "id": "az-koroleva-margo-xysd",
        "type": "Другие книги автора"
      },
      {
        "id": "az-graf-monte-kristo-v-2-kh-tomakh-kompl--car3",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-19881-4",
      "translator": "Дебора Лившиц, Вера Вальдман, Ксения Ксанина",
      "source": "https://azbooka.ru/books/tri-mushketera",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-anatomiya-syeveriy-taynaya-istoriya-nashikh-traditsiy-prazdnikov-radostey-i-strakhov",
    "title": "Анатомия суеверий: Тайная история наших традиций, праздников, радостей и страхов",
    "author": "Моника-Мария Штапельберг",
    "genre": "История",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/7ea70e59-242a-4196-80c7-460a4cc3618a.jpg",
    "summary": "Откуда берутся привычные приметы и ритуалы. Историко-культурное исследование суеверий и способов, которыми люди объясняют неопределённость.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-30360-7",
      "translator": "Марина Кедрова",
      "source": "https://azbooka.ru/books/anatomiya-syeveriy-taynaya-istoriya-nashikh-traditsiy-prazdnikov-radostey-i-strakhov",
      "publisher": "КоЛибри",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-mashina-vremeni-ostrov-doktora-moro-oxfy",
    "title": "Машина Времени. Остров доктора Моро",
    "author": "Герберт Уэллс",
    "genre": "Фантастика",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/4f8d32a6-1353-4363-86cd-ff7bd28b0b2b.jpg",
    "summary": "Два классических романа Уэллса о необычных экспериментах. Научная фантазия становится способом исследовать устройство общества и границы допустимого.",
    "related": [
      {
        "id": "az-chelovek-nevidimka-jguc",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-14857-4",
      "translator": "Ксения Морозова",
      "source": "https://azbooka.ru/books/mashina-vremeni-ostrov-doktora-moro-oxfy",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-na-zapadnom-fronte-bez-peremen-tri-tovarischa-triymfalnaya-arka",
    "title": "На Западном фронте без перемен. Три товарища Триумфальная арка",
    "author": "Эрих Мария Ремарк",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/14678c07-e005-4c77-a0cf-1192cd0e0033.jpg",
    "summary": "Сборник трёх романов Ремарка о поколении, пережившем войну. Темы дружбы, отчуждения и поисков опоры объединяют разные истории.",
    "related": [
      {
        "id": "az-vremya-zhit-i-vremya-ymirat-chernyy-obelisk-zhizn-vzaymy-ili-u-neba-lubimchikov-net",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-32765-8",
      "translator": "Юрий Архипов, Михаил  Рудницкий, Нина Федорова",
      "source": "https://azbooka.ru/books/na-zapadnom-fronte-bez-peremen-tri-tovarischa-triymfalnaya-arka",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-nana-zemlya",
    "title": "Нана. Земля",
    "author": "Эмиль Золя",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/8c43ab57-078f-45fa-aa25-60c5d2b27c0f.jpg",
    "summary": "Два романа цикла «Ругон-Маккары». Золя рассматривает общество через разные среды, уделяя внимание быту, отношениям и материальным условиям жизни.",
    "related": [
      {
        "id": "az-chelovek-zver-zherminal",
        "type": "Другие книги автора"
      },
      {
        "id": "az-damskoe-schaste",
        "type": "Другие книги автора"
      },
      {
        "id": "az-chrevo-parizha",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-30339-3",
      "translator": "Надежда Жаркова, Борис Горнунг",
      "source": "https://azbooka.ru/books/nana-zemlya",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-uchenik-ubiytsy-illyustrirovannoe-izdanie",
    "title": "Ученик убийцы. Иллюстрированное издание",
    "author": "Робин Хобб",
    "genre": "Фэнтези",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/a4e8994a-36d4-45c0-b0d9-2e5b6644016f.jpg",
    "summary": "Начало «Саги о Видящих»: юный Фитц оказывается при королевском дворе. Фэнтези с вниманием к характеру, взрослению и верности.",
    "related": [
      {
        "id": "az-saga-o-vidyashchikh-kniga-3-stranstviya-ubiytsy-snax",
        "type": "Другие книги автора"
      },
      {
        "id": "az-saga-o-vidyashchikh-knigi-1-i-2-uchenik-ubiytsy-korolevskiy-ubiytsa-cbs4",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-20550-5",
      "translator": "Мария Юнгер",
      "source": "https://azbooka.ru/books/uchenik-ubiytsy-illyustrirovannoe-izdanie",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-padenie-doma-asherov-gkpn",
    "title": "Падение дома Ашеров",
    "author": "Эдгар Аллан По",
    "genre": "Готический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/f9d1a1b3-1e81-40fb-b00e-95c17af87e79.jpg",
    "summary": "Мрачная проза Эдгара По с тревожной атмосферой старого дома. Подойдёт читателям психологических загадок и готической классики.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-06797-4",
      "translator": "Зинаида Александрова, Нора Галь, Ирина Гурова, Нина Демурова, Симон Маркиш, Раиса Померанцева, Владимир Рогов, Виктор Хинкис, Надежда Вольпин",
      "source": "https://azbooka.ru/books/padenie-doma-asherov-gkpn",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-sobaka-baskerviley-mxbh",
    "title": "Собака Баскервилей",
    "author": "Артур Конан Дойл",
    "genre": "Детектив",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/80fa5f1e-092a-4faa-ad03-44545896bcb6.jpg",
    "summary": "Шерлок Холмс и доктор Ватсон знакомятся с преданием о старинном роде. Дедукция встречается с атмосферой английских болот.",
    "related": [
      {
        "id": "az-zapiski-o-sherloke-kholmse",
        "type": "Другие книги автора"
      },
      {
        "id": "az-znak-chetyrekh-vozvraschenie-sherloka-kholmsa-ufhz",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-32799-3",
      "translator": "Наталия Волжина",
      "source": "https://azbooka.ru/books/sobaka-baskerviley-mxbh",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-mymiya-v-gorode-pobeg-iz-sarkofaga",
    "title": "Мумия в городе! Побег из саркофага",
    "author": "Поль Бопэр",
    "genre": "Детская проза",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/baf3df32-ef9f-40c6-8299-544294478caa.jpg",
    "summary": "Приключенческая история с древнеегипетским настроением. Для юных читателей, которым нравятся загадки, необычные встречи и динамичные события.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-26024-5",
      "translator": "Ирина Прессман",
      "source": "https://azbooka.ru/books/mymiya-v-gorode-pobeg-iz-sarkofaga",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-tolkovanie-snovideniy",
    "title": "Толкование сновидений",
    "author": "Зигмунд Фрейд",
    "genre": "Психология",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/1ae2b809-3507-4bb7-b76d-22c8e4156f50.jpg",
    "summary": "Одна из основополагающих работ психоанализа. Исторический взгляд Фрейда на сны; читать как авторскую теорию своей эпохи.",
    "related": [
      {
        "id": "az-tolkovanie-snovideniy-vvedenie-v-psikhoanaliz",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-21704-1",
      "translator": "Яков Коган",
      "source": "https://azbooka.ru/books/tolkovanie-snovideniy",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-priklyucheniya-toma-soyera",
    "title": "Приключения Тома Сойера",
    "author": "Марк Твен",
    "genre": "Приключения",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/f1b4ae1e-98f3-4fd5-817f-aacb5bca579d.jpg",
    "summary": "Том растёт в небольшом городке на берегу Миссисипи. Детская изобретательность, дружба и приключения в классическом романе Марка Твена.",
    "related": [
      {
        "id": "az-priklucheniya-geklberri-finna",
        "type": "Другие книги автора"
      },
      {
        "id": "az-prostaki-za-granitsey",
        "type": "Другие книги автора"
      },
      {
        "id": "az-prints-i-nishchiy-fybw",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-17627-0",
      "translator": "Корней Чуковский",
      "source": "https://azbooka.ru/books/priklyucheniya-toma-soyera",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-nomer-dva-roman-o-cheloveke-kotoryy-ne-stal-garri-potterom",
    "title": "Номер Два. Роман о человеке, который не стал Гарри Поттером",
    "author": "Давид Фонкинос",
    "genre": "Современная проза",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/c117f5f5-6334-4697-8e7c-7aeef57f0a34.jpg",
    "summary": "Как может сложиться жизнь человека, оказавшегося рядом с большой возможностью. Роман о сравнении себя с другими и поиске собственного пути.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-23037-8",
      "translator": "Римма Генкина",
      "source": "https://azbooka.ru/books/nomer-dva-roman-o-cheloveke-kotoryy-ne-stal-garri-potterom",
      "publisher": "Иностранка",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-zakat-i-padenie-rimskoy-imperii-v-2-tomakh-komplekt",
    "title": "Закат и падение Римской империи в 2 томах (комплект)",
    "author": "Эдуард Гиббон",
    "genre": "История",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/d15cfdf0-90b0-4645-808c-79b06e6829f5.jpg",
    "summary": "Масштабное историческое сочинение о Римской империи. Классическая работа XVIII века, отражающая также взгляды и подходы своего времени.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-34470-9",
      "translator": "Василий  Неведомский",
      "source": "https://azbooka.ru/books/zakat-i-padenie-rimskoy-imperii-v-2-tomakh-komplekt",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-malenkiy-prints-yuzhnyy-pochtovyy-nochnoy-polet",
    "title": "Маленький принц. Южный почтовый. Ночной полет",
    "author": "Антуан де Сент-Экзюпери",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/d2f64913-2aa5-47e5-a7f4-81446d6814d6.jpg",
    "summary": "Три произведения Сент-Экзюпери: сказочная притча и авиационная проза. Общие темы — внимание к человеку, ответственность и ощущение большого мира.",
    "related": [
      {
        "id": "prince",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-17353-8",
      "translator": "Нора Галь, Дмитрий Кузьмин, Морис  Ваксмахер",
      "source": "https://azbooka.ru/books/malenkiy-prints-yuzhnyy-pochtovyy-nochnoy-polet",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-zamok-broudi-zslc",
    "title": "Замок Броуди",
    "author": "Арчибальд Кронин",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/5676053a-19e6-4063-bdd1-400564e276f7.jpg",
    "summary": "Шотландский провинциальный город и семья с жёстким укладом. Социальный роман о домашних отношениях и давлении авторитета.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-11036-6",
      "translator": "Мария Абкина",
      "source": "https://azbooka.ru/books/zamok-broudi-zslc",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-zavtrak-u-tiffani-gnmv",
    "title": "Завтрак у Тиффани",
    "author": "Трумен Капоте",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/a204a61d-1fdd-4a89-8afc-ad4cac476e78.jpg",
    "summary": "Молодой рассказчик знакомится с необычной соседкой в Нью-Йорке. Лаконичная городская проза об одиночестве и стремлении к свободе.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-17004-9",
      "translator": "Олег Алякринский, Владимир Бабков, Мария Гальперина, Виктор  Голышев, Григорий Дашевский, Елена Калявина, Раиса Облонская, Елена Петрова, Инна Стам, Елена Суриц, Сергей Таск",
      "source": "https://azbooka.ru/books/zavtrak-u-tiffani-gnmv",
      "publisher": "Иностранка",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-sobranie-vazhnykh-pystyakov-pisma-sestre-i-blizkim",
    "title": "Собрание важных пустяков. Письма сестре и близким",
    "author": "Джейн Остин",
    "genre": "Письма и дневники",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/e99c262f-9032-4e1f-8707-d98b80eea44d.jpg",
    "summary": "Письма Джейн Остин сестре и близким. Повседневные наблюдения позволяют услышать голос писательницы за пределами её романов.",
    "related": [
      {
        "id": "pride",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-30721-6",
      "translator": "Наталья Бухтоярова, Александра Глебовская",
      "source": "https://azbooka.ru/books/sobranie-vazhnykh-pystyakov-pisma-sestre-i-blizkim",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-martin-iden-9clo",
    "title": "Мартин Иден",
    "author": "Джек Лондон",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/e9c8f7c1-8083-4cc5-89db-d9dbb00a6f83.jpg",
    "summary": "Молодой моряк увлекается литературой и решает стать писателем. Роман о самообразовании, творческом труде и общественном признании.",
    "related": [
      {
        "id": "az-belyy-klyk-pxlr",
        "type": "Другие книги автора"
      },
      {
        "id": "az-serdtsa-trekh-morskoy-volk-syn-solntsa",
        "type": "Другие книги автора"
      },
      {
        "id": "az-malenkaya-khozyayka-bolshogo-doma",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-09916-6",
      "translator": "Раиса Облонская",
      "source": "https://azbooka.ru/books/martin-iden-9clo",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-pismo-neznakomki-ztfj",
    "title": "Письмо незнакомки",
    "author": "Стефан Цвейг",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/ccc6bfcd-dfce-4256-8fad-250fc44de762.jpg",
    "summary": "Камерная психологическая проза Цвейга. Личное письмо становится формой разговора о памяти, внимании и человеческой близости.",
    "related": [
      {
        "id": "az-neterpenie-serdtsa",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-12110-2",
      "translator": "Анна Баренкова, Ольга Боченкова, Вера Ефанова, Вера Топер, Софья Фридлянд",
      "source": "https://azbooka.ru/books/pismo-neznakomki-ztfj",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-garri-potter-i-kubok-ognya-s-tsvetnymi-illyustratsiyami",
    "title": "Гарри Поттер и Кубок Огня (с цветными иллюстрациями)",
    "author": "Джоан Кэтлин Роулинг",
    "genre": "Фэнтези",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/1e15bc0d-5a19-4cf5-8413-66d2da353f19.jpg",
    "summary": "Четвёртая книга истории о Гарри Поттере. Волшебная школа и новые испытания; продолжение, рассчитанное на знакомство с предыдущими частями.",
    "related": [
      {
        "id": "az-garri-potter-i-yznik-azkabana-illustratsii-selznika",
        "type": "Предыдущая книга · 3"
      },
      {
        "id": "az-garri-potter-i-orden-feniksa-ftci",
        "type": "Продолжение · книга 5"
      },
      {
        "id": "az-garri-potter-i-proklyatoe-ditya-chasti-pervaya-i-vtoraya-finalnaya-versiya-stsenariya-n2fh",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-13319-8",
      "translator": "Мария Спивак",
      "source": "https://azbooka.ru/books/garri-potter-i-kubok-ognya-s-tsvetnymi-illyustratsiyami",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-do-vstrechi-na-venere",
    "title": "До встречи на Венере",
    "author": "Виктория Винуэса",
    "genre": "Современный роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/1cc1931f-d314-4b27-822a-5b6c578a7ae7.jpg",
    "summary": "История молодых людей, ищущих собственный путь. Романтическая проза о сближении, личных переживаниях и надежде на новое начало.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-30042-2",
      "translator": "Мария Гинзбург",
      "source": "https://azbooka.ru/books/do-vstrechi-na-venere",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-bolshie-nadezhdy-lavka-drevnostey-srza",
    "title": "Большие надежды. Лавка древностей",
    "author": "Чарльз Диккенс",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/665854e1-b67c-4a55-a743-db66663238f1.jpg",
    "summary": "Два романа Диккенса, где взросление связано с неожиданностями большого мира. Сочувствие к героям сочетается с наблюдением за общественными нравами.",
    "related": [
      {
        "id": "az-kholodnyy-dom-xtsg",
        "type": "Другие книги автора"
      },
      {
        "id": "az-posmertnye-zapiski-pikvikskogo-klyba-s-ill",
        "type": "Другие книги автора"
      },
      {
        "id": "az-rozhdestvenskaya-pesn",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-15138-3",
      "translator": "Мария Лорие, Наталия Волжина",
      "source": "https://azbooka.ru/books/bolshie-nadezhdy-lavka-drevnostey-srza",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-golosa-leta-shtormovoy-den-nachat-snachala",
    "title": "Голоса лета. Штормовой день. Начать сначала",
    "author": "Розамунда Пилчер",
    "genre": "Современная проза",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/d99eba3b-1a7a-474c-935d-02ea47047b74.jpg",
    "summary": "Сборник романов Розамунды Пилчер. Семейные отношения, новые начала и внимание к привычным деталям повседневной жизни.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-18144-1",
      "translator": "Ирина Новоселецкая, Елена  Осенева, Ирина Архангельская",
      "source": "https://azbooka.ru/books/golosa-leta-shtormovoy-den-nachat-snachala",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-zamok-prevrashchenie-protsess-polnoe-sobranie-sochineniy",
    "title": "Замок. Превращение. Процесс. Полное собрание сочинений",
    "author": "Франц Кафка",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/96cd7cfa-ae76-4537-9f23-4a2df32a4968.jpg",
    "summary": "Проза Франца Кафки о столкновении человека с непонятными правилами. В сборнике соединены известные романы и малая проза.",
    "related": [
      {
        "id": "az-zamok-rujb",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-18018-5",
      "translator": "Соломон Апт, Евгения Кацева, Рита Райт-Ковалева, Герберт Ноткин, Михаил  Рудницкий, Галина Снежинская",
      "source": "https://azbooka.ru/books/zamok-prevrashchenie-protsess-polnoe-sobranie-sochineniy",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-titan",
    "title": "Титан",
    "author": "Теодор Драйзер",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/5a9262e7-def5-4447-bb28-1ff78aab9794.jpg",
    "summary": "Вторая книга трилогии о Фрэнке Каупервуде. Социальный роман о предпринимательстве, городской жизни и стремлении расширять своё влияние.",
    "related": [
      {
        "id": "az-finansist",
        "type": "Предыдущая книга · 1"
      },
      {
        "id": "az-stoik",
        "type": "Продолжение · книга 3"
      },
      {
        "id": "az-amerikanskaya-tragediya-yuth",
        "type": "Другие книги автора"
      },
      {
        "id": "az-sestra-kerri-dzhenni-gerkhardt",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-20369-3",
      "translator": "Валентина Курелла, Татьяна Озерская",
      "source": "https://azbooka.ru/books/titan",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-neterpenie-serdtsa",
    "title": "Нетерпение сердца",
    "author": "Стефан Цвейг",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/1d1d3eae-18b2-497b-976f-1e5b977907ee.jpg",
    "summary": "Молодой офицер оказывается в ситуации эмоциональной неопределённости. Психологический роман о сострадании, такте и ответственности за свои поступки.",
    "related": [
      {
        "id": "az-pismo-neznakomki-ztfj",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-23780-3",
      "translator": "Николай Бунин",
      "source": "https://azbooka.ru/books/neterpenie-serdtsa",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-tysyacha-i-odna-tayna-parizhskikh-nochey",
    "title": "Тысяча и одна тайна парижских ночей",
    "author": "Арсен Гуссе",
    "genre": "История",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/be27c117-ed52-4583-8b40-8ab13cacf038.jpg",
    "summary": "Парижская жизнь в наблюдениях писателя XIX века. Литературно-исторический взгляд на город, его общество и повседневные привычки.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-30137-5",
      "translator": "Анонимный",
      "source": "https://azbooka.ru/books/tysyacha-i-odna-tayna-parizhskikh-nochey",
      "publisher": "Иностранка",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-chelovek-zver-zherminal",
    "title": "Человек-зверь. Жерминаль",
    "author": "Эмиль Золя",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/b57fa3bb-3d60-4806-8ea5-4fd34f1d5d81.jpg",
    "summary": "Два романа Золя о разных сторонах индустриальной Франции. Человек и общественная среда рассматриваются с вниманием к условиям жизни и труда.",
    "related": [
      {
        "id": "az-nana-zemlya",
        "type": "Другие книги автора"
      },
      {
        "id": "az-damskoe-schaste",
        "type": "Другие книги автора"
      },
      {
        "id": "az-chrevo-parizha",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-28939-0",
      "translator": "Наталия Немчинова, Яков Лесюк",
      "source": "https://azbooka.ru/books/chelovek-zver-zherminal",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-vremya-zhit-i-vremya-ymirat-chernyy-obelisk-zhizn-vzaymy-ili-u-neba-lubimchikov-net",
    "title": "Время жить и время умирать. Черный обелиск.  Жизнь взаймы, или У неба любимчиков нет",
    "author": "Эрих Мария Ремарк",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/b7639ee0-860a-4934-abca-f962ed7c8e7f.jpg",
    "summary": "Три романа Ремарка о жизни в неспокойную эпоху. Личные отношения и поиск достоинства на фоне исторических потрясений.",
    "related": [
      {
        "id": "az-na-zapadnom-fronte-bez-peremen-tri-tovarischa-triymfalnaya-arka",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-33078-8",
      "translator": "Михаил  Рудницкий, Вера Станевич, Нина Федорова",
      "source": "https://azbooka.ru/books/vremya-zhit-i-vremya-ymirat-chernyy-obelisk-zhizn-vzaymy-ili-u-neba-lubimchikov-net",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-khodyachiy-zamok",
    "title": "Ходячий замок",
    "author": "Диана Уинн Джонс",
    "genre": "Фэнтези",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/88bf94e1-c3e2-442c-8513-440ea4815642.jpg",
    "summary": "В мире волшебства Софи знакомится с необычным передвижным замком. Сказочное фэнтези с юмором, бытовыми чудесами и сильными характерами.",
    "related": [
      {
        "id": "az-vozdushnyy-zamok",
        "type": "Продолжение · книга 2"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-17974-5",
      "translator": "Анастасия Бродоцкая",
      "source": "https://azbooka.ru/books/khodyachiy-zamok",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-garri-potter-i-yznik-azkabana-illustratsii-selznika",
    "title": "Гарри Поттер и узник Азкабана (иллюстрации Селзника)",
    "author": "Джоан Кэтлин Роулинг",
    "genre": "Фэнтези",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/f2ce402b-6250-4934-ae23-f2970826a012.jpg",
    "summary": "Третья книга истории о Гарри Поттере. Возвращение к героям и атмосфере волшебной школы; рекомендуется читать после первых двух частей.",
    "related": [
      {
        "id": "az-garri-potter-i-taynaya-komnata-illustratsii-selznika",
        "type": "Предыдущая книга · 2"
      },
      {
        "id": "az-garri-potter-i-kubok-ognya-s-tsvetnymi-illyustratsiyami",
        "type": "Продолжение · книга 4"
      },
      {
        "id": "az-garri-potter-i-proklyatoe-ditya-chasti-pervaya-i-vtoraya-finalnaya-versiya-stsenariya-n2fh",
        "type": "Другие книги автора"
      },
      {
        "id": "az-garri-potter-i-orden-feniksa-ftci",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-19201-0",
      "translator": "Мария Спивак",
      "source": "https://azbooka.ru/books/garri-potter-i-yznik-azkabana-illustratsii-selznika",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-saga-o-vidyashchikh-kniga-3-stranstviya-ubiytsy-snax",
    "title": "Сага о Видящих. Книга 3. Странствия убийцы",
    "author": "Робин Хобб",
    "genre": "Фэнтези",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/a2c1ccaa-781d-4bb1-8dfe-a950ef88080f.jpg",
    "summary": "Третья книга «Саги о Видящих». Продолжение истории Фитца в мире сложных обязательств; знакомство лучше начинать с «Ученика убийцы».",
    "related": [
      {
        "id": "az-uchenik-ubiytsy-illyustrirovannoe-izdanie",
        "type": "Другие книги автора"
      },
      {
        "id": "az-saga-o-vidyashchikh-knigi-1-i-2-uchenik-ubiytsy-korolevskiy-ubiytsa-cbs4",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-11398-5",
      "translator": "Мария Юнгер",
      "source": "https://azbooka.ru/books/saga-o-vidyashchikh-kniga-3-stranstviya-ubiytsy-snax",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-one-punch-man-kniga-16-chistilischnaya-fenomenalnaya-pyshka-blagoslovenie",
    "title": "One-Punch Man. Книга 16. Чистилищная феноменальная пушка. Благословение",
    "author": "ONE",
    "genre": "Манга",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/d31e3d40-d26b-4456-a02c-cd908dd6ddbb.jpg",
    "summary": "Продолжение истории о герое с необыкновенной силой. Сатирическая манга о героических условностях; том относится к продолжающемуся циклу.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-29420-2",
      "translator": "Анна Друзева",
      "source": "https://azbooka.ru/books/one-punch-man-kniga-16-chistilischnaya-fenomenalnaya-pyshka-blagoslovenie",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-troe-v-lodke-ne-schitaya-sobaki-2o7q",
    "title": "Трое в лодке, не считая собаки",
    "author": "Джером Клапка Джером",
    "genre": "Юмор",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/68cb51f1-f3fc-4b0a-955e-39d83c7ed508.jpg",
    "summary": "Трое друзей отправляются в лодочное путешествие по Темзе. Ироничная классика о бытовых мелочах и радости дружеской компании.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-03613-0",
      "translator": "Эльга Линецкая, Михаил Донской",
      "source": "https://azbooka.ru/books/troe-v-lodke-ne-schitaya-sobaki-2o7q",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-posledniy-alkhimik-v-parizhe-uvlekatelnye-istorii-iz-mira-khimii",
    "title": "Последний алхимик в Париже: Увлекательные истории из мира химии",
    "author": "Ларс Орстрём",
    "genre": "Научпоп",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/50418e27-3f80-4c18-82f6-6e83c65d37e0.jpg",
    "summary": "Истории из мира химии через судьбы веществ и исследователей. Научная любознательность связывает лабораторные открытия с повседневной жизнью.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-25854-9",
      "translator": "Оксана Постникова",
      "source": "https://azbooka.ru/books/posledniy-alkhimik-v-parizhe-uvlekatelnye-istorii-iz-mira-khimii",
      "publisher": "КоЛибри",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-damskoe-schaste",
    "title": "Дамское Счастье",
    "author": "Эмиль Золя",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/c30cf781-f6e0-4cb9-928c-29ae1a8aa2c0.jpg",
    "summary": "Большой парижский магазин становится символом новой торговли. Роман о городских переменах, труде и стремлении найти своё место.",
    "related": [
      {
        "id": "az-nana-zemlya",
        "type": "Другие книги автора"
      },
      {
        "id": "az-chelovek-zver-zherminal",
        "type": "Другие книги автора"
      },
      {
        "id": "az-chrevo-parizha",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-31347-7",
      "translator": "Ирина Волевич, Елена Клокова",
      "source": "https://azbooka.ru/books/damskoe-schaste",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-dinozavry-na-zvanom-obede-kak-chelovechestvo-otkrylo-dver-v-zateryannyy-mir",
    "title": "Динозавры на званом обеде: Как человечество открыло дверь в затерянный мир",
    "author": "Эдвард Дольник",
    "genre": "Научпоп",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/0c1bb0d6-b3c7-4cae-88d3-959977c60beb.jpg",
    "summary": "Как люди научились видеть в ископаемых следы древнего мира. История открытий на стыке науки, воображения и общественных споров.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-28445-6",
      "translator": "Живиль Богун",
      "source": "https://azbooka.ru/books/dinozavry-na-zvanom-obede-kak-chelovechestvo-otkrylo-dver-v-zateryannyy-mir",
      "publisher": "КоЛибри",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-belyy-klyk-pxlr",
    "title": "Белый Клык",
    "author": "Джек Лондон",
    "genre": "Приключения",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/738fe038-2b43-4551-9bbe-f4bee1bbb9b4.jpg",
    "summary": "Северная природа и сложные отношения животных с людьми. Приключенческая проза Лондона о доверии, инстинктах и влиянии среды.",
    "related": [
      {
        "id": "az-martin-iden-9clo",
        "type": "Другие книги автора"
      },
      {
        "id": "az-serdtsa-trekh-morskoy-volk-syn-solntsa",
        "type": "Другие книги автора"
      },
      {
        "id": "az-malenkaya-khozyayka-bolshogo-doma",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-23858-9",
      "translator": "Наталия Волжина",
      "source": "https://azbooka.ru/books/belyy-klyk-pxlr",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-saga-o-vidyashchikh-knigi-1-i-2-uchenik-ubiytsy-korolevskiy-ubiytsa-cbs4",
    "title": "Сага о Видящих. Книги 1 и 2. Ученик убийцы. Королевский убийца",
    "author": "Робин Хобб",
    "genre": "Фэнтези",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/d5dbe4a1-4134-481a-97bf-5160c305bd86.jpg",
    "summary": "Первые две книги «Саги о Видящих» в одном издании. Дворцовое фэнтези о взрослении Фитца и мире непростых обязательств.",
    "related": [
      {
        "id": "az-uchenik-ubiytsy-illyustrirovannoe-izdanie",
        "type": "Другие книги автора"
      },
      {
        "id": "az-saga-o-vidyashchikh-kniga-3-stranstviya-ubiytsy-snax",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-11394-7",
      "translator": "Мария Юнгер",
      "source": "https://azbooka.ru/books/saga-o-vidyashchikh-knigi-1-i-2-uchenik-ubiytsy-korolevskiy-ubiytsa-cbs4",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-vozdushnyy-zamok",
    "title": "Воздушный замок",
    "author": "Диана Уинн Джонс",
    "genre": "Фэнтези",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/830ba9a2-ef5d-472b-92d4-de0c5874abd0.jpg",
    "summary": "Вторая книга цикла о Ходячем замке. Новое сказочное приключение Дианы Уинн Джонс; связанные истории объединяет волшебный мир.",
    "related": [
      {
        "id": "az-khodyachiy-zamok",
        "type": "Предыдущая книга · 1"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-20680-9",
      "translator": "Анастасия Бродоцкая",
      "source": "https://azbooka.ru/books/vozdushnyy-zamok",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-padenie-doma-asherov-graficheskiy-roman",
    "title": "Падение дома Ашеров: графический роман",
    "author": "Жан Дюфо, Эдгар Аллан По",
    "genre": "Графический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/1e6fd9e2-6f05-44b6-991d-bff979889050.jpg",
    "summary": "Графическая интерпретация готической прозы Эдгара По. Визуальный рассказ строится на тревожной атмосфере и образах старого дома.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-25688-0",
      "translator": "Глеб Марьясов, Нора Галь",
      "source": "https://azbooka.ru/books/padenie-doma-asherov-graficheskiy-roman",
      "publisher": "КоЛибри",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-istoriya-bibliotek-kollektsionery-teksty-zdaniya",
    "title": "История библиотек: Коллекционеры. Тексты. Здания",
    "author": "Фредерик  Барбье",
    "genre": "История",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/1a3ccb4a-d9fd-48b9-860d-ea2d5c89a9e7.jpg",
    "summary": "История библиотек от частных коллекций до общественных учреждений. Книги, читатели и здания рассматриваются как часть культурной жизни.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-27479-2",
      "translator": "Наталья Рашковская",
      "source": "https://azbooka.ru/books/istoriya-bibliotek-kollektsionery-teksty-zdaniya",
      "publisher": "КоЛибри",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-serdtsa-trekh-morskoy-volk-syn-solntsa",
    "title": "Сердца трех. Морской волк. Сын Солнца",
    "author": "Джек Лондон",
    "genre": "Приключения",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/5cf3cae2-0b71-4435-ab5d-712ffb67aaf1.jpg",
    "summary": "Сборник приключенческой прозы Джека Лондона. Морская дорога, разные характеры и напряжённые встречи человека с обстоятельствами.",
    "related": [
      {
        "id": "az-martin-iden-9clo",
        "type": "Другие книги автора"
      },
      {
        "id": "az-belyy-klyk-pxlr",
        "type": "Другие книги автора"
      },
      {
        "id": "az-malenkaya-khozyayka-bolshogo-doma",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-27044-2",
      "translator": "Татьяна Кудрявцева, Даниил Горфинкель, Лев Хвостенко, Анастасия Бродоцкая, Нора Галь, Нина Емельянникова",
      "source": "https://azbooka.ru/books/serdtsa-trekh-morskoy-volk-syn-solntsa",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-zateryannyy-mir",
    "title": "Затерянный мир",
    "author": "Артур Конан Дойль",
    "genre": "Приключения",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/22ddcd04-19a7-4efe-beb8-6caf2edc6c80.jpg",
    "summary": "Экспедиция направляется исследовать труднодоступное плато. Приключенческая научная фантазия с необычной природой и духом больших открытий.",
    "related": [
      {
        "id": "az-dolina-strakha-zapiski-o-sherloke-kholmse-s-ill",
        "type": "Другие книги автора"
      },
      {
        "id": "az-etyud-v-bagrovykh-tonakh-priklyucheniya-sherloka-kholmsa-uico",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-25325-4",
      "translator": "Наталия Волжина",
      "source": "https://azbooka.ru/books/zateryannyy-mir",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-zapiski-o-sherloke-kholmse",
    "title": "Записки о Шерлоке Холмсе",
    "author": "Артур Конан Дойл",
    "genre": "Детектив",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/8ffae611-bd08-41c3-9546-0620c7056081.jpg",
    "summary": "Рассказы о Шерлоке Холмсе и докторе Ватсоне. Наблюдательность и работа с деталями помогают разбираться в запутанных обстоятельствах.",
    "related": [
      {
        "id": "az-sobaka-baskerviley-mxbh",
        "type": "Другие книги автора"
      },
      {
        "id": "az-znak-chetyrekh-vozvraschenie-sherloka-kholmsa-ufhz",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-23045-3",
      "translator": "Людмила Брилова, Сергей Сухарев",
      "source": "https://azbooka.ru/books/zapiski-o-sherloke-kholmse",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-blesk-i-nischeta-kyrtizanok-evgeniya-grande-liliya-doliny",
    "title": "Блеск и нищета куртизанок. Евгения Гранде. Лилия долины",
    "author": "Оноре де Бальзак",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/171b761e-d7f7-46bb-951a-21a3f9096218.jpg",
    "summary": "Три произведения «Человеческой комедии». Бальзак исследует деньги, семейные отношения и общественное положение во Франции XIX века.",
    "related": [
      {
        "id": "az-blesk-i-nishcheta-kurtizanok-pyf5",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-21667-9",
      "translator": "Ольга  Моисеенко, Елизавета Шишмарева, Нина Яковлева, Федор Достоевский",
      "source": "https://azbooka.ru/books/blesk-i-nischeta-kyrtizanok-evgeniya-grande-liliya-doliny",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-garri-potter-i-proklyatoe-ditya-chasti-pervaya-i-vtoraya-finalnaya-versiya-stsenariya-n2fh",
    "title": "Гарри Поттер и Проклятое дитя. Части первая и вторая. Финальная версия сценария",
    "author": "Джоан Кэтлин Роулинг",
    "genre": "Пьеса",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/8b93a201-3c17-4748-9d11-8e9d8d1c79cd.jpg",
    "summary": "Театральная история, связанная с миром Гарри Поттера. Сценарная форма и семейные темы; рассчитана на знакомство с основным циклом.",
    "related": [
      {
        "id": "az-garri-potter-i-kubok-ognya-s-tsvetnymi-illyustratsiyami",
        "type": "Другие книги автора"
      },
      {
        "id": "az-garri-potter-i-yznik-azkabana-illustratsii-selznika",
        "type": "Другие книги автора"
      },
      {
        "id": "az-garri-potter-i-orden-feniksa-ftci",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-13954-1",
      "translator": "Мария Спивак",
      "source": "https://azbooka.ru/books/garri-potter-i-proklyatoe-ditya-chasti-pervaya-i-vtoraya-finalnaya-versiya-stsenariya-n2fh",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-rozhdestvenskaya-pesn-graficheskiy-roman",
    "title": "Рождественская песнь: графический роман",
    "author": "Хосе-Луис  Муньера, Чарльз Диккенс",
    "genre": "Графический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/ac05f249-7d95-41c8-8019-d3cf6705e7b2.jpg",
    "summary": "Графическая адаптация рождественской истории Диккенса. Зимняя атмосфера, размышления о внимании к другим и выразительный визуальный рассказ.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-29624-4",
      "translator": "Глеб Марьясов",
      "source": "https://azbooka.ru/books/rozhdestvenskaya-pesn-graficheskiy-roman",
      "publisher": "КоЛибри",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-sestra-kerri-kr15",
    "title": "Сестра Керри",
    "author": "Теодор Драйзер",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/6d8cc066-165e-47c1-aeef-ba4da6674ab0.jpg",
    "summary": "Молодая девушка приезжает в большой американский город. Социальный роман о возможностях, материальных ожиданиях и стремлении к самостоятельности.",
    "related": [
      {
        "id": "az-finansist",
        "type": "Другие книги автора"
      },
      {
        "id": "az-amerikanskaya-tragediya-yuth",
        "type": "Другие книги автора"
      },
      {
        "id": "az-sestra-kerri-dzhenni-gerkhardt",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-08481-0",
      "translator": "Марк Волосов",
      "source": "https://azbooka.ru/books/sestra-kerri-kr15",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-malenkaya-khozyayka-bolshogo-doma",
    "title": "Маленькая хозяйка большого дома",
    "author": "Джек Лондон",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/b3805051-f074-4229-b1b4-29a65389b0fe.jpg",
    "summary": "Калифорнийское поместье и сложные отношения между близкими людьми. Камерный роман Лондона с вниманием к чувствам и укладу жизни.",
    "related": [
      {
        "id": "az-martin-iden-9clo",
        "type": "Другие книги автора"
      },
      {
        "id": "az-belyy-klyk-pxlr",
        "type": "Другие книги автора"
      },
      {
        "id": "az-serdtsa-trekh-morskoy-volk-syn-solntsa",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-20757-8",
      "translator": "Вера Станевич",
      "source": "https://azbooka.ru/books/malenkaya-khozyayka-bolshogo-doma",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-stoik",
    "title": "Стоик",
    "author": "Теодор Драйзер",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/66ef183b-9c12-42cc-932d-e2e2267fa35c.jpg",
    "summary": "Завершающая часть трилогии о Фрэнке Каупервуде. Продолжение социального романа о крупном предпринимательстве и личных притязаниях.",
    "related": [
      {
        "id": "az-titan",
        "type": "Предыдущая книга · 2"
      },
      {
        "id": "az-finansist",
        "type": "Другие книги автора"
      },
      {
        "id": "az-amerikanskaya-tragediya-yuth",
        "type": "Другие книги автора"
      },
      {
        "id": "az-sestra-kerri-dzhenni-gerkhardt",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-20370-9",
      "translator": "Мария Богословская, Татьяна Кудрявцева",
      "source": "https://azbooka.ru/books/stoik",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-dolina-strakha-zapiski-o-sherloke-kholmse-s-ill",
    "title": "Долина Страха. Записки о Шерлоке Холмсе",
    "author": "Артур Конан Дойль",
    "genre": "Детектив",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/683c31ce-154c-436d-97c9-c91af45c6029.jpg",
    "summary": "Роман и рассказы о Шерлоке Холмсе в одном издании. Детективные загадки с вниманием к показаниям, уликам и последовательности событий.",
    "related": [
      {
        "id": "az-zateryannyy-mir",
        "type": "Другие книги автора"
      },
      {
        "id": "az-etyud-v-bagrovykh-tonakh-priklyucheniya-sherloka-kholmsa-uico",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-22018-8",
      "translator": "Людмила Брилова, Сергей Сухарев",
      "source": "https://azbooka.ru/books/dolina-strakha-zapiski-o-sherloke-kholmse-s-ill",
      "publisher": "Иностранка",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-gorod-otgoloskov-novaya-istoriya-rima-ego-pap-i-zhiteley",
    "title": "Город отголосков. Новая история Рима, его пап и жителей",
    "author": "Джессика М.  Вернберг",
    "genre": "История",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/8d396659-69c2-41cf-9b6f-83201b3b4628.jpg",
    "summary": "Рим через отношения жителей и папской власти. Историческое повествование о городе, религии и повседневных интересах его обитателей.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-19692-6",
      "translator": "Аркадий Кабалкин",
      "source": "https://azbooka.ru/books/gorod-otgoloskov-novaya-istoriya-rima-ego-pap-i-zhiteley",
      "publisher": "КоЛибри",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-zapadnya",
    "title": "Западня",
    "author": "Кирстен Модглин",
    "genre": "Триллер",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/82b3fa52-c3c6-413d-8da3-29066f8938d7.jpg",
    "summary": "Напряжённая современная проза Кирстен Модглин. Для читателей, которым интересны недосказанность, психологическое напряжение и неопределённость между людьми.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-27107-4",
      "translator": "Наталья Буравова, Глеб Стукалин",
      "source": "https://azbooka.ru/books/zapadnya",
      "publisher": "Иностранка",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-kentervilskoe-prividenie",
    "title": "Кентервильское привидение",
    "author": "Оскар Уайльд",
    "genre": "Литературная сказка",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/e9200d8d-e312-424e-92aa-276369be93ba.jpg",
    "summary": "Американская семья поселяется в старинном английском доме. Ироничная история о встрече практического взгляда с готическими традициями.",
    "related": [
      {
        "id": "az-portret-doriana-greya-jh62",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-25860-0",
      "translator": "Юлий Кагарлицкий",
      "source": "https://azbooka.ru/books/kentervilskoe-prividenie",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-chrevo-parizha",
    "title": "Чрево Парижа",
    "author": "Эмиль Золя",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/aab15a21-9ac9-40b5-bbb6-0e8c1a9f5434.jpg",
    "summary": "Парижский рынок становится пространством большого городского романа. Золя наблюдает за торговлей, характерами и общественными противоречиями.",
    "related": [
      {
        "id": "az-nana-zemlya",
        "type": "Другие книги автора"
      },
      {
        "id": "az-chelovek-zver-zherminal",
        "type": "Другие книги автора"
      },
      {
        "id": "az-damskoe-schaste",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-25659-0",
      "translator": "Александра Линдегрен, Марк Эйхенгольц",
      "source": "https://azbooka.ru/books/chrevo-parizha",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-zamok-rujb",
    "title": "Замок",
    "author": "Франц Кафка",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/e1d399f4-cf18-4110-9758-dc95172779a3.jpg",
    "summary": "Приезжий пытается разобраться с правилами неизвестной ему администрации. Роман о недоступности власти и неопределённости человеческого положения.",
    "related": [
      {
        "id": "az-zamok-prevrashchenie-protsess-polnoe-sobranie-sochineniy",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-04816-4",
      "translator": "Рита Райт-Ковалева",
      "source": "https://azbooka.ru/books/zamok-rujb",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-golosa-temnoy-doliny",
    "title": "Голоса темной долины",
    "author": "Майкл Фэррис  Смит",
    "genre": "Современная проза",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/74dc86e9-b361-4bfa-998f-dd4c4ed06b1d.jpg",
    "summary": "Современная американская проза с вниманием к непростой жизни людей. Для любителей атмосферного повествования и психологически напряжённых отношений.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-27112-8",
      "translator": "Александр Александров",
      "source": "https://azbooka.ru/books/golosa-temnoy-doliny",
      "publisher": "Иностранка",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-etyud-v-bagrovykh-tonakh-priklyucheniya-sherloka-kholmsa-uico",
    "title": "Этюд в багровых тонах. Приключения Шерлока Холмса",
    "author": "Артур Конан Дойль",
    "genre": "Детектив",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/fbfb3bd0-dfd6-4644-8118-5c96b9768abd.jpg",
    "summary": "Первое знакомство Холмса и Ватсона и новые детективные дела. Лондонские загадки, наблюдательность и становление знаменитого литературного дуэта.",
    "related": [
      {
        "id": "az-zateryannyy-mir",
        "type": "Другие книги автора"
      },
      {
        "id": "az-dolina-strakha-zapiski-o-sherloke-kholmse-s-ill",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-21461-3",
      "translator": "Сергей Сухарев, Людмила Брилова",
      "source": "https://azbooka.ru/books/etyud-v-bagrovykh-tonakh-priklyucheniya-sherloka-kholmsa-uico",
      "publisher": "Иностранка",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-pena-damskoe-schaste",
    "title": "Пена. Дамское Счастье",
    "author": "Эмиль Золя",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/53b70c2f-6b54-4e67-9ed6-a932f31fc5e4.jpg",
    "summary": "Два романа Эмиля Золя о разных общественных средах. Семейные отношения и экономические перемены связаны с укладом повседневной жизни.",
    "related": [
      {
        "id": "az-nana-zemlya",
        "type": "Другие книги автора"
      },
      {
        "id": "az-chelovek-zver-zherminal",
        "type": "Другие книги автора"
      },
      {
        "id": "az-damskoe-schaste",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-22718-7",
      "translator": "Ирина Волевич, Марианна Брусовани",
      "source": "https://azbooka.ru/books/pena-damskoe-schaste",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-kholodnyy-dom-xtsg",
    "title": "Холодный дом",
    "author": "Чарльз Диккенс",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/1cba589c-fe77-42c8-8a62-7b4ce30a7002.jpg",
    "summary": "Длительное судебное дело затрагивает судьбы множества людей. Социальный роман Диккенса о бюрократии, заботе и общественном устройстве.",
    "related": [
      {
        "id": "az-bolshie-nadezhdy-lavka-drevnostey-srza",
        "type": "Другие книги автора"
      },
      {
        "id": "az-posmertnye-zapiski-pikvikskogo-klyba-s-ill",
        "type": "Другие книги автора"
      },
      {
        "id": "az-rozhdestvenskaya-pesn",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-21604-4",
      "translator": "Мелитина Клягина-Кондратьева",
      "source": "https://azbooka.ru/books/kholodnyy-dom-xtsg",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-priklucheniya-geklberri-finna",
    "title": "Приключения Гекльберри Финна",
    "author": "Марк Твен",
    "genre": "Приключения",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/2b7b5943-2228-429f-83d1-b91dff68de14.jpg",
    "summary": "Путешествие по Миссисипи глазами Гекльберри Финна. Приключенческая история о свободе, дружбе и сомнениях в привычных правилах.",
    "related": [
      {
        "id": "az-priklyucheniya-toma-soyera",
        "type": "Другие книги автора"
      },
      {
        "id": "az-prostaki-za-granitsey",
        "type": "Другие книги автора"
      },
      {
        "id": "az-prints-i-nishchiy-fybw",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-26597-4",
      "translator": "Нина Дарузес",
      "source": "https://azbooka.ru/books/priklucheniya-geklberri-finna",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-golosa-serebryanoy-strany-kratkaya-istoriya-argentiny",
    "title": "Голоса Серебряной страны: Краткая история Аргентины",
    "author": "Эсекьель Адамовски",
    "genre": "История",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/75253719-4af3-4536-8f4a-25dcaa83378c.jpg",
    "summary": "Краткое знакомство с историей Аргентины. Политические и культурные перемены рассматриваются через опыт людей и общественных движений.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-25827-3",
      "translator": "Марина Кедрова",
      "source": "https://azbooka.ru/books/golosa-serebryanoy-strany-kratkaya-istoriya-argentiny",
      "publisher": "КоЛибри",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-dzherri-ostrovityanin-maykl-brat-dzherri",
    "title": "Джерри-островитянин. Майкл, брат Джерри",
    "author": "Джек Лондон",
    "genre": "Приключения",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/102c8236-5777-490a-96a9-b54a943cd888.jpg",
    "summary": "Два романа Джека Лондона о животных и людях. Приключения соседствуют с наблюдением за доверием, обращением и условиями жизни.",
    "related": [
      {
        "id": "az-martin-iden-9clo",
        "type": "Другие книги автора"
      },
      {
        "id": "az-belyy-klyk-pxlr",
        "type": "Другие книги автора"
      },
      {
        "id": "az-serdtsa-trekh-morskoy-volk-syn-solntsa",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-31849-6",
      "translator": "Наталия Ман",
      "source": "https://azbooka.ru/books/dzherri-ostrovityanin-maykl-brat-dzherri",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-znak-chetyrekh-vozvraschenie-sherloka-kholmsa-ufhz",
    "title": "Знак четырех. Возвращение Шерлока Холмса",
    "author": "Артур Конан Дойл",
    "genre": "Детектив",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/26acb26a-33ed-4d80-8d3b-6703fc345423.jpg",
    "summary": "Роман и рассказы Конан Дойла в одном издании. Логические загадки, городские тайны и внимательная работа с неприметными деталями.",
    "related": [
      {
        "id": "az-sobaka-baskerviley-mxbh",
        "type": "Другие книги автора"
      },
      {
        "id": "az-zapiski-o-sherloke-kholmse",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-28983-3",
      "translator": "Людмила Брилова, Сергей Сухарев",
      "source": "https://azbooka.ru/books/znak-chetyrekh-vozvraschenie-sherloka-kholmsa-ufhz",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-raskolotaya-bitvoy-sineva-nebes-kniga-3-gildiya-alkhimikov",
    "title": "Расколотая битвой синева небес. Книга 3. Гильдия алхимиков",
    "author": "Тяньцань Тудоу",
    "genre": "Фэнтези",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/37819190-13df-4301-b20a-87abfc87ffe7.jpg",
    "summary": "Третья книга китайского приключенческого фэнтези. Мир обучения и необычных способностей; историю лучше читать в порядке цикла.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-29852-1",
      "translator": "Елизавета Гавришева",
      "source": "https://azbooka.ru/books/raskolotaya-bitvoy-sineva-nebes-kniga-3-gildiya-alkhimikov",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-siyanie-polnoy-lyny-iaponskie-liricheskie-dnevniki",
    "title": "Сияние полной луны: Японские лирические дневники",
    "author": "Сэй Сенагон, Мурасаки Сикибу",
    "genre": "Письма и дневники",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/9e5a0b60-9c8e-4938-ad9d-27860b5fcb02.jpg",
    "summary": "Японская придворная жизнь в лирических дневниках двух писательниц. Наблюдения, чувства и тонкое внимание к меняющимся сезонам.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-28969-7",
      "translator": "Вера Маркова, Виктор Санович, Александр Мещеряков, Татьяна Соколова-Делюсина",
      "source": "https://azbooka.ru/books/siyanie-polnoy-lyny-iaponskie-liricheskie-dnevniki",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-blesk-i-nishcheta-kurtizanok-pyf5",
    "title": "Блеск и нищета куртизанок",
    "author": "Оноре де Бальзак",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/b16a2bf4-dd8e-4bc9-ac59-c4c21584588b.jpg",
    "summary": "Парижское общество в мире «Человеческой комедии». Роман о социальном положении, деньгах и столкновении личных стремлений с общественными правилами.",
    "related": [
      {
        "id": "az-blesk-i-nischeta-kyrtizanok-evgeniya-grande-liliya-doliny",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-06051-7",
      "translator": "Нина Яковлева",
      "source": "https://azbooka.ru/books/blesk-i-nishcheta-kurtizanok-pyf5",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-skazki-staroy-anglii-oevk",
    "title": "Сказки старой Англии",
    "author": "Редьярд Киплинг",
    "genre": "Литературная сказка",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/7842142b-4b9f-4917-bbce-674e79575ab1.jpg",
    "summary": "Исторические и сказочные мотивы в прозе Киплинга. Англия разных времён становится пространством встреч с культурной памятью.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-06681-6",
      "translator": "Марина Бородицкая, Григорий Кружков, Татьяна Чернышева",
      "source": "https://azbooka.ru/books/skazki-staroy-anglii-oevk",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-garri-potter-i-orden-feniksa-ftci",
    "title": "Гарри Поттер и Орден Феникса",
    "author": "Джоан Кэтлин Роулинг",
    "genre": "Фэнтези",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/b75b72f9-b07e-4735-b3a6-79dca21c8f88.jpg",
    "summary": "Пятая книга истории о Гарри Поттере. Школьная жизнь и взросление в волшебном мире; знакомство лучше начинать с первой книги.",
    "related": [
      {
        "id": "az-garri-potter-i-kubok-ognya-s-tsvetnymi-illyustratsiyami",
        "type": "Предыдущая книга · 4"
      },
      {
        "id": "az-garri-potter-i-prints-polukrovka-xy4z",
        "type": "Продолжение · книга 6"
      },
      {
        "id": "az-garri-potter-i-yznik-azkabana-illustratsii-selznika",
        "type": "Другие книги автора"
      },
      {
        "id": "az-garri-potter-i-proklyatoe-ditya-chasti-pervaya-i-vtoraya-finalnaya-versiya-stsenariya-n2fh",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-07790-4",
      "translator": "Мария Спивак",
      "source": "https://azbooka.ru/books/garri-potter-i-orden-feniksa-ftci",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-zamok-vzdokhov-korolevskaya-ptichnitsa-komplekt-v-2-knigakh",
    "title": "Замок вздохов. Королевская птичница. Комплект в 2 книгах",
    "author": "Изабель Дюкенуа",
    "genre": "Исторический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/0c5d7cdd-fc61-4bfc-a46b-6798ff44142a.jpg",
    "summary": "Два исторических романа Изабель Дюкенуа. Атмосфера прошлого и внимание к жизни женщин в условиях общественных ограничений.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-34520-1",
      "translator": "Марианна Кожевникова",
      "source": "https://azbooka.ru/books/zamok-vzdokhov-korolevskaya-ptichnitsa-komplekt-v-2-knigakh",
      "publisher": "КоЛибри",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-khroniki-chernogo-otryada-chernyy-otryad-zamok-teney-belaya-roza-jxle",
    "title": "Хроники Черного Отряда: Черный Отряд. Замок теней. Белая Роза",
    "author": "Глен Кук",
    "genre": "Фэнтези",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/e58c05bd-86ac-44ed-a2fe-f3af8f02a3fb.jpg",
    "summary": "Первые истории цикла о Черном Отряде в одном томе. Военное фэнтези с взглядом на большие события через повседневность наёмников.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-11477-7",
      "translator": "Андрей Новиков, Максим Шведов, Даниэль Смушкович",
      "source": "https://azbooka.ru/books/khroniki-chernogo-otryada-chernyy-otryad-zamok-teney-belaya-roza-jxle",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-prostaki-za-granitsey",
    "title": "Простаки за границей",
    "author": "Марк Твен",
    "genre": "Путешествия",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/0405a5a6-44a6-434c-8a18-7d16559ebf97.jpg",
    "summary": "Заметки Марка Твена о зарубежной поездке. Путевые наблюдения, встречи с культурными различиями и характерный ироничный взгляд автора.",
    "related": [
      {
        "id": "az-priklyucheniya-toma-soyera",
        "type": "Другие книги автора"
      },
      {
        "id": "az-priklucheniya-geklberri-finna",
        "type": "Другие книги автора"
      },
      {
        "id": "az-prints-i-nishchiy-fybw",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-29153-9",
      "translator": "Ирина Гурова, Раиса Облонская",
      "source": "https://azbooka.ru/books/prostaki-za-granitsey",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-rastsvet-i-padenie-drevnego-rima-istoriya-velikoy-tsivilizatsii-cherez-istoriu-deneg",
    "title": "Расцвет и падение Древнего Рима: История великой цивилизации через историю денег",
    "author": "Гарет Харни",
    "genre": "История",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/933d893b-5a86-4c84-b5ee-e1bd58fd4166.jpg",
    "summary": "История Рима через деньги и экономические отношения. Монеты помогают связать политические перемены с повседневной жизнью цивилизации.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-27913-1",
      "translator": "Наталья Сорокина",
      "source": "https://azbooka.ru/books/rastsvet-i-padenie-drevnego-rima-istoriya-velikoy-tsivilizatsii-cherez-istoriu-deneg",
      "publisher": "КоЛибри",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-zapadnya-tvorchestvo",
    "title": "Западня. Творчество",
    "author": "Эмиль Золя",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/4c135a84-bb38-4c39-a002-da172167d602.jpg",
    "summary": "Два романа Золя о труде и творчестве. Общественная среда и личные стремления рассматриваются с вниманием к бытовым обстоятельствам.",
    "related": [
      {
        "id": "az-nana-zemlya",
        "type": "Другие книги автора"
      },
      {
        "id": "az-chelovek-zver-zherminal",
        "type": "Другие книги автора"
      },
      {
        "id": "az-damskoe-schaste",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-27595-9",
      "translator": "Евгения Яхнина, Елизавета Шишмарева, Ольга  Моисеенко, Тамара Каширина-Иванова",
      "source": "https://azbooka.ru/books/zapadnya-tvorchestvo",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-padenie-kymirov",
    "title": "Падение кумиров",
    "author": "Фридрих Ницше",
    "genre": "Философия",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/5b053ee9-c04e-4ca4-9d69-06f069460801.jpg",
    "summary": "Поздняя философская работа Ницше. Краткие полемические размышления о привычных ценностях, авторитетах и способах критического мышления.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-22681-4",
      "translator": "Марина Коренева, Степанов С., Виктор Топоров, В. Вейншток, Г. Рачинский, Е. Герцык, Мария Рубинштейн, Т. Гейликман, Елена Соловьева",
      "source": "https://azbooka.ru/books/padenie-kymirov",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-dom-golosov-yoii",
    "title": "Дом голосов",
    "author": "Донато Карризи",
    "genre": "Триллер",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/1157c52e-6a04-47e7-99c4-caa1b724a13c.jpg",
    "summary": "Психологический триллер Донато Карризи. Профессиональная работа с человеческой памятью и неопределённость становятся основой напряжённого чтения.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-20567-3",
      "translator": "Анастасия Миролюбова",
      "source": "https://azbooka.ru/books/dom-golosov-yoii",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-tolkovanie-snovideniy-vvedenie-v-psikhoanaliz",
    "title": "Толкование сновидений. Введение в психоанализ",
    "author": "Зигмунд Фрейд",
    "genre": "Психология",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/3e1d4d49-f7c9-4278-8c38-0f49e12ff0cf.jpg",
    "summary": "Две работы Фрейда, знакомящие с психоаналитической традицией. Исторические авторские концепции сновидений, бессознательного и психической жизни.",
    "related": [
      {
        "id": "az-tolkovanie-snovideniy",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-19756-5",
      "translator": "Яков Коган, Галина Барышникова",
      "source": "https://azbooka.ru/books/tolkovanie-snovideniy-vvedenie-v-psikhoanaliz",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-garri-potter-i-dary-smerti-illustratsii-selznika",
    "title": "Гарри Поттер и Дары Смерти (иллюстрации Селзника)",
    "author": "Джоан Кэтлин Роулинг",
    "genre": "Фэнтези",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/0782032c-b7d8-4015-aa77-a6f70f8251c0.jpg",
    "summary": "Седьмая книга о Гарри Поттере в иллюстрированном оформлении. Продолжение большого цикла, которое лучше читать после предыдущих частей.",
    "related": [
      {
        "id": "az-garri-potter-i-prints-polukrovka-xy4z",
        "type": "Предыдущая книга · 6"
      },
      {
        "id": "az-garri-potter-i-kubok-ognya-s-tsvetnymi-illyustratsiyami",
        "type": "Другие книги автора"
      },
      {
        "id": "az-garri-potter-i-yznik-azkabana-illustratsii-selznika",
        "type": "Другие книги автора"
      },
      {
        "id": "az-garri-potter-i-proklyatoe-ditya-chasti-pervaya-i-vtoraya-finalnaya-versiya-stsenariya-n2fh",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-19205-8",
      "translator": "Мария Спивак",
      "source": "https://azbooka.ru/books/garri-potter-i-dary-smerti-illustratsii-selznika",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-zov-predkov",
    "title": "Зов предков",
    "author": "Джек Лондон",
    "genre": "Приключения",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/cc2965ad-291c-478f-82f8-dd2a2a9154fb.jpg",
    "summary": "История домашнего пса на фоне северной природы. Приключенческая повесть о приспособлении, инстинктах и необычных жизненных обстоятельствах.",
    "related": [
      {
        "id": "az-martin-iden-9clo",
        "type": "Другие книги автора"
      },
      {
        "id": "az-belyy-klyk-pxlr",
        "type": "Другие книги автора"
      },
      {
        "id": "az-serdtsa-trekh-morskoy-volk-syn-solntsa",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-18279-0",
      "translator": "Мария Абкина, Наталия Волжина, Нора Галь, Нина Дарузес, Нина Емельянникова, Татьяна Озерская, Владимир Правосудов, Ксения Тверьянович",
      "source": "https://azbooka.ru/books/zov-predkov",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-garri-potter-i-taynaya-komnata-illustratsii-selznika",
    "title": "Гарри Поттер и Тайная комната (иллюстрации Селзника)",
    "author": "Джоан Кэтлин Роулинг",
    "genre": "Фэнтези",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/05761291-674d-47c9-a9b8-0ae0743b16cd.jpg",
    "summary": "Вторая книга о Гарри Поттере. Новый учебный год в необычной школе; продолжение знакомства с миром волшебства.",
    "related": [
      {
        "id": "az-garri-potter-i-filosofskiy-kamen-s-tsvetnymi-illyustratsiyami-hnwc",
        "type": "Предыдущая книга · 1"
      },
      {
        "id": "az-garri-potter-i-yznik-azkabana-illustratsii-selznika",
        "type": "Продолжение · книга 3"
      },
      {
        "id": "az-garri-potter-i-kubok-ognya-s-tsvetnymi-illyustratsiyami",
        "type": "Другие книги автора"
      },
      {
        "id": "az-garri-potter-i-proklyatoe-ditya-chasti-pervaya-i-vtoraya-finalnaya-versiya-stsenariya-n2fh",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-19200-3",
      "translator": "Мария Спивак",
      "source": "https://azbooka.ru/books/garri-potter-i-taynaya-komnata-illustratsii-selznika",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-posmertnye-zapiski-pikvikskogo-klyba-s-ill",
    "title": "Посмертные записки Пиквикского клуба (с илл.)",
    "author": "Чарльз Диккенс",
    "genre": "Юмор",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/51b39d05-00c2-4cfb-bf14-923dc83d701e.jpg",
    "summary": "Путешествия и наблюдения участников Пиквикского клуба. Добродушная английская проза с комическими ситуациями и разнообразием человеческих характеров.",
    "related": [
      {
        "id": "az-bolshie-nadezhdy-lavka-drevnostey-srza",
        "type": "Другие книги автора"
      },
      {
        "id": "az-kholodnyy-dom-xtsg",
        "type": "Другие книги автора"
      },
      {
        "id": "az-rozhdestvenskaya-pesn",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-32575-3",
      "translator": "Александра Кривцова, Евгений Ланн",
      "source": "https://azbooka.ru/books/posmertnye-zapiski-pikvikskogo-klyba-s-ill",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-rozhdestvenskaya-pesn",
    "title": "Рождественская песнь",
    "author": "Чарльз Диккенс",
    "genre": "Литературная сказка",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/a1fe1854-f62c-4b61-8c15-86c6858db885.jpg",
    "summary": "Накануне Рождества замкнутому деловому человеку предстоят необычные встречи. Зимняя история о внимании к окружающим и значении человеческой близости.",
    "related": [
      {
        "id": "az-bolshie-nadezhdy-lavka-drevnostey-srza",
        "type": "Другие книги автора"
      },
      {
        "id": "az-kholodnyy-dom-xtsg",
        "type": "Другие книги автора"
      },
      {
        "id": "az-posmertnye-zapiski-pikvikskogo-klyba-s-ill",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-14594-8",
      "translator": "Мария Торчинская",
      "source": "https://azbooka.ru/books/rozhdestvenskaya-pesn",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-golyboy-zamok-wfhc",
    "title": "Голубой замок",
    "author": "Люси Мод Монтгомери",
    "genre": "Классический роман",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/2a6f7a46-6685-4c01-8e8d-1809ea007d8d.jpg",
    "summary": "Молодая женщина живёт среди жёстких семейных ожиданий. Роман о воображении, самостоятельности и праве искать собственное счастье.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-29589-6",
      "translator": "Татьяна Шушлебина, Ольга Болгова",
      "source": "https://azbooka.ru/books/golyboy-zamok-wfhc",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-garri-potter-i-prints-polukrovka-xy4z",
    "title": "Гарри Поттер и Принц-полукровка",
    "author": "Джоан Кэтлин Роулинг",
    "genre": "Фэнтези",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/1ff24c98-020b-4cb7-aa0f-d71604c8cff2.jpg",
    "summary": "Шестая книга истории о Гарри Поттере. Продолжение взросления героев в волшебном мире; рекомендуется читать после первых пяти частей.",
    "related": [
      {
        "id": "az-garri-potter-i-orden-feniksa-ftci",
        "type": "Предыдущая книга · 5"
      },
      {
        "id": "az-garri-potter-i-dary-smerti-illustratsii-selznika",
        "type": "Продолжение · книга 7"
      },
      {
        "id": "az-garri-potter-i-kubok-ognya-s-tsvetnymi-illyustratsiyami",
        "type": "Другие книги автора"
      },
      {
        "id": "az-garri-potter-i-yznik-azkabana-illustratsii-selznika",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-07791-1",
      "translator": "Мария Спивак",
      "source": "https://azbooka.ru/books/garri-potter-i-prints-polukrovka-xy4z",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-garri-potter-i-filosofskiy-kamen-s-tsvetnymi-illyustratsiyami-hnwc",
    "title": "Гарри Поттер и философский камень (с цветными иллюстрациями)",
    "author": "Джоан Кэтлин Роулинг",
    "genre": "Фэнтези",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/ab2d32e2-29c1-4161-9cba-2e92a4ee539f.jpg",
    "summary": "Мальчик получает приглашение в школу волшебства. Начало истории о дружбе, учёбе и знакомстве с совершенно новым миром.",
    "related": [
      {
        "id": "az-garri-potter-i-taynaya-komnata-illustratsii-selznika",
        "type": "Продолжение · книга 2"
      },
      {
        "id": "az-garri-potter-i-kubok-ognya-s-tsvetnymi-illyustratsiyami",
        "type": "Другие книги автора"
      },
      {
        "id": "az-garri-potter-i-yznik-azkabana-illustratsii-selznika",
        "type": "Другие книги автора"
      },
      {
        "id": "az-garri-potter-i-proklyatoe-ditya-chasti-pervaya-i-vtoraya-finalnaya-versiya-stsenariya-n2fh",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-10818-9",
      "translator": "Мария Спивак",
      "source": "https://azbooka.ru/books/garri-potter-i-filosofskiy-kamen-s-tsvetnymi-illyustratsiyami-hnwc",
      "publisher": "Махаон",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-prints-i-nishchiy-fybw",
    "title": "Принц и нищий",
    "author": "Марк Твен",
    "genre": "Приключения",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/aa56f56c-9605-4a37-9330-fc793d156582.jpg",
    "summary": "Двое мальчиков из разных общественных слоёв обнаруживают удивительное сходство. Историческая приключенческая история о привилегиях и повседневной жизни.",
    "related": [
      {
        "id": "az-priklyucheniya-toma-soyera",
        "type": "Другие книги автора"
      },
      {
        "id": "az-priklucheniya-geklberri-finna",
        "type": "Другие книги автора"
      },
      {
        "id": "az-prostaki-za-granitsey",
        "type": "Другие книги автора"
      }
    ],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-10001-5",
      "translator": "Корней Чуковский, Николай Чуковский",
      "source": "https://azbooka.ru/books/prints-i-nishchiy-fybw",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-golos-tishiny",
    "title": "Голос тишины",
    "author": "Патрисия Маккормик",
    "genre": "Современная проза",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/cb1660b2-fb79-4ec4-b4e2-6d171d318b1b.jpg",
    "summary": "Камерная история Патрисии Маккормик с вниманием к внутреннему миру человека. Подойдёт читателям психологической прозы и непростых эмоциональных тем.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-33051-1",
      "translator": "Валентина Ионова",
      "source": "https://azbooka.ru/books/golos-tishiny",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  },
  {
    "id": "az-prostranstvo-kniga-9-padenie-leviafana",
    "title": "Пространство. Книга 9. Падение Левиафана",
    "author": "Джеймс С. А. Кори",
    "genre": "Фантастика",
    "coverUrl": "https://cdn.azbooka.ru/cv/w383/90d28600-2b2d-4aad-838f-f03a0eac585a.jpg",
    "summary": "Девятая книга цикла «Пространство». Масштабная космическая фантастика; знакомство с миром лучше начинать с первого тома.",
    "related": [],
    "verification": {
      "status": "verified",
      "language": "ru",
      "isbn": "978-5-389-28641-2",
      "translator": "Галина Соловьева",
      "source": "https://azbooka.ru/books/prostranstvo-kniga-9-padenie-leviafana",
      "publisher": "Азбука",
      "checkedAt": "2026-11-05",
      "evidence": "В публичной карточке издательства указаны переводчик, русское издание и ISBN. Обложка относится к этой карточке; для сборника ISBN и обложка относятся ко всему сборнику."
    },
    "review": {
      "spoilerFree": true,
      "method": "editorial-premise-only",
      "reviewedAt": "2026-11-05"
    }
  }
];
