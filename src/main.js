import { fpQuiz } from './date/fpQuiz.js'
import './style.css'

const bgm = new Audio('/asset-beast/Town-bgm.mp3')
bgm.loop = true
bgm.volume = 0.25

function startBgm() {
  bgm.play().catch(() => {})
}

document.addEventListener('pointerdown', startBgm, { once: true })

let bgmOn = true

function toggleBgm() {
  bgmOn = !bgmOn

  const btn = document.querySelector('#bgmBtn')

  if (bgmOn) {
    bgm.play().catch(() => {})
    if (btn) btn.innerHTML = '🔊<br>BGM'
  } else {
    bgm.pause()
    if (btn) btn.innerHTML = '🔇<br>BGM'
  }
}

window.toggleBgm = toggleBgm

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
  propertyValue: 0,
  propertyType: null,
  log: 'AssetBeastの人生が始まった。',
  news: '平和な1日だった。'
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

function totalAssets() {
  return player.cash
    + player.stock
    + player.etf
    + player.reit
    + player.crypto
    + (player.propertyValue || 0)
}
function saveGame() {
  try {
    alert('保存ボタンが押されました')

    const saveData = JSON.stringify(player)
    localStorage.setItem('assetBeastSave', saveData)

    alert('ゲームを保存しました！')
  } catch (error) {
    alert('保存エラー：' + error.message)
    console.error(error)
  }
}

window.saveGame = saveGame
function loadGame() {
  const savedData = localStorage.getItem('assetBeastSave')

  if (!savedData) {
    alert('セーブデータがありません')
    return
  }

  const data = JSON.parse(savedData)
  Object.assign(player, data)

  renderTown()
}
function renderTitle() {
  app.innerHTML = `
    <div class="screen title-screen">
      <h1>AssetBeast</h1>
      <p>人生を選び、<br>お金を学び、<br>資産家になる。</p>
      <button id="startBtn">GAME START</button>
      <button id="continueBtn">続きから</button>
    </div>
  `

  document.querySelector('#startBtn').onclick = renderJobSelect
  document.querySelector('#continueBtn').onclick = loadGame
}

