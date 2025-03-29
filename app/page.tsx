import Script from 'next/script';
import DatePicker from './components/datepicker'


export default function Home() {
  return (
    <div>
      <h1>Test des stratégies de chargement des scripts internes</h1>
      <p>Voir la console, et l'onglet réseau</p>


      {/* Stratégie lazyOnload */}
      <Script src="/scripts/lazyOnload-strategy.js" strategy="lazyOnload"
      />

      {/* Stratégie afterInteractive */}
      <Script src="/scripts/afterInteractive-strategy.js" strategy="afterInteractive"
      />

      {/* Stratégie beforeInteractive */}
      <Script src="/scripts/beforeInteractive-strategy.js" strategy="beforeInteractive"
      />

            {/* Stratégie par défaut (équivalent à afterInteractive) */}
      <Script src="/scripts/default-strategy.js"
      />

      <Script>
          console.log('Ce script est exécuté en inline');
      </Script>

      <h1>Démo de l'import dynamique</h1>
      <DatePicker />

    </div>
  );
}
