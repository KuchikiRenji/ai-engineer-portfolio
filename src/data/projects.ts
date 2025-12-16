export type Project = {
  id: string;
  title: string;
  overview: string;
  techStack: string[];
  outcome: string;
  categories: string[];
  languages: string[];
  githubUrl?: string;
  screenshot: string;
};

// Placeholder projects; replace/extend as real work is added.
export const projects: Project[] = [
  {
    id: "p1",
    title: "Conversational Support Assistant",
    overview: "LLM-powered assistant with retrieval for customer support triage and responses.",
    techStack: ["Next.js", "TypeScript", "LangChain", "Pinecone", "Vercel"],
    outcome: "Cut response times by 35% with automated drafting and suggested replies.",
    categories: ["AI", "RAG", "Support"],
    languages: ["TypeScript"],
    githubUrl: undefined,
    screenshot: "/screenshots/project-1.png"
  },
  {
    id: "p2",
    title: "Document Intelligence Pipeline",
    overview: "Structured extraction from PDFs with validation and human-in-the-loop review.",
    techStack: ["Python", "FastAPI", "Postgres", "OpenAI"],
    outcome: "Reduced manual processing by 50% with reliable extraction and review queues.",
    categories: ["AI", "Data", "Automation"],
    languages: ["Python"],
    githubUrl: undefined,
    screenshot: "/screenshots/project-2.png"
  },
  {
    id: "p3",
    title: "Model Evaluation Harness",
    overview: "Scenario-based evals with regression tracking for multiple LLM providers.",
    techStack: ["TypeScript", "Playwright", "Vitest", "Supabase"],
    outcome: "Enabled weekly model updates with confidence through automated eval gates.",
    categories: ["AI", "Tooling", "Quality"],
    languages: ["TypeScript"],
    githubUrl: "https://github.com/example/eval-harness",
    screenshot: "/screenshots/project-3.png"
  },
  {
    id: "p4",
    title: "Search Relevance Tuning",
    overview: "Hybrid search with dense + lexical scoring and feedback loops.",
    techStack: ["Next.js", "TypeScript", "Elasticsearch", "OpenSearch"],
    outcome: "Improved click-through by 18% via better ranking and feedback-driven retraining.",
    categories: ["Search", "ML", "Product"],
    languages: ["TypeScript"],
    githubUrl: undefined,
    screenshot: "/screenshots/project-4.png"
  },
  {
    id: "p5",
    title: "AI Design Copilot",
    overview: "Figma-to-code suggestions with component mapping and linting integration.",
    techStack: ["TypeScript", "Vercel", "tRPC", "Prisma"],
    outcome: "Accelerated UI delivery by suggesting code snippets aligned to design tokens.",
    categories: ["AI", "Developer Experience"],
    languages: ["TypeScript"],
    githubUrl: undefined,
    screenshot: "/screenshots/project-5.png"
  },
  {
    id: "p6",
    title: "Agentic Data QA",
    overview: "Multi-tool agent validating CSV/JSON datasets with anomaly surfacing.",
    techStack: ["Python", "Pandas", "LangChain", "Great Expectations"],
    outcome: "Cut data quality incidents by 40% through automated checks and reporting.",
    categories: ["AI", "Data", "Quality"],
    languages: ["Python"],
    githubUrl: undefined,
    screenshot: "/screenshots/project-6.png"
  },
  {
    id: "p7",
    title: "Voice Insights Dashboard",
    overview: "Speech-to-text analytics with topic clustering and sentiment tracking.",
    techStack: ["Next.js", "TypeScript", "Whisper", "Postgres"],
    outcome: "Unlocked voice call insights for ops teams with searchable transcripts.",
    categories: ["AI", "Analytics", "Voice"],
    languages: ["TypeScript"],
    githubUrl: undefined,
    screenshot: "/screenshots/project-7.png"
  },
  {
    id: "p8",
    title: "Pricing Optimization Service",
    overview: "Demand forecasting models to recommend price adjustments.",
    techStack: ["Python", "FastAPI", "XGBoost", "Redis"],
    outcome: "Increased revenue lift by 6% through adaptive pricing recommendations.",
    categories: ["ML", "Forecasting", "Optimization"],
    languages: ["Python"],
    githubUrl: undefined,
    screenshot: "/screenshots/project-8.png"
  },
  {
    id: "p9",
    title: "Edge Feature Flags",
    overview: "Edge-configured flags with guardrails for AI rollouts.",
    techStack: ["TypeScript", "Next.js Edge", "Feature Flags"],
    outcome: "Enabled safe, incremental AI feature launches with observability.",
    categories: ["Platform", "Edge", "AI"],
    languages: ["TypeScript"],
    githubUrl: undefined,
    screenshot: "/screenshots/project-9.png"
  },
  {
    id: "p10",
    title: "Content Moderation Gateway",
    overview: "Multi-model moderation with policy routing and audit trails.",
    techStack: ["Node.js", "TypeScript", "OpenAI", "Cloudflare Workers"],
    outcome: "Reduced policy violations while keeping latency sub-150ms at p95.",
    categories: ["Safety", "AI", "Platform"],
    languages: ["TypeScript"],
    githubUrl: undefined,
    screenshot: "/screenshots/project-10.png"
  },
  {
    id: "p11",
    title: "Analytics Notebooks in Browser",
    overview: "Client-side notebooks with WASM kernels for lightweight data exploration.",
    techStack: ["TypeScript", "WASM", "Monaco", "Vite"],
    outcome: "Gave analysts code notebooks without backend dependency.",
    categories: ["Developer Experience", "Data"],
    languages: ["TypeScript"],
    githubUrl: "https://github.com/example/web-notebooks",
    screenshot: "/screenshots/project-11.png"
  },
  {
    id: "p12",
    title: "ML Feature Store UI",
    overview: "Front-end for feature discovery, lineage, and freshness monitoring.",
    techStack: ["Next.js", "TypeScript", "tRPC", "Tailwind"],
    outcome: "Shortened feature onboarding from days to hours with guided flows.",
    categories: ["ML", "Productivity", "Data"],
    languages: ["TypeScript"],
    githubUrl: undefined,
    screenshot: "/screenshots/project-12.png"
  },
  {
    id: "p13",
    title: "Evaluation Insights Hub",
    overview: "Centralized eval runs, scorecards, and error buckets.",
    techStack: ["TypeScript", "React", "Supabase", "Charts"],
    outcome: "Improved model iteration cadence with clear regression signals.",
    categories: ["AI", "Quality", "Analytics"],
    languages: ["TypeScript"],
    githubUrl: undefined,
    screenshot: "/screenshots/project-13.png"
  },
  {
    id: "p14",
    title: "Multilingual Search Assistant",
    overview: "Cross-lingual retrieval with translation pipelines and relevance tuning.",
    techStack: ["Python", "FastAPI", "Hugging Face", "Elastic"],
    outcome: "Expanded reach to 6 new locales with consistent search quality.",
    categories: ["Search", "ML", "Localization"],
    languages: ["Python"],
    githubUrl: undefined,
    screenshot: "/screenshots/project-14.png"
  },
  {
    id: "p15",
    title: "Incident Postmortem Generator",
    overview: "LLM-assisted drafts for incidents with timeline extraction.",
    techStack: ["TypeScript", "Next.js", "CRON Jobs", "OpenAI"],
    outcome: "Standardized postmortems with faster turnaround for SRE teams.",
    categories: ["AI", "SRE", "Automation"],
    languages: ["TypeScript"],
    githubUrl: undefined,
    screenshot: "/screenshots/project-15.png"
  },
  {
    id: "p16",
    title: "Sales Enablement Copilot",
    overview: "Retrieval-backed answer engine for sales playbooks and objections.",
    techStack: ["TypeScript", "Next.js", "Pinecone", "OpenAI"],
    outcome: "Increased win rates by surfacing contextual responses during calls.",
    categories: ["AI", "RAG", "Sales"],
    languages: ["TypeScript"],
    githubUrl: undefined,
    screenshot: "/screenshots/project-16.png"
  },
  {
    id: "p17",
    title: "Experimentation Platform",
    overview: "Feature experiments with stats engine and guardrails.",
    techStack: ["TypeScript", "Next.js", "Postgres", "Prisma"],
    outcome: "Enabled rapid A/B tests with automated significance checks.",
    categories: ["Platform", "Analytics"],
    languages: ["TypeScript"],
    githubUrl: undefined,
    screenshot: "/screenshots/project-17.png"
  },
  {
    id: "p18",
    title: "On-device Summarizer",
    overview: "Local summarization workflow optimized for privacy-sensitive content.",
    techStack: ["Swift", "CoreML", "Metal"],
    outcome: "Delivered offline summaries with zero data egress requirements.",
    categories: ["AI", "Edge", "Privacy"],
    languages: ["Swift"],
    githubUrl: undefined,
    screenshot: "/screenshots/project-18.png"
  },
  {
    id: "p19",
    title: "Data Contracts Service",
    overview: "Schema contracts with contract testing for producer/consumer alignment.",
    techStack: ["TypeScript", "Node.js", "Kafka", "Zod"],
    outcome: "Reduced downstream breakages via enforced contracts and alerting.",
    categories: ["Data", "Quality", "Platform"],
    languages: ["TypeScript"],
    githubUrl: undefined,
    screenshot: "/screenshots/project-19.png"
  },
  {
    id: "p20",
    title: "AI Design Review Bot",
    overview: "Automated design review with heuristics and LLM critique.",
    techStack: ["TypeScript", "Next.js", "Playwright", "OpenAI"],
    outcome: "Provided actionable UI feedback early in the design process.",
    categories: ["AI", "Design", "Tooling"],
    languages: ["TypeScript"],
    githubUrl: undefined,
    screenshot: "/screenshots/project-20.png"
  }
];

