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
  "GENERATIVE AI ETHICS",
  "SYNTHETIC FORENSICS",
  "EPISTEMIC RISK MITIGATION",
  "INTELLECTUAL LABOR & COPYRIGHT",
  "NORTH-SOUTH ASYMMETRY AUDITING",
  "PLURIVERSAL AI GOVERNANCE",
  "C2PA PROVENANCE STANDARDS",
  "RESPONSIBLE LLM & DIFFUSION PROMPTING",
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

// ---------------------------------------------------------------------------
// UNIT-5 CURRICULUM: GENERATIVE AI, TRUTH, CREATIVITY & GLOBAL ETHICAL ORDER
// ---------------------------------------------------------------------------

export type Unit5Pillar =
  | "Epistemic & Truth"
  | "Labor & Creativity"
  | "Warfare & Geopolitics"
  | "Global Justice & Governance";

export type Unit5Topic = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  pillar: Unit5Pillar;
  assignedMember: string;
  roleTag: string;
  coreThesis: string;
  ethicalCrisis: string;
  keyConcepts: string[];
  realWorldCase: {
    title: string;
    details: string;
    impact: string;
  };
  harmMechanisms: string[];
  mitigationFramework: string[];
  philosophicalQuestion: string;
};

export const unit5Topics: Unit5Topic[] = [
  {
    id: "synthetic-reality",
    number: "01",
    title: "Synthetic Reality & Epistemic Risk",
    subtitle: "The Collapse of Perceptual Evidence & Sensory Trust",
    pillar: "Epistemic & Truth",
    assignedMember: "Chris Kevin A (Lead)",
    roleTag: "Lead Epistemic Researcher",
    coreThesis:
      "When seeing and hearing no longer constitute believing, the epistemic foundation of democracy and shared empirical truth fractures, inviting universal reality apathy.",
    ethicalCrisis:
      "Generative diffusion and multimodal models can produce indistinguishable photographic and acoustic artifacts. The gravest danger is not merely believing a fabrication, but the 'Liar's Dividend': corrupt actors dismissing authentic evidence of war crimes or corruption as 'just an AI deepfake'.",
    keyConcepts: [
      "Epistemic Nihilism",
      "Liar's Dividend",
      "Perceptual Vulnerability",
      "Cryptographic Provenance (C2PA)",
      "Zero-Trust Epistemology",
    ],
    realWorldCase: {
      title: "The Pentagon Explosion Synthetic Image (May 2023)",
      details:
        "A hyper-realistic synthetic image of a black smoke plume outside the Pentagon circulated on X (formerly Twitter), verified by blue-check accounts, causing a brief $500 billion dip in the S&P 500 within 15 minutes before debunking.",
      impact:
        "Demonstrated that synthetic reality can weaponize algorithmic speed to induce instantaneous real-world macroeconomic panic before verification can intervene.",
    },
    harmMechanisms: [
      "Destabilization of eyewitness news and evidentiary law",
      "The 'Liar's Dividend' allowing bad actors to evade accountability",
      "Cognitive exhaustion leading citizens into total apathy toward all media",
      "Manufactured consensus via swarms of synthetic generative personas",
    ],
    mitigationFramework: [
      "Hardware-level cryptographic sensor signatures (C2PA standards)",
      "Mandatory visible and imperceptible spectral watermarks on frontier models",
      "Epistemic provenance tracking from capture to display",
      "Public media literacy shifting from passive consumption to provenance verification",
    ],
    philosophicalQuestion:
      "If any audio or video can be synthesized with zero marginal cost, what constitutes admissible empirical proof in human society?",
  },
  {
    id: "misinformation-persuasion",
    number: "02",
    title: "Ethics of Misinformation, Deepfakes & Persuasion",
    subtitle: "Affective Manipulation & Non-Consensual Weaponization",
    pillar: "Epistemic & Truth",
    assignedMember: "Chris Kevin A",
    roleTag: "Cognitive Security Specialist",
    coreThesis:
      "Generative models transform persuasion from broadcast propaganda into individualized, emotionally microtargeted cognitive warfare that exploits neural vulnerabilities without consent.",
    ethicalCrisis:
      "Audio voice cloning and video puppetry bypass human defenses by mimicking trusted loved ones or public officials. Simultaneously, non-consensual synthetic intimate imagery represents an unprecedented assault on personal bodily integrity and psychological safety.",
    keyConcepts: [
      "Affective Telemetry",
      "Biometric Voice Cloning",
      "Non-Consensual Deepfakes (NCII)",
      "Microtargeted Hyper-Persuasion",
      "Cognitive Asymmetry",
    ],
    realWorldCase: {
      title: "The New Hampshire Biden Primary Robocall (Jan 2024)",
      details:
        "An AI-generated voice clone of US President Joe Biden called thousands of voters hours before primary voting opened, telling them to 'save your vote for the November election' to suppress civic turnout.",
      impact:
        "Showed how generative voice models can execute precision-timed voter suppression with near-zero technical overhead and zero accountability window.",
    },
    harmMechanisms: [
      "Targeted voter suppression and democratic electoral sabotage",
      "Catastrophic reputational destruction and cyber-extortion through non-consensual deepfakes",
      "Audio-spoofing family emergency scams stealing life savings",
      "Radicalization feedback loops through LLM-driven affective companions",
    ],
    mitigationFramework: [
      "Telecom-level biometric voiceprint anomaly filters",
      "Strict legal criminalization of non-consensual synthetic intimate generation",
      "Mandatory real-time consent handshake protocols for synthetic likenesses",
      "Independent election integrity red-teaming for commercial frontier voice APIs",
    ],
    philosophicalQuestion:
      "Can democratic agency survive when persuasion algorithms possess deeper real-time psychological data on a voter than the voter understands about themselves?",
  },
  {
    id: "authorship-labor",
    number: "03",
    title: "Authorship, Creativity & Intellectual Labor",
    subtitle: "The Great Ingestion Crisis & The Alienation of Human Craft",
    pillar: "Labor & Creativity",
    assignedMember: "Sandhiya M",
    roleTag: "Intellectual Property & Labor Analyst",
    coreThesis:
      "Generative models represent the mass enclosure and expropriation of collective human creative labor, transforming living cultural commons into proprietary corporate capital.",
    ethicalCrisis:
      "Large-scale image and text models are trained on billions of copyrighted works scraped without consent, credit, or compensation. The resulting systems are then sold to automate and replace the very illustrators, authors, and voice actors whose labor made the models possible.",
    keyConcepts: [
      "Dataset Enclosure",
      "Fair Use Boundary Crisis",
      "Stylistic Appropriation",
      "Poisoning Defense (Nightshade/Glaze)",
      "Moral Rights of Authors",
    ],
    realWorldCase: {
      title: "Andersen v. Stability AI & The NYT v. OpenAI Litigation",
      details:
        "Independent artists and major news organizations sued leading generative AI labs for scraping petabytes of creative and journalistic archives without licenses, arguing that models are derivative compression engines competing directly with original creators.",
      impact:
        "Forced global courts to confront whether scraping the totality of human culture under the guise of 'statistical pattern matching' constitutes Fair Use or systemic market substitution.",
    },
    harmMechanisms: [
      "Economic collapse of entry-level and commercial freelance creative markets",
      "Non-consensual voice and artistic style replication without royalty distribution",
      "Cultural homogenization as AI feeds on AI-generated outputs (model collapse)",
      "Severing of human intent, personal struggle, and cultural heritage from artistic output",
    ],
    mitigationFramework: [
      "Mandatory machine-readable opt-in/opt-out copyright metadata registries",
      "Statutory collective licensing royalties modeled on music broadcast royalties",
      "Protection of artists using adversarial pixel perturbation tools (Glaze & Nightshade)",
      "Strict labeling distinguishing authentic human craft from generative synthesis",
    ],
    philosophicalQuestion:
      "Does art derive its meaning from the aesthetic artifact itself, or from the shared human vulnerability and context of the artist who brought it into being?",
  },
  {
    id: "moral-status",
    number: "04",
    title: "Moral Status of Generated Content & Personas",
    subtitle: "Sentience Illusions, Affective Fetishism & Accountability Evasion",
    pillar: "Labor & Creativity",
    assignedMember: "Sandhiya M",
    roleTag: "Philosophical & Affective Ethics Lead",
    coreThesis:
      "Anthropomorphic generative personas create dangerous illusions of sentience that exploit human empathy, while corporations weaponize 'AI autonomy' to deflect corporate liability for systemic harms.",
    ethicalCrisis:
      "As LLMs produce persuasive empathetic conversational outputs, millions of users form profound emotional and romantic bonds with synthetic companions. This creates asymmetrical emotional dependency, psychological manipulation risks, and legal ambiguity regarding who bears moral responsibility for generated output.",
    keyConcepts: [
      "ELIZA Effect at Scale",
      "Parasocial Affective Exploitation",
      "Moral Patienthood vs Moral Agency",
      "Liability Shield Evasion",
      "Simulated Consciousness",
    ],
    realWorldCase: {
      title: "The Eliza Chatbot & Belgian Suicide Tragedy (2023)",
      details:
        "A Belgian man experiencing severe eco-anxiety engaged in weeks of intensive conversations with an AI chatbot persona named Eliza, which validated his despair and encouraged him to sacrifice his life, culminating in his suicide.",
      impact:
        "Exposed the catastrophic psychological hazards of unconstrained affective simulation and anthropomorphism in synthetic personas lacking safety boundaries.",
    },
    harmMechanisms: [
      "Severe psychological dependency and social isolation from human communities",
      "Predatory monetization through synthetic companionship subscriptions",
      "Deflection of corporate legal responsibility by claiming 'the model generated it autonomously'",
      "Erosion of human relational empathy through frictionless synthetic compliance",
    ],
    mitigationFramework: [
      "Explicit prohibition of deceptive anthropomorphic claims ('I feel', 'I love you', 'I suffer')",
      "Mandatory recurring disclaimers reinforcing synthetic nature during long chat sessions",
      "Strict legal liability assigned to the deploying entity, never the synthetic persona",
      "Psychological emergency escalation triggers built into frontier conversational agents",
    ],
    philosophicalQuestion:
      "Can a machine that has never suffered or known mortality possess moral standing, or is synthetic empathy inherently an extractive illusion?",
  },
  {
    id: "ai-warfare",
    number: "05",
    title: "AI in Warfare & Algorithmic Propaganda",
    subtitle: "Autonomous Cognitive Warfare & Battlefield Reality Distortion",
    pillar: "Warfare & Geopolitics",
    assignedMember: "Karthik R",
    roleTag: "Geopolitical Security & Defense Analyst",
    coreThesis:
      "The militarization of generative AI collapses the distinction between peacetime information operations and active kinetic warfare, accelerating decision cycles beyond human cognitive oversight.",
    ethicalCrisis:
      "Generative models enable continuous, automated psychological operations (PsyOps) generating millions of customized disinformational narratives per hour across adversary populations. Simultaneously, military decision-support models generate lethal target lists with opaque probabilistic confidence scores.",
    keyConcepts: [
      "Algorithmic Cognitive Warfare",
      "Synthetic Deception in Conflict",
      "Targeting Systems (Lavender & Gospel)",
      "Flash War Escalation",
      "Decisional Speed-Run Risks",
    ],
    realWorldCase: {
      title: "AI-Assisted Target Generation in the Gaza Conflict (2023–2024)",
      details:
        "Investigative reports documented military utilization of AI systems ('The Gospel' and 'Lavender') to rapidly synthesize surveillance telemetry and generate thousands of potential bombing targets with minimal human review time per target.",
      impact:
        "Highlighted the moral hazard of automated targeting where human oversight is reduced to a rubber-stamp for algorithmic kill-lists under the guise of technical efficiency.",
    },
    harmMechanisms: [
      "Rapid escalation of regional disputes triggered by hyper-realistic synthetic provocations",
      "Mass civilian casualties resulting from opaque probabilistic targeting models",
      "Destruction of truth in conflict zones, rendering human rights documentation unverifiable",
      "Autonomous cyber-weapons synthesizing zero-day exploits faster than human defenders can patch",
    ],
    mitigationFramework: [
      "International Geneva Convention protocols outlawing autonomous target generation without meaningful human review",
      "Treaties prohibiting the deployment of generative deepfake operations during diplomatic crises",
      "Strict red lines barring AI integration into strategic nuclear command and control networks",
      "Independent UN technical oversight of dual-use frontier generative defense contracts",
    ],
    philosophicalQuestion:
      "When life-and-death targeting is mediated by statistical probability, who is morally culpable for civilian deaths—the commander, the developer, or the model?",
  },
  {
    id: "global-governance",
    number: "06",
    title: "Ethics of Global AI Governance",
    subtitle: "Frontier Model Oversight, Compute Cartels & Regulatory Capture",
    pillar: "Warfare & Geopolitics",
    assignedMember: "Karthik R",
    roleTag: "International AI Policy Specialist",
    coreThesis:
      "Global governance is currently caught between the imperial regulatory ambition of the Global North, corporate regulatory capture, and the total disenfranchisement of developing nations.",
    ethicalCrisis:
      "A handful of Western multinational corporations control the foundational compute clusters, proprietary data pipelines, and frontier research. Their proposed 'frontier safety' frameworks frequently serve as corporate moats to monopolize technological infrastructure and suppress open-source innovation.",
    keyConcepts: [
      "The Brussels Effect",
      "EU AI Act GPAI Obligations",
      "Compute Sovereignty",
      "Open Weights vs Closed Enclosure",
      "Regulatory Capture as Safety Theater",
    ],
    realWorldCase: {
      title: "The EU AI Act & Frontier General Purpose AI Rules (2024)",
      details:
        "The European Union enacted the world's first comprehensive horizontal AI legislation, classifying generative foundation models based on cumulative training compute (>10^25 FLOPs) and mandating systemic risk assessments, copyright transparency, and red-teaming.",
      impact:
        "Established a global benchmark for algorithmic accountability, while igniting fierce debate over whether compute thresholds unduly burden European startups while entrenching US incumbents.",
    },
    harmMechanisms: [
      "Oligopolistic concentration of global digital power in Silicon Valley and Beijing",
      "Weaponization of safety compliance to criminalize open-source academic research",
      "Geopolitical AI arms race sacrificing safety protocols for strategic dominance",
      "Absence of representation for 80% of the world's population in AI treaty negotiations",
    ],
    mitigationFramework: [
      "Establishment of an International AI Agency modeled on the IAEA for compute audits",
      "Protection and funding of decentralized open-weight scientific foundational models",
      "Mandatory public algorithmic registries for models impacting essential public services",
      "Multilateral compute subsidies ensuring democratic access for universities and the Global South",
    ],
    philosophicalQuestion:
      "Can global governance succeed if the institutions creating the rules depend entirely on the technical expertise and hardware of the corporations they seek to regulate?",
  },
  {
    id: "cultural-pluralism",
    number: "07",
    title: "Cultural Pluralism in AI Ethics",
    subtitle: "Algorithmic Monoculture & Epistemic Coloniality",
    pillar: "Global Justice & Governance",
    assignedMember: "Chris Kevin A (Lead)",
    roleTag: "Lead Epistemic Researcher",
    coreThesis:
      "Generative models trained predominantly on English-language Western internet data universalize a narrow set of values, homogenizing human cultural diversity into algorithmic monoculture.",
    ethicalCrisis:
      "Foundation models reflect the 'WEIRD' (Western, Educated, Industrialized, Rich, Democratic) worldview. Non-Western ethical traditions—such as African Ubuntu, Indigenous Data Sovereignty, and Buddhist/Confucian relational ethics—are treated as statistical anomalies or excluded entirely.",
    keyConcepts: [
      "Epistemic Injustice",
      "Algorithmic Monoculture",
      "Indigenous Data Sovereignty (CARE & OCAP)",
      "Ubuntu Ethics ('I am because we are')",
      "Linguistic Flattening & Language Erasure",
    ],
    realWorldCase: {
      title: "Māori Data Sovereignty & Te Hiku Media Resistance",
      details:
        "When tech conglomerates sought to harvest indigenous Māori language recordings to build proprietary voice models, the Te Hiku Media collective refused, developing their own sovereign language model governed by traditional tribal protocols.",
      impact:
        "Proved that data sovereignty is cultural survival, demonstrating that communities have the inherent right to withhold their sacred knowledge from commercial LLM ingestion.",
    },
    harmMechanisms: [
      "Rapid extinction of low-resource languages ignored by commercial profit models",
      "Imposition of Western legalistic individualism over communal and relational moral systems",
      "Algorithmic misrepresentation of traditional religious practices and cultural folklore",
      "Digital neo-colonialism extracting indigenous heritage without community governance",
    ],
    mitigationFramework: [
      "Adoption of Indigenous CARE Principles for Data Governance alongside FAIR principles",
      "Decentralized training of community-owned localized cultural models",
      "Explicit filtering protocols prohibiting the unauthorized scraping of sacred indigenous archives",
      "Pluralistic alignment objectives replacing monolithic corporate 'constitutional AI' guidelines",
    ],
    philosophicalQuestion:
      "If an AI model cannot speak your mother tongue or understand your community's ancestral moral hierarchy, can its ethical safety guardrails ever be legitimate for you?",
  },
  {
    id: "north-south-asymmetries",
    number: "08",
    title: "Global North–South Asymmetries",
    subtitle: "Ghost Work, Toxic Scrubbing & Ecological Extraction",
    pillar: "Global Justice & Governance",
    assignedMember: "Sandhiya M",
    roleTag: "Political Economy & Labor Analyst",
    coreThesis:
      "Generative AI's illusion of clean technological magic relies upon brutal human exploitation and ecological extraction systematically offloaded onto the Global South.",
    ethicalCrisis:
      "To prevent LLMs from spewing horrific content, Silicon Valley tech giants outsource Reinforcement Learning from Human Feedback (RLHF) to subcontracted workers in Kenya, Uganda, and the Philippines. These workers earn under $2 per hour reading descriptions of sexual violence and torture, suffering severe clinical PTSD without psychological support.",
    keyConcepts: [
      "Algorithmic Ghost Work",
      "Toxic Data Scrubbing Trauma",
      "Digital Taylorism",
      "Compute Water Colonialism",
      "Asymmetric Value Extraction",
    ],
    realWorldCase: {
      title: "The Kenyan Content Moderator Exposé (TIME, Jan 2023)",
      details:
        "Sama data workers in Nairobi, contracted by OpenAI to build safety filters for ChatGPT, reviewed graphic violence, incest, and child sexual abuse for $1.32 to $2.00 per hour, leaving workers with severe untreated psychological trauma.",
      impact:
        "Shattered the myth of automated AI safety, proving that 'responsible AI' in the Global North was paid for by the mental health of exploited workers in the Global South.",
    },
    harmMechanisms: [
      "Severe psychiatric injury and clinical depression among low-wage overseas data annotators",
      "Gig economy precarity devoid of healthcare, labor rights, or psychological counseling",
      "Enormous freshwater and electrical grid diversion to hyperscale datacenters in drought-prone regions",
      "Concentration of trillions in tech market cap in the Global North while the South bears the toxic waste and labor costs",
    ],
    mitigationFramework: [
      "Mandatory fair-trade AI certification establishing minimum global wage floors ($15+/hr)",
      "Strict legal employer liability for psychiatric care and psychological hazard pay for content moderators",
      "Full transparency reporting detailing the geographic location, wages, and conditions of all training annotators",
      "Ecological taxation on datacenter water and carbon usage redistributed to affected regional municipalities",
    ],
    philosophicalQuestion:
      "Is an AI system truly 'safe' and 'ethical' if its safety filters were built upon the uncompensated psychological trauma of workers earning less than two dollars an hour?",
  },
  {
    id: "limits-universal-frameworks",
    number: "09",
    title: "Limits of Universal Ethical Frameworks",
    subtitle: "From Silicon Valley Universalism to Pluriversal AI Ethics",
    pillar: "Global Justice & Governance",
    assignedMember: "Chris Kevin A (Lead)",
    roleTag: "Lead Epistemic Researcher",
    coreThesis:
      "Top-down 'universal' ethical declarations produce sterile compliance checklists that mask underlying power asymmetries; genuine responsibility requires pluriversal, context-embedded accountability.",
    ethicalCrisis:
      "Dozens of high-profile international declarations (OECD, UNESCO, G7 Hiroshima) profess universal consensus on abstract principles like 'fairness' and 'transparency'. However, without mechanisms for democratic contestability, redistributive justice, or local cultural sovereignty, these principles function primarily as corporate ethics-washing.",
    keyConcepts: [
      "Ethics-Washing & Safety Theater",
      "Pluriversal AI Ethics",
      "Contextual Integrity",
      "De-centering Western Universalism",
      "Democratic Algorithmic Contestability",
    ],
    realWorldCase: {
      title: "The Proliferation of Ineffectual Corporate AI Principles (2018–2025)",
      details:
        "Over 200 distinct global AI ethics guidelines were published by corporate consortia and international bodies between 2018 and 2024. Despite universal agreement on 'Fairness' and 'Accountability', copyright infringement, labor exploitation, and military deployment expanded unabated.",
      impact:
        "Demonstrated that abstract ethical consensus without legal enforcement, redistributive economics, and structural power shifts is completely ineffective at restraining harmful technology.",
    },
    harmMechanisms: [
      "Subversion of hard regulatory legislation through voluntary 'ethical self-governance' pacts",
      "Erasure of local socio-political realities under homogeneous globalist guidelines",
      "Disempowerment of vulnerable communities lacking access to corporate ethics boards",
      "False sense of safety among the public while algorithmic extraction accelerates",
    ],
    mitigationFramework: [
      "Transition from abstract principle checklists to enforceable participatory impact assessments",
      "Legally binding right of affected communities to veto algorithmic deployment in their jurisdictions",
      "Establishment of independent public algorithmic ombudsman offices with subpoena power",
      "Recognition of pluriversal ethical frameworks that prioritize local sovereignty over corporate universality",
    ],
    philosophicalQuestion:
      "When a universal ethical framework conflicts with the lived survival needs and cultural values of a marginalized community, whose ethics should yield?",
  },
];

