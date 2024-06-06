import oopImage from '../assets/oop.png';
import procs from '../assets/procs.png';
import duck from '../assets/duck.png';
import meta from '../assets/meta.png';

export const RUBY_CONCEPTS_DATA = [
  {
    image: oopImage,
    title: 'Object-oriented Programming (OOP)',
    description:
      'In Ruby, everything is an object, including numbers, strings, and even classes.',
  },
  {
    image: duck,
    title: 'Dynamic Typing and Duck Typing',
    description:
      'Ruby is dynamically typed, meaning variables do not have a fixed type and can hold different types of objects over time.',
  },
  {
    image: procs,
    title: 'Blocks, Procs, and Lambdas',
    description:
     "In Ruby, blocks, procs, and lambdas are constructs used to encapsulate code that can be passed to methods and executed."
  },
  {
    image: meta,
    title: 'Meta Programming',
    description:
      'Ruby allows methods to be defined dynamically at runtime.',
  },
];
