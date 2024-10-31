terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region = var.available-zone

  profile = "aws_mfa"

  default_tags {
    tags = {
      Terraform = "true"
      State   = "init-backend"
    }
  }
}
