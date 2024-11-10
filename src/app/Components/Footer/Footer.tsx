interface FooterProps {
  contactNumber: string;
  email: string;
  address: string[];
  socialMedia: { name: string; link: string }[];
}

const Footer: React.FC<FooterProps> = ({ contactNumber, email, address, socialMedia }) => {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        
        {/* Get in touch section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <div>
            <p>Work Enquires</p>
            <a href={`tel:${contactNumber}`} className="font-bold">{contactNumber}</a>
          </div>
          <div>
            <p>Mail At</p>
            <a href={`mailto:${email}`} className="font-bold">{email}</a>
          </div>
        </div>

        {/* Post address section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">Post Address</h2>
          <address className="not-italic">
            {address.map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
          </address>
        </div>

        {/* Social media section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">Social Media</h2>
          <ul>
            {socialMedia.map((platform, index) => (
              <li key={index}><a href={platform.link} className="hover:underline">{platform.name}</a></li>
            ))}
          </ul>
        </div>

      </div>
      
      {/* Copyright section */}
      <div className="mt-8 text-center border-t border-gray-300 pt-4">
        <p>&copy; 2024 TemperaEvo.com. | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
