import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-green-900 via-green-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-green-500 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">
                K+
              </div>
              <span className="text-xl font-bold">Karibu Plus</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Relocating can be overwhelming—but it doesn’t have to be. Karibu
              Plus is your trusted digital concierge, guiding you through every
              step of your transition to life in Kenya.
            </p>
            <div className="flex space-x-4 mt-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Contact"].map((text, i) => (
                <li key={i}>
                  <Link
                    href={`/${text.toLowerCase().replace(/\s/g, "")}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {[
                "Housing & Accommodation",
                "Documentation & Legal",
                "Employment Support",
                "Community Integration",
              ].map((service, i) => (
                <li key={i}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Info
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-green-400" />
                +254 700 123 456
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-green-400" />
                hello@karibuplus.co.ke
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-green-400 mt-0.5" />
                <span>
                  Westlands Business District
                  <br />
                  Nairobi, Kenya
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Karibu Plus. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (text, i) => (
                <Link
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {text}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
