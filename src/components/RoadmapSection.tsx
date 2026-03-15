export default function RoadmapSection() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      timeline: "2025 – 2026",
      status: "active",
      color: "border-cyan-500",
      glowColor: "bg-cyan-500",
      items: [
        "Establish IkuBand Institute research foundation",
        "Assemble core team: photonics engineers, ML researchers, biomedical scientists",
        "License/acquire Raman spectroscopy IP and prototype hardware",
        "Build first benchtop prototype combining PPG + Raman + bioimpedance",
        "Begin IRB-approved human subject studies (N=50) for sensor validation",
        "Develop ML pipeline v1: data collection, preprocessing, baseline models",
        "Design Generation 1 ring form factor (CAD + thermal simulation)",
        "Secure seed funding ($2-5M) for prototype development",
        "Launch website and research publication program",
      ],
    },
    {
      phase: "Phase 2",
      title: "Prototype Ring",
      timeline: "2026 – 2027",
      status: "upcoming",
      color: "border-purple-500",
      glowColor: "bg-purple-500",
      items: [
        "Miniaturize Raman module from benchtop to ring-compatible PCB",
        "First functional ring prototype (Gen 1 Alpha) — PPG + bioimpedance + temp",
        "Integrate MEMS-actuated band-pass filter for Raman (replacing motor wheel)",
        "Expand human studies (N=500) with paired CGM and venous blood reference",
        "ML model v2: personalized calibration, transfer learning, sensor fusion",
        "Sleep apnea detection validation study (vs. polysomnography gold standard)",
        "Haptic alert system testing and optimization for sleep waking",
        "Bluetooth attachment protocol development (CGM patch integration)",
        "Series A funding ($10-20M) for manufacturing scale-up",
      ],
    },
    {
      phase: "Phase 3",
      title: "Clinical Validation",
      timeline: "2027 – 2028",
      status: "future",
      color: "border-amber-500",
      glowColor: "bg-amber-500",
      items: [
        "Gen 1 Beta ring: full sensor suite in production-intent housing",
        "Multi-site clinical trial (N=2000+) for FDA 510(k) submission",
        "Regulatory filings: FDA (SpO2, HR), CE-MDR, Health Canada",
        "Companion device (medical hub) hardware and software development",
        "Sweat sensor attachment prototype and initial hormone validation",
        "ML model v3: population-scale training, federated learning architecture",
        "Manufacturing pilot line: 1,000 unit production run for clinical use",
        "Partnership discussions with healthcare systems and insurers",
        "Pre-orders open for early adopters and clinical partners",
      ],
    },
    {
      phase: "Phase 4",
      title: "Market Launch",
      timeline: "2028 – 2029",
      status: "future",
      color: "border-green-500",
      glowColor: "bg-green-500",
      items: [
        "FDA clearance for SpO2/HR monitoring with sleep apnea alerting",
        "Gen 1 commercial launch: ring + companion app + cloud platform",
        "Manufacturing scale-up: 10K → 100K units (contract manufacturing)",
        "Glucose monitoring as 'wellness estimate' (non-medical claim initially)",
        "Attachment ecosystem launch: CGM bridge, ketone module",
        "Series B / strategic investment ($50M+) for global expansion",
        "Begin Gen 2 development: SWIR integration, photoacoustic module",
        "Research publications establishing IkuBand as thought leader",
        "International market expansion (EU, Japan, Australia)",
      ],
    },
    {
      phase: "Phase 5",
      title: "Medical Grade",
      timeline: "2029 – 2031",
      status: "future",
      color: "border-rose-500",
      glowColor: "bg-rose-500",
      items: [
        "FDA De Novo / PMA pathway for non-invasive glucose monitoring",
        "Gen 2 ring: Raman + SWIR + PPG + bioimpedance — full multi-modal",
        "Hormone tracking via integrated sweat sensor (miniaturized into ring band)",
        "Medical-grade companion device: dedicated health OS, doctor portal, EHR integration",
        "Population-scale ML: millions of users, continuous model refinement",
        "Lipid profile, inflammatory markers, and comprehensive metabolic panel",
        "Insurance reimbursement negotiations (remote patient monitoring codes)",
        "The ultimate goal: a complete blood panel from your finger, every day",
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-divider mb-20" />

        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-widest uppercase">Timeline</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Development <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            From research foundation to medical-grade wearable diagnostics — our phased approach
            to building the most advanced smart ring ever conceived.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-rose-500 hidden sm:block" />

          <div className="space-y-12">
            {phases.map((p, i) => (
              <div key={p.phase} className={`relative flex flex-col lg:flex-row gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-card-border hidden sm:flex items-center justify-center z-10">
                  <div className={`w-2 h-2 rounded-full ${p.glowColor} ${p.status === "active" ? "animate-pulse" : ""}`} />
                </div>

                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"} sm:pl-12 lg:pl-0`}>
                  <div className={`bg-card-bg border ${p.color}/30 rounded-2xl p-8 ${p.status === "active" ? "glow-cyan" : ""}`}>
                    <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? "lg:justify-end" : ""}`}>
                      <span className="text-xs font-mono text-muted bg-background/50 px-2 py-1 rounded">{p.timeline}</span>
                      <span className={`text-sm font-bold ${p.color.replace("border-", "text-")}`}>{p.phase}</span>
                      {p.status === "active" && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{p.title}</h3>
                    <div className="space-y-2">
                      {p.items.map((item, j) => (
                        <div
                          key={j}
                          className={`flex items-start gap-2 text-xs text-muted ${i % 2 === 0 ? "lg:flex-row-reverse lg:text-right" : ""}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${p.glowColor} mt-1.5 shrink-0`} />
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for other side */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
