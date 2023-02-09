import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9} className="d-flex justify-content-between">
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
        <Button
          onClick={() => {
            // we want to add this book object to our cart.content
            dispatch({
              type: "ADD_TO_FAVOURITE",
              payload: data,
              // payload is the name of the property holding
              // any other necessary piece of info for making
              // our action usable, working, worthy
            });
          }}
        >
          <i className="bi bi-bookmark-heart"></i>
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
