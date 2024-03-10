'use client';
import Head from "next/head";
import Learn from "../components/Learn";
import EarthCanvas from "./EarthCanvas";

export default function HomePage () {
    return (
        <div className="font-sans text-gray-900 antialiased">
        <Head>
          <title>Akshith Chowdary</title>
          <meta name="description" content="chappidi srinivasa akshith chowdary's personal website. React,Django,Quantum Computing,Qiskit,Pennylane,Docker,Django,Kubernetes,FastAPI,Selenium,Redis,RestAPI." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <nav className="bg-white p-6 flex justify-between items-center shadow-md fixed top-0 w-full z-50">
          <a href="/" className="block">
            <img src="/profileLogo.png" alt="Logo" className="h-12 w-auto" />
          </a>
          <h1 className="text-4xl text-black pl-32">Akshith Chowdary</h1>
              <div className="flex gap-4">
                  <a href="#section1" className="text-black hover:text-gray-500 text-xl transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">Home</a>
                  <a href="#section2" className="text-black hover:text-gray-500 text-xl transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">Work</a>
                  <a href="#section3" className="text-black hover:text-gray-500 text-xl transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">Projects</a>
                  <a href="#section4" className="text-black hover:text-gray-500 text-xl transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">Market Place</a>
              </div>
          
        </nav>
        <main className="mt-24  w-full">
          <section id="section1" className="mb-4 bg-white flex w-full">
            <div className="w-1/2 p-4">
              <h1 className="text-[3vw] font-bold mb-2">Hi!</h1>
              <p className="text-[2vw]">
              <strong>Akshith Chowdary</strong> here.<br></br>
              Welcome to my digital hub! <br>
              </br>I am an upcoming <strong>Computer Science graduate</strong> from Bangalore Institute of Technology, with a strong foundation in software engineering and methodologies such as <strong>Agile</strong> and Waterfall models. <br></br>
              Equipped with diverse programming skills, I excel in languages like <strong>C,C++, Python, Java, JavaScript.</strong> My expertise spans <strong>Cloud Computing, Microservices, Full stack web applications, Quantum Computing &#124;0&gt;&lt;1&#124;. </strong><br></br>
              With a passion for innovation, I delve into deep reinforcement learning, combining reinforcement and deep learning techniques. <br></br>
              Join me in exploring the intersection of software engineering and cutting-edge technologies to drive transformative solutions.
              </p>
              {/* <button id= "learnMoreButton" className="mt-4 bg-green-500 text-black px-4 py-2 rounded">Learn More</button> */}
              <Learn />
            </div>
            
            <div className="w-1/2 bg-green-700 relative z-10">
              {/* <img className= "h-full object-fit" src="/logo.jfif" /> */}
              <EarthCanvas />

            </div> 
          </section>
          <section id="section2" className="mb-4 bg-white flex w-full">
          <div className="w-1/2 bg-green-700">
              <img src="" />
            </div>
            <div className="w-1/2 p-4">
              <h1 className="text-[3vw] font-bold mb-2">Exicting Stuff to be added soon</h1>
  
              <button className="mt-4 bg-green-500 text-black px-4 py-2 rounded">Bye for now!</button>
            </div>

          </section>
        </main>
      </div>
    );
}