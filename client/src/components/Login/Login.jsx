import useForm from "../../hooks/useForm"

export default function Login({
    loginSubmitHandler
}) {
    const initialFormData = {
        email:'',
        password:''
    }
    const { formData, handleChange, handleSubmit, resetForm } = useForm(initialFormData, loginSubmitHandler)


    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={handleSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlforfor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <label htmlforfor="login-pass">Password:</label>
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
                        defaultValue="Login" />
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