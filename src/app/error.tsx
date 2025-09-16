"use client";

import ErrorMessage from "@/components/ErrorMessage";
import { useEffect } from "react";

type RootErrorPageProps = {
  error: Error;
};

const RootErrorPage = ({ error }: RootErrorPageProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle={"Error"}
      contentTitle={"501"}
      content={"Internal error occurred. Please try again later."}
    />
  );
};

export default RootErrorPage;
