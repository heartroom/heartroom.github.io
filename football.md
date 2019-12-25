---
layout: default
id: 足球
---
### 足球相关

{% for post in site.categories.football %}
<div class="item">
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <small>{{post.date | date: "%Y-%m-%d"}}</small>
  <div class="desc">{{ post.content | strip_html | strip_newlines | truncate: 100 }}</div>
  <div class="detail"><a href="{{ post.url }}">查看详情</a></div>
</div>
{% endfor %}
