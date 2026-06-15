"use client";

import { useState } from "react";
import NeuralCore from "@/components/NeuralCore";
import LoadingScreen from "@/components/LoadingScreen";
import RobotHead from "@/components/RobotHead";
import { main } from "framer-motion/client";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showCertificates, setShowCertificates] = useState(false);

  if (loading) {
    return (
      <LoadingScreen
        onFinish={() => setLoading(false)}
      />
    );
  }

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      

      {/* 3D Neural Core */}
     

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00ffff15,transparent_60%)]" />

      {/* Hero Section */}
      <section className="relative z-10 h-screen flex flex-col items-center justify-center px-6 text-center">
        <NeuralCore />

        <h1
          className="
          text-6xl
          md:text-8xl
          lg:text-9xl
          font-black
          tracking-[0.3em]
          text-cyan-400
          "
        >
          OM VERMA
        </h1>

        <p
          className="
          mt-6
          text-xl
          md:text-3xl
          text-gray-300
          "
        >
          IoT Developer • Embedded Systems Engineer •  Robotics Enthusiast
        </p>

        <p
           className="max-w-3xl mt-8 text-gray-300 text-xl">
        
          Building intelligent systems that connect
          hardware, software and AI to solve
          real-world challenges.
        </p>

        <div
          className="
          flex
          flex-wrap
          gap-4
          mt-10
          justify-center
          "
        >
         <div className="flex gap-6 mt-10 flex-wrap justify-center">

 <div className="flex gap-6 mt-10 flex-wrap justify-center">

  <div className="flex gap-6 mt-10 flex-wrap justify-center">

  {/* Explore Projects */}

<div className="flex gap-6 mt-10 flex-wrap justify-center">
 <button
  onClick={() => {
    alert("Button Clicked");
  }}
  className="px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold"
>
  🚀 Explore Projects
