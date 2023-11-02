lepipeline {
  agent {
    docker { image 'node:18.18.2-alpine3.17' }
  }
  stages {
    stage('Build') {
      steps {
        sh 'node --version'
        sh 'ls -a'
      }
    }
  }
}
