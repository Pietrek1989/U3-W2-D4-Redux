import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
// import { getJobsSearchActionAsync } from "../redux/actions";
import { useSelector } from "react-redux";
import { getJobsListActionAsync } from "../redux/actions";

const CompanySearchResults = () => {
  const params = useParams();
  const jobsFromTheReduxStore = useSelector((state) => state.jobs.jobList);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  useEffect(() => {
    getJobsListActionAsync(baseEndpoint, params.companyName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          {jobsFromTheReduxStore.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