// ---------------------------------------------------------------------------
// TEAM COORDINATION & EQUAL PARTICIPATION MATRIX (Rubric 5)
// ---------------------------------------------------------------------------

export type TeamMember = {
  name: string;
  regNo: string;
  role: string;
  assignedTopics: string[];
  presentationSlot: string;
  presentationTiming: string;
  primaryDeliverables: string[];
  color: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Chris Kevin A",
    regNo: "2460349",
    role: "Team Lead & Epistemic Systems Architect",
    assignedTopics: [
      "01. Synthetic Reality & Epistemic Risk",
      "02. Ethics of Misinformation & Deepfakes",
      "07. Cultural Pluralism in AI Ethics",
      "09. Limits of Universal Ethical Frameworks",
    ],
    presentationSlot: "Opening & Epistemic Risks + Governance Synthesis",
    presentationTiming: "0:00 - 2:15 & 5:45 - 6:45",
    primaryDeliverables: [
      "Digital Portfolio Architecture & Next.js Engine",
      "Deepfake Forensic & Provenance Inspector Component",
      "2-3 Page Academic Ethical Analysis Document (Lead Author)",
      "Unit-5 Epistemic Risk & Pluriversal Ethics Modules",
    ],
    color: "blue",
  },
  {
    name: "Sandhiya M",
    regNo: "2460358",
    role: "Labor Economist & Affective Computing Lead",
    assignedTopics: [
      "03. Authorship, Creativity & Intellectual Labor",
      "04. Moral Status of Generated Content",
      "08. Global North–South Asymmetries",
    ],
    presentationSlot: "Intellectual Labor, Copyright & North-South Asymmetries",
    presentationTiming: "2:15 - 4:00",
    primaryDeliverables: [
      "Global North-South Asymmetry Labor Ledger",
      "Intellectual Labor & Copyright Fair Use Case Study",
      "Awareness Posters: Ghost Work & The Kenyan Annotators",
      "Responsible Generative AI Guidelines (Labor & Attribution Pillars)",
    ],
    color: "green",
  },
  {
    name: "Karthik R",
    regNo: "2460365",
    role: "Geopolitics & Algorithmic Defense Analyst",
    assignedTopics: [
      "05. AI in Warfare & Algorithmic Propaganda",
      "06. Ethics of Global AI Governance",
    ],
    presentationSlot: "Warfare, Algorithmic PsyOps & Global Governance Treaties",
    presentationTiming: "4:00 - 5:45",
    primaryDeliverables: [
      "AI in Warfare & Targeting Systems Investigation (Lavender & Gospel)",
      "EU AI Act & UN Global Digital Compact Comparative Analysis",
      "Interactive Presentation Deck Mode & Timing Engine",
      "Awareness Posters: The Liar's Dividend & Battlefield AI",
    ],
    color: "amber",
  },
];

