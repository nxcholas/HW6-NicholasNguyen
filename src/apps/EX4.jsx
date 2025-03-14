import '../css/EX4.css'

function EX4 () {
  const COBLink = 'https://www.csulb.edu/college-of-business';

  function addLink () {
    // grab container
    const linkContainer = document.getElementById('links');

    // create elements
    const listTag = document.createElement('li');
    const linkTag = document.createElement('a');

    // set values
    linkTag.setAttribute('href', COBLink)
    linkTag.innerHTML = 'CSULB Home Page'
    listTag.setAttribute('id', 'home-page');

    // append
    listTag.append(linkTag);
    linkContainer.append(listTag);
  }

  const removeLink = () => {
    const link = document.getElementById('home-page');
    link.remove();
  }

  return (
    <div id="ex4-container">
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
        id='addLinkBtn'
        onClick={addLink}>Add COB Link</button>
      <button
        className='resetBtn'
        onClick={removeLink}>Remove Link</button>
    </div>
  )
}

export default EX4