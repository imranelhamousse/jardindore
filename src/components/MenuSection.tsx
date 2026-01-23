import { useEffect, useRef, useState } from 'react';
import dish1 from '@/assets/dish-1.jpg';
import dish2 from '@/assets/dish-2.jpg';
import dish3 from '@/assets/dish-3.jpg';

const menuItems = [
  {
    id: 1,
    name: 'فيليه لحم واغيو',
    nameEn: 'Wagyu Beef Tenderloin',
    description: 'لحم واغيو الياباني مع صلصة الكمأة السوداء وبيوريه البطاطس بالزبدة',
    price: '٤٨٠',
    image: dish1,
  },
  {
    id: 2,
    name: 'لوبستر مين',
    nameEn: 'Maine Lobster',
    description: 'لوبستر طازج مع صلصة الزبدة الذهبية والأعشاب العطرية',
    price: '٥٢٠',
    image: dish2,
  },
  {
    id: 3,
    name: 'تحفة الشوكولاتة',
    nameEn: 'Chocolate Sphere',
    description: 'كرة شوكولاتة فالرونا مع آيس كريم الفانيليا ورقائق الذهب',
    price: '١٨٠',
    image: dish3,
  },
];

const MenuSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleItems((prev) => [...prev, id]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll('.menu-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" className="py-24 bg-background relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative" ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.4em] uppercase font-body">
            من مطبخنا
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4">
            قائمة <span className="text-gradient-gold italic">الطعام</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-[1px] w-24 bg-border" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="h-[1px] w-24 bg-border" />
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              data-id={item.id}
              className={`menu-item group cursor-pointer transition-all duration-700 ${
                visibleItems.includes(item.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-sm mb-6">
                <div className="aspect-square">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-sm">
                  <span className="text-primary font-display text-xl">{item.price}</span>
                  <span className="text-muted-foreground text-sm mr-1">ر.س</span>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="font-display text-2xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-primary/70 text-sm italic mb-3">{item.nameEn}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Link */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-primary font-body text-sm tracking-wider uppercase hover:gap-5 transition-all duration-300"
          >
            <span className="h-[1px] w-8 bg-primary" />
            اكتشف القائمة الكاملة
            <span className="h-[1px] w-8 bg-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
