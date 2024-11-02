import { Button } from 'antd';

function StoreItem(props) {
    const maxNameSize = 25;

    return(
        <>
        <div className="storeItem">
            <div className="storeItemContent">
                <div className="itemImg"></div>
                <div className="itemInfo">
                  <div className="name">{props.name.length > maxNameSize ? props.name.substring(0, maxNameSize) + "..." : props.name}</div>
                  <div className="category">Category: {props.category}</div>
                  <div className="price">{props.price} CHF</div>
                </div>
            </div>
            <div className="itemActions">
                <Button type="primary">Add In Cart</Button>
            </div>
        </div>
        </>
    );
}

export default StoreItem;