import '../css/EX7.css';

function EX7 () {

  function validate () {
    // grab inputs
    const firstInput = document.getElementById('firstInput').value;
    const secondInput = document.getElementById('secondInput').value;

    if (isNaN(firstInput) || isNaN(secondInput) || Number.isInteger(firstInput) || Number.isInteger(secondInput)) {
      const error = document.getElementById('error-span');
      const errorMessage = document.getElementById('errorMessage-span');

      // output span styling
      error.style.color = 'red';
      error.textContent = `Error!`;
      errorMessage.textContent = ` You must enter integers. You entered "${firstInput}" and "${secondInput}". Try again.`;
    } else {
      const error = document.getElementById('error-span');
      const errorMessage = document.getElementById('errorMessage-span');

      // output span styling
      error.style.color = 'green';
      error.textContent = `Valid!`;
      errorMessage.textContent = ` ${firstInput} + ${secondInput} = ${Number(firstInput) + Number(secondInput)}`;
    }
  }

  return (
    <div
      id='ex7-container'>
        <h1>Sum of Two Integers</h1>
        <div
          id='ex7-content'>
            <div
              id='output'>
                <span
                  id='error-span'></span>
                  <span
                  id='errorMessage-span'></span>
              </div>
            <input
              id='firstInput'
              
              placeholder='Enter a number:'></input>
            <input
              id='secondInput'
              
              placeholder='Enter a second number:'></input>
            <button
              onClick={validate}>Submit</button>
          </div>
      </div>
  )
}

export default EX7