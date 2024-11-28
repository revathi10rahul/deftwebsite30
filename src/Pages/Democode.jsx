import React, { useState } from "react";

const UniqueGallery = () => {
  const images = [
    { key: 0, src: "https://picsum.photos/1200/1200/?image=1005", title: "Stephen Shaw", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate assumenda nemo delectus totam atque quas suscipit dicta." },
    { key: 1, src: "https://picsum.photos/1200/1200/?image=804", title: "David Khourshid", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente soluta iusto molestias ullam." },
    { key: 2, src: "https://picsum.photos/1200/1200/?image=838", title: "Coding Compadre", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit." },
    { key: 3, src: "https://picsum.photos/1200/1200/?image=832", title: "Boolean Buddy", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." },
    { key: 4, src: "https://picsum.photos/1200/1200/?image=836", title: "Animation Amigo", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias exercitationem voluptatibus." },
    { key: 5, src: "https://picsum.photos/1200/1200/?image=823", title: "Keyframe Companion", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta reprehenderit, ut doloribus corrupti." },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="unique-gallery">
      <div className="unique-gallery-big-images">
        {images.map((image, index) => (
          <div
            key={image.key}
            className={`unique-gallery-big-image ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <img src={image.src} alt={image.title} />
          </div>
        ))}
      </div>

      <div className="unique-gallery-thumbnails">
        {images.map((image, index) => (
          <div
            key={image.key}
            className={`unique-gallery-thumbnail ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={image.src} alt={image.title} />
            <div className="unique-gallery-cuticle"></div>
          </div>
        ))}
      </div>

      <div className="unique-gallery-content">
        <div className="unique-gallery-articles">
          {images.map((image, index) => (
            <article
              key={image.key}
              className={`unique-gallery-article ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <h2>{image.title}</h2>
              <p>{image.description}</p>
            </article>
          ))}
        </div>

        <nav className="unique-gallery-nav">
          <button onClick={handlePrev} title="Previous">
            &lt;
          </button>
          <button onClick={handleNext} title="Next">
            &gt;
          </button>
        </nav>
      </div>
    </div>
  );
};

export default UniqueGallery;