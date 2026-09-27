const days = [
  {
    date: "2026-10-02", short: "2", weekday: "五", label: "成田／御殿場", locationKey: "narita", location: "成田市",
    intro: "落地後先用一碗鰻魚飯，慢慢把旅程打開。",
    items: [
      { time: "05:00", type: "transit", label: "交通", title: "起床 → 小港機場", copy: "06:00 抵達小港機場，預留報到與安檢時間。", place: "小港機場", tags: [{ text: "去程", kind: "transit" }] },
      { time: "08:05", type: "transit", label: "交通", title: "亞洲航空 FD234", jp: "高雄 KHH → 成田 NRT", copy: "12:55 抵達成田機場；13:30–14:00 出關。", place: "成田機場", tags: [{ text: "航班", kind: "transit" }] },
      { time: "14:30", type: "food", label: "餐廳", title: "川豐成田本店", jp: "Kawatoyo · 備選：駿河屋", copy: "百年鰻魚飯，抵達日本的第一餐。", place: "川豐成田本店", places: [{ label: "川豐成田本店", place: "川豐成田本店" }, { label: "駿河屋（備選）", place: "駿河屋 成田" }], tags: [{ text: "必吃", kind: "must" }, { text: "鰻魚飯", kind: "buy" }], guide: "建議先確認現場候位；若人潮太多，直接切換到駿河屋。", tabelog: "https://tabelog.com/en/chiba/A1204/A120401/rstLst/", source: "https://www.naritasan.or.jp/" },
      { time: "15:30", type: "attraction", label: "景點", title: "成田山表參道散步", jp: "Naritasan Omotesando", copy: "時間充裕就逛商店街與成田山新勝寺；若需趕車，直接前往御殿場。", place: "成田山新勝寺", tags: [{ text: "攻略", kind: "guide" }, { text: "伴手禮", kind: "buy" }], guide: "表參道適合買米菓、羊羹與鐵砲漬；寺院參拜可留意御朱印。", source: "https://www.naritasan.or.jp/about/" },
      { time: "19:00", type: "food", label: "餐廳", title: "さわやか 炭烤漢堡排", copy: "靜岡名物；晚餐時段可能需要候位。", place: "さわやか 御殿場", tags: [{ text: "必點：げんこつハンバーグ", kind: "must" }, { text: "可能候位", kind: "booking" }] },
      { time: "20:00", type: "stay", label: "住宿", title: "入住 Dormy Inn Express Fujisan Gotemba", copy: "先放行李，再視體力安排溫泉與 21:00 消夜拉麵。", place: "Dormy Inn Express Fujisan Gotemba", tags: [{ text: "溫泉", kind: "guide" }] },
    ]
  },
  {
    date: "2026-10-03", short: "3", weekday: "六", label: "河口湖／忍野", locationKey: "kawaguchiko", location: "河口湖／忍野八海",
    intro: "把富士山留給早晨：先看天氣，再在纜車與遊湖船中二選一。",
    items: [
      { time: "06:30", type: "food", label: "餐廳", title: "飯店早餐", copy: "早餐後整理行李與拍攝裝備，08:30 出發。", place: "Dormy Inn Express Fujisan Gotemba", tags: [{ text: "早起", kind: "guide" }] },
      { time: "08:30", type: "attraction", label: "景點", title: "富士山全景纜車／遊湖船", jp: "Mt. Fuji Panoramic Ropeway", copy: "時間不夠時二選一；晴天優先纜車，湖面平靜時可選遊湖船。", place: "河口湖", places: [{ label: "富士山全景纜車", place: "富士山全景纜車" }, { label: "河口湖遊湖船", place: "河口湖遊覧船" }], tags: [{ text: "看天氣決定", kind: "guide" }, { text: "逆富士拍攝", kind: "must" }], guide: "官方介紹指出天上山與《咔嚓咔嚓山》故事有關；可把展望台與湖畔倒影安排在同一段。", source: "https://www.mtfujiropeway.jp/en/" },
      { time: "10:45", type: "food", label: "餐廳", title: "山麓園・爐端燒", jp: "ほうとう 備選", copy: "11:00 排隊入場；若不想等，可改吃ほうとう。", place: "山麓園", tags: [{ text: "排隊入場", kind: "booking" }, { text: "必點：爐端燒／ほうとう", kind: "must" }] },
      { time: "13:00", type: "attraction", label: "景點", title: "忍野八海", jp: "Oshino Hakkai", copy: "富士山麓湧水池群；拍照時留意人潮與水池周邊動線。", place: "忍野八海", tags: [{ text: "富士山湧水", kind: "guide" }, { text: "必買：草餅／米菓", kind: "buy" }], guide: "建議先走主池群，再安排伴手禮；不要只停在入口，往內走較好拍。", source: "https://www.mtfujiropeway.jp/about/" },
      { time: "14:30", type: "attraction", label: "購物", title: "御殿場 PREMIUM OUTLETS", copy: "晚餐可在 Outlet 解決；19:00 回飯店泡溫泉。", place: "御殿場 PREMIUM OUTLETS", tags: [{ text: "購物", kind: "buy" }, { text: "必買：限定零食", kind: "buy" }] },
      { time: "21:00", type: "food", label: "餐廳", title: "飯店免費消夜拉麵", copy: "飯店內免費提供，來到 Dormy Inn 必吃。", place: "Dormy Inn Express Fujisan Gotemba", tags: [{ text: "免費提供", kind: "booking" }, { text: "必吃", kind: "must" }] },
    ]
  },
  {
    date: "2026-10-04", short: "4", weekday: "日", label: "箱根／橫濱／上野", locationKey: "hakone", location: "箱根／上野",
    intro: "火山、湖景、橫濱港未來 21 與東京夜色的一天；箱根段請抓準交通銜接。",
    items: [
      { time: "06:30", type: "food", label: "早餐", title: "Dormy Inn Express Fujisan Gotemba 早餐／11:00 前退房", jp: "Dormy Inn Express Fujisan Gotemba", copy: "飯店早餐後整理行李，最晚 11:00 前完成退房。", place: "Dormy Inn Express Fujisan Gotemba", tags: [{ text: "早起", kind: "guide" }, { text: "11:00 前退房", kind: "booking" }] },
      { time: "09:30", type: "food", label: "餐廳", title: "大涌谷／午餐黑咖哩", jp: "Owakudani", copy: "09:30–11:30；大涌谷散步並吃黑咖哩，注意火山區公告與風勢。", place: "大涌谷", places: [{ label: "大涌谷", place: "大涌谷" }, { label: "大涌谷黑咖哩", place: "大涌谷 黑咖哩" }], tags: [{ text: "必吃：黑咖哩", kind: "must" }, { text: "火山區", kind: "guide" }], guide: "先確認當日火山警戒與纜車運行狀況；把黑咖哩排在大涌谷停留段內。", source: "https://www.hakonenavi.jp/international/en/" },
      { time: "12:00", type: "attraction", label: "景點", title: "蘆之湖海盜遊覽船／箱根神社／湖畔鳥居", jp: "Lake Ashi · Hakone Shrine", copy: "12:00–14:30；依序搭船、參拜與拍照。", place: "蘆之湖／箱根神社", places: [{ label: "蘆之湖海盜遊覽船", place: "蘆之湖海盜遊覽船" }, { label: "箱根神社", place: "箱根神社" }, { label: "湖畔鳥居", place: "箱根神社 湖畔鳥居" }], tags: [{ text: "必拍：湖畔鳥居", kind: "must" }, { text: "交通：海盜遊覽船", kind: "transit" }], guide: "前往箱根神社可鎖定元箱根港；湖區移動要預留排隊與上下船時間。", source: "https://www.hakonenavi.jp/international/en/wp-content/uploads/sites/2/2025/09/traffic-guide-eng-202510.pdf" },
      { time: "14:30", type: "attraction", label: "景點", title: "横滨港未来 21／红砖仓库／東京鐵塔", jp: "Yokohama Minato Mirai 21 · Red Brick Warehouse · Tokyo Tower", copy: "14:30–17:00；三選一，當天視交通與體力決定。", place: "横滨港未来 21", places: [{ label: "横滨港未来 21", place: "横滨港未来 21" }, { label: "横滨红砖仓库", place: "横滨红砖仓库" }, { label: "東京鐵塔", place: "東京鐵塔" }], tags: [{ text: "三選一", kind: "guide" }, { text: "當天決定", kind: "neutral" }] },
      { time: "17:30", type: "stay", label: "住宿", title: "入住 PAUL HOUSE 上野館", copy: "辦理入住；地址：1 Chome-19-8 Higashiueno, Taito City, Tokyo 110-0015 日本。", place: "PAUL HOUSE 上野館, 1 Chome-19-8 Higashiueno, Taito City, Tokyo 110-0015, Japan", tags: [{ text: "住宿", kind: "guide" }, { text: "地址已整理", kind: "buy" }] },
      { time: "18:30", type: "food", label: "餐廳", title: "一頭牛燒肉 房家 上野六丁目店", jp: "和牛燒肉", copy: "已預約 18:30，請務必準時抵達；晚餐後再回上野採買。", place: "一頭牛燒肉 房家 上野六丁目店", tags: [{ text: "已預約 18:30", kind: "booking" }, { text: "必點：和牛", kind: "must" }] },
      { time: "20:00", type: "attraction", label: "採買", title: "逛超市／秋葉原 BIC CAMERA", copy: "晚餐後視體力安排採買。", place: "上野／秋葉原 BIC CAMERA", places: [{ label: "上野超市", place: "上野 超市" }, { label: "秋葉原 BIC CAMERA", place: "BIC CAMERA 秋葉原" }], tags: [{ text: "必買：藥妝／電器", kind: "buy" }, { text: "彈性行程", kind: "neutral" }] },
    ]
  },
  {
    date: "2026-10-05", short: "5", weekday: "一", label: "淺草／銀座／上野", locationKey: "tokyo", location: "東京東側",
    intro: "今天改搭地鐵，節奏放慢一點，把淺草、銀座與上野串起來。",
    items: [
      { time: "08:00", type: "food", label: "餐廳", title: "早餐", copy: "建議前一晚先買好，避免早晨排隊影響淺草寺時間。", place: "上野", tags: [{ text: "前晚採買", kind: "guide" }] },
      { time: "09:00", type: "attraction", label: "景點", title: "淺草寺／雷門", jp: "Senso-ji · Kaminarimon", copy: "早上先拍雷門與仲見世，避開午後人潮。", place: "淺草寺", tags: [{ text: "必買：人形燒／雷おこし", kind: "buy" }, { text: "攻略", kind: "guide" }], guide: "仲見世適合把伴手禮一次買齊；若要參拜，先從雷門一路走進本堂。", source: "https://www.senso-ji.jp/" },
      { time: "12:00", type: "food", label: "餐廳", title: "午餐四選一", copy: "淺草或銀座，依當天動線選一間。", place: "淺草／銀座", places: [{ label: "浅草 大黑家", place: "浅草 大黑家" }, { label: "浅草 天彩", place: "浅草 天彩" }, { label: "尾張屋 雷門店", place: "尾張屋 雷門店" }, { label: "銀座 篝 本店", place: "銀座 篝 本店" }, { label: "銀座 とんかつ檍 銀座 8 丁目店", place: "とんかつ檍 銀座8丁目店" }, { label: "銀座 挽肉屋 神徳", place: "銀座 挽肉屋 神徳" }], tags: [{ text: "必點：天婦羅／蕎麥麵／拉麵／豬排／漢堡排", kind: "must" }, { text: "Tabelog 比較", kind: "guide" }], tabelog: "https://tabelog.com/en/tokyo/A1301/rstLst/" },
      { time: "14:00", type: "attraction", label: "購物", title: "銀座逛街／UNIQLO 旗艦店", copy: "把購物集中在銀座，預留晚餐轉移時間。", place: "銀座 UNIQLO", places: [{ label: "銀座逛街", place: "銀座" }, { label: "UNIQLO 旗艦店", place: "UNIQLO TOKYO 銀座" }], tags: [{ text: "必買：服飾", kind: "buy" }] },
      { time: "17:00", type: "food", label: "餐廳", title: "晚餐四選一", copy: "依當天排隊與位置選一間。", place: "銀座", places: [{ label: "銀座 篝 本店", place: "銀座 篝 本店" }, { label: "とんかつ檍 銀座 8 丁目店", place: "とんかつ檍 銀座8丁目店" }, { label: "焼鳥 鳥よし 銀座店", place: "焼鳥 鳥よし 銀座店" }, { label: "天ぷら 阿部 銀座本店", place: "天ぷら 阿部 銀座本店" }], tags: [{ text: "必點：拉麵／豬排／烤鳥／天婦羅", kind: "must" }, { text: "Tabelog 比較", kind: "guide" }], tabelog: "https://tabelog.com/en/tokyo/A1301/rstLst/" },
      { time: "19:00", type: "attraction", label: "採買", title: "阿美橫町藥妝採購／超市／秋葉原 BIC CAMERA", jp: "Ameyoko", copy: "19:00 回阿美橫町採買，再視體力安排超市或秋葉原。", place: "阿美橫町", places: [{ label: "阿美橫町藥妝", place: "阿美橫町" }, { label: "上野超市", place: "上野 超市" }, { label: "秋葉原 BIC CAMERA", place: "BIC CAMERA 秋葉原" }], tags: [{ text: "必買：藥妝／零食", kind: "buy" }, { text: "Tabelog 上野", kind: "guide" }], source: "https://tabelog.com/en/tokyo/A1311/rstLst.html" },
    ]
  },
  {
    date: "2026-10-06", short: "6", weekday: "二", label: "築地／豐洲／東京車站／澀谷", locationKey: "tokyo", location: "築地／東京",
    intro: "市場早起，接著去豐洲、東京車站與下午備選景點；晚餐當天決定。",
    items: [
      { time: "07:00", type: "transit", label: "提醒", title: "早點起床", copy: "08:00 出發，直接前往築地市場攤販。", place: "上野 → 築地市場", tags: [{ text: "早起", kind: "guide" }, { text: "搭地鐵", kind: "transit" }] },
      { time: "08:00", type: "food", label: "早餐", title: "築地市場攤販逛街小吃", copy: "直接到築地市場邊走邊吃早餐，保留胃口給市場攤販。", place: "築地市場", tags: [{ text: "必吃：玉子燒／海鮮", kind: "must" }, { text: "市場早餐", kind: "guide" }], guide: "早上先逛攤販，不另外安排上野早餐；可依現場排隊狀況彈性選擇。", tabelog: "https://tabelog.com/en/tokyo/A1313/rstLst/" },
      { time: "10:30", type: "attraction", label: "景點", title: "豐洲千客萬來", jp: "場外市場", copy: "搭日本計程車前往豐洲千客萬來·場外市場，留意市場營業時間。", place: "豐洲千客萬來", tags: [{ text: "交通：日本計程車", kind: "transit" }, { text: "市場散步", kind: "guide" }] , guide: "把豐洲千客萬來當成上午第二個市場景點，逛完直接銜接 12:00 午餐。", tabelog: "https://tabelog.com/en/tokyo/A1313/rstLst/" },
      { time: "12:00", type: "food", label: "餐廳", title: "午餐三選一", copy: "市場午餐或改去東京車站吃拉麵，依當天動線決定。", place: "豐洲／東京車站／銀座", places: [{ label: "とんかつ八千代（叉燒荷包蛋定食）", place: "とんかつ八千代" }, { label: "つきぢ神楽寿司（壽司）", place: "つきぢ神楽寿司" }, { label: "東京車站・銀座篝 大手町店", place: "銀座 篝 大手町店" }], tags: [{ text: "限定菜單：火・木・土", kind: "booking" }, { text: "必點：叉燒荷包蛋／壽司／拉麵", kind: "must" }] },
      { time: "14:00", type: "attraction", label: "景點", title: "東京車站／皇居", copy: "皇居禮品部列為必買：真皮皮夾。", place: "東京車站／皇居", places: [{ label: "東京車站", place: "東京車站" }, { label: "皇居", place: "皇居" }, { label: "皇居禮品部・真皮皮夾", place: "皇居 禮品部" }], tags: [{ text: "必買：真皮皮夾", kind: "buy" }, { text: "攻略", kind: "guide" }] },
      { time: "16:00", type: "attraction", label: "景點", title: "表參道／六本木／東京鐵塔公園", copy: "三選一，當天依體力與交通決定；若選六本木，可考慮銀座篝六本木新城店。", place: "表參道／六本木／東京鐵塔", places: [{ label: "表參道", place: "表參道" }, { label: "六本木", place: "六本木" }, { label: "東京鐵塔公園", place: "東京鐵塔" }, { label: "銀座篝 六本木新城店（備選餐廳）", place: "銀座 篝 六本木ヒルズ店" }], tags: [{ text: "當天決定", kind: "neutral" }, { text: "備選餐廳：篝六本木新城店", kind: "guide" }] },
      { time: "18:00", type: "food", label: "餐廳", title: "晚餐三選一", copy: "依當天所在區域選一間，或回淺草吃。", place: "六本木／澀谷／淺草", places: [{ label: "AFURI（柚子鹽拉麵）", place: "AFURI" }, { label: "回し寿司活 西武渋谷店（壽司）", place: "回し寿司活 西武渋谷店" }, { label: "回淺草吃", place: "淺草 餐廳" }], tags: [{ text: "必點：柚子鹽拉麵／壽司", kind: "must" }, { text: "當天決定", kind: "neutral" }] },
      { time: "20:00", type: "attraction", label: "採買", title: "補藥裝／逛超市／秋葉原 BIC CAMERA", copy: "補齊藥妝與伴手禮，視體力安排採買。", place: "上野／秋葉原 BIC CAMERA", places: [{ label: "補藥妝", place: "上野 藥妝" }, { label: "上野超市", place: "上野 超市" }, { label: "秋葉原 BIC CAMERA", place: "BIC CAMERA 秋葉原" }], tags: [{ text: "必買：藥妝／電器", kind: "buy" }] },
    ]
  },
  {
    date: "2026-10-07", short: "7", weekday: "三", label: "上野／成田", locationKey: "narita", location: "成田機場",
    intro: "最後一天把時間留給機場：先完成退房，再穩穩抵達成田。",
    items: [
      { time: "07:00", type: "stay", label: "住宿", title: "辦理退房", copy: "確認護照、錢包、充電器與伴手禮都已收進隨身行李。", place: "PAUL HOUSE 上野館", tags: [{ text: "行李檢查", kind: "guide" }] },
      { time: "09:00", type: "transit", label: "交通", title: "出發前往成田機場", copy: "09:30 前後出發；11:00 抵達機場辦理出境。", place: "上野 → 成田機場", tags: [{ text: "預留交通緩衝", kind: "transit" }] },
      { time: "13:55", type: "transit", label: "交通", title: "亞洲航空 FD235", jp: "成田 NRT → 高雄 KHH", copy: "17:05 抵達高雄；回家後再整理這次旅程。", place: "成田機場", tags: [{ text: "回程", kind: "transit" }] },
    ]
  }
];

