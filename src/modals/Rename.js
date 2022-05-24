import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl, Button, Form } from 'react-bootstrap';

// BEGIN (write your solution here)
const Rename = ([state, changeState]) => {

  const [show, setShow] = useState(false);
  const inputRef = useRef(null);
  const formik = useFormik({
    initialValues: {
      task: '',
    },
    onSubmit: '',
  });

  function handleClose() {
    changeState((state) => {
      state.modalType = null;
    });
  };

  useEffect(() => {
    if (state.modalType === 'renaming') {
      setShow(true);
    } else {
      setShow(false);
    }
    if (inputRef.current !== null) inputRef.current.focus();
  });

  function handleRenameTask() {
    changeState((state) => {
      state.modalType = null;
      state.tasks[state.currentId - 1] = formik.values.task;
    });
    formik.values.task = '';
  }


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Rename</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <FormGroup className="form-group">
            <FormControl ref={inputRef} id="task" data-testid="input-body" name="task" type="text" onChange={formik.handleChange} value={formik.values.task} />
          </FormGroup>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <input className="btn btn-primary" type="submit" value="submit" onClick={handleRenameTask} />
      </Modal.Footer>
    </Modal>
  )
}

export default Rename;
// END