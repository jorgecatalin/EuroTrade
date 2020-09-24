import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CSSTransition } from "react-transition-group"
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons"

let slidere = [
  {
    img: require("../Imagini/background.jpg"),
    titlu: "IN BUSSINESS DE PESTE 15 ANI",
  },
  {
    img: require("../Imagini/back1.png"),
    titlu: "DISPUNEM DE SERVICII IN CONSTRUCTIE SI INCHIRIERI UTILAJE",
  },
  {
    img: require("../Imagini/back2.jpg"),
    titlu: "PESTE 40 PROIECTE FINALIZATE CU SUCCES ",
  },
]
let secunde = 0
export default function Carousel(props) {
  const [index, setIndex] = useState(0)
  const [x, setX] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      if (secunde > 5) {
        dreapta()
        secunde = 0
      } else secunde++
    }, 1000)
  }, [])
  function stanga() {
    console.log("index este ", index, "x este ", x)
    secunde = 0
    if (index == 0) {
      setIndex(slidere.length - 1)
      setX(-100 * (slidere.length - 1))
    } else {
      setIndex(index - 1)
      setX(x + 100)
    }
  }
  async function dreapta() {
    console.log("index este ", index, "x este ", x)
    secunde = 0
    if (index == slidere.length - 1) {
      await setIndex(0)
      await setX(0)
    } else {
      await setIndex(index + 1)
      await setX(x - 100)
    }
  }

  function schimba(ind) {
    secunde = 0
    console.log(ind)
    setX(100 * -ind)
    setIndex(ind)
  }
  return (
    <div className="Carousel">
      {slidere.map((item) => {
        return (
          <div
            className="Slider"
            style={{ transform: "translateX(" + x + "%)" }}
          >
            <CSSTransition
              appear={true}
              in={true}
              timeout={500}
              classNames="fade1"
            >
              <div className="BackgroundTopTransitie">
                <div>{item.titlu}</div>
                <div className="BackgroundTopButton">CONTACT</div>
              </div>
            </CSSTransition>
            <img className="CarouselBackground" src={item.img}></img>
          </div>
        )
      })}
      <div className="CarouselButoane">
        {slidere.map((x, ind) => {
          return (
            <FontAwesomeIcon
              icon={faCircle}
              className="CarouselButonCerc"
              onClick={() => schimba(ind)}
              style={{
                transform: index == ind ? "scale(1.3)" : "scale(1)",
              }}
            />
          )
        })}
      </div>
      <div className="CarouselSageataStanga" onClick={stanga}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className="CarouselSageataDreapta" onClick={dreapta}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  )
}
