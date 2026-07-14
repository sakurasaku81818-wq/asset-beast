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
  return player.cash + player.stock + player.etf + player.reit + player.crypto
}

function renderTitle() {
  app.innerHTML = `
    <div class="screen title-screen">
      <h1>AssetBeast</h1>
      <p>人生を選び、<br>お金を学び、<br>資産家になる。</p>
      <button id="startBtn">GAME START</button>
    </div>
  `

  document.querySelector('#startBtn').onclick = renderJobSelect
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
        <div id="player"></div>

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
    <div class="screen shop-screen">
      <h2>🏦 証券会社</h2>
      <p>金融資産に投資できます。</p>

      <button id="buyStock">株を10万円買う</button>
      <button id="buyEtf">ETFを10万円買う</button>
      <button id="buyReit">REITを10万円買う</button>
      <button id="buyCrypto">仮想通貨を10万円買う</button>

      <p>株：成長狙い / ETF：分散 / REIT：不動産投資 / 仮想通貨：高リスク</p>

      <button id="backTown">街へ戻る</button>
    </div>
  `

  document.querySelector('#buyStock').onclick = () => buyAsset('stock')
  document.querySelector('#buyEtf').onclick = () => buyAsset('etf')
  document.querySelector('#buyReit').onclick = () => buyAsset('reit')
  document.querySelector('#buyCrypto').onclick = () => buyAsset('crypto')
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

function renderRealEstate() {
  app.innerHTML = `
    <div class="screen shop-screen">
      <h2>🏠 不動産屋</h2>
      <p>家・マンション・アパートを購入できます。</p>

      <div class="card-list">
        <div class="card"><h3>戸建て</h3><p>3,000万円</p><button disabled>資金不足</button></div>
        <div class="card"><h3>マンション</h3><p>4,500万円</p><button disabled>資金不足</button></div>
        <div class="card"><h3>アパート</h3><p>8,000万円</p><button disabled>資金不足</button></div>
      </div>

      <button id="backTown">街へ戻る</button>
    </div>
  `

  document.querySelector('#backTown').onclick = renderTown
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
    給料 ${yen(salary)} / 生活費 ${yen(livingCost)} / 配当 ${yen(dividend)}。<br>
    ${lifeEvent.text}<br>
    格言：${quote}
  `

  if (player.age >= 50) {
    renderEnding()
    return
  }

  renderTown()
}

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