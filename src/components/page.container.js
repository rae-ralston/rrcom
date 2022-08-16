import { useContext } from "react";
import ViewContext from "../hooks/view-context";
import PageContainer from "./styles/page";

const Page = ({ children }) => {
  const view = useContext(ViewContext);

  return <PageContainer type={view.type}>{children}</PageContainer>;
};

export default Page;
