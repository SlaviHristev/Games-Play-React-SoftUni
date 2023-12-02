import { useState } from "react";
import * as gamesApi from '../../API/gamesApi'
import { useNavigate } from "react-router-dom";



export default function Create() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        category:'',
        maxLevel:'',
        imageUrl:'',
    });
    const changeHandler = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    };
    
    const submitHandler = async (e) => {
        e.preventDefault();
        const res = await gamesApi.create(formData);
        navigate('/catalog')
        
        console.log(res);
    }
    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={submitHandler}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                        onChange={changeHandler}
                        value={formData.title}
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                        onChange={changeHandler}
                        value={formData.category}
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        placeholder={1}
                        onChange={changeHandler}
                        value={formData.maxLevel}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                        onChange={changeHandler}
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