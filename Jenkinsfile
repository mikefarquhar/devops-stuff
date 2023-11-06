lspipeline {
  agent {
    docker { image 'node:18.18.2-alpine3.17' }
  }
  stages {
    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
        sh 'ls dist'
      }
    }
  }
}
