<section class="js-section">
<h3 class="section__title">Customizing and Configurations</h3>
</section><section class="js-section">
<h4>Change application URL</h4>
On your project folder open the <strong>config.js</strong> file. Change W<b>ebsiteUrl</b> value.
<div class="code__block code__block--notabs">
<pre class="code code--block"><code class="hljs cs"><span class="hljs-comment">//Main Application URL</span>
<span class="hljs-string">'websiteUrl'</span> : <span class="hljs-string">'http://example.com'</span>,
</code></pre>
</div>
</section><section class="js-section">
<h4>Change application Name</h4>
First, you need to change the name attribute of the <b>package.json</b> file in the application root directory.
<div class="code__block code__block--notabs">
<pre class="code code--block"><code class="hljs bash"><span class="hljs-string">"name"</span>: <span class="hljs-string">"New_App_Name"</span>,
</code></pre>
</div>
Next, modify the <strong>config.js</strong> file appName value.
<div class="code__block code__block--notabs">
<pre class="code code--block"><code class="hljs bash"><span class="hljs-string">'appName'</span> : <span class="hljs-string">'Name'</span>,
</code></pre>
</div>
</section><section class="js-section">
<h4>Change application description</h4>
First, you need to change the application root directory <b>package.json description</b> attribute.
<div class="code__block code__block--notabs">
<pre class="code code--block"><code class="hljs bash"><span class="hljs-string">"description"</span>: <span class="hljs-string">"Convert Website to a Desktop application"</span>,
</code></pre>
</div>
</section><section class="js-section">
<h4>Change the width and height</h4>
Open your application config.js file, after that change the height, width, minHeight, and minWidth values.
<div class="code__block code__block--notabs">
<pre class="code code--block"><code class="hljs coffeescript"><span class="hljs-regexp">//</span>Application <span class="hljs-built_in">window</span> width <span class="hljs-keyword">and</span> height
<span class="hljs-string">'width'</span> : Replace_Value,
<span class="hljs-string">'height'</span> : Replace_Value,
<span class="hljs-string">'minWidth'</span> : Replace_Value,
<span class="hljs-string">'minHeight'</span> : Replace_Value,
</code></pre>
</div>
<div>
<pre class="code code--block"><code class="hljs php"><span style="color: red;"><b>Important: <span class="hljs-keyword">Default</span> Values</b>
Height : <span class="hljs-number">800</span>px
Width : <span class="hljs-number">600</span>px
minHeight : <span class="hljs-number">0</span>
minWidth : <span class="hljs-number">0</span></span>
</code></pre>
</div>
</section><section class="js-section">
<h4>Application Icon change</h4>
All application Icons are located in the build folder. Replace images using the same name.
<div>
<pre class="code code--block"><code class="hljs css"><span style="color: red;"><b><span class="hljs-selector-tag">Important</span></b>
<span class="hljs-selector-tag">macOS</span>
<span class="hljs-selector-tag">Optional</span> <span class="hljs-selector-tag">icon</span><span class="hljs-selector-class">.icns</span> (<span class="hljs-selector-tag">macOS</span> <span class="hljs-selector-tag">app</span> <span class="hljs-selector-tag">icon</span>) <span class="hljs-selector-tag">or</span> <span class="hljs-selector-tag">icon</span><span class="hljs-selector-class">.png</span>. <span class="hljs-selector-tag">Icon</span> <span class="hljs-selector-tag">size</span> <span class="hljs-selector-tag">should</span> <span class="hljs-selector-tag">be</span> <span class="hljs-selector-tag">at</span> <span class="hljs-selector-tag">least</span> 512<span class="hljs-selector-tag">x512</span>.
<span class="hljs-selector-tag">Windows</span>
<span class="hljs-selector-tag">Optional</span> <span class="hljs-selector-tag">icon</span><span class="hljs-selector-class">.ico</span> (<span class="hljs-selector-tag">Windows</span> <span class="hljs-selector-tag">app</span> <span class="hljs-selector-tag">icon</span>) <span class="hljs-selector-tag">or</span> <span class="hljs-selector-tag">icon</span><span class="hljs-selector-class">.png</span>. <span class="hljs-selector-tag">Icon</span> <span class="hljs-selector-tag">size</span> <span class="hljs-selector-tag">should</span> <span class="hljs-selector-tag">be</span> <span class="hljs-selector-tag">at</span> <span class="hljs-selector-tag">least</span> 256<span class="hljs-selector-tag">x256</span>.
<span class="hljs-selector-tag">Linux</span>
<span class="hljs-selector-tag">Linux</span> <span class="hljs-selector-tag">icon</span> <span class="hljs-selector-tag">sets</span> <span class="hljs-selector-tag">will</span> <span class="hljs-selector-tag">be</span> <span class="hljs-selector-tag">generated</span> <span class="hljs-selector-tag">automatically</span> <span class="hljs-selector-tag">based</span> <span class="hljs-selector-tag">on</span> <span class="hljs-selector-tag">the</span> <span class="hljs-selector-tag">macOS</span> <span class="hljs-selector-tag">icons</span> <span class="hljs-selector-tag">file</span> <span class="hljs-selector-tag">or</span> <span class="hljs-selector-tag">common</span> <span class="hljs-selector-tag">icon</span><span class="hljs-selector-class">.png</span>.
</span></code></pre>
</div>
</section><section class="js-section">
<h4>Redesign or edit local pages</h4>
All local web pages of your application (About, Contact, and Loading page) are located in the <b>public</b> directory. You can open any one of the pages which you want to edit and make changes according to your preference.

