"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import image1 from "@/public/Kenya2.jpg";
import image2 from "@/public/paper.jpg";
import image3 from "@/public/employment.jpg";
import image4 from "@/public/community.jpg";

export default function Services() {
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
    <section className="py-20 bg-[#fff8ec]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Services for Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From finding your first home to building lasting community
            connections, we support every aspect of your life in Kenya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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

        <div className="text-center">
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