const guideNotes = [
  { region: "成田", title: "先吃鰻魚，再走進成田山", story: "成田山新勝寺的本尊是不動明王，寺院沿革可追溯到平安時代；表參道則把參拜、鰻魚飯與老舖伴手禮串在一起。", tactic: "抵達後先看川豐候位，若排隊太長就切到駿河屋；時間有限時把表參道當作單向散步路線。", food: "Tabelog 口袋名單：川豐、駿河屋；必點：鰻重。", souvenir: "必買：米菓、羊羹、鐵砲漬。", tags: [{ text: "必吃", kind: "must" }, { text: "必買", kind: "buy" }, { text: "攻略", kind: "guide" }], links: [{ text: "成田山故事", href: "https://www.naritasan.or.jp/about/" }, { text: "Tabelog 成田", href: "https://tabelog.com/en/chiba/A1204/A120401/rstLst/" }] },
  { region: "河口湖／忍野", title: "富士山要看天氣，不要只看時刻表", story: "天上山與日本昔話《咔嚓咔嚓山》有關；富士山麓的湧水與湖面倒影，讓這一天的景色很吃雲量與風勢。", tactic: "晴天先纜車，湖面無風再拍逆富士；如果視線被雲遮住，就把重心放到忍野八海與御殿場 Outlet。", food: "Tabelog 口袋名單：山麓園、ほうとう不動；必點：爐端燒／ほうとう。", souvenir: "必買：草餅、富士山造型點心、御殿場限定零食。", tags: [{ text: "看天氣", kind: "guide" }, { text: "必吃", kind: "must" }, { text: "必買", kind: "buy" }], links: [{ text: "纜車官方", href: "https://www.mtfujiropeway.jp/en/" }, { text: "Tabelog 河口湖", href: "https://tabelog.com/en/yamanashi/A1903/rstLst/" }] },
  { region: "箱根", title: "火山、湖與黑雞蛋", story: "大涌谷是箱根火山活動留下的地景；蘆之湖、箱根神社與湖畔鳥居則是同一天裡最值得慢下來的段落。", tactic: "先查箱根纜車與海賊船運行狀況；箱根神社可從元箱根港銜接，行李與排隊時間要算進去。", food: "必吃：黑雞蛋、黑咖哩；Tabelog 可用箱根區域排名比較晚餐。", souvenir: "必買：寄木細工、黑玉子相關點心。", tags: [{ text: "交通確認", kind: "transit" }, { text: "必吃", kind: "must" }, { text: "必買", kind: "buy" }], links: [{ text: "箱根交通圖", href: "https://www.hakonenavi.jp/international/en/wp-content/uploads/sites/2/2025/09/traffic-guide-eng-202510.pdf" }, { text: "箱根官方", href: "https://www.hakonenavi.jp/international/en/" }] },
  { region: "淺草／上野", title: "伴手禮與地鐵動線一次完成", story: "雷門是淺草最容易辨認的入口，仲見世一路通往淺草寺本堂；上野則把市場街、藥妝、超市與餐廳集中在步行可串聯的範圍。", tactic: "上午先淺草、午後銀座，晚餐後再回阿美橫町採買；每個購物點只留一個清單目標，避免行李太早失控。", food: "Tabelog 推薦查詢：上野日式料理排名；必點可依當天排隊長度選鴨 to 葱或豬排。", souvenir: "必買：人形燒、雷おこし、零食、藥妝。", tags: [{ text: "必買", kind: "buy" }, { text: "Tabelog", kind: "guide" }, { text: "地鐵", kind: "transit" }], links: [{ text: "淺草寺官方", href: "https://www.senso-ji.jp/" }, { text: "Tabelog 上野", href: "https://tabelog.com/en/tokyo/A1311/rstLst.html" }] },
  { region: "築地／豐洲／東京車站", title: "市場早起，把下午留給皇居與備選景點", story: "築地適合邊走邊吃，豐洲千客萬來則把場外市場與正餐集中在上午；午後再把時間留給東京車站、皇居與表參道或六本木。", tactic: "08:00 直接到築地，10:30 搭日本計程車前往豐洲；兩個市場都不要久留，才能準時接上 12:00 午餐與 14:00 皇居。", food: "Tabelog 口袋名單：築地攤販、つきぢ神楽寿司；午餐可比較とんかつ八千代與銀座篝大手町店。", souvenir: "必買：皇居禮品部真皮皮夾；市場可補乾貨、海苔、調味料與限定零食。", tags: [{ text: "早起攻略", kind: "guide" }, { text: "必吃", kind: "must" }, { text: "必買", kind: "buy" }], links: [{ text: "Tabelog 築地", href: "https://tabelog.com/en/tokyo/A1313/rstLst/" }, { text: "Tabelog 東京灣", href: "https://tabelog.com/en/tokyo/A1313/rstLst/" }] }
];

