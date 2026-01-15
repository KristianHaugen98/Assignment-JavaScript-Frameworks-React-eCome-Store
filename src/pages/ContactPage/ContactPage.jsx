import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

// Contact from page:
const ContactFormPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    message: "",
  });

  const isFormValid = () => {
    // Full Name
    if (formData.fullName.trim().length < 3) return false;

    // Subject
    if (formData.subject.trim().length < 3) return false;

    // Email: very basic check (has @ and .)
    const email = formData.email.trim();
    if (!email.includes("@") || !email.includes(".")) return false;

    // Message
    if (formData.message.trim().length < 3) return false;

    return true;
  };
  // Console.logs the data from the form once validation requirements are met
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      console.log("Form data sent:", formData);
      // Clear form after success:
      setFormData({ fullName: "", subject: "", email: "", message: "" });
    }
  };
  return (
    <section className="contact py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold">Contact us</h2>
              <p className="lead text-muted">
                Have a question or want to work together? I'd love to hear from
                you.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="mb-4">
                <label htmlFor="name" className="form-label fw-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="fullname"
                  placeholder="Enter your full name"
                  value={formData.fullName} // React sets this value
                  onChange={
                    (e) =>
                      setFormData({
                        ...formData,
                        fullName: e.target.value,
                      }) // updates state on every keystroke
                  }
                  required
                />
                {/* Live error message */}
                {formData.fullName.length > 0 &&
                  formData.fullName.trim().length < 3 && (
                    <small className="text-danger d-block mt-1">
                      Full name must be at least 3 characters
                    </small>
                  )}
              </div>
              {/* Subject */}
              <div className="mb-4">
                <label htmlFor="subject" className="form-label fw-medium">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="subject"
                  placeholder="Enter your subject here"
                  value={formData.subject} // React sets this value
                  onChange={
                    (e) =>
                      setFormData({
                        ...formData,
                        subject: e.target.value,
                      }) // updates state on every keystroke
                  }
                  required
                />
                {/* Live error message */}
                {formData.subject.length > 0 &&
                  formData.subject.trim().length < 3 && (
                    <small className="text-danger d-block mt-1">
                      Full name must be at least 3 characters
                    </small>
                  )}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="form-label fw-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={
                    (e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      }) // updates state on every keystroke
                  }
                  required
                />
                {/* Live error message */}
                {formData.email.length > 0 &&
                  (!formData.email.includes("@") ||
                    !formData.email.includes(".")) && (
                    <small className="text-danger d-block mt-1">
                      Please enter a valid email address
                    </small>
                  )}
              </div>

              {/* Message */}
              <div className="mb-5">
                <label htmlFor="message" className="form-label fw-medium">
                  Your Message
                </label>
                <textarea
                  className="form-control form-control-lg"
                  id="message"
                  rows="6"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={
                    (e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      }) // updates state on every keystroke
                  }
                  required
                ></textarea>
                {/* Live error message */}
                {formData.message.length > 0 &&
                  formData.message.trim().length < 3 && (
                    <small className="text-danger d-block mt-1">
                      Message must be at least 3 characters
                    </small>
                  )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg px-5"
                  disabled={!isFormValid()}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormPage;
