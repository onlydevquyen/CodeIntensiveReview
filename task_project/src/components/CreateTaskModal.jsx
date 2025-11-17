import React from 'react'
import { Modal } from 'antd'
const CreateTaskModal = ({ open, setOpen }) => {
  return (
    <Modal
        open={open}
        onCancel={() => setOpen(false)}
    >
      
    </Modal>
  )
}

export default CreateTaskModal
