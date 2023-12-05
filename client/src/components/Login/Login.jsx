import { useContext } from "react"
import useForm from "../../hooks/useForm"
import AuthContext from "../../contexts/authContext"

export default function Login() {
    const initialFormData = {
        email: '',
        password: ''
    }
    const { loginSubmitHandler } = useContext(AuthContext)
    const { formData, handleChange, handleSubmit, resetForm } = useForm(initialFormData, loginSubmitHandler)


    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={handleSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                    />

                    <input
                        type="submit"
                        className="btn submit"
                        value="Login" />
                    <p className="field">
                        <span>
                            If you don't have profile click <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}