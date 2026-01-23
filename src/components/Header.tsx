import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'القائمة', href: '#menu' },
    { name: 'قصتنا', href: '#about' },
    { name: 'المعرض', href: '#gallery' },
    { name: 'تواصل', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col items-center group">
            <span className="font-display text-2xl md:text-3xl text-gold tracking-[0.2em] transition-all duration-300 group-hover:animate-shimmer">
              Le Jardin Doré
            </span>
            <span className="text-[10px] text-muted-foreground tracking-[0.4em] uppercase mt-1">
              Fine Dining Experience
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative font-body text-sm tracking-wider text-foreground/80 hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <Button variant="goldOutline" size="lg">
              احجز الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-6 py-6 border-t border-border/30">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-lg text-foreground/80 hover:text-primary transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="gold" size="lg" className="mt-4">
              احجز الآن
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
