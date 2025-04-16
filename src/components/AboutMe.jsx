import React from 'react';
import myPic from '../assets/my-pic.jpg';

function AboutMe() {
  return (
    <section className="my-12 flex flex-col items-center text-center">
      <img
        src={myPic}
        alt="A photo of me"
        className="w-40 h-40 rounded-full shadow-lg border-4 border-green-500 mb-4"
      />
      <h2 className="text-3xl font-semibold text-blue-600">About Me</h2>
      <p className="text-lg mt-4 max-w-xl text-gray-700">
        I am Gerald Jr. T. Cagaid! I am a student of UC CITCS. I am planning to take web development and netsec as my endeavor. I also do a bit of freelancing whenever my college life allows it XD
      </p>
    </section>
  );
}

export default AboutMe;
