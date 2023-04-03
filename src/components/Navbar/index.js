import './index.css'

const Navbar = props => {
  const {score} = props

  return (
    <nav className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="game-website-logo"
      />
      <div className="score-and-seconds">
        <p className="score-nav">Score: {score}</p>
        <div className="timer-seconds">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="seconds">0 Sec</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
