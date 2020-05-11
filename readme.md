## Matzore fm 89.1
 ![Build and Release](https://github.com/panos-stavrianos/matzore_radio/workflows/Build%20and%20Release/badge.svg)
### Download, Build and Run on node express server
> You need to have `npm` installed 

```sh
git clone https://github.com/panos-stavrianos/matzore_radio.git
cd matzore_radio
npm run install:clean
export PORT=80 # optional, default: 8080
npm start
```

## Alternatively use a prebuild release

You can download from the [latest release](https://github.com/panos-stavrianos/matzore_radio/releases/latest) the build.zip.
Then extract the zip file in the desired folder.
 
Alternatively you can do it from terminal
```
# cd to the folder you want to host the files
wget https://github.com/panos-stavrianos/matzore_radio/releases/latest/download/build.zip
unzip build.zip
rm build.zip
```

### NGINX 
##### If you want to run it via nginx , here is an example conf
Copy the contents of the build folder in the location you prefer

> Pay attention to `try_files $uri /index.html;`

```nginxconf
server {
        listen 80 default_server;
        listen [::]:80 default_server;
        root /var/www/html;
        index index.html;
        server_name _;
        location / {
                try_files $uri /index.html;
        }
}

```

### APACHE 
##### If you want to run it via apache2 , here is an example conf
Copy the contents of the build folder in the location you prefer

> Pay attention to `Directory section`

```shell script
sudo a2enmod rewrite
sudo a2enmod proxy
sudo a2enmod proxy_http
```

```apacheconf
<VirtualHost *:80>
        DocumentRoot /var/www/html/
            ErrorLog ${APACHE_LOG_DIR}/error.log
            CustomLog ${APACHE_LOG_DIR}/access.log combined
        RewriteEngine on
</VirtualHost>

<Directory "/var/www/html/">
RewriteEngine On

RewriteCond %{HTTP_USER_AGENT} googlebot|bingbot|yandex|baiduspider|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora\ link\ preview|sh$
RewriteCond %{QUERY_STRING} _escaped_fragment_
RewriteCond %{REQUEST_URI} ^(?!.*?(\.js|\.css|\.xml|\.less|\.png|\.jpg|\.jpeg|\.gif|\.pdf|\.doc|\.txt|\.ico|\.rss|\.zip|\.mp3|\.rar|\.exe|\.wmv|\.doc|\$

RewriteRule ^(index\.html|index)?(.*) http://prerender.app.orbitsystems.gr/%{REQUEST_SCHEME}://%{HTTP_HOST}/$2 [P,L]

RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /$1 [L]
</Directory>
```



