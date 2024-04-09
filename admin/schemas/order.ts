export default {
    name: 'order',
    type: 'document',
    title: 'Đơn hàng',
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
            name: 'delivery',
            type: 'string',
            title: 'Vận chuyển',
            readOnly: (document: any) => document.isCompleted
        },
        {
            name: 'address',
            type: 'string',
            title: 'Địa chỉ',
            readOnly: (document: any) => document.isCompleted
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