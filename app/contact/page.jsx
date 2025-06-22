import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Ready to start your journey? We're here to help every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours to discuss how we can support your
                transition to Kenya.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select a service</option>
                    <option value="relocation">Complete Relocation Package</option>
                    <option value="housing">Housing & Accommodation</option>
                    <option value="documentation">Documentation & Legal</option>
                    <option value="employment">Employment Support</option>
                    <option value="education">Education Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your specific needs and how we can help you..."
                  />
                </div>

                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Information</h2>

              <div className="space-y-6 mb-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Phone</CardTitle>
                        <CardDescription>Call us for immediate assistance</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-900 font-semibold">+254 700 123 456</p>
                    <p className="text-gray-600 text-sm">Available 24/7 for emergencies</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Email</CardTitle>
                        <CardDescription>Send us a detailed message</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-900 font-semibold">hello@karibuplus.co.ke</p>
                    <p className="text-gray-600 text-sm">We respond within 24 hours</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Office</CardTitle>
                        <CardDescription>Visit us in person</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-900 font-semibold">Nairobi, Kenya</p>
                    <p className="text-gray-600 text-sm">Westlands Business District</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                        <Clock className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Business Hours</CardTitle>
                        <CardDescription>When we're available</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-900 font-semibold">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-sm">Saturday: 9:00 AM - 2:00 PM</p>
                  </CardContent>
                </Card>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Support</h3>
                <p className="text-red-700 text-sm mb-3">
                  For urgent matters requiring immediate assistance, call our emergency hotline:
                </p>
                <p className="text-red-800 font-bold text-lg">+254 700 URGENT (874368)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
