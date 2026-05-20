import { Card, CardBody, Chip, Button } from "@heroui/react";
import Image from "next/image";
import { FaStar, FaGasPump, FaLocationDot } from "react-icons/fa6";
import { IoIosSpeedometer } from "react-icons/io";
import { MdOutlineAirlineSeatReclineExtra, MdSettings } from "react-icons/md";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import Link from "next/link";
import { BookNowModal } from "@/components/BookNowModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const CarDetailsPage = async ({ params }) => {
  const { id } = await params;
  const {token} = await auth.api.getToken({
    headers: await headers()
  })
  console.log(token);
  const res = await fetch(`http://localhost:5000/explore/${id}`,{
    headers:{
      authorization: `Bearer ${token}`
    }})
  const car = await res.json();
  const {brand,model,speed,rating,category,seats,image,transmission,fuel,description,pricePerDay,available,location,features} = car;

  return (
    <section className="min-h-screen bg-zinc-950 py-8 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#ffffff1a 1px, transparent 1px),
            linear-gradient(90deg, #ffffff1a 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 rounded-full bg-yellow-400 opacity-5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Back */}
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-yellow-400 text-sm uppercase tracking-widest mb-8 transition-colors"
        >
          ← Back to Cars
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT — Image */}
          <div className="space-y-4">
            <Card className="bg-zinc-900 border border-zinc-800 overflow-hidden">
              <div className="relative w-full h-80 aspect-video">
                <Image
                  src={image}
                  alt={`${brand} ${model}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Available badge */}
                <Chip
                  className={`absolute top-2 left-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${available ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-red-500/20 text-red-400 border border-red-500/30"}`}
                >
                  {available ? (
                    <>
                      <BsCheckCircleFill /> Available Now
                    </>
                  ) : (
                    <>
                      <BsXCircleFill /> Not Available
                    </>
                  )}
                </Chip>
                {/* Category */}
                <Chip className="absolute top-2 right-2 bg-yellow-400 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full">
                  {category}
                </Chip>
              </div>
            </Card>

            {/* left bottom content */}
            {/* <div className="grid grid-cols-4 gap-3">
              {[
                { icon: <IoIosSpeedometer className="text-yellow-400 text-xl" />, label: "Top Speed", value: speed },
                { icon: <MdOutlineAirlineSeatReclineExtra className="text-yellow-400 text-xl" />, label: "Seats", value: `${seats} seats` },
                { icon: <FaGasPump className="text-yellow-400 text-xl" />, label: "Fuel", value: fuel },
                { icon: <MdSettings className="text-yellow-400 text-xl" />, label: "Gearbox", value: transmission },
              ].map((stat) => (
                <Card key={stat.label} className="bg-zinc-900 border border-zinc-800">
                  <div className="p-3 flex flex-col items-center text-center gap-1">
                    {stat.icon}
                    <p className="text-zinc-500 text-xs">{stat.label}</p>
                    <p className="text-white text-xs font-semibold">{stat.value}</p>
                  </div>
                </Card>
              ))}
            </div> */}

            <div className="grid grid-cols-4 gap-3">
              <Card className="bg-zinc-900 border border-zinc-800">
                <div className="p-3 flex flex-col items-center text-center gap-1">
                  <IoIosSpeedometer className="text-yellow-400 text-xl" />
                  <p className="text-zinc-500 text-xs">Top Speed</p>
                  <p className="text-white text-xs font-semibold">{speed}</p>
                </div>
              </Card>
              <Card className="bg-zinc-900 border border-zinc-800">
                <div className="p-3 flex flex-col items-center text-center gap-1">
                  <MdOutlineAirlineSeatReclineExtra className="text-yellow-400 text-xl" />
                  <p className="text-zinc-500 text-xs">Seats</p>
                  <p className="text-white text-xs font-semibold">
                    {seats} seats
                  </p>
                </div>
              </Card>
              <Card className="bg-zinc-900 border border-zinc-800">
                <div className="p-3 flex flex-col items-center text-center gap-1">
                  <FaGasPump className="text-yellow-400 text-xl" />
                  <p className="text-zinc-500 text-xs">Fuel</p>
                  <p className="text-white text-xs font-semibold">{fuel}</p>
                </div>
              </Card>
              <Card className="bg-zinc-900 border border-zinc-800">
                <div className="p-3 flex flex-col items-center text-center gap-1">
                  <MdSettings className="text-yellow-400 text-xl" />
                  <p className="text-zinc-500 text-xs">Gearbox</p>
                  <p className="text-white text-xs font-semibold">
                    {transmission}
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* RIGHT — Info */}
          <div className="space-y-6">
            {/* Name & Rating */}
            <div>
              <span className="inline-block text-yellow-400 text-xs font-semibold uppercase mb-3 border border-yellow-400/30 px-3 py-1 rounded-full">
                {category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white ">
                {brand} <span className="text-yellow-400 italic">{model}</span>
              </h1>

              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1 text-yellow-400">
                  <FaStar />
                  <span className="text-white font-semibold">{rating}</span>
                  <span className="text-zinc-500 text-sm">(129 reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-zinc-400 text-sm">
                  <FaLocationDot className="text-yellow-400" />
                  {location}
                </div>
              </div>
            </div>

            {/* Price */}
            <Card className="bg-zinc-900 border border-zinc-800">
              <div className="p-3 flex flex-row items-center justify-between">
                <div>
                  <p className="text-zinc-400 text-xs uppercase tracking-widest">
                    Daily Rate
                  </p>
                  <p className="text-4xl font-bold text-white mt-1">
                    ${pricePerDay}
                    <span className="text-zinc-500 text-lg font-normal">
                      /day
                    </span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-zinc-400 text-xs uppercase tracking-widest">
                    Weekly Est.
                  </p>
                  <p className="text-xl font-semibold text-yellow-400 mt-1">
                    ${pricePerDay * 7}
                  </p>
                </div>
              </div>
            </Card>

            {/* Description */}
            <div>
              <h3 className=" font-semibold uppercase tracking-widest text-xs mb-3 text-zinc-400">
                About
              </h3>
              <p className="text-zinc-400 leading-relaxed">{description}</p>
            </div>

            {/* Features */}
            {features?.length > 0 && (
              <div>
                <h3 className="font-semibold uppercase tracking-widest text-xs mb-3 text-zinc-400">
                  Features
                </h3>
                <div className="flex flex-wrap gap-2">
                  {features.map((feature) => (
                    <Chip
                      key={feature}
                      size="md"
                      className="bg-zinc-800 text-zinc-300 border border-zinc-700"
                    >
                      ✓ {feature}
                    </Chip>
                  ))}
                </div>
              </div>
            )}

            {/* Divider */}
            <div className="border-t border-zinc-800" />

            {/* CTA Buttons */}
            <div className="flex gap-3">
              {/* <Button
                className="flex-1 py-6 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-sm uppercase tracking-widest rounded-lg"
                isDisabled={!available}
              >
                {available ? "Book Now →" : "Not Available"}
              </Button> */}
              <BookNowModal car={car} />
              <Button
                className="py-6 px-5 border border-zinc-700 text-zinc-400 hover:border-zinc-400 hover:text-white rounded-lg"
                variant="bordered"
              >
                ♡ Save
              </Button>
            </div>

            {available && (
              <p className="text-zinc-600 text-xs text-center">
                Free cancellation up to 24 hours before pickup
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetailsPage;
