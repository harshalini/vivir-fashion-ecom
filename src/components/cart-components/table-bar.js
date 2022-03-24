export const TableBar = () => {
    return (
        <div className="cart-product" style={{ marginTop: "6rem" }}>
            <p className="table-title">Product</p>
            <p className="table-title">Quantity</p>
            <p className="table-title">Subtotal</p>
        </div>
    )
}
export const EmptyBar = () => {
    return (
        <div className="empty-bar">Cart is empty, start shopping now!</div>
    )
}