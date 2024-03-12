import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import countries from './assets/countries.json'
import './App.css'

const SELECT_ALL_KEY = 'all'

function App() {
  const [selectAllChecked, setSelectAllChecked] = useState(false)
  const [selectedCountries, setSelectedCountries] = useState<
    Map<string, boolean>
  >(new Map())
  const allSelected = useMemo(() => {
    let control = true

    if (
      selectedCountries.size === 0 ||
      selectedCountries.size < countries.length
    ) {
      control = false
    } else {
      selectedCountries.forEach((value) => {
        if (!value) {
          control = false
        }
      })
    }

    return control
  }, [selectedCountries])

  function handleSelect(key: string, selected: boolean) {
    const newMap = new Map(selectedCountries)
    newMap.set(key, selected)
    setSelectedCountries(newMap)
  }

  function handleSelectAll() {
    const newMap = new Map(countries.map((country) => [country, true]))
    setSelectAllChecked(true)
    setSelectedCountries(newMap)
  }

  function handleDiselectAll() {
    setSelectAllChecked(false)
    setSelectedCountries(new Map())
  }

  function handleClick(e: ChangeEvent<HTMLInputElement>, key: string) {
    if (key === SELECT_ALL_KEY) {
      if (e.target.checked) {
        handleSelectAll()
      } else {
        handleDiselectAll()
      }
    } else {
      handleSelect(key, e.target.checked)
    }
  }

  useEffect(() => {
    setSelectAllChecked(allSelected)
  }, [allSelected])

  return (
    <main className="h-screen w-screen bg-slate-800 p-10 flex justify-center items-center">
      <div className="flex flex-col">
        <label key="check-all" className="cursor-pointer">
          <input
            type="checkbox"
            id="check-all"
            checked={selectAllChecked}
            onChange={(event) => handleClick(event, SELECT_ALL_KEY)}
          />
          <span className="ml-1">{'Select All'}</span>
        </label>

        {countries.map((item) => (
          <label key={`check-${item}`} className="cursor-pointer mt-3">
            <input
              type="checkbox"
              id={`check-${item}`}
              checked={selectedCountries.get(item)}
              onChange={(event) => handleClick(event, item)}
            />
            <span className="ml-1">{item}</span>
          </label>
        ))}
      </div>
    </main>
  )
}

export default App
