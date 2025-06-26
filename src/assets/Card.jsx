
function Card({image,title,desc,onClick}) {
    return (
        <div className="card" >
                
            <img className="card-img" src={image} alt="Card Image" onClick={onClick}  />
            <h4 className="card-title">{title}</h4>
            <p className="card-desc">{desc}</p>
            
        </div>
    );
}
export default Card;