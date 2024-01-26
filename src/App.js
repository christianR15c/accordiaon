import Accordion from './components/Accordion';

const faqs = [
  {
    title: 'Where are these chairs assembled',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laborum facere illo, dolorem, voluptates, praesentium nihil fugiat aspernatur modi nam voluptate quasi sunt tempore cupiditate atque quam! Neque, dolor a',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laborum facere illo, dolorem, voluptates, praesentium nihil fugiat aspernatur modi nam voluptate quasi sunt tempore cupiditate atque quam! Neque, dolor a',
  },
  {
    title: 'Do you ship to countries outside of the United States?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laborum facere illo, dolorem, voluptates, praesentium nihil fugiat aspernatur modi nam voluptate quasi sunt tempore cupiditate atque quam! Neque, dolor a',
  },
];

function App() {
  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}

export default App;
