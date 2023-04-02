import React from 'react';
import vg from '../assets/2.webp'

const Home = () => {
  return (
   <>
     <div className='home'>
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


    <div className="home3">

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
   </>
  )
}

export default Home