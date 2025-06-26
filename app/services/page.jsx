"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home,
  FileText,
  Users,
  Briefcase,
  GraduationCap,
  Car,
  Heart,
  Phone,
  MapPin,
  CreditCard,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import image1 from "@/public/kenya1.jpg";
import image2 from "@/public/paper.jpg";
import image3 from "@/public/employment.jpg";
import image4 from "@/public/community.jpg";
import edu from "@/public/edu.jpg";
import health from "@/public/health.jpg";
import trans from "@/public/trans.jpg";
import digi from "@/public/digi.jpg";


import CTA from "@/components/cta";

export default function ServicesPage() {
  const services = [
    {
      image: image1,
      title: "Housing & Home Support",
      description:
        "Settle in with confidence—from finding the perfect home to building a trusted household team. We make your move smooth, safe, and stress-free.",
      features: [
        "Curated property listings that match your lifestyle",
        "Trusted neighborhood recommendations",
        "Lease negotiation & move-in coordination",
        "Home setup services (utilities, furnishings, etc.)",
        "Vetted referrals for nannies, housekeepers, and drivers",
      ],
    },
    {
      image: image2,
      title: "Documentation & Legal",
      description:
        "Avoid the paperwork headache. We guide you through Kenya’s legal and immigration processes—so you get what you need, faster and with less stress.",
      features: [
        "Work and residence permit support",
        "Visa application guidance",
        "Preparation and review of legal documents",
        "Liaison with government offices and agencies",
      ],
    },
    {
      image: image3,
      title: "Employment Support",
      description:
        "Whether you're job hunting or building a new career path, we help you connect to the right opportunities and grow your professional network in Kenya.",
      features: [
        "Tailored job placement assistance",
        "Skills and career assessments",
        "Professional networking and industry introductions",
        "Personalized career coaching and counseling",
      ],
    },
    {
      image: edu,
      title: "Education Services",
      description:
        "From preschool to professional development, we help you and your family access the right educational opportunities in Kenya—aligned with your goals and values.",
      features: [
        "Expert guidance on school selection (local & international)",
        "Enrollment and admissions support",
        "Educational consulting for tailored learning paths",
        "Access to skills development and lifelong learning programs",
      ],
    },
    {
      image: health,
      title: "Healthcare Navigation",
      description:
        "Your health comes first. We connect you to trusted medical providers and guide you through Kenya’s healthcare system—so you and your family get the care you need, when you need it.",
      features: [
        "Personalized hospital and clinic recommendations",
        "Health insurance selection and enrollment support",
        "Appointment scheduling with vetted providers",
        "24/7 emergency response coordination",
      ],
    },
    {
      image: trans,
      title: "Transportation",
      description:
        "Reliable, secure transport for every part of your journey. Whether it's airport transfers or daily school runs, we make getting around Kenya seamless and stress-free.",
      features: [
        "Airport pickup and transfer coordination",
        "Car rental assistance with trusted partners",
        "Vetted personal and corporate driver services",
        "Safe school drop-off and pick-up for children",
        "Customized transport plans for families and professionals",
      ],
    },
    {
      image: digi,
      title: "Digital Services",
      description:
        "Stay connected from day one. We make it easy to access Kenya’s essential digital tools—so you can live, work, and pay like a local without the tech stress.",
      features: [
        "Mobile phone and SIM card setup with local providers",
        "Fast, reliable home and office internet installation",
        "Step-by-step guidance on using M-Pesa, Airtel Money, and other digital payment platforms",
        "Support with setting up key online services like banking, utilities, and government portals",
      ],
    },
    {
      image: image4,
      title: "Community Integration",
      description:
        "Feel at home, faster. We help you plug into the heart of Kenyan life—through real connections, shared experiences, and vibrant community vibes.",
      features: [
        "Curated social events and local hangouts",
        "Cultural orientation that feels like storytelling, not a lecture",
        "Introductions to community groups and interest-based circles",
        "Mentorship programs to help you thrive, not just survive",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              End-to-end support for every stage of your journey—so you can
              live, work, and thrive in Kenya with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-sm hover:shadow-md transition-shadow duration-300 group">
                  <div className="h-40 relative overflow-hidden rounded-t-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      priority
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      <Footer />
    </div>
  );
}
