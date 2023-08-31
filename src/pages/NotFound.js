import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            <h2>Page Not Found</h2>
            <p>Go to <Link to='/react/'>Homepage</Link> .</p>
        </div>
    )
}
