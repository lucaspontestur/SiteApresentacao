import { useState } from 'react'
import LucasMarinho from './components/LucasMarinho'
import LucasMarinhoIng from './components/LucasMarinhoIng'

function App() {
  const [language, setLanguage] = useState('pt')

  return (
    <>
      {language === 'pt' ? <LucasMarinho language={language} setLanguage={setLanguage} /> : <LucasMarinhoIng language={language} setLanguage={setLanguage} />}
    </>
  )
}

export default App