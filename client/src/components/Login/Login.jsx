export default function Login() {
    return (
        <section id="login-page" classname="auth">
        <form id="login">
          <div classname="container">
            <div classname="brand-logo" />
            <h1>Login</h1>
            <label htmlforfor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Sokka@gmail.com"
            />
            <label htmlforfor="login-pass">Password:</label>
            <input type="password" id="login-password" name="password" />
            <input type="submit" classname="btn submit" defaultValue="Login" />
            <p classname="field">
              <span>
                If you don't have profile click <a href="#">here</a>
              </span>
            </p>
          </div>
        </form>
      </section>
                    )
}