import * as React from "react";
import Link from "../typography/link";
import { Row, Col } from "react-flexbox-grid";
import "./Navigation.css";

class Navigation extends React.Component<object> {
  public render() {
    return (
      <div className="nav">
        <Row center="xs">
          <Col lgOffset={1} lg={4}>
            <div>Logo Here</div>
          </Col>
          <Col lg={6}>
            <Row end="lg" center="xs">
              <Col xs={12} sm={2} lg={2}>
                <Link location="/login" title="Login" />
              </Col>
              <Col xs={12} sm={2} lg={2}>
                <Link location="/blog" title="Blog" />
              </Col>
              <Col xs={12} sm={2} lg={2}>
                <Link location="/login" title="Login" />
              </Col>
              <Col xs={12} sm={2} lg={2}>
                <Link location="/login" title="Profile" />
              </Col>
              <Col xs={12} sm={2} lg={2}>
                <Link location="/login" title="Social" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Navigation;
