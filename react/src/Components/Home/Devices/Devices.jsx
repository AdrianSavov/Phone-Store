import Card from 'react-bootstrap/Card';
import './devices.css';

function Devices() {
  return (
    <div className='devices-container'>
      <div className='card-item'>
     <Card >
      <Card.Img variant="top" src="src/assets/media.png" />
      <Card.Body>
        <Card.Title>Smart Phones</Card.Title>
        <Card.Text>
        Explore a world of possibilities with our collection of devices.
        Stay connected with the latest advancements in mobile technology!
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='card-item'>
    <Card >
      <Card.Img variant="top" src="src/assets/watch-2.png" />
      <Card.Body>
        <Card.Title>Smart Watches</Card.Title>
        <Card.Text>
        Step into the future of wearable technology.
        Track your fitness journey, stay connected on the go with all notifications.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>
  );
}

export default Devices;