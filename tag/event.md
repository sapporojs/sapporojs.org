---
layout: default
title: event
---
{% for post in site.tags.event %}
<div class="section entry">
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <ul class="info">
    <li class="date">{{ post.date | date: "%Y-%m-%d" }}</li>
    <li class="tag">
    {% if post.tag %}
      <a href="/tag/{{ post.tag }}.html">{{ post.tag }}</a>
    {% endif %}
    </li>
  </ul>
  <div class="textBody">
    {{ post.content }}
  </div>
</div>
{% endfor %}
