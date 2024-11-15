import React, { useState } from "react";
import { Button, Modal } from "antd";
import Icons from "../../lib/Icons";

function ModalAntd({ children, icon, color, title }) {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [action, setAction] = useState(false);


  const showModal = () => setOpen(true);
  
  const handleOk = () => {
    
    setConfirmLoading(true);
    setAction(true);
    
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      setAction(false);
      window.location.reload();
    }, 2000);      
  };

  const handleCancel = () => {
    setAction(false);
    setOpen(false);
  };
  

  return (
    <>
      <Button color={color} variant="solid" onClick={showModal}>
        <Icons icon={icon} />
      </Button>
      <Modal
        title={title}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {children 
          && React.cloneElement(children, { action })
        }
      </Modal>
    </>
  );
}

export default ModalAntd;
