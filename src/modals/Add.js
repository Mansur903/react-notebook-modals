import React, { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl, Form, Button } from 'react-bootstrap';

// BEGIN (write your solution here)
const Add = ([state, changeState]) => {

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
    if (state.modalType === 'adding') {
      setShow(true);
    } else {
      setShow(false);
    }
    if (inputRef.current !== null) inputRef.current.focus();
  });

  function handleAddTask() {
    changeState((state) => {
      state.modalType = null;
      state.tasks.push(formik.values.task);
    });
    formik.values.task = '';
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <FormGroup className="form-group">
            <FormControl data-testid="input-body" ref={inputRef} id="task" name="task" type="text" onChange={formik.handleChange} value={formik.values.task} />
          </FormGroup>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <input className="btn btn-primary" type="submit" value="submit" onClick={handleAddTask}/>
      </Modal.Footer>
    </Modal>
  );
}

export default Add;
// END