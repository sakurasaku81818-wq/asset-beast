import { fpQuiz } from './date/fpQuiz.js'
import './style.css'

const app = document.querySelector('#app')

let player = {
  age: 20,
  month: 1,
  job: null,
  region: null,
  house: null,
  cash: 300000,
  fpExp: 0,
  fpLevel: 1,
  stock: 0,
  etf: 0,
  reit: 0,
  crypto: 0,
  log: 'AssetBeastの人生が始まった。',
  news: '平和な1日だった。'
}

const data = localStorage.getItem("assetBeastSave")

if (data) {
  Object.assign(player, JSON.parse(data))
}

let currentPlace = null

const jobs = [
  { name: '会社員', income: 280000 },
  { name: '公務員', income: 260000 },
  { name: 'エンジニア', income: 320000 },
  { name: 'フリーター', income: 180000 }
]

const regions = [
  { name: '埼玉', salaryRate: 1.0, costRate: 0.9, style: 'saitama' },
  { name: '東京', salaryRate: 1.2, costRate: 1.4, style: 'tokyo' },
  { name: '福岡', salaryRate: 0.9, costRate: 0.8, style: 'fukuoka' },
  { name: '沖縄', salaryRate: 0.9, costRate: 0.8, style: 'okinawa' }
]

const houses = [
  { name: '実家', cost: 30000 },
  { name: '賃貸', cost: 90000 },
  { name: 'マンション', cost: 130000 }
]

function yen(n) {
  return Math.floor(n).toLocaleString() + '円'
}
function man(n) {
  return (Math.floor(n / 10000)).toLocaleString() + "万円"
}

function totalAssets() {
  return player.cash + player.stock + player.etf + player.reit + player.crypto
}

function renderTitle() {
  app.innerHTML = `
    <div class="screen title-screen">
      <h1>AssetBeast</h1>
      <p>人生を選び、<br>お金を学び、<br>資産家になる。</p>
      
      <button id="startBtn">GAME START</button>

      ${localStorage.getItem("assetBeastSave")
  ? '<button id="continueGame">続きから</button>'
  : ''}
    </div>
  `

  document.querySelector('#startBtn').onclick = newGame

const continueBtn = document.querySelector('#continueGame')

if (continueBtn) {
  continueBtn.onclick = loadGame
}
  
}
function newGame() {
  localStorage.removeItem("assetBeastSave")

  player = {
    age: 20,
    month: 1,
    job: null,
    region: null,
    house: null,
    cash: 300000,
    fpExp: 0,
    fpLevel: 1,
    stock: 0,
    etf: 0,
    reit: 0,
    crypto: 0,
    log: "AssetBeastの人生が始まった。",
    news: "平和な1日だった。"
  }

  renderJobSelect()
}

function renderJobSelect() {
  app.innerHTML = `
    <div class="screen">
      <h2>職業を選ぶ</h2>
      <div class="card-list">
        ${jobs.map((job, i) => `
          <div class="card">
            <h3>${job.name}</h3>
            <p>月収：${yen(job.income)}</p>
            <button data-i="${i}">選ぶ</button>
          </div>
        `).join('')}
      </div>
    </div>
  `

  document.querySelectorAll('[data-i]').forEach(btn => {
    btn.onclick = () => {
      player.job = jobs[btn.dataset.i]
      renderRegionSelect()
    }
  })
}

function renderRegionSelect() {
  app.innerHTML = `
    <div class="screen">
      <h2>地域を選ぶ</h2>
      <div class="card-list">
        ${regions.map((region, i) => `
          <div class="card">
            <h3>${region.name}</h3>
            <p>賃金：${region.salaryRate}倍</p>
            <p>生活費：${region.costRate}倍</p>
            <button data-i="${i}">住む</button>
          </div>
        `).join('')}
      </div>
      <button id="back">← 職業を選び直す</button>
    </div>
  `

  document.querySelectorAll('[data-i]').forEach(btn => {
    btn.onclick = () => {
      player.region = regions[btn.dataset.i]
      renderHouseSelect()
    }
  })

  document.querySelector('#back').onclick = renderJobSelect
}

