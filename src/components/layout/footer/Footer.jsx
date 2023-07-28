import "../footer/Footer.css"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="box">
          <figure>
            <Link to="/">
              <img src="https://res.cloudinary.com/dgacjtuuh/image/upload/v1690559308/73108793-las-l_C3_ADneas-de-la-impresora-3d-dise_C3_B1an-la-ilustraci_C3_B3n-del-vector-el-proceso-de-impresi_C3_B3n-en-la_ucj1cf.jpg" />
            </Link>
          </figure>
        </div>
        <div className="box">
          <h2>SOBRE NOSOTROS</h2>
          <p>
            ¡Hola! En MANCU3D, somos amantes de la tecnología y
            los objetos creativos. Nos especializamos en impresiones 3D y
            ofrecemos una selección única de productos impresos en 3D que te
            encantarán
          </p>
          <p>
            Tenemos desde figuras y decoraciones hasta accesorios y regalos originales,
            nuestra colección tiene algo para todos. Nos esforzamos por ofrecer
            productos de alta calidad y diseños sorprendentes que harán que te
            enamores de la impresión 3D.
          </p>
        </div>
        <div className="box">
          <h2>SIGUENOS</h2>
          <div className="red-social">
            <a href="/">
              <FacebookIcon className="f" />
            </a>
            <a>
              <InstagramIcon href="/" className="f" />
            </a>
            <a>
              <TwitterIcon href="/" className="f" />
            </a>
            <a>
              <YouTubeIcon href="/" className="f" />
            </a>
          </div>
        </div>
      </div>
      <div className="grupo-2">
        <small>
          &copy; 2023 <b>Mancu.ind</b> - Todos los Derechos Reservados.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
