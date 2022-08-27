import { useContext } from "react";
import ViewContext from "../context/view-context";
import PageContainer from "./styles/page";

const Page = ({ children }) => {
  const view = useContext(ViewContext);

  return (
    <PageContainer type={view.type} {...view.styles}>
      {children}
    </PageContainer>
  );
};

export default Page;
