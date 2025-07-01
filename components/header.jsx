"use client";

// import { useState } from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Menu, X, Phone } from "lucide-react"

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   return (
//     <header className="bg-white shadow-sm border-b sticky top-0 z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             <div className="bg-green-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">
//               K+
//             </div>
//             <span className="text-xl font-bold text-gray-900">Karibu Plus</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
//               Home
//             </Link>
//             <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
//               About
//             </Link>
//             <Link href="/services" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
//               Services
//             </Link>
//             <Link href="/faq" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
//               FAQ
//             </Link>
//             <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
//               Contact
//             </Link>
//           </nav>

//           {/* CTA Button */}
{
  /* <div className="hidden md:flex items-center space-x-3">
  <Button
    asChild
    variant="ghost"
    className="text-charcoal-grey hover:text-deep-teal transition-all duration-300"
  >
    <Link href="/login">Sign In</Link>
  </Button>
  <Button
    asChild
    className="bg-gradient-to-r from-deep-teal to-forest-green hover:from-forest-green hover:to-deep-teal transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
  >
    <Link href="/signup">
      <Phone className="w-4 h-4 mr-2" />
      Get Started
    </Link>
  </Button>
</div>; */
}

//           {/* Mobile Menu Button */}
//           <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 border-t">
//             <nav className="flex flex-col space-y-4">
//               <Link
//                 href="/"
//                 className="text-gray-700 hover:text-green-600 font-medium transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/about"
//                 className="text-gray-700 hover:text-green-600 font-medium transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 About
//               </Link>
//               <Link
//                 href="/services"
//                 className="text-gray-700 hover:text-green-600 font-medium transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Services
//               </Link>
//               <Link
//                 href="/faq"
//                 className="text-gray-700 hover:text-green-600 font-medium transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 FAQ
//               </Link>
//               <Link
//                 href="/contact"
//                 className="text-gray-700 hover:text-green-600 font-medium transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Contact
//               </Link>
//               <Button asChild className="bg-green-600 hover:bg-green-700 w-fit">
//                 <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
//                   <Phone className="w-4 h-4 mr-2" />
//                   Get Started
//                 </Link>
//               </Button>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }
// "use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-cool-white shadow-sm border-b border-light-cream sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}

          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-green-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">
              K+
            </div>
            <span className="text-xl font-bold text-gray-900">Karibu Plus</span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-charcoal-grey hover:text-deep-teal font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-deep-teal to-warm-coral transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-charcoal-grey hover:text-deep-teal font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-deep-teal to-warm-coral transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/services"
              className="text-charcoal-grey hover:text-deep-teal font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-deep-teal to-warm-coral transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/faq"
              className="text-charcoal-grey hover:text-deep-teal font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-deep-teal to-warm-coral transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-charcoal-grey hover:text-deep-teal font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-deep-teal to-warm-coral transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          {/* CTA Button */}
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              asChild
              variant="ghost"
              className="text-charcoal-grey hover:text-deep-teal transition-all duration-300"
            >
              <Link href="/login">Sign In</Link>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-deep-teal to-forest-green hover:from-forest-green hover:to-deep-teal transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Link href="/signup">
                <Phone className="w-4 h-4 mr-2" />
                Get Started
              </Link>
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-light-cream transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-charcoal-grey" />
            ) : (
              <Menu className="w-6 h-6 text-charcoal-grey" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-light-cream animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-charcoal-grey hover:text-deep-teal font-medium transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-charcoal-grey hover:text-deep-teal font-medium transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-charcoal-grey hover:text-deep-teal font-medium transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/faq"
                className="text-charcoal-grey hover:text-deep-teal font-medium transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-charcoal-grey hover:text-deep-teal font-medium transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                asChild
                variant="ghost"
                className="text-charcoal-grey hover:text-deep-teal w-fit"
              >
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  Sign In
                </Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-deep-teal to-forest-green hover:from-forest-green hover:to-deep-teal w-fit mt-2"
              >
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Phone className="w-4 h-4 mr-2" />
                  Get Started
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
