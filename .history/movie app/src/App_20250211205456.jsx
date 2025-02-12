import './App.css';

function App() {
  return (
    <>
      <Text />
      <Text />
    </>
  );
}

function Text({ display }) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App;
