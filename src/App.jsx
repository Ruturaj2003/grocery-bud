import { useEffect, useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Items from './Items';
import { ToastContainer, toast } from 'react-toastify';

// Since it is not related to app component it is written here , in App component also it works fine
const seLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};
const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const App = () => {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];

    setItems(newItems);
    seLocalStorage(newItems);
    toast.success(`${newItem.name} added to the list`);
  };
  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    const removedItem = items.find((item) => item.id === itemId);
    console.log(removeItem);
    toast.success(`${removedItem.name} removed from the list`);
    setItems(newItems);
    seLocalStorage(newItems);
  };
  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (itemId === item.id) {
        // This is done to avoid the bug that a occurs when mutating existing object
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }

      return item;
    });
    setItems(newItems);
    seLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <ToastContainer pauseOnFocusLoss={false} position="top-right" />
      <Form addItem={addItem}></Form>
      <Items items={items} removeItem={removeItem} editItem={editItem}></Items>
    </section>
  );
};

export default App;
