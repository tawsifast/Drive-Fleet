import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";
import DeleteAlert from "./DeleteAlert";
import EditModal from "./EditModal";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";


const AddedCarsCard = ({ car }) => {
  return (
     <div>
      <Card className="bg-zinc-900 border border-zinc-800 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-0">

          {/* Image */}
          <div className="relative w-full md:w-56 h-48 md:h-auto shrink-0">
            <Image
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              fill
              className="object-cover"
            />
            {/* Available badge */}
            <div className={`absolute top-3 left-3 flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full ${
              car.available === "true" || car.available === true
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-red-500/20 text-red-400 border border-red-500/30"
            }`}>
              {car.available === "true" || car.available === true
                ? <><BsCheckCircleFill /> Available</>
                : <><BsXCircleFill /> Unavailable</>
              }
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col flex-1 p-6 gap-4">

            {/* Top */}
            <div className="flex items-start justify-between">
              <div>
                <span className="text-yellow-400 text-xs font-semibold uppercase tracking-widest">
                  {car.category}
                </span>
                <h2 className="font-bold text-white text-2xl mt-1">
                  {car.brand} {car.model}
                </h2>
                <p className="text-zinc-500 text-sm mt-1 flex items-center gap-1">
                  <FaLocationDot className="text-yellow-400" /> {car.location}
                </p>
              </div>
              <div className="text-right">
                <p className="text-zinc-400 text-xs uppercase tracking-widest">Per Day</p>
                <p className="text-yellow-400 text-2xl font-bold">${car.pricePerDay}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-zinc-800" />

            {/* Description */}
            <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
              {car.description}
            </p>

            {/* Buttons */}
            <div className="flex gap-3 mt-auto">
              <EditModal car={car} />
              <DeleteAlert car={car} />
            </div>

          </div>
        </div>
      </Card>
    </div>
  );
};

export default AddedCarsCard;
