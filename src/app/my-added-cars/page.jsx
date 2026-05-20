import AddedCarsCard from "@/components/AddedCarsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
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
  console.log(addedCars, "data");
  return (
    <div>
      <h2>My Added cars</h2>
      <div>
        {addedCars.map((car) => (
          <AddedCarsCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default MyAddedCars;
