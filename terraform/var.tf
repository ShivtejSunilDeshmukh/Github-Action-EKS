variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "ap-south-1"
}

variable "project_name" {
  description = "Project name"
  type        = string
  default     = "ssd-github-actions-eks"
}
variable "vpc_cidr" {
  type = string
  default = "10.0.0.0/16"
}

variable "cluster_name" {
  type = string
  default = "ssd-github-actions-eks"
}

variable "cluster_version" {
  type = string
  default = "1.36"
}

variable "node_instance_types" {
  type    = list(string)
  default = ["t3.xlarge"]
}

variable "node_desired_size" {
  type    = number
  default = 2
}

variable "node_min_size" {
  type    = number
  default = 2
}

variable "node_max_size" {
  type    = number
  default = 3
}
