"use client";
import { Fragment, useState } from "react";

const categories = [
  {
    id: "hematology",
    num: "01",
    title: "Hematology & Blood Cells",
    subtitle: "Complete Blood Count + Extended",
    color: "from-red-500 to-rose-600",
    dot: "bg-red-500",
    phase: 1,
    desc: "The foundation of any blood panel. Red cells carry oxygen, white cells fight infection, platelets clot wounds. Each parameter reveals a different dimension of blood health — from anemia to infection to bone marrow function.",
    params: [
      { name: "Red Blood Cell (RBC) Count", method: "Hb absorption @ 540/577nm", unit: "M/µL", phase: 1 },
      { name: "Hemoglobin (Hb) — Total + Variants", method: "Multi-wavelength absorption (SpHb)", unit: "g/dL", phase: 1 },
      { name: "Hematocrit (Hct)", method: "Derived from Hb + RBC model", unit: "%", phase: 1 },
      { name: "Mean Corpuscular Volume (MCV)", method: "Hct/RBC ratio model", unit: "fL", phase: 2 },
      { name: "Mean Corpuscular Hemoglobin (MCH)", method: "Hb/RBC ratio model", unit: "pg", phase: 2 },
      { name: "MCH Concentration (MCHC)", method: "Hb/Hct ratio model", unit: "g/dL", phase: 2 },
      { name: "Red Cell Distribution Width (RDW)", method: "Spectral variance analysis", unit: "%", phase: 2 },
      { name: "Reticulocyte Count / %", method: "RNA fluorescence proxy @ 630nm", unit: "%", phase: 3 },
      { name: "White Blood Cell (WBC) Total", method: "Scattering intensity + NIR", unit: "K/µL", phase: 2 },
      { name: "Neutrophils (abs + %)", method: "Differential scatter + ML", unit: "K/µL", phase: 3 },
      { name: "Lymphocytes (abs + %)", method: "Differential scatter + ML", unit: "K/µL", phase: 3 },
      { name: "Monocytes (abs + %)", method: "Differential scatter + ML", unit: "K/µL", phase: 3 },
      { name: "Eosinophils (abs + %)", method: "Differential scatter + ML", unit: "K/µL", phase: 3 },
      { name: "Basophils (abs + %)", method: "Differential scatter + ML", unit: "K/µL", phase: 3 },
      { name: "Immature Granulocytes / Bands", method: "Spectral shift analysis", unit: "K/µL", phase: 3 },
      { name: "Neutrophil:Lymphocyte Ratio (NLR)", method: "Derived from WBC diff", unit: "ratio", phase: 3 },
      { name: "Platelet:Lymphocyte Ratio (PLR)", method: "Derived", unit: "ratio", phase: 3 },
      { name: "Platelet Count", method: "Scatter + temporal modulation", unit: "K/µL", phase: 2 },
      { name: "Mean Platelet Volume (MPV)", method: "Scatter size distribution", unit: "fL", phase: 3 },
      { name: "Erythrocyte Sedimentation Rate (ESR)", method: "Temporal absorbance decay", unit: "mm/hr", phase: 2 },
      { name: "Haptoglobin", method: "Raman fingerprint @ 1002cm⁻¹", unit: "mg/dL", phase: 3 },
      { name: "G6PD Screen", method: "Enzyme activity proxy via NADPH fluorescence", unit: "U/g Hb", phase: 3 },
    ],
  },
  {
    id: "oxygenation",
    num: "02",
    title: "Oxygenation, Gases & Vitals",
    subtitle: "Pulse Oximetry + Blood Gas Proxies",
    color: "from-cyan-500 to-blue-600",
    dot: "bg-cyan-500",
    phase: 1,
    desc: "The ring's core competency. Multi-wavelength PPG already measures SpO2 and heart rate. By extending to 7+ wavelengths and adding pulse wave analysis, we unlock blood gas proxies and cuffless blood pressure — the vital signs doctors check first.",
    params: [
      { name: "SpO2 (Functional + Fractional)", method: "Dual-wavelength PPG (660/940nm)", unit: "%", phase: 1 },
      { name: "Partial Pressure O2 (pO2 proxy)", method: "Multi-λ Hb dissociation model", unit: "mmHg", phase: 2 },
      { name: "Partial Pressure CO2 (pCO2 proxy)", method: "NIR CO2 absorption + resp rate", unit: "mmHg", phase: 2 },
      { name: "Carboxyhemoglobin (COHb)", method: "8-wavelength pulse co-oximetry", unit: "%", phase: 2 },
      { name: "Methemoglobin (MetHb)", method: "8-wavelength pulse co-oximetry", unit: "%", phase: 2 },
      { name: "Blood Pressure (Sys/Dia/MAP)", method: "Pulse wave velocity + AI model", unit: "mmHg", phase: 1 },
      { name: "Heart Rate + HRV", method: "PPG waveform (green LED 520nm)", unit: "bpm / ms", phase: 1 },
    ],
  },
  {
    id: "glucose",
    num: "03",
    title: "Glucose, Insulin & Metabolic",
    subtitle: "Diabetes Panel + Metabolic Indices",
    color: "from-amber-500 to-orange-600",
    dot: "bg-amber-500",
    phase: 1,
    desc: "The holy grail of non-invasive monitoring. Glucose has strong Raman and SWIR signatures. HbA1c can be derived from long-term glucose trends + hemoglobin spectroscopy. Insulin and C-peptide require deeper spectral analysis but are simulatable in phantom training data.",
    params: [
      { name: "Glucose (Fasting / Random / Avg)", method: "Raman 1125cm⁻¹ + SWIR 1550nm", unit: "mg/dL", phase: 1 },
      { name: "HbA1c (Glycated Hemoglobin)", method: "NIR Hb variant absorption + 90-day model", unit: "%", phase: 1 },
      { name: "Insulin (Fasting + Free/Total)", method: "Raman amide bands + ML", unit: "µIU/mL", phase: 2 },
      { name: "C-Peptide", method: "Raman fingerprint + protein model", unit: "ng/mL", phase: 2 },
      { name: "Fructosamine", method: "Glycated protein absorbance", unit: "µmol/L", phase: 2 },
      { name: "HOMA-IR / HOMA-%B / QUICKI / TyG", method: "Derived from glucose + insulin", unit: "index", phase: 2 },
      { name: "1,5-Anhydroglucitol (GlycoMark)", method: "SWIR sugar absorption differentiation", unit: "µg/mL", phase: 3 },
      { name: "Lactate", method: "Raman 855cm⁻¹ + SWIR", unit: "mmol/L", phase: 1 },
      { name: "Beta-Hydroxybutyrate / Ketones", method: "SWIR 1700nm ketone body band", unit: "mmol/L", phase: 2 },
      { name: "Adiponectin", method: "Raman protein signature + ML", unit: "µg/mL", phase: 3 },
    ],
  },
  {
    id: "electrolytes",
    num: "04",
    title: "Electrolytes, Minerals & Acid-Base",
    subtitle: "BMP Electrolytes + Trace Elements",
    color: "from-emerald-500 to-teal-600",
    dot: "bg-emerald-500",
    phase: 2,
    desc: "Electrolytes control every nerve impulse and muscle contraction. Bioimpedance spectroscopy gives us ionic conductivity data, while Raman and SWIR provide molecular specificity for individual ions. Trace minerals (Zn, Cu, Se) require high-resolution spectral discrimination.",
    params: [
      { name: "Sodium (Na⁺)", method: "Bioimpedance + Raman hydration model", unit: "mEq/L", phase: 2 },
      { name: "Potassium (K⁺)", method: "Bioimpedance frequency response", unit: "mEq/L", phase: 2 },
      { name: "Chloride (Cl⁻)", method: "Bioimpedance + anion model", unit: "mEq/L", phase: 2 },
      { name: "Bicarbonate (CO2 / actual)", method: "pCO2 proxy + Henderson-Hasselbalch", unit: "mEq/L", phase: 2 },
      { name: "Anion Gap", method: "Derived: Na − (Cl + HCO3)", unit: "mEq/L", phase: 2 },
      { name: "Calcium (Total + Ionized)", method: "NIR 2100nm absorption + bioimpedance", unit: "mg/dL", phase: 2 },
      { name: "Magnesium (Serum + RBC)", method: "NIR absorption + impedance", unit: "mg/dL", phase: 2 },
      { name: "Phosphate / Phosphorus", method: "Raman PO4 stretch 960cm⁻¹", unit: "mg/dL", phase: 2 },
      { name: "Osmolality / Osmolar Gap", method: "Derived from Na, glucose, BUN", unit: "mOsm/kg", phase: 2 },
      { name: "Copper (Serum + RBC)", method: "Visible absorption 600–800nm", unit: "µg/dL", phase: 3 },
      { name: "Zinc (Serum + RBC)", method: "UV-Vis + Raman metalloprotein", unit: "µg/dL", phase: 3 },
      { name: "Selenium", method: "Raman selenoprotein signature", unit: "µg/L", phase: 3 },
      { name: "Iodine", method: "Thyroid hormone proxy model", unit: "µg/L", phase: 3 },
      { name: "Copper:Zinc Ratio", method: "Derived", unit: "ratio", phase: 3 },
      { name: "Ceruloplasmin", method: "Blue copper protein @ 610nm", unit: "mg/dL", phase: 3 },
    ],
  },
  {
    id: "kidney",
    num: "05",
    title: "Kidney & Renal Function",
    subtitle: "BUN, Creatinine, eGFR",
    color: "from-sky-500 to-blue-500",
    dot: "bg-sky-500",
    phase: 2,
    desc: "Kidney function is one of the most critical clinical panels. Creatinine and urea have distinct Raman signatures. eGFR is algorithmically derived. Continuous renal monitoring could catch acute kidney injury hours before symptoms appear.",
    params: [
      { name: "Blood Urea Nitrogen (BUN / Urea)", method: "Raman 1003cm⁻¹ urea band", unit: "mg/dL", phase: 2 },
      { name: "Creatinine (Serum)", method: "Raman 680/840cm⁻¹ creatinine", unit: "mg/dL", phase: 2 },
      { name: "eGFR (CKD-EPI + Cystatin C)", method: "Derived from creatinine + demographics", unit: "mL/min", phase: 2 },
      { name: "BUN:Creatinine Ratio", method: "Derived", unit: "ratio", phase: 2 },
      { name: "Uric Acid", method: "Raman 630/1130cm⁻¹ + UV absorption", unit: "mg/dL", phase: 2 },
      { name: "Albumin:Creatinine Ratio (ACR)", method: "Blood-proxy model from albumin + creatinine", unit: "mg/g", phase: 3 },
    ],
  },
  {
    id: "liver",
    num: "06",
    title: "Liver Function & Enzymes",
    subtitle: "Hepatic Panel + All Clinical Enzymes",
    color: "from-yellow-500 to-amber-600",
    dot: "bg-yellow-500",
    phase: 2,
    desc: "Liver enzymes are the workhorses of clinical diagnostics. Each enzyme has a unique protein fold with characteristic Raman amide bands. By simulating thousands of enzyme concentration combinations in phantom blood, our ML learns to decompose overlapping spectral signatures into individual enzyme levels.",
    params: [
      { name: "ALT (Alanine Aminotransferase)", method: "Raman amide I/III + SWIR protein", unit: "U/L", phase: 2 },
      { name: "AST (Aspartate Aminotransferase)", method: "Raman amide I/III + SWIR protein", unit: "U/L", phase: 2 },
      { name: "ALT:AST Ratio", method: "Derived", unit: "ratio", phase: 2 },
      { name: "Alkaline Phosphatase (ALP)", method: "Raman phosphatase signature", unit: "U/L", phase: 2 },
      { name: "GGT (Gamma-Glutamyl Transferase)", method: "Raman + SWIR enzyme band", unit: "U/L", phase: 2 },
      { name: "Lactate Dehydrogenase (LDH)", method: "Raman NADH/NAD+ redox proxy", unit: "U/L", phase: 2 },
      { name: "Creatine Kinase (CK / Total + CK-MB)", method: "Raman muscle enzyme band", unit: "U/L", phase: 2 },
      { name: "Amylase", method: "Raman carbohydrase signature", unit: "U/L", phase: 3 },
      { name: "Lipase", method: "SWIR lipid-enzyme interaction", unit: "U/L", phase: 3 },
      { name: "5'-Nucleotidase", method: "Raman nucleotide interaction", unit: "U/L", phase: 3 },
      { name: "Troponin (T / I / hs)", method: "Raman cardiac troponin complex", unit: "ng/L", phase: 2 },
      { name: "Bilirubin (Total + Direct + Indirect)", method: "Visible absorption 450–460nm", unit: "mg/dL", phase: 1 },
      { name: "Albumin", method: "Raman 1450/1650cm⁻¹ protein", unit: "g/dL", phase: 2 },
      { name: "Total Protein", method: "SWIR 2050nm protein band", unit: "g/dL", phase: 2 },
      { name: "Globulin + Albumin:Globulin Ratio", method: "Derived from total protein − albumin", unit: "g/dL", phase: 2 },
    ],
  },
  {
    id: "lipids",
    num: "07",
    title: "Lipids & Cardiovascular Risk",
    subtitle: "Advanced Lipoprotein Profiling",
    color: "from-pink-500 to-rose-500",
    dot: "bg-pink-500",
    phase: 2,
    desc: "Lipids are fat-soluble molecules with strong C-H stretch bands in the SWIR region (1700–1750nm). By training on phantoms with precise lipid emulsions at thousands of concentration ratios, our ML can distinguish HDL from LDL from triglycerides — something even many lab tests approximate.",
    params: [
      { name: "Total Cholesterol", method: "SWIR 1720nm C-H lipid band", unit: "mg/dL", phase: 2 },
      { name: "HDL-C (+ Particle Number/Size)", method: "SWIR + Raman lipid differentiation", unit: "mg/dL", phase: 2 },
      { name: "LDL-C (+ Small Dense / Particle / oxLDL)", method: "SWIR + Raman + scatter size", unit: "mg/dL", phase: 2 },
      { name: "VLDL / Triglycerides", method: "SWIR 1750nm triglyceride band", unit: "mg/dL", phase: 2 },
      { name: "Non-HDL Cholesterol", method: "Derived: Total − HDL", unit: "mg/dL", phase: 2 },
      { name: "Cholesterol:HDL / LDL:HDL Ratios", method: "Derived", unit: "ratio", phase: 2 },
      { name: "Apolipoprotein A1 (Apo A-1)", method: "Raman apolipoprotein signature", unit: "mg/dL", phase: 3 },
      { name: "Apolipoprotein B (Apo B)", method: "Raman apolipoprotein signature", unit: "mg/dL", phase: 3 },
      { name: "Apo B:Apo A-1 Ratio", method: "Derived", unit: "ratio", phase: 3 },
      { name: "Lipoprotein(a) [Lp(a)]", method: "Raman Lp(a) kringle domain", unit: "nmol/L", phase: 3 },
      { name: "Triglyceride:HDL Ratio / AIP", method: "Derived", unit: "ratio/index", phase: 2 },
    ],
  },
  {
    id: "inflammatory",
    num: "08",
    title: "Inflammatory & Cardiac Markers",
    subtitle: "CRP, Fibrinogen, D-Dimer, BNP",
    color: "from-red-600 to-orange-500",
    dot: "bg-red-600",
    phase: 2,
    desc: "Inflammation is the common thread in heart disease, autoimmunity, infection, and cancer. CRP, fibrinogen, and homocysteine have unique spectral profiles. Continuous inflammatory monitoring could detect heart attacks, infections, and flares hours before traditional symptoms.",
    params: [
      { name: "hs-CRP / C-Reactive Protein", method: "Raman 1002/1450cm⁻¹ CRP pentamer", unit: "mg/L", phase: 2 },
      { name: "Fibrinogen", method: "Raman amide + coagulation model", unit: "mg/dL", phase: 2 },
      { name: "D-Dimer", method: "Raman fibrin degradation product", unit: "ng/mL", phase: 3 },
      { name: "Homocysteine", method: "Raman thiol stretch 2550cm⁻¹", unit: "µmol/L", phase: 2 },
      { name: "GlycA", method: "NMR-proxy via glycoprotein Raman", unit: "µmol/L", phase: 3 },
      { name: "NT-proBNP / BNP", method: "Raman cardiac peptide signature", unit: "pg/mL", phase: 3 },
      { name: "Ferritin", method: "Raman iron-storage protein", unit: "ng/mL", phase: 2 },
      { name: "Haptoglobin", method: "Raman hemolysis marker", unit: "mg/dL", phase: 3 },
    ],
  },
  {
    id: "hormones",
    num: "09",
    title: "Hormones — All Major Classes",
    subtitle: "Thyroid, Sex, Adrenal, Growth, Pancreatic",
    color: "from-purple-500 to-violet-600",
    dot: "bg-purple-500",
    phase: 2,
    desc: "Hormones are present in blood at vanishingly small concentrations (picomolar to nanomolar), making optical detection extremely challenging. Our approach: train ML on phantoms spiked with exact hormone concentrations, using hyperspectral Raman to detect the subtle spectral perturbations each hormone causes to carrier proteins and surrounding molecules.",
    params: [
      { name: "TSH", method: "Raman glycoprotein + ML", unit: "mIU/L", phase: 2 },
      { name: "Free T3 / Total T3", method: "Raman iodothyronine @ 620cm⁻¹", unit: "pg/dL", phase: 2 },
      { name: "Free T4 / Total T4", method: "Raman iodothyronine @ 620cm⁻¹", unit: "ng/dL", phase: 2 },
      { name: "Reverse T3 / Free T3:rT3 Ratio", method: "Spectral isomer differentiation", unit: "ng/dL", phase: 3 },
      { name: "Thyroglobulin / TPO Antibodies", method: "Raman immunoglobulin proxy", unit: "IU/mL", phase: 3 },
      { name: "Testosterone (Total + Free + Bio)", method: "Raman steroid 1660cm⁻¹", unit: "ng/dL", phase: 2 },
      { name: "Estradiol", method: "Raman aromatic steroid ring", unit: "pg/mL", phase: 2 },
      { name: "Progesterone", method: "Raman steroid carbonyl stretch", unit: "ng/mL", phase: 2 },
      { name: "FSH / LH", method: "Raman glycoprotein hormone", unit: "mIU/mL", phase: 3 },
      { name: "SHBG / Free Androgen Index", method: "Raman binding globulin", unit: "nmol/L", phase: 3 },
      { name: "DHEA-S / DHEA", method: "Raman sulfated steroid", unit: "µg/dL", phase: 3 },
      { name: "DHT (Dihydrotestosterone)", method: "Raman androgen variant", unit: "ng/dL", phase: 3 },
      { name: "AMH (Anti-Müllerian Hormone)", method: "Raman glycoprotein + ML", unit: "ng/mL", phase: 3 },
      { name: "Prolactin", method: "Raman peptide hormone", unit: "ng/mL", phase: 3 },
      { name: "Cortisol (AM/PM Profile)", method: "Raman 1440cm⁻¹ glucocorticoid", unit: "µg/dL", phase: 2 },
      { name: "ACTH", method: "Raman peptide 39-aa signature", unit: "pg/mL", phase: 3 },
      { name: "Aldosterone / Renin", method: "Raman mineralocorticoid", unit: "ng/dL", phase: 3 },
      { name: "Cortisol:DHEA-S Ratio", method: "Derived", unit: "ratio", phase: 2 },
      { name: "Growth Hormone (GH)", method: "Raman 191-aa protein", unit: "ng/mL", phase: 3 },
      { name: "IGF-1 / IGFBP-3", method: "Raman growth factor signature", unit: "ng/mL", phase: 3 },
      { name: "Parathyroid Hormone (PTH)", method: "Raman 84-aa peptide", unit: "pg/mL", phase: 3 },
      { name: "Leptin", method: "Raman adipokine signature", unit: "ng/mL", phase: 3 },
      { name: "Pregnenolone", method: "Raman steroid precursor", unit: "ng/dL", phase: 3 },
    ],
  },
  {
    id: "vitamins",
    num: "10",
    title: "Vitamins, Nutrients & Antioxidants",
    subtitle: "D, B12, Folate, CoQ10 + More",
    color: "from-green-500 to-emerald-600",
    dot: "bg-green-500",
    phase: 2,
    desc: "Vitamins have strong chromophore signatures — Vitamin D absorbs in the UV, B12 has a cobalt-centered corrin ring with unique visible absorption, and carotenoids (Vitamin A) are detectable via resonance Raman. These are among the easier non-invasive targets after glucose and hemoglobin.",
    params: [
      { name: "Vitamin D (25-OH + 1,25-diOH)", method: "UV absorption 265nm + Raman", unit: "ng/mL", phase: 2 },
      { name: "Vitamin B12 (Total + Active / HoloTC)", method: "Visible 361/550nm cobalt corrin", unit: "pg/mL", phase: 2 },
      { name: "Folate (Serum + RBC)", method: "UV 280/365nm pteridine ring", unit: "ng/mL", phase: 2 },
      { name: "Vitamin A (Retinol)", method: "Resonance Raman 1160/1525cm⁻¹", unit: "µg/dL", phase: 2 },
      { name: "Vitamin E (Tocopherol)", method: "Raman phenol + SWIR lipid", unit: "mg/L", phase: 3 },
      { name: "Vitamin C (Ascorbic Acid)", method: "Raman 1660cm⁻¹ enol + UV 265nm", unit: "mg/dL", phase: 3 },
      { name: "Vitamin B6 (Pyridoxal-5-P)", method: "UV fluorescence 330/400nm", unit: "ng/mL", phase: 3 },
      { name: "Coenzyme Q10 (CoQ10)", method: "UV 275nm benzoquinone absorption", unit: "µg/mL", phase: 3 },
      { name: "Omega-3 Index (EPA+DHA proxy)", method: "SWIR lipid chain length model", unit: "%", phase: 3 },
    ],
  },
  {
    id: "coagulation",
    num: "11",
    title: "Coagulation & Clotting Factors",
    subtitle: "PT/INR, aPTT, Fibrinogen, Factors",
    color: "from-indigo-500 to-blue-600",
    dot: "bg-indigo-500",
    phase: 3,
    desc: "Coagulation is a cascade of protein interactions. While individual factor levels are challenging optically, the overall clotting tendency can be modeled from fibrinogen, D-dimer, and platelet data. Specific factor mutations (Factor V Leiden) are simulatable in training data for population-level screening.",
    params: [
      { name: "Prothrombin Time (PT / INR)", method: "Fibrinogen kinetics + platelet model", unit: "sec / ratio", phase: 3 },
      { name: "aPTT", method: "Intrinsic pathway factor model", unit: "sec", phase: 3 },
      { name: "Fibrinogen", method: "Raman amide + coagulation model", unit: "mg/dL", phase: 2 },
      { name: "Antithrombin", method: "Raman serpin protein", unit: "%", phase: 3 },
      { name: "D-Dimer", method: "Raman fibrin degradation product", unit: "ng/mL", phase: 3 },
      { name: "Factors II, V, VII, VIII, IX, X, XI, XII", method: "Multi-factor spectral model + ML", unit: "%", phase: 3 },
      { name: "Factor V Leiden / PT G20210A Screen", method: "Population model + spectral variant", unit: "pos/neg", phase: 3 },
    ],
  },
  {
    id: "advanced",
    num: "12",
    title: "Advanced & Specialized Panels",
    subtitle: "Iron, Bone, Emerging Metabolites",
    color: "from-fuchsia-500 to-purple-600",
    dot: "bg-fuchsia-500",
    phase: 3,
    desc: "The frontier. Iron has strong visible-range absorption. Bone turnover markers and emerging metabolites like TMAO require high-resolution hyperspectral analysis. These push the limits of what's optically detectable — but with unlimited simulated training data covering every concentration permutation, ML models can learn even the subtlest spectral perturbations.",
    params: [
      { name: "Serum Iron", method: "Visible absorption 430nm transferrin-bound", unit: "µg/dL", phase: 2 },
      { name: "Ferritin", method: "Raman iron-storage protein complex", unit: "ng/mL", phase: 2 },
      { name: "TIBC / Transferrin Saturation / UIBC", method: "Iron binding model + transferrin Raman", unit: "µg/dL / %", phase: 2 },
      { name: "Osteocalcin", method: "Raman bone Gla-protein", unit: "ng/mL", phase: 3 },
      { name: "CTX / P1NP / P3NP (Bone Turnover)", method: "Raman collagen crosslink proxy", unit: "ng/mL", phase: 3 },
      { name: "Ammonia", method: "NIR 1500nm NH3 absorption", unit: "µmol/L", phase: 3 },
      { name: "Beta-2-Microglobulin", method: "Raman small protein", unit: "mg/L", phase: 3 },
      { name: "Free Fatty Acids", method: "SWIR C-H stretch 1720nm", unit: "mmol/L", phase: 3 },
      { name: "Pyruvate", method: "Raman 1170cm⁻¹ carbonyl", unit: "mg/dL", phase: 3 },
      { name: "TMAO", method: "Raman N-oxide 880cm⁻¹", unit: "µmol/L", phase: 3 },
      { name: "ADMA / SDMA", method: "Raman methylarginine", unit: "µmol/L", phase: 3 },
      { name: "Methylmalonic Acid (MMA)", method: "Raman organic acid + B12 proxy", unit: "nmol/L", phase: 3 },
    ],
  },
];

