import './App.css';
import Header from './Header.js';
import MeetingList from './MeetingList.js';

function App(){
    const headingTitle = 'CIT 313 Introduction to React';
    return(
        <div className = "App">
            <Header headingText = {headingTitle}/>
            <MeetingList/>
        </div>
    );
}

export default App;