"use server"; // this is a server action

export const uploadImageAction = async () => {
  console.log("Hello from uploadImageAction");
  return {
    user: "user password",
  };
};
