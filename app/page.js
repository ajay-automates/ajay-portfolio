"use client";

import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "Custom GPT Application with RAG",
      description: "Production-grade AI assistant with retrieval-augmented generation for domain-specific knowledge retrieval across 10,000+ documents with 95% accuracy.",
      tech: ["Python", "GPT-4", "LangChain", "Pinecone", "FastAPI", "AWS Lambda"],
      metrics: ["95% accuracy", "<2s response time", "1000+ daily users"],
      icon: "🤖",
      github: "#",
      demo: "#"
    },
    {
      title: "Real-Time AI Voice Agent",
      description: "Conversational voice AI with sub-500ms latency, enabling natural speech interactions with GPT-4 intelligence and emotional awareness.",
      tech: ["Python", "Whisper", "ElevenLabs", "GPT-4", "WebSockets", "Azure"],
      metrics: ["<500ms latency", "50 concurrent sessions", "99.5% uptime"],
      icon: "🎙️",
      github: "#",
      demo: "#"
    },
    {
      title: "ApplyPilot - Job Application Automation",
      description: "Intelligent automation system using Claude AI to autonomously apply to jobs with 92% form parsing accuracy and 80% time reduction.",
      tech: ["Python", "Claude AI", "Selenium", "FastAPI", "TF-IDF", "Gmail API"],
      metrics: ["92% accuracy", "80% time savings", "50+ apps/day"],
      icon: "⚡",
      github: "#",
      demo: "#"
    }
  ];

  const skills = {
    "AI & ML": ["GPT-4", "Claude", "LangChain", "PyTorch", "TensorFlow", "Hugging Face", "RAG", "Fine-tuning"],
    "MLOps": ["AWS SageMaker", "MLflow", "Kubeflow", "Docker", "Kubernetes", "Model Monitoring"],
    "Backend": ["Python", "FastAPI", "Flask", "Node.js", "GraphQL", "WebSockets"],
    "Data": ["Pandas", "NumPy", "Apache Kafka", "PostgreSQL", "Redis", "Pinecone"],
    "Cloud & DevOps": ["AWS", "Azure", "GCP", "Terraform", "CI/CD", "GitHub Actions"]
  };

  const experience = [
    {
      title: "Full Stack Developer",
      company: "FolderWave",
      location: "USA",
      period: "Jan 2023 - Present",
      highlights: [
        "Architected recommendation engine with matrix factorization processing 500K+ daily interactions",
        "Built real-time personalization system with 50+ behavioral signals",
        "Developed predictive analytics for customer segmentation and churn prediction",
        "Engineered data pipeline with Apache Kafka achieving sub-100ms latency"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Ideabytes",
      location: "India",
      period: "Jan 2019 - Dec 2021",
      highlights: [
        "Developed collaborative filtering recommendation system increasing conversions by 15%",
        "Built search algorithms with TF-IDF scoring and personalized ranking",
        "Created automated ETL workflows with feature extraction pipelines",
        "Optimized database queries achieving 30% faster response times"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-lg border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ajay Nelavetla
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`hover:text-cyan-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 hover:bg-slate-700 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI Engineer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4">
              Building Production LLM Applications, Voice AI & Intelligent Automation
            </p>
            <p className="text-lg text-slate-400 mb-8 max-w-3xl mx-auto">
              Transforming ideas into intelligent systems with 4+ years of software engineering experience. 
              Specializing in GPT-4, RAG systems, real-time AI, and scalable ML infrastructure.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                View Projects
              </button>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a href="https://github.com/ajay-nelavetla" className="hover:text-cyan-400 transition-colors">
                <Github size={28} />
              </a>
              <a href="https://linkedin.com/in/ajaykumarreddynelavetla" className="hover:text-cyan-400 transition-colors">
                <Linkedin size={28} />
              </a>
              <a href="mailto:nelavetla.a@northeastern.edu" className="hover:text-cyan-400 transition-colors">
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Production-ready AI systems built from scratch, solving real problems with measurable impact
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-cyan-400">{project.title}</h3>
                <p className="text-slate-300 mb-4 text-sm">{project.description}</p>
                
                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map((metric, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300">
                    <Github size={16} />
                    Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300">
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, techs]) => (
              <div key={category} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-900 text-slate-300 text-sm rounded-lg border border-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>

          <div className="space-y-8">
            {experience.map((job, idx) => (
              <div key={idx} className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400">{job.title}</h3>
                    <p className="text-lg text-slate-300">{job.company} • {job.location}</p>
                  </div>
                  <span className="text-sm text-slate-400">{job.period}</span>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="text-slate-300 flex items-start">
                      <span className="text-cyan-400 mr-2">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let Build Something Amazing
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Open to AI Engineer, ML Engineer, and Founding Engineer opportunities
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="mailto:nelavetla.a@northeastern.edu"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/ajaykumarreddynelavetla"
              className="px-8 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all"
            >
              Connect on LinkedIn
            </a>
          </div>

          <div className="space-y-2 text-slate-400">
            <p>📧 nelavetla.a@northeastern.edu</p>
            <p>📞 (857) 576-1177</p>
            <p>📍 Boston, MA</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>© 2025 Ajay Kumar Reddy Nelavetla. Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}