const locations = {
  narita: { name: "成田", lat: 35.7767, lon: 140.3189 },
  kawaguchiko: { name: "河口湖", lat: 35.517, lon: 138.755 },
  hakone: { name: "箱根", lat: 35.232, lon: 139.106 },
  tokyo: { name: "東京", lat: 35.6762, lon: 139.6503 }
};

const weatherLabels = {
  0: ["晴朗", "☀"], 1: ["大致晴朗", "🌤"], 2: ["局部多雲", "⛅"], 3: ["陰天", "☁"],
  45: ["有霧", "〰"], 48: ["霧凇", "〰"], 51: ["細雨", "☂"], 53: ["細雨", "☂"], 55: ["細雨", "☂"],
  61: ["小雨", "☂"], 63: ["中雨", "☂"], 65: ["大雨", "☂"], 71: ["小雪", "❄"], 73: ["降雪", "❄"], 75: ["大雪", "❄"],
  80: ["陣雨", "☂"], 81: ["陣雨", "☂"], 82: ["強陣雨", "☂"], 95: ["雷雨", "⚡"], 96: ["雷雨", "⚡"], 99: ["雷雨", "⚡"]
};
const weatherHours = [6, 8, 10, 12, 14, 16, 18, 20, 22];

const state = {
  view: "itinerary",
  selectedDate: days[0].date,
  weather: load("tokyo-trip-weather", {}),
  notes: load("tokyo-trip-notes", {}),
  mapsApiKey: load("tokyo-trip-maps-key", ""),
  geocodes: load("tokyo-trip-geocodes", {}),
  expenses: load("tokyo-trip-expenses", []),
  reservations: load("tokyo-trip-reservations", { hotel: "", yakiniku: "" })
};

