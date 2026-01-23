import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-food.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fine dining experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="h-[1px] w-16 bg-primary animate-line-grow" />
          <span className="text-primary text-sm tracking-[0.4em] uppercase font-body">
            تجربة طعام استثنائية
          </span>
          <div className="h-[1px] w-16 bg-primary animate-line-grow" />
        </div>

        {/* Main Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <span className="block text-gradient-gold">Le Jardin</span>
          <span className="block mt-2 italic text-foreground/90">Doré</span>
        </h1>

        {/* Tagline */}
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          حيث يلتقي الفن بالمذاق، تجربة طهي فرنسية راقية في قلب المدينة
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <Button variant="gold" size="xl">
            استكشف القائمة
          </Button>
          <Button variant="goldOutline" size="xl">
            احجز طاولتك
          </Button>
        </div>

        {/* Awards Badge */}
        <div className="mt-16 flex items-center justify-center gap-8 opacity-0 animate-fade-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <div className="flex flex-col items-center">
            <div className="flex gap-1 text-primary">
              {[...Array(3)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-muted-foreground mt-2 tracking-wider">
              Michelin Stars
            </span>
          </div>
          <div className="w-[1px] h-12 bg-border" />
          <div className="flex flex-col items-center">
            <span className="font-display text-3xl text-primary">2024</span>
            <span className="text-xs text-muted-foreground mt-1 tracking-wider">
              Best Fine Dining
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#menu" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs tracking-widest uppercase">اكتشف المزيد</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
