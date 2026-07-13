"use client";

import { FormEvent, useState } from "react";

export default function FeedbackButton() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function submitFeedback(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    setTimeout(() => {
      setOpen(false);
      setSent(false);
    }, 1800);
  }

  return (
    <>
      <button className="feedback-trigger" onClick={() => setOpen(true)}>
        <span aria-hidden>🦅</span>
        Feedback
      </button>

      {open && (
        <div className="feedback-backdrop" onClick={() => setOpen(false)}>
          <aside className="feedback-panel" onClick={(e) => e.stopPropagation()}>
            <button
              className="feedback-close"
              onClick={() => setOpen(false)}
              aria-label="Sluiten"
            >
              ×
            </button>

            <span className="eyebrow">Project Eagle</span>
            <h2>Wat wil je aanpassen?</h2>
            <p>
              Dit formulier is in deze eerste versie nog een demonstratie. In de
              volgende stap koppelen we het aan e-mail of een feedbackdatabase.
            </p>

            {sent ? (
              <div className="feedback-success">Feedback ontvangen — bedankt.</div>
            ) : (
              <form onSubmit={submitFeedback} className="feedback-form">
                <label>
                  Onderdeel
                  <select required>
                    <option>Homepage algemeen</option>
                    <option>Hero</option>
                    <option>Occasions</option>
                    <option>Transport</option>
                    <option>Achter Eagle</option>
                    <option>Contact</option>
                  </select>
                </label>

                <label>
                  Soort feedback
                  <select required>
                    <option>Ontwerp aanpassen</option>
                    <option>Nieuw idee</option>
                    <option>Iets werkt niet</option>
                    <option>Dit wil ik behouden</option>
                  </select>
                </label>

                <label>
                  Opmerking
                  <textarea
                    required
                    placeholder="Bijvoorbeeld: de boot iets kleiner, bus groter..."
                  />
                </label>

                <button className="button button-gold" type="submit">
                  Feedback versturen
                </button>
              </form>
            )}
          </aside>
        </div>
      )}
    </>
  );
}
