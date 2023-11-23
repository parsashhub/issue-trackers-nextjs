import dynamic from "next/dynamic";
import Loading from "@/app/loading";

const IssueForm = dynamic(() => import("@/app/issues/_components/issueForm"), {
  ssr: false,
  loading: () => <Loading />,
});

const NewIssuesPage = () => {
  return <IssueForm />;
};

export default NewIssuesPage;
