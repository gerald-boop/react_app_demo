import React from 'react';
import HoverButton from "./HoverButton";

function Skills() {
  return (
    <section className='my-12'>
      <h2 className='text-3xl font-semibold text-blue-600'>Skills</h2>
      <p className='text-lg mt-4'>
        I have a variety of skills that I obtained through college or just through hobbies
      </p>
      <ul className="mt-6 list-disc list-inside text-gray-800 text-center">
        <li>JavaScript / React</li>
        <li>TailwindCSS & modern UI design</li>
        <li>Node.js & Express</li>
        <li>using API recalls</li>
        <li>PC building</li>
        <li>being annoying</li>
      </ul>

      <div className="mt-6 flex justify-center">
        <HoverButton />
      </div>
    </section>
  );
}

export default Skills;