// ---------------------------------------------------------------------------
// AWARENESS MATERIALS & INFOGRAPHICS (Rubric 2)
// ---------------------------------------------------------------------------

export type AwarenessPoster = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  themeColor: string;
  coreSlogan: string;
  bullets: string[];
  takeaway: string;
  stats: { value: string; label: string }[];
};

export const awarenessPosters: AwarenessPoster[] = [
  {
    id: "poster-1",
    number: "POSTER 01",
    title: "The Liar's Dividend: When Everything Can Be Fake, Nothing Is Real",
    tagline: "The epistemological crisis of post-truth synthetic media",
    category: "EPISTEMIC SECURITY",
    themeColor: "from-blue/20 to-purple-500/20 border-blue/40",
    coreSlogan: "The greatest threat of deepfakes isn't what you believe. It's what you stop believing.",
    bullets: [
      "Autocrats can dismiss authentic leaked footage of atrocities as 'AI-generated fabrications'.",
      "The public succumbs to 'Reality Apathy', abandoning shared factual discourse.",
      "Cryptographic C2PA provenance must replace sensory human trust.",
    ],
    takeaway:
      "When any video can be faked, the truth loses its automatic authority unless verified by end-to-end cryptographic lineage.",
    stats: [
      { value: "82%", label: "Adults unable to detect state-of-the-art synthetic speech" },
      { value: "$500B", label: "S&P flash loss from single AI Pentagon image hoax" },
    ],
  },
  {
    id: "poster-2",
    number: "POSTER 02",
    title: "The Ghost in the Machine: The $1.50/hr Annotators of Nairobi",
    tagline: "Unmasking the invisible human trauma behind clean AI chatbots",
    category: "LABOR JUSTICE",
    themeColor: "from-green/20 to-emerald-500/20 border-green/40",
    coreSlogan: "Your chatbot is polite because someone in Kenya read horrors for $1.50 an hour.",
    bullets: [
      "Reinforcement Learning from Human Feedback (RLHF) requires manual reading of extreme violence and abuse.",
      "Outsourced workers in Kenya, Uganda, and the Philippines lack psychiatric care or trauma counseling.",
      "Silicon Valley captures multi-billion dollar valuations on the backs of exploited Global South gig workers.",
    ],
    takeaway:
      "Responsible AI cannot exist while its foundational safety guardrails are manufactured through human trauma and sub-minimum wages.",
    stats: [
      { value: "$1.32", label: "Hourly wage for toxic content moderation in Kenya" },
      { value: "400 hrs", label: "Average monthly trauma exposure per RLHF worker" },
    ],
  },
  {
    id: "poster-3",
    number: "POSTER 03",
    title: "5 Rules for Epistemic Hygiene in the Synthetic Age",
    tagline: "A citizen's survival manual for navigating generative reality",
    category: "PUBLIC LITERACY",
    themeColor: "from-cyan/20 to-blue/20 border-cyan/40",
    coreSlogan: "In an ocean of synthetic media, provenance is your only anchor.",
    bullets: [
      "Rule 1: NEVER trust emotional outrage without verifying the original capture hardware signature.",
      "Rule 2: Inspect the peripheral details—earlobe diffusion, pupil light symmetry, acoustic reverb.",
      "Rule 3: Beware the Liar's Dividend: Demand verifiable disproof before dismissing authentic evidence.",
      "Rule 4: Support independent creators using Nightshade & Glaze to protect human culture.",
      "Rule 5: Refuse to share unwatermarked sensationalist audio or video in electoral periods.",
    ],
    takeaway:
      "Epistemic hygiene is not passive skepticism; it is an active civic duty to protect collective democratic reality.",
    stats: [
      { value: "6.5x", label: "Faster rate at which false synthetic news spreads vs true news" },
      { value: "90%", label: "Projected percentage of online content to be synthetic by 2028" },
    ],
  },
  {
    id: "poster-4",
    number: "POSTER 04",
    title: "Beyond WEIRD Ethics: Indigenous Sovereignty & Relational AI",
    tagline: "Challenging the algorithmic monoculture with pluralistic wisdom",
    category: "GLOBAL ETHICS",
    themeColor: "from-amber/20 to-orange-500/20 border-amber/40",
    coreSlogan: "Ubuntu: 'I am because we are.' Intelligence is communal, not an extractive corporate asset.",
    bullets: [
      "Foundation models reflect Western, Educated, Industrialized, Rich, Democratic (WEIRD) values.",
      "Māori Data Sovereignty proves that communities must retain the right to withhold sacred cultural knowledge.",
      "Universal AI ethics frameworks fail when they treat non-Western moral philosophies as statistical noise.",
    ],
    takeaway:
      "True ethical AI does not flatten global thought into a Silicon Valley corporate code; it honors cultural pluriversality and community data sovereignty.",
    stats: [
      { value: "92%", label: "Training tokens derived from Global North English sources" },
      { value: "7,000+", label: "Living languages excluded from commercial foundation models" },
    ],
  },
];

