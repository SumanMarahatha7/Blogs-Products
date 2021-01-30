from django.db import models


class Category(models.Model):
    name= models.CharField(max_length=30,help_text="Maximum 30 Characters",blank=False)

    def __str__(self):
        return self.name

class Product(models.Model):
    title = models.CharField(max_length=30,help_text="Maximum 30 Characters",blank=False)
    summary = models.CharField(max_length=250, help_text="Exactly 115 Characters",blank=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE,help_text="Select Your Category")
    featured_image = models.ImageField(upload_to="featured_image/%Y%m%d", default="")
    demo_url = models.URLField(max_length=250,blank=True,help_text="Provide demo URL Address")
    highlight = models.BooleanField(blank=True,default=False,help_text="You can choose only one product for highlight")


    def __str__(self):
        return self.title
