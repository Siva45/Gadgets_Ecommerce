"use client";

import { Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

export function Component() {
  const [openModal, setOpenModal] = useState(false);
//   const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  function handleButtonClick(event) {
    event.preventDefault(); // Prevent default behavior
    setOpenModal(true);
  }

  return (
    <>
      <button type="button" onClick={handleButtonClick} className="btn">
        Add to Cart
      </button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 ">
            
            <h3 className="text-center"><i class="fa-regular fa-square-check"></i> Added to cart Succefully</h3>
            <div>
             
              <img src="p1.webp" alt="" />
            </div>
          
          
           <div className="bg-red-500 text-center p-2 hover:bg-black">
            <a href="" className="text-white">BUY NOW</a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
