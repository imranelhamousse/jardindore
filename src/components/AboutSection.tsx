import { useEffect, useRef, useState } from 'react';
import interiorImage from '@/assets/restaurant-interior.jpg';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={interiorImage}
                  alt="Restaurant Interior"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
              </div>

              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-primary" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-primary" />

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-background border border-primary/30 p-6 rounded-sm shadow-[0_20px_60px_hsl(0_0%_0%/0.5)]">
                <span className="block font-display text-5xl text-primary">٢٥+</span>
                <span className="text-sm text-muted-foreground tracking-wider">عاماً من التميز</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <span className="text-primary text-sm tracking-[0.4em] uppercase font-body">
              حكايتنا
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
              فن الطهي <span className="text-gradient-gold italic">الفرنسي</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                منذ افتتاحنا في عام ١٩٩٩، أصبح <span className="text-primary">Le Jardin Doré</span> رمزاً 
                للرقي والتميز في عالم المطاعم الفاخرة. نقدم تجربة طعام فريدة تجمع بين أصالة 
                المطبخ الفرنسي الكلاسيكي ولمسات معاصرة مبتكرة.
              </p>
              <p>
                يقود مطبخنا الشيف التنفيذي <span className="text-foreground">جان-بيير مارتان</span>، 
                الحائز على ثلاث نجوم ميشلان، والذي يبدع أطباقاً تروي قصصاً من النكهات 
                المتناغمة والمكونات الطازجة المختارة بعناية من أفضل المزارع حول العالم.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 pt-6 border-t border-border/50">
              <p className="font-display text-2xl text-primary italic mb-2">
                "الطهي هو فن يُصنع بالحب"
              </p>
              <p className="text-sm text-muted-foreground">— جان-بيير مارتان، الشيف التنفيذي</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10">
              {[
                { number: '٣', label: 'نجوم ميشلان' },
                { number: '٤.٩', label: 'تقييم الضيوف' },
                { number: '٥٠+', label: 'جائزة دولية' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <span className="block font-display text-3xl text-primary">{stat.number}</span>
                  <span className="text-xs text-muted-foreground tracking-wider uppercase mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
