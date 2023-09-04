import React from 'react'
import vg from "../assests/asset2.webp"
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
  } from "react-icons/ai";
  

const Home = () => {
  return (
    <>

    <div className='home' id="home">
        <main>
        <h1>TechyStar</h1>
        <p>Solution to all your problems</p>
       </main>
    </div>
       
    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
     
     
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
          Welcome to our tech company, where innovation meets excellence. We are your one-stop destination for a myriad of cutting-edge technological solutions that cater to every facet of your business needs. With a passion for technology and a commitment to delivering top-notch services,  Whether you're seeking custom software development, cloud solutions, cybersecurity expertise, or IT consulting, our dedicated team of experts is here to guide you through the ever-evolving tech landscape. We believe that technology should simplify, streamline, and elevate your operations, and we're dedicated to making that a reality. Join us on this exciting journey of transformation, where possibilities are limitless, and together, we'll shape the future of technology. Welcome to innovation redefined.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
      
    </>
  )
}

export default Home
