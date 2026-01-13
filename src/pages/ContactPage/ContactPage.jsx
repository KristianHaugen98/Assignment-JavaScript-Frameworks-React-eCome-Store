import "bootstrap/dist/css/bootstrap.min.css";

// Contact from page:
const ContactFormPage = () => {
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

            <form>
              {/* Full Name */}
              <div className="mb-4">
                <label htmlFor="name" className="form-label fw-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
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
                  required
                />
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
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg px-5">
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
