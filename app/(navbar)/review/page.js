import "../../../styles/review.css"
import Header from "../../header.js";
import Footer from "../../footer.js"

const Review = () => {
  return (
    <div>
        <Header />
        <main className="main">
            <section className="rating">
                <h2 className="rating-title">Rating</h2>
                    <div className="rating-score">
                        <div className="score">4.5</div>
                            <div className="stars">
                                ★★★★☆
                            </div>
                            <p>Based on 150 reviews</p>
                        </div>
                        <div className="rating-details">
                            <div>★★★★★ 93</div>
                            <div>★★★★☆ 38</div>
                            <div>★★★☆☆ 14</div>
                            <div>★★☆☆☆ 5</div>
                            <div>★☆☆☆☆ 0</div>
                        </div>
            </section>

            <section className="reviews">
                <h3>Reviews</h3>
                <div className="review">
                    <h4>Excellent booking experience!</h4>
                    <p>This game booking system is very easy to use...</p>
                    <footer>2 days ago</footer>
                </div>
                <div className="review">
                    <h4>Highly recommended!</h4>
                    <p>My experience was amazing...</p>
                    <footer>1 week ago</footer>
                </div>
                <div className="review">
                      <h4>Pretty good reservation system</h4>
                      <p>Solid interface, good game selection...</p>
                      <footer>5 weeks ago</footer>
                </div>
                <div className="review">
                      <h4>My experience at the gaming venue was decent</h4>
                      <p>The gaming experience was average...</p>
                      <footer>7 weeks ago</footer>
                </div>
                <button className="btn write-review">Write a review</button>
            </section>
        </main>
        <Footer/>
    </div>
    );

};
export default Review;

