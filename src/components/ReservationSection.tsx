import { useState } from 'react';
import { Button } from './ui/button';
import { Calendar, Clock, Users, Phone, Mail } from 'lucide-react';

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.4em] uppercase font-body">
            احجز تجربتك
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4">
            حجز <span className="text-gradient-gold italic">طاولة</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-6">
            لضمان تجربة استثنائية، ننصح بالحجز المسبق. يسعدنا استقبالكم في أجواء من الرقي والفخامة.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="bg-card border border-border/50 rounded-sm p-8 md:p-12 shadow-[0_20px_60px_hsl(0_0%_0%/0.3)]">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground tracking-wider uppercase">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-background border border-border/50 rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="أدخل اسمك"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground tracking-wider uppercase flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-background border border-border/50 rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="+966 5X XXX XXXX"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-muted-foreground tracking-wider uppercase flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-background border border-border/50 rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="example@email.com"
                  required
                />
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground tracking-wider uppercase flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  التاريخ
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-background border border-border/50 rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              {/* Time */}
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground tracking-wider uppercase flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  الوقت
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-background border border-border/50 rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  required
                >
                  <option value="">اختر الوقت</option>
                  <option value="18:00">٦:٠٠ مساءً</option>
                  <option value="19:00">٧:٠٠ مساءً</option>
                  <option value="20:00">٨:٠٠ مساءً</option>
                  <option value="21:00">٩:٠٠ مساءً</option>
                  <option value="22:00">١٠:٠٠ مساءً</option>
                </select>
              </div>

              {/* Guests */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-muted-foreground tracking-wider uppercase flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  عدد الضيوف
                </label>
                <div className="flex gap-3">
                  {['1', '2', '3', '4', '5', '6+'].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setFormData({ ...formData, guests: num })}
                      className={`flex-1 py-3 rounded-sm border transition-all duration-300 ${
                        formData.guests === num
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-background border-border/50 text-foreground hover:border-primary/50'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-muted-foreground tracking-wider uppercase">
                  ملاحظات خاصة
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-background border border-border/50 rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="أي طلبات خاصة أو حساسية من الطعام..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" variant="gold" size="xl" className="w-full mt-8">
              تأكيد الحجز
            </Button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <h4 className="font-display text-xl text-primary mb-2">العنوان</h4>
            <p className="text-muted-foreground text-sm">
              شارع التحلية، حي العليا<br />الرياض، المملكة العربية السعودية
            </p>
          </div>
          <div>
            <h4 className="font-display text-xl text-primary mb-2">ساعات العمل</h4>
            <p className="text-muted-foreground text-sm">
              يومياً من ٦:٠٠ مساءً<br />حتى ١٢:٠٠ منتصف الليل
            </p>
          </div>
          <div>
            <h4 className="font-display text-xl text-primary mb-2">التواصل</h4>
            <p className="text-muted-foreground text-sm">
              +966 11 XXX XXXX<br />
              <a href="mailto:reserve@lejardindore.sa" className="hover:text-primary transition-colors">
                reserve@lejardindore.sa
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
