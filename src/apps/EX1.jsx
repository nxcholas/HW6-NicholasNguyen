import '../css/EX1.css'

function EX1 () {
document.body.childNodes.forEach(node => {
  console.log(node)
})

  return (
    <div
      id='ex1-container'>
        <h1>CSULB IS Courses</h1>
        <p>Fall Classes Taken:</p>
        <ul>
          <li>IS 300</li>
          <li>IS 310</li>
          <li>IS 340</li>
          <li>IS 385</li>
        </ul>
        <p>Spring Classes Taken:</p>
        <ul>
          <li>IS 301</li>
          <li>IS 320</li>
          <li>IS 380</li>
          <li>IS 445</li>
        </ul>
        <span
          className='checkmsg'>
            Check console for output.
          </span>
      </div>
  )
}

export default EX1