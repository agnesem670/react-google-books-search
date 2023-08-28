
import OpenBook from '../assets/empty-book-blue.gif'
import Story0 from '../assets/story-0.gif'
import Story1 from '../assets/story-1.gif'
import Story2 from '../assets/story-2.gif'
import Story3 from '../assets/story-3.gif'



export default function MainLayout() {
  
  return (
    <div className='book-container'>
      <img src={OpenBook} className='book' alt='book'></img>
      <img id='story0' src={Story0} className='close' alt='story'></img>
      <img id='story1' src={Story1} className='close' alt='story'></img>
      <img id='story2' src={Story2} className='close' alt='story'></img>
      <img id='story3' src={Story3} className='close' alt='story'></img>
    </div>
  )
}




