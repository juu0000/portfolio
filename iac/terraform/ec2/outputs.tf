output "ec2_instance_private_ips" {
  value = [for instance in module.ec2_instances : instance.private_ip]
}
