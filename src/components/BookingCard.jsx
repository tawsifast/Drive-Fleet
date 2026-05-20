import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const BookingCard = ({ booking }) => {

  return (
    // <div >
    //   <Card className="flex flex-row gap-20 border">
    //     <div className="">
    //       <Image src={booking.image}
    //        alt="h"
    //         width={150}
    //         height={150}
    //         className="rounded-md"
    //         ></Image>
    //     </div>
    //     <div>
    //     <h2 className="font-bold text-xl">{`${booking.brand} ${booking.model}`}</h2>
    //     <p>${booking.pricePerDay}</p>
    //     <p>{booking.location}</p>
    //     </div>
    //   </Card>
    // </div>

      <div>
      <Card className="bg-zinc-900 border border-zinc-800 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-0">

          {/* Image */}
          <div className="relative w-full md:w-56 h-48 md:h-auto flex-shrink-0">
            <Image
              src={booking.image}
              alt={`${booking.brand} ${booking.model}`}
              fill
              className="object-cover"
            />
            {/* Status badge */}
            <div className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
              booking.status === "pending"
                ? "bg-yellow-400/20 text-yellow-400 border border-yellow-400/30"
                : "bg-green-500/20 text-green-400 border border-green-500/30"
            }`}>
              {booking.status === "pending" ? "⏳ Pending" : "✓ Confirmed"}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col flex-1 p-6 gap-4">

            {/* Top row */}
            <div className="flex items-start justify-between">
              <div>
                <span className="text-yellow-400 text-xs font-semibold uppercase tracking-widest">
                  {booking.category}
                </span>
                <h2 className="font-bold text-white text-2xl mt-1">
                  {`${booking.brand} ${booking.model}`}
                </h2>
                <p className="text-zinc-500 text-sm mt-1 flex items-center gap-1"><FaLocationDot /> {booking.location}</p>
              </div>
              <div className="text-right">
                <p className="text-zinc-400 text-xs uppercase tracking-widest">Per Day</p>
                <p className="text-yellow-400 text-2xl font-bold">${booking.pricePerDay}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-zinc-800" />

            {/* Details row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Booking Date</p>
                {/* <p className="text-white text-sm font-semibold">{bookingDate}</p> */}
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Driver</p>
                <p className="text-white text-sm font-semibold capitalize">
                  {booking.driverNeeded === "yes" ? " Need One" : " Self Drive"}
                </p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Booked By</p>
                <p className="text-white text-sm font-semibold">{booking.UserName}</p>
              </div>
              {/* <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Booking Date</p>
                <p className="text-white text-sm font-semibold">{booking.bookingDate}</p>
              </div> */}
            </div>

            {/* Message */}
            {booking.message && (
              <div className="bg-zinc-800 rounded-lg px-4 py-3">
                <p className="text-zinc-400 text-xs uppercase tracking-widest mb-1">Special Note</p>
                <p className="text-zinc-300 text-sm">{booking.message}</p>
              </div>
            )}

          </div>
        </div>
      </Card>
    </div>
  );
};

export default BookingCard;
