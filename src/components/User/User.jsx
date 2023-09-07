import { LinkedinLogo, GithubLogo, InstagramLogo } from "@phosphor-icons/react";
import AOS from "aos"; // Importe o AOS
import "aos/dist/aos.css"; // Importe o arquivo CSS do AOS
import "../../../src/assets/profile.jpeg"; // Importe sua imagem de perfil

const User = () => {
  // Inicialize o AOS com as opções desejadas (por exemplo, fade-right, duração, easing)
  AOS.init({ once: true });

  return (
    <section
      className="card user"
      data-aos="fade-right"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    >
      <picture>
        <img src="../../../src/assets/profile.jpeg" alt="profile picture" />
      </picture>
      <div className="user__content">
        <h1>Matheus Quintanilha</h1>

        <p>Desenvolvedor Frontend</p>

        <div className="social">
          <a
            href="https://www.linkedin.com/in/matheus-quintanilhadev/"
            className="social__link"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo size={22} />
          </a>

          <a
            href="https://github.com/MatheusQuintanilhaa"
            className="social__link"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo size={22} />
          </a>

          <a
            href="https://www.instagram.com/matheus_quintanilha/"
            className="social__link"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramLogo size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default User;
