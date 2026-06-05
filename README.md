<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>48 Coachs en Amérique – Ultimate League</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --c1:#7B2FBE; --c2:#F5C842; --c3:#E8432D; --c4:#3A86FF;
  --c5:#06D6A0; --c6:#FF6B35; --c7:#2EC4B6; --c8:#9BF542;
  --bg:#0A0A0F; --bg2:#12121C; --bg3:#1A1A28;
  --border:rgba(255,255,255,0.08); --text:#F0F0FF; --muted:#7070A0;
  --green:#22C55E; --red:#EF4444;
}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:'DM Sans',sans-serif;min-height:100vh;overflow-x:hidden}

/* ── BACKGROUND BLOBS ── */
.bg-blobs{position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden}
.blob{position:absolute;border-radius:50%;filter:blur(80px);opacity:.12}
.blob1{width:500px;height:500px;background:var(--c1);top:-100px;left:-100px;animation:blobmove1 12s ease-in-out infinite}
.blob2{width:400px;height:400px;background:var(--c3);top:30%;right:-80px;animation:blobmove2 15s ease-in-out infinite}
.blob3{width:350px;height:350px;background:var(--c4);bottom:10%;left:20%;animation:blobmove3 18s ease-in-out infinite}
.blob4{width:300px;height:300px;background:var(--c5);bottom:-80px;right:30%;animation:blobmove1 20s ease-in-out infinite reverse}
@keyframes blobmove1{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(60px,40px) scale(1.1)}}
@keyframes blobmove2{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-40px,60px) scale(1.08)}}
@keyframes blobmove3{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(50px,-30px) scale(1.12)}}

.app{position:relative;z-index:1;max-width:920px;margin:0 auto;padding:0 16px 100px}

/* ── HEADER ── */
.header{padding:24px 0 20px;border-bottom:1px solid var(--border);margin-bottom:24px}
.header-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
.logo-area{display:flex;align-items:center;gap:14px}
.logo-badge{
  width:56px;height:56px;border-radius:14px;overflow:hidden;
  background:linear-gradient(135deg,var(--c1),#4A1890);
  display:flex;align-items:center;justify-content:center;
  box-shadow:0 4px 20px rgba(123,47,190,0.5);
  flex-shrink:0;
}
.logo-badge svg{width:36px;height:36px}
.logo-text{}
.logo-name{font-family:'Bebas Neue',sans-serif;font-size:22px;letter-spacing:3px;
  background:linear-gradient(135deg,var(--c2),var(--c6));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1}
.logo-sub{font-size:11px;color:var(--muted);letter-spacing:2px;margin-top:2px}
.live-pill{display:flex;align-items:center;gap:7px;background:rgba(34,197,94,0.1);
  border:1px solid rgba(34,197,94,0.3);border-radius:100px;padding:7px 16px;
  font-size:12px;color:var(--green);font-weight:700;letter-spacing:1px}
.live-dot{width:7px;height:7px;background:var(--green);border-radius:50%;animation:pulse 1.5s infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.3;transform:scale(.7)}}

/* COLOR STRIP */
.color-strip{display:flex;height:5px;border-radius:100px;overflow:hidden;gap:2px}
.cs{flex:1;border-radius:100px}

/* ── NAV ── */
.nav{display:flex;gap:3px;margin-bottom:24px;background:var(--bg2);border-radius:14px;padding:5px}
.nav-btn{flex:1;padding:11px 4px;border:none;border-radius:10px;cursor:pointer;
  font-family:'Bebas Neue',sans-serif;font-size:17px;letter-spacing:1.5px;
  background:transparent;color:var(--muted);transition:all .25s;position:relative;overflow:hidden}
.nav-btn.active{background:linear-gradient(135deg,var(--c1),#5B1F9E);color:#fff;
  box-shadow:0 4px 16px rgba(123,47,190,0.4)}
.nav-btn:hover:not(.active){color:var(--text);background:var(--bg3)}

/* ── SECTION TITLE ── */
.section-title{font-family:'Bebas Neue',sans-serif;font-size:22px;letter-spacing:2px;
  color:var(--c2);margin-bottom:18px;display:flex;align-items:center;gap:12px}
.section-title::after{content:'';flex:1;height:1px;background:var(--border)}

/* ── GROUP TABS ── */
.group-tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:20px}
.gtab{padding:7px 15px;border-radius:10px;border:1px solid var(--border);
  background:var(--bg2);color:var(--muted);cursor:pointer;
  font-family:'Bebas Neue',sans-serif;font-size:19px;letter-spacing:1px;transition:all .2s}
