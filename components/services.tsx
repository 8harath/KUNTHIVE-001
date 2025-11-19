"use client";

import { Code, Palette, Smartphone, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive, performant web applications using modern frameworks like Next.js, React, and TypeScript."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, user-friendly interfaces with a focus on clean aesthetics and intuitive user experiences."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Ensuring seamless experiences across all devices with mobile-first, adaptive design principles."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing load times, reducing bundle sizes, and implementing best practices for lightning-fast websites."
  }
];

export function Services() {
  return (
    <section id="services" className="min-h-screen py-20 md:py-32 bg-background relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient font-extralight mb-4">
            What I <i className="font-light">Offer</i>
          </h2>
          <p className="font-mono text-sm sm:text-base text-foreground/60 max-w-[600px] mx-auto">
            Specialized services to bring your digital ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                {/* Neobrutalist Card */}
                <div className="bg-background border-4 border-foreground shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-300 p-8 h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex p-4 border-4 border-foreground bg-primary">
                      <Icon size={32} className="text-background" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-sentient text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-mono text-sm text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
