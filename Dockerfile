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

COPY ./build /var/www/html

EXPOSE 80
HEALTHCHECK --interval=5s --timeout=3s --retries=3 CMD curl -f http://localhost || exit 1
ENTRYPOINT ["apache2ctl"]
CMD ["-DFOREGROUND"]