import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <LoginLink>Signin Here</LoginLink>
    </main>
  );
}
