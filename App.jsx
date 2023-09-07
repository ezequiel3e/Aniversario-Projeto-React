
import { useState } from 'react'
import './App.css'
import List from './components/List'
import data from './data'

function App() {
  const [birthdayList, setBirthdayList] = useState(data)

  return (
    <main>
    <section className='container'>
<h3>Front Meu projetos</h3>

<h3>{birthdayList.length}aniversario hoje</h3>

<List birthdayList={birthdayList}/>

<button onClick={() => setBirthdayList([])}>Limpar Listas</button>


    </section>
    </main>
  )
}

export default App
