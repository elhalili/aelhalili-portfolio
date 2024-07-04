import { About, Column, } from "./components";
import { about, resumeData, interests, contact } from "./data"

const App = () => {
  return (
    <>
      <div className="blur"></div>
      <main className="a-container">
        <About name={about.name} occupation={about.occupation} about={about.about} />
        <section className="scrollable">
          <div className="main-grid">
            {resumeData.map((e, i) => {
              return <Column title={e.title} cells={e.cells} key={i} />
            })}
          </div>
        </section>
        <section className="story">
          <h4>{interests.header}</h4>
          {interests.content.map((e, i) => <p key={i}>{e}</p>)}
        </section>
        <section className="story">
          <h3>{contact.header}</h3>
          <p>
            {contact.startWith}
            {contact.contacts.map((e, i) => {
              return (
                <>
                  <a key={i} className="link" target="_blank" href={e.link}>{e.content}</a>
                  {(i < contact.contacts.length - 1) && " or "}
                </>
              );
            })}
            .
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
