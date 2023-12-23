import "./ItemsCards.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const ItemsCards = ({title, items}) => {
  const { itemTitle } = useParams();
  console.log("Title:", title);
  console.log("Items:", items);
    if(!items){
      return <p>No items in this category</p>;
    }
  return (
    <div>
      <div className='main-card-item'>
      {items.map((item) => (
        <div key={item.id} className='cards-container'>
          <div className='item-image-container'>
            <img className='item-image' src="/images/RecentItem2img.png" alt="img1"/>
          </div>
          <Link to={`/inventory/${title}/${itemTitle}`} className='link-cards'>
          <h3 className='card-item-text'><strong>{item.itemTitle}</strong></h3>
          </Link>
          <p className='content-item-text'><strong>3 Purchase records</strong> | €338.00</p>
          <div className='remove-item'>
            <div className='delete-item'>
              <img className='delete-img' src='/images/Delete.png' alt='delete supplier'/>
            </div>
          </div>   
        </div>
      ))}
     </div>
    </div>
   );
 };