window.renderTitle = renderTitle

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
    <div class="game-wrap ${player.region.style}">
    <div class="status">
  <div class="status-top">
    <div class="status-avatar"></div>

    <div class="status-info">
      <h2>${player.region.name}の街</h2>
      <p>
        ${player.age}歳 ${player.month}ヶ月目 /
        ${player.job.name} /
        ${player.house.name}
      </p>
    </div>
  </div>

  <div class="asset-row">
    <div>
      <span>現金</span>
      <strong>${yen(player.cash)}</strong>
    </div>

    <div>
      <span>株</span>
      <strong>${yen(player.stock)}</strong>
    </div>

    <div>
      <span>ETF</span>
      <strong>${yen(player.etf)}</strong>
    </div>

    <div>
      <span>REIT</span>
      <strong>${yen(player.reit)}</strong>
    </div>

    <div>
      <span>仮想通貨</span>
      <strong>${yen(player.crypto)}</strong>
    </div>

    <div>
      <span>不動産</span>
      <strong>${yen(player.propertyValue || 0)}</strong>
    </div>

    <div>
      <span>総資産</span>
      <strong>${yen(totalAssets())}</strong>
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
${player.news}<br>  
${player.log}<br>
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
  `

  setupTown()
}

function isRoad(x, y) {
  // 横方向の道路
  const horizontalRoad =
    y >= 120 &&
    y <= 240

  // 縦方向の道路
  const verticalRoad =
    x >= 200 &&
    x <= 360

  return horizontalRoad || verticalRoad
}

function setupTown() {
  const playerEl = document.querySelector('#player')
  let x = 240
  let y =320
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

    if (!isRoad(nextX, nextY)) return

    x = nextX
    y = nextY

    playerEl.style.left = x + 'px'
    playerEl.style.top = y + 'px'

    checkBuilding(x, y)
  }
   const townEl = document.querySelector('#town')

  if (townEl) {
    let touchStartX = 0
    let touchStartY = 0
    let touchMoved = false

townEl.addEventListener(
  'touchstart',
  e => {
    const touch = e.touches[0]

    touchStartX = touch.clientX
    touchStartY = touch.clientY
    touchMoved = false
  },
  { passive: true }
)

townEl.addEventListener(
  'touchmove',
  e => {
    const touch = e.touches[0]

    const moveX = touch.clientX - touchStartX
    const moveY = touch.clientY - touchStartY

    if (Math.abs(moveX) > 15 || Math.abs(moveY) > 15) {
      touchMoved = true
      e.preventDefault()
    }
  },
  { passive: false }
)

townEl.addEventListener(
  'touchend',
  e => {
    const touch = e.changedTouches[0]

    checkBuilding(x, y)
    
    // 施設の近くでタップしたら入る
  
    
    let nextX = x
    let nextY = y

    if (!touchMoved) {
      // タップした場所と、熊プロの画面上の位置を比較
      const playerRect = playerEl.getBoundingClientRect()

      const playerCenterX =
        playerRect.left + playerRect.width / 2
      const playerCenterY =
        playerRect.top + playerRect.height / 2

      const tapDiffX = touch.clientX - playerCenterX
      const tapDiffY = touch.clientY - playerCenterY

      if (Math.abs(tapDiffX) > Math.abs(tapDiffY)) {
        nextX += tapDiffX > 0 ? step : -step
      } else {
        nextY += tapDiffY > 0 ? step : -step
      }
    } else {
      // スワイプ
      const diffX = touch.clientX - touchStartX
      const diffY = touch.clientY - touchStartY

      if (Math.abs(diffX) > Math.abs(diffY)) {
        nextX += diffX > 0 ? step : -step
      } else {
        nextY += diffY > 0 ? step : -step
      }
    }

   if (
    nextX < 0 ||
    nextX > 520 ||
    nextY < 0 ||
    nextY > 360
   ) return

   if (!isRoad(nextX, nextY)) return

   x = nextX
   y = nextY

    playerEl.style.left = x + 'px'
    playerEl.style.top = y + 'px'

    checkBuilding(x, y)
    if (!touchMoved && currentPlace) {
      enterPlace(currentPlace)
      return
    }
  },
  { passive: true }
)
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
      操作：タップ・スワイプで移動
      施設の近くでタップして入る
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
window.enterPlace = enterPlace

function renderSecurities() {
  app.innerHTML = `
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
  `

      document.querySelector('#buyStock').onclick = () => buyAsset('stock')
      document.querySelector('#sellStock').onclick = () => sellAsset('stock')

      document.querySelector('#buyEtf').onclick = () => buyAsset('etf') 
      document.querySelector('#sellEtf').onclick = () => sellAsset('etf')

      document.querySelector('#buyReit').onclick = () => buyAsset('reit')
      document.querySelector('#sellReit').onclick = () => sellAsset('reit')

      document.querySelector('#buyCrypto').onclick = () => buyAsset('crypto')
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
  const amount = 100000

  if (player[type] < amount) {
    alert('保有額が足りません')
    return
  }

  player[type] -= amount
  player.cash += amount

  const names = {
    stock: '株',
    etf: 'ETF',
    reit: 'REIT',
    crypto: '仮想通貨'
  }

  player.log = `${names[type]}を10万円売却しました。`

  renderSecurities()
}
function renderRealEstate() {
  app.innerHTML = `
    <div class="screen shop-screen">
      <h2>🏠 不動産屋</h2>
      <p>家・マンション・アパートを購入できます。</p>

      <div class="card-list">
        <div class="card">
  <h3>戸建て</h3>
  <p>3,000万円</p>
  <button id="buyHouse" ${player.cash < 30000000 ? 'disabled' : ''}>
    ${player.cash < 30000000 ? '資金不足' : '購入'}
  </button>
</div>

<div class="card">
  <h3>マンション</h3>
  <p>4,500万円</p>
  <button id="buyMansion" ${player.cash < 45000000 ? 'disabled' : ''}>
    ${player.cash < 45000000 ? '資金不足' : '購入'}
  </button>
</div>

<div class="card">
  <h3>アパート</h3>
  <p>8,000万円</p>
  <button id="buyApartment" ${player.cash < 80000000 ? 'disabled' : ''}>
    ${player.cash < 80000000 ? '資金不足' : '購入'}
  </button>
