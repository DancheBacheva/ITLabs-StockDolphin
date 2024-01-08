import "./ItemsList.css";
import { Link } from "react-router-dom";

export const ItemsList = ({title, items}) => {
  const oneCategory = items.filter(item => item.category.title === title);

  return (
    <div>
      <div className='main-list-item'>
        {oneCategory.length > 0 ? (
          oneCategory.map(item => (
        <div key={item._id} className='list-container'>
        <div className='item-image-container'>
          <img className='item-image' src={item.icon} alt="img1"/>
        </div>
        <div className='middle-container-list'>
        <Link to={`/inventory/${title}/${item.itemTitle}`} className='link-list'>
          <h3 className='list-item-text'><strong>{item.itemTitle}</strong></h3>
        </Link>
          <p className='content-item-text-list'><strong>3 Purchase records</strong> | €338.00</p>
        </div>
        <div className='date-remove-list'>
        <hr/>
          <span className='updated-date-item-list'>Updated At: <br /><strong>{item.date}</strong></span>
          <div className='delete-item-list'>
            <img className='delete-img-list' src='/images/Delete.png' alt='delete supplier'/>
          </div>
        </div>
        </div>
        ))
        ) : (
          <p>No items for the selected category</p>
        )}
      </div>
    </div>
  );
};

