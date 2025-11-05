import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

const jwtSecretKey = process.env.JWT_SECRET_KEY;
const jwtEncodeKey = new TextEncoder().encode(jwtSecretKey);

const loginExpSeconds = Number(process.env.LOGIN_EXPIRATION_SECONDS) || 86400;
const loginExpStr = process.env.LOGIN_EXPIRATION_STRING || "1d";
const loginCookieName = process.env.LOGIN_COOKIE_NAME || "loginSession";

export const hashPassword = async (password: string) => {
  const hash = await bcrypt.hash(password, 10);
  const base64 = Buffer.from(hash).toString("base64");
  return base64;
};

export const verifyPassword = async (password: string, base64Hash: string) => {
  const hash = Buffer.from(base64Hash, "base64").toString("utf-8");
  return bcrypt.compare(password, hash);
};

export const createLoginSession = async (username: string) => {
  const expiresAt = new Date(Date.now() + loginExpSeconds * 1000);
  const loginSession = username + "Anything";
  const cookieStore = await cookies();

  cookieStore.set(loginCookieName, loginSession, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    expires: expiresAt,
  });
};

export const deleteLoginSession = async () => {
  const cookieStore = await cookies();
  cookieStore.set(loginCookieName, "", { expires: new Date(0) });
  cookieStore.delete(loginCookieName);
};
