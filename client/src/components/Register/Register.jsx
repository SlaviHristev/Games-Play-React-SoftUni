import { useContext } from "react"
import AuthContext from "../../contexts/authContext"
import useForm from "../../hooks/useForm";

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const initialFormData = {
        email: '',
        password: '',
        repeatPassword: '',
    }
    const { formData, handleChange, handleSubmit, resetForm } = useForm(initialFormData, registerSubmitHandler)
    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={handleSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <label htmlFor="pass">Password:</label>
                    <input type="password"
                    name="password"
                     id="register-password"
                     onChange={handleChange}
                     value={formData.password}
                      />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password"
                     name="repeatPassword"
                      id="repeatPassword"
                      onChange={handleChange}
                      value={formData.repeatPassword}
                       />
                    <input className="btn submit" type="submit" defaultValue="Register" />
                    <p className="field">
                        <span>
                            If you already have profile click <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}