const main = document.querySelector("#app-main");
const toast = document.querySelector("#toast");
let toastTimer;
let mapsApiPromise;
let photoDbPromise;

function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}

function save(key, value) { localStorage.setItem(key, JSON.stringify(value)); }

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function mapsSearchUrl(place) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place + ", Japan")}`;
}

function directionsUrl(place, transit = false) {
  const mode = transit ? "&travelmode=transit" : "";
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place + ", Japan")}${mode}`;
}

function tagHtml(tag) { return `<span class="tag tag-${tag.kind}">${escapeHtml(tag.text)}</span>`; }

function photoKey(date, index) { return `${date}:${index}`; }

function openPhotoDb() {
  if (photoDbPromise) return photoDbPromise;
  photoDbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open("tokyo-trip-photos", 1);
    request.onupgradeneeded = () => request.result.createObjectStore("photos", { keyPath: "key" });
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  return photoDbPromise;
}

async function getPhoto(key) {
  const db = await openPhotoDb();
  return new Promise((resolve, reject) => {
    const request = db.transaction("photos").objectStore("photos").get(key);
    request.onsuccess = () => resolve(request.result?.blob || null);
    request.onerror = () => reject(request.error);
  });
}

async function putPhoto(key, blob) {
  const db = await openPhotoDb();
  return new Promise((resolve, reject) => {
    const request = db.transaction("photos", "readwrite").objectStore("photos").put({ key, blob });
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

async function cropPhoto(file) {
  let source;
  let objectUrl;
  let bitmap;
  try {
    bitmap = await createImageBitmap(file);
    source = bitmap;
  } catch {
    objectUrl = URL.createObjectURL(file);
    source = await new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = objectUrl;
    });
  }
  const width = source.width || source.naturalWidth;
  const height = source.height || source.naturalHeight;
  const cropWidth = Math.min(width, height * 4 / 3);
  const cropHeight = cropWidth * 3 / 4;
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 480;
  const context = canvas.getContext("2d");
  context.drawImage(source, (width - cropWidth) / 2, (height - cropHeight) / 2, cropWidth, cropHeight, 0, 0, 640, 480);
  bitmap?.close();
  if (objectUrl) URL.revokeObjectURL(objectUrl);
  return new Promise((resolve, reject) => canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error("image export failed")), "image/jpeg", .86));
}

