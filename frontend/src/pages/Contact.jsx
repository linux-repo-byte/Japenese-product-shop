import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { MapPin, Phone, Clock, Facebook } from "lucide-react";
const Contact = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setVisible(true);
  }, []);
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["Jhamsikhel, Lalitpur", "Pokhara, Nepal"],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+977 984-1625102", "+977 985-1067529"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Sun - Fri: 11AM - 6PM", "Saturday: Closed"],
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      title: "Facebook",
      details: ["Visit our Facebook Page", "for latest updates"],
      link: "https://www.facebook.com/jpgroceriesandseafood/",
    },
  ];
  const mapData = [
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.220428146147!2d85.3050534116155!3d27.679581276099206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cfaaf22393%3A0x16a908a97b0459c7!2sJapanese%20Groceries%20%26%20Seafood%20Jhamsikhel-Lalitpur!5e0!3m2!1sen!2snp!4v1761800103681!5m2!1sen!2snp",
      title: "Lalitpur Store",
      delay: "0.2s",
    },
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.7820854560196!2d83.95664621163185!3d28.21393257579536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595e10ff886b5%3A0x11f792b364667b76!2sJapanese%20Food%20Store%2CPokhara!5e0!3m2!1sen!2snp!4v1761800508365!5m2!1sen!2snp",
      title: "Pokhara Store",
      delay: "0.2s",
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
          className="w-full h-full border-0"
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
    <div className="min-h-fit">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/japanese-background.png')`,
              backgroundPosition: "center 20%",
            }}
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 " />
        </div>
        {/* Hero Content */}
        <div
          className={`container mx-auto px-4 z-10 text-center transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Glass Blur Effect */}
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
            <h1 className="font-hakio text-5xl sm:text-6xl lg:text-7xl mb-6 text-white text-brush">
              Let us Connect
            </h1>
            <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto mb-8 leading-relaxed">
              Have questions about our products or services? We'd love to hear
              from you. Reach out and let's start a conversation.
            </p>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>
      {/* Contact Info Cards */}
      <section>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-16">
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
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm block"
                    >
                      {info.details[0]}
                      <br />
                      {info.details[1]}
                    </a>
                  ) : (
                    info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Map Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
      {/* Custom CSS for Bounce Animations */}
      <style jsx>{`
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: translateY(100px) scale(0.3);
          }
          50% {
            opacity: 1;
            transform: translateY(-20px) scale(1.05);
          }
          70% {
            transform: translateY(10px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-bounce-in {
          animation: bounceIn 1.2s ease-out;
        }
        .animate-bounce-in-delayed {
          animation: bounceIn 1.2s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
};
export default Contact;
