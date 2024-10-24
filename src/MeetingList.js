import MeetingCard from './MeetingCard.js';
import meetings from './meetingData.js';

const MeetingList = () => {
    return(
        <div className = 'meetings-container'>{meetings.map((meeting, index)=>{
            <MeetingCard key={index} meeting={meeting}/>;
            return <MeetingCard key={index} meeting = {meeting}/>;
        })}
        </div>
    );
};

export default MeetingList;