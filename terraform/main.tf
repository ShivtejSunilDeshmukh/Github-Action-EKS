module "ecr" {
  source = "./modules/ecr"
  project_name = var.project_name
}

module "vpc" {
  source = "./modules/vpc"
  
  project_name = var.project_name
  aws_region   = var.aws_region
  vpc_cidr     = var.vpc_cidr
}
module "iam" {
  source = "./modules/iam"

}

module "eks" {
  source = "./modules/eks"

  cluster_name        = var.cluster_name
  cluster_version     = var.cluster_version
  private_subnet_ids  = module.vpc.private_subnet_ids
  cluster_role_arn    = module.iam.eks_cluster_role_arn
  node_role_arn       = module.iam.eks_node_role_arn
  node_instance_types = var.node_instance_types
  node_desired_size   = var.node_desired_size
  node_min_size       = var.node_min_size
  node_max_size       = var.node_max_size
}