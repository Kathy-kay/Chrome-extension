import * as ReactDOM  from 'react-dom';
import './App.css'
import PermissionPopup from './component/PermissionPopup';



function App() {

  const openPermissionPopup = () =>{
    const popupContainer = document.createElement('div');
    document.body.appendChild(popupContainer);

    ReactDOM.render(<PermissionPopup />, popupContainer)
  }

  const startRecording = () =>{
    openPermissionPopup();

    chrome.tabs.query({active: true, currentWindow: true}, (tabs: chrome.tabs.Tab[]) => {
      chrome.windows.remove(tabs[0].windowId)
    })
  }
  return (
   <div className="popup-container">
      <div className="popup-heading">
        <div className="logo">
          <img src="./Layer.png" alt="Logo" />
            <h3>HelpMeOut</h3>
        </div>
        <div className="image">
          <img src="./setting.png" alt="settings" className='settings' />
          <img src="./close-circle.png" alt="close button" />
        </div>
      </div>
      <h4>This extension helps you record  and  <br/> share videos with ease</h4>
      <div className="recording-contaner">
        <div className="window">
          <div className="destop">
            <img src="./monitor.png" alt="desktop" />
            <p>Full-screen</p>
          </div>
          <div className="tab">
            <img src="./copy.png" alt="current tab" />
            <p>Current Tab</p>
          </div>
        </div>
        <div className="btn">
          <img src="./Vector.png" alt="vdeo camera" />
          <h4>Camera</h4>
        </div>
        <div className="btn">
          <img src="./microphone.png" alt="microphone" />
          Audio
        </div>
        <button onClick={startRecording}>Start Recording</button>
      </div>
   </div>
  )
}

export default App
