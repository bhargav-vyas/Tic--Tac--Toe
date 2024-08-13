function Newspaper() {
  return (
    <div
      style={{
        padding: "16px",
        border: "4px solid gray",
        margin: "12px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p>NEWSPAPER </p>

      <img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D " />
      <h2>Todays News</h2>
      <p>
        Do you love to read? Excellent! Reading helps you learn new words and
        how to use them. It also helps teach grammar because you become familiar
        with many different sentence structures. We've researched top-notch
        German texts that will help you learn the language. Choose between
        history, stories and poems! No matter what level, you'll find an
        appropriate text! Are you in the mood to do some reading? Start browsing
        now to find the right text for you!
      </p>
      <p>
        You'd like to start learning German from square one? That's a good idea!
        We're here to help you find an easy and interesting way to begin. W e've
        found online learning opportunities for you that are especially
        well-suited for beginners. Get comfortable with everyday conversations!
        Learn a basic vocabulary and start making your first sentences! Start
        learning German comprehensively! Take a look around and discover how
        much fun it is to learn a new language with the best free online
        learning opportunities! It's fun to get to know other cultures, there's
        so much to learn! We've rounded up the top websites for you to learn
        about german-speaking countries and cultures. Use these web-based
        resources to increase your knowledge about people and customs. Get
        acquainted with traditions and holidays! Avoid embarrassment by learning
        customs of german-speaking countries! Impress others with your knowledge
        of German sayings! Start learning about people and culture now!
      </p>
      <div
        style={{
          display: "flex",
          justifyContent:"space-between",
          alignItems: "center",
        }}
      >
        <img
          src="https://static.javatpoint.com/top10-technologies/images/top-10-english-newspapers-in-india1.png"
          style={{ height: "300px", width: "350px" }}
        />
        <img
          src="https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg"
          style={{ height: "300px", width: "350px" }}
        />
      </div>
    </div>
  );
}
export default Newspaper;
