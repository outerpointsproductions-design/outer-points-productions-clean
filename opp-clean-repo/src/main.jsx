import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Play, Trophy, Calendar, Users, Radio, Star, Mail, Camera, Handshake, ChevronRight } from 'lucide-react';
import './styles.css';

const A='/assets/';
const img=(n)=>A+n;
const sponsors=[
 ['JB Cases','3d-sponsor-logos-7-1-1.png'],['American Family Insurance','amfam-1.png'],['Avenue Auto','avneue-1.png'],['BilletSpin EDC','billetspin-1.png'],['Brave Billiards','brave-1.png'],['BridgeMates','bridgemates-1.png'],['Conscious Carnivore','conscious-1.png'],['DKM Carpentry','dkm-1.png'],['Dumper Dan’s','dumper-1.png'],['El Poblano','el-pablano-1.png'],['Home Sweet Home','home-sweet-home-1.png'],['Johnko Express','johnko-1.png'],['LK Painting & Staining','lk-1.png'],['Midstate Amusement Games','midstate-1.png'],['J. Pechauer Custom Cues','pechauer.png'],['Sorce Martial Arts','sorce.png'],['Strong Knife Company','strong.png'],['The Corner Pocket','the-corner-pocket.png'],['Tovar Construction','tovar.png'],['The Varsity Club','varsity-3.png'],['Vince D Tattoos','vincent.png'],['WIBHOF','wibhof-5.png'],['WPPS','wpps.png'],['Onboard Sportswear','onboard-logo-2.png']
];
const eventCards=[
 ['The Breaking Point™','12 contestants. 1 survivor. High-pressure original pool challenges built for streaming.','the-breaking-point-21-2.png','#contact'],
 ['The Badger KO','Wisconsin residents, serious Fargo caps, big money, schedule-your-own match dates, and live final stages.','the-badger-ko-3.png','https://signup.outerpointsproductions.com'],
 ['KO Masters Series','Feature matches, big Fargo numbers, studio-style graphics, and premium live stream nights.','2-j-fed-vs-dan-moser.png','#contact']
];
const champions=[
 ['Zander Rasmussen','KO 1.6 Champion','zander-4.jpg'],['Charlie Wolfe','KO 1.2 Champion','matches-by-name-12-charlie-wolfe.png'],['Jason Harlan','KO 1.3 Champion','matches-by-name-11-jason-harlan.png'],['Gretchen Froelich','KO 1.4 Runner Up','ko-1-4-10.png'],['Lyle Goebel','KO 2.1 Champion','ko-2-1-11.png'],['Grey Siech','KO 3.0 Champion','matches-by-name-3-grey-siech-champion.png']
];
const gallery=[
 ['Broadcast Booth','booth.jpg'],['Venue Feature Table','thumbnail-img-9248.jpg'],['Varsity Club Diamond Room','thumbnail-img-9246.jpg'],['View From Booth','view-from-booth.jpg'],['Challenge Chips','challenge-chips.jpg'],['Cheddar’s Table','cheddars-table.png']
];
const matchArchive=[
 ['KO 1.1 Finals','Mike Schultz vs. Al Holden','matches-by-name-2-1-1-finals.jpg'],['Ultimate KO Challenge','Kenny Engichy vs. Rudy McGill','kenny-and-rudy-png.png'],['Ultimate KO Finals','Patrick Racette vs. Jeremy Fedkenheuer','ultimate-ko-10-ball-jeremy-fedkenheuer-vs-patrick-racette.png'],['KO Challenge Finals','Tim Stockinger vs. Tarek Hamdan','finals-1.jpg'],['KO 1.5 Finals','Julie Fleming • Damien Bettinger • Randy Thiry','ko-1-5-7-6-1.png']
];
const stats=[['Events & Series','KO Challenge • Masters • Breaking Point'],['Broadcast Style','Multi-camera, commentary, overlays'],['Core Venue','The Varsity Club • Oshkosh, WI'],['Mission','Grow Wisconsin pool through media']];
function Header(){
  return (
    <header className="nav">
      <a className="brand" href="#top">
        <img src={img('opp-12.png')} />
        <span>Outer Points Productions</span>
      </a>

      <nav>
        <a href="#series">Series</a>
        <a href="https://signup.outerpointsproductions.com" target="_blank" rel="noopener noreferrer">
          Badger KO Signup
        </a>
        <a href="#champions">Champions</a>
        <a href="#sponsors">Sponsors</a>
        <a href="#media">Media</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
function App(){useEffect(()=>{if(window.location.pathname.includes('badger-ko-signup')){setTimeout(()=>document.getElementById('badger-ko-signup')?.scrollIntoView({behavior:'smooth'}),300)}},[]);return <div id="top"><Header/><main>
<section className="hero">
 <div className="heroBg"><img src={img('booth.jpg')}/></div><div className="heroShade"/>
 <div className="heroContent"><img className="heroLogo" src={img('opp-12.png')}/><div className="pill">Live Pool Streaming • Tournament Media • Wisconsin Billiards</div><h1>Pool deserves an even bigger stage. OPP brings it to life.</h1><p>Outer Points Productions creates professional live streams, player spotlights, tournament graphics, sponsor exposure, and high-energy billiards content for fans, players, venues, and brands.</p><div className="actions"><a className="btn primary" href="https://youtube.com/@outerpointsproductions" target="_blank"><Play size={18}/> Watch on YouTube</a><a className="btn" href="#contact"><Mail size={18}/> Book OPP</a></div></div>
 <div className="heroPanel"><img src={img('the-breaking-point-20-1.png')}/><h3>The Breaking Point™</h3><p>Original challenge-show pool content built by Outer Points Productions.</p></div>
</section>
<section className="stats">{stats.map(([a,b])=><div className="stat" key={a}><b>{a}</b><span>{b}</span></div>)}</section>
<section id="series" className="wrap">
  <SectionTitle eyebrow="Featured Programming" title="A full Wisconsin pool media network">
    From weekly feature matches to full tournament stories, OPP turns pool events into broadcast-ready entertainment.
  </SectionTitle>
<div className="cards3">
  {eventCards.map(([t, d, p, link]) => {
    const href = t === "The Badger KO" ? "https://signup.outerpointsproductions.com" : link || "#contact";

    return (
      <article className="feature" key={t} onClick={() => window.open(href, "_blank")} style={{ cursor: "pointer" }}>
        <img src={img(p)} />
        <div>
          <h3>{t}</h3>
          <p>{d}</p>
          <a href={href} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            {t === "The Badger KO" ? "Register Now" : "Learn more"} ›
          </a>
        </div>
      </article>
    );
  })}
</div>
</section>  
<section className="blueBand"><div><Trophy/><h2>The Breaking Point™</h2><p>12 contestants. 1 survivor. Player profiles, original challenges, qualifier stories, and episode-driven pool entertainment.</p></div><img src={img('1-bill-larson.png')}/></section>
<section id="badger-ko-signup" className="signupSec">
  <div className="signupArt"><img src={img('the-badger-ko-3.png')}/></div>
  <div className="signupCard">
    <p className="eyebrow">Player Registration</p>
    <h2>The Badger KO Signup</h2>
    <p className="signupIntro">Wisconsin residents only. 625 Fargo & under. Fill this out to get on the player interest/sign-up list. Entries will be sent to Outer Points Productions.</p>
    <form className="signupForm" action="https://formsubmit.co/outerpointsproductions@gmail.com" method="POST">
      <input type="hidden" name="_subject" value="New Badger KO Player Signup" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://signup.outerpointsproductions.com" />
      <div className="formGrid">
        <label>Player Name<input required name="Player Name" placeholder="First and last name" /></label>
        <label>Email<input required type="email" name="Email" placeholder="player@email.com" /></label>
        <label>Phone<input name="Phone" placeholder="Cell number" /></label>
        <label>City / Hometown<input name="City / Hometown" placeholder="City, WI" /></label>
        <label>Fargo Rating<input required name="Fargo Rating" placeholder="Example: 596" /></label>
        <label>Fargo Robustness<input name="Fargo Robustness" placeholder="Example: 400+" /></label>
        <label>Preferred Pool Room<input name="Preferred Pool Room" placeholder="Home room / venue" /></label>
        <label>Side Pot / Auction Interest<select name="Side Pot / Auction Interest"><option>Yes</option><option>No</option><option>Maybe</option></select></label>
      </div>
      <div className="checkLine"><input required type="checkbox" name="Wisconsin Resident Confirmed" value="Yes" /> <span>I confirm I am a Wisconsin resident.</span></div>
      <div className="checkLine"><input required type="checkbox" name="625 Fargo and Under Confirmed" value="Yes" /> <span>I confirm I am 625 Fargo or under.</span></div>
      <label className="fullLabel">Notes / Questions<textarea name="Notes" rows="4" placeholder="Anything OPP should know?"></textarea></label>
      <button className="btn primary submitBtn" type="submit">Submit Badger KO Signup</button>
      <p className="formNote">First time this form is used, FormSubmit may send a confirmation email to outerpointsproductions@gmail.com to activate submissions.</p>
    </form>
  </div>
</section>

<section id="champions" className="wrap"><SectionTitle eyebrow="Champions Hall" title="KO Challenge history, winners, and big moments">A visual archive for the players who made the walk, handled the pressure, and earned the title.</SectionTitle><div className="champGrid">{champions.map(([n,t,p])=><article className="champ" key={n}><img src={img(p)}/><div><b>{n}</b><span>{t}</span></div></article>)}</div></section>
<section className="wrap"><SectionTitle eyebrow="Match Center" title="Feature matches and event archive">Promotional artwork, match previews, finals nights, and replay-ready event cards.</SectionTitle><div className="archive">{matchArchive.map(([t,s,p])=><article className="archiveCard" key={t}><img src={img(p)}/><div><b>{t}</b><span>{s}</span></div></article>)}</div></section>
<section id="media" className="wrap"><SectionTitle eyebrow="Media Center" title="Behind the booth, around the room, and on the stream">Show sponsors and venues what OPP production looks like from the inside.</SectionTitle><div className="gallery">{gallery.map(([t,p])=><figure key={t}><img src={img(p)}/><figcaption>{t}</figcaption></figure>)}</div></section>
<section id="sponsors" className="sponsorSec"><SectionTitle eyebrow="Sponsor Network" title="Brands backing Wisconsin pool">OPP gives sponsors recurring exposure through live streams, social posts, event graphics, player features, and tournament coverage.</SectionTitle><div className="sponsorGrid">{sponsors.map(([n,p])=><div className="sponsor" key={n}><img src={img(p)}/><span>{n}</span></div>)}</div></section>
<section className="wrap split"><div><SectionTitle eyebrow="OPP Studio" title="Built for broadcast nights"><p>Multi-camera coverage, commentary-driven production, custom overlays, player graphics, Stream Deck operation, and venue-friendly event coverage.</p></SectionTitle><ul className="checks"><li><Radio/> Live stream production</li><li><Camera/> Venue and feature table coverage</li><li><Users/> Player spotlights and graphics</li><li><Handshake/> Sponsor-focused promotion</li></ul></div><img className="studio" src={img('view-from-booth.jpg')}/></section>
<section id="contact" className="contact"><img src={img('opp-12.png')}/><div><p className="eyebrow">Book Outer Points Productions</p><h2>Bring OPP to your event, venue, or brand.</h2><p>For sponsorships, featured matches, tournament coverage, The Breaking Point™, KO Challenge events, or venue partnerships, reach out to Outer Points Productions.</p><div className="actions"><a className="btn primary" href="mailto:outerpointsproductions@gmail.com"><Mail size={18}/> Email OPP</a><a className="btn" href="https://youtube.com/@outerpointsproductions" target="_blank"><Play size={18}/> YouTube Channel</a></div></div></section>
</main><footer><span>Outer Points Productions</span><span>Live pool streaming • tournament media • Wisconsin billiards</span></footer></div>}
createRoot(document.getElementById('root')).render(<App/>);
