"use client";
import {
  Button,
  Card,
  CardBody,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

   const onSubmit = async (e) =>{
          e.preventDefault();
          const formData = new FormData(e.target);
          const user = Object.fromEntries(formData.entries());
          console.log(user,"user");
          const {data, error} = await authClient.signIn.email
          ({
              email: user.email,
              password: user.password,
          })
          console.log(data, error);
        if(data){
            redirect("/")
        }
        if(error){
          toast.error("Sign in Unsuccessful")
        }
      }

      const handleGogleSignIn = async () =>{
        const data = await authClient.signIn.social({
        provider: "google",
  });
      }

  return (
    <section className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 relative overflow-hidden">

      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-yellow-400 opacity-5 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-4 border border-yellow-400/30 px-3 py-1 rounded-full">
            Welcome Back
          </span>
          <h1 className="text-4xl font-bold text-white">
            Sign <span className="text-yellow-400 italic">In</span>
          </h1>
          <p className="text-zinc-400 mt-2 text-sm">
            Login to manage your bookings and listings
          </p>
        </div>

        <Card className="bg-zinc-900/50 border border-zinc-800">
          <div className="p-8">
            <form onSubmit={onSubmit} className="space-y-5">

              {/* Email */}
              <TextField defaultValue="eren@gmail.com" name="email" type="email" isRequired
               validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}>
                <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                  Email Address
                </Label>
                <Input
                  placeholder="Enter your email address"
                  className="rounded-lg bg-zinc-900 border border-zinc-700 text-white"
                />
              </TextField>

              {/* Password */}
              <div className="relative">
                <TextField defaultValue="Eren12345" name="password" type={showPassword ? "text" : "password"} isRequired 
            //     validate={(value) => {
            //   if (value.length < 8) {
            //     return "Password must be at least 8 characters";
            //   }
            //   if (!/[A-Z]/.test(value)) {
            //     return "Password must contain at least one uppercase letter";
            //   }
            //   if (!/[0-9]/.test(value)) {
            //     return "Password must contain at least one number";
            //   }
            //   return null;
            // }}
            >
                  <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                    Password
                  </Label>
                  <Input
                    placeholder="Enter your password"
                    className="rounded-lg bg-zinc-900 border border-zinc-700 text-white pr-10"
                  />
                </TextField>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-8 text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full py-6 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-sm uppercase tracking-widest rounded-lg"
              >
                Sign In →
              </Button>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-zinc-800" />
                <span className="text-zinc-600 text-xs uppercase tracking-widest">or</span>
                <div className="flex-1 h-px bg-zinc-800" />
              </div>

              {/* Google Button */}
              <Button
                type="button"
                onClick={handleGogleSignIn}
                variant="bordered"
                className="w-full py-6 border border-zinc-700 text-white hover:border-zinc-500 rounded-lg flex items-center justify-center gap-3"
              >
                <FcGoogle size={20} />
                <span className="text-sm font-medium">Continue with Google</span>
              </Button>

              {/* Register link */}
              <p className="text-center text-zinc-500 text-sm">
                Don`t have an account?{" "}
                <Link
                  href="/register"
                  className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
                >
                  Create one
                </Link>
              </p>

            </form>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LoginPage;