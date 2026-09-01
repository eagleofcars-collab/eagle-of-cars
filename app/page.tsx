import Image from "next/image";


const values = [
  ["Persoonlijk contact", "Geen callcenter, maar rechtstreeks contact."],
  ["Eerlijk en transparant", "Heldere afspraken zonder verrassingen."],
  ["Zorgvuldig en veilig", "Jouw voertuig krijgt de aandacht die het verdient."],
  ["Met oog voor kwaliteit", "Niet groter praten, maar goed uitvoeren."],
];

const projects = [
  {
    image: "/images/hero-porsche.jpeg",
    label: "Internationaal transport",
    title: "Porsche Carrera",
    text: "Een bijzondere klassieker zorgvuldig vervoerd door Europa.",
  },
  {
    image: "/images/boat.jpeg",
    label: "Veelzijdig vervoer",
    title: "Boottransport",
    text: "Ook geschikte andere ladingen worden met dezelfde zorg behandeld.",
  },
  {
    image: "/images/double-porsche.jpeg",
    label: "Speciale opdracht",
    title: "Twee klassiekers",
    text: "Iedere opdracht krijgt dezelfde persoonlijke aandacht.",
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Eagle of Cars home">
          <Image src="/images/logo.jpeg" alt="Eagle of Cars" width={68} height={68} />
          <div>
            <strong>EAGLE OF CARS</strong>
            <small>MET OOG VOOR KWALITEIT.</small>
          </div>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#specialismen">Occasions</a>
          <a href="#transport">Transport</a>
          <a href="#verhaal">Achter Eagle</a>
          <a href="#contact">Contact</a>
          <a className="button button-gold header-cta" href="#contact">
            Aanvraag doen
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-overlay" />
        <div className="hero-content shell">
          <span className="eyebrow">Premium automotive & transport</span>
          <h1>
            Met oog voor <span>kwaliteit.</span>
          </h1>
          <p>
            Premium occasions en professioneel voertuigtransport voor
            particulieren en bedrijven, in Nederland en Europa.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#specialismen">
              Bekijk occasions
            </a>
            <a className="button button-dark" href="#contact">
              Transport aanvragen
            </a>
          </div>
        </div>
      </section>

      <div className="golden-wing" aria-hidden />

      <section className="section shell" id="specialismen">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Twee specialismen</span>
            <h2>Eén kwaliteitsstandaard.</h2>
          </div>
          <p>
            Occasions en transport zijn twee volwaardige pijlers binnen Eagle of
            Cars. Beide worden persoonlijk, zorgvuldig en transparant uitgevoerd.
          </p>
        </div>

        <div className="specialism-grid">
          <article className="specialism-card automotive-card">
            <div>
              <span className="eyebrow">Automotive</span>
              <h3>Premium occasions</h3>
              <p>
                Zorgvuldig geselecteerde auto&apos;s, helder gepresenteerd en
                persoonlijk geleverd.
              </p>
              <a href="#contact">Bekijk binnenkort de voorraad →</a>
            </div>
          </article>

          <article className="specialism-card transport-card" id="transport">
            <div>
              <span className="eyebrow">Transport</span>
              <h3>Professioneel vervoer</h3>
              <p>
                Losse opdrachten voor auto&apos;s, klassiekers, sportwagens en
                geschikte andere ladingen.
              </p>
              <a href="#contact">Vraag transport aan →</a>
            </div>
          </article>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Waarom Eagle?</span>
            <h2>Persoonlijk en duidelijk.</h2>
          </div>
          <p>
            Je hebt rechtstreeks contact, krijgt heldere afspraken en weet wie
            verantwoordelijk is voor jouw auto of opdracht.
          </p>
        </div>

        <div className="values-grid">
          {values.map(([title, text], index) => (
            <article key={title} className="value-card">
              <span className="value-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="eagle-select">
          <div className="select-badge">EAGLE<br />SELECT</div>
          <div>
            <span className="eyebrow">De Eagle standaard</span>
            <h2>Alleen zorgvuldig geselecteerd.</h2>
            <p>
              Eagle Select wordt het herkenbare kwaliteitslabel voor occasions
              die voldoen aan onze eisen voor historie, controle, presentatie en
              aflevering.
            </p>
            <div className="check-grid">
              <span>Technisch gecontroleerd</span>
              <span>Transparante historie</span>
              <span>Professioneel gepresenteerd</span>
              <span>Persoonlijk geleverd</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Onderweg met Eagle</span>
            <h2>Echte opdrachten. Echte verhalen.</h2>
          </div>
          <p>
            Deze sectie groeit uit tot een levend portfolio van bijzondere
            voertuigen, transporten en afleveringen.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 850px) 100vw, 33vw" />
              </div>
              <div className="project-copy">
                <small>{project.label}</small>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell story-section" id="verhaal">
        <div className="story-photo">
          <Image src="/images/owner.png" alt="Het gezicht achter Eagle of Cars" fill sizes="(max-width: 850px) 100vw, 45vw" />
        </div>
        <div className="story-copy">
          <span className="eyebrow">Achter Eagle of Cars</span>
          <h2>Een merk met een persoonlijk gezicht.</h2>
          <p>
            Mijn doel is dat klanten zich op hun gemak voelen, goede service
            ervaren en weten met wie ze zaken doen. Eagle of Cars moet bekend
            worden om zowel autoverkoop als professioneel transport.
          </p>
          <blockquote>
            Albanese trots, doorzettingsvermogen en moed, gecombineerd met
            Nederlandse nuchterheid, eerlijkheid en betrouwbaarheid.
          </blockquote>
          <p>
            In een latere fotoshoot vervangen we deze foto door een tijdloos
            portret in de definitieve Eagle of Cars-stijl.
          </p>
        </div>
      </section>

      <section className="section shell" id="contact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Neem contact op</span>
            <h2>Waarmee kunnen we helpen?</h2>
          </div>
          <p>
            In de volgende ontwikkelstap koppelen we dit formulier aan jouw
            e-mailadres.
          </p>
        </div>

        <div className="contact-premium-grid">
  <div className="contact-premium-info">
    <p className="contact-kicker">CONTACT</p>

    <h2>
      Direct in contact
      <br />
      <span>met Eagle of Cars</span>
    </h2>

    <p className="contact-intro">
      Vul het formulier in en we nemen zo snel mogelijk persoonlijk
      contact met je op.
    </p>

    <div className="contact-benefits">
      <div className="contact-benefit">
        <div className="contact-benefit-icon">◇</div>
        <div>
          <h3>Persoonlijk &amp; direct</h3>
          <p>Je hebt direct contact met ons.</p>
        </div>
      </div>

      <div className="contact-benefit">
        <div className="contact-benefit-icon">✓</div>
        <div>
          <h3>Betrouwbaar &amp; transparant</h3>
          <p>Eerlijke informatie en duidelijke afspraken.</p>
        </div>
      </div>

      <div className="contact-benefit">
        <div className="contact-benefit-icon">★</div>
        <div>
          <h3>Met oog voor kwaliteit</h3>
          <p>Wij staan voor service en vakmanschap.</p>
        </div>
      </div>
    </div>

    <div className="contact-details-box">
      <div>
        <span className="contact-detail-label">Bellen kan ook</span>
        <a href="tel:+31627572176">06 27 57 21 76</a>
      </div>

      <div>
        <span className="contact-detail-label">E-mail</span>
        <a href="mailto:eagleofcars@gmail.com">
          eagleofcars@gmail.com
        </a>
      </div>
    </div>

    <address className="contact-address">
      Bedrijvenpark Twente Noord 103 · 7602 KS Aadorp
    </address>
  </div>

  <form
    className="contact-form contact-form-premium"
    action="https://formsubmit.co/eagleofcars@gmail.com"
    method="POST"
  >
    <input
      type="hidden"
      name="_subject"
      value="Nieuwe aanvraag via Eagle of Cars"
    />

    <input
      type="hidden"
      name="_next"
      value="https://eagle-of-cars.vercel.app/bedankt"
    />

    <div className="contact-form-heading">
      <h3>Stuur ons een bericht</h3>
      <span></span>
    </div>

    <div className="form-row">
      <label>
        Naam
        <input
          type="text"
          name="Naam"
          placeholder="Je naam"
          required
        />
      </label>

      <label>
        E-mailadres
        <input
          type="email"
          name="email"
          placeholder="Je e-mailadres"
          required
        />
      </label>
    </div>

    <div className="form-row">
      <label>
        Telefoonnummer
        <input
          type="tel"
          name="Telefoonnummer"
          placeholder="Je telefoonnummer"
        />
      </label>

      <label>
        Onderwerp
        <select name="Onderwerp" defaultValue="Algemene vraag">
          <option>Algemene vraag</option>
          <option>Transportaanvraag</option>
          <option>Vraag over een occasion</option>
          <option>Auto verkopen</option>
        </select>
      </label>
    </div>

    <label>
      Bericht
      <textarea
        name="Bericht"
        placeholder="Vertel ons waar we je mee kunnen helpen..."
        required
      />
    </label>

    <input
      className="button button-gold contact-submit"
      type="submit"
      value="Verstuur bericht"
    />
  </form>
</div>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <span>© 2026 Eagle of Cars</span>
          <span>Met oog voor kwaliteit.</span>
          <span>KVK 82499950</span>
        </div>
      </footer>

      
    </main>
  );
}
