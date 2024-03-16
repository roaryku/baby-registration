import { useState } from "react";

function Carousel({image}) {
    const [index, setIndex] = useState(0)

    const prevBtn = () => {
        setIndex((index => {
            index --;
            if(index < 0 ) {
                return image.length - 1;
            }
            return index;
        }))
    }

    const nextBtn = () => {
        setIndex((index => {
            index ++;
            if ( index > image.length - 1) {
                index = 0;
            }
            return index;
        }))
    }

    return(
        <div>
            <div>
            <div className="header">
            <img src={image[index]} width="200px" alt="baby items"/>
          </div>

          
          <div className="heading">
            <button className="previous" onClick={prevBtn}>Previous</button>
            <button className="previous" onClick={nextBtn}>Next</button>
            </div>
            </div>
        </div>
    )

}
export default Carousel;