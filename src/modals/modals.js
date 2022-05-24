import Add from './Add.js';
import Remove from './Remove.js';
import Rename from './Rename.js';

const modals = {
  adding: Add,
  removing: Remove,
  renaming: Rename,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (modalName) => modals[modalName];