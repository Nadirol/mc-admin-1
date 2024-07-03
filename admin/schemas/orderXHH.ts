export default {
    name: 'orderXHH',
    type: 'document',
    title: 'Đơn hàng XHH',
    fields: [
        {
            name: 'code',
            type: 'string',
            title: 'Mã đơn hàng',
            readOnly: (document: any) => document.isCompleted
        },
        {
            name: 'username',
            type: 'string',
            title: 'Tên khách hàng',
            readOnly: true
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email',
            readOnly: true
        },
        {
            name: 'phoneNumber',
            type: 'string',
            title: 'Số điện thoại',
            readOnly: true
        },
        {
            name: 'phoneNumber2',
            type: 'string',
            title: 'Số điện thoại dự phòng',
            readOnly: true
        },
        {
            name: 'date',
            type: 'datetime',
            title: 'Thời gian đặt hàng',
            readOnly: true
        },
        {
            name: 'payment',
            type: 'string',
            title: 'Phương thức thanh toán',
            readOnly: (document: any) => document.isCompleted
        },
        {
            name: 'address',
            type: 'object',
            title: 'Địa chỉ',
            readOnly: (document: any) => document.isCompleted,
            fields: [
                {
                    name: 'city',
                    title: 'Tỉnh/Thành phố',
                    type: 'string',
                    readOnly: true
                },
                {
                    name: 'district',
                    title: 'Quận/Huyện',
                    type: 'string',
                    readOnly: true
                },
                {
                    name: 'ward',
                    title: 'Phường/Xã',
                    type: 'string',
                    readOnly: true
                },
                {
                    name: 'details',
                    title: 'Chi tiết địa chỉ',
                    type: 'string',
                    readOnly: true
                }
            ]
        },
        {
            name: 'products',
            title: 'Sản phẩm',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'title',
                        title: 'Tên',
                        type: 'string',
                        readOnly: (document: any) => document.isCompleted
                    },
                    {
                        name: 'quantity',
                        title: 'Số lượng',
                        type: 'number',
                        readOnly: (document: any) => document.isCompleted
                    },
                    {
                        name: 'variation',
                        title: 'Phân loại',
                        type: 'string',
                        readOnly: (document: any) => document.isCompleted
                    }
                ]
            }],
        },
        {
            name: 'total',
            title: 'Tổng thành tiền',
            type: 'number',
            readOnly: (document: any) => document.isCompleted
        },
        {
            name: 'note',
            title: 'Ghi chú',
            type: 'string',
            readOnly: (document: any) => document.isCompleted
        },
        {
            name: 'isCompleted',
            title: 'Đã xử lý',
            type: 'boolean',
            initialValue: false
        },
    ]

}