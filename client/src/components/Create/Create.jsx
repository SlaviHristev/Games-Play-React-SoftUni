
import * as gamesApi from '../../API/gamesApi'
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";




export default function Create() {
    const navigate = useNavigate();
    const initialFormData = {
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
    }

  

    const onSubmit = async (formData) => {
        try {
            const res = await gamesApi.create(formData);
            navigate('/catalog')
            console.log(res);

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };


    const { formData, handleChange, handleSubmit, resetForm } = useForm(initialFormData, onSubmit)
    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={handleSubmit}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                        onChange={handleChange}
                        value={formData.title}
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                        onChange={handleChange}
                        value={formData.category}
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        placeholder={1}
                        onChange={handleChange}
                        value={formData.maxLevel}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                        onChange={handleChange}
                        value={formData.imageUrl}
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={""} />
                    <input className="btn submit" type="submit" defaultValue="Create Game" />
                </div>
            </form>
        </section>

    )
}