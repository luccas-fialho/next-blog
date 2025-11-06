import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { redirect } from "next/navigation";

const jwtSecretKey = process.env.JWT_SECRET_KEY;
const jwtEncodeKey = new TextEncoder().encode(jwtSecretKey);

const loginExpSeconds = Number(process.env.LOGIN_EXPIRATION_SECONDS) || 86400;
const loginExpStr = process.env.LOGIN_EXPIRATION_STRING || "1d";
const loginCookieName = process.env.LOGIN_COOKIE_NAME || "loginSession";

type JwtPayLoad = {
  username: string;
  expiresAt: Date;
};

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
  const loginSession = await signJWT({ username, expiresAt });
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

export const getLoginSession = async () => {
  const cookieStore = await cookies();
  const loginSession = cookieStore.get(loginCookieName)?.value;

  if (!loginSession) return false;

  return verifyJwt(loginSession);
};

export const verifyLoginSession = async () => {
  const payload = await getLoginSession();
  if (!payload) return false;

  return payload?.username === process.env.LOGIN_USER;
};

export const requireLoginSessionOrRedirect = async () => {
  const isAuthenticated = await verifyLoginSession();
  if (!isAuthenticated) {
    redirect("/admin/login");
  }
};

export const signJWT = async (jwtPayLoad: JwtPayLoad) => {
  return new SignJWT(jwtPayLoad)
    .setProtectedHeader({
      alg: "HS256",
      typ: "JWT",
    })
    .setIssuedAt()
    .setExpirationTime(loginExpStr)
    .sign(jwtEncodeKey);
};

export const verifyJwt = async (jwt: string | undefined = "") => {
  try {
    const { payload } = await jwtVerify(jwt, jwtEncodeKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch {
    console.log("Invalid token");
    return false;
  }
};
