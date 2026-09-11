import {
  Activity,
  BadgeCheck,
  Banknote,
  Database,
  FileSearch,
  Fingerprint,
  HeartPulse,
  Leaf,
  Lock,
  Scale,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export type Principle =
  | "FAIRNESS"
  | "PRIVACY"
  | "TRANSPARENCY"
  | "ACCOUNTABILITY"
  | "SAFETY"
  | "CONSENT"
  | "DATA POWER"
  | "DIGITAL INEQUALITY"
  | "SUSTAINABILITY"
  | "HUMAN OVERSIGHT"
  | "TASK"
  | "RISK"
  | "AUTHORITY"
  | "CONTESTABILITY"
  | "EVIDENCE";

export type Project = {
  slug: string;
  number: string;
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  thesis: string;
  domain: string;
  aiRole: string;
  humanRole: string;
  ethicalIssues: string;
  principles: Principle[];
  sections: {
    problem: string;
    approach: string;
    data: string[];
    risks: string[];
    safeguards: string[];
    humanRole: string;
    takeaway: string;
  };
};

export const projects: Project[] = [
  {
    slug: "medical-diagnosis",
    number: "01",
    category: "HEALTHCARE / ETHICAL AI DESIGN",
    title: "AI-Powered Medical Diagnosis",
    description:
      "Designing a clinical decision-support system that assists healthcare providers while preserving fairness, privacy, transparency, accountability, safety, and human responsibility.",
    thesis:
      "A diagnostic model can support earlier clinical insight, but final judgment must remain with qualified healthcare providers.",
    domain: "Healthcare",
    aiRole: "Rank probable diagnoses, confidence scores, and next-step recommendations.",
    humanRole: "Clinician review, interpretation, patient communication, and final decision-making.",
    ethicalIssues: "Diagnostic bias, privacy, transparency, accountability, safety, and reliability.",
    principles: ["FAIRNESS", "PRIVACY", "TRANSPARENCY", "ACCOUNTABILITY", "SAFETY"],
    sections: {
      problem:
        "Many patients in underserved regions lack timely access to specialist physicians, leading to delayed or missed diagnoses. An AI-powered diagnostic system can analyze patient symptoms, medical history, and test results to assist healthcare providers in identifying diseases early and accurately.",
      approach:
        "The system receives clinical context and returns a ranked list of probable diagnoses with confidence scores and recommended next steps such as further tests, specialist referral, or treatment suggestions.",
      data: [
        "Patient demographics",
        "Age, gender, and weight",
        "Medical history and symptoms",
        "Clinical notes and lab results",
        "Imaging scans and ECGs",
        "Historical diagnosis and treatment outcomes",
      ],
      risks: [
        "Diagnostic bias from incomplete or unrepresentative training data",
        "Privacy exposure across sensitive health records",
        "Overreliance if confidence scores are treated as certainty",
        "Accountability gaps if the AI recommendation obscures clinical responsibility",
      ],
      safeguards: [
        "Diversified training data",
        "Regular bias audits",
        "Multidisciplinary review",
        "Clear explanations and confidence calibration",
        "Clinical validation before deployment",
      ],
      humanRole:
        "The system is a decision-support tool for clinicians, not a replacement. Clinicians review outputs, consider patient context, and remain responsible for diagnosis and care.",
      takeaway:
        "Medical AI is responsible only when it strengthens clinical judgment without transferring responsibility away from people.",
    },
  },
  {
    slug: "data-audit",
    number: "02",
    category: "DATA GOVERNANCE / RESPONSIBLE DATA AUDIT",
    title: "Responsible Data Audit",
    subtitle: "Rapido",
    description:
      "Examining how a digital platform collects and uses personal data, with focus on privacy, consent, data power, surveillance, digital inequality, and representational harm.",
    thesis:
      "AI-generated privacy observations must be verified against actual policies and credible sources before they shape ethical conclusions.",
    domain: "Digital platform data governance",
    aiRole: "Summarize, compare, and flag privacy-policy and platform-data concerns.",
    humanRole: "Critically verify AI claims, identify missing ethical issues, and judge policy implications.",
    ethicalIssues: "Consent, third-party sharing, surveillance, data power, inequality, and representational harm.",
    principles: ["PRIVACY", "CONSENT", "DATA POWER", "DIGITAL INEQUALITY"],
    sections: {
      problem:
        "Digital platforms collect and process personal data across app interactions, location services, payments, device identifiers, and support channels. A responsible audit asks what is collected, why it is collected, who benefits, and what control users keep.",
      approach:
        "The audit traces the data lifecycle from collection to control, then compares AI-generated observations with policy evidence and external context.",
      data: [
        "Types of data collected",
        "Purpose of collection",
        "Third-party data sharing",
        "User rights and controls",
        "Consent mechanisms",
        "Privacy concerns",
      ],
      risks: [
        "Manipulative practices or dark patterns",
        "Data power imbalance between platform and users",
        "Surveillance through persistent behavioral or location data",
        "Digital inequality for users with less bargaining power",
        "Representational harm from incomplete or biased assumptions",
      ],
      safeguards: [
        "Verify AI observations against actual privacy policies",
        "Document verdicts as correct, partial, incorrect, or missing",
        "Identify evidence gaps instead of treating summaries as facts",
        "Prioritize consent clarity and user controls",
      ],
      humanRole:
        "The auditor remains accountable for interpretation. AI may accelerate scanning, but human review determines whether evidence is sufficient and whether an ethical issue has been missed.",
      takeaway:
        "Responsible data work requires skepticism: AI outputs are starting points for verification, not final evidence.",
    },
  },
  {
    slug: "atm-logistics",
    number: "03",
    category: "BANKING / SUSTAINABILITY / RESPONSIBLE AI",
    title: "AI-Powered Predictive Cash Logistics",
    subtitle: "ATM Replenishment Optimization",
    description:
      "Using AI forecasting and optimization to improve ATM cash availability while embedding equity constraints, privacy protections, human oversight, transparency, and sustainability.",
    thesis:
      "Optimization is responsible only when efficiency gains do not under-serve communities or remove meaningful human control.",
    domain: "Banking operations and cash logistics",
    aiRole: "Forecast ATM demand and propose replenishment amounts, routes, and schedules.",
    humanRole: "Operations managers review, override, audit, and respond to escalations.",
    ethicalIssues: "Financial access, privacy, role displacement, sustainability, and safety.",
    principles: ["FAIRNESS", "SUSTAINABILITY", "TRANSPARENCY", "HUMAN OVERSIGHT", "PRIVACY"],
    sections: {
      problem:
        "ATM cash availability depends on demand patterns, logistics capacity, local events, weather, and location context. Poor replenishment can create downtime, excess cash holdings, unnecessary trips, and uneven service across communities.",
      approach:
        "The AI pipeline transforms operational data into demand forecasts, optimizes replenishment amounts and routes, schedules deployment, and feeds actual outcomes back into retraining.",
      data: [
        "ATM withdrawal volumes",
        "Local events and holidays",
        "Weather data",
        "CIT logs and routes",
        "ATM location and demographics",
      ],
      risks: [
        "Under-serving rural or lower-income ATMs",
        "Widening financial-access gaps",
        "Potential displacement of logistics roles",
        "Privacy risks if individual transactions are processed",
      ],
      safeguards: [
        "Minimum service-level guarantees",
        "Equity constraints in optimization",
        "Periodic audits by region and income segment",
        "Model factsheets covering purpose, data, and limitations",
        "Aggregated, anonymized ATM-level data",
        "Reduced CIT trips, fuel use, emissions, and excess cash holdings",
      ],
      humanRole:
        "An operations manager can override AI-generated plans. Low-confidence decisions receive weekly review, and staff or customer escalation mechanisms remain available.",
      takeaway:
        "A logistics model should optimize service, equity, privacy, and sustainability together.",
    },
  },
  {
    slug: "loan-approval",
    number: "04",
    category: "AI GOVERNANCE / DECISION-MAKING",
    title: "Should AI Make This Decision?",
    subtitle: "AI in Loan Approval",
    description:
      "Applying the TRACE framework to determine what can be automated and where human authority, contestability, and accountability must remain.",
    thesis:
      "Loan approval may be partially automated, but final rejection decisions need human accountability and a clear path to challenge.",
    domain: "Financial decision-making",
    aiRole: "Assist with preliminary risk scoring, document checks, identity checks, and eligibility filtering.",
    humanRole: "Own borderline cases, final rejection decisions, fairness audits, reassessments, and compliance intervention.",
    ethicalIssues: "Bias, vulnerable groups, contestability, evidence quality, and authority.",
    principles: ["TASK", "RISK", "AUTHORITY", "CONTESTABILITY", "EVIDENCE"],
    sections: {
      problem:
        "Loan approval can affect financial opportunity, access, and dignity. The TRACE test asks whether AI should make, support, or avoid this decision based on task boundaries, risk, authority, contestability, and evidence.",
      approach:
        "Automation should stop before final high-impact judgment. AI can assist with preliminary risk scoring, document verification, identity verification, and transparent pre-set eligibility filtering.",
      data: [
        "Application and eligibility information",
        "Documents and identity records",
        "Pre-set lending criteria",
        "Risk indicators requiring review",
      ],
      risks: [
        "Disparate impact on protected or vulnerable groups",
        "Opaque rejection decisions",
        "Reduced contestability for applicants",
        "Over-automation of borderline cases",
      ],
      safeguards: [
        "Every AI-influenced rejection includes clear key-factor explanations",
        "Regular disparate-impact audits",
        "Human compliance officer authorized to halt or adjust the model",
        "Human review for borderline cases, rejections, and reassessment requests",
      ],
      humanRole:
        "Humans remain responsible for final rejection decisions, fairness audits, and any case requiring reassessment or remedy.",
      takeaway:
        "Final verdict: partially automated. AI assists; humans remain accountable.",
    },
  },
];

export const progression = [
  { number: "01", label: "DESIGN", copy: "Define the system around human responsibility." },
  { number: "02", label: "AUDIT", copy: "Interrogate data practices, evidence, and power." },
  { number: "03", label: "SAFEGUARD", copy: "Embed fairness, privacy, oversight, and sustainability." },
  { number: "04", label: "GOVERN", copy: "Decide where automation must stop." },
];

export const skills = [
  "AI SYSTEM DESIGN",
  "ETHICAL RISK ANALYSIS",
  "DATA GOVERNANCE",
  "HUMAN-CENTRED AI",
  "AI CRITICAL EVALUATION",
  "RESPONSIBLE AI GOVERNANCE",
  "SUSTAINABLE AI",
  "DECISION FRAMEWORKS",
];

export const principleIcons = {
  FAIRNESS: Scale,
  PRIVACY: Lock,
  TRANSPARENCY: FileSearch,
  ACCOUNTABILITY: BadgeCheck,
  SAFETY: ShieldCheck,
  CONSENT: Fingerprint,
  "DATA POWER": Database,
  "DIGITAL INEQUALITY": UserCheck,
  SUSTAINABILITY: Leaf,
  "HUMAN OVERSIGHT": UserCheck,
  TASK: Activity,
  RISK: ShieldCheck,
  AUTHORITY: UserCheck,
  CONTESTABILITY: FileSearch,
  EVIDENCE: Database,
  BANKING: Banknote,
  HEALTHCARE: HeartPulse,
};

export const frameworkPrinciples = [
  "FAIRNESS",
  "PRIVACY",
  "TRANSPARENCY",
  "ACCOUNTABILITY",
  "SAFETY",
  "HUMAN OVERSIGHT",
  "SUSTAINABILITY",
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}
