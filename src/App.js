import './App.css';

function App() {
  return (
    <div className="item">
      <h1>Hello World</h1>
      <p>I'm writing React codes dudes.</p>
      <ul>
        <li>
          <button onClick={
            event => alert(event.target.id)
          }>
            <span role="img" aria-label="grinning face">😅</span>
          </button>
        </li>
        <li>
          <button>
            <span role="img" aria-label="party popper">🕺</span>
          </button>
        </li>
        <li>
          <button>
            <span role="img" aria-label="woman dancing">😍</span>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default App;