import { useState } from "react"
import "./works.scss"

export default function Works() {
    const [CurrentSlide,setCurrentSlide]=useState(0)
    const data=[{
        id: "1",
        icon: "./assets/mobile.png",
        title: "Front-end Developer",
        desc:
          "I like to code things from scratch, and enjoy bringing ideas to life in the browser ",
        img:
          "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      },
      {
        id: "2",
        icon: "./assets/globe.png",
        title: "Languages I speak:",
        desc:
          "HTML, javascript, CSS, python ",
        img:
          "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      },
      {
        id: "3",
        icon: "./assets/writing.png",
        title: "Designer",
        desc:
          "I value simple content structure, clean design patterns, and thoughtful interactions.",
        img:
          "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      },]

    const handleClick=(way)=>{way === "left" ? setCurrentSlide(CurrentSlide>0? CurrentSlide-1:2):setCurrentSlide(CurrentSlide<data.length-1?CurrentSlide+1:0);};
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${CurrentSlide*100}vw)`}}>
               {data.map(d=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/875a25535f45.jpg" alt="" />
                        </div>
                    </div>
                
                </div>))}
            </div>
            <img src="assets/arrow.png" className="arrow left" onClick={()=>handleClick("left")}></img>
            <img src="assets/arrow.png" className="arrow right" onClick={()=>handleClick("left")}></img>
        </div>
    )
}
