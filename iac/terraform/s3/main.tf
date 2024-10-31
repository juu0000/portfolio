module "s3_buckets" {
  for_each = { for idx, bucket in local.config.buckets : idx => bucket }

  source = "terraform-aws-modules/s3-bucket/aws"

  bucket = each.value.name
  acl    = each.value.acl != null ? each.value.acl : "private"

  control_object_ownership = true
  object_ownership         = "ObjectWriter"

  versioning = {
    enabled = true
  }

  tags = merge(
    {
      "Terraform" = "True"
    },
    each.value.tags
  )
}
