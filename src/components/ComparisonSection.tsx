"use client";
import { Fragment } from "react";

const competitors = [
  {
    name: "Oura Ring Gen 3",
    price: "$299–349",
    subscription: "$5.99/mo",
    tagline: "Sleep & readiness pioneer",
    color: "from-slate-400 to-slate-600",
    borderColor: "border-slate-500/30",
    textColor: "text-slate-400",
    strengths: [
      "Best-in-class sleep staging algorithm",
      "Excellent HRV & readiness scoring",
      "7-day battery life",
      "Sleek titanium design",
    ],
    limitations: [
      "No real-time SpO2 display — only overnight average",
      "No blood pressure estimation",
      "No glucose or metabolic monitoring",
      "No haptic alert for O2 desaturation",
      "No modular attachments or expansion",
      "No compound/molecule detection",
    ],
  },
  {
    name: "Samsung Galaxy Ring",
    price: "$399",
    subscription: "Free (Samsung Health)",
    tagline: "Galaxy ecosystem integration",
    color: "from-blue-400 to-blue-600",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400",
    strengths: [
      "Tight integration with Galaxy phones/watches",
      "Skin temperature tracking",
      "Activity & workout auto-detection",
      "Lightweight titanium build (2.3g)",
    ],
    limitations: [
      "No continuous SpO2 monitoring",
      "No blood pressure (only on Galaxy Watch)",
      "No glucose or metabolic sensing",
      "No sleep apnea vibration alert",
      "Samsung ecosystem lock-in",
      "No molecular or compound detection",
    ],
  },
  {
    name: "Ultrahuman Ring Air",
    price: "$349",
    subscription: "Free",
    tagline: "Metabolic fitness focus",
    color: "from-orange-400 to-orange-600",
    borderColor: "border-orange-500/30",
    textColor: "text-orange-400",
    strengths: [
      "PowerIntelligence metabolic scoring",
      "Pairs with Ultrahuman M1 CGM for glucose",
      "Skin temperature & HRV",
      "No subscription required",
    ],
    limitations: [
      "No built-in SpO2 sensor",
      "Glucose only via separate CGM patch (invasive)",
      "No blood pressure estimation",
      "No haptic alert system",
      "CGM pairing is one-way data (no calibration loop)",
      "No hormone or compound detection",
    ],
  },
  {
    name: "Wellue O2Ring",
    price: "$149–179",
    subscription: "Free",
    tagline: "Dedicated SpO2 & sleep apnea monitor",
    color: "from-teal-400 to-teal-600",
    borderColor: "border-teal-500/30",
    textColor: "text-teal-400",
    strengths: [
      "Continuous SpO2 with 1-second resolution",
      "Vibration alert when O2 drops below threshold",
      "FDA-cleared pulse oximeter",
      "Detailed overnight oxygen report (ODI)",
    ],
    limitations: [
      "Bulky form factor (not stylish for daily wear)",
      "Only monitors SpO2 + pulse — no HRV, sleep staging, or temp",
      "No glucose, metabolic, or hormone tracking",
      "No blood pressure",
      "No companion ecosystem or attachments",
      "No AI/ML health insights",
    ],
  },
];

