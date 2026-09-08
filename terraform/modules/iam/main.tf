
data "aws_iam_role" "eks_cluster_role" {
  name = "AmazonEKSAutoClusterRole"
}
data "aws_iam_role" "eks_node_role" {
  name = "demoEKS"
}

locals {
  eks_cluster_role_arn = data.aws_iam_role.eks_cluster_role.arn
  eks_node_role_arn    = data.aws_iam_role.eks_node_role.arn
}