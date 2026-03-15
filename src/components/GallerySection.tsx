import Image from "@/components/BaseImage";

const rings = [
  { src: "/images/ring-futuristic-cyan.jpg", title: "Concept: OLED Display Ring", desc: "Futuristic smart ring with integrated micro-display and ambient glow indicators" },
  { src: "/images/ring-collection-colors.png", title: "Multi-Finish Collection", desc: "Rose gold, gunmetal, silver, black, and gold — sensor arrays hidden inside each band" },
  { src: "/images/ring-sensor-green.jpg", title: "Green LED PPG Sensors", desc: "Optical heart rate sensors with green and infrared LEDs for continuous pulse monitoring" },
  { src: "/images/ring-internal-sensor.jpg", title: "Internal Sensor Array", desc: "Compact sensor module featuring PPG, temperature, and accelerometer in ring form factor" },
  { src: "/images/ring-rune-cyber.jpg", title: "Design Concept: Cyber Aesthetic", desc: "Artistic vision of next-gen ring design with illuminated circuit trace styling" },
  { src: "/images/ring-opal-glow.webp", title: "Spectral Indicator Band", desc: "Concept ring with color-shifting band that could indicate real-time health status" },
  { src: "/images/ring-led-display.webp", title: "LED Time & Data Display", desc: "Smart ring with scrolling LED display for at-a-glance metrics" },
  { src: "/images/ring-sleep-alert.webp", title: "Sleep Apnea Alert System", desc: "O2 ring with haptic vibration alert for blood oxygen desaturation during sleep" },
  { src: "/images/ring-product-black.jpg", title: "Slim Profile Health Ring", desc: "Sleek matte black ring with embedded IR sensors — minimal design, maximum data" },
  { src: "/images/ring-classic-black.jpg", title: "Classic Stealth Design", desc: "Understated smart ring that looks like a regular band while packing full sensor suite" },
  { src: "/images/ring-tech-white.jpg", title: "Clinical White Variant", desc: "Medical-grade aesthetic for clinical trials and healthcare provider partnerships" },
  { src: "/images/ring-health-display.jpg", title: "Health Data Ring", desc: "Smart ring designed to pair with companion app for real-time biometric dashboards" },
  { src: "/images/ring-sensor-small.jpg", title: "Micro Sensor Module", desc: "Miniaturized PPG sensor package designed for ultra-slim ring integration" },
  { src: "/images/ring-kickstarter.webp", title: "Crowdfunded Innovation", desc: "Early smart ring prototypes that proved consumer demand for finger-worn health tech" },
  { src: "/images/ring-slim-black.avif", title: "Ultra-Slim Profile", desc: "Sub-3mm ring thickness — proving advanced sensors can fit in everyday jewelry form" },
  { src: "/images/ring-thin-silver.avif", title: "Silver Minimal Band", desc: "Thin-profile design study for a ring that disappears on the hand while monitoring vitals" },
  { src: "/images/ring-display-oled.avif", title: "OLED Readout Ring", desc: "Integrated micro-OLED display for at-a-glance SpO2 and heart rate without a phone" },
  { src: "/images/ring-banner-lifestyle.jpg", title: "Lifestyle Integration", desc: "Smart rings in daily life — from workouts to sleep, always monitoring, never intrusive" },
  { src: "/images/ring-mouse-trackball.webp", title: "Input + Health Hybrid", desc: "Exploring dual-purpose ring designs that combine gesture input with biometric sensing" },
  { src: "/images/ring-o2-monitoring.avif", title: "Continuous O2 Tracker", desc: "Dedicated blood oxygen monitoring ring for sleep apnea and respiratory health" },
];

const contextImages = [
  { src: "/images/body-organs-grid.jpg", title: "Full-Body Monitoring", desc: "IkuBand aims to track biomarkers relevant to every major organ system" },
  { src: "/images/big-data-neural.jpg", title: "Big Data Processing", desc: "Billions of data points from millions of wearers will train our ML models" },
  { src: "/images/big-data-viz.jpg", title: "Advanced Analytics", desc: "Real-time signal processing and visualization of multi-modal biosensor data" },
  { src: "/images/medical-monitor.png", title: "Hospital-Grade Baseline", desc: "Our goal: match the data from a bedside patient monitor — on your finger" },
  { src: "/images/body-scan-hud.jpg", title: "Digital Health Twin", desc: "Building toward a continuous digital model of your body's physiology" },
  { src: "/images/laser-therapy-device.jpg", title: "Light-Based Therapeutics", desc: "Exploring photobiomodulation and light therapy integration in future devices" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-divider mb-20" />

        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-widest uppercase">Gallery</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Ring <span className="gradient-text">Design & Inspiration</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Exploring form factors, sensor placements, and design language for the IkuBand ring.
            Every ring below represents a piece of the puzzle — from existing commercial sensors to our conceptual next-gen designs.
          </p>
        </div>

        {/* Ring gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {rings.map((ring) => (
            <div
              key={ring.src}
              className="group bg-card-bg border border-card-border rounded-xl overflow-hidden card-hover"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={ring.src}
                  alt={ring.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-1">{ring.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{ring.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Context images */}
        <h3 className="text-2xl font-bold mb-8 text-center">
          The <span className="gradient-text">Bigger Picture</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contextImages.map((img) => (
            <div
              key={img.src}
              className="group bg-card-bg border border-card-border rounded-xl overflow-hidden card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-1">{img.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