</button>

  <a
    href="/resume.pdf"
    download
    className="px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold hover:scale-105 transition flex items-center gap-3"
  >
    📄 Download Resume
  </a>

  <button
    onClick={() =>
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    className="px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold hover:scale-105 transition flex items-center gap-3"
  >
    📧 Contact Me
  </button>
</div>
</div>

</div>

</div>
        </div>
          <RobotHead />

      </section>
      <section className="relative py-32 px-8 z-10">
  <div className="max-w-6xl mx-auto">

    <div className="mb-12">
      <h2 className="text-5xl font-bold text-cyan-400 mb-4">
        ABOUT ME
      </h2>

      <div className="h-1 w-32 bg-cyan-400"></div>
    </div>

    <div className="flex flex-col gap-10">

      <div className="bg-black/40 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl">

        <h3 className="text-2xl font-bold text-cyan-300 mb-6">
          Engineer Profile
        </h3>

        <p className="text-gray-300 leading-8">
          Passionate IoT Developer, Embedded Systems Engineer and
          Robotics Enthusiast focused on building intelligent
          systems that bridge hardware and software.

          My goal is to create futuristic solutions combining
          Artificial Intelligence, Robotics, Embedded Electronics,
          Computer Vision and Automation.

          My expertise includes microcontroller programming, sensor integration,
          wireless communication systems, embedded Linux environments, and real-time
          data acquisition. I enjoy transforming innovative concepts into practical,
          high-performance solutions that solve real-world engineering challenges.
        </p>

      </div>

      <div className="bg-black/40 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl">

        <h3 className="text-2xl font-bold text-cyan-300 mb-6">
          Mission Status
        </h3>

        <div className="space-y-5">

          <div>
            <p className="mb-2">Embedded Systems</p>
            <div className="h-3 bg-gray-800 rounded-full">
              <div className="h-3 w-[90%] bg-cyan-400 rounded-full"></div>
            </div>
          </div>

          <div>
            <p className="mb-2">IoT Development</p>
            <div className="h-3 bg-gray-800 rounded-full">
              <div className="h-3 w-[85%] bg-cyan-400 rounded-full"></div>
            </div>
          </div>

          <div>
            <p className="mb-2">Artificial Intelligence</p>
            <div className="h-3 bg-gray-800 rounded-full">
              <div className="h-3 w-[75%] bg-cyan-400 rounded-full"></div>
            </div>
          </div>

          <div>
            <p className="mb-2">Robotics</p>
            <div className="h-3 bg-gray-800 rounded-full">
              <div className="h-3 w-[80%] bg-cyan-400 rounded-full"></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div><section className="relative py-24 px-8 z-10">

  <div className="max-w-7xl mx-auto">

    <div className="mb-16">
      <h2 className="text-5xl font-bold text-cyan-400 mb-4">
        TECHNICAL EXPERTISE
      </h2>

      <div className="h-1 w-40 bg-cyan-400"></div>

      <p className="mt-6 text-gray-400 text-lg max-w-3xl">
        Specialized in designing intelligent systems that combine
        Embedded Electronics, IoT Connectivity, Artificial Intelligence,
        Robotics and Automation to create real-world engineering solutions.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* Embedded Systems */}
      <div className="bg-black/40 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] transition duration-300">

        <div className="text-5xl mb-5">⚡</div>

        <h3 className="text-2xl font-bold text-cyan-300 mb-6">
          Embedded Systems
        </h3>

        <ul className="space-y-4 text-gray-300">
          <li>Arduino Development</li>
          <li>ESP32 Programming</li>
          <li>STM32 Fundamentals</li>
          <li>Embedded C / C++</li>
          <li>Sensor Integration</li>
          <li>UART / SPI / I2C Communication</li>
          <li>Real-Time Data Processing</li>
        </ul>

      </div>

      {/* IoT */}
      <div className="bg-black/40 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] transition duration-300">

        <div className="text-5xl mb-5">🌐</div>

        <h3 className="text-2xl font-bold text-cyan-300 mb-6">
          IoT Engineering
        </h3>

        <ul className="space-y-4 text-gray-300">
          <li>MQTT Protocol</li>
          <li>WiFi & Bluetooth Systems</li>
          <li>Cloud Connectivity</li>
          <li>Remote Monitoring</li>
          <li>Smart Home Automation</li>
          <li>Industrial IoT Concepts</li>
          <li>Device-to-Cloud Communication</li>
        </ul>

      </div>

      {/* AI */}
      <div className="bg-black/40 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] transition duration-300">

        <div className="text-5xl mb-5">🤖</div>

        <h3 className="text-2xl font-bold text-cyan-300 mb-6">
          AI & Robotics
        </h3>

        <ul className="space-y-4 text-gray-300">
          <li>Python Programming</li>
          <li>Machine Learning</li>
          <li>OpenCV</li>
          <li>Computer Vision</li>
          <li>AI Integration</li>
          <li>Robotics Systems</li>
          <li>Autonomous Decision Making</li>
        </ul>

      </div>

    </div>

    {/* Technology Stack */}
    <div className="mt-20">

      <h3 className="text-3xl font-bold text-cyan-300 mb-8">
        TECHNOLOGY STACK
      </h3>

      <div className="flex flex-wrap gap-4">

        {[
          "C",
          "C++",
          "Python",
          "Arduino",
          "ESP32",
          "Raspberry Pi",
          "OpenCV",
          "TensorFlow",
          "Linux",
          "MQTT",
          "Git",
          "IoT",
          "AI",
          "Robotics",
          "Automation"
        ].map((tech) => (
          <div
            key={tech}
            className="px-6 py-3 rounded-full border border-cyan-500/40 bg-black/40 text-cyan-300 hover:bg-cyan-500 hover:text-black transition cursor-pointer"
          >
            {tech}
          </div>
        ))}

      </div>

    </div>

  </div>

  {/* FEATURED PROJECTS */}

 <section
  id="projects"
  className="relative py-24 px-8 z-10"
>


  <div className="max-w-7xl mx-auto"> </div>

    <h2 className="text-5xl font-bold text-cyan-400 mb-4">
      FEATURED PROJECTS
    </h2>

    <div className="h-1 w-32 bg-cyan-400 mb-16"></div>

   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>

 

