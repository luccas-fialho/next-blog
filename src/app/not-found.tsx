import ErrorMessage from "@/components/ErrorMessage";

const NotFound = () => {
  return (
    <>
      <ErrorMessage
        pageTitle={"Page not found"}
        contentTitle={"404"}
        content={"Oops! This page wasn't found 🤔."}
      />
    </>
  );
};

export default NotFound;
