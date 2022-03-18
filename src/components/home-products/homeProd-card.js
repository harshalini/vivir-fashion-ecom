import { FeaturedProd } from "./homeProd-data"
export function HomePageCard() {
    return (
        <div className="featured-products">
            {FeaturedProd.map((prod) => {
                return (
                    <div className="ui-component card card-with-shadow">
                        <div className="card-image">
                            <img src={prod.img}></img>
                        </div>
                        <div className="ratings">
                            <p><i class="fas fa-star"></i>{prod.ratings}</p>
                        </div>
                        <i className="wishlist fas fa-heart"></i>
                        <div className="card-text">
                            <span>{prod.name}</span>
                            <p>{prod.desc}</p>
                            <div className="price">
                                <p>Rs.{prod.price}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}