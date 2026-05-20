import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";
import DeleteAlert from "./DeleteAlert";
import EditModal from "./EditModal";

const AddedCarsCard = ({ car }) => {
  return (
    <div>
      <Card>
        <div>
          <Image
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            width={200}
            height={200}
          ></Image>
        </div>
        <div>
        <h2 className="font-bold text-xl">{`${car.brand} ${car.model}`}</h2>
        <p>${car.pricePerDay}</p>
        <DeleteAlert car={car}/>
        <EditModal car={car}/>
        </div>
      </Card>
    </div>
  );
};

export default AddedCarsCard;
