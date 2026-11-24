export interface ResearchItem {
  id: string;
  title: string;
  domain: string;
  institution: string;
  period: string;
  leadOrGuide?: string;
  summary: string;
  methodology: string[];
  scientificImpact: string;
  visualType: "pipeline" | "edna" | "speech" | "sequence";
  keywords: string[];
}

export const researchItems: ResearchItem[] = [
  {
    id: "biomedical-pipeline",
    title: "Large-Scale Biomedical Literature Data Processing & Metadata Validation",
    domain: "Data Analytics & Research Computing",
    institution: "IIT Bombay (IASc-INSA-NASI Fellowship)",
    period: "Summer 2026",
    leadOrGuide: "Prof. Ganesh Viswanathan (Dept. of Chemical Engineering)",
    summary:
      "Engineered automated high-throughput data extraction and normalization pipelines for processing over 81,000 biomedical research articles. Standardized heterogeneous XML/text publications into validated tabular and relational metadata models.",
    methodology: [
      "Custom Python scraping and batch ingestion utilities for scientific document retrieval",
      "Regular expression and NLP-based metadata parsing (authors, affiliations, abstracts, citations)",
      "Automated schema validation and duplicate elimination via Pandas and structured assertions",
      "Reproducible POSIX shell scripts orchestrating scheduled Linux research workflows",
    ],
    scientificImpact:
      "Eliminated 60% of manual preprocessing overhead, enabling downstream statistical analysis across 10,000+ validated biomedical metadata records.",
    visualType: "pipeline",
    keywords: ["Biomedical Informatics", "Automated Pipelines", "Metadata Extraction", "Pandas", "Linux", "Data Integrity"],
  },
  {
    id: "edna-biodiversity",
    title: "Taxonomic Classification & Deep-Sea Environmental DNA Biodiversity Analysis",
    domain: "Computational Biology & Machine Learning",
    institution: "Smart India Hackathon 2025 National Finalist",
    period: "2025",
    summary:
      "Developed a computational pipeline to analyze hypervariable barcode sequences from deep-sea marine environmental DNA (eDNA), enabling rapid taxonomic classification and biodiversity indices calculation without organism physical sampling.",
    methodology: [
      "Quality filtering, chimera removal, and sequence trimming of high-throughput amplicon sequencing reads",
      "K-mer frequency vectorization and sequence feature extraction for machine learning models",
      "Hierarchical taxonomic classifier trained against reference marine sequence databases",
      "Computation of Shannon-Wiener and Simpson ecological diversity indices across sampling depths",
    ],
    scientificImpact:
      "Presented at SIH 2025 as a scalable computational method for monitoring marine benthic ecosystems and detecting fragile biodiversity zones.",
    visualType: "edna",
    keywords: ["eDNA", "Taxonomy", "Marine Genomics", "Machine Learning", "Biodiversity Indices", "Bioinformatics"],
  },
  {
    id: "speech-alzheimers",
    title: "Acoustic & Linguistic Pattern Analysis for Alzheimer's Detection",
    domain: "Deep Learning & Healthcare AI",
    institution: "Independent Computational Research",
    period: "2024 – 2025",
    summary:
      "Experimental research investigating dual-stream CNN-RNN architectures with temporal attention mechanisms to detect acoustic irregularities, prolonged pauses, and linguistic degradation in spontaneous speech samples associated with neurodegenerative conditions.",
    methodology: [
      "Extraction of Mel-Frequency Cepstral Coefficients (MFCCs), spectral centroid, and zero-crossing rates",
      "Convolutional layers for local spectral feature extraction combined with BiLSTM for temporal dynamics",
      "Self-attention mechanism highlighting diagnostic hesitations and acoustic transitions",
      "Experimental cross-validation reporting approximately 87% test accuracy on benchmark datasets (strictly exploratory research)",
    ],
    scientificImpact:
      "Serves as an exploratory benchmark for non-invasive computational screening; explicitly designated as experimental research and not a clinical diagnostic tool.",
    visualType: "speech",
    keywords: ["Acoustic Analysis", "CNN-RNN", "Attention Mechanisms", "PyTorch", "Healthcare AI", "Experimental"],
  },
  {
    id: "genomics-alignment",
    title: "Comparative Sequence Alignment & Biological Database Query Systems",
    domain: "Bioinformatics & Genomic Systems",
    institution: "BioTecNika / AIIMS Delhi",
    period: "May – July 2024",
    summary:
      "Implemented computational workflows for biological sequence alignment, exploring pairwise and multiple sequence alignment heuristics (BLAST, FASTA, ClustalW) and automated querying against primary biological repositories (NCBI GenBank, UniProt).",
    methodology: [
      "Algorithmic analysis of local (Smith-Waterman) and global (Needleman-Wunsch) alignment dynamic programming",
      "Python parsing of FASTA-formatted genomic sequences and programmatic NCBI Entrez API queries",
      "Statistical evaluation of E-values and bit scores for homologous gene identification",
    ],
    scientificImpact:
      "Built reliable foundational scripts for automating high-volume sequence retrieval and cross-referencing annotated genetic loci.",
    visualType: "sequence",
    keywords: ["BLAST", "FASTA", "Sequence Alignment", "Genomics Databases", "Bioinformatics", "Python"],
  },
];
