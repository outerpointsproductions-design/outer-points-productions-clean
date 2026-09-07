import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Play, Trophy, Calendar, Users, Radio, Star, Mail, Camera, Handshake, ChevronRight } from 'lucide-react';
import './styles.css';

const A='/assets/';
const img=(n)=>A+n;
const sponsors=[
['JB Cases','3d-sponsor-logos-7-1-1.png','https://jbcases.com'] ,['American Family Insurance','amfam-1.png','https://www.amfam.com/agents/wisconsin/appleton/joseph-porter'],['Avenue Auto','avenue-auto.png','https://www.avenueautoofoshkosh.com'],['Brave Billiards','brave-1.png','https://www.brave-billiards.com'],['BridgeMates','bridgemates-1.png','FACEBOOK-LINK-HERE'],,['Conscious Carnivore','conscious-1.png','https://conscious-carnivore.com'],['DKM Carpentry','dkm-1.png'],['Dumper Dan’s','dumper-1.png','https://www.dumperdan.com/'],['El Poblano','el-pablano-1.png','https://elpoblanogrill.com/'],['Home Sweet Home','home-sweet-home-1.png','https://www.homes.com/real-estate-agents/bobbi-jo-kunz/lsy5z3d/'],,['Johnko Express','johnko-1.png','https://www.johnkoexpress.com/'],,['LK Painting & Staining','lk-1.png'],['Midstate Amusement Games','midstate-1.png','https://midstateamusements.com'],['J. Pechauer Custom Cues','pechauer.png','https://pechauer.com/'],,['Sorce Martial Arts','sorce.png','https://sorcemartialarts.com/'],,['Strong Knife Company','strong.png'],['The Corner Pocket','the-corner-pocket.png','FACEBOOK-LINK-HERE'],,['Tovar Construction','tovar.png','https://tovarconstructionllc.com/'],,['The Varsity Club','varsity-3.png','https://thevarsitycluboshkosh.com/'],,['Vince D Tattoos','vincent.png','https://gallery83tattoo.com/'],,['WIBHOF','wibhof-5.png','https://wibhof.org'],['WPPS','wpps.png','FACEBOOK-LINK'],,['Onboard Sportswear','onboard-logo-2.png','https://onboardsportswear.com']
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
 ['Broadcast Booth','booth.jpg'],['Venue Feature Table','thumbnail-img-9248.jpg'],['Varsity Club Diamond Room','thumbnail-img-9246.jpg'],['View From Booth','view-from-booth.jpg'],['Challenge Chips','challenge-chips.jpg'],['Cheddar’s Table','cheddars-table.png']
];
const matchArchive=[
['KO 1.1 Finals','Mike Schultz vs. Al Holden','matches-by-name-2-1-1-finals.jpg','https://youtube.com/live/lNrcSRq71mo'],['Ultimate KO Challenge','Kenny Engichy vs. Rudy McGill','kenny-and-rudy-png.png','https://youtube.com/live/LR_ybag8LoA?feature=share'],['Ultimate KO Finals','Patrick Racette vs. Jeremy Fedkenheuer','ultimate-ko-10-ball-jeremy-fedkenheuer-vs-patrick-racette.png'],['KO Challenge Finals','Tim Stockinger vs. Tarek Hamdan','finals-1.jpg','https://youtube.com/live/Ar6Yckq_AYs?feature=share'],['KO 1.5 Finals','Julie Fleming • Damien Bettinger • Randy Thiry','ko-1-5-7-6-1.png','https://youtube.com/live/DQ8IHmruxjk']
];
const stats=[['Events & Series','KO Challenge • Masters • Breaking Point'],['Broadcast Style','Multi-camera, commentary, overlays'],['Core Venue','The Varsity Club • Oshkosh, WI'],['Mission','Grow Wisconsin pool through media']];
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
      <a className="brand" href="#top">
        <img src={img('opp-12.png')} />
        <span>Outer Points Productions</span>
      </a>

      <nav>
        <a href="#series">Series</a>
       <a href="/breaking-point">The Breaking Point</a>
        <a href="https://signup.outerpointsproductions.com" target="_blank" rel="noopener noreferrer">
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
 <div className="heroContent"><img className="heroLogo" src={img('opp-12.png')}/><div className="pill">Live Pool Streaming • Tournament Media • Wisconsin Billiards</div><h1>Pool deserves an even bigger stage. OPP brings it to life.</h1><p>Outer Points Productions creates professional live streams, player spotlights, tournament graphics, sponsor exposure, and high-energy billiards content for fans, players, venues, and brands.</p><div className="actions"><a className="btn primary" href="https://youtube.com/@outerpointsproductions" target="_blank"><Play size={18}/> Watch on YouTube</a></div></div>
 <div className="heroPanel"><img src={img('the-breaking-point-20-1.png')}/><h3>The Breaking Point™</h3><p>Original challenge-show pool content built by Outer Points Productions.</p></div>
