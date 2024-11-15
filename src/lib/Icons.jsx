import React from 'react';
import { BiSolidPencil } from 'react-icons/bi';
import { FaTrash } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function Icons({ icon }) {

  switch (icon) {
    case "pencil":
      return <BiSolidPencil />;
    case "trash":
      return <FaTrash />;
    case "lens":
      return <MdSearch />;
    case "check":
      return <FaCheck />;
    case "cancel":
      return <MdOutlineCancel />;
    case "eye":
      return <FaEye />;
    case "eye-slash":
      return <FaEyeSlash />;
  }
}

export default Icons