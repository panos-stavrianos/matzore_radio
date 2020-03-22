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

You can download from the latest release the build.zip

```
# cd to the folder you want to host the files
wget https://github.com/panos-stavrianos/matzore_radio/releases/download/Latest/build.zip
uzip build.zip
unzip build.zip 'build/*' 

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

```apacheconf
<VirtualHost *:80>
        DocumentRoot /var/www/html
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
        RewriteEngine on
</VirtualHost>
<Directory "/var/www/html">
    RewriteEngine on
    RewriteCond %{REQUEST_FILENAME} -f [OR]
    RewriteCond %{REQUEST_FILENAME} -d
    RewriteRule ^ - [L]
    RewriteRule ^ index.html [L]
</Directory>
```
 
