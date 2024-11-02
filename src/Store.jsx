import StoreItem from './StoreItem';
import { useEffect, useState } from 'react';
import Data from './db/Data.json';

function Store() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Data.products);
    }, []);

    let content = null;

    if (data.length > 0) {
        content = (
            <ul className='storeItemList'>
                {data.map((product) => (
                    <StoreItem name={product.name} category={product.category} price={product.price} />
                ))}
            </ul>
        )
    } else {
        content = (
            <div>Content Loading...</div>
        )
    }

    return (
        <>
          {content}
        </>
    );
}

export default Store;