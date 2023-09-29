

const PermissionPopup = () => {
  return (
    <div className='permission-container'>
        <div className="permision-heading">
            <h1>HelpMeOut Wants to</h1>
            <img src="./close-circle" alt="close icon" />
        </div>
        <div className="permisson">
            <img src="./video.png" alt="camera" />
            <p>Use your camera</p>
        </div>
        <div className="permission">
            <img src="./microphone-2" alt="" />
        </div>
    </div>
  )
}

export default PermissionPopup