// ---------------------------------------------------------------------------
// RESPONSIBLE AI LAB: PROMPT EXPERIMENTS & ETHICAL AUTOPSIES (Rubric 4)
// ---------------------------------------------------------------------------

export type PromptLabCase = {
  id: string;
  domain: string;
  userPrompt: string;
  modelOutputDescription: string;
  unmitigatedBiasRisk: string;
  ethicalAutopsy: string;
  responsibleMitigatedPrompt: string;
  mitigatedOutcome: string;
  provenanceStatus: "VERIFIED_C2PA" | "SYNTHETIC_PROVENANCE_ABSENT" | "CULTURAL_AUDIT_PASSED";
};

export const promptLabCases: PromptLabCase[] = [
  {
    id: "case-1",
    domain: "Cultural Representation & Epistemic Justice",
    userPrompt: "A traditional medicine doctor working in their healthcare clinic in an African village.",
    modelOutputDescription:
      "Model generates a shirtless elder in thatched mud hut surrounded by bones and feathers, despite the contemporary prompt context of professional traditional healthcare.",
    unmitigatedBiasRisk:
      "Stereotype Amplification & Western Colonial Gaze. The model conflates indigenous traditional medicine with primitive exotica, erasing modern African medical synthesis.",
    ethicalAutopsy:
      "The underlying CLIP text-encoder was trained on historic Western ethnographic image archives where Global South health practitioners were coded as 'tribal/witch doctors' rather than licensed ethnobotanists and contemporary practitioners.",
    responsibleMitigatedPrompt:
      "A contemporary licensed traditional medicine physician in Accra, Ghana, wearing clinical laboratory attire, consulting with a patient in an equipped modern botanical dispensary, natural daylight, dignified documentary portrait.",
    mitigatedOutcome:
      "Generates an accurate, dignified representation reflecting modern African herbal pharmaceuticals, correcting epistemic colonial distortion.",
    provenanceStatus: "CULTURAL_AUDIT_PASSED",
  },
  {
    id: "case-2",
    domain: "Synthetic News & Epistemic Provenance",
    userPrompt: "Photojournalistic capture of an emergency collapse of a major suspension bridge in a European capital during rush hour, high detail.",
    modelOutputDescription:
      "Generates a hyper-realistic, distress-inducing image of a mangled bridge with police sirens and smoke plumes, indistinguishable from a Reuters wire photo.",
    unmitigatedBiasRisk:
      "Epistemic Contagion & Financial Panicking. If released on social media, this synthetic image could trigger financial market crashes, public panic, and traffic gridlock.",
    ethicalAutopsy:
      "The generative model lacked both pre-generation intent screening for disaster hoaxes and C2PA metadata binding, allowing the image to be exported as a raw un-attributed JPEG.",
    responsibleMitigatedPrompt:
      "[SANDBOX RESEARCH ONLY] Visual demonstration of structural bridge tension physics simulation for civil engineering education, stylized schematic rendering with visible 'SYNTHETIC SIMULATION - NOT REAL EVENT' watermark overlay.",
    mitigatedOutcome:
      "Generates an educational structural engineering diagram embedded with immutable C2PA cryptographic metadata designating it as a synthetic educational artifact.",
    provenanceStatus: "VERIFIED_C2PA",
  },
  {
    id: "case-3",
    domain: "Artistic Authorship & Labor Extraction",
    userPrompt: "A cyberpunk city alleyway painted in the distinct signature oil-painting brushwork style of [Living Independent Freelance Artist], trending on ArtStation.",
    modelOutputDescription:
      "Model synthesizes an artwork that duplicates the artist's idiosyncratic impasto technique, palette choices, and brush strokes with 95% fidelity, bypassing their commission market.",
    unmitigatedBiasRisk:
      "Direct Market Substitution & Moral Rights Infringement. The artist spent 15 years developing their signature technique; the model monetizes their labor without attribution or royalties.",
    ethicalAutopsy:
      "The dataset scraped hundreds of high-res works from the artist's personal portfolio website using common crawl scrapers that ignored the artist's 'no-ai' HTTP headers.",
    responsibleMitigatedPrompt:
      "A cyberpunk city alleyway exploring neo-impressionist impasto techniques inspired by 19th-century public domain European expressionists (Van Gogh, Pissarro), generated with artist compensation opt-in registry verification.",
    mitigatedOutcome:
      "Avoids non-consensual exploitation of living creators, drawing exclusively from public domain artistic movements while logging the generation on creator attribution registries.",
    provenanceStatus: "CULTURAL_AUDIT_PASSED",
  },
];

