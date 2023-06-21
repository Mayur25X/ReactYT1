import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <main>
          <h1>Contact Us</h1>
          <form>
            <div>
              <label>Name</label>
              <input type="text" required placeholder="Abc.." />
            </div>
            <div>
              <label>Email</label>
              <input type="email" required placeholder="Abc@gmail.com" />
            </div>
            <div>
              <label>Phone</label>
              <input type="number" required placeholder="1234567890" />
            </div>
            <div>
              <label>Message</label>
              <textarea
                required
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Contact;
