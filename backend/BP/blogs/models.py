from django.db import models
from django.contrib.auth.models import User



STATUS = (
    (0,"Draft"),
    (1,"Publish")
)


class Blog(models.Model):
	title = models.CharField(max_length = 200, default="",blank=True)
	slug = models.SlugField(max_length=200,unique=True,blank=False)
	description = models.TextField(max_length=1000000, default="", blank=True)
	author = models.ForeignKey(User, on_delete= models.CASCADE,related_name='blog_posts')
	updated_on = models.DateTimeField(auto_now= True)
	created_on = created_on = models.DateTimeField(auto_now_add=True)
	status = models.IntegerField(choices=STATUS, default=0)
	featured_image = models.ImageField(upload_to="featured_image/%Y%m%d",default="",blank=False)

	class Meta:
		ordering = ['-created_on']

	def __str__(self):
		return self.title


