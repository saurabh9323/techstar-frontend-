import React from 'react';
import vg from '../assets/2.webp'
import {AiFillGoogleCircle,AiFillYoutube,AiFillInstagram,AiFillAmazonCircle} from "react-icons/ai"

const Home = () => {
  return (
   <>
     <div className='home' id='home'>
      <main>
         <h1>TechyStar</h1>
         <p>Solution to all your problems</p>
      </main>

    </div>
    <div className="home2">
      <img src={vg} alt="graphic" />

       <div>
         <p>
         We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
         </p>
       </div>
    </div>


    <div className="home3" id='about'>

      <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Qui aliquid quam eos accusamus laudantium dicta, 
        natus tempore atque unde neque modi deserunt repudiandae esse voluptates ducimus laborum
         odio debitis explicabo, ut quod impedit fuga. Veritatis esse repellat quaerat, nobis vitae,
          eius laudantium libero, porro eligendi fuga eaque! Eos inventore quas dolorum autem nam debitis 
          quibusdam laborum neque voluptas? Nisi, voluptates sapiente! Officia atque voluptatibus modi fuga,
           labore ea ratione ad laboriosam unde sunt aliquam sed voluptatum cum distinctio eos consectetur 
           nostrum? Quasi quidem,
             assumenda dignissimos est voluptatum nisi similique expedita asperiores. Sit ipsam minima alias
              voluptate tempore. Corrupti rerum nostrum aut iure accusamus? Maiores debitis iure eligendi
               laboriosam perferendis placeat nemo, eum optio!</p>
      </div>
    </div>

    <div className="home4" id='brands'>
      <div>
        <h1>
          Brands
        </h1>

        <article>
          <div style={
            {
              animationDelay:"0.3s"
            }
          }>
          
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>
          <div style={
            {
              animationDelay:"0.5s"
            }
          }>
          
            <AiFillYoutube />
            <p>YouTube</p>
          </div>
          <div style={
            {
              animationDelay:"0.7s"
            }
          }>
          
            <AiFillInstagram />
            <p>Instagram</p>
          </div>
          <div style={
            {
              animationDelay:"0.9s"
            }
          }>
          
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>
        </article>
      </div>
     
    </div>
   </>
  )
}

export default Home;