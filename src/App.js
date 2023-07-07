import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FacebookButton, TwitterButton} from "react-social";
import {FaTwitter} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
function App() {
  const [catImage, setCatImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState("");

  const generateImage = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://source.unsplash.com/random/",
        {
          responseType: "blob",
        }
      );
      const imageUrl = URL.createObjectURL(response.data);
      setImageURL("https://source.unsplash.com/random/");
      setCatImage(imageUrl);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    generateImage();
  }, []);

  return (
    <div>
      <div className="header">
        <h1>Random Image Generator!</h1>
      </div>
      <div className="container">
        <div className="buttons">
          <button id="btn-cat" onClick={generateImage}>
            <span className="reload">↻</span>
          </button>
        </div>
        <div className="images">
          <div id="cat-img">
            {loading ? (
              <img
                src="/gif_load.gif"
                alt="Loading..."
                style={{ width: "100%" }}
              />
            ) : catImage ? (
              <img src={catImage} alt="Cat" />
            ) : (
              <p>Placeholder Image</p>
            )}
          </div>
        </div>
        <div className="buttons">
          {imageURL && (
            <>
              <FacebookButton url={imageURL} appId={1002357797572943} className="fbbtn">
                <FaFacebook/>
              </FacebookButton>
              <TwitterButton url={imageURL} appId={1002357797572943} className="twbtn">
                {/* Share on Twitter */}
               <FaTwitter/>
              </TwitterButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
// import "./App.css";
// import axios from "axios";
// import React, { useState } from "react";
// import { FacebookButton, TwitterButton } from "react-social";

// function App() {
//   const [catImage, setCatImage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const generateImage = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         "https://source.unsplash.com/random/",
//         // "https://api.api-ninjas.com/v1/randomimage?category=nature",
//         {
//           headers: {
//             "X-Api-Key": "pISwnKkEFi9l6wxlWvZ3xQ==DwbUBaELJRouW1HQ",
//             Accept: "image/jpg",
//           },
//           responseType: "blob",
//         }
//       );
//       const imageUrl = URL.createObjectURL(response.data);
//       setCatImage(imageUrl);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   const shareOnFacebook = () => {
//     if (catImage) {
//       const facebookUrl = "https://www.facebook.com/sharer/sharer.php?u=";
//       const shareUrl = encodeURIComponent(window.location.href);
//       window.open(facebookUrl + shareUrl, "_blank");
//     }
//   };

//   const shareOnTwitter = () => {
//     if (catImage) {
//       const twitterUrl = "https://twitter.com/intent/tweet?";
//       const shareText = encodeURIComponent("Check out this random cat image!");
//       const shareUrl = encodeURIComponent(window.location.href);
//       window.open(twitterUrl + "text=" + shareText + "&url=" + shareUrl, "_blank");
//     }
//   };

//   return (
//     <div>
//       <div className="header">
//         <h1>Random Image Generator!</h1>
//       </div>
//       <div className="container">
//         <div className="buttons">
//           <button id="btn-cat" onClick={generateImage}>
//             <span className="reload">↻</span>
//           </button>
//         </div>
//         <div className="images">
//           <div id="cat-img">
//             {loading ? (
//               <img
//                 src="/gif_load.gif"
//                 alt="Loading..."
//                 style={{ width: "100%" }}
//               />
//             ) : catImage ? (
//               <img src={catImage} alt="Cat" />
//             ) : (
//               <p>Placeholder Image</p>
//             )}
//           </div>
//         </div>
//         <div className="buttons">
//           {catImage && (
//             <>
//               <FacebookButton onClick={shareOnFacebook}>
//                 Share on Facebook
//               </FacebookButton>
//               <TwitterButton onClick={shareOnTwitter}>
//                 Share on Twitter
//               </TwitterButton>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
