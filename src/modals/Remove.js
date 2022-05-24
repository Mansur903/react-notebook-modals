import React from 'react';
import { Modal, FormGroup, Form } from 'react-bootstrap';

// BEGIN (write your solution here)
const Remove = ([state, changeState]) => {
  
  const [show, setShow] = React.useState(false);

  function handleClose() {
    changeState((state) => {
      state.modalType = null;
    });
  };

  const handleRemoveTask = (id) => (e) => {
    e.preventDefault();
    console.log(state.tasks);
    changeState((state) => {
      state.tasks = state.tasks.filter((item) => item !== state.tasks[state.currentId - 1]);
      state.modalType = null;
    })
  }

  React.useEffect(() => {
    if (state.modalType === 'removing') {
      setShow(true);
    } else {
      setShow(false);
    }
  });
  
  return(
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Remove</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <FormGroup className="form-group">
            <input onClick={handleRemoveTask(state.currentId)} className="btn btn-danger" type="submit" value="remove" />
          </FormGroup>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default Remove;
// END