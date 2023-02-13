import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavouriteAction,
  removeFromFavouriteAction,
} from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  let favouriteList = useSelector((state) => state.favourite.content);

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
              dispatch(removeFromFavouriteAction(data));
            }}
          >
            <i className="bi bi-check"></i>
          </Button>
        ) : (
          <Button
            onClick={() => {
              dispatch(addToFavouriteAction(data));
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
