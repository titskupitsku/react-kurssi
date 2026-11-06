import Counter from './components/Counter.tsx';
import RecipeCard from './components/RecipeCard.tsx';
import './Counter.css';
import './RecipeCard.css';

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
      <RecipeCard title="My awesome kebab" description="Very tasty kebab with lamb meat and hot spices, which we can cook on the grill in the winter when outside is freezing cracking show and inside the fire cracks in the stove." pictureUrl="https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg" />
    </div>
  )
}

export default App
