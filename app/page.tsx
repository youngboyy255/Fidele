const stripeLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "#";

export default function Home() {
  return (
    <main>
      <section className="min-h-[90vh] flex flex-col justify-center px-6 py-24 sm:px-12 lg:px-24">
        <div className="max-w-2xl">
          <p className="font-serif text-2xl text-brick mb-6">Fidèle</p>
          <h1 className="font-serif font-medium text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
            Tes clients reviennent, même quand tu n&rsquo;y penses plus.
          </h1>
          <p className="text-lg sm:text-xl text-muted leading-relaxed mb-10 max-w-xl">
            Un client satisfait ne revient pas parce qu&rsquo;il t&rsquo;a
            oublié — pas parce qu&rsquo;il a été déçu. Personne ne tient le
            fichier, personne ne relance. Fidèle s&rsquo;en charge à ta
            place.
          </p>
          <a
            href={stripeLink}
            className="inline-block bg-brick text-paper font-medium text-lg px-8 py-4 hover:bg-[#993126] transition-colors"
          >
            Je m&rsquo;abonne — 25&nbsp;€/mois
          </a>
        </div>
      </section>

      <section className="bg-paper text-navy px-6 py-20 sm:px-12 lg:px-24">
        <div className="max-w-2xl flex flex-col gap-12">
          <div>
            <h2 className="font-serif font-medium text-2xl mb-2">
              Le rappel part sans toi
            </h2>
            <p className="text-navy/70 leading-relaxed">
              Au bon moment, par email, sans que tu aies à y penser.
            </p>
          </div>
          <div>
            <h2 className="font-serif font-medium text-2xl mb-2">
              Une offre qui donne envie de revenir
            </h2>
            <p className="text-navy/70 leading-relaxed">
              Générée automatiquement, valable une seule fois, jamais la
              même deux fois.
            </p>
          </div>
          <div>
            <h2 className="font-serif font-medium text-2xl mb-2">
              Tu vois ce que ça rapporte
            </h2>
            <p className="text-navy/70 leading-relaxed">
              Le nombre de clients revenus, et le chiffre d&rsquo;affaires
              que ça représente.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12 lg:px-24 border-t border-paper/10">
        <p className="text-muted text-sm">
          Rejoins les commerçants qui ne laissent plus leurs clients filer.
        </p>
      </section>

      <section className="px-6 py-24 sm:px-12 lg:px-24 text-center">
        <a
          href={stripeLink}
          className="inline-block bg-brick text-paper font-medium text-lg px-8 py-4 hover:bg-[#993126] transition-colors"
        >
          Je m&rsquo;abonne — 25&nbsp;€/mois
        </a>
      </section>
    </main>
  );
}
