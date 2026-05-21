import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
<footer className="border-t border-white/10 bg-black text-white">
  <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

    {/* About */}
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Tawsif Islam</h2>

      <p className="text-gray-400 leading-relaxed">
        Passionate About Problem Solving & Building Web Solution.
        Creating modern, responsive and user-friendly web experiences
        using Next.js and modern technologies.
      </p>

      <div>
        <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-400 text-sm">
          Available for Freelance
        </span>
      </div>
    </div>

    {/* Useful Links */}
    <div>
      <h3 className="text-xl font-semibold mb-5">Useful Links</h3>

      <ul className="space-y-3 text-gray-400">
        <li>
          <a href="#home" className="hover:text-cyan-400 transition">
            Home
          </a>
        </li>

        <li>
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
        </li>

        <li>
          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </li>
      </ul>
    </div>

    {/* Contact + Social */}
    <div>
      <h3 className="text-xl font-semibold mb-5">Contact Info</h3>

      <div className="space-y-3 text-gray-400">
        <p>📧 0070tawsif@gmail.com</p>
        <p>📍 Chattogram, Bangladesh</p>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4 mt-6">

        <a
          href="https://github.com/tawsifast"
          target="_blank"
          className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition"
        >
         <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/tawsif-islam"
          target="_blank"
          className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition"
        >
          Fb
        </a>

      </div>
    </div>
  </div>

  {/* Bottom */}
  <div className="border-t border-white/10 py-5 text-center text-gray-500 text-sm">
    © 2026 Tawsif Islam. All rights reserved.
  </div>
</footer>
        </div>
    );
};

export default Footer;