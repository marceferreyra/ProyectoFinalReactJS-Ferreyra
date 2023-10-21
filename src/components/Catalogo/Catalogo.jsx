import BandaLargaImg from "../../img/banda-larga.jpg";
import BandaLargaReforzadaImg from "../../img/banda-larga-reforzada.jpg"
import BandaTobilleraImg from "../../img/banda-tobillera.jpg"
import BandaOchoImg from "../../img/banda-8.jpg"
import BandaredondaImg from "../../img/banda-redonda.jpg"
import BandaSetImg from "../../img/bandas-set.jpg"
import TirabandBajaImg from "../../img/tiraband-baja.jpg"
import TirabandAltaImg from "../../img/tiraband-alta.jpg"
import Colchoneta from "../../img/colchoneta.jpg"
import ColchonetaAltaDensidad from "../../img/colchoneta-alta-densidad.jpg"
import ColchonetaPlegable from "../../img/colchoneta-plegable.jpg"
import GuantesHombre from "../../img/guantes-hombre.webp"
import GuantesMujer from "../../img/guantes-mujer.webp"
import Mancuerna1kg from "../../img/mancuerna-1kg.jpg"
import Mancuerna2kg from "../../img/mancuerna-2kg.jpg"
import Mancuerna3kg from "../../img/mancuerna-3kg.jpg"
import Mancuerna4kg from "../../img/mancuerna-4kg.jpg"
import Mancuerna5kg from "../../img/mancuerna-5kg.jpg"
import Mancuerna6kg from "../../img/mancuerna-6kg.jpg"
import Mancuerna7kg from "../../img/mancuerna-7kg.jpg"
import Mancuerna8kg from "../../img/mancuerna-8kg.jpg"
import Mancuerna9kg from "../../img/mancuerna-9kg.jpg"
import Mancuerna10kg from "../../img/mancuerna-10kg.jpg"
import Hexagonal2kg from "../../img/hexagonal-2.5kg.jpg"
import Hexagonal7kg from "../../img/hexagonal-7.5kg.jpg"
import Hexagonal12kg from "../../img/hexagonal-12.5kg.jpg"
import Hexagonal15kg from "../../img/hexagonal-15kg.jpg"
import Hexagonal22kg from "../../img/hexagonal-22.5kg.jpg"
import Hexagonal25kg from "../../img/hexagonal-25kg.jpg"
import RackMancuernas from "../../img/rack-mancuernas.jpg"
import SogaCuero from "../../img/soga-cuero.jpg"
import SogaPlastico from "../../img/soga-plastico.jpg"
import Sogaregulable from "../../img/soga-regulable.jpg"
import Tobillera0kg from "../../img/tobilleras-0.5kg.jpg"
import Tobillera1kg from "../../img/tobilleras-1kg.jpg"
import Tobillera15kg from "../../img/tobilleras-1.5kg.jpg"
import Tobillera2kg from "../../img/tobilleras-2kg.jpg"
import Tobillera3kg from "../../img/tobilleras-3kg.jpg"

