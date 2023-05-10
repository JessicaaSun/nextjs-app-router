import React from 'react'

// you can cut description and paste it in layout.js if all the pages use the same description 
export const metadata ={
    title: "JESS - About",
    description: "This is description in about page"
  }
const About = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between pt-60 text-3xl">
      <h1>About page</h1>
    </div>
)
}

export default About
