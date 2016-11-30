---
title: "Good CSS"
layout: alt
---
<header class="pt4 pt5-ns ph3 f4 f3-ns center measure">
    <time class="f6 f5-ns tl db" datetime="{{page.date}}">{{page.date | date: "%d %B %Y"}}</time>
    <p class="lh-copy f4 f3-ns">
      Since I've started authoring css, I've been asking myself and other css developers the same question: <b>What is 'good css?'</b>
      After many years of writing, refactoring, and deleting css; this is a short list of things I believe to be true.
    </p>
</header>
<div class="ph3 measure f4 f3-ns center pb5">
  <h2 class="f3 fw9 mt5 mb3">
    Good CSS...
  </h2>
  <ul class="f4 f3-ns list pl0 lh-copy mt0">
    <li class="mb3">Doesn't break <b>any</b> functionality of plain html.</li>
    <li class="mb3">Makes an interface more readable for <b>everyone</b> on any device.</li>
    <li class="mb3">Enhances the usability and accessibility of an interface on all devices for all users.</li>
    <li class="mb3">Allows you to quickly change a single interface without breaking other interfaces.</li>
    <li class="mb3">Renders quickly in the browser.</li>
    <li class="mb3">Runs at 60fps (no jank on window resize or during scrolling).</li>
  </ul>
  <h2 class="f3 fw9 mt5 mb3">
    Good CSS is...
  </h2>
  <ul class="list pl0 lh-copy mt0">
    <li class="mb3">Highly reusable - even across projects.</li>
    <li class="mb3">Well documented.</li>
    <li class="mb3">Easy to read and understand.</li>
    <li class="mb3">ID free.</li>
    <li class="mb3">Mobile-first.</li>
    <li class="mb3">Easy to maintain.</li>
    <li class="mb3">As small as possible.</li>
    <li class="mb3">Unassuming.</li>
  </ul>
</div>
