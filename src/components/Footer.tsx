import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/badda-venkataramana-978702254",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "#",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "mailto:baddavenkataramana7@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-navy to-navy-light text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Badda Venkataramana
            </h3>
            <p className="text-sm text-white/70 mt-2">Software Developer | Problem Solver</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-white/60 pt-6 border-t border-white/10 w-full">
            <p>© {currentYear} Badda Venkataramana. All rights reserved.</p>
            <p className="mt-1">Built with React, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
