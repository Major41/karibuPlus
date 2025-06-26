import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make Kenya Your Home?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Join hundreds of satisfied clients who've successfully transitioned
            to life in Kenya with our expert guidance. Your journey starts with
            a simple conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8 font-semibold"
            >
              <Link href="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-green-700 hover:bg-white hover:text-green-700 text-lg px-8 font-semibold"
            >
              <Link href="/services">
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-green-400 opacity-90">
            <p className="text-sm mb-4">Trusted by professionals from:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <span>🏢 Fortune 500 Companies</span>
              <span>🏛️ International Organizations</span>
              <span>🎓 Academic Institutions</span>
              <span>🏥 Healthcare Professionals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
