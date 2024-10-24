#!/bin/bash
set -e  # 스크립트가 실패할 경우 즉시 종료

log_report() {
    echo "Error on line $1: Command failed"
}

trap 'log_report $LINENO' ERR  # 오류 발생 시 log_report 호출
cd iac/vagrant/vagrant-kubeadm
mkdir -p kubeadm
vagrant up
