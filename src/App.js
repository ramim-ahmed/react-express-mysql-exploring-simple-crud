import Axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import MovieReviews from "./MovieReviews";
const App = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const movieNameRef = useRef();
  const movieReviewRef = useRef();

  useEffect(() => {
    Axios.get("http://localhost:8000/api/get").then((res) => {
      setMovieReviews(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8000/api/insert", {
      movieName: movieNameRef.current.value,
      movieReview: movieReviewRef.current.value,
    });
    setMovieReviews([
      ...movieReviews,
      {movieName:movieNameRef.current.value, movieReview:movieReviewRef.current.value}
    ])
  };

  return (
    <div className="py-5">
      <div className="text-center">
        <h1>React-Node-MySql</h1>
        <h2>Crud Operation</h2>
      </div>
      <main className="container mt-4">
        <div className="row">
          <div className="col">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Movie Name</Form.Label>
                <Form.Control ref={movieNameRef} type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Review</Form.Label>
                <textarea
                  ref={movieReviewRef}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>

          <div className="col">
            <div>
              <MovieReviews reviews={movieReviews} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
