import Card from '../assets/Card';
import hotel_2 from '../assets/hotel_2.jpeg';
import hotel_3 from '../assets/hotel_3.jpeg';
import hotel_5 from '../assets/hotel_5.jpeg';
import { useNavigate } from 'react-router-dom';



function Home() {

const navigate = useNavigate();
const handleCardClick = (title) => {
  navigate(`/${title}`);


};

  const properties = [
    {
      image: hotel_2,
      title: "Hotel_1",
      desc: "A beautiful hotel with stunning views."
    },
    {
      image: hotel_2,
      title: "Hotel_2",
      desc: "A luxurious hotel with top-notch amenities."
    },
    {
      image: hotel_2,
      title: "Hotel_3",
      desc: "Budget-friendly hotel in the city center."
    },
    {
      image: hotel_3,
      title: "Hotel_4",
      desc: "5-star hotel with modern facilities."
    },
    {
      image: hotel_5,
      title: "Hotel_5",
      desc: "Seaside hotel with a private beach and spa."
    },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {properties.map((hotel, index) => (
        <Card
          key={index}
          image={hotel.image}
          title={hotel.title}
          desc={hotel.desc}
          onClick={() => handleCardClick(hotel.title)}
          
        />
      ))}
    </div>
  );
}

export default Home;
