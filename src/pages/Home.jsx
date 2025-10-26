import { Link } from 'react-router-dom';
import '../styles/pages.css';

function Home() {
  return (
    <div className="body">
      <video src="/Background.mp4" muted loop autoPlay width="1400"></video>

      <div className="option">
        <div>
          <i className="fas fa-laugh">
            {' '}
            <Link to="/about">About Me</Link>
          </i>
        </div>
        <div>
          <i className="fas fa-file">
            {' '}
            <a href="/MarvenResume.pdf">Resume</a>{' '}
          </i>
        </div>
        <div>
          <i className="fas fa-briefcase">
            {' '}
            <a href="Ho"></a> Hobbies
          </i>
        </div>
        <div>
          <i className="fas fa-hammer"> Work</i>
        </div>
      </div>

      <div className="name">
        <h1 className="h1">Marven Jean Jacques</h1>
        <p>
          Here is My page (in Progress)
          <div>
            <Link to="/assignment0">Assignment0</Link>
          </div>
          <div>
            <Link to="/assignment1">Assignment1</Link>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Home;
