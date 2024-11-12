terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region = var.available-zone
  # aws provider version 4.0 이상부터 프로필 지정시 환경변수 작동 안함
  # profile = "aws_mfa2"

  default_tags {
    tags = {
      Terraform = "true"
      State   = "init-backend"
    }
  }
}