<div className="bg-black/40 border border-cyan-500/30 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-cyan-400 transition duration-300">

  <img
  src="https://imgs.search.brave.com/dtVVQyCC92Ev_b9mu2v_wd6iIisB4Za_tqnMAW7LmdI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDk3/ODg0NTk1L3Bob3Rv/L2Ryb25lLWF0LXN1/bnNldC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9YTR5Nkww/S1lQODY3Qy1iSTVl/eHQwMXlTQWdhaFRy/TVM0Z0JOeGZaMWVo/Yz0"
  alt="VAINATEYA Drone"
  className="w-full h-60 object-cover"
/>
  <div className="p-6">

    <h3 className="text-3xl font-bold text-cyan-300 mb-2">
     VAINATEYA
    </h3>

    <p className="text-cyan-400 mb-4">
      AI Emergency Rescue Drone
    </p>

    <p className="text-gray-300 leading-8">
      An autonomous rescue drone designed for disaster management and emergency response operations. It uses AI-based object detection, GPS navigation, and aerial surveillance to locate victims and provide real-time situational awareness during natural disasters
    </p>

  </div>

</div><div className="bg-black/40 border border-cyan-500/30 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-cyan-400 transition duration-300">

  <img
    src="https://imgs.search.brave.com/PCAuapAqK-j5Q0CfPo475FktSck-EwDokyuOqHgg-Eg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kM3R3/ZWN3OXF2b3QzdS5j/bG91ZGZyb250Lm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wMy9JbnRlbGxp/Z2VudC1UcmFmZmlj/LU1hbmFnZW1lbnQt/U3lzdGVtc18tQS1M/b3dkb3duLW9mLVNv/ZnR3YXJlLUhhcmR3/YXJlLUNvbXBvbmVu/dHMtNzcweDU1MC5q/cGc"
    alt="Smart Traffic Management"
    className="w-full h-60 object-cover"
  />

  <div className="p-6">

    <h3 className="text-3xl font-bold text-cyan-300 mb-2">
      Smart Traffic Management
    </h3>

    <p className="text-cyan-400 mb-4">
     Intelligent Urban Traffic Control
    </p>

    <p className="text-gray-300 leading-8">
      An AI and IoT-powered traffic management system that analyzes traffic density and optimizes signal timing. It helps reduce congestion, improve traffic flow, and prioritize emergency vehicles in smart city environments.
    </p>

  </div>

</div><div className="bg-black/40 border border-cyan-500/30 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-cyan-400 transition duration-300">

  <img
    src="https://imgs.search.brave.com/wd2E0Ih8mGoav2cZ8nn1ux8ZdjWH3JGgaoL2b0fzkQ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW90aW5zaWRlci5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMTAvYmF0LWpw/Zy5qcGc"
    alt="IoT Battery Management"
    className="w-full h-60 object-cover"
  />

  <div className="p-6">

    <h3 className="text-3xl font-bold text-cyan-300 mb-2">
      IoT Battery Management
    </h3>

    <p className="text-cyan-400 mb-4">
      Smart Energy Monitoring Platform
    </p>

    <p className="text-gray-300 leading-8">
     A cloud-connected battery monitoring solution that continuously tracks voltage, current, temperature, and battery health. The system enables predictive maintenance and improves the efficiency and reliability of energy storage systems.
    </p>

  </div>

</div><div className="bg-black/40 border border-cyan-500/30 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-cyan-400 transition duration-300">

  <img
    src="https://imgs.search.brave.com/1Lg4r3Jjnpi8G1CJvz2AWFI5fONZRMMmFZeKMeBGM7g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YxL2Zm/LzAxL2YxZmYwMTU2/OWViYTM4NTVjMGUz/MTIzOWE1YTdiYzMz/LmpwZw"
    alt="Smart Helmet"
    className="w-full h-60 object-cover"
  />

  <div className="p-6">

    <h3 className="text-3xl font-bold text-cyan-300 mb-2">
      Smart Helmet
    </h3>

    <p className="text-cyan-400 mb-4">
     Navigation & Safety Assistant
    </p>

    <p className="text-gray-300 leading-8">
     An intelligent wearable device designed to enhance rider and pedestrian safety through obstacle detection, GPS navigation, and emergency alert features. It provides real-time guidance and improves situational awareness in challenging environments.
    </p>

  </div>

