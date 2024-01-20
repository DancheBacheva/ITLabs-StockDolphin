import "./CategoriesCards.css";
import { Link } from "react-router-dom";


export const CategoriesCards = ({categories}) => {
  
  return (
    <div>
      <div className='main-card-category'>
        {categories.map((category) => (
      <div key={category._id} className='category-cards-container'>
        <div className='images3-container'>
          <div>
            <img className='image1' src="/images/img1mouse.png" alt="img1"/>
          </div>
          <div className='image2-3'>
            <img className='image2' src="/images/img2paper.png" alt="img2" />
            <img className='image3' src="/images/img3pens.png" alt="img3" />
          </div>
        </div>
        <div className='card-bottom'>
          <Link to={`/inventory/${category.title}`} className='link-cards'>
          <h3 className='card-category-text'><strong>{category.title}</strong></h3></Link>
          <p className='content-category-text'><strong>{category.items.length} Items</strong> | €338.00</p>
          <div className='date-remove'>
            <span className='updated-category'>Updated At: <strong>{category.date}</strong></span>
            <button className='delete-category'>
              <img className='delete-img' src='/images/Delete.png' alt='delete supplier'/>
            </button>
          </div>
        </div>   
        </div>
        ))}
      </div>
    </div>
  );
};

