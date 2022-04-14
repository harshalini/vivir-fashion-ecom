import { Navbar } from "../../components/all-comp";
import { WishlistItem } from "../../components/wishlist-components/wishlist-card";
import { useWishlist } from "../../context/wishlist-context";
import "../cart/cart1.css"
import "./wishlist.css"
export function WishlistPage() {
  const { wishlistState: { wishlist }} = useWishlist()
    return (
      <div>
        <div className="container">
        <Navbar />
        </div>
        <h2>My Wishlist</h2>
        {wishlist.length === 0? <div className="empty-bar">Wishlist is empty, add your favourite products right now!</div>: <WishlistItem />}
      </div>
    );
  }