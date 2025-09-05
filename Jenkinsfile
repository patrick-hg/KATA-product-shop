pipeline {
    agent any
    
    stages {
        stage("build backend") {
            steps {
                echo 'Building Backend'
            }
        }

        stage("build Frontend") {
            steps {
                echo 'Building Frontend'
            }
        }
        
        stage("test") {
            steps {
                echo 'Running tests'
            }
        }
        stage("deploy") {
            steps {
                echo 'Deploying to containers...'
            }
        }
    }
}
