---
layout: default
title: Index
---
{% for post in site.categories.news limit:5 %}
<div class="section entry">
  <h2><a href="/sapporojs-web{{ post.url }}">{{ post.title }}</a></h2>
  <ul class="info">
    <li class="date">{{ post.date | date: "%Y-%m-%d" }}</li>
    <li class="tag">
    {% if post.tag %}
      <a href="/sapporojs-web/tag/{{ post.tag }}.html">{{ post.tag }}</a>
    {% endif %}
    </li>
  </ul>
  <div class="textBody">
    {{ post.content }}
  </div>
</div>
{% endfor %}
