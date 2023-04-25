import React from 'react';

const Map = () => {
    return (
        <div id="map">
            <iframe
                className="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.940124152315!2d111.50341699482354!3d65.94744774839701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5b7e03c2f11c46cb%3A0x7cd206a638ecdedc!2z0JDQudGF0LDQuyDRgdC10YDQstC40YE!5e0!3m2!1sru!2sru!4v1682385358711!5m2!1sru!2sru"
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default Map;