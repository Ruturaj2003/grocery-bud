import { useState } from 'react';

const SingleItem = ({ item, removeItem, editItem }) => {
  // Replaced by global
  // const [isChecked, setIsChecked] = useState(item.completed);

  return (
    <div className="single-item">
      <input
        type="checkbox"
        name="completed"
        id="completed"
        checked={item.completed}
        onChange={() => {
          editItem(item.id);
        }}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.checked && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
