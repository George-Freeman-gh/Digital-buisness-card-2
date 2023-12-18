



const Info = () => {
    return (
        <div className="profile-image">
            <img src="profile-image.png" alt="picture of a woman smiling" />
            <div className="profile-info">
                <h1>Laura Smith</h1>
                <h3>Frontend Developer</h3>
                <h4>laurasmith.website</h4>
            </div>
            <div className="info-buttons">
                <a  target="_blank" className="email" href="mailto: abc@example.com"><img className="email-icon" src="email-icon.svg"/>Email</a>
                <a  target="_blank" className="linkedin"href="https://www.linkedin.com/"><img className="linkedin-icon" src="linkedin-icon.svg"/>LinkedIn</a>
            </div>
            
            
        </div>
    )
}

export default Info