import{_ as s,o as e,c as a,a as l}from"./app.5361b46a.js";const F=JSON.parse('{"title":"Methods","description":"List of exposed datepicker methods","frontmatter":{"lang":"en-US","title":"Methods","description":"List of exposed datepicker methods"},"headers":[{"level":2,"title":"selectDate","slug":"selectdate","link":"#selectdate","children":[]},{"level":2,"title":"closeMenu","slug":"closemenu","link":"#closemenu","children":[]},{"level":2,"title":"openMenu","slug":"openmenu","link":"#openmenu","children":[]},{"level":2,"title":"clearValue","slug":"clearvalue","link":"#clearvalue","children":[]},{"level":2,"title":"updateInternalModelValue","slug":"updateinternalmodelvalue","link":"#updateinternalmodelvalue","children":[]},{"level":2,"title":"setMonthYear","slug":"setmonthyear","link":"#setmonthyear","children":[]},{"level":2,"title":"onScroll","slug":"onscroll","link":"#onscroll","children":[]}],"relativePath":"methods-and-events/methods/index.md"}'),n={name:"methods-and-events/methods/index.md"},o=l(`<h1 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h1><p>List of available methods that you can call on the datepicker from the external code</p><p>Add a <code>ref</code> to the component, and call the method on that ref</p><details class="details custom-block"><summary>Code Example</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VueDatePicker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">date</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">datepicker</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> date </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> datepicker </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> yourCustomMethod </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">datepicker</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// Close the menu programmatically</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">datepicker</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">closeMenu</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="selectdate" tabindex="-1">selectDate <a class="header-anchor" href="#selectdate" aria-hidden="true">#</a></h2><p>When called and there is an active selection, it will select that date.</p><h2 id="closemenu" tabindex="-1">closeMenu <a class="header-anchor" href="#closemenu" aria-hidden="true">#</a></h2><p>Closes the datepicker menu</p><h2 id="openmenu" tabindex="-1">openMenu <a class="header-anchor" href="#openmenu" aria-hidden="true">#</a></h2><p>Opens the datepicker menu</p><h2 id="clearvalue" tabindex="-1">clearValue <a class="header-anchor" href="#clearvalue" aria-hidden="true">#</a></h2><p>Clears the selected value</p><h2 id="updateinternalmodelvalue" tabindex="-1">updateInternalModelValue <a class="header-anchor" href="#updateinternalmodelvalue" aria-hidden="true">#</a></h2><ul><li>Parameter: <code>Date | Date[]</code></li></ul><p>Modify the internal <code>model-value</code> while the picker is in the open state.</p><h2 id="setmonthyear" tabindex="-1">setMonthYear <a class="header-anchor" href="#setmonthyear" aria-hidden="true">#</a></h2><ul><li>Parameter: <code>{ month?: number | string; year?: number | string; }</code></li></ul><p>Set calendar month and year programmatically</p><h2 id="onscroll" tabindex="-1">onScroll <a class="header-anchor" href="#onscroll" aria-hidden="true">#</a></h2><p>Manually trigger method that is called on window scroll</p>`,20),t=[o];function p(r,c,i,d,D,y){return e(),a("div",null,t)}const u=s(n,[["render",p]]);export{F as __pageData,u as default};