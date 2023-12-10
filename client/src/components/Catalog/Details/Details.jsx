import { useContext, useEffect, useReducer, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import * as gamesApi from '../../../API/gamesApi';
import * as commentApi from '../../../API/commentsApi';
import AuthContext from "../../../contexts/authContext";

const reducer = (state, action) => {
    switch (action?.type) {
        case 'GET_ALL_GAMES':
            return [...action.payload];
        case 'ADD_COMMENT':
            return [...state, action.payload]
        default:
            return state;
    }
}

export default function Details() {
    const navigate = useNavigate();
    const { email, _id, isAuthenticated } = useContext(AuthContext);
    const { id } = useParams()

    const [game, setGame] = useState({});
    const [comments, dispatch] = useReducer(reducer, [])
    useEffect(() => {
        gamesApi.getOne(id)
            .then(setGame)

        commentApi.getAll(id)
            .then((result) =>
                dispatch({
                    type: 'GET_ALL_GAMES',
                    payload: result
                })
            )

    }, [id])

    const addCommentHandler = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);

            const newComment = await commentApi.create(
                id,
                formData.get('comment')

            );
            newComment.owner = { email };

            dispatch({
                type: 'ADD_COMMENT',
                payload: newComment
            })

        } catch (error) {
            console.log(error);
        }
    }

    const onDeleteHandler = async () => {
        try {
            const isConfirmed = confirm('Are you sure you want to delete the game?');
            if (isConfirmed) {
                await gamesApi.remove(id);
                navigate('/catalog');
            }    
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

                        {comments.map(({ _id, text }) => (
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
                        <Link to={`/details/${game._id}/edit`} className="button">
                            Edit
                        </Link>
                        <button onClick={onDeleteHandler} className="button">Delete</button>
                    </div>
                )}
            </div>
            {isAuthenticated && (
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={addCommentHandler}>
                        <textarea name="comment" placeholder="Comment......" defaultValue={""} />
                        <input className="btn submit" type="submit" defaultValue="Add Comment" />
                    </form>
                </article>

            )}
        </section >

    )
}