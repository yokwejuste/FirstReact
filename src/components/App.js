import './App.css';
import Instructions from './Instructions/Instructions';

const displayEmojiName = event => alert(event.target.id)

const emojis = [
    {
        emoji: "😀",
        name: "grinding face"
    },
    {
        emoji: "🎉",
        name: "party proper"
    },
    {
        emoji: "💃",
        name: "woman dancing"
    }
]

function App() {
    const displayAction = false;
    return (
        <div className="item">
            <h1>Hello World</h1>
            {displayAction && <p>I'm writing JSX syntax dudes.</p>}
            <Instructions/>
            <Instructions/>
            <ul>
                {emojis.map((emoji =>
                        <li key={emoji.name}>
                            <button onClick={displayEmojiName}>
                                <span role="img" aria-label={emoji.name}
                                      id={emoji.name}>
                                    {emoji.emoji}
                                </span>
                            </button>
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default App;