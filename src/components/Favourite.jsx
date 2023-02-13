import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeFromFavouriteAction } from "../redux/actions";

const Favourite = () => {
  let favouriteList = useSelector((state) => state.favourite.content);
  const dispatch = useDispatch();

  return (
    <Col xs={10} className="mx-auto mb-5">
      {favouriteList.map((favouriteItem, i) => (
        <Row
          className="mx-0 mt-3 p-3"
          style={{ border: "1px solid #00000033", borderRadius: 4 }}
          key={favouriteItem._id}
        >
          <Col xs={3}>
            <Link to={`/${favouriteItem.company_name}`}>
              {favouriteItem.company_name}
            </Link>
          </Col>
          <Col xs={9} className="d-flex justify-content-between">
            <a href={favouriteItem.url} target="_blank" rel="noreferrer">
              {favouriteItem.title}
            </a>
            <Button
              variant="danger"
              onClick={() => {
                dispatch(removeFromFavouriteAction(favouriteItem));
              }}
            >
              DELETE
            </Button>
          </Col>
        </Row>
      ))}
    </Col>
  );
};

export default Favourite;
