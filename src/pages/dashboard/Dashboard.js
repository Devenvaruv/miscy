import './Dashboard.css';

function Dashboard ({username , handleLogout}) {
    const imageUrl = `https://robohash.org/${username}.png?set=set2`;
    const userName = username;
    const description = `${username} logged in this god awful website and thought it was a good idea to show it.`;
    const fileUrl = 'https://example.com/path/to/file.pdf';
    return (
        <div className='dash-container'>
            <h2>Welcome, {username}!</h2>
      <div className='dash-sub-container'>
        <img src={imageUrl} alt={username} style={{ maxWidth: '200px' }} />
        <h3>{userName}</h3>
        <p>{description}</p>
        <p>Don't be like {username}</p>
        <p>
          {username} has Access to these following files:
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            Download Files
          </a>
        </p>
      </div>
      <button onClick={handleLogout}>Logout</button>

        </div>
    )
}

export default Dashboard;