import { Link } from 'react-router-dom';
import '../styles/pages.css';

function Assignment0() {
  return (
    <div className="body" data-new-gr-c-s-check-loaded="14.1047.0" data-gr-ext-installed>
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
        <h1>Who am I???</h1>
        <p>
          John Quincy Adams once said, "If your actions inspire others to dream more, learn more, do more, and become
          more, you are a leader." My name is Marven Jean Jacques, I believe I am a leader, I never seize to put others
          first. I am a problem-solving person, I'm always happy to help people around me with technical problems. I am
          interested and fascinated by technology and learning new software. Graduated from Mattapan technology center
          with a Computer & Network Technical Support, I consider myself ready as a professional and more confident in
          my judgment, and as a graduate student with an associate degree in computer science from Massasoit Community
          college, holding 3, 68 GPA, and pursuing a bachelor degree in Computer Science at Bridgewater State
          University, I had acquired an amount of skill (such as problem-solving, critical thinking, Agile
          Methodologies, Documentation and so on…) in the IT field and want to start making them useful. Being in
          different types of clubs such as President of the student body, Ubuntu Scholar, Cape Verdean Club, Trio
          Student support services, STEM Academy, and VP Phi Theta Kappa (PTK) students Honor Society club, help me
          acquire experience to build a leadership character, Furthermore, I speak three languages fluently; Haitian
          Creole, French, and English.
        </p>
        <h1>Want to learn car part, click to listen to the body part name</h1>
        <img src="/Images/Car-Part.jpeg" width="525" height="292" border="0" useMap="#map" alt="Car parts" />

        <map name="map">
          {/* Note: Original image map content would go here */}
        </map>
      </div>
    </div>
  );
}

export default Assignment0;
