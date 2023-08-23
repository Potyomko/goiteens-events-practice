import { EventParagraph } from "./EvenS.styled";
import { EventText } from "./EvenS.styled";
import PropTypes from 'prop-types'

export const EventInfo = ({ text, icon: Icon }) => {
    return (
        <EventParagraph>
                <Icon size={20}/>
                <EventText>{text}</EventText>
        </EventParagraph>
    )
    
}
EventInfo.propTypes = {
    EventText: PropTypes.string.isRequired,
}