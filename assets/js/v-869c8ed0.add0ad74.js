"use strict";(self.webpackChunkmisskey_hub=self.webpackChunkmisskey_hub||[]).push([[5099],{927:(e,s,n)=>{n.r(s),n.d(s,{default:()=>W});var l=n(6252);const a=(0,l.uE)('<h1 id="misskey-setup-and-installation-guide" tabindex="-1"><a class="header-anchor" href="#misskey-setup-and-installation-guide" aria-hidden="true">#</a> Misskey Setup and Installation Guide</h1><p>We thank you for your interest in setting up your Misskey server! This guide describes how to install and setup Misskey.</p><hr><h2 id="_1-create-misskey-user" tabindex="-1"><a class="header-anchor" href="#_1-create-misskey-user" aria-hidden="true">#</a> <em>1.</em> Create Misskey user</h2><p>Running misskey as root is not a good idea so we create a user for that. In debian for exemple :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>adduser --disabled-password --disabled-login misskey\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_2-install-dependencies" tabindex="-1"><a class="header-anchor" href="#_2-install-dependencies" aria-hidden="true">#</a> <em>2.</em> Install dependencies</h2><p>Please install and setup these softwares:</p><h4 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies" aria-hidden="true">#</a> Dependencies 📦</h4>',9),i={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},t=(0,l.Uk)("Node.js"),r=(0,l.Uk)(" (16.x)"),o={href:"https://www.postgresql.org/",target:"_blank",rel:"noopener noreferrer"},d=(0,l.Uk)("PostgreSQL"),u=(0,l.Uk)(" (12.x / 13.x is preferred)"),c={href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"},p=(0,l.Uk)("Redis"),h=(0,l._)("h5",{id:"optional",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#optional","aria-hidden":"true"},"#"),(0,l.Uk)(" Optional")],-1),m={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},y=(0,l.Uk)("Yarn"),b=(0,l.Uk)(),k=(0,l._)("em",null,[(0,l.Uk)("Optional but recommended for security reason. If you won't install it, use "),(0,l._)("code",null,"npx yarn"),(0,l.Uk)(" instead of "),(0,l._)("code",null,"yarn"),(0,l.Uk)(".")],-1),g={href:"https://www.ffmpeg.org/",target:"_blank",rel:"noopener noreferrer"},_=(0,l.Uk)("FFmpeg"),f=(0,l._)("h2",{id:"_3-install-misskey",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#_3-install-misskey","aria-hidden":"true"},"#"),(0,l.Uk)(),(0,l._)("em",null,"3."),(0,l.Uk)(" Install Misskey")],-1),v=(0,l._)("li",null,[(0,l._)("p",null,"Connect to misskey user."),(0,l._)("p",null,[(0,l._)("code",null,"su - misskey")])],-1),w=(0,l._)("li",null,[(0,l._)("p",null,"Clone the misskey repo from master branch."),(0,l._)("p",null,[(0,l._)("code",null,"git clone --recursive -b master git://github.com/misskey-dev/misskey.git")])],-1),x=(0,l._)("li",null,[(0,l._)("p",null,"Navigate to misskey directory"),(0,l._)("p",null,[(0,l._)("code",null,"cd misskey")])],-1),M=(0,l.Uk)("Checkout to the "),U={href:"https://github.com/misskey-dev/misskey/releases/latest",target:"_blank",rel:"noopener noreferrer"},E=(0,l.Uk)("latest release"),I=(0,l._)("p",null,[(0,l._)("code",null,"git checkout master")],-1),C=(0,l._)("li",null,[(0,l._)("p",null,"Checkout submodules"),(0,l._)("p",null,[(0,l._)("code",null,"git submodule update --init")])],-1),D=(0,l._)("li",null,[(0,l._)("p",null,"Install misskey dependencies."),(0,l._)("p",null,[(0,l._)("code",null,"yarn install")])],-1),N=(0,l.uE)('<h2 id="_4-configure-misskey" tabindex="-1"><a class="header-anchor" href="#_4-configure-misskey" aria-hidden="true">#</a> <em>4.</em> Configure Misskey</h2><ol><li><p>Copy the <code>.config/example.yml</code> and rename it to <code>default.yml</code>.</p><p><code>cp .config/example.yml .config/default.yml</code></p></li><li><p>Edit <code>default.yml</code></p></li></ol><h2 id="_5-build-misskey" tabindex="-1"><a class="header-anchor" href="#_5-build-misskey" aria-hidden="true">#</a> <em>5.</em> Build Misskey</h2><p>Build misskey with the following:</p><p><code>NODE_ENV=production yarn build</code></p><p>If you&#39;re on Debian, you will need to install the <code>build-essential</code>, <code>python</code> package.</p><p>If you&#39;re still encountering errors about some modules, use node-gyp:</p><ol><li><code>npx node-gyp configure</code></li><li><code>npx node-gyp build</code></li><li><code>NODE_ENV=production yarn build</code></li></ol><h2 id="_6-init-db" tabindex="-1"><a class="header-anchor" href="#_6-init-db" aria-hidden="true">#</a> <em>6.</em> Init DB</h2><ol><li><p>Create the appropriate PostgreSQL users with respective passwords, and empty database as named in the configuration file. Make sure the database connection also works correctly when run from the user that will later run Misskey, or it could cause problems later.</p></li><li><p>Run the database initialisation <code>yarn run init</code></p></li></ol><h2 id="_7-that-is-it" tabindex="-1"><a class="header-anchor" href="#_7-that-is-it" aria-hidden="true">#</a> <em>7.</em> That is it.</h2><p>Well done! Now, you have an environment that run to Misskey.</p><h3 id="launch-normally" tabindex="-1"><a class="header-anchor" href="#launch-normally" aria-hidden="true">#</a> Launch normally</h3><p>Just <code>NODE_ENV=production npm start</code>. GLHF!</p><h3 id="launch-with-systemd" tabindex="-1"><a class="header-anchor" href="#launch-with-systemd" aria-hidden="true">#</a> Launch with systemd</h3><ol><li><p>Create a systemd service here</p><p><code>/etc/systemd/system/misskey.service</code></p></li><li><p>Edit it, and paste this and save:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Unit]\nDescription=Misskey daemon\n\n[Service]\nType=simple\nUser=misskey\nExecStart=/usr/bin/npm start\nWorkingDirectory=/home/misskey/misskey\nEnvironment=&quot;NODE_ENV=production&quot;\nTimeoutSec=60\nStandardOutput=syslog\nStandardError=syslog\nSyslogIdentifier=misskey\nRestart=always\n\n[Install]\nWantedBy=multi-user.target\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></li><li><p>Reload systemd and enable the misskey service.</p><p><code>systemctl daemon-reload ; systemctl enable misskey</code></p></li><li><p>Start the misskey service.</p><p><code>systemctl start misskey</code></p></li></ol><p>You can check if the service is running with <code>systemctl status misskey</code>.</p><h3 id="how-to-update-your-misskey-server-to-the-latest-version" tabindex="-1"><a class="header-anchor" href="#how-to-update-your-misskey-server-to-the-latest-version" aria-hidden="true">#</a> How to update your Misskey server to the latest version</h3><ol><li><code>git checkout master</code></li><li><code>git pull</code></li><li><code>git submodule update --init</code></li><li><code>yarn install</code></li><li><code>NODE_ENV=production yarn build</code></li><li><code>yarn migrate</code></li><li>Restart your Misskey process to apply changes</li><li>Enjoy</li></ol><p>If you encounter any problems with updating, please try the following:</p><ol><li><code>yarn clean</code> or <code>yarn cleanall</code></li><li>Retry update (Don&#39;t forget <code>yarn install</code></li></ol><hr><p>If you have any questions or troubles, feel free to contact us!</p>',23),S={},W=(0,n(3744).Z)(S,[["render",function(e,s){const n=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[a,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("strong",null,[(0,l._)("a",i,[t,(0,l.Wm)(n)])]),r]),(0,l._)("li",null,[(0,l._)("strong",null,[(0,l._)("a",o,[d,(0,l.Wm)(n)])]),u]),(0,l._)("li",null,[(0,l._)("strong",null,[(0,l._)("a",c,[p,(0,l.Wm)(n)])])])]),h,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",m,[y,(0,l.Wm)(n)]),b,k]),(0,l._)("li",null,[(0,l._)("a",g,[_,(0,l.Wm)(n)])])]),f,(0,l._)("ol",null,[v,w,x,(0,l._)("li",null,[(0,l._)("p",null,[M,(0,l._)("a",U,[E,(0,l.Wm)(n)])]),I]),C,D]),N],64)}]])},3744:(e,s)=>{s.Z=(e,s)=>{for(const[n,l]of s)e[n]=l;return e}},8587:(e,s,n)=>{n.r(s),n.d(s,{data:()=>l});const l={key:"v-869c8ed0",path:"/en/docs/install/manual.html",title:"Misskey Setup and Installation Guide",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. Create Misskey user",slug:"_1-create-misskey-user",children:[]},{level:2,title:"2. Install dependencies",slug:"_2-install-dependencies",children:[]},{level:2,title:"3. Install Misskey",slug:"_3-install-misskey",children:[]},{level:2,title:"4. Configure Misskey",slug:"_4-configure-misskey",children:[]},{level:2,title:"5. Build Misskey",slug:"_5-build-misskey",children:[]},{level:2,title:"6. Init DB",slug:"_6-init-db",children:[]},{level:2,title:"7. That is it.",slug:"_7-that-is-it",children:[{level:3,title:"Launch normally",slug:"launch-normally",children:[]},{level:3,title:"Launch with systemd",slug:"launch-with-systemd",children:[]},{level:3,title:"How to update your Misskey server to the latest version",slug:"how-to-update-your-misskey-server-to-the-latest-version",children:[]}]}],filePathRelative:"en/docs/install/manual.md",git:{updatedTime:1638643779e3,contributors:[{name:"Johann150",email:"johann.galle@protonmail.com",commits:1},{name:"Johann150",email:"johann@qwertqwefsday.eu",commits:1}]},relatedPages:[{title:"Create your own Misskey instance",path:"/en/docs/install.html",summary:""}]}}}]);