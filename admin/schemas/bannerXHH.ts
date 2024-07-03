export default {
    name: 'bannerXHH',
    title: 'Banner XHH',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Tiêu đề'
        },
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
                    name: 'title',
                    title: 'Tên sản phẩm',
                    type: 'string',
                },
                {
                    name: 'category',
                    title: 'Phân loại',
                    type: 'string',
                },
                {
                    name: 'price',
                    title: 'Giá',
                    type: 'string',
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
                    name: 'title',
                    title: 'Tên sản phẩm',
                    type: 'string',
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
                    name: 'text1',
                    title: 'text1',
                    type: 'string',
                },
                {
                    name: 'text2',
                    title: 'text2',
                    type: 'string',
                },
                {
                    name: 'link',
                    title: 'Link',
                    type: 'string',
                }
            ]
        },
        {
            name: 'slider',
            type: 'array',
            title: 'Banner slide',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            type: 'image',
                            name: 'image',
                            title: 'Hình ảnh'
                        },
                        {
                            name: 'link',
                            title: 'Link',
                            type: 'string',
                        }
                    ]
                }
            ]
        }
    ]
}