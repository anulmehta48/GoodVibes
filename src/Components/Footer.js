const Footer = () => {
  return (
    <>
      <div className="flex justify-between p-2 bg-slate-500">
        <div className="map-view">
          {/* You can embed a map or use an iframe to show your salon's location */}
          <iframe className="w-[900px] h-80"
            title="Salon Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.8216659895847!2d75.8401498749662!3d25.141719333946394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f859baa40abb3%3A0x5ff9a3ae9ee80259!2sGood%20Vibes%20Hair%20Studio%20(Unisex%20Salon)!5e0!3m2!1sen!2sin!4v1699866923404!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-[600px] h-80 ">
          <h3>Contact Us</h3>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Email: info@yoursalon.com</p>
          <p>Address: 123 Street, Cityville, Country</p>
        </div>
      </div>
      <div>
        <h4>Copyright © 2023 by GoodVibes</h4>
      </div>
    </>
  );
};

export default Footer;

