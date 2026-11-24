export interface MetricStat {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  context: string;
  verified: boolean;
}

export const researchStats: MetricStat[] = [
  {
    id: "articles-processed",
    value: 81000,
    suffix: "+",
    label: "Biomedical Research Articles Processed",
    description: "Literature extraction and metadata parsing across large-scale biomedical publications.",
    context: "IIT Bombay IASc-INSA-NASI Research Fellowship",
    verified: true,
  },
  {
    id: "metadata-records",
    value: 10000,
    suffix: "+",
    label: "Metadata Records Validated",
    description: "Structured metadata records parsed, normalized, and validated using Python & Pandas pipelines.",
    context: "Automated Research Pipeline",
    verified: true,
  },
  {
    id: "effort-reduction",
    value: 60,
    suffix: "%",
    label: "Preprocessing Effort Reduction",
    description: "Elimination of repetitive manual literature and dataset preprocessing tasks via automated scripts.",
    context: "Linux & Python Automation",
    verified: true,
  },
  {
    id: "sih-finalist",
    value: 2025,
    prefix: "SIH ",
    suffix: "",
    label: "National Finalist — SIH 2025",
    description: "Selected among top nationwide engineering teams for deep-sea eDNA biodiversity classification.",
    context: "Smart India Hackathon 2025",
    verified: true,
  },
];
