export default {
    name: 'bannerXHH',
    title: 'Banner XHH',
    type: 'document',
    fields: [
        {
            name: 'demonstration',
            title: 'Banner đầu trang',
            type: 'image',
        },
        {
            name: 'banners',
            title: 'Banner',
            type: 'object',
            fields: [
                {
                    name: 'banner1',
                    title: 'Banner 1',
                    type: 'object',
                    fields: [
                        {
                            name: 'image',
                            title: 'Hình ảnh',
                            type: 'image',
                        },
                        {
                            name: 'link',
                            title: 'Link',
                            type: 'string',
                        }
                    ]
                },
                {
                    name: 'banner2',
                    title: 'Banner 2',
                    type: 'object',
                    fields: [
                        {
                            name: 'image',
                            title: 'Hình ảnh',
                            type: 'image',
                        },
                        {
                            name: 'link',
                            title: 'Link',
                            type: 'string',
                        }
                    ]                
                },
                {
                    name: 'banner3',
                    title: 'Banner 3',
                    type: 'object',
                    fields: [
                        {
                            name: 'image',
                            title: 'Hình ảnh',
                            type: 'image',
                        },
                        {
                            name: 'link',
                            title: 'Link',
                            type: 'string',
                        }
                    ]                
                },
            ]
        },

        {
            name: 'demonstration2',
            title: 'Banner slider',
            type: 'image',
        },
        {
            name: 'sliderBanner',
            title: 'Banner 2',
            type: 'array',
            of: [
                {                    
                    type: 'object',
                    fields: [
                        {
                            name: 'image',
                            title: 'Hình ảnh',
                            type: 'image',
                        },
                        {
                            name: 'link',
                            title: 'Link',
                            type: 'string',
                        }
                    ]
                }
            ]
        },
    ]
}