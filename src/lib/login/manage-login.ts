import bcrypt from "bcryptjs";

export const hashPassword = async (password: string) => {
  const hash = await bcrypt.hash(password, 10);
  const base64 = Buffer.from(hash).toString("base64");
  return base64;
};

export const verifyPassword = async (password: string, base64Hash: string) => {
  const hash = Buffer.from(base64Hash, "base64").toString("utf-8");
  return bcrypt.compare(password, hash);
};

(async () => {
  const isPasswordValid = await verifyPassword(
    "12345",
    "JDJiJDEwJGNTQVYyT1dWZTIvcWg0blhaM3hNZGVYa1BaOWw0ZC5OdmQwdXRJNG51SDdkNEQuZ1ZnSmF1"
  );
  console.log({ isPasswordValid });
})();
