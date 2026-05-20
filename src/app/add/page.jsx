"use client";
import { authClient } from "@/lib/auth-client";
import {Button,Card,CardBody,FieldError,Input,Label,ListBox,Select,TextArea,TextField,} from "@heroui/react";

const carTypes = ["SUV","Sedan","Hatchback","Luxury","Sports","Electric","Pickup","Van",
];
const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid"];
const transmissions = ["Automatic", "Manual"];

const AddCarPage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const cars = Object.fromEntries(formData.entries());
    console.log(cars, "cars");
    const {_id, brand, model, speed, rating, category, seats, image, transmission, fuel, description, pricePerDay, available} = cars;
    const personalCarAddingData = {
      userId: user.id,
      userImage: user.image,
      UserName: user.name,
      carId:_id,
      model,
      brand,
      image,
      pricePerDay,
      category,
      location,
    };

    const [res1, res2] = await Promise.all([
      fetch("http://localhost:5000/explore", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(cars),
      }),
      fetch("http://localhost:5000/listing", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(personalCarAddingData),
      }),
    ]);
    const data1 = await res1.json();
    const data2 = await res2.json();
    console.log(data1,data2, "data");
  };

  return (
    <section className="min-h-screen bg-zinc-950 py-10 px-4 relative overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#ffffff1a 1px, transparent 1px),
            linear-gradient(90deg, #ffffff1a 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-yellow-400 opacity-5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-7">
          <span className="inline-block text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-4 border border-yellow-400/30 px-3 py-1 rounded-full">
            Car Listing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Add Your <span className="text-yellow-400 italic">Car</span>
          </h1>
          <p className="text-zinc-400 mt-3">
            Fill in the details below to list your car for rent.
          </p>
        </div>

        <Card className="bg-zinc-900/50 border border-zinc-800">
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Row 1 — Name & Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextField name="brand" isRequired>
                <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                  Car Name / Brand
                </Label>
                <Input
                  placeholder=""
                  className="rounded-lg bg-zinc-900 border border-zinc-700 text-white"
                />
                <FieldError />
              </TextField>

              <TextField name="model" isRequired>
                <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                  Car Name / model 
                </Label>
                <Input
                  placeholder=""
                  className="rounded-lg bg-zinc-900 border border-zinc-700 text-white"
                />
                <FieldError />
              </TextField>

            </div>

            {/* Row 2 — Type & Seats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Select
                name="category"
                isRequired
                className="w-full"
                placeholder="Select type"
              >
                <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                  Car Type
                </Label>
                <Select.Trigger className="rounded-lg bg-zinc-900 border text-white border-zinc-700">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    {carTypes.map((type) => (
                      <ListBox.Item key={type} id={type} textValue={type}>
                        {type}
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>

              <TextField name="seats" type="number" isRequired>
                <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                  Seat Capacity
                </Label>
                <Input
                  type="number"
                  placeholder=""
                  className="rounded-lg bg-zinc-900 border border-zinc-700 text-white"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Row 3 — Fuel & Transmission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Select
                name="fuel"
                isRequired
                className="w-full"
                placeholder="Select fuel"
              >
                <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                  Fuel Type
                </Label>
                <Select.Trigger className="rounded-lg text-white bg-zinc-900 border border-zinc-700">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    {fuelTypes.map((f) => (
                      <ListBox.Item key={f} id={f} textValue={f}>
                        {f}
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>

              {/* <Select
                name="transmission"
                isRequired
                className="w-full"
                placeholder="Select transmission"
              >
                <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                  Transmission
                </Label>
                <Select.Trigger className="rounded-lg text-white bg-zinc-900 border border-zinc-700">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    {transmissions.map((t) => (
                      <ListBox.Item key={t} id={t} textValue={t}>
                        {t}
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select> */}


              

              <TextField name="pricePerDay" type="number" isRequired>
                <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                  Daily Rent Price ($)
                </Label>
                <Input
                  type="number"
                  placeholder=""
                  className="rounded-lg bg-zinc-900 border border-zinc-700 text-white"
                />
                <FieldError />
              </TextField>

            </div>

            {/* Row 4 — Speed & Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextField name="speed">
                <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                  Top Speed
                </Label>
                <Input
                  placeholder=""
                  className="rounded-lg bg-zinc-900 border border-zinc-700 text-white"
                />
                <FieldError />
              </TextField>

              <TextField name="location" isRequired>
                <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                  Pickup Location
                </Label>
                <Input
                  placeholder=""
                  className="rounded-lg bg-zinc-900 border border-zinc-700 text-white"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Image URL */}
            <TextField name="image" isRequired>
              <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                Image URL
              </Label>
              <Input
                type="url"
                placeholder="Enter your image url"
                className="rounded-lg bg-zinc-900 border border-zinc-700 text-white"
              />

              <FieldError />
            </TextField>

            {/* Availability */}
            <Select
              name="available"
              isRequired
              className="w-full"
              placeholder="Select availability"
            >
              <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                Availability Status
              </Label>
              <Select.Trigger className="rounded-lg text-white bg-zinc-900 border border-zinc-700">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="true" textValue="Available Now">
                    ✓ Available Now
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="false" textValue="Not Available">
                    ✗ Not Available
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

            {/* Description */}
            <TextField name="description" isRequired>
              <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                Description
              </Label>
              <TextArea
                placeholder=""
                className="rounded-lg bg-zinc-900 border border-zinc-700 text-white"
              />
              <FieldError />
            </TextField>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full py-6 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-sm uppercase tracking-widest rounded-lg"
            >
              Add Car Listing →
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default AddCarPage;
