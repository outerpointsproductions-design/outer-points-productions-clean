import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Play, Trophy, Calendar, Users, Radio, Star, Mail, Camera, Handshake, ChevronRight } from 'lucide-react';
import './styles.css';

const A='/assets/';
const img=(n)=>A+n;
const sponsors=[
['JB Cases','3d-sponsor-logos-7-1-1.png','https://jbcases.com'] ,['American Family Insurance','amfam-1.png','https://www.amfam.com/agents/wisconsin/appleton/joseph-porter'],['Avenue Auto','avenue-auto.png','https://www.avenueautoofoshkosh.com'],['Brave Billiards','brave-1.png','https://www.brave-billiards.com'],['BridgeMates','bridgemates-1.png','https://www.facebook.com/share/g/19W9qbqVLs/'],,['Conscious Carnivore','conscious-1.png','https://conscious-carnivore.com'],['DKM Carpentry','dkm-1.png','mailto:david@dkmcarpentryllc.com'],['Dumper Dan’s','dumper-1.png','https://www.dumperdan.com/'],['El Poblano','El Poblano.png','https://elpoblanogrill.com/'],['Home Sweet Home','home-sweet-home-1.png','https://www.homes.com/real-estate-agents/bobbi-jo-kunz/lsy5z3d/'],,['Johnko Express','johnko-1.png','https://www.johnkoexpress.com/'],,['LK Painting & Staining','lk-1.png'],['Midstate Amusement Games','midstate-1.png','https://midstateamusements.com'],['J. Pechauer Custom Cues','pechauer.png','https://pechauer.com/'],,['Sorce Martial Arts','sorce.png','https://sorcemartialarts.com/'],,['The Corner Pocket','the-corner-pocket.png','https://www.facebook.com/profile.php?id=61558185584431'],,['Tovar Construction','tovar.png','https://tovarconstructionllc.com/'],,['The Varsity Club','varsity-3.png','https://thevarsitycluboshkosh.com/'],,['Vince D Tattoos','vincent.png','https://gallery83tattoo.com/'],,['WIBHOF','wibhof-5.png','https://wibhof.org'],['WPPS','wpps.png','https://www.facebook.com/share/g/1Fd3dRninr/'],,['Onboard Sportswear','Onboard Sportswear.png','https://onboardsportswear.com']
];
const eventCards=[
 ['The Breaking Point™','12 contestants. One survivor. Pressure-packed pool challenges, elimination battles, and unforgettable moments as players fight to become the first-ever Breaking Point champion.','the-breaking-point-21-2.png','/breaking-point'],
 ['The Badger KO','Wisconsin residents, serious Fargo caps, big money, schedule-your-own match dates, and live final stages.','the-badger-ko-3.png','#badger-ko-signup'],
['Champions Hall','KO Challenge history, champions, unforgettable moments, feature matches, and full event replays.','champions-hall.png','/champions-hall']
];
const champions=[
 ['Zander Rasmussen','KO 1.6 Champion','zander-4.jpg'],['Charlie Wolfe','KO 1.2 Champion','matches-by-name-12-charlie-wolfe.png'],['Jason Harlan','KO 1.3 Champion','matches-by-name-11-jason-harlan.png'],['Gretchen Froelich','KO 1.4 Runner Up','ko-1-4-10.png'],['Lyle Goebel','KO 2.1 Champion','ko-2-1-11.png'],['Grey Siech','KO 3.0 Champion','matches-by-name-3-grey-siech-champion.png']
];
const gallery=[
 ['Broadcast Booth','booth.jpg'],['Venue Feature Table','thumbnail-img-9248.jpg'],['Varsity Club Diamond Room','thumbnail-img-9246.jpg'],['View From Booth','Booth View.jpeg'],['Challenge Chips','challenge-chips.jpg'],['Cheddar’s Table','cheddars-table.png']
];
const matchArchive=[
['KO 1.1 Finals','Mike Schultz vs. Al Holden','matches-by-name-2-1-1-finals.jpg','https://youtube.com/live/lNrcSRq71mo'],['Ultimate KO Challenge','Kenny Engichy vs. Rudy McGill','kenny-and-rudy-png.png','https://youtube.com/live/LR_ybag8LoA?feature=share'],['Ultimate KO Finals','Patrick Racette vs. Jeremy Fedkenheuer','ultimate-ko-10-ball-jeremy-fedkenheuer-vs-patrick-racette.png'],['KO Challenge Finals','Tim Stockinger vs. Tarek Hamdan','finals-1.jpg','https://youtube.com/live/Ar6Yckq_AYs?feature=share'],['KO 1.5 Finals','Julie Fleming • Damien Bettinger • Randy Thiry','ko-1-5-7-6-1.png','https://youtube.com/live/DQ8IHmruxjk']
];
const stats=[['Events & Series','KO Challenge • Masters • Breaking Point'],['Broadcast Style','Multi-camera, commentary, overlays'],['Core Venue','The Varsity Club • Oshkosh, WI'],['Mission','Grow Wisconsin Pool Through Media']];
const tournamentOptions = [
  {
    name: 'Badger KO',
    minFargo: 0,
    maxFargo: 625,
    description: 'Wisconsin residents only • $265 entry',
    signup: 'https://docs.google.com/forms/d/e/1FAIpQLSdkBlQjMkTC79hOz77RNq_OfT7RVbjccFdmoNPh_49YOLIcMg/viewform?usp=publish-editor'
  },

];
function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="sectionTitle">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

