import CoreConcept from "./CoreConcept";
import { RUBY_CONCEPTS_DATA } from "../data/ruby-concepts-data";

export default function CoreConcepts(props) {
  return (
    <section id="core-concepts">
          <h2> Lets get started with some fundamental Ruby Concepts</h2>
            <ul>
              {RUBY_CONCEPTS_DATA.map((conceptItem) => (
                <CoreConcept key={conceptItem.title} {...conceptItem} />
              ))}
            </ul>
        </section>
  );
}
