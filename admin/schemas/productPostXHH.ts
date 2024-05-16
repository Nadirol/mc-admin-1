export default {
    name: 'productXHH',
    title: 'Sản phẩm XHH',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Tên',
            validation: (Rule: any) => Rule.required().min(3).max(80).warning('Bắt buộc, tối thiểu 3 ký tự')
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title'
            },
            validation: (Rule: any) => Rule.required().warning('Bắt buộc')
        },
        {
            name: 'content',
            title: 'Mô tả',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
            ] 
        }               

    ]
}