const About = (about: MyCustomTypes.About) => {
  return (
    <section className="story">
      <h1>{about.name}</h1>
      <p>
        <em>{about.occupation}. </em>
        {about.about}
      </p>
    </section>
  );
}

export default About;