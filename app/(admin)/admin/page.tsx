import { redirect } from "next/navigation";
import { auth } from "@/auth";
import SignIn from "@/components/SignIn";

export default async function Page() {
  const session = await auth();
  
  if (session) {
    redirect("/admin/dashboard");
  }

  return (
    <div>
      <h1>Login</h1>
      <SignIn />
    </div>
  );
}