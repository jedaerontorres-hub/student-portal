// components/Login.jsx

export default function Login({
  setLoggedIn,
}) {

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  return (
    <div className="login-page">

      <div className="overlay"></div>

      <div className="login-card">
        <h1>CvSU Student Portal</h1>
        <p>Login your account</p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}