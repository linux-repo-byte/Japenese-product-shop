import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Heart, Globe, Users, TrendingUp } from "lucide-react";

const AboutUs = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, []);
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description:
        "Deep love for Japanese culinary traditions and authentic flavors.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Authenticity",
      description:
        "Direct partnerships with Japanese suppliers for genuine products.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description:
        "Building connections through shared appreciation of Japanese cuisine.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Excellence",
      description:
        "Commitment to the highest standards in quality and service.",
    },
  ];

  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      description:
        "Founded with a vision to bring authentic Japanese seafood to Nepal.",
    },
    {
      year: "2020",
      title: "Expansion",
      description:
        "Established direct partnerships with Japanese fish markets.",
    },
    {
      year: "2022",
      title: "Recognition",
      description: "Awarded Best Import Seafood Supplier in Nepal.",
    },
    {
      year: "2025",
      title: "Innovation",
      description: "Launched online platform for nationwide delivery.",
    },
  ];

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
              Bridging Cultures Through
              <span className="text-primary block mt-2">Authentic Flavors</span>
            </h1>
            <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto mb-8 leading-relaxed">
              Japenese Seafood Shop was born from a simple passion: to share the
              exquisite taste and tradition of Japanese seafood with food lovers
              around the world.
            </p>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 brush-reveal">
              <h2 className="font-hakio text-4xl text-foreground">
                A Journey of Taste
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded by Nepali youths with enthusiasm towords Japanese
                culture, we bridge Himalayan and Japanese cultures with premium
                imports like matcha, wasabi, miso and other seafood ingredients
                for chefs and home cooks.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With over 100+ curated products, sustainable sourcing, and
                Nepal-wide delivery, we're your go-to for umami adventures.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-ink-strong hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1754211152988-c0622613211e"
                  alt="Japanese Sashimi"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* <Badge className="mb-4 bg-secondary text-accent">
              Our Values
            </Badge> */}
            <h2 className="font-hakio text-4xl sm:text-5xl mb-4 text-foreground">
              What Drives Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Four core principles guide everything we do at Japenese Seafood
              Shop
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover-lift border-border shadow-ink brush-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-hakio text-2xl mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}

      {/* Stats Section */}
      <section className="py-20 bg-accent text-accent-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/landing-bg.png)`,
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="brush-reveal">
              <div className="font-hakio text-5xl mb-2 text-primary-light">
                5+
              </div>
              <div className="text-white/80">Years of Excellence</div>
            </div>
            <div className="brush-reveal" style={{ animationDelay: "0.1s" }}>
              <div className="font-hakio text-5xl mb-2 text-primary-light">
                1000+
              </div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div className="brush-reveal" style={{ animationDelay: "0.2s" }}>
              <div className="font-hakio text-5xl mb-2 text-primary-light">
                100+
              </div>
              <div className="text-white/80">Products</div>
            </div>
            <div className="brush-reveal" style={{ animationDelay: "0.3s" }}>
              <div className="font-hakio text-5xl mb-2 text-primary-light">
                100%
              </div>
              <div className="text-white/80">Authentic</div>
            </div>
          </div>
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

export default AboutUs;
