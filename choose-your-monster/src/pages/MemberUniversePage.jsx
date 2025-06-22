import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import membersData from '../data/members.json';
import memesData from '../data/memes.json';
import tiktoksData from '../data/tiktoks.json'; // Import TikToks data

const MemberUniversePage = () => {
  const { memberName } = useParams(); // e.g., "ruka"
  const [member, setMember] = useState(null);

  useEffect(() => {
    const currentMember = membersData.find(m => m.id === memberName);
    setMember(currentMember);
  }, [memberName]);

  if (!member) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-red-500">Member not found!</h1>
        <Link to="/" className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded">Go Home</Link>
      </div>
    );
  }

  // Destructure details for easier use - Ruka's specific data if memberName is 'ruka'
  const { name, universeVibe, quotes, trivia, theme } = member;
  const primaryColor = theme?.primaryColor || 'pink-400'; // Fallback color
  const backgroundStyle = theme?.backgroundStyle || ''; // Get background style
  const portalStyle = theme?.portalStyle || ''; // Get portal style

  // Determine background class and animation
  let backgroundClasses = 'bg-gray-950'; // Default background
  if (backgroundStyle === 'fire-smoke' && name === 'Ruka') {
    backgroundClasses = 'bg-fire-smoke animate-flicker';
  } else if (backgroundStyle === 'galaxy-purple' && name === 'Rami') {
    backgroundClasses = 'bg-galaxy-purple animate-stars-pulse';
  }
  // Add more conditions for other members or a more generic mapping function later

  return (
    <div className={`min-h-screen ${backgroundClasses} text-neutral-200 flex flex-col items-center p-6 selection:bg-${primaryColor} selection:text-black member-universe-page`}>
      <header className="w-full max-w-4xl text-center pt-8">
        <h1 className={`text-5xl md:text-6xl font-bold mb-2 text-${primaryColor} font-orbitron`}>
          {name}'s Universe
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 italic mb-8">{universeVibe}</p>
      </header>

      {/* Portal Section - Conditional for Ruka */}
      {name === 'Ruka' && portalStyle === 'flame-tunnel' && (
        <div className="portal-container">
          <div
            className="portal-flame-tunnel animate-portal-pulse animate-portal-rotate relative"
            // The ::before pseudo-element needs its animation class if it can't be directly applied.
            // Tailwind doesn't directly support animating pseudo-elements via parent classes.
            // For simplicity, the inner spin might need to remain in index.css or be handled differently.
            // For now, the keyframes are in tailwind.config.js but .portal-flame-tunnel::before might not pick up 'animate-portal-inner-spin'
            // Let's assume the main portal animations are sufficient for now.
            // The alternative is to add a real nested div for the inner spin if it's crucial.
          >
            <div className="absolute inset-[5%] border-2 border-dashed border-white/30 rounded-[50%/30%] animate-portal-inner-spin"></div>
            <span className="relative z-10">Enter the Flame</span> {/* Ensure text is above pseudo-elements */}
          </div>
        </div>
      )}

      <main className="w-full max-w-4xl space-y-10">

        {/* Watch Edits Section */}
        <section id="watch-edits" className="bg-gray-900 p-6 rounded-lg shadow-xl">
          <h2 className={`text-3xl font-semibold mb-4 border-b-2 border-${primaryColor} pb-2 text-${primaryColor}`}>
            Watch {name}'s Edits
          </h2>
          {tiktoksData[member.id] && tiktoksData[member.id].length > 0 ? (
            <div className="space-y-4">
              {tiktoksData[member.id].map((edit) => (
                <div key={edit.id} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-pink-400 mb-1">{edit.title || "Fan Edit"}</h3>
                  <a
                    href={edit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-purple-400 hover:text-${primaryColor} underline break-all`}
                  >
                    {edit.url}
                  </a>
                  <p className="text-xs text-neutral-500 mt-1">
                    (Opens in new tab) - {new URL(edit.url).hostname.replace('www.','')}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-neutral-400">
              <p>(No edits available for {name} yet!)</p>
            </div>
          )}
        </section>

        {/* Hear their Part Section */}
        <section id="hear-part" className="bg-gray-900 p-6 rounded-lg shadow-xl">
          <h2 className={`text-3xl font-semibold mb-4 border-b-2 border-${primaryColor} pb-2 text-${primaryColor}`}>
            Hear {name}'s Part
          </h2>
          {member.soundSnippet ? (
            <div className="flex flex-col items-center space-y-3">
              <audio controls className="w-full max-w-md rounded-lg" key={member.soundSnippet}> {/* Added key to help React re-render if snippet changes */}
                <source src={member.soundSnippet} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p className="text-sm text-neutral-500">Playing: snippet from "Sheesh"</p> {/* Example, could be dynamic */}
            </div>
          ) : (
            <div className="text-center text-neutral-400">
              <p>(No audio snippet available for {name})</p>
            </div>
          )}
        </section>

        {/* View Memes Section */}
        <section id="view-memes" className="bg-gray-900 p-6 rounded-lg shadow-xl">
          <h2 className={`text-3xl font-semibold mb-4 border-b-2 border-${primaryColor} pb-2 text-${primaryColor}`}>
            View {name}'s Memes
          </h2>
          {memesData[member.id] && memesData[member.id].length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {memesData[member.id].map((meme) => (
                <div key={meme.id} className="bg-gray-800 p-2 rounded-lg shadow-md">
                  <img
                    src={meme.url}
                    alt={meme.alt || `${name} Meme`}
                    className="w-full h-auto object-cover rounded aspect-square"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.alt = `Failed to load: ${meme.alt}`;
                      // Optionally, set a placeholder image or style
                      e.target.style.border = '2px dashed #555';
                      e.target.style.display = 'flex';
                      e.target.style.alignItems = 'center';
                      e.target.style.justifyContent = 'center';
                      e.target.innerHTML = `<span class='text-xs text-gray-400 p-2'>${meme.alt || 'Image not found'}</span>`;
                    }}
                  />
                  <p className="text-sm text-neutral-400 mt-2 text-center">{meme.alt || "Fan Meme"}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-neutral-400">
              <p>(No memes available for {name} yet!)</p>
            </div>
          )}
        </section>

        {/* Trivia Section (already implemented, ensuring structure) */}
        <section id="trivia" className="bg-gray-900 p-6 rounded-lg shadow-xl">
          <h2 className={`text-3xl font-semibold mb-4 border-b-2 border-${primaryColor} pb-2 text-${primaryColor}`}>Trivia</h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            {trivia.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Quotes Section (already implemented, ensuring structure) */}
        <section id="quotes" className="bg-gray-900 p-6 rounded-lg shadow-xl">
          <h2 className={`text-3xl font-semibold mb-4 border-b-2 border-${primaryColor} pb-2 text-${primaryColor}`}>Quotes</h2>
          <blockquote className="space-y-3">
            {quotes.map((quote, index) => (
              <p key={index} className={`text-lg italic text-neutral-300 border-l-4 border-${primaryColor} pl-4 py-1`}>
                "{quote}"
              </p>
            ))}
          </blockquote>
        </section>

        {/* Mini-Game Section */}
        <section id="mini-game" className="bg-gray-900 p-6 rounded-lg shadow-xl">
          <h2 className={`text-3xl font-semibold mb-4 border-b-2 border-${primaryColor} pb-2 text-${primaryColor}`}>
            {name}'s Challenge Zone
          </h2>
          <div className="text-center text-neutral-300 p-4 space-y-3">
            <p className="text-lg">Get ready for a fun challenge!</p>
            <p className="text-2xl font-bold text-pink-400 animate-pulse">
              {name}'s Mini-Game: Coming Soon!
            </p>
            <button
              disabled
              className={`mt-4 px-6 py-3 bg-gray-700 text-gray-400 font-semibold rounded-lg shadow-md cursor-not-allowed`}
            >
              Start Challenge (Not Yet Active)
            </button>
            <p className="text-sm text-neutral-500">(Example: Ruka's "Tap to Catch Flaming Hearts")</p>
          </div>
        </section>

      </main>

      <footer className="mt-12 w-full max-w-4xl text-center pb-8"> {/* Added pb-8 for spacing at bottom */}
        <Link
          to="/"
          className={`px-8 py-3 bg-${primaryColor} hover:bg-opacity-80 text-black font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105`}
        >
          Back to Home
        </Link>
      </footer>
    </div>
  );
};

export default MemberUniversePage;
