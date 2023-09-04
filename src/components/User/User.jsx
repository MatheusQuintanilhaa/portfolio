const User = () => {
  return (
    <section className="card user">
      <picture>
        <img src="../../../src/assets/profile.jpeg" alt="profile picture" />
      </picture>
      <div className="user__content">
        <h1>Matheus Quintanilha</h1>

        <p>Desenvolvedor Frontend</p>
      </div>
    </section>
  );
};

export default User;
