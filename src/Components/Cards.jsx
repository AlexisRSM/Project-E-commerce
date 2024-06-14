function Cards({product}) {
    // console.log(product)

return ( 
    
    <div className="col-md-4 col-sm-6">
        <div className="card my-3 shadow-sm border-0">
            <div className="card-img-top-container" style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
                <img
                    src={product.imageUrl}
                    className="card-img-top img-fluid"
                    alt={product.name + product.description}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
            </div>
            <div className="card-body">
                <h5 className="card-title text-truncate">{product.name}</h5>
                <p className="card-text text-muted">{product.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="text-danger h5">${product.price}</span>
                    <div>
                        <button className="btn btn-sm btn-outline-primary mx-1">Wishlist</button>
                        <button className="btn btn-sm btn-danger">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
 );
}

export default Cards;