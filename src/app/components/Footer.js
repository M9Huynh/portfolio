import React from 'react'

const Footer = () => {
  return (
    <div className=" pb-20">
      <h1 className="text-lg font-semibold flex justify-center">
        Get in touch
      </h1>
      <p className="flex justify-center">
        Please email me at &nbsp;<a href="mailto:huynhmatthew@gmail.com" className="text-[#8a9ee1] underline">
          huynhmatthew0@gmail.com
        </a>
        &nbsp; to chat!
      </p>
      <p className="text-sm mt-20">
        This was coded in Visual Studio Code, built with Next.js and Tailwind CSS and deplyed with Verecel!
      </p>
    </div>
  )
}

export default Footer