</div>
      </div>

      <button id="backTown">街へ戻る</button>
    </div>
  `

  document.querySelector('#backTown').onclick = renderTown

if (document.querySelector('#buyHouse')) {
  document.querySelector('#buyHouse').onclick = () => buyProperty('戸建て', 30000000)
}

if (document.querySelector('#buyMansion')) {
  document.querySelector('#buyMansion').onclick = () => buyProperty('マンション', 45000000)
}

if (document.querySelector('#buyApartment')) {
  document.querySelector('#buyApartment').onclick = () => buyProperty('アパート', 80000000)
}
}
function buyProperty(name, price) {
  if (player.cash < price) {
    alert('資金が足りません')
    return
  }

  player.cash -= price

 player.house = {
  name: name,
  purchasePrice: price,
  cost: 0
}

  player.propertyValue = price

  player.log = `${name}を${yen(price)}で購入しました。`

  renderTown()
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
      <button id="nextMonth">寝る / 次の月へ</button>
      <button id="backTown">街へ戻る</button>
    </div>
  `

  document.querySelector('#nextMonth').onclick = nextMonth
  document.querySelector('#backTown').onclick = renderTown
}

function nextMonth() {
  const salary = player.job.income * player.region.salaryRate
  const livingCost = player.house.cost * player.region.costRate + 70000

  const dividend =
    player.stock * 0.002 +
    player.etf * 0.0015 +
    player.reit * 0.003

  // 投資資産の月次価格変動
  const stockRate = 0.92 + Math.random() * 0.16   // -8% ～ +8%
  const etfRate = 0.95 + Math.random() * 0.10     // -5% ～ +5%
  const reitRate = 0.96 + Math.random() * 0.08    // -4% ～ +4%
  const cryptoRate = 0.85 + Math.random() * 0.30  // -15% ～ +15%

  player.stock *= stockRate
  player.etf *= etfRate
  player.reit *= reitRate
  player.crypto *= cryptoRate

  player.stock = Math.round(player.stock)
  player.etf = Math.round(player.etf)
  player.reit = Math.round(player.reit)
  player.crypto = Math.round(player.crypto)
  const stockPct = ((stockRate - 1) * 100).toFixed(1)
  const etfPct = ((etfRate - 1) * 100).toFixed(1)
  const reitPct = ((reitRate - 1) * 100).toFixed(1)
  const cryptoPct = ((cryptoRate - 1) * 100).toFixed(1)

  player.log =
    `📈 市場変動：株 ${stockPct}% / ETF ${etfPct}% / REIT ${reitPct}% / 仮想通貨 ${cryptoPct}%`
  // 不動産価格の変動
if (player.propertyValue > 0 && player.house) {

  if (player.house.name === '戸建て') {
    // 戸建て：毎月0.3%ずつ下落
    player.propertyValue *= 0.997
  }

  if (player.house.name === 'マンション') {
    // マンション：-0.2%〜+0.5%
    const rate = 0.998 + Math.random() * 0.007
    player.propertyValue *= rate
  }

  if (player.house.name === 'アパート') {
    // アパート：-0.5%〜+0.8%
    const rate = 0.995 + Math.random() * 0.013
    player.propertyValue *= rate
  }

  player.propertyValue = Math.floor(player.propertyValue)
}

  const news = getMonthlyNews()
  const lifeEvent = getLifeEvent()
  const quote = getQuote()

  player.cash += salary + dividend
  player.cash -= livingCost

  player.stock *= 1 + randomRate(-0.05, 0.08) + news.stock
  player.etf *= 1 + randomRate(-0.03, 0.05) + news.etf
  player.reit *= 1 + randomRate(-0.02, 0.04) + news.reit
  player.crypto *= 1 + randomRate(-0.15, 0.2) + news.crypto

  player.cash += lifeEvent.cash
  player.job.income += lifeEvent.income

  player.month += 1

  if (player.month > 12) {
    player.month = 1
    player.age += 1
  }

  player.news = news.text

player.log = `
📈 市場変動：株 ${stockPct}% / ETF ${etfPct}% / REIT ${reitPct}% / 仮想通貨 ${cryptoPct}%<br>
💰 給料 ${yen(salary)} / 生活費 ${yen(livingCost)} / 配当 ${yen(dividend)}<br>
💬 格言：${quote}<br>
📰 ${lifeEvent.text}
`

  if (player.age >= 50) {
    renderEnding()
    return
  }

  renderTown()
}
window.nextMonth = nextMonth

