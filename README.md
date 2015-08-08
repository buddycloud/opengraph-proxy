# opengraph-proxy

Start it
```
node og.js
```

Example usage

```
http://localhost:3000/?url=https://www.youtube.com/watch?v=kQypE-WMXAU
```

The angular client has opengraph support. At buddycloud.org it does not work because the 
opengraph is loaded from here:
```
http://datenkueche.com/buddycloud/ogp/crawler.php?url=https://www.youtube.com/watch?v=kQypE-WMXAUhttp://datenkueche.com/buddycloud/ogp/crawler.php?url=https://www.youtube.com/watch?v=kQypE-WMXAU
```
This is not https and the browser does not allow it.

The script must be installed at buddycloud.org.
