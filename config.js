// Tarikul Islam Website Configuration
// Modify these values to customize your site

const SITE_CONFIG = {
    // Personal Information
    title: "Tarikul Islam",
    citation: "I am not professional But I learn first and then I build.",
    
    // Main colors (hexadecimal format)
    colors: {
        primary: "#e23535",      // Main red
        secondary: "#ff4d4d",    // Secondary red
        accent: "#ff6b6b",       // Accent red
        white: "#ffffff",        // White
        black: "#000000"         // Black
    },
    
    // Social links
    socialLinks: {
        github: "https://github.com/itz-paglu",
        tiktok: "https://www.tiktok.com/@tuhin_raj_",
        youtube: "https://www.youtube.com/@TarikulDevZone",
        discord: null,
        telegram: "https://t.me/paglu_dev"
    },
    
    // Audio configuration
    audio: {
        volume: 0.15,            // Default volume (0.0 to 1.0)
        autoplay: true,          // Auto play
        loop: true               // Loop playback
    },
    
    // Video configuration
    video: {
        autoplay: true,          // Auto play
        muted: true,             // Default mute
        loop: true,              // Loop video
        playsinline: true        // Inline playback on mobile
    },
    
    // Animation configuration
    animations: {
        enabled: true,           // Enable animations
        particleCount: 50,       // Number of particles
        particleSpeed: 300,      // Particle speed (ms)
        titleAnimationSpeed: 200, // Title animation speed (ms)
        typingSpeed: 100         // Typing animation speed (ms)
    },
    
    // Responsive configuration
    responsive: {
        mobileBreakpoint: 768,   // Mobile breakpoint (px)
        tabletBreakpoint: 1024   // Tablet breakpoint (px)
    },
    
    // Custom messages
    messages: {
        intro: "Click to enter",
        loading: "Loading...",
        errorVideo: "Your browser does not support HTML5 video.",
        errorAudio: "Your browser does not support the audio element."
    },
    
    // Visual effects configuration
    effects: {
        scanlines: true,         // Scanlines effect
        vignette: true,          // Vignette effect
        distortion: true,        // Distortion effect
        particles: true,         // Floating particles
        fireParticles: true,     // Fire particles
        parallax: true,          // Parallax effect
        shockwave: true          // Shockwave on click
    },
    
    // Text animation configuration
    textAnimations: {
        holographic: true,       // Holographic animation
        glitch: true,            // Glitch effect
        neon: true,              // Neon effect
        typing: true,            // Typing effect
        shine: true,             // Shiny effect
        pulse: true              // Pulse effect
    }
};

// Function to apply configuration
function applyConfig() {
    // Applying title
    document.title = SITE_CONFIG.title;
    
    // Applying citation text
    const citationElement = document.getElementById("citation-text");
    if (citationElement) {
        citationElement.textContent = SITE_CONFIG.citation;
    }
    
    // Applying main title
    const titleElement = document.getElementById("main-title");
    if (titleElement) {
        titleElement.textContent = SITE_CONFIG.title;
    }
    
    // Applying intro message
    const introElement = document.querySelector(".intro-text");
    if (introElement) {
        introElement.textContent = SITE_CONFIG.messages.intro;
    }
    
    // Audio configuration
    const audio = document.getElementById("audio");
    if (audio) {
        audio.volume = SITE_CONFIG.audio.volume;
        audio.loop = SITE_CONFIG.audio.loop;
    }
    
    // Video configuration
    const video = document.getElementById("background");
    if (video) {
        video.autoplay = SITE_CONFIG.video.autoplay;
        video.muted = SITE_CONFIG.video.muted;
        video.loop = SITE_CONFIG.video.loop;
        video.playsinline = SITE_CONFIG.video.playsinline;
    }
    
    // Updating social links
    updateSocialLinks();
}

// Function to update social links
function updateSocialLinks() {
    const socialLinks = {
        'github': document.querySelector('a[href*="github.com"]'),
        'tiktok': document.querySelector('a[href*="tiktok.com"]'),
        'youtube': document.querySelector('a[href*="youtube.com"]'),
        'discord': document.querySelector('a[href*="discord.gg"]'),
        'telegram': document.querySelector('a[href*="t.me"]')
    };
    
    for (const [platform, element] of Object.entries(socialLinks)) {
        if (element && SITE_CONFIG.socialLinks[platform]) {
            element.href = SITE_CONFIG.socialLinks[platform];
        }
    }
}

// Function to enable/disable effects
function toggleEffect(effectName, enabled) {
    if (SITE_CONFIG.effects[effectName] !== undefined) {
        SITE_CONFIG.effects[effectName] = enabled;
        
        // Immediate application for some effects
        if (effectName === 'scanlines') {
            const scanlines = document.querySelector('.scanlines');
            if (scanlines) {
                scanlines.style.display = enabled ? 'block' : 'none';
            }
        }
        
        if (effectName === 'vignette') {
            const vignette = document.querySelector('.vignette');
            if (vignette) {
                vignette.style.display = enabled ? 'block' : 'none';
            }
        }
        
        if (effectName === 'distortion') {
            const distortion = document.querySelector('.screen-distortion');
            if (distortion) {
                distortion.style.display = enabled ? 'block' : 'none';
            }
        }
    }
}

// Function to change colors
function updateColors(newColors) {
    Object.assign(SITE_CONFIG.colors, newColors);
    
    // Updating CSS variables
    const root = document.documentElement;
    root.style.setProperty('--primary-color', SITE_CONFIG.colors.primary);
    root.style.setProperty('--secondary-color', SITE_CONFIG.colors.secondary);
    root.style.setProperty('--accent-color', SITE_CONFIG.colors.accent);
}

// Function to get config
function getConfig() {
    return SITE_CONFIG;
}

// Export for use in other files
window.SITE_CONFIG = SITE_CONFIG;
window.applyConfig = applyConfig;
window.toggleEffect = toggleEffect;
window.updateColors = updateColors;
window.getConfig = getConfig;

// Automatic apply on page load
document.addEventListener('DOMContentLoaded', applyConfig);
