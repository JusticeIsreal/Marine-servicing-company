import React, { useState } from "react";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const companyEmail = "Jusminempire@gmail.com";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ companyEmail, number, email, message }),
      });

      if (response.ok) {
        // Email sent successfully
        console.log("Email sent successfully");
        setEmail("");
        setNumber("");
        setMessage("");
        alert("Email sent successfully");
      } else {
        // Failed to send email
        console.log("Failed to send email");
      }
    } catch (error) {
      console.error("Error occurred while sending the email:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Send us a message</h2>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Your phone number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Send Email</button>
    </form>
  );
}

export default ContactForm;
