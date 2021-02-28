import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import { FaSearch, FaSistrix } from "react-icons/fa";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";

const {
  Button,
  Row,
  Col,
  Container,
  Form,
  Jumbotron,
} = require("react-bootstrap");

function App() {
  const [searchPending, setSearchPending] = useState(false);
  const [error, setError] = useState(false);

  const { data: python, isPending: isPendingPython } = useFetch("python", 10);
  const { data: javascript, isPending: isPendingJs } = useFetch(
    "javascript",
    10
  );
  const { data: html, isPending: isPendingHtml } = useFetch("html", 10);

  const [book, setBook] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const bookName = e.target.value;
    setBook(bookName);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (book !== "") {
      setSearchPending(true);
      setError(false);
      const searchResult = await axios(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&key=AIzaSyBiXU6PTdHscuZ6krw-d8fH63u7eA3xH-g&maxResults=50`
      );
      const trueResult = searchResult.data.items.filter(
        (data) => data.volumeInfo.imageLinks !== undefined
      );
      setResults(trueResult);
      setSearchPending(false);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="pageContent">
      {/* Header area */}
      <div className="customeHeaderArea">
        <Container>
          <Row className="custome_section d-flex align-items-center">
            <Col xs={12} lg="4">
              <h1>
                Grab your Book <br /> Now..
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                ab? Commodi reiciendis qui at natus minus cupiditate,
                voluptatibus optio consequuntur enim repellendus quos explicabo.
              </p>
              <Button variant="primary">Explore Now</Button>
            </Col>
            <Col xs={12} lg="8">
              <img src="/images/headerImage.svg" className="headerImg" alt="" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Newset Arrival Area */}
      <Container className="mt-3" id="new">
        {/* <BookList listTitle="Latest Uploads"></BookList> */}
        {(isPendingPython || isPendingJs) && <p>Loading...</p>}
        <a id="explore"></a>
        {python && <BookList books={python} listTitle="Learn Python" />}
        {javascript && (
          <BookList books={javascript} listTitle="Learn Javascript" />
        )}
        {html && <BookList books={html} listTitle="Learn html" />}
      </Container>

      <Jumbotron className="mt-5 mb-0">
        <div className="container">
          <h2>Search any book,</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <br />
              <Form.Control
                type="text"
                placeholder="Enter book name"
                onChange={handleChange}
              />
              <Button
                varient="dark"
                className=" mt-2 submitButton"
                type="submit"
              >
                <FaSistrix></FaSistrix>&nbsp;Search
              </Button>
            </Form.Group>
          </Form>
          {searchPending && <div>Searching books...</div>}
          {error && <div>Please enter a book name...</div>}
        </div>
      </Jumbotron>
      {/* Search result area */}
      <div className="container pt-3 pb-3">
        <div className="searchResult">
          {results && <BookCard books={results}></BookCard>}
        </div>
      </div>

      {/* Footer area */}
      <div className="beforeFooter">
        <div className="container">
          <Row>
            <Col>
              <h7>Developed by Vihanga_Silva</h7>
            </Col>
            <Col className="right">
              <h7>Founder of ONEXTECH&trade; Solutions</h7>
            </Col>
          </Row>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