function Header(){
  return (
    <header className="nav">
      <nav style={{ marginLeft: 'auto' }}>
       <a href="/breaking-point">The Breaking Point</a>
        <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSdkBlQjMkTC79hOz77RNq_OfT7RVbjccFdmoNPh_49YOLIcMg/viewform?usp=publish-editor"
  target="_blank"
  rel="noopener noreferrer"
>
  Badger KO Signup
</a>
        <a href="/champions-hall">Champions Hall</a>
        <a href="#sponsors">Sponsors</a>
        <a href="#media">Media</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function BreakingPointPage() {
  return (
    <>
      <Header />

      <main className="wrap" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <SectionTitle
          eyebrow="The Breaking Point™"
          title="Meet The Contestants"
        >
          12 players. 12 stories. One survivor.
        </SectionTitle>
<div
  style={{
    background: 'linear-gradient(135deg, rgba(4, 49, 88, 0.95), rgba(3, 17, 31, 0.95))',
    border: '1px solid rgba(74, 195, 255, 0.45)',
    borderRadius: '24px',
    padding: '32px',
    marginBottom: '40px'
  }}
>
  <h2 style={{ marginTop: 0 }}>What Is The Breaking Point?</h2>

  <p>
    The Breaking Point is an original pool competition series created by
    Outer Points Productions. Twelve contestants face intense, original
    challenges designed to test far more than shot-making—including strategy,
    safety play, adaptability, decision-making, and composure under pressure.
  </p>

  <p style={{ marginBottom: 0 }}>
    Players are eliminated throughout the competition until only one survivor
    remains to become The Breaking Point champion.
  </p>
</div>
       <div className="breakingPointGrid">

  <div className="contestantCard">
    <img src={img('1-Bill Larson.png')} alt="Bill Larson" />
  </div>

  <a
    className="contestantCard videoCard"
    href="https://youtu.be/FVZqMQW5gGQ"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={img('2-Zander Rasmussen.png')} alt="Zander Rasmussen" />
    <span>WATCH ZANDER'S STORY ▶</span>
  </a>

  <div className="contestantCard">
    <img src={img('3-Derek Tauschek.png')} alt="Derek Tauschek" />
  </div>

  <a
    className="contestantCard videoCard"
    href="https://youtu.be/Ps4GlJhp6o8"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={img('4-Donny Bailey Jr..png')} alt="Donny Bailey Jr." />
    <span>WATCH DONNY'S STORY ▶</span>
  </a>

  <a
    className="contestantCard videoCard"
    href="https://youtu.be/TOTFRuguXPo"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={img('5-Tony Vierra.png')} alt="Tony Vierra" />
    <span>WATCH TONY'S STORY ▶</span>
  </a>

  <div className="contestantCard">
    <img src={img('6-Vincent Schroeder.png')} alt="Vincent Schroeder" />
  </div>

  <a
    className="contestantCard videoCard"
    href="https://youtu.be/2nsvG2LoeA4"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={img('7-Jeff Trentadue.png')} alt="Jeff Trentadue" />
    <span>WATCH JEFF'S STORY ▶</span>
  </a>

  <div className="contestantCard">
    <img src={img('8-Mike Benoy.png')} alt="Mike Benoy" />
  </div>

  <div className="contestantCard">
    <img src={img('9-Corey Cyert.png')} alt="Corey Cyert" />
  </div>

  <div className="contestantCard">
    <img src={img('10-JR Villegas.png')} alt="JR Villegas" />
  </div>

</div>

        <div style={{ marginTop: '40px' }}>
          <a className="btn" href="/">
            ← Back to Outer Points Productions
          </a>
        </div>
      </main>
    </>
  );
}
const koTournaments = [
  ['KO 1.1','1.1 Finals - Mike Schultz and Al Holden.png'],
  ['KO 1.2','1.2 Finals - Charlie Wolfe vs Mike Lamere.jpeg'],
  ['KO 1.3','1.3 Finals - Brad Royce and Jason Harlan.jpeg'],
  ['KO 1.4','1.4 Finals - Gretchen Froelich and Nick Sumnicht.png'],
  ['KO 1.5','ko-1-5-7-6-1.png'],
  ['KO 1.6','1.6 Finals - Zander Rasmussen Vs. Derek Tauschek.png'],
  ['KO 2.1','KO 2.1-8-Mike K. Vs Lyle G. (1).jpeg'],
  ['KO 3.0','3.0 Finals - Dan Vs. Grey.png'],
  ['Ultimate KO','Ultimate KO 10-Ball Jeremy Fedkenheuer Vs. Patrick Racette.png']
];
function ChampionsHallPage() {
  return (
    <>
      <Header />

      <main
        className="wrap"
        style={{ paddingTop: '60px', paddingBottom: '80px' }}
      >
        <SectionTitle
          eyebrow="Champions Hall"
          title="KO Challenge History, Champions & Big Moments"
        >
          The history of Outer Points Productions competition — champions,
          finalists, unforgettable moments, feature matches, and full event replays.
        </SectionTitle>

<h2 style={{ marginTop: '40px' }}>
  Select A KO Tournament
</h2>

<div className="koTournamentGrid">
  {koTournaments.map(([name,p]) =>
    <div
      className="koTournamentCard"
      key={name}
    >
      <img src={img(p)} alt={name} />
      <h3>{name}</h3>
    </div>
  )}
</div>

        <div style={{ marginTop: '50px' }}>
          <a className="btn" href="/">
            ← Back to Outer Points Productions
          </a>
        </div>

      </main>
    </>
  );
}
function App(){
 const [fargoInput, setFargoInput] = useState('');
 const [requestForm, setRequestForm] = useState({
  name: '',
  email: '',
  fargo: '',
  game: '',
  format: '',
  fargoRange: '',
  fieldSize: '',
  location: '',
  notes: ''
});
  useEffect(() => {
    if(window.location.pathname.includes('badger-ko-signup')){
      setTimeout(() => document.getElementById('badger-ko-signup')?.scrollIntoView({behavior:'smooth'}), 300);
    }
  },[]);

  if(window.location.pathname === '/breaking-point'){
    return <BreakingPointPage />;
  }
 if(window.location.pathname === '/champions-hall'){
  return <ChampionsHallPage />;
}

  return (
  <>
   <Header />
   
<section className="hero">
 <div className="heroBg"><img src={img('booth.jpg')}/></div><div className="heroShade"/>
 <div
  className="heroContent"
  style={{ transform: 'translateY(-100px)' }}
>
<div style={{
  display: 'flex',
  alignItems: 'center',
  gap: '30px',
  transform: 'translateY(-50px)',
 marginBottom: '-140px'
}}>
  <img
    src={img('opp-12.png')}
    alt="Outer Points Productions"
    style={{ width: '310px', height: 'auto' }}
  />
  <span
  style={{
    color: 'white',
    fontSize: '80px',
    fontWeight: '800',
    lineHeight: '1.2'
  }}
>
  Outer Points
  <br />
  Productions
</span>
</div><div className="pill">Live Pool Streaming • Tournament Media • Wisconsin Billiards</div><h1 style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>Pool Deserves an Even Bigger Stage. OPP Brings it to Life.</h1><p>Outer Points Productions creates professional live streams, player spotlights, tournament graphics, sponsor exposure, and high-energy billiards content for fans, players, venues, and brands.</p><div className="actions"><a className="btn primary" href="https://youtube.com/@outerpointsproductions" target="_blank"><Play size={18}/> Watch on YouTube</a></div></div>
 <div className="heroPanel"><img src={img('the-breaking-point-20-1.png')}/><h3>The Breaking Point™</h3><p>Original challenge-show pool content built by Outer Points Productions.</p></div>
</section>
<section className="stats">{stats.map(([a,b])=><div className="stat" key={a}><b>{a}</b><span>{b}</span></div>)}</section>
<section id="series" className="wrap">
  <SectionTitle eyebrow="Featured Programming" title="A Full Wisconsin Pool Media Network">
    From weekly feature matches to full tournament stories, OPP turns pool events into broadcast-ready entertainment.
  </SectionTitle>
<div className="cards3">
  {eventCards.map(([t, d, p, link]) => {
    const href = link || "#contact";

    return (
<article
  className="feature"
  key={t}
  onClick={() => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank");
    }
  }}
  style={{ cursor: "pointer" }}
>
        <img src={img(p)} />
        <div>
          <h3>{t}</h3>
          <p>{d}</p>
          <a
  href={href}
  target={href.startsWith("#") ? "_self" : "_blank"}
  rel="noopener noreferrer"
  onClick={(e) => e.stopPropagation()}
>
            {t === "The Badger KO" ? "Register Now" : "Learn more"} ›
          </a>
        </div>
      </article>
    );
  })}
</div>
</section>  
<section className="blueBand">
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '40px',
      flexWrap: 'nowrap'
    }}
  >

