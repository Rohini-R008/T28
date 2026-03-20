import Card from "./Card";

const cardData = [
  {
    title: "Card 1",
    description: "This is card 1 description",
    image: "https://picsum.photos/200?random=1"
  },
  {
    title: "Card 2",
    description: "This is card 2 description",
    image: "https://picsum.photos/200?random=2"
  },
  {
    title: "Card 3",
    description: "This is card 3 description",
    image: "https://picsum.photos/200?random=3"
  },
  {
    title: "Card 4",
    description: "This is card 4 description",
    image: "https://picsum.photos/200?random=4"
  },
  {
    title: "Card 5",
    description: "This is card 5 description",
    image: "https://picsum.photos/200?random=5"
  },
  {
    title: "Card 6",
    description: "This is card 6 description",
    image: "https://picsum.photos/200?random=6"
  },
  {
    title: "Card 7",
    description: "This is card 7 description",
    image: "https://picsum.photos/200?random=7"
  },
  {
    title: "Card 8",
    description: "This is card 8 description",
    image: "https://picsum.photos/200?random=8"
  },
  {
    title: "Card 9",
    description: "This is card 9 description",
    image: "https://picsum.photos/200?random=9"
  },
  {
    title: "Card 10",
    description: "This is card 10 description",
    image: "https://picsum.photos/200?random=10"
  },
  {
    title: "Card 11",
    description: "This is card 11 description",
    image: "https://picsum.photos/200?random=11"
  },
  {
    title: "Card 12",
    description: "This is card 12 description",
    image: "https://picsum.photos/200?random=12"
  }
];

export default function App() {
  return (
    <div style={{
      backgroundColor: "black",
      minHeight: "100vh",
      padding: "40px"
    }}>
      
      <h2 style={{
        textAlign: "center",
        color: "#a78bfa",
        marginBottom: "40px"
      }}>
        All the cards are here.
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "40px",
        justifyItems: "center"
      }}>
        {cardData.map((card, index) => (
          <Card 
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>

    </div>
  );
}