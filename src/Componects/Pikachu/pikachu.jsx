import { useState } from "react";
import "./pikachu.css";

const Pikachu = () => {
  const [state, setstate] = useState(0);
  const next = (index) => {
    console.log("kfasbjfb")
    setstate(state + 1);
  };

  const previous = () => {};
  const array = [
    {
      imgurl:
        "https://i.pinimg.com/236x/54/e7/50/54e750a0ca8d50dfd639a5c243e6d3fb.jpg",
    },
    {
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxZETGMcMir8t0TOeWwp1Qdw5zkhSnZQ6RHtnYip-NfMYkVCfaXlozI8tdmNLzXNbx70&usqp=CAU",
      name: "pokchumon",
      Designers: "Nintendo Satoshi:",
      Firstrelease: "Pocket Monsters ",
      Developers: "Nintendo, The Pokémon ",
      Publishers: "Nintendo, The Pokémon Comp",
      Genre: "Role-playing",
    },
    {
      imgurl:
        "https://ashisheditz.com/wp-content/uploads/2023/10/pikachu-wallpaper-anime.jpg",
      name: "baby pokchumon",
      Designers: "Nintendo Satoshi:",
      Firstrelease: "Pocket Monsters ",
      Developers: "Nintendo, The Pokémon ",
      Publishers: "Nintendo, The Pokémon",
      Genre: "Role-playing",
    },
  ];

  return (
    <>
      <div class="bodyContainer">
        <div className="wrapper">
          {array.map((element, index) => {
            if (index === state) {
              return (
                <>
                  <div class="item1">
                    <p>Name:{element.name}</p>
                    <p>Evolves to: {element.Designers}</p>
                    <p>Type:{element.Firstrelease}</p>
                    <p>Weakness: {element.Developers}</p>
                    <p>Ability (hidden): {element.Publishers}</p>
                    <p>Ability: Static{element.Genre}</p>
                  </div>
                  <div class="item2">
                    <div class="imageContainer">
                      <img
                        src={element.imgurl}
                        alt=""
                        class="imageContainer2"
                      />
                    </div>
                  </div>
                </>
              );
            }
          })}
        </div>
        <div class="buttonContainer">
          <button class="buttonLetter" onClick={() => previous()} id="previous">
            Previous
          </button>
          <button class="buttonLetter2" onClick={() => next()} id="next">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Pikachu;
