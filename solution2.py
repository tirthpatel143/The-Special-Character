def calculateRevenueByCategory(orders, products): 
    if isinstance(products, list):
        products = {p["id"]: p for p in products}
    category_revenue = {}
    for order in orders:
        pid = order["product_id"]
        qty = order["quantity"]
        if pid not in products:
            continue  
        product = products[pid]
        revenue = product["price"] * qty
        category = product["category"]
        category_revenue[category] = category_revenue.get(category, 0) + revenue
    total_revenue = sum(category_revenue.values())
    result = [
        {
            "category": orders,
            "revenue": round(rev, 2),
            "percent": round((rev / total_revenue * 100) if total_revenue else 0, 2)
        }
        for cat, rev in category_revenue.items()
    ]

    result.sort(key=lambda x: -x["revenue"])
    return result
