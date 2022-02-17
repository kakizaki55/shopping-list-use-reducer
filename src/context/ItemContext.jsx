import React from 'react';
import { useContext, createContext } from 'react';
import { useReducer } from 'react';

const ItemsContext = createContext();

const initialShoppingList = [
  {
    id: 1,
    name: 'banana',
    count: 3,
    completed: false,
  },
  {
    id: 2,
    name: 'beans',
    count: 500,
    completed: false,
  },
  {
    id: 3,
    name: 'poki',
    count: 1,
    completed: false,
  },
];

const itemReducer = (state, { type, name, count, id }) => {
  switch (type) {
    case 'add':
      return [
        ...state,
        { name, count, id, completed: false, isEditing: false },
      ];

    case 'delete':
      const newState = state.filter((item) => {
        return item.id !== Number(id);
      });
      return newState;

    case 'edit':
      const newEditState = state.map((item) => {
        if (item.id === Number(id)) {
          item.isEditing = true;
        }
        return item;
      });
      return newEditState;

    case 'save':
      const newSaveState = state.filter((item) => {
        return item.id !== Number(id);
      });
      return [
        ...newSaveState,
        { name, count, id, completed: false, isEditing: false },
      ];

    default:
      throw new Error(`type ${type} is not a valid type`);
  }
};

export const ItemsProvider = ({ children }) => {
  const [itemList, dispatch] = useReducer(itemReducer, initialShoppingList);

  const addNewItem = (name, count) => {
    dispatch({
      type: 'add',
      name,
      count,
      id: itemList.length + 1,
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: 'delete',
      id,
    });
  };
  const handleEdit = (id) => {
    dispatch({
      type: 'edit',
      id,
    });
  };
  const handleSaveEdit = (name, count, id) => {
    dispatch({
      type: 'save',
      name,
      count,
      id,
    });
  };
  const providerValue = {
    handleDelete,
    handleEdit,
    handleSaveEdit,
    addNewItem,
    itemList,
  };
  return (
    <ItemsContext.Provider value={providerValue}>
      {children}
    </ItemsContext.Provider>
  );
};

export const useItems = () => {
  const context = useContext(ItemsContext);
  console.log(context);
  if (context === 'undefined') {
    throw new Error('useEntries must be warped in a EntriesProvider component');
  }

  return context;
};
