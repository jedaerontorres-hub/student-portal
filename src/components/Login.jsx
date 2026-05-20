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

        <img
          src="https://upload.wikimedia.org/wikipedia/en/3/35/Cavite_State_University_%28CvSU%29.png"
          alt=""
        />

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