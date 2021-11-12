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
      <div class=" bg-dark text-light">
        <div class="container text-center p-4 col-md-10 offset-md-1 pt-5 pb-5">
          {reviews.map((review) => (
            <div className="testimonial">
              <blockquote class="blockquote text-center">
                <p class="mb-0">
                  <i class="fa fa-quote-left"></i> {review.opinion}
                  <i class="fa fa-quote-right"></i>
                </p>
                <footer class="blockquote-footer mt-3">{review.name}</footer>

                <p class="client-review-stars">
                  <Rating
                    emptySymbol="fa fa-star-o"
                    fullSymbol="fa fa-star"
                    initialRating={review.rating}
                    readonly
                  />
                </p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
