import React, { useState, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const AndMore = () => {
  const endNum = 100;
  const [startNum, setStartNum] = useState(0);

  const changePorcentage = () => {
    if (startNum < endNum) {
      setStartNum(prevCount => prevCount + 1)
    }
  }

  useEffect(() => {
    if (startNum > 0 && startNum < endNum) {
      setTimeout(() => {
        setStartNum(prevCount => prevCount + 1)
      },2)
    }
  }, [startNum])

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
          onVisibilityChange={(inView) => {
            if (inView) {
              changePorcentage()
            }
          }}
        >
          <div className="discount_porcentage">
            <span>{startNum}%</span>
            <span>FUN!</span>
          </div>
        </Fade>

        <Slide right triggerOnce>
          <div className="discount_description">
            <h3>And more!</h3>
            <p>Arraial d'Ajuda is a district of Porto Seguro. The small village has an architectural style, variety, and refinement of its establishments that earned it the nickname "Brazil's most charming street". At the end of Mucugê Street, one has access to Mucugê Beach and Pitinga Beach. </p>
          </div>
        </Slide>
      </div>
    </div>
  )
}

export default AndMore;