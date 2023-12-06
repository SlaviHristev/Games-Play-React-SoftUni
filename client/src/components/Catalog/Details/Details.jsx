import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as gamesApi from '../../../API/gamesApi';
import * as commentApi from '../../../API/commentsApi';
import AuthContext from "../../../contexts/authContext";


export default function Details() {
    const { email, _id } = useContext(AuthContext);
    const { id } = useParams()

    const [game, setGame] = useState({});
    const [comments, setComments] = useState([])
    useEffect(() => {
        gamesApi.getOne(id)
            .then(setGame)

        commentApi.getAll(id)
            .then(setComments)

    }, [id])

    const addCommentHandler = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);

            const newComment = await commentApi.create(
                id,
                formData.get('comment')
            );
            setComments(state => [...state, { ...newComment, owner: { email } }])

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">
                    {game.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>

                        {comments.map(({ _id, text, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}

                </div>
                
                {_id === game._ownerId && (
                    <div className="buttons">
                        <a href="#" className="button">
                            Edit
                        </a>
                        <a href="#" className="button">
                            Delete
                        </a>
                    </div>
                )}
            </div>


            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <textarea name="comment" placeholder="Comment......" defaultValue={""} />
                    <input className="btn submit" type="submit" defaultValue="Add Comment" />
                </form>
            </article>
        </section >

    )
}