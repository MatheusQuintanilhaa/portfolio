import { LinkedinLogo, GithubLogo, InstagramLogo } from "@phosphor-icons/react";

const User = () => {
  return (
    <section className="card user">
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
