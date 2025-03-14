import '../css/EX3.css'

function EX3 () {
  const toggleBold = () => {
    const paragraphs = Array.from(document.getElementsByTagName('p'));
    paragraphs.forEach(p => {
      p.style.backgroundColor = 'yellow';
      p.style.fontWeight = 'bold'
      p.style.color = 'black'
    })
  }

  const resetP = () => {
    const paragraphs = Array.from(document.getElementsByTagName('p'));
    paragraphs.forEach(p => {
      p.style.backgroundColor = 'transparent';
      p.style.fontWeight = 'normal'
      p.style.color = 'white'
    })
  }

    return (
      <div id="ex2-container">
        <h1>CSULB IS Courses</h1>
        <p>Fall classes Taken:</p>
        <ul className="iscourses" id="fall">
          <li className="300level">IS 300</li>
          <li className="300level">IS 310</li>
          <li className="300level">IS 340</li>
          <li className="300level">IS 385</li>
        </ul>
        <p>Spring Classes Taken:</p>
        <ul className="iscourses" id="spring">
          <li className="300level">IS 320</li>
          <li className="300level">IS 380</li>
          <li className="400level">IS 445</li>
          <li className="400level">IS 480</li>
        </ul>
        <h2>Links</h2>
        <ul id="links">
          <li id="csulb">
            <a href="http://www.csulb.edu">CSULB Home Page</a>
          </li>
          <li id="is">
            <a href="https://www.csulb.edu/college-of-business/information-systems">
              Information Systems
            </a>
          </li>
        </ul>
        <button 
          className='toggleBold'
          onClick={toggleBold}>Set Bold</button>
        <button
          className='resetBtn'
          onClick={resetP}>Reset</button>
      </div>
    );
}

export default EX3