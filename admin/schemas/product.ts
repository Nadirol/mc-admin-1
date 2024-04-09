export default {
    name: 'product',
    title: 'Sản phẩm',
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
            description: "Nhấn 'Generate' sau khi nhập xong tên rượu.",
            options: {
                source: 'title'
            },
            validation: (Rule: any) => Rule.required().warning('Bắt buộc')
        },
        {
            name: 'image',
            title: 'Hình ảnh',
            type: 'image',
            validation: (Rule: any) => Rule.required().warning('Bắt buộc')
        },
        {
            name: 'type',
            title: 'Loại rượu',
            type: 'string',
            description: "Chọn loại rượu vang",
            validation: (Rule: any) => Rule.required().warning('Bắt buộc'),
            options: {
                list: ['Red', 'White', 'Sparkling', 'Sparkling Rose'],
                layout: 'radio',
                direction: "horizontal"
            }
        },
        {
            name: 'alcoholContent',
            title: 'Nồng độ cồn',
            type: 'string',
            description: "Ghi số nồng độ cồn, thay dấu phẩy bằng dấu chấm và kết thúc với ký tự phần trăm (%).    --Ví dụ: 10%, 11.5%, 13.5%.",
            validation: (Rule: any) => Rule.required().warning('Bắt buộc'),
        },
        {
            name: 'volume',
            title: 'Dung tích',
            type: 'number',
            description: "mililit (ml)",
        },
        {
            name: 'brand',
            title: 'Thương hiệu',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Giá',
            type: 'object',
            fields: [
                {
                    name: 'fullPrice',
                    title: 'Giá gốc',
                    type: 'number',
                    description: "Giá trị Việt Nam đồng",
                },
                {
                    name: 'isDiscounted',
                    title: 'Có giảm giá',
                    type: 'boolean',
                    initialValue: false
                },
                {
                    name: 'discountPercentage',
                    title: 'Phần trăm giảm giá',
                    type: 'number',
                    hidden: ({ parent, value }: { parent: any, value: number | null }) => !value && !parent?.isDiscounted
                }
            ]
        },
        {
            name: 'isBestSeller',
            title: 'Đặt làm sản phẩm bán chạy',
            description: 'Sản phẩm này sẽ được trưng bày ở mục Best seller/Sản phẩm bán chạy nếu tích vào mục này',
            type: 'boolean',
            initialValue: false
        },
        {
            name: 'vi',
            title: "Nội dung tiếng Việt",
            type: 'object',
            fields: [
                {
                    name: 'description',
                    title: 'Mô tả ngắn',
                    type: 'array',
                    of: [
                        {
                            type: 'block'
                        },
                    ]                
                },
                {
                    name: 'descriptionSEO',
                    title: 'Mô tả chi tiết',
                    type: 'array',
                    of: [
                        {
                            type: 'block'
                        },
                    ]                
                },
            ]
        },
        {
            name: 'en',
            title: "Nội dung tiếng Anh",
            type: 'object',
            fields: [
                {
                    name: 'description',
                    title: 'Mô tả',
                    type: 'array',
                    of: [
                        {
                            type: 'block'
                        },
                    ]
                },
                {
                    name: 'descriptionSEO',
                    title: 'Mô tả chi tiết',
                    type: 'array',
                    of: [
                        {
                            type: 'block'
                        },
                    ]                
                },
            ]
        },
        {
            name: 'origin',
            title: 'Nguồn gốc',
            type: 'object',
            fields: [
                {
                    name: 'vi',
                    title: 'Tên Tiếng Việt',
                    type: 'string',
                },
                {
                    name: 'en',
                    title: 'Tên Tiếng Anh',
                    type: 'string',
                }
            ]
        }
    ]
}