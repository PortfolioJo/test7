// script.js - ملف الجافاسكريبت الرئيسي - الإصدار المعدل والمصحح

// نظام الترجمة المحسّن والمصحح
const translations = {
    ar: {
        // التنقل
        logo: "أسيل",
        navHome: "الرئيسية",
        navProfile: "الملف الشخصي",
        navProjects: "المشاريع",
        navSkills: "المهارات",
        navContact: "اتصل بي",
        language: "EN",
        backToHome: "العودة للرئيسية",
        
        // الصفحة الرئيسية
        heroTitle: "مرحباً، أنا أسيل<br>مصممة جرافيكية إبداعية",
        heroDescription: "أقوم بتحويل الأفكار إلى تصاميم بصرية مذهلة باستخدام أحدث أدوات التصميم وأفضل ممارسات الصناعة. لدي شغف بإنشاء هويات بصرية وتصاميم جرافيكية مع تركيز كبير على التفاصيل والجودة والإبداع.",
        viewProjects: "عرض مشاريعي",
        contactMe: "تواصل معي",
        sectionsTitle: "استكشف عالمي الإبداعي",
        
        // ملخص الأقسام
        summaryProfileTitle: "الملف الشخصي",
        summaryProfileDesc: "تعرف على مسيرتي المهنية وخبراتي في مجال التصميم الجرافيكي والإبداع البصري. اكتشف شغفي وتخصصاتي الفنية.",
        summaryProjectsTitle: "المشاريع",
        summaryProjectsDesc: "تصفح معرض أعمالي المتنوعة في التصميم الجرافيكي، الهويات البصرية، والمواد الإعلانية الإبداعية.",
        summarySkillsTitle: "المهارات",
        summarySkillsDesc: "اكتشف مهاراتي التقنية والإبداعية المتقدمة في مختلف برامج وتقنيات التصميم الحديثة والمتطورة.",
        summaryContactTitle: "اتصل بي",
        summaryContactDesc: "تواصل معي لمناقشة مشروعك القادم أو للحصول على استشارة تصميمية احترافية تناسب احتياجاتك.",
        viewProfile: "عرض الملف",
        viewProjects2: "عرض المشاريع",
        viewSkills: "عرض المهارات",
        contactNow: "تواصل الآن",
        
        // صفحة الملف الشخصي
        profileName: "أسيل",
        profileTitle: "مصممة جرافيكية ومطورة هويات بصرية",
        profileDescription: "أنا مصممة جرافيكية محترفة مع سنوات من الخبرة في إنشاء هويات بصرية متميزة وتصاميم إبداعية مبتكرة. أعمل على تحويل الأفكار المجردة إلى واقع بصري جذاب عبر استخدام أحدث أدوات التصميم والبرمجيات الاحترافية.",
        experienceTitle: "الخبرة المهنية",
        experienceDescription: "عملت على مجموعة متنوعة من المشاريع الإبداعية التي ساهمت في تطوير مهاراتي ومعرفتي في مجال التصميم:",
        experienceItem1: "تصميم هويات بصرية متكاملة للعديد من الشركات المحلية والدولية بمختلف القطاعات",
        experienceItem2: "إنشاء مواد تسويقية وإعلانية مبتكرة للعديد من الحملات الترويجية الناجحة",
        experienceItem3: "تصميم واجهات مستخدم وتجارب بصرية متقدمة لتطبيقات ومواقع إلكترونية",
        experienceItem4: "تطوير أنظمة تصميم متكاملة لتحسين تجربة العلامات التجارية وزيادة فعاليتها",
        
        // صفحة المشاريع
        projectsTitle: "مشاريعي الإبداعية",
        projectsDescription: "إليك مجموعة مختارة من أبرز المشاريع التصميمية التي قمت بتنفيذها مؤخراً، والتي تعكس تنوع مهاراتي وإبداعي في مجالات التصميم المختلفة.",
        project1Title: "هوية بصرية متكاملة",
        project1Description: "تصميم هوية بصرية كاملة تشمل الشعار، نظام الألوان، الخطوط، والمواد الترويجية لشركة ناشئة في مجال التكنولوجيا.",
        project2Title: "مواد تسويقية مطبوعة",
        project2Description: "تصميم مجموعة متكاملة من المواد المطبوعة لحملة تسويقية واسعة النطاق تشمل بروشورات، فلayers، ومواد عرض.",
        project3Title: "واجهة تطبيق جوال",
        project3Description: "تصميم واجهة مستخدم وتجربة مستخدم متكاملة لتطبيق جوال مبتكر في قطاع التكنولوجيا المالية والخدمات المصرفية.",
        project4Title: "تصميم موقع إلكتروني",
        project4Description: "تصميم واجهة موقع إلكتروني متكامل مع التركيز على تجربة المستخدم، الجاذبية البصرية، والاستجابة للأجهزة المختلفة.",
        project5Title: "مواد بصرية للوسائط المتعددة",
        project5Description: "إنشاء محتوى بصري متكامل وفيديوهات رسومية متحركة لحملة إعلانية رقمية واسعة على منصات التواصل الاجتماعي.",
        project6Title: "تصميم كتاب إلكتروني",
        project6Description: "تصميم وتخطيط كتاب إلكتروني تفاعلي مع رسوم توضيحية مخصصة وأسلوب بصري جذاب لدار نشر رائدة.",
        
        // صفحة المهارات
        skillsTitle: "مهاراتي المتقدمة",
        skillsDescription: "مجموعة المهارات التقنية والإبداعية المتطورة التي أتمتع بها في مجال التصميم الجرافيكي والوسائط الرقمية، مع تركيز على الابتكار والتطوير المستمر.",
        designSkills: "مهارات التصميم الأساسية",
        skillAdobe: "Adobe Creative Suite",
        skillUIUX: "تصميم UI/UX",
        skillLogo: "تصميم الشعارات والهويات",
        skillTypography: "التخطيط الطباعي والأنماط",
        technicalSkills: "المهارات التقنية المتقدمة",
        skillFigma: "Figma & Sketch",
        skillMotion: "الرسوم المتحركة والمؤثرات",
        skillPrint: "التصميم للطباعة والإنتاج",
        skillWeb: "تصميم الويب والاستجابة",
        creativeSkills: "المهارات الإبداعية والقيادية",
        skillConcept: "تطوير المفاهيم والإبداع",
        skillBranding: "الهوية البصرية والتسويق",
        skillColor: "نظرية الألوان والتنسيق",
        skillIllustration: "الرسم التوضيحي والفني",
        
        // صفحة الاتصال
        contactTitle: "تواصل معي",
        contactDescription: "أهلاً بك! لا تتردد في التواصل معي لمناقشة مشروعك التصميمي القادم، أو لأي استفسارات أخرى. سأكون سعيدة بمساعدتك وتحويل أفكارك إلى واقع إبداعي مميز.",
        contactAddressTitle: "العنوان",
        contactAddress: "الرياض، المملكة العربية السعودية",
        contactPhoneTitle: "الهاتف",
        contactEmailTitle: "البريد الإلكتروني",
        contactHoursTitle: "ساعات العمل",
        contactHours: "الأحد - الخميس: 9 صباحاً - 6 مساءً",
        formName: "الاسم الكامل *",
        formEmail: "البريد الإلكتروني *",
        formSubject: "الموضوع *",
        formMessage: "الرسالة *",
        formMessagePlaceholder: "أهلاً أسيل، أرغب في مناقشة مشروع تصميمي معك...",
        formSubmit: "إرسال الرسالة",
        
        // التذييل
        footerLogo: "أسيل",
        footerDescription: "مصممة جرافيكية محترفة متخصصة في إنشاء هويات بصرية وتصاميم إبداعية مبتكرة. أسعى دائمًا للتميز والإبداع في كل مشروع.",
        footerQuickLinks: "روابط سريعة",
        footerServices: "خدماتي",
        service1: "تصميم الهويات البصرية",
        service2: "تصميم المواد المطبوعة",
        service3: "تصميم واجهات المستخدم",
        service4: "تصميم مواقع الويب",
        service5: "الرسوم المتحركة والمؤثرات",
        footerNewsletter: "اشترك في النشرة البريدية",
        footerNewsletterDesc: "اشترك لتصلك آخر أعمالي ونصائح تصميمية حصرية.",
        newsletterPlaceholder: "بريدك الإلكتروني",
        footerCopyright: "© أسيل. جميع الحقوق محفوظة.",
        footerPrivacy: "سياسة الخصوصية"
    },
    en: {
        // Navigation
        logo: "Aseel",
        navHome: "Home",
        navProfile: "Profile",
        navProjects: "Projects",
        navSkills: "Skills",
        navContact: "Contact",
        language: "AR",
        backToHome: "Back to Home",
        
        // Home Page
        heroTitle: "Hello, I'm Aseel<br>Creative Graphic Designer",
        heroDescription: "I transform ideas into stunning visual designs using the latest design tools and industry best practices. I'm passionate about creating visual identities and graphic designs with a strong focus on detail, quality, and creativity.",
        viewProjects: "View My Projects",
        contactMe: "Contact Me",
        sectionsTitle: "Explore My Creative World",
        
        // Sections Summary
        summaryProfileTitle: "Profile",
        summaryProfileDesc: "Learn about my professional journey and experience in graphic design and visual creativity. Discover my passion and artistic specializations.",
        summaryProjectsTitle: "Projects",
        summaryProjectsDesc: "Browse my diverse portfolio of works in graphic design, visual identities, and creative advertising materials.",
        summarySkillsTitle: "Skills",
        summarySkillsDesc: "Discover my advanced technical and creative skills in various modern and evolving design programs and techniques.",
        summaryContactTitle: "Contact",
        summaryContactDesc: "Contact me to discuss your upcoming project or to get a professional design consultation tailored to your needs.",
        viewProfile: "View Profile",
        viewProjects2: "View Projects",
        viewSkills: "View Skills",
        contactNow: "Contact Now",
        
        // Profile Page
        profileName: "Aseel",
        profileTitle: "Graphic Designer & Visual Identity Developer",
        profileDescription: "I am a professional graphic designer with years of experience in creating distinctive visual identities and innovative creative designs. I work on transforming abstract ideas into attractive visual reality using the latest design tools and professional software.",
        experienceTitle: "Professional Experience",
        experienceDescription: "I have worked on a variety of creative projects that have contributed to developing my skills and knowledge in design:",
        experienceItem1: "Designing comprehensive visual identities for many local and international companies across various sectors",
        experienceItem2: "Creating innovative marketing and advertising materials for numerous successful promotional campaigns",
        experienceItem3: "Designing advanced user interfaces and visual experiences for applications and websites",
        experienceItem4: "Developing comprehensive design systems to improve brand experiences and increase effectiveness",
        
        // Projects Page
        projectsTitle: "My Creative Projects",
        projectsDescription: "Here is a curated selection of the most prominent design projects I have recently completed, reflecting the diversity of my skills and creativity in various design fields.",
        project1Title: "Complete Visual Identity",
        project1Description: "Design of a complete visual identity including logo, color system, fonts, and promotional materials for a tech startup.",
        project2Title: "Printed Marketing Materials",
        project2Description: "Design of a comprehensive set of printed materials for a large-scale marketing campaign including brochures, flyers, and display materials.",
        project3Title: "Mobile App Interface",
        project3Description: "Design of a complete user interface and user experience for an innovative mobile app in the fintech and banking services sector.",
        project4Title: "Website Design",
        project4Description: "Design of a complete website interface with focus on user experience, visual appeal, and responsiveness across different devices.",
        project5Title: "Multimedia Visual Materials",
        project5Description: "Creating comprehensive visual content and animated motion graphics for a wide digital advertising campaign on social media platforms.",
        project6Title: "E-book Design",
        project6Description: "Design and layout of an interactive e-book with custom illustrations and attractive visual style for a leading publishing house.",
        
        // Skills Page
        skillsTitle: "My Advanced Skills",
        skillsDescription: "A collection of advanced technical and creative skills I possess in the field of graphic design and digital media, with a focus on innovation and continuous development.",
        designSkills: "Core Design Skills",
        skillAdobe: "Adobe Creative Suite",
        skillUIUX: "UI/UX Design",
        skillLogo: "Logo & Identity Design",
        skillTypography: "Typography & Patterns",
        technicalSkills: "Advanced Technical Skills",
        skillFigma: "Figma & Sketch",
        skillMotion: "Motion Graphics & Effects",
        skillPrint: "Print Design & Production",
        skillWeb: "Web Design & Responsiveness",
        creativeSkills: "Creative & Leadership Skills",
        skillConcept: "Concept Development & Creativity",
        skillBranding: "Visual Identity & Marketing",
        skillColor: "Color Theory & Coordination",
        skillIllustration: "Illustration & Artistic Drawing",
        
        // Contact Page
        contactTitle: "Contact Me",
        contactDescription: "Welcome! Feel free to contact me to discuss your upcoming design project or for any other inquiries. I'll be happy to assist you and transform your ideas into a distinctive creative reality.",
        contactAddressTitle: "Address",
        contactAddress: "Riyadh, Saudi Arabia",
        contactPhoneTitle: "Phone",
        contactEmailTitle: "Email",
        contactHoursTitle: "Working Hours",
        contactHours: "Sunday - Thursday: 9 AM - 6 PM",
        formName: "Full Name *",
        formEmail: "Email Address *",
        formSubject: "Subject *",
        formMessage: "Message *",
        formMessagePlaceholder: "Hello Aseel, I would like to discuss a design project with you...",
        formSubmit: "Send Message",
        
        // Footer
        footerLogo: "Aseel",
        footerDescription: "Professional graphic designer specialized in creating visual identities and innovative creative designs. I always strive for excellence and creativity in every project.",
        footerQuickLinks: "Quick Links",
        footerServices: "My Services",
        service1: "Visual Identity Design",
        service2: "Print Material Design",
        service3: "User Interface Design",
        service4: "Website Design",
        service5: "Animation & Effects",
        footerNewsletter: "Subscribe to Newsletter",
        footerNewsletterDesc: "Subscribe to receive my latest works and exclusive design tips.",
        newsletterPlaceholder: "Your Email",
        footerCopyright: "© Aseel. All rights reserved.",
        footerPrivacy: "Privacy Policy"
    }
};

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة تأثير الجزيئات المتحركة
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 1000 } },
                color: { value: "#2A2A2A" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#B8860B",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }
    
    // تهيئة متغيرات التنقل
    let currentLang = 'ar';
    let currentPage = 'home';
    
    // عناصر الصفحات
    const pages = document.querySelectorAll('.page');
    const navLinksElements = document.querySelectorAll('.nav-link');
    const backToHomeFixed = document.getElementById('backToHomeFixed');
    
    // وظيفة تغيير اللغة
    function changeLanguage(lang) {
        currentLang = lang;
        
        // تحديث اتجاه الصفحة
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        
        // تغيير الخط حسب اللغة
        if (lang === 'ar') {
            document.body.style.fontFamily = "'Almarai', serif";
            document.querySelectorAll('.hero h1, .sections-title, .card-title, .profile-info h1, h1').forEach(el => {
                el.style.fontFamily = "'Almarai', serif";
            });
        } else {
            document.body.style.fontFamily = "'Cormorant Garamond', serif";
            document.querySelectorAll('.hero h1, .sections-title, .card-title, .profile-info h1, h1').forEach(el => {
                el.style.fontFamily = "'Cormorant Garamond', serif";
            });
        }
        
        // تحديث جميع النصوص
        updateAllTexts(lang);
        
        // تحديث اتجاه أيقونة زر العودة
        updateBackButtonIcon();
    }
    
    // وظيفة تحديث جميع النصوص
    function updateAllTexts(lang) {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.hasAttribute('placeholder')) {
                        element.setAttribute('placeholder', translations[lang][key]);
                    } else if (element.id === 'message') {
                        // نص افتراضي خاص لحقل الرسالة
                        element.textContent = translations[lang][key];
                    }
                } else if (element.hasAttribute('data-placeholder-key')) {
                    const placeholderKey = element.getAttribute('data-placeholder-key');
                    if (translations[lang][placeholderKey]) {
                        element.setAttribute('placeholder', translations[lang][placeholderKey]);
                    }
                } else if (element.tagName === 'BUTTON' && element.type === 'submit') {
                    element.innerHTML = `<i class="fas fa-paper-plane"></i> ${translations[lang][key]}`;
                } else {
                    // التعامل مع النصوص التي تحتوي على فواصل أسطر
                    const text = translations[lang][key];
                    if (text.includes('<br>')) {
                        element.innerHTML = text;
                    } else {
                        element.textContent = text;
                    }
                }
            }
        });
        
        // تحديث زر تغيير اللغة
        const languageToggle = document.getElementById('languageToggle');
        if (languageToggle) {
            const span = languageToggle.querySelector('span');
            if (span) {
                span.textContent = lang === 'ar' ? 'EN' : 'AR';
            }
        }
    }
    
    // وظيفة تحديث أيقونة زر العودة
    function updateBackButtonIcon() {
        const backBtns = document.querySelectorAll('.back-btn-fixed i');
        backBtns.forEach(icon => {
            if (currentLang === 'ar') {
                icon.className = 'fas fa-arrow-right';
            } else {
                icon.className = 'fas fa-arrow-left';
            }
        });
    }
    
    // وظيفة تغيير الصفحة
    function changePage(pageId) {
        if (pageId === currentPage) return;
        
        // إخفاء جميع الصفحات
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        // إزالة النشاط من جميع روابط التنقل
        navLinksElements.forEach(navLink => {
            navLink.classList.remove('active');
        });
        
        // إظهار الصفحة المحددة
        document.getElementById(pageId).classList.add('active');
        
        // إضافة النشاط للرابط المحدد
        document.querySelectorAll(`[data-page="${pageId}"]`).forEach(link => {
            if (link.classList.contains('nav-link')) {
                link.classList.add('active');
            }
        });
        
        // تحديث المتغير الحالي
        currentPage = pageId;
        
        // إدارة زر العودة الثابت
        if (backToHomeFixed) {
            if (pageId === 'home') {
                backToHomeFixed.style.display = 'none';
            } else {
                backToHomeFixed.style.display = 'block';
            }
        }
        
        // إغلاق القائمة على الأجهزة المحمولة
        if (window.innerWidth <= 768) {
            document.getElementById('navContainer').classList.remove('active');
            document.getElementById('menuToggle').innerHTML = '<i class="fas fa-bars"></i>';
        }
        
        // تفعيل تأثير شريط المهارات إذا كانت الصفحة هي المهارات
        if (pageId === 'skills') {
            setTimeout(animateSkills, 300);
        }
        
        // تفعيل تأثيرات البطاقات
        setTimeout(checkCards, 300);
        
        // التمرير لأعلى الصفحة
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // تبديل القائمة على الأجهزة المحمولة
    const menuToggle = document.getElementById('menuToggle');
    const navContainer = document.getElementById('navContainer');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navContainer.classList.toggle('active');
            this.innerHTML = navContainer.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }
    
    // تبديل اللغة بنقرة واحدة
    const languageToggle = document.getElementById('languageToggle');
    
    if (languageToggle) {
        languageToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            changeLanguage(newLang);
        });
    }
    
    // التنقل عبر روابط القائمة
    navLinksElements.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            changePage(pageId);
        });
    });
    
    // التنقل عبر الشعار
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            changePage('home');
        });
    }
    
    // التنقل عبر زر العودة الثابت
    if (backToHomeFixed) {
        backToHomeFixed.addEventListener('click', function(e) {
            e.preventDefault();
            if (e.target.closest('.back-btn-fixed')) {
                changePage('home');
            }
        });
    }
    
    // التنقل عبر بطاقات الملخص
    const summaryCards = document.querySelectorAll('.summary-card');
    summaryCards.forEach(card => {
        card.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            changePage(pageId);
        });
    });
    
    // التنقل عبر أزرار الصفحة الرئيسية
    document.querySelectorAll('.hero-buttons .btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            changePage(pageId);
        });
    });
    
    // التنقل عبر أزرار بطاقات الملخص
    document.querySelectorAll('.summary-card .btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // منع تنفيذ حدث النقر على البطاقة
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            changePage(pageId);
        });
    });
    
    // التنقل عبر روابط التذييل
    document.querySelectorAll('footer a[data-page]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            changePage(pageId);
        });
    });
    
    // تأثير شريط المهارات
    const skillProgressElements = document.querySelectorAll('.skill-progress');
    
    function animateSkills() {
        const skillsPage = document.getElementById('skills');
        if (!skillsPage) return;
        
        const rect = skillsPage.getBoundingClientRect();
        
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            skillProgressElements.forEach(skill => {
                const width = skill.getAttribute('data-width');
                skill.style.width = width + '%';
            });
        }
    }
    
    // تشغيل تأثير المهارات عند التمرير
    window.addEventListener('scroll', animateSkills);
    
    // إرسال نموذج الاتصال
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // رسالة نجاح
            const message = currentLang === 'ar' 
                ? 'شكراً لك على رسالتك! سأعود إليك في أقرب وقت ممكن.' 
                : 'Thank you for your message! I will get back to you as soon as possible.';
            
            showNotification(message);
            
            // إعادة تعيين النموذج
            contactForm.reset();
        });
    }
    
    // نموذج النشرة البريدية
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            
            if (email) {
                // رسالة نجاح
                const message = currentLang === 'ar' 
                    ? 'شكراً لك على اشتراكك في النشرة البريدية!' 
                    : 'Thank you for subscribing to our newsletter!';
                
                showNotification(message);
                
                // إعادة تعيين النموذج
                this.reset();
            }
        });
    }
    
    // وظيفة عرض الإشعارات
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #0A0A0A, #2A2A2A);
            color: white;
            padding: 20px 30px;
            border-radius: 12px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.3);
            z-index: 9999;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 15px;
            transform: translateX(150%);
            transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border-left: 4px solid #B8860B;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        `;
        
        notification.innerHTML = `
            <i class="fas fa-check-circle" style="font-size: 24px; color: #B8860B;"></i>
            <span style="font-size: 16px;">${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        // عرض الإشعار
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // إخفاء الإشعار بعد 5 ثواني
        setTimeout(() => {
            notification.style.transform = 'translateX(150%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 600);
        }, 5000);
    }
    
    // إضافة تأثيرات للبطاقات عند التمرير
    const cards = document.querySelectorAll('.card, .project-card, .summary-card, .skill-category, .contact-item');
    
    function checkCards() {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.85 && rect.bottom >= 0) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // إعداد البطاقات الأولية
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
    
    // تفعيل تأثيرات البطاقات عند التحميل
    setTimeout(checkCards, 300);
    
    // تفعيل تأثيرات البطاقات عند التمرير
    window.addEventListener('scroll', checkCards);
    
    // تهيئة اللغة الافتراضية
    changeLanguage('ar');
    
    // تحديث السنة في التذييل تلقائياً
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    // إخفاء زر العودة في الصفحة الرئيسية
    if (backToHomeFixed && currentPage === 'home') {
        backToHomeFixed.style.display = 'none';
    }
});