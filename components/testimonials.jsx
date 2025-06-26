"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Expatriate from UK",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "Karibu Plus made our move to Nairobi seamless. From finding our home to getting the kids enrolled in school, they handled everything with such professionalism and care.",
      rating: 5,
    },
    {
      name: "David Kimani",
      role: "Kenyan Returnee",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "After 15 years abroad, coming back to Kenya felt overwhelming. Karibu Plus helped me navigate the changes and reconnect with my home country. Truly invaluable service.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      role: "International Professional",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "The documentation support was incredible. They guided me through the work permit process and made what seemed impossible, completely manageable. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories, real impact. Hear how we've helped others turn their
            move to Kenya into a confident and comfortable new beginning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full rounded-2xl shadow-sm hover:shadow-md bg-white transition-shadow duration-300 border border-green-100">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
