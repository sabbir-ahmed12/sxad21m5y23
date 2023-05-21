import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaResearchgate,
} from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="bg-custom-dark text-custom text-center py-3">
      <h6>Connect with Me</h6>
      <hr />
      <div>
        <a
          className="link-icon"
          href="https://www.facebook.com/SabbirAhmed8012"
          target="_blank"
        >
          <FaFacebookSquare size={28} className="me-1" />
        </a>
        <a
          className="link-icon"
          href="https://www.linkedin.com/in/sabbir-ahmed-cuet-ete/"
          target="_blank"
        >
          <FaLinkedin size={28} className="me-1" />
        </a>
        <a
          className="link-icon"
          href="https://github.com/sabbir-ahmed12"
          target="_blank"
        >
          <FaGithubSquare size={28} className="me-1" />
        </a>
        <a
          className="link-icon"
          href="https://www.researchgate.net/profile/Sabbir_Ahmed49"
          target="_blank"
        >
          <FaResearchgate size={28} className="me-1" />
        </a>
        <a
          className="link-icon"
          href="https://scholar.google.com/citations?user=cE8asmYAAAAJ&hl=en"
          target="_blank"
        >
          <SiGooglescholar size={24} className="me-1" />
        </a>
      </div>
      Copyright &copy; {currentYear} Sabbir Ahmed
    </section>
  );
};

export default Footer;
