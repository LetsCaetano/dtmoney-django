from django import template
from website.urls import urlpatterns

register = template.Library()

@register.simple_tag
def find_url(url):
    for e in urlpatterns:
        if url == e.name:
            return True
    return False