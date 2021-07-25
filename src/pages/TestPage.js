import React from "react";
import Accordion from "react-bootstrap/Accordion";
const TestPage = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        {/* <Accordion.Header>Accordion Item #1</Accordion.Header> */}
      </Accordion.Item>
    </Accordion>
  );
};

export default TestPage;
