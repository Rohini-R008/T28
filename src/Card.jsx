export default function Card({ title, description, image }) {
  return (
    <div style={{
      padding: "2px",
      borderRadius: "12px",
      background: "linear-gradient(45deg, orange, cyan, blue, red)",
      width: "250px"
    }}>
      <div style={{
        backgroundColor: "black",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        color: "#a78bfa"
      }}>
        <img 
          src={image} 
          alt={title} 
          style={{ width: "120px", height: "120px", objectFit: "cover" }} 
        />
        <h3>{title}</h3>
        <p style={{ fontSize: "12px" }}>{description}</p>
      </div>
    </div>
  );
}