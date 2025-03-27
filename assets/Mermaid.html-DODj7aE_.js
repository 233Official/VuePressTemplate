import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,a as n,b as i,o as d,r as p}from"./app-DvoZVPwN.js";const r={};function t(c,s){const a=p("Mermaid");return d(),l("div",null,[s[0]||(s[0]=n(`<h1 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid"><span>Mermaid</span></a></h1><ul><li><a href="#mermaid">Mermaid</a><ul><li><a href="#%E7%BB%93%E7%82%B9%E5%86%85%E6%96%87%E5%AD%97%E6%8D%A2%E8%A1%8C">结点内文字换行</a></li><li><a href="#%E9%99%90%E5%88%B6%E6%B5%81%E7%A8%8B%E5%9B%BE%E5%A4%A7%E5%B0%8F">限制流程图大小</a></li><li><a href="#%E6%98%BE%E7%A4%BA%E6%94%AF%E6%8C%81">显示支持</a></li><li><a href="#%E7%94%98%E7%89%B9%E5%9B%BE">甘特图</a></li><li><a href="#%E6%B5%81%E7%A8%8B%E5%9B%BE">流程图</a><ul><li><a href="#%E6%B5%81%E7%A8%8B%E5%9B%BE%E6%95%B4%E4%BD%93%E6%96%B9%E5%90%91">流程图整体方向</a></li><li><a href="#%E7%BB%93%E7%82%B9%E5%BD%A2%E7%8A%B6">结点形状</a></li><li><a href="#%E8%BF%9E%E6%8E%A5%E7%BA%BF%E5%BD%A2%E7%8A%B6">连接线形状</a></li><li><a href="#%E8%AF%AD%E6%B3%95%E5%86%B2%E7%AA%81%E7%9A%84%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6">语法冲突的特殊字符</a></li></ul></li><li><a href="#%E6%97%B6%E5%BA%8F%E5%9B%BE">时序图</a></li></ul></li></ul><hr><h2 id="结点内文字换行" tabindex="-1"><a class="header-anchor" href="#结点内文字换行"><span>结点内文字换行</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>graph LR;</span></span>
<span class="line"><span>a--&gt;b[2&lt;br&gt;3&lt;br&gt;3]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,5)),i(a,{id:"mermaid-69",code:"eJxLL0osyFDwCbLmStTVtUuKNrJJKrIzBhOxXACEvQhn"}),s[1]||(s[1]=n(`<hr><h2 id="限制流程图大小" tabindex="-1"><a class="header-anchor" href="#限制流程图大小"><span>限制流程图大小</span></a></h2><ul><li>绘图时在当前方向上绘制的结点数量及文字比较多那么篇幅会无限扩大, 目前没有找到特别好的限制区域大小的方法</li><li>不过通常编辑文档时的界面左右大小适应屏幕左右宽度, 上下可以滚动, 那么可以指定 Mermaid 图左右方向绘制以避免图像过长</li></ul><hr><h2 id="显示支持" tabindex="-1"><a class="header-anchor" href="#显示支持"><span>显示支持</span></a></h2><ul><li>VSCode 需要安装扩展-Markdown Preview Mermaid Support 以预览 Mermaid 图像</li></ul><hr><h2 id="甘特图" tabindex="-1"><a class="header-anchor" href="#甘特图"><span>甘特图</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>gantt</span></span>
<span class="line"><span>dateFormat  YYYY-MM-DD</span></span>
<span class="line"><span>title 甘特图</span></span>
<span class="line"><span>excludes weekdays 2014-01-10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Completed task  : des1, 2014-01-06,2014-01-08</span></span>
<span class="line"><span>Active task     : des2, 2014-01-09, 2d</span></span>
<span class="line"><span>Future task     : des3, after des2, 5d</span></span>
<span class="line"><span>Future task2    : des4, after des3, 5d</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)),i(a,{id:"mermaid-102",code:"eJxLT8wrKeFKSSxJdcsvyk0sUVCIBAJdX19dFxeuksySnFSF51NmPO/c+XT2Pq7UiuSc0pTUYoXy1NTslMTKYgUjA0MTXQNDXUMDLi7n/NyCnNSS1BSFksTibAUFKwWgUkMduBoDMx0404LLMbkksywVqhQIwKqNkFRbAtkpXG6lJaVF6MqMdRQS00pSi6BaTFGUGcGVmSApA2oBKgMAqWVHzg=="}),s[2]||(s[2]=n(`<hr><h2 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图"><span>流程图</span></a></h2><blockquote><p><a href="https://mermaid-js.github.io/mermaid/#/flowchart?id=graph" target="_blank" rel="noopener noreferrer">Flowchart (mermaid-js.github.io)</a></p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>flowchart TD</span></span>
<span class="line"><span>    Start --&gt; Stop</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,4)),i(a,{id:"mermaid-113",code:"eJxLy8kvT85ILCpRCHHhUgCC4BIQR1fXDsjKL+ACAKoYCaM="}),s[3]||(s[3]=n(`<hr><blockquote><p><code>--&gt;</code> 实线箭头</p></blockquote><hr><h3 id="流程图整体方向" tabindex="-1"><a class="header-anchor" href="#流程图整体方向"><span>流程图整体方向</span></a></h3><ul><li><code>TB</code> - top to bottom</li><li><code>TD</code> - top-down/ same as top to bottom</li><li><code>BT</code> - bottom to top</li><li><code>RL</code> - right to left</li><li><code>LR</code> - left to right</li></ul><hr><h3 id="结点形状" tabindex="-1"><a class="header-anchor" href="#结点形状"><span>结点形状</span></a></h3><blockquote><p><a href="https://mermaid-js.github.io/mermaid/#/flowchart?id=node-shapes" target="_blank" rel="noopener noreferrer">Flowchart (mermaid-js.github.io)</a></p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>flowchart LR</span></span>
<span class="line"><span>  id1(round edges)</span></span>
<span class="line"><span>  id2([stadium-shaped])</span></span>
<span class="line"><span>  id3[[subroutine shape]]</span></span>
<span class="line"><span>  id4[(A node in a cylindrical shape)]</span></span>
<span class="line"><span>  id5((A node in the form of a circle))</span></span>
<span class="line"><span>  id6&gt;A node in an asymmetric shape]</span></span>
<span class="line"><span>  id7{A node rhombus}</span></span>
<span class="line"><span>  id8{{A hexagon node}}</span></span>
<span class="line"><span>  id9[/Parallelogram/]</span></span>
<span class="line"><span>  id10[\\Parallelogram alt\\]</span></span>
<span class="line"><span>  id11[/Trapezoid\\]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)),i(a,{id:"mermaid-161",code:"eJxVjbtuwzAMRfd+BUd7KFz33aVA9w5F0U3xwFi0JUASC0pGmwT59yiShwTgdO7hvZPjv9GgJPj8vgGwum+El6CB9EyxLei+UTGhtou/jQZ/SQ+VPygVl23Wkw0EJRqGkjyq5gMCawIbAGHcORu02BFd1dqqPTUXWjIEE4sHns4vVkZHbR16fr9oyxd33lPKfetokV4OqySG/XaJx0JfDxkb+seZQ4mPlb+p7gsFnSPHs6Dvakl/pzZXHNClzZr1qvuRvLdnqzM7AQLYaEE="}),s[4]||(s[4]=n(`<hr><h3 id="连接线形状" tabindex="-1"><a class="header-anchor" href="#连接线形状"><span>连接线形状</span></a></h3><blockquote><p><a href="https://mermaid-js.github.io/mermaid/#/flowchart?id=links-between-nodes" target="_blank" rel="noopener noreferrer">Flowchart (mermaid-js.github.io)</a></p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>flowchart LR</span></span>
<span class="line"><span>  A --&gt; B</span></span>
<span class="line"><span>  A --实线单箭头--&gt; B</span></span>
<span class="line"><span>  A --&gt;|实线单箭头|C</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  B --- C</span></span>
<span class="line"><span>  B --实线--- C</span></span>
<span class="line"><span>  B ---|实线|D</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  C -.-|虚线|D</span></span>
<span class="line"><span>  C -.-&gt;|虚线单箭头|D</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  D ==&gt; E</span></span>
<span class="line"><span>  D ==&gt;|粗实线单箭头|E</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  E --&gt; F &amp; G --&gt; H</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  H &amp; I --&gt; J &amp; K</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  L --o|实线圆头|M</span></span>
<span class="line"><span>  M --x|实线x头|N</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  N &lt;--&gt; |双向箭头|O</span></span>
<span class="line"><span>  O o--o P</span></span>
<span class="line"><span>  P x--x Q</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  R -------|横线越多越长| S</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)),i(a,{id:"mermaid-172",code:"eJxLy8kvT85ILCpR8AniUlBwVNDVtVNwgrKerpv3fNf+p71Tn69b+3TJFmQpuxo0yRpnoAwQOQEldRVAHBALoghZRBeqscYFot5ZQVdPt+bFzFkwMbCAHVQEYTxUuYuCra2dgiuMVfN803R0h4AkgcgV7BU3BTUFdzDLAyLsARTwBAt4AVneEEEfoEA+zEdz2kCm+AKFfYHCFVDhCpCgH0S5n4INyICap/09TydMhFrrD5TwV8gHGqQQAGQGKFQANSsEQnQEgXwOAjXPVqwCmvZiW9fTJbOA5Mup+2sUgrkAHxWVzw=="}),s[5]||(s[5]=n(`<hr><h3 id="语法冲突的特殊字符" tabindex="-1"><a class="header-anchor" href="#语法冲突的特殊字符"><span>语法冲突的特殊字符</span></a></h3><blockquote><p><a href="https://mermaid-js.github.io/mermaid/#/flowchart?id=special-characters-that-break-syntax" target="_blank" rel="noopener noreferrer">Flowchart (mermaid-js.github.io)</a></p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>flowchart LR</span></span>
<span class="line"><span>  A[&quot;结点内使用(括号)&quot;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,4)),i(a,{id:"mermaid-183",code:"eJxLy8kvT85ILCpR8AniUlBwjFZ6vnvy86adT9tan+zd/3zKCo1n3Wue9m/XVIrlAgDAaBV9"}),s[6]||(s[6]=n(`<hr><h3 id="子图" tabindex="-1"><a class="header-anchor" href="#子图"><span>子图</span></a></h3><p><code>语法</code>:</p><div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">subgraph title</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    graph definition</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">end</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>示例</code>:</p><div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">flowchart TB</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    c1--&gt;a2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    subgraph one</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    a1--&gt;a2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    end</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    subgraph two</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    b1--&gt;b2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    end</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    subgraph three</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    c1--&gt;c2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    end</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)),i(a,{id:"mermaid-196",code:"eJxLy8kvT85ILCpRCHHiUgCCZENdXbtEIzC7uDQpvSixIEMhPy8VLJCIJJmal4KqqKQ8HyyQBFKUhEtRRlEqxCywRckIZQD3KSO4"}),s[7]||(s[7]=n(`<hr><h2 id="时序图" tabindex="-1"><a class="header-anchor" href="#时序图"><span>时序图</span></a></h2><blockquote><p><a href="https://mermaid-js.github.io/mermaid/#/sequenceDiagram" target="_blank" rel="noopener noreferrer">Sequence diagram (mermaid-js.github.io)</a></p><p><a href="https://blog.csdn.net/qq_37196887/article/details/112764646" target="_blank" rel="noopener noreferrer">Mermaid之时序图语法_Feng乍起的博客-CSDN博客_时序图语法</a></p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sequenceDiagram</span></span>
<span class="line"><span>participant C as Client.discard(9)</span></span>
<span class="line"><span>participant S as Server.47660</span></span>
<span class="line"><span>C -&gt;&gt; S: [SYN] 请求建立 TCP 连接</span></span>
<span class="line"><span>S -&gt;&gt; C: [SYN ACK] 确认建立 TCP 连接</span></span>
<span class="line"><span>C -&gt;&gt; S: [ACK] 确认收到确认建立 TCP 连接</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Note over C,S: ↑ 3 次握手</span></span>
<span class="line"><span></span></span>
<span class="line"><span>loop 数据传输(不分片情况)</span></span>
<span class="line"><span>C -&gt;&gt; S: [PSH ACK] 发送数据</span></span>
<span class="line"><span>S -&gt;&gt; C: [ACK]确认接收数据</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Note over C,S: ↓ 4 次挥手</span></span>
<span class="line"><span></span></span>
<span class="line"><span>C -&gt;&gt; S: [FIN, ACK] 发起终止连接请求</span></span>
<span class="line"><span>S -&gt;&gt; C: [ACK] 确认终止连接请求</span></span>
<span class="line"><span>S -&gt;&gt; C: [FIN, ACK] 发起终止连接请求</span></span>
<span class="line"><span>C -&gt;&gt; S: [ACK] 确认终止连接请求</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)),i(a,{id:"mermaid-210",code:"eJwrTi0sTc1LTnXJTEwvSszlKkgsKslMzixIzCtRcFZILFZwzslMzSvRS8ksTk4sStGw1ERREgxSEpxaVJZapGdibmZmwOWsoGtnpxBspRAdHOkXq/Bi/fZnG5ue7t71fHW3QohzgMKL/fOe9S3lCgYrc4YoU3B09o5VeL5w3Yt1SzCVIkxEUvZsyranHRtwaeHyyy9JVcgHukrBWQeo81HbRAVjhWdrFj7rX/iss5uLKyc/v0Dh2dQNz3rXPdmz4MW+yRpPdvQ+7Wh73tn+rLn1adtWTSRrA4I9IC582j/xZUMjRBuSD0ByUFf1LQU6DKogNS8Fi0MmK5iAHdKzFOwQhC1unn46cGtebN3+fHfHs7WLIB6ChCKaldCQwKuOCEOxBi8WdQCT7AEh"})])}const m=e(r,[["render",t],["__file","Mermaid.html.vue"]]),v=JSON.parse('{"path":"/NoteTools/Mermaid.html","title":"Mermaid","lang":"zh-CN","frontmatter":{"description":"Mermaid Mermaid 结点内文字换行 限制流程图大小 显示支持 甘特图 流程图 流程图整体方向 结点形状 连接线形状 语法冲突的特殊字符 时序图 结点内文字换行 限制流程图大小 绘图时在当前方向上绘制的结点数量及文字比较多那么篇幅会无限扩大, 目前没有找到特别好的限制区域大小的方法 不过通常编辑文档时的界面左右大小适应屏幕左右宽度, 上下可以...","head":[["meta",{"property":"og:url","content":"https://233official.github.io/dailynotes/VuePressTemplate/NoteTools/Mermaid.html"}],["meta",{"property":"og:site_name","content":"DailyNotes"}],["meta",{"property":"og:title","content":"Mermaid"}],["meta",{"property":"og:description","content":"Mermaid Mermaid 结点内文字换行 限制流程图大小 显示支持 甘特图 流程图 流程图整体方向 结点形状 连接线形状 语法冲突的特殊字符 时序图 结点内文字换行 限制流程图大小 绘图时在当前方向上绘制的结点数量及文字比较多那么篇幅会无限扩大, 目前没有找到特别好的限制区域大小的方法 不过通常编辑文档时的界面左右大小适应屏幕左右宽度, 上下可以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-03T05:45:04.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-03T05:45:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mermaid\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-03T05:45:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"233\\",\\"url\\":\\"https://233official.github.io/dailynotes/\\"}]}"]],"date":"2025-01-03T05:45:04.000Z"},"headers":[{"level":2,"title":"结点内文字换行","slug":"结点内文字换行","link":"#结点内文字换行","children":[]},{"level":2,"title":"限制流程图大小","slug":"限制流程图大小","link":"#限制流程图大小","children":[]},{"level":2,"title":"显示支持","slug":"显示支持","link":"#显示支持","children":[]},{"level":2,"title":"甘特图","slug":"甘特图","link":"#甘特图","children":[]},{"level":2,"title":"流程图","slug":"流程图","link":"#流程图","children":[{"level":3,"title":"流程图整体方向","slug":"流程图整体方向","link":"#流程图整体方向","children":[]},{"level":3,"title":"结点形状","slug":"结点形状","link":"#结点形状","children":[]},{"level":3,"title":"连接线形状","slug":"连接线形状","link":"#连接线形状","children":[]},{"level":3,"title":"语法冲突的特殊字符","slug":"语法冲突的特殊字符","link":"#语法冲突的特殊字符","children":[]},{"level":3,"title":"子图","slug":"子图","link":"#子图","children":[]}]},{"level":2,"title":"时序图","slug":"时序图","link":"#时序图","children":[]}],"git":{"createdTime":1735883104000,"updatedTime":1735883104000,"contributors":[{"name":"233Mac","username":"233Mac","email":"ayusummer233@vip.qq.com","commits":1,"url":"https://github.com/233Mac"}]},"readingTime":{"minutes":3.76,"words":1127},"filePathRelative":"NoteTools/Mermaid.md","localizedDate":"2025年1月3日","excerpt":"","autoDesc":true}');export{m as comp,v as data};