</div><div className="bg-black/40 border border-cyan-500/30 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-cyan-400 transition duration-300">

  <img
    src="https://imgs.search.brave.com/bfah2Ov0oLFhKAOJRrnmrO5BsG12yulnAJwmgQ0QJsc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/Mzg1MzQwOC9waG90/by9tb2Rlcm4tc3Ry/ZWV0bGlnaHRzLXdp/dGgtbGVkLXRlY2hu/b2xvZ3ktYXQtbmln/aHQtZW1wdHktbW9k/ZXJuLXJvYWQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTRI/eUIwVzNYenNSTkE2/Uk14NVdaOURjRy02/NGp0UEp6a3B1M1U0/MEZ3YzQ9"
    alt="Smart Street Light Network"
    className="w-full h-60 object-cover"
  />

  <div className="p-6">

    <h3 className="text-3xl font-bold text-cyan-300 mb-2">
     Smart Street Light Network
    </h3>

    <p className="text-cyan-400 mb-4">
     Smart City Infrastructure Solution
    </p>

    <p className="text-gray-300 leading-8">
      An IoT-enabled street lighting network that automatically adjusts brightness based on traffic and environmental conditions. The system improves energy efficiency, reduces operational costs, and supports smart city development.
    </p>

  </div>

</div><div className="bg-black/40 border border-cyan-500/30 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-cyan-400 transition duration-300">

  <img
    src="https://imgs.search.brave.com/zRbJxTZWfPJuIq4_8aNWQVLV9S7ZgMTRA4ONZ8rONag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTg2/OTk3NDUvcGhvdG8v/YS1ub3J0b24tY29t/bWFuZG8tOTYxc2Ut/bW90b3JjeWNsZS1p/cy1kcml2ZW4tb24t/dGhlLXRlc3QtdHJh/Y2stYXQtdGhlLW5v/cnRvbi1tb3RvcmN5/Y2xlcy1sdGQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXF5/aEtnRC1Ka0hPZy1p/aWV0TDlqUEM3czVY/U3BYQ180YlZKaXVU/b0g2RXc9"
    alt="Hybrid Smart Bike"
    className="w-full h-60 object-cover"
  />

  <div className="p-6">

    <h3 className="text-3xl font-bold text-cyan-300 mb-2">
      Hybrid Smart Bike
    </h3>

    <p className="text-cyan-400 mb-4">
     Dual Power Transportation Platform
    </p>

    <p className="text-gray-300 leading-8">
    An advanced transportation solution combining electric and conventional power systems with intelligent monitoring features. It includes battery management, performance analytics, and IoT connectivity for enhanced efficiency and user experience.
    </p>

  </div>

</div><div className="bg-black/40 border border-cyan-500/30 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-cyan-400 transition duration-300">

  <img
    src="https://imgs.search.brave.com/o98Tu1WFbp9dnnuemh3HbmLzJds5ZPrsaF2cvwtp0M8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXBsdXMtbWVkaWEt/bGlicmFyeS1zZXJ2/aWNlLW1lZGlhLzYz/MTJlMzYwLTg4YTgt/NGFjMi1hYjEzLTg0/MmQyMGI5YTkwMS5f/X0NSMCwwLDk3MCwz/MDBfUFQwX1NYOTcw/X1YxX19fLmpwZw"
    alt="Smart Bike Monitoring"
    className="w-full h-60 object-cover"
  />

  <div className="p-6">

    <h3 className="text-3xl font-bold text-cyan-300 mb-2">
      Smart Bike Monitoring
    </h3>

    <p className="text-cyan-400 mb-4">
     Connected Vehicle Monitoring System
    </p>

    <p className="text-gray-300 leading-8">
     A smart vehicle tracking and monitoring platform that provides real-time GPS location, theft detection, and remote diagnostics. It enables users to monitor vehicle performance and security through cloud connectivity.
    </p>

  </div>