function showFPQuiz() {
  const quiz = fpQuiz[Math.floor(Math.random() * fpQuiz.length)]

  app.innerHTML = `
    <div class="screen">
      <h2>🎓 FPクイズ</h2>
      <p>所持金：${yen(player.cash)}</p>
      <p>${quiz.question}</p>

      ${quiz.choices.map((choice, i) => `
        <button class="quizBtn" data-i="${i}">
          ${choice}
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
    // 🤖 AI・半導体・テクノロジー
    { text: '🤖 AI投資ブーム。半導体需要が急増。', stock: 0.06, etf: 0.03, reit: 0, crypto: 0.04 },
    { text: '💻 半導体不足が深刻化。製造業に影響。', stock: -0.03, etf: -0.02, reit: 0, crypto: 0.01 },
    { text: '🧠 新型AIサービスが世界的に普及。', stock: 0.05, etf: 0.03, reit: 0, crypto: 0.03 },
    { text: '📱 大手IT企業の業績が市場予想を上回る。', stock: 0.04, etf: 0.02, reit: 0, crypto: 0.02 },

    // 💱 経済・為替
    { text: '💴 円高が急速に進行。輸出企業に逆風。', stock: -0.04, etf: -0.02, reit: 0.01, crypto: -0.02 },
    { text: '💵 円安が進行。輸出企業の業績期待が高まる。', stock: 0.04, etf: 0.02, reit: -0.01, crypto: 0.02 },
    { text: '🏦 中央銀行が利上げを発表。', stock: -0.04, etf: -0.02, reit: -0.05, crypto: -0.05 },
    { text: '💰 金利引き下げ。市場に資金が流入。', stock: 0.04, etf: 0.03, reit: 0.04, crypto: 0.05 },

    // 🌾 食料・農業
    { text: '🌾 小麦が世界的な不作。食料価格が上昇。', stock: -0.02, etf: -0.01, reit: 0, crypto: 0 },
    { text: '🍚 米が豊作。食品価格が安定。', stock: 0.01, etf: 0.01, reit: 0, crypto: 0 },
    { text: '🌱 大豆価格が急騰。食品企業のコスト増。', stock: -0.02, etf: -0.01, reit: 0, crypto: 0 },
    { text: '🐟 漁獲量が大幅に減少。水産物価格が上昇。', stock: -0.01, etf: 0, reit: 0, crypto: 0 },

    // ⚡ エネルギー
    { text: '🛢️ 原油価格が急騰。世界経済に警戒感。', stock: -0.04, etf: -0.02, reit: -0.01, crypto: -0.02 },
    { text: '🛢️ 原油価格が下落。企業コスト低下への期待。', stock: 0.03, etf: 0.02, reit: 0.01, crypto: 0.01 },
    { text: '☀️ 太陽光発電への大型投資が決定。', stock: 0.03, etf: 0.02, reit: 0.01, crypto: 0 },
    { text: '☢️ 原子力発電所の再稼働が決定。', stock: 0.02, etf: 0.01, reit: 0, crypto: 0 },
    { text: '💧 水力発電設備への大型投資が始まる。', stock: 0.02, etf: 0.01, reit: 0.01, crypto: 0 },

    // 🌎 災害・気候
    { text: '🌪️ 大型台風が上陸。物流と企業活動に影響。', stock: -0.04, etf: -0.02, reit: -0.03, crypto: -0.01 },
    { text: '🌧️ 記録的大雨。各地で河川が氾濫。', stock: -0.03, etf: -0.02, reit: -0.04, crypto: 0 },
    { text: '❄️ 強烈な寒波が到来。エネルギー需要が急増。', stock: -0.01, etf: 0, reit: -0.01, crypto: 0 },
    { text: '🌍 大規模地震が発生。市場に警戒感。', stock: -0.07, etf: -0.04, reit: -0.08, crypto: -0.03 },
    { text: '🏔️ 豪雨による土砂崩れ。インフラに被害。', stock: -0.03, etf: -0.02, reit: -0.03, crypto: 0 },

    // 🚀 宇宙
    { text: '🚀 民間ロケットの打ち上げに成功。', stock: 0.04, etf: 0.02, reit: 0, crypto: 0.02 },
    { text: '🛰️ 次世代通信衛星の運用が開始。', stock: 0.03, etf: 0.02, reit: 0, crypto: 0.01 },
    { text: '☄️ 巨大彗星の観測に成功。宇宙産業への関心が高まる。', stock: 0.01, etf: 0.01, reit: 0, crypto: 0.01 },

    // 🌐 政治・国際
    { text: '🗳️ 大統領選挙が終了。市場に安心感が広がる。', stock: 0.03, etf: 0.02, reit: 0.01, crypto: 0.02 },
    { text: '⚔️ 国際紛争が激化。世界市場が急落。', stock: -0.08, etf: -0.05, reit: -0.03, crypto: -0.07 },
    { text: '🕊️ 停戦合意が成立。市場に安心感が広がる。', stock: 0.06, etf: 0.04, reit: 0.02, crypto: 0.04 },
    { text: '🚨 大都市でテロ事件。市場に警戒感。', stock: -0.06, etf: -0.03, reit: -0.03, crypto: -0.04 },

    // 🏙️ 社会・生活
    { text: '🚄 高速鉄道の大型インフラ計画が発表。', stock: 0.03, etf: 0.02, reit: 0.03, crypto: 0 },
    { text: '👴 高齢化が加速。医療・介護需要が拡大。', stock: 0.01, etf: 0.01, reit: 0.01, crypto: 0 },
    { text: '👶 出生数が回復。将来の消費拡大に期待。', stock: 0.02, etf: 0.01, reit: 0.02, crypto: 0 },
    { text: '🎬 国産映画が世界的大ヒット。', stock: 0.02, etf: 0.01, reit: 0, crypto: 0.01 },
    { text: '📺 動画配信サービスの利用者が急増。', stock: 0.03, etf: 0.02, reit: 0, crypto: 0.02 },
    { text: '🚽 節水型住宅設備が大ヒット。', stock: 0.01, etf: 0.01, reit: 0.01, crypto: 0 },
    { text: '🏠 住宅需要が急増。不動産市場が活況。', stock: 0.02, etf: 0.01, reit: 0.05, crypto: 0 },

    // 🪙 仮想通貨
    { text: '🪙 仮想通貨の税制改革が発表。投資家の期待が高まる。', stock: 0.01, etf: 0.01, reit: 0, crypto: 0.12 },
    { text: '₿ 仮想通貨ETFへの資金流入が急増。', stock: 0.01, etf: 0.02, reit: 0, crypto: 0.10 },
    { text: '🔒 大手暗号資産取引所でセキュリティ問題。', stock: -0.01, etf: 0, reit: 0, crypto: -0.15 },

    // 🏆 スポーツ・文化
    { text: '🏆 世界的スポーツ大会が開幕。消費が活発化。', stock: 0.02, etf: 0.01, reit: 0.02, crypto: 0.01 },
    { text: '🎌 日本代表が世界大会で優勝。国内消費が盛り上がる。', stock: 0.02, etf: 0.01, reit: 0.01, crypto: 0 },
       // 🏪 小売・消費
    { text: '🛒 大手スーパーが全国的な値下げを発表。消費が活発化。', stock: 0.02, etf: 0.01, reit: 0.01, crypto: 0 },
    { text: '🛍️ 個人消費が急減。小売企業の業績懸念が広がる。', stock: -0.03, etf: -0.02, reit: -0.01, crypto: -0.01 },
    { text: '🍳 家庭料理ブーム。食品関連企業の売上が伸びる。', stock: 0.02, etf: 0.01, reit: 0, crypto: 0 },
    { text: '🍜 日本食ブームが海外で拡大。食品輸出が好調。', stock: 0.03, etf: 0.02, reit: 0, crypto: 0.01 },

    // 🚆 交通・インフラ
    { text: '🚆 鉄道利用者が過去最高を記録。', stock: 0.02, etf: 0.01, reit: 0.02, crypto: 0 },
    { text: '🛣️ 高速道路の大規模改修計画が始動。', stock: 0.03, etf: 0.02, reit: 0.02, crypto: 0 },
    { text: '🚧 老朽化インフラ問題が深刻化。', stock: -0.03, etf: -0.02, reit: -0.03, crypto: 0 },
    { text: '🏗️ 全国で再開発プロジェクトが相次ぐ。', stock: 0.03, etf: 0.02, reit: 0.05, crypto: 0 },

    // 🏠 住宅・生活設備
    { text: '🛁 高機能バス設備が人気。住宅関連市場が活況。', stock: 0.01, etf: 0.01, reit: 0.02, crypto: 0 },
    { text: '🚿 節水設備の普及が急拡大。', stock: 0.01, etf: 0.01, reit: 0.01, crypto: 0 },
    { text: '🏡 中古住宅リフォーム需要が急増。', stock: 0.02, etf: 0.01, reit: 0.04, crypto: 0 },
    { text: '📉 住宅価格が急落。不動産市場に警戒感。', stock: -0.02, etf: -0.01, reit: -0.07, crypto: -0.01 },

    // 🌊 自然・地理
    { text: '🌊 海洋資源開発プロジェクトが始動。', stock: 0.03, etf: 0.02, reit: 0, crypto: 0.01 },
    { text: '🏞️ 河川整備への大型予算が決定。', stock: 0.02, etf: 0.01, reit: 0.02, crypto: 0 },
    { text: '⛰️ 山岳観光が大ブーム。地方経済が活性化。', stock: 0.02, etf: 0.01, reit: 0.02, crypto: 0 },
    { text: '🏜️ 世界的な干ばつで農作物価格が上昇。', stock: -0.03, etf: -0.02, reit: 0, crypto: 0 },
    { text: '🌴 熱帯地域で感染症が拡大。市場に警戒感。', stock: -0.04, etf: -0.02, reit: -0.01, crypto: -0.02 },

    // 🌧 災害
    { text: '🌨️ 大雪で交通網が麻痺。物流に大きな影響。', stock: -0.03, etf: -0.02, reit: -0.02, crypto: 0 },
    { text: '🏔️ 雪崩が発生。観光地に大きな被害。', stock: -0.02, etf: -0.01, reit: -0.03, crypto: 0 },
    { text: '⛰️ 大規模な地滑りで道路網が寸断。', stock: -0.03, etf: -0.02, reit: -0.04, crypto: 0 },
    { text: '🌊 河川氾濫で住宅地に被害。', stock: -0.04, etf: -0.02, reit: -0.06, crypto: -0.01 },

    // 🕵️ 治安・安全保障
    { text: '🕵️ 国際的なスパイ事件が発覚。外交関係が悪化。', stock: -0.04, etf: -0.02, reit: -0.01, crypto: -0.02 },
    { text: '🚔 大規模な治安対策が実施される。', stock: 0.01, etf: 0.01, reit: 0.01, crypto: 0 },
    { text: '🪖 防衛関連予算が大幅に増額された。', stock: 0.03, etf: 0.02, reit: 0, crypto: 0.01 },
    { text: '🇯🇵 自衛隊の災害派遣体制が強化された。', stock: 0.01, etf: 0.01, reit: 0.01, crypto: 0 },
    { text: '⚠️ 反社会的組織による事件が相次ぎ、治安不安が高まる。', stock: -0.03, etf: -0.02, reit: -0.03, crypto: -0.01 },
    { text: '🛡️ 地域の防犯活動が強化される。', stock: 0.01, etf: 0, reit: 0.01, crypto: 0 },

    // 🎌 アニメ・文化
    { text: '🎌 日本アニメが世界的ブーム。関連企業が好調。', stock: 0.03, etf: 0.02, reit: 0, crypto: 0.02 },
    { text: '🎮 世界的ゲームタイトルが大ヒット。', stock: 0.04, etf: 0.02, reit: 0, crypto: 0.03 },
    { text: '🎥 動画サイト発の作品が映画化され大ヒット。', stock: 0.02, etf: 0.01, reit: 0, crypto: 0.02 },
    { text: '🍱 日本の食文化が海外で再評価される。', stock: 0.02, etf: 0.01, reit: 0, crypto: 0 },

    // 🌌 宇宙
    { text: '🌕 月面基地建設計画が正式決定。', stock: 0.05, etf: 0.03, reit: 0, crypto: 0.03 },
    { text: '🛰️ 衛星通信網が世界規模で拡大。', stock: 0.04, etf: 0.02, reit: 0, crypto: 0.02 },
    { text: '🚀 ロケット打ち上げ失敗。宇宙関連株が下落。', stock: -0.03, etf: -0.01, reit: 0, crypto: -0.01 },
    { text: '☄️ 彗星の地球接近が話題となり宇宙産業への関心が急上昇。', stock: 0.02, etf: 0.01, reit: 0, crypto: 0.02 },

    // 🌡 気候変動
    { text: '🌡️ 世界平均気温が過去最高を更新。', stock: -0.02, etf: -0.01, reit: -0.02, crypto: 0 },
    { text: '🔥 猛暑で電力需要が急増。', stock: -0.01, etf: 0, reit: -0.01, crypto: 0 },
    { text: '🌬️ 異常気象が世界各地で相次ぐ。', stock: -0.04, etf: -0.03, reit: -0.03, crypto: -0.01 },
    { text: '🌱 気候対策への巨額投資が決定。', stock: 0.03, etf: 0.02, reit: 0.01, crypto: 0.01 },
       // 🏛️ 政治・選挙
    { text: '🗳️ 政権交代が決定。新たな経済政策への期待が高まる。', stock: 0.03, etf: 0.02, reit: 0.01, crypto: 0.02 },
    { text: '🏛️ 大規模な経済対策が発表された。', stock: 0.05, etf: 0.03, reit: 0.03, crypto: 0.03 },
    { text: '💸 大型減税が決定。個人消費の拡大に期待。', stock: 0.04, etf: 0.02, reit: 0.02, crypto: 0.02 },
    { text: '📜 法改正への不透明感から市場が下落。', stock: -0.03, etf: -0.02, reit: -0.01, crypto: -0.03 },
    { text: '🌎 大統領選挙をめぐる混乱が長期化。', stock: -0.05, etf: -0.03, reit: -0.02, crypto: -0.04 },
    { text: '🚨 国家指導者を狙った暗殺事件が発生。世界市場に緊張が走る。', stock: -0.08, etf: -0.05, reit: -0.03, crypto: -0.07 },

    // 🏦 金融・景気
    { text: '📈 世界経済が予想を上回る成長を記録。', stock: 0.06, etf: 0.04, reit: 0.03, crypto: 0.05 },
    { text: '📉 世界的な景気後退への懸念が強まる。', stock: -0.06, etf: -0.04, reit: -0.03, crypto: -0.06 },
    { text: '🏦 大手銀行の経営不安が表面化。', stock: -0.07, etf: -0.05, reit: -0.04, crypto: -0.05 },
    { text: '💥 金融危機が発生。世界市場が急落。', stock: -0.15, etf: -0.10, reit: -0.12, crypto: -0.18 },
    { text: '💹 金融危機からの回復期待で市場が急反発。', stock: 0.10, etf: 0.07, reit: 0.06, crypto: 0.12 },
    { text: '💴 インフレ率が低下。市場に安心感が広がる。', stock: 0.03, etf: 0.02, reit: 0.03, crypto: 0.03 },
    { text: '🔥 インフレが急加速。生活費が上昇。', stock: -0.04, etf: -0.03, reit: -0.03, crypto: -0.02 },

    // 🌾 農業・食料
    { text: '🌾 世界的な小麦豊作。食料価格が下落。', stock: 0.02, etf: 0.01, reit: 0, crypto: 0 },
    { text: '🍚 米不足が発生。店頭価格が急騰。', stock: -0.02, etf: -0.01, reit: 0, crypto: 0 },
    { text: '🌱 大豆が歴史的な豊作。食品企業に追い風。', stock: 0.02, etf: 0.01, reit: 0, crypto: 0 },
    { text: '🚜 スマート農業が急速に普及。生産性が向上。', stock: 0.03, etf: 0.02, reit: 0.01, crypto: 0.01 },
    { text: '🐟 漁業資源が回復。水産業の業績改善に期待。', stock: 0.02, etf: 0.01, reit: 0, crypto: 0 },
    { text: '🌊 海水温上昇で漁場が大きく変化。', stock: -0.02, etf: -0.01, reit: 0, crypto: 0 },

    // ⚡ エネルギー
    { text: '⚡ 電力不足が深刻化。企業活動に影響。', stock: -0.04, etf: -0.02, reit: -0.02, crypto: -0.03 },
    { text: '☀️ 太陽光発電コストが大幅に低下。', stock: 0.03, etf: 0.02, reit: 0.01, crypto: 0 },
    { text: '🌊 次世代水力発電技術の実用化に成功。', stock: 0.03, etf: 0.02, reit: 0, crypto: 0.01 },
    { text: '🔥 火力発電の燃料価格が急騰。', stock: -0.03, etf: -0.02, reit: -0.01, crypto: 0 },
    { text: '☢️ 原子力発電所でトラブル。電力供給への不安が広がる。', stock: -0.05, etf: -0.03, reit: -0.02, crypto: -0.02 },
    { text: '🔋 革新的な蓄電池の量産化に成功。', stock: 0.05, etf: 0.03, reit: 0.01, crypto: 0.02 },

    // 🛢️ 石油・資源
    { text: '🛢️ 主要産油国が原油の大幅減産を決定。', stock: -0.04, etf: -0.02, reit: -0.01, crypto: 0 },
    { text: '🛢️ 大規模油田が新たに発見された。', stock: 0.03, etf: 0.02, reit: 0.01, crypto: 0 },
    { text: '⛏️ レアメタル不足でハイテク製品の生産が減少。', stock: -0.04, etf: -0.03, reit: 0, crypto: 0.01 },

    // 🪖 安全保障
    { text: '🪖 各国が防衛費を大幅に増額。防衛産業が活況。', stock: 0.03, etf: 0.02, reit: -0.01, crypto: 0.01 },
    { text: '🚢 海上輸送ルートで緊張が高まる。物流費が急騰。', stock: -0.05, etf: -0.03, reit: -0.01, crypto: -0.02 },
    { text: '🕊️ 各国が和平協定に署名。世界市場が上昇。', stock: 0.07, etf: 0.05, reit: 0.03, crypto: 0.05 },
    { text: '🚔 犯罪件数が大幅に減少。地域経済に安心感。', stock: 0.01, etf: 0.01, reit: 0.02, crypto: 0 },
    { text: '🕵️ 機密情報の流出事件が発覚。国際関係が緊張。', stock: -0.04, etf: -0.02, reit: -0.01, crypto: -0.03 },

    // 👶 人口・社会
    { text: '👶 少子化がさらに加速。将来の国内消費に懸念。', stock: -0.02, etf: -0.01, reit: -0.02, crypto: 0 },
    { text: '👴 高齢者人口が過去最高を更新。', stock: -0.01, etf: 0, reit: -0.01, crypto: 0 },
    { text: '🏥 医療技術の進歩で平均寿命がさらに伸びる。', stock: 0.02, etf: 0.01, reit: 0.01, crypto: 0 },
    { text: '🏘️ 地方への移住ブームが発生。地方不動産に注目が集まる。', stock: 0.01, etf: 0.01, reit: 0.04, crypto: 0 },
    { text: '🏙️ 都市部への人口集中がさらに進む。', stock: 0.01, etf: 0.01, reit: 0.03, crypto: 0 },

    // ⚽ スポーツ
    { text: '⚽ サッカー世界大会が開幕。関連消費が拡大。', stock: 0.02, etf: 0.01, reit: 0.01, crypto: 0 },
    { text: '⚾ 野球の世界大会で日本代表が優勝。', stock: 0.02, etf: 0.01, reit: 0, crypto: 0 },
    { text: '🏃 世界的スポーツ大会の国内開催が決定。', stock: 0.03, etf: 0.02, reit: 0.04, crypto: 0.01 },
    { text: '🏟️ 全国で大型スタジアム建設が相次ぐ。', stock: 0.02, etf: 0.01, reit: 0.03, crypto: 0 },

    // 🎭 エンタメ
    { text: '🎬 日本映画が世界興行収入の記録を更新。', stock: 0.03, etf: 0.02, reit: 0, crypto: 0.01 },
    { text: '📺 動画配信市場が急成長。テレビ離れが加速。', stock: 0.03, etf: 0.02, reit: 0, crypto: 0.02 },
    { text: '🎨 日本のアニメ市場が過去最大規模に成長。', stock: 0.04, etf: 0.02, reit: 0, crypto: 0.02 },
    { text: '🎮 eスポーツ市場が急拡大。', stock: 0.03, etf: 0.02, reit: 0, crypto: 0.03 },

    // 💣 超大型イベント（低確率で出ると面白い）
    { text: '🌐 世界同時株高。投資家心理が一気に改善。', stock: 0.12, etf: 0.08, reit: 0.05, crypto: 0.10 },
    { text: '💥 世界的な市場暴落が発生。金融市場が混乱。', stock: -0.18, etf: -0.12, reit: -0.10, crypto: -0.20 },
    { text: '🚀 革命的な新技術が実用化。世界経済への期待が急上昇。', stock: 0.10, etf: 0.06, reit: 0.02, crypto: 0.08 },
    { text: '🌍 世界経済が長期好景気に突入。', stock: 0.08, etf: 0.05, reit: 0.05, crypto: 0.07 },
    // 何もない月
    { text: '📰 大きなニュースはなかった。', stock: 0, etf: 0, reit: 0, crypto: 0 }
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

renderTitle()