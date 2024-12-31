/* General body styling */
body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1e1e2f;
    font-family: 'Arial', sans-serif;
    color: #ffffff;
}

/* Loading screen container */
#loading-screen {
    text-align: center;
}

/* Loading image */
#loading-screen img {
    max-width: 200px;
    height: auto;
    animation: spin 2s linear infinite;
}

/* Loading text */
#loading-screen p {
    margin-top: 20px;
    font-size: 1.5rem;
    color: #a9a9ff;
}

/* Spinning animation */
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
