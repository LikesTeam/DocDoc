pipeline {
    agent any
    options {
        timeout(time: 1, unit: 'HOURS')
    }
    environment {
        SOURCECODE_JENKINS_CREDENTIAL_ID = 'donghun'
        SOURCE_CODE_URL = 'https://lab.ssafy.com/s08-final/S08P31B209.git'
        RELEASE_BRANCH = 'release-server'
        datasource = 'k8b209.p.ssafy.io'
        dbUser = credentials('dbUser')
        dbPwd = credentials('dbPwd')
        redisPwd = credentials('redisPwd')
        rest_api_key = credentials('rest_api_key')
        client_secret_key = credentials('client_secret_key')
        jwt_secret_key = credentials('jwt_secret_key')
        clientId = credentials('clientId')
        clientSecret = credentials('clientSecret')
        schema = 'devdb'
        admin_key = credentials('admin_key')
    }
    stages {

        stage('clone') {
            steps {
                git url: "$SOURCE_CODE_URL",
                    branch: "$RELEASE_BRANCH",
                    credentialsId: "$SOURCECODE_JENKINS_CREDENTIAL_ID"
                sh "ls -al"
            }
        }
    
        stage('backend dockerizing') {
            steps {
                sh "pwd"
                sh "cd ./server && docker build -t server ."
            }
        }

        stage('Deploy') {
            steps{
                sh "pwd"
                sh "docker-compose up -d --build"
            }
            post {
                success {
                    echo "docker run success"
                }

                failure {
                    echo "docker run failed"
                }
            }        
        }
    }
}