// Feature matrix: rows are features, columns are rings
const featureMatrix: {
  category: string;
  features: {
    name: string;
    oura: string;
    samsung: string;
    ultrahuman: string;
    wellue: string;
    ikuband: string;
    ikuType: "live" | "near" | "research" | "attachment";
  }[];
}[] = [
  {
    category: "Vital Signs",
    features: [
      { name: "Heart Rate (continuous)", oura: "yes", samsung: "yes", ultrahuman: "yes", wellue: "yes", ikuband: "yes", ikuType: "live" },
      { name: "Heart Rate Variability", oura: "yes", samsung: "yes", ultrahuman: "yes", wellue: "no", ikuband: "yes", ikuType: "live" },
      { name: "SpO2 (Blood Oxygen)", oura: "overnight", samsung: "spot", ultrahuman: "no", wellue: "continuous", ikuband: "continuous", ikuType: "live" },
      { name: "Blood Pressure (Cuffless)", oura: "no", samsung: "no", ultrahuman: "no", wellue: "no", ikuband: "yes", ikuType: "near" },
      { name: "Respiration Rate", oura: "yes", samsung: "yes", ultrahuman: "yes", wellue: "no", ikuband: "yes", ikuType: "live" },
      { name: "Skin Temperature", oura: "yes", samsung: "yes", ultrahuman: "yes", wellue: "no", ikuband: "yes", ikuType: "live" },
    ],
  },
  {
    category: "Metabolic & Compounds",
    features: [
      { name: "Blood Glucose (non-invasive)", oura: "no", samsung: "no", ultrahuman: "no", wellue: "no", ikuband: "Raman + SWIR", ikuType: "research" },
      { name: "Blood Glucose (CGM bridge)", oura: "no", samsung: "no", ultrahuman: "CGM pair", wellue: "no", ikuband: "yes", ikuType: "attachment" },
      { name: "Ketone Detection", oura: "no", samsung: "no", ultrahuman: "no", wellue: "no", ikuband: "attachment", ikuType: "attachment" },
      { name: "Lactate", oura: "no", samsung: "no", ultrahuman: "no", wellue: "no", ikuband: "sweat patch", ikuType: "attachment" },
      { name: "Blood Alcohol", oura: "no", samsung: "no", ultrahuman: "no", wellue: "no", ikuband: "SWIR", ikuType: "research" },
      { name: "Hydration Status", oura: "no", samsung: "no", ultrahuman: "no", wellue: "no", ikuband: "impedance", ikuType: "near" },
    ],
  },
  {
    category: "Hormones & Biomarkers",
    features: [
      { name: "Cortisol (stress)", oura: "no", samsung: "no", ultrahuman: "no", wellue: "no", ikuband: "sweat patch", ikuType: "attachment" },
      { name: "Epinephrine / Norepinephrine", oura: "no", samsung: "no", ultrahuman: "no", wellue: "no", ikuband: "sweat patch", ikuType: "attachment" },
      { name: "Lipid Profile Trends", oura: "no", samsung: "no", ultrahuman: "no", wellue: "no", ikuband: "SWIR + ML", ikuType: "research" },
      { name: "Inflammatory Markers (CRP)", oura: "no", samsung: "no", ultrahuman: "no", wellue: "no", ikuband: "optical + ML", ikuType: "research" },
      { name: "Body Composition", oura: "no", samsung: "no", ultrahuman: "no", wellue: "no", ikuband: "impedance", ikuType: "near" },
    ],
  },
  {
    category: "Sleep & Safety",
    features: [
      { name: "Sleep Stage Tracking", oura: "excellent", samsung: "good", ultrahuman: "good", wellue: "no", ikuband: "excellent", ikuType: "live" },
      { name: "Sleep Apnea Detection", oura: "basic", samsung: "no", ultrahuman: "no", wellue: "yes (ODI)", ikuband: "yes (ODI)", ikuType: "live" },
      { name: "O2 Desaturation Vibration Alert", oura: "no", samsung: "no", ultrahuman: "no", wellue: "yes", ikuband: "yes (stronger)", ikuType: "live" },
      { name: "Configurable Alert Thresholds", oura: "no", samsung: "no", ultrahuman: "no", wellue: "yes", ikuband: "yes", ikuType: "live" },
      { name: "Morning Sleep Report + ODI", oura: "partial", samsung: "basic", ultrahuman: "basic", wellue: "yes", ikuband: "comprehensive", ikuType: "live" },
    ],
  },
  {
    category: "Platform & Intelligence",
    features: [
      { name: "On-device ML Processing", oura: "no", samsung: "no", ultrahuman: "no", wellue: "no", ikuband: "yes", ikuType: "live" },
      { name: "Multi-sensor Fusion AI", oura: "no", samsung: "no", ultrahuman: "no", wellue: "no", ikuband: "yes", ikuType: "live" },
      { name: "Modular Bluetooth Attachments", oura: "no", samsung: "no", ultrahuman: "limited", wellue: "no", ikuband: "full ecosystem", ikuType: "live" },
      { name: "Dedicated Medical Companion Device", oura: "no", samsung: "no", ultrahuman: "no", wellue: "no", ikuband: "yes", ikuType: "near" },
      { name: "Doctor / Clinician Data Sharing", oura: "export", samsung: "Samsung Health", ultrahuman: "export", wellue: "export", ikuband: "built-in portal", ikuType: "near" },
      { name: "Personalized Calibration (ML)", oura: "no", samsung: "no", ultrahuman: "no", wellue: "no", ikuband: "yes", ikuType: "live" },
    ],
  },
];