.gtab:hover:not(.active){border-color:var(--c2);color:var(--c2)}

/* Each group tab gets a unique active color */
.gtab[data-g="A"].active{background:#E8432D;border-color:#E8432D;color:#fff}
.gtab[data-g="B"].active{background:#3A86FF;border-color:#3A86FF;color:#fff}
.gtab[data-g="C"].active{background:#7B2FBE;border-color:#7B2FBE;color:#fff}
.gtab[data-g="D"].active{background:#06D6A0;border-color:#06D6A0;color:#000}
.gtab[data-g="E"].active{background:#FF6B35;border-color:#FF6B35;color:#fff}
.gtab[data-g="F"].active{background:#F5C842;border-color:#F5C842;color:#000}
.gtab[data-g="G"].active{background:#2EC4B6;border-color:#2EC4B6;color:#000}
.gtab[data-g="H"].active{background:#9BF542;border-color:#9BF542;color:#000}
.gtab[data-g="I"].active{background:#E8432D;border-color:#E8432D;color:#fff}
.gtab[data-g="J"].active{background:#3A86FF;border-color:#3A86FF;color:#fff}
.gtab[data-g="K"].active{background:#FF6B35;border-color:#FF6B35;color:#fff}
.gtab[data-g="L"].active{background:#7B2FBE;border-color:#7B2FBE;color:#fff}

/* ── GROUP CARD ── */
.group-card{background:var(--bg2);border:1px solid var(--border);border-radius:16px;overflow:hidden;margin-bottom:20px}
.group-header{padding:16px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:14px;position:relative;overflow:hidden}
.group-header::before{content:'';position:absolute;inset:0;opacity:.08}
.gh-A::before{background:linear-gradient(135deg,#E8432D,transparent)}
.gh-B::before{background:linear-gradient(135deg,#3A86FF,transparent)}
.gh-C::before{background:linear-gradient(135deg,#7B2FBE,transparent)}
.gh-D::before{background:linear-gradient(135deg,#06D6A0,transparent)}
.gh-E::before{background:linear-gradient(135deg,#FF6B35,transparent)}
.gh-F::before{background:linear-gradient(135deg,#F5C842,transparent)}
.gh-G::before{background:linear-gradient(135deg,#2EC4B6,transparent)}
.gh-H::before{background:linear-gradient(135deg,#9BF542,transparent)}
.gh-I::before{background:linear-gradient(135deg,#E8432D,transparent)}
.gh-J::before{background:linear-gradient(135deg,#3A86FF,transparent)}
.gh-K::before{background:linear-gradient(135deg,#FF6B35,transparent)}
.gh-L::before{background:linear-gradient(135deg,#7B2FBE,transparent)}
.group-letter{font-family:'Bebas Neue',sans-serif;font-size:44px;line-height:1;position:relative;z-index:1}
.gl-A{color:#E8432D}.gl-B{color:#3A86FF}.gl-C{color:#7B2FBE}.gl-D{color:#06D6A0}
.gl-E{color:#FF6B35}.gl-F{color:#F5C842}.gl-G{color:#2EC4B6}.gl-H{color:#9BF542}
.gl-I{color:#E8432D}.gl-J{color:#3A86FF}.gl-K{color:#FF6B35}.gl-L{color:#7B2FBE}
.group-teams{font-size:13px;color:var(--muted);line-height:1.7;position:relative;z-index:1}
.group-teams b{color:var(--text)}

/* ── MATCH ROW ── */
.match-row{display:grid;grid-template-columns:65px 1fr 82px 1fr 58px;align-items:center;gap:8px;padding:13px 20px;border-bottom:1px solid var(--border);transition:background .15s}
.match-row:last-child{border-bottom:none}
.match-row:hover{background:rgba(255,255,255,.025)}
.match-date{font-size:11px;color:var(--muted);letter-spacing:.5px}
.match-home{font-size:13px;font-weight:500;text-align:right}
.match-away{font-size:13px;font-weight:500}
.match-score{text-align:center;font-family:'Bebas Neue',sans-serif;font-size:20px;letter-spacing:2px;background:var(--bg3);border-radius:8px;padding:5px 0;font-weight:400}
.match-score.has-score{color:var(--c2)}
.match-score.pending{color:var(--muted);font-size:14px;letter-spacing:1px}
.match-status{font-size:11px;color:var(--muted);text-align:right}
.match-status.done{color:var(--green)}

/* ── RANKING ── */
.rank-visual{border-radius:16px;overflow:hidden;margin-bottom:16px;position:relative;min-height:200px;display:flex;align-items:center;justify-content:center;background:var(--bg2);border:1px solid var(--border)}
.rank-visual-inner{position:absolute;inset:0;background-size:cover;background-position:center;border-radius:16px}
.rank-visual-overlay{position:absolute;inset:0;background:linear-gradient(135deg,rgba(10,10,15,.7),rgba(123,47,190,.4));border-radius:16px}
.rank-visual-content{position:relative;z-index:2;text-align:center;padding:32px 20px}
.rank-visual-day{font-size:11px;letter-spacing:3px;color:rgba(255,255,255,.6);text-transform:uppercase;margin-bottom:6px}
.rank-visual-title{font-family:'Bebas Neue',sans-serif;font-size:36px;letter-spacing:3px;
  background:linear-gradient(135deg,var(--c2),var(--c6));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1.1}
.rank-visual-sub{font-size:13px;color:rgba(255,255,255,.5);margin-top:8px}
.rank-visual-logo{font-family:'Bebas Neue',sans-serif;font-size:13px;letter-spacing:4px;
  color:rgba(255,255,255,.35);margin-top:12px}

/* Color bar for ranking */
.rank-colorbar{display:flex;height:4px;margin-bottom:20px;border-radius:100px;overflow:hidden;gap:1px}
.rcb{flex:1}

.rank-table{width:100%;border-collapse:collapse}
.rank-table th{font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--muted);
  font-weight:600;padding:10px 16px;text-align:left;border-bottom:1px solid var(--border)}
.rank-table td{padding:11px 16px;border-bottom:1px solid rgba(255,255,255,.035);font-size:14px;vertical-align:middle}
.rank-table tr:hover td{background:rgba(255,255,255,.02)}
.rank-badge{width:34px;height:34px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;font-size:15px}
.r1{background:linear-gradient(135deg,#FFE27A,#C9963A);color:#000}
.r2{background:linear-gradient(135deg,#E8E8E8,#9E9E9E);color:#000}
.r3{background:linear-gradient(135deg,#CD7F32,#7B3F00);color:#fff}
.rx{background:var(--bg3);color:var(--muted)}
.coach-name{font-weight:600;color:var(--text);font-size:14px}
.coach-team{font-size:12px;color:var(--muted);margin-top:1px}
.pts-wrap{display:flex;align-items:center;justify-content:flex-end;gap:10px}
.pts-bar-bg{width:72px;height:5px;background:var(--bg3);border-radius:3px}
.pts-bar{height:100%;border-radius:3px;background:linear-gradient(90deg,var(--c1),var(--c2));transition:width .6s}
.pts-num{font-family:'Bebas Neue',sans-serif;font-size:24px;
  background:linear-gradient(135deg,var(--c2),var(--c6));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  min-width:32px;text-align:right}
.q32-sep td{padding:6px 16px;background:rgba(123,47,190,.08);font-size:10px;
  color:var(--c1);letter-spacing:2px;text-transform:uppercase;
  border-top:2px solid rgba(123,47,190,.35);border-bottom:none}

/* ── ADMIN FAB ── */
.admin-fab{position:fixed;bottom:24px;right:24px;width:54px;height:54px;border-radius:50%;
  background:linear-gradient(135deg,var(--c1),#5B1F9E);border:none;cursor:pointer;
  font-size:22px;box-shadow:0 4px 24px rgba(123,47,190,.5);
  display:flex;align-items:center;justify-content:center;
  transition:transform .2s,box-shadow .2s;z-index:100}
.admin-fab:hover{transform:scale(1.1);box-shadow:0 6px 32px rgba(123,47,190,.7)}

/* ── MODAL ── */
.modal-bg{display:none;position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.8);
  backdrop-filter:blur(8px);align-items:center;justify-content:center;padding:20px}
.modal-bg.open{display:flex}
.modal-box{background:var(--bg2);border:1px solid rgba(123,47,190,.3);border-radius:20px;
  width:100%;max-width:680px;max-height:92vh;overflow-y:auto;padding:28px;
  box-shadow:0 20px 60px rgba(0,0,0,.6)}
.modal-title{font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:2px;
  background:linear-gradient(135deg,var(--c2),var(--c6));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  margin-bottom:22px}

/* PW */
.pw-wrap{display:flex;flex-direction:column;align-items:center;gap:14px}
.pw-input{padding:13px 20px;border-radius:12px;border:1px solid var(--border);
  background:var(--bg3);color:var(--text);font-size:18px;width:100%;max-width:280px;
  text-align:center;letter-spacing:5px}
.pw-input:focus{outline:none;border-color:var(--c1)}
.pw-error{color:var(--red);font-size:13px;display:none}
.pw-error.show{display:block}

/* ADMIN TABS */
.admin-tabs{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:20px}
.admin-tab{padding:6px 12px;border-radius:8px;border:1px solid var(--border);
  background:transparent;color:var(--muted);cursor:pointer;
  font-family:'Bebas Neue',sans-serif;font-size:14px;letter-spacing:1px;transition:all .2s}
.admin-tab.active{background:rgba(123,47,190,.2);border-color:var(--c1);color:var(--c2)}

/* INPUTS */
.small-label{font-size:11px;color:var(--muted);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:10px}
.coach-row-edit{display:grid;grid-template-columns:26px 1fr 1fr 66px;gap:7px;align-items:center;margin-bottom:7px}
.coach-row-edit input,.score-input,.visual-input{padding:8px 10px;border-radius:8px;
  border:1px solid var(--border);background:var(--bg3);color:var(--text);
  font-family:'DM Sans',sans-serif;font-size:13px;width:100%}
.coach-row-edit input:focus,.score-input:focus,.visual-input:focus{outline:none;border-color:var(--c1)}
.pts-edit{text-align:center;font-family:'Bebas Neue',sans-serif;font-size:18px;color:var(--c2)}
.score-row{display:flex;gap:10px;align-items:center;margin-bottom:9px}
.score-label{flex:1;font-size:13px;color:var(--text)}
.score-input{width:82px;text-align:center;flex-shrink:0}

/* VISUAL ADMIN */
.visual-admin{display:flex;flex-direction:column;gap:12px}
.visual-admin label{font-size:13px;color:var(--text);display:block;margin-bottom:5px}
.visual-preview{width:100%;height:120px;border-radius:12px;object-fit:cover;margin-top:8px;display:none;border:1px solid var(--border)}
.visual-preview.show{display:block}

/* BUTTONS */
.btn{padding:11px 24px;border-radius:11px;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:700;font-size:14px;transition:all .2s}
.btn-gold{background:linear-gradient(135deg,var(--c2),var(--c6));color:#000}
.btn-gold:hover{opacity:.9;transform:translateY(-1px)}
.btn-ghost{background:var(--bg3);color:var(--muted);border:1px solid var(--border)}
.btn-ghost:hover{color:var(--text)}
.flex-end{display:flex;justify-content:flex-end;gap:10px;margin-top:22px}
.row-num{font-size:11px;color:var(--muted);text-align:center}
.divider{height:1px;background:var(--border);margin:18px 0}

/* PANEL */
.panel{display:none}.panel.active{display:block}

/* FOOTER CREDIT */
.footer{text-align:center;padding:20px 0 10px;font-size:11px;color:var(--muted);letter-spacing:2px}
.footer span{color:var(--c2)}

@media(max-width:600px){
  .match-row{grid-template-columns:50px 1fr 68px 1fr 40px;gap:5px;padding:10px 12px}
  .match-home,.match-away{font-size:11px}
  .match-score{font-size:17px}
  .rank-table td,.rank-table th{padding:9px 10px}
  .coach-row-edit{grid-template-columns:20px 1fr 1fr 54px}
  .modal-box{padding:18px}
  .logo-badge{width:46px;height:46px}
  .logo-name{font-size:18px}
  .pts-bar-bg{width:50px}
  .group-letter{font-size:34px}
}
</style>
</head>
<body>
<div class="bg-blobs">
  <div class="blob blob1"></div>
  <div class="blob blob2"></div>
  <div class="blob blob3"></div>
  <div class="blob blob4"></div>
</div>

<div class="app">

  <!-- HEADER -->
  <div class="header">
    <div class="header-top">
      <div class="logo-area">
        <div class="logo-badge">
          <!-- Controller SVG simplifié -->
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="12" width="30" height="18" rx="9" fill="#FFE27A" opacity=".9"/>
            <rect x="3" y="12" width="30" height="18" rx="9" fill="url(#g1)" opacity=".6"/>
            <circle cx="11" cy="20" r="4" fill="#7B2FBE"/>
            <circle cx="25" cy="20" r="4" fill="#7B2FBE"/>
            <rect x="16" y="14" width="4" height="1.5" rx=".75" fill="#7B2FBE"/>
            <rect x="9" y="18" width="4" height="1.5" rx=".75" fill="#FFE27A"/>
            <rect x="11" y="16" width="1.5" height="4" rx=".75" fill="#FFE27A"/>
            <defs><linearGradient id="g1" x1="3" y1="12" x2="33" y2="30" gradientUnits="userSpaceOnUse">
              <stop stop-color="#F5C842"/><stop offset="1" stop-color="#FF6B35"/>
            </linearGradient></defs>
          </svg>
        </div>
        <div class="logo-text">
          <div class="logo-name">ULTIMATE LEAGUE</div>
          <div class="logo-sub">48 COACHS EN AMÉRIQUE · FIFA 2026</div>
        </div>
      </div>
      <div class="live-pill"><span class="live-dot"></span>LIVE</div>
    </div>
    <div class="color-strip" style="margin-top:14px">
      <div class="cs" style="background:#E8432D"></div>
      <div class="cs" style="background:#3A86FF"></div>
      <div class="cs" style="background:#7B2FBE"></div>
      <div class="cs" style="background:#06D6A0"></div>
      <div class="cs" style="background:#FF6B35"></div>
      <div class="cs" style="background:#F5C842"></div>
      <div class="cs" style="background:#2EC4B6"></div>
      <div class="cs" style="background:#9BF542"></div>
    </div>
  </div>

  <!-- NAV -->
  <div class="nav">
    <button class="nav-btn active" onclick="switchTab('groupes',this)">⚽ GROUPES</button>
    <button class="nav-btn" onclick="switchTab('classement',this)">🏆 CLASSEMENT</button>
  </div>

  <!-- GROUPES PANEL -->
  <div id="panel-groupes" class="panel active">
    <div class="section-title">GROUPES A → L</div>
    <div class="group-tabs" id="group-tabs"></div>
    <div id="group-display"></div>
  </div>

  <!-- CLASSEMENT PANEL -->
  <div id="panel-classement" class="panel">
    <div class="section-title">CLASSEMENT GÉNÉRAL</div>

    <!-- VISUAL DU JOUR -->
    <div class="rank-visual" id="rank-visual">
      <div class="rank-visual-inner" id="rank-visual-bg"></div>
      <div class="rank-visual-overlay"></div>
      <div class="rank-visual-content">
        <div class="rank-visual-day" id="rank-day">JOURNÉE</div>
        <div class="rank-visual-title" id="rank-title">CLASSEMENT EN DIRECT</div>
        <div class="rank-visual-sub" id="rank-sub">Phase de poules · FIFA World Cup 2026</div>
        <div class="rank-visual-logo">⚡ ULTIMATE LEAGUE</div>
      </div>
    </div>

    <!-- COLOR BAR -->
    <div class="rank-colorbar">
      <div class="rcb" style="background:#E8432D"></div>
      <div class="rcb" style="background:#FF6B35"></div>
      <div class="rcb" style="background:#F5C842"></div>
      <div class="rcb" style="background:#9BF542"></div>
      <div class="rcb" style="background:#06D6A0"></div>
      <div class="rcb" style="background:#2EC4B6"></div>
      <div class="rcb" style="background:#3A86FF"></div>
      <div class="rcb" style="background:#7B2FBE"></div>
    </div>

    <div class="group-card" style="padding:0">
      <table class="rank-table">
        <thead>
          <tr>
            <th style="width:50px">#</th>
            <th>COACH</th>
            <th>ÉQUIPE</th>
            <th style="text-align:right;padding-right:20px">PTS</th>
          </tr>
        </thead>
        <tbody id="rank-body"></tbody>
      </table>
    </div>
  </div>

  <div class="footer">ULTIMATE LEAGUE &nbsp;·&nbsp; <span>FIFA WORLD CUP 2026</span> &nbsp;·&nbsp; 48 COACHS EN AMÉRIQUE</div>
</div>

<!-- ADMIN FAB -->
<button class="admin-fab" onclick="openAdmin()" title="Admin">⚙️</button>

<!-- MODAL -->
<div class="modal-bg" id="modal">
  <div class="modal-box">
    <div id="login-panel">
      <div class="modal-title">🔐 ACCÈS ADMIN</div>
      <div class="pw-wrap">
        <input class="pw-input" type="password" 
