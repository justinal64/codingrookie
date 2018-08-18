import * as React from "react";
import Link from "./typography/link";

class Navigation extends React.Component<object> {
  public render() {
    return (
      <div>
        <Link location="https://www.google.com" title="Google" />
        <Link location="/login" title="Login" />
        <Link location="/blog" title="Blog" />
      </div>
    );
  }
}

export default Navigation;
