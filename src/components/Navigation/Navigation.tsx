import * as React from "react";
import Link from "../typography/link";
import { Row, Col } from "react-flexbox-grid";
import "./Navigation.css";

class Navigation extends React.Component<object> {
  public render() {
    return (
      <div className="nav">
        <Row>
          <Col lg={8}>
            <div>Logo Here</div>
          </Col>
          <Col lg={3}>
            <Row end="lg">
              <Col lg={4}>
                <Link location="/login" title="Login" />
                <Link location="/blog" title="Blog" />
                <Link location="/login" title="Login" />
                <Link location="/login" title="Profile" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Navigation;
