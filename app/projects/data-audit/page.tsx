import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { getProject } from "@/lib/content";

export default function DataAuditPage() {
  return <CaseStudyLayout project={getProject("data-audit")!} />;
}
