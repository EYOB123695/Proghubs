import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form>
        <input type="text" placeholder="Email or Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
      <p>
        <Link to="/signup">Don't have an account? Sign Up</Link>
      </p>
      <p>
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>
    </div>
  );
}

export default SignIn;
