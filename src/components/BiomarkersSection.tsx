export default function BiomarkersSection() {
  const biomarkers = [
    {
      category: "Cardiovascular",
      color: "from-red-500 to-rose-600",
      borderColor: "border-red-500/20",
      markers: [
        { name: "Heart Rate", method: "PPG (green LED)", readiness: "Production", unit: "bpm", icon: "♥" },
        { name: "Heart Rate Variability", method: "PPG waveform analysis", readiness: "Production", unit: "ms (RMSSD)", icon: "〰" },
        { name: "Blood Oxygen (SpO2)", method: "Dual-wavelength PPG (red/IR)", readiness: "Production", unit: "%", icon: "O₂" },
        { name: "Blood Pressure", method: "Pulse transit time + AI model", readiness: "Near-term", unit: "mmHg", icon: "⬆" },
        { name: "Pulse Wave Velocity", method: "Multi-site PPG timing", readiness: "Near-term", unit: "m/s", icon: "〜" },
      ],
    },
    {
      category: "Metabolic",
      color: "from-cyan-500 to-blue-600",
      borderColor: "border-cyan-500/20",
      markers: [
        { name: "Blood Glucose", method: "Raman spectroscopy + SWIR", readiness: "Research", unit: "mg/dL", icon: "◉" },
        { name: "Ketones (BHB)", method: "MIR absorption + sweat sensor", readiness: "Research", unit: "mmol/L", icon: "K" },
        { name: "Lactate", method: "Sweat electrochemical sensor", readiness: "Prototype", unit: "mmol/L", icon: "L" },
        { name: "Blood Alcohol", method: "SWIR absorption spectroscopy", readiness: "Research", unit: "BAC %", icon: "◇" },
        { name: "Hydration Status", method: "Bioimpedance + SWIR", readiness: "Near-term", unit: "index", icon: "💧" },
      ],
    },
    {
      category: "Hormonal & Stress",
      color: "from-purple-500 to-violet-600",
      borderColor: "border-purple-500/20",
      markers: [
        { name: "Cortisol", method: "Sweat immunoassay patch", readiness: "Prototype", unit: "ng/mL", icon: "C" },
        { name: "Epinephrine", method: "Sweat electrochemical (AuND-LEG)", readiness: "Prototype", unit: "pg/mL", icon: "E" },
        { name: "Norepinephrine", method: "Sweat electrochemical (AuND-LEG)", readiness: "Prototype", unit: "pg/mL", icon: "N" },
        { name: "Melatonin trends", method: "HRV + skin temperature proxy", readiness: "Research", unit: "trend", icon: "☽" },
        { name: "Estradiol / LH", method: "Sweat aptamer-FET sensor", readiness: "Research", unit: "pg/mL", icon: "♀" },
      ],
    },
    {
      category: "Respiratory & Sleep",
      color: "from-emerald-500 to-teal-600",
      borderColor: "border-emerald-500/20",
      markers: [
        { name: "Respiration Rate", method: "PPG-derived respiratory modulation", readiness: "Production", unit: "breaths/min", icon: "↕" },
        { name: "Sleep Stages", method: "HRV + accel + temp fusion", readiness: "Production", unit: "stage", icon: "☾" },
        { name: "Sleep Apnea Events", method: "SpO2 desaturation + accel", readiness: "Production", unit: "events/hr", icon: "⚠" },
        { name: "Snoring Detection", method: "Accelerometer vibration analysis", readiness: "Near-term", unit: "events", icon: "≋" },
        { name: "Oxygen Desaturation Index", method: "Continuous SpO2 trending", readiness: "Production", unit: "ODI", icon: "↓" },
      ],
    },
    {
      category: "Body Composition & Inflammation",
      color: "from-amber-500 to-orange-600",
      borderColor: "border-amber-500/20",
      markers: [
        { name: "Body Fat %", method: "Multi-frequency bioimpedance", readiness: "Near-term", unit: "%", icon: "◫" },
        { name: "Skin Temperature", method: "NTC thermistor (ring surface)", readiness: "Production", unit: "°C", icon: "🌡" },
        { name: "Inflammatory Markers (CRP)", method: "Multi-wavelength optical + ML", readiness: "Research", unit: "mg/L", icon: "!" },
        { name: "Uric Acid", method: "Sweat enzymatic sensor", readiness: "Research", unit: "mg/dL", icon: "U" },
        { name: "Lipid Profile Trends", method: "SWIR + Raman fusion + ML", readiness: "Research", unit: "trend", icon: "≡" },
      ],
    },
  ];

  const readinessColors: Record<string, string> = {
    Production: "bg-green-500/10 text-green-400",
    "Near-term": "bg-cyan-500/10 text-cyan-400",
    Prototype: "bg-amber-500/10 text-amber-400",
    Research: "bg-purple-500/10 text-purple-400",
  };

  return (
    <section id="biomarkers" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-divider mb-20" />

        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-widest uppercase">Biomarker Atlas</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            What We <span className="gradient-text">Detect</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Every biomarker IkuBand targets, the sensing method behind it, and its development readiness.
            Our goal: the most comprehensive non-invasive health profile ever achieved from a single wearable.
          </p>
        </div>

        {/* Readiness legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(readinessColors).map(([label, cls]) => (
            <div key={label} className="flex items-center gap-2">
              <span className={`text-xs px-2 py-1 rounded ${cls}`}>{label}</span>
            </div>
          ))}
        </div>

        {/* Biomarker categories */}
        <div className="space-y-8">
          {biomarkers.map((cat) => (
            <div key={cat.category} className="bg-card-bg border border-card-border rounded-2xl overflow-hidden">
              <div className={`h-1 bg-gradient-to-r ${cat.color}`} />
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-6">{cat.category}</h3>
                <div className="grid gap-3">
                  {cat.markers.map((m) => (
                    <div
                      key={m.name}
                      className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 rounded-lg bg-background/50 hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-3 sm:w-64 shrink-0">
                        <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-mono">
                          {m.icon}
                        </span>
                        <span className="font-medium text-sm">{m.name}</span>
                      </div>
                      <span className="text-xs text-muted flex-1 font-mono">{m.method}</span>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs text-muted/60 w-20 text-right font-mono">{m.unit}</span>
                        <span className={`text-xs px-2 py-1 rounded whitespace-nowrap ${readinessColors[m.readiness]}`}>
                          {m.readiness}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stat */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-card-bg border border-card-border">
            <div className="text-3xl font-bold gradient-text">25+</div>
            <div className="text-left">
              <div className="text-sm font-semibold">Biomarkers Targeted</div>
              <div className="text-xs text-muted">Across 5 physiological categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
