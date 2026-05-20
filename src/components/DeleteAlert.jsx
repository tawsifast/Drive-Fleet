"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteAlert = ({car}) => {
    const {_id} = car;
    const handleDelete = async () =>{
        const res = await fetch(`http://localhost:5000/listing/${_id}`,{
        method: "DELETE",
        headers: {
        "content-type": "application/json",
        // body: JSON.stringify(destination),
        }
      })
      const data = await res.json();
      redirect("/explore")
      console.log(data,"data");
    }
  return (
    <div>
      <AlertDialog>
        <Button
          variant="outline"
          className={"rounded-none text-red-400 border border-red-300"}
        >
          <RiDeleteBin6Line />
          Cancel
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete Car permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete <strong>My Awesome</strong> and
                  all of its data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button onClick={handleDelete} variant="danger">
                  Delete Car
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteAlert;
