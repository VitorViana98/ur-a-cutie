import { useState, useEffect } from "react";

export default function Cats() {
  const [images, setImages] = useState([]);

  async function refreshImages() {
    setImages([]);

    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=1",
        {
          headers: {
            "content-type": "application/json",
            "x-api-key": process.env.CAT_API_KEY,
          },
        }
      );
      const json = await response.json();
      setImages(json);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    refreshImages();
  }, []);

  return (
    <>
      <div
        onClick={() => console.log("aqui clicou", { images })}
        className="grid"
      >
        {/* {images && images.map((image) => image.url)} */}
        {images?.[0] && (
          <img
            src={images[0].url}
            className="cat-image"
            style={{
              border: "2px solid #F687B3",
              borderRadius: "10px",
              marginTop: "1rem",
            }}
          />
        )}
      </div>
      <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
        }

        .cat-image {
          width: 360px;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }

          .cat-image {
            width: 300px;
          }
        }
      `}</style>
    </>
  );
}
