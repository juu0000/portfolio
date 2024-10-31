terraform {
  backend "s3" {
    bucket               = "terraform-state-lhj-portfolio"
    key                  = "terraform.tfstate"
    region               = "ap-northeast-2"
    dynamodb_table       = "terraform-locks"
    encrypt              = true
    workspace_key_prefix = "s3"
  }
}