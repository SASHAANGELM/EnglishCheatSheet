export function getVerbByFirstForm(firstForm) {
  const found = irregularVerbs.find(verb => {
    return verb.first.toLowerCase() === firstForm.toLowerCase();
  });
  if (found) {
    return found
  } else {
    return regularVerbs.find(verb => {
      return verb.first.toLowerCase() === firstForm.toLowerCase();
    })
  }
}

const regularVerbs = [
  {
    first: 'plan',
    second: 'planned',
    third: 'planned',
    translates: [
      'планувати'
    ]
  },
  {
    first: 'start',
    second: 'started',
    third: 'started',
    translates: [
      'почати',
      'починати'
    ]
  }
]

export const irregularVerbs  = JSON.parse(`[
  {
    "first": "abide",
    "second": "abode / abided",
    "third": "abode / abided",
    "translates": [
      "терпеть",
      "выносить",
      "придерживаться чего-либо",
      "быть верным"
    ]
  },
  {
    "first": "arise",
    "second": "arose",
    "third": "arisen",
    "translates": [
      "возникать",
      "подниматься"
    ]
  },
  {
    "first": "awake",
    "second": "awaked / awoke",
    "third": "awaked / awoken",
    "translates": [
      "будить",
      "вызывать",
      "просыпаться",
      "понимать"
    ]
  },
  {
    "first": "backslide",
    "second": "backslid",
    "third": "backslidden / backslid",
    "translates": [
      "отступаться от веры",
      "снова предаваться пороку"
    ]
  },
  {
    "first": "be / was",
    "second": "were",
    "third": "been",
    "translates": [
      "быть",
      "являться"
    ]
  },
  {
    "first": "bear",
    "second": "bore / beared",
    "third": "born / borne / beared",
    "translates": [
      "нести",
      "выносить",
      "держать",
      "питать чувство"
    ]
  },
  {
    "first": "beat",
    "second": "beat",
    "third": "beaten / beat",
    "translates": [
      "бить",
      "побеждать"
    ]
  },
  {
    "first": "become",
    "second": "became",
    "third": "become",
    "translates": [
      "становиться",
      "делаться"
    ]
  },
  {
    "first": "befall",
    "second": "befell",
    "third": "befallen",
    "translates": [
      "случаться",
      "приключаться"
    ]
  },
  {
    "first": "begin",
    "second": "began",
    "third": "begun",
    "translates": [
      "начинать"
    ]
  },
  {
    "first": "behold",
    "second": "beheld",
    "third": "beheld",
    "translates": [
      "увидеть",
      "заметить",
      "созерцать",
      "наблюдать"
    ]
  },
  {
    "first": "bend",
    "second": "bent",
    "third": "bent",
    "translates": [
      "гнуть",
      "сгибать"
    ]
  },
  {
    "first": "bereave",
    "second": "bereft / bereaved",
    "third": "bereft / bereaved",
    "translates": [
      "лишать",
      "отнимать",
      "отбирать"
    ]
  },
  {
    "first": "beseech",
    "second": "besought/beseeched",
    "third": "besought/beseeched",
    "translates": [
      "умолять",
      "просить",
      "упрашивать"
    ]
  },
  {
    "first": "beset",
    "second": "beset",
    "third": "beset",
    "translates": [
      "окружать",
      "осаждать",
      "преграждать"
    ]
  },
  {
    "first": "bet",
    "second": "bet / betted",
    "third": "bet / betted",
    "translates": [
      "держать пари",
      "быть уверенным"
    ]
  },
  {
    "first": "bid",
    "second": "bid / bade",
    "third": "bidden",
    "translates": [
      "приглашать",
      "приветствовать",
      "прощаться"
    ]
  },
  {
    "first": "bid",
    "second": "bid",
    "third": "bid",
    "translates": [
      "предлагать цену",
      "велеть",
      "просить"
    ]
  },
  {
    "first": "bide",
    "second": "bode / bided",
    "third": "bided",
    "translates": [
      "ждать",
      "выжидать",
      "оставаться",
      "находиться"
    ]
  },
  {
    "first": "bind",
    "second": "bound",
    "third": "bound",
    "translates": [
      "связывать"
    ]
  },
  {
    "first": "bite",
    "second": "bit",
    "third": "bitten",
    "translates": [
      "кусать",
      "клевать",
      "жалить"
    ]
  },
  {
    "first": "bleed",
    "second": "bled",
    "third": "bled",
    "translates": [
      "кровоточить",
      "истекать кровью"
    ]
  },
  {
    "first": "bless",
    "second": "blessed / blest",
    "third": "blessed / blest",
    "translates": [
      "благословлять",
      "одаривать",
      "перекрестить"
    ]
  },
  {
    "first": "blow",
    "second": "blew",
    "third": "blown",
    "translates": [
      "дуть",
      "веять",
      "задувать",
      "выдувать",
      "взрывать"
    ]
  },
  {
    "first": "break",
    "second": "broke",
    "third": "broken",
    "translates": [
      "ломать",
      "прерывать",
      "разбивать"
    ]
  },
  {
    "first": "breed",
    "second": "bred",
    "third": "bred",
    "translates": [
      "выводить",
      "вскармливать",
      "размножаться",
      "порождать"
    ]
  },
  {
    "first": "bring",
    "second": "brought",
    "third": "brought",
    "translates": [
      "приносить",
      "приводить",
      "доводить"
    ]
  },
  {
    "first": "broadcast",
    "second": "broadcast / broadcasted",
    "third": "broadcast / broadcasted",
    "translates": [
      "вещать",
      "распространять",
      "передавать по радио"
    ]
  },
  {
    "first": "build",
    "second": "built",
    "third": "built",
    "translates": [
      "строить",
      "сооружать"
    ]
  },
  {
    "first": "burn",
    "second": "burned / burnt",
    "third": "burned / burnt",
    "translates": [
      "гореть",
      "сжигать"
    ]
  },
  {
    "first": "burst",
    "second": "burst",
    "third": "burst",
    "translates": [
      "лопаться",
      "взрываться",
      "быть переполненным",
      "появиться"
    ]
  },
  {
    "first": "bust",
    "second": "busted / bust",
    "third": "busted / bust",
    "translates": [
      "сломать",
      "разрушать",
      "разориться",
      "бить"
    ]
  },
  {
    "first": "buy",
    "second": "bought",
    "third": "bought",
    "translates": [
      "покупать"
    ]
  },
  {
    "first": "cast",
    "second": "cast",
    "third": "cast",
    "translates": [
      "бросать",
      "отбрасывать",
      "уволить",
      "отливать (метал)"
    ]
  },
  {
    "first": "catch",
    "second": "caught",
    "third": "caught",
    "translates": [
      "поймать",
      "ловить",
      "догнать"
    ]
  },
  {
    "first": "chide",
    "second": "chided / chid",
    "third": "chided / chid / chidden",
    "translates": [
      "распекать",
      "ругать",
      "бранить",
      "реветь"
    ]
  },
  {
    "first": "choose",
    "second": "chose",
    "third": "chosen",
    "translates": [
      "выбирать"
    ]
  },
  {
    "first": "cleave",
    "second": "cleft / clove",
    "third": "cleft / cloven",
    "translates": [
      "раскалывать",
      "рассекать"
    ]
  },
  {
    "first": "cling",
    "second": "clung",
    "third": "clung",
    "translates": [
      "цепляться",
      "держаться",
      "липнуть"
    ]
  },
  {
    "first": "clothe",
    "second": "clothed / clad",
    "third": "clothed / clad",
    "translates": [
      "одеть",
      "одевать",
      "выражать",
      "одарять"
    ]
  },
  {
    "first": "come",
    "second": "came",
    "third": "come",
    "translates": [
      "приходить"
    ]
  },
  {
    "first": "cost",
    "second": "cost",
    "third": "cost",
    "translates": [
      "оценивать",
      "стоить"
    ]
  },
  {
    "first": "creep",
    "second": "crept",
    "third": "crept",
    "translates": [
      "ползать",
      "красться",
      "охватывать",
      "наводить ужас"
    ]
  },
  {
    "first": "crossbreed",
    "second": "crossbred",
    "third": "crossbred",
    "translates": [
      "скрещивать"
    ]
  },
  {
    "first": "cut",
    "second": "cut",
    "third": "cut",
    "translates": [
      "резать",
      "обрезать"
    ]
  },
  {
    "first": "dare",
    "second": "durst",
    "third": "dared",
    "translates": [
      "сметь",
      "бросать вызов",
      "рисковать"
    ]
  },
  {
    "first": "daydream",
    "second": "daydreamed / daydreamt",
    "third": "daydreamed / daydreamt",
    "translates": [
      "грезить наяву",
      "мечтать",
      "фантазировать"
    ]
  },
  {
    "first": "deal",
    "second": "dealt",
    "third": "dealt",
    "translates": [
      "иметь дело",
      "торговать",
      "рассматривать вопрос"
    ]
  },
  {
    "first": "dig",
    "second": "dug",
    "third": "dug",
    "translates": [
      "копать",
      "рыть",
      "искать"
    ]
  },
  {
    "first": "disprove",
    "second": "disproved",
    "third": "disproved / disproven",
    "translates": [
      "опровергать",
      "доказывать ложность"
    ]
  },
  {
    "first": "dive",
    "second": "dove / dived",
    "third": "dived",
    "translates": [
      "нырять",
      "прыгать вниз",
      "окунаться"
    ]
  },
  {
    "first": "do",
    "second": "did",
    "third": "done",
    "translates": [
      "делать",
      "выполнять"
    ]
  },
  {
    "first": "draw",
    "second": "drew",
    "third": "drawn",
    "translates": [
      "чертить",
      "рисовать",
      "представлять",
      "тащить",
      "тянуть "
    ]
  },
  {
    "first": "dream",
    "second": "dreamed / dreamt",
    "third": "dreamed / dreamt",
    "translates": [
      "видеть сны",
      "мечтать"
    ]
  },
  {
    "first": "drink",
    "second": "drank",
    "third": "drunk",
    "translates": [
      "пить",
      "выпивать"
    ]
  },
  {
    "first": "drive",
    "second": "drove",
    "third": "driven",
    "translates": [
      "водить (машину)",
      "управлять",
      "ездить"
    ]
  },
  {
    "first": "dwell",
    "second": "dwelt / dwelled",
    "third": "dwelt / dwelled",
    "translates": [
      "жить",
      "обитать",
      "пребывать",
      "останавливаться"
    ]
  },
  {
    "first": "eat",
    "second": "ate",
    "third": "eaten",
    "translates": [
      "есть",
      "принимать пищу",
      "кушать"
    ]
  },
  {
    "first": "fall",
    "second": "fell",
    "third": "fallen",
    "translates": [
      "падать",
      "опадать",
      "опускаться"
    ]
  },
  {
    "first": "feed",
    "second": "fed",
    "third": "fed",
    "translates": [
      "кормить"
    ]
  },
  {
    "first": "feel",
    "second": "felt",
    "third": "felt",
    "translates": [
      "чувствовать"
    ]
  },
  {
    "first": "fight",
    "second": "fought",
    "third": "fought",
    "translates": [
      "бороться",
      "сражаться"
    ]
  },
  {
    "first": "find",
    "second": "found",
    "third": "found",
    "translates": [
      "находить",
      "обнаруживать"
    ]
  },
  {
    "first": "fit",
    "second": "fitted / fit",
    "third": "fitted / fit",
    "translates": [
      "подгонять",
      "прилаживать",
      "приспосабливать",
      "оснащать"
    ]
  },
  {
    "first": "flee",
    "second": "fled",
    "third": "fled",
    "translates": [
      "бежать",
      "спасаться бегством"
    ]
  },
  {
    "first": "fling",
    "second": "flung",
    "third": "flung",
    "translates": [
      "кидать",
      "бросать"
    ]
  },
  {
    "first": "fly",
    "second": "flew",
    "third": "flown",
    "translates": [
      "летать",
      "пролетать"
    ]
  },
  {
    "first": "forbear",
    "second": "forbore",
    "third": "forborne",
    "translates": [
      "сдерживаться",
      "воздерживаться",
      "быть выдержанным"
    ]
  },
  {
    "first": "forbid",
    "second": "forbade",
    "third": "forbidden",
    "translates": [
      "запрещать"
    ]
  },
  {
    "first": "forecast",
    "second": "forecast",
    "third": "forecast",
    "translates": [
      "прогнозировать",
      "предсказывать"
    ]
  },
  {
    "first": "forego",
    "second": "forewent",
    "third": "foregone",
    "translates": [
      "предшествовать",
      "идти впереди"
    ]
  },
  {
    "first": "foresee",
    "second": "foresaw",
    "third": "foreseen",
    "translates": [
      "предвидеть",
      "предугадывать"
    ]
  },
  {
    "first": "foretell",
    "second": "foretold",
    "third": "foretold",
    "translates": [
      "предсказывать",
      "прогнозировать"
    ]
  },
  {
    "first": "forget",
    "second": "forgot",
    "third": "forgotten / forgot",
    "translates": [
      "забывать"
    ]
  },
  {
    "first": "forgive",
    "second": "forgave",
    "third": "forgiven",
    "translates": [
      "прощать",
      "забыть (долг)"
    ]
  },
  {
    "first": "forgo",
    "second": "forwent",
    "third": "forgone",
    "translates": [
      "отказываться",
      "воздерживаться"
    ]
  },
  {
    "first": "forsake",
    "second": "forsook",
    "third": "forsaken",
    "translates": [
      "бросать",
      "оставлять",
      "отказываться"
    ]
  },
  {
    "first": "forswear",
    "second": "forswore",
    "third": "forsworn",
    "translates": [
      "отказываться",
      "отрекаться"
    ]
  },
  {
    "first": "freeze",
    "second": "froze",
    "third": "frozen",
    "translates": [
      "замерзать",
      "замораживать"
    ]
  },
  {
    "first": "frostbite",
    "second": "frostbit",
    "third": "frostbitten",
    "translates": [
      "обморозить",
      "отморозить"
    ]
  },
  {
    "first": "get",
    "second": "got",
    "third": "gotten / got",
    "translates": [
      "получать",
      "становиться"
    ]
  },
  {
    "first": "gild",
    "second": "gilded / gilt",
    "third": "gilded / gilt",
    "translates": [
      "золотить",
      "покрывать позолотой",
      "украшать"
    ]
  },
  {
    "first": "give",
    "second": "gave",
    "third": "given",
    "translates": [
      "давать"
    ]
  },
  {
    "first": "go",
    "second": "went",
    "third": "gone",
    "translates": [
      "идти",
      "ехать"
    ]
  },
  {
    "first": "grind",
    "second": "ground",
    "third": "ground",
    "translates": [
      "молоть",
      "растереть",
      "шлифовать",
      "точить"
    ]
  },
  {
    "first": "grow",
    "second": "grew",
    "third": "grown",
    "translates": [
      "расти",
      "выращивать"
    ]
  },
  {
    "first": "hand-feed",
    "second": "hand-fed",
    "third": "hand-fed",
    "translates": [
      "подавать вручную"
    ]
  },
  {
    "first": "handwrite",
    "second": "handwrote",
    "third": "handwritten",
    "translates": [
      "писать вручную"
    ]
  },
  {
    "first": "hang",
    "second": "hung",
    "third": "hung",
    "translates": [
      "висеть",
      "вешать"
    ]
  },
  {
    "first": "have",
    "second": "had",
    "third": "had",
    "translates": [
      "иметь",
      "обладать"
    ]
  },
  {
    "first": "hear",
    "second": "heard",
    "third": "heard",
    "translates": [
      "слышать",
      "слушать"
    ]
  },
  {
    "first": "heave",
    "second": "heaved / hove",
    "third": "heaved / hove",
    "translates": [
      "поднимать",
      "перемещать",
      "вздыматься",
      "напрягаться"
    ]
  },
  {
    "first": "hew",
    "second": "hewed",
    "third": "hewn / hewed",
    "translates": [
      "рубить",
      "тесать",
      "отбывать",
      "согласовываться"
    ]
  },
  {
    "first": "hide",
    "second": "hid",
    "third": "hidden",
    "translates": [
      "прятать",
      "прятаться"
    ]
  },
  {
    "first": "hit",
    "second": "hit",
    "third": "hit",
    "translates": [
      "ударять",
      "поражать"
    ]
  },
  {
    "first": "hold",
    "second": "held",
    "third": "held",
    "translates": [
      "занимать",
      "держать",
      "удерживать"
    ]
  },
  {
    "first": "hurt",
    "second": "hurt",
    "third": "hurt",
    "translates": [
      "повредить",
      "причинять боль",
      "ранить"
    ]
  },
  {
    "first": "inbreed",
    "second": "inbred",
    "third": "inbred",
    "translates": [
      "взращивать",
      "воспитывать что-то в ком-то"
    ]
  },
  {
    "first": "inlay",
    "second": "inlaid",
    "third": "inlaid",
    "translates": [
      "инкрустировать",
      "делать вставку"
    ]
  },
  {
    "first": "input",
    "second": "input / inputted",
    "third": "input / inputted",
    "translates": [
      "ввести",
      "вводить",
      "вкладывать (деньги)"
    ]
  },
  {
    "first": "interbreed",
    "second": "interbred",
    "third": "interbred",
    "translates": [
      "скрещивать",
      "скрещиваться"
    ]
  },
  {
    "first": "interweave",
    "second": "interwove / interweaved",
    "third": "interwoven / interweaved",
    "translates": [
      "c",
      "плетать",
      "переплетать",
      "смешивать",
      "воткать"
    ]
  },
  {
    "first": "interwind",
    "second": "interwound",
    "third": "interwound",
    "translates": [
      "переплетать",
      "перематывать"
    ]
  },
  {
    "first": "jerry-build",
    "second": "jerry-built",
    "third": "jerry-built",
    "translates": [
      "построить на скорую руку",
      "кое-как"
    ]
  },
  {
    "first": "keep",
    "second": "kept",
    "third": "kept",
    "translates": [
      "держать",
      "сохранять",
      "хранить"
    ]
  },
  {
    "first": "kneel",
    "second": "knelt / kneeled",
    "third": "knelt / kneeled",
    "translates": [
      "становиться на колени"
    ]
  },
  {
    "first": "knit",
    "second": "knitted / knit",
    "third": "knitted / knit",
    "translates": [
      "вязать",
      "штопать"
    ]
  },
  {
    "first": "know",
    "second": "knew",
    "third": "known",
    "translates": [
      "знать",
      "уметь",
      "быть знакомым"
    ]
  },
  {
    "first": "lay",
    "second": "laid",
    "third": "laid",
    "translates": [
      "класть",
      "валить",
      "накрывать"
    ]
  },
  {
    "first": "lead",
    "second": "led",
    "third": "led",
    "translates": [
      "вести",
      "сопровождать"
    ]
  },
  {
    "first": "lean",
    "second": "leaned / leant",
    "third": "leaned / leant",
    "translates": [
      "опираться",
      "наклоняться",
      "прислоняться"
    ]
  },
  {
    "first": "leap",
    "second": "leaped / leapt",
    "third": "leaped / leapt",
    "translates": [
      "прыгать",
      "скакать"
    ]
  },
  {
    "first": "learn",
    "second": "learned / learnt",
    "third": "learned / learnt",
    "translates": [
      "учиться",
      "узнавать"
    ]
  },
  {
    "first": "leave",
    "second": "left",
    "third": "left",
    "translates": [
      "оставлять",
      "уезжать"
    ]
  },
  {
    "first": "lend",
    "second": "lent",
    "third": "lent",
    "translates": [
      "одалживать",
      "давать взаймы",
      "занимать"
    ]
  },
  {
    "first": "let",
    "second": "let",
    "third": "let",
    "translates": [
      "позволять",
      "допускать",
      "выпускать",
      "проливать"
    ]
  },
  {
    "first": "lie",
    "second": "lay",
    "third": "lain",
    "translates": [
      "лежать",
      "распологаться",
      "находиться"
    ]
  },
  {
    "first": "light",
    "second": "lit / lighted",
    "third": "lit / lighted",
    "translates": [
      "натолкнуться",
      "обрушиться",
      "освещать",
      "зажигать",
      "светиться"
    ]
  },
  {
    "first": "lip-read",
    "second": "lip-read",
    "third": "lip-read",
    "translates": [
      "читать с губ",
      "понимать по губам"
    ]
  },
  {
    "first": "lose",
    "second": "lost",
    "third": "lost",
    "translates": [
      "терять",
      "утрачивать",
      "избавляться",
      "пропадать"
    ]
  },
  {
    "first": "make",
    "second": "made",
    "third": "made",
    "translates": [
      "делать",
      "производить",
      "совершать"
    ]
  },
  {
    "first": "mean",
    "second": "meant",
    "third": "meant",
    "translates": [
      "значить",
      "подразумевать"
    ]
  },
  {
    "first": "meet",
    "second": "met",
    "third": "met",
    "translates": [
      "встречать",
      "знакомиться"
    ]
  },
  {
    "first": "miscast",
    "second": "miscast",
    "third": "miscast",
    "translates": [
      "неправильно распределять роли"
    ]
  },
  {
    "first": "misdeal",
    "second": "misdealt",
    "third": "misdealt",
    "translates": [
      "ошибаться при сдаче"
    ]
  },
  {
    "first": "misdo",
    "second": "misdid",
    "third": "misdone",
    "translates": [
      "делать неправильно",
      "небрежно"
    ]
  },
  {
    "first": "mishear",
    "second": "misheard",
    "third": "misheard",
    "translates": [
      "ослышаться",
      "не расслышать"
    ]
  },
  {
    "first": "mislay",
    "second": "mislaid",
    "third": "mislaid",
    "translates": [
      "положить не на место",
      "затерять"
    ]
  },
  {
    "first": "mislead",
    "second": "misled",
    "third": "misled",
    "translates": [
      "вводить в заблуждение",
      "сбивать с пути"
    ]
  },
  {
    "first": "mislearn",
    "second": "mislearned / mislearnt",
    "third": "mislearned / mislearnt",
    "translates": [
      "обучаться",
      "учить неправильно"
    ]
  },
  {
    "first": "misread",
    "second": "misread",
    "third": "misread",
    "translates": [
      "прочитать неправильно",
      "неправильно понять"
    ]
  },
  {
    "first": "missay",
    "second": "missaid",
    "third": "missaid",
    "translates": [
      "оговориться",
      "сказать неправильно"
    ]
  },
  {
    "first": "misset",
    "second": "misset",
    "third": "misset",
    "translates": [
      "неправильно установить"
    ]
  },
  {
    "first": "misspeak",
    "second": "misspoke",
    "third": "misspoken",
    "translates": [
      "говорить",
      "произносить неправильно"
    ]
  },
  {
    "first": "misspell",
    "second": "misspelled / misspelt",
    "third": "misspelled / misspelt",
    "translates": [
      "писать с ошибками",
      "делать орфографические ошибки"
    ]
  },
  {
    "first": "misspend",
    "second": "misspent",
    "third": "misspent",
    "translates": [
      "неразумно тратить",
      "транжирить"
    ]
  },
  {
    "first": "misswear",
    "second": "misswore",
    "third": "missworn",
    "translates": [
      "давать ложную клятву"
    ]
  },
  {
    "first": "mistake",
    "second": "mistook",
    "third": "mistaken",
    "translates": [
      "ошибаться",
      "заблуждаться"
    ]
  },
  {
    "first": "misteach",
    "second": "mistaught",
    "third": "mistaught",
    "translates": [
      "неправильно обучать"
    ]
  },
  {
    "first": "misunderstand",
    "second": "misunderstood",
    "third": "misunderstood",
    "translates": [
      "не понимать",
      "понять неправильно"
    ]
  },
  {
    "first": "miswrite",
    "second": "miswrote",
    "third": "miswritten",
    "translates": [
      "неправильно писать"
    ]
  },
  {
    "first": "mow",
    "second": "mowed",
    "third": "mowed / mown",
    "translates": [
      "косить",
      "стричь (газон)",
      "жать"
    ]
  },
  {
    "first": "offset",
    "second": "offset",
    "third": "offset",
    "translates": [
      "возмещать",
      "компенсировать",
      "ответвляться"
    ]
  },
  {
    "first": "outbid",
    "second": "outbid",
    "third": "outbid",
    "translates": [
      "перебивать цену",
      "превзойти",
      "затмить"
    ]
  },
  {
    "first": "outdo",
    "second": "outdid",
    "third": "outdone",
    "translates": [
      "превзойти",
      "поражать",
      "побороть"
    ]
  },
  {
    "first": "outdraw",
    "second": "outdrew",
    "third": "outdrawn",
    "translates": [
      "добиться большей популярности",
      "превзойти конкурентов"
    ]
  },
  {
    "first": "outdrink",
    "second": "outdrank",
    "third": "outdrunk",
    "translates": [
      "перепить (кого-то)",
      "выпить больше",
      "чем кто-то"
    ]
  },
  {
    "first": "outdrive",
    "second": "outdrove",
    "third": "outdriven",
    "translates": [
      "обогнать",
      "опередить"
    ]
  },
  {
    "first": "outfight",
    "second": "outfought",
    "third": "outfought",
    "translates": [
      "иметь перевес над противником",
      "побеждать"
    ]
  },
  {
    "first": "outfly",
    "second": "outflew",
    "third": "outflown",
    "translates": [
      "вылетать",
      "летать быстрее",
      "дальше (чем кто-либо)"
    ]
  },
  {
    "first": "outgrow",
    "second": "outgrew",
    "third": "outgrown",
    "translates": [
      "опережать в росте",
      "перерастать",
      "избавляться с возрастом"
    ]
  },
  {
    "first": "outleap",
    "second": "outleaped / outleapt",
    "third": "outleaped / outleapt",
    "translates": [
      "перепрыгивать",
      "выпрыгивать",
      "прыгать лучше"
    ]
  },
  {
    "first": "outlie",
    "second": "outlay",
    "third": "outlain",
    "translates": [
      "находиться снаружи",
      "вне",
      "простираться"
    ]
  },
  {
    "first": "outrun",
    "second": "outran",
    "third": "outrun",
    "translates": [
      "перегонять",
      "опережать",
      "убежать",
      "сбежать"
    ]
  },
  {
    "first": "outsell",
    "second": "outsold",
    "third": "outsold",
    "translates": [
      "продавать",
      "продаваться лучше",
      "превосходить в цене"
    ]
  },
  {
    "first": "outshine",
    "second": "outshined / outshone",
    "third": "outshined / outshone",
    "translates": [
      "затмить"
    ]
  },
  {
    "first": "outshoot",
    "second": "outshot",
    "third": "outshot",
    "translates": [
      "стрелять лучше",
      "отбрасывать",
      "выбрасывать"
    ]
  },
  {
    "first": "outsing",
    "second": "outsang",
    "third": "outsung",
    "translates": [
      "превзойти в пении"
    ]
  },
  {
    "first": "outsit",
    "second": "outsat",
    "third": "outsat",
    "translates": [
      "пересидеть",
      "засидеться"
    ]
  },
  {
    "first": "outsleep",
    "second": "outslept",
    "third": "outslept",
    "translates": [
      "проспать",
      "прозевать"
    ]
  },
  {
    "first": "outsmell",
    "second": "outsmelled / outsmelt",
    "third": "outsmelled / outsmelt",
    "translates": [
      "пахнуть сильнее",
      "чем что-то"
    ]
  },
  {
    "first": "outspeak",
    "second": "outspoke",
    "third": "outspoken",
    "translates": [
      "говорить лучше",
      "высказаться",
      "заявить"
    ]
  },
  {
    "first": "outspeed",
    "second": "outsped / outspeeded",
    "third": "outsped / outspeeded",
    "translates": [
      "перегонять",
      "быть",
      "действовать быстрее"
    ]
  },
  {
    "first": "outspend",
    "second": "outspent",
    "third": "outspent",
    "translates": [
      "превзойти по расходам",
      "тратить больше"
    ]
  },
  {
    "first": "outstand",
    "second": "outstood",
    "third": "outstood",
    "translates": [
      "выделяться",
      "бросаться в глаза",
      "выдержать"
    ]
  },
  {
    "first": "outswear",
    "second": "outswore",
    "third": "outsworn",
    "translates": [
      "превосходить в ругани"
    ]
  },
  {
    "first": "outswim",
    "second": "outswam",
    "third": "outswum",
    "translates": [
      "превосходить в плавании"
    ]
  },
  {
    "first": "outthink",
    "second": "outthought",
    "third": "outthought",
    "translates": [
      "превосходить разумом",
      "перехитрить"
    ]
  },
  {
    "first": "outthrow",
    "second": "outthrew",
    "third": "outthrown",
    "translates": [
      "выбрасывать",
      "извергать",
      "бросать лучше"
    ]
  },
  {
    "first": "outwear",
    "second": "outwore",
    "third": "worn",
    "translates": [
      "изнашивать",
      "служить дольше остальных вещей"
    ]
  },
  {
    "first": "outwrite",
    "second": "outwrote",
    "third": "outwritten",
    "translates": [
      "писать лучше"
    ]
  },
  {
    "first": "overbid",
    "second": "overbid",
    "third": "overbid",
    "translates": [
      "перебивать цену",
      "взятку"
    ]
  },
  {
    "first": "overbreed",
    "second": "overbred",
    "third": "overbred",
    "translates": [
      "разводить",
      "выращивать животных в чрезмерном количестве"
    ]
  },
  {
    "first": "overbuild",
    "second": "overbuilt",
    "third": "overbuilt",
    "translates": [
      "чрезмерно застраивать",
      "надстраивать"
    ]
  },
  {
    "first": "overbuy",
    "second": "overbought",
    "third": "overbought",
    "translates": [
      "покупать слишком много",
      "слишком дорого"
    ]
  },
  {
    "first": "overcome",
    "second": "overcame",
    "third": "overcome",
    "translates": [
      "преодолеть",
      "побороть"
    ]
  },
  {
    "first": "overdo",
    "second": "overdid",
    "third": "overdone",
    "translates": [
      "перестараться",
      "переборщить",
      "утрировать",
      "переутомляться"
    ]
  },
  {
    "first": "overdraw",
    "second": "overdrew",
    "third": "overdrawn",
    "translates": [
      "превысить кредит",
      "гиперболизировать"
    ]
  },
  {
    "first": "overdrink",
    "second": "overdrank",
    "third": "overdrunk",
    "translates": [
      "перепить",
      "слишком много пить"
    ]
  },
  {
    "first": "overeat",
    "second": "overate",
    "third": "overeaten",
    "translates": [
      "переесть",
      "есть слишком много"
    ]
  },
  {
    "first": "overfeed",
    "second": "overfed",
    "third": "overfed",
    "translates": [
      "перекармливать",
      "объедаться"
    ]
  },
  {
    "first": "overfly",
    "second": "overflew",
    "third": "overflown",
    "translates": [
      "перелетать",
      "пролетать над чем-то"
    ]
  },
  {
    "first": "overhang",
    "second": "overhung",
    "third": "overhung",
    "translates": [
      "выступать",
      "нависать",
      "угрожать",
      "вешать драпировку"
    ]
  },
  {
    "first": "overhear",
    "second": "overheard",
    "third": "overheard",
    "translates": [
      "подслушивать",
      "нечаянно услышать"
    ]
  },
  {
    "first": "overlay",
    "second": "overlaid",
    "third": "overlaid",
    "translates": [
      "покрывать",
      "перекрывать",
      "оказывать влияние"
    ]
  },
  {
    "first": "overlie",
    "second": "overlay",
    "third": "overlain",
    "translates": [
      "лежать",
      "залегать над чем-то",
      "перекрывать "
    ]
  },
  {
    "first": "overpay",
    "second": "overpaid",
    "third": "overpaid",
    "translates": [
      "переплачивать",
      "возмещать с избытком"
    ]
  },
  {
    "first": "override",
    "second": "overrode",
    "third": "overridden",
    "translates": [
      "отменять",
      "перевешивать",
      "преобладать",
      "переехать"
    ]
  },
  {
    "first": "overrun",
    "second": "overran",
    "third": "overrun",
    "translates": [
      "переходить пределы",
      "захватывать",
      "заполонять"
    ]
  },
  {
    "first": "oversee",
    "second": "oversaw",
    "third": "overseen",
    "translates": [
      "наблюдать",
      "надзирать",
      "следить",
      "подсмотреть"
    ]
  },
  {
    "first": "oversell",
    "second": "oversold",
    "third": "oversold",
    "translates": [
      "перехваливать",
      "навязывать продукцию",
      "продать больше своих запасов"
    ]
  },
  {
    "first": "overset",
    "second": "overset",
    "third": "overset",
    "translates": [
      "нарушать порядок",
      "расстраивать",
      "опрокидываться"
    ]
  },
  {
    "first": "oversew",
    "second": "oversewed",
    "third": "oversewn / oversewed",
    "translates": [
      "сшивать через край"
    ]
  },
  {
    "first": "overshoot",
    "second": "overshot",
    "third": "overshot",
    "translates": [
      "промахнуться",
      "перейти границы",
      "стрелять до изнеможения"
    ]
  },
  {
    "first": "oversleep",
    "second": "overslept",
    "third": "overslept",
    "translates": [
      "проспать",
      "заспаться"
    ]
  },
  {
    "first": "overspeak",
    "second": "overspoke",
    "third": "overspoken",
    "translates": [
      "слишком много разговаривать"
    ]
  },
  {
    "first": "overspend",
    "second": "overspent",
    "third": "overspent",
    "translates": [
      "сорить деньгами",
      "расстраивать свое здоровье"
    ]
  },
  {
    "first": "overspill",
    "second": "overspilled / overspilt",
    "third": "overspilled / overspilt",
    "translates": [
      "проливать",
      "переполнять",
      "перенаселять"
    ]
  },
  {
    "first": "overtake",
    "second": "overtook",
    "third": "overtaken",
    "translates": [
      "догнать",
      "настигать",
      "овладевать",
      "обогнать"
    ]
  },
  {
    "first": "overthink",
    "second": "overthought",
    "third": "overthought",
    "translates": [
      "надумать лишнего",
      "слишком много думать"
    ]
  },
  {
    "first": "overthrow",
    "second": "overthrew",
    "third": "overthrown",
    "translates": [
      "бросать слишком далеко",
      "свергать",
      "разрушать"
    ]
  },
  {
    "first": "overwind",
    "second": "overwound",
    "third": "overwound",
    "translates": [
      "перекрутить",
      "крутить слишком сильно",
      "быстро"
    ]
  },
  {
    "first": "overwrite",
    "second": "overwrote",
    "third": "overwritten",
    "translates": [
      "переписывать",
      "писать поверх текста",
      "много писать"
    ]
  },
  {
    "first": "partake",
    "second": "partook",
    "third": "partaken",
    "translates": [
      "принимать участие",
      "разделять",
      "отведать",
      "воспользоваться"
    ]
  },
  {
    "first": "pay",
    "second": "paid",
    "third": "paid",
    "translates": [
      "платить",
      "вознаграждать",
      "отомстить"
    ]
  },
  {
    "first": "plead",
    "second": "pleaded / pled",
    "third": "pleaded / pled",
    "translates": [
      "защищать подсудимого",
      "ходатайствовать",
      "простить"
    ]
  },
  {
    "first": "prebuild",
    "second": "prebuilt",
    "third": "prebuilt",
    "translates": [
      "предварительно собрать",
      "выстроить"
    ]
  },
  {
    "first": "predo",
    "second": "predid",
    "third": "predone",
    "translates": [
      "сделать заранее",
      "подготовить"
    ]
  },
  {
    "first": "premake",
    "second": "premade",
    "third": "premade",
    "translates": [
      "подготовить",
      "сделать наперед",
      "заранее"
    ]
  },
  {
    "first": "prepay",
    "second": "prepaid",
    "third": "prepaid",
    "translates": [
      "предоплачивать",
      "платить наперед"
    ]
  },
  {
    "first": "presell",
    "second": "presoldpreset",
    "third": "prespresetold",
    "translates": [
      "рекламировать товар",
      "организовать предпродажу",
      "продавать наперед"
    ]
  },
  {
    "first": "preshrink",
    "second": "preshrank",
    "third": "preshrunk",
    "translates": [
      "обрабатывать ткань для предотвращения ее стяжки"
    ]
  },
  {
    "first": "proofread",
    "second": "proofread",
    "third": "proofread",
    "translates": [
      "читать корректуру",
      "корректировать",
      "вычитывать"
    ]
  },
  {
    "first": "prove",
    "second": "proved",
    "third": "proven / proved",
    "translates": [
      "доказывать",
      "удостоверять"
    ]
  },
  {
    "first": "put",
    "second": "put",
    "third": "put",
    "translates": [
      "класть",
      "положить"
    ]
  },
  {
    "first": "quick-freeze",
    "second": "quick-froze",
    "third": "quick-frozen",
    "translates": [
      "быстро замораживать",
      "замерзать"
    ]
  },
  {
    "first": "quit",
    "second": "quit / quitted",
    "third": "quit / quitted",
    "translates": [
      "оставлять",
      "покидать",
      "выходить"
    ]
  },
  {
    "first": "read",
    "second": "read",
    "third": "read",
    "translates": [
      "читать"
    ]
  },
  {
    "first": "reawake",
    "second": "reawoke",
    "third": "reawaken",
    "translates": [
      "снова пробуждать"
    ]
  },
  {
    "first": "rebid",
    "second": "rebid",
    "third": "rebid",
    "translates": [
      "делать повторную ставку"
    ]
  },
  {
    "first": "rebind",
    "second": "rebound",
    "third": "rebound",
    "translates": [
      "переплетать заново (книгу)"
    ]
  },
  {
    "first": "rebroadcast",
    "second": "rebroadcast / rebroadcasted",
    "third": "rebroadcast / rebroadcasted",
    "translates": [
      "ретранслировать",
      "показывать (передачу) заново"
    ]
  },
  {
    "first": "rebuild",
    "second": "rebuilt",
    "third": "rebuilt",
    "translates": [
      "перестраивать"
    ]
  },
  {
    "first": "recast",
    "second": "recast",
    "third": "recast",
    "translates": [
      "переделывать",
      "изменять",
      "пересчитывать"
    ]
  },
  {
    "first": "recut",
    "second": "recut",
    "third": "recut",
    "translates": [
      "вторично нарезать",
      "повторно вырезать (сцены из фильма)"
    ]
  },
  {
    "first": "redeal",
    "second": "redealt",
    "third": "redealt",
    "translates": [
      "перераздавать карты в игре"
    ]
  },
  {
    "first": "redo",
    "second": "redid",
    "third": "redone",
    "translates": [
      "переделывать",
      "делать ремонт"
    ]
  },
  {
    "first": "redraw",
    "second": "redrew",
    "third": "redrawn",
    "translates": [
      "перерисовывать",
      "обновлять рисунок",
      "выставлять обратный вексель"
    ]
  },
  {
    "first": "refit",
    "second": "refitted / refit",
    "third": "refitted / refit",
    "translates": [
      "перекраивать",
      "подгонять заново (по размеру)"
    ]
  },
  {
    "first": "regrind",
    "second": "reground",
    "third": "reground",
    "translates": [
      "перешлифовывать",
      "перетачивать",
      "притирать"
    ]
  },
  {
    "first": "regrow",
    "second": "regrew",
    "third": "regrown",
    "translates": [
      "отрастать снова"
    ]
  },
  {
    "first": "rehang",
    "second": "rehung",
    "third": "rehung",
    "translates": [
      "перевешивать"
    ]
  },
  {
    "first": "rehear",
    "second": "reheard",
    "third": "reheard",
    "translates": [
      "услышать снова",
      "рассматривать дело повторно"
    ]
  },
  {
    "first": "reknit",
    "second": "reknitted / reknit",
    "third": "reknitted / reknit",
    "translates": [
      "вязать заново",
      "соединять заново"
    ]
  },
  {
    "first": "relay",
    "second": "relaid",
    "third": "relaid",
    "translates": [
      "класть заново",
      "заменять (черепицу",
      "кафель)"
    ]
  },
  {
    "first": "relearn",
    "second": "relearned / relearnt",
    "third": "relearned / relearnt",
    "translates": [
      "учиться заново",
      "переучиваться"
    ]
  },
  {
    "first": "relight",
    "second": "relit / relighted",
    "third": "relit / relighted",
    "translates": [
      "зажечь",
      "зажечься снова",
      "загореться"
    ]
  },
  {
    "first": "remake",
    "second": "remade",
    "third": "remade",
    "translates": [
      "переделывать",
      "делать заново"
    ]
  },
  {
    "first": "rend",
    "second": "rent / rended",
    "third": "rent / rended",
    "translates": [
      "отрывать",
      "раздирать",
      "дробить",
      "расщеплять"
    ]
  },
  {
    "first": "repay",
    "second": "repaid",
    "third": "repaid",
    "translates": [
      "отдавать",
      "возвращать",
      "возмещать",
      "отплачивать"
    ]
  },
  {
    "first": "reread",
    "second": "reread",
    "third": "reread",
    "translates": [
      "перечитывать"
    ]
  },
  {
    "first": "rerun",
    "second": "reran",
    "third": "rerun",
    "translates": [
      "перезапускать",
      "повторно проводить",
      "показывать"
    ]
  },
  {
    "first": "resell",
    "second": "resold",
    "third": "resold",
    "translates": [
      "перепродавать"
    ]
  },
  {
    "first": "resend",
    "second": "resent",
    "third": "resent",
    "translates": [
      "переотправлять",
      "посылать заново"
    ]
  },
  {
    "first": "reset",
    "second": "reset",
    "third": "reset",
    "translates": [
      "повторно включать",
      "устанавливать",
      "сбрасывать"
    ]
  },
  {
    "first": "resew",
    "second": "resewed",
    "third": "resewn / resewed",
    "translates": [
      "пришивать заново",
      "перешивать"
    ]
  },
  {
    "first": "retake",
    "second": "retook",
    "third": "retaken",
    "translates": [
      "снова взять",
      "переснимать",
      "пересдавать (экзамен)"
    ]
  },
  {
    "first": "reteach",
    "second": "retaught",
    "third": "retaught",
    "translates": [
      "переучивать",
      "учить заново"
    ]
  },
  {
    "first": "retear",
    "second": "retore",
    "third": "retorn",
    "translates": [
      "снова разрывать",
      "отрывать"
    ]
  },
  {
    "first": "retell",
    "second": "retold",
    "third": "retold",
    "translates": [
      "пересказывать",
      "рассказывать снова"
    ]
  },
  {
    "first": "rethink",
    "second": "rethought",
    "third": "rethought",
    "translates": [
      "пересматривать",
      "заново осмыслить"
    ]
  },
  {
    "first": "retread",
    "second": "retread",
    "third": "retread",
    "translates": [
      "сменить покрышку",
      "переобучать",
      "заново давать работу"
    ]
  },
  {
    "first": "retrofit",
    "second": "retrofitted / retrofit",
    "third": "retrofitted / retrofit",
    "translates": [
      "модифицировать",
      "подгонять",
      "настраивать"
    ]
  },
  {
    "first": "rewake",
    "second": "rewoke / rewaked",
    "third": "rewaken / rewaked",
    "translates": [
      "будить",
      "пробуждаться заново"
    ]
  },
  {
    "first": "rewear",
    "second": "rewore",
    "third": "reworn",
    "translates": [
      "носить заново"
    ]
  },
  {
    "first": "reweave",
    "second": "rewove / reweaved",
    "third": "rewoven / reweaved",
    "translates": [
      "переткать",
      "плести",
      "ткать заново",
      "снова соединяться"
    ]
  },
  {
    "first": "rewed",
    "second": "rewed / rewedded",
    "third": "rewed / rewedded",
    "translates": [
      "жениться во второй раз"
    ]
  },
  {
    "first": "rewet",
    "second": "rewet / rewetted",
    "third": "rewet / rewetted",
    "translates": [
      "повторно увлажнять",
      "мочить снова"
    ]
  },
  {
    "first": "rewin",
    "second": "rewon",
    "third": "rewon",
    "translates": [
      "снова победить",
      "победить после проигрыша"
    ]
  },
  {
    "first": "rewind",
    "second": "rewound",
    "third": "rewound",
    "translates": [
      "перематывать (назад)"
    ]
  },
  {
    "first": "rewrite",
    "second": "rewrote",
    "third": "rewritten",
    "translates": [
      "переписывать",
      "редактировать",
      "отвечать письменно"
    ]
  },
  {
    "first": "rid",
    "second": "rid",
    "third": "rid",
    "translates": [
      "освобождать",
      "избавлять"
    ]
  },
  {
    "first": "ride",
    "second": "rode",
    "third": "ridden",
    "translates": [
      "ехать верхом",
      "кататься",
      "ехать (в транспорте)"
    ]
  },
  {
    "first": "ring",
    "second": "rang",
    "third": "rung",
    "translates": [
      "звонить",
      "звенеть"
    ]
  },
  {
    "first": "rise",
    "second": "rose",
    "third": "risen",
    "translates": [
      "подниматься",
      "восходить"
    ]
  },
  {
    "first": "roughcast",
    "second": "roughcast",
    "third": "roughcast",
    "translates": [
      "набрасывать план",
      "намечать",
      "грубо штукатурить"
    ]
  },
  {
    "first": "run",
    "second": "ran",
    "third": "run",
    "translates": [
      "бежать",
      "гнать",
      "управлять",
      "течь"
    ]
  },
  {
    "first": "sand-cast",
    "second": "sand-cast",
    "third": "sand-cast",
    "translates": [
      "отливать металл в песчаную форму"
    ]
  },
  {
    "first": "saw",
    "second": "sawed",
    "third": "sawed / sawn",
    "translates": [
      "пилить",
      "распилить"
    ]
  },
  {
    "first": "say",
    "second": "said",
    "third": "said",
    "translates": [
      "говорить",
      "сказать"
    ]
  },
  {
    "first": "see",
    "second": "saw",
    "third": "seen",
    "translates": [
      "видеть",
      "смотреть"
    ]
  },
  {
    "first": "seek",
    "second": "sought",
    "third": "sought",
    "translates": [
      "искать",
      "добиваться"
    ]
  },
  {
    "first": "sell",
    "second": "sold",
    "third": "sold",
    "translates": [
      "продавать"
    ]
  },
  {
    "first": "send",
    "second": "sent",
    "third": "sent",
    "translates": [
      "посылать",
      "отправлять"
    ]
  },
  {
    "first": "set",
    "second": "set",
    "third": "set",
    "translates": [
      "помещать",
      "ставить"
    ]
  },
  {
    "first": "sew",
    "second": "sewed",
    "third": "sewn / sewed",
    "translates": [
      "шить",
      "штопать"
    ]
  },
  {
    "first": "shake",
    "second": "shook",
    "third": "shaken",
    "translates": [
      "трясти",
      "встряхивать"
    ]
  },
  {
    "first": "shave",
    "second": "shaved",
    "third": "shaved / shaven",
    "translates": [
      "бриться"
    ]
  },
  {
    "first": "shear",
    "second": "sheared",
    "third": "sheared / shorn",
    "translates": [
      "резать",
      "выстригать",
      "рассекать"
    ]
  },
  {
    "first": "shed",
    "second": "shed",
    "third": "shed",
    "translates": [
      "проливать",
      "терять",
      "сбрасывать"
    ]
  },
  {
    "first": "shine",
    "second": "shined / shone",
    "third": "shined / shone",
    "translates": [
      "сиять",
      "светить"
    ]
  },
  {
    "first": "shit",
    "second": "shit / shat / shitted",
    "third": "shit/ shat / shitted",
    "translates": [
      "какать",
      "гадить",
      "срать"
    ]
  },
  {
    "first": "shoe",
    "second": "shod",
    "third": "shod",
    "translates": [
      "обувать",
      "подковывать",
      "подбивать"
    ]
  },
  {
    "first": "shoot",
    "second": "shot",
    "third": "shot",
    "translates": [
      "стрелять",
      "охотиться"
    ]
  },
  {
    "first": "show",
    "second": "showed",
    "third": "shown / showed",
    "translates": [
      "показывать",
      "показываться",
      "выставлять напоказ"
    ]
  },
  {
    "first": "shrink",
    "second": "shrank / shrunk",
    "third": "shrunk / shrunken",
    "translates": [
      "уменьшать",
      "уменьшаться",
      "сжиматься",
      "давать усадку"
    ]
  },
  {
    "first": "shut",
    "second": "shut",
    "third": "shut",
    "translates": [
      "закрывать"
    ]
  },
  {
    "first": "sight-read",
    "second": "sight-read",
    "third": "sight-read",
    "translates": [
      "играть",
      "петь с листа",
      "читать ноты",
      "текст с листа"
    ]
  },
  {
    "first": "sing",
    "second": "sang",
    "third": "sung",
    "translates": [
      "петь"
    ]
  },
  {
    "first": "sink",
    "second": "sank / sunk",
    "third": "sunk",
    "translates": [
      "тонуть",
      "опускаться",
      "погружаться"
    ]
  },
  {
    "first": "sit",
    "second": "sat",
    "third": "sat",
    "translates": [
      "сидеть",
      "сажать",
      "находиться"
    ]
  },
  {
    "first": "slay",
    "second": "slew / slayed",
    "third": "slain / slayed",
    "translates": [
      "убивать",
      "уничтожать"
    ]
  },
  {
    "first": "sleep",
    "second": "slept",
    "third": "slept",
    "translates": [
      "спать"
    ]
  },
  {
    "first": "slide",
    "second": "slid",
    "third": "slid",
    "translates": [
      "скользить",
      "ползать",
      "кататься"
    ]
  },
  {
    "first": "sling",
    "second": "slung",
    "third": "slung",
    "translates": [
      "швырять",
      "вешать через плечо",
      "подвешивать"
    ]
  },
  {
    "first": "slink",
    "second": "slinked / slunk",
    "third": "slinked / slunk",
    "translates": [
      "красться",
      "подкрадываться",
      "рожать преждевременно"
    ]
  },
  {
    "first": "slit",
    "second": "slit",
    "third": "slit",
    "translates": [
      "разрезать",
      "перерезать"
    ]
  },
  {
    "first": "smell",
    "second": "smelled / smelt",
    "third": "smelled / smelt",
    "translates": [
      "пахнуть",
      "нюхать"
    ]
  },
  {
    "first": "smite",
    "second": "smote",
    "third": "smitten",
    "translates": [
      "поражать",
      "бить",
      "наказывать"
    ]
  },
  {
    "first": "sneak",
    "second": "sneaked / snuck",
    "third": "sneaked / snuck",
    "translates": [
      "красться",
      "подкрадываться",
      "красть",
      "ускользать"
    ]
  },
  {
    "first": "sow",
    "second": "sowed",
    "third": "sown / sowed",
    "translates": [
      "сеять",
      "засевать",
      "распространять"
    ]
  },
  {
    "first": "speak",
    "second": "spoke",
    "third": "spoken",
    "translates": [
      "говорить"
    ]
  },
  {
    "first": "speed",
    "second": "sped / speeded",
    "third": "sped / speeded",
    "translates": [
      "спешить",
      "ускорять",
      "торопить"
    ]
  },
  {
    "first": "spell",
    "second": "spelled / spelt",
    "third": "spelled / spelt",
    "translates": [
      "заколдовать",
      "сменить",
      "дать отдохнуть",
      "писать",
      "произносить слово по буквам"
    ]
  },
  {
    "first": "spend",
    "second": "spent",
    "third": "spent",
    "translates": [
      "тратить",
      "истощать"
    ]
  },
  {
    "first": "spill",
    "second": "spilled / spilt",
    "third": "spilled / spilt",
    "translates": [
      "проливать",
      "разливаться"
    ]
  },
  {
    "first": "spin",
    "second": "spun",
    "third": "spun",
    "translates": [
      "прясть",
      "крутить",
      "вертеть",
      "плести"
    ]
  },
  {
    "first": "spit",
    "second": "spit / spat",
    "third": "spit / spat",
    "translates": [
      "плевать",
      "пронзать",
      "натыкать",
      "моросить"
    ]
  },
  {
    "first": "spoil",
    "second": "spoiled / spoilt",
    "third": "spoiled / spoilt",
    "translates": [
      "портить",
      "баловать"
    ]
  },
  {
    "first": "spread",
    "second": "spread",
    "third": "spread",
    "translates": [
      "распространяться",
      "расстилать"
    ]
  },
  {
    "first": "spring",
    "second": "sprang / sprung",
    "third": "sprung",
    "translates": [
      "прыгать",
      "вскочить"
    ]
  },
  {
    "first": "stand",
    "second": "stood",
    "third": "stood",
    "translates": [
      "стоять",
      "быть расположенным"
    ]
  },
  {
    "first": "stave",
    "second": "staved / stove",
    "third": "staved / stove",
    "translates": [
      "проламывать",
      "разбивать"
    ]
  },
  {
    "first": "steal",
    "second": "stole",
    "third": "stolen",
    "translates": [
      "воровать",
      "красть"
    ]
  },
  {
    "first": "stick",
    "second": "stuck",
    "third": "stuck",
    "translates": [
      "втыкать",
      "колоть",
      "приклеивать",
      "липнуть"
    ]
  },
  {
    "first": "sting",
    "second": "stung",
    "third": "stung",
    "translates": [
      "жалить",
      "причинять боль",
      "обманывать"
    ]
  },
  {
    "first": "stink",
    "second": "stunk / stank",
    "third": "stunk",
    "translates": [
      "вонять",
      "пахнуть"
    ]
  },
  {
    "first": "strew",
    "second": "strewed",
    "third": "strewn / strewed",
    "translates": [
      "усеять",
      "разбрасывать",
      "посыпать"
    ]
  },
  {
    "first": "stride",
    "second": "strode",
    "third": "stridden",
    "translates": [
      "шагать",
      "сидеть верхом"
    ]
  },
  {
    "first": "strike",
    "second": "struck",
    "third": "struck / stricken",
    "translates": [
      "ударять",
      "поражать",
      "бастовать"
    ]
  },
  {
    "first": "string",
    "second": "strung",
    "third": "strung",
    "translates": [
      "связывать",
      "натягивать",
      "нанизывать"
    ]
  },
  {
    "first": "strive",
    "second": "strove / strived",
    "third": "striven / strived",
    "translates": [
      "стремиться",
      "стараться",
      "пытаться"
    ]
  },
  {
    "first": "sublet",
    "second": "sublet",
    "third": "sublet",
    "translates": [
      "передавати в суборенду"
    ]
  },
  {
    "first": "sunburn",
    "second": "sunburned / sunburnt",
    "third": "sunburned / sunburnt",
    "translates": [
      "обгорать на солнце"
    ]
  },
  {
    "first": "swear",
    "second": "swore",
    "third": "sworn",
    "translates": [
      "клясться",
      "присягать",
      "ругаться"
    ]
  },
  {
    "first": "sweat",
    "second": "sweat / sweated",
    "third": "sweat / sweated",
    "translates": [
      "потеть",
      "сыреть",
      "запотевать"
    ]
  },
  {
    "first": "sweep",
    "second": "swept",
    "third": "swept",
    "translates": [
      "мести",
      "прочищать",
      "сметать",
      "мчаться"
    ]
  },
  {
    "first": "swell",
    "second": "swelled",
    "third": "swollen / swelled",
    "translates": [
      "пухнуть",
      "раздуваться",
      "набухать"
    ]
  },
  {
    "first": "swim",
    "second": "swam",
    "third": "swum",
    "translates": [
      "плавать",
      "плыть"
    ]
  },
  {
    "first": "swing",
    "second": "swung",
    "third": "swung",
    "translates": [
      "качать",
      "размахивать"
    ]
  },
  {
    "first": "take",
    "second": "took",
    "third": "taken",
    "translates": [
      "брать",
      "взять"
    ]
  },
  {
    "first": "teach",
    "second": "taught",
    "third": "taught",
    "translates": [
      "обучать",
      "учить"
    ]
  },
  {
    "first": "tear",
    "second": "tore",
    "third": "torn",
    "translates": [
      "рвать",
      "сорвать",
      "разорвать"
    ]
  },
  {
    "first": "telecast",
    "second": "telecast",
    "third": "telecast",
    "translates": [
      "передавать по телевидению"
    ]
  },
  {
    "first": "tell",
    "second": "told",
    "third": "told",
    "translates": [
      "говорить",
      "рассказывать",
      "сообщать"
    ]
  },
  {
    "first": "test-drive",
    "second": "test-drove",
    "third": "test-driven",
    "translates": [
      "делать пробную поездку",
      "тестировать"
    ]
  },
  {
    "first": "test-fly",
    "second": "test-flew",
    "third": "test-flown",
    "translates": [
      "испытывать самолет в воздухе"
    ]
  },
  {
    "first": "think",
    "second": "thought",
    "third": "thought",
    "translates": [
      "думать",
      "полагать"
    ]
  },
  {
    "first": "thrive",
    "second": "throve / thrived",
    "third": "thrived / thriven",
    "translates": [
      "процветать",
      "преуспевать",
      "буйно расти"
    ]
  },
  {
    "first": "throw",
    "second": "threw",
    "third": "thrown",
    "translates": [
      "кидать",
      "бросать"
    ]
  },
  {
    "first": "thrust",
    "second": "thrust",
    "third": "thrust",
    "translates": [
      "колоть",
      "засовывать",
      "толкать",
      "лезть"
    ]
  },
  {
    "first": "tread",
    "second": "trod",
    "third": "trodden / trod",
    "translates": [
      "идти",
      "ступать",
      "топтать",
      "давить"
    ]
  },
  {
    "first": "typecast",
    "second": "typecast",
    "third": "typecast",
    "translates": [
      "подбирать актеров по типажности"
    ]
  },
  {
    "first": "typeset",
    "second": "typeset",
    "third": "typeset",
    "translates": [
      "набирать текст для печати",
      "определять тип"
    ]
  },
  {
    "first": "typewrite",
    "second": "typewrote",
    "third": "typewritten",
    "translates": [
      "печатать на пишущей машинке",
      "набирать текст"
    ]
  },
  {
    "first": "unbend",
    "second": "unbent",
    "third": "unbent",
    "translates": [
      "разгибаться",
      "выпрямляться",
      "смягчаться"
    ]
  },
  {
    "first": "unbind",
    "second": "unbound",
    "third": "unbound",
    "translates": [
      "развязать",
      "распуска",
      "ослаблять"
    ]
  },
  {
    "first": "unclothe",
    "second": "unclothed / unclad",
    "third": "unclothed / unclad",
    "translates": [
      "раздеваться",
      "раздевать",
      "обнажать"
    ]
  },
  {
    "first": "underbid",
    "second": "underbid",
    "third": "underbid",
    "translates": [
      "перебивать цену",
      "назначать более низкую цену"
    ]
  },
  {
    "first": "undercut",
    "second": "undercut",
    "third": "undercut",
    "translates": [
      "подрезать",
      "сбивать цены",
      "делать подсечку"
    ]
  },
  {
    "first": "underfeed",
    "second": "underfed",
    "third": "underfed",
    "translates": [
      "недокармливать",
      "недоедать"
    ]
  },
  {
    "first": "undergo",
    "second": "underwent",
    "third": "undergone",
    "translates": [
      "испытывать",
      "переносить"
    ]
  },
  {
    "first": "underlie",
    "second": "underlay",
    "third": "underlain",
    "translates": [
      "подчеркивать",
      "выделять"
    ]
  },
  {
    "first": "undersell",
    "second": "undersold",
    "third": "undersold",
    "translates": [
      "продавать дешевле других"
    ]
  },
  {
    "first": "underspend",
    "second": "underspent",
    "third": "underspent",
    "translates": [
      "тратить недостаточно",
      "очень мало"
    ]
  },
  {
    "first": "understand",
    "second": "understood",
    "third": "understood",
    "translates": [
      "понимать",
      "осознавать"
    ]
  },
  {
    "first": "undertake",
    "second": "undertook",
    "third": "undertaken",
    "translates": [
      "предпринимать",
      "гарантировать",
      "совершать"
    ]
  },
  {
    "first": "underwrite",
    "second": "underwrote",
    "third": "underwritten",
    "translates": [
      "подписывать",
      "гарантировать",
      "ручаться"
    ]
  },
  {
    "first": "undo",
    "second": "undid",
    "third": "undone",
    "translates": [
      "расстегивать",
      "уничтожать",
      "отменять",
      "разбирать"
    ]
  },
  {
    "first": "unfreeze",
    "second": "unfroze",
    "third": "unfrozen",
    "translates": [
      "разморозить",
      "размораживаться"
    ]
  },
  {
    "first": "unhang",
    "second": "unhung",
    "third": "unhung",
    "translates": [
      "снимать (висящее)"
    ]
  },
  {
    "first": "unhide",
    "second": "unhid",
    "third": "unhidden",
    "translates": [
      "показывать скрытые элементы"
    ]
  },
  {
    "first": "unknit",
    "second": "unknitted / unknit",
    "third": "unknitted / unknit",
    "translates": [
      "распускать (вязанье)",
      "распутывать",
      "разъединять"
    ]
  },
  {
    "first": "unlearn",
    "second": "unlearned / unlearnt",
    "third": "unlearned / unlearnt",
    "translates": [
      "разучиться",
      "забыть то",
      "что знал"
    ]
  },
  {
    "first": "unsew",
    "second": "unsewed",
    "third": "unsewn / unsewed",
    "translates": [
      "распарывать сшитое"
    ]
  },
  {
    "first": "unsling",
    "second": "unslung",
    "third": "unslung",
    "translates": [
      "отвязывать",
      "снимать",
      "осовобождать от ремня"
    ]
  },
  {
    "first": "unspin",
    "second": "unspun",
    "third": "unspun",
    "translates": [
      "распускать",
      "расплетать",
      "распутывать"
    ]
  },
  {
    "first": "unstick",
    "second": "unstuck",
    "third": "unstuck",
    "translates": [
      "отдирать",
      "отклеивать",
      "взлетать (самолет)"
    ]
  },
  {
    "first": "unstring",
    "second": "unstrung",
    "third": "unstrung",
    "translates": [
      "снимать",
      "ослаблять",
      "распускать",
      "огорчать"
    ]
  },
  {
    "first": "unweave",
    "second": "unwove / unweaved",
    "third": "unwoven / unweaved",
    "translates": [
      "распускать",
      "расплетать (ткань)"
    ]
  },
  {
    "first": "unwind",
    "second": "unwound",
    "third": "unwound",
    "translates": [
      "расматывать",
      "раскручивать",
      "развивать"
    ]
  },
  {
    "first": "uphold",
    "second": "upheld",
    "third": "upheld",
    "translates": [
      "поддерживать",
      "помогать",
      "удерживать"
    ]
  },
  {
    "first": "upset",
    "second": "upset",
    "third": "upset",
    "translates": [
      "опрокидывать",
      "расстраивать",
      "огорчать"
    ]
  },
  {
    "first": "wake",
    "second": "woke / waked",
    "third": "woken / waked",
    "translates": [
      "будить",
      "просыпаться"
    ]
  },
  {
    "first": "waylay",
    "second": "waylaid",
    "third": "waylaid",
    "translates": [
      "подстерегать",
      "устраивать засаду"
    ]
  },
  {
    "first": "wear",
    "second": "wore",
    "third": "worn",
    "translates": [
      "носить (одежду)"
    ]
  },
  {
    "first": "weave",
    "second": "wove / weaved",
    "third": "woven / weaved",
    "translates": [
      "ткать",
      "плести"
    ]
  },
  {
    "first": "wed",
    "second": "wed / wedded",
    "third": "wed / wedded",
    "translates": [
      "венчать",
      "выдавать замуж",
      "жениться",
      "выходить замуж"
    ]
  },
  {
    "first": "weep",
    "second": "wept",
    "third": "wept",
    "translates": [
      "плакать",
      "тосковать",
      "запотевать"
    ]
  },
  {
    "first": "wet",
    "second": "wet / wetted",
    "third": "wet / wetted",
    "translates": [
      "мочить",
      "промочить",
      "мокнуть"
    ]
  },
  {
    "first": "win",
    "second": "won",
    "third": "won",
    "translates": [
      "выигрывать",
      "побеждать"
    ]
  },
  {
    "first": "wind",
    "second": "wound",
    "third": "wound",
    "translates": [
      "чуять",
      "дуть",
      "наматывать",
      "заводить (механизм)",
      "извиваться"
    ]
  },
  {
    "first": "withdraw",
    "second": "withdrew",
    "third": "withdrawn",
    "translates": [
      "брать назад",
      "отнимать",
      "отзывать",
      "извлекать"
    ]
  },
  {
    "first": "withhold",
    "second": "withheld",
    "third": "withheld",
    "translates": [
      "воздерживаться",
      "удерживать",
      "скрывать"
    ]
  },
  {
    "first": "withstand",
    "second": "withstood",
    "third": "withstood",
    "translates": [
      "устоять",
      "выдерживать",
      "сопротивляться"
    ]
  },
  {
    "first": "wring",
    "second": "wrung",
    "third": "wrung",
    "translates": [
      "крутить",
      "терзать",
      "выжимать",
      "скручивать"
    ]
  },
  {
    "first": "write",
    "second": "wrote",
    "third": "written",
    "translates": [
      "писать"
    ]
  }
]`);