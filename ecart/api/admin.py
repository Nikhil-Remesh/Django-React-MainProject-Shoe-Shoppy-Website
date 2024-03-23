from django.contrib import admin
from .category.models import category
from .product.models import Product
from .user.models import CustomUser
from .order.models import Order
from .brand.models import brand



# Register your models here.
admin.site.register(category)
admin.site.register(Product)
admin.site.register(CustomUser)
admin.site.register(Order)
admin.site.register(brand)


