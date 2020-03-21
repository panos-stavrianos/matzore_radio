## Matzore fm 89.1
 
> You need to have `npm` installed 
### Download, Build and Run
```sh
git clone https://github.com/panos-stavrianos/matzore_radio.git
cd matzore_radio
npm run install:clean
export PORT=80 # optional, default: 8080
npm start
```
### NGINX 
##### If you want to run it via nginx , here is an example conf
Copy the contents of the build folder in the location you prefer

> Pay attention to `try_files $uri /index.html;`

```nginxconf
server {
        listen 8090 default_server;
        listen [::]:8090 default_server;
        root /var/www/html;
        index index.html;
        server_name _;
        location / {
                try_files $uri /index.html;
        }
}

```