function renderHouseSelect() {
  app.innerHTML = `
    <div class="screen">
      <h2>住居を選ぶ</h2>
      <div class="card-list">
        ${houses.map((house, i) => `
          <div class="card">
            <h3>${house.name}</h3>
            <p>毎月：${yen(house.cost)}</p>
            <button data-i="${i}">住む</button>
          </div>
        `).join('')}
      </div>
      <button id="back">← 地域を選び直す</button>
    </div>
  `

  document.querySelectorAll('[data-i]').forEach(btn => {
    btn.onclick = () => {
      player.house = houses[btn.dataset.i]
      renderTown()
    }
  })
 
  document.querySelector('#back').onclick = renderRegionSelect
}

 function renderTown() {
  app.innerHTML = `
  <div class="mobile-controls">
  <button id="moveUp">▲</button>

  <div>
    <button id="moveLeft">◀</button>
    <button id="moveDown">▼</button>
    <button id="moveRight">▶</button>
  </div>

  <button id="enterButton">入る</button>
</div>
   
   <div class="game-wrap ${player.region.style}">
      <div class="status">
        <h2>${player.region.name}の街</h2>
        <p>${player.age}歳 ${player.month}ヶ月目</p>
        <p>職業：${player.job.name}</p>
        <p>住居：${player.house.name}</p>
        <hr>
        <p>現金：${yen(player.cash)}</p>
        <p>株：${yen(player.stock)}</p>
        <p>ETF：${yen(player.etf)}</p>
        <p>REIT：${yen(player.reit)}</p>
        <p>仮想通貨：${yen(player.crypto)}</p>
        <hr>
        <p>総資産：${yen(totalAssets())}</p>
      </div>

      <div id="town">
        <div id="player">🏃</div>

        <div class="building work" data-place="work"><div class="roof"></div><span>仕事</span></div>
        <div class="building securities" data-place="securities"><div class="roof"></div><span>証券会社</span></div>
        <div class="building realestate" data-place="realestate"><div class="roof"></div><span>不動産屋</span></div>
        <div class="building home" data-place="home"><div class="roof"></div><span>自宅</span></div>
        <div class="building school" data-place="school"><div class="roof"></div><span>学校</span></div>
      </div>

      <div class="message">
        ${player.log}<br>
        📰 ${player.news}<br>
        操作：WASD / 矢印キーで移動
      </div>
    </div>
  `

  setupTown()
}

function setupTown() {
  const playerEl = document.querySelector('#player')
  let x = 40
  let y = 40
  const step = 40

  playerEl.style.left = x + 'px'
  playerEl.style.top = y + 'px'

  
 document.onkeydown = e => {
    if (e.key === 'e' && currentPlace) {
      enterPlace(currentPlace)
      return
    }

    let nextX = x
    let nextY = y

    if (e.key === 'ArrowRight' || e.key === 'd') nextX += step
    if (e.key === 'ArrowLeft' || e.key === 'a') nextX -= step
    if (e.key === 'ArrowDown' || e.key === 's') nextY += step
    if (e.key === 'ArrowUp' || e.key === 'w') nextY -= step

    if (nextX < 0 || nextX > 520 || nextY < 0 || nextY > 360) return

    x = nextX
    y = nextY

    playerEl.style.left = x + 'px'
    playerEl.style.top = y + 'px'

    checkBuilding(x, y)
  }
   const pressKey = key => {
    document.dispatchEvent(
      new KeyboardEvent('keydown', { key })
    )
  }

  document.querySelector('#moveUp').onclick =
    () => pressKey('ArrowUp')

  document.querySelector('#moveDown').onclick =
    () => pressKey('ArrowDown')

  document.querySelector('#moveLeft').onclick =
    () => pressKey('ArrowLeft')

  document.querySelector('#moveRight').onclick =
    () => pressKey('ArrowRight')
    document.querySelector('#enterButton').onclick = () => {
  if (currentPlace) {
    enterPlace(currentPlace)
  } else {
    alert("建物の近くまで移動してください")
  }
}
}
function checkBuilding(x, y) {
  currentPlace = null

  document.querySelectorAll('.building').forEach(building => {
    const bx = building.offsetLeft
    const by = building.offsetTop

    if (Math.abs(x - bx) <= 40 && Math.abs(y - by) <= 40) {
      currentPlace = building.dataset.place
    }
  })

  const message = document.querySelector('.message')
  if (!message) return

  if (currentPlace) {
    message.innerHTML = `
      ${player.log}<br>
      📰 ${player.news}<br>
      Eキー：施設に入る
    `
  } else {
    message.innerHTML = `
      ${player.log}<br>
      📰 ${player.news}<br>
      操作：WASD / 矢印キーで移動
    `
  }
}

