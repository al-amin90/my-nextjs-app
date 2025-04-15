import React from 'react';

const DaynamicPage = async({params, searchParams}) => {
    const {productId} = await params; //?category=3&price=2323 }
    console.log(await searchParams); //{ category: '3', price: '2323' }

    return (
        <div>
            dynamic product page {productId}
        </div>
    );
};

export default DaynamicPage;