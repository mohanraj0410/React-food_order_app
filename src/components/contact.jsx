import React from 'react'
const Contact = () => {
  return (
    
    <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please feel free to reach out with any questions or feedback.</p>

        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" className="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
export default Contact
