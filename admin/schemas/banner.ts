export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
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