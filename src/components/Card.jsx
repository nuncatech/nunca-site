import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ 
  title, 
  description, 
  link, 
  linkText = "Saiba Mais", 
  className = "", 
  children,
  image,
  imageAlt = ""
}) => {
  return (
    <div className={`card-component ${className}`}>
      {image && (
        <div className="card-image">
          <img src={image} alt={imageAlt} />
        </div>
      )}
      
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        
        {description && <p className="card-description">{description}</p>}
        
        {children}
        
        {link && (
          <div className="card-footer">
            {link.startsWith('http') ? (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                {linkText}
              </a>
            ) : (
              <Link to={link} className="btn btn-primary">
                {linkText}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