function renderMapPanel(day) {
  const places = day.items.flatMap(item => {
    if (item.type === "transit") return [];
    return (item.places || [{ label: item.title, place: item.place }]).map(place => ({ ...place, time: item.time }));
  }).filter(place => place.place).filter((place, index, all) => all.findIndex(candidate => candidate.place === place.place) === index);
  const links = places.map(place => `<a class="map-stop-link" href="${escapeHtml(mapsSearchUrl(place.place))}" target="_blank" rel="noreferrer"><span>${escapeHtml(place.time)}</span>${escapeHtml(place.label)}</a>`).join("");
  return `<section class="map-panel" aria-label="${escapeHtml(day.date)}行程地圖">
    <div class="map-heading"><div><p class="kicker">TODAY'S MAP</p><h2>${escapeHtml(day.short)}日・${escapeHtml(day.label)}</h2></div><span>${places.length} 個地點</span></div>
    ${state.mapsApiKey ? `<div id="trip-map" class="map-canvas" role="region" aria-label="${escapeHtml(day.date)} Google 地圖"></div><p class="map-message" id="map-message" aria-live="polite">正在載入 Google 地圖…</p>` : `<div class="map-unavailable"><div class="map-unavailable-copy"><span class="map-pin" aria-hidden="true">⌖</span><strong>互動地圖尚未啟用</strong><span>先設定 Google Maps API 金鑰，就能在地圖上標出當日地點。</span><button class="action-button subtle" type="button" data-action="open-map-settings">設定地圖</button></div><div class="map-stops" aria-label="今日地點，點選開啟 Google Maps">${links}</div></div>`}
    ${state.mapsApiKey ? `<div class="map-stop-strip">${links}</div>` : ""}
  </section>`;
}

function mapPlacesForDay(day) {
  return day.items.flatMap(item => item.type === "transit" ? [] : (item.places || [{ label: item.title, place: item.place }]).filter(entry => entry.place).map(entry => ({ ...entry, time: item.time })));
}

