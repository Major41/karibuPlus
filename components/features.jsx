"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import heroImage from "@/public/kenya1.jpg";

export default function FeaturesAccordion() {
  const points = [
    {
      title:
        "We're more than a service—we’re your trusted companion in a new land.",
      content:
        "Others offer lists. We offer solutions. Instead of leaving you to figure it out, we walk with you—step by step.",
    },
    {
      title: "We personalize what others generalize.",
      content:
        "Your needs are unique, and so is our approach. No one-size-fits-all support here.",
    },
    {
      title: "We care—deeply.",
      content:
        "We don’t just link you to services. We vet, guide, and ensure your peace of mind every step of the way.",
    },
    {
      title: "We deliver impact, not just convenience.",
      content:
        "Your journey empowers local talent, formalizes work, and builds stronger communities through every service you use.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Karibu Plus <br />{" "}
            <span className="text-green-600">and Not Just Anyone Else?</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Because we’re more than a service—we’re your trusted companion in a
            new land.
          </p>
        </div>
        <div className="flex md:flex-row-reverse gap-10 flex-col ">
          <div className="mx-auto space-y-4  w-full">
            <Accordion type="single" collapsible className="mb-3">
              {points.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg bg-white shadow-sm transition duration-300 hover:shadow-md"
                >
                  <AccordionTrigger className="px-4 py-3 text-left text-base md:text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-gray-600 leading-relaxed">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className=" w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <Image
              src={heroImage}
              alt="Welcome to Kenya"
              className="object-cover w-full h-[300px] md:h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
