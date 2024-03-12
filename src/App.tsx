import { ChangeEvent, useMemo, useState } from 'react'
import countries from './assets/countries.json'
import './App.css'

const SELECT_ALL_KEY = 'all'

function App() {
  const [isAllSelected, selectAll] = useState(false)

  function handleClick(e: ChangeEvent<HTMLInputElement>, key: string) {
    if (key === SELECT_ALL_KEY) {
      selectAll(e.target.checked)
    } else {
      selectAll(false)
    }
  }

  return (
    <main className="h-screen w-screen bg-slate-800 p-10 flex justify-center items-center">
      <div className="flex flex-col">
        <label key="check-all" className="cursor-pointer">
          <input
            type="checkbox"
            id="check-all"
            onChange={(event) => handleClick(event, 'all')}
          />
          <span className="ml-1">{'Select All'}</span>
        </label>

        {countries.map((item) => (
          <label key={`check-${item}`} className="cursor-pointer mt-3">
            <input
              type="checkbox"
              id={`check-${item}`}
              onChange={(event) => handleClick(event, item)}
              checked={isAllSelected ? true : undefined}
            />
            <span className="ml-1">{item}</span>
          </label>
        ))}
      </div>
    </main>
  )
}

export default App
