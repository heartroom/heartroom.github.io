---
layout: default
id: tech
---
### 技术相关

{% for post in site.categories.tech %}
<div class="item">
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <small>{{post.date | date: "%Y-%m-%d"}}</small>
  <div class="desc">{{ post.excerpt }}</div>
  <div class="detail"><a href="#">read all</a></div>
</div>
{% endfor %}
