import "./ItemsCards.css";
import { Link } from "react-router-dom";

export const ItemsCards = ({title, items}) => {
  const oneCategory = items.filter(item => item.category.title === title);
  
  return (
    <div>
      <div className='main-card-item'>
      {oneCategory.length > 0 ? (
        oneCategory.map(item => (
        <div key={item._id} className='cards-container'>
          <div className='item-image-container'>
            <img className='item-image' src={item.icon} alt="img1"/>
          </div>
          <Link to={`/inventory/${title}/${item.itemTitle}`} className='link-cards'>
          <h3 className='card-item-text'><strong>{item.itemTitle}</strong></h3>
          </Link>
          <p className='content-item-text'><strong>3 Purchase records</strong> | €338.00</p>
          <div className='remove-item'>
            <div className='delete-item'>
              <img className='delete-img' src='/images/Delete.png' alt='delete supplier'/>
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