<div style={{ flex: '1 1 auto', minWidth: '600px' }}>
      <Trophy />

      <h2>The Breaking Point™</h2>

      <p>
        12 contestants. 1 survivor. Player profiles, original challenges,
        qualifier stories, and episode-driven pool entertainment.
      </p>

      <a
        className="btn"
        href="/breaking-point"
      >
        Enter The Breaking Point Hub
      </a>
    </div>

  <div
  style={{
    flex: '0 0 420px',
    marginLeft: '60px',
    marginRight: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
      <img
        src={img('the-breaking-point-20-1.png')}
        alt="The Breaking Point"
        style={{
          width: '100%',
          maxWidth: '420px',
          height: 'auto',
          display: 'block',
          marginLeft: 'auto',
          borderRadius: '16px'
        }}
      />
    </div>
     </div>
</section>

<section id="tournament-finder" className="wrap tournamentFinder">
  <SectionTitle
    eyebrow="Tournament Finder"
    title="Find Your Tournament"
  >
    Enter your FargoRate below to see which Outer Points Productions tournaments you qualify for.
  </SectionTitle>

  <div className="fargoFinderBox">
    <label htmlFor="fargoRate">Enter Your FargoRate</label>

    <input
      id="fargoRate"
      type="number"
      min="0"
      max="1000"
      placeholder="Example: 548"
      value={fargoInput}
      onChange={(e) => setFargoInput(e.target.value)}
    />
  </div>

  {fargoInput && (
    <div className="tournamentResults">
      {tournamentOptions
        .filter((tournament) => {
          const fargo = Number(fargoInput);
          return (
            fargo >= tournament.minFargo &&
            fargo <= tournament.maxFargo
          );
        })
        .map((tournament) => (
          <div
            className="tournamentFinderCard"
            key={tournament.name}
          >
            <p className="eyebrow">YOU QUALIFY</p>

            <h3>{tournament.name}</h3>

            <p>{tournament.description}</p>

            <div className="tournamentFargoRange">
              Fargo eligibility: {tournament.minFargo}–{tournament.maxFargo}
            </div>

            {tournament.signup !== '#' && (
              <a
                className="btn"
                href={tournament.signup}
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign Up
              </a>
            )}
          </div>
        ))}
    </div>
  )}
</section>
<section id="tournament-request" className="wrap tournamentRequest">
  <SectionTitle
    eyebrow="Tournament Request"
    title="Have an Idea for a Tournament?"
  >
    Don't see the tournament you're looking for? Tell us what you'd like to play,
    and help shape a future Outer Points Productions event.
  </SectionTitle>

  <div className="tournamentRequestBox">
  <h3>Build Your Tournament Idea</h3>

  <div className="requestFormGrid">

    <input
      type="text"
      placeholder="Your Name"
      value={requestForm.name}
      onChange={(e) =>
        setRequestForm({...requestForm, name: e.target.value})
      }
    />

    <input
      type="email"
      placeholder="Your Email"
      value={requestForm.email}
      onChange={(e) =>
        setRequestForm({...requestForm, email: e.target.value})
      }
    />

    <input
      type="number"
      placeholder="Your FargoRate"
      value={requestForm.fargo}
      onChange={(e) =>
        setRequestForm({...requestForm, fargo: e.target.value})
      }
    />

    <select
      value={requestForm.game}
      onChange={(e) =>
        setRequestForm({...requestForm, game: e.target.value})
      }
    >
      <option value="">Preferred Game</option>
      <option value="8-Ball">8-Ball</option>
      <option value="9-Ball">9-Ball</option>
      <option value="10-Ball">10-Ball</option>
      <option value="Mixed">Mixed</option>
      <option value="Other">Other</option>
    </select>

    <select
      value={requestForm.format}
      onChange={(e) =>
        setRequestForm({...requestForm, format: e.target.value})
      }
    >
      <option value="">Tournament Format</option>
      <option value="Singles">Singles</option>
     <option value="Singles Challenge Match">Single Challenge Match</option>
      <option value="Scotch Doubles">Scotch Doubles</option>
      <option value="Scotch Doubles Challenge Match">Scotch Doubles Challenge Match</option>
      <option value="Team">Team</option>
      <option value="Other">Other</option>
    </select>

    <input
      type="text"
      placeholder="Desired Fargo Cap / Range"
      value={requestForm.fargoRange}
      onChange={(e) =>
        setRequestForm({...requestForm, fargoRange: e.target.value})
      }
    />

  
  </div>

  <textarea
    placeholder="Tell us about the tournament you'd like to see..."
    value={requestForm.notes}
    onChange={(e) =>
      setRequestForm({...requestForm, notes: e.target.value})
    }
  />

  <button
    className="btn"
    type="button"
    onClick={() => {
      const subject = encodeURIComponent('OPP Tournament Request');

      const body = encodeURIComponent(
`TOURNAMENT REQUEST

Name: ${requestForm.name}
Email: ${requestForm.email}
FargoRate: ${requestForm.fargo}

Preferred Game: ${requestForm.game}
Format: ${requestForm.format}
Desired Fargo Cap / Range: ${requestForm.fargoRange}

Tournament Idea:
${requestForm.notes}`
      );

      window.location.href =
        `mailto:outerpointsproductions@gmail.com?subject=${subject}&body=${body}`;
    }}
  >
    Submit Tournament Request
  </button>
</div>
</section>
<section
  id="badger-ko-signup"
  className="signupSec"
  style={{
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.45fr) minmax(360px, 0.85fr)',
    gap: '28px',
    alignItems: 'start'
  }}
>
  <div className="signupArt">
  <img src={img('the-badger-ko-3.png')} />
</div><div className="signupCard">
    <p className="eyebrow">Player Registration</p>
    <h2>The Badger KO Signup</h2>
    <p className="signupIntro">Wisconsin residents only. 625 Fargo & under. Fill this out to get on the player interest/sign-up list. Entries will be sent to Outer Points Productions.</p>
 <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>

  <a
    className="btn"
    href="https://docs.google.com/document/d/1-uezJoeNYahkix_BBLT1I-1Edks8W-Ty8ttZeuKeRgc/edit?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Full Format & Rules
  </a>
  <a
  className="btn"
href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSTA0AHyVAc_iVVHDc76oA2l_LcXrwSqqG8likgG_Oe1OwHQ64VtFqNqjy0cG03JrcWrYbKCqcaHL1J/pubhtml?gid=527443326&single=true"
  target="_blank"
  rel="noopener noreferrer"
>
  View Current Player List
</a>

<a
  className="btn"
  href="https://docs.google.com/forms/d/e/1FAIpQLSdkBlQjMkTC79hOz77RNq_OfT7RVbjccFdmoNPh_49YOLIcMg/viewform?usp=publish-editor"
  target="_blank"
  rel="noopener noreferrer"
>
  Register for The Badger KO
</a>
<div className="badgerKoPlayerFeature">
  <img
    src={img('Badger KO Trading Cards.png')}
    alt="Roger Pregler - Badger KO Contestant"
  />
</div>
  

</div>
    </div>
   <div className="rulesBox">

  <h2>The Badger KO Information Center</h2>

  <h3>Tournament Overview</h3>
  <ul>
    <li>128 Player Field</li>
    <li>Wisconsin Residents Only</li>
    <li>625 Fargo & Under</li>
    <li>$265 Entry Fee</li>
    <li>Double Elimination Format</li>
    <li>Schedule Your Own Match Date & Time</li>
    <li>Player Auction or Side Pot Available</li>
    <li>Final 16 Live Streamed at The Varsity Club</li>
  </ul>

  <h3>Match Format</h3>
  <ul>
    <li>Best 2 out of 3 Sets</li>
    <li>Alternate Breaks</li>
  </ul>

  <h3>Set Format</h3>
  <ul>
    <li>Set 1 - 9-Ball - Race to 6</li>
    <li>Set 2 - 8-Ball - Race to 4</li>
    <li>Set 3 - 10-Ball - Race to 5</li>
  </ul>

  <h3>Handicap System</h3>
  <p>
    One game spot is awarded for every 50 Fargo points difference.
    The higher Fargo rated player must win 1 extra game per spot per set.
  </p>

  <h3>Awards & Prizes</h3>
  <ul>
    <li>$7,500 Champion Prize</li>
    <li>Trophies & Prizes for the Final 16</li>
    <li>Additional Awards Announced Throughout the Event</li>
  </ul>

  <h3>Match Scheduling</h3>
  <p>
    Players are responsible for scheduling their own matches with their opponents.
    Matches must be completed within the required round deadlines.
  </p>

  <h3>Live Stream Finals</h3>
  <p>
    The Final 16 players will advance to the live streamed championship stages
    at The Varsity Club in Oshkosh, Wisconsin.
  </p>

  <h3>Official Rules</h3>
  <p>
    For the complete rulebook and tournament policies, click the
    "View Full Format & Rules" button to the left.
  </p>

</div>


     
  
     

</section>
 


<section id="sponsors" className="sponsorSec">
  <SectionTitle
    eyebrow="Sponsor Network"
    title="Brands Backing Wisconsin Pool"
  >
Click on the sponsor logo to visit their website or Facebook page.
  </SectionTitle>

  <div className="sponsorGrid">
    {sponsors.map(([n,p,link]) =>
      <div
        className="sponsor"
        key={n}
        onClick={() => link && window.open(link, '_blank')}
        style={{ cursor: link ? 'pointer' : 'default' }}
      >
        <img src={img(p)} />
        <span>{n}</span>
      </div>
    )}
  </div>
</section>
<section id="merchandise" className="wrap merchandiseSection">
  <SectionTitle
    eyebrow="OPP Merchandise"
    title="Rep the Stream. Support Wisconsin Pool."
  >
    Official Outer Points Productions gear, event merchandise, and limited-edition apparel.
  </SectionTitle>

  <div className="merchGrid">

   <div className="merchCard">
  <img
    className="merchProductImage"
    src={img('OPP Jersey.png')}
    alt="Personalized Outer Points Productions Jersey"
  />

  <h3>Personalized OPP Jersey</h3>

  <div className="merchPrice">
    $70.00
    <span> + $5.00 shipping</span>
  </div>

  <p>
    Get your own personalized Outer Points Productions jersey with your name
    added to the back.
  </p>

  <a
    className="btn"
    href="mailto:outerpointsproductions@gmail.com?subject=OPP Personalized Jersey Order"
  >
    Order Your Jersey
  </a>
</div>

    <div className="merchCard">
      <div className="merchImagePlaceholder">
        Product Image
      </div>
      <h3>Badger KO Merchandise</h3>
      <p>Gear from the Badger KO Challenge.</p>
      <button className="btn" type="button">
        Coming Soon
      </button>
    </div>

    <div className="merchCard">
      <div className="merchImagePlaceholder">
        Product Image
      </div>
      <h3>The Breaking Point Merchandise</h3>
      <p>Official gear from The Breaking Point.</p>
      <button className="btn" type="button">
        Coming Soon
      </button>
    </div>

  </div>
</section>
<section id="media" className="wrap">
  <SectionTitle
    eyebrow="Media Center"
    title="The Production Behind The Game"
  >
    Show sponsors and venues what OPP production looks like.
  </SectionTitle>
 <div className="mediaGallery">
  {gallery.map(([title,p]) =>
    <div className="mediaGalleryCard" key={title}>
      <img src={img(p)} alt={title} />
      <span>{title}</span>
    </div>
  )}
</div>
</section>
<section className="wrap oppStudio">
  <SectionTitle
    eyebrow="OPP Studio"
    title="More Than a Stream"
  >
    Professional production built specifically for pool.
  </SectionTitle>

  <div className="oppStudioGrid">
    <div className="oppStudioItem">
      <Radio size={28} />
      <span>Live stream production</span>
    </div>

    <div className="oppStudioItem">
      <Camera size={28} />
      <span>Venue and feature table coverage</span>
    </div>

    <div className="oppStudioItem">
      <Users size={28} />
      <span>Player spotlights and graphics</span>
    </div>

    <div className="oppStudioItem">
      <Handshake size={28} />
      <span>Sponsor-focused promotion</span>
    </div>
  </div>

</section>
<section id="contact" className="contact"><img src={img('opp-12.png')}/><div><p className="eyebrow">Book Outer Points Productions</p><h2>Bring OPP to your event, venue, or brand.</h2><p>For sponsorships, featured matches, tournament coverage, The Breaking Point™, KO Challenge events, or venue partnerships, reach out to Outer Points Productions.</p><div className="actions"><a className="btn primary" href="mailto:outerpointsproductions@gmail.com"><Mail size={18}/> Email OPP</a><a className="btn" href="https://youtube.com/@outerpointsproductions" target="_blank"><Play size={18}/> YouTube Channel</a></div></div></section>
 <footer><span>Outer Points Productions</span><span>Live pool streaming • tournament media • Wisconsin billiards</span></footer></>);
}
createRoot(document.getElementById('root')).render(<App/>);
