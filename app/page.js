"use client";
import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, X, ArrowRight, Zap } from "lucide-react";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Social Media Automation SaaS",
      icon: "🚀",
      description: "AI-powered platform automating social media posting across 50+ platforms.",
      fullDescription: "A comprehensive SaaS platform that revolutionizes social media management. Automate post scheduling, generate AI-powered captions tailored to each platform, create stunning images with AI, manage multiple accounts, and track performance metrics all from one dashboard.",
      stats: ["50+ Platforms", "100+ Users", "<500ms Latency"],
      features: [
        "Claude AI caption generation with 3 variations",
        "Stability AI image generation (12+ styles)",
        "CSV bulk upload for batch scheduling",
        "Multi-platform posting",
        "Schedule posts weeks ahead",
        "Real-time analytics",
        "Multi-account management (3-10)",
        "14-day free trial"
      ],
      tech: ["Next.js", "React 19", "Claude Sonnet 4", "Stability AI", "Supabase", "OAuth", "Railway"],
      link: "https://capable-motivation-production-7a75.up.railway.app/",
      github: "https://github.com/ajay-automates",
      color: "from-cyan-400 via-blue-500 to-purple-600",
      bgGradient: "from-cyan-500/20 to-blue-600/20"
    },
    {
      id: 2,
      title: "Job Application Automator MCP",
      icon: "📋",
      description: "Autonomous job application system with 92% form parsing accuracy.",
      fullDescription: "Revolutionary MCP server that autonomously applies to jobs by intelligently extracting form fields, filling applications with precision, and generating personalized cover letters. Leverages Claude AI for intelligent decision-making.",
      stats: ["92% Accuracy", "80% Time Savings", "50+ Apps/Day"],
      features: [
        "Form field detection & extraction",
        "Intelligent application filling",
        "AI-generated personalized letters",
        "Job description parsing",
        "Qualification matching",
        "TF-IDF relevance scoring",
        "Batch processing",
        "Gmail integration"
      ],
      tech: ["Python", "Claude AI", "Selenium", "FastAPI", "TF-IDF"],
      link: "https://github.com/ajay-automates/job-application-automator-mcp",
      github: "https://github.com/ajay-automates/job-application-automator-mcp",
      color: "from-emerald-400 via-teal-500 to-cyan-600",
      bgGradient: "from-emerald-500/20 to-teal-600/20"
    },
    {
      id: 3,
      title: "Omi Voice AI Agent",
      icon: "🎤",
      description: "Real-time voice AI with sub-500ms latency and emotional awareness.",
      fullDescription: "Cutting-edge voice AI agent powered by Whisper, ElevenLabs, and GPT-4. Runs on Omi wearable device with sub-500ms latency. Features emotional awareness and context-aware responses for seamless voice interactions.",
      stats: ["<500ms Latency", "Voice-Powered", "99.5% Uptime"],
      features: [
        "Real-time speech recognition (Whisper)",
        "Sub-500ms response latency",
        "Natural voice synthesis (ElevenLabs)",
        "GPT-4 powered intelligence",
        "Emotional awareness detection",
        "Wearable device integration",
        "50+ concurrent sessions",
        "WebSocket real-time streaming"
      ],
      tech: ["Python", "Whisper", "ElevenLabs", "GPT-4", "Azure", "WebSockets"],
      link: "https://github.com/ajay-automates/omi-job-assistant",
      github: "https://github.com/ajay-automates/omi-job-assistant",
      color: "from-pink-400 via-rose-500 to-red-600",
      bgGradient: "from-pink-500/20 to-rose-600/20"
    },
    {
      id: 4,
      title: "Music Event Memory Tracker",
      icon: "🎵",
      description: "AI-powered memory capture using Omi DevKit 2 wearable device.",
      fullDescription: "Innovative AI application leveraging the Omi DevKit 2 wearable to capture and process real-time event memories from music events. Automatically correlates experiences and maintains contextual awareness.",
      stats: ["Real-Time", "Wearable AI", "Smart Tracking"],
      features: [
        "Real-time audio & context capture",
        "Omi DevKit 2 integration",
        "Event correlation algorithms",
        "Automatic memory extraction",
        "Context-aware processing",
        "Music event specific insights",
        "Smart data aggregation",
        "Privacy-first architecture"
      ],
      tech: ["Omi DevKit", "LLM", "Event APIs", "Real-time Data", "Python"],
      link: "https://github.com/ajay-automates",
      github: "https://github.com/ajay-automates",
      color: "from-violet-400 via-purple-500 to-indigo-600",
      bgGradient: "from-violet-500/20 to-purple-600/20"
    }
  ];

  const skills = [
    { name: "AI/LLMs", icon: "🤖", color: "from-blue-500 to-cyan-400" },
    { name: "Voice AI", icon: "🎤", color: "from-pink-500 to-rose-400" },
    { name: "Python", icon: "🐍", color: "from-yellow-500 to-orange-400" },
    { name: "React/Next.js", icon: "⚛️", color: "from-cyan-500 to-blue-400" },
    { name: "FastAPI", icon: "⚡", color: "from-green-500 to-emerald-400" },
    { name: "Automation", icon: "🔧", color: "from-purple-500 to-pink-400" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{animationDelay: "2s"}}></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-gradient-to-br from-pink-500 to-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{animationDelay: "4s"}}></div>
      </div>

      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Ajay.</div>
          <div className="hidden md:flex gap-8">
            {["Work", "Skills", "GitHub", "Contact"].map((item) => (
              <a key={item} href="#" className="text-lg font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-pink-400 hover:bg-clip-text transition-all duration-300">{item}</a>
            ))}
          </div>
          <a href="https://github.com/ajay-automates" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold hover:shadow-lg transition-all">
            <Github size={18} /> GitHub
          </a>
        </div>
      </nav>

      <div className="relative z-10 pt-20">
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl w-full text-center">
            <div className="mb-8 inline-block animate-bounce">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 rounded-full flex items-center justify-center text-4xl font-black shadow-2xl">A</div>
            </div>
            <h1 className="text-7xl md:text-9xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">Build</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">Extraordinary</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">AI Engineer & Founder crafting intelligent automation & scalable SaaS platforms.</p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="#projects" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2">
                View My Work <ArrowRight size={24} />
              </a>
              <a href="https://github.com/ajay-automates" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-purple-500 rounded-full font-bold text-xl hover:bg-purple-500/20 transition-all hover:scale-105">GitHub Profile</a>
            </div>
            <div className="flex justify-center gap-8 text-center">
              <div><div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">4+</div><div className="text-gray-400 text-lg">Years</div></div>
              <div><div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">50+</div><div className="text-gray-400 text-lg">Integrations</div></div>
              <div><div className="text-4xl font-black bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">100+</div><div className="text-gray-400 text-lg">Users</div></div>
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-12">
          <div className="max-w-7xl w-full">
            <div className="text-center mb-12">
              <h2 className="text-6xl md:text-7xl font-black mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Featured Projects</span></h2>
              <p className="text-gray-400 text-xl">Click any project to see details</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div key={idx} onClick={() => setSelectedProject(project)} className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient}`}></div>
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-all"></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{project.icon}</div>
                      <h3 className="text-2xl font-black mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">{project.title}</h3>
                      <p className="text-base text-gray-300 leading-relaxed mb-4 line-clamp-3">{project.description}</p>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">{project.stats.map((stat, i) => (<span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-base font-semibold text-gray-300 border border-white/20">{stat}</span>))}</div>
                      <button className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg font-bold text-base transition-all">Click for Details <ArrowRight size={16} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-6 py-12">
          <div className="max-w-6xl w-full">
            <div className="text-center mb-12">
              <h2 className="text-6xl md:text-7xl font-black mb-4"><span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">My Arsenal</span></h2>
              <p className="text-gray-400 text-xl">Technologies I master & build with</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skill, idx) => (
                <div key={idx} className="group relative p-6 rounded-2xl border border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                  <div className="relative">
                    <div className="text-6xl mb-4 group-hover:scale-125 transition-transform">{skill.icon}</div>
                    <h3 className="text-2xl font-black mb-2">{skill.name}</h3>
                    <p className="text-base text-gray-400">Expert level</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-6 py-12">
          <div className="max-w-4xl w-full text-center">
            <h2 className="text-6xl md:text-7xl font-black mb-8"><span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Let's Build Together</span></h2>
            <p className="text-2xl text-gray-300 mb-12">Open to AI Engineer, ML Engineer & Founding Engineer roles.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:nelavetla.a@northeastern.edu" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-2"><Mail size={24} /> Send Email</a>
              <a href="https://linkedin.com/in/ajaykumarreddynelavetla" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-blue-500 rounded-full font-bold text-xl hover:bg-blue-500/20 transition-all hover:scale-105">Connect on LinkedIn</a>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 px-6 text-center text-gray-400 text-lg">© 2025 Ajay Nelavetla. Crafted with AI & passion.</footer>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm bg-black/80">
          <div className="bg-gradient-to-br from-slate-900 to-black rounded-3xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
            <button onClick={() => setSelectedProject(null)} className="sticky top-4 right-4 float-right z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all"><X size={28} /></button>
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <div className="text-7xl mb-6">{selectedProject.icon}</div>
                <h2 className="text-5xl md:text-6xl font-black mb-4"><span className={`bg-gradient-to-r ${selectedProject.color} bg-clip-text text-transparent`}>{selectedProject.title}</span></h2>
                <p className="text-xl text-gray-300 leading-relaxed">{selectedProject.fullDescription}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mb-8">{selectedProject.stats.map((stat, idx) => (<div key={idx} className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center"><div className="text-3xl font-black text-cyan-400 mb-2">{stat}</div></div>))}</div>
              <div className="mb-8">
                <h3 className="text-3xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">{selectedProject.features.map((feature, idx) => (<div key={idx} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all"><Zap size={20} className="text-yellow-400 flex-shrink-0 mt-1" /><span className="text-lg text-gray-300">{feature}</span></div>))}</div>
              </div>
              <div className="mb-8">
                <h3 className="text-3xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">{selectedProject.tech.map((tech, idx) => (<span key={idx} className="px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 rounded-full text-lg font-semibold border border-white/20 hover:border-white/40 transition-all">{tech}</span>))}</div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className={`group px-6 py-3 bg-gradient-to-r ${selectedProject.color} rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2`}><span>View Live</span><ExternalLink size={20} /></a>
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 border-2 border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all hover:scale-105 flex items-center gap-2"><Github size={20} /> GitHub</a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animate-fade-in { animation: fade-in 0.4s ease-out; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </div>
  );
}
