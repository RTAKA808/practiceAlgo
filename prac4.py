# Given a list of urls extract the domain names ie example.com from example.com/page]
sample=["http://www.sameple.com/page","http://www.test.com/page","http://www.algo.com/hard"]

def domain_names(urls):
  for url in urls:
    if "//" in url:
      print(url.split("://")[1].split("/")[0].split("www")[1])


print(domain_names(sample))