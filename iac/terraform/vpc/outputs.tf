output "vpc_private_subnets" {
  value = module.vpc.private_subnets
}

output "vpc_public_subnets" {
  value = module.vpc.public_subnets
}

output "vpc_route_table_ids" {
  value = module.vpc.private_route_table_ids
}

output "vpc_public_route_table_ids" {
  value = module.vpc.public_route_table_ids
}

output "vpc_nat_gateway_id" {
  value = module.vpc.natgw_ids
}
