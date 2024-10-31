
resource "aws_s3_bucket" "terraform-state" {
  bucket = var.bucket-name

  lifecycle {
    prevent_destroy = false
  }

}

resource "aws_s3_bucket_versioning" "state-versioning" {
  bucket = aws_s3_bucket.terraform-state.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "state-encryption" {
  bucket = aws_s3_bucket.terraform-state.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_dynamodb_table" "terraform-locks" {
  hash_key     = "LockID"
  name         = "terraform-portfolio-locks"
  billing_mode = "PAY_PER_REQUEST"
  attribute {
    name = "LockID"
    type = "S"
  }
  tags = {
    "Environment" = "portfolio"
  }
}
