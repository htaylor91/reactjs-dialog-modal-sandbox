import { useState } from 'react'
import { Modal } from 'reactjs-dialog-modal'

function App() {
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleClose = () => {
    setShowModal(false)
  }

  const onModalClose = () => {
    console.log("Modal closed")
  }

  const onModalCancel = () => {
    console.log("Cancelled action")
  }

  const ModalChildren = ({ handleClose }: { handleClose: () => void }) => {
    return (
      <div className={"modal-content"}>
        <h2 className={""}>Modal Title!</h2>
        <button
          className={""}
          onClick={handleClose}
          type="button">Close</button>
      </div>
    );
  }

  return (
    <>
      <h1>ReactJS Dialog Modal</h1>
      <button type='button' onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal showModal={showModal} onClose={onModalClose} onCancel={onModalCancel} animateClass='close'>
        <ModalChildren handleClose={handleClose} />
      </Modal>
    </>
  )
}

export default App
