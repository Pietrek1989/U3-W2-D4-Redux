import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Job = ({ data, i }) => {
  const dispatch = useDispatch();
  let favouriteList = useSelector((state) => state.favourites.content);

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
        {favouriteList.includes(data) ? (
          <Button
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_FAVOURITE",
                payload: data,
              });
            }}
          >
            <i class="bi bi-check"></i>
          </Button>
        ) : (
          <Button
            onClick={() => {
              dispatch({
                type: "ADD_TO_FAVOURITE",
                payload: data,
              });
            }}
          >
            <i className="bi bi-bookmark-heart"></i>
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default Job;