</div><div className="bg-black/40 border border-cyan-500/30 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-cyan-400 transition duration-300">

  <img
    src="https://imgs.search.brave.com/oMVGhkJk20OJg83J1VWE2ALuAqF-CohXGy6OPaGki_4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcm9q/ZWN0c2ZhY3Rvcnku/aW4vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDgvaW90LWNv/YWwtbWluZS1zYWZl/dHktbW9uaXRvcmlu/Zy1hbGVydGluZy1z/eXN0ZW0tNDYwOC1i/eS0zNDU2LTQtNTAw/eDM3NS5qcGc"
    alt="Mine Alert System"
    className="w-full h-60 object-cover"
  />

  <div className="p-6">

    <h3 className="text-3xl font-bold text-cyan-300 mb-2">
      Mine Alert System
    </h3>

    <p className="text-cyan-400 mb-4">
   Industrial Safety Monitoring Platform
    </p>

    <p className="text-gray-300 leading-8">
     A worker safety system developed for mining environments that continuously monitors hazardous gases and environmental conditions. It generates instant alerts and improves operational safety through real-time monitoring and emergency notifications.
    </p>

  </div>

</div>
<section className="relative py-24 px-8 z-10">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold text-cyan-400 mb-4">
      EDUCATION & QUALIFICATIONS
    </h2>

    <div className="h-1 w-40 bg-cyan-400 mb-16"></div>

    <div className="grid lg:grid-cols-2 gap-12">

      {/* Profile Photo */}
      <div className="bg-black/40 border border-cyan-500/30 rounded-3xl p-6 backdrop-blur-xl">

        <img
          src="/profile.jpg"
          alt="Om Verma"
          className="w-full rounded-3xl object-cover"
        />

      </div>

      {/* Education & Qualifications */}
      <div className="bg-black/40 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl">

        <h3 className="text-3xl font-bold text-cyan-300 mb-8">
          Education
        </h3>

        <div className="space-y-8 text-gray-300 text-lg">

          <div className="border-l-4 border-cyan-400 pl-5">
            <p className="text-cyan-400 font-semibold text-xl">
              Secondary Education (10th)
            </p>

            <p>Ambika Public Senior Secondary School</p>
            <p>RBSE Board</p>
            <p>Percentage: 86%</p>
          </div>

          <div className="border-l-4 border-cyan-400 pl-5">
            <p className="text-cyan-400 font-semibold text-xl">
              Senior Secondary Education (12th)
            </p>

            <p>Sanskar Public Senior Secondary School</p>
            <p>Science (Mathematics) Stream</p>
            <p>RBSE Board</p>
            <p>Percentage: 79%</p>
          </div>

          <div className="border-l-4 border-cyan-400 pl-5">
            <p className="text-cyan-400 font-semibold text-xl">
              Bachelor of Technology (B.Tech)
            </p>

            <p>Electronics & Communication Engineering (ECE)</p>
            <p>Swami Keshvanand Institute of Technology (SKIT), Jaipur</p>
            <p>Completed in 2024</p>
            <p>Currently working with IDR as a C.T.O in Greater noida</p>
          </div>

        </div>

       

        <button
          onClick={() =>
            setShowCertificates(!showCertificates)
          }
          className="
          mt-10
          px-8
          py-4
          rounded-xl
          bg-cyan-500
          text-black
          font-bold
          hover:scale-105
          transition
          "
        >
          📜 View Certificates
        </button>

      </div>

    </div>

    {/* Certificate Gallery */}

    {showCertificates && (

      <div className="mt-20">

        <h3 className="text-4xl font-bold text-cyan-300 mb-10">
          Certificates & Achievements
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <img
            src="/certificates/certificate1.jpg"
            alt="Certificate 1"
            className="rounded-2xl border border-cyan-500/30 hover:scale-105 transition"
          />

          <img
            src="/certificates/certificate2.jpg"
            alt="Certificate 2"
            className="rounded-2xl border border-cyan-500/30 hover:scale-105 transition"
          />

          <img
            src="/certificates/certificate3.jpg"
            alt="Certificate 3"
            className="rounded-2xl border border-cyan-500/30 hover:scale-105 transition"
          />

          <img
            src="/certificates/certificate4.jpg"
            alt="Certificate 4"
            className="rounded-2xl border border-cyan-500/30 hover:scale-105 transition"
          />

          <img
            src="/certificates/certificate5.jpg"
            alt="Certificate 5"
            className="rounded-2xl border border-cyan-500/30 hover:scale-105 transition"
          />

          <img
            src="/certificates/certificate6.jpg"
            alt="Certificate 6"
            className="rounded-2xl border border-cyan-500/30 hover:scale-105 transition"
          />

        </div>

      </div>

    )}

  </div>

  <section className="relative py-24 px-8 z-10">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold text-cyan-400 mb-4">
      WORK EXPERIENCE
    </h2>

    <div className="h-1 w-40 bg-cyan-400 mb-16"></div>

    <div className="space-y-10">

      {/* Experience 1 */}

      <div className="bg-black/40 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400 transition">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">

          <h3 className="text-3xl font-bold text-cyan-300">
            HAC Motors
          </h3>

          <span className="text-cyan-400 text-lg">
            Jan 2024 - Present
          </span>

        </div>

        <p className="text-xl text-cyan-400 mb-4">
          Technical Lead
        </p>

        <p className="text-gray-300 text-lg leading-8">
          Leading the development of connected vehicle technologies,
          IoT-enabled transportation systems, smart diagnostics,
          telemetry platforms and intelligent mobility solutions.
          Responsible for system architecture, hardware integration,
          communication protocols and real-time monitoring systems.
        </p>

      </div>

      {/* Experience 2 */}

      <div className="bg-black/40 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400 transition">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">

          <h3 className="text-3xl font-bold text-cyan-300">
            CircuitLoop Technologies
          </h3>

          <span className="text-cyan-400 text-lg">
            May 2023 - Aug 2023
          </span>

        </div>

        <p className="text-xl text-cyan-400 mb-4">
          Embedded Systems Intern
        </p>

        <p className="text-gray-300 text-lg leading-8">
          Worked on ESP32 development, sensor interfacing,
          embedded firmware design, IoT hardware integration
          and rapid prototyping. Contributed to real-time
          monitoring solutions and wireless communication systems.
        </p>

      </div>

      {/* Experience 3 */}

      <div className="bg-black/40 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400 transition">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">

          <h3 className="text-3xl font-bold text-cyan-300">
            Independent Research & Development
          </h3>

          <span className="text-cyan-400 text-lg">
            2022 - Present
          </span>

        </div>

        <p className="text-xl text-cyan-400 mb-4">
          AI, Robotics & IoT Innovator
        </p>

        <p className="text-gray-300 text-lg leading-8">
          Designed and developed advanced engineering projects
          including AI rescue drones, smart transportation systems,
          intelligent monitoring platforms, embedded electronics
          solutions and autonomous robotics concepts focused on
          solving real-world challenges.
        </p>

      </div>

    </div>

  </div>

 <section
 
  id="contact"
  className="relative py-24 px-8 z-10"