const Products = [
    {
        id: 1,
        product: "Banda elástica",
        description: "Banda elásctica larga 1,10 mts",
        price: 5500,
        category: "bandas-elasticas",
        image: BandaLargaImg,
        stock: 10

    },

    {
        id: 2,
        product: "Banda elásctica reforzada",
        description: "Banda elásctica larga reforzada 1,20 mts",
        price: 7350,
        category: "bandas-elasticas",
        image: BandaLargaReforzadaImg,
        stock: 10
    },

    {
        id: 3,
        product: "Banda con tobillera",
        description: "Banda con tobillera",
        price: 5200,
        category: "bandas-elasticas",
        image: BandaTobilleraImg,
        stock: 10
    },

    {
        id: 4,
        product: "Banda en forma de ocho",
        description: "Banda en forma de ocho",
        price: 4500,
        category: "bandas-elasticas",
        image: BandaOchoImg,
        stock: 10
    },

    {
        id: 5,
        product: "Banda redonda",
        description: "Banda redonda",
        price: 3650,
        category: "bandas-elasticas",
        image: BandaredondaImg,
        stock: 10
    },

    {
        id: 6,
        product: "Set de bandas elásticas + bolso",
        description: "Set de 5 bandas elásticas, 2 manijas, 2 tobilleras regulables y 1 encastre p/puerta + bolso",
        price: 18000,
        category: "bandas-elasticas",
        image: BandaSetImg,
        stock: 10
    },

    {
        id: 7,
        product: "Tiraband de baja intensidad",
        description: "Tiraband de baja intensidad",
        price: 4200,
        category: "bandas-elasticas",
        image: TirabandBajaImg,
        stock: 10
    },

    {
        id: 8,
        product: "Tiraband de alta intensidad",
        description: "Tiraband de alta intensidad",
        price: 4900,
        category: "bandas-elasticas",
        image: TirabandAltaImg,
        stock: 10
    },

    {
        id: 9,
        product: "Colchoneta",
        description: "Colchoneta 1 x 0,50 x 0,04 mts",
        price: 15300,
        category: "colchonetas",
        image: Colchoneta,
        stock: 10
    },

    {
        id: 10,
        product: "Colchoneta alta densidad",
        description: "Colchoneta alta densidad 1 x 0,50 x 0,04 mts",
        price: 19200,
        category: "colchonetas",
        image: ColchonetaAltaDensidad,
        stock: 10
    },

    {
        id: 11,
        product: "Colchoneta plegable",
        description: "Colchoneta plegable 1 x 0,50 x 0,03 mts",
        price: 13700,
        category: "colchonetas",
        image: ColchonetaPlegable,
        stock: 10
    },

    {
        id: 12,
        product: "Mancuernas 1kg",
        description: "Mancuernas fundición recubierta en goma 1kg",
        price: 4990,
        category: "mancuernas",
        image: Mancuerna1kg,
        stock: 10
    },

    {
        id: 13,
        product: "Mancuernas 2kg",
        description: "Mancuernas fundición recubierta en goma 2kg",
        price: 9980,
        category: "mancuernas",
        image: Mancuerna2kg,
        stock: 10
    },

    {
        id: 14,
        product: "Mancuernas 3kg",
        description: "Mancuernas fundición recubierta en goma 3kg",
        price: 14970,
        category: "mancuernas",
        image: Mancuerna3kg,
        stock: 10
    },

    {
        id: 15,
        product: "Mancuernas 4kg",
        description: "Mancuernas fundición recubierta en goma 4kg",
        price: 19960,
        category: "mancuernas",
        image: Mancuerna4kg,
        stock: 10
    },

    {
        id: 16,
        product: "Mancuernas 5kg",
        description: "Mancuernas fundición recubierta en goma 5kg",
        price: 24950,
        category: "mancuernas",
        image: Mancuerna5kg,
        stock: 10
    },

    {
        id: 17,
        product: "Mancuernas 6kg",
        description: "Mancuernas fundición recubierta en goma 6kg",
        price: 29940,
        category: "mancuernas",
        image: Mancuerna6kg,
        stock: 10
    },

    {
        id: 18,
        product: "Mancuernas 7kg",
        description: "Mancuernas fundición recubierta en goma 7kg",
        price: 34930,
        category: "mancuernas",
        image: Mancuerna7kg,
        stock: 10
    },

    {
        id: 19,
        product: "Mancuernas 8kg",
        description: "Mancuernas fundición recubierta en goma 8kg",
        price: 39920,
        category: "mancuernas",
        image: Mancuerna8kg,
        stock: 10
    },

    {
        id: 20,
        product: "Mancuernas 9kg",
        description: "Mancuernas fundición recubierta en goma 9kg",
        price: 44910,
        category: "mancuernas",
        image: Mancuerna9kg,
        stock: 10
    },

    {
        id: 21,
        product: "Mancuernas 10kg",
        description: "Mancuernas fundición recubierta en goma 10kg",
        price: 49900,
        category: "mancuernas",
        image: Mancuerna10kg,
        stock: 10
    },

    {
        id: 22,
        product: "Mancuernas 2.5kg",
        description: "Mancuernas hexagonales de caucho 2.5kg",
        price: 24500,
        category: "mancuernas",
        image: Hexagonal2kg,
        stock: 10
    },

    {
        id: 23,
        product: "Mancuernas 7.5kg",
        description: "Mancuernas hexagonales de caucho 7.5kg",
        price: 73500,
        category: "mancuernas",
        image: Hexagonal7kg,
        stock: 10
    },

    {
        id: 24,
        product: "Mancuernas 12.5kg",
        description: "Mancuernas hexagonales de caucho 12.5kg",
        price: 122500,
        category: "mancuernas",
        image: Hexagonal12kg,
        stock: 10
    },

    {
        id: 25,
        product: "Mancuernas 15kg",
        description: "Mancuernas hexagonales de caucho 15kg",
        price: 147000,
        category: "mancuernas",
        image: Hexagonal15kg,
        stock: 10
    },

    {
        id: 26,
        product: "Mancuernas 22.5kg",
        description: "Mancuernas hexagonales de caucho 22.5kg",
        price: 220500,
        category: "mancuernas",
        image: Hexagonal22kg,
        stock: 10
    },

    {
        id: 27,
        product: "Mancuernas 25kg",
        description: "Mancuernas hexagonales de caucho 25kg",
        price: 245000,
        category: "mancuernas",
        image: Hexagonal25kg,
        stock: 10
    },

    {
        id: 28,
        product: "Rack para mancuernas",
        description: "Rack horizontal para mancuernas hexagonales de caucho",
        price: 771000,
        category: "mancuernas",
        image: RackMancuernas,
        stock: 10
    },

    {
        id: 29,
        product: "Tobilleras 0.5kg",
        description: "Tobilleras 0.5kg",
        price: 3300,
        category: "tobilleras",
        image: Tobillera0kg,
        stock: 10
    },

    {
        id: 30,
        product: "Tobilleras 1kg",
        description: "Tobilleras 1kg",
        price: 3900,
        category: "tobilleras",
        image: Tobillera1kg,
        stock: 10
    },

    {
        id: 31,
        product: "Tobilleras 1.5kg",
        description: "Tobilleras 1.5kg",
        price: 4500,
        category: "tobilleras",
        image: Tobillera15kg,
        stock: 10
    },

    {
        id: 32,
        product: "Tobilleras 2kg",
        description: "Tobilleras 2kg",
        price: 5250,
        category: "tobilleras",
        image: Tobillera2kg,
        stock: 10
    },

    {
        id: 33,
        product: "Tobilleras 3kg",
        description: "Tobilleras 3kg",
        price: 6100,
        category: "tobilleras",
        image: Tobillera3kg,
        stock: 10
    },
    
    {
        id: 34,
        product: "Soga de cuero",
        description: "Soga de saltar de cuero con mango de goma",
        price: 8600,
        category: "sogas",
        image: SogaCuero,
        stock: 10
    },

    {
        id: 35,
        product: "Soga de plástico",
        description: "Soga de saltar plástico",
        price: 3100,
        category: "sogas",
        image: SogaPlastico,
        stock: 10
    },

    {
        id: 36,
        product: "Soga con peso regulable",
        description: "Soga de saltar con peso regulable y mangos de goma",
        price: 6300,
        category: "sogas",
        image: Sogaregulable,
        stock: 10
    },

    {
        id: 37,
        product: "Guantes EVERLAST hombre",
        description: "Guantes entrenamiento pesas EVERLAST hombre",
        price: 18000,
        category: "guantes",
        image: GuantesHombre,
        stock: 10
    },

    {
        id: 38,
        product: "Guantes EVERLAST mujer",
        description: "Guantes entrenamiento pesas EVERLAST mujer",
        price: 18000,
        category: "guantes",
        image: GuantesMujer,
        stock: 10
    },
]

export default Products