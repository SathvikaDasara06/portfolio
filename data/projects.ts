export type ProjectCategory =
  | "All"
  | "Data Analytics"
  | "Artificial Intelligence"
  | "Machine Learning"
  | "Backend Engineering"
  | "Full Stack"
  | "Research";

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  fullTitle?: string;
  category: ProjectCategory;
  domain: string;
  status: "In Development" | "Completed" | "Research Prototype" | "Active";
  isFlagship?: boolean;
  isConcept?: boolean;
  shortDescription: string;
  organization?: string;
  technologies: string[];
  links: {
    github?: string;
    liveDemo?: string;
    verified: boolean;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  overview: string;
  problemStatement: string;
  objectives: string[];
  technicalApproach: string;
  architectureDescription: string;
  architectureNodes?: {
    step: string;
    name: string;
    details: string;
  }[];
  implementationDetails: string[];
  resultsOrStatus: string;
  challengesAndLearnings: string[];
  futureImprovements: string[];
  disclaimer?: string;
}

export const projectsList: ProjectItem[] = [
  {
    id: "retailpulse",
    slug: "retailpulse-ecommerce-intelligence",
    title: "RetailPulse",
    fullTitle: "RetailPulse — E-Commerce Operations & Customer Intelligence",
    category: "Data Analytics",
    domain: "Data Analytics & Business Intelligence",
    status: "In Development",
    isFlagship: true,
    isConcept: true,
    shortDescription:
      "Upcoming flagship analytics platform turning complex e-commerce transactional data into actionable operational and customer intelligence dashboards.",
    technologies: ["Python", "Pandas", "PostgreSQL", "SQL", "Streamlit", "Plotly"],
    links: {
      verified: false,
    },
    metrics: [
      { label: "Status", value: "Architecture Phase" },
      { label: "Core Schema", value: "PostgreSQL Star Schema" },
      { label: "Focus", value: "Customer & Unit Economics" },
    ],
    overview:
      "RetailPulse is an upcoming flagship data analytics platform designed to solve operational blind spots in modern e-commerce. By modeling multi-channel transactional streams into a normalized relational data warehouse, RetailPulse computes granular unit economics, RFM customer segmentation, delivery logistics bottlenecks, and revenue forecasting.",
    problemStatement:
      "E-commerce businesses generate vast volumes of fragmented transactional data across orders, inventory, returns, and delivery logs. Small-to-midsize merchants often lack enterprise data engineering teams to consolidate these logs into actionable cohort insights, leading to stockouts, mispriced customer acquisition costs, and hidden margin leaks.",
    objectives: [
      "Design an enterprise-grade star schema relational warehouse in PostgreSQL for transaction, customer, and shipping event tracking.",
      "Develop robust Python/Pandas transformation pipelines to clean missing addresses, normalize multi-currency transactions, and identify duplicate events.",
      "Execute high-performance SQL analytics calculating Customer Lifetime Value (CLV), Repeat Purchase Ratios, and RFM scoring.",
      "Deliver an interactive business intelligence interface powered by Streamlit and Plotly with drill-down capabilities.",
    ],
    technicalApproach:
      "The system follows modern ELT principles: raw order records are staged into staging tables, transformed using vectorized SQL procedures, and partitioned into dimensional marts (Customer, Product, Shipping, and Time). Analytics queries compute daily KPIs with indexed materialized views.",
    architectureDescription:
      "Transactional Data (CSV/APIs) → Staging DB → Pandas Ingestion & Validation → PostgreSQL Dimensional Star Schema → SQL Analytics Queries → Interactive Streamlit/Plotly BI Dashboard.",
    architectureNodes: [
      { step: "01", name: "Data Staging", details: "Ingestion of raw orders, customer records, inventory snapshots, and logistics timestamps." },
      { step: "02", name: "Validation & ETL", details: "Pandas validation routines verifying types, removing anomalous refunds, and normalizing currencies." },
      { step: "03", name: "Star Schema Warehouse", details: "PostgreSQL database with fact_orders and dimensions: dim_customers, dim_products, dim_logistics." },
      { step: "04", name: "BI Engine", details: "Indexed materialized views calculating RFM quartiles, delivery latency, and margin metrics." },
      { step: "05", name: "Executive Dashboard", details: "Plotly visual interface with dynamic filtering by date ranges, categories, and geographic cohorts." },
    ],
    implementationDetails: [
      "Designed normalized 3NF staging schema progressing to de-normalized dimensional models for query speed.",
      "Structured comprehensive SQL analytical scripts with Window functions (LAG, LEAD, NTILE, DENSE_RANK).",
      "Created dynamic Plotly interactive charts representing customer cohort retention heatmaps.",
      "Built automated data quality checks validating non-null order IDs, positive unit prices, and valid delivery timestamps.",
    ],
    resultsOrStatus:
      "Currently under active conceptual design and schema development. Initial schema prototypes and exploratory data analysis notebooks have validated the core dimensional data model.",
    challengesAndLearnings: [
      "Handling return and refund edge cases where transaction timestamps precede shipping completion.",
      "Optimizing customer cohort queries across large synthetic datasets through smart composite indexing.",
    ],
    futureImprovements: [
      "Integrate automated anomaly detection alerts for abrupt drops in checkout conversions.",
      "Incorporate predictive churn probability scoring using Scikit-learn classification pipelines.",
    ],
    disclaimer: "Conceptual flagship project currently in active engineering and design. Preview displays architectural specifications and conceptual interfaces.",
  },
  {
    id: "biomedical-pipeline",
    slug: "biomedical-research-data-pipeline",
    title: "Biomedical Research Data Pipeline",
    fullTitle: "Large-Scale Biomedical Literature Processing & Metadata Pipeline",
    category: "Research",
    domain: "Data Engineering & Research",
    status: "Completed",
    organization: "IIT Bombay",
    shortDescription:
      "Automated high-throughput data retrieval, structured metadata extraction, and validation workflows handling 81,000+ scientific articles.",
    technologies: ["Python", "Pandas", "Linux", "Data Engineering", "Automation"],
    links: {
      verified: false,
    },
    metrics: [
      { label: "Articles Processed", value: "81,000+" },
      { label: "Metadata Parsed", value: "10,000+" },
      { label: "Effort Reduction", value: "60%" },
    ],
    overview:
      "Developed during the IASc-INSA-NASI Summer Research Fellowship at the Department of Chemical Engineering, IIT Bombay under Prof. Ganesh Viswanathan. The project addressed the challenge of ingesting, cleaning, and validating tens of thousands of biomedical research articles for quantitative computational synthesis.",
    problemStatement:
      "Biomedical research literature is vast, heterogeneous, and distributed across inconsistent publication formats. Researchers manually spent hundreds of hours downloading articles, matching citation trees, and verifying authors, journals, and abstract fields before any computational research could begin.",
    objectives: [
      "Automate batch retrieval of publication bodies and metadata records from digital repositories.",
      "Build modular Python parsing modules to extract structured fields (titles, authors, affiliations, abstracts, references).",
      "Implement rigorous validation checks to guarantee metadata consistency and flag corrupted records.",
      "Orchestrate reproducible POSIX bash workflows capable of continuous execution in Linux environments.",
    ],
    technicalApproach:
      "Implemented a multistage data pipeline in Python using Pandas for vectorized tabular manipulation, regex-driven text tokenization, and Linux shell scripts for background job execution and logging. Input data passes through strict validation gates before committing to structured CSV and SQLite outputs.",
    architectureDescription:
      "Research Sources (XML/HTML/JSON) → Ingestion Handler → Tokenizer & Metadata Extractor → Schema Validation & Deduplication → Normalized Data Tables → Curated Research Archive.",
    architectureNodes: [
      { step: "01", name: "Research Sources", details: "Batch collections of biomedical literature across public archives." },
      { step: "02", name: "Data Retrieval", details: "Automated retrieval scripts with rate-limiting and connection retry mechanisms." },
      { step: "03", name: "Metadata Extraction", details: "Python parsers extracting titles, author affiliations, publication years, and text chunks." },
      { step: "04", name: "Validation & Quality", details: "Assertion checks verifying required schema fields, syntax format, and deduplication." },
      { step: "05", name: "Transformation", details: "Vectorized Pandas routines standardizing date formats, author names, and citation matrices." },
      { step: "06", name: "Structured Outputs", details: "Curated, ready-to-analyze datasets stored in clean tabular partitions for downstream scientific analysis." },
    ],
    implementationDetails: [
      "Engineered memory-efficient chunked parsing to process gigabyte-scale text collections on local compute environments.",
      "Constructed automated logging utilities to record extraction failure rates, missing fields, and parser errors.",
      "Established reproducible folder hierarchies adhering to scientific computing best practices.",
    ],
    resultsOrStatus:
      "Successfully processed over 81,000 biomedical articles and extracted over 10,000 clean metadata records, eliminating 60% of repetitive manual effort for the research group.",
    challengesAndLearnings: [
      "Parsing inconsistently formatted legacy publication structures with irregular XML tags.",
      "Maintaining high processing throughput while enforcing strict relational integrity checks.",
    ],
    futureImprovements: [
      "Incorporate semantic embedding generation for automated research topic clustering.",
      "Deploy containerized micro-pipelines using Docker for distributed execution.",
    ],
    disclaimer: "Internal research workflows developed for academic study. Internal proprietary code and unpublished institutional datasets are protected and omitted.",
  },
  {
    id: "smartquizzer",
    slug: "smartquizzer-adaptive-quiz-platform",
    title: "SmartQuizzer",
    fullTitle: "SmartQuizzer — AI-Powered Adaptive Quiz Generation Application",
    category: "Artificial Intelligence",
    domain: "Artificial Intelligence & Backend Engineering",
    status: "Completed",
    organization: "Infosys Springboard",
    shortDescription:
      "AI-driven educational application that synthesizes contextual quizzes from course materials using Django, MySQL, and LLM APIs.",
    technologies: ["Python", "Django", "MySQL", "LLM Integration", "REST APIs"],
    links: {
      github: "https://github.com/SathvikaDasara06/SmartQuizzer",
      verified: true,
    },
    metrics: [
      { label: "Backend", value: "Django 5.x" },
      { label: "Database", value: "MySQL" },
      { label: "Architecture", value: "RESTful MVC" },
    ],
    overview:
      "Engineered during the Infosys Springboard Virtual Internship 6.0, SmartQuizzer is an intelligent assessment platform that converts unstructured educational text into customized, multi-difficulty multiple choice questions with explanations.",
    problemStatement:
      "Educators and self-directed learners expend significant manual effort creating diverse, balanced assessments to test comprehension. Static quiz banks lack adaptivity to specific uploaded documents, textbooks, or custom syllabi.",
    objectives: [
      "Construct an intuitive web application allowing users to upload text excerpts and specify quiz parameters (number of questions, difficulty).",
      "Develop structured backend prompting workflows interfacing with LLM APIs to generate formatted questions, distractors, and rationales.",
      "Persist user test histories, score cards, and generated assessments in a relational MySQL database.",
      "Ensure robust server-side error handling for API timeouts and invalid output formatting.",
    ],
    technicalApproach:
      "Built with Django utilizing its Model-View-Template and REST architecture. Views manage request authentication and input sanitization before calling LLM completion endpoints with constrained output schemas. MySQL stores user entities, question items, options, and quiz submissions.",
    architectureDescription:
      "User Client → Django Views & Controller → Prompt Engineering & API Orchestrator → LLM Service → Response Parser & Validator → MySQL Storage → Interactive Quiz Session.",
    architectureNodes: [
      { step: "01", name: "Client Input", details: "User submits study materials, difficulty preference, and question volume." },
      { step: "02", name: "Django Controller", details: "Input validation, authentication, and dispatching to assessment service." },
      { step: "03", name: "LLM Service Integration", details: "Structured prompt injection requesting strict JSON schema for question items." },
      { step: "04", name: "Response Validation", details: "Parsing response strings into structured option arrays with validated answer keys." },
      { step: "05", name: "Relational Storage", details: "Persistence into MySQL database with foreign keys linking quizzes, questions, and attempts." },
      { step: "06", name: "Evaluation & Analytics", details: "Real-time scoring, answer explanations, and performance logging." },
    ],
    implementationDetails: [
      "Structured Django ORM models with optimized foreign key indexes for rapid quiz history retrieval.",
      "Implemented strict JSON sanitization to prevent malformed LLM responses from crashing the user evaluation flow.",
      "Designed clean responsive templates facilitating smooth assessment taking on desktop and mobile browsers.",
    ],
    resultsOrStatus:
      "Completed and verified in the public GitHub repository. Successfully demonstrated end-to-end question synthesis and scoring workflows during the internship evaluation.",
    challengesAndLearnings: [
      "Enforcing strict deterministic JSON outputs from language model completions without extraneous conversational text.",
      "Designing relational schemas that efficiently separate reusable questions from individual student quiz attempts.",
    ],
    futureImprovements: [
      "Implement adaptive difficulty adjustments where subsequent questions adjust dynamically based on prior responses.",
      "Add PDF and slide deck document parsing.",
    ],
  },
  {
    id: "llm-api-gateway",
    slug: "distributed-llm-api-gateway",
    title: "Distributed LLM API Gateway",
    fullTitle: "Distributed LLM API Gateway & Provider Routing Architecture",
    category: "Backend Engineering",
    domain: "Backend Engineering & System Design",
    status: "Research Prototype",
    shortDescription:
      "High-performance unified gateway exploring multi-provider LLM routing, Redis caching, token rate limiting, and automated failover.",
    technologies: ["Go", "Docker", "Redis", "PostgreSQL", "REST APIs", "Groq", "Gemini", "Ollama"],
    links: {
      verified: false,
    },
    metrics: [
      { label: "Target Latency", value: "< 15ms routing" },
      { label: "Caching", value: "Redis Key-Value" },
      { label: "Providers", value: "Groq, Gemini, Ollama" },
    ],
    overview:
      "An architectural system design project examining how enterprise backend services can route requests dynamically across multiple large language model providers (e.g. Groq, Google Gemini, and local Ollama instances) with unified interfaces, token-bucket rate limiting, and response caching.",
    problemStatement:
      "Applications relying on third-party AI APIs suffer from vendor lock-in, frequent rate limit exhaustion, provider outages, and redundant latency/costs from identical repeated queries.",
    objectives: [
      "Provide a single OpenAI-compatible REST endpoint that forwards requests intelligently to diverse providers.",
      "Implement semantic and exact-match prompt caching in Redis to serve frequent requests with sub-5ms latency.",
      "Enforce per-user token and request rate limiting using sliding window counters.",
      "Establish automatic failover routing when primary providers return HTTP 429 or 5xx errors.",
    ],
    technicalApproach:
      "Engineered using Go for high-concurrency goroutine handling, Redis for distributed in-memory state and caching, and PostgreSQL for audit logging and tenant configuration. Packaged with Docker Compose for local reproducibility.",
    architectureDescription:
      "Incoming Client Request → Go HTTP Gateway → Auth & Token Bucket Rate Limiter → Redis Cache Check (Hit/Miss) → Provider Dispatcher (Groq/Gemini/Ollama) → Health Check & Circuit Breaker → Response Aggregator & Cache Setter → PostgreSQL Audit Log → Client.",
    architectureNodes: [
      { step: "01", name: "Client Ingestion", details: "Single unified REST API endpoint receiving standard chat completion payloads." },
      { step: "02", name: "Auth & Rate Limiting", details: "Bearer token authentication and Redis sliding window rate-limiting per client key." },
      { step: "03", name: "Cache Evaluation", details: "SHA-256 prompt hashing checking Redis for recent deterministic completions." },
      { step: "04", name: "Dynamic Dispatcher", details: "Route matching based on requested model, provider availability, and lowest latency telemetry." },
      { step: "05", name: "Circuit Breaker", details: "Detects provider timeouts and automatically reroutes payloads to fallback endpoints." },
      { step: "06", name: "Audit & Metrics", details: "Asynchronous logging of token consumption, latency, and status codes to PostgreSQL." },
    ],
    implementationDetails: [
      "Written in Go using standard library net/http and lightweight routers for maximum throughput and minimal allocations.",
      "Integrated Redis client supporting connection pooling and atomic Lua scripts for rate limiting.",
      "Designed clean abstraction interfaces for model providers allowing straightforward addition of new endpoints.",
    ],
    resultsOrStatus:
      "Core architecture and prototype specifications developed. Benchmarked local proxy routing overhead at negligible single-digit millisecond latency.",
    challengesAndLearnings: [
      "Managing streaming HTTP responses (Server-Sent Events) across heterogeneous upstream providers.",
      "Designing cache invalidation policies for stochastic temperature-based generation.",
    ],
    futureImprovements: [
      "Incorporate vector database integration for semantic prompt similarity caching.",
      "Implement cost optimization routing selecting cheapest provider that satisfies latency budgets.",
    ],
    disclaimer: "Architectural research prototype. Verification of individual provider adapters and deployment configurations is ongoing.",
  },
  {
    id: "edna-biodiversity",
    slug: "deep-sea-edna-biodiversity-analysis",
    title: "Deep-Sea eDNA Classification",
    fullTitle: "Deep-Sea eDNA Classification & Biodiversity Analysis",
    category: "Machine Learning",
    domain: "Machine Learning & Computational Biology",
    status: "Completed",
    organization: "Smart India Hackathon 2025 National Finalist",
    shortDescription:
      "Computational biology pipeline classifying marine taxonomy and assessing ecological biodiversity indices from environmental DNA sequences.",
    technologies: ["Python", "Pandas", "NumPy", "Machine Learning", "Bioinformatics"],
    links: {
      verified: false,
    },
    metrics: [
      { label: "Competition", value: "SIH 2025 Finalist" },
      { label: "Data Type", value: "eDNA Metabarcoding" },
      { label: "Indices", value: "Shannon & Simpson" },
    ],
    overview:
      "Developed for the Smart India Hackathon 2025, this project introduced a machine learning and computational bioinformatics pipeline to process environmental DNA (eDNA) collected from deep-sea marine habitats, identifying species taxonomy and evaluating ecosystem biodiversity without invasive physical sampling.",
    problemStatement:
      "Deep-sea marine exploration is logistically demanding and invasive. Organisms often escape trawl nets, leaving fragile benthic ecosystems poorly characterized. While eDNA metabarcoding samples water columns directly, biological sequencing noise and incomplete reference databases hinder rapid automated taxonomic classification.",
    objectives: [
      "Build an automated preprocessing workflow to filter sequencing artifacts, low-quality reads, and chimeric amplicons.",
      "Transform variable-length nucleotide sequences into numerical k-mer feature matrices.",
      "Train machine learning classifiers to predict taxonomic ranks (Phylum down to Family/Genus).",
      "Compute standard ecological diversity indices (Shannon-Wiener, Simpson) to quantify ecological richness.",
    ],
    technicalApproach:
      "Employed Python, NumPy, and Pandas to engineer sequence feature representations via overlapping k-mer counts. Evaluated Scikit-learn classification models on annotated reference sequences, coupled with mathematical diversity index computation routines.",
    architectureDescription:
      "Raw eDNA Reads → Quality Trimming & Denoising → K-mer Vectorization → Multi-Stage ML Classifier → Taxonomic Assignment → Ecological Diversity Calculation → Scientific Visualization.",
    architectureNodes: [
      { step: "01", name: "Sample Ingestion", details: "Ingestion of amplicon sequencing reads (FASTQ/FASTA) from water sampling points." },
      { step: "02", name: "Quality Filtering", details: "Trimming low-confidence base pairs and removing PCR chimeras." },
      { step: "03", name: "Feature Extraction", details: "K-mer frequency counting transforming string nucleotides into dense numeric vectors." },
      { step: "04", name: "Taxonomic Classification", details: "Multi-class classification assigning taxonomy confidence scores across biological kingdoms." },
      { step: "05", name: "Biodiversity Metrics", details: "Statistical calculations evaluating relative species abundance, Shannon H', and Simpson D." },
      { step: "06", name: "Ecological Report", details: "Visual dashboard displaying depth-wise biodiversity distributions and detected taxa." },
    ],
    implementationDetails: [
      "Programmed sliding window k-mer generators in Python optimized with NumPy arrays for high execution speed.",
      "Formulated mathematical scripts computing Shannon entropy and Simpson dominance on predicted taxa frequencies.",
      "Constructed phylogenetic classification diagrams and visual distributions of marine biodiversity.",
    ],
    resultsOrStatus:
      "Selected as a National Finalist for Smart India Hackathon 2025, validating the methodology's feasibility for non-invasive ecological monitoring.",
    challengesAndLearnings: [
      "Managing class imbalance caused by overrepresentation of well-documented marine species in reference libraries.",
      "Balancing k-mer length selection between sequence specificity and computational feature space explosion.",
    ],
    futureImprovements: [
      "Incorporate deep learning transformer architectures (such as DNA-BERT) for raw sequence embedding.",
      "Build geospatial mapping layers visualizing biodiversity coordinates over bathymetric maps.",
    ],
  },
  {
    id: "placement-portal",
    slug: "placement-portal-v2",
    title: "Placement Portal V2",
    fullTitle: "Placement Portal V2 — Campus Placement Management System",
    category: "Full Stack",
    domain: "Full-Stack Engineering & Distributed Systems",
    status: "Completed",
    shortDescription:
      "Campus recruitment management platform orchestrating interactions between students, recruiters, and placement officers with asynchronous task processing.",
    technologies: ["Flask", "Vue.js", "SQLite", "Redis", "Celery", "REST APIs"],
    links: {
      verified: false,
    },
    metrics: [
      { label: "Backend", value: "Flask REST API" },
      { label: "Frontend", value: "Vue.js Single Page App" },
      { label: "Queue", value: "Celery & Redis" },
    ],
    overview:
      "A comprehensive campus placement administration platform designed to manage the end-to-end recruitment lifecycle: student profiles, resume validation, recruiter job listings, eligibility filtering, and scheduled interview rounds.",
    problemStatement:
      "University placement teams coordinate hundreds of participating firms and thousands of student applicants using fragmented spreadsheets and manual emails. This leads to scheduling conflicts, missed application deadlines, and administrative bottlenecks.",
    objectives: [
      "Build a multi-role authenticated platform for Students, Recruiters, and Placement Administrators.",
      "Implement dynamic eligibility filtering allowing companies to filter candidates by department, CGPA thresholds, and backlogs.",
      "Offload long-running operations (bulk resume downloads, transactional email notifications, report exports) to Celery task workers.",
      "Deliver a responsive Vue.js frontend with real-time application status indicators.",
    ],
    technicalApproach:
      "Separated architecture into a Flask RESTful API backend communicating over JSON with a Vue.js single-page application. Redis functions as both an in-memory cache and message broker for Celery worker processes executing asynchronous batch jobs.",
    architectureDescription:
      "Vue.js Frontend Client ↔ Flask REST API ↔ SQLite Relational Database ↔ Redis Message Broker ↔ Celery Worker Daemon (Email & Export Jobs).",
    architectureNodes: [
      { step: "01", name: "User Interface", details: "Vue.js SPA with role-based routing for Students, Companies, and Administrators." },
      { step: "02", name: "REST API Layer", details: "Flask backend handling JWT authentication, input validation, and business rules." },
      { step: "03", name: "Relational Persistence", details: "SQLite database with tables for students, job drives, applications, and logs." },
      { step: "04", name: "Message Broker", details: "Redis broker receiving task messages for asynchronous processing." },
      { step: "05", name: "Background Workers", details: "Celery task workers processing PDF resume bundling and automated email alerts." },
    ],
    implementationDetails: [
      "Developed secure token-based authentication with role-based authorization guards on protected routes.",
      "Engineered automated candidate shortlisting queries with compound SQL filters matching company criteria.",
      "Configured scheduled periodic background tasks for application deadline cutoffs and reminder dispatches.",
    ],
    resultsOrStatus:
      "Successfully architected and tested all core modules including student applications, company job postings, and async background notifications.",
    challengesAndLearnings: [
      "Handling asynchronous state synchronization between the Vue frontend and long-running background export tasks.",
      "Designing flexible schema relationships to handle diverse company hiring rounds (OA, Technical, HR).",
    ],
    futureImprovements: [
      "Migrate database layer to PostgreSQL with read replicas for high-concurrency recruitment days.",
      "Implement real-time WebSocket notifications for interview schedule updates.",
    ],
  },
  {
    id: "alzheimers-detection",
    slug: "speech-based-alzheimers-detection",
    title: "Speech Alzheimer's Detection",
    fullTitle: "Speech-Based Alzheimer's Detection via Deep Acoustic Modeling",
    category: "Machine Learning",
    domain: "Deep Learning & Healthcare AI",
    status: "Research Prototype",
    shortDescription:
      "Experimental deep learning model analyzing speech pauses, acoustic patterns, and linguistic markers to detect cognitive indicators.",
    technologies: ["Python", "PyTorch", "CNN", "RNN", "Attention Mechanisms"],
    links: {
      verified: false,
    },
    metrics: [
      { label: "Research Metric", value: "~87% Experimental" },
      { label: "Architecture", value: "CNN + BiLSTM + Attention" },
      { label: "Input", value: "Speech Spectrograms / MFCC" },
    ],
    overview:
      "An experimental research project exploring how acoustic feature analysis and recurrent neural architectures can identify subtle speech disfluencies, prolonged hesitation pauses, and phonological decay associated with early-stage Alzheimer's dementia.",
    problemStatement:
      "Conventional clinical screening for neurodegenerative conditions involves extensive cognitive testing or invasive imaging. Speech provides a rich, non-invasive biomarker, but subtle acoustic variations are difficult to isolate from natural speaker idiosyncrasies.",
    objectives: [
      "Extract robust acoustic representations from recorded audio samples, including MFCCs and log-mel spectrograms.",
      "Design a hybrid neural network leveraging 2D CNNs for spectrogram spatial features and BiLSTMs for temporal cadence.",
      "Integrate temporal attention layers to enable the network to focus on abnormal acoustic pauses and hesitations.",
      "Evaluate classification performance on standard public dementia speech corpora.",
    ],
    technicalApproach:
      "Audio recordings were segmented, normalized, and converted into 2D mel-spectrogram matrices. A PyTorch model passes these tensors through convolutional layers followed by a bidirectional recurrent layer and self-attention pooling before a classification head.",
    architectureDescription:
      "Raw Audio Stream → Preprocessing & Silence Trimming → Mel-Spectrogram Extraction → 2D CNN Feature Extractor → BiLSTM Temporal Encoder → Attention Layer → Binary Classifier Head.",
    architectureNodes: [
      { step: "01", name: "Audio Preprocessing", details: "Audio normalization, noise reduction, and silence duration segmentation." },
      { step: "02", name: "Feature Extraction", details: "Computation of 40-band Mel-Frequency Cepstral Coefficients (MFCCs) and log-spectrograms." },
      { step: "03", name: "Spatial Convolution", details: "2D CNN layers extracting local spectral features and formant transitions." },
      { step: "04", name: "Temporal Sequence Modeling", details: "Bidirectional LSTM tracking speech rate changes and sequential rhythm patterns." },
      { step: "05", name: "Self-Attention Mechanism", details: "Attention weights dynamically scoring time frames containing prolonged hesitations." },
      { step: "06", name: "Classification", details: "Softmax classification predicting likelihood of cognitive impairment patterns." },
    ],
    implementationDetails: [
      "Implemented PyTorch Dataset and DataLoader pipelines with on-the-fly audio augmentation (pitch shift, time stretch).",
      "Calculated hesitation pause duration statistics as auxiliary baseline acoustic features.",
      "Conducted k-fold cross-validation to assess generalization across speaker identities.",
    ],
    resultsOrStatus:
      "Observed approximately 87% experimental accuracy in cross-validated evaluations on benchmark research datasets. Strictly exploratory research.",
    challengesAndLearnings: [
      "Preventing model overfitting to background microphone noise and specific speaker recording environments.",
      "Interpreting which specific acoustic features drove the attention layer decisions.",
    ],
    futureImprovements: [
      "Combine acoustic features with transcribed text embeddings (Whisper + RoBERTa) for multimodal classification.",
      "Expand testing across multilingual datasets.",
    ],
    disclaimer: "Strictly an experimental computational research project for academic study. Not a clinically validated diagnostic tool or medical device.",
  },
  {
    id: "crop-fertilizer",
    slug: "crop-and-fertilizer-recommendation",
    title: "Crop & Fertilizer Recommendation",
    fullTitle: "Machine Learning Crop & Fertilizer Recommendation System",
    category: "Machine Learning",
    domain: "Machine Learning & Agriculture",
    status: "Completed",
    shortDescription:
      "Decision tree and machine learning model recommending optimal crops and fertilizers based on soil nutrients and meteorological parameters.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Decision Trees"],
    links: {
      github: "https://github.com/SathvikaDasara06/Crop-Fertilizer-Recommendation-System-using-ML",
      verified: true,
    },
    metrics: [
      { label: "Algorithms", value: "Decision Trees & Random Forest" },
      { label: "Input Features", value: "N, P, K, Temp, Humidity, pH, Rain" },
      { label: "Status", value: "Open-Source Verified" },
    ],
    overview:
      "An applied machine learning application designed to support precision agriculture. By analyzing soil chemical properties (Nitrogen, Phosphorus, Potassium levels, pH) and environmental weather data (temperature, humidity, rainfall), the model recommends suitable crops and corrective fertilizer formulations.",
    problemStatement:
      "Imbalanced fertilizer application degrades soil health and lowers crop yields. Smallholder farmers often make cropping decisions without quantitative guidance on their soil's micro-nutrient profile and regional climate patterns.",
    objectives: [
      "Preprocess multi-feature agricultural datasets covering agricultural yields across diverse soil types.",
      "Train and tune interpretable classification models (Decision Trees, Random Forests) in Scikit-learn.",
      "Formulate rule-based and predictive models to recommend targeted fertilizer blends based on nutrient deficits.",
      "Document the repository with reproducible Jupyter notebooks and clean Python source code.",
    ],
    technicalApproach:
      "Data preprocessing involved feature normalization, outlier inspection, and exploratory data distribution analysis using Pandas and Seaborn. Scikit-learn was used for model training, hyperparameter grid search, and confusion matrix evaluation.",
    architectureDescription:
      "Soil & Climate Inputs (N, P, K, pH, Rain, Temp, Humidity) → Data Cleaning & Scaling → Scikit-learn Model Inference → Crop Recommendation & Fertilizer Formulation.",
    architectureNodes: [
      { step: "01", name: "Soil & Weather Inputs", details: "Nitrogen, Phosphorus, Potassium, pH, rainfall, temperature, and relative humidity." },
      { step: "02", name: "Preprocessing", details: "Missing value imputation, MinMax feature scaling, and train-test stratification." },
      { step: "03", name: "Model Training", details: "Decision Tree Classifier with tree pruning to avoid overfitting on limited samples." },
      { step: "04", name: "Evaluation", details: "Precision, recall, and multi-class confusion matrix analysis across crop categories." },
      { step: "05", name: "Recommendation Output", details: "Top-matching crop selection and customized fertilizer adjustment suggestions." },
    ],
    implementationDetails: [
      "Authored modular preprocessing routines handling soil chemistry bounds checking.",
      "Generated feature importance plots demonstrating the dominant role of rainfall and nitrogen in crop viability.",
      "Published fully reproducible code and documentation to GitHub.",
    ],
    resultsOrStatus:
      "Open-source repository verified and available. Successfully demonstrated high classification accuracy across staple cereal, pulse, and cash crops.",
    challengesAndLearnings: [
      "Addressing multicollinearity between temperature and relative humidity features.",
      "Balancing decision tree depth to ensure clear rule interpretability for non-technical stakeholders.",
    ],
    futureImprovements: [
      "Build a lightweight mobile web interface with localized multi-language support.",
      "Integrate real-time weather API lookups based on device GPS location.",
    ],
  },
  {
    id: "vehicle-parking",
    slug: "vehicle-parking-management-system",
    title: "Vehicle Parking Management",
    fullTitle: "Vehicle Parking Management System — Web & Database Application",
    category: "Full Stack",
    domain: "Full-Stack Development & Database Systems",
    status: "Completed",
    shortDescription:
      "Web application managing parking slot allocations, rate calculations, vehicle entry/exit logs, and relational database records.",
    technologies: ["Python", "Flask", "Jinja2", "Bootstrap", "SQLite", "HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/SathvikaDasara06/Vehicle-Parking-App",
      verified: true,
    },
    metrics: [
      { label: "Backend", value: "Python Flask" },
      { label: "Database", value: "SQLite Relational" },
      { label: "Frontend", value: "Jinja2 & Bootstrap" },
    ],
    overview:
      "A complete web-based database management system created to streamline commercial vehicle parking operations. The system manages real-time slot occupancy, automated hourly tariff computation, vehicle categorization, and historical audit reporting.",
    problemStatement:
      "Manual vehicle parking lots suffer from inefficient space utilization, inaccurate billing calculations, ticket loss, and lack of historical parking analytics for facility managers.",
    objectives: [
      "Design a relational SQLite schema mapping parking slots, vehicle categories, and billing sessions.",
      "Implement Flask route handlers for vehicle check-in, real-time slot allocation, and check-out fee generation.",
      "Build clean Jinja2 web interfaces styled with Bootstrap for parking attendants and supervisors.",
      "Provide administrative dashboards summarizing slot occupancy and daily revenue collections.",
    ],
    technicalApproach:
      "Constructed using Flask's lightweight WSGI framework, SQLite database for ACID-compliant transactional consistency, and Jinja2 server-rendered templates styled with Bootstrap for responsive attendant operation.",
    architectureDescription:
      "User/Attendant Browser ↔ Flask Application Routes ↔ SQLite Transactional Database (Slots, Categories, Sessions) ↔ Tariff Calculator & Receipt Generator.",
    architectureNodes: [
      { step: "01", name: "Vehicle Check-In", details: "Attendant inputs vehicle number and category; system verifies available capacity." },
      { step: "02", name: "Slot Allocation", details: "Atomic database transaction marking slot status as occupied with entry timestamp." },
      { step: "03", name: "Session Tracking", details: "Active parking session recorded in SQLite with foreign key references." },
      { step: "04", name: "Vehicle Check-Out", details: "System calculates elapsed duration and applies tiered hourly tariff rules." },
      { step: "05", name: "Billing & Audit", details: "Generates digital receipt, marks slot vacant, and updates cumulative revenue metrics." },
    ],
    implementationDetails: [
      "Structured SQL tables with foreign key constraints ensuring slot integrity during concurrent check-ins.",
      "Implemented custom template filters in Jinja2 for currency and duration formatting.",
      "Created operational reports filtered by date ranges, vehicle types, and revenue tiers.",
    ],
    resultsOrStatus:
      "Completed and verified in public GitHub repository. Demonstrates clean full-stack web and database development with zero unnecessary dependencies.",
    challengesAndLearnings: [
      "Preventing double-booking of parking slots during rapid consecutive check-in requests.",
      "Implementing tiered billing logic that accurately handles overnight parking thresholds.",
    ],
    futureImprovements: [
      "Add automated license plate recognition (ALPR) via computer vision cameras.",
      "Integrate UPI and digital payment gateway webhooks for contactless exit.",
    ],
  },
];
