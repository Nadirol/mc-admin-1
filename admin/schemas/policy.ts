export default {
    name: 'policy',
    type: 'document',
    title: 'Chính sách',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Tiêu đề'
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
    ]

}