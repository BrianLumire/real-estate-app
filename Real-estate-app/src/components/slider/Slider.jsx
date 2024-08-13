import { useState } from 'react';
import './slider.scss';

function Slider({ images }) {
    const [imageIndex, setImageIndex] = useState(null);

    const swipe = (direction) => {
        if (direction === "left") {
            if (imageIndex === 0) {
                setImageIndex(images.length - 1);
            } else {
                setImageIndex(imageIndex - 1);
            }
        } else {
            if (imageIndex === images.length - 1) {
                setImageIndex(0);
            } else {
                setImageIndex(imageIndex + 1);
            }
        }
    };

    return (
        <div className='slider'>
            {imageIndex !== null && (
                <div className="fullslide">
                    <div className="arrow" onClick={() => swipe("left")}>
                        <img src="/arrow.png" alt="Left Arrow" />
                    </div>
                    <div className="imgbox">
                        <img src={images[imageIndex]} alt={`Slide ${imageIndex + 1}`} />
                    </div>
                    <div className="arrow" onClick={() => swipe("right")}>
                        <img src="/arrow.png" className='right' alt="Right Arrow" />
                    </div>
                    <div className="close" onClick={() => setImageIndex(null)}>X</div>
                </div>
            )}

            <div className="bigimage">
                <img src={images[0]} alt="Main Image" onClick={() => setImageIndex(0)} />
            </div>
            <div className="smallimage">
                {images.slice(1).map((image, index) => (
                    <img src={image} alt={`Thumbnail ${index + 2}`} key={index} onClick={() => setImageIndex(index + 1)} />
                ))}
            </div>
        </div>
    );
}

export default Slider;
