import { Link } from "react-router-dom";

import "./index.css";

const GitHome = () => {
  return (
    <div className="git-bg">
      <h1 className="git-h">Git hub issues API</h1>
      <Link to="/github/issues/page">
        <p className="git-api">docs.github.com/en/rest/reference/issues</p>
      </Link>
    </div>
  );
};

export default GitHome;
