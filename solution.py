from collections import defaultdict

def getTopSellingProducts(orders, n):

    product_sales = defaultdict(int)
    for order in orders:
        product_sales[order['product_id']] += order['quantity']
    

    sorted_products = sorted(product_sales.items(), key=lambda x: -x[1])

    top_products = []
    last_qty = None
    for i, (prod_id, qty) in enumerate(sorted_products):
        if i < n or qty == last_qty:
            top_products.append({'product_id': prod_id, 'quantity_sold': qty})
            last_qty = qty
        else:
            break
    return top_products
