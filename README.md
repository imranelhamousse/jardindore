
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>الرباطة - مطعم مغربي فخم</title>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <meta name="description" content="مطعم مغربي فاخر يقدم أطباق تقليدية مع لمسات معاصرة — تجربة طعام فريدة وسط أجواء فخمة." />
</head>
<body>
  <header class="nav-wrapper">
    <nav class="nav container">
      <div class="brand">
        <img src="https://images.unsplash.com/photo-1604908177522-6b5f3f0f0cdd?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="شعار" class="logo">
        <span class="brand-name">الرباطة</span>
      </div>
      <ul class="nav-links">
        <li><a href="#home">الرئيسية</a></li>
        <li><a href="#about">عن المطعم</a></li>
        <li><a href="#menu">القائمة</a></li>
        <li><a href="#gallery">المعرض</a></li>
        <li><a href="#events">الفعاليات</a></li>
        <li><a href="#reservations">حجز</a></li>
        <li><a href="#contact">تواصل</a></li>
      </ul>
      <button class="btn-reserve" onclick="document.getElementById('reservations').scrollIntoView({behavior:'smooth'})">احجز الآن</button>
      <button class="nav-toggle" aria-label="قائمة">☰</button>
    </nav>
  </header>

  <main id="home">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1541542684-0bd6f6f8f96a?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder');"></div>
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <h1 class="fade-in-up">الرباطة — تجربة الطهي المغربي الفاخر</h1>
        <p class="fade-in-up delay-1">مأكولات تقليدية بلمسات عصرية، أجواء ملكية، وخدمة متقنة.</p>
        <div class="hero-ctas fade-in-up delay-2">
          <button class="btn-primary" onclick="document.getElementById('reservations').scrollIntoView({behavior:'smooth'})">احجز طاولة</button>
          <a class="btn-ghost" href="#menu">اكتشف قائمتنا</a>
        </div>
      </div>
      <a class="scroll-down" href="#about" aria-label="انزل">↓</a>
      <div class="mosaic-decor"></div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="section container reveal">
      <div class="about-grid">
        <div class="about-text">
          <h2>عن المطعم</h2>
          <p>الرباطة هو مطعم مغربي فاخر يجمع بين تراث الطهي المغربي وإبداع الطهاة المعاصرين. نستخدم مكونات محلية مختارة، ونقدم تجربة شاملة تشمل الديكور، الموسيقى، وخدمة راقية.</p>
          <ul class="highlights">
            <li>أطباق من وصفات أسرية أصيلة</li>
            <li>قائمة نبيذ واختيار لائق بالمناسبات</li>
            <li>غرف خاصة للفعاليات والاحتفالات</li>
          </ul>
          <div class="stat-cards">
            <div class="stat">
              <span class="num">15+</span>
              <span class="label">سنوات خبرة</span>
            </div>
            <div class="stat">
              <span class="num">120</span>
              <span class="label">مأكولات في القائمة</span>
            </div>
            <div class="stat">
              <span class="num">250+</span>
              <span class="label">فعالية سنوية</span>
            </div>
          </div>
        </div>
        <div class="about-media">
          <div class="card media-card">
            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="طبق مغربي فاخر">
            <div class="media-caption">طبق تاجين مميز</div>
          </div>
          <div class="card media-card small">
            <img src="https://images.unsplash.com/photo-1604908177416-33b3b19a2dfb?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="تصميم داخلي">
            <div class="media-caption">تصميم داخلي ملكي</div>
          </div>
        </div>
      </div>
    </section>

    <!-- MENU / SPECIALTIES -->
    <section id="menu" class="section container reveal">
      <h2 class="section-title">تشكيلة الأطباق</h2>
      <p class="section-sub">أبرز أطباقنا المميزة التي تجذب الزوار من كل مكان</p>
      <div class="menu-grid">
        <article class="menu-card">
          <img src="https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="طاجين اللحم">
          <div class="card-body">
            <h3>طاجين اللحم الملكي</h3>
            <p>لحم مُطهو بتأنٍ مع توابل مغربية وخضار طازجة.</p>
            <div class="price">120 درهم</div>
          </div>
        </article>

        <article class="menu-card">
          <img src="https://images.unsplash.com/photo-1523987355523-c7b5b0a0b62f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="كسكس">
          <div class="card-body">
            <h3>كسكس باللحم والخضار</h3>
            <p>وصفة تقليدية بعناية الطهاة.</p>
            <div class="price">95 درهم</div>
          </div>
        </article>

        <article class="menu-card highlight">
          <img src="https://images.unsplash.com/photo-1543352634-6f36e8b5a3f6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="حلويات">
          <div class="card-body">
            <h3>حلويات مغربية فاخرة</h3>
            <p>طبق تشكيلة من الحلويات التقليدية.</p>
            <div class="price">45 درهم</div>
          </div>
        </article>
      </div>
      <div class="cta-row">
        <a class="btn-outline" href="#gallery">شاهد المزيد</a>
        <a class="btn-primary" href="#reservations">احجز مائدة خاصة</a>
      </div>
    </section>

    <!-- GALLERY -->
    <section id="gallery" class="section container reveal">
      <h2 class="section-title">معرض الصور</h2>
      <p class="section-sub">لمحات من أجواءنا وأطباقنا</p>
      <div class="gallery-grid">
        <!-- استخدم تعدد صور -->
        <figure class="gallery-item"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt=""></figure>
        <figure class="gallery-item"><img src="https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt=""></figure>
        <figure class="gallery-item"><img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt=""></figure>
        <figure class="gallery-item"><img src="https://images.unsplash.com/photo-1541542684-0bd6f6f8f96a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt=""></figure>
        <figure class="gallery-item"><img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt=""></figure>
        <figure class="gallery-item"><img src="https://images.unsplash.com/photo-1604908177416-33b3b19a2dfb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt=""></figure>
      </div>
    </section>

    <!-- EVENTS -->
    <section id="events" class="section container reveal">
      <h2 class="section-title">الفعاليات وحفلات خاصة</h2>
      <p class="section-sub">نستضيف احتفالات، اجتماعات عمل، وحفلات عائلية بخدمة مميزة</p>
      <div class="events-grid">
        <div class="event-card">
          <h3>ليالي الموسيقى الأندلسية</h3>
          <p>عشاء مع عرض موسيقي تقليدي.</p>
          <time>كل جمعة 8:00 مساءً</time>
        </div>
        <div class="event-card">
          <h3>قائمة ذواقة خاصة</h3>
          <p>قائمة متغيرة لكل موسم بإشراف رئيس الطهاة.</p>
          <time>حسب الطلب</time>
        </div>
        <div class="event-card">
          <h3>احتفالات خاصة وغرف مغلقة</h3>
          <p>غرف مصممة خصيصًا للمناسبات الخاصة.</p>
          <time>اتصل بنا للحجز</time>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="section container reveal">
      <h2 class="section-title">آراء الزوار</h2>
      <div class="testimonials">
        <blockquote class="testimonial">
          "تجربة لا تُنسى — الطعام، الأجواء، والخدمة كلها رائعة." <cite>— ليلى أ.</cite>
        </blockquote>
        <blockquote class="testimonial">
          "أفضل مكان للعشاء الرسمي. أوصي بغرفة الولائم." <cite>— عمر س.</cite>
        </blockquote>
      </div>
    </section>

    <!-- RESERVATIONS -->
    <section id="reservations" class="section container reveal">
      <h2 class="section-title">احجز طاولتك</h2>
      <p class="section-sub">املأ النموذج وسيعاودك فريقنا لتأكيد الحجز</p>
      <form id="reserveForm" class="reserve-form" onsubmit="return submitReservation(event)">
        <div class="form-row">
          <label>الاسم الكامل
            <input type="text" name="name" required placeholder="الاسم">
          </label>
          <label>الهاتف
            <input type="tel" name="phone" required placeholder="05xxxxxxxx">
          </label>
        </div>
        <div class="form-row">
          <label>تاريخ الحجز
            <input type="date" name="date" required>
          </label>
          <label>الوقت
            <input type="time" name="time" required>
          </label>
        </div>
        <div class="form-row">
          <label>عدد الأشخاص
            <input type="number" name="people" min="1" max="50" value="2" required>
          </label>
          <label>ملاحظات (اختياري)
            <input type="text" name="notes" placeholder="مثلاً: قرب النافذة">
          </label>
        </div>
        <div class="form-actions">
          <button class="btn-primary" type="submit">أرسل الحجز</button>
          <button type="reset" class="btn-outline">إعادة</button>
        </div>
        <div id="reserveMsg" class="reserve-msg" aria-live="polite"></div>
      </form>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="section container reveal">
      <h2 class="section-title">تواصل معنا</h2>
      <div class="contact-grid">
        <div class="contact-info card">
          <h3>معلومات الاتصال</h3>
          <p>شارع الأميرة، الدار البيضاء، المغرب</p>
          <p>هاتف: <a href="tel:+212600000000">+212 6 00 00 00 00</a></p>
          <p>البريد: <a href="mailto:info@elrabatia.ma">info@elrabatia.ma</a></p>
          <div class="socials">
            <a href="#" aria-label="انستاغرام">📷</a>
            <a href="#" aria-label="فيسبوك">📘</a>
            <a href="#" aria-label="يوتيوب">▶️</a>
          </div>
        </div>
        <div class="map card">
          <!-- ضع هنا خرائطك إذا رغبت (Google Maps embed أو صورة) -->
          <img src="https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="موقع المطعم">
        </div>
      </div>
    </section>

  </main>

  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <h4>الرباطة</h4>
        <p>تجربة الطهي المغربي الفاخر.</p>
      </div>
      <div>
        <h4>ساعات العمل</h4>
        <p>كل يوم 12:00 - 23:30</p>
      </div>
      <div>
        <h4>اشترك بالنشرة</h4>
        <form onsubmit="event.preventDefault(); alert('شكراً لاشتراكك!')">
          <input type="email" placeholder="البريد الإلكتروني" required>
          <button class="btn-small">اشترك</button>
        </form>
      </div>
    </div>
    <div class="copyright">
      © <span id="year"></span> الرباطة. كل الحقوق محفوظة.
    </div>
  </footer>

  <script src="scripts.js"></script>
</body>
</html>
