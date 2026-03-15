import Image from "@/components/BaseImage";

export default function MLSection() {
  return (
    <section id="ml" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-divider mb-20" />

        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-widest uppercase">Intelligence Layer</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Machine Learning & <span className="gradient-text">AI Engine</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Raw photons and electrical signals mean nothing without interpretation.
            Our ML pipeline transforms noisy multi-modal sensor data into clinically meaningful biomarker readings.
          </p>
        </div>

        {/* Pipeline visualization */}
        <div className="bg-card-bg border border-card-border rounded-2xl p-8 sm:p-12 mb-12">
          <h3 className="text-xl font-semibold mb-8 text-center">The IkuBand ML Pipeline</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                title: "Raw Acquisition",
                desc: "Multi-wavelength PPG waveforms, Raman spectra, impedance sweeps, accelerometer, temperature — all sampled continuously.",
                color: "text-cyan-400",
              },
              {
                step: "02",
                title: "Signal Processing",
                desc: "Motion artifact removal, baseline correction, noise filtering (Savitzky-Golay, wavelet denoising), bandpass extraction.",
                color: "text-blue-400",
              },
              {
                step: "03",
                title: "Feature Extraction",
                desc: "Spectral peaks, absorption ratios, waveform morphology, HRV metrics, impedance Cole-Cole parameters, temporal patterns.",
                color: "text-purple-400",
              },
              {
                step: "04",
                title: "Sensor Fusion",
                desc: "Multi-modal deep learning: CNN for spectral data + LSTM for time series + transformer for cross-sensor attention. Bayesian uncertainty estimation.",
                color: "text-pink-400",
              },
              {
                step: "05",
                title: "Biomarker Output",
                desc: "Calibrated glucose, SpO2, HR, BP, stress index, sleep stage — with confidence intervals and anomaly alerts.",
                color: "text-green-400",
              },
            ].map((s, i) => (
              <div key={s.step} className="relative">
                <div className="bg-background/50 rounded-xl p-5 h-full border border-card-border">
                  <div className={`text-2xl font-bold font-mono mb-2 ${s.color}`}>{s.step}</div>
                  <h4 className="font-semibold text-sm mb-2">{s.title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{s.desc}</p>
                </div>
                {i < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-muted z-10">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key ML approaches */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card-bg border border-card-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Personalized Calibration</h3>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Every person&apos;s skin is different — thickness, melanin content, subcutaneous fat, hydration levels.
              A one-size-fits-all model fails. IkuBand uses transfer learning: a large base model trained on
              diverse populations is fine-tuned to each user during a short calibration period (paired with a
              reference CGM or blood draw).
            </p>
            <div className="space-y-2">
              {["Skin tone adaptive calibration", "Personal glucose response curves", "Activity-aware signal correction", "Continuous self-recalibration via sweat reference"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-xs text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card-bg border border-card-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent-2/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Multi-Modal Sensor Fusion</h3>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">
              No single sensor modality can reliably measure glucose or hormones through skin alone.
              The breakthrough comes from combining them: Raman spectroscopy gives molecular specificity,
              PPG gives hemodynamic context, bioimpedance gives tissue state, temperature gives metabolic
              rate. Together, the ML model has far more signal than any sensor alone.
            </p>
            <div className="space-y-2">
              {["Cross-attention transformer for inter-sensor correlations", "Uncertainty-aware ensemble predictions", "Anomaly detection for sensor degradation", "Federated learning across user base (privacy-preserving)"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-xs text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-2 shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Training data strategy */}
        <div className="bg-card-bg border border-card-border rounded-2xl p-8 sm:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Training Data Strategy</h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                ML models are only as good as their training data. IkuBand Institute is building one of
                the largest paired datasets in wearable health — matching our ring sensor outputs against
                gold-standard references (venous blood draws, medical CGMs, polysomnography) across diverse
                populations.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Phase 1: Lab Studies", desc: "500 subjects, controlled conditions, paired with medical-grade references" },
                  { label: "Phase 2: Free-Living", desc: "5,000 subjects, real-world conditions, 30-day continuous wear with CGM overlay" },
                  { label: "Phase 3: Population Scale", desc: "100,000+ users, federated learning, continuous model improvement" },
                ].map((phase) => (
                  <div key={phase.label} className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold">{phase.label}</div>
                      <div className="text-xs text-muted">{phase.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/images/big-data-neural.jpg"
                alt="Neural network data processing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card-bg to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xs font-mono text-accent">
                  Billions of sensor readings → Molecular-level accuracy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
