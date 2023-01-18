import React from 'react'
import { useSelector } from'react-redux'

function About() {
    const colorName = useSelector((state)=> state.theme.value)
  return (
    <div>
        <h1>About</h1>
        <p style={{color : colorName}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere expedita quaerat sed culpa repellendus eius magnam cupiditate rem facilis ipsa sint corrupti officiis officia, fugiat explicabo ratione ex soluta. Eum a reiciendis ipsa incidunt necessitatibus nam unde ipsam autem ullam et est pariatur ea vel eveniet, nemo beatae possimus deleniti dolorum. Obcaecati fugiat est vero quis nam natus repellat. Laudantium aliquid ducimus minus ex modi nobis architecto commodi delectus culpa. In molestiae, unde possimus nobis nihil dolorum maxime magni. Libero eaque, esse consectetur veritatis consequuntur quis. Ut reprehenderit id quidem magni libero consequuntur deleniti officiis expedita dolore blanditiis, atque ullam!</p>
    </div>
  )
}

export default About;