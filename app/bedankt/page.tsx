import Link from "next/link";

export default function BedanktPage() {
  return (
    <main className="thank-you-page">
      <section className="thank-you-card">
        <p className="eyebrow">EAGLE OF CARS</p>

        <h1>Bedankt voor je aanvraag!</h1>

        <p>
          We hebben je bericht goed ontvangen.
          <br />
          We nemen zo snel mogelijk persoonlijk contact met je op.
        </p>

        <p className="thank-you-slogan">
          Met oog voor kwaliteit.
        </p>

        <Link href="/" className="button button-gold">
          Terug naar home
        </Link>
      </section>
    </main>
  );
}
