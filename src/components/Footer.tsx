import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <a href="#" className="inline-block">
              <span className="font-display text-3xl text-gold tracking-[0.15em]">
                Le Jardin Doré
              </span>
            </a>
            <p className="text-muted-foreground mt-4 max-w-md leading-relaxed">
              تجربة طعام فرنسية استثنائية تجمع بين الأصالة والابتكار. 
              نقدم لكم أفضل ما في فن الطهي الراقي منذ عام ١٩٩٩.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary hover:shadow-[0_4px_30px_hsl(43_74%_49%/0.2)] transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              {['القائمة', 'قصتنا', 'المعرض', 'الحجوزات', 'الفعاليات الخاصة'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">النشرة البريدية</h4>
            <p className="text-muted-foreground text-sm mb-4">
              اشترك للحصول على آخر الأخبار والعروض الحصرية
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 bg-background border border-border/50 rounded-r-sm px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-l-sm hover:bg-primary/90 transition-colors text-sm"
              >
                اشترك
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Le Jardin Doré. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-primary transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