</section><section class="js-section">
<h4>Customize the Main / Right menu</h4>
There are two menu types
<ul>
 	<li>Main application menu – menu-config.js</li>
</ul>
<img src="https://raw.githubusercontent.com/bmshifat/WebVIew/main/menu.png" />
<h4>Link-local pages to menu</h4>
First, create a .html page in your app's public folder. By using the following format, replace the values of your newly created HTML page file name value.
<div class="code__block code__block--notabs">
<pre class="code code--block"><code class="hljs css">
{<span class="hljs-attribute">label </span>: <span class="hljs-string">'Home'</span>, click : () =&gt; { <span class="hljs-built_in">require</span>(<span class="hljs-string">'./main'</span>)(<span class="hljs-string">"home"</span>) }},
{<span class="hljs-attribute">label </span>: <span class="hljs-string">'About'</span>, click : () =&gt; { <span class="hljs-built_in">require</span>(<span class="hljs-string">'./main'</span>)(<span class="hljs-string">"about"</span>) }},
</code></pre>
</div>
<h4>Add a new menu section – (Main menu)</h4>
Copy-paste for the following code block and replace the values as you need.
<div class="code__block code__block--notabs">
<pre class="code code--block"><code class="hljs css">
{
<span class="hljs-attribute">label</span>: <span class="hljs-string">'New_Menu_Name'</span>,
submenu: [
{role : <span class="hljs-string">'reload'</span>},
{<span class="hljs-attribute">role </span>: <span class="hljs-string">'zoomIn'</span>},
{<span class="hljs-attribute">role </span>: <span class="hljs-string">'zoomOut'</span>},
]
},
</code></pre>
</div>
<h4>Available Menu Roles List</h4>
<div class="code__block code__block--notabs">
<pre class="code code--block"><code class="hljs perl">
Undo, <span class="hljs-keyword">redo</span>, cut, copy, paste, pasteAndMatchStyle, <span class="hljs-keyword">delete</span>, selectAll, reload, forceReload, toggleDevTools, resetZoom, zoomIn, zoomOut, togglefullscreen, window, minimize, <span class="hljs-keyword">close</span>, help, about, services, hide, hideOthers, unhide, quit, startSpeaking, stopSpeaking, <span class="hljs-keyword">close</span>, minimize, zoom, front, appMenu, fileMenu, editMenu, viewMenu, recentDocuments, toggleTabBar, selectNextTab</code></pre>
</div>
</section><section class="js-section">
<h4>Hide website elements</h4>
Give a native look to your application. You can hide your website elements as you prefer. To do this, open the <b>config.js</b> file.

Next, you can add your class or id value separated by a comma.
<div class="code__block code__block--notabs">
<pre class="code code--block"><code class="hljs coffeescript">
<span class="hljs-regexp">//</span>Hide elements <span class="hljs-keyword">by</span> ID
<span class="hljs-string">'hideElementsId'</span> : [<span class="hljs-string">'id_1'</span>, <span class="hljs-string">'id_2'</span>, <span class="hljs-string">'id_3'</span>],

