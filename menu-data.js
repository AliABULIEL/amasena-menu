/*
 * Amasina menu data. EDIT PRICES HERE.
 * AR: لتغيير سعر: بدّلوا كلمة null برقم، مثلًا "250": 120  أو  "price": 45  (بدون علامة ₪). احفظوا الملف وارفعوه من جديد.
 * HE: לעדכון מחיר: החליפו את המילה null במספר, למשל "250": 120  או  "price": 45  (בלי סימן ₪). שמרו והעלו מחדש.
 * EN: to set a price replace null with a number, e.g. "250": 120  or  "price": 45  (no ₪ sign).
 * "250" = price for 250 g, "330" = price for 330 g. A photo appears when "photo" names a key of "photos".
 * Keep the commas and quotes exactly as they are.
 */
window.MENU_DATA = {
  "_meta": {
    "author": "Creative Lead (arbiter) — final copy, derived from proposals/menu_copy.json",
    "date": "2026-11-13",
    "status": "final for implementation; items in _owner_questions must be confirmed by the owner before printing QR codes",
    "rules": [
      "Prices only as given by the owner; null = not given, never invent.",
      "Unweighted items use 'price'. Weighted items use 'prices': {'250': x, '330': y}.",
      "*phrase* = brand red; max one red phrase of <= 2 words per headline.",
      "Western digits in both languages. Currency sign after the number inside <bdi dir=ltr>.",
      "photo = key into 'photos' or null. icon = illustrated line-art tile used only when photo is null."
    ],
    "source_of_truth_for_site": "site/menu-data.js is generated once from this file; after launch the owner edits site/menu-data.js"
  },
  "marketing": {
    "brand": {
      "name_ar": "أماسينا",
      "name_he": "אמסינה",
      "name_latin": "Amasina",
      "slogan_ar": "مذاقنا على كل لسان",
      "slogan_he": "הטעם שלנו על כל לשון",
      "place_ar": "عين ماهل",
      "place_he": "עין מאהל",
      "chef_ar": "الشيف منصور",
      "chef_he": "השף מנסור"
    },
    "cover": {
      "headline_ar": "تجربة *مختلفة*",
      "headline_he": "חוויה *אחרת*",
      "subline_ar": "لمسة الشيف منصور بتعمل الفرق.",
      "subline_he": "הנגיעה של השף מנסור עושה את ההבדל.",
      "scroll_hint_ar": "تفضّلوا… المنيو",
      "scroll_hint_he": "בתיאבון… לתפריט"
    },
    "table_block": {
      "kicker_ar": "طاولة *عامرة*",
      "kicker_he": "שולחן *עשיר*",
      "_placement": "below the photo, on black; no text over the photo"
    },
    "salad_offer": {
      "headline_ar": "تشكيلة *سلطات*",
      "headline_he": "מגוון *סלטים*",
      "subline_ar": "من إيد الشيف لطاولتكم — السعر للشخص.",
      "subline_he": "מהמטבח של השף לשולחן שלכם — המחיר לסועד.",
      "options": [
        {
          "price": 45,
          "label_ar": "مع وجبة رئيسية",
          "label_he": "עם מנה עיקרית",
          "unit_ar": "للشخص",
          "unit_he": "לסועד"
        },
        {
          "price": 70,
          "label_ar": "بدون وجبة رئيسية",
          "label_he": "בלי מנה עיקרית",
          "unit_ar": "للشخص",
          "unit_he": "לסועד"
        }
      ],
      "currency": "₪",
      "pill_ar": "للشخص",
      "pill_he": "לסועד",
      "gallery_title_ar": "من سلطاتنا",
      "gallery_title_he": "מהסלטים שלנו",
      "strip": [
        "s04",
        "s00",
        "s08"
      ],
      "gallery": [
        "s00",
        "s04",
        "s02",
        "s06",
        "s08",
        "s09",
        "s39",
        "s11"
      ]
    },
    "footer": {
      "cta_ar": "صوّروا صحنكم واعملولنا تاغ",
      "cta_he": "צלמו את המנה ותייגו אותנו",
      "handle": "@amasena_restaurant",
      "closing_ar": "مذاقنا على كل لسان",
      "closing_he": "הטעם שלנו על כל לשון",
      "thanks_ar": "صحّة وهنا",
      "thanks_he": "בתיאבון",
      "instagram_url": "https://www.instagram.com/amasena_restaurant/",
      "maps_url": "https://www.google.com/maps/search/?api=1&query=Amasina+restaurant+Ein+Mahel",
      "_maps_status": "search link only; owner confirms or supplies the exact Maps link"
    },
    "ui": {
      "preorder_ar": "يُطلب مسبقًا",
      "preorder_he": "בהזמנה מראש",
      "weight_unit_ar": "غم",
      "weight_unit_he": "גר'",
      "weight_label_ar": "اختاروا الوزن",
      "weight_label_he": "בחרו משקל",
      "currency": "₪",
      "price_note_ar": "الأسعار عند النادل",
      "price_note_he": "המחירים אצל המלצר",
      "price_note_weighted_ar": "الأسعار حسب الوزن – عند النادل",
      "price_note_weighted_he": "המחירים לפי משקל – אצל המלצר",
      "price_aria_ar": "السعر عند النادل",
      "price_aria_he": "המחיר אצל המלצר",
      "kg1_ar": "1 كغم",
      "kg1_he": "1 ק\"ג",
      "lang_ar_label": "عربي",
      "lang_he_label": "עברית",
      "menu_label_ar": "القائمة",
      "menu_label_he": "התפריט",
      "close_ar": "إغلاق",
      "close_he": "סגירה",
      "instagram_ar": "تابعونا على إنستغرام",
      "instagram_he": "עקבו אחרינו באינסטגרם",
      "location_ar": "الموقع",
      "location_he": "איך מגיעים"
    }
  },
  "sections": [
    {
      "id": "salads",
      "chip_ar": "سلطات",
      "chip_he": "סלטים",
      "_note": "chip anchor only; content is marketing.salad_offer"
    },
    {
      "id": "starters",
      "title_ar": "مقبلات",
      "title_he": "מנות ראשונות",
      "headline_ar": "مقبلات بتفتح *النفس*",
      "headline_he": "מנות ראשונות שפותחות *תיאבון*",
      "tagline_ar": "البداية الحلوة لكل سهرة.",
      "tagline_he": "ההתחלה הנכונה לכל ערב.",
      "chip_ar": "مقبلات",
      "chip_he": "ראשונות",
      "opener": {
        "type": "type"
      }
    },
    {
      "id": "specials",
      "title_ar": "أطباق مميّزة",
      "title_he": "מיוחדים",
      "headline_ar": "*الشيف منصور* إله دور",
      "headline_he": "המיוחדים של *השף*",
      "tagline_ar": "أطباق من توقيع الشيف منصور.",
      "tagline_he": "מנות בחתימת השף מנסור.",
      "chip_ar": "مميّزة",
      "chip_he": "מיוחדים",
      "opener": {
        "type": "video",
        "ref": "v57"
      }
    },
    {
      "id": "meats",
      "title_ar": "لحوم",
      "title_he": "בשרים",
      "headline_ar": "تشكيلة لحوم *فاخرة*",
      "headline_he": "בשרים *מובחרים*",
      "tagline_ar": "ع النار، بالوزن اللي بناسبك: 250 أو 330 غم.",
      "tagline_he": "על האש, במשקל שמתאים לכם: 250 או 330 גר'.",
      "chip_ar": "لحوم",
      "chip_he": "בשרים",
      "opener": {
        "type": "photo",
        "ref": "p45"
      }
    },
    {
      "id": "fish",
      "title_ar": "أسماك ومأكولات بحرية",
      "title_he": "דגים ופירות ים",
      "headline_ar": "من البحر *للصحن*",
      "headline_he": "מהים *לצלחת*",
      "tagline_ar": "خيرات البحر بلمسة الشيف.",
      "tagline_he": "טובו של הים בנגיעת השף.",
      "chip_ar": "بحري",
      "chip_he": "דגים",
      "opener": {
        "type": "video",
        "ref": "v53"
      }
    },
    {
      "id": "world",
      "title_ar": "أطباق من العالم",
      "title_he": "מנות מן העולם",
      "headline_ar": "نكهات من *العالم*",
      "headline_he": "טעמים *מהעולם*",
      "tagline_ar": "رحلة قصيرة… من غير ما تقوم عن الطاولة.",
      "tagline_he": "טיול קצר בעולם — בלי לקום מהשולחן.",
      "chip_ar": "من العالم",
      "chip_he": "מהעולם",
      "opener": {
        "type": "type"
      }
    }
  ],
  "items": [
    {
      "id": "merguez",
      "section": "starters",
      "name_ar": "مقانق مرقاز",
      "name_he": "נקניקיות מרגז",
      "desc_ar": "مقانق مرقاز بنكهة غنية… بداية بتفتح النفس.",
      "desc_he": "נקניקיות מרגז עשירות בטעם — פתיחה עם אופי.",
      "price": 45,
      "flags": [
        "name_uncertain"
      ],
      "owner_he": "סראסיו מרגז",
      "photo": null,
      "icon": "sausage",
      "badges": []
    },
    {
      "id": "eggplant",
      "section": "starters",
      "name_ar": "باذنجان ع النار",
      "name_he": "חציל על האש",
      "desc_ar": "باذنجان مشوي ع النار… بسيط وطيّب.",
      "desc_he": "חציל צלוי על האש — פשוט וטעים.",
      "price": 25,
      "flags": [
        "photo_24_unconfirmed"
      ],
      "photo": null,
      "icon": "eggplant",
      "badges": []
    },
    {
      "id": "stuffed_mushrooms",
      "section": "starters",
      "name_ar": "فطر محشي",
      "name_he": "פטריות ממולאות",
      "desc_ar": "فطر محشي بحشوة الشيف… لقمة وبتطلب غيرها.",
      "desc_he": "פטריות במילוי של השף — ביס אחד ורוצים עוד.",
      "price": 45,
      "flags": [],
      "photo": null,
      "icon": "mushroom",
      "badges": []
    },
    {
      "id": "calamari_labneh",
      "section": "starters",
      "name_ar": "كلماري مع لبنة",
      "name_he": "קלמרי עם לבנה",
      "desc_ar": "كلماري مقرمش فوق لبنة باردة… السخن والبارد بصحن واحد.",
      "desc_he": "קלמרי פריך על לבנה קרירה — חם וקר באותה צלחת.",
      "price": 55,
      "flags": [
        "photo_needs_owner_ok"
      ],
      "photo": "p21",
      "icon": "squid",
      "desc_short_ar": "مقرمش فوق لبنة باردة",
      "desc_short_he": "פריך על לבנה קרירה",
      "badges": []
    },
    {
      "id": "fried_cheese",
      "section": "starters",
      "name_ar": "جبنة مقلية",
      "name_he": "גבינה מטוגנת",
      "desc_ar": "ذهبية ومقرمشة من برّا، طرية من جوّا.",
      "desc_he": "זהובה ופריכה מבחוץ, רכה מבפנים.",
      "price": 30,
      "flags": [
        "photo_needs_owner_ok"
      ],
      "photo": "p19",
      "icon": "cheese",
      "desc_short_ar": "ذهبية ومقرمشة",
      "desc_short_he": "זהובה ופריכה",
      "badges": []
    },
    {
      "id": "cheese_calamari_heads",
      "section": "starters",
      "name_ar": "جبنة مع رؤوس كلماري",
      "name_he": "גבינה עם ראשי קלמרי",
      "desc_ar": "جبنة ورؤوس كلماري بصحن واحد… لعشّاق البحر والجبنة.",
      "desc_he": "גבינה וראשי קלמרי בצלחת אחת — לאוהבי הים.",
      "price": 45,
      "flags": [],
      "photo": null,
      "icon": "squid",
      "badges": []
    },
    {
      "id": "chips",
      "section": "starters",
      "name_ar": "تشيبس",
      "name_he": "צ'יפס",
      "desc_ar": "تشيبس ذهبي ومقرمش… رفيق كل صحن.",
      "desc_he": "צ'יפס זהוב ופריך — החבר הכי טוב של כל מנה.",
      "price": 20,
      "flags": [],
      "photo": null,
      "icon": "fries",
      "badges": []
    },
    {
      "id": "lamb_shank",
      "section": "specials",
      "name_ar": "موزة خاروف",
      "name_he": "שוק טלה (מוזה)",
      "desc_ar": "طبق مميّز من مطبخ الشيف منصور.",
      "desc_he": "מנה מיוחדת מהמטבח של השף מנסור.",
      "price": null,
      "flags": [],
      "owner_he": "מוזה טלה",
      "photo": null,
      "icon": "shank",
      "badges": [
        "preorder"
      ]
    },
    {
      "id": "fillet_foie_gras",
      "section": "specials",
      "name_ar": "فيليه مع كبدة إوز",
      "name_he": "פילה עם כבד אווז",
      "desc_ar": "فيليه طري مع كبدة إوز… فخامة بكل معنى الكلمة.",
      "desc_he": "פילה רך עם כבד אווז — פינוק בלי פשרות.",
      "price": null,
      "flags": [],
      "photo": null,
      "icon": "steak",
      "badges": []
    },
    {
      "id": "chateaubriand_1kg",
      "section": "specials",
      "name_ar": "فيليه كامل",
      "name_he": "פילה שלם",
      "desc_ar": "قطعة فيليه كاملة، كيلو… للطاولة اللي جاي تحتفل.",
      "desc_he": "נתח פילה שלם של קילו — לשולחן שבא לחגוג.",
      "price": null,
      "flags": [
        "name_uncertain"
      ],
      "owner_he": "שרבול פילה 1 ק\"ג",
      "photo": null,
      "icon": "steak",
      "badges": [
        "kg1"
      ]
    },
    {
      "id": "entrecote_garlic_butter",
      "section": "specials",
      "name_ar": "أنتريكوت بزبدة الثوم",
      "name_he": "אנטריקוט בחמאת שום",
      "desc_ar": "أنتريكوت ع النار، وزبدة الثوم بتذوب على وجهه.",
      "desc_he": "אנטריקוט על האש, עם חמאת שום שנמסה מלמעלה.",
      "price": null,
      "flags": [],
      "photo": null,
      "icon": "steak",
      "badges": []
    },
    {
      "id": "fillet_garlic_butter",
      "section": "specials",
      "name_ar": "فيليه بزبدة الثوم",
      "name_he": "פילה בחמאת שום",
      "desc_ar": "أطرى قطعة باللحمة، بتلمع بزبدة الثوم.",
      "desc_he": "הנתח הכי רך, מבריק בחמאת שום.",
      "price": null,
      "flags": [],
      "photo": null,
      "icon": "steak",
      "badges": []
    },
    {
      "id": "tbone_garlic_butter",
      "section": "specials",
      "name_ar": "تي-بون بزبدة الثوم",
      "name_he": "טי-בון בחמאת שום",
      "desc_ar": "فيليه وسيرلوين ع العضمة، مع زبدة الثوم.",
      "desc_he": "פילה וסינטה על העצם, עם חמאת שום.",
      "price": null,
      "flags": [],
      "photo": null,
      "icon": "tbone",
      "badges": []
    },
    {
      "id": "duo_fillet",
      "section": "specials",
      "name_ar": "دويتو فيليه",
      "name_he": "דואט פילה",
      "desc_ar": "من توقيع الشيف منصور.",
      "desc_he": "בחתימת השף מנסור.",
      "price": null,
      "flags": [
        "meaning_unclear"
      ],
      "photo": null,
      "icon": "steak",
      "badges": []
    },
    {
      "id": "duo_entrecote",
      "section": "specials",
      "name_ar": "دويتو أنتريكوت",
      "name_he": "דואט אנטריקוט",
      "desc_ar": "للي بحب اللحمة بجد… من توقيع الشيف.",
      "desc_he": "למי שאוהב בשר ברצינות — בחתימת השף.",
      "price": null,
      "flags": [
        "meaning_unclear"
      ],
      "photo": null,
      "icon": "steak",
      "badges": []
    },
    {
      "id": "duo_salmon_clams",
      "section": "specials",
      "name_ar": "دويتو سلمون وصدف",
      "name_he": "דואט סלמון וצדפים",
      "desc_ar": "سلمون وصدف… البحر بأحلى حالاته.",
      "desc_he": "סלמון וצדפים — הים במיטבו.",
      "price": null,
      "flags": [],
      "photo": null,
      "icon": "fish",
      "badges": []
    },
    {
      "id": "mixed_grill",
      "section": "meats",
      "name_ar": "مشكّل لحوم بالوزن",
      "name_he": "מעורב בשרים לפי משקל",
      "desc_ar": "تشكيلة من لحومنا ع النار… لما يصعب عليك تختار.",
      "desc_he": "מבחר מהבשרים שלנו על האש — כשקשה לבחור.",
      "flags": [
        "photo_needs_owner_ok"
      ],
      "owner_he": "משקל (מעורב)",
      "prices": {
        "250": null,
        "330": null
      },
      "photo": "p23",
      "icon": "steak",
      "desc_short_ar": "تشكيلة لحوم ع النار",
      "desc_short_he": "מבחר בשרים על האש",
      "badges": []
    },
    {
      "id": "ribs",
      "section": "meats",
      "name_ar": "ريش",
      "name_he": "צלעות",
      "desc_ar": "ريش طرية ع النار، بتتبيلة الشيف.",
      "desc_he": "צלעות רכות על האש, בתיבול של השף.",
      "flags": [
        "name_uncertain",
        "photo_needs_owner_ok"
      ],
      "prices": {
        "250": null,
        "330": null
      },
      "photo": "p31",
      "icon": "chop",
      "desc_short_ar": "ع النار بتتبيلة الشيف",
      "desc_short_he": "על האש, בתיבול השף",
      "badges": []
    },
    {
      "id": "entrecote",
      "section": "meats",
      "name_ar": "أنتريكوت",
      "name_he": "אנטריקוט",
      "desc_ar": "قطعة أنتريكوت معرّقة وغنية بالطعم، ع النار.",
      "desc_he": "נתח אנטריקוט משויש ועשיר בטעם, על האש.",
      "flags": [
        "photo_needs_owner_ok"
      ],
      "prices": {
        "250": null,
        "330": null
      },
      "photo": "p18",
      "icon": "steak",
      "desc_short_ar": "معرّق وغني بالطعم",
      "desc_short_he": "משויש ועשיר בטעם",
      "badges": []
    },
    {
      "id": "fillet",
      "section": "meats",
      "name_ar": "فيليه",
      "name_he": "פילה",
      "desc_ar": "أطرى قطعة باللحمة، مشوية ع ذوقك.",
      "desc_he": "הנתח הכי רך, בדרגת העשייה שתבחרו.",
      "flags": [],
      "prices": {
        "250": null,
        "330": null
      },
      "photo": null,
      "icon": "steak",
      "badges": []
    },
    {
      "id": "kebab",
      "section": "meats",
      "name_ar": "كباب",
      "name_he": "קבב",
      "desc_ar": "كباب مشوي ع النار بطعم أصيل.",
      "desc_he": "קבב על האש בטעם של פעם.",
      "flags": [
        "photo_needs_owner_ok"
      ],
      "prices": {
        "250": null,
        "330": null
      },
      "photo": "p12",
      "icon": "kebab",
      "desc_short_ar": "مشوي ع النار",
      "desc_short_he": "על האש, בטעם של פעם",
      "badges": []
    },
    {
      "id": "chicken_breast",
      "section": "meats",
      "name_ar": "صدر دجاج",
      "name_he": "חזה עוף",
      "desc_ar": "صدر دجاج متبّل ومشوي، خفيف وطري.",
      "desc_he": "חזה עוף מתובל וצלוי, קליל ועסיסי.",
      "flags": [],
      "prices": {
        "250": null,
        "330": null
      },
      "photo": null,
      "icon": "chicken",
      "badges": []
    },
    {
      "id": "pargit",
      "section": "meats",
      "name_ar": "برجيت (فخذ دجاج)",
      "name_he": "פרגית",
      "desc_ar": "برجيت عصيرية ع النار… المفضّلة عند الكل.",
      "desc_he": "פרגית עסיסית על האש — האהובה של כולם.",
      "flags": [],
      "prices": {
        "250": null,
        "330": null
      },
      "photo": null,
      "icon": "chicken",
      "badges": []
    },
    {
      "id": "salmon",
      "section": "fish",
      "name_ar": "سلمون",
      "name_he": "סלמון",
      "desc_ar": "سلمون طري بنكهة البحر.",
      "desc_he": "סלמון עדין ועסיסי.",
      "flags": [],
      "prices": {
        "250": null,
        "330": null
      },
      "photo": null,
      "icon": "fish",
      "badges": []
    },
    {
      "id": "shrimp_fried",
      "section": "fish",
      "name_ar": "شريمبس مقلي",
      "name_he": "שרימפס מטוגן",
      "desc_ar": "شريمبس ذهبي ومقرمش.",
      "desc_he": "שרימפס זהוב ופריך.",
      "flags": [
        "photo_needs_owner_ok"
      ],
      "prices": {
        "250": null,
        "330": null
      },
      "photo": "p22",
      "icon": "shrimp",
      "desc_short_ar": "ذهبي ومقرمش",
      "desc_short_he": "זהוב ופריך",
      "badges": []
    },
    {
      "id": "shrimp_cooked",
      "section": "fish",
      "name_ar": "شريمبس مطبوخ",
      "name_he": "שרימפס מבושל",
      "desc_ar": "شريمبس مطبوخ بصلصة الشيف.",
      "desc_he": "שרימפס מבושל ברוטב של השף.",
      "flags": [
        "sauce_unknown",
        "photo_needs_owner_ok"
      ],
      "prices": {
        "250": null,
        "330": null
      },
      "photo": "p25",
      "icon": "shrimp",
      "desc_short_ar": "بصلصة الشيف",
      "desc_short_he": "ברוטב של השף",
      "badges": []
    },
    {
      "id": "calamari_fried",
      "section": "fish",
      "name_ar": "كلماري مقلي",
      "name_he": "קלמרי מטוגן",
      "desc_ar": "حلقات كلماري ذهبية ومقرمشة.",
      "desc_he": "טבעות קלמרי זהובות ופריכות.",
      "flags": [],
      "prices": {
        "250": null,
        "330": null
      },
      "photo": null,
      "icon": "squid",
      "badges": []
    },
    {
      "id": "calamari_cooked",
      "section": "fish",
      "name_ar": "كلماري مطبوخ",
      "name_he": "קלמרי מבושל",
      "desc_ar": "كلماري مطبوخ بصلصة الشيف.",
      "desc_he": "קלמרי מבושל ברוטב של השף.",
      "flags": [
        "sauce_unknown"
      ],
      "prices": {
        "250": null,
        "330": null
      },
      "photo": null,
      "icon": "squid",
      "badges": []
    },
    {
      "id": "half_calamari_half_shrimp",
      "section": "fish",
      "name_ar": "نص كلماري نص شريمبس",
      "name_he": "חצי קלמרי חצי שרימפס",
      "desc_ar": "ما بدك تختار؟ خذ الثنين.",
      "desc_he": "לא רוצים לבחור? קחו את שניהם.",
      "flags": [],
      "prices": {
        "250": null,
        "330": null
      },
      "photo": null,
      "icon": "shrimp",
      "badges": []
    },
    {
      "id": "denis",
      "section": "fish",
      "name_ar": "دنيس",
      "name_he": "דניס",
      "desc_ar": "دنيس بطعم البحر الأصيل.",
      "desc_he": "דניס בטעם של ים.",
      "flags": [
        "weights_unconfirmed"
      ],
      "prices": {
        "250": null,
        "330": null
      },
      "photo": null,
      "icon": "fish",
      "badges": []
    },
    {
      "id": "levrek",
      "section": "fish",
      "name_ar": "لبراك (قاروص)",
      "name_he": "לברק",
      "desc_ar": "لبراك بطعم البحر الصافي.",
      "desc_he": "לברק עדין בטעם של ים.",
      "flags": [
        "weights_unconfirmed"
      ],
      "prices": {
        "250": null,
        "330": null
      },
      "photo": null,
      "icon": "fish",
      "badges": []
    },
    {
      "id": "clams",
      "section": "fish",
      "name_ar": "صدف",
      "name_he": "צדפים",
      "desc_ar": "صدف بنكهة البحر… لعشّاق الأطباق البحرية.",
      "desc_he": "צדפים בטעם של ים — לאוהבי פירות הים.",
      "flags": [
        "weights_unconfirmed"
      ],
      "prices": {
        "250": null,
        "330": null
      },
      "photo": null,
      "icon": "clam",
      "badges": []
    },
    {
      "id": "seafood_mix",
      "section": "fish",
      "name_ar": "ميكس بحري",
      "name_he": "מיקס ים",
      "desc_ar": "تشكيلة من خيرات البحر بصحن واحد.",
      "desc_he": "מבחר מטובו של הים בצלחת אחת.",
      "flags": [
        "name_uncertain",
        "weights_unconfirmed"
      ],
      "owner_he": "מיקס",
      "prices": {
        "250": null,
        "330": null
      },
      "photo": null,
      "icon": "clam",
      "badges": []
    },
    {
      "id": "sea_fish",
      "section": "fish",
      "name_ar": "سمك بحر",
      "name_he": "דג ים",
      "desc_ar": "سمك بحر — اسألوا النادل عن النوع.",
      "desc_he": "דג ים — שאלו את המלצר על סוג הדג.",
      "flags": [
        "name_uncertain",
        "weights_unconfirmed"
      ],
      "prices": {
        "250": null,
        "330": null
      },
      "photo": null,
      "icon": "fish",
      "badges": []
    },
    {
      "id": "shrimp_noodles",
      "section": "world",
      "name_ar": "نودلز شريمبس",
      "name_he": "נודלס שרימפס",
      "desc_ar": "نودلز وشريمبس بلمسة الشيف.",
      "desc_he": "נודלס ושרימפס בנגיעת השף.",
      "price": null,
      "flags": [],
      "photo": null,
      "icon": "noodles",
      "badges": []
    },
    {
      "id": "fettuccine",
      "section": "world",
      "name_ar": "فيتوتشيني",
      "name_he": "פטוצ'יני",
      "desc_ar": "فيتوتشيني على طريقة الشيف منصور.",
      "desc_he": "פטוצ'יני בסגנון השף מנסור.",
      "price": null,
      "flags": [
        "sauce_unknown"
      ],
      "photo": null,
      "icon": "pasta",
      "badges": []
    },
    {
      "id": "ravioli",
      "section": "world",
      "name_ar": "رافيولي",
      "name_he": "רביולי",
      "desc_ar": "رافيولي بلمسة الشيف.",
      "desc_he": "רביולי בנגיעת השף.",
      "price": null,
      "flags": [
        "filling_unknown"
      ],
      "photo": null,
      "icon": "ravioli",
      "badges": []
    }
  ],
  "photos": {
    "cover": {
      "src_id": 28,
      "frame": "cover",
      "crop": [
        0.5,
        0.42,
        1.0
      ],
      "alt_ar": "الشيف منصور بيقدّم لوح لحمة ع النار والبخار طالع منه",
      "alt_he": "השף מנסור מגיש קרש בשר מהאש, מעלה אדים",
      "confidence": "H"
    },
    "table": {
      "src_id": 26,
      "frame": "table",
      "crop": [
        0.5,
        0.5,
        1.0
      ],
      "alt_ar": "طاولة مليانة صحون سلطات ومقبلات ملوّنة",
      "alt_he": "שולחן מלא צלחות סלטים ומנות פתיחה צבעוניות",
      "confidence": "H"
    },
    "p21": {
      "src_id": 21,
      "frame": "card",
      "crop": [
        0.42,
        0.62,
        1.2
      ],
      "alt_ar": "كلماري مقلي فوق لبنة مع صلصة برتقالية",
      "alt_he": "קלמרי מטוגן על לבנה עם רוטב כתום",
      "confidence": "M",
      "note": "owner: calamari_labneh or cheese_calamari_heads?"
    },
    "p19": {
      "src_id": 19,
      "frame": "card",
      "crop": [
        0.5,
        0.45,
        1.1
      ],
      "alt_ar": "مكعبات جبنة مقلية ذهبية مع صلصة حلوة حارة",
      "alt_he": "קוביות גבינה מטוגנות זהובות עם רוטב צ'ילי מתוק",
      "confidence": "M",
      "note": "owner: is this fried cheese?"
    },
    "p23": {
      "src_id": 23,
      "frame": "card",
      "crop": [
        0.5,
        0.55,
        1.05
      ],
      "alt_ar": "لوح خشب عليه لحمة مشوية وريش وفلفل أخضر وبهارات",
      "alt_he": "קרש עץ עם בשרים צלויים, צלע ופלפל ירוק ותבלינים",
      "confidence": "M",
      "note": "owner: is this the mixed-by-weight board?"
    },
    "p31": {
      "src_id": 31,
      "frame": "card",
      "crop": [
        0.5,
        0.5,
        1.0
      ],
      "alt_ar": "ريشة لحمة ع العضمة فوق نار الشوي",
      "alt_he": "צלע על העצם מעל הגריל",
      "confidence": "M",
      "note": "owner: lamb chops = צלעות?"
    },
    "p18": {
      "src_id": 18,
      "frame": "card",
      "crop": [
        0.45,
        0.62,
        1.15
      ],
      "alt_ar": "أنتريكوت مشوي مع بندورة وبصل مشويين",
      "alt_he": "אנטריקוט צלוי עם עגבנייה ובצל צלויים",
      "confidence": "M"
    },
    "p12": {
      "src_id": 12,
      "frame": "card",
      "crop": [
        0.45,
        0.5,
        1.1
      ],
      "alt_ar": "أربع قطع كباب مشوية مع بندورة وبصل",
      "alt_he": "ארבעה קבבים צלויים עם עגבנייה ובצל",
      "confidence": "M"
    },
    "p22": {
      "src_id": 22,
      "frame": "card",
      "crop": [
        0.45,
        0.45,
        1.05
      ],
      "alt_ar": "شريمبس مقلي مقرمش مع صلصة",
      "alt_he": "שרימפס מטוגן ופריך עם רוטב",
      "confidence": "H"
    },
    "p25": {
      "src_id": 25,
      "frame": "card",
      "crop": [
        0.5,
        0.48,
        1.1
      ],
      "alt_ar": "شريمبس بصلصة مع ليمون وبقدونس",
      "alt_he": "שרימפס ברוטב עם לימון ופטרוזיליה",
      "confidence": "M",
      "note": "owner: #25 or #48 is the cooked shrimp?"
    },
    "p45": {
      "src_id": 45,
      "frame": "opener",
      "crop": [
        0.5,
        0.5,
        1.0
      ],
      "alt_ar": "لحمة وفلفل ع الشواية والنار طالعة",
      "alt_he": "בשר ופלפלים על הגריל עם להבות",
      "confidence": "H"
    },
    "s00": {
      "src_id": 0,
      "frame": "card",
      "crop": [
        0.52,
        0.5,
        1.1
      ],
      "alt_ar": "سلطة الراهب: باذنجان مع طحينة ورمان",
      "alt_he": "סלט ראהב: חציל עם טחינה ורימונים",
      "confidence": "H",
      "caption_ar": "سلطة الراهب",
      "caption_he": "סלט ראהב",
      "note": "name confirmed by the Instagram post (Arabic); Hebrew spelling to be confirmed by owner"
    },
    "s04": {
      "src_id": 4,
      "frame": "card",
      "crop": [
        0.55,
        0.5,
        1.3
      ],
      "alt_ar": "سلطة خضرا مع لوز وتوت بصحن أسود",
      "alt_he": "סלט ירוק עם שקדים ופירות יער בקערה שחורה",
      "confidence": "H"
    },
    "s02": {
      "src_id": 2,
      "frame": "card",
      "crop": [
        0.5,
        0.45,
        1.25
      ],
      "alt_ar": "تلة سلطة خضرا عالية ع ستاند زجاج",
      "alt_he": "הר סלט ירוק על מעמד זכוכית",
      "confidence": "H"
    },
    "s06": {
      "src_id": 6,
      "frame": "card",
      "crop": [
        0.5,
        0.5,
        1.05
      ],
      "alt_ar": "تبولة فوق ورق خس",
      "alt_he": "טבולה על עלי חסה",
      "confidence": "H"
    },
    "s08": {
      "src_id": 8,
      "frame": "card",
      "crop": [
        0.5,
        0.55,
        1.15
      ],
      "alt_ar": "سلطة بندورة شيري وجوز بسلة خبز مقرمشة",
      "alt_he": "סלט עגבניות שרי ואגוזים בסלסלת לחם פריכה",
      "confidence": "H"
    },
    "s09": {
      "src_id": 9,
      "frame": "card",
      "crop": [
        0.5,
        0.62,
        1.15
      ],
      "alt_ar": "سلطة ملفوف وفلفل وجوز بصحن أسود",
      "alt_he": "סלט כרוב, פלפל ואגוזים בקערה שחורה",
      "confidence": "H"
    },
    "s39": {
      "src_id": 39,
      "frame": "card",
      "crop": [
        0.5,
        0.42,
        1.25
      ],
      "alt_ar": "سلطة خضرا مع تين ومانجا",
      "alt_he": "סלט ירוק עם תאנים ומנגו",
      "confidence": "H"
    },
    "s11": {
      "src_id": 11,
      "frame": "card",
      "crop": [
        0.5,
        0.5,
        1.0
      ],
      "alt_ar": "سلطة ملوّنة مع سماق وليمون",
      "alt_he": "סלט צבעוני עם סומאק ולימון",
      "confidence": "H"
    },
    "v57": {
      "src": "src/WhatsApp Video 2026-11-11 at 20.51.35.mp4",
      "trim": [
        8,
        7
      ],
      "alt_ar": "",
      "alt_he": "",
      "decorative": true,
      "note": "butter, onions and steak sizzling; nothing after 17 s (guest face)"
    },
    "v53": {
      "src": "src/WhatsApp Video 2026-11-11 at 20.39.40.mp4",
      "trim": [
        7,
        8
      ],
      "alt_ar": "",
      "alt_he": "",
      "decorative": true,
      "note": "seafood cream poured on the grill; skip 0-5 s (guest face); unlabeled, no dish claim"
    }
  },
  "_owner_questions": [
    "1. 'שרבול פילה 1 ק\"ג' — what is the exact name? (published neutral: פילה שלם / فيليه كامل)",
    "2. 'סראסיו' in 'סראסיו מרגז' — exact word? (published: נקניקיות מרגז / مقانق مرقاز)",
    "3. Photo #21: קלמרי עם לבנה or גבינה עם ראשי קלמרי?",
    "4. Photo #19: is it the fried cheese?",
    "5. Photo #24 (eggplant in cream, cast-iron pan): is it the house חציל על האש? (not shown until yes)",
    "6. Shrimp cooked: photo #25 or #48?",
    "7. Photo #23: is this the mixed-by-weight board? Photo #31: are צלעות lamb chops?",
    "8. Photo #33 / video v57: is it אנטריקוט בחמאת שום? (if yes, add photo to that special)",
    "9. 'דואט' — two cuts on one plate, or a dish for two? (copy rewritten after answer)",
    "10. Whole fish (דניס, לברק, דג ים), צדפים, מיקס: really sold as 250/330 g, or per piece?",
    "11. Mixed meat by weight: 250/330 correct for a platter?",
    "12. 'מיקס' under fish = seafood mix?",
    "13. Hebrew spelling of the restaurant (אמסינה?) and of 'سلطة الراهب' (סלט ראהב?). Is سلطة الراهب the same dish as חציל על האש?",
    "14. Prices for all null items, and the exact Google Maps link.",
    "15. Photo #12 (kebab card) shows four round flat patties: is this how your קבב is served? Photo #31 (צלעות card) is a large beef rib on the bone, not lamb chops: correct for צלעות?",
    "16. Final site address (e.g. amasina-menu.netlify.app): needed to make the WhatsApp/Instagram link preview image (og:image) an absolute URL."
  ]
};