const phaseColors: Record<number, string> = {
  1: "bg-green-500/15 text-green-400 border-green-500/25",
  2: "bg-cyan-500/15 text-cyan-400 border-cyan-500/25",
  3: "bg-purple-500/15 text-purple-400 border-purple-500/25",
};
const phaseLabels: Record<number, string> = {
  1: "Phase 1 · 2026–27",
  2: "Phase 2 · 2027–29",
  3: "Phase 3 · 2029–30",
};

export default function BloodVitalitySection() {
  const [openCat, setOpenCat] = useState<string | null>("hematology");

  const totalParams = categories.reduce((acc, c) => acc + c.params.length, 0);
  const p1 = categories.reduce((a, c) => a + c.params.filter(p => p.phase === 1).length, 0);
  const p2 = categories.reduce((a, c) => a + c.params.filter(p => p.phase === 2).length, 0);
  const p3 = categories.reduce((a, c) => a + c.params.filter(p => p.phase === 3).length, 0);

  return (
    <section id="vitality" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-divider mb-20" />

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-mono text-sm tracking-widest uppercase">Blood Vitality OS</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            <span className="gradient-text">200+ Blood Parameters</span> by 2030
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            Every major analyte, biomarker, and vital parameter measured in clinical blood panels —
            targeted for non-invasive detection using multi-wavelength laser spectrometry, Raman scattering,
            SWIR absorption, bioimpedance, and deep learning trained on <em className="text-accent not-italic font-medium">billions
            of simulated blood phantom spectra</em>.
          </p>
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-center">
            <div className="text-3xl font-bold gradient-text">{totalParams}</div>
            <div className="text-xs text-muted mt-1">Total Parameters</div>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-green-400">{p1}</div>
            <div className="text-xs text-muted mt-1">Phase 1 (2026–27)</div>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-cyan-400">{p2}</div>
            <div className="text-xs text-muted mt-1">Phase 2 (2027–29)</div>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-purple-400">{p3}</div>
            <div className="text-xs text-muted mt-1">Phase 3 (2029–30)</div>
          </div>
        </div>

        {/* Accuracy target banner */}
        <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 sm:p-8 mb-12 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center shrink-0">
            <span className="text-2xl font-bold text-accent">±3%</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Target Accuracy: ±3% Mean Absolute Error</h3>
            <p className="text-sm text-muted leading-relaxed">
              Achieved through training on infinite simulated spectra — synthetic &ldquo;phantom finger&rdquo; datasets
              with every possible combination of analyte concentrations, skin tones, hydration levels, temperatures,
              and motion artifacts. Real human pilot data fine-tunes the last mile.
            </p>
          </div>
        </div>

        {/* Phase legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[1, 2, 3].map(p => (
            <span key={p} className={`text-xs px-3 py-1.5 rounded-full border ${phaseColors[p]}`}>
              {phaseLabels[p]}
            </span>
          ))}
        </div>

        {/* Accordion categories */}
        <div className="space-y-4 mb-20">
          {categories.map((cat) => {
            const isOpen = openCat === cat.id;
            return (
              <div
                key={cat.id}
                className="bg-card-bg border border-card-border rounded-2xl overflow-hidden"
              >
                {/* Category header (clickable) */}
                <button
                  onClick={() => setOpenCat(isOpen ? null : cat.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <div className={`h-1 w-1 rounded-full ${cat.dot} shrink-0`} />
                  <span className="text-xs font-mono text-muted w-8 shrink-0">{cat.num}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold">{cat.title}</h3>
                      <span className="text-[10px] text-muted font-mono hidden sm:inline">— {cat.subtitle}</span>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full border shrink-0 ${phaseColors[cat.phase]}`}>
                    {cat.params.length} params
                  </span>
                  <svg
                    className={`w-5 h-5 text-muted transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6">
                    <div className={`h-0.5 rounded-full bg-gradient-to-r ${cat.color} mb-5`} />
                    <p className="text-sm text-muted leading-relaxed mb-6">{cat.desc}</p>

                    {/* Parameter table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm min-w-[600px]">
                        <thead>
                          <tr className="border-b border-card-border">
                            <th className="text-left py-2 pr-4 text-xs uppercase tracking-wider text-muted font-semibold">Parameter</th>
                            <th className="text-left py-2 pr-4 text-xs uppercase tracking-wider text-muted font-semibold hidden sm:table-cell">Detection Method</th>
                            <th className="text-left py-2 pr-4 text-xs uppercase tracking-wider text-muted font-semibold w-20">Unit</th>
                            <th className="text-center py-2 text-xs uppercase tracking-wider text-muted font-semibold w-28">Phase</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cat.params.map((p) => (
                            <tr key={p.name} className="border-b border-card-border/30 hover:bg-white/[0.02]">
                              <td className="py-2.5 pr-4 text-xs font-medium">{p.name}</td>
                              <td className="py-2.5 pr-4 text-[11px] text-muted font-mono hidden sm:table-cell">{p.method}</td>
                              <td className="py-2.5 pr-4 text-[11px] text-muted font-mono">{p.unit}</td>
                              <td className="py-2.5 text-center">
                                <span className={`text-[10px] px-2 py-0.5 rounded-full border ${phaseColors[p.phase]}`}>
                                  P{p.phase}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ─── ML SIMULATION PIPELINE ─── */}
        <div className="section-divider mb-16" />

        <div className="text-center mb-12">
          <span className="text-accent-2 font-mono text-sm tracking-widest uppercase">Training Architecture</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
            The <span className="gradient-text">Phantom Finger</span> ML Pipeline
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            How do you train an AI to read blood chemistry through skin without millions of invasive blood draws?
            You build a <em className="text-accent not-italic font-medium">synthetic finger</em> — a microfluidic
            tissue phantom with tunable &ldquo;blood&rdquo; — and generate billions of labeled spectra that no human
            study could ever produce.
          </p>
        </div>

        {/* Pipeline visualization */}
        <div className="bg-card-bg border border-card-border rounded-2xl p-6 sm:p-10 mb-12">
          <h3 className="text-xl font-semibold mb-8 text-center">End-to-End Training Pipeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Phantom Finger Fabrication",
                color: "text-cyan-400",
                lines: [
                  "Silicone skin layers mimicking epidermis, dermis, subcutaneous fat",
                  "Melanin-doped variants: 6 Fitzpatrick skin tones",
                  "Embedded microfluidic channels (Ø 50–300µm) simulating capillary beds",
                  "Temperature-controlled (32–38°C) to match finger physiology",
                  "Pulsatile pump system generating realistic PPG waveforms",
                ],
              },
              {
                step: "02",
                title: "Synthetic Blood Mixing",
                color: "text-green-400",
                lines: [
                  "Base plasma: albumin, globulin, fibrinogen at physiological ratios",
                  "Red cell suspension: Hb variants (HbA, HbA1c, HbF, MetHb, COHb)",
                  "Analyte cocktails: 200+ compounds at 1000s of concentration combos",
                  "Lipid emulsions: precise cholesterol, triglyceride, HDL/LDL ratios",
                  "Hormone spikes: cortisol, testosterone, T3/T4, insulin — picomolar to micromolar",
                  "Automated syringe pumps sweep concentrations continuously",
                ],
              },
              {
                step: "03",
                title: "Multi-Modal Spectral Acquisition",
                color: "text-purple-400",
                lines: [
                  "7-wavelength PPG (520–1050nm) → absorption time-series",
                  "NIR Raman (830nm excitation) → 600–1800cm⁻¹ molecular fingerprints",
                  "SWIR sweep (1000–2500nm) → lipid, glucose, protein absorption",
                  "Hyperspectral imaging (450–1700nm, 5nm resolution)",
                  "Bioimpedance (1kHz–1MHz) → ionic conductivity spectrum",
                  "All synchronized: one spectrum per analyte state = one training example",
                ],
              },
              {
                step: "04",
                title: "Deep Learning Training",
                color: "text-pink-400",
                lines: [
                  "10B+ labeled spectra × 200+ target analyte concentrations",
                  "Architecture: CNN (spectral) + LSTM (temporal) + Transformer (cross-sensor)",
                  "Multi-task regression: all 200 outputs from shared spectral encoder",
                  "Uncertainty estimation via Monte Carlo dropout + ensemble",
                  "Adversarial augmentation: motion artifacts, temperature drift, skin variance",
                  "Target: ±3% MAE per analyte on holdout phantom data",
                ],
              },
            ].map((s) => (
              <div key={s.step} className="bg-background/50 border border-card-border rounded-xl p-5">
                <div className={`text-2xl font-bold font-mono mb-2 ${s.color}`}>{s.step}</div>
                <h4 className="font-semibold text-sm mb-3">{s.title}</h4>
                <div className="space-y-1.5">
                  {s.lines.map((l, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-muted leading-relaxed">
                      <span className={`w-1 h-1 rounded-full ${s.color.replace("text-", "bg-")} mt-1.5 shrink-0`} />
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-world calibration */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card-bg border border-card-border rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm font-mono">05</span>
              Human Pilot Calibration
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Phantom-trained models are 90%+ of the way there. The last mile comes from real human data —
              pairing ring readings with gold-standard venous blood draws. Transfer learning fine-tunes the
              phantom-pretrained model to real tissue optics, individual skin characteristics, and in-vivo
              biological variability.
            </p>
            <div className="space-y-2">
              {[
                "Phase 1: 500 subjects × 50 blood draws each = 25,000 paired samples",
                "Phase 2: 5,000 subjects × 30-day continuous wear + weekly draws",
                "Phase 3: 100,000+ users via federated learning (privacy-preserving)",
                "Per-user personalization: 3-day calibration period with CGM/lab reference",
                "Continuous self-recalibration using cross-sensor consistency checks",
              ].map((f) => (
                <div key={f} className="flex items-start gap-2 text-xs text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card-bg border border-card-border rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-accent-2/10 flex items-center justify-center text-accent-2 text-sm font-mono">06</span>
              Why This Works
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              The fundamental insight: real clinical studies can only collect thousands of labeled blood spectra.
              A phantom system can generate <strong className="text-white">billions</strong>. This is the same paradigm
              shift that made self-driving cars possible — simulated miles outnumber real miles 1000:1.
            </p>
            <div className="space-y-2">
              {[
                "Unlimited concentration permutations impossible in human studies (safety/ethics)",
                "Perfect ground truth: you know exactly what's in the synthetic blood",
                "Cover rare conditions (extreme anemia, diabetic ketoacidosis, hormone crashes)",
                "Test adversarial conditions: motion, sweat, cold fingers, dark skin tones",
                "No IRB approval needed for phantom data — iterate at hardware speed",
                "Transfer learning bridges the sim-to-real gap with minimal human data",
              ].map((f) => (
                <div key={f} className="flex items-start gap-2 text-xs text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-2 mt-1.5 shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ML Architecture detail */}
        <div className="bg-card-bg border border-card-border rounded-2xl p-6 sm:p-10">
          <h3 className="text-xl font-semibold mb-6 text-center">Neural Network Architecture</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                name: "Spectral Encoder (CNN)",
                desc: "1D convolutional layers process raw Raman/SWIR spectra. Learned filters detect absorption peaks, Raman shifts, and scatter features. Residual connections preserve fine spectral detail across 50+ layers.",
                detail: "Input: 2048-point spectrum × 7 sensor channels → 512-dim embedding",
              },
              {
                name: "Temporal Encoder (LSTM)",
                desc: "Bidirectional LSTM processes PPG time-series and bioimpedance sweeps. Captures pulsatile dynamics, respiratory modulation, and motion artifacts over 10-second windows.",
                detail: "Input: 10s × 200Hz PPG waveform → 256-dim temporal embedding",
              },
              {
                name: "Cross-Sensor Transformer",
                desc: "Multi-head attention fuses spectral, temporal, and impedance embeddings. Learns which sensor combinations matter most for each analyte. Self-attention discovers non-obvious correlations.",
                detail: "6 attention heads × 8 layers → 768-dim fused representation",
              },
              {
                name: "Multi-Task Regression Heads",
                desc: "200+ parallel output heads, one per analyte. Each head is a small MLP that specializes in its target while sharing the fused representation. Auxiliary loss for uncertainty estimation.",
                detail: "768-dim → [64 → 32 → 1] per analyte, with σ² uncertainty output",
              },
              {
                name: "Personalization Layer",
                desc: "Low-rank adapter (LoRA-style) fine-tunes per-user during calibration. Learns skin-specific optical corrections, baseline metabolic offsets, and individual sensor-to-analyte mappings.",
                detail: "Rank-4 adapter: 768 × 4 × 4 × 768 = ~25K params per user",
              },
              {
                name: "On-Ring Inference (Quantized)",
                desc: "Full model runs in the cloud during calibration. A distilled, INT8-quantized student model runs directly on the ring's Cortex-M33 MCU for real-time inference at <10mW power.",
                detail: "Teacher: 50M params (cloud) → Student: 500K params (on-ring, 200ms inference)",
              },
            ].map((block) => (
              <div key={block.name} className="bg-background/50 border border-card-border rounded-xl p-5">
                <h4 className="font-semibold text-sm mb-2">{block.name}</h4>
                <p className="text-[11px] text-muted leading-relaxed mb-3">{block.desc}</p>
                <div className="text-[10px] font-mono text-accent bg-accent/5 rounded-lg px-3 py-2">
                  {block.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
