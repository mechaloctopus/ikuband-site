export default function ManufacturingSection() {
  const components = [
    {
      name: "NIR Laser Diode (830nm)",
      supplier: "OSRAM, Thorlabs, Hamamatsu",
      purpose: "Raman spectroscopy excitation source for glucose detection",
      specs: "830nm, 50-110mW, single-mode, TO-can package (Ø5.6mm)",
      challenge: "Power management and thermal dissipation in ring form factor",
    },
    {
      name: "Band-Pass Optical Filters",
      supplier: "Semrock (IDEX), Alluxa, custom MEMS",
      purpose: "Isolate Raman spectral bands at 950, 1120, 1175 cm⁻¹",
      specs: "3 narrow-band filters, <2nm FWHM, OD6 blocking",
      challenge: "Miniaturizing filter wheel to MEMS-actuated chip-scale assembly",
    },
    {
      name: "Silicon Photomultiplier (SiPM)",
      supplier: "Hamamatsu, ON Semiconductor, Broadcom",
      purpose: "Ultra-sensitive detection of weak Raman-scattered photons",
      specs: "Single-photon sensitivity, 1x1mm active area, low dark count",
      challenge: "Signal-to-noise ratio with ambient light interference",
    },
    {
      name: "Multi-Wavelength LED Array",
      supplier: "ams-OSRAM, Vishay, Marktech",
      purpose: "7-wavelength PPG for SpO2, HR, HRV, blood pressure estimation",
      specs: "520/660/730/810/850/940/1050nm, integrated photodiode",
      challenge: "Optical crosstalk management in compact ring cavity",
    },
    {
      name: "Bioimpedance AFE (Analog Front End)",
      supplier: "Analog Devices (AD5940/MAX30009), Texas Instruments",
      purpose: "Multi-frequency impedance spectroscopy for body composition & hydration",
      specs: "1kHz–1MHz sweep, 4-electrode configuration, <1μA excitation",
      challenge: "Electrode placement geometry on ring inner surface",
    },
    {
      name: "Low-Power MCU + BLE SoC",
      supplier: "Nordic Semiconductor (nRF5340), Ambiq Micro (Apollo4)",
      purpose: "On-ring signal processing, sensor orchestration, BLE 5.3 communication",
      specs: "Arm Cortex-M33, <10μA sleep, hardware DSP, 1MB flash",
      challenge: "Real-time spectral processing within power budget",
    },
    {
      name: "MEMS Accelerometer",
      supplier: "Bosch (BMA400), STMicro (LIS2DW12)",
      purpose: "Motion artifact detection, activity classification, sleep staging",
      specs: "3-axis, ±16g, 12-bit, <2μA in low-power mode",
      challenge: "Motion compensation algorithms for optical sensor readings",
    },
    {
      name: "Haptic Motor (LRA)",
      supplier: "TDK (PowerHap), AAC Technologies, Nidec",
      purpose: "Sleep apnea alerts, notifications, user feedback",
      specs: "Linear resonant actuator, >2G peak acceleration, Ø6mm",
      challenge: "Sufficient vibration intensity to wake sleeping user",
    },
    {
      name: "Rechargeable Battery",
      supplier: "Varta (CoinPower), Renata, custom LiPo",
      purpose: "7+ day operation between charges",
      specs: "3.7V, 50-80mAh, coin-cell or custom curved LiPo",
      challenge: "Balancing capacity vs. ring thickness; Raman laser is power-hungry",
    },
    {
      name: "Ring Shell (Titanium/Ceramic)",
      supplier: "CNC machining (China/Taiwan), MIM (Metal Injection Molding)",
      purpose: "Durable, hypoallergenic, RF-transparent housing",
      specs: "Grade 5 titanium or zirconia ceramic, 2-3mm wall, IP68",
      challenge: "Optical windows for laser/LED without compromising water resistance",
    },
  ];

  return (
    <section id="manufacturing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-divider mb-20" />

        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-widest uppercase">Hardware</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Manufacturing & <span className="gradient-text">Component Sourcing</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Building the IkuBand ring requires sourcing cutting-edge components from the global semiconductor
            and photonics supply chain. Here is every major component, where we source it, and the engineering
            challenges we are solving.
          </p>
        </div>

        {/* Component table */}
        <div className="bg-card-bg border border-card-border rounded-2xl overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border bg-background/50">
                  <th className="text-left p-4 font-semibold text-accent text-xs uppercase tracking-wider">Component</th>
                  <th className="text-left p-4 font-semibold text-accent text-xs uppercase tracking-wider hidden sm:table-cell">Suppliers</th>
                  <th className="text-left p-4 font-semibold text-accent text-xs uppercase tracking-wider hidden lg:table-cell">Key Specs</th>
                  <th className="text-left p-4 font-semibold text-accent text-xs uppercase tracking-wider">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {components.map((c, i) => (
                  <tr key={c.name} className={`border-b border-card-border/50 hover:bg-white/[0.02] transition-colors ${i % 2 === 0 ? "bg-background/20" : ""}`}>
                    <td className="p-4">
                      <div className="font-semibold text-sm">{c.name}</div>
                      <div className="text-[10px] text-muted mt-1 sm:hidden">{c.supplier}</div>
                    </td>
                    <td className="p-4 text-muted text-xs hidden sm:table-cell font-mono">{c.supplier}</td>
                    <td className="p-4 text-muted text-xs hidden lg:table-cell">{c.specs}</td>
                    <td className="p-4 text-muted text-xs">{c.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Manufacturing process */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card-bg border border-card-border rounded-xl p-8">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm font-mono">01</span>
              Assembly Process
            </h3>
            <div className="space-y-3">
              {[
                "Flex PCB fabrication with embedded antenna (4-layer, HDI)",
                "SMT component placement (laser diode, SiPM, LEDs, MCU, AFE)",
                "Wire bonding for optical components to minimize signal loss",
                "Optical alignment and calibration of Raman module",
                "Battery integration and flex-rigid PCB folding",
                "Titanium/ceramic shell CNC machining and finishing",
                "Final assembly: PCB insertion, optical window sealing, epoxy potting",
                "IP68 waterproofing test, optical calibration, burn-in test",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3 text-xs text-muted">
                  <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-[10px] text-accent font-mono mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card-bg border border-card-border rounded-xl p-8">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-accent-2/10 flex items-center justify-center text-accent-2 text-sm font-mono">02</span>
              Quality & Regulatory
            </h3>
            <div className="space-y-3">
              {[
                "ISO 13485 quality management system for medical devices",
                "IEC 60601-1 electrical safety for medical equipment",
                "FDA 510(k) pathway for pulse oximetry and heart rate",
                "CE marking (MDR 2017/745) for EU market access",
                "Laser safety: IEC 60825-1 Class 1 (eye-safe at skin contact)",
                "Biocompatibility testing: ISO 10993 for skin contact materials",
                "FCC / ISED / CE-RED for Bluetooth radio certification",
                "IP68 ingress protection verification (1.5m, 30 min)",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3 text-xs text-muted">
                  <span className="w-5 h-5 rounded-full bg-accent-2/10 flex items-center justify-center shrink-0 text-[10px] text-accent-2 font-mono mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cost estimate */}
        <div className="bg-card-bg border border-card-border rounded-2xl p-8 sm:p-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Estimated BOM Cost (Generation 1, 10K units)</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { item: "Optical Module", cost: "$18–25", pct: "30%" },
              { item: "MCU + BLE SoC", cost: "$6–8", pct: "10%" },
              { item: "Battery + Power", cost: "$5–7", pct: "9%" },
              { item: "Shell + Assembly", cost: "$12–18", pct: "22%" },
              { item: "Other (sensors, haptic, etc.)", cost: "$8–12", pct: "15%" },
            ].map((b) => (
              <div key={b.item} className="text-center p-4 rounded-lg bg-background/50 border border-card-border">
                <div className="text-lg font-bold text-accent">{b.cost}</div>
                <div className="text-xs text-muted mt-1">{b.item}</div>
                <div className="text-[10px] text-muted/50 mt-1">{b.pct} of BOM</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-accent/5 border border-accent/20">
              <span className="text-sm text-muted">Estimated Total BOM:</span>
              <span className="text-xl font-bold gradient-text">$49–70</span>
              <span className="text-sm text-muted">per ring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
