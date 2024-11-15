import React from "react";
import { fetching } from "../../../utils/fetching";

function DeleteRegister({ record, action }) {
  
  async function deleteUser() {
    try {
      const optionsFetch = {
        method: "DELETE",
      };

      const response = await fetching(
        `http://localhost:3000/v1/users/${record.id}`,
        optionsFetch
      );

      return response;
    } catch (error) {
      console.error(error);
    }
  }

  const optionOK = async () => {
    await deleteUser();
  };

  if (action) {
    optionOK();
  }

  return (
    <div>
      <p>¿Estas seguro que quieres eliminar este registro?</p>
    </div>
  );
}

export default DeleteRegister;
