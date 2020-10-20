const db = require('../db/index');
const Bundles = require('../db/models/Bundles.model');

const seeds = [
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/aaron-andary-afHVU5hBqnw-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/aleks-marinkovic-D1xH0o4alIw-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/alex-bierwagen-QhPSKlMjA34-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/alex-knight-c4Fvlp63yAQ-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/alexander-schimmeck-6RH-SuiTAD0-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/alexey-melechin-NgONgp0G4j4-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/alireza-ghezelbash-mlHzK_QQYXk-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/anna-grau-H8QAESIOafs-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/anna-grau-X06_g1Uw8uk-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/anuraag-rajasekhar-AYhRqXQ6P-0-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/artur-luczka-loAfOVk1eNc-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/bogdan-cadar-jcZh3dIecoc-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/c-z-shi-KkHHCgjXO8A-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/chalaphan-mathong-gwzr86bdmGA-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/christina-deravedisian-iEnZl7DpKRQ-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/chuttersnap-jCHtY4w4YJo-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/clinton-naik-NcTQ602gKLI-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/crystal-gard-wlXAYJGz4D8-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/dan-cook-YtKzcV4Y_Dk-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/daniel-tong-dxYdPSuBr-U-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/david-clode-nwiKPAdqNhs-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/dlanor-s-fzjWFym9jjE-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/egor-gordeev-3AXcEbX0jAw-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/erda-estremera-JSwRr9BPIjA-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/eric-muhr-QuSPtMnUVP0-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/falco-negenman--f2sJr-PJDA-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/falco-negenman-pLEwAGZiqAU-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/finan-akbar-HuC3cii5VA8-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/francis-nie-DcitvRh5n18-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/gabriele-agrillo-ENrF-lSsdqU-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/ganapathy-kumar-LdhN3w9vjhk-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/gary-meulemans-0w24KTa6I1I-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/gerald-berliner-Br0UDTYATQc-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/grace-gravett-w3CeYWHgysY-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/ilianna-brett-Frb-B5SYP2M-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/ilyuza-mingazova--PoHDRHpYUA-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/jack-b-vgnQZ4DMI6g-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/jack-b-yCe_r_39ON8-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/jake-givens-ocwmWiNAWGs-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/jakob-owens-W0hkz1EnX8I-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/james-lee-Bz5g8kveED4-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/james-wheeler-ZOA-cqKuJAA-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/jeison-higuita-DL4SOmgvfqM-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/jens-johnsson-n-6dDxFI7xc-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/jesper-aggergaard-hk7OmzxiXT8-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/jessi-pena-Bm7jy2JWHbg-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/jippe-joosten-I0RvZzjc3O0-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/john-cameron-AQA9yHwebnY-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/jonas-minden-nIOc10EJ-OI-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/jonatan-pie--3h8OXvt4-0-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/jonathan-knepper-d2wuqguRzZ0-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/juanita-swart-IpYlH2WzWpY-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/kate-_T1jj2L60_c-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/ke-vin--F9svypZ_9Q-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/landon-arnold-PMdiRXbAbhY-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/larry-costales-ZsFXXsv5Qi4-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/lesly-derksen-SJ8RBZG4C9A-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/llanydd-lloyd-5kL77tAHTqQ-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/looie-kang-3ptcd-4OODE-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/marc-st-6ajQ-lAszvs-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/maria-teneva-UAyQxPaugY8-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/maria-teneva-j1OVl4P_BQQ-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/maurice-smeets-jgFn9lHSJ3o-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/mckayla-crump-3OR-XFzKSBo-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/mick-de-paola-_Sl9AD7NyGU-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/mohammad-alizade-XgeZu2jBaVI-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/muhammed-zafer-yahsi-e3csXDMrHA0-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/natalia-y-9rk8dvyFqNw-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/nathan-anderson-AEOLWK3-Q94-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/nathan-anderson-ybGjn33Vpmw-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/neil-mark-thomas-FvtzUX__djs-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/niilo-isotalo-WxrBjrqAh0w-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/noemie-cauchon-5QefmfNlUdQ-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/omri-d-cohen-3LfYt9WW6Do-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/osman-rana-DHMlx0Osvg8-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/patrick-hendry-hqcxvmNyFyg-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/pawel-szvmanski-ME3qOtDA4pw-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/phinehas-adams-cueYKBlXqr4-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/rezal-scharfe-URHCZcR7TKE-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/ricardo-gomez-angel-W9rKEWKdNHY-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/roland-larsson-m2De0QR_tWo-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/samuel-ferrara-npwjNTG_SQA-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/scott-webb-PMq_b18cN6A-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/sharon-mccutcheon-NkQD-RHhbvY-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/siora-photography-xxYEWf9oLRM-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/sven-scheuermeier-VNseEaTt9w4-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/syed-ahmad-VHPTXgEt074-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/tahoe-mr58GkEDKMI-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/thomas-vogel-9XS2660hx6Q-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/thong-vo-Maf7wdHCmvo-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/tim-bish-Bl6aIgnlApc-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/timj-ots0EOYuGtU-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/tina-rolf-yuF2B5Zyz88-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/tobias-keller-35ztnlQqVUk-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/trevor-kolman--eVuIxgqnpI-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/vycavia-koo-ah91SE-F_t4-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/wenniel-lun-pe_R74hldW4-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/wolfgang-hasselmann-PUcrsXh9V4s-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/yogendra-singh-ZHOCzFSyRfA-unsplash.jpg',
  },
  {
    logoURL: 'https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/zdenek-machacek-yeqt115Xkeg-unsplash.jpg',
  },
];

const seed = () => {
  return db.sync({ force: true })
  .then(() => {
    return Bundles.bulkCreate(seeds, {
      fields: ['logoURL'],
    });
  })
  .then(() => {
    db.close();
  })
  .then(() => {
    console.log('db closed');
  })
  .catch((err) => {
    console.log('your err: ', err);
  });
};

seed()
.then(() => {
  console.log('seeded');
});
