import AddedCarsCard from "@/components/AddedCarsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

const MyAddedCars = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const {token} = await auth.api.getToken({
        headers: await headers()
      })
  const user = session?.user;
  // console.log(user, "session");
  const res = await fetch(`http://localhost:5000/listing/${user?.id}`,{
     headers:{
      authorization: `Bearer ${token}`
    }
  });
  const addedCars = await res.json();
  // console.log(addedCars, "data");
  return (
    <section className="min-h-screen bg-zinc-950 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#ffffff1a 1px, transparent 1px),
                            linear-gradient(90deg, #ffffff1a 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 rounded-full bg-yellow-400 opacity-5 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-11/12 mx-auto py-5">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="inline-block text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-4 border border-yellow-400/30 px-3 py-1 rounded-full">
              My Listings
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              My Added <span className="text-yellow-400 italic">Cars</span>
            </h1>
            <p className="text-zinc-400 mt-3 text-sm">
              Manage your car listings — edit, update, or remove anytime.
            </p>
          </div>
          <Link
            href="/add"
            className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs uppercase tracking-widest rounded-lg transition-colors"
          >
            + Add New Car
          </Link>
        </div>

        {/* Cars */}
        {addedCars.length > 0 ? (
          <div className="flex flex-col gap-5">
            {addedCars.map((car) => (
              <AddedCarsCard key={car._id} car={car} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-24 h-24 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-5xl mb-6">
              🚗
            </div>
            <span className="inline-block text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-4 border border-yellow-400/30 px-3 py-1 rounded-full">
              No Listings
            </span>
            <h2 className="text-white text-3xl font-bold mb-2">
              No <span className="text-yellow-400 italic">Cars</span> Added Yet
            </h2>
            <p className="text-zinc-400 text-sm mb-8 max-w-sm">
              You haven`t listed any cars yet. Add your first car and start earning.
            </p>
            <Link
              href="/add"
              className="px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-sm uppercase tracking-widest rounded-lg transition-colors"
            >
              Add Your First Car →
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default MyAddedCars;
