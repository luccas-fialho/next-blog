"use client";

import { Bounce, ToastContainer } from "react-toastify";

const ToastifyContainer = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  );
};

export default ToastifyContainer;
