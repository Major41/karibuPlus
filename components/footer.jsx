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
  const TikTokIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <path d="M9 3v12a3 3 0 1 1-3-3" />
      <path d="M15 3a6 6 0 0 0 6 6" />
      <path d="M15 3v12a6 6 0 0 1-6 6" />
    </svg>
  );

  const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <path d="M12.04 2.003c-5.53 0-10.02 4.49-10.02 10.017 0 1.763.465 3.42 1.348 4.903L2 22l5.22-1.363c1.43.782 3.05 1.195 4.82 1.195h.002c5.53 0 10.02-4.49 10.02-10.017s-4.49-10.017-10.02-10.017zm5.9 14.213c-.248.69-1.45 1.275-2.002 1.36-.518.076-1.165.107-1.875-.116a9.94 9.94 0 0 1-1.607-.666c-2.82-1.507-4.66-4.522-4.798-4.735-.137-.213-1.145-1.526-1.145-2.91 0-1.385.729-2.065.987-2.34.26-.274.568-.343.76-.343h.576c.24 0 .36.017.52.407.197.486.626 1.68.682 1.803.055.122.092.267.018.43-.075.164-.113.27-.224.415-.111.145-.234.324-.33.434-.111.129-.226.27-.097.512.13.24.577.95 1.24 1.536.854.765 1.574 1.004 1.814 1.119.24.115.379.096.52-.058.143-.153.598-.693.758-.932.16-.24.32-.197.541-.119.222.078 1.407.663 1.648.784.24.12.398.18.457.28.059.1.059.583-.189 1.273z" />
    </svg>
  );
  
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
              <Link
                href="https://www.tiktok.com/@karibuplus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <TikTokIcon />
              </Link>

              <Link
                href="https://whatsapp.com/channel/0029Vb6WfWC9WtC50uQtj50J"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <WhatsAppIcon />
              </Link>

              <Link
                href="https://www.instagram.com/karibuplus/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/karibuplus/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
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
