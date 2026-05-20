"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
 const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="bg-zinc-950 border-b border-zinc-800 flex items-center justify-between px-8 py-4 relative z-50">

      {/* top accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400" />

      {/* Logo */}
      <Link href="/" className="text-xl font-bold flex items-center gap-2">
        <span>🚗</span>
        <span className="text-white">Car<span className="text-yellow-400">Rental</span></span>
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-6">
        <Link href="/" className="text-zinc-400 hover:text-yellow-400 text-sm uppercase tracking-widest transition-colors">Home</Link>
        <Link href="/explore" className="text-zinc-400 hover:text-yellow-400 text-sm uppercase tracking-widest transition-colors">Explore Cars</Link>
        <Link href="/add" className="text-zinc-400 hover:text-yellow-400 text-sm uppercase tracking-widest transition-colors">Add Car</Link>
        <Link href="/booking" className="text-zinc-400 hover:text-yellow-400 text-sm uppercase tracking-widest transition-colors">My Bookings</Link>
      </div>

      <div className="relative">
        {user ? (
          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900 hover:border-zinc-600 transition-all"
            >
              <Link href={"#"}>
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    alt={user?.name}
                    src={user?.image}
                  />
                  <Avatar.Fallback className="bg-yellow-400 text-zinc-950 font-bold">
                    {user?.name.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>
              </Link>
              <span className="text-white text-sm font-medium">{user?.name}</span>
              <span><IoMenuSharp className="text-zinc-400 text-xl" /></span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-52 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl z-50 py-2">
                <div className="px-4 py-3 border-b border-zinc-800">
                  <p className="text-white text-sm font-semibold">{user?.name}</p>
                  <p className="text-zinc-500 text-xs">{user?.email}</p>
                </div>
                <Link
                  href="/add"
                  className="block px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-yellow-400 transition-colors"
                  onClick={() => setDropdownOpen(false)}
                >
                  Add Car
                </Link>
                <Link
                  href="/booking"
                  className="block px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-yellow-400 transition-colors"
                  onClick={() => setDropdownOpen(false)}
                >
                  My Bookings
                </Link>
                <Link
                  href="/my-added-cars"
                  className="block px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-yellow-400 transition-colors"
                  onClick={() => setDropdownOpen(false)}
                >
                  My Added Cars
                </Link>
                <hr className="my-1 border-zinc-800" />
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-zinc-800 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href={'/login'}>
            <Button className="px-6 py-2 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs uppercase tracking-widest rounded-lg">
              Login
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;