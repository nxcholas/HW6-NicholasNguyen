import '../css/EX6.css'
import { useEffect } from 'react'

function EX6 () {
useEffect(() => {
  const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
    }, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
    }, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
    }];

    // container elements
    const output = document.getElementById('ex6-content')
    const dl_container = document.createElement('dl') // append this to output

    words.forEach(word => {
      // creating elements
        const headingWrapper = document.createElement('dt');
        const heading = document.createElement('strong');
        const description = document.createElement('dd');

        // values
        heading.textContent = word.term;
        description.textContent = word.definition;

        // appending
        headingWrapper.append(heading);
        dl_container.append(heading, description);
    })
    output.append(dl_container)
}, [])

  return (
    <div
      id='ex6-container'>
        <h1>A mini-dictionary</h1>
        <div
          id='ex6-content'></div>
      </div>
  )
}

export default EX6