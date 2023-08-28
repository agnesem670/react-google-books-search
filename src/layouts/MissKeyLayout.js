
import OpenBook from '../assets/empty-book-blue.gif'
import Story0 from '../assets/story-0.gif'
import Baloons1 from '../assets/baloons-1.gif'



export default function MissKeyLayout() {
  
  return (
    <div className='book-container'>
      <img src={OpenBook} className='book' alt='book'></img>
      <img id='story0' src={Story0} className='close' alt='story'></img>
      <img id='baloons1' src={Baloons1} className='story' alt='three baloons'></img>
    </div>
  )
}




