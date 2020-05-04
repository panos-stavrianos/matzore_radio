export function get_default_meta({
                                     title = 'Ματζόρε FM 89.1!!!TEST3-1.0.0-!!!!!',
                                     description = 'Ο σταθμός του Πανεπιστημίου Κρήτης στο Ρέθυμνο',
                                     image = 'http://matzore.radio.uoc.gr/static/media/matzore_logo_192.f10c1636.png',
                                     type = 'music.radio_station',
                                     url = document.location.href,
                                     keywords = 'Ματζόρε,matzore,radio,radio station,rethymno,uoc,ρέθυμνο,φοιτητικός σταθμός,Πανεπιστημίου Κρήτης'
                                 }={}
) {
    return {
        title: title,
        description: description,
        meta: {
            property: {
                'og:title': title,
                'og:description': description,
                'og:image': image,
                'og:type': type,
                'og:url': url
            },
            charset: 'utf-8',
            name: {
                keywords: keywords
            }
        }
    }
}
get_default_meta()