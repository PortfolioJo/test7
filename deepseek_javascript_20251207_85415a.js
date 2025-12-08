// بورتفوليو خبير تسويق - نظام ثنائي اللغة كامل

document.addEventListener('DOMContentLoaded', function() {
    // نظام الترجمة الكامل
    const translations = {
        ar: {
            // التنقل
            logo: "Z.",
            navHome: "الرئيسية",
            navAbout: "عني",
            navServices: "خدماتي",
            navPortfolio: "حملاتي",
            navClients: "عملائي",
            navContact: "تواصل",
            language: "EN",
            
            // الصفحة الرئيسية
            heroBadge: "استراتيجي تسويق رقمي",
            heroTitle1: "أبدع. أتحليل.",
            heroTitle2: "أحقق النمو.",
            heroDescription: "أصمم استراتيجيات تسويقية ذكية تحول البيانات إلى نتائج ملموسة. خبرة 6+ سنوات في إدارة الحملات الناجحة.",
            btnViewWork: "شاهد أعمالي",
            btnLetsWork: "لنعمل معاً",
            statProjects: "مشروع ناجح",
            statClients: "رضا العملاء",
            statGrowth: "% نمو في الأداء",
            
            // ملخص الأقسام
            overviewTitle: "استكشف خبراتي",
            overviewSubtitle: "تصفح أقسامي المختلفة وتعرف على خدماتي وخبراتي في التسويق الرقمي",
            overviewAboutTitle: "عني",
            overviewAboutDesc: "تعرف على مسيرتي المهنية وخبراتي في التسويق الرقمي",
            overviewServicesTitle: "خدماتي",
            overviewServicesDesc: "اكتشف خدماتي المتخصصة في التسويق الرقمي وإدارة الحملات",
            overviewPortfolioTitle: "حملاتي",
            overviewPortfolioDesc: "شاهد مجموعة من أبرز الحملات الناجحة التي قمت بإدارتها",
            overviewClientsTitle: "عملائي",
            overviewClientsDesc: "تعرف على الشركات التي عملت معها ونتائج شراكاتنا",
            
            // إحصائيات سريعة
            statSalesGrowth: "نمو في المبيعات",
            statGoalAchievement: "تحقيق الأهداف",
            statSupport: "دعم ومتابعة",
            
            // صفحة عني
            aboutTitle: "عني",
            aboutSubtitle: "خبير تسويق رقمي مع شغف لتحويل البيانات إلى استراتيجيات ناجحة",
            aboutName: "زياد أحمد",
            aboutPosition: "استراتيجي تسويق رقمي",
            aboutDescription: "مع أكثر من 6 سنوات من الخبرة في التسويق الرقمي، تخصصت في تحويل البيانات المعقدة إلى استراتيجيات تسويقية فعالة. أساعد الشركات على النمو من خلال فهم عميق لسلوك العملاء وتطوير حلول مخصصة.",
            aboutProjects: "مشروع منجز",
            aboutHappyClients: "عميل سعيد",
            aboutExperience: "سنوات خبرة",
            skillsTitle: "تخصصاتي الرئيسية",
            skill1: "إعلانات وسائل التواصل",
            skill2: "تحليل البيانات",
            skill3: "استراتيجية المحتوى",
            skill4: "تحسين محركات البحث",
            skill5: "إدارة الحملات",
            skill6: "تحسين التحويل",
            timeline1Title: "بداية الرحلة",
            timeline1Desc: "تأسيس أول مشروع تسويقي رقمي مستقل",
            timeline2Title: "التخصص",
            timeline2Desc: "التركيز على إعلانات وسائل التواصل والتحليلات",
            timeline3Title: "التميز",
            timeline3Desc: "توسيع نطاق العمل ليشمل استراتيجيات متكاملة",
            
            // صفحة الخدمات
            servicesTitle: "خدماتي",
            servicesSubtitle: "حلول تسويقية شاملة مصممة لتحقيق أهدافك",
            service1Title: "إعلانات وسائل التواصل",
            service1Desc: "إدارة متكاملة لحملات الإعلانات على جميع المنصات الرقمية",
            service1Feature1: "فيسبوك وإنستغرام",
            service1Feature2: "تيك توك وسناب شات",
            service1Feature3: "لينكدإن وتويتر",
            service2Title: "تحليل البيانات",
            service2Desc: "تحليل أداء الحملات وتقديم تقارير مفصلة واقتراحات تحسين",
            service2Feature1: "تقارير أداء أسبوعية",
            service2Feature2: "تحليل المنافسين",
            service2Feature3: "توصيات عملية",
            service3Title: "تحسين محركات البحث",
            service3Desc: "تحسين ظهور موقعك في نتائج البحث وزيادة الزيارات العضوية",
            service3Feature1: "بحث الكلمات المفتاحية",
            service3Feature2: "تحسين المحتوى",
            service3Feature3: "بناء الروابط",
            service4Title: "استراتيجية محتوى",
            service4Desc: "تخطيط وتنفيذ استراتيجيات محتوى فعالة تجذب الجمهور",
            service4Feature1: "تخطيط المحتوى",
            service4Feature2: "كتابة الإعلانات",
            service4Feature3: "إدارة المحتوى",
            servicePopular: "الأكثر طلباً",
            
            // عملية العمل
            processTitle: "كيف أعمل؟",
            step1Title: "التحليل والتخطيط",
            step1Desc: "فهم عميق للأهداف وتحليل السوق المستهدف",
            step2Title: "التنفيذ",
            step2Desc: "تنفيذ الاستراتيجية بدقة مع مراقبة مستمرة",
            step3Title: "التحسين",
            step3Desc: "تحسين مستمر للأداء بناءً على البيانات",
            step4Title: "التقارير",
            step4Desc: "تقديم تقارير مفصلة ونصائح للتحسين",
            
            // صفحة الحملات
            portfolioTitle: "حملاتي الناجحة",
            portfolioSubtitle: "أمثلة حية لاستراتيجيات تسويقية حققت نتائج مذهلة",
            filterAll: "الكل",
            filterSocial: "وسائل التواصل",
            filterSEO: "تحسين محركات البحث",
            filterContent: "استراتيجية محتوى",
            viewDetails: "عرض التفاصيل",
            categorySocial: "وسائل التواصل",
            categorySEO: "تحسين محركات البحث",
            categoryContent: "استراتيجية محتوى",
            project1Title: "حملة إطلاق العلامة التجارية",
            project1Desc: "حملة متكاملة لإطلاق علامة تجارية جديدة في سوق الأزياء",
            project1Views: "2.5M مشاهدة",
            project1Engagement: "25% تفاعل",
            project2Title: "زيادة الظهور العضوي",
            project2Desc: "تحسين ترتيب موقع إلكتروني في نتائج البحث الأولى",
            project2Traffic: "+200% زيارات",
            project2Ranking: "15 مرتبة",
            project3Title: "بناء الهوية الرقمية",
            project3Desc: "تطوير هوية رقمية متكاملة لشركة تقنية ناشئة",
            project3Followers: "+50K متابع",
            project3Growth: "85% نمو",
            
            // صفحة العملاء
            clientsTitle: "عملائي",
            clientsSubtitle: "شراكات ناجحة بنيت على الثقة والنتائج الملموسة",
            client1Name: "شركة TechCo",
            client1Testimonial: "\"زياد ساعدنا على زيادة مبيعاتنا بنسبة 300% خلال 6 أشهر فقط.\"",
            client1Person: "أحمد السيد",
            client1Position: "مدير التسويق",
            client2Name: "متجر StyleHub",
            client2Testimonial: "\"استراتيجياته المبتكرة حولت علامتنا التجارية إلى رائدة في السوق.\"",
            client2Person: "سارة محمد",
            client2Position: "المؤسسة والمديرة",
            testimonial1: "\"العمل مع زياد كان نقلة نوعية في استراتيجيتنا التسويقية. النتائج تتحدث عن نفسها.\"",
            testimonial1Name: "محمد الخالد",
            testimonial1Position: "CEO, EduSmart",
            testimonial2: "\"محترف جداً وفهم عميق لاحتياجات السوق. أنصح بالعمل معه بشدة.\"",
            testimonial2Name: "نورة القحطاني",
            testimonial2Position: "مديرة التسويق, Foodie",
            
            // صفحة الاتصال
            contactTitle: "لنعمل معاً",
            contactSubtitle: "لنتحدث عن مشروعك ونبدأ رحلة النمو معاً",
            contactEmail: "البريد الإلكتروني",
            contactPhone: "الهاتف",
            contactHours: "ساعات العمل",
            contactHoursText: "الأحد - الخميس: 9 ص - 6 م",
            formName: "اسمك الكامل",
            formEmail: "بريدك الإلكتروني",
            formProjectType: "نوع المشروع",
            formMessage: "أخبرني عن مشروعك وأهدافك...",
            formSelectProject: "نوع المشروع",
            formConsulting: "استشارة تسويقية",
            formAds: "إعلانات وسائل التواصل",
            formSEO: "تحسين محركات البحث",
            formStrategy: "استراتيجية محتوى",
            btnSend: "إرسال الطلب",
            
            // زر العودة
            btnBackHome: "العودة للرئيسية",
            
            // التذييل
            footerDescription: "استراتيجي تسويق رقمي متخصص في تحويل الأفكار إلى نتائج ملموسة. أجمع بين الإبداع والتحليل لبناء استراتيجيات ناجحة.",
            copyright: "© 2024 زياد. جميع الحقوق محفوظة."
        },
        en: {
            // Navigation
            logo: "Z.",
            navHome: "Home",
            navAbout: "About",
            navServices: "Services",
            navPortfolio: "Portfolio",
            navClients: "Clients",
            navContact: "Contact",
            language: "AR",
            
            // Home Page
            heroBadge: "Digital Marketing Strategist",
            heroTitle1: "Create. Analyze.",
            heroTitle2: "Achieve Growth.",
            heroDescription: "I design smart marketing strategies that transform data into tangible results. 6+ years of experience in managing successful campaigns.",
            btnViewWork: "View My Work",
            btnLetsWork: "Let's Work Together",
            statProjects: "Successful Projects",
            statClients: "Client Satisfaction",
            statGrowth: "% Performance Growth",
            
            // Sections Overview
            overviewTitle: "Explore My Expertise",
            overviewSubtitle: "Browse through my different sections to learn about my services and experience in digital marketing",
            overviewAboutTitle: "About Me",
            overviewAboutDesc: "Learn about my professional journey and experience in digital marketing",
            overviewServicesTitle: "My Services",
            overviewServicesDesc: "Discover my specialized services in digital marketing and campaign management",
            overviewPortfolioTitle: "My Campaigns",
            overviewPortfolioDesc: "View a collection of the most successful campaigns I've managed",
            overviewClientsTitle: "My Clients",
            overviewClientsDesc: "Learn about the companies I've worked with and the results of our partnerships",
            
            // Quick Stats
            statSalesGrowth: "Sales Growth",
            statGoalAchievement: "Goal Achievement",
            statSupport: "Support & Follow-up",
            
            // About Page
            aboutTitle: "About Me",
            aboutSubtitle: "Digital marketing expert with a passion for transforming data into successful strategies",
            aboutName: "Ziad Ahmed",
            aboutPosition: "Digital Marketing Strategist",
            aboutDescription: "With over 6 years of experience in digital marketing, I specialize in transforming complex data into effective marketing strategies. I help companies grow through deep understanding of customer behavior and developing customized solutions.",
            aboutProjects: "Completed Projects",
            aboutHappyClients: "Happy Clients",
            aboutExperience: "Years of Experience",
            skillsTitle: "My Main Specialties",
            skill1: "Social Media Advertising",
            skill2: "Data Analysis",
            skill3: "Content Strategy",
            skill4: "SEO Optimization",
            skill5: "Campaign Management",
            skill6: "Conversion Optimization",
            timeline1Title: "The Beginning",
            timeline1Desc: "Establishing the first independent digital marketing project",
            timeline2Title: "Specialization",
            timeline2Desc: "Focusing on social media advertising and analytics",
            timeline3Title: "Excellence",
            timeline3Desc: "Expanding work scope to include integrated strategies",
            
            // Services Page
            servicesTitle: "My Services",
            servicesSubtitle: "Comprehensive marketing solutions designed to achieve your goals",
            service1Title: "Social Media Advertising",
            service1Desc: "Complete management of advertising campaigns across all digital platforms",
            service1Feature1: "Facebook & Instagram",
            service1Feature2: "TikTok & Snapchat",
            service1Feature3: "LinkedIn & Twitter",
            service2Title: "Data Analysis",
            service2Desc: "Campaign performance analysis and detailed reports with improvement suggestions",
            service2Feature1: "Weekly Performance Reports",
            service2Feature2: "Competitor Analysis",
            service2Feature3: "Practical Recommendations",
            service3Title: "SEO Optimization",
            service3Desc: "Improving your website's appearance in search results and increasing organic traffic",
            service3Feature1: "Keyword Research",
            service3Feature2: "Content Optimization",
            service3Feature3: "Link Building",
            service4Title: "Content Strategy",
            service4Desc: "Planning and implementing effective content strategies that attract audiences",
            service4Feature1: "Content Planning",
            service4Feature2: "Ad Copywriting",
            service4Feature3: "Content Management",
            servicePopular: "Most Popular",
            
            // Work Process
            processTitle: "How I Work?",
            step1Title: "Analysis & Planning",
            step1Desc: "Deep understanding of goals and target market analysis",
            step2Title: "Implementation",
            step2Desc: "Precise strategy implementation with continuous monitoring",
            step3Title: "Optimization",
            step3Desc: "Continuous performance optimization based on data",
            step4Title: "Reporting",
            step4Desc: "Detailed reports and improvement recommendations",
            
            // Portfolio Page
            portfolioTitle: "My Successful Campaigns",
            portfolioSubtitle: "Live examples of marketing strategies that achieved amazing results",
            filterAll: "All",
            filterSocial: "Social Media",
            filterSEO: "SEO",
            filterContent: "Content Strategy",
            viewDetails: "View Details",
            categorySocial: "Social Media",
            categorySEO: "SEO Optimization",
            categoryContent: "Content Strategy",
            project1Title: "Brand Launch Campaign",
            project1Desc: "Complete campaign to launch a new brand in the fashion market",
            project1Views: "2.5M Views",
            project1Engagement: "25% Engagement",
            project2Title: "Organic Visibility Increase",
            project2Desc: "Improving website ranking in top search results",
            project2Traffic: "+200% Traffic",
            project2Ranking: "15 Positions",
            project3Title: "Digital Identity Building",
            project3Desc: "Developing a complete digital identity for a tech startup",
            project3Followers: "+50K Followers",
            project3Growth: "85% Growth",
            
            // Clients Page
            clientsTitle: "My Clients",
            clientsSubtitle: "Successful partnerships built on trust and tangible results",
            client1Name: "TechCo Company",
            client1Testimonial: "\"Ziad helped us increase our sales by 300% in just 6 months.\"",
            client1Person: "Ahmed Al-Sayed",
            client1Position: "Marketing Manager",
            client2Name: "StyleHub Store",
            client2Testimonial: "\"His innovative strategies transformed our brand into a market leader.\"",
            client2Person: "Sara Mohamed",
            client2Position: "Founder & Director",
            testimonial1: "\"Working with Ziad was a qualitative leap in our marketing strategy. The results speak for themselves.\"",
            testimonial1Name: "Mohamed Al-Khaled",
            testimonial1Position: "CEO, EduSmart",
            testimonial2: "\"Extremely professional with deep understanding of market needs. Highly recommend working with him.\"",
            testimonial2Name: "Nora Al-Qahtani",
            testimonial2Position: "Marketing Director, Foodie",
            
            // Contact Page
            contactTitle: "Let's Work Together",
            contactSubtitle: "Let's discuss your project and start the growth journey together",
            contactEmail: "Email",
            contactPhone: "Phone",
            contactHours: "Working Hours",
            contactHoursText: "Sunday - Thursday: 9 AM - 6 PM",
            formName: "Full Name",
            formEmail: "Email Address",
            formProjectType: "Project Type",
            formMessage: "Tell me about your project and goals...",
            formSelectProject: "Project Type",
            formConsulting: "Marketing Consultation",
            formAds: "Social Media Advertising",
            formSEO: "SEO Optimization",
            formStrategy: "Content Strategy",
            btnSend: "Send Request",
            
            // Back Button
            btnBackHome: "Back to Home",
            
            // Footer
            footerDescription: "Digital marketing strategist specializing in transforming ideas into tangible results. I combine creativity and analysis to build successful strategies.",
            copyright: "© 2024 Ziad. All rights reserved."
        }
    };

    // تهيئة المتغيرات
    let currentLang = localStorage.getItem('portfolioLanguage') || 'ar';
    let currentPage = window.location.hash.substring(1) || 'home';
    
    // العناصر الأساسية
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.querySelector('.language-dropdown');
    const scrollTopBtn = document.querySelector('.scroll-top');

    // تهيئة الصفحة
    initPortfolio();

    function initPortfolio() {
        setupNavigation();
        setupLanguageSwitcher();
        setupPageTransitions();
        setupScrollEffects();
        setupCounters();
        setupCharts();
        setupFilter();
        setupForm();
        setupAnimations();
        
        // تعيين اللغة المحددة
        changeLanguage(currentLang);
        
        // تفعيل الصفحة الحالية
        activatePage(currentPage);
        updateActiveNav(currentPage);
    }

    // إعداد التنقل بين الصفحات
    function setupNavigation() {
        // تحديث الروابط النشطة عند التمرير
        window.addEventListener('scroll', updateNavOnScroll);
        
        // التنقل عند النقر على الروابط
        document.querySelectorAll('.nav-link, .overview-card, .btn[data-section]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const section = this.getAttribute('data-section') || 
                               this.getAttribute('href').substring(1);
                
                if (section) {
                    navigateToPage(section);
                    
                    // إغلاق القائمة على الأجهزة المحمولة
                    if (window.innerWidth <= 768) {
                        navMenu.classList.remove('active');
                        navToggle.classList.remove('active');
                    }
                }
            });
        });
        
        // زر القائمة للموبايل
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // التعامل مع زر الرجوع في المتصفح
        window.addEventListener('popstate', function() {
            const page = window.location.hash.substring(1) || 'home';
            activatePage(page);
            updateActiveNav(page);
        });
    }

    // تحديث التنقل عند التمرير
    function updateNavOnScroll() {
        const sections = document.querySelectorAll('.page');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                updateActiveNav(sectionId);
            }
        });
    }

    // تحديث الروابط النشطة
    function updateActiveNav(pageId) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        const activeLink = document.querySelector(`.nav-link[data-section="${pageId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
            
            // تحديث موقع المؤشر
            const indicator = document.querySelector('.nav-indicator');
            if (indicator) {
                const linkRect = activeLink.getBoundingClientRect();
                const menuRect = activeLink.parentElement.getBoundingClientRect();
                
                indicator.style.width = `${linkRect.width}px`;
                indicator.style.transform = `translateX(${linkRect.left - menuRect.left}px)`;
            }
        }
    }

    // الانتقال إلى صفحة محددة
    function navigateToPage(pageId) {
        // تحديث عنوان URL
        window.location.hash = pageId;
        history.pushState(null, null, `#${pageId}`);
        
        // تفعيل الصفحة الجديدة
        activatePage(pageId);
        updateActiveNav(pageId);
        
        // التمرير السلس إلى أعلى الصفحة
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // تفعيل صفحة محددة
    function activatePage(pageId) {
        // إخفاء جميع الصفحات
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // إظهار الصفحة المطلوبة
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            
            // إعادة تفعيل العناصر الديناميكية
            setTimeout(() => {
                if (pageId === 'home') {
                    setupCounters();
                    setupCharts();
                }
                
                if (pageId === 'portfolio') {
                    setupFilter();
                }
                
                setupAnimations();
            }, 300);
        }
    }

    // إعداد تبديل اللغة
    function setupLanguageSwitcher() {
        // زر تبديل اللغة
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('show');
        });
        
        // اختيار لغة
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                changeLanguage(lang);
                languageDropdown.classList.remove('show');
            });
        });
        
        // إغلاق القائمة عند النقر خارجها
        document.addEventListener('click', function(e) {
            if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
                languageDropdown.classList.remove('show');
            }
        });
    }

    // تغيير اللغة
    function changeLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('portfolioLanguage', lang);
        
        // تغيير اتجاه الصفحة
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        
        // تغيير الخط حسب اللغة
        document.body.style.fontFamily = lang === 'ar' ? "'Tajawal', sans-serif" : "'Inter', sans-serif";
        
        // تحديث جميع النصوص
        updateAllTexts();
        
        // تحديث زر اللغة
        const langText = languageBtn.querySelector('.current-lang');
        if (langText) {
            langText.textContent = translations[lang].language;
        }
        
        // تحديث خيارات اللغة النشطة
        document.querySelectorAll('.lang-option').forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            }
        });
    }

    // تحديث جميع النصوص
    function updateAllTexts() {
        const elements = document.querySelectorAll('[data-key]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            
            if (translations[currentLang][key]) {
                const text = translations[currentLang][key];
                
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.hasAttribute('data-placeholder')) {
                        element.setAttribute('placeholder', text);
                    }
                } else if (element.tagName === 'SELECT') {
                    // تحديث خيارات التحديد
                    const options = element.querySelectorAll('option[data-key]');
                    options.forEach(option => {
                        const optionKey = option.getAttribute('data-key');
                        if (translations[currentLang][optionKey]) {
                            option.textContent = translations[currentLang][optionKey];
                        }
                    });
                    
                    // تحديث الخيار المحدد افتراضياً
                    const defaultOption = element.querySelector('option[value=""]');
                    if (defaultOption && defaultOption.getAttribute('data-key')) {
                        const defaultKey = defaultOption.getAttribute('data-key');
                        defaultOption.textContent = translations[currentLang][defaultKey];
                    }
                } else if (element.tagName === 'BUTTON' && element.type === 'submit') {
                    const icon = element.querySelector('i');
                    if (icon) {
                        element.innerHTML = `<span>${text}</span> ${icon.outerHTML}`;
                    } else {
                        element.textContent = text;
                    }
                } else {
                    element.textContent = text;
                }
            }
        });
    }

    // تأثيرات التمرير
    function setupScrollEffects() {
        // إظهار/إخفاء زر الرجوع للأعلى
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
            
            // تفعيل العناصر عند التمرير
            activateElementsOnScroll();
        });
        
        // زر الرجوع للأعلى
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // تفعيل العناصر عند التمرير
    function activateElementsOnScroll() {
        const elements = document.querySelectorAll('.service-card, .portfolio-item, .client-card, .testimonial');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.85) {
                element.classList.add('animated');
            }
        });
    }

    // تأثيرات الانتقال بين الصفحات
    function setupPageTransitions() {
        // إضافة تأثير انتقال سلس
        document.body.style.transition = 'opacity 0.3s ease';
    }

    // العدادات المتحركة
    function setupCounters() {
        const counters = document.querySelectorAll('.stat-number[data-count]');
        
        counters.forEach(counter => {
            if (counter.getAttribute('data-animated') === 'true') return;
            
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                    counter.setAttribute('data-animated', 'true');
                }
                counter.textContent = Math.floor(current);
            }, 16);
        });
    }

    // المخططات
    function setupCharts() {
        const canvas = document.getElementById('performanceChart');
        if (!canvas) return;
        
        // منع إعادة إنشاء المخطط إذا كان موجوداً
        if (canvas.chart) return;
        
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        // بيانات المخطط
        const data = {
            labels: currentLang === 'ar' ? 
                ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'] :
                ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                data: [65, 78, 90, 85, 92, 98],
                borderColor: '#000000',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#000000',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2
            }]
        };
        
        // خيارات المخطط
        const options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        color: '#666666'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        color: '#666666'
                    }
                }
            }
        };
        
        // إنشاء المخطط
        canvas.chart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });
    }

    // تصفية المشاريع
    function setupFilter() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // إزالة النشاط من جميع الأزرار
                filterBtns.forEach(b => b.classList.remove('active'));
                // إضافة النشاط للزر المحدد
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // تصفية العناصر
                portfolioItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // النموذج
    function setupForm() {
        const form = document.getElementById('projectForm');
        if (!form) return;
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // إظهار رسالة النجاح
            showNotification(
                currentLang === 'ar' 
                    ? 'شكراً لك! سنتواصل معك خلال 24 ساعة.' 
                    : 'Thank you! We will contact you within 24 hours.',
                'success'
            );
            
            // إعادة تعيين النموذج
            form.reset();
        });
    }

    // الحركات والتأثيرات
    function setupAnimations() {
        // حركة العناصر عند التمرير
        const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .client-card, .testimonial');
        
        animatedElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.1}s`;
        });
        
        // تأثيرات التمرير فوق العناصر
        const interactiveElements = document.querySelectorAll('.overview-card, .service-card, .portfolio-item, .client-card, .info-card');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    // الإشعارات
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-check-circle"></i>
                <span>${message}</span>
            </div>
        `;
        
        // إضافة الأنماط
        if (!document.querySelector('#notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = `
                .notification {
                    position: fixed;
                    top: 30px;
                    right: 30px;
                    background: #000000;
                    color: #ffffff;
                    padding: 20px 25px;
                    border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                    z-index: 9999;
                    transform: translateY(-100px);
                    opacity: 0;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    border: 2px solid #000000;
                }
                
                body[dir="ltr"] .notification {
                    right: auto;
                    left: 30px;
                }
                
                .notification.show {
                    transform: translateY(0);
                    opacity: 1;
                }
                
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-weight: 500;
                }
                
                .notification-content i {
                    font-size: 20px;
                }
                
                .notification-success {
                    background: #000000;
                    color: #ffffff;
                }
            `;
            document.head.appendChild(styles);
        }
        
        document.body.appendChild(notification);
        
        // عرض الإشعار
        setTimeout(() => notification.classList.add('show'), 10);
        
        // إخفاء الإشعار بعد 4 ثواني
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 400);
        }, 4000);
    }

    // تحسين أداء التمرير
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(function() {
                updateNavOnScroll();
                ticking = false;
            });
        }
    });

    // إضافة حركة للصفحة عند التحميل
    setTimeout(() => {
        document.body.classList.add('loaded');
        activateElementsOnScroll();
    }, 100);
});