function loadGoogleMapsApi(key) {
  if (window.google?.maps) return Promise.resolve();
  if (mapsApiPromise) return mapsApiPromise;
  mapsApiPromise = new Promise((resolve, reject) => {
    window.__tripMapsReady = resolve;
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&callback=__tripMapsReady&loading=async`;
    script.onerror = () => reject(new Error("Google Maps could not be loaded"));
    document.head.append(script);
  });
  return mapsApiPromise;
}

async function mountGoogleMap(day) {
  const container = document.querySelector("#trip-map");
  if (!container || !state.mapsApiKey) return;
  const message = document.querySelector("#map-message");
  try {
    await loadGoogleMapsApi(state.mapsApiKey);
    if (!container.isConnected) return;
    const map = new google.maps.Map(container, {
      center: { lat: 35.6812, lng: 139.7671 }, zoom: 11, mapTypeControl: false,
      streetViewControl: false, fullscreenControl: false, clickableIcons: true
    });
    const bounds = new google.maps.LatLngBounds();
    const places = mapPlacesForDay(day).filter((place, index, all) => all.findIndex(candidate => candidate.place === place.place) === index);
    const geocoder = new google.maps.Geocoder();
    let placed = 0;
    await Promise.all(places.map(place => new Promise(resolve => {
      const addMarker = position => {
        const marker = new google.maps.Marker({ map, position, title: place.label });
        const info = new google.maps.InfoWindow({ content: `<strong>${escapeHtml(place.time)} · ${escapeHtml(place.label)}</strong>` });
        marker.addListener("click", () => info.open({ map, anchor: marker }));
        bounds.extend(position);
        placed += 1;
      };
      const cached = state.geocodes[place.place];
      if (cached) {
        addMarker(new google.maps.LatLng(cached.lat, cached.lng));
        resolve();
        return;
      }
      geocoder.geocode({ address: `${place.place}, Japan` }, (results, status) => {
        if (status === "OK" && results[0] && container.isConnected) {
          const position = results[0].geometry.location;
          state.geocodes[place.place] = { lat: position.lat(), lng: position.lng() };
          addMarker(position);
        }
        resolve();
      });
    })));
    save("tokyo-trip-geocodes", state.geocodes);
    if (!container.isConnected) return;
    if (placed) {
      map.fitBounds(bounds);
      if (placed === 1) map.setZoom(14);
      if (message) message.hidden = true;
    } else if (message) message.textContent = "無法辨識這天的地點，仍可點選下方地名開啟 Google Maps。";
  } catch {
    if (message) message.textContent = "Google 地圖載入失敗，請確認 API 金鑰與網域限制設定。";
  }
}

function placeLinks(item) {
  const places = item.places || [{ label: item.title, place: item.place }];
  return `<h3 class="place-list">${places.map(({ label, place }) => `<span class="place-option"><a class="place-link" href="${escapeHtml(mapsSearchUrl(place))}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a></span>`).join("")}</h3>`;
}

function weatherFor(day) {
  const fallback = { label: "等待更新", symbol: "◌", temp: "--", high: "--", low: "--", rain: "--", fetchedAt: "尚未取得", hourly: [] };
  return state.weather[day.date] ? { ...fallback, ...state.weather[day.date], hourly: state.weather[day.date].hourly || [] } : fallback;
}

function weatherScene(weather) {
  const label = weather.label || "";
  if (/雨|雷/.test(label)) return `<svg class="weather-scene" viewBox="0 0 800 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="rain-sky" x2="0" y2="1"><stop stop-color="#8aa5ad"/><stop offset="1" stop-color="#d7ded7"/></linearGradient></defs><rect width="800" height="360" fill="url(#rain-sky)"/><path d="M0 265 Q170 190 340 268 T800 245 V360 H0Z" fill="#7e9a8a"/><path d="M0 305 Q220 230 430 306 T800 275 V360 H0Z" fill="#526f67"/><g fill="#f4f5f0" opacity=".92"><ellipse cx="360" cy="115" rx="90" ry="33"/><ellipse cx="425" cy="105" rx="67" ry="42"/><ellipse cx="480" cy="120" rx="66" ry="28"/></g><g stroke="#ecf5f4" stroke-width="5" stroke-linecap="round" opacity=".7"><path d="M355 163l-10 22M405 167l-10 22M455 165l-10 22M505 161l-10 22"/></g></svg>`;
  if (/雪/.test(label)) return `<svg class="weather-scene" viewBox="0 0 800 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="800" height="360" fill="#c5d8dc"/><circle cx="610" cy="84" r="39" fill="#f8f2dd"/><path d="M0 250 Q180 180 360 250 T800 235 V360 H0Z" fill="#e9eee7"/><path d="M0 300 Q200 225 420 300 T800 270 V360 H0Z" fill="#d7e2dd"/><g fill="#fff" opacity=".8"><circle cx="270" cy="90" r="4"/><circle cx="430" cy="65" r="5"/><circle cx="540" cy="165" r="4"/><circle cx="685" cy="205" r="5"/><circle cx="180" cy="190" r="4"/></g></svg>`;
  if (/晴/.test(label)) return `<svg class="weather-scene" viewBox="0 0 800 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="clear-sky" x2="0" y2="1"><stop stop-color="#9bc8d1"/><stop offset="1" stop-color="#e6dfc6"/></linearGradient></defs><rect width="800" height="360" fill="url(#clear-sky)"/><circle cx="620" cy="82" r="43" fill="#f3d28c"/><path d="M0 252 Q170 190 350 260 T800 235 V360 H0Z" fill="#8ca99a"/><path d="M0 300 Q220 230 430 304 T800 270 V360 H0Z" fill="#627f70"/><g fill="#fffdf2" opacity=".84"><ellipse cx="220" cy="127" rx="65" ry="18"/><ellipse cx="276" cy="124" rx="42" ry="25"/></g></svg>`;
  return `<svg class="weather-scene" viewBox="0 0 800 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="cloud-sky" x2="0" y2="1"><stop stop-color="#abbec2"/><stop offset="1" stop-color="#e5e0d2"/></linearGradient></defs><rect width="800" height="360" fill="url(#cloud-sky)"/><circle cx="630" cy="82" r="34" fill="#efe4c5" opacity=".7"/><g fill="#f3f3ed" opacity=".86"><ellipse cx="330" cy="116" rx="85" ry="29"/><ellipse cx="395" cy="105" rx="61" ry="39"/><ellipse cx="454" cy="121" rx="69" ry="27"/></g><path d="M0 258 Q170 190 340 260 T800 240 V360 H0Z" fill="#92a99a"/><path d="M0 305 Q210 230 430 306 T800 275 V360 H0Z" fill="#637f70"/></svg>`;
}

function renderWeather(day) {
  const weather = weatherFor(day);
  const hourly = weather.hourly.length ? weather.hourly : weatherHours.map(hour => ({ time: `${String(hour).padStart(2, "0")}:00`, temp: "--", symbol: "◌", label: "等待更新", rain: "--", pending: true }));
  return `<section class="weather-panel" aria-label="${escapeHtml(day.location)}天氣">
    ${weatherScene(weather)}<div class="weather-content"><div class="weather-head"><div class="weather-copy"><div class="weather-place">${escapeHtml(day.location)} · ${escapeHtml(day.date.slice(5).replace("-", "/"))}</div>
    <div class="weather-summary">${escapeHtml(weather.label)}</div>
    <div class="weather-meta">最高 ${escapeHtml(weather.high)}°／最低 ${escapeHtml(weather.low)}° · ${escapeHtml(weather.fetchedAt)}</div></div>
    <div class="weather-temp"><span class="weather-symbol" aria-hidden="true">${escapeHtml(weather.symbol)}</span><strong>${escapeHtml(weather.temp)}°</strong><span class="current-rain">雨 ${escapeHtml(weather.rain)}%</span></div>
    </div><div class="hourly-title">每兩小時預報 · 06:00 — 22:00</div><div class="hourly-scroll" aria-label="每兩小時氣溫預報">${hourly.map(slot => `<div class="hourly-card ${slot.pending ? "is-pending" : ""}" aria-label="${escapeHtml(slot.time)} ${escapeHtml(slot.label)} ${escapeHtml(slot.temp)} 度，降雨 ${escapeHtml(slot.rain)}%"><span class="hourly-time">${escapeHtml(slot.time)}</span><span class="hourly-icon" aria-hidden="true">${escapeHtml(slot.symbol)}</span><strong class="hourly-temp">${escapeHtml(slot.temp)}°</strong><span class="hourly-rain">雨 ${escapeHtml(slot.rain)}%</span></div>`).join("")}</div><button class="weather-refresh" type="button" data-action="refresh-weather">更新天氣</button></div>
  </section>`;
}

function renderDayButtons() {
  return `<div class="day-scroller" role="tablist" aria-label="選擇旅程日期">${days.map(day => `<button class="day-button ${day.date === state.selectedDate ? "is-selected" : ""}" type="button" role="tab" aria-selected="${day.date === state.selectedDate}" data-date="${day.date}"><span class="day-month">10月</span><strong class="day-number">${day.short}</strong><small>${day.weekday}</small></button>`).join("")}</div>`;
}

function renderScheduleCard(item, index) {
  const detailId = `detail-${state.selectedDate}-${index}`;
  const key = photoKey(state.selectedDate, index);
  const inputId = `photo-${state.selectedDate}-${index}`;
  const tags = (item.tags || []).map(tagHtml).join("");
  const isPlaceCard = item.type === "food" || item.type === "attraction";
  const actions = isPlaceCard
    ? [`<button class="action-button subtle" type="button" data-action="toggle-detail" data-detail="${detailId}" aria-expanded="false" aria-controls="${detailId}">看筆記</button>`]
    : [
      `<a class="action-link primary" href="${directionsUrl(item.place)}" target="_blank" rel="noreferrer">導航</a>`,
      `<a class="action-link subtle" href="${directionsUrl(item.place, true)}" target="_blank" rel="noreferrer">地鐵轉乘</a>`,
      `<button class="action-button subtle" type="button" data-action="toggle-detail" data-detail="${detailId}" aria-expanded="false" aria-controls="${detailId}">看筆記</button>`
    ];
  const links = [item.tabelog ? `<a class="source-link" href="${item.tabelog}" target="_blank" rel="noreferrer">查看 Tabelog 推薦</a>` : "", item.source ? `<a class="source-link" href="${item.source}" target="_blank" rel="noreferrer">官方攻略</a>` : ""].filter(Boolean).join(" · ");
  const note = state.notes[key] ?? item.guide ?? "已將這個地點放進今日動線；可補充備註，點選店家或景點名稱即可開啟 Google Maps。";
  return `<div class="timeline-row type-${escapeHtml(item.type)}"><time class="timeline-time">${escapeHtml(item.time)}</time><article class="schedule-card type-${escapeHtml(item.type)}">
    <div class="schedule-layout"><div class="schedule-info"><div class="card-topline"><span class="type-pill">${escapeHtml(item.label)}</span></div>
    ${isPlaceCard ? placeLinks(item) : `<h3>${escapeHtml(item.title)}</h3>`}${item.jp ? `<p class="jp-name">${escapeHtml(item.jp)}</p>` : ""}
    <p class="card-copy">${escapeHtml(item.copy)}</p><div class="card-tags">${tags}</div><div class="card-actions">${actions.join("")}</div>
    <div class="card-detail" id="${detailId}" hidden><label class="note-label" for="note-${state.selectedDate}-${index}">我的筆記</label><textarea class="note-editor" id="note-${state.selectedDate}-${index}" data-note-key="${escapeHtml(key)}" rows="3">${escapeHtml(note)}</textarea><span class="note-saved">自動保存在這台裝置</span>${links ? `<div class="note-links">${links}</div>` : ""}</div></div>
    <div class="photo-slot"><button class="photo-button" type="button" data-action="open-photo" data-input="${inputId}" aria-label="為${escapeHtml(item.title)}新增或更換照片"><img class="photo-preview" data-photo-preview="${escapeHtml(key)}" alt="" hidden><span class="photo-placeholder"><span aria-hidden="true">＋</span><small>加照片</small></span></button><input id="${inputId}" class="photo-input" type="file" accept="image/*" data-photo-input="${escapeHtml(key)}" hidden></div></div>
  </article></div>`;
}

function renderItinerary() {
  const day = days.find(entry => entry.date === state.selectedDate) || days[0];
  main.innerHTML = `${renderMapPanel(day)}${renderDayButtons()}${renderWeather(day)}
    <div class="section-heading"><div><p class="kicker">${escapeHtml(day.date.slice(5).replace("-", "/"))} · ${escapeHtml(day.weekday)}</p><h2>今日行程</h2></div><p>${day.items.length} 個節點</p></div>
    <section class="timeline" aria-label="${escapeHtml(day.date)}行程時間軸">${day.items.map(renderScheduleCard).join("")}</section>`;
  mountGoogleMap(day);
  hydratePhotos();
}

async function hydratePhotos() {
  const previews = [...main.querySelectorAll("[data-photo-preview]")];
  await Promise.all(previews.map(async preview => {
    try {
      const blob = await getPhoto(preview.dataset.photoPreview);
      if (!blob || !preview.isConnected) return;
      preview.src = URL.createObjectURL(blob);
      preview.hidden = false;
      preview.parentElement.querySelector(".photo-placeholder").hidden = true;
    } catch { /* Keep the add-photo placeholder available. */ }
  }));
}

function renderGuide() {
  main.innerHTML = `<div class="view-hero"><p class="kicker">GUIDE NOTES · 導遊職責</p><h2>把景點，變成有故事的路線。</h2><p>這裡收進景點背景、動線攻略、Tabelog 查詢、必點菜單與伴手禮；預約類資訊用朱砂色特別標記。</p></div>
    <section class="guide-grid" aria-label="導遊筆記">${guideNotes.map(note => `<article class="guide-card"><p class="guide-region">${escapeHtml(note.region)}</p><h3>${escapeHtml(note.title)}</h3><div class="guide-tags">${note.tags.map(tagHtml).join("")}</div><p><strong>故事：</strong>${escapeHtml(note.story)}</p><p><strong>攻略：</strong>${escapeHtml(note.tactic)}</p><p><strong>美食：</strong>${escapeHtml(note.food)}</p><p><strong>伴手禮：</strong>${escapeHtml(note.souvenir)}</p><div class="guide-links">${note.links.map(link => `<a class="action-link subtle" href="${link.href}" target="_blank" rel="noreferrer">${escapeHtml(link.text)}</a>`).join("")}</div></article>`).join("")}</section>`;
}

function renderTools() {
  const total = state.expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
  const expenseRows = state.expenses.length ? state.expenses.slice().reverse().map(expense => `<div class="expense-row"><div class="expense-info"><strong>${escapeHtml(expense.item)}</strong><span>${escapeHtml(expense.category)} · ${escapeHtml(expense.date)}</span></div><span class="expense-amount">${Number(expense.amount).toLocaleString()} ${escapeHtml(expense.currency)}</span><button class="delete-expense" type="button" data-action="delete-expense" data-id="${escapeHtml(expense.id)}" aria-label="刪除 ${escapeHtml(expense.item)}">刪除</button></div>`).join("") : `<p class="empty-note">還沒有記帳，先記下第一筆旅費吧。</p>`;
  main.innerHTML = `<div class="view-hero"><p class="kicker">TRIP TOOLS · 行前與旅中</p><h2>重要的事，放在手邊。</h2><p>航班、住宿、緊急電話與花費都能在手機上快速查看；預約代號只保存在這台裝置。</p></div>
    <div class="tool-stack">
      <section class="tool-card map-settings" id="map-settings"><h3>Google 地圖設定 <span>互動地圖</span></h3><p>互動地圖需要 Google Maps API 金鑰；請在 Google Cloud 啟用 Maps JavaScript API 與 Geocoding API，並為金鑰限制可用 API、網站來源與用量預算。Google Maps 依用量計費；已定位的地點會存在本機，切換日期時不會重複查地址。金鑰只保存在這台裝置，不會上傳到 GitHub；正式網站與其他手機需各自設定。GitHub Pages 來源可設為 <code>https://mariajackal.github.io/*</code>。</p><div class="map-key-row"><label for="maps-api-key">Google Maps API 金鑰</label><input class="field" id="maps-api-key" type="password" autocomplete="off" value="${escapeHtml(state.mapsApiKey)}" placeholder="貼上 API 金鑰"><button class="expense-submit" type="button" data-action="save-map-key">保存金鑰</button></div><div class="guide-links"><a class="source-link" href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank" rel="noreferrer">官方金鑰設定</a><a class="source-link" href="https://developers.google.com/maps/billing-and-pricing/pricing" target="_blank" rel="noreferrer">官方用量與費率</a></div></section>
      <section class="tool-card"><h3>航班資訊 <span>FD234 / FD235</span></h3><p>亞洲航空 · 去回程</p>
        <div class="flight-row"><div class="flight-direction">去程<strong>08:05</strong><span>KHH 高雄</span></div><div class="flight-arrow" aria-hidden="true">→</div><div class="flight-meta">10/02（五）<strong>12:55</strong><span>NRT 成田</span></div></div>
        <div class="flight-row"><div class="flight-direction">回程<strong>13:55</strong><span>NRT 成田</span></div><div class="flight-arrow" aria-hidden="true">→</div><div class="flight-meta">10/07（三）<strong>17:05</strong><span>KHH 高雄</span></div></div>
      </section>
      <section class="tool-card"><h3>住宿資訊 <span>2 間</span></h3><p>住宿名稱先整理好，確認號可自行補上。</p>
        <div class="stay-row"><div class="stay-date">10/02<br>— 10/04</div><div><div class="stay-name">Dormy Inn Express Fujisan Gotemba</div><div class="stay-note">御殿場 · 溫泉 · 行程前段</div></div></div>
        <div class="stay-row"><div class="stay-date">10/04<br>— 10/07</div><div><div class="stay-name">PAUL HOUSE 上野館</div><div class="stay-note">上野 · 東京市區 · 行程後段</div></div></div>
        <div class="reservation-grid"><div class="reservation-field"><label class="reservation-label" for="hotel-code">住宿確認代號</label><input class="field" id="hotel-code" data-reservation="hotel" value="${escapeHtml(state.reservations.hotel)}" placeholder="尚未填寫" /></div><div class="reservation-field"><label class="reservation-label" for="yakiniku-code">房家預約代號</label><input class="field" id="yakiniku-code" data-reservation="yakiniku" value="${escapeHtml(state.reservations.yakiniku)}" placeholder="已預約 18:30，可補代號" /></div></div>
      </section>
      <section class="tool-card"><h3>緊急聯絡 <span>日本</span></h3><p>需要時直接點號碼撥打；資料依日本政府觀光局與外交部公開資訊整理。</p>
        <div class="emergency-list"><div class="emergency-item"><span>警察</span><strong><a href="tel:110">110</a></strong></div><div class="emergency-item"><span>消防／救護車</span><strong><a href="tel:119">119</a></strong></div><div class="emergency-item"><span>JNTO 旅客熱線・24 小時・中文支援</span><strong><a href="tel:05038162787">050-3816-2787</a></strong></div><div class="emergency-item"><span>駐日代表處夜間急難救助</span><strong><a href="tel:08010097179">080-1009-7179</a></strong></div></div>
        <p class="emergency-source"><a class="source-link" href="https://www.japan.travel/hk/plan/hotline/" target="_blank" rel="noreferrer">JNTO 官方說明</a> · <a class="source-link" href="https://www.mofa.gov.tw/CountryInfo.aspx?CASN=5&n=487&s=142&sms=33&tabs=C733D2CF4B347A14" target="_blank" rel="noreferrer">外交部駐日資訊</a></p>
      </section>
      <section class="tool-card"><h3>記帳／預算 <span>JPY</span></h3><p>資料只保存在本機；可在旅途中快速加一筆。</p>
        <form class="expense-form" id="expense-form"><label for="expense-item">項目</label><input class="field" id="expense-item" name="item" placeholder="例如：成田鰻魚飯" required /><label for="expense-amount">金額</label><input class="field" id="expense-amount" name="amount" type="number" inputmode="decimal" min="0" step="1" placeholder="¥" required /><label for="expense-category">分類</label><select class="field" id="expense-category" name="category"><option>餐飲</option><option>交通</option><option>購物</option><option>住宿</option><option>門票</option><option>其他</option></select><label for="expense-currency">幣別</label><select class="field" id="expense-currency" name="currency"><option>JPY</option><option>TWD</option></select><button class="expense-submit" type="submit">加入</button></form>
        <div class="budget-total"><span>目前已記帳</span><strong>¥${total.toLocaleString()}</strong></div><div class="expense-list">${expenseRows}</div>
      </section>
    </div>`;
}

function render() {
  if (state.view === "guide") renderGuide();
  else if (state.view === "tools") renderTools();
  else renderItinerary();
  document.querySelector(".app-shell").classList.toggle("is-itinerary", state.view === "itinerary");
  document.querySelectorAll(".tab-button").forEach(button => {
    const active = button.dataset.view === state.view;
    button.classList.toggle("is-active", active);
    if (active) button.setAttribute("aria-current", "page"); else button.removeAttribute("aria-current");
  });
}

function notify(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

async function copyText(value, label) {
  try { await navigator.clipboard.writeText(value); notify(`${label}已複製`); }
  catch { notify("目前無法複製，請長按電話或文字"); }
}

function formatTemp(value) { return Number.isFinite(Number(value)) ? Math.round(Number(value)) : "--"; }

async function fetchWeather() {
  notify("正在更新旅程天氣…");
  const today = new Date();
  const latestForecastDate = new Date(today);
  latestForecastDate.setDate(today.getDate() + 15);
  const todayString = today.toISOString().slice(0, 10);
  const latestForecastString = latestForecastDate.toISOString().slice(0, 10);
  const targets = days.filter(day => day.date >= todayString && day.date <= latestForecastString);
  const results = await Promise.all(targets.map(async day => {
    const location = locations[day.locationKey];
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&hourly=temperature_2m,weather_code,precipitation_probability&timezone=Asia%2FTokyo&start_date=${day.date}&end_date=${day.date}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("weather request failed");
      const data = await response.json();
      const [label, symbol] = weatherLabels[data.daily.weather_code[0]] || ["天氣變化", "◌"];
      const hourly = weatherHours.map(hour => {
        const time = `${day.date}T${String(hour).padStart(2, "0")}:00`;
        const index = data.hourly?.time?.indexOf(time) ?? -1;
        if (index < 0) return { time: `${String(hour).padStart(2, "0")}:00`, temp: "--", symbol: "◌", label: "等待更新", rain: "--", pending: true };
        const [hourLabel, hourSymbol] = weatherLabels[data.hourly.weather_code[index]] || ["天氣變化", "◌"];
        return { time: `${String(hour).padStart(2, "0")}:00`, temp: formatTemp(data.hourly.temperature_2m[index]), symbol: hourSymbol, label: hourLabel, rain: formatTemp(data.hourly.precipitation_probability[index]) };
      });
      return { date: day.date, weather: { label, symbol, temp: formatTemp((data.daily.temperature_2m_max[0] + data.daily.temperature_2m_min[0]) / 2), high: formatTemp(data.daily.temperature_2m_max[0]), low: formatTemp(data.daily.temperature_2m_min[0]), rain: formatTemp(data.daily.precipitation_probability_max[0]), fetchedAt: `更新於 ${new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" })}`, hourly } };
    } catch { return { date: day.date, weather: null }; }
  }));
  results.forEach(({ date, weather }) => { if (weather) state.weather[date] = weather; });
  save("tokyo-trip-weather", state.weather);
  render();
  const hasWeather = Object.keys(state.weather).length > 0;
  notify(hasWeather ? "天氣已更新" : "暫時無法取得天氣，稍後可再試");
}

document.addEventListener("click", event => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) { state.view = viewButton.dataset.view; render(); main.focus(); return; }
  const dateButton = event.target.closest("[data-date]");
  if (dateButton) { state.selectedDate = dateButton.dataset.date; state.view = "itinerary"; render(); return; }
  const action = event.target.closest("[data-action]");
  if (!action) return;
  if (action.dataset.action === "toggle-detail") {
    const detail = document.getElementById(action.dataset.detail);
    const expanded = action.getAttribute("aria-expanded") === "true";
    action.setAttribute("aria-expanded", String(!expanded));
    action.textContent = expanded ? "看筆記" : "收起筆記";
    detail.hidden = expanded;
  }
  if (action.dataset.action === "open-photo") document.getElementById(action.dataset.input)?.click();
  if (action.dataset.action === "open-map-settings") {
    state.view = "tools";
    render();
    document.querySelector("#map-settings")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (action.dataset.action === "save-map-key") {
    const input = document.querySelector("#maps-api-key");
    const key = input.value.trim();
    if (!key) { notify("請先貼上 Google Maps API 金鑰"); return; }
    const changed = state.mapsApiKey && state.mapsApiKey !== key;
    state.mapsApiKey = key;
    save("tokyo-trip-maps-key", key);
    notify("金鑰已保存在本機" + (changed ? "，即將重新載入地圖" : "，切回行程即可載入地圖"));
    if (changed) setTimeout(() => location.reload(), 700);
  }
  if (action.dataset.action === "refresh-weather") fetchWeather();
  if (action.dataset.action === "delete-expense") { state.expenses = state.expenses.filter(item => item.id !== action.dataset.id); save("tokyo-trip-expenses", state.expenses); render(); notify("已刪除這筆記帳"); }
});

document.addEventListener("submit", event => {
  if (event.target.id !== "expense-form") return;
  event.preventDefault();
  const form = new FormData(event.target);
  const expense = { id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), item: form.get("item"), amount: Number(form.get("amount")), category: form.get("category"), currency: form.get("currency"), date: new Date().toLocaleDateString("zh-TW") };
  if (!expense.item || !expense.amount) return;
  state.expenses.push(expense); save("tokyo-trip-expenses", state.expenses); render(); notify("已加入記帳");
});

