"use client";
import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextField,
  Select,
} from "@heroui/react";
import { useRouter } from "next/navigation";

import { TiTick } from "react-icons/ti";

export function BookNowModal({ car }) {
  const {
    _id,
    brand,
    model,
    speed,
    rating,
    category,
    seats,
    image,
    transmission,
    fuel,
    description,
    pricePerDay,
    available,
    location,
  } = car;

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  // console.log(user,"user");
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!session) {
      router.push("/login");
      return;
    }

    const formData = new FormData(e.target);
    const carData = Object.fromEntries(formData.entries());
    const {message, driverNeeded} = carData;
    const bookingData = {
      userId: user.id,
      userImage: user.image,
      UserName: user.name,
      carId: _id,
      model,
      brand,
      image,
      pricePerDay,
      category,
      location,
      message,
      driverNeeded,
    };
    console.log(bookingData, "booking");

    const res = await fetch("http://localhost:5000/carBooking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    console.log(data, "data");
    alert("You booked successfully");
  };
  return (
    <Modal>
      <Button
        className="flex-1 py-6 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-sm uppercase tracking-widest rounded-lg"
        isDisabled={!car.available}
      >
        {car.available ? "Book Now →" : "Not Available"}
      </Button>
      <Modal.Backdrop className="bg-zinc-950/80 backdrop-blur-sm">
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl">
            <Modal.CloseTrigger className="text-zinc-400 hover:text-white" />
            <Modal.Header className="border-b border-zinc-800 px-6 pt-6 pb-4">
              <Modal.Heading className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                Booking Form
              </Modal.Heading>
              <h2 className="font-bold text-2xl text-white mt-1">{`${car.brand} ${car.model}`}</h2>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default" className="bg-transparent">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  {/* Price info */}
                  <div className="flex justify-between items-center bg-zinc-800 rounded-lg px-3 py-2">
                    <span className="text-zinc-400 text-sm">Price per day</span>
                    <span className="font-bold text-yellow-400 text-lg">
                      ${car.pricePerDay}
                    </span>
                  </div>

                  <Select
                    name="driverNeeded"
                    isRequired
                    className="w-full"
                    placeholder="Select option"
                  >
                    <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                      Driver Needed
                    </Label>
                    <Select.Trigger
                      className="rounded-lg bg-zinc-800 border border-zinc-700 hover:border-yellow-400"
                      isRequired
                    >
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover className="bg-zinc-900 border border-zinc-700">
                      <ListBox>
                        <ListBox.Item
                          id="yes"
                          textValue="Yes"
                          className="text-white hover:bg-zinc-800"
                        >
                          <TiTick /> Yes
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item
                          id="no"
                          textValue="No"
                          className="text-white hover:bg-zinc-800"
                        >
                          No
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <TextField className="w-full" name="message">
                    <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                      Special Note
                    </Label>
                    <Input
                      placeholder="Enter your message"
                      className="bg-zinc-800 border border-zinc-700 text-white rounded-lg hover:border-yellow-400 focus:border-yellow-400"
                    />
                  </TextField>

                  <Modal.Footer className="px-0 pt-2">
                    <Button
                      type="submit"
                      className="w-full flex-1 py-6 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-sm uppercase tracking-widest rounded-lg"
                    >
                      Book Now →
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
