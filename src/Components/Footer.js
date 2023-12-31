const Footer = () => {
  return (
    <div className="flex flex-col gap-5 py-8 font-bold">
      <div className="flex justify-between ">
        {/* <iframe
          className=""
          title="Salon Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.8216659895847!2d75.8401498749662!3d25.141719333946394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f859baa40abb3%3A0x5ff9a3ae9ee80259!2sGood%20Vibes%20Hair%20Studio%20(Unisex%20Salon)!5e0!3m2!1sen!2sin!4v1699866923404!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe> */}
        <div className="">
          <h3>Contact Us</h3>
          <p>Phone: (+91) 9024073844</p>
          <p>Email: shymakanu262@gmail.com</p>
          <p>
            Address: House No. 34, Infront of PNB Bank, Opera road, Mahaveer
            Nagar-II, Indra Vihar, Mahaveer Nagar, Kota, Rajasthan 324005
          </p>
        </div>
      </div>
      <div className="flex justify-center font-semibold">
        <h4>Copyright © 2024 by GoodVibes</h4>
      </div>
    </div>
  );
};

export default Footer;