>

  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold text-cyan-400 mb-4">
      CONTACT DETAILS
    </h2>

    <div className="h-1 w-40 bg-cyan-400 mb-16"></div>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Contact Information */}

      <div className="bg-black/40 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl">

        <h3 className="text-3xl font-bold text-cyan-300 mb-8">
          Let's Connect
        </h3>

        <div className="space-y-6 text-lg">

          <a
            href="tel:+919602498154"
            className="block text-gray-300 hover:text-cyan-400 transition"
          >
            📱 +91 9602498154
          </a>

          <a
            href="mailto:omverma3210@gmail.com"
            className="block text-gray-300 hover:text-cyan-400 transition"
          >
            📧 omverma3210@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/omverma24"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-300 hover:text-cyan-400 transition"
          >
            💼 LinkedIn Profile
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-300 hover:text-cyan-400 transition"
          >
            💻 GitHub Profile
          </a>

          <p className="text-gray-300">
            📍 Jaipur, Rajasthan, India
          </p>

        </div>

      </div>

      {/* Contact Form */}

      <div className="bg-black/40 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl">

        <h3 className="text-3xl font-bold text-cyan-300 mb-8">
          Send a Message
        </h3>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-black/50 border border-cyan-500/30 text-white outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-black/50 border border-cyan-500/30 text-white outline-none"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-black/50 border border-cyan-500/30 text-white outline-none"
          />

          <button
            type="submit"
            className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:scale-105 transition"
          >
            🚀 Send Message
          </button>

        </form>

      </div>

    </div>

  </div>

</section>

</section>

</section>
    

</section>
</section>

</section>

      
    </main>
  );
}