import Header from "@/components/header"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle, Clock, Shield, Users, Globe } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: Globe,
      questions: [
        {
          question: "What is Karibu Plus and how can you help me?",
          answer:
            "Karibu Plus is a comprehensive digital concierge platform designed to support expatriates, Kenyan returnees, and newcomers in navigating life in Kenya. We provide personalized assistance with housing, documentation, employment, education, healthcare, and community integration. Think of us as your trusted local partner who handles the complex processes so you can focus on settling in comfortably.",
        },
        {
          question: "Who can use Karibu Plus services?",
          answer:
            "Our services are designed for expatriates moving to Kenya, Kenyan citizens returning after living abroad, international professionals on assignment, students coming to study, and anyone new to Kenya who needs support with relocation and integration. We cater to individuals, families, and corporate clients.",
        },
        {
          question: "How do I get started with Karibu Plus?",
          answer:
            "Getting started is simple! Contact us through our website, phone, or email to schedule a free consultation. During this call, we'll discuss your specific needs, timeline, and circumstances. Based on this, we'll create a personalized support plan and assign you a dedicated concierge to guide you through the process.",
        },
        {
          question: "Do you offer services in languages other than English?",
          answer:
            "Yes! Our team is multilingual and can provide support in English, Swahili, French, Spanish, and several other languages. We understand that language barriers can make relocation more challenging, so we ensure you can communicate comfortably throughout your journey.",
        },
      ],
    },
    {
      title: "Services & Process",
      icon: Users,
      questions: [
        {
          question: "What services do you provide?",
          answer:
            "We offer comprehensive support including: Housing & Accommodation (property search, lease negotiation), Documentation & Legal (work permits, visas, legal documents), Employment Support (job placement, networking), Education Services (school selection, enrollment), Transportation (airport transfers, car rental), Healthcare Navigation (hospital recommendations, insurance), Financial Services (banking, investments), Community Integration (social events, cultural orientation), and Digital Services (mobile, internet setup).",
        },
        {
          question: "How long does the relocation process typically take?",
          answer:
            "The timeline varies depending on your specific needs and circumstances. Simple services like airport pickup can be arranged within 24 hours, while comprehensive relocation packages typically take 2-8 weeks. Documentation processes (work permits, visas) can take 4-12 weeks depending on your nationality and the type of permit required. We'll provide you with a detailed timeline during your consultation.",
        },
        {
          question: "Can you help with emergency situations?",
          answer:
            "We provide 24/7 emergency support for urgent situations. This includes medical emergencies, legal issues, accommodation problems, or any crisis that requires immediate assistance. Our emergency hotline (+254 700 URGENT) connects you directly to our crisis response team who can provide immediate guidance and coordinate necessary support.",
        },
        {
          question: "Do you work with corporate clients and bulk relocations?",
          answer:
            "Yes, we have extensive experience with corporate relocations and can handle multiple employees simultaneously. We offer customized corporate packages that include policy development, cost management, and dedicated account management. We've successfully supported relocations for Fortune 500 companies, NGOs, and international organizations.",
        },
      ],
    },
    {
      title: "Pricing & Payment",
      icon: Shield,
      questions: [
        {
          question: "How much do your services cost?",
          answer:
            "Our pricing is customized based on your specific needs and the scope of services required. We offer individual service pricing, comprehensive packages, and corporate rates. During your free consultation, we'll provide a detailed quote with transparent pricing and no hidden fees. We believe in fair, competitive pricing that reflects the value and expertise we provide.",
        },
        {
          question: "Do you offer payment plans or corporate billing?",
          answer:
            "Yes, we offer flexible payment options including installment plans for individual clients and corporate billing arrangements for business clients. We accept various payment methods including bank transfers, mobile money (M-Pesa), credit cards, and international wire transfers. Payment terms can be customized based on your situation.",
        },
        {
          question: "Are there any hidden fees or additional charges?",
          answer:
            "No, we believe in complete transparency. All costs are outlined clearly in your service agreement before we begin. The only additional charges would be third-party costs (like government fees for permits) or services you specifically request that weren't in the original scope. We'll always get your approval before incurring any additional expenses.",
        },
        {
          question: "Do you offer refunds if I'm not satisfied?",
          answer:
            "We stand behind our services with a satisfaction guarantee. If you're not satisfied with our service quality, we'll work to make it right. For services not yet rendered, we offer prorated refunds. Our goal is your successful transition to Kenya, and we're committed to ensuring you're completely satisfied with our support.",
        },
      ],
    },
    {
      title: "Documentation & Legal",
      icon: Clock,
      questions: [
        {
          question: "Can you help me get a work permit for Kenya?",
          answer:
            "Yes, we specialize in work permit applications and have extensive experience with Kenya's immigration processes. We'll guide you through the entire process, help you gather required documents, prepare your application, and liaise with immigration authorities. We handle Class A, B, C, and D permits, as well as dependent passes for family members.",
        },
        {
          question: "What documents do I need to bring when relocating to Kenya?",
          answer:
            "Essential documents include: valid passport, visa/work permit, birth certificate, marriage certificate (if applicable), educational certificates, medical records, police clearance certificate, and financial statements. We provide a comprehensive checklist tailored to your specific situation and help ensure all documents are properly apostilled and translated if needed.",
        },
        {
          question: "How do you ensure the security of my personal documents?",
          answer:
            "We take document security very seriously. All documents are handled through secure, encrypted channels. Physical documents are stored in locked, fireproof safes, and digital copies are encrypted and stored on secure servers. Our staff sign confidentiality agreements, and we're fully compliant with data protection regulations.",
        },
        {
          question: "Can you help with legal issues or finding a lawyer?",
          answer:
            "Yes, we have partnerships with reputable law firms and can connect you with qualified lawyers for various legal needs including immigration law, employment law, property law, and family law. We can also provide guidance on legal processes and accompany you to important legal appointments if needed.",
        },
      ],
    },
    {
      title: "Housing & Living",
      icon: MessageCircle,
      questions: [
        {
          question: "How do you help me find suitable accommodation?",
          answer:
            "We start by understanding your preferences, budget, and requirements (location, size, amenities, proximity to work/schools). We then provide curated property options, arrange viewings, conduct due diligence on properties and landlords, assist with lease negotiations, and help with the move-in process. We only work with verified, reputable property owners and agents.",
        },
        {
          question: "What areas of Kenya do you cover for housing?",
          answer:
            "We primarily focus on Nairobi and its suburbs, but we also provide services in Mombasa, Kisumu, Nakuru, and other major towns. For Nairobi, we cover areas like Westlands, Karen, Runda, Kilimani, Lavington, Kileleshwa, and many others. We'll recommend areas based on your work location, lifestyle preferences, and budget.",
        },
        {
          question: "Can you help me understand the cost of living in Kenya?",
          answer:
            "We provide detailed cost of living breakdowns including housing, utilities, food, transportation, healthcare, education, and entertainment. We'll help you create a realistic budget based on your lifestyle and provide tips for managing expenses effectively. We also offer ongoing financial guidance as you settle in.",
        },
        {
          question: "Do you provide temporary accommodation while I search for permanent housing?",
          answer:
            "Yes, we can arrange temporary accommodation including serviced apartments, hotels, or short-term rentals while you search for permanent housing. We have partnerships with various accommodation providers to offer competitive rates for extended stays.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Find answers to common questions about relocating to Kenya and our services
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Successful Relocations</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Trusted Partners</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Languages Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Questions & Answers</h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about making Kenya your home with Karibu Plus
              </p>
            </div>

            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="overflow-hidden">
                  <CardHeader className="bg-gray-50">
                    <div className="flex items-center">
                      <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                        <category.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900">{category.title}</CardTitle>
                        <CardDescription>{category.questions.length} questions in this category</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`} className="border-b">
                          <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50">
                            <span className="font-medium text-gray-900">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Can't find what you're looking for? Our team is here to help with personalized answers to your specific
              situation.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-600 text-sm mb-4">Speak directly with our experts</p>
                  <p className="font-semibold text-green-600">+254 700 123 456</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-600 text-sm mb-4">Get detailed written responses</p>
                  <p className="font-semibold text-blue-600">hello@karibuplus.co.ke</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                  <p className="text-gray-600 text-sm mb-4">Instant support during business hours</p>
                  <p className="font-semibold text-purple-600">Available 9 AM - 6 PM</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support Banner */}
      <section className="py-12 bg-red-50 border-y border-red-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-red-800 mb-4">Need Emergency Support?</h3>
            <p className="text-red-700 mb-6">
              For urgent matters requiring immediate assistance, our emergency hotline is available 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-red-100 px-6 py-3 rounded-lg">
                <p className="text-red-800 font-bold text-xl">Emergency Hotline: +254 700 URGENT</p>
              </div>
              <p className="text-red-600 text-sm">Available 24 hours a day, 7 days a week</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
