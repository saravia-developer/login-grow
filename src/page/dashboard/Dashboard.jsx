import { Table } from "antd";
import React, { useEffect, useState } from "react";

import styles from "./dashboard.module.scss";
import ModalAntd from "../../components/modal/Modal";
import FormModal from "../../components/modal/form/FormModal";
import DeleteRegister from "../../components/modal/deleteRegister/DeleteRegister";

import Paginated from "../../components/Paginated/Paginated";
import Search from "../../components/Search/Search";
import { useSelector, useDispatch } from "react-redux";
import { findAllUsersForPagination } from "../../store/slice/users.slice";
import { formatData } from "../../utils/formatData";

function Dashboard() {
  const dispatch = useDispatch();

  const paginated = useSelector((state) => state.pagination.value);
  const users = useSelector((state) => state.users.value);
  const loading = useSelector((state) => state.loading.value);

  const [error, setError] = useState(null);

  const elementsPerPage = 10;

  useEffect(() => {
    dispatch(findAllUsersForPagination(paginated, elementsPerPage));
  }, [paginated]);

  const quantityPage = Math.ceil(users.countRegister / elementsPerPage);


  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Usuario",
      dataIndex: "usuario",
      key: "usuario",
    },
    {
      title: "Correo",
      dataIndex: "correo",
      key: "correo",
    },
    {
      title: "Nombre Completo",
      dataIndex: "nombreCompleto",
      key: "nombreCompleto",
    },
    {
      title: "Action",
      key: "action",
      render: (as, record) => {
        return (
          <div className={styles["container-buttons-edit-and-delete"]}>
            <ModalAntd title={"Edit personal data"} color={"primary"} icon={"pencil"}>
              <FormModal record={record} />
            </ModalAntd>

            <ModalAntd title={"Delete user"} color={"danger"} icon={"trash"}>
              <DeleteRegister record={record} />
            </ModalAntd>
          </div>
        );
      },
    },
  ];

  let data = formatData(users);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main>
      <Search />
      <Table className={styles["hide-buttons"]} columns={columns} dataSource={data} />
      <Paginated quantityPage={quantityPage} />
    </main>
  );
}

export default Dashboard;
