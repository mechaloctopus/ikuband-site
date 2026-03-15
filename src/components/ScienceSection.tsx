import Image from "@/components/BaseImage";

const technologies = [
  {
    id: "raman",
    title: "Raman Spectroscopy",
    subtitle: "Laser-Based Molecular Fingerprinting",
    badge: "Primary — Glucose Detection",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    image: "/images/ring-opal-glow.webp",
    how: `A near-infrared laser (~830 nm, 91–110 mW) shines on skin at a 60° off-axis angle. Light penetrates to interstitial fluid and blood vessels. Most photons scatter elastically (same wavelength), but a tiny fraction undergo inelastic "Raman" scattering — their wavelength shifts based on the vibrating chemical bonds of the molecule they hit. Glucose produces a unique spectral peak at ~1125 cm⁻¹.`,
    breakthrough: `MIT's Band-Pass Raman Spectroscopy (BRS) replaces bulky spectrometers with just three narrow band-pass filters on a motorized wheel plus an amplified photodiode. Sidebands act as real-time references to subtract noise from skin, motion, and moisture. Readings take ~36 seconds every 5 minutes.`,
    accuracy: "MARD ~11.7% vs. commercial CGM (comparable to Dexcom/Libre in 4-hour in vivo tests)",
    status: "Shoebox prototype proven → cellphone-sized wearable in human trials → watch/ring-sized target 2026–2027",
    detects: ["Glucose (primary)", "Potentially extensible to other Raman-active molecules", "Hybridizable with PPG for pulse/SpO2/BP"],
    forIkuband: "Our primary glucose detection modality. We are miniaturizing a multi-filter BRS system into the ring's inner surface, using a low-power NIR laser diode and MEMS-actuated filter wheel.",
  },
  {
    id: "swir",
    title: "SWIR Spectroscopy",
    subtitle: "Short-Wave Infrared + Silicon Photonics",
    badge: "Secondary — Multi-Biomarker",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    image: "/images/ring-internal-sensor.jpg",
    how: `A miniaturized laser-based spectrometer built on silicon photonics chips emits multiple wavelengths in the short-wave infrared range (1000–2500 nm). Light penetrates skin; glucose and other molecules absorb specific SWIR bands. Advanced signal processing and AI algorithms isolate glucose signatures from interference by water, fat, and hemoglobin.`,
    breakthrough: `Rockley Photonics demonstrated a full SWIR spectrometer on a photonic integrated circuit (PIC) — small enough for a wristband. The silicon photonics approach allows mass production using existing semiconductor fabs, dramatically reducing cost.`,
    accuracy: "Benchtop validation + early human studies; ring-ready miniaturization in progress",
    status: "Wrist/ring form factor announced; not yet consumer-available for glucose (as of 2026)",
    detects: ["Glucose", "Hydration levels", "Blood alcohol", "Multiple blood biomarkers via absorption"],
    forIkuband: "Complementary to Raman — SWIR gives us broadband absorption data while Raman gives molecular specificity. Sensor fusion between both dramatically improves accuracy.",
  },
  {
    id: "ppg",
    title: "Multi-Wavelength PPG",
    subtitle: "Photoplethysmography — The Foundation",
    badge: "Core — Already in Rings",
    badgeColor: "bg-green-500/10 text-green-400 border-green-500/20",
    image: "/images/ring-sensor-green.jpg",
    how: `Green, red, and infrared LEDs (660/730/850/940 nm) shine into the finger. A photodetector measures backscattered light. Each heartbeat causes blood volume pulses that change light absorption differently for oxygenated vs. deoxygenated hemoglobin. Multi-wavelength differential absorbance plus waveform morphology analysis extracts multiple vital signs simultaneously.`,
    breakthrough: `Modern rings (Oura, Samsung, Ultrahuman) already achieve clinical-grade PPG. By adding more wavelengths (5–7 instead of 2–3) and advanced AI waveform analysis, we can extract significantly more information — including cuffless blood pressure estimates and hemoglobin concentration trends.`,
    accuracy: "SpO2: ±2% (clinical grade) | HR: ±1 bpm | BP: ±5-8 mmHg (cuffless estimate)",
    status: "Production-ready — already shipping in commercial smart rings",
    detects: ["Heart rate & HRV", "SpO2 (blood oxygen)", "Blood pressure (cuffless estimate)", "Respiration rate", "Hemoglobin trends"],
    forIkuband: "Our baseline sensor array. Every IkuBand ring ships with 7-wavelength PPG as the always-on foundation for continuous vitals monitoring and sleep apnea detection with haptic alert.",
  },
  {
    id: "sweat",
    title: "Microfluidic Sweat Sensors",
    subtitle: "Electrochemical Hormone Detection",
    badge: "Attachment — Hormones & Metabolites",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    image: "/images/hormone-tracking-chart.png",
    how: `A flexible patch uses iontophoresis (mild electrical current + carbachol hydrogel) to induce sweat on demand. Microfluidic channels with capillary burst valves collect and route tiny sweat volumes (0.5–3 μL/min) to sensing chambers. Gold nanodendrite electrodes on laser-engraved graphene use competitive immunoassay: target hormones compete with labeled antigens for antibodies. Square-wave voltammetry measures the resulting redox current.`,
    breakthrough: `Caltech's "Stressomic" patch achieved picomolar detection limits (2.73 pg/mL for epinephrine) — covering the full physiological range in sweat. Multiplexed detection of cortisol, epinephrine, and norepinephrine simultaneously, with on-body calibration for pH, temperature, and ionic strength.`,
    accuracy: "Strong correlation to blood/serum levels; real-time readings every 6–10 minutes",
    status: "Validated in human stress tests; biocompatible; research prototype",
    detects: ["Cortisol (stress)", "Epinephrine & norepinephrine", "Glucose & lactate", "Electrolytes (Na⁺, K⁺, Cl⁻)", "pH & temperature"],
    forIkuband: "Available as a Bluetooth-connected patch attachment. Pairs with the ring for complete stress profiling and metabolic tracking. Ideal for athletes and chronic stress management.",
  },
  {
    id: "photoacoustic",
    title: "Photoacoustic Spectroscopy",
    subtitle: "Laser + Ultrasound Hybrid",
    badge: "Research — Deep Tissue Access",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    image: "/images/laser-therapy-device.jpg",
    how: `A pulsed laser fires into tissue, causing rapid thermal expansion. Molecules that absorb the laser wavelength heat up and create pressure waves — essentially ultrasound. A miniature transducer detects these acoustic waves. Because sound scatters far less than light in tissue, photoacoustic sensing can "see" deeper and more clearly than pure optical methods.`,
    breakthrough: `Photoacoustic imaging can resolve glucose concentration changes at specific tissue depths, avoiding the confounding surface effects that plague traditional optical methods. Recent MEMS-based ultrasound transducers have shrunk the detector to chip scale.`,
    accuracy: "Research stage — depth-resolved glucose detection demonstrated in vitro and early in vivo",
    status: "Laboratory prototypes; miniaturization for wearables is an active research area",
    detects: ["Glucose (depth-resolved)", "Hemoglobin & oxygen", "Lipid concentrations", "Tissue composition"],
    forIkuband: "A future sensor modality we are evaluating for Generation 2. The combination of laser excitation + acoustic detection could give us the deepest, most accurate non-invasive glucose readings.",
  },
  {
    id: "oct",
    title: "Optical Coherence Tomography",
    subtitle: "Refractive Index Sensing",
    badge: "Research — Molecular Concentration",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    image: "/images/ring-classic-black.jpg",
    how: `Low-coherence infrared light is split into a reference beam and a sample beam. The sample beam enters the finger, and reflected light from different tissue depths interferes with the reference beam. By measuring these interference patterns, OCT creates a depth profile of the tissue's refractive index — which changes with glucose and other dissolved molecules.`,
    breakthrough: `OCT can detect refractive index changes as small as 10⁻⁴, corresponding to glucose fluctuations of ~20 mg/dL. This is the closest technology to the "laser refraction" concept — directly measuring how dissolved blood contents change the optical properties of tissue.`,
    accuracy: "Research stage — demonstrated sensitivity to glucose-induced refractive index changes",
    status: "Laboratory; miniaturization to wearable form factor is challenging but progressing",
    detects: ["Glucose via refractive index", "Tissue hydration", "Dermal thickness changes", "Blood flow dynamics"],
    forIkuband: "Long-term research target. If miniaturized successfully, OCT would give us the most direct non-invasive measure of blood glucose concentration.",
  },
  {
    id: "mir",
    title: "Mid-Infrared QCL Spectroscopy",
    subtitle: "Quantum Cascade Laser Fingerprinting",
    badge: "Research — Ultimate Specificity",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    image: "/images/ring-tech-white.jpg",
    how: `A quantum cascade laser emits light in the mid-infrared range (8–12 μm) — the "molecular fingerprint" region where glucose and many other biomolecules have their strongest, most unique absorption features. The laser scans across wavelengths; a detector measures how much light the interstitial fluid absorbs at each wavelength, creating a highly specific absorption spectrum.`,
    breakthrough: `DiaMonTech's D-Pocket demonstrated a portable MIR glucose sensor achieving MARD < 15% in clinical trials. The challenge is water absorption in this range, but pulsed photothermal detection (measuring the temperature rise from absorption rather than transmitted light) elegantly avoids this.`,
    accuracy: "MARD < 15% in clinical trials (DiaMonTech); highest molecular specificity of any optical method",
    status: "Portable device demonstrated; wearable miniaturization in progress",
    detects: ["Glucose (highest specificity)", "Ketones", "Lactate", "Urea", "Multiple metabolites"],
    forIkuband: "Highest priority for Generation 2 ring. QCL technology is shrinking rapidly. If we can integrate even a single-wavelength MIR source, glucose specificity improves dramatically.",
  },
  {
    id: "bioimpedance",
    title: "Bioimpedance Spectroscopy",
    subtitle: "Electrical Tissue Characterization",
    badge: "Supplementary — Low Power",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    image: "/images/ring-health-display.jpg",
    how: `Tiny electrodes on the ring's inner surface inject a safe, imperceptible alternating current across the finger at multiple frequencies (1 kHz to 1 MHz). Tissue impedance varies with frequency depending on cell membrane integrity, fluid distribution, and electrolyte concentrations. Sweeping across frequencies creates an impedance spectrum that encodes body composition and hydration data.`,
    breakthrough: `Multi-frequency bioimpedance is already used in body composition scales and medical devices. Miniaturizing it to a ring adds always-on hydration and body composition tracking at virtually zero additional power cost. Combined with optical sensors, it provides orthogonal data that improves ML model accuracy.`,
    accuracy: "Body fat: ±3-5% | Hydration: reliable trend tracking | Electrolytes: research stage",
    status: "Proven technology; ring-sized implementation is straightforward",
    detects: ["Body composition (fat/muscle)", "Hydration status", "Electrolyte balance", "Edema detection", "Skin impedance changes"],
    forIkuband: "Ships in Generation 1. Low power, small footprint, and provides critical calibration data for our optical sensors — skin hydration and tissue composition directly affect light scattering.",
  },
];

