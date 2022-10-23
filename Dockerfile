FROM node:12.16.2 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /usr/src/app

RUN npm run install:clean
RUN npm run build

# production environment
FROM ubuntu:18.04
RUN apt-get update && \
    apt-get install -y apache2 apache2-utils && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY default-apache.conf /etc/apache2/sites-available/

RUN a2enmod rewrite
RUN a2enmod proxy
RUN a2enmod proxy_http
RUN a2dissite 000-default.conf
RUN a2dissite default-ssl.conf
RUN a2ensite default-apache.conf

COPY --from=builder /usr/src/app/build /var/www/html

EXPOSE 80
ENTRYPOINT ["apache2ctl"]
CMD ["-DFOREGROUND"]

# docker build -t comet.app.orbitsystems.gr/matzore-site:1.0.7 .
# docker run --rm -it -p 3333:80 comet.app.orbitsystems.gr/matzore-site:1.0.7
# docker push comet.app.orbitsystems.gr/matzore-site:1.0.7

# docker build -t panosstavrianos/matzore-site:1.0.7 .
# docker run --rm -it -p 3333:80 panosstavrianos/matzore-site:1.0.7
# docker push panosstavrianos/matzore-site:1.0.7