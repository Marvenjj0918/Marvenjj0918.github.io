import { Link } from 'react-router-dom';
import '../styles/pages.css';

function Assignment1() {
  return (
    <div className="body">
      <video src="/Background.mp4" muted loop autoPlay width="1400"></video>

      <div className="option">
        <div>
          <i className="fa fa-home">
            <Link to="/">Home</Link>
          </i>
        </div>
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
        <p>Here is My page (in Progress)</p>
      </div>
    </div>
  );
}

export default Assignment1;
