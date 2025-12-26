import React, { useState } from "react";
import {
  Menu,
  X,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Computer,
  School,
  TrendingUp,
  Github,
} from "lucide-react";
import { useEffect } from "react";
import "@splidejs/splide/css";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("skills");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    try {
      // SETUP INSTRUCTIONS:
      // 1. Go to https://formspree.io/ and sign up
      // 2. Create a new form with your email: holatonrainier13@gmail.com
      // 3. You'll get a form ID (looks like: xyzabc123)
      // 4. Replace 'YOUR_FORM_ID' below with your actual form ID
      // Example: "https://formspree.io/f/xyzabc123"

      const response = await fetch("https://formspree.io/f/maqwqqok", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.Name,
          email: formData.Email,
          message: formData.Message,
        }),
      });

      if (response.ok) {
        setFormStatus("Message Sent Successfully! I'll get back to you soon.");
        setFormData({ Name: "", Email: "", Message: "" });
        setTimeout(() => setFormStatus(""), 5000);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("Error!", error.message);
      setFormStatus(
        "Failed to send. Please email me directly at rainiermholaton@gmail.com"
      );
      setTimeout(() => setFormStatus(""), 8000);
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const splide = new Splide("#tech-carousel", {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: 5,
      autoScroll: {
        speed: 1,
        pauseOnHover: true,
      },
      arrows: false,
      pagination: false,
      gap: "2rem",
      breakpoints: {
        1024: { perPage: 3 },
        640: { perPage: 2 },
      },
    });

    splide.mount({ AutoScroll });

    return () => splide.destroy();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <header
        id="home"
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/bg-coverphoto.png')" }}
      >
        <div className="px-[5%] py-4">
          <nav className="flex items-center justify-between flex-wrap">
            <div className="">
              <img src="rain-logo.png" alt="Logo"></img>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8">
              {[
                "home",
                "about",
                "projects",
                "technologies",
                "futures",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-lg capitalize hover:text-blue-500 transition-colors relative group"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1.5 w-0 h-0.5 bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="fixed top-0 right-0 w-52 h-screen bg-blue-500 pt-12 z-50 md:hidden transition-all duration-500">
              <button
                className="absolute top-6 left-6 text-2xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X />
              </button>
              <ul className="flex flex-col">
                {[
                  "home",
                  "about",
                  "projects",
                  "technologies",
                  "futures",
                  "contact",
                ].map((item) => (
                  <li key={item} className="mx-6 my-6">
                    <button
                      onClick={() => scrollToSection(item)}
                      className="text-lg capitalize w-full text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Header Text */}
          <div className="md:mt-[20%] max-md:mt-[20%] max-md:mr-[50%] text-center md:text-left md:ml-[10%]">
            <p className="text-2xl md:text-3xl">Computer Science Student</p>
            <h1 className="text-4xl md:text-6xl font-bold mt-5">
              Hi, I'm <span className="text-blue-500">Rainier</span>
              <br />
              Moya Holaton
            </h1>
          </div>
        </div>
      </header>
      {/* About Section */}
      <section id="about" className="py-20 text-gray-400 mt-20">
        <div className="px-[10%]">
          <div className="flex flex-wrap justify-between gap-8">
            <div className="w-full md:w-[35%] place-self-center-safe bg-transparent">
              <img
                src="pfp.jpg"
                alt="Profile"
                className="w-full rounded-2xl"
              />
            </div>

            <div className="w-full md:w-[60%]">
              <h2 className="text-5xl md:text-6xl font-semibold text-white mb-4">
                About me
              </h2>
              <p className="text-lg md:text-xl mt-4">
                Aspiring Cloud Engineer with practical experience in developing
                web applications within Agile/SCRUM environments. Equipped with
                foundational skills in Linux Administration, Git workflows, and
                cloud services such as AWS and Azure. Driven to learn
                automation, monitoring, and cloud reliability practices to
                support highly available systems.
              </p>

              {/* Tab Links */}
              <div className="flex gap-12 my-8 flex-wrap">
                {["skills", "experience", "education", "certificates"].map(
                  (tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-lg font-medium capitalize cursor-pointer relative pb-2 ${
                        activeTab === tab ? "text-white" : ""
                      }`}
                    >
                      {tab}
                      <span
                        className={`absolute left-0 -bottom-2 h-0.5 bg-blue-500 transition-all duration-500 ${
                          activeTab === tab ? "w-1/2" : "w-0"
                        }`}
                      ></span>
                    </button>
                  )
                )}
              </div>

              {/* Tab Contents */}
              {activeTab === "skills" && (
                <ul className="space-y-6">
                  {[
                    "Intrapersonal",
                    "Creative Thinking",
                    "Oral and Communication",
                    "Multitasking",
                    "Adaptability and Learning Agility",
                  ].map((skill) => (
                    <li key={skill} className="text-blue-500 text-xl">
                      {skill}
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "experience" && (
                <ul className="space-y-6">
                  <li>
                    <span className="text-blue-500 text-xl">Tech Officer</span>
                    <br />
                    ALPHA: Alliance of Leading Programmers through Heuristic
                    Adaptation
                  </li>
                  <li>
                    <span className="text-blue-500 text-xl">
                      Event Facilitator and Chairman of Games
                    </span>
                    <br />
                    ALPHA: Alliance of Leading Programmers through Heuristic
                    Adaptation
                  </li>
                </ul>
              )}

              {activeTab === "education" && (
                <ul className="space-y-6">
                  <li>
                    <span className="text-blue-500 text-xl">2022-Present</span>
                    <br />
                    Bachelor of Science in Computer Science
                    <br />
                    STI Ortigas-Cainta
                  </li>
                  <li>
                    <span className="text-blue-500 text-xl">2020-2022</span>
                    <br />
                    Science, Technology, Engineering and Mathematics
                    <br />
                    Our Lady of Fatima University
                  </li>
                </ul>
              )}

              {activeTab === "certificates" && (
                <ul className="space-y-6">
                  <li>
                    <span className="text-blue-500 text-xl">08/12/2024</span>
                    <br />
                    AWS Certified Cloud Practitioner
                    <br />
                    Provided by Oracle Academy, covering essential Java syntax
                    and programming foundations.
                  </li>
                  <li>
                    <span className="text-blue-500 text-xl">06/24/2023</span>
                    <br />
                    Java Fundamentals - Oracle Academy
                    <br />
                    Offered by Amazon Web Services, focusing on core cloud
                    fundamentals and essential AWS services.
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Projects Section */}
      <section id="projects" className="py-12 mt-20">
        <div className="px-[10%]">
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-12">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                image: "projects/stronglabs.png",
                title: "Thesis Group Project: STRONGLABS",
                description:
                  "A web-based learning platform designed to improve the career readiness of Metrobank STRONG scholars by providing personalized learning paths, curated resources, and engagement features.",
                tech: [
                  { name: "Next.js", color: "bg-black text-white" },
                  { name: "Node.js", color: "bg-[#339933] text-white" },
                  { name: "React", color: "bg-[#61DAFB] text-black" },
                  { name: "MongoDB", color: "bg-[#47A248] text-white" },
                  { name: "Azure Entra", color: "bg-[#0078D4] text-white" },
                ],
                link: "https://stronglabs.app/",
              },
              {
                image: "projects/aninosadalakit.png",
                title: "Anino sa Dalakit: Folklore-Based Horror Game",
                description:
                  "A first-person 3D survival horror game inspired by Filipino mythology, designed with objective-based progression, immersive storytelling, and chase-based enemy mechanics.",
                tech: [
                  { name: "Unity Engine", color: "bg-black text-white" },
                  { name: "C#", color: "bg-[#239120] text-white" },
                  { name: "Blender", color: "bg-[#F5792A] text-white" },
                ],
                link: "#",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&q=80",
                title:
                  "Infrastructure as Code: Multi-Tier AWS Environment | Terraform",
                description:
                  "Built a reproducible multi-tier AWS environment using Terraform IaC to provision, manage, and tear down cloud resources for a portfolio web application.",
                tech: [
                  {
                    name: "AWS (EC2, S3, RDS, VPC)",
                    color: "bg-[#FF9900] text-black",
                  },
                  { name: "Terraform", color: "bg-[#7B42BC] text-white" },
                ],
                link: "#",
              },
              {
                image: "projects/techlink.png",
                title: "Techlink",
                description:
                  "TechLink. One Tap, Countless Solutions: Bringing Skilled Help Closer than Ever Before.",
                tech: [
                  { name: "Next.js", color: "bg-black text-white" },
                  { name: "Node.js", color: "bg-[#339933] text-white" },
                  { name: "React", color: "bg-[#61DAFB] text-black" },
                  { name: "MongoDB", color: "bg-[#47A248] text-white" },
                ],
                link: "https://techlink-taupe.vercel.app/",
              },
              {
                image: "projects/lambda.png",
                title: "Serverless CI/CD with GitHub Actions & AWS Lambda",
                description:
                  "Engineered a CI/CD pipeline using GitHub Actions that automates the deployment of Node.js services to AWS Lambda.",
                tech: [
                  { name: "AWS Lambda", color: "bg-[#FF9900] text-black" },
                  { name: "GitHub Actions", color: "bg-[#2088FF] text-white" },
                  { name: "Node.js", color: "bg-[#339933] text-white" },
                  { name: "IAM OIDC", color: "bg-[#FF9900] text-black" },
                  { name: "Git", color: "bg-[#F05032] text-white" },
                ],
                link: "https://github.com/rnrhltn/Cloud",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&q=80",
                title: "Full-Stack Containerized Application Infrastructure",
                description:
                  "Designed and deployed a production-style full-stack application locally using Infrastructure as Code principles, fully automated with Terraform and containerized using Docker",
                tech: [
                  { name: "Terraform", color: "bg-[#7B42BC] text-white" },
                  { name: "Docker", color: "bg-[#2496ED] text-white" },
                  { name: "Node.js", color: "bg-[#339933] text-white" },
                  { name: "PostgreSQL", color: "bg-[#336791] text-white" },
                  { name: "Nginx", color: "bg-[#009639] text-white" },
                ],
                link: "#",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="rounded-xl relative overflow-hidden group cursor-pointer bg-[#262626]"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`text-xs ${tech.color} px-3 py-1 rounded-full font-medium`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section id="technologies" className="py-42 mt-20">
        <div className="px-[10%]">
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-12">
            Technologies & Tools
          </h2>

          <div className="relative bg-[#1a1a1a] rounded-2xl p-12 max-w-7xl mx-auto">
            <div className="splide" id="tech-carousel">
              <div className="splide__track">
                <ul className="splide__list">
                  {[
                    { image: "/tech-logos/React.png", name: "React" },
                    { image: "/tech-logos/Next.js.png", name: "Next.js" },
                    { image: "/tech-logos/JavaScript.png", name: "JavaScript" },
                    { image: "/tech-logos/Node.js.png", name: "Node.js" },
                    { image: "/tech-logos/Java.png", name: "Java" },
                    { image: "/tech-logos/Python.png", name: "Python" },
                    { image: "/tech-logos/Csharp.png", name: "C#" },
                    { image: "/tech-logos/Unity.png", name: "Unity" },
                    { image: "/tech-logos/MongoDB.png", name: "MongoDB" },
                    { image: "/tech-logos/MSSQL.png", name: "Microsoft SQL" },
                    { image: "/tech-logos/MySQL.png", name: "MySQL" },
                    { image: "/tech-logos/AWS.png", name: "AWS" },
                    { image: "/tech-logos/Azure.png", name: "Azure" },
                    { image: "/tech-logos/Terraform.png", name: "Terraform" },
                  ].map((tech, index) => (
                    <li key={index} className="splide__slide">
                      <div className="flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 mx-auto">
                        <div className="flex items-center justify-center bg-gray-700 rounded-xl w-32 h-32 p-4 transition-colors hover:bg-blue-500">
                          <img
                            src={tech.image}
                            alt={tech.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <p className="text-white text-sm mt-3 font-medium">
                          {tech.name}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Five-Year Vision Section */}
      <section id="futures" className="py-12 mt-20">
        <div className="px-[10%]">
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-12">
            Five-Year Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Computer className="w-12 h-12 mb-6" />,
                title: "Career Advancement",
                description:
                  "In five years, I see myself as a senior Cloud Engineer, designing and maintaining scalable, secure, and cost-efficient cloud infrastructures while contributing to architectural decisions and mentoring junior engineers.",
              },
              {
                icon: <School className="w-12 h-12 mb-6" />,
                title: "Education and Certification",
                description:
                  "I will continue strengthening my cloud expertise by earning advanced certifications and staying current with industry best practices through ongoing learning and hands-on experience.",
              },
              {
                icon: <TrendingUp className="w-12 h-12 mb-6" />,
                title: "Personal Growth",
                description:
                  "I aim to maintain a healthy work-life balance, allowing time for personal interests, relationships, and continuous self-improvement alongside my professional growth.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#262626] p-10 rounded-xl text-xl transition-all duration-500 hover:bg-blue-500 hover:-translate-y-2.5 cursor-pointer"
              >
                {item.icon}
                <h3 className="text-3xl font-medium mb-4">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section (https://formspree.io/forms/maqwqqok/submissions) */}
      <section id="contact" className="mt-36">
        <div className="px-[10%]">
          <div className="flex flex-wrap justify-between gap-8">
            <div className="w-full md:w-[35%]">
              <h2 className="text-5xl md:text-6xl font-semibold text-white mb-8">
                Contact Me
              </h2>
              <p className="mt-8 flex items-center gap-4 text-lg">
                <Mail className="text-blue-500 w-6 h-6" />
                rainiermholaton@gmail.com
              </p>
              <p className="mt-4 flex items-center gap-4 text-lg">
                <Phone className="text-blue-500 w-6 h-6" />
                +63 9611573716
              </p>

              <div className="flex gap-4 mt-8">
                {[
                  {
                    icon: <Facebook />,
                    link: "https://www.facebook.com/rainier.holaton.1",
                  },
                  { icon: <Twitter />, link: "https://twitter.com/rnrhltnnew" },
                  {
                    icon: <Instagram />,
                    link: "https://www.instagram.com/rnrhltn/",
                  },
                  {
                    icon: <Linkedin />,
                    link: "https://www.linkedin.com/in/rainier-holaton-0916522b7",
                  },
                  {
                    icon: <Github />,
                    link: "https://github.com/rnrhltn",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-3xl transition-all duration-500 hover:text-blue-500 hover:-translate-y-1 inline-block"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <a
                href="CurriculumVitae.pdf"
                className="inline-block mt-12 border border-blue-500 px-12 py-3 rounded-md text-white transition-all duration-500 hover:bg-blue-500"
              >
                Download CV
              </a>
            </div>
            <div className="w-full md:w-[60%]">
              <div className="w-full">
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full border-0 outline-none bg-[#262626] p-4 my-4 text-white text-lg rounded-md"
                />
                <input
                  type="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full border-0 outline-none bg-[#262626] p-4 my-4 text-white text-lg rounded-md"
                />
                <textarea
                  name="Message"
                  value={formData.Message}
                  onChange={handleInputChange}
                  rows="6"
                  placeholder="Your Message"
                  required
                  className="w-full border-0 outline-none bg-[#262626] p-4 my-4 text-white text-lg rounded-md resize-none"
                ></textarea>
                <button
                  onClick={handleSubmit}
                  className="px-16 py-3 text-lg mt-5 cursor-pointer rounded-md bg-blue-700 text-white border-0 transition-all duration-500 hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
              {formStatus && (
                <span
                  className={`block mt-4 ${
                    formStatus.includes("Failed")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {formStatus}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="w-full text-center py-6 bg-[#262626] mt-10">
          <p>© Rain 2025 All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}
