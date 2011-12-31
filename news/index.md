---
layout: default
title: ニュース
---
<ul>
{% for post in site.categories.news %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    {{ post.date | date: "%Y-%m-%d" }}
  </li>
{% endfor %}
</ul>
