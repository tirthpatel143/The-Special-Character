
from collections import Counter

def getTopSellingProducts(orders, n):
    product_counts = Counter()
    for order in orders:
        product_counts[order["product_id"]] += order["quantity"]
    
sorted_products = sorted(product_counts.items(), key=lambda x: (-x[1], x[0]))
    
    if not sorted_products:
        return []
    if n < len(sorted_products):
        cutoff_qty = sorted_products[n-1][1]
        result = [(pid, qty) for pid, qty in sorted_products if qty >= cutoff_qty]
    else:
        result = sorted_products
    return result