function enterPlace(place) {
  if (place === 'securities') renderSecurities()
  if (place === 'realestate') renderRealEstate()
  if (place === 'home') renderHome()
  if (place === 'work') renderWork()
  if (place === 'school') renderSchool()
}

function renderSecurities() {
  app.innerHTML = `
    <div class="securities-layout">

      <div class="screen shop-screen">
        <h2>🏦 証券会社</h2>
        <p>金融資産に投資できます。</p>

        <div class="asset-grid">

          <div class="asset-card">
            <h3>📈 株</h3>
            <p class="asset-value">
              現在：${player.stock.toLocaleString()}円
            </p>

            <div class="asset-actions">
              <button id="buyStock">10万円買う</button>
              <button id="sellStock">10万円売る</button>
            </div>

            <p class="asset-description">成長狙い</p>
          </div>

          <div class="asset-card">
            <h3>📊 ETF</h3>
            <p class="asset-value">
              現在：${player.etf.toLocaleString()}円
            </p>

            <div class="asset-actions">
              <button id="buyEtf">10万円買う</button>
              <button id="sellEtf">10万円売る</button>
            </div>

            <p class="asset-description">分散投資</p>
          </div>

          <div class="asset-card">
            <h3>🏢 REIT</h3>
            <p class="asset-value">
              現在：${player.reit.toLocaleString()}円
            </p>

            <div class="asset-actions">
              <button id="buyReit">10万円買う</button>
              <button id="sellReit">10万円売る</button>
            </div>

            <p class="asset-description">不動産投資</p>
          </div>

          <div class="asset-card">
            <h3>₿ 仮想通貨</h3>
            <p class="asset-value">
              現在：${player.crypto.toLocaleString()}円
            </p>

            <div class="asset-actions">
              <button id="buyCrypto">10万円買う</button>
              <button id="sellCrypto">10万円売る</button>
            </div>

            <p class="asset-description">高リスク・高変動</p>
          </div>

        </div>

        <button id="backTown">街へ戻る</button>
      </div>

      <div class="status-card">
        <h3>資産状況</h3>

        <p>💴 現金：${yen(player.cash)}</p>
        <p>📈 株：${yen(player.stock)}</p>
        <p>📊 ETF：${yen(player.etf)}</p>
        <p>🏢 REIT：${yen(player.reit)}</p>
        <p>₿ 仮想通貨：${yen(player.crypto)}</p>

        <hr>

        <p>
          <strong>
            総資産：
            ${yen(totalAssets())}
          </strong>
        </p>
      </div>

    </div>
  `

  document.querySelector('#buyStock').onclick = () => buyAsset('stock')
  document.querySelector('#buyEtf').onclick = () => buyAsset('etf')
  document.querySelector('#buyReit').onclick = () => buyAsset('reit')
  document.querySelector('#buyCrypto').onclick = () => buyAsset('crypto')

  document.querySelector('#sellStock').onclick = () => sellAsset('stock')
  document.querySelector('#sellEtf').onclick = () => sellAsset('etf')
  document.querySelector('#sellReit').onclick = () => sellAsset('reit')
  document.querySelector('#sellCrypto').onclick = () => sellAsset('crypto')

  document.querySelector('#backTown').onclick = renderTown
}

