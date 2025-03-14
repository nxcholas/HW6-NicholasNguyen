import '../css/EX5.css'
import { useEffect } from 'react'

function EX5 () {
  useEffect(() => {
      // grab output container
      const output_container = document.getElementById('ex5-output');
      // creating elements
      const table = document.createElement('table');
      const tableBody = document.createElement('tbody');

      // attributes
      table.setAttribute('id', 'ex5-table');

      // numbers 1 - 12
      for (let i = 1; i < 13; i++) {
        const tr = document.createElement('tr');
        tr.textContent = i;
        // styling
        if (Number(tr.textContent) % 4 === 0) {
          tr.style.backgroundColor = 'cyan';
        }
        tableBody.append(tr);
      }
      // append to output
      table.append(tableBody);
      output_container.append(table)
  }, [])

  return (
    <div
      id='ex5-container'>
        <h2>Number Table</h2>
        <div
          id='ex5-output'>
          </div>
      </div>
  )
}

export default EX5