document.addEventListener("change", event => {
  const photoInput = event.target.closest("[data-photo-input]");
  if (photoInput?.files?.[0]) {
    const file = photoInput.files[0];
    const key = photoInput.dataset.photoInput;
    cropPhoto(file).then(blob => putPhoto(key, blob)).then(async () => {
      const preview = photoInput.closest(".photo-slot").querySelector("[data-photo-preview]");
      preview.src = URL.createObjectURL(await getPhoto(key));
      preview.hidden = false;
      preview.parentElement.querySelector(".photo-placeholder").hidden = true;
      notify("照片已裁切為 4:3 並保存在本機");
    }).catch(() => notify("照片無法讀取，請換一張圖片再試"));
    photoInput.value = "";
    return;
  }
  const input = event.target.closest("[data-reservation]");
  if (!input) return;
  state.reservations[input.dataset.reservation] = input.value;
  save("tokyo-trip-reservations", state.reservations);
  notify("預約資料已保存在本機");
});

document.addEventListener("input", event => {
  const editor = event.target.closest("[data-note-key]");
  if (!editor) return;
  state.notes[editor.dataset.noteKey] = editor.value;
  save("tokyo-trip-notes", state.notes);
});

render();
fetchWeather();
if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js?v=20260927-ui4", { scope: "./" }).catch(() => {});