function buyAsset(type) {
  if (player.cash < 100000) {
    alert('現金が足りない')
    return
  }

  player.cash -= 100000
  player[type] += 100000
  player.log = '10万円分の資産を購入した。'
  renderSecurities()
}
function sellAsset(type) {
  if (player[type] < 100000) {
    alert('売れる資産が足りない')
    return
  }
  function updateMarket() {
  const rates = {
    stock: randomRate(-10, 15),
    etf: randomRate(-5, 8),
    reit: randomRate(-4, 6),
    crypto: randomRate(-20, 25)
  }

  player.stock = applyRate(player.stock, rates.stock)
  player.etf = applyRate(player.etf, rates.etf)
  player.reit = applyRate(player.reit, rates.reit)
  player.crypto = applyRate(player.crypto, rates.crypto)

  player.log =
    `市場変動：株 ${formatRate(rates.stock)} / ` +
    `ETF ${formatRate(rates.etf)} / ` +
    `REIT ${formatRate(rates.reit)} / ` +
    `仮想通貨 ${formatRate(rates.crypto)}`
}

function randomRate(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function applyRate(amount, rate) {
  return Math.max(0, Math.round(amount * (1 + rate / 100)))
}

function formatRate(rate) {
  return `${rate >= 0 ? '+' : ''}${rate}%`
}

  player.cash += 100000
  player[type] -= 100000
  player.log = '10万円分の資産を売却した。'
  renderSecurities()
}
function renderRealEstate() {
  const properties = [
  { name: "戸建て", price: 30000000, rentIncome: 80000 },
  { name: "マンション", price: 45000000, rentIncome: 120000 },
  { name: "アパート", price: 80000000, rentIncome: 250000 }
]

  const propertyCards = properties.map((property, index) => {
    const canBuy = player.cash >= property.price
    const alreadyOwned = player.house?.name === property.name

    return `
      <div class="card">
        <h3>${property.name}</h3>
        <p>価格：${man(property.price)}</p>
　　　　　<p>家賃収入：月${property.rentIncome.toLocaleString()}円</p>

        <button
          class="buyProperty"
          data-index="${index}"
          ${!canBuy || alreadyOwned ? "disabled" : ""}
        >
          ${
            alreadyOwned
              ? "所有中"
              : canBuy
                ? "購入する"
                : "資金不足"
          }
        </button>
      </div>
    `
  }).join("")

  app.innerHTML = `
    <div class="screen shop-screen">
      <h2>🏠 不動産屋</h2>
      <p>家・マンション・アパートを購入できます。</p>

      <div class="card-list">
        ${propertyCards}
      </div>

      <button id="backTown">街へ戻る</button>
    </div>
  `

  document.querySelectorAll(".buyProperty").forEach(button => {
    button.onclick = () => {
      const property = properties[Number(button.dataset.index)]

      if (player.cash < property.price) {
        alert("資金が足りません")
        return
      }

      player.cash -= property.price

      player.house = {
        name: property.name,
        cost: 0
      }

      player.log = `${property.name}を${yen(property.price)}で購入した。`

      alert(`${property.name}を購入しました！`)
      renderTown()
    }
  })

  document.querySelector("#backTown").onclick = renderTown
}

function renderWork() {
  app.innerHTML = `
    <div class="screen">
      <h2>🏢 仕事</h2>
      <p>${player.job.name}として働いている。</p>
      <p>月収：${yen(player.job.income * player.region.salaryRate)}</p>
      <button id="backTown">街へ戻る</button>
    </div>
  `

  document.querySelector('#backTown').onclick = renderTown
}

function renderSchool() {
  app.innerHTML = `
    <div class="screen">
      <h2>🎓 学校</h2>
      <p>ここでは将来、資格やスキルを学べる。</p>
      <p>FPレベル：${player.fpLevel}</p>
      <p>経験値：${player.fpExp}/100</p>
      <button id="studyFP">FP初級</button>

      <button disabled>
        FP中級（Lv3）
      </button>

      <button disabled>
        FP上級（Lv5）
      </button>

      <button id="backTown">街へ戻る</button>
    </div>
  `

  document.querySelector('#studyFP').onclick = showFPQuiz
  document.querySelector('#backTown').onclick = renderTown
}

function renderHome() {
  app.innerHTML = `
    <div class="screen">
      <h2>🏡 自宅</h2>
      <p>家で休むと1ヶ月が進みます。</p>
      <button id="nextMonth">💾 寝る（保存）</button>
      <button id="nextMonthNoSave">⏭️ 寝る（保存しない）</button>
      <button id="quitGame">🚪 ゲーム終了</button>
      <button id="backTown">街へ戻る</button>
    </div>
  `

  document.querySelector('#nextMonth').onclick = () => nextMonth(true)
  document.querySelector('#nextMonthNoSave').onclick = () => nextMonth(false)
  document.querySelector('#quitGame').onclick = quitGame
  document.querySelector('#backTown').onclick = renderTown
}
function quitGame() {
  if (confirm("保存してタイトルへ戻りますか？")) {
    renderTitle()
  }
}
function nextMonth(shouldSave = true) {
  const salary = player.job.income * player.region.salaryRate
  const livingCost = player.house.cost * player.region.costRate + 70000

  const dividend =
    player.stock * 0.002 +
    player.etf * 0.0015 +
    player.reit * 0.003

  const rentIncome = player.house?.rentIncome || 0
  const news = getMonthlyNews()
  const lifeEvent = getLifeEvent()
  const quote = getQuote()

  player.cash += salary + dividend + rentIncome
  player.cash -= livingCost

  player.stock *= 1 + randomRate(-0.05, 0.08) + news.stock
  player.etf *= 1 + randomRate(-0.03, 0.05) + news.etf
  player.reit *= 1 + randomRate(-0.02, 0.04) + news.reit
  player.crypto *= 1 + randomRate(-0.15, 0.2) + news.crypto

  player.cash += lifeEvent.cash
  player.job.income += lifeEvent.income

  player.month += 1
  updateMarket()

  const randomEvent = getRandomEvent()

  if (player.month > 12) {
    player.month = 1
    player.age += 1
  }

  player.news = randomEvent ? randomEvent.text : news.text

  player.log = `
    給料 ${yen(salary)} / 生活費 ${yen(livingCost)} / 配当 ${yen(dividend)} / 家賃 ${yen(rentIncome)}。
    ${lifeEvent.text}<br>
    格言：${quote}
  `

  if (player.age >= 50) {
    renderEnding()
    return
  }
 if (shouldSave) {
  saveGame()
}
  renderTown()
}

function showFPQuiz() {
  const quiz = fpQuiz[Math.floor(Math.random() * fpQuiz.length)]

  const shuffledChoices = quiz.choices
  .map((choice, originalIndex) => ({
    choice,
    originalIndex
  }))
  .sort(() => Math.random() - 0.5)
  app.innerHTML = `
    <div class="screen">
      <h2>🎓 FPクイズ</h2>
      <p>所持金：${yen(player.cash)}</p>
      <p>${quiz.question}</p>

     ${shuffledChoices.map(item => `
  <button class="quizBtn" data-i="${item.originalIndex}">
    ${item.choice}
  </button>
`).join('')}

      <br><br>

      <button id="backSchool">学校へ戻る</button>
    </div>
  `  
document.querySelectorAll('.quizBtn').forEach(btn => {
  btn.onclick = () => {
    const answer = Number(btn.dataset.i)

    if (answer === quiz.answer) {
      player.cash += 5000
      player.fpExp += 10

      if (player.fpExp >= 100) {
        player.fpExp -= 100
        player.fpLevel += 1

        alert(`🎉 レベルアップ！

FPレベル ${player.fpLevel} になった！

${quiz.explanation}`)
      } else {
        alert(`⭕ 正解！

報酬：5,000円
FP経験値：${player.fpExp} / 100

${quiz.explanation}`)
      }
    } else {
      alert(`❌ 不正解

${quiz.explanation}`)
    }

    renderSchool()
  }
})

document.querySelector('#backSchool').onclick = renderSchool
}


function randomRate(min, max) {
  return Math.random() * (max - min) + min
}

function getMonthlyNews() {
  const newsList = [
    { text: 'AI投資ブーム。株式市場に追い風。', stock: 0.06, etf: 0.02, reit: 0, crypto: 0.03 },
    { text: '金利上昇。不動産とREITに逆風。', stock: -0.01, etf: -0.01, reit: -0.06, crypto: -0.02 },
    { text: '地政学リスクが高まる。市場全体が下落。', stock: -0.05, etf: -0.03, reit: -0.02, crypto: -0.08 },
    { text: '世界景気が回復。市場全体が上昇。', stock: 0.05, etf: 0.03, reit: 0.02, crypto: 0.04 },
    { text: '仮想通貨市場が急騰。', stock: 0, etf: 0, reit: 0, crypto: 0.15 },
    { text: '大きなニュースはなかった。', stock: 0, etf: 0, reit: 0, crypto: 0 }
  ]

  return newsList[Math.floor(Math.random() * newsList.length)]
}

function getLifeEvent() {
  const events = [
    { text: '昇進した。月収が1万円上がった。', cash: 0, income: 10000 },
    { text: 'ボーナス20万円を受け取った。', cash: 200000, income: 0 },
    { text: '医療費5万円を支払った。', cash: -50000, income: 0 },
    { text: '副業収入3万円が入った。', cash: 30000, income: 0 },
    { text: '特に何も起こらなかった。', cash: 0, income: 0 }
  ]

  return events[Math.floor(Math.random() * events.length)]
}

function getQuote() {
  const quotes = [
    '時間を味方につけた者が、最後に勝つ。',
    '複利は世界で最も強力な力の一つ。',
    '卵は一つのカゴに盛るな。',
    '安い時に恐れず、高い時に浮かれない。',
    '投資はマラソン。短距離走ではない。',
    '暴落は優良資産のバーゲンセール。',
    '現金は守り、投資は攻め。',
    '感情は投資の最大の敵。',
    '利益は我慢した人に訪れる。',
    '最悪なのは何もしないこと。',
    '市場は短期では投票機、長期では計量機。',
    '未来は誰にも読めない。だから分散する。',
    '毎月積み立てることが最大の武器。',
    '価格ではなく価値を見極めよう。',
    'リスクとは値動きではなく、理解不足である。',
    'お金にも働いてもらおう。',
    '収入より支出の管理が重要。',
    '資産形成は生活習慣で決まる。',
    '今日の浪費は未来の資産を減らす。',
    '焦って売買すると手数料だけが増える。',
    '暴騰より継続が強い。',
    '人生最大の投資は自分への投資。',
    '知識は最高の資産。',
    '借金は使い方次第で武器にもなる。',
    '配当は小さな給料日。',
    '長期投資は時間との共同作業。',
    'チャンスは悲観の中に生まれる。',
    '相場を当てるより、生き残ることが大切。',
    '市場から退場しない人が勝者になる。',
    '資産家はお金のためではなく、自由のために投資する。'
  ]

  return quotes[Math.floor(Math.random() * quotes.length)]
}
function updateMarket() {
  player.stock = Math.max(
    0,
    Math.round(player.stock * (0.95 + Math.random() * 0.10))
  )

  player.etf = Math.max(
    0,
    Math.round(player.etf * (0.98 + Math.random() * 0.04))
  )

  player.reit = Math.max(
    0,
    Math.round(player.reit * (0.99 + Math.random() * 0.02))
  )

  player.crypto = Math.max(
    0,
    Math.round(player.crypto * (0.80 + Math.random() * 0.40))
  )
}
function renderEnding() {
  app.innerHTML = `
    <div class="screen title-screen">
      <h1>結果発表</h1>
      <p>あなたの総資産</p>
      <h2>${yen(totalAssets())}</h2>
      <p>人生を選び、お金を学び、資産家になる。</p>
      <button onclick="location.reload()">もう一度遊ぶ</button>
    </div>
  `
}
function saveGame() {
  localStorage.setItem("assetBeastSave", JSON.stringify(player))
  alert("ゲームを保存しました！")
}

function loadGame() {
  const data = localStorage.getItem("assetBeastSave")

  if (!data) {
    alert("セーブデータがありません。")
    return
  }

  Object.assign(player, JSON.parse(data))

  renderTown()

  alert("ゲームをロードしました！")
}
function getRandomEvent() {
  // 毎月30％の確率でイベント発生
  if (Math.random() > 0.3) {
    return null
  }

  // 誰にでも起こる生活イベント
  const lifeEvents = [
    {
      text: "🎉 臨時ボーナス！現金が100,000円増えた。",
      effect: () => {
        player.cash += 100000
      }
    },
    {
      text: "💸 急な出費が発生。現金が50,000円減った。",
      effect: () => {
        player.cash = Math.max(0, player.cash - 50000)
      }
    },
    {
      text: "📱 スマホが故障した。修理費20,000円を支払った。",
      effect: () => {
        player.cash = Math.max(0, player.cash - 20000)
      }
    },
    {
      text: "🎁 お祝い金をもらった。現金が30,000円増えた。",
      effect: () => {
        player.cash += 30000
      }
    },
    {
      text: "🏥 医療費50,000円を支払った。",
      effect: () => {
        player.cash = Math.max(0, player.cash - 50000)
      }
    },
    {
      text: "🎓 FPの知識が身についた！経験値が20増えた。",
      effect: () => {
        player.fpExp += 20
      }
    }
  ]

  // 株を持っている場合だけ追加
  const stockEvents = player.stock > 0
    ? [
        {
          text: "📈 好決算が発表された。株資産が10％増えた。",
          effect: () => {
            player.stock *= 1.1
          }
        },
        {
          text: "📉 株式市場が下落。株資産が10％減った。",
          effect: () => {
            player.stock *= 0.9
          }
        }
      ]
    : []

  // ETFを持っている場合だけ追加
  const etfEvents = player.etf > 0
    ? [
        {
          text: "🌍 世界経済が好調。ETF資産が7％増えた。",
          effect: () => {
            player.etf *= 1.07
          }
        },
        {
          text: "📉 世界市場が調整。ETF資産が5％減った。",
          effect: () => {
            player.etf *= 0.95
          }
        }
      ]
    : []

  // REITを持っている場合だけ追加
  const reitEvents = player.reit > 0
    ? [
        {
          text: "🏢 不動産市況が改善。REIT資産が8％増えた。",
          effect: () => {
            player.reit *= 1.08
          }
        },
        {
          text: "🏚️ 空室率が上昇。REIT資産が6％減った。",
          effect: () => {
            player.reit *= 0.94
          }
        }
      ]
    : []

  // 仮想通貨を持っている場合だけ追加
  const cryptoEvents = player.crypto > 0
    ? [
        {
          text: "🚀 仮想通貨が急騰！資産が20％増えた。",
          effect: () => {
            player.crypto *= 1.2
          }
        },
        {
          text: "💥 仮想通貨が暴落！資産が25％減った。",
          effect: () => {
            player.crypto *= 0.75
          }
        }
      ]
    : []

  const events = [
    ...lifeEvents,
    ...stockEvents,
    ...etfEvents,
    ...reitEvents,
    ...cryptoEvents
  ]

  const selectedEvent =
    events[Math.floor(Math.random() * events.length)]

  selectedEvent.effect()

  return selectedEvent
}
renderTitle()