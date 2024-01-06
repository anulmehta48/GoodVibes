import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-100/80 font-sans dark:bg-slate-500 mt-20">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <iframe
              className="w-[322px] h-[250px] md:w-[660px]"
              title="Salon Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.8216659895847!2d75.8401498749662!3d25.141719333946394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f859baa40abb3%3A0x5ff9a3ae9ee80259!2sGood%20Vibes%20Hair%20Studio%20(Unisex%20Salon)!5e0!3m2!1sen!2sin!4v1699866923404!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="pl-4 font-bold md:w-[660px] space-y-2 items-start justify-center">
            <h3 className="text-stone-950">Contact Us</h3>
            <p>Phone:+91 9024073844</p>
            <p>Email: shymakanu262@gmail.com</p>
            <p>
              Address: House No. 34, Infront of PNB Bank, Opera road, Mahaveer
              Nagar-II, Indra Vihar, Mahaveer Nagar, Kota, Rajasthan 324005
            </p>
            <p>Social Media Links</p>
            <ul className="flex gap-6">
              <Link
                to="https://www.instagram.com/goodvibes_hairstudio?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=="
                target="_blank"
              >
                <li>
                  <i className="fa-brands fa-instagram fa-2x"></i>
                </li>
              </Link>
              <li>
                <i className="fa-brands fa-facebook fa-2x"></i>
              </li>
              <Link
                to="https://youtube.com/@princeprofessionalsalon1151?si=ZG5MxkQz8wpLbLZ5"
                target="_blank"
              >
                <li>
                  <i className="fa-brands fa-youtube fa-2x"></i>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex justify-center font-bold mt-5">
          <h4>Copyright © 2024 by ❤ GoodVibes</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