<span class="hljs-regexp">//</span>Hide elements <span class="hljs-keyword">by</span> Class
<span class="hljs-string">'hideElementsClass'</span> : [<span class="hljs-string">'class_1'</span>, <span class="hljs-string">'class_2'</span>, <span class="hljs-string">'class_3'</span>],
</code></pre>
</div>
<img class="" src="https://raw.githubusercontent.com/bmshifat/WebVIew/main/hide.png" />

</section><section class="js-section">
<h3 class="section__title">Application Run Locally</h3>
In your project folder simply open <b>terminal/command</b> line tools and install all dependencies.

<b><span style="color: blue;">First, you need to install your computer <a href="https://nodejs.org/en/" target="_blank" rel="noopener"><span style="color: red;">Node.js</span></a> latest version</span></b>

Run the following command.
<div class="code__block code__block--notabs">
<pre class="code code--block"><code class="hljs coffeescript">$ <span class="hljs-built_in">npm</span> install
</code></pre>
</div>
After successfully installed all the dependencies, run the following command.
<div class="code__block code__block--notabs">
<pre class="code code--block"><code class="hljs coffeescript">$ <span class="hljs-built_in">npm</span> start
</code></pre>
</div>
</section><section class="js-section">
<h3 class="section__title">Build the Application for platforms</h3>
</section><section class="js-section">Now you can use this customized application to build applications macOS, Windows, and Linux platforms.
<div>
<pre class="code code--block"><code class="hljs coffeescript"><span style="color: red;"><b>Important</b>
macOS User – Can build macOS, Windows <span class="hljs-keyword">and</span> Linux version <span class="hljs-keyword">of</span> your application
Windows User – Can only build Windows <span class="hljs-keyword">and</span> Linux versions only</span>
</code></pre>
</div>
<div>
<pre class="code code--block"><code class="hljs sql"><span style="color: red;"><b>Supported Platforms</b>
<b>macOS</b>
Only 64bit binaries are provided for macOS. The minimum macOS version supported is macOS 10.10 (Yosemite).
<b>Windows</b>
Windows 7 and later are supported. Older operating systems are not supported (and <span class="hljs-keyword">do</span> <span class="hljs-keyword">not</span> <span class="hljs-keyword">work</span>).
<b>Linux</b>
The <span class="hljs-keyword">prebuilt</span> ia32 (i686) <span class="hljs-keyword">and</span> x64 (amd64) binaries <span class="hljs-keyword">of</span> Electron <span class="hljs-keyword">are</span> built <span class="hljs-keyword">on</span> Ubuntu <span class="hljs-number">12.04</span>, the armv7l <span class="hljs-built_in">binary</span> <span class="hljs-keyword">is</span> built against ARM v7 <span class="hljs-keyword">with</span> hard-<span class="hljs-built_in">float</span> ABI <span class="hljs-keyword">and</span> NEON <span class="hljs-keyword">for</span> Debian Wheezy.</span>
</code></pre>
</div>
First, you need to install the <b>electron-builder</b> package globally :
<div class="code__block code__block--notabs">
<pre class="code code--block"><code class="hljs coffeescript">$ <span class="hljs-built_in">npm</span> i electron-builder -g
</code></pre>
</div>
To build all platform :
<div class="code__block code__block--notabs">
<pre class="code code--block"><code class="hljs ruby">$ electron-builder -mwl
</code></pre>
</div>
To build the macOS platform:
<div class="code__block code__block--notabs">
<pre class="code code--block"><code class="hljs ruby">$ electron-builder --mac
</code></pre>
</div>
To build the Windows platform:
<div class="code__block code__block--notabs">
<pre class="code code--block"><code class="hljs ruby">$ electron-builder --win
</code></pre>
</div>
To build the Linux platform:
<div class="code__block code__block--notabs">
<pre class="code code--block"><code class="hljs ruby">$ electron-builder --linux
</code></pre>
</div>
Built output applications are located in the newly created directory called <b>“dist”</b> which is inside your application directory.

</section>
