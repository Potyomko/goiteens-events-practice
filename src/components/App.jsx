import event from 'event';
import { Event } from "./Events/Event";
import { PageTitle } from './Events/PageTitle';
import {GlobalStyle} from '../Global.styled'
import { EventsList } from './Events/EvenS.styled';

export const App = () => {
  return (
    <>
      <PageTitle
      title='24th Core Worlds Coalition Conference'
      />
      <EventsList>
        {event.map(({name, location, speaker, time}) => (
        <Event
            name={name}
            time={time}
            location={location}
            speaker={speaker}
          />
      ))
      }
      </EventsList>
      
        <GlobalStyle/>
    </>
  );
};
