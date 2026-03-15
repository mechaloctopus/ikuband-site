export default function Footer() {
  return (
    <footer className="py-16 border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-white font-bold text-sm">
                IK
              </div>
              <span className="text-lg font-bold">
                <span className="gradient-text">IkuBand</span>{" "}
                <span className="text-muted text-sm font-normal">Institute</span>
              </span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              A research foundation pioneering the next generation of non-invasive
              health diagnostics through advanced smart ring technology.
            </p>
          </div>

          {/* Research */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Research</h4>
            <div className="space-y-2">
              {[
                { href: "#science", label: "Science Encyclopedia" },
                { href: "#biomarkers", label: "Biomarker Atlas" },
                { href: "#ml", label: "AI & Machine Learning" },
                { href: "#manufacturing", label: "Hardware & Sensors" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block text-xs text-muted hover:text-accent transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Product</h4>
            <div className="space-y-2">
              {[
                { href: "#gallery", label: "Ring Gallery" },
                { href: "#ecosystem", label: "Ecosystem & Attachments" },
                { href: "#roadmap", label: "Development Roadmap" },
                { href: "#invest", label: "Investor Overview" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block text-xs text-muted hover:text-accent transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-xs text-muted">
              <p>invest@ikuband.org</p>
              <p>research@ikuband.org</p>
              <p>press@ikuband.org</p>
            </div>
          </div>
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} IkuBand Institute. All rights reserved.
          </p>
          <p className="text-[10px] text-muted/50 max-w-lg text-center sm:text-right">
            Disclaimer: IkuBand Institute is a research foundation. No products described on this site are
            FDA-cleared medical devices. All biomarker detection capabilities described are in research,
            prototype, or development stages unless otherwise noted. Consult a healthcare provider for
            medical decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