</section>
<section className="stats">{stats.map(([a,b])=><div className="stat" key={a}><b>{a}</b><span>{b}</span></div>)}</section>
<section id="series" className="wrap">
  <SectionTitle eyebrow="Featured Programming" title="A full Wisconsin pool media network">
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
    <p className="signupIntro">Wisconsin residents only. 625 Fargo & under. Fill this out to get on the player interest/sign-up list. Entries will be sent to Outer Points Productions.</p><div style={{marginBottom:'20px'}}>
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
    "View Full Format & Rules" button above.
  </p>

</div>


     
  
     

</section>
 



<section id="media" className="wrap"><SectionTitle eyebrow="Media Center" title="Behind the booth, around the room, and on the stream">Show sponsors and venues what OPP production looks like from the inside.</SectionTitle><div className="gallery">{gallery.map(([t,p])=><figure key={t}><img src={img(p)}/><figcaption>{t}</figcaption></figure>)}</div></section>
<section id="sponsors" className="sponsorSec"><SectionTitle eyebrow="Sponsor Network" title="Brands backing Wisconsin pool">OPP gives sponsors recurring exposure through live streams, social posts, event graphics, player features, and tournament coverage.</SectionTitle><div className="sponsorGrid">{sponsors.map(([n,p,link])=><div
  className="sponsor"
  key={n}
  onClick={() => link && window.open(link, '_blank')}
  style={{ cursor: link ? 'pointer' : 'default' }}
><img src={img(p)}/><span>{n}</span></div>)}</div></section>
<section className="wrap split"><div><SectionTitle eyebrow="OPP Studio" title="Built for broadcast nights"><p>Multi-camera coverage, commentary-driven production, custom overlays, player graphics, Stream Deck operation, and venue-friendly event coverage.</p></SectionTitle><ul className="checks"><li><Radio/> Live stream production</li><li><Camera/> Venue and feature table coverage</li><li><Users/> Player spotlights and graphics</li><li><Handshake/> Sponsor-focused promotion</li></ul></div><img className="studio" src={img('view-from-booth.jpg')}/></section>
<section id="contact" className="contact"><img src={img('opp-12.png')}/><div><p className="eyebrow">Book Outer Points Productions</p><h2>Bring OPP to your event, venue, or brand.</h2><p>For sponsorships, featured matches, tournament coverage, The Breaking Point™, KO Challenge events, or venue partnerships, reach out to Outer Points Productions.</p><div className="actions"><a className="btn primary" href="mailto:outerpointsproductions@gmail.com"><Mail size={18}/> Email OPP</a><a className="btn" href="https://youtube.com/@outerpointsproductions" target="_blank"><Play size={18}/> YouTube Channel</a></div></div></section>
 <footer><span>Outer Points Productions</span><span>Live pool streaming • tournament media • Wisconsin billiards</span></footer></>);
createRoot(document.getElementById('root')).render(<App/>);
