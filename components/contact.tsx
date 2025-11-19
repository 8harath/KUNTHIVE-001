"use client";

import { Button } from "./ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:bharath@example.com",
    label: "bharath@example.com"
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/bharathk",
    label: "@bharathk"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/bharathk",
    label: "Bharath K"
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/bharathk",
    label: "@bharathk"
  }
];

export function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 md:py-32 bg-background relative flex items-center">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient font-extralight mb-4">
            Let's <i className="font-light">Connect</i>
          </h2>
          <p className="font-mono text-sm sm:text-base text-foreground/60 max-w-[600px] mx-auto">
            Have a project in mind or just want to chat? I'm always open to discussing new opportunities.
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-background border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12">
            {/* CTA Text */}
            <div className="text-center mb-10">
              <h3 className="font-sentient text-3xl md:text-4xl font-bold mb-4">
                Ready to start a project?
              </h3>
              <p className="font-mono text-sm text-foreground/70 mb-8">
                I'm currently available for freelance work and full-time opportunities.
              </p>

              <Link href="mailto:bharath@example.com">
                <Button size="lg" className="px-12">
                  [Send Me an Email]
                </Button>
              </Link>
            </div>

            {/* Divider */}
            <div className="my-10 border-t-2 border-foreground/20"></div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-wide text-foreground/60 mb-6 text-center">
                Or find me on
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-200"
                    >
                      <Icon size={24} strokeWidth={2} />
                      <div className="flex flex-col">
                        <span className="font-mono text-xs uppercase tracking-wide opacity-60 group-hover:opacity-100">
                          {social.name}
                        </span>
                        <span className="font-mono text-sm">
                          {social.label}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 font-mono text-xs text-foreground/40">
          <p>© {new Date().getFullYear()} Bharath K. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
