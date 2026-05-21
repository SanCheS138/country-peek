import { Link } from "react-router-dom";

function NotFound() {
  return (
    // 1. div.not-found
    <div className="not-found">
      {/* h2 with a 404 message */}
      <h2>404 - Page Not Found</h2>

      {/* p with a short explanation */}
      <p>Sorry, the page you are looking for does not exist.</p>

      {/* Link back to "/" — "Back to Home" */}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default NotFound;
