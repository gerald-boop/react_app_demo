import React from "react";

function Contact() {
    return (
        <section className='my-12'>
          <h2 className='text-3xl font-semibold text-blue-600'>Contact</h2>
          <p className='text-lg mt-4'>
            Contact me through any of these. I am chronically online
          </p>
          <ul className="mt-6 list-disc list-inside text-gray-800 text-center">
        <li> <a href="https://www.facebook.com/ACryptog#/" target="blank">Facebook</a></li>
        <li> <a href="https://www.instagram.com/acryptog/" target="blank">Instagram</a></li>
        <li> <a href="https://github.com/gerald-boop" target="blank">Github</a></li>
        <li> <a href="https://steamcommunity.com/profiles/76561198835269236/" target="blank">Steam</a></li>
      </ul>
        </section>
      );
}

export default Contact