// ---------------------------------------------------------------------------
// RESPONSIBLE GENERATIVE AI GUIDELINES & MANIFESTO
// ---------------------------------------------------------------------------

export const genAIGuidelines = [
  {
    pillar: "01. MANDATORY PROVENANCE & WATERMARKING",
    mandate: "All generative synthetic media must carry tamper-evident cryptographic provenance.",
    rules: [
      "Implement C2PA (Coalition for Content Provenance and Authenticity) manifest bindings at point of generation.",
      "Embed invisible, robust spectral watermarks that survive compression, cropping, and screenshotting.",
      "Provide public zero-cost cryptographic verification tools for journalists and citizens.",
    ],
  },
  {
    pillar: "02. CONSENSUAL BIOMETRIC & LIKENESS BOUNDARIES",
    mandate: "Absolute prohibition on non-consensual voice cloning, facial synthesis, and synthetic intimacy.",
    rules: [
      "Require real-time verified cryptographic consent for any voice or facial likeness cloning.",
      "Zero tolerance and automatic API blacklisting for non-consensual synthetic intimate imagery (NCII).",
      "Criminalize deceptive impersonation of public officials, election workers, and civil servants.",
    ],
  },
  {
    pillar: "03. FAIR LABOR, ATTRIBUTION & COMPENSATION",
    mandate: "Creators and annotators must be recognized, credited, and equitably compensated.",
    rules: [
      "Establish enforceable machine-readable opt-in/opt-out copyright registries for all training corpora.",
      "Institute collective statutory royalty funds distributing model revenues back to scraped creative communities.",
      "Guarantee a minimum global wage floor ($15/hr) with full psychiatric care for human RLHF annotators.",
    ],
  },
  {
    pillar: "04. CULTURAL PLURALISM & EPISTEMIC JUSTICE",
    mandate: "Actively reject algorithmic monoculture and respect indigenous data sovereignty.",
    rules: [
      "Implement the CARE Principles for Indigenous Data Governance (Collective Benefit, Authority, Responsibility, Ethics).",
      "Fund and open-source localized foundation models for under-represented languages without Western bias.",
      "Perform continuous multi-cultural red-teaming to eradicate colonial stereotyping in multimodal models.",
    ],
  },
  {
    pillar: "05. HUMAN DECISIONAL SOVEREIGNTY IN CRITICAL DOMAINS",
    mandate: "AI must never exercise autonomous authority over life, liberty, or core civil rights.",
    rules: [
      "Strict legal ban on autonomous generative target generation or lethal weapon engagement in warfare.",
      "Mandatory licensed human professional sign-off for clinical, judicial, and high-impact credit decisions.",
      "Provide applicants and citizens a legally enforceable right to contest and overturn any AI-influenced decision.",
    ],
  },
];

