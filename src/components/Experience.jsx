import React from "react"

function Experience() {
    return (
        <section className='my-12'>
          <h2 className='text-3xl font-semibold text-blue-600'>Experience</h2>
          <p className='text-lg mt-4'>
            though i'm still relatively new to this, I have experience in a variety of projects and programming
          </p>
          <ul className="mt-6 list-disc list-inside text-gray-800 text-center">
        <li>small <a href="https://gerald-boop.github.io/api-call/" target="blank">DND bestiary</a></li>
        <li>Game modding</li>
        <li>PC building</li>
        <li>Building responsive layouts</li>
      </ul>
        </section>
      );
}

export default Experience