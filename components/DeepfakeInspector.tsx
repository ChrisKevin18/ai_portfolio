"use client";

import { useState } from "react";
import {
  ShieldAlert,
  ShieldCheck,
  Eye,
  Activity,
  Layers,
  CheckCircle2,
  AlertCircle,
  FileCode,
} from "lucide-react";

type Mode = "AUTHENTIC" | "SYNTHETIC";
type Layer = "STANDARD" | "FORENSIC_HEATMAP" | "FREQUENCY_RESIDUAL" | "C2PA_MANIFEST";

export function DeepfakeInspector() {
  const [mode, setMode] = useState<Mode>("SYNTHETIC");
  const [activeLayer, setActiveLayer] = useState<Layer>("STANDARD");

  return (
    <div className="mx-auto max-w-7xl rounded-3xl border border-line bg-gradient-to-b from-card via-panel to-ink p-6 backdrop-blur-2xl md:p-10 shadow-card-glass">
      {/* Header bar */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b border-line/70 pb-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="pill-badge border-blue/40 bg-blue/10 text-blue">
              <Eye size={12} className="animate-pulse" />
              INTERACTIVE FORENSIC LABORATORY
            </span>
            <span className="pill-badge border-amber/30 bg-amber/10 text-amber-300">
              EPISTEMIC RISK TOOL
            </span>
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-paper sm:text-3xl md:text-4xl">
            Deepfake Forensic & Provenance Inspector
          </h2>
          <p className="mt-2 max-w-2xl text-xs text-muted sm:text-sm">
            Investigating perceptual deception, high-frequency mathematical artifacts, and C2PA cryptographic hardware attestations to mitigate the &ldquo;Liar&apos;s Dividend&rdquo;.
          </p>
        </div>

        {/* Mode Switcher Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setMode("AUTHENTIC")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs font-semibold transition-all focus-ring ${
              mode === "AUTHENTIC"
                ? "border border-green/50 bg-green/15 text-green shadow-[0_0_20px_rgba(85,214,190,0.25)]"
                : "border border-line bg-white/[0.02] text-quiet hover:text-paper"
            }`}
          >
            <ShieldCheck size={15} />
            <span>AUTHENTIC WITNESS CAPTURE</span>
          </button>
          <button
            type="button"
            onClick={() => setMode("SYNTHETIC")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs font-semibold transition-all focus-ring ${
              mode === "SYNTHETIC"
                ? "border border-rose-500/50 bg-rose-500/15 text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.25)]"
                : "border border-line bg-white/[0.02] text-quiet hover:text-paper"
            }`}
          >
            <ShieldAlert size={15} />
            <span>LATENT DIFFUSION SYNTHESIS</span>
          </button>
        </div>
      </div>

      {/* Main Inspection Grid */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Visual Simulator Console */}
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-2xl border border-line bg-ink p-4">
            {/* Viewport Header */}
            <div className="flex items-center justify-between border-b border-line/60 pb-3 font-mono text-[0.68rem]">
              <div className="flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${
                    mode === "AUTHENTIC" ? "bg-green" : "bg-rose-500 animate-pulse"
                  }`}
                />
                <span className="text-paper font-semibold">
                  FEED: {mode === "AUTHENTIC" ? "CANON-EOS-R5-SIG-4492" : "DIFFUSION-LATENT-SDXL-PR0"}
                </span>
              </div>
              <span className="text-quiet">
                RESOL: 4096x2160 · 14-BIT RAW TELEMETRY
              </span>
            </div>

            {/* Visual Canvas Simulation */}
            <div className="relative my-4 aspect-video w-full overflow-hidden rounded-xl border border-line/80 bg-panel flex flex-col items-center justify-center p-6 text-center">
              {/* Background dynamic ambient gradient */}
              <div
                className={`absolute inset-0 opacity-20 transition-all duration-700 ${
                  mode === "AUTHENTIC"
                    ? "bg-[radial-gradient(ellipse_at_center,#55D6BE,transparent_70%)]"
                    : "bg-[radial-gradient(ellipse_at_center,#f43f5e,transparent_70%)]"
                }`}
              />

              {/* Forensic Grid Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

              {/* Mode-Specific Forensic Display */}
              {activeLayer === "STANDARD" && (
                <div className="relative z-10 space-y-3">
                  <div
                    className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border ${
                      mode === "AUTHENTIC"
                        ? "border-green/40 bg-green/10 text-green"
                        : "border-rose-500/40 bg-rose-500/10 text-rose-400"
                    }`}
                  >
                    {mode === "AUTHENTIC" ? <ShieldCheck size={32} /> : <Eye size={32} />}
                  </div>
                  <h4 className="font-display text-lg font-bold text-paper">
                    {mode === "AUTHENTIC"
                      ? "Direct Hardware Sensor Capture"
                      : "Synthetic Multimodal Generation"}
                  </h4>
                  <p className="max-w-md text-xs leading-relaxed text-muted">
                    {mode === "AUTHENTIC"
                      ? "Natural photon shot noise distribution, authentic subsurface corneal scattering, and continuous physical optical physics."
                      : "Generated through reverse diffusion denoising over 50 steps. Latent artifacts detected in high-frequency boundary textures."}
                  </p>
                </div>
              )}

              {activeLayer === "FORENSIC_HEATMAP" && (
                <div className="relative z-10 w-full space-y-2">
                  <div className="rounded-xl border border-amber/40 bg-amber/10 p-4 font-mono text-xs text-amber-300">
                    <Activity size={16} className="mx-auto mb-2 animate-bounce" />
                    <strong>RESIDUAL ARTIFACT HEATMAP ACTIVE</strong>
                    <p className="mt-1 text-[0.72rem] text-muted">
                      {mode === "AUTHENTIC"
                        ? "Uniform sensor thermal noise across all color channels. Zero deconvolution checkerboarding."
                        : "Extreme localized anomalies detected in periorbital tissue, teeth margins, and background foliage boundaries (p < 0.001)."}
                    </p>
                  </div>
                </div>
              )}

              {activeLayer === "FREQUENCY_RESIDUAL" && (
                <div className="relative z-10 w-full space-y-2">
                  <div className="rounded-xl border border-blue/40 bg-blue/10 p-4 font-mono text-xs text-blue">
                    <Layers size={16} className="mx-auto mb-2" />
                    <strong>2D FAST FOURIER TRANSFORM (FFT) SPECTRUM</strong>
                    <p className="mt-1 text-[0.72rem] text-muted">
                      {mode === "AUTHENTIC"
                        ? "Natural continuous 1/f power spectral density decay characteristic of real-world lens optics."
                        : "Periodic high-frequency cross-shaped spikes identified. Hallmark signature of neural upsampling layers."}
                    </p>
                  </div>
                </div>
              )}

              {activeLayer === "C2PA_MANIFEST" && (
                <div className="relative z-10 w-full text-left font-mono text-[0.68rem] bg-ink/90 p-4 rounded-xl border border-line text-muted">
                  <div className="flex items-center justify-between text-paper font-bold pb-2 border-b border-line">
                    <span className="flex items-center gap-1.5 text-blue">
                      <FileCode size={13} /> C2PA JUMBF MANIFEST PARSER
                    </span>
                    <span className={mode === "AUTHENTIC" ? "text-green" : "text-rose-400"}>
                      {mode === "AUTHENTIC" ? "STATUS: VALID_SIGNATURE" : "STATUS: MANIFEST_ABSENT_OR_MODIFIED"}
                    </span>
                  </div>
                  <pre className="mt-2 text-quiet overflow-x-auto leading-relaxed">
{mode === "AUTHENTIC"
? `{\n  "claim_generator": "Sony-Hardware-Crypto/v2.1",\n  "signature_date": "2026-03-02T14:22:09Z",\n  "signing_cert": "CN=Sony Camera CA, O=Sony Corp",\n  "assertions": [\n    { "label": "c2pa.actions", "action": "c2pa.created" },\n    { "label": "c2pa.hash.data", "alg": "sha256:valid" }\n  ]\n}`
: `{\n  "claim_generator": "Unknown-Web-Export/1.0",\n  "signature_date": null,\n  "signing_cert": "UNTRUSTED_SELF_SIGNED",\n  "assertions": [\n    { "label": "c2pa.warning", "desc": "Provenance chain broken" },\n    { "label": "latent_synthetic", "detected": true }\n  ]\n}`}
                  </pre>
                </div>
              )}
            </div>

            {/* Layer Selection Buttons */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 pt-2">
              {(
                [
                  { id: "STANDARD", label: "STANDARD RGB" },
                  { id: "FORENSIC_HEATMAP", label: "HEATMAP RESIDUAL" },
                  { id: "FREQUENCY_RESIDUAL", label: "FFT SPECTRUM" },
                  { id: "C2PA_MANIFEST", label: "C2PA MANIFEST" },
                ] as const
              ).map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => setActiveLayer(l.id)}
                  className={`rounded-lg py-1.5 px-2 font-mono text-[0.65rem] font-semibold transition focus-ring ${
                    activeLayer === l.id
                      ? "bg-white/10 text-paper border border-white/20"
                      : "bg-panel/60 text-quiet hover:text-muted border border-transparent"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Forensic Breakdown & Epistemic Impact */}
        <div className="space-y-6 lg:col-span-5">
          {/* Status Metric Card */}
          <div
            className={`rounded-2xl border p-5 ${
              mode === "AUTHENTIC"
                ? "border-green/40 bg-green/5"
                : "border-rose-500/40 bg-rose-500/5"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.68rem] font-bold tracking-widest text-quiet">
                EPISTEMIC VERDICT
              </span>
              <span
                className={`font-mono text-xs font-bold px-2 py-0.5 rounded-full ${
                  mode === "AUTHENTIC"
                    ? "bg-green/10 text-green border border-green/30"
                    : "bg-rose-500/10 text-rose-400 border border-rose-500/30"
                }`}
              >
                {mode === "AUTHENTIC" ? "VERIFIED AUTHENTIC" : "HIGH SYNTHETIC RISK"}
              </span>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold text-paper">
                {mode === "AUTHENTIC" ? "99.4%" : "0.2%"}
              </span>
              <span className="text-xs font-mono text-muted">
                Provenance Confidence Score
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              {mode === "AUTHENTIC"
                ? "Cryptographically signed by hardware secure enclave at moment of capture. Tamper-evident C2PA hash verified."
                : "Zero hardware attestation. Spectral analysis indicates diffusion model upsampling patterns with 98.8% certainty."}
            </p>
          </div>

          {/* Forensic Checkpoints List */}
          <div className="rounded-2xl border border-line bg-panel/70 p-5 space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-quiet">
              CRITICAL FORENSIC ARTIFACTS
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0">
                  {mode === "AUTHENTIC" ? (
                    <CheckCircle2 size={15} className="text-green" />
                  ) : (
                    <AlertCircle size={15} className="text-rose-400" />
                  )}
                </div>
                <div>
                  <strong className="text-paper block font-mono text-[0.72rem]">
                    1. Corneal Specular Reflection
                  </strong>
                  <p className="text-muted leading-relaxed">
                    {mode === "AUTHENTIC"
                      ? "Identical light source reflections in both pupils conforming to physical studio light angles."
                      : "Slight misalignment in corneal catchlights between left and right eyes (common in diffusion generation)."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-line/60 pt-3">
                <div className="mt-0.5 shrink-0">
                  {mode === "AUTHENTIC" ? (
                    <CheckCircle2 size={15} className="text-green" />
                  ) : (
                    <AlertCircle size={15} className="text-rose-400" />
                  )}
                </div>
                <div>
                  <strong className="text-paper block font-mono text-[0.72rem]">
                    2. High-Frequency Boundary Physics
                  </strong>
                  <p className="text-muted leading-relaxed">
                    {mode === "AUTHENTIC"
                      ? "Natural optical blur falloff matching camera aperture (f/2.8) and optical depth."
                      : "Unnatural edge crispness around earlobes and hair strands; blurred blending into background."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-line/60 pt-3">
                <div className="mt-0.5 shrink-0">
                  {mode === "AUTHENTIC" ? (
                    <CheckCircle2 size={15} className="text-green" />
                  ) : (
                    <AlertCircle size={15} className="text-rose-400" />
                  )}
                </div>
                <div>
                  <strong className="text-paper block font-mono text-[0.72rem]">
                    3. Hardware Cryptographic Lineage
                  </strong>
                  <p className="text-muted leading-relaxed">
                    {mode === "AUTHENTIC"
                      ? "Signed with OEM camera PKI certificate; edits logged via verifiable cryptographic hashes."
                      : "No C2PA manifest found. Stripped EXIF metadata. Provenance broken."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Epistemic Takeaway Box */}
          <div className="rounded-2xl border border-blue/30 bg-blue/5 p-4 text-xs">
            <span className="font-mono text-[0.65rem] font-bold text-blue uppercase tracking-wider block">
              THE EPISTEMIC TAKEAWAY
            </span>
            <p className="mt-1 text-muted leading-relaxed">
              Human eyes can no longer distinguish advanced synthetic media. To survive the &ldquo;Liar&apos;s Dividend&rdquo;, society must abandon purely visual appraisal and mandate end-to-end cryptographic provenance standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