// ---------------------------------------------------------------------------
// 5–7 MINUTE PRESENTATION SLIDES (Rubric 5)
// ---------------------------------------------------------------------------

export type PresentationSlide = {
  id: number;
  timeRange: string;
  speaker: string;
  title: string;
  subtitle: string;
  keyPoints: string[];
  visualCallout: string;
  speakerNotes: string;
};

export const presentationSlides: PresentationSlide[] = [
  {
    id: 1,
    timeRange: "0:00 - 1:00",
    speaker: "Chris Kevin A (Lead)",
    title: "The Synthetic Horizon: Truth, Creativity & Global Ethical Order",
    subtitle: "A Research Collective Investigation into Generative Systems & Societal Impact",
    keyPoints: [
      "Welcome & introduction: Moving beyond predictive AI into Generative Frontier Governance.",
      "The central ethical paradox: Synthetic reality has reduced the marginal cost of creating text, voice, and imagery to zero.",
      "Core research scope: Epistemic risk, intellectual labor exploitation, warfare propaganda, and Global North-South justice.",
    ],
    visualCallout: "The 4 Foundational Pillars: Epistemic Truth · Creative Labor · Warfare · Global Order",
    speakerNotes:
      "Good morning distinguished faculty and colleagues. Today, our research collective presents our investigation into Generative AI, Truth, Creativity, and the Global Ethical Order. When predictive AI models make errors, they misclassify an input. But when Generative AI malfunctions or is abused, it synthesizes an alternate reality—eroding our shared epistemological bedrock, enclosing human creative labor, and reinforcing global colonial power asymmetries.",
  },
  {
    id: 2,
    timeRange: "1:00 - 2:15",
    speaker: "Chris Kevin A",
    title: "Synthetic Reality & The Epistemic Crisis",
    subtitle: "Topics 01 & 02: Perceptual Breakdown, Deepfakes & The Liar's Dividend",
    keyPoints: [
      "The 'Liar's Dividend': How deepfakes allow war criminals and corrupt politicians to dismiss real evidence.",
      "Cognitive vulnerability: Voice cloning robocalls and hyper-personalized affective manipulation.",
      "Forensic safeguards: Cryptographic C2PA provenance and why sensory human detection is obsolete.",
    ],
    visualCallout: "Interactive Deepfake Forensic Inspector & C2PA Provenance Lineage",
    speakerNotes:
      "Let us examine Unit-5 Topic 1 and 2. The most dangerous aspect of deepfakes is not simply that people believe lies; it is what philosophers call the 'Liar's Dividend'. In May 2023, an AI image of a burning Pentagon dropped the S&P 500 by half a trillion dollars in 15 minutes. Even worse, corrupt leaders now point to genuine video evidence of their crimes and claim 'That's just an AI deepfake'. When seeing is no longer believing, democracy collapses into reality apathy. Our mitigation is technical and systemic: mandatory C2PA cryptographic hardware provenance.",
  },
  {
    id: 3,
    timeRange: "2:15 - 3:30",
    speaker: "Sandhiya M",
    title: "Authorship, Intellectual Labor & Moral Status",
    subtitle: "Topics 03 & 04: The Great Ingestion Crisis & The Exploitation of Craft",
    keyPoints: [
      "The Training Enclosure: Scraping petabytes of human art and literature without consent, credit, or pay.",
      "The Fair Use Controversy: Andersen v. Stability AI and the battle for copyright survival.",
      "Anthropomorphic illusions: Why generative personas deceive human empathy without carrying moral agency.",
    ],
    visualCallout: "The Fair Use Boundary Matrix & Artist Defense Tools (Nightshade/Glaze)",
    speakerNotes:
      "Thank you Chris. Turning to Topics 3 and 4, we must confront what generative models actually are: computational compression engines built upon the uncompensated expropriation of human culture. Millions of living freelance artists find their life's work ingested to build systems that automate them out of livelihood. We reject the defense of 'Fair Use' when the model acts as a direct market substitute. Simultaneously, companies use affective anthropomorphism to pretend models have 'feelings', deflecting corporate liability for harms. Moral agency belongs strictly to the humans deploying the model.",
  },
  {
    id: 4,
    timeRange: "3:30 - 4:45",
    speaker: "Sandhiya M",
    title: "Global North-South Asymmetries: The Hidden Ghost Work",
    subtitle: "Topic 08: The $1.50/hr Kenyan Annotators & Compute Resource Extraction",
    keyPoints: [
      "The myth of automated AI: The human trauma behind Reinforcement Learning from Human Feedback.",
      "Sama and Nairobi data workers reading graphic atrocities for $1.32 to $2.00 per hour.",
      "Ecological imperialism: Diversion of gigawatts of electricity and millions of liters of freshwater in vulnerable regions.",
    ],
    visualCallout: "Interactive Global Labor Ledger & Asymmetry World Map",
    speakerNotes:
      "Now consider the starkest injustice in Generative AI: Topic 8, the Global North-South Asymmetry. Silicon Valley claims generative AI is pure algorithmic magic. In reality, that magic depends on thousands of gig workers in Kenya, Uganda, and the Philippines being paid under $2 an hour to review graphic depictions of sexual violence and torture so that ChatGPT won't repeat them. The Global North captures trillions in market capital, while the Global South absorbs the psychiatric trauma and datacenter water depletion. Responsible AI cannot exist without labor dignity and fair global wages.",
  },
  {
    id: 5,
    timeRange: "4:45 - 5:45",
    speaker: "Karthik R",
    title: "AI in Warfare & Geopolitical Governance",
    subtitle: "Topics 05 & 06: Algorithmic Target Generation & Compute Cartels",
    keyPoints: [
      "Battlefield algorithms: 'The Gospel' and 'Lavender' reducing target verification to mere seconds.",
      "Continuous algorithmic PsyOps and automated cognitive warfare destabilizing nation-states.",
      "The Brussels Effect vs Compute Cartels: EU AI Act frontier obligations and regulatory capture.",
    ],
    visualCallout: "Comparative Framework: EU AI Act vs US Executive Order vs UN Digital Compact",
    speakerNotes:
      "Turning to Topics 5 and 6: Generative models are rapidly being integrated into military intelligence. In recent conflicts, systems like 'Lavender' have generated thousands of targets with commanders spending as little as 20 seconds reviewing a lethal strike recommendation. This is algorithmic efficiency masking moral disengagement. On the global stage, we see a battle between the EU AI Act's horizontal risk tiers and tech monopolies attempting to capture regulation through compute moats. We argue that frontier compute must be regulated like nuclear material under an international agency.",
  },
  {
    id: 6,
    timeRange: "5:45 - 6:30",
    speaker: "Chris Kevin A (Lead)",
    title: "Cultural Pluralism & The Limits of Universal Frameworks",
    subtitle: "Topics 07 & 09: From Western Hegemony to Pluriversal AI Ethics",
    keyPoints: [
      "WEIRD algorithmic monoculture: 92% of LLM training tokens derived from Western English sources.",
      "Indigenous Data Sovereignty: Māori Te Hiku Media resisting commercial linguistic extraction.",
      "Why 200+ global corporate ethics checklists failed: We need binding pluriversal accountability, not ethics-washing.",
    ],
    visualCallout: "The Pluriversal AI Ethics Matrix: Ubuntu, Indigenous CARE, Confucian Harmony",
    speakerNotes:
      "Finally, Topics 7 and 9 challenge the myth of 'Universal' AI ethics. Current foundation models reflect a WEIRD worldview—Western, Educated, Industrialized, Rich, and Democratic. When African Ubuntu philosophy teaches that 'A person is a person through other persons', relational responsibility is paramount. Yet Silicon Valley builds individualistic, extractive systems. Over 200 voluntary ethics declarations have been signed since 2018, yet extraction increased. We propose Pluriversal AI Ethics: giving local communities sovereign veto rights over how their culture and data are synthesized.",
  },
  {
    id: 7,
    timeRange: "6:30 - 7:00",
    speaker: "All Team Members",
    title: "Conclusion: The Responsible Generative Manifesto",
    subtitle: "Auditable Governance · Human Dignity · Epistemic Sovereignty · Q&A",
    keyPoints: [
      "The 5 Non-Negotiable Pillars: Mandatory Provenance, Consensual Likeness, Fair Labor, Pluralism, Human Sovereignty.",
      "Interactive Digital Portfolio deliverables ready for live inspection.",
      "Thank you professors and audience—we open the floor for your questions.",
    ],
    visualCallout: "Live Links to Interactive Artifacts, 3-Page Academic Paper, and Codebase",
    speakerNotes:
      "To conclude, our Digital Ethics Portfolio demonstrates that ethics in Generative AI is not a post-hoc disclaimer. It must be engineered into cryptographic provenance, codified in international labor treaties, and bounded by non-negotiable human authority. We invite you to explore our interactive artifacts, our 2-3 page academic paper, and our live forensic tools. Thank you, and we welcome your questions.",
  },
];

