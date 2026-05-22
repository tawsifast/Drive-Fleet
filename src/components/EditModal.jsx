"use client";
import {
  Button,
  Select,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  FieldError,
  ListBox,
  TextArea,
} from "@heroui/react";
import { RiEdit2Fill } from "react-icons/ri";

const EditModal = ({ car }) => {

  const {_id} = car;
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const cars = Object.fromEntries(formData.entries());
    console.log(cars, "carsData");
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/listing/${_id}`,{
      method: 'PATCH',
      headers:{
           "content-type": "application/json" 
          },
        body: JSON.stringify(cars),
    })
    const data = await res.json();
    console.log(data, "data");
}
  return (
    <div>
      <Modal>
        <Button className="flex items-center gap-1 px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs uppercase tracking-widest rounded-lg transition-colors">
          <RiEdit2Fill /> Edit
        </Button>

        <Modal.Backdrop className="bg-zinc-950/80 backdrop-blur-sm">
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl">
              <Modal.CloseTrigger className="text-zinc-400 hover:text-white" />

              <Modal.Header className="border-b border-zinc-800 px-6 pt-6 pb-4">
                <span className="inline-block text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-2 border border-yellow-400/30 px-3 py-1 rounded-full">
                  Car Listing
                </span>
                <Modal.Heading className="text-white text-2xl font-bold">
                  Edit <span className="text-yellow-400 italic">Car</span>
                </Modal.Heading>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Surface variant="default" className="bg-transparent">
                  <form onSubmit={onSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Price */}
                      <TextField
                        defaultValue={car.pricePerDay}
                        name="pricePerDay"
                        type="number"
                        isRequired
                      >
                        <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                          Daily Rent Price ($)
                        </Label>
                        <Input
                          type="number"
                          placeholder=""
                          className="rounded-lg bg-zinc-800 border border-zinc-700 text-white"
                        />
                        <FieldError />
                      </TextField>

                      {/* Category */}
                      <Select
                        defaultValue={car.category}
                        name="category"
                        isRequired
                        className="w-full"
                        placeholder="Select type"
                      >
                        <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                          Car Type
                        </Label>
                        <Select.Trigger className="rounded-lg text-white bg-zinc-800 border border-zinc-700 hover:border-yellow-400">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover className="bg-zinc-900 border border-zinc-700">
                          <ListBox>
                            {["SUV","Sedan","Hatchback","Luxury","Sports", "Electric","Pickup","Van",
                            ].map((type) => (
                              <ListBox.Item
                                key={type}
                                id={type}
                                textValue={type}
                                className="text-white hover:bg-zinc-800"
                              >
                                {type}
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            ))}
                          </ListBox>
                        </Select.Popover>
                      </Select>

                      {/* Location */}
                      <TextField
                        defaultValue={car.location}
                        name="location"
                        isRequired
                      >
                        <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                          Pickup Location
                        </Label>
                        <Input
                          placeholder="e.g. Dhaka"
                          className="rounded-lg bg-zinc-800 border border-zinc-700 text-white"
                        />
                        <FieldError />
                      </TextField>

                      {/* Availability */}
                      <Select
                        defaultValue={String(car.available)}
                        name="available"
                        isRequired
                        className="w-full"
                        placeholder="Select availability"
                      >
                        <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                          Availability Status
                        </Label>
                        <Select.Trigger className="rounded-lg text-white bg-zinc-800 border border-zinc-700 hover:border-yellow-400">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover className="bg-zinc-900 border border-zinc-700">
                          <ListBox>
                            <ListBox.Item
                              id="true"
                              textValue="Available Now"
                              className="text-green-400 hover:bg-zinc-800"
                            >
                              ✓ Available Now
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item
                              id="false"
                              textValue="Not Available"
                              className="text-red-400 hover:bg-zinc-800"
                            >
                              ✗ Not Available
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>

                      {/* Image URL */}
                      <div className="md:col-span-2">
                        <TextField
                          defaultValue={car.image}
                          name="image"
                          isRequired
                        >
                          <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                            Image URL
                          </Label>
                          <Input
                            type="url"
                            placeholder="Enter your image url"
                            className="rounded-lg bg-zinc-800 border border-zinc-700 text-white"
                          />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Description */}
                      <div className="md:col-span-2">
                        <TextField
                          defaultValue={car.description}
                          name="description"
                          isRequired
                        >
                          <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                            Description
                          </Label>
                          <TextArea
                            placeholder="Describe the car..."
                            className="rounded-lg bg-zinc-800 border border-zinc-700 text-white"
                          />
                          <FieldError />
                        </TextField>
                      </div>
                    </div>

                    <Modal.Footer className="border-t border-zinc-800 pt-4 px-0">
                      <Button
                        slot="close"
                        className="px-6 py-3 border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white text-xs uppercase tracking-widest rounded-lg transition-colors"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs uppercase tracking-widest rounded-lg transition-colors"
                      >
                        Save Changes →
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditModal;
