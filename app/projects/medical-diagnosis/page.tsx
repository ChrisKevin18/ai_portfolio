import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { getProject } from "@/lib/content";

export default function MedicalDiagnosisPage() {
  return <CaseStudyLayout project={getProject("medical-diagnosis")!} />;
}
