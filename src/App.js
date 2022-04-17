import './App.css';

import womanImg from './assets/img/rectImage.jpg';

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <ol className="nav_list">
            <li className="nav_list--item active">
              <a className="nav_list--link" href="#">Woman</a>
            </li>
            <li className="nav_list--item">
              <a className="nav_list--link" href="#">Man</a>
            </li>
          </ol>
        </nav>
      </header>
      <section title="About woman" className="card">
        <h1>About woman</h1>
        <figure className="card_img">
          <img src={womanImg} alt="Woman"/>
        </figure>
        <article>
          <h2 className="card_article--title">Etymology</h2>
          <p className="card_article--text">The spelling of "woman" in English has progressed over the past
            millennium from wīfmann[4] to wīmmann to wumman, and finally, the modern
            spelling woman.[5] In Old English, wīfmann meant "woman" (literally
            "woman-person"), whereas wer meant "man". Mann had a gender-neutral
            meaning of "human", corresponding to Modern English "person" or "someone";
            however, subsequent to the Norman Conquest, man began to be used more in
            reference to "male human", and by the late 13th century it had begun to eclipse
            usage of the older term wer.[6] The medial labial consonants f and m in wīfmann
            coalesced into the modern form "woman", while the initial element wīf, which
            had also meant "woman", underwent semantic narrowing to the sense of a married
            woman ("wife").
          </p>
        </article>
      </section>
    </div>
  );
}

export default App;
