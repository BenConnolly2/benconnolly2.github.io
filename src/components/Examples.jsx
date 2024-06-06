import { useState } from 'react';
import TabButton from './TabButton'
import { CONCEPT_EXAMPLE_DATA } from '../data/concept-example-data';
import CodeSnippet from './CodeSnippet';

export default function Examples(second) {
  const [selectedTopic, setSelectedTopic] = useState()

  let tabContent = <p>Please select a topic !</p>;

  if(selectedTopic){
    tabContent = <div id="tab-content">
    {/* <h3>{CONCEPT_EXAMPLE_DATA[selectedTopic].title}</h3> */}
    <p>{CONCEPT_EXAMPLE_DATA[selectedTopic].description}</p>
      <CodeSnippet  key={selectedTopic} className={"language-ruby"} code={CONCEPT_EXAMPLE_DATA[selectedTopic].code}/>
  </div>
  }

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
        <menu>
          <TabButton isSelected={selectedTopic === "oop"} onClick={() => handleSelect("oop")}>Object-Oriented-Programming</TabButton>
          <TabButton isSelected={selectedTopic === "duck"} onClick={() => handleSelect("duck")} >Dynamic Typing and Duck Typing</TabButton>
          <TabButton isSelected={selectedTopic === "bpl"} onClick={() => handleSelect("bpl")}>Blocks, Procs and Lambdas</TabButton>
          <TabButton isSelected={selectedTopic === "meta"} onClick={() => handleSelect("meta")}>Meta programming</TabButton>
        </menu>
      {tabContent}
    </section>
  )
}
