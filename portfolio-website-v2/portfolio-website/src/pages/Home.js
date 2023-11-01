import headshot from '../assets/Cody_Barker_Headshot.jpg'
import githubIcon from '../assets/brand-github.svg'
import linkedInIcon from '../assets/brand-linkedin.svg'
import devToIcon from '../assets/brand-dev.to.svg'

function Home() {

  function onClick(url) {
    window.open(url, '_blank')
  }

  return(
    <div className="container">
      <img src={headshot} alt="headshot"/>
      <div className="home-header">
        <h1>Cody Barker</h1>
        <p>Full-Stack Software Engineer</p>
        <p>React | JavaScript | Ruby on Rails</p>
        <div className="icons-container">
          <button onClick={() => onClick('https://drive.google.com/file/d/1n2ZNSdGDth-0gedkApnKqj9REJDzobSM/view?usp=sharing')}>Resume</button>
          <img id="no-shadow" src={linkedInIcon} alt="LinkedIn icon" onClick={() => onClick('https://www.linkedin.com/in/barkercody/')}/>
          <img id="no-shadow" src={githubIcon} alt="GitHub icon" onClick={() => onClick('https://github.com/cody-barker')}/>
          <img id="no-shadow" src={devToIcon} alt="Dev.to icon" onClick={() => onClick('https://dev.to/codybarker')}/>
        </div>
      </div>
    </div>
  )
}

export default Home