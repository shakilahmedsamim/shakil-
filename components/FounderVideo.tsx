"use client";

import { useEffect } from "react";

const EMBED_ID = "SmDRjS4JjsHLVuwd";
const EMBED_URL = "https://fast.vidalytics.com/embeds/i4lAbS7M/SmDRjS4JjsHLVuwd/";

/**
 * Vidalytics handles its own player UI, autoplay/sound behavior, and
 * branding from its dashboard settings, so this only wires in the exact
 * embed snippet Vidalytics provides plus the site's own frame around it.
 * The script is idempotent-guarded so it only runs once even if this
 * component re-renders.
 */
export default function FounderVideo() {
  useEffect(() => {
    const scriptId = `vidalytics-init-${EMBED_ID}`;
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "text/javascript";
    script.text = `
      (function (v, i, d, a, l, y, t, c, s) {
          y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
          if (!vsl){vsl=function(u,cb){
              if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
              if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
              i.getElementsByTagName("head")[0].appendChild(s);
          };}
          vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
      })(window, document, 'Vidalytics', 'vidalytics_embed_${EMBED_ID}', '${EMBED_URL}');
    `;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden bg-ink shadow-xl">
      <div className="flex items-center gap-1.5 h-8 px-4 bg-ink">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </div>
      <div
        id={`vidalytics_embed_${EMBED_ID}`}
        style={{ width: "100%", position: "relative", paddingTop: "56.25%" }}
      />
    </div>
  );
}
