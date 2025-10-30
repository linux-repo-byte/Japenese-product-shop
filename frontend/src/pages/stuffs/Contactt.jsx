import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["Thamel, Kathmandu", "Nepal"],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+977 1234 567890", "+977 9876 543210"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Sun - Fri: 9AM - 7PM", "Saturday: Closed"],
    },
  ];

  const mapData = [
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11634.205256980451!2d85.29825653438859!3d27.703246703390956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1860ae22d385%3A0x7c2444e8284cef52!2sKalimati%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1761640068008",
      title: "Kalimati Store",
      delay: "0.2s",
    },
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.221429036672!2d85.32013931506247!3d27.70994798279469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a63a7e8a5%3A0x7e8c4b7f6b9c8e2!2sThamel%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1761640201234",
      title: "Thamel Store",
      delay: "0.3s",
    },
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.104496773586!2d85.3106972150625!3d27.71234598279327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18f8c4c6c7e3%3A0x2c4b7e9b8a4c8f2!2sBoudha%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1761640304567",
      title: "Boudha Store",
      delay: "0.4s",
    },
  ];

  const MapCard = ({ src, title, delay }) => (
    <Card
      className="border-border shadow-ink-strong overflow-hidden brush-reveal"
      style={{ animationDelay: delay }}
    >
      <div className="flex-1 aspect-[4/3] bg-muted relative">
        <iframe
          src={src}
          className="w-full h-[300px] border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="font-hakio text-xl md:text-2xl mb-2">{title}</h3>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-hakio text-5xl sm:text-6xl mb-6 text-foreground text-brush">
              Let us Connect
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about our products or services? We'd love to hear
              from you. Reach out and let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center hover-lift border-border shadow-ink brush-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-hakio text-xl mb-3 text-foreground">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mapData.map((map, index) => (
              <MapCard
                key={index}
                src={map.src}
                title={map.title}
                delay={map.delay}
              />
            ))}
          </div>

          {/* Why Choose Japanese Seafoods Shop */}
          <Card
            className="border-border shadow-ink brush-reveal mt-8"
            style={{ animationDelay: "0.5s" }}
          >
            <CardContent className="p-6">
              <h3 className="font-hakio text-2xl md:text-3xl mb-4 text-foreground text-center">
                Why Choose Japanese Seafoods Shop?
              </h3>
              <ul className="grid grid-cols-1 gap-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-muted-foreground">
                    Direct imports from Japan ensuring authenticity
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-muted-foreground">
                    Quality guaranteed on all products
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-muted-foreground">
                    Expert advice on seafood selection and preparation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-muted-foreground">
                    Fast and reliable delivery across Nepal
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;