"use client";

import { useState } from "react";
import NeuralCore from "@/components/NeuralCore";
import LoadingScreen from "@/components/LoadingScreen";
import RobotHead from "@/components/RobotHead";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showCertificates, setShowCertificates] = useState(false);

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00ffff15,transparent_60%)]" />

      {/* Hero Section */}
      <section className="relative z-10 h-screen flex flex-col items-center justify-center px-6 text-center">
        <NeuralCore />

        <h1
          className="
            text-6xl
            md:text-8xl
            font-extrabold
            tracking-[0.25em]
            uppercase
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-cyan-300
            via-cyan-400
            to-blue-500
            drop-shadow-[0_0_25px_rgba(0,255,255,0.8)]
            mb-6
            leading-tight
          "
        >
          OM VERMA
        </h1>

        <p className="text-cyan-300 text-xl md:text-2xl tracking-[0.3em] uppercase">
          AI • Robotics • Embedded Systems Engineer
        </p>

        <p className="max-w-3xl mt-8 text-gray-300 text-xl">
          Building intelligent systems that connect hardware, software and AI to
          solve real-world challenges.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-6 mt-10 flex-wrap justify-center">
          {/* About Me Button */}
          <button
            type="button"
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="
              px-8 py-4
              rounded-xl
              border border-cyan-400
              bg-cyan-400/10
              hover:bg-cyan-400
              hover:text-black
              transition-all duration-300
              font-bold
              shadow-[0_0_20px_#00ffff40]
            "
          >
            About Me
          </button>

          {/* Explore Projects Button */}
          <button
            type="button"
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="
              px-8 py-4
              rounded-xl
              border border-cyan-400
              bg-cyan-400/10
              hover:bg-cyan-400
              hover:text-black
              transition-all duration-300
              font-bold
              shadow-[0_0_20px_#00ffff40]
            "
          >
            Explore Projects
          </button>

          {/* Contact Button */}
          <button
            type="button"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="
              px-8 py-4
              rounded-xl
              border border-cyan-400
              bg-cyan-400/10
              hover:bg-cyan-400
              hover:text-black
              transition-all duration-300
              font-bold
              shadow-[0_0_20px_#00ffff40]
            "
          >
            Contact Me
          </button>

          {/* Resume Link */}
          <a
            href="/resume.pdf"
            download
            className="
              px-8 py-4
              rounded-xl
              border border-cyan-400
              bg-cyan-400/10
              hover:bg-cyan-400
              hover:text-black
              transition-all duration-300
              font-bold
              shadow-[0_0_20px_#00ffff40]
            "
          >
            Download Resume
          </a>
        </div>

        <RobotHead />
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="relative py-32 px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-5xl font-bold text-cyan-400 mb-4">ABOUT ME</h2>
            <div className="h-1 w-32 bg-cyan-400"></div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="bg-black/40 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-cyan-300 mb-6">
                Engineer Profile
              </h3>
              <p className="text-gray-300 leading-8">
                Passionate IoT Developer, Embedded Systems Engineer and Robotics
                Enthusiast focused on building intelligent systems that bridge
                hardware and software. My goal is to create futuristic
                solutions combining Artificial Intelligence, Robotics, Embedded
                Electronics, Computer Vision and Automation. My expertise includes
                microcontroller programming, sensor integration, wireless
                communication systems, embedded Linux environments, and real-time
                data acquisition. I enjoy transforming innovative concepts into
                practical, high-performance solutions that solve real-world engineering
                challenges.
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
        </div>
      </section>

      {/* TECHNICAL EXPERTISE */}
      <section className="relative py-24 px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-cyan-400 mb-4">
              TECHNICAL EXPERTISE
            </h2>
            <div className="h-1 w-40 bg-cyan-400"></div>
            <p className="mt-6 text-gray-400 text-lg max-w-3xl">
              Specialized in designing intelligent systems that combine Embedded
              Electronics, IoT Connectivity, Artificial Intelligence, Robotics and
              Automation to create real-world engineering solutions.
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
                "C", "C++", "Python", "Arduino", "ESP32", "Raspberry Pi",
                "OpenCV", "TensorFlow", "Linux", "MQTT", "Git", "IoT",
                "AI", "Robotics", "Automation"
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
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section id="projects" className="relative py-24 px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-cyan-400 mb-4">
            FEATURED PROJECTS
          </h2>
          <div className="h-1 w-32 bg-cyan-400 mb-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-black/40 border border-cyan-500/30 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-cyan-400 transition duration-300">
              <img
                src="https://imgs.search.brave.com/dtVVQyCC92Ev_b9mu2v_wd6iIisB4Za_tqnMAW7LmdI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDk3/ODg0NTk1L3Bob3Rv/L2Ryb25lLWF0LXN1/bnNldC5qcGc_cz02/MTJ4NjEyeJnc9MCZr/PTIwJmM9YTR5Nkww/S1lQODY3Qy1iSTVl/eHQwMXlTQWdhaFRy/TVM0Z0JOeGZaMWVo/Yz0"
                alt="VAINATEYA Drone"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-3xl font-bold text-cyan-300 mb-2">VAINATEYA</h3>
                <p className="text-cyan-400 mb-4">AI Emergency Rescue Drone</p>
                <p className="text-gray-300 leading-8">
                  An autonomous rescue drone designed for disaster management and
                  emergency response operations. It uses AI-based object detection,
                  GPS navigation, and aerial surveillance to locate victims and
                  provide real-time situational awareness during natural disasters.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-black/40 border border-cyan-500/30 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-cyan-400 transition duration-300">
              <img
                src="https://imgs.search.brave.com/PCAuapAqK-j5Q0CfPo475FktSck-EwDokyuOqHgg-Eg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kM3R3/ZWN3OXF2b3QzdS5j/bG91ZGZyb250Lm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wMy9JbnRlbGxp/Z2VudC1UcmFmZmlj/LU1hbmFnZW1lbnQt/U3lzdGVtc18tQS1M/b3dkb3duLW9mLVNv/ZnR3YXJlLUhhcmR3/YXJlLUNvbXBvbmVu/dHMtNzcweDU1MC5q/cGc"
                alt="Smart Traffic Management"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-3xl font-bold text-cyan-300 mb-2">
                  Smart Traffic Management
                </h3>
                <p className="text-cyan-400 mb-4">Intelligent Urban Traffic Control</p>
                <p className="text-gray-300 leading-8">
                  An AI and IoT-powered traffic management system that analyzes traffic
                  density and optimizes signal timing. It helps reduce congestion,
                  improve traffic flow, and prioritize emergency vehicles in smart city environments.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-black/40 border border-cyan-500/30 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-cyan-400 transition duration-300">
              <img
                src="https://imgs.search.brave.com/wd2E0Ih8mGoav2cZ8nn1ux8ZdjWH3JGgaoL2b0fzkQ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW90aW5zaWRlci5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMTAvYmF0LWpw/Zy5qcGc"
                alt="IoT Battery Management"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-3xl font-bold text-cyan-300 mb-2">
                  IoT Battery Management
                </h3>
                <p className="text-cyan-400 mb-4">Smart Energy Monitoring Platform</p>
                <p className="text-gray-300 leading-8">
                  A cloud-connected battery monitoring solution that continuously tracks
                  voltage, current, temperature, and battery health. The system enables
                  predictive maintenance and improves the efficiency and reliability of energy storage systems.
                </p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-black/40 border border-cyan-500/30 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-cyan-400 transition duration-300">
              <img
                src="https://imgs.search.brave.com/1Lg4r3Jjnpi8G1CJvz2AWFI5fONZRMMmFZeKMeBGM7g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YxL2Zm/LzAxL2YxZmYwMTU2/OWViYTM4NTVjMGUz/MTIzOWE1YTdiYzMz/LmpwZw"
                alt="Smart Helmet"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-3xl font-bold text-cyan-300 mb-2">Smart Helmet</h3>
                <p className="text-cyan-400 mb-4">Navigation & Safety Assistant</p>
                <p className="text-gray-300 leading-8">
                  An intelligent wearable device designed to enhance rider and pedestrian
                  safety through obstacle detection, GPS navigation, and emergency alert features.
                  It provides real-time guidance and improves situational awareness in challenging environments.
                </p>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-black/40 border border-cyan-500/30 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-cyan-400 transition duration-300">
              <img
                src="https://imgs.search.brave.com/bfah2Ov0oLFhKAOJRrnmrO5BsG12yulnAJwmgQ0QJsc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/Mzg1MzQwOC9waG90/by9tb2Rlcm4tc3Ry/ZWV0bGlnaHRzLXdp/dGgtbGVkLXRlY2hu/b2xvZ3ktYXQtbmln/aHQtZW1wdHktbW9k/ZXJuLXJvYWQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTRI/eUIwVzNYenNSTkE2/Uk14NVdaOURjRy02/NGp0UEp6a3B1M1U0/MEZ3YzQ9"
                alt="Smart Street Light Network"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-3xl font-bold text-cyan-300 mb-2">
                  Smart Street Light Network
                </h3>
                <p className="text-cyan-400 mb-4">Smart City Infrastructure Solution</p>
                <p className="text-gray-300 leading-8">
                  An IoT-enabled street lighting network that automatically adjusts
                  brightness based on traffic and environmental conditions. The system improves
                  energy efficiency, reduces operational costs, and supports smart city development.
                </p>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-black/40 border border-cyan-500/30 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-cyan-400 transition duration-300">
              <img
                src="https://imgs.search.brave.com/zRbJxTZWfPJuIq4_8aNWQVLV9S7ZgMTRA4ONZ8rONag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTg2/OTk3NDUvcGhvdG8v/YS1ub3J0b24tY29t/bWFuZG8tOTYxc2Ut/bW90b3JjeWNsZS1p/cy1kcml2ZW4tb24t/dGhlLXRlc3QtdHJh/Y2stYXQtdGhlLW5v/cnRvbi1tb3RvcmN5/Y2xlcy1sdGQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXF5/aEtnRC1Ka0hPZy1p/aWV0TDlqUEM3czVY/U3BYQ180YlZKaXVU/b0g2RXc9"
                alt="Hybrid Smart Bike"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-3xl font-bold text-cyan-300 mb-2">
                  Hybrid Smart Bike
                </h3>
                <p className="text-cyan-400 mb-4">Dual Power Transportation Platform</p>
                <p className="text-gray-300 leading-8">
                  An advanced transportation solution combining electric and conventional
                  power systems with intelligent monitoring features. It includes battery management,
                  performance analytics, and IoT connectivity for enhanced efficiency and user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION & QUALIFICATIONS */}
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
                src="/profile.jpeg"
                alt="Om Verma"
                className="w-full h-[660px] object-cover rounded-3xl border-2 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)]"
              />
            </div>

            {/* Education Details */}
            <div className="bg-black/40 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-cyan-300 mb-8">Education</h3>
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
                  <p>Currently working with IDR as a C.T.O in Greater Noida</p>
                </div>
              </div>

              <button
                onClick={() => setShowCertificates(!showCertificates)}
                className="mt-10 px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold hover:scale-105 transition"
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
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <img
                    key={num}
                    src={`/certificates/certificate${num}.jpeg`}
                    alt={`Certificate ${num}`}
                    className="rounded-2xl border border-cyan-500/30 hover:scale-105 transition"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section className="relative py-24 px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-cyan-400 mb-4">WORK EXPERIENCE</h2>
          <div className="h-1 w-40 bg-cyan-400 mb-16"></div>

          <div className="space-y-10">
            {/* Experience 1 */}
            <div className="bg-black/40 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400 transition">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                <h3 className="text-3xl font-bold text-cyan-300">HAC Motors</h3>
                <span className="text-cyan-400 text-lg">Jan 2024 - Present</span>
              </div>
              <p className="text-xl text-cyan-400 mb-4">Technical Lead</p>
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
                <h3 className="text-3xl font-bold text-cyan-300">CircuitLoop Technologies</h3>
                <span className="text-cyan-400 text-lg">May 2023 - Aug 2023</span>
              </div>
              <p className="text-xl text-cyan-400 mb-4">Embedded Systems Intern</p>
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
                <span className="text-cyan-400 text-lg">2022 - Present</span>
              </div>
              <p className="text-xl text-cyan-400 mb-4">AI, Robotics & IoT Innovator</p>
              <p className="text-gray-300 text-lg leading-8">
                Designed and developed advanced engineering projects including AI rescue drones,
                smart transportation systems, intelligent monitoring platforms, embedded electronics
                solutions and autonomous robotics concepts focused on solving real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS SECTION */}
      <section id="contact" className="relative py-24 px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-cyan-400 mb-4">CONTACT DETAILS</h2>
          <div className="h-1 w-40 bg-cyan-400 mb-16"></div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Info Links */}
            <div className="bg-black/40 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-cyan-300 mb-8">Let's Connect</h3>
              <div className="space-y-6 text-lg">
                
                {/* Phone */}
                <a href="tel:+919602498154" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.89.33 1.76.63 2.6 a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.15a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.6.63A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>+91 9602498154</span>
                </a>

                {/* Email */}
                <a href="mailto:omverma3210@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16v16H4z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  <span>omverma3210@gmail.com</span>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/omverma24" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.5c0-1.79-.03-4.09-2.5-4.09-2.5 0-2.88 1.95-2.88 3.96V24h-5V8z"/>
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>

                {/* GitHub */}
                <a href="https://github.com/jayverma123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 0 0 8.35 22.93c.6.11.82-.26.82-.58v-2.24c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.19 1.17a11.1 11.1 0 0 1 5.8 0c2.22-1.48 3.19-1.17 3.19-1.17.63 1.6.23 2.78.11 3.07.74.8 1.19 1.82 1.19 3.07 0 4.41-2.69 5.38-5.25 5.66.41.35.77 1.05.77 2.11v3.13c0 .32.22.7.83.58A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
                  </svg>
                  <span>GitHub Profile</span>
                </a>

                {/* Location Map */}
                <a href="https://maps.google.com/?q=Jaipur,Rajasthan,India" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
                  </svg>
                  <span>Jaipur, Rajasthan, India</span>
                </a>

              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-black/40 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-cyan-300 mb-8">Send a Message</h3>
              <form className="space-y-5">
                <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl bg-black/50 border border-cyan-500/30 text-white outline-none" />
                <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl bg-black/50 border border-cyan-500/30 text-white outline-none" />
                <textarea rows={5} placeholder="Your Message" className="w-full p-4 rounded-xl bg-black/50 border border-cyan-500/30 text-white outline-none" />
                <button type="submit" className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:scale-105 transition">
                  🚀 Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}