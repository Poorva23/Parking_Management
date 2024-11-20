import React from 'react'

const ParkingSpace = () => {
  const [parkingSpaces, setParkingSpaces] = React.useState([]);

  React.useEffect(() => {
    const fetchParkingSpaces = async () => {
      try {
        const response = await fetch('http://localhost:5000/parking-spaces', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        setParkingSpaces(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchParkingSpaces();
  }, []);

  return (
    <div>
      <h1>Parking Spaces</h1>
      <ul>
        {parkingSpaces.map((parkingSpace) => (
          <li key={parkingSpace._id}>
            {parkingSpace.spaceNumber} - {parkingSpace.spaceType} - {parkingSpace.spaceStatus}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ParkingSpace
