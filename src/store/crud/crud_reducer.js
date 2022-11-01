import { CRUD_ACTION_TYPES } from "./crud_types";

const initialSTate = {
  contacts: [],
  contact: {},
};

export const crudReducer = (state = initialSTate, action) => {
  switch (action.CRUD_ACTION_TYPES) {
    default:
      return state;
  }
};

// export default crudReducer;
