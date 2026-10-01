pipeline {
    agent any

    environment {
        NEW_VERSION= '1.3.0'
        SERVER_CREDENTIALS = credentials('server-credentials')   
    }

    tools {
        maven 'Maven'
    }

    parameters {
        string(name: 'VERSION', defaultValue: '', description: 'version to deploy on prod')
        choice(name: 'VERSION', choices: ['1.1.0', '1.2.0', '1.3.0'], description: '')
        booleanParam(name: 'executeTests', defaultValue: true, description: '')
    }
    
    stages {
        stage("build backend") {
            steps {
                echo 'Building Backend app...'
            }
        }

        stage("build Frontend") {
            steps {
                echo 'Building Frontend app...'
            }
        }
        
        stage("test") {
            when {
                expression {
                    params.executeTests
                }
            }
            steps {
                echo 'Testing the application...'
            }
        }
        stage("deploy") {
            steps {
                echo 'Deploying to application...'
                withCredentials([
                    usernamePassword(credentials: 'server-credentials', usernameVariable: USER, passwordVariable: PWD)
                ]) {
                    
                    sh "some shell command ${USER} ${PWD}"
                }
            }
        }
    }
}
