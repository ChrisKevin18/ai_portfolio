import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { getProject } from "@/lib/content";

export default function AtmLogisticsPage() {
  return <CaseStudyLayout project={getProject("atm-logistics")!} />;
}
