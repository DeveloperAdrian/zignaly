const ApiPhone = [
    {   
        id:1,
        PhoneModel:"iPhone", 
        Image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-mini-purple-witb-2021_FMT_WHH?wid=560&hei=744&fmt=jpeg&qlt=80&.v=1617138139000", 
        Description: "The iPhone 12 features a 6.1-inch (15 cm) display with Super Retina XDR OLED technology at a resolution of 2532×1170 pixels and a pixel density of about 460 ppi. The iPhone 12 Mini features a 5.4-inch (14 cm) display with the same technology at a resolution of 2340×1080 pixels and a pixel density of about 476 ppi.",
        Color: "Violet",
        Price: "500 USD"

    },
    {
        id:2,
        PhoneModel: "Samsung",
        Image:"https://media.ldlc.com/r1600/ld/products/00/05/59/05/LD0005590584_2.jpg",
        Description: "Galaxy S20, S20+, and S20 Ultra is a series of innovative smartphones that were introduced in February 2020. As a whole, they reflect Samsung’s entry into a whole new generation of mobile technology, but individually they have their own strengths.",
        color:"Grey",
        Price:"200 USD"
    },
    {
        id:3,
        PhoneModel:"Huawey", 
        Image:"https://cdn.pocket-lint.com/r/s/970x/assets/images/151563-phones-review-huawei-p40-pro-review-image1-gjkpbv12dl.jpg", 
        Description: "It is a mobile with the latest processor for Huawei's high-end, being an update focused mainly on design and adding part of the improvements in the photographic section that we see in these new P40. It says goodbye to the vertical rear camera module and also to the notch, all while maintaining dimensions and part of the hardware of its predecessors.",
        Color: "turquoise",
        Price: "600 USD"

    },
    {
        id:4,
        PhoneModel: "LG K52",
        Image:"https://www.naldo.com.ar/medias/Method-405585-2-515Wx515H?context=bWFzdGVyfGltYWdlc3wzNDQ1N3xpbWFnZS9qcGVnfGltYWdlcy9oZGEvaGM0Lzk2Mjg1NTI3MjQ1MTAuanBnfGM5NTllMzRlYjExZTUwZWExMDlhODMwOTIzNGUwYzFmMjAyNjZlZTA0YWNiYjE4OTUzZTY5YzhlMzJiOTY1MWM",
        Description: "The LG K52 specs include a 6.6-inch HD+ display, 2.3GHz octa-core processor, 4GB RAM, and 64GB storage. There is a quad-camera combo on the back with a 48MP main sensor, and a 13MP selfie snapper at the front. The phone is powered by a 4,000mAh battery and has a side-mounted fingerprint sensor.",
        color:"purple",
        Price:"300 USD"
    }

];

const ApiControllers = {
    getPhone: (req, res) => {

        return res.json({response:ApiPhone})
    }
}

module.exports = ApiControllers

