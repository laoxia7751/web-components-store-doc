import{_ as a,o as s,c as t,O as n}from"./chunks/framework.48edbd4b.js";const y=JSON.parse('{"title":"Dialog 弹窗","description":"","frontmatter":{},"headers":[],"relativePath":"xiaoshan/biz/dialog.md"}'),e={name:"xiaoshan/biz/dialog.md"},l=n(`<h1 id="dialog-弹窗" tabindex="-1" data-v-88434eb1>Dialog 弹窗 <a class="header-anchor" href="#dialog-弹窗" aria-label="Permalink to &quot;Dialog 弹窗&quot;" data-v-88434eb1>​</a></h1><h2 id="基础用法" tabindex="-1" data-v-88434eb1>基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;" data-v-88434eb1>​</a></h2><div class="example" data-v-88434eb1><div class="biz-map-dialog" data-v-88434eb1><div class="header" data-v-88434eb1><div class="header-left" data-v-88434eb1>弹窗标题</div><div class="header-right" data-v-88434eb1><button class="biz-btn" data-v-88434eb1><span data-v-88434eb1>周边监控</span></button><i class="iconfont icon-close" data-v-88434eb1></i></div></div><div class="contain" data-v-88434eb1> 内容区域 </div></div></div><details open data-v-88434eb1><summary data-v-88434eb1>展开查看</summary><div class="language-vue" data-v-88434eb1><button title="Copy Code" class="copy" data-v-88434eb1></button><span class="lang" data-v-88434eb1>vue</span><pre class="shiki material-theme-palenight" data-v-88434eb1><code data-v-88434eb1><span class="line" data-v-88434eb1><span style="color:#89DDFF;" data-v-88434eb1>&lt;</span><span style="color:#F07178;" data-v-88434eb1>template</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>    </span><span style="color:#89DDFF;" data-v-88434eb1>&lt;</span><span style="color:#F07178;" data-v-88434eb1>div</span><span style="color:#89DDFF;" data-v-88434eb1> </span><span style="color:#C792EA;" data-v-88434eb1>class</span><span style="color:#89DDFF;" data-v-88434eb1>=</span><span style="color:#89DDFF;" data-v-88434eb1>&quot;</span><span style="color:#C3E88D;" data-v-88434eb1>biz-map-dialog</span><span style="color:#89DDFF;" data-v-88434eb1>&quot;</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>        </span><span style="color:#89DDFF;" data-v-88434eb1>&lt;</span><span style="color:#F07178;" data-v-88434eb1>div</span><span style="color:#89DDFF;" data-v-88434eb1> </span><span style="color:#C792EA;" data-v-88434eb1>class</span><span style="color:#89DDFF;" data-v-88434eb1>=</span><span style="color:#89DDFF;" data-v-88434eb1>&quot;</span><span style="color:#C3E88D;" data-v-88434eb1>header</span><span style="color:#89DDFF;" data-v-88434eb1>&quot;</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>            </span><span style="color:#89DDFF;" data-v-88434eb1>&lt;</span><span style="color:#F07178;" data-v-88434eb1>div</span><span style="color:#89DDFF;" data-v-88434eb1> </span><span style="color:#C792EA;" data-v-88434eb1>class</span><span style="color:#89DDFF;" data-v-88434eb1>=</span><span style="color:#89DDFF;" data-v-88434eb1>&quot;</span><span style="color:#C3E88D;" data-v-88434eb1>header-left</span><span style="color:#89DDFF;" data-v-88434eb1>&quot;</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;</span><span style="color:#A6ACCD;" data-v-88434eb1>弹窗标题</span><span style="color:#89DDFF;" data-v-88434eb1>&lt;/</span><span style="color:#F07178;" data-v-88434eb1>div</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>            </span><span style="color:#89DDFF;" data-v-88434eb1>&lt;</span><span style="color:#F07178;" data-v-88434eb1>div</span><span style="color:#89DDFF;" data-v-88434eb1> </span><span style="color:#C792EA;" data-v-88434eb1>class</span><span style="color:#89DDFF;" data-v-88434eb1>=</span><span style="color:#89DDFF;" data-v-88434eb1>&quot;</span><span style="color:#C3E88D;" data-v-88434eb1>header-right</span><span style="color:#89DDFF;" data-v-88434eb1>&quot;</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>                </span><span style="color:#89DDFF;" data-v-88434eb1>&lt;</span><span style="color:#F07178;" data-v-88434eb1>button</span><span style="color:#89DDFF;" data-v-88434eb1> </span><span style="color:#C792EA;" data-v-88434eb1>class</span><span style="color:#89DDFF;" data-v-88434eb1>=</span><span style="color:#89DDFF;" data-v-88434eb1>&quot;</span><span style="color:#C3E88D;" data-v-88434eb1>biz-btn</span><span style="color:#89DDFF;" data-v-88434eb1>&quot;</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;&lt;</span><span style="color:#F07178;" data-v-88434eb1>span</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;</span><span style="color:#A6ACCD;" data-v-88434eb1>周边监控</span><span style="color:#89DDFF;" data-v-88434eb1>&lt;/</span><span style="color:#F07178;" data-v-88434eb1>span</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;&lt;/</span><span style="color:#F07178;" data-v-88434eb1>button</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>                </span><span style="color:#89DDFF;" data-v-88434eb1>&lt;</span><span style="color:#F07178;" data-v-88434eb1>i</span><span style="color:#89DDFF;" data-v-88434eb1> </span><span style="color:#C792EA;" data-v-88434eb1>class</span><span style="color:#89DDFF;" data-v-88434eb1>=</span><span style="color:#89DDFF;" data-v-88434eb1>&quot;</span><span style="color:#C3E88D;" data-v-88434eb1>iconfont icon-close</span><span style="color:#89DDFF;" data-v-88434eb1>&quot;</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;&lt;/</span><span style="color:#F07178;" data-v-88434eb1>i</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>            </span><span style="color:#89DDFF;" data-v-88434eb1>&lt;/</span><span style="color:#F07178;" data-v-88434eb1>div</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>        </span><span style="color:#89DDFF;" data-v-88434eb1>&lt;/</span><span style="color:#F07178;" data-v-88434eb1>div</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>        </span><span style="color:#89DDFF;" data-v-88434eb1>&lt;</span><span style="color:#F07178;" data-v-88434eb1>div</span><span style="color:#89DDFF;" data-v-88434eb1> </span><span style="color:#C792EA;" data-v-88434eb1>class</span><span style="color:#89DDFF;" data-v-88434eb1>=</span><span style="color:#89DDFF;" data-v-88434eb1>&quot;</span><span style="color:#C3E88D;" data-v-88434eb1>contain</span><span style="color:#89DDFF;" data-v-88434eb1>&quot;</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>            内容区域</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>        </span><span style="color:#89DDFF;" data-v-88434eb1>&lt;/</span><span style="color:#F07178;" data-v-88434eb1>div</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>    </span><span style="color:#89DDFF;" data-v-88434eb1>&lt;/</span><span style="color:#F07178;" data-v-88434eb1>div</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;</span></span>
<span class="line" data-v-88434eb1><span style="color:#89DDFF;" data-v-88434eb1>&lt;/</span><span style="color:#F07178;" data-v-88434eb1>template</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;</span></span>
<span class="line" data-v-88434eb1><span style="color:#89DDFF;" data-v-88434eb1>&lt;</span><span style="color:#F07178;" data-v-88434eb1>script</span><span style="color:#A6ACCD;" data-v-88434eb1> </span><span style="color:#C792EA;" data-v-88434eb1>setup</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;&lt;/</span><span style="color:#F07178;" data-v-88434eb1>script</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;</span></span>
<span class="line" data-v-88434eb1></span>
<span class="line" data-v-88434eb1><span style="color:#89DDFF;" data-v-88434eb1>&lt;</span><span style="color:#F07178;" data-v-88434eb1>style</span><span style="color:#A6ACCD;" data-v-88434eb1> </span><span style="color:#C792EA;" data-v-88434eb1>lang</span><span style="color:#89DDFF;" data-v-88434eb1>=</span><span style="color:#89DDFF;" data-v-88434eb1>&quot;</span><span style="color:#C3E88D;" data-v-88434eb1>scss</span><span style="color:#89DDFF;" data-v-88434eb1>&quot;</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;</span></span>
<span class="line" data-v-88434eb1><span style="color:#89DDFF;" data-v-88434eb1>.</span><span style="color:#FFCB6B;" data-v-88434eb1>biz-map-dialog</span><span style="color:#A6ACCD;" data-v-88434eb1> </span><span style="color:#89DDFF;" data-v-88434eb1>{</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>    </span><span style="color:#B2CCD6;" data-v-88434eb1>width</span><span style="color:#89DDFF;" data-v-88434eb1>:</span><span style="color:#A6ACCD;" data-v-88434eb1> </span><span style="color:#F78C6C;" data-v-88434eb1>100%</span><span style="color:#89DDFF;" data-v-88434eb1>;</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>    </span><span style="color:#B2CCD6;" data-v-88434eb1>height</span><span style="color:#89DDFF;" data-v-88434eb1>:</span><span style="color:#A6ACCD;" data-v-88434eb1> </span><span style="color:#F78C6C;" data-v-88434eb1>400px</span><span style="color:#89DDFF;" data-v-88434eb1>;</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>    </span><span style="color:#89DDFF;" data-v-88434eb1>.</span><span style="color:#FFCB6B;" data-v-88434eb1>biz-btn</span><span style="color:#A6ACCD;" data-v-88434eb1> </span><span style="color:#89DDFF;" data-v-88434eb1>{</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>        </span><span style="color:#B2CCD6;" data-v-88434eb1>margin-right</span><span style="color:#89DDFF;" data-v-88434eb1>:</span><span style="color:#A6ACCD;" data-v-88434eb1> </span><span style="color:#82AAFF;" data-v-88434eb1>var</span><span style="color:#89DDFF;" data-v-88434eb1>(</span><span style="color:#A6ACCD;" data-v-88434eb1>--gap-xl</span><span style="color:#89DDFF;" data-v-88434eb1>);</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>        </span><span style="color:#FFCB6B;" data-v-88434eb1>span</span><span style="color:#A6ACCD;" data-v-88434eb1> </span><span style="color:#89DDFF;" data-v-88434eb1>{</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>            </span><span style="color:#B2CCD6;" data-v-88434eb1>display</span><span style="color:#89DDFF;" data-v-88434eb1>:</span><span style="color:#A6ACCD;" data-v-88434eb1> block</span><span style="color:#89DDFF;" data-v-88434eb1>;</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>            </span><span style="color:#B2CCD6;" data-v-88434eb1>font-size</span><span style="color:#89DDFF;" data-v-88434eb1>:</span><span style="color:#A6ACCD;" data-v-88434eb1> </span><span style="color:#F78C6C;" data-v-88434eb1>14px</span><span style="color:#89DDFF;" data-v-88434eb1>;</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>            </span><span style="color:#B2CCD6;" data-v-88434eb1>line-height</span><span style="color:#89DDFF;" data-v-88434eb1>:</span><span style="color:#A6ACCD;" data-v-88434eb1> </span><span style="color:#F78C6C;" data-v-88434eb1>24px</span><span style="color:#89DDFF;" data-v-88434eb1>;</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>        </span><span style="color:#89DDFF;" data-v-88434eb1>}</span></span>
<span class="line" data-v-88434eb1><span style="color:#A6ACCD;" data-v-88434eb1>    </span><span style="color:#89DDFF;" data-v-88434eb1>}</span></span>
<span class="line" data-v-88434eb1><span style="color:#89DDFF;" data-v-88434eb1>}</span></span>
<span class="line" data-v-88434eb1><span style="color:#89DDFF;" data-v-88434eb1>&lt;/</span><span style="color:#F07178;" data-v-88434eb1>style</span><span style="color:#89DDFF;" data-v-88434eb1>&gt;</span></span>
<span class="line" data-v-88434eb1></span></code></pre></div></details>`,4),p=[l];function o(d,c,v,b,D,r){return s(),t("div",null,p)}const i=a(e,[["render",o],["__scopeId","data-v-88434eb1"]]);export{y as __pageData,i as default};