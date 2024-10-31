module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = local.config.vpc.name
  cidr = local.config.vpc.cidr

  azs             = local.config.vpc.azs
  private_subnets = local.config.vpc.private_subnets
  public_subnets  = local.config.vpc.public_subnets

  private_subnet_names = local.config.vpc.private_subnet_names
  public_subnet_names  = local.config.vpc.public_subnet_names


  enable_nat_gateway = local.config.vpc.enable_nat_gateway
  single_nat_gateway = local.config.vpc.single_nat_gateway
  enable_vpn_gateway = local.config.vpc.enable_vpn_gateway



  tags = merge(
    {
      "Environment" = terraform.workspace
    },
    local.config.vpc.tags
  )
}