export default function TextRows() {
  return (
    <div className="main-content">
      <div className="sliced-container">
        <div className="text-row" data-row-id="focus">
          <div className="text-content gradient-text" data-text="QUOTE">
            QUOTE
          </div>
          <div className="interactive-area"></div>
        </div>

        <div className="text-row" data-row-id="presence">
          <div className="text-content gradient-text" data-text="CAST">
            CAST
          </div>
          <div className="interactive-area"></div>
        </div>

        <div className="text-row" data-row-id="feel">
          <div className="text-content gradient-text" data-text="COIN">
            COIN
          </div>
          <div className="interactive-area"></div>
        </div>
      </div>

      {/* Add link buttons section */}
      <div className="link-buttons">
        <a
          href="https://farcaster.xyz/miniapps/49DKrr4GuGnZ/quoted"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          App
        </a>
        <a
          href="https://farcaster.xyz/quotedapp"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          Farcaster
        </a>
        <a
          href="https://x.com/ZoraQuote"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          x.com
        </a>
      </div>
    </div>
  );
}
