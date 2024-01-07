

import Link from "@/components/core/Link";
import LoginForm from "@/components/auth/Login";

export default function LoginPage() {
    return (
      <div className="pt-[20%] flex flex-col gap-2">
        <p className="text-left text-lg pb-2">Welcome back</p>
        <LoginForm formName="login-form"/>
        <Link url="#" text="New to Platform?"/>
      </div>
    )
  }