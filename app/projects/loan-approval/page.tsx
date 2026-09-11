import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { getProject } from "@/lib/content";

export default function LoanApprovalPage() {
  return <CaseStudyLayout project={getProject("loan-approval")!} />;
}
