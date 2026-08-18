(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:1,category:`家計管理`,level:1,question:`生活防衛資金とは？`,choices:[`病気・失業・急な出費に備える現金`,`投資だけに使うお金`,`住宅ローンの頭金`,`毎月必ず使い切るお金`],answer:0,explanation:`生活防衛資金は、急な出費や収入減少に備えて、すぐ使える形で持つお金です。`},{id:2,category:`家計管理`,level:1,question:`家計改善で最初に見直すと効果が続きやすいものは？`,choices:[`固定費`,`財布の色`,`年1回の旅行`,`たまの外食`],answer:0,explanation:`家賃・通信費・保険料などの固定費は、一度見直すと毎月の効果が続きます。`},{id:3,category:`家計管理`,level:1,question:`固定費にあたるものはどれ？`,choices:[`家賃`,`臨時のプレゼント代`,`旅行代`,`宝くじ代`],answer:0,explanation:`毎月ほぼ一定額で発生する家賃などが固定費です。`},{id:4,category:`家計管理`,level:1,question:`変動費にあたるものはどれ？`,choices:[`食費`,`家賃`,`住宅ローン返済額`,`定額通信料`],answer:0,explanation:`食費や交際費など、月によって金額が変わりやすい支出が変動費です。`},{id:5,category:`家計管理`,level:1,question:`先取り貯蓄とは？`,choices:[`収入が入ったら先に貯蓄すること`,`月末に余ったら貯蓄すること`,`借金して貯蓄すること`,`毎月全部使うこと`],answer:0,explanation:`収入を受け取った時点で先に貯蓄分を分ける方法です。`},{id:6,category:`家計管理`,level:1,question:`家計簿をつける主な目的は？`,choices:[`お金の流れを見える化する`,`支出を増やす`,`税金をゼロにする`,`収入を隠す`],answer:0,explanation:`収入と支出を把握し、改善点を見つけるために使います。`},{id:7,category:`家計管理`,level:1,question:`黒字家計とはどんな状態？`,choices:[`収入が支出を上回っている`,`支出が収入を上回っている`,`貯蓄がゼロ`,`借金がある`],answer:0,explanation:`収入から支出を引いた金額がプラスなら黒字です。`},{id:8,category:`家計管理`,level:1,question:`資産形成の基本的な順番として適切なのは？`,choices:[`家計を整え、余剰資金を作り、投資する`,`最初から全額を投資する`,`借金を増やして投資する`,`収支を確認せずに投資する`],answer:0,explanation:`まず家計を整え、生活防衛資金を確保してから余剰資金で投資するのが基本です。`},{id:9,category:`家計管理`,level:1,question:`緊急時に備えるお金の置き場所として基本なのは？`,choices:[`すぐ引き出せる預金`,`値動きの大きい資産`,`売却に時間がかかる不動産`,`全部仮想通貨`],answer:0,explanation:`必要なときすぐ使える普通預金などが基本です。`},{id:10,category:`家計管理`,level:1,question:`家計の赤字が続くと起こりやすいことは？`,choices:[`貯蓄が減る`,`必ず資産が増える`,`税金がなくなる`,`支出が自動で減る`],answer:0,explanation:`赤字分を貯蓄や借入で補うため、資産形成が難しくなります。`},{id:11,category:`貯蓄・複利`,level:1,question:`複利とは？`,choices:[`利益がさらに利益を生む仕組み`,`毎月必ず配当が出る仕組み`,`元本が絶対に減らない仕組み`,`税金がかからない仕組み`],answer:0,explanation:`運用で得た利益を再投資し、その利益にも収益がつく仕組みです。`},{id:12,category:`貯蓄・複利`,level:1,question:`単利とは？`,choices:[`元本だけに利息がつく仕組み`,`利息にも利息がつく仕組み`,`元本が毎年倍になる仕組み`,`税金がゼロになる仕組み`],answer:0,explanation:`単利では、当初の元本に対してのみ利息が計算されます。`},{id:13,category:`貯蓄・複利`,level:1,question:`複利効果を高めやすいものは？`,choices:[`長い運用期間`,`頻繁な売買`,`高い手数料`,`利益をすぐ全部使うこと`],answer:0,explanation:`運用期間が長いほど、利益が利益を生む時間が増えます。`},{id:14,category:`貯蓄・複利`,level:1,question:`積立投資のメリットは？`,choices:[`購入時期を分散できる`,`必ず利益が出る`,`価格変動がなくなる`,`税金がゼロになる`],answer:0,explanation:`定期的に買うことで、高値だけで買うリスクを抑えやすくなります。`},{id:15,category:`貯蓄・複利`,level:1,question:`貯蓄率とは？`,choices:[`収入のうち貯蓄に回した割合`,`支出のうち食費の割合`,`投資の利益率`,`税金の割合`],answer:0,explanation:`収入に対して、どれだけ貯蓄できたかを表す割合です。`},{id:16,category:`貯蓄・複利`,level:1,question:`貯蓄を続けやすくする方法は？`,choices:[`自動積立を使う`,`毎月気分で決める`,`余ったら貯める`,`全部使ってから考える`],answer:0,explanation:`自動積立なら、使う前に貯蓄を確保できます。`},{id:17,category:`貯蓄・複利`,level:1,question:`インフレが進むと現金の価値は一般にどうなる？`,choices:[`下がりやすい`,`上がり続ける`,`2倍になる`,`変わらない`],answer:0,explanation:`物価が上がると、同じ金額で買える物が少なくなります。`},{id:18,category:`貯蓄・複利`,level:1,question:`長期投資で重要なのは？`,choices:[`継続すること`,`毎日売買すること`,`毎回天井と底を当てること`,`必ず利益を出すこと`],answer:0,explanation:`時間を味方につけて継続することが重要です。`},{id:19,category:`貯蓄・複利`,level:1,question:`余剰資金とは？`,choices:[`当面使う予定のないお金`,`生活費`,`借金`,`税金`],answer:0,explanation:`生活費や近い将来使う予定のお金とは分けて考えます。`},{id:20,category:`貯蓄・複利`,level:1,question:`積立投資で避けたいことは？`,choices:[`生活費まで投資する`,`長期で続ける`,`無理のない金額で積み立てる`,`定期的に見直す`],answer:0,explanation:`生活に必要なお金まで投資に回すのは避けましょう。`},{id:21,category:`株式投資`,level:1,question:`株式を持つということは？`,choices:[`会社の一部を保有すること`,`会社にお金を貸すこと`,`銀行へ預金すること`,`税金を払うこと`],answer:0,explanation:`株主になることで、会社の一部を保有することになります。`},{id:22,category:`株式投資`,level:1,question:`配当金とは？`,choices:[`企業が利益の一部を株主へ分配するお金`,`銀行の利息`,`税金の還付`,`給料`],answer:0,explanation:`企業の利益の一部を株主へ還元するものです。`},{id:23,category:`株式投資`,level:1,question:`株価が上がる要因として最も考えられるものは？`,choices:[`企業業績の改善`,`社員数の減少`,`社名変更だけ`,`天気が良い`],answer:0,explanation:`利益や成長への期待が高まると株価が上がることがあります。`},{id:24,category:`株式投資`,level:1,question:`株価が下がる要因として考えられるものは？`,choices:[`業績悪化`,`利益増加`,`増配`,`新商品ヒット`],answer:0,explanation:`利益悪化や将来への不安が株価を押し下げることがあります。`},{id:25,category:`株式投資`,level:1,question:`株式投資の代表的なリスクは？`,choices:[`株価が下落すること`,`必ず利益が出ること`,`税金がゼロになること`,`価格が固定されること`],answer:0,explanation:`株価は日々変動するため、損失になる可能性もあります。`},{id:26,category:`株式投資`,level:1,question:`PERとは何を見る指標？`,choices:[`株価が利益の何倍か`,`配当金の金額`,`社員数`,`売上高`],answer:0,explanation:`PER（株価収益率）は株価と利益の関係を見る代表的な指標です。`},{id:27,category:`株式投資`,level:1,question:`PBRとは何を見る指標？`,choices:[`株価が純資産の何倍か`,`利益率`,`配当利回り`,`借入金`],answer:0,explanation:`PBR（株価純資産倍率）は株価と純資産の関係を見る指標です。`},{id:28,category:`株式投資`,level:1,question:`成長株とは？`,choices:[`将来の成長が期待される企業`,`株価が100円以下の企業`,`配当がない企業`,`上場したばかりの企業`],answer:0,explanation:`売上や利益の成長が期待される企業を成長株と呼びます。`},{id:29,category:`株式投資`,level:1,question:`割安株とは？`,choices:[`企業価値より株価が安いと考えられる株`,`100円以下の株`,`配当がない株`,`外国株`],answer:0,explanation:`利益や資産などに比べて株価が低いと考えられる株です。`},{id:30,category:`株式投資`,level:1,question:`分散投資をする主な目的は？`,choices:[`リスクを減らすため`,`必ず利益を出すため`,`税金をゼロにするため`,`配当金を2倍にするため`],answer:0,explanation:`複数の資産に分けて投資することで、一つの資産が下落した影響を抑えやすくなります。`},{id:31,category:`ETF・投資信託`,level:1,question:`投資信託とは？`,choices:[`多くの投資家のお金をまとめて運用する商品`,`銀行預金`,`生命保険`,`国債`],answer:0,explanation:`投資家から集めた資金をまとめて運用する金融商品です。`},{id:32,category:`ETF・投資信託`,level:1,question:`ETFとは？`,choices:[`取引所で売買できる投資信託`,`定期預金`,`生命保険`,`住宅ローン`],answer:0,explanation:`ETF（上場投資信託）は株のように売買できます。`},{id:33,category:`ETF・投資信託`,level:1,question:`インデックスファンドの特徴は？`,choices:[`指数に連動する運用を目指す`,`必ず市場平均を超える`,`元本保証`,`毎月配当がある`],answer:0,explanation:`日経平均やS&P500などの指数に連動する運用を目指します。`},{id:34,category:`ETF・投資信託`,level:1,question:`アクティブファンドとは？`,choices:[`市場平均を上回る運用を目指す`,`指数に必ず連動する`,`元本保証`,`株を買えない商品`],answer:0,explanation:`指数を上回る成績を目指して運用されます。`},{id:35,category:`ETF・投資信託`,level:1,question:`信託報酬とは？`,choices:[`投資信託の運用管理費用`,`税金`,`配当金`,`売却益`],answer:0,explanation:`投資信託を保有している間にかかる費用です。`},{id:36,category:`ETF・投資信託`,level:1,question:`分散型投資信託のメリットは？`,choices:[`1本で多くの銘柄へ投資できる`,`必ず利益が出る`,`元本保証`,`税金がゼロ`],answer:0,explanation:`少額でも幅広い銘柄へ分散投資できます。`},{id:37,category:`ETF・投資信託`,level:1,question:`全世界株式ファンドとは？`,choices:[`世界中の株式へ分散投資する商品`,`日本株だけ`,`米国株だけ`,`現金だけ`],answer:0,explanation:`世界中の企業へ分散投資できる商品です。`},{id:38,category:`ETF・投資信託`,level:1,question:`S&P500とは？`,choices:[`米国の代表的な株価指数`,`日本の株価指数`,`金価格`,`為替レート`],answer:0,explanation:`米国を代表する約500社で構成される株価指数です。`},{id:39,category:`ETF・投資信託`,level:1,question:`オールカントリーとは？`,choices:[`世界中の株式へ投資する商品`,`日本株だけ`,`債券だけ`,`REITだけ`],answer:0,explanation:`世界中の株式へ幅広く分散投資する代表的なファンドです。`},{id:40,category:`ETF・投資信託`,level:1,question:`長期積立投資で重要なのは？`,choices:[`続けること`,`毎日売買すること`,`天井と底を当てること`,`借金して投資すること`],answer:0,explanation:`長期間継続することで複利効果や時間分散を活かせます。`},{id:41,category:`REIT・不動産`,level:2,question:`REITとは？`,choices:[`不動産へ投資する金融商品`,`国債だけの商品`,`生命保険`,`普通預金`],answer:0,explanation:`REIT（不動産投資信託）は、多くの投資家から集めた資金で不動産を運用する商品です。`},{id:42,category:`REIT・不動産`,level:2,question:`REITの主な収益源は？`,choices:[`賃料収入や不動産売却益`,`銀行預金の利息`,`税金`,`給料`],answer:0,explanation:`保有するオフィスやマンションなどの賃料収入が中心です。`},{id:43,category:`REIT・不動産`,level:2,question:`REITのリスクとして考えられるものは？`,choices:[`空室率の上昇`,`元本保証`,`価格が変わらない`,`必ず分配金が増える`],answer:0,explanation:`空室率や不動産価格、金利などの影響を受けます。`},{id:44,category:`REIT・不動産`,level:2,question:`不動産投資で空室が増えるとどうなる？`,choices:[`家賃収入が減る`,`家賃収入が増える`,`ローンがなくなる`,`税金がゼロになる`],answer:0,explanation:`入居者が減ると家賃収入も減少します。`},{id:45,category:`REIT・不動産`,level:2,question:`表面利回りとは？`,choices:[`年間家賃収入÷物件価格`,`手取り利益だけ`,`税率`,`ローン金利`],answer:0,explanation:`経費を考慮しないシンプルな利回りです。`},{id:46,category:`REIT・不動産`,level:2,question:`実質利回りでは何を考慮する？`,choices:[`管理費や修繕費など`,`家賃だけ`,`物件名`,`築年数だけ`],answer:0,explanation:`経費を差し引いて実際の収益性を考えます。`},{id:47,category:`REIT・不動産`,level:2,question:`不動産投資のデメリットは？`,choices:[`すぐ売れない場合がある`,`必ず利益が出る`,`価格が変わらない`,`税金が不要`],answer:0,explanation:`株式より現金化に時間がかかることがあります。`},{id:48,category:`REIT・不動産`,level:2,question:`物件選びで重要なのは？`,choices:[`立地`,`壁紙の色`,`名前`,`広告`],answer:0,explanation:`立地は入居率や資産価値に大きく影響します。`},{id:49,category:`REIT・不動産`,level:2,question:`金利が上がると不動産投資はどうなりやすい？`,choices:[`借入負担が増える`,`ローンがなくなる`,`家賃が必ず倍になる`,`固定資産税がゼロになる`],answer:0,explanation:`借入金利が上がると返済負担が増える可能性があります。`},{id:50,category:`REIT・不動産`,level:2,question:`AssetBeastで不動産屋から購入できるものは？`,choices:[`家・マンション・アパート`,`REIT`,`株式`,`ETF`],answer:0,explanation:`AssetBeastではREITは証券会社で購入し、不動産屋では家・マンション・アパートを購入します。`},{id:51,category:`保険`,level:2,question:`保険の基本的な役割は？`,choices:[`大きな損失に備える`,`必ず資産を増やす`,`税金をゼロにする`,`投資利益を保証する`],answer:0,explanation:`保険は病気・事故・死亡など、大きな経済的リスクに備えるための商品です。`},{id:52,category:`保険`,level:2,question:`生命保険は主に何に備える？`,choices:[`死亡や高度障害`,`株価下落`,`インフレ`,`円高`],answer:0,explanation:`家族の生活を守るために加入することが多い保険です。`},{id:53,category:`保険`,level:2,question:`医療保険は何に備える？`,choices:[`入院や手術`,`株式投資`,`老後資金`,`教育費`],answer:0,explanation:`病気やケガによる入院・手術などの費用に備えます。`},{id:54,category:`保険`,level:2,question:`火災保険はどの種類の保険？`,choices:[`損害保険`,`生命保険`,`医療保険`,`年金保険`],answer:0,explanation:`火災や自然災害による損害に備える損害保険です。`},{id:55,category:`保険`,level:2,question:`保険選びで大切なのは？`,choices:[`必要な保障額を考える`,`一番高い保険に入る`,`CMだけで決める`,`友達と同じにする`],answer:0,explanation:`必要以上の保障は保険料の負担が大きくなります。`},{id:56,category:`保険`,level:2,question:`日本の公的医療保険の役割は？`,choices:[`医療費の自己負担を軽減する`,`住宅ローンを返済する`,`株価を上げる`,`税金をなくす`],answer:0,explanation:`健康保険により医療費の自己負担は原則3割です。`},{id:57,category:`保険`,level:2,question:`保険料が家計を圧迫している場合は？`,choices:[`保障内容を見直す`,`さらに保険を増やす`,`借金して払い続ける`,`何もしない`],answer:0,explanation:`定期的に保障内容を見直すことが大切です。`},{id:58,category:`保険`,level:2,question:`掛け捨て保険の特徴は？`,choices:[`保険料が比較的安い`,`必ず貯金になる`,`元本保証`,`投資商品`],answer:0,explanation:`貯蓄性は低いですが、保険料を抑えやすい特徴があります。`},{id:59,category:`保険`,level:2,question:`貯蓄型保険の特徴は？`,choices:[`解約返戻金がある場合がある`,`保険金が出ない`,`株価で決まる`,`保険料が無料`],answer:0,explanation:`商品によっては解約返戻金や満期保険金があります。`},{id:60,category:`保険`,level:2,question:`保険で一番大切な考え方は？`,choices:[`必要な保障だけ持つ`,`全部の保険に入る`,`毎年入り直す`,`高額な保険を選ぶ`],answer:0,explanation:`保険は万一の備えです。必要以上に加入する必要はありません。`},{id:61,category:`NISA・iDeCo`,level:2,question:`NISAの最大の特徴は？`,choices:[`運用益が非課税になる`,`必ず利益が出る`,`元本保証`,`税金が還付される`],answer:0,explanation:`NISAでは一定の条件内で売却益や配当金が非課税になります。`},{id:62,category:`NISA・iDeCo`,level:2,question:`NISAで購入できるものは？`,choices:[`株式や投資信託`,`住宅`,`自動車`,`生命保険`],answer:0,explanation:`株式やETF、投資信託などを非課税で運用できます。`},{id:63,category:`NISA・iDeCo`,level:2,question:`iDeCoの主な目的は？`,choices:[`老後資金を準備する`,`住宅を買う`,`旅行資金を貯める`,`教育費を貯める`],answer:0,explanation:`iDeCoは老後資金づくりを目的とした制度です。`},{id:64,category:`NISA・iDeCo`,level:2,question:`iDeCoの掛金は原則いつまで引き出せない？`,choices:[`60歳頃まで`,`1年後`,`5年後`,`いつでも引き出せる`],answer:0,explanation:`iDeCoは老後資金のため、原則60歳まで引き出せません。`},{id:65,category:`NISA・iDeCo`,level:2,question:`NISAとiDeCoの共通点は？`,choices:[`資産形成を支援する制度`,`必ず元本保証`,`預金専用制度`,`住宅ローン制度`],answer:0,explanation:`どちらも資産形成を後押しする国の制度です。`},{id:66,category:`NISA・iDeCo`,level:2,question:`長期投資でNISAが向いている理由は？`,choices:[`利益に税金がかかりにくい`,`必ず値上がりする`,`毎年ボーナスが出る`,`銀行金利が上がる`],answer:0,explanation:`非課税メリットは長期運用ほど活かしやすくなります。`},{id:67,category:`NISA・iDeCo`,level:2,question:`NISA口座で受け取る配当金のメリットは？`,choices:[`非課税で受け取れる場合がある`,`必ず2倍になる`,`税金が戻ってくる`,`元本保証される`],answer:0,explanation:`受取方法など条件を満たすと非課税になります。`},{id:68,category:`NISA・iDeCo`,level:2,question:`iDeCoのメリットとして正しいものは？`,choices:[`掛金が所得控除の対象になる`,`必ず利益が出る`,`いつでも自由に引き出せる`,`元本保証`],answer:0,explanation:`iDeCoの掛金は所得控除の対象となる大きなメリットがあります。`},{id:69,category:`NISA・iDeCo`,level:2,question:`NISAで短期売買ばかり行う場合の注意点は？`,choices:[`長期投資のメリットを活かしにくい`,`必ず利益が増える`,`税金が増える`,`配当金がなくなる`],answer:0,explanation:`NISAは長期・積立・分散投資との相性が良い制度です。`},{id:70,category:`NISA・iDeCo`,level:2,question:`AssetBeastでNISAを活用する目的は？`,choices:[`資産を効率よく増やすため`,`税金を払わないため`,`借金を増やすため`,`住宅ローンを組むため`],answer:0,explanation:`ゲームでも現実でも、NISAは長期の資産形成に役立つ制度です。`},{id:71,category:`税金`,level:2,question:`所得税とは？`,choices:[`個人の所得にかかる税金`,`買い物だけにかかる税金`,`家だけにかかる税金`,`車だけにかかる税金`],answer:0,explanation:`所得税は給与や事業所得などに対して課税される国税です。`},{id:72,category:`税金`,level:2,question:`住民税は主に誰に納める？`,choices:[`都道府県・市区町村`,`証券会社`,`銀行`,`勤務先`],answer:0,explanation:`住民税は地方自治体へ納める税金です。`},{id:73,category:`税金`,level:2,question:`所得控除とは？`,choices:[`課税対象となる所得を減らす制度`,`税率をゼロにする制度`,`株価を上げる制度`,`給料を増やす制度`],answer:0,explanation:`所得控除により課税対象となる所得が減り、税負担が軽くなることがあります。`},{id:74,category:`税金`,level:2,question:`税額控除とは？`,choices:[`計算された税額から直接差し引く制度`,`所得を増やす制度`,`配当金を増やす制度`,`株価を上げる制度`],answer:0,explanation:`税額控除は税金そのものを減らす制度です。`},{id:75,category:`税金`,level:2,question:`確定申告とは？`,choices:[`所得と税額を申告する手続き`,`株を買う手続き`,`保険へ加入する手続き`,`住宅を購入する手続き`],answer:0,explanation:`1年間の所得と税額を計算し、税務署へ申告します。`},{id:76,category:`税金`,level:2,question:`年末調整とは？`,choices:[`会社が所得税を精算する仕組み`,`株価を調整する制度`,`年金額を決める制度`,`保険料を決める制度`],answer:0,explanation:`給与所得者の所得税を会社が年末に精算します。`},{id:77,category:`税金`,level:2,question:`消費税とは？`,choices:[`商品やサービスの購入時にかかる税金`,`給料だけにかかる税金`,`株式だけにかかる税金`,`住宅ローンだけにかかる税金`],answer:0,explanation:`買い物やサービス利用時に負担する税金です。`},{id:78,category:`税金`,level:2,question:`ふるさと納税の特徴は？`,choices:[`自己負担2,000円で返礼品を受けられる場合がある`,`税金がゼロになる`,`誰でも無制限に利用できる`,`必ず現金が返ってくる`],answer:0,explanation:`控除上限内で利用すると、実質2,000円負担で返礼品を受けられる仕組みです。`},{id:79,category:`税金`,level:2,question:`医療費控除を利用できる可能性があるのは？`,choices:[`一定額以上の医療費を支払った場合`,`旅行へ行った場合`,`株を買った場合`,`車を購入した場合`],answer:0,explanation:`一定条件を満たすと医療費控除を受けられる場合があります。`},{id:80,category:`税金`,level:2,question:`税金について正しい考え方は？`,choices:[`制度を理解すると家計管理に役立つ`,`知らなくても全く問題ない`,`投資だけ知れば十分`,`税金は一切払わなくてよい`],answer:0,explanation:`税金の仕組みを知ることで、資産形成や家計管理に役立ちます。`},{id:81,category:`年金・ライフプラン`,level:3,question:`公的年金の主な役割は？`,choices:[`老後・障害・遺族の生活を支える`,`株価を保証する`,`住宅ローンを返済する`,`医療費を全額無料にする`],answer:0,explanation:`公的年金には、老齢年金だけでなく障害年金や遺族年金の役割もあります。`},{id:82,category:`年金・ライフプラン`,level:3,question:`老後資金を考えるときに必要なのは？`,choices:[`将来の収入と支出の見積もり`,`現在の株価だけ`,`自宅の壁紙の色`,`宝くじの予定`],answer:0,explanation:`年金収入、生活費、医療費、介護費などを見積もることが大切です。`},{id:83,category:`年金・ライフプラン`,level:3,question:`長生きリスクとは？`,choices:[`想定より長生きして資金が不足する可能性`,`株価が上がること`,`住宅価格が上がること`,`税金が減ること`],answer:0,explanation:`長生きするほど、必要となる生活資金が増える可能性があります。`},{id:84,category:`年金・ライフプラン`,level:3,question:`老後資金の準備で有効な考え方は？`,choices:[`早く始めて長く積み立てる`,`退職直前に全額を高リスク投資する`,`貯蓄をしない`,`借金だけで準備する`],answer:0,explanation:`早く始めるほど積立期間が長くなり、複利効果も活かしやすくなります。`},{id:85,category:`年金・ライフプラン`,level:3,question:`退職後の収支で確認したい支出は？`,choices:[`生活費・医療費・住居費`,`投資利益だけ`,`給与だけ`,`株価だけ`],answer:0,explanation:`日常の生活費に加え、医療費や住居の修繕費も考える必要があります。`},{id:86,category:`年金・ライフプラン`,level:3,question:`老後資金をすべて現金だけで持つ注意点は？`,choices:[`インフレで購買力が下がる可能性`,`価格が毎日暴落する`,`必ず資産が倍になる`,`税金がゼロになる`],answer:0,explanation:`物価が上がると、同じ金額で買えるものが減る可能性があります。`},{id:87,category:`年金・ライフプラン`,level:3,question:`退職後に高リスク資産へ集中する注意点は？`,choices:[`下落から回復を待つ時間が短い可能性`,`必ず配当が増える`,`税金がなくなる`,`元本が保証される`],answer:0,explanation:`退職後は資産を取り崩すため、大きな下落の影響を受けやすくなります。`},{id:88,category:`年金・ライフプラン`,level:3,question:`資産の取り崩しで重要なのは？`,choices:[`生活費と運用状況を見ながら計画的に行う`,`毎年全額使う`,`相場に関係なく高額を使う`,`税金を無視する`],answer:0,explanation:`必要額、運用状況、税金を確認しながら取り崩すことが大切です。`},{id:89,category:`年金・ライフプラン`,level:3,question:`持ち家でも老後に必要になりやすい費用は？`,choices:[`修繕費や固定資産税`,`家賃だけ`,`株式手数料だけ`,`配当金だけ`],answer:0,explanation:`持ち家でも修繕費や固定資産税などの支出があります。`},{id:90,category:`年金・ライフプラン`,level:3,question:`ライフプランを見直すタイミングは？`,choices:[`収入・支出・家族状況が変わったとき`,`一度作ったら二度と見直さない`,`株価が上がった日だけ`,`誕生日だけ`],answer:0,explanation:`転職、結婚、出産、住宅購入など、生活が変わったときに見直すと効果的です。`},{id:91,category:`AssetBeast`,level:3,question:`資産形成で最も重要な考え方は？`,choices:[`長期・積立・分散`,`一発勝負`,`借金して投資`,`毎日売買`],answer:0,explanation:`資産形成の基本は「長期・積立・分散」です。`},{id:92,category:`AssetBeast`,level:3,question:`生活防衛資金を作る理由は？`,choices:[`急な出費や失業に備えるため`,`株を買うため`,`旅行するため`,`ゲームを買うため`],answer:0,explanation:`投資の前に生活防衛資金を確保することが大切です。`},{id:93,category:`AssetBeast`,level:3,question:`投資先を分散するメリットは？`,choices:[`リスクを減らせる`,`利益が2倍になる`,`税金がなくなる`,`元本保証になる`],answer:0,explanation:`複数の資産へ分散すると、一つの値下がりの影響を抑えられます。`},{id:94,category:`AssetBeast`,level:3,question:`インフレに強い資産として代表的なのは？`,choices:[`株式`,`現金だけ`,`財布`,`商品券`],answer:0,explanation:`企業は物価上昇に合わせて利益を伸ばすことがあり、株式はインフレ対策の一つになります。`},{id:95,category:`AssetBeast`,level:3,question:`資産形成で最初にやるべきことは？`,choices:[`家計を整える`,`全額を株に投資する`,`借金を増やす`,`毎日デイトレードする`],answer:0,explanation:`家計管理が資産形成のスタートラインです。`},{id:96,category:`AssetBeast`,level:3,question:`ゲーム内でFPレベルを上げる目的は？`,choices:[`新しい投資やイベントを解放する`,`キャラクターの身長を伸ばす`,`移動速度だけ上げる`,`所持金をゼロにする`],answer:0,explanation:`FPレベルが上がると、新しい知識や投資先を解放できる設計です。`},{id:97,category:`AssetBeast`,level:3,question:`長期投資で大切なのは？`,choices:[`相場に一喜一憂しない`,`毎日全部売買する`,`噂だけで投資する`,`借金で投資する`],answer:0,explanation:`短期の値動きだけで判断しないことが重要です。`},{id:98,category:`AssetBeast`,level:3,question:`AssetBeastの最終目標は？`,choices:[`お金の知識を身につけながら資産を築く`,`借金を増やす`,`税金を払わない`,`ギャンブルだけで生活する`],answer:0,explanation:`ゲームを通じて現実でも役立つ金融リテラシーを身につけることが目的です。`},{id:99,category:`AssetBeast`,level:3,question:`投資で最も危険なのは？`,choices:[`仕組みを理解せず投資すること`,`勉強すること`,`分散投資すること`,`積立投資すること`],answer:0,explanation:`理解せずに投資すると、大きな失敗につながる可能性があります。`},{id:100,category:`AssetBeast`,level:3,question:`AssetBeastで本当にレベルアップするのは誰？`,choices:[`プレイヤー自身`,`ゲームのキャラクターだけ`,`証券会社`,`銀行`],answer:0,explanation:`ゲームの目的は、プレイヤー自身がお金の知識を身につけることです。`}],t=new Audio(`/asset-beast/Town-bgm.mp3`);t.loop=!0,t.volume=.25;function n(){t.play().catch(()=>{})}document.addEventListener(`pointerdown`,n,{once:!0});var r=!0;function i(){r=!r;let e=document.querySelector(`#bgmBtn`);r?(t.play().catch(()=>{}),e&&(e.innerHTML=`🔊<br>BGM`)):(t.pause(),e&&(e.innerHTML=`🔇<br>BGM`))}window.toggleBgm=i;var a=document.querySelector(`#app`),o={age:20,month:1,job:null,region:null,house:null,cash:3e5,fpExp:0,fpLevel:1,stock:0,etf:0,reit:0,crypto:0,propertyValue:0,propertyType:null,workScore:0,log:`AssetBeastの人生が始まった。`,news:`平和な1日だった。`},s=null,c=[{name:`会社員`,income:28e4},{name:`公務員`,income:26e4},{name:`エンジニア`,income:32e4},{name:`フリーター`,income:18e4}],l=[{name:`埼玉`,salaryRate:1,costRate:.9,style:`saitama`},{name:`東京`,salaryRate:1.2,costRate:1.4,style:`tokyo`},{name:`福岡`,salaryRate:.9,costRate:.8,style:`fukuoka`},{name:`沖縄`,salaryRate:.9,costRate:.8,style:`okinawa`}],u=[{name:`実家`,cost:3e4},{name:`賃貸`,cost:9e4},{name:`マンション`,cost:13e4}];function d(e){return Math.floor(e).toLocaleString()+`円`}function f(){return o.cash+o.stock+o.etf+o.reit+o.crypto+(o.propertyValue||0)}function p(){try{alert(`保存ボタンが押されました`);let e=JSON.stringify(o);localStorage.setItem(`assetBeastSave`,e),alert(`ゲームを保存しました！`)}catch(e){alert(`保存エラー：`+e.message),console.error(e)}}window.saveGame=p;function m(){let e=localStorage.getItem(`assetBeastSave`);if(!e){alert(`セーブデータがありません`);return}let t=JSON.parse(e);Object.assign(o,t),y()}function h(){a.innerHTML=`
    <div class="screen title-screen">
      <h1>AssetBeast</h1>
      <p>人生を選び、<br>お金を学び、<br>資産家になる。</p>
      <button id="startBtn">GAME START</button>
      <button id="continueBtn">続きから</button>
    </div>
  `,document.querySelector(`#startBtn`).onclick=g,document.querySelector(`#continueBtn`).onclick=m}window.renderTitle=h;function g(){a.innerHTML=`
    <div class="screen">
      <h2>職業を選ぶ</h2>
      <div class="card-list">
        ${c.map((e,t)=>`
          <div class="card">
            <h3>${e.name}</h3>
            <p>月収：${d(e.income)}</p>
            <button data-i="${t}">選ぶ</button>
          </div>
        `).join(``)}
      </div>
    </div>
  `,document.querySelectorAll(`[data-i]`).forEach(e=>{e.onclick=()=>{o.job=c[e.dataset.i],_()}})}function _(){a.innerHTML=`
    <div class="screen">
      <h2>地域を選ぶ</h2>
      <div class="card-list">
        ${l.map((e,t)=>`
          <div class="card">
            <h3>${e.name}</h3>
            <p>賃金：${e.salaryRate}倍</p>
            <p>生活費：${e.costRate}倍</p>
            <button data-i="${t}">住む</button>
          </div>
        `).join(``)}
      </div>
      <button id="back">← 職業を選び直す</button>
    </div>
  `,document.querySelectorAll(`[data-i]`).forEach(e=>{e.onclick=()=>{o.region=l[e.dataset.i],v()}}),document.querySelector(`#back`).onclick=g}function v(){a.innerHTML=`
    <div class="screen">
      <h2>住居を選ぶ</h2>
      <div class="card-list">
        ${u.map((e,t)=>`
          <div class="card">
            <h3>${e.name}</h3>
            <p>毎月：${d(e.cost)}</p>
            <button data-i="${t}">住む</button>
          </div>
        `).join(``)}
      </div>
      <button id="back">← 地域を選び直す</button>
    </div>
  `,document.querySelectorAll(`[data-i]`).forEach(e=>{e.onclick=()=>{o.house=u[e.dataset.i],y()}}),document.querySelector(`#back`).onclick=_}function y(){a.innerHTML=`
    <div class="game-wrap ${o.region.style}">
    <div class="status">
  <div class="status-top">
    <div class="status-avatar"></div>

    <div class="status-info">
      <h2>${o.region.name}の街</h2>
      <p>
        ${o.age}歳 ${o.month}ヶ月目 /
        ${o.job.name} /
        ${o.house.name}
      </p>
    </div>
  </div>

  <div class="asset-row">
    <div>
      <span>現金</span>
      <strong>${d(o.cash)}</strong>
    </div>

    <div>
      <span>株</span>
      <strong>${d(o.stock)}</strong>
    </div>

    <div>
      <span>ETF</span>
      <strong>${d(o.etf)}</strong>
    </div>

    <div>
      <span>REIT</span>
      <strong>${d(o.reit)}</strong>
    </div>

    <div>
      <span>仮想通貨</span>
      <strong>${d(o.crypto)}</strong>
    </div>

    <div>
      <span>不動産</span>
      <strong>${d(o.propertyValue||0)}</strong>
    </div>

    <div>
      <span>総資産</span>
      <strong>${d(f())}</strong>
    </div>
  </div>
</div>

      <div id="town">
        <div id="player" aria-label="クマプロ"></div>

        <div class="building work" data-place="work"><div class="roof"></div><span>仕事</span></div>
        <div class="building securities" data-place="securities"><div class="roof"></div><span>証券会社</span></div>
        <div class="building realestate" data-place="realestate"><div class="roof"></div><span>不動産屋</span></div>
        <div class="building home" data-place="home"><div class="roof"></div><span>自宅</span></div>
        <div class="building school" data-place="school"><div class="roof"></div><span>学校</span></div>
      </div>
   
    <div class="game-panel">

<div class="message">
${o.news}<br>  
${o.log}<br>
  🔑 操作：タップ・スワイプで移動 / 施設の近くでタップ
</div>

  <div class="command-bar">
    <button onclick="enterPlace('work')">💼<br>仕事</button>
    <button onclick="enterPlace('securities')">📈<br>証券会社</button>
    <button onclick="enterPlace('realestate')">🏢<br>不動産</button>
    <button onclick="enterPlace('home')">🏠<br>自宅</button>
    <button onclick="enterPlace('school')">🎓<br>学校</button>
    <button onclick="nextMonth()">⏩<br>次の月</button>
    <button onclick="saveGame()">💾<br>保存</button>
    <button id="bgmBtn" onclick="toggleBgm()">🔊<br>BGM</button>
    <button onclick="renderTitle()">🚪<br>終了</button>
  </div>

</div>
    </div>
  `,x()}function b(e,t){return t>=120&&t<=240||e>=200&&e<=360}function x(){let e=document.querySelector(`#player`),t=240,n=320;e.style.left=t+`px`,e.style.top=n+`px`,document.onkeydown=r=>{if(r.key===`e`&&s){C(s);return}let i=t,a=n;(r.key===`ArrowRight`||r.key===`d`)&&(i+=40),(r.key===`ArrowLeft`||r.key===`a`)&&(i-=40),(r.key===`ArrowDown`||r.key===`s`)&&(a+=40),(r.key===`ArrowUp`||r.key===`w`)&&(a-=40),!(i<0||i>520||a<0||a>360)&&b(i,a)&&(t=i,n=a,e.style.left=t+`px`,e.style.top=n+`px`,S(t,n))};let r=document.querySelector(`#town`);if(r){let i=0,a=0,o=!1;r.addEventListener(`touchstart`,e=>{let t=e.touches[0];i=t.clientX,a=t.clientY,o=!1},{passive:!0}),r.addEventListener(`touchmove`,e=>{let t=e.touches[0],n=t.clientX-i,r=t.clientY-a;(Math.abs(n)>15||Math.abs(r)>15)&&(o=!0,e.preventDefault())},{passive:!1}),r.addEventListener(`touchend`,r=>{let c=r.changedTouches[0];S(t,n);let l=t,u=n;if(o){let e=c.clientX-i,t=c.clientY-a;Math.abs(e)>Math.abs(t)?l+=e>0?40:-40:u+=t>0?40:-40}else{let t=e.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2,i=c.clientX-n,a=c.clientY-r;Math.abs(i)>Math.abs(a)?l+=i>0?40:-40:u+=a>0?40:-40}if(!(l<0||l>520||u<0||u>360)&&b(l,u)&&(t=l,n=u,e.style.left=t+`px`,e.style.top=n+`px`,S(t,n),!o&&s)){C(s);return}},{passive:!0})}}function S(e,t){s=null,document.querySelectorAll(`.building`).forEach(n=>{let r=n.offsetLeft,i=n.offsetTop;Math.abs(e-r)<=40&&Math.abs(t-i)<=40&&(s=n.dataset.place)});let n=document.querySelector(`.message`);n&&(s?n.innerHTML=`
      ${o.log}<br>
      📰 ${o.news}<br>
      Eキー：施設に入る
    `:n.innerHTML=`
      ${o.log}<br>
      📰 ${o.news}<br>
      操作：タップ・スワイプで移動
      施設の近くでタップして入る
    `)}function C(e){e===`securities`&&w(),e===`realestate`&&D(),e===`home`&&N(),e===`work`&&k(),e===`school`&&M()}window.enterPlace=C;function w(){a.innerHTML=`
    <div class="screen shop-screen">
      <h2>🏦 証券会社</h2>
      <p>金融資産に投資できます。</p>

      <button id="buyStock">株を10万円買う</button>
      <button id="sellStock">株を10万円売る</button>

      <button id="buyEtf">ETFを10万円買う</button>
      <button id="sellEtf">ETFを10万円売る</button>

      <button id="buyReit">REITを10万円買う</button>
      <button id="sellReit">REITを10万円売る</button>

      <button id="buyCrypto">仮想通貨を10万円買う</button>
      <button id="sellCrypto">仮想通貨を10万円売る</button>

      <p>株：成長狙い / ETF：分散 / REIT：不動産投資 / 仮想通貨：高リスク</p>

      <button id="backTown">街へ戻る</button>
    </div>
  `,document.querySelector(`#buyStock`).onclick=()=>T(`stock`),document.querySelector(`#sellStock`).onclick=()=>E(`stock`),document.querySelector(`#buyEtf`).onclick=()=>T(`etf`),document.querySelector(`#sellEtf`).onclick=()=>E(`etf`),document.querySelector(`#buyReit`).onclick=()=>T(`reit`),document.querySelector(`#sellReit`).onclick=()=>E(`reit`),document.querySelector(`#buyCrypto`).onclick=()=>T(`crypto`),document.querySelector(`#sellCrypto`).onclick=()=>E(`crypto`),document.querySelector(`#backTown`).onclick=y}function T(e){if(o.cash<1e5){alert(`現金が足りない`);return}o.cash-=1e5,o[e]+=1e5,o.log=`10万円分の資産を購入した。`,w()}function E(e){let t=1e5;if(o[e]<t){alert(`保有額が足りません`);return}o[e]-=t,o.cash+=t,o.log=`${{stock:`株`,etf:`ETF`,reit:`REIT`,crypto:`仮想通貨`}[e]}を10万円売却しました。`,w()}function D(){a.innerHTML=`
    <div class="screen shop-screen">
      <h2>🏠 不動産屋</h2>
      <p>家・マンション・アパートを購入できます。</p>

      <div class="card-list">
        <div class="card">
  <h3>戸建て</h3>
  <p>3,000万円</p>
  <button id="buyHouse" ${o.cash<3e7?`disabled`:``}>
    ${o.cash<3e7?`資金不足`:`購入`}
  </button>
</div>

<div class="card">
  <h3>マンション</h3>
  <p>4,500万円</p>
  <button id="buyMansion" ${o.cash<45e6?`disabled`:``}>
    ${o.cash<45e6?`資金不足`:`購入`}
  </button>
</div>

<div class="card">
  <h3>アパート</h3>
  <p>8,000万円</p>
  <button id="buyApartment" ${o.cash<8e7?`disabled`:``}>
    ${o.cash<8e7?`資金不足`:`購入`}
  </button>
</div>
      </div>

      <button id="backTown">街へ戻る</button>
    </div>
  `,document.querySelector(`#backTown`).onclick=y,document.querySelector(`#buyHouse`)&&(document.querySelector(`#buyHouse`).onclick=()=>O(`戸建て`,3e7)),document.querySelector(`#buyMansion`)&&(document.querySelector(`#buyMansion`).onclick=()=>O(`マンション`,45e6)),document.querySelector(`#buyApartment`)&&(document.querySelector(`#buyApartment`).onclick=()=>O(`アパート`,8e7))}function O(e,t){if(o.cash<t){alert(`資金が足りません`);return}o.cash-=t,o.house={name:e,purchasePrice:t,cost:0},o.propertyValue=t,o.log=`${e}を${d(t)}で購入しました。`,y()}function k(){a.innerHTML=`
    <div class="screen">
      <h2>🏢 仕事</h2>

      <p><strong>${o.job.name}</strong>として働いている。</p>
      <p>月収：${d(o.job.income*o.region.salaryRate)}</p>
      <p>⭐ 仕事評価：${o.workScore} / 5</p>
      <hr>

      <h3>今日も仕事をしよう！</h3>
      <p>仕事を成功させるとボーナスを獲得できます。</p>

      <button id="startWork">💼 仕事をする</button>
      <button id="backTown">街へ戻る</button>
    </div>
  `,document.querySelector(`#startWork`).onclick=A,document.querySelector(`#backTown`).onclick=y}function A(){a.innerHTML=`
    <div class="screen">
      <h2>💼 お仕事チャレンジ</h2>

      <p>今日の仕事が始まった！</p>
      <p><strong>${o.job.name}</strong>として成果を出そう。</p>

      <button id="workChallenge">🔥 仕事に挑戦する</button>
      <button id="backWork">仕事場へ戻る</button>
    </div>
  `,document.querySelector(`#workChallenge`).onclick=()=>{o.job.name===`会社員`?j():alert(`${o.job.name}の仕事ゲームは準備中！`)},document.querySelector(`#backWork`).onclick=k}function j(){a.innerHTML=`
    <div class="screen">
      <h2>🧑‍💼 会社員チャレンジ</h2>

      <p>上司から急ぎの仕事を頼まれた！</p>
      <p>あなたならどうする？</p>

      <button id="workA">A：すぐに取り掛かる</button><br>
      <button id="workB">B：同僚に丸投げする</button><br>
      <button id="workC">C：明日に回す</button><br>

      <button id="backWork">仕事場へ戻る</button>
    </div>
  `,document.querySelector(`#workA`).onclick=()=>{o.cash+=1e4,o.workScore+=1,alert(`成功！

 上司からの評価が上がった！
 💰 ボーナス +10,000円
 ⭐ 仕事評価 ${o.workScore}`),k()},document.querySelector(`#workB`).onclick=()=>{alert(`失敗！同僚からの信頼が下がった…。`)},document.querySelector(`#workC`).onclick=()=>{alert(`失敗！締め切りに間に合わなかった…。`)},document.querySelector(`#backWork`).onclick=k}function M(){a.innerHTML=`
    <div class="screen">
      <h2>🎓 学校</h2>
      <p>ここでは将来、資格やスキルを学べる。</p>
      <p>FPレベル：${o.fpLevel}</p>
      <p>経験値：${o.fpExp}/100</p>
      <button id="studyFP">FP初級</button>

      <button disabled>
        FP中級（Lv3）
      </button>

      <button disabled>
        FP上級（Lv5）
      </button>

      <button id="backTown">街へ戻る</button>
    </div>
  `,document.querySelector(`#studyFP`).onclick=F,document.querySelector(`#backTown`).onclick=y}function N(){a.innerHTML=`
    <div class="screen">
      <h2>🏡 自宅</h2>
      <p>家で休むと1ヶ月が進みます。</p>
      <button id="nextMonth">寝る / 次の月へ</button>
      <button id="backTown">街へ戻る</button>
    </div>
  `,document.querySelector(`#nextMonth`).onclick=P,document.querySelector(`#backTown`).onclick=y}function P(){let e=o.job.income*o.region.salaryRate,t=o.house.cost*o.region.costRate+7e4,n=o.stock*.002+o.etf*.0015+o.reit*.003,r=.92+Math.random()*.16,i=.95+Math.random()*.1,a=.96+Math.random()*.08,s=.85+Math.random()*.3;o.stock*=r,o.etf*=i,o.reit*=a,o.crypto*=s,o.stock=Math.round(o.stock),o.etf=Math.round(o.etf),o.reit=Math.round(o.reit),o.crypto=Math.round(o.crypto);let c=((r-1)*100).toFixed(1),l=((i-1)*100).toFixed(1),u=((a-1)*100).toFixed(1),f=((s-1)*100).toFixed(1);if(o.log=`📈 市場変動：株 ${c}% / ETF ${l}% / REIT ${u}% / 仮想通貨 ${f}%`,o.propertyValue>0&&o.house){if(o.house.name===`戸建て`&&(o.propertyValue*=.997),o.house.name===`マンション`){let e=.998+Math.random()*.007;o.propertyValue*=e}if(o.house.name===`アパート`){let e=.995+Math.random()*.013;o.propertyValue*=e}o.propertyValue=Math.floor(o.propertyValue)}let p=L(),m=R(),h=z();if(o.cash+=e+n,o.cash-=t,o.stock*=1+I(-.05,.08)+p.stock,o.etf*=1+I(-.03,.05)+p.etf,o.reit*=1+I(-.02,.04)+p.reit,o.crypto*=1+I(-.15,.2)+p.crypto,o.cash+=m.cash,o.job.income+=m.income,o.month+=1,o.month>12&&(o.month=1,o.age+=1),o.news=p.text,o.log=`
📈 市場変動：株 ${c}% / ETF ${l}% / REIT ${u}% / 仮想通貨 ${f}%<br>
💰 給料 ${d(e)} / 生活費 ${d(t)} / 配当 ${d(n)}<br>
💬 格言：${h}<br>
📰 ${m.text}
`,o.age>=50){B();return}y()}window.nextMonth=P;function F(){let t=e[Math.floor(Math.random()*e.length)];a.innerHTML=`
    <div class="screen">
      <h2>🎓 FPクイズ</h2>
      <p>所持金：${d(o.cash)}</p>
      <p>${t.question}</p>

      ${t.choices.map((e,t)=>`
        <button class="quizBtn" data-i="${t}">
          ${e}
        </button>
      `).join(``)}

      <br><br>

      <button id="backSchool">学校へ戻る</button>
    </div>
  `,document.querySelectorAll(`.quizBtn`).forEach(e=>{e.onclick=()=>{Number(e.dataset.i)===t.answer?(o.cash+=5e3,o.fpExp+=10,o.fpExp>=100?(o.fpExp-=100,o.fpLevel+=1,alert(`🎉 レベルアップ！

FPレベル ${o.fpLevel} になった！

${t.explanation}`)):alert(`⭕ 正解！

報酬：5,000円
FP経験値：${o.fpExp} / 100

${t.explanation}`)):alert(`❌ 不正解

${t.explanation}`),M()}}),document.querySelector(`#backSchool`).onclick=M}function I(e,t){return Math.random()*(t-e)+e}function L(){let e=[{text:`🤖 AI投資ブーム。半導体需要が急増。`,stock:.06,etf:.03,reit:0,crypto:.04},{text:`💻 半導体不足が深刻化。製造業に影響。`,stock:-.03,etf:-.02,reit:0,crypto:.01},{text:`🧠 新型AIサービスが世界的に普及。`,stock:.05,etf:.03,reit:0,crypto:.03},{text:`📱 大手IT企業の業績が市場予想を上回る。`,stock:.04,etf:.02,reit:0,crypto:.02},{text:`💴 円高が急速に進行。輸出企業に逆風。`,stock:-.04,etf:-.02,reit:.01,crypto:-.02},{text:`💵 円安が進行。輸出企業の業績期待が高まる。`,stock:.04,etf:.02,reit:-.01,crypto:.02},{text:`🏦 中央銀行が利上げを発表。`,stock:-.04,etf:-.02,reit:-.05,crypto:-.05},{text:`💰 金利引き下げ。市場に資金が流入。`,stock:.04,etf:.03,reit:.04,crypto:.05},{text:`🌾 小麦が世界的な不作。食料価格が上昇。`,stock:-.02,etf:-.01,reit:0,crypto:0},{text:`🍚 米が豊作。食品価格が安定。`,stock:.01,etf:.01,reit:0,crypto:0},{text:`🌱 大豆価格が急騰。食品企業のコスト増。`,stock:-.02,etf:-.01,reit:0,crypto:0},{text:`🐟 漁獲量が大幅に減少。水産物価格が上昇。`,stock:-.01,etf:0,reit:0,crypto:0},{text:`🛢️ 原油価格が急騰。世界経済に警戒感。`,stock:-.04,etf:-.02,reit:-.01,crypto:-.02},{text:`🛢️ 原油価格が下落。企業コスト低下への期待。`,stock:.03,etf:.02,reit:.01,crypto:.01},{text:`☀️ 太陽光発電への大型投資が決定。`,stock:.03,etf:.02,reit:.01,crypto:0},{text:`☢️ 原子力発電所の再稼働が決定。`,stock:.02,etf:.01,reit:0,crypto:0},{text:`💧 水力発電設備への大型投資が始まる。`,stock:.02,etf:.01,reit:.01,crypto:0},{text:`🌪️ 大型台風が上陸。物流と企業活動に影響。`,stock:-.04,etf:-.02,reit:-.03,crypto:-.01},{text:`🌧️ 記録的大雨。各地で河川が氾濫。`,stock:-.03,etf:-.02,reit:-.04,crypto:0},{text:`❄️ 強烈な寒波が到来。エネルギー需要が急増。`,stock:-.01,etf:0,reit:-.01,crypto:0},{text:`🌍 大規模地震が発生。市場に警戒感。`,stock:-.07,etf:-.04,reit:-.08,crypto:-.03},{text:`🏔️ 豪雨による土砂崩れ。インフラに被害。`,stock:-.03,etf:-.02,reit:-.03,crypto:0},{text:`🚀 民間ロケットの打ち上げに成功。`,stock:.04,etf:.02,reit:0,crypto:.02},{text:`🛰️ 次世代通信衛星の運用が開始。`,stock:.03,etf:.02,reit:0,crypto:.01},{text:`☄️ 巨大彗星の観測に成功。宇宙産業への関心が高まる。`,stock:.01,etf:.01,reit:0,crypto:.01},{text:`🗳️ 大統領選挙が終了。市場に安心感が広がる。`,stock:.03,etf:.02,reit:.01,crypto:.02},{text:`⚔️ 国際紛争が激化。世界市場が急落。`,stock:-.08,etf:-.05,reit:-.03,crypto:-.07},{text:`🕊️ 停戦合意が成立。市場に安心感が広がる。`,stock:.06,etf:.04,reit:.02,crypto:.04},{text:`🚨 大都市でテロ事件。市場に警戒感。`,stock:-.06,etf:-.03,reit:-.03,crypto:-.04},{text:`🚄 高速鉄道の大型インフラ計画が発表。`,stock:.03,etf:.02,reit:.03,crypto:0},{text:`👴 高齢化が加速。医療・介護需要が拡大。`,stock:.01,etf:.01,reit:.01,crypto:0},{text:`👶 出生数が回復。将来の消費拡大に期待。`,stock:.02,etf:.01,reit:.02,crypto:0},{text:`🎬 国産映画が世界的大ヒット。`,stock:.02,etf:.01,reit:0,crypto:.01},{text:`📺 動画配信サービスの利用者が急増。`,stock:.03,etf:.02,reit:0,crypto:.02},{text:`🚽 節水型住宅設備が大ヒット。`,stock:.01,etf:.01,reit:.01,crypto:0},{text:`🏠 住宅需要が急増。不動産市場が活況。`,stock:.02,etf:.01,reit:.05,crypto:0},{text:`🪙 仮想通貨の税制改革が発表。投資家の期待が高まる。`,stock:.01,etf:.01,reit:0,crypto:.12},{text:`₿ 仮想通貨ETFへの資金流入が急増。`,stock:.01,etf:.02,reit:0,crypto:.1},{text:`🔒 大手暗号資産取引所でセキュリティ問題。`,stock:-.01,etf:0,reit:0,crypto:-.15},{text:`🏆 世界的スポーツ大会が開幕。消費が活発化。`,stock:.02,etf:.01,reit:.02,crypto:.01},{text:`🎌 日本代表が世界大会で優勝。国内消費が盛り上がる。`,stock:.02,etf:.01,reit:.01,crypto:0},{text:`🛒 大手スーパーが全国的な値下げを発表。消費が活発化。`,stock:.02,etf:.01,reit:.01,crypto:0},{text:`🛍️ 個人消費が急減。小売企業の業績懸念が広がる。`,stock:-.03,etf:-.02,reit:-.01,crypto:-.01},{text:`🍳 家庭料理ブーム。食品関連企業の売上が伸びる。`,stock:.02,etf:.01,reit:0,crypto:0},{text:`🍜 日本食ブームが海外で拡大。食品輸出が好調。`,stock:.03,etf:.02,reit:0,crypto:.01},{text:`🚆 鉄道利用者が過去最高を記録。`,stock:.02,etf:.01,reit:.02,crypto:0},{text:`🛣️ 高速道路の大規模改修計画が始動。`,stock:.03,etf:.02,reit:.02,crypto:0},{text:`🚧 老朽化インフラ問題が深刻化。`,stock:-.03,etf:-.02,reit:-.03,crypto:0},{text:`🏗️ 全国で再開発プロジェクトが相次ぐ。`,stock:.03,etf:.02,reit:.05,crypto:0},{text:`🛁 高機能バス設備が人気。住宅関連市場が活況。`,stock:.01,etf:.01,reit:.02,crypto:0},{text:`🚿 節水設備の普及が急拡大。`,stock:.01,etf:.01,reit:.01,crypto:0},{text:`🏡 中古住宅リフォーム需要が急増。`,stock:.02,etf:.01,reit:.04,crypto:0},{text:`📉 住宅価格が急落。不動産市場に警戒感。`,stock:-.02,etf:-.01,reit:-.07,crypto:-.01},{text:`🌊 海洋資源開発プロジェクトが始動。`,stock:.03,etf:.02,reit:0,crypto:.01},{text:`🏞️ 河川整備への大型予算が決定。`,stock:.02,etf:.01,reit:.02,crypto:0},{text:`⛰️ 山岳観光が大ブーム。地方経済が活性化。`,stock:.02,etf:.01,reit:.02,crypto:0},{text:`🏜️ 世界的な干ばつで農作物価格が上昇。`,stock:-.03,etf:-.02,reit:0,crypto:0},{text:`🌴 熱帯地域で感染症が拡大。市場に警戒感。`,stock:-.04,etf:-.02,reit:-.01,crypto:-.02},{text:`🌨️ 大雪で交通網が麻痺。物流に大きな影響。`,stock:-.03,etf:-.02,reit:-.02,crypto:0},{text:`🏔️ 雪崩が発生。観光地に大きな被害。`,stock:-.02,etf:-.01,reit:-.03,crypto:0},{text:`⛰️ 大規模な地滑りで道路網が寸断。`,stock:-.03,etf:-.02,reit:-.04,crypto:0},{text:`🌊 河川氾濫で住宅地に被害。`,stock:-.04,etf:-.02,reit:-.06,crypto:-.01},{text:`🕵️ 国際的なスパイ事件が発覚。外交関係が悪化。`,stock:-.04,etf:-.02,reit:-.01,crypto:-.02},{text:`🚔 大規模な治安対策が実施される。`,stock:.01,etf:.01,reit:.01,crypto:0},{text:`🪖 防衛関連予算が大幅に増額された。`,stock:.03,etf:.02,reit:0,crypto:.01},{text:`🇯🇵 自衛隊の災害派遣体制が強化された。`,stock:.01,etf:.01,reit:.01,crypto:0},{text:`⚠️ 反社会的組織による事件が相次ぎ、治安不安が高まる。`,stock:-.03,etf:-.02,reit:-.03,crypto:-.01},{text:`🛡️ 地域の防犯活動が強化される。`,stock:.01,etf:0,reit:.01,crypto:0},{text:`🎌 日本アニメが世界的ブーム。関連企業が好調。`,stock:.03,etf:.02,reit:0,crypto:.02},{text:`🎮 世界的ゲームタイトルが大ヒット。`,stock:.04,etf:.02,reit:0,crypto:.03},{text:`🎥 動画サイト発の作品が映画化され大ヒット。`,stock:.02,etf:.01,reit:0,crypto:.02},{text:`🍱 日本の食文化が海外で再評価される。`,stock:.02,etf:.01,reit:0,crypto:0},{text:`🌕 月面基地建設計画が正式決定。`,stock:.05,etf:.03,reit:0,crypto:.03},{text:`🛰️ 衛星通信網が世界規模で拡大。`,stock:.04,etf:.02,reit:0,crypto:.02},{text:`🚀 ロケット打ち上げ失敗。宇宙関連株が下落。`,stock:-.03,etf:-.01,reit:0,crypto:-.01},{text:`☄️ 彗星の地球接近が話題となり宇宙産業への関心が急上昇。`,stock:.02,etf:.01,reit:0,crypto:.02},{text:`🌡️ 世界平均気温が過去最高を更新。`,stock:-.02,etf:-.01,reit:-.02,crypto:0},{text:`🔥 猛暑で電力需要が急増。`,stock:-.01,etf:0,reit:-.01,crypto:0},{text:`🌬️ 異常気象が世界各地で相次ぐ。`,stock:-.04,etf:-.03,reit:-.03,crypto:-.01},{text:`🌱 気候対策への巨額投資が決定。`,stock:.03,etf:.02,reit:.01,crypto:.01},{text:`🗳️ 政権交代が決定。新たな経済政策への期待が高まる。`,stock:.03,etf:.02,reit:.01,crypto:.02},{text:`🏛️ 大規模な経済対策が発表された。`,stock:.05,etf:.03,reit:.03,crypto:.03},{text:`💸 大型減税が決定。個人消費の拡大に期待。`,stock:.04,etf:.02,reit:.02,crypto:.02},{text:`📜 法改正への不透明感から市場が下落。`,stock:-.03,etf:-.02,reit:-.01,crypto:-.03},{text:`🌎 大統領選挙をめぐる混乱が長期化。`,stock:-.05,etf:-.03,reit:-.02,crypto:-.04},{text:`🚨 国家指導者を狙った暗殺事件が発生。世界市場に緊張が走る。`,stock:-.08,etf:-.05,reit:-.03,crypto:-.07},{text:`📈 世界経済が予想を上回る成長を記録。`,stock:.06,etf:.04,reit:.03,crypto:.05},{text:`📉 世界的な景気後退への懸念が強まる。`,stock:-.06,etf:-.04,reit:-.03,crypto:-.06},{text:`🏦 大手銀行の経営不安が表面化。`,stock:-.07,etf:-.05,reit:-.04,crypto:-.05},{text:`💥 金融危機が発生。世界市場が急落。`,stock:-.15,etf:-.1,reit:-.12,crypto:-.18},{text:`💹 金融危機からの回復期待で市場が急反発。`,stock:.1,etf:.07,reit:.06,crypto:.12},{text:`💴 インフレ率が低下。市場に安心感が広がる。`,stock:.03,etf:.02,reit:.03,crypto:.03},{text:`🔥 インフレが急加速。生活費が上昇。`,stock:-.04,etf:-.03,reit:-.03,crypto:-.02},{text:`🌾 世界的な小麦豊作。食料価格が下落。`,stock:.02,etf:.01,reit:0,crypto:0},{text:`🍚 米不足が発生。店頭価格が急騰。`,stock:-.02,etf:-.01,reit:0,crypto:0},{text:`🌱 大豆が歴史的な豊作。食品企業に追い風。`,stock:.02,etf:.01,reit:0,crypto:0},{text:`🚜 スマート農業が急速に普及。生産性が向上。`,stock:.03,etf:.02,reit:.01,crypto:.01},{text:`🐟 漁業資源が回復。水産業の業績改善に期待。`,stock:.02,etf:.01,reit:0,crypto:0},{text:`🌊 海水温上昇で漁場が大きく変化。`,stock:-.02,etf:-.01,reit:0,crypto:0},{text:`⚡ 電力不足が深刻化。企業活動に影響。`,stock:-.04,etf:-.02,reit:-.02,crypto:-.03},{text:`☀️ 太陽光発電コストが大幅に低下。`,stock:.03,etf:.02,reit:.01,crypto:0},{text:`🌊 次世代水力発電技術の実用化に成功。`,stock:.03,etf:.02,reit:0,crypto:.01},{text:`🔥 火力発電の燃料価格が急騰。`,stock:-.03,etf:-.02,reit:-.01,crypto:0},{text:`☢️ 原子力発電所でトラブル。電力供給への不安が広がる。`,stock:-.05,etf:-.03,reit:-.02,crypto:-.02},{text:`🔋 革新的な蓄電池の量産化に成功。`,stock:.05,etf:.03,reit:.01,crypto:.02},{text:`🛢️ 主要産油国が原油の大幅減産を決定。`,stock:-.04,etf:-.02,reit:-.01,crypto:0},{text:`🛢️ 大規模油田が新たに発見された。`,stock:.03,etf:.02,reit:.01,crypto:0},{text:`⛏️ レアメタル不足でハイテク製品の生産が減少。`,stock:-.04,etf:-.03,reit:0,crypto:.01},{text:`🪖 各国が防衛費を大幅に増額。防衛産業が活況。`,stock:.03,etf:.02,reit:-.01,crypto:.01},{text:`🚢 海上輸送ルートで緊張が高まる。物流費が急騰。`,stock:-.05,etf:-.03,reit:-.01,crypto:-.02},{text:`🕊️ 各国が和平協定に署名。世界市場が上昇。`,stock:.07,etf:.05,reit:.03,crypto:.05},{text:`🚔 犯罪件数が大幅に減少。地域経済に安心感。`,stock:.01,etf:.01,reit:.02,crypto:0},{text:`🕵️ 機密情報の流出事件が発覚。国際関係が緊張。`,stock:-.04,etf:-.02,reit:-.01,crypto:-.03},{text:`👶 少子化がさらに加速。将来の国内消費に懸念。`,stock:-.02,etf:-.01,reit:-.02,crypto:0},{text:`👴 高齢者人口が過去最高を更新。`,stock:-.01,etf:0,reit:-.01,crypto:0},{text:`🏥 医療技術の進歩で平均寿命がさらに伸びる。`,stock:.02,etf:.01,reit:.01,crypto:0},{text:`🏘️ 地方への移住ブームが発生。地方不動産に注目が集まる。`,stock:.01,etf:.01,reit:.04,crypto:0},{text:`🏙️ 都市部への人口集中がさらに進む。`,stock:.01,etf:.01,reit:.03,crypto:0},{text:`⚽ サッカー世界大会が開幕。関連消費が拡大。`,stock:.02,etf:.01,reit:.01,crypto:0},{text:`⚾ 野球の世界大会で日本代表が優勝。`,stock:.02,etf:.01,reit:0,crypto:0},{text:`🏃 世界的スポーツ大会の国内開催が決定。`,stock:.03,etf:.02,reit:.04,crypto:.01},{text:`🏟️ 全国で大型スタジアム建設が相次ぐ。`,stock:.02,etf:.01,reit:.03,crypto:0},{text:`🎬 日本映画が世界興行収入の記録を更新。`,stock:.03,etf:.02,reit:0,crypto:.01},{text:`📺 動画配信市場が急成長。テレビ離れが加速。`,stock:.03,etf:.02,reit:0,crypto:.02},{text:`🎨 日本のアニメ市場が過去最大規模に成長。`,stock:.04,etf:.02,reit:0,crypto:.02},{text:`🎮 eスポーツ市場が急拡大。`,stock:.03,etf:.02,reit:0,crypto:.03},{text:`🌐 世界同時株高。投資家心理が一気に改善。`,stock:.12,etf:.08,reit:.05,crypto:.1},{text:`💥 世界的な市場暴落が発生。金融市場が混乱。`,stock:-.18,etf:-.12,reit:-.1,crypto:-.2},{text:`🚀 革命的な新技術が実用化。世界経済への期待が急上昇。`,stock:.1,etf:.06,reit:.02,crypto:.08},{text:`🌍 世界経済が長期好景気に突入。`,stock:.08,etf:.05,reit:.05,crypto:.07},{text:`📰 大きなニュースはなかった。`,stock:0,etf:0,reit:0,crypto:0}];return e[Math.floor(Math.random()*e.length)]}function R(){let e=[{text:`昇進した。月収が1万円上がった。`,cash:0,income:1e4},{text:`ボーナス20万円を受け取った。`,cash:2e5,income:0},{text:`医療費5万円を支払った。`,cash:-5e4,income:0},{text:`副業収入3万円が入った。`,cash:3e4,income:0},{text:`特に何も起こらなかった。`,cash:0,income:0}];return e[Math.floor(Math.random()*e.length)]}function z(){let e=`時間を味方につけた者が、最後に勝つ。.複利は世界で最も強力な力の一つ。.卵は一つのカゴに盛るな。.安い時に恐れず、高い時に浮かれない。.投資はマラソン。短距離走ではない。.暴落は優良資産のバーゲンセール。.現金は守り、投資は攻め。.感情は投資の最大の敵。.利益は我慢した人に訪れる。.最悪なのは何もしないこと。.市場は短期では投票機、長期では計量機。.未来は誰にも読めない。だから分散する。.毎月積み立てることが最大の武器。.価格ではなく価値を見極めよう。.リスクとは値動きではなく、理解不足である。.お金にも働いてもらおう。.収入より支出の管理が重要。.資産形成は生活習慣で決まる。.今日の浪費は未来の資産を減らす。.焦って売買すると手数料だけが増える。.暴騰より継続が強い。.人生最大の投資は自分への投資。.知識は最高の資産。.借金は使い方次第で武器にもなる。.配当は小さな給料日。.長期投資は時間との共同作業。.チャンスは悲観の中に生まれる。.相場を当てるより、生き残ることが大切。.市場から退場しない人が勝者になる。.資産家はお金のためではなく、自由のために投資する。`.split(`.`);return e[Math.floor(Math.random()*e.length)]}function B(){a.innerHTML=`
    <div class="screen title-screen">
      <h1>結果発表</h1>
      <p>あなたの総資産</p>
      <h2>${d(f())}</h2>
      <p>人生を選び、お金を学び、資産家になる。</p>
      <button onclick="location.reload()">もう一度遊ぶ</button>
    </div>
  `}h();