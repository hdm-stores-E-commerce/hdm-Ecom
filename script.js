const defaultConfig = {
      hero_title: 'Grow Your <span class="gradient-text">E-Commerce</span><br>Business With Us',
      hero_subtitle: "Complete Account Management Services for Amazon, Flipkart & Meesho. From setup to scaling - we handle everything while you focus on your business.",
      services_title: "Complete E-Commerce Solutions",
      contact_phone: "9576231070",
      background_color: "#0f172a",
      surface_color: "#1e293b",
      text_color: "#ffffff",
      primary_action_color: "#8b5cf6",
      secondary_action_color: "#10b981"
    };

    // Initialize SDK
    window.elementSdk.init({
      defaultConfig,
      
      onConfigChange: async (config) => {
        // Update hero title
        const heroTitle = document.getElementById('hero-title');
        if (heroTitle) {
          heroTitle.innerHTML = config.hero_title || defaultConfig.hero_title;
        }
        
        // Update hero subtitle
        const heroSubtitle = document.getElementById('hero-subtitle');
        if (heroSubtitle) {
          heroSubtitle.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
        }
        
        // Update services title
        const servicesTitle = document.getElementById('services-title');
        if (servicesTitle) {
          servicesTitle.textContent = config.services_title || defaultConfig.services_title;
        }
        
        // Update phone numbers
        const phone = config.contact_phone || defaultConfig.contact_phone;
        const heroPhone = document.getElementById('hero-phone');
        const contactPhone = document.getElementById('contact-phone');
        if (heroPhone) heroPhone.textContent = phone;
        if (contactPhone) contactPhone.textContent = phone;

        // Update background color
        const appWrapper = document.getElementById('app-wrapper');
        if (appWrapper) {
          appWrapper.style.backgroundColor = config.background_color || defaultConfig.background_color;
        }
      },
      
      mapToCapabilities: (config) => ({
        recolorables: [
          {
            get: () => config.background_color || defaultConfig.background_color,
            set: (value) => {
              config.background_color = value;
              window.elementSdk.setConfig({ background_color: value });
            }
          },
          {
            get: () => config.surface_color || defaultConfig.surface_color,
            set: (value) => {
              config.surface_color = value;
              window.elementSdk.setConfig({ surface_color: value });
            }
          },
          {
            get: () => config.text_color || defaultConfig.text_color,
            set: (value) => {
              config.text_color = value;
              window.elementSdk.setConfig({ text_color: value });
            }
          },
          {
            get: () => config.primary_action_color || defaultConfig.primary_action_color,
            set: (value) => {
              config.primary_action_color = value;
              window.elementSdk.setConfig({ primary_action_color: value });
            }
          },
          {
            get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
            set: (value) => {
              config.secondary_action_color = value;
              window.elementSdk.setConfig({ secondary_action_color: value });
            }
          }
        ],
        borderables: [],
        fontEditable: undefined,
        fontSizeable: undefined
      }),
      
      mapToEditPanelValues: (config) => new Map([
        ["hero_title", config.hero_title || defaultConfig.hero_title],
        ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
        ["services_title", config.services_title || defaultConfig.services_title],
        ["contact_phone", config.contact_phone || defaultConfig.contact_phone]
      ])
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.opacity-0').forEach(el => {
      observer.observe(el);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  
 (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9cdc674490053501',t:'MTc3MTA3MDQwOC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();