import "./App.css";
import { IArticles } from "./types/news";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import { Col, Container, Row, Spinner } from "reactstrap";
import useFetch from "./hooks/useFetch";
import { apiKey } from "./config/apiKey";

function App() {
  const { isError, news } = useFetch(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`);

  return (
    <>
      <Navbar />
      <Container fluid="md" className="py-4">
        <Row>
          {news ? (
            news.articles.map((article: IArticles) => (
              <Col md="4" sm="12" className="mt-4" key={article.title}>
                <Cards {...article} />
              </Col>
            ))
          ) : (
            <div className="d-flex justify-content-center align-items-center">
              <Spinner>Loading...</Spinner>
            </div>
          )}
          {isError && <h1>Error Fetching Data</h1>}
        </Row>
      </Container>
    </>
  );
}

export default App;
