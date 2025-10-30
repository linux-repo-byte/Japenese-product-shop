import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ChevronRight, Fish, Leaf, Award, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

const Landing = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const products = [
    {
      id: 1,
      name: 'Premium Japanese Platter',
      // category: 'Fresh Seafood',
      price: 'NPR 3,500',
      image: 'https://images.unsplash.com/photo-1754211152988-c0622613211e',
      badge: 'Chef Select',
    },
    {
      id: 2,
      name: 'Authentic Plathig',
      // category: 'Sushi',
      price: 'NPR 2,800',
      image: 'https://images.unsplash.com/photo-1635452065566-9c89471bb86c',
      badge: 'Popular',
    },
    {
      id: 3,
      name: 'Authentic Tams & Knives',
      // category: 'Premium Fish',
      price: 'NPR 4,200',
      image: 'https://images.pexels.com/photos/1683545/pexels-photo-1683545.jpeg',
      badge: 'Premium',
    },
    // {
    //   id: 4,
    //   name: 'Sashimi Combination',
    //   category: 'Mixed Selection',
    //   price: 'NPR 3,200',
    //   image: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745',
    //   badge: 'New',
    // },
    // {
    //   id: 5,
    //   name: 'Colorful Sashimi Set',
    //   category: 'Variety Pack',
    //   price: 'NPR 3,800',
    //   image: 'https://images.pexels.com/photos/2871756/pexels-photo-2871756.jpeg',
    //   badge: 'Bestseller',
    // },
    // {
    //   id: 6,
    //   name: 'Fresh Sashimi Plate',
    //   category: 'Daily Special',
    //   price: 'NPR 2,900',
    //   image: 'https://images.unsplash.com/photo-1712183718506-41a054650697',
    //   badge: 'Today\'s Special',
    // },
  ];

  const features = [
    {
      icon: <Fish className="w-8 h-8" />,
      title: 'Fresh Daily',
      description: 'Sourced directly from Japanese markets, ensuring peak freshness.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'Only the finest grade seafood and authentic Japanese ingredients.',
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Sustainable',
      description: 'Ethically sourced with respect for the ocean and tradition.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/landing-bg.jpg)`,
              backgroundPosition: 'center',
            }}
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
        </div>

        {/* Hero Content */}
        <div className={`container mx-auto px-4 z-10 text-center transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* <Badge className="mb-6 bg-primary/90 text-white hover:bg-primary px-6 py-2 text-sm">
            Authentic Japanese Seafood
          </Badge> */}
          
          <h1 className="font-hakio text-5xl sm:text-6xl lg:text-7xl mb-6 text-white text-brush">
            Taste the Ocean,
            <br />
            <span className="text-primary-light">Savor Japan</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Experience the authentic flavors of Japanese seafood and premium ingredients,
            delivered fresh to your door.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-brush bg-primary hover:bg-primary-dark text-white tracking-wide"
            >
              Shop Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="btn-brush bg-white/10 border-white/30 text-white hover:bg-white/20 tracking-wide backdrop-blur-sm w-full sm:w-auto"
              >
                Our Story
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover-lift brush-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-hakio text-2xl mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-accent">
              Featured Collection
            </Badge>
            <h2 className="font-hakio text-4xl sm:text-5xl mb-4 text-foreground">
What we Offers ?            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Handpicked seafood and ingredients from the finest Japanese markets
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="group overflow-hidden hover-lift border-border shadow-ink hover:shadow-ink-strong brush-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Badge className="absolute top-3 right-3 bg-primary text-white">
                    {product.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                    {product.category}
                  </p>
                  <h3 className="font-hakio text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg text-primary font-semibold">
                      {product.price}
                    </span>
                    <Button
                      size="sm"
                      className="btn-brush bg-accent hover:bg-accent/90 text-white"
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute inset-0 bg-cover bg-center`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/landing-bg.jpg)` }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-hakio text-4xl sm:text-5xl mb-6 text-white">
            Experience Authentic Japanese Flavors
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From sushi-grade fish to traditional seasonings, discover the ingredients
            that make Japanese cuisine exceptional.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="btn-brush bg-primary hover:bg-primary-dark text-white tracking-wide"
            >
              Get in Touch
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;