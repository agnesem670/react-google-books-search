
import OpenBook from '../assets/empty-book-blue.gif'
import Story0 from '../assets/story-0.gif'
import Story1 from '../assets/story-1.gif'
import Story2 from '../assets/story-2.gif'
import Story3 from '../assets/story-3.gif'



export default function MainLayout() {
  
  return (
    <div class='book-container'>
      <img src={OpenBook} className='book' alt='book'></img>
    </div>
  )
}

export function Story() {
  
  return (
    <div class='story-container'>
      <img id='story0' src={Story0} class='close' alt='story'></img>
      <img id='story1' src={Story1} class='close' alt='story'></img>
      <img id='story2' src={Story2} class='close' alt='story'></img>
      <img id='story3' src={Story3} class='close' alt='story'></img>
    </div>
  )
}


