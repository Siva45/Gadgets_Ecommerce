"use client";

import { Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import axios from "axios";

const CartButton = ({ product }) => {
  const [openModal, setOpenModal] = useState(false);

  const addToCart = async () => {
    try {
      const response = await axios.post("http://localhost:5000/add-to-cart", {
        product_id: product.id,
        product_name: product.title,
        price: product.price,
        quantity: 1,
      });

      alert(response.data.message); // Show alert message
      setOpenModal(true); // Show modal on successful add-to-cart
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <>
      <button type="button" onClick={addToCart} className="btn">
        Add to Cart
      </button>

      {/* Modal for success message */}
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 text-center">
            <h3>
              <i className="fa-regular fa-square-check"></i> Added to cart Successfully
            </h3>
            <div>
              <img src="p1.webp" alt="Product" className="mx-auto" />
            </div>
            <div className="bg-red-500 text-center p-2 hover:bg-black">
              <a href="#" className="text-white">
                BUY NOW
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CartButton;
