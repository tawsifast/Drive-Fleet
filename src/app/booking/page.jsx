import BookingCard from "@/components/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

const BookingCarPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const {token} = await auth.api.getToken({
      headers: await headers()
    })

  const user = session?.user;
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/carBooking/${user?.id}`,{
     headers:{
      authorization: `Bearer ${token}`
    }
  });
  const bookings = await res.json();
  console.log(bookings, "data");

  return (
    <section className="min-h-screen bg-zinc-950 relative overflow-hidden">

      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#ffffff1a 1px, transparent 1px),
                            linear-gradient(90deg, #ffffff1a 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 rounded-full bg-yellow-400 opacity-5 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-11/12 mx-auto py-8">

        {/* Header */}
       

        {bookings.length > 0 ? (
          <div className="flex flex-col gap-4">
             <div className="mb-5 text-center">
          <span className="inline-block text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-1 border border-yellow-400/30 px-3 py-1 rounded-full">
            Dashboard
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-yellow-400 italic">Bookings</span>
          </h1>
          <p className="text-zinc-400 mt-3 text-sm">
            Manage and track all your car rentals in one place.
          </p>
        </div>
            {bookings.map((booking) => (
              <BookingCard key={booking._id} booking={booking} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-24 h-24 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-5xl mb-6">
              🚗
            </div>
            <span className="inline-block text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-4 border border-yellow-400/30 px-3 py-1 rounded-full">
              Bookings
            </span>
            <h2 className="text-white text-3xl font-bold mb-2">
              No <span className="text-yellow-400 italic">Bookings</span> Yet
            </h2>
            <p className="text-zinc-400 text-sm mb-8 max-w-sm">
              You haven`t booked any cars yet. Explore our fleet and find your perfect ride.
            </p>
            <Link
              href="/explore"
              className="px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-sm uppercase tracking-widest rounded-lg transition-colors"
            >
              Explore Cars →
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default BookingCarPage;