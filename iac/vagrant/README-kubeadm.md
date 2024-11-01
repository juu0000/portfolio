# Vagrant 환경 설정 가이드

이 문서는 Vagrant를 사용하여 개발 환경을 설정하는 방법에 대한 설명서를 제공합니다. 이 프로젝트는 Kubernetes 클러스터를 구성하기 위해 Vagrant를 사용합니다.

## 요구 사항

- MacOS Silicon
- Vagrant 설치
- VMware 설치

## 디렉토리 구조

- `Vagrantfile`: Vagrant 환경의 기본 설정 파일입니다.
- `vagrant-kubeadm/`: Kubernetes 클러스터를 설정하기 위한 Vagrant 구성 파일이 포함된 디렉토리입니다.
- `scripts/`: Vagrant 환경을 설정하는 데 필요한 스크립트가 포함된 디렉토리입니다.

## Vagrantfile 설명

### 기본 설정

Vagrantfile은 Vagrant 환경을 설정하는 데 필요한 모든 구성을 포함하고 있습니다. 이 파일은 master 노드와 worker 노드를 정의합니다.

### master 노드

- **박스**: `bento/ubuntu-20.04-arm64`
- **네트워크**: 프라이빗 네트워크를 사용하여 IP 주소 `192.168.33.100`으로 설정됩니다.
- **프로비저닝**: 여러 개의 쉘 스크립트를 사용하여 초기 설정을 수행합니다.

### worker 노드

- **박스**: `bento/ubuntu-20.04-arm64`
- **네트워크**: 각 worker 노드는 `192.168.33.101` 및 `192.168.33.102`의 IP 주소를 가집니다.
- **프로비저닝**: master 노드와 유사한 초기 설정을 수행합니다.

## 스크립트 설명

- `vagrant-kubeadm.sh`: Vagrant 환경을 시작하고 Kubernetes 클러스터를 설정하는 스크립트입니다.

## 사용 방법

# Start of Selection
1. Vagrant와 VMware를 설치합니다.
2. 터미널에서 `iac/vagrant/scripts/` 디렉토리로 이동합니다.
3. 다음 명령어를 실행하여 Vagrant로 Kubernetes 환경 구성을 시작합니다.

   ```bash
   ./vagrant-kubeadm.sh
   ```

4. master 노드에 접속하여 아래 명령어를 수행합니다.

   ```bash
   vagrant ssh master
   ```

   a. 클러스터 초기화 및 확인

   ```bash
   su - root
   kubectl get nodes
   ```

   b. Calico 설치

   ```bash
   kubectl apply -f https://docs.projectcalico.org/manifests/calico.yaml
   ```

# End of Selection
```

## 참고 자료

- [Vagrant 공식 문서](https://www.vagrantup.com/docs)
- [Kubernetes 공식 문서](https://kubernetes.io/docs/home/)

