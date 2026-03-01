import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitMessage('Thank you! We will contact you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  // Contact Information
  const contactDetails = [
    {
      id: 'whatsapp',
      title: 'WhatsApp Us',
      icon: '💬',
      color: 'whatsapp',
      details: [
        {
          label: 'Primary WhatsApp',
          value: '+27 78 957 9310',
          link: 'https://wa.me/27123456789?text=Hello%20Khanyisa%20Physiotherapy%2C%20I%20would%20like%20to%20book%20an%20appointment',
          action: 'Chat Now'
        },
        {
          label: 'Emergency WhatsApp',
          value: '+27 78 957 9310',
          link: 'https://wa.me/27876543210?text=EMERGENCY%3A%20I%20need%20urgent%20physiotherapy%20assistance',
          action: 'Emergency Chat'
        }
      ]
    },
    // {
    //   id: 'phone',
    //   title: 'Call Us',
    //   icon: '📞',
    //   color: 'phone',
    //   details: [
    //     {
    //       label: 'Landline',
    //       value: '(011) 123 4567',
    //       link: 'tel:+27111234567',
    //       action: 'Call Now'
    //     },
    //     {
    //       label: 'Mobile',
    //       value: '071 234 5678',
    //       link: 'tel:+27712345678',
    //       action: 'Call Now'
    //     },
    //     {
    //       label: 'Emergency Line',
    //       value: '(011) 987 6543',
    //       link: 'tel:+27119876543',
    //       action: 'Emergency Call'
    //     }
    //   ]
    // },
    {
      id: 'email',
      title: 'Email Us',
      icon: '✉️',
      color: 'email',
      details: [
        {
          label: 'General Inquiries',
          value: 'khanyisaphysio@gmail.com',
          link: 'mailto:khanyisaphysio@gmail.com',
          action: 'Send Email'
        },
      ]
    },
    {
      id: 'address',
      title: 'Visit Us',
      icon: '📍',
      color: 'address',
      details: [
        {
          label: 'Kagiso Medical Center',
          value: '3384 Kagiso Avenue, Hillsview, 1754',
          link: 'https://www.google.com/maps/place/3384+Kagiso+Ave,+Kagiso,+Krugersdorp,+1754/@-26.1632499,27.7756091,17z/data=!3m1!4b1!4m6!3m5!1s0x1e95987eedbd2b57:0x5ab7a0fdd29ae96c!8m2!3d-26.16325!4d27.78048!16s%2Fg%2F11c1_88n0m?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D',
          action: 'Get Directions'
        },
        {
          label: 'Krugersdorp Medical Center',
          value: '16 Ockerse Street, Krugersdorp,1739',
          link: 'https://www.google.com/maps/place/16+Ockerse+St,+Krugersdorp,+Johannesburg,+1739/@-26.1032711,27.7724528,17z/data=!3m1!4b1!4m6!3m5!1s0x1e9599a282317f51:0x600719720b7afb48!8m2!3d-26.1032711!4d27.7750277!16s%2Fg%2F11rggjbdnx?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D',
          action: 'View Map'
        },
         {
          label: 'Impilo Wellness 360',
          value: '06 Penny Street,Mindalore,Krugersdorp,1739',
          link: 'https://www.google.com/maps/place/06+Penny+St,+Mindalore,+Krugersdorp,+1754/@-26.1419624,27.8279702,17z/data=!3m1!4b1!4m6!3m5!1s0x1e9598b39e9caf79:0x5b6b2a2b7fa3f946!8m2!3d-26.1419624!4d27.8279702!16s%2Fg%2F11pv3hbtg4?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D',
          action: 'View Map'
        },

      ]
    }
  ];

  const services = [
    'General Consultation',
    'Neuromuscularskeletal Pains',
    'Chest Conditions',
    'Fracture Rehabilitation',
    'Pediatric Physio',
    'Women\'s Health',
    'Other'
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-badge">
            <span className="badge-icon">📞</span>
            <span className="badge-text">We're Here to Help</span>
          </div>
          <h2>Contact <span>Khanyisa Physiotherapy</span></h2>
          <p>
            Get in touch with our team for appointments, inquiries, or emergency assistance. 
            We're committed to providing you with the best care.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Our Contact Details</h3>
            
            <div className="contact-cards">
              {contactDetails.map((contact) => (
                <div 
                  key={contact.id} 
                  className={`contact-card ${contact.color}`}
                >
                  <div className="contact-card-header">
                    <div className="contact-card-icon">{contact.icon}</div>
                    <h4>{contact.title}</h4>
                  </div>
                  
                  <div className="contact-details">
                    {contact.details.map((detail, index) => (
                      <div key={index} className="contact-detail-item">
                        <p className="contact-detail-label">{detail.label}</p>
                        <p className="contact-detail-value">{detail.value}</p>
                        {detail.link && detail.action && (
                          <a
                            href={detail.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="action-button"
                          >
                            <span className="action-icon">
                              {contact.id === 'whatsapp' ? '💬' : 
                               contact.id === 'phone' ? '📞' : 
                               contact.id === 'email' ? '✉️' : '📍'}
                            </span>
                            {detail.action}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="emergency-banner">
              <div className="emergency-header">
                <span className="emergency-icon">🚨</span>
                <h4>Emergency Assistance</h4>
              </div>
              <p>
                For urgent medical attention after hours, please use our emergency lines.
              </p>
              <div className="emergency-buttons">
                <a 
                  href="tel:+27119876543"
                  className="emergency-button"
                >
                  📞 Call Emergency: 0837204431
                </a>
                <a 
                  href="https://wa.me/27837204431?text=EMERGENCY%3A%20I%20need%20urgent%20physiotherapy%20assistance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="emergency-button whatsapp"
                >
                  💬 WhatsApp Emergency
                </a>
              </div>
            </div>
          </div>

          

        <div className="map-section">
          <h3>Find Our Clinic</h3>
          <div className="map-content">
            <div className="map-placeholder">
              <div className="map-info-text">
                <div className="map-icon">📍</div>
                <p className="map-title">Khanyisa Physiotherapy</p>
                <p className="map-address">3384 Kagiso Avenue, Hillsview, 1754</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;