import * as React from "react";
import Link from "./typography/link";
import { Row, Col } from "react-flexbox-grid";

class Navigation extends React.Component<object> {
  public render() {
    return (
      <div>
        <Row>
          <Col xs={12} sm={3} md={2} lg={1}>
            <Link location="/login" title="Login" />
          </Col>
          <Col xs={12} sm={3} md={2} lg={1}>
            <Link location="/blog" title="Blog" />
          </Col>
          <Col xs={12} sm={3} md={2} lg={1}>
            <Link location="/login" title="Login" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Navigation;
