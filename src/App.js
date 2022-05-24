import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import getModal from './modals/modals.js';

const App = () => { 

  const [state, changeState] = useImmer({
 
    modalType: null,
    tasks: [],
    currentId: 0,
  });

  function openAddModal() {
    changeState((state) => {
      state.modalType = 'adding';
    });
  }

  const openRenameModal = (id) => () => {
    changeState((state) => {
      state.modalType = 'renaming';
      state.currentId = id;
    });
  };

  const openRemoveModal = (id) => () => {
    changeState((state) => {
      state.modalType = 'removing';
      state.currentId = id;
    });
  };

  const addModal = getModal('adding')([state, changeState]);
  const renameModal = getModal('renaming')([state, changeState]);
  const removeModal = getModal('removing')([state, changeState]);

  let taskId = 0;
  function addTask(task) {
    taskId += 1;
    return (
      <div key={taskId} id={taskId} >
        <span className="mr-3">{ task }</span>
        <button onClick={openRenameModal(taskId)} type="button" className="border-0 btn btn-link mr-3 text-decoration-none" data-testid="item-rename">rename</button>
        <button onClick={openRemoveModal(taskId)} type="button" className="border-0 btn btn-link text-decoration-none" data-testid="item-remove">remove</button>
      </div>
    )
  };

  return (
    <React.Fragment>
      <div className="mb-3">
        <button onClick={openAddModal} type="button" data-testid="item-add" className="btn btn-secondary">add</button>
      </div>
      {addModal}
      {renameModal}
      {removeModal}
      {state.tasks.map((item) => addTask(item))}
    </React.Fragment>
  );
};
export default App;
