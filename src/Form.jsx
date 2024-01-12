import { useState } from 'react';

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItemName === '') {
      console.log('EMPT');
      return;
    }
    addItem(newItemName);
    setNewItemName('');
    console.log(newItemName);
  };
  return (
    <form id="main-from" onSubmit={handleSubmit}>
      <h4>Grocery bud</h4>
      <div className="form-control">
        <input
          name="newItemName"
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button className="btn" type="submit">
          add item
        </button>
      </div>
    </form>
  );
};
export default Form;
