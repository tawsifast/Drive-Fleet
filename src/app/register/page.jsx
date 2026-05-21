"use client"
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {Button,Card,Description,FieldError,Form,Input,Label,Separator,TextField,Select, ListBox} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());
        console.log(user,"user");
        const {data, error} = await authClient.signUp.email
        ({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image
        })
        console.log(data, error);
        if(data){
            redirect("/login")
        }
        if(error){
        toast.error("Signup Unsuccessful")
        }
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
            Get Started
          </span>
          <h1 className="text-4xl font-bold text-white">
            Create <span className="text-yellow-400 italic">Account</span>
          </h1>
          <p className="text-zinc-400 mt-2 text-sm">
            Join us and start renting premium cars
          </p>
        </div>

        <Card className="bg-zinc-900/50 border border-zinc-800">
          <div className="p-8">
            <form onSubmit={onSubmit}  className="space-y-5">

            {/* Name */}
            <TextField name="name" isRequired>
              <Label className="text-zinc-400 text-xs font-semibold uppercase ">
                Full Name
              </Label>
              <Input placeholder="Enter your name" className="rounded-lg bg-zinc-900 border border-zinc-700 text-white" />
            </TextField>

            {/* Email */}
            <TextField name="email" type="email" isRequired
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}>
              <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                Email Address
              </Label>
              <Input placeholder="Enter your email address" className="rounded-lg bg-zinc-900 border border-zinc-700 text-white" />
              <FieldError />
            </TextField>

            {/* Photo URL */}
            <TextField name="image" type="url">
              <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                Photo URL
              </Label>
              <Input
                placeholder="Enter image url"
                className="rounded-lg bg-zinc-900 border border-zinc-700 text-white"
              />
               <FieldError />
            </TextField>

            {/* Password */}
            <div className="relative">
              <TextField name="password" type={showPassword ? "text" : "password"} isRequired
              validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}>
                <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                  Password
                </Label>
                <Input
                  placeholder="Enter your password"
                  className="rounded-lg bg-zinc-900 border border-zinc-700 text-white pr-10"
                />
                <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
              </TextField>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-8 text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              </button>
            </div>

            {/* Register Button */}
            <Button type="submit" className="w-full py-6 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-sm uppercase tracking-widest rounded-lg mt-2">
              Create Account →
            </Button>
        </form>
            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-zinc-800" />
              <span className="text-zinc-600 text-xs uppercase tracking-widest">or</span>
              <div className="flex-1 h-px bg-zinc-800" />
            </div>

            {/* Google Button */}
            <Button
              variant="bordered"
              className="w-full py-6 border border-zinc-700 text-white hover:border-zinc-500 rounded-lg flex items-center justify-center gap-3"
            >
              <FcGoogle size={20} />
              <span className="text-sm font-medium">Continue with Google</span>
            </Button>

            {/* Login link */}
            <p className="text-center text-zinc-500 text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors">
                Sign in
              </Link>
            </p>

          </div>
        </Card>
      </div>
    </section>
    );
};

export default RegisterPage;