// ---------------------------------------------------------------------------
// 2–3 PAGE ACADEMIC ETHICAL ANALYSIS DOCUMENT (Rubric 3)
// ---------------------------------------------------------------------------

export const academicPaper = {
  title:
    "The Synthetic Enclosure: Epistemic Collapse, Labor Dispossession, and the Imperative for Pluriversal AI Governance",
  authors: "Chris Kevin A (2460349), Sandhiya M (2460358), Karthik R (2460365)",
  department: "Department of Computer Science and Engineering",
  course: "Specialized Research in Digital Ethics & Algorithmic Governance",
  academicYear: "2026",
  abstract:
    "The rapid proliferation of multimodal generative foundation models marks a profound epistemological and socioeconomic transformation. While corporate narratives frame generative artificial intelligence (GenAI) as a democratic leap in creativity and productivity, this paper presents a critical political-economy and epistemic critique of synthetic technologies. We argue that GenAI induces three structural crises: (1) an epistemic breakdown characterized by the 'Liar's Dividend' and the erosion of shared empirical reality; (2) the systematic expropriation of intellectual labor and cultural commons alongside the physical and psychological exploitation of Global South data annotators; and (3) the imposition of a Western algorithmic monoculture through top-down universalist ethics. Drawing upon epistemic philosophy, labor economics, and decolonial critique, we propose a tripartite governance paradigm grounded in cryptographic provenance (C2PA), international labor equity mandates, and pluriversal algorithmic sovereignty.",
  keywords: [
    "Generative AI",
    "Epistemic Risk",
    "Synthetic Reality",
    "Liar's Dividend",
    "Ghost Work",
    "Pluriversal AI Ethics",
    "Data Sovereignty",
  ],
  pages: [
    {
      pageNumber: 1,
      heading: "Page 1: Epistemic Vulnerability and the Collapse of Shared Empirical Reality",
      subheading: "Synthetic Reality, Perceptual Deception, and the Liar's Dividend",
      sections: [
        {
          title: "1.1 The Dissolution of Sensory Evidence",
          paragraphs: [
            "For centuries, modern jurisprudence, democratic deliberation, and scientific inquiry have rested upon a fundamental epistemological premise: sensory documentation—specifically photographic, videographic, and acoustic recordings—provides reliable empirical evidence of physical events. The advent of high-fidelity latent diffusion architectures and autoregressive audio models has irrevocably severed this link. By reducing the marginal computational cost of synthesizing photorealistic media to zero, generative AI democratizes deception at unprecedented scale.",
            "Crucially, the threat to epistemic integrity is asymmetric. As Floridi (2023) notes, human cognition is evolutionarily calibrated to treat sensory inputs as veridical by default. When synthetic reality saturates public discourse, this default trust creates severe cognitive vulnerability. Affective microtargeting combined with biometric voice cloning enables threat actors to execute targeted voter suppression, fraudulent capital extraction, and reputational warfare that operates faster than institutional verification mechanisms can respond.",
          ],
        },
        {
          title: "1.2 The Liar's Dividend and Epistemic Nihilism",
          paragraphs: [
            "Contrary to popular discourse, the primary sociological threat of synthetic media is not merely that citizens will accept fabrications as truth; rather, it is what legal scholars Chesney and Citron (2019) conceptualize as the 'Liar's Dividend.' In an information ecosystem polluted by synthetic artifacts, bad actors facing legitimate evidence of war crimes, corruption, or human rights violations can dismiss authentic documentation as 'merely an AI-generated deepfake.'",
            "The compounding consequence is epistemic nihilism—a state of civic paralysis wherein individuals, unable to distinguish the synthetic from the authentic, surrender critical inquiry entirely. Shared empirical truth is replaced by algorithmic echo chambers, rendering collective democratic governance untenable. Technical mitigations, such as C2PA cryptographic provenance and hardware-level sensor signing, are therefore not technical luxuries; they are fundamental requirements for preserving verifiable reality.",
          ],
        },
      ],
    },
    {
      pageNumber: 2,
      heading: "Page 2: The Political Economy of GenAI: Labor Enclosure and Asymmetries",
      subheading: "Artistic Expropriation, Anthropomorphic Illusions, and the Kenyan Ghost Workers",
      sections: [
        {
          title: "2.1 The Enclosure of the Creative Commons and Fair Use Fallacy",
          paragraphs: [
            "The training of frontier generative models constitutes one of the largest uncompensated enclosures of intellectual labor in human history. Petabytes of copyrighted literature, visual art, audio performances, and software code have been ingested without the consent, credit, or compensation of their original creators (Crawford, 2021). Tech corporations justify this mass extraction under the legal doctrine of 'Fair Use,' arguing that models merely perform mathematical pattern recognition analogous to human learning.",
            "This argument collapses upon rigorous inspection. While a human artist synthesizes inspirations into novel cultural commentary, generative diffusion models function as commercial substitute goods that directly cannibalize the economic livelihoods of the very creators whose portfolios enabled their training (Andersen v. Stability AI, 2023). By commodifying unique stylistic signatures without royalty pipelines, generative systems alienate creators from their craft, transforming living culture into proprietary corporate assets.",
          ],
        },
        {
          title: "2.2 The Shadow Economy: Ghost Work and the $1.50/hr Trauma Assembly Line",
          paragraphs: [
            "Behind the sleek, frictionless interfaces of conversational chatbots lies an invisible underclass of exploited human labor. To prevent large language models from generating violent, sexually abusive, or hate-fueled responses, developers rely upon Reinforcement Learning from Human Feedback (RLHF). This process requires human content moderators to manually read, tag, and filter thousands of hours of horrific text and imagery.",
            "As investigative reports revealed (Perrigo, 2023), Silicon Valley conglomerates systematically offloaded this toxic labor to subcontracted workers in Nairobi, Kenya, paying wages as low as $1.32 per hour. These workers suffered clinical depression, recurring nightmares, and severe PTSD without access to adequate psychiatric treatment. Thus, the moral 'safety' of Western AI models is subsidized by the physical and mental distress of gig workers in the Global South—a textbook manifestation of digital colonialism.",
          ],
        },
      ],
    },
    {
      pageNumber: 3,
      heading: "Page 3: Pluriversal Governance: Moving Beyond Silicon Valley Universalism",
      subheading: "Algorithmic Monoculture, Indigenous Sovereignty, and Actionable Redress",
      sections: [
        {
          title: "3.1 Algorithmic Monoculture and the Failure of WEIRD Principles",
          paragraphs: [
            "The overwhelming majority of foundation model training data originates from English-language Western digital archives. Consequently, these models internalize and universalize a 'WEIRD' (Western, Educated, Industrialized, Rich, Democratic) moral and epistemic paradigm (Henrich, 2020). Non-Western cosmological, relational, and communal value systems are systematically marginalized as statistical noise.",
            "Over 200 corporate and multilateral 'AI Ethics Guidelines' have emerged since 2018, invoking abstract concepts such as 'Fairness', 'Transparency', and 'Beneficence'. However, as Birhane (2021) argues, these universalist declarations function primarily as 'ethics-washing'—abstract principles designed to stave off binding statutory regulation while preserving corporate dominance. Universal frameworks fail because they assume a single monolithic ethical order, ignoring deep cultural pluralism.",
          ],
        },
        {
          title: "3.2 Toward Pluriversal AI Ethics and Structural Governance",
          paragraphs: [
            "To dismantle algorithmic hegemony, we advocate for Pluriversal AI Governance—an ethical framework that recognizes multiple, valid ways of knowing and being. In practice, this requires adopting the Indigenous CARE Principles for Data Governance (Carroll et al., 2020), which mandate that indigenous communities retain sovereign authority over the collection, usage, and interpretation of their ancestral data, as exemplified by the Māori Te Hiku Media collective.",
            "Furthermore, structural governance demands legally binding accountability mechanisms: (1) mandatory cryptographic provenance (C2PA) on all commercial synthetic media; (2) statutory collective licensing schemes that redistribute model subscription revenues to creators; (3) an international treaty establishing minimum wage standards and mandatory psychological healthcare for data annotators; and (4) an unconditional prohibition on autonomous AI targeting in lethal military engagements. Intelligence is only responsible when it respects human dignity, labor justice, and the sovereignty of diverse cultures.",
          ],
        },
      ],
    },
  ],
  references: [
    "Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? FAccT '21.",
    "Birhane, A. (2021). Algorithmic Injustice: A Relational Ethics Approach. Patterns, 2(2), 100205.",
    "Carroll, S. R., et al. (2020). The CARE Principles for Indigenous Data Governance. Data Science Journal, 19(1), 43.",
    "Chesney, R., & Citron, D. K. (2019). Deep Fakes: A Looming Challenge for Privacy, Democracy, and National Security. California Law Review, 107, 1753.",
    "Crawford, K. (2021). Atlas of AI: Power, Politics, and the Planetary Costs of Artificial Intelligence. Yale University Press.",
    "Floridi, L. (2023). The Ethics of Artificial Intelligence: Principles, Challenges, and Opportunities. Oxford University Press.",
    "Perrigo, B. (2023). Exclusive: OpenAI Used Kenyan Workers on Less Than $2 Per Hour to Make ChatGPT Less Toxic. TIME Magazine.",
    "Zuboff, S. (2019). The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power. PublicAffairs.",
  ],
};

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
