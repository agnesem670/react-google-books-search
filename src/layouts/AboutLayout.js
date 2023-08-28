import OpenBook from '../assets/empty-book-blue.gif'
import Story0 from '../assets/story-0.gif'
import About1 from '../assets/about-1.gif'

export default function AboutLayout() {
  
  return (
    <div className='book-container'>
      <img src={OpenBook} className='book' alt='book'></img>
      <img id='story0' src={Story0} className='close' alt='story'></img>
      <img id='about1' src={About1} className='story' alt='puzzle'></img>
    </div>
  )
}




