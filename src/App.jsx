/*
GuruhApp.jsx — Polished Startup Landing Page
Now includes:
✅ Centered logo
✅ Colorful gradient background
✅ Floating blur circles
✅ Modern font and button design
*/

import React, { useState } from "react";

export default function App() {
  const [route, setRoute] = useState("landing");

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-200 text-gray-900 font-sans overflow-hidden">
      {/* Floating blur circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-52 h-52 bg-pink-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      <Header setRoute={setRoute} />
      <main className="max-w-6xl mx-auto px-6 relative z-10">
        {route === "landing" && <Landing setRoute={setRoute} />}
      </main>
      <Footer />
    </div>
  );
}

function Header({ setRoute }) {
  return (
    <header className="flex justify-between items-center bg-white/60 backdrop-blur-md px-6 py-4 shadow-sm border-b border-purple-200 sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <img
          src="/guruh_logo_transparent_small.png"
          alt="Guruh Logo"
          className="w-10 h-10 object-contain"
        />
        <h1 className="text-2xl font-bold tracking-wide text-purple-800">
          Guruh
        </h1>
      </div>
      <nav className="hidden md:flex gap-5 text-sm font-medium">
        <button onClick={() => setRoute("landing")} className="hover:text-purple-600 transition">
          Home
        </button>
        <button onClick={() => setRoute("discover")} className="hover:text-purple-600 transition">
          Find Mentor
        </button>
        <button onClick={() => setRoute("earn")} className="hover:text-purple-600 transition">
          Earn
        </button>
        <button onClick={() => setRoute("about")} className="hover:text-purple-600 transition">
          About
        </button>
      </nav>
    </header>
  );
}

function Landing({ setRoute }) {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[85vh] relative">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-6 animate-fadeIn mt-10 md:mt-0">
        <img
          src="/guruh_logo_transparent_small.png"
          alt="Guruh Logo"
          className="w-28 h-28 object-contain drop-shadow-lg mx-auto"
        />
        <h2 className="text-5xl font-extrabold text-purple-800 drop-shadow-sm">
          Grow. Guide. Earn.
        </h2>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed">
          Guruh is a mentorship platform built for growth. Connect with industry
          experts, accelerate your learning, and earn while helping others reach
          their goals.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button
            onClick={() => setRoute("discover")}
            className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-500 hover:scale-105 transition-transform"
          >
            Find a Mentor
          </button>
          <button
            onClick={() => setRoute("earn")}
            className="px-8 py-3 border border-purple-600 text-purple-700 font-semibold rounded-full hover:bg-purple-600 hover:text-white shadow-lg hover:scale-105 transition-transform"
          >
            Become a Mentor
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-24 grid md:grid-cols-3 gap-8 text-purple-900">
        <FeatureCard
          title="AI Matching"
          desc="Connects you with mentors perfectly aligned with your career goals."
        />
        <FeatureCard
          title="Verified Mentors"
          desc="Every mentor is validated for experience, reviews, and credibility."
        />
        <FeatureCard
          title="Earn by Guiding"
          desc="Share your expertise, help others grow, and earn meaningful rewards."
        />
      </div>
    </section>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white/80 border border-purple-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-2 text-purple-700">{title}</h3>
      <p className="text-sm text-gray-700">{desc}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-20 text-center py-6 text-sm text-gray-600 bg-white/70 border-t border-purple-200 backdrop-blur-sm relative z-10">
      © {new Date().getFullYear()}{" "}
      <span className="font-semibold text-purple-700">Guruh</span> — Grow. Guide. Earn.
    </footer>
  );
}
