import { hashPassword } from "@/lib/login/manage-login";

(async () => {
  const myPassword = ""; // Don't forget to delete this passord later
  const hashedPassword = await hashPassword(myPassword);

  console.log({ hashedPassword });
})()