import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { SiFueler } from "react-icons/si";

const CarCard = ({ car }) => {
  const { _id, brand, model, speed, rating, category, seats, image, transmission, fuel, pricePerDay, available, booking_count } = car;

  return (
    <div className="h-full">
      <Card className="h-full flex flex-col bg-zinc-900 border border-zinc-800 overflow-hidden">

        {/* Image */}
        <div className="relative aspect-video">
          <Image
            src={image}
            alt={`${brand} ${model}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <Chip size="sm" className="absolute px-2 top-2 left-2 bg-transparent border-0">
            {available === "true" || available === true ? (
              <span className="text-green-400 bg-green-500/20 border border-green-500/30 px-2 py-1 rounded-full text-xs font-semibold">✓ Available</span>
            ) : (
              <span className="text-red-400 bg-red-500/20 border border-red-500/30 px-2 py-1 rounded-full text-xs font-semibold">✗ Unavailable</span>
            )}
          </Chip>
          <p className="absolute top-2 right-2 text-pink-400 bg-zinc-900/60 p-1.5 rounded-full backdrop-blur-sm cursor-pointer hover:text-pink-300 transition-colors">
            <BiHeart />
          </p>
        </div>

        {/* Name + Rating + Price */}
        <div className="flex justify-between items-center min-h-15 gap-2 px-3 pt-3 flex-wrap">
          <h2 className="font-bold text-lg text-white">{brand} {model}</h2>
          <h3 className="flex items-center py-0.5 rounded-md px-2 bg-zinc-800 gap-1">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold text-white">{rating}</span>
            <span className="text-zinc-500 text-xs">(129)</span>
          </h3>
          <p className="text-zinc-400 text-sm">
            <span className="font-bold text-xl text-yellow-400">${pricePerDay}</span>/day
          </p>
        </div>
        

        {/* Specs */}
        <div className="flex justify-between items-center px-3 py-2 border-t border-zinc-800 mt-2">
          <p className="flex items-center gap-1 text-zinc-400 text-sm"><SiFueler className="text-yellow-400" />{fuel}</p>
          <p className="flex items-center gap-1 text-zinc-400 text-sm"><MdOutlineAirlineSeatReclineExtra className="text-yellow-400" />{seats} seater</p>
          <p className="flex items-center gap-1 text-zinc-400 text-sm"><IoIosSpeedometer className="text-yellow-400" />{speed}</p>
        </div>

        {/* Button */}
        <div className="px-3 pb-3 mt-auto">
          <Link href={`/explore/${_id}`}>
            <Button className="w-full py-5 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs uppercase tracking-widest rounded-lg transition-colors">
              View Details →
            </Button>
          </Link>
        </div>

      </Card>
    </div>
  );
};

export default CarCard;