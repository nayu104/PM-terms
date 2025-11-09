import './App.css'

function App() {
const sections =[
  {
    title: '利用規約',
    content: '最終更新日: 2025年1月1日'
  },
  {
    title: '第1条（適用範囲）',
    content: 'この利用規約は、〇〇が提供するサービス（以下「本サービス」といいます。）の利用条件を定めるものです。'
  },
  {
    title: '第2条（利用規約の変更）',
    content: '当社は、必要に応じて、本利用規約を変更することがあります。変更後の利用規約は、本サービスの公式サイトに掲載された時点で有効となります。'
  },
  {
    title: '第3条（利用規約の遵守）',
    content: '利用者は、本利用規約を遵守し、本サービスを利用することを承諾します。'
  },
]

  return (
    <>
     <section>
      <h2>{sections[0].title}</h2>
      <p>{sections[0].content}</p>
     </section>
     <section>
      <h2>{sections[1].title}</h2>
      <p>{sections[1].content}</p>
     </section>
     <section>
      <h2>{sections[2].title}</h2>
      <p>{sections[2].content}</p>
     </section>
     <section>
      <h2>{sections[3].title}</h2>
      <p>{sections[3].content}</p>
     </section>
     </>
  )
}

export default App
