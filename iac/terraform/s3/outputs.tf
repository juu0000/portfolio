output "bucket_arn" {
  value = [for bucket in module.s3_buckets : bucket.s3_bucket_arn]
}