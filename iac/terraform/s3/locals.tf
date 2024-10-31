locals {
  config = var.environment == "dev" ? yamldecode(file("./env/dev.yaml")) : yamldecode(file("./env/prod.yaml"))
}
