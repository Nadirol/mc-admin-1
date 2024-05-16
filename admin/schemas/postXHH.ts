export default {
    name: 'postXHH',
    type: 'document',
    title: 'Bài viết XHH',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Tiêu đề'
        },
        {
            name: 'overview',
            type: 'string',
            title: 'Tổng quan'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title'
            }
        },
        {
            name: 'image',
            title: 'Hình ảnh',
            type: 'image',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Nội dung',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image',
                    fields: [
                        {
                            type: 'text',
                            name: 'alt',
                            title: 'Alternative text'
                        }
                    ]
                }
            ]
        },
        {
            name: 'tableOfContent',
            type: 'array',
            title: 'Mục lục',
            of: [{
                type: 'string'
            }]
        }
    ]

}