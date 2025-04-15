    import React from 'react';
    
    const ProductsPage = async() => {
        const res = fetch('http://localhost:5000/products');
        const products = (await res).json()
        console.log(products);

        return (
            <div>
                <h1 className='text-center text-4xl my-5'>
                    Data fetching, caching and revalidating
                </h1>
            </div>
        );
    };
    
    export default ProductsPage;