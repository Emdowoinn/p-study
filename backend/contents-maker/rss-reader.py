import feedparser as fp

feed = fp.parse('https://news.yahoo.co.jp/rss/media/fnnprimev/all.xml')

print(type(feed))