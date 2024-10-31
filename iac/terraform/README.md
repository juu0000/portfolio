# Terraform

이 문서는 Terraform의 사용법에 대한 정보를 제공합니다.

## 개요
Terraform은 인프라를 코드로 관리할 수 있는 도구입니다. 이 도구를 사용하여 개발(dev) 및 운영(prod) 환경을 구분하여 관리할 수 있습니다.
backstage와 같은 내부플랫폼을 통해서 동작할 수 있도록 작성되어 있습니다.

## 환경 설정 종류
기본적으로 아래와 같은 방법들을 사용하여 terraform state를 관리하게 됩니다.
본 코드에서는 workspace를 사용하여 dev와 prod 환경을 구분하여 관리할 수 있도록 구성하였습니다.

- **Workspace 사용**: 여러 환경을 관리하기 위해 workspace를 사용할 수 있습니다.
- **S3 분리**: 각 환경마다 S3 버킷을 분리하여 사용할 수 있습니다.

## 환경 설정

* 환경 생성
```bash
terraform workspace new dev
terraform workspace new prod
```

* 환경 확인
```bash
terraform workspace list
```

* 환경 변경
```bash
terraform workspace select dev
terraform workspace select prod
```

## 기본 명령어
Terraform을 사용하여 인프라를 관리하는 기본 명령어는 다음과 같습니다:

```bash
# 환경 설정 후 아래 명령어를 통해 인프라를 관리할 수 있습니다.
terraform plan -var="environment=dev"
terraform apply -var="environment=dev"
terraform destroy -var="environment=dev"
```