export default function ScienceSection() {
  return (
    <section id="science" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-divider mb-20" />

        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-widest uppercase">Encyclopedia</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            The Science of <span className="gradient-text">Light & Diagnostics</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            A comprehensive guide to every sensing modality we are researching, developing, or integrating.
            Each technology represents a different way to peer beneath the skin and decode the body&apos;s chemistry
            — using photons, sound waves, and electrical signals instead of needles.
          </p>
        </div>

        {/* Electromagnetic spectrum overview */}
        <div className="bg-card-bg border border-card-border rounded-2xl p-8 mb-16">
          <h3 className="text-xl font-semibold mb-4">The Electromagnetic Spectrum in Diagnostics</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {[
              { range: "Green 520nm", use: "PPG / HR", color: "bg-green-500" },
              { range: "Red 660nm", use: "SpO2", color: "bg-red-500" },
              { range: "NIR 830nm", use: "Raman", color: "bg-red-800" },
              { range: "NIR 940nm", use: "Deep PPG", color: "bg-red-900" },
              { range: "SWIR 1–2.5μm", use: "Glucose", color: "bg-orange-800" },
              { range: "MIR 8–12μm", use: "Fingerprint", color: "bg-yellow-800" },
              { range: "Multi-freq", use: "Impedance", color: "bg-blue-700" },
            ].map((band) => (
              <div key={band.range} className="text-center p-3 rounded-lg bg-background/50">
                <div className={`w-full h-2 rounded-full ${band.color} mb-2`} />
                <div className="text-xs font-mono text-muted">{band.range}</div>
                <div className="text-xs font-semibold mt-1">{band.use}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology deep dives */}
        <div className="space-y-12">
          {technologies.map((tech, i) => (
            <div
              key={tech.id}
              id={`tech-${tech.id}`}
              className="bg-card-bg border border-card-border rounded-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={tech.image}
                    alt={tech.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card-bg/80 hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card-bg to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-mono text-muted bg-background/80 backdrop-blur-sm px-2 py-1 rounded">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold">{tech.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full border ${tech.badgeColor}`}>
                      {tech.badge}
                    </span>
                  </div>
                  <p className="text-sm text-accent font-mono mb-4">{tech.subtitle}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-accent mb-1 uppercase tracking-wider">How It Works</h4>
                      <p className="text-sm text-muted leading-relaxed">{tech.how}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-accent-2 mb-1 uppercase tracking-wider">Key Breakthrough</h4>
                      <p className="text-sm text-muted leading-relaxed">{tech.breakthrough}</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-1 uppercase tracking-wider">Accuracy</h4>
                        <p className="text-xs text-muted">{tech.accuracy}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-amber-400 mb-1 uppercase tracking-wider">Status</h4>
                        <p className="text-xs text-muted">{tech.status}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">What It Detects</h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.detects.map((d) => (
                          <span key={d} className="text-xs px-2 py-1 rounded bg-white/5 border border-card-border text-muted">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mt-4">
                      <h4 className="text-sm font-semibold text-accent mb-1">IkuBand Integration Plan</h4>
                      <p className="text-sm text-muted">{tech.forIkuband}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
