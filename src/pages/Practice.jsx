import "./Practice.css";
function Practice() {

  var title = "10 Tips to Become a Better Web Developer";
  var author = "Kundan Sharma";
  var description =
    "Web development is an exciting skill to learn. Discover 10 useful tips to improve your coding skills, write cleaner code, learn JavaScript and React, and build better websites.";
  var image = "/images/react.png";

  
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <img
        src={image}
        alt="Blog"
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "12px",
        }}
      />

      <h2
        style={{
          fontSize: "24px",
          color: "#222",
          marginBottom: "10px",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          fontSize: "14px",
          color: "#777",
          marginBottom: "12px",
        }}
      >
        By {author}
      </p>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#444",
        }}
      >
        {description}
      </p>
    </div>
  );
}



export default Practice;