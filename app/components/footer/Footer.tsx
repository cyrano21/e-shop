import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Catégories de boutique</h3>
            <Link href="#">Téléphone</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Montres</Link>
            <Link href="#">TVs</Link>
            <Link href="#">Accessoires</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Service client</h3>
            <Link href="#">Contactez-nous</Link>
            <Link href="#">Politique d&apos expédition</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              Dans notre magasin d&apos électronique, nous nous engageons à fournir les dernières
              et les meilleurs appareils et accessoires à nos clients. Avec un large
              sélection de téléphones, téléviseurs, ordinateurs portables, montres et accessoires.
            </p>
            <p>&copy; {new Date().getFullYear()} E~Shop. Tous droits réservés</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Suivez-nous</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
