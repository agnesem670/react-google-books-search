import { Form, redirect, useActionData } from "react-router-dom";
import MainLayout from "../layouts/MainLayout"

export default function Contact() {
  const data = useActionData ()
  
  return (
    <>
    <MainLayout />
    <div className='contact-container'>
      <h3>Contact Us</h3>
      <Form method="post" action="contact">
        <label>
          <span>Your email</span>
          <input type="email" name="email" required></input>
        </label>
        <label>
          <span>Your message</span>
          <textarea name="message" required></textarea>
        </label>
        
        <button>Submit</button>

      </Form>

    </div>

  </>
  )
}

export const contactAction = async ({ request }) => {
  console.log(request)
  const data = await request.formData()
  const subbmission = {
    email: data.get('email'),
    message: data.get('message')
  }  

  if (subbmission.message.lenght <5) {
    return {error: 'Message must be over 5 chars long'}
  }

  return redirect('/')
}
