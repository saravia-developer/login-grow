import React, { useEffect, useState } from "react";
import styles from "./formModal.module.scss";
import { fetching } from "../../../utils/fetching";
import { Input } from "antd";

function FormModal({ record, action }) {
  const [username, setUsername] = useState(record.usuario);
  const [completeName, setCompleteName] = useState(record.nombreCompleto);
  const [email, setEmail] = useState(record.correo);
  const [error, setError] = useState(null);

  const handleUpdateUsername = (e) =>{  setUsername(e.target.value); };
  const handleUpdateCompleteName = (e) =>{  setCompleteName(e.target.value); };
  const handleUpdateEmail = (e) =>{  setEmail(e.target.value);  };

  const updateUser = async () => {
    try {
      const name = completeName.split(" ")[0];
      const paternalSurname = completeName.split(" ")[1];
      const maternalSurname = completeName.split(" ")[2];

      const optionsFetch = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: username,
          Correo: email,
          Nombre: name,
          Apell_paterno: paternalSurname,
          Apell_materno: maternalSurname,
        }),
      };

      const response = await fetching(
        `http://localhost:3000/v1/users/${record.id}`,
        optionsFetch
      );

      return response;
    } catch (error) {
      setError(error);
    }
  };

  if (action) {
    updateUser();
  }

  if (error) return <div>Error: {error.message}</div>;

  return (
    <form action="" className={styles["container-form-modal"]}>
      <div>
        <label htmlFor="update-modal-username">Usuario</label>
        <Input
          id="update-modal-username"
          type="text"
          value={username}
          onChange={handleUpdateUsername}
        />
      </div>
      <div>
        <label htmlFor="update-modal-email">Correo</label>
        <Input
          id="update-modal-email"
          type="text"
          value={email}
          onChange={handleUpdateEmail}
        />
      </div>
      <div>
        <label htmlFor="update-modal-complete-name">Nombre Completo</label>
        <Input
          id="update-modal-complete-name"
          type="text"
          value={completeName}
          onChange={handleUpdateCompleteName}
        />
      </div>
    </form>
  );
}

export default FormModal;
