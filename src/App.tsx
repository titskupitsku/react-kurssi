import Counter from './components/Counter.tsx'

import './index.css'

function App() {
  function handleCounterChange(value: number) {
        console.log(value);
    }

  return (
    <div>
      <p>moi moi moi</p>
      <Counter count={7} onChange={handleCounterChange} />
      <Counter count={2} onChange={handleCounterChange} />
      <Counter count={5} onChange={handleCounterChange} />
      <Counter count={-3} onChange={handleCounterChange} />
    </div>
  )
}

export default App
