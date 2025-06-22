import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import image from "../public/download.jpeg";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-10 ">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                🇰🇪 Welcome to Kenya - Karibu!
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Digital <span className="text-green-600">Concierge</span>{" "}
                for Life in Kenya
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Personalized support for expats, returnees, and newcomers. We
                simplify relocation and settling in through trusted local
                expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-lg px-8"
              >
                <Link href="/contact">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8"
              >
                <Link href="/services">
                  <Play className="w-5 h-5 mr-2" />
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <Image
              src={image}
              alt="Happy family settling in Kenya"
              className="rounded-2xl shadow-2xl w-full h-[300px] md:h-[400px]"
            />
            {/* Decorative circles */}
          </div>
        </div>
      </div>
    </section>
  );
}
