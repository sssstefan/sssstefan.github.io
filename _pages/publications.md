---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->
You can also find my papers on <a href="https://scholar.google.com/citations?user=1nVpMXgAAAAJ&hl=en">my Google Scholar profile</a>.

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<hr>

## Books

Books to which I contributed chapters.

<div class="publications">

{% bibliography --query @book %}

</div>

<hr>

## Conference and Journal Papers

<!-- Everything that is not a @book entry, grouped by year (see `scholar` in _config.yml). -->

<div class="publications">

{% bibliography --query !@book %}

</div>
