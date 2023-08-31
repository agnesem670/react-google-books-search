import OpenBook from '../assets/empty-book-blue.gif'
import Story0 from '../assets/story-0.gif'
import Contact1 from '../assets/contact-1.gif'

export default function ContactLayout() {
  
  return (
    <div className='book-container'>
      <img src={OpenBook} className='book' alt='book'></img>
      <img id='story0' src={Story0} className='close' alt='story'></img>
      <img id='about1' src={Contact1} className='story' alt='tents'></img>
    </div>
  )
}




