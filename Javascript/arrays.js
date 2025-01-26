const orders = [ { orderId: 'A101', customer: 'John Doe', orderTotal: 120 }, { orderId: 'A102', customer: 'Jane Smith', orderTotal: 45 }, { orderId: 'A103', customer: 'Alice Brown', orderTotal: 75 } ];

let filtered_orders = orders.filter(x => x.orderTotal > 50);

console.log(filtered_orders);

let totla_orders = orders.reduce((curr_sum,order)=>{ return order.orderTotal + curr_sum},0)

console.log(totla_orders);

orders.sort((a,b)=>{return a.orderTotal - b.orderTotal});

console.log(orders);