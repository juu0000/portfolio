module "ec2_instances" {
  for_each = { for idx, instance in local.config.ec2_instances : idx => instance }

  source  = "terraform-aws-modules/ec2-instance/aws"

  name                   = each.value.name
  instance_type          = each.value.instance_type
  key_name               = each.value.key_name
  monitoring             = each.value.monitoring
  vpc_security_group_ids = each.value.vpc_security_group_ids
  subnet_id              = each.value.subnet_id

  tags = merge(
    {
      "Terraform" = "True"
    },
    each.value.tags
  )
}
