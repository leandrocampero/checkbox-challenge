import { ChangeEvent, useState } from 'react'
import countries from './assets/countries.json'
import './App.css'

function handleClick(e: ChangeEvent<HTMLInputElement>) {
  console.log(e.target.checked)
}

function App() {
  return (
    <main className="h-screen w-screen bg-slate-800 p-10 flex justify-center items-center">
      <div className="flex flex-col">
        {countries.map((item, index) => (
          <label
            key={`check-${item}`}
            className={`cursor-pointer ${index > 0 ? 'mt-3' : ''}`}
          >
            <input
              type="checkbox"
              id={`check-${item}`}
              onChange={(event) => handleClick(event)}
            />
            <span className="ml-1">{item}</span>
          </label>
        ))}
      </div>
    </main>
  )
}

export default App
