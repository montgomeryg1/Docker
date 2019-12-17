    
pipeline {
  agent {
    kubernetes {
      label 'jcasc'  // all your pods will be named with this prefix, followed by a unique id
      idleMinutes 5  // how long the pod will live after no jobs have run on it
      yamlFile 'build-pod.yaml'  // path to the pod definition relative to the root of our project 
      defaultContainer 'maven'  // define a default container if more than a few stages use it, will default to jnlp container
    }
  }
  stages {
    stage('Build') {
      steps {  // no container directive is needed as the maven container is the default
        # sh "mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false"
        sh "mvn --version"  
      }
    }
    stage('Build Docker Image') {
      steps {
        container('docker') {  
          sh "docker build -t dockusgeorgus/jcasc:v1.0.1 ." 
          sh "docker push dockusgeorgus/jcasc:v1.0.1"
        }
      }
    }
  }
}
