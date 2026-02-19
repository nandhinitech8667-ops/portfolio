import "./contact.css";

export default function Contact() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message Sent Successfully ✅");
        e.target.reset();
      } else {
        alert("Failed to send message ❌");
      }

    } catch (error) {
      alert("Server error ❌");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <p className="contact-tag">GET IN TOUCH</p>

          <h2 className="contact-title">
            Let’s work <span>together</span>
          </h2>

          <p className="contact-description">
            I'm currently looking for new opportunities.
            Whether you have a project in mind or just want to connect,
            I'd love to hear from you!
          </p>

          <div className="contact-info">
            <p>📧 nandhinisakthi417@gmail.com</p>
            <p>📍 Tamil Nadu, India</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <h3 className="form-title">Send me a message</h3>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" required />
            </div>

            <button type="submit" className="send-btn">
              Send Message ✈
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
