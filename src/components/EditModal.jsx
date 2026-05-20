"use client";
import { Envelope } from "@gravity-ui/icons";
import {Button,Select,Input,Label,Modal,Surface,TextField,FieldError,ListBox,TextArea} from "@heroui/react";
import { BiUser } from "react-icons/bi";
import { RiEdit2Fill } from "react-icons/ri";

const EditModal = ({car}) => {
    return (
        <div>
        <Modal>
        {/* <Button variant="secondary">Open Contact Form</Button> */}
         <Button variant="outline" className={"rounded-none border border-black"}><RiEdit2Fill />Edit</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-2xl">
              <Modal.CloseTrigger />
              <Modal.Header>
                {/* <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <BiUser className="size-5" />
                </Modal.Icon> */}
                <Modal.Heading className="text-center">Edit Destination</Modal.Heading>
               
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form  className="p-10 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Destination Name */}
                      <div className="md:col-span-2">
                        <TextField defaultValue="" name="destinationName" isRequired>
                          <Label>Destination Name</Label>
                          <Input
                            placeholder="Bali Paradise"
                            className="rounded-2xl"
                          />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Country */}
                      <TextField  defaultValue=""  name="country" isRequired>
                        <Label>Country</Label>
                        <Input
                          placeholder="Indonesia"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>

                      {/* Category - Updated Select Component */}
                      <div>
                        <Select
                          defaultValue="" 
                          name="category"
                          isRequired
                          className="w-full"
                          placeholder="Select category"
                        >
                          <Label>Category</Label>
                          <Select.Trigger className="rounded-2xl">
                            <Select.Value />
                            <Select.Indicator />
                          </Select.Trigger>
                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item id="Beach" textValue="Beach">
                                Beach
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="Mountain" textValue="Mountain">
                                Mountain
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="City" textValue="City">
                                City
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item
                                id="Adventure"
                                textValue="Adventure"
                              >
                                Adventure
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="Cultural" textValue="Cultural">
                                Cultural
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="Luxury" textValue="Luxury">
                                Luxury
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>

                      {/* Price */}
                      <TextField defaultValue="" name="price" type="number" isRequired>
                        <Label>Price (USD)</Label>
                        <Input
                          type="number"
                          placeholder="1299"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>

                      {/* Duration */}
                      <TextField defaultValue="" name="duration" isRequired>
                        <Label>Duration</Label>
                        <Input
                          placeholder="7 Days / 6 Nights"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>

                      {/* Departure Date */}
                      <div className="md:col-span-2">
                        <TextField defaultValue="" name="departureDate" type="date" isRequired>
                          <Label>Departure Date</Label>
                          <Input type="date" className="rounded-2xl" />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Image URL - Removed preview */}
                      <div className="md:col-span-2">
                        <TextField defaultValue={car.image} name="imageUrl" isRequired>
                          <Label>Image URL</Label>
                          <Input
                            type="url"
                            placeholder="https://example.com/bali-paradise.jpg"
                            className="rounded-2xl"
                          />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Description */}
                      <div className="md:col-span-2">
                        <TextField defaultValue="" name="description" isRequired>
                          <Label>Description</Label>
                          <TextArea
                            placeholder="Describe the travel experience..."
                            className="rounded-3xl"
                          />
                          <FieldError />
                        </TextField>
                      </div>
                    </div>

                    {/* Buttons */}

                     <Modal.Footer>
                <Button slot="close" variant="secondary">
                  Cancel
                </Button>
                <Button type="submit" slot="close">Save</Button>
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