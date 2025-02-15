import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        <Link to="/signin">Already have an account? Sign In</Link>
      </p>
    </div>
  );
}

export default SignUp;
