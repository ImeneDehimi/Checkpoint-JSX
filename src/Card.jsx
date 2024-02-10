

const Card = ({title,price,Imagesrc}) => {
    return (
        <div className="card">
            <h1>{title}</h1>
            <h2>price: {price}</h2>
            <img src={Imagesrc} alt="Product" />
            <h3>Lorem ipsum dolor, amet consectetur .</h3>
        </div>
    );
};

export default Card;