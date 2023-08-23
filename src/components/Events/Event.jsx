import { EventInfo } from "./EventInfo";
import { AiOutlineEnvironment } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs';
import { BsClock } from 'react-icons/bs';
import { EventItem } from "./EvenS.styled";
import { EventName } from "./EvenS.styled";
import PropTypes from 'prop-types'

export function Event ({name, location, speaker, time}){
    const timeStart = new Date (time.start);
    const timeEnd = new Date(time.end);
    const timeDuration = (timeEnd - timeStart) / (1000 * 60);
    return (
        <EventItem>
            <EventName>{ name }</EventName>
                        <EventInfo
                        text={location}
                        icon={AiOutlineEnvironment}
                        />
                        <EventInfo
                        text={speaker}
                        icon={AiOutlineUser}
                        />
                        <EventInfo
                        text={time.start}
                        icon={BsCalendar}
                        />
                        <EventInfo
                        text={timeDuration}
                        icon={BsClock}
                        />
        </EventItem>
    )
}
Event.propTypes = {
    EventName: PropTypes.string.isRequired,
}