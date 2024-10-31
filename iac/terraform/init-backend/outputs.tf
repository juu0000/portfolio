output "s3_bucket_id" {
  value = aws_s3_bucket.terraform-state.id
}

output "s3_bucket_arn" {
  value = aws_s3_bucket.terraform-state.arn
}

output "dynamodb_table_id" {
  value = aws_dynamodb_table.terraform-locks.id
}

output "dynamodb_table_arn" {
  value = aws_dynamodb_table.terraform-locks.arn
}
