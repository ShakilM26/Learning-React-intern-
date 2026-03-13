const Products = ({title, price, brand}) => {
    return(
        <div>
            <h4>Product: {title}</h4>
            <p>Price: {price}Rs/.</p>
            <p>Brand: {brand}</p>
        </div>
    );
};

const List = () => {
    return(
        <div>
            <Products title='HP Pavillion' price='70000' brand='HP'></Products>
            <Products title='Macbook' price='110000' brand='Apple'></Products>
        </div>
    )
};

export default List;

// Data is passed directly into the parameters.
// sorasori parameter er moddhei data diye deya eta holo, Destructuring