const cellIcon = (val: string) => {
  if (val === "no") return <span className="text-red-400/60 text-lg">—</span>;
  if (val === "yes") return <span className="text-green-400">&#10003;</span>;
  // anything else is a descriptive value
  return <span className="text-cyan-300 font-medium">{val}</span>;
};

const ikuBadgeColor: Record<string, string> = {
  live: "bg-green-500/15 text-green-400 border-green-500/25",
  near: "bg-cyan-500/15 text-cyan-400 border-cyan-500/25",
  research: "bg-purple-500/15 text-purple-400 border-purple-500/25",
  attachment: "bg-amber-500/15 text-amber-400 border-amber-500/25",
};
const ikuBadgeLabel: Record<string, string> = {
  live: "Gen 1",
  near: "Near-term",
  research: "R&D",
  attachment: "Attachment",
};

export default function ComparisonSection() {
  return (
    <section id="comparison" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-divider mb-20" />

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-widest uppercase">Competitive Landscape</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Smart Rings Today vs. <span className="gradient-text">IkuBand Tomorrow</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            Today&apos;s best smart rings are impressive — but they only scratch the surface.
            They track your heart rate and sleep. IkuBand aims to read your <em className="text-accent not-italic font-medium">blood chemistry</em>.
            Here&apos;s exactly what&apos;s out there, what each ring can and can&apos;t do, and how IkuBand
            plans to leapfrog the entire category.
          </p>
        </div>

        {/* ─── Competitor Profile Cards ─── */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {competitors.map((c) => (
            <div
              key={c.name}
              className={`bg-card-bg border ${c.borderColor} rounded-2xl p-6 sm:p-8 card-hover`}
            >
              {/* Header row */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold">{c.name}</h3>
                  <p className="text-xs text-muted">{c.tagline}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className={`text-lg font-bold ${c.textColor}`}>{c.price}</div>
                  <div className="text-[10px] text-muted">{c.subscription}</div>
                </div>
              </div>

              {/* Color accent bar */}
              <div className={`h-0.5 rounded-full bg-gradient-to-r ${c.color} mb-5`} />

              {/* Two columns: what it does / what it doesn't */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-3">
                    What It Does Well
                  </h4>
                  <div className="space-y-2">
                    {c.strengths.map((s) => (
                      <div key={s} className="flex items-start gap-2 text-xs text-muted">
                        <span className="text-green-400 mt-0.5 shrink-0">&#10003;</span>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-red-400/80 uppercase tracking-wider mb-3">
                    What It Can&apos;t Do
                  </h4>
                  <div className="space-y-2">
                    {c.limitations.map((l) => (
                      <div key={l} className="flex items-start gap-2 text-xs text-muted">
                        <span className="text-red-400/60 mt-0.5 shrink-0">&#10007;</span>
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── Visual "Capability Radar" Bar Chart ─── */}
        <div className="bg-card-bg border border-card-border rounded-2xl p-8 sm:p-12 mb-20">
          <h3 className="text-2xl font-bold text-center mb-2">
            Capability <span className="gradient-text">Comparison</span>
          </h3>
          <p className="text-sm text-muted text-center mb-10 max-w-xl mx-auto">
            How many health dimensions can each ring cover? IkuBand&apos;s multi-modal sensor
            architecture and attachment ecosystem unlocks categories no other ring even attempts.
          </p>

          {/* Horizontal bar chart */}
          <div className="space-y-6">
            {[
              {
                label: "Oura Ring Gen 3",
                categories: 4,
                maxCat: 12,
                items: "HR, HRV, SpO2 (overnight), Temp",
                color: "from-slate-500 to-slate-400",
                textColor: "text-slate-400",
              },
              {
                label: "Samsung Galaxy Ring",
                categories: 4,
                maxCat: 12,
                items: "HR, HRV, Temp, Activity",
                color: "from-blue-600 to-blue-400",
                textColor: "text-blue-400",
              },
              {
                label: "Ultrahuman Ring Air",
                categories: 4,
                maxCat: 12,
                items: "HR, HRV, Temp, Movement",
                color: "from-orange-600 to-orange-400",
                textColor: "text-orange-400",
              },
              {
                label: "Wellue O2Ring",
                categories: 3,
                maxCat: 12,
                items: "SpO2, HR, Vibration Alert",
                color: "from-teal-600 to-teal-400",
                textColor: "text-teal-400",
              },
              {
                label: "IkuBand (Gen 1 Ring Only)",
                categories: 8,
                maxCat: 12,
                items: "HR, HRV, SpO2, BP, Temp, Impedance, Sleep Apnea Alert, Raman",
                color: "from-cyan-500 to-cyan-300",
                textColor: "text-cyan-300",
              },
              {
                label: "IkuBand + Attachments (Full Suite)",
                categories: 12,
                maxCat: 12,
                items: "All above + Glucose, Ketones, Cortisol, Hormones, Lactate, Lipids…",
                color: "from-cyan-400 via-purple-400 to-purple-500",
                textColor: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400",
              },
            ].map((bar) => (
              <div key={bar.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-sm font-semibold ${bar.textColor}`}>{bar.label}</span>
                  <span className="text-xs font-mono text-muted">{bar.categories} / {bar.maxCat}</span>
                </div>
                <div className="relative h-8 bg-background/60 rounded-lg overflow-hidden border border-card-border">
                  <div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${bar.color} rounded-lg transition-all duration-1000`}
                    style={{ width: `${(bar.categories / bar.maxCat) * 100}%` }}
                  />
                  <div className="absolute inset-0 flex items-center px-3">
                    <span className="text-[10px] text-white/80 font-mono truncate">{bar.items}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Legend for bar chart */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 pt-6 border-t border-card-border">
            <div className="flex items-center gap-2 text-xs text-muted">
              <div className="w-3 h-3 rounded bg-gradient-to-r from-slate-500 to-slate-400" /> Oura
            </div>
            <div className="flex items-center gap-2 text-xs text-muted">
              <div className="w-3 h-3 rounded bg-gradient-to-r from-blue-600 to-blue-400" /> Samsung
            </div>
            <div className="flex items-center gap-2 text-xs text-muted">
              <div className="w-3 h-3 rounded bg-gradient-to-r from-orange-600 to-orange-400" /> Ultrahuman
            </div>
            <div className="flex items-center gap-2 text-xs text-muted">
              <div className="w-3 h-3 rounded bg-gradient-to-r from-teal-600 to-teal-400" /> Wellue
            </div>
            <div className="flex items-center gap-2 text-xs text-muted">
              <div className="w-3 h-3 rounded bg-gradient-to-r from-cyan-400 via-purple-400 to-purple-500" /> IkuBand Full Suite
            </div>
          </div>
        </div>

        {/* ─── Full Feature Matrix Table ─── */}
        <div className="bg-card-bg border border-card-border rounded-2xl overflow-hidden mb-16">
          <div className="p-6 sm:p-8 pb-0">
            <h3 className="text-2xl font-bold mb-2">
              Feature-by-Feature <span className="gradient-text">Matrix</span>
            </h3>
            <p className="text-sm text-muted mb-6">
              Every capability compared across all five rings. Green check = available.
              Dash = not available. Descriptive text = how IkuBand achieves it.
            </p>
            {/* IkuBand status legend */}
            <div className="flex flex-wrap gap-3 mb-6">
              {Object.entries(ikuBadgeLabel).map(([key, label]) => (
                <span key={key} className={`text-[10px] px-2 py-1 rounded-full border ${ikuBadgeColor[key]}`}>
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[800px]">
              <thead>
                <tr className="border-b border-card-border bg-background/50">
                  <th className="text-left p-4 font-semibold text-xs uppercase tracking-wider text-muted w-56">Feature</th>
                  <th className="text-center p-4 font-semibold text-xs uppercase tracking-wider text-slate-400 w-28">Oura</th>
                  <th className="text-center p-4 font-semibold text-xs uppercase tracking-wider text-blue-400 w-28">Samsung</th>
                  <th className="text-center p-4 font-semibold text-xs uppercase tracking-wider text-orange-400 w-28">Ultrahuman</th>
                  <th className="text-center p-4 font-semibold text-xs uppercase tracking-wider text-teal-400 w-28">Wellue</th>
                  <th className="text-center p-4 font-semibold text-xs uppercase tracking-wider w-40">
                    <span className="gradient-text font-bold">IkuBand</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {featureMatrix.map((cat) => (
                  <Fragment key={cat.category}>
                    {/* Category header */}
                    <tr className="bg-white/[0.02]">
                      <td colSpan={6} className="px-4 py-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-accent">{cat.category}</span>
                      </td>
                    </tr>
                    {cat.features.map((f) => (
                      <tr key={f.name} className="border-b border-card-border/30 hover:bg-white/[0.02] transition-colors">
                        <td className="px-4 py-3 text-xs font-medium">{f.name}</td>
                        <td className="px-4 py-3 text-center text-xs">{cellIcon(f.oura)}</td>
                        <td className="px-4 py-3 text-center text-xs">{cellIcon(f.samsung)}</td>
                        <td className="px-4 py-3 text-center text-xs">{cellIcon(f.ultrahuman)}</td>
                        <td className="px-4 py-3 text-center text-xs">{cellIcon(f.wellue)}</td>
                        <td className="px-4 py-3 text-center">
                          <div className="flex flex-col items-center gap-1">
                            <span className="text-xs font-medium text-cyan-300">{f.ikuband}</span>
                            <span className={`text-[9px] px-1.5 py-0.5 rounded-full border ${ikuBadgeColor[f.ikuType]}`}>
                              {ikuBadgeLabel[f.ikuType]}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ─── The IkuBand Difference: Summary ─── */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-accent-2/10" />
          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                The <span className="gradient-text">IkuBand Difference</span>
              </h3>
              <p className="text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
                Every smart ring on the market today does one thing: measures light reflecting off your blood
                to estimate heart rate and oxygen. IkuBand starts there — then goes exponentially further.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {[
                  {
                    title: "Beyond Vital Signs → Blood Chemistry",
                    desc: "Other rings stop at HR, HRV, SpO2, and temperature. IkuBand uses Raman spectroscopy and SWIR to probe actual molecular composition — glucose, ketones, lactate, and potentially lipids.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                      </svg>
                    ),
                  },
                  {
                    title: "Sleep Apnea Lifesaver",
                    desc: "Wellue proved vibration alerts save lives. IkuBand combines that with full sleep staging, HRV analysis, and a high-torque haptic motor strong enough to wake you from deep sleep — plus clinical-grade ODI reporting.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                      </svg>
                    ),
                  },
                  {
                    title: "Modular Attachment Ecosystem",
                    desc: "No other ring has Bluetooth attachment ports. IkuBand pairs with CGM patches, hormone sweat sensors, ketone modules — each extending the diagnostic suite without making the ring bigger.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    ),
                  },
                  {
                    title: "7 Sensor Modalities in One Ring",
                    desc: "PPG (7 wavelengths), Raman laser, bioimpedance electrodes, NTC thermistor, 3-axis accelerometer, haptic motor, BLE radio. No other ring packs more than 3 sensor types.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    ),
                  },
                  {
                    title: "AI That Gets Smarter Per User",
                    desc: "Transfer learning personalizes to your skin, your metabolism, your baseline. Other rings use generic population models. IkuBand's ML recalibrates to YOU within the first week of wear.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Dedicated Medical Companion",
                    desc: "Not an app on your phone — a purpose-built medical data device with cellular, on-device ML inference, doctor portal, and emergency SOS. Your health deserves its own hardware.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>
                    ),
                  },
                ].map((diff) => (
                  <div key={diff.title} className="bg-card-bg border border-card-border rounded-xl p-6 card-hover">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                      {diff.icon}
                    </div>
                    <h4 className="text-sm font-bold mb-2">{diff.title}</h4>
                    <p className="text-xs text-muted leading-relaxed">{diff.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
