import React, { useEffect, useState } from "react";
import Rating from "react-rating";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/allReview")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <div className=" bg-dark text-light">
        <div className="container text-center p-4 col-md-10 offset-md-1 pt-5 pb-5">
          <h2 className="pb-5">Our Happy Customer</h2>
          {reviews.map((review) => (
            <div className="testimonial">
              <blockquote className="blockquote text-center">
                <p className="mb-0">
                  <i className="fa fa-quote-left"></i> {review.opinion}
                  <i className="fa fa-quote-right"></i>
                </p>
                <footer className="blockquote-footer mt-3">
                  {review.name}
                </footer>

                <p className="client-review-stars">
                  <Rating
                    emptySymbol="fa fa-star-o"
                    fullSymbol="fa fa-star"
                    initialRating={review.rating}
                    readonly
                  />
                </p>
                <hr />
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
