# Vagrant-Kubespray

이 문서는 Vagrant와 kubespray를 사용하여 kubernetes 클러스터를 구성하는 방법을 설명합니다.

## 요구 사항

- MacOS Silicon
- Vagrant 설치
- VMware 설치

## 디렉토리 구조

- `Vagrantfile`: Vagrant 환경의 기본 설정 파일입니다.
- `vagrant-kubespray/`: Kubernetes 클러스터를 설정하기 위한 Vagrant 구성 파일이 포함된 디렉토리입니다.
- `scripts/`: Vagrant 환경을 설정하는 데 필요한 스크립트가 포함된 디렉토리입니다.

## Vagrantfile 설명

### 기본 설정

Vagrantfile은 Vagrant 환경을 설정하는 데 필요한 모든 구성을 포함하고 있습니다. 이 파일은 master 노드와 worker 노드, 그리고 ansible 서버를 정의합니다.

### ansible 서버

ansible 서버는 클러스터 구성을 관리하는 데 사용됩니다. 이 서버는 클러스터의 모든 노드에 대한 접근 권한을 가지며, 클러스터 구성을 위한 kubespray를 실행합니다.

### master 노드

master 노드는 Kubernetes 클러스터의 중심 노드입니다. kubespray를 통해서 구성 설정을 변경할 수 있습니다.

### worker 노드

worker 노드는 Kubernetes 클러스터의 작업자 노드입니다. kubespray를 통해서 구성 설정을 변경할 수 있습니다.

## 사용 방법

### 1. 사전 준비
1. Vagrant와 VMware를 설치합니다.
2. 터미널에서 `iac/vagrant/scripts/` 디렉토리로 이동합니다.
3. 다음 명령어를 실행하여 Vagrant로 Kubernetes 환경 구성을 시작합니다.

```bash
./vagrant-kubespray.sh
```

### 2. kubespray 환경 구성
여기서부터의 과정은 python virtualenv를 사용하여 진행해야 합니다.

1. ansible 서버에 접속하여 아래 작업을 수행합니다.

```bash
vagrant ssh ansible
su - root
python3.11 -m venv venv
source venv/bin/activate
cd /home/root/kubespray
pip install -r requirements.txt
```

2. 클러스터 구성을 위한 설정을 변경합니다.

```bash
# container_manager 확인
vi /vagrant/ansible/inventory/mycluster/group_vars/k8s_cluster/k8s-cluster.yml
container_manager: containerd

# etcd_deployment_type 구문 추가
vi /vagrant/ansible/inventory/mycluster/group_vars/k8s_cluster/etcd.yml
etcd_deployment_type: host
```

[참조 문서](https://github.com/kubernetes-sigs/kubespray/blob/master/docs/CRI/containerd.md)

3. 클러스터 구성을 시작합니다.

```bash
cd /home/root/kubespray
ansible-playbook -i /vagrant/ansible/inventory/mycluster/inventory.ini cluster.yml
```

4. 클러스터 구성이 완료되면 각 노드에 접속하여 클러스터 상태를 확인합니다.

* kubespray로 kubernetes 클러스터 구성을 완료한 ansible 서버에서 명령어 수행
```bash
# control1 노드에 접속
ssh root@192.168.33.11
kubectl get nodes

# control2 노드에 접속
ssh root@192.168.33.12
kubectl get nodes
```

5. 필요에 따라 kubeconfig 파일을 복사합니다.

```bash
cp /home/root/.kube/config /vagrant

```
