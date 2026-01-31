pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/Nithees28/Complete-deployment.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nk-cars